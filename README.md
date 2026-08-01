# Chris Simmons' Claude Tools Marketplace

Marketplace for Chris's Claude Code tools.

## Marketplace Installation

Add this marketplace to Claude Code:

``` plaintext
/plugin marketplace add ChrisSimmons/claude-tools
```

Currently no plugins are published here. Agent rules and skills are personal and live locally instead (see below), so nothing needs installing from this repo.

## Agent rules

Agent rules used to be served from a public MCP server (`mcp-servers/public`, now retired). They're personal and don't need a live network dependency, so they live locally in `~/.claude/rules/` and load automatically.

| File                            | Loaded                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `~/.claude/rules/general.md`     | Every session, unconditionally                                                       |
| `~/.claude/rules/no-ai-slop.md`  | Every session, unconditionally                                                       |
| `~/.claude/rules/dotnet.md`      | Only when Claude reads a `*.cs`, `*.sln`, or `*.csproj` file (`paths:` frontmatter)   |

## Skills

Personal skills also live locally, in `~/.claude/skills/`, rather than as a published plugin.

| Skill                  | Description                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `prep-for-review`      | Prepare the current branch for code review: run tests, check formatting, resolve TODOs, and reconcile documentation              |
| `refresh-dotnet-rules` | Reload `~/.claude/rules/dotnet.md` mid-session. Useful when discussing .NET conventions without having recently touched a matching file. |

Both `~/.claude/rules/` and `~/.claude/skills/` are tracked in [yadm](https://yadm.io/).
