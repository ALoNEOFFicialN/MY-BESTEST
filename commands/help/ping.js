module.exports = {
    name: "ping",
    aliases: ["p"],
    execute: async(client, message, args) => {
      return message.reply({content: `**${client.ws.ping}ms😎**`});                    
    },           
  };