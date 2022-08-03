import { ActionRow, SelectMenu, Client } from "../src";
import { token } from "./config.json";
const client = new Client();

client.connect(token);
client.on("ready", async () => {
  console.log(client.user?.username);
});
client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    interaction.reply(`Button ID: ${interaction.customId}`);
  } else if (interaction.isSelectMenu()) {
    interaction.reply(`Select values: ${interaction.values}`);
  }
});
client.on("messageCreate", async (message) => {
  if (message.author?.bot) return;
  if (message.content === "test") {
    const row = new ActionRow();
    const select = new SelectMenu()
      .setCustomID("Select_boi")
      .addOption({
        label: "Hehe",
        value: "Hai",
        description: "shgould test",
      })
      .setPlaceholder("Hehe");
    row.addComponent(select);
    message.reply({ content: "test", components: [row] });
  }
});
