# Chris Simmons' Claude Tools Marketplace

Marketplace for Chris's Claude Code skills, tools, and MCP servers.

## Marketplace Installation

Add this marketplace to Claude Code:

``` plaintext
/plugin marketplace add ChrisSimmons/claude-tools
```

## Skills

| Skill           | Description                                             |
| --------------- | ------------------------------------------------------- |
| `refresh-rules` | Reload general rules from the MCP server mid-session |

## MCP Servers

### Public (`mcp-servers/public`)

An anonymous, publicly accessible MCP server hosted on Cloudflare Workers at:

``` plaintext
https://public-mcp.chris-simmons.workers.dev/mcp
```

Currently exposes:

| Resource             | URI                                                 | Description                                |
| -------------------- | --------------------------------------------------- | ------------------------------------------ |
| `agent-rules`        | `chris-simmons://public-mcp/agent/rules/general` | General rules for AI agents                |
| `agent-rules-dotnet` | `chris-simmons://public-mcp/agent/rules/dotnet`     | .NET-specific rules for C# / .NET projects |

#### Updating resources

Edit the relevant file under `mcp-servers/public/src/resources/`, push to `main`. GitHub Actions deploys automatically.

| Resource             | Source file                                              |
| -------------------- | -------------------------------------------------------- |
| `agent-rules`        | `mcp-servers/public/src/resources/agent-rules.md`        |
| `agent-rules-dotnet` | `mcp-servers/public/src/resources/agent-rules-dotnet.md` |

#### Using `agent-rules`

Add the following to `~/.claude/CLAUDE.md` to load general rules at the start of every session:

``` markdown
At the start of every session, read the resource `chris-simmons://public-mcp/agent/rules/general` from MCP server `plugin:public-mcp-server:public-mcp` and apply the rules. If at any point during the session you read or edit a `*.sln` or `*.csproj` file, also read `chris-simmons://public-mcp/agent/rules/dotnet` from the same server and apply those rules (do this only once per session).
```

To reload rules mid-session, use the `/refresh-rules` skill.

#### Using `agent-rules-dotnet`

.NET rules load passively (see above). Once loaded, the rules will prompt you to add an explicit directive to the project's `CLAUDE.md` for future sessions:

``` markdown
At the start of every session, read the resource `chris-simmons://public-mcp/agent/rules/dotnet` from MCP server `plugin:public-mcp-server:public-mcp` and apply the rules.
```

#### Adding resources/tools/prompts

Add files under `mcp-servers/public/src/resources/`, `tools/`, or `prompts/`, then register them in `mcp-servers/public/src/index.ts`.
