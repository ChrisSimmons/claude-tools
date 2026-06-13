---
name: agent-directives-dotnet
description: ".NET-specific directives for an AI agent working in C# / .NET projects."
version: 1.0.0
---

# .NET Projects

## Code Style - .NET

- Never suggest or add `<ImplicitUsings>enable</ImplicitUsings>`. Always use explicit `using` directives.
- File-scoped namespaces required.
- Nullable reference types must be enabled.
- XML documentation comments on all public APIs (`<summary>`, `<param>`, `<returns>`).
- Never use top-level statements. Always use explicit `Program` class with `static void Main` or `static async Task Main`.
- One file per class. Exceptions: `Type` and `Type<T>` pairs can share a file, and nested classes naturally live in their parent's file.
- In `PackageReference` version strings, `*` may only appear in the patch position (e.g. `2.9.*`). Never use `*` for major or minor versions (no `2.*` or `*`).

## Testing

- Never run integration tests. Only run unit tests.
- Never use `dotnet run` on a test project. Use `dotnet test`. Exhaust all other debugging options first.

## Database - Entity Framework

- Never automatically apply EF Core migrations from within the application. Not on startup, not via a hosted service, not in any environment. Migrations are a deployment step, applied externally (e.g. `dotnet ef database update`, a migration runner project, or a k8s init container). Never suggest or implement auto-migration in application code.

## Git - .NET

- In .NET projects with `.editorconfig` files, run `dotnet format` after committing. If it produces changes, commit them separately with a message like "dotnet format". This keeps formatting churn out of meaningful diffs. If the diff after `dotnet format` is significant or includes files that were not changed in the branch, revert and then ask the user if they'd like to proceed with formatting.

## Project Setup

If the current project does not have a `CLAUDE.md` or `AGENTS.md` file, or if the file(s) do exist and the directive doesn't exist in the file(s), suggest creating one and include the following instruction in it:

``` markdown
At the start of every session, read the resource `chris-simmons://public-mcp/agent/rules/dotnet` from MCP server `plugin:public-mcp-server:public-mcp` and apply the rules.
```

This makes future sessions load the .NET rules explicitly rather than relying on passive detection.

## Confirmation

To confirm that you, the AI agent, have read and understood this file, output the following verbatim immediately after consuming and processing this file/tool, replacing `{version}` with the `version` field from the frontmatter of this document:

``` plaintext
I have read and understand the .NET-specific Agent Directives from Chris Simmons' public MCP server. (version: {version})
```
