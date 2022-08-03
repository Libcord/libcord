import { Client, Colors } from "../src";
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
});
