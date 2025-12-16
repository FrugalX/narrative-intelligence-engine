# 🧩 Multi-Agent Architecture Overview

This document describes how the seven core agents — **Ideation, Planner, Writer, Editor, Summarizer, Codex Manager, Orchestrator** — work together as a coordinated system to plan, write, and refine long-form books.

The goal is to provide a clear mental model and implementation guide for how information and control flow through the architecture.

---

## 1. High-Level Concept

At a high level, the system behaves like a virtual writing room composed of specialized collaborators:

* The **Ideation Agent** explores and generates raw story concepts and directions.
* The **Planner** designs the narrative blueprint.
* The **Writer** turns plans into prose.
* The **Editor** enforces quality and continuity.
* The **Summarizer** compresses and structures memory.
* The **Codex Manager** maintains canonical story knowledge.
* The **Orchestrator** coordinates the whole process based on user intent.

These agents do **not** operate in isolation. They exchange structured artifacts (plans, summaries, codex records, reports) and rely on shared memory layers (relational + vector + summaries) to maintain coherence across hundreds of pages.

---

## 2. Agent Roles at a Glance

| Agent                   | Primary Role                                                           | Key Outputs                                                                            |
| ----------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Ideation** | Explores and generates story concepts and creative directions | Story premises, themes, hooks, concept alternatives |
| **Planner**             | Designs narrative structure and progression                            | Book/act/chapter/scene plans in structured form (JSON/YAML)                            |
| **Writer**              | Generates narrative prose from scene plans                             | Scene/chapter text, alternate drafts                                                   |
| **Editor / Continuity** | Reviews and refines prose for alignment, consistency, and readability  | Annotated text, issues reports, suggested revisions                                    |
| **Summarizer**          | Compresses written content into layered summaries and structured facts | Micro- and detailed summaries, fact extraction, embeddable chunks                      |
| **Codex Manager**       | Maintains canonical story bible and serves knowledge to other agents   | Entity records (characters, locations, events, rules), query responses, conflict flags |
| **Orchestrator**        | Coordinates workflows and data flow between agents                     | Task pipelines, state transitions, agent invocations, progress tracking                |

---

## 3. Core Data & Memory Artifacts

Across the agents, a few core artifact types recur:

* **Plan Artifacts** (Planner → others)

  * Book outline, acts, chapters, scenes
  * Scene metadata: POV, setting, conflict, emotional beat, outcome, dependencies
* **Prose Artifacts** (Writer → Editor → Summarizer)

  * Scene/chapter text, variants, revisions
* **Review Artifacts** (Editor → Writer/Orchestrator)

  * Inline annotations, issues list (continuity, style, pacing), suggested rewrites
* **Summary Artifacts** (Summarizer → Planner/Codex/Orchestrator)

  * Multi-level summaries, extracted facts, embeddable units for retrieval
* **Codex Artifacts** (Codex Manager → all agents)

  * Canonical entities (characters, locations, items, organizations)
  * Events and timelines
  * World rules and constraints
  * Conflict/ambiguity flags

These artifacts are stored across:

* **Relational storage** (e.g., PostgreSQL) for structured records (plans, codex, issues, workflow state).
* **Vector storage** (e.g., pgvector + HNSW) for semantic retrieval of summaries and text.
* **Document storage** for raw prose and versioned drafts.

---

## 4. Typical Workflow: From Idea to Full Outline

**User action:** Provide a high-level idea/prompt, plus optional constraints (genre, tone, POV, target length, etc.).

**Workflow (managed by Orchestrator):**

1. **Orchestrator → Ideation**
   * Input: user prompt + creative constraints.
   * Output: refined story concept(s), themes, and high-level direction.

2. **Orchestrator → Planner**
   * Input: selected concept from Ideation + constraints + any existing codex/plan data.
   * Output: book-level plan (acts → chapters → scenes).

3. **Planner → Codex Manager**

   * Codex Manager ingests high-level entities: initial cast list, locations, world rules, key events.

4. **Orchestrator**

   * Marks planning phase complete.
   * Presents outline to user for review and possible modifications.

At the end of this workflow, the system has a **navigable narrative blueprint** and an initial **story bible**.

---

