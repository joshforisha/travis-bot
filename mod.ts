import { json, serve } from "https://deno.land/x/sift@0.6.0/mod.ts";
import { camelize } from "https://deno.land/x/camelize@2.0.0/mod.ts";
import {
  Intents,
  InteractionResponseTypes,
  createBot,
  startBot,
} from "https://deno.land/x/discordeno@18.0.1/mod.ts";

function main(request: Request) {
  return json({
    type: InteractionResponseTypes.ChannelMessageWithSource,
    data: {
      content: "hello world",
    },
  });
}

const travis = createBot({
  token: Deno.env.get("DISCORD_TOKEN"),
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    ready() {
      serve({ "/": main });
    },
  },
});

startBot(travis);
