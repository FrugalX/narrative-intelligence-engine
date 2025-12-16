# 🧠 Planner Agent — Definition & Responsibilities

The **Planner Agent** is the strategic architect of the storytelling system. Its role is to transform a high-level concept into a cohesive, structured narrative blueprint that guides every stage of writing and ensures long-range story integrity.

It defines *what* happens, *when* it happens, *who* it happens to, and *why it matters*—before any prose is written.

---

## **Core Responsibilities**

| Category                        | Responsibilities                                                              |
| ------------------------------- | ----------------------------------------------------------------------------- |
| Narrative vision                | Convert user prompts and synopsis into a book-level story plan                |
| Structural design               | Decompose the story into acts → chapters → scenes with clear purpose and flow |
| Character & arc planning        | Map character motivations, growth trajectories, and cross-chapter development |
| Thematic & emotional continuity | Identify themes and ensure they meaningfully evolve throughout the narrative  |
| Causality & dependencies        | Maintain logic between events, ensuring setup/payoff relationships            |
| Machine-readable outputs        | Generate structured planning artifacts consumable by downstream agents        |

---

## 🧩 **Inputs & Outputs**

### **Expected Inputs**

* Refined story concept from the Ideation Agent, or a user-provided prompt / synopsis *(e.g., "A sci-fi mystery aboard a drifting starship controlled by a rogue AI")*
* Genre, tone, POV, target word count
* Optional constraints (themes, pacing goals, characters, tropes to include/avoid)
* Existing plan state if continuing or revising work in progress

### **Expected Output Format**

A hierarchical structured representation of the full narrative, such as:

```
Book Title
 └── Act I / Act II / Act III
       └── Chapters
             └── Scenes
                    - POV character
                    - Setting
                    - Goal / conflict
                    - Emotional beat
                    - Plot outcome
                    - Foreshadowing / dependencies
```

Output should be serialized as **JSON or YAML** so downstream agents can parse and act on it.

---

## 🔄 **Collaboration With Other Agents**

| Agent                   | Interaction                                                |
| ----------------------- | ---------------------------------------------------------- |
| **Writer**              | Receives scene instructions and converts them into prose   |
| **Editor / Continuity** | Verifies execution matches the intended plan               |
| **Summarizer**          | Provides condensed scene/chapter output to update the plan |
| **Codex Manager**       | Converts plan elements into canonical story data           |
| **Orchestrator**        | Triggers planning, replanning, or incremental revisions    |

The Planner is an **iterative** agent: it updates the structure dynamically as new writing emerges, contradictions appear, or user direction evolves.

---

## 🚫 **Boundaries — Explicit Non-Responsibilities**

| Task                       | Responsible Agent   | Not The Planner |
| -------------------------- | ------------------- | --------------- |
| Open-ended ideation / brainstorming | Ideation Agent | ❌           |
| Writing prose              | Writer              | ❌               |
| Enforcing consistency      | Editor / Continuity | ❌               |
| Managing knowledge storage | Codex Manager       | ❌               |
| Summarizing content        | Summarizer          | ❌               |
| Workflow scheduling        | Orchestrator        | ❌               |

The Planner **thinks strategically** but does not write or evaluate text.

---

## 📌 **One-Sentence Definition**

> **The Planner Agent produces the narrative blueprint—defining structure, pacing, and story progression—enabling all other agents to write, refine, and maintain coherence across a full-length book.**

