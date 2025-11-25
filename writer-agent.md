# ✍️ Writer Agent — Definition & Responsibilities

The **Writer Agent** is the narrative execution engine of the system. Its role is to transform structured scene instructions from the Planner into high-quality prose that reflects the intended tone, pacing, emotional depth, and perspective.

Where the Planner decides *what* should happen, the Writer determines *how* it is experienced on the page.

---

## **Core Responsibilities**

| Category               | Responsibilities                                                  |
| ---------------------- | ----------------------------------------------------------------- |
| Prose generation       | Convert scene-level plans into fully written narrative text       |
| Voice & tone alignment | Adhere to user-selected voice, style, POV, and tone               |
| Emotional delivery     | Convey character emotions and scene tension effectively           |
| Pacing & flow          | Adjust description, dialogue, and action to match intended pacing |
| Style consistency      | Maintain consistent voice and characterization across scenes      |
| Versioned output       | Produce multiple drafts, variations, or rewrites on request       |

---

## 🧩 **Inputs & Outputs**

### **Expected Inputs**

* Scene plan provided by the Planner, including:

  * POV character
  * Setting
  * Emotional beat
  * Conflict
  * Intended outcome
* Stylistic specifications (tone, genre, POV, narrative format, etc.)
* World and character facts retrieved from the Codex Manager
* Editing feedback or revision instructions if rewriting

### **Expected Outputs**

* Fully written scene or chapter in narrative prose
* Optional variant drafts (e.g., tone shifts, shorter/longer versions)
* Marked structural elements (dialogue blocks, sensory detail, internal thoughts, action lines)

Output should be structured so downstream agents can parse and evaluate it (e.g., metadata wrapper or structured container with prose body).

---

## 🔄 **Collaboration With Other Agents**

| Agent                   | Interaction                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Planner**             | Receives structural scene plans and transforms them into prose                         |
| **Editor / Continuity** | Provides feedback for revisions and ensures adherence to planned structure             |
| **Summarizer**          | Extracts summaries for memory and future context retrieval                             |
| **Codex Manager**       | Supplies canonical world/character information and receives updates as new facts arise |
| **Orchestrator**        | Coordinates when writing begins, pauses, or is revised                                 |

The Writer may be invoked repeatedly for rewrites, alternative versions, or adaptive style changes.

---

## 🚫 **Boundaries — Explicit Non-Responsibilities**

| Task                         | Responsible Agent   | Not The Writer |
| ---------------------------- | ------------------- | -------------- |
| Creating narrative structure | Planner             | ❌              |
| Continuity enforcement       | Editor / Continuity | ❌              |
| Storing world data           | Codex Manager       | ❌              |
| Summarizing finished text    | Summarizer          | ❌              |
| Managing workflow triggers   | Orchestrator        | ❌              |

The Writer **does not decide the story**, only how it is expressed.

---

## 📌 **One-Sentence Definition**

> **The Writer Agent transforms structured scene plans into polished narrative prose, delivering the emotional and stylistic expression of the story while adhering to the planned structure and creative intent.**
