import { ActionRow, Button, Client } from "../src";
import { token } from "./config.json";
const client = new Client();

client.connect(token);
client.on("ready", async () => {
  console.log(client.user?.username);
});
client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const btn = new Button()
      .setCustomId("Hehe")
      .setStyle("PRIMARY")
      .setLabel("Hai");
    const row = new ActionRow().addComponent(btn);
    interaction.reply({
      content: "funny",
      components: [row],
      files: [
        {
          description: "Hehe",
          file: "https://github.com/FireDiscordBot.png",
        },
      ],
    });
  }
});
client.on("messageCreate", async (message) => {
  if (message.author?.bot) return;
  if (message.content === "test") {
    message.reply({
      content: "test",
      files: [
        {
          description: "Hehe",
          file: "https://github.com/FireDiscordBot.png",
        },
      ],
    });
  }
});
