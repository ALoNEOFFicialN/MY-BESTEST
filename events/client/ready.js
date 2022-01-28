const client = require("../../index");
const { prefix } = require("../../config.json");

client.once("ready", async () => {
   await console.log(`[INFO]: Logged onto ${client.user.tag}!`);
   client.user.setActivity(`${prefix}help`, { type: "WATCHING" })
});