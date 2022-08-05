<div align="center">

# Libcord

[![https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/libcord) <br></br>
[![Discord](https://img.shields.io/discord/976566685895114823.png?color=7289da&label=Libcord&logo=discord&style=flat-square)](https://discord.gg/k672733TU3) [![GitHub license](https://img.shields.io/github/license/tovade/libcord.svg)](https://github.com/tovade/libcord/blob/master/LICENSE)  [![DOWNLOADS](https://img.shields.io/npm/dm/libcord)](https://www.npmjs.com/package/libcord) [![DOCS](https://img.shields.io/badge/typedoc-docs-blue.svg)](https://libcord.js.org/)


Libcord is a library written in typescript to interact with the Discord API <br></br>

</div>

## Getting Started

````javascript
const { Client } = require('libcord')
const client = new Client();

client.on("ready", () => {
    console.log("I am ready")
});
client.login("TOKEN")
````