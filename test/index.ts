import { ButtonStyle } from "discord-api-types";
import { ActionRow, Button, Client, Colors, Embed } from "../src";
import { token } from "./config.json";

const client = new Client();

client.connect(token);
client.on("ready", async () => {
  console.log(client.user?.username);

  await client.createGuildApplicationCommand("976566685895114823", {
    name: "test",
    description: "Test command",
    options: [
      {
        type: "string",
        name: "why",
        description: "hello",
        required: true,
      },
    ],
    defaultPermissions: true,
  });
});
client.on("interactionCreate", (interaction) => {
  interaction.reply(`${interaction.options.map((obj: any) => obj.value)}`);
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
