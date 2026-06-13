# claude-tools

Personal Claude Code skills, tools, and MCP servers.

## Skills

| Skill    | Description                                     |
| -------- | ----------------------------------------------- |
| `squash` | Squash consecutive co-authored commits into one |

## MCP Servers

### Public (`mcp-servers/public`)

An anonymous, publicly accessible MCP server hosted on Cloudflare Workers at:

```
https://public-mcp.chris-simmons.workers.dev/mcp
```

Currently exposes:

| Resource      | URI                     | Description                                   |
| ------------- | ----------------------- | --------------------------------------------- |
| `agent-rules` | `chris-simmons://public-mcp/agent/rules/behavioral` | Behavioral and communication rules for AI agents |

**Updating rules:** Edit `mcp-servers/public/src/resources/agent-rules.md`, push to `main`. GitHub Actions deploys automatically.

**Adding resources/tools/prompts:** Add files under `mcp-servers/public/src/resources/`, `tools/`, or `prompts/`, then register them in `mcp-servers/public/src/index.ts`.

## Installation

Add this marketplace to Claude Code:

```
/plugin add https://raw.githubusercontent.com/ChrisSimmons/claude-tools/main/.claude-plugin/marketplace.json
```
