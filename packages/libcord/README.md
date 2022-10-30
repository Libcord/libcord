<div align="center">

![Logo](https://github.com/Libcord.png)

# Libcord

**Work in progress discord library**

[![https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/libcord) <br/>
[![DOWNLOADS](https://img.shields.io/npm/dm/libcord)](https://www.npmjs.com/package/libcord)
[![GitHub](https://img.shields.io/github/license/Libcord/libcord)](https://github.com/libcord/libcord/blob/main/LICENSE.md)
[![Discord](https://img.shields.io/discord/976566685895114823.png?color=7289da&label=Libcord&logo=discord&style=flat-square)](https://discord.gg/k672733TU3)
[![npm](https://img.shields.io/npm/v/libcord?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/libcord)

</div>

## Getting Started

````javascript
const { Client } = require('libcord')
const client = new Client({
    token: "token",
    intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
    console.log("I am ready")
});
client.connect()
````


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
