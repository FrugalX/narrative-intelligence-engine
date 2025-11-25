# 🚀 Getting Started Guide

This guide breaks your initial onboarding into clear, achievable steps. Follow them in order to build strong foundational understanding before contributing to core system features.

---

## **Step 1: Understand the Vision**

Before writing any code, focus on *why* this project exists and *what problem it solves*.

### 📚 What to do

* Re-read the **Project Brief** slowly and carefully
* Reflect on why long-form writing requires:

  * **Memory** (the system must remember 100K+ words)
  * **Planning** (the story needs structure, not random generation)
  * **Multiple collaborating agents** (specialization instead of one model doing everything)
* Study foundational concepts:

  * **LLMs & context windows** — why context is limited
  * **Embeddings** — meaning-based representation of text
  * **Vector search** — retrieving relevant information efficiently

### 🎯 Outcome

You should be able to clearly **explain the problem the system is solving**, in your own words.

If someone asks

> *“Why can’t GPT just write a whole book?”*

You should be able to answer confidently.

---

## **Step 2: Build Foundations with Dexto**

Before working on the main multi-agent system, you’ll develop competency using **Dexto**, the framework powering our agent workflows.

### **Step 2.1 — Dexto Runtime**

* Install Dexto globally:

```
npm install -g dexto
```

* Explore the `agents/` directory in the official repo:
  [https://github.com/truffle-ai/dexto](https://github.com/truffle-ai/dexto)
* Run example agents and modify them to understand YAML-based configuration
* Build **1–2 simple custom agents** (e.g., parts of the Planner Agent workflow) using YAML

### **Step 2.2 — SDK (`@dexto/core`)**

* Use SDK documentation to create agents programmatically using Node.js
* Rebuild one of your YAML agents using the SDK to understand parity. If you need help or a reference example, feel free to ask and one will be provided.

### 🎯 Outcome

You should now know how to:

* Define simple agents
* Run and debug Dexto pipelines
* Choose between YAML and programmatic agent creation

These skills are mandatory before building the production architecture.

---

## **Step 3: Development Environment Setup**

* Clone the repository (You will be provided with a bare starter GitHub repository)
* Create the basic folder structure for backend + frontend and initialize
* Set up PostgreSQL

### 🎯 Outcome

A working dev environment with the ability to run test pipelines.

---

## **Step 4: Expand Toward Project Goals**

Once you understand the system and can run agents confidently, begin tackling structured tasks such as:

* Adding new fields to planning schemas
* Building UI elements to visualize story structure
* Integrating Codex queries and vector retrieval
* Running the scene pipeline end-to-end

### 🎯 Outcome

You are ready to contribute meaningful features.

---

## 🌟 Final Note

Your first goal isn’t speed — it’s **clarity**. Understanding the system architecture deeply now will accelerate everything that follows.

Take help of a tool like ChatGPT to refine / expand this document.

