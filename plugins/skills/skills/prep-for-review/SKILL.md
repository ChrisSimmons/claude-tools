---
name: prep-for-review
description: Prepare the current branch for code review.
---

# Prepare the current branch for code review

It looks like principal work on this branch is done. Let's prepare it for review.

- If we've been working on a default branch, just consider the changes we've made in this session. If we're on a feature branch, consider all the changes in the branch.
- If the app has any tests, run them and make sure they pass. If there are any failures, stop and fix them before proceeding.
- Do not make changes to any code that was not changed in this session or on this branch.
  - However, if you feel that there is a compelling reason to make a change to code outside of the current branch/session, raise that issue in your response.  We'll decide what to do about it together.
- Make sure the code is well-formatted and adheres to any style guidelines your team follows. If you have a linter or formatter, run it and fix any issues.
- If there are any TODO comments in the code, either resolve them or create issues for them and link to those issues in the code.
- Reconcile the changes in the current branch (or the changes made in this session) with the documentation, ensuring consistency and accuracy. If there are any discrepancies, update the documentation to reflect the current state of the code.
- If we're currently working on an issue and/or a PR, make sure that the description for the issue and/or PR is consistent with the work done on the branch.
