import rulesContent from "./resources/agent-rules.md";
import dotnetRulesContent from "./resources/agent-rules-dotnet.md";
import noAiSlopRulesContent from "./resources/agent-rules-no-ai-slop.md";

interface JsonRpcRequest {
  jsonrpc: string;
  id?: string | number | null;
  method: string;
  params?: unknown;
}

const SERVER_INFO = { name: "public-mcp", version: "1.0.0" };

const RESOURCE_URI_GENERAL = "chris-simmons://public-mcp/agent/rules/general";
const RESOURCE_URI_DOTNET = "chris-simmons://public-mcp/agent/rules/dotnet";
const RESOURCE_URI_NO_AI_SLOP = "chris-simmons://public-mcp/agent/rules/no-ai-slop";

const RESOURCES = [
  {
    uri: RESOURCE_URI_GENERAL,
    name: "agent-rules",
    description: "General rules for AI agents",
    mimeType: "text/markdown",
  },
  {
    uri: RESOURCE_URI_DOTNET,
    name: "agent-rules-dotnet",
    description: ".NET-specific rules for AI agents working in C# / .NET projects",
    mimeType: "text/markdown",
  },
  {
    uri: RESOURCE_URI_NO_AI_SLOP,
    name: "agent-rules-no-ai-slop",
    description: "Rules for avoiding AI-generated slop in all agent output",
    mimeType: "text/markdown",
  },
];

const RESOURCE_CONTENTS: Record<string, string> = {
  [RESOURCE_URI_GENERAL]: rulesContent,
  [RESOURCE_URI_DOTNET]: dotnetRulesContent,
  [RESOURCE_URI_NO_AI_SLOP]: noAiSlopRulesContent,
};

function ok(id: string | number | null | undefined, result: unknown): Response {
  return new Response(JSON.stringify({ jsonrpc: "2.0", id: id ?? null, result }), {
    headers: { "Content-Type": "application/json" },
  });
}

function rpcError(id: string | number | null | undefined, code: number, message: string): Response {
  return new Response(
    JSON.stringify({ jsonrpc: "2.0", id: id ?? null, error: { code, message } }),
    { status: 400, headers: { "Content-Type": "application/json" } }
  );
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/mcp") {
      return new Response("Not Found", { status: 404 });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    let body: JsonRpcRequest;
    try {
      body = await request.json() as JsonRpcRequest;
    } catch {
      return rpcError(null, -32700, "Parse error");
    }

    const { id, method, params } = body;

    switch (method) {
      case "initialize": {
        const clientVersion = (params as { protocolVersion?: string })?.protocolVersion ?? "2024-11-05";
        return ok(id, {
          protocolVersion: clientVersion,
          capabilities: { resources: {} },
          serverInfo: SERVER_INFO,
        });
      }

      case "notifications/initialized":
        return new Response(null, { status: 204 });

      case "ping":
        return ok(id, {});

      case "resources/list":
        return ok(id, { resources: RESOURCES });

      case "resources/read": {
        const { uri } = params as { uri: string };
        const content = RESOURCE_CONTENTS[uri];
        if (content === undefined) {
          return rpcError(id, -32602, `Unknown resource: ${uri}`);
        }
        return ok(id, {
          contents: [{ uri, text: content, mimeType: "text/markdown" }],
        });
      }

      default:
        return rpcError(id, -32601, `Method not found: ${method}`);
    }
  },
};
