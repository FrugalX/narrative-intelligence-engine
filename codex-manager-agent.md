# 📚 Codex Manager Agent — Definition & Responsibilities

The **Codex Manager Agent** is the keeper of canonical story knowledge. Its role is to maintain, structure, and serve the "story bible"—the authoritative source of truth for characters, locations, timelines, world rules, and important facts.

Where the Planner designs the blueprint and the Writer/Editor shape the text, the Codex Manager ensures the *world itself* stays consistent and queryable across the entire book.

---

## **Core Responsibilities**

| Category                       | Responsibilities                                                                       |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| Canonical fact storage         | Maintain a structured, queryable database of story entities and facts                  |
| Entity & relationship modeling | Represent characters, locations, organizations, items, events, and their relationships |
| Fact ingestion                 | Ingest new or updated information from plans, prose, and summaries                     |
| Versioning & conflict handling | Track changes to canonical facts and highlight potential conflicts                     |
| Retrieval APIs                 | Provide targeted lookups (e.g., "what does X know by chapter 5?") to other agents      |
| Schema evolution               | Adapt and extend the codex schema as the story world grows in complexity               |

The Codex Manager is less about *writing* and more about *data modeling* for narrative worlds.

---

## 🧩 **Inputs & Outputs**

### **Expected Inputs**

* Extracted facts and metadata from the **Summarizer** (characters, locations, events, timelines, rules)
* Structural information from the **Planner** (cast lists, arcs, key events, worldbuilding notes)
* Confirmed decisions or corrections from the **Editor** and/or the human author
* Queries from other agents (e.g., "get appearance and personality traits for Character X")

### **Expected Outputs**

* Structured records for:

  * **Characters** (name, role, traits, relationships, knowledge, timeline of appearances)
  * **Locations** (description, rules, significance, associated events)
  * **Items / artifacts** (properties, owners, constraints)
  * **Events** (who, where, when, cause, effect)
  * **World rules / lore** (magic systems, technology constraints, social rules, etc.)

* Query responses such as:

  * "What color are Aria’s eyes?"
  * "Where was the relic last seen?"
  * "List all scenes where the AI spoke directly to the crew."
  * "What does Character Y know at the end of chapter 7?"

* Conflict or ambiguity flags, for example:

```json
{
  "type": "conflict",
  "entity": "Character: Aria",
  "field": "eye_color",
  "values": ["green", "blue"],
  "source_ids": ["ch3_scene2", "ch9_scene1"],
  "note": "Inconsistent description of Aria's eye color."
}
```

---

## 🔄 **Collaboration With Other Agents**

| Agent                   | Interaction                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Planner**             | Receives cast lists, world notes, and key events; supplies back canonical constraints and world rules to guide planning |
| **Writer**              | Answers queries about character traits, prior events, locations, and world details during drafting                      |
| **Editor / Continuity** | Helps detect inconsistencies by comparing text against stored facts; accepts corrections once resolved                  |
| **Summarizer**          | Ingests extracted facts from summaries to keep the codex up to date                                                     |
| **Orchestrator**        | Coordinates when to update or query the codex during workflows (e.g., after scenes, before arcs)                        |

The Codex Manager is the central hub for **story knowledge**, enabling all other agents to work from a shared, authoritative memory.

---

## 🚫 **Boundaries — Explicit Non-Responsibilities**

| Task                         | Responsible Agent   | Not The Codex Manager |
| ---------------------------- | ------------------- | --------------------- |
| Designing story structure    | Planner             | ❌                     |
| Generating prose             | Writer              | ❌                     |
| Evaluating narrative quality | Editor / Continuity | ❌                     |
| Creating summaries           | Summarizer          | ❌                     |
| Orchestrating workflows      | Orchestrator        | ❌                     |

The Codex Manager does **not** write, critique, or plan the story; it curates and serves the knowledge that the story depends on.

---

## 📌 One-Sentence Definition

> **The Codex Manager Agent maintains the canonical, queryable story bible—managing entities, facts, and relationships—so that all other agents can rely on a consistent and authoritative representation of the story world.**
