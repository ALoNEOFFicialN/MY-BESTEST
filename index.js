const DJS = require("discord.js");
const config = require("./config.json");
const client = new DJS.Client({
   allowedMentions: { parse: ["users", "roles"], repliedUser: true },
   intents:32767
});

client.commands = new DJS.Collection();
client.events = new DJS.Collection();

module.exports = client;

["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

process.on("unhandledRejection", async (err) => {
  console.log('[ERROR]');
  console.log(err);
});


client.login(config.token);