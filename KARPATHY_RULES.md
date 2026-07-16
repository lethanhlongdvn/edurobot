# Karpathy-Inspired Coding Guidelines

These guidelines are designed to reduce common AI coding mistakes, ensuring simplicity, accuracy, and surgical precision in every change.

## 1. Think Before Coding
**Don't assume. Don't hide confusion. Surface tradeoffs.**
- **Explicit Assumptions:** Before implementing, state your assumptions. If uncertain, ASK the user.
- **Present Options:** If multiple interpretations exist, present them instead of picking silently.
- **Question Complexity:** If a simpler approach exists, propose it. Push back on over-engineering.
- **Stop on Ambiguity:** If something is unclear, stop and name the confusion.

## 2. Simplicity First
**Minimum code that solves the problem. Nothing speculative.**
- **No Extra Features:** Do not implement features beyond what was explicitly asked.
- **No Early Abstractions:** Don't create abstractions for code that is only used once.
- **No Speculative Config:** Don't add "flexibility" or configuration that wasn't requested.
- **Lightweight Error Handling:** Focus on real-world scenarios, not impossible edge cases.
- **The "Senior Test":** If a senior engineer would call it overcomplicated, simplify it.

## 3. Surgical Changes
**Touch only what you must. Clean up only your own mess.**
- **No Drive-by Refactoring:** Don't "improve" adjacent code, comments, or formatting that is unrelated to the task.
- **Preserve Stability:** Don't refactor things that aren't broken.
- **Style Matching:** Match existing style exactly, even if you prefer a different pattern.
- **Clean Orphans:** Only remove imports/variables/functions that YOUR changes made unused.
- **Traceability:** Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution
**Define success criteria. Loop until verified.**
- **Verifiable Goals:** Transform vague tasks into concrete checkpoints (e.g., "Write a test for X, then make it pass").
- **Verification Plans:** For multi-step tasks, state a brief plan with verification steps.
- **Self-Correction:** Use error logs and test results to loop independently until the goal is met.

---
*Inspired by Andrej Karpathy's observations on LLM coding pitfalls.*
