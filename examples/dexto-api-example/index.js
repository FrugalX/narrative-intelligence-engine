import 'dotenv/config';
import { DextoAgent } from '@dexto/core';
import fs from "fs";
import yaml from "js-yaml";

const file = fs.readFileSync('../planner.yml', "utf8");
const config = yaml.load(file);

const agent = new DextoAgent(config);
await agent.start();
const session = await agent.createSession();

const task = `
    Create a complete narrative plan for the following story idea:

    A young botanist on a remote research station discovers a plant capable of altering human memory. As governments and corporations race to control it, she must decide whether to use it to erase the trauma of her past or expose the truth that could destabilize society.

    Genre: Sci-fi psychological thriller
    Tone: Dark, tense, introspective
    POV: Third-person limited
    Target Word Count: 95,000
    Themes: Identity, truth vs. deception, trauma vs. healing
    Character list: Dr. Lian Aster (botanist), Commander Rourke (station leader), Maren Ortega (corporate agent), The Chorus (collective scientists)
    World Notes: Station orbiting Proxima b, high political tension, information warfare era
`;
const response = await agent.generate(task, { sessionId: session.id });
console.log("Response:", response);

await agent.stop();