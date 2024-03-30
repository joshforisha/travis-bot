import { genWorld } from "./lib/worlds.ts";

const worldLines = genWorld();
for (const line of worldLines) {
  console.log(line.replace(/\*/g, ""));
}
