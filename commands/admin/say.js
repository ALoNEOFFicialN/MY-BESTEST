module.exports = {
    name: "say",
    execute: async(client, message, args) => {
      return message.channel.send({content: `**${args.join("  ")}**`});                    
    },           
  };