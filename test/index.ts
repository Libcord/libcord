import { Client, Embed } from "../src/index";
import { token } from "./config.json";
const client = new Client();

client.connect(token);
client.on("ready", () => {
  console.log(client.user?.username);
});
client.on("messageCreate", (message) => {
  if (message.author?.bot) return;
  const embed = new Embed()
    .setTitle("Hello")
    .setDescription("There")
    .setFooter({
      text: message.author?.username,
      url: message.author?.avatarURL({ format: "png" }),
    })
    .setTimestamp()
    .setThumbnail(message.author?.avatarURL({ format: "png" }))
    .setImage(message.author?.avatarURL({ format: "png", size: 1024 }))
    .setColor("#fffff")
    .setAuthor({
      name: message.author?.username,
      url: message.author?.avatarURL({ format: "png" }),
    });
  message.channel.send(embed);
});
