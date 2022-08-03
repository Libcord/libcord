import { ApplicationCommandType, Client, Embed } from "../src";
import { token } from "./config.json";
import { MessageContextMenuInteraction } from "../src/structures/interactions/MessageContextMenuInteraction";

const client = new Client();

client.connect(token);
client.on("ready", async () => {
  console.log(client.user?.username);
  await client.createGuildApplicationCommand("976566685895114823", {
    name: "name",
    type: ApplicationCommandType.USER,
    defaultPermissions: true,
  });
});
client.on("interactionCreate", (interaction) => {
  if (interaction.isMessageContextMenu()) {
    return interaction.reply(`${interaction.targetMessage.content}`);
  } else if (interaction.isUserContextMenu()) {
    return interaction.reply(`${interaction.targetUser.username}`);
  }
});
client.on("messageCreate", async (message) => {
  if (message.author?.bot) return;
  if (message.content === "embed") {
    message.reply(
      new Embed().setColor("#7289da").setDescription("sent with libcord v2")
    );
  }
});
