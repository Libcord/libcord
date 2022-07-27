import { Client, Colors } from "../src";
import { token } from "./config.json";

const client = new Client();

client.connect(token);
client.on("ready", () => {
  console.log(client.user?.username);
});
client.on("messageCreate", async (message) => {
  if (message.author?.bot) return;
  const role = await message.guild?.roles.fetch("1001859987624181801");

  message.channel.send(`${role?.name}`);
});
