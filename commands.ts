#!/usr/bin/env deno run --allow-env --allow-net --allow-read

import { load } from "https://deno.land/std@0.220.0/dotenv/mod.ts";

const env = await load();
const appId = env["APP_ID"];
const url = `https://discord.com/api/v10/applications/${appId}/commands`;

const response = await fetch(url, {
  headers: {
    Authorization: `Bot ${env["DISCORD_TOKEN"]}`,
    "Content-Type": "application/json; charset=UTF-8",
    "User-Agent":
      "TravisBot (https://github.com/joshforisha/travis-bot, 1.0.0)",
  },
  body: JSON.stringify([
    {
      name: "genworld",
      description: "Randomly generate a world based on book 02",
      type: 1,
    },
  ]),
  method: "PUT",
});

const data = await response.json();
console.log(response);
