# Project Brief: AI-Assisted Long-Form Book Writing System

Welcome to the project!  
Over the next few months, we’ll be working together to build something that sits at the intersection of **AI, creativity, and software engineering**, a system that can **plan, write, and refine full-length books** with human-level coherence and imagination.

---

## Vision
Modern AI models can write great short stories but they *lose the plot* when the narrative stretches into hundreds of pages.  
Our mission is to fix that.

We’re creating an **AI-powered long-form writing companion**, a system that doesn’t just generate paragraphs, but actually **remembers, plans, and reasons** across an entire book project.

Think of it as a team of specialized AI collaborators (agents):
- An **Ideator** that develops concepts and facilitates brainstorming,
- A **Planner** that outlines the story,
- A **Writer** that drafts scenes in the chosen style,
- An **Editor** that maintains consistency and tone,
- A **Summarizer** that keeps memory compact,
- A **Codex Manager** that maintains the world’s lore and characters,
- And an **Orchestrator** that coordinates them all.

All of this will run locally (on-prem), combining a web app front-end, intelligent back-end services, and a rich memory system that stores everything the AI “knows” about a project.

---

## One-Line Summary
Build a multi-agent, memory-driven AI system capable of planning and writing full-length books with human-level narrative coherence — combining creativity, orchestration, vector memory, and structured reasoning.

---

## Why This Project Is Special
At first glance, this looks like “just another writing app.”  
But under the hood, it’s a **complex multi-agent cognitive architecture** that solves hard AI problems like:

- **Context management** - how does an AI keep track of 100K+ words coherently?  
- **Narrative continuity** - how do we make sure characters, events, and emotions remain consistent across chapters?  
- **Memory design** - how do we blend relational (SQL) data, vector embeddings, and summaries to simulate human-like recall?  
- **Workflow orchestration** - how do multiple AI agents collaborate on one evolving creative task?

You’ll be designing and implementing the systems that make this possible - from APIs and database schemas to agent logic and retrieval strategies.

---

## The Tech Stack
| Layer | Tools / Technologies |
|-------|----------------------|
| Backend | Node + TypeScript |
| Data | PostgreSQL |
| Vector Search | HNSW |
| Agents | Dexto framework (YAML-based configurations) |
| Embeddings | Sentence-Transformers (on-prem) |
| Front-end | React (web editor) |
| Job Queue | pg-boss |
| Memory | Custom Context Manager + pgvector |

---

## Key Challenges (and Learning Opportunities)
This project will teach you to combine **software engineering, data modeling, and AI reasoning** in one system:

| Challenge | What You’ll Learn |
|------------|------------------|
| Memory & Context | How to make LLMs “remember” large documents |
| Multi-Agent Systems | How different AI roles collaborate |
| (Vector) Database Design | Modeling narrative data and embeddings |
| Retrieval & Ranking | Hybrid semantic + structured search |
| Workflow Orchestration | Managing inter-dependent agent tasks |
| Evaluation | Testing creative systems for coherence and quality |

You’ll work on cutting-edge problems that don’t have off-the-shelf answers - the kind of challenges that build serious technical depth.

---

## Guiding Principles
1. **Keep it simple but extensible.**  
   Build solid foundations before adding complexity.

2. **Think like a storyteller and an engineer.**  
   You’re not just coding, you’re designing how a machine thinks about stories.

3. **Transparency over magic.**  
   Every decision an agent makes should be traceable and explainable.

4. **Collaboration over isolation.**  
   Our agents and our team succeed when we share insights and align designs.

---

## The Impact
If we get this right, we’ll have something that doesn’t just *write text*, but can **co-author full books**, a system that understands story structure, remembers past events, and evolves ideas across hundreds of pages.  

This is the kind of project that can go from an academic experiment to a real creative platform and you’ll have built it from the ground up.

---

## What We Expect from You
- Curiosity and ownership.  
- A willingness to learn new tools, engineering concepts and AI workflows.  
- Clear documentation and collaboration.  
- Creativity - this system is as much about design thinking as coding.

---

## Final Words
It’s a technically demanding, intellectually rich, and creatively rewarding challenge - You’re helping to build a **thinking system for creative writing**; an AI that remembers, plans, and narrates at scale.

At the same time, this project is meant to be a **sandbox for ideas and engineering creativity**, not a rigid blueprint. The specifications describe the **purpose, constraints, and intended direction** — not a fixed recipe.
As long as we stay true to the core vision of an **AI-assisted long-form writing system** and retain the foundational stack of **Node.js + Next.js**, you are encouraged to explore new frameworks, tools, data models, UX ideas, and agent designs.

Innovation is not only welcome here — it is expected.
If you discover a better approach than what is described in this document, you have the freedom to pursue it, share it, and help shape the evolution of the platform.