## 5. Typical Workflow: Scene Writing Loop

Once a plan exists, most of the work happens in a **scene-level loop**.

**User action:** "Write the next scene" or Orchestrator decides it’s time based on plan progress.

**Workflow:**

1. **Orchestrator → Planner (optional refinement)**

   * If needed, Planner expands or refines the scene plan (e.g., clarify beats or emotional goals).

2. **Orchestrator → Codex Manager (context fetch)**

   * Retrieves relevant canonical info: character traits, backstory, recent events, world rules.

3. **Orchestrator → Writer**

   * Input: scene plan + codex facts + stylistic settings.
   * Output: scene/chapter prose.

4. **Orchestrator → Editor**

   * Input: Writer’s prose + relevant slice of plan + codex facts.
   * Output: annotated text, issues list, possibly light inline edits.

5. **Orchestrator → Writer (revisions)**

   * Writer optionally generates a revised version based on Editor feedback.

6. **Orchestrator → Summarizer**

   * Input: final or stable scene text + plan context.
   * Output: micro and detailed summaries, extracted facts.

7. **Summarizer → Codex Manager**

   * Codex is updated with new or changed facts, events, or relationships.

8. **Summarizer → Planner (optional)**

   * Provides updated summaries that Planner can use to adjust pacing, arcs, or upcoming scenes.

This loop repeats for each scene or chapter, maintaining **tight integration** between what was planned, what was written, and what the system remembers.

---

## 6. Typical Workflow: User Edits & Replanning

The system must also adapt when the **human author edits text or changes direction**.

**User action:** Manually edit a scene/chapter, or request changes like "slow down this reveal" or "introduce a new subplot".

**Workflow:**

1. **User → Orchestrator**

   * Orchestrator detects a user edit event or receives a high-level request.

2. **Orchestrator → Editor**

   * Editor reviews the new/changed text for continuity and flags issues.

3. **Orchestrator → Summarizer**

   * Summarizer re-generates summaries and facts for the updated text.

4. **Summarizer → Codex Manager**

   * Codex updates canonical records, resolves or flags conflicts.

5. **Orchestrator → Planner (replanning)**

   * Planner adjusts downstream scenes, arcs, or pacing based on the new reality of the story.

This makes the overall plan **alive and adaptive**, able to respond to human intervention without losing coherence.

---

## 7. Interaction Diagram (Textual)

A simplified, conceptual flow for a single scene:

```text
User → Orchestrator
  → Ideation (concept exploration)
  → Planner (scene blueprint)
    → Codex Manager (update high-level expectations)
  → Codex Manager (fetch relevant facts)
  → Writer (draft scene)
  → Editor (review & refine)
    → Writer (optional revisions)
  → Summarizer (summaries + facts)
    → Codex Manager (update story bible)
    → Planner (update high-level understanding)
  → Orchestrator (mark scene complete, move to next task)
```

This pattern extends to acts, chapters, and global revisions.

---

## 8. Responsibility Separation Summary

The architecture deliberately enforces **clear boundaries**:

* **Ideation**: Explores *what the story could be* through brainstorming and concept generation.
* **Planner**: Decides *what* should happen and *why* at a structural level.
* **Writer**: Decides *how it reads* as narrative prose.
* **Editor**: Judges and refines *how well it works* in terms of alignment, continuity, and quality.
* **Summarizer**: Distills *what happened* into compact, queryable memory.
* **Codex Manager**: Maintains *what is true* in the story world.
* **Orchestrator**: Controls *who runs when* and *how data moves* between them.

No single agent owns the entire process; instead, they collaborate through well-defined artifacts and workflows.

---

## 9. Implementation Notes (Optional Hooks)

* Each agent can be implemented as a **configurable LLM-driven service** (e.g., via YAML configs for prompts, tools, retrieval strategies).
* The Orchestrator executes **pipelines** that:

  * Load relevant context (plans, codex facts, prior summaries).
  * Call one or more agents in sequence.
  * Persist all intermediate artifacts (for traceability and debugging).
* Observability is critical:

  * Log which agent ran with which inputs and outputs.
  * Enable replay of workflows for debugging and experimentation.

This overview is intended as a stable conceptual foundation that can evolve as the system’s capabilities grow.
