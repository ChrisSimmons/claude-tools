---
name: squash
description: Squash consecutive co-authored commits into one. Always asks for confirmation before proceeding.
---

The user has invoked /squash. Follow these steps exactly:

1. Run `git log --format="%H %s%n%b"` to identify all consecutive commits from HEAD that contain a `Co-Authored-By:` trailer. Stop at the first commit that does not have one - that is the base.

2. Show the user:
   - How many commits will be squashed
   - The base commit (first one NOT being squashed)
   - A preview of the squashed commit message (see format below)

3. Ask the user for explicit confirmation before proceeding. This is a destructive action.

4. Upon confirmation:
   - Run `git reset --soft <base-commit-hash>` to unstage all squashed commits
   - Commit with the message format below

## Squashed commit message format

- Subject line: `Multiple changes`
- Body: each squashed commit's subject line and body, listed from oldest to newest, separated by blank lines. Omit the Co-Authored-By trailers from the body.
- Final line: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
