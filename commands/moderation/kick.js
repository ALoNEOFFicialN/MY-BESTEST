module.exports = {
    name: 'kick',
    aliases: ["laat", "nikal"],
    execute: async (client, message, args) => {
  
        const user = message.mentions.members.first();
        /*const userposi = user.roles.highest.position;
        const messageposi = message.member.roles.highest.position;
        const botposi = message.guild.me.roles.highest.position;

       if(userposi >= messageposi)
       {
           return message.channel.send('Your position is lower or equal to the targets posi! \nSo You dont able kick him/her.');
       }

       else if(userposi >= botposi)
       {
           return message.channel.send('My position is lower or equal to the targets posi! \nSo I dont kick him/her.');
       } */
       
       if(!message.member.permissions.has('KICK_MEMBERS'))
       {
          return message.channel.send('You don\'t have kick member permission'); 
       }
       else if(!message.guild.me.permissions.has('KICK_MEMBERS'))
       {
          return message.channel.send('I don\'t have kick member permission'); 
       }
       else if (!user) {
            return message.channel.send('Specify a User for kick!');
        }
        else if(user) {
            await user.kick().then(() => {
                message.channel.send('kicked')
            })
        } else {
            message.channel.send('cant find the user!')
        }
  
    }
  }