import { load } from "https://deno.land/std@0.220.0/dotenv/mod.ts";
import { genWorld } from "./lib/worlds.ts";
import {
  Intents,
  InteractionResponseTypes,
  createBot,
  startBot,
} from "https://deno.land/x/discordeno@18.0.1/mod.ts";

const env = await load();

const travis = createBot({
  // token: Deno.env.get("DISCORD_TOKEN"),
  token: env["DISCORD_TOKEN"],
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    async interactionCreate(bot, interaction) {
      const respond = async (content) =>
        await bot.helpers.sendInteractionResponse(
          interaction.id,
          interaction.token,
          {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: { content },
          },
        );
      switch (interaction.data?.name) {
        case "genworld":
          respond(genWorld().join("\n"));
          break;
      }
    },
    ready() {
      console.log("ready");
    },
  },
});

startBot(travis);
