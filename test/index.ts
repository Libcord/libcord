import { ButtonStyle } from "discord-api-types";
import { ActionRow, Button, Client, Colors, Embed, ApplicationCommandType } from "../src";
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
  if(message.content === "test") {
    const row = new ActionRow();
    const button = new Button()
      .setLabel("Test button")
      .setStyle(ButtonStyle.Link)
      // .setCustomId("testbtn")
      .setUrl('https://github.com');
      // .setEmoji("🔥");
    row.addComponent(button);
    message.reply({content: 'test', components: [row]})
  }
});
