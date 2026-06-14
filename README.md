# Chris Simmons' Claude Tools Marketplace

Marketplace for Chris's Claude Code skills, tools, and MCP servers.

## Marketplace Installation

Add this marketplace to Claude Code:

``` plaintext
/plugin marketplace add ChrisSimmons/claude-tools
```

## MCP Servers

### Public (`mcp-servers/public`)

An anonymous, publicly accessible MCP server hosted on Cloudflare Workers at:

``` plaintext
https://public-mcp.chris-simmons.workers.dev/mcp
```

#### Resources

| Resource                 | URI                                                 | Description                                |
| ------------------------ | --------------------------------------------------- | ------------------------------------------ |
| `agent-rules`            | `chris-simmons://public-mcp/agent/rules/general`    | General rules for AI agents                |
| `agent-rules-no-ai-slop` | `chris-simmons://public-mcp/agent/rules/no-ai-slop` | Rules for avoiding AI-generated slop       |
| `agent-rules-dotnet`     | `chris-simmons://public-mcp/agent/rules/dotnet`     | .NET-specific rules for C# / .NET projects |

#### Skills

| Skill                  | Description                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `refresh-rules`        | Reload global rules from the MCP server mid-session                                                                     |
| `refresh-dotnet-rules` | Load/Reload .NET-specific rules from the MCP server. Useful if the agent was unable to passively detect a .NET project. |

#### Usage

Add the following to `~/.claude/CLAUDE.md` to load rules at the start of every session:

``` markdown
At the start of every session, read the following resources from MCP server `plugin:public-mcp-server:public-mcp` and apply the rules:

- `chris-simmons://public-mcp/agent/rules/general`
- `chris-simmons://public-mcp/agent/rules/no-ai-slop`

If at any point during the session you read or edit a `*.sln` or `*.csproj` file, also read `chris-simmons://public-mcp/agent/rules/dotnet` from the same server and apply those rules (do this only once per session).
```

To reload global rules mid-session, use `/refresh-rules`. For .NET projects, use `/refresh-dotnet-rules`.

Once the dotnet rules load, they will prompt you to add an explicit directive to the project's `CLAUDE.md` for future sessions:

``` markdown
At the start of every session, read the resource `chris-simmons://public-mcp/agent/rules/dotnet` from MCP server `plugin:public-mcp-server:public-mcp` and apply the rules.
```

#### Updating resources

Edit the relevant file under `mcp-servers/public/src/resources/`, push to `main`. GitHub Actions deploys automatically.

| Resource                 | Source file                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `agent-rules`            | `mcp-servers/public/src/resources/agent-rules.md`            |
| `agent-rules-no-ai-slop` | `mcp-servers/public/src/resources/agent-rules-no-ai-slop.md` |
| `agent-rules-dotnet`     | `mcp-servers/public/src/resources/agent-rules-dotnet.md`     |

#### Adding resources/tools/prompts

Add files under `mcp-servers/public/src/resources/`, `tools/`, or `prompts/`, then register them in `mcp-servers/public/src/index.ts`.

## Skills (`plugins/skills`)

Personal skills collection.

### Available Skills

| Skill             | Description                              |
| ----------------- | ---------------------------------------- |
| `prep-for-review` | Prepare the current branch for code review: run tests, check formatting, resolve TODOs, and reconcile documentation |

### Invoking Skills

Use `/prep-for-review` to run the skill.
