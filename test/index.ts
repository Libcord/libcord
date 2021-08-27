import { Client } from "../src/index";

const client = new Client();

client.connect("");
client.on("ready", () => {
  console.log(client.user?.username);
});
client.on("messageCreate", (message) => {
  if (message.author?.bot) return;
  message.channel.send(`${client.ws.ping}`);
});
