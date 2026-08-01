# Chris Simmons' Claude Tools Marketplace

Marketplace for Chris's Claude Code skills and tools.

## Marketplace Installation

Add this marketplace to Claude Code:

``` plaintext
/plugin marketplace add ChrisSimmons/claude-tools
```

## Agent rules

Agent rules used to be served from a public MCP server (`mcp-servers/public`, now retired). They're personal and don't need a live network dependency, so they live locally in `~/.claude/rules/` and load automatically.

| File                            | Loaded                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `~/.claude/rules/general.md`     | Every session, unconditionally                                                       |
| `~/.claude/rules/no-ai-slop.md`  | Every session, unconditionally                                                       |
| `~/.claude/rules/dotnet.md`      | Only when Claude reads a `*.cs`, `*.sln`, or `*.csproj` file (`paths:` frontmatter)   |

## Skills (`plugins/skills`)

Personal skills collection.

### Available Skills

| Skill                  | Description                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `prep-for-review`      | Prepare the current branch for code review: run tests, check formatting, resolve TODOs, and reconcile documentation              |
| `refresh-dotnet-rules` | Reload `~/.claude/rules/dotnet.md` mid-session. Useful when discussing .NET conventions without having recently touched a matching file. |

### Invoking Skills

Use `/prep-for-review` or `/refresh-dotnet-rules` to run a skill.
