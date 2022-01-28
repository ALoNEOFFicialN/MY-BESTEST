const { MessageEmbed } = require('discord.js');
const { prefix } = require("../../config.json");

module.exports = {
  name: "help",
  aliases: ["h"],
  execute: async(client, message, args) => {
let helpem = new MessageEmbed()
        .setTitle(`<a:mailbox1:905139303968014406> Need help? Here are all of my commands <a:discord:905054564183584768> :\n For use any of my commands Use ${prefix}CommandName.`)
  
        .addFields({name : "<a:info:905140599349465098> |** INFO**",value :" `help`, `avatar(av)`, `ping`\n\n"},
          
                     {name : "<a:moderation:905151016771657759> |** ADMIN**",value : "`say`, `kick`, `ban`\n\n"})
        .setImage("https://media.discordapp.net/attachments/859830358379200552/906234371063840778/standard_3.gif") 
        .setColor('RANDOM')
        .setTimestamp()
return message.channel.send({ embeds: [helpem] })
  },           
};