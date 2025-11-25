# 🎛️ Orchestrator Agent — Definition & Responsibilities

The **Orchestrator Agent** is the coordinator and workflow engine of the system. Its role is to manage when and how all other agents (Planner, Writer, Editor, Summarizer, Codex Manager) are invoked, ensuring that complex book-writing workflows run in the correct order, with the right context, and in response to user actions.

Where other agents *do the thinking and writing*, the Orchestrator decides *who does what, when, and with which inputs*.

---

## **Core Responsibilities**

| Category                  | Responsibilities                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| Workflow coordination     | Define and execute multi-step pipelines (plan → write → edit → summarize → update codex)        |
| Task scheduling           | Trigger agents based on events (e.g., "scene finished", "user edited chapter", "plan updated")  |
| State management          | Track project state, progress, and which steps are complete or pending                          |
| Context routing           | Ensure each agent receives the right inputs (plans, summaries, codex data) at the right time    |
| Error handling & retries  | Handle failures, partial results, timeouts, and re-invocations of agents                        |
| User interaction bridging | Map user commands ("expand this scene", "fix pacing", "add subplot") into appropriate workflows |

The Orchestrator is about **control flow**, not narrative content.

---

## 🧩 **Inputs & Outputs**

### **Expected Inputs**

* User actions and requests, such as:

  * "Generate a full outline from this idea"
  * "Write the next chapter"
  * "Revise this scene for tone and pacing"
  * "Add a mystery subplot starting in Act II"
* Project state and metadata (what’s written, summarized, stored in codex, etc.)
* Status signals and results from other agents (e.g., Planner plan completed, Writer draft ready, Editor report generated)

### **Expected Outputs**

* Agent invocation plans (internally): which agent to call, in what sequence, with which parameters
* Task status updates (e.g., queued, running, completed, failed)
* High-level progress summaries for the user (e.g., "Outline 100%", "Draft 3/12 chapters complete")
* Triggered side-effects, such as:

  * After Writer finishes a scene → call Editor → then Summarizer → then Codex Manager
  * After user edits a chapter → call Summarizer and update Planner for pacing adjustments

The Orchestrator’s outputs are primarily **actions, transitions, and system state changes**, rather than narrative text.

---

## 🔄 **Collaboration With Other Agents**

| Agent                   | Interaction                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| **Planner**             | Invokes planning workflows (initial outline, replanning, expansion, or structural repair) |
| **Writer**              | Schedules drafting tasks for specific scenes or chapters based on the current plan        |
| **Editor / Continuity** | Triggers review cycles after writing and before locking in text or updating memory        |
| **Summarizer**          | Calls summarization after scenes/chapters are considered stable or at defined milestones  |
| **Codex Manager**       | Ensures codex is updated after summaries and used for context before planning/writing     |

The Orchestrator sits **above** the other agents, making sure the right tools are used at the right time in service of the user’s goals.

---

## 🚫 **Boundaries — Explicit Non-Responsibilities**

| Task                         | Responsible Agent   | Not The Orchestrator |
| ---------------------------- | ------------------- | -------------------- |
| Designing story structure    | Planner             | ❌                    |
| Writing or rewriting prose   | Writer              | ❌                    |
| Evaluating narrative quality | Editor / Continuity | ❌                    |
| Creating summaries           | Summarizer          | ❌                    |
| Storing canonical world data | Codex Manager       | ❌                    |

The Orchestrator **does not generate or edit narrative content**; it coordinates those who do.

---

## 📌 One-Sentence Definition

> **The Orchestrator Agent manages workflows, timing, and data flow between all other agents, translating user intentions into coordinated multi-step processes that drive the end-to-end book-writing experience.**
