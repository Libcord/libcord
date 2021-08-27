import { Client } from "../src/index";
import { token } from "../config.json";
const client = new Client();

client.connect(token);
client.on("ready", () => {
  console.log(client.user?.username);
});
client.on("messageCreate", (message) => {
  if (message.author?.bot) return;
  console.log(message.member.displayName);
});
