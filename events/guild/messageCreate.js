const client = require("../../index");
const { prefix } = require("../../config.json");

client.on("messageCreate", async (message) => {
   if(!message.guild || message.author.bot) return;
   if(!message.content.startsWith(prefix)) return;
   if(!message.member) message.member = guild.fetchMember(message);

   const args = message.content.slice(prefix.length).trim().split(/[ ]+/g);
   const cmd = args.shift()?.toLowerCase();
   if(cmd.length === 0) return;

   let command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
   if(!command) return;
   if(command) await command.execute(client, message, args);
});