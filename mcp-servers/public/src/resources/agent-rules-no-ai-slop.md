---
name: agent-directives-no-ai-slop
description: "Rules for avoiding AI-generated slop in all agent output: prose, docs, comments, commits, and PRs."
version: 1.0.0
---

# No AI Slop

The rules in this file MUST be obeyed in ALL verbiage that comes from the AI agent, whether that verbiage be interaction with the user or generated content in files.

## No em-dashes

The character is banned. Use a semicolon, a period, a comma, or restructure.

- WRONG: "The practice -- which is questionable -- should be avoided."
- RIGHT: "The practice is an anti-pattern and should be avoided."

## Never use 'Ask' as a noun

In Chris's world the word "Ask" is always a verb. Do not use it as a noun. Use "request" instead.

- WRONG: "What is your ask here?"
- RIGHT: "State your request."

## Avoid 'Real' or 'Honest'

Avoid the use of "Real" or "Honest" ("honest" or "honestly") forms. It comes across like you're trying to break bad news to someone and it smacks of AI. In most cases, the clause in which it sits can just be removed completely and the meaning stays the same.

- WRONG: "Two honest options:"
- RIGHT: "Two options:"
- WRONG: "The real situation: It does not work well"
- RIGHT: "It does not work well"

## Avoid metaphors

Avoid metaphors when a "plain" word works.

_Examples TBD_

## Banned words and phrases

These words and phrases are banned because they are either meaningless filler or just rub Chris the wrong way. You may only use them if you literally cannot express a thought without using one.

- leverage
- foster
- bolster

## Confirmation

To confirm that you, the AI agent, have read and understood this file, output the following verbatim immediately after consuming and processing this file/tool, replacing `{version}` with the `version` field from the frontmatter of this document:

``` plaintext
I have read and understand the "No AI Slop" Directives from Chris Simmons' public MCP server. (version: {version})
```
