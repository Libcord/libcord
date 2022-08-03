import { Client, Colors, Embed } from "../src";
import { token } from "./config.json";

const client = new Client();

client.connect(token);
client.on("ready", () => {
  console.log(client.user?.username);
});
client.on("messageCreate", async (message) => {
  if (message.author?.bot) return;
  if(message.content === "embed") {
    message.reply(new Embed().setColor('#7289da').setDescription('sent with libcord v2'))
  }
});
