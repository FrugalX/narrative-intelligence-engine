sequenceDiagram
    autonumber
    actor User

    participant OR as Orchestrator
    participant PL as Planner
    participant CM as Codex Manager
    participant WR as Writer
    participant ED as Editor / Continuity
    participant SU as Summarizer

    %% User initiates work
    User->>OR: Request (e.g. \"Write next scene\")

    %% Plan / refine scene
    OR->>PL: Get or refine scene plan\n(POV, setting, beats, outcome)
    PL-->>OR: Scene plan (structured JSON/YAML)

    %% Fetch world/context knowledge
    OR->>CM: Query relevant facts\n(characters, locations, prior events)
    CM-->>OR: Canonical facts & constraints

    %% Draft prose
    OR->>WR: Provide scene plan + codex facts + style settings
    WR-->>OR: Draft scene/chapter prose

    %% Edit / continuity check
    OR->>ED: Send draft + plan slice + codex facts
    ED-->>OR: Annotated text + issues report\n(optional light edits)

    alt Revisions required
        OR->>WR: Request revision based on editor feedback
        WR-->>OR: Revised prose
    end

    %% Summarize for memory
    OR->>SU: Finalized prose + scene context
    SU-->>OR: Multi-level summaries + extracted facts

    %% Update codex and planner
    OR->>CM: Update canonical records\n(characters, events, world facts)
    CM-->>OR: Confirmation + any conflict flags

    OR->>PL: Provide updated summaries\nfor pacing/arc adjustments
    PL-->>OR: Optional updated downstream plan

    %% Report back to user
    OR-->>User: Completed scene + status\n(e.g. \"Scene written, edited, summarized\")
