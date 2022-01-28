const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "av",
  aliase: ["avatar"],
  execute: async(client, message, args) => {
     let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let avem = new MessageEmbed()
.setTitle(`${user.username}'s Avatar`)
.setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
.setTimestamp()
return message.reply({ embeds: [avem] })
  },           
};