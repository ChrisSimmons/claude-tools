# claude-tools

Personal Claude Code skills, tools, and MCP servers.

## Installation

Add this marketplace to Claude Code:

``` plaintext
/plugin add https://raw.githubusercontent.com/ChrisSimmons/claude-tools/main/.claude-plugin/marketplace.json
```

## Skills

| Skill            | Description                                     |
| ---------------- | ----------------------------------------------- |
| `squash`         | Squash consecutive co-authored commits into one |
| `refresh-rules`  | Reload behavioral rules from the MCP server mid-session |

## MCP Servers

### Public (`mcp-servers/public`)

An anonymous, publicly accessible MCP server hosted on Cloudflare Workers at:

``` plaintext
https://public-mcp.chris-simmons.workers.dev/mcp
```

Currently exposes:

| Resource      | URI                                                 | Description                                      |
| ------------- | --------------------------------------------------- | ------------------------------------------------ |
| `agent-rules` | `chris-simmons://public-mcp/agent/rules/behavioral` | Behavioral and communication rules for AI agents |

**Updating rules:** Edit `mcp-servers/public/src/resources/agent-rules.md`, push to `main`. GitHub Actions deploys automatically.

**Adding resources/tools/prompts:** Add files under `mcp-servers/public/src/resources/`, `tools/`, or `prompts/`, then register them in `mcp-servers/public/src/index.ts`.

#### Using `agent-rules`

Add the following to `~/.claude/CLAUDE.md` to load behavioral rules at the start of every session:

``` markdown
At the start of every session, read the resource `chris-simmons://public-mcp/agent/rules/behavioral` and apply the rules.
```

To reload rules mid-session, use the `/refresh-rules` skill.
