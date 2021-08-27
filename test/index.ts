import { Client, TextChannel } from "../src/index";

const client = new Client();

client.connect("NzM1ODg0OTI5MTk5NzY3NjMz.XxmwPw.-w-RXHN3XAmsXsDV2oMxobh-08w");
client.on("ready", () => {
  console.log(client.user?.username);
});
client.on("messageCreate", (message) => {
  if (message.author?.bot) return;
  message.channel.send(`${client.ws.ping}`);
});
