module.exports = {
  name: 'ban',
  aliases: ["ban", "band"],
  execute: async (client, message, args) => {

      const user = message.mentions.members.first();
      const reason = args.slice(1).join(' ');
      /*const userposi = user.roles.highest.position;
      const messageposi = message.member.roles.highest.position;
      const botposi = message.guild.me.roles.highest.position;

       if(userposi >= messageposi)
       {
           return message.channel.send('Your position is lower or equal to the targets posi! \nSo You dont able ban him/her.');
       }

       else if(userposi >= botposi)
       {
           return message.channel.send('My position is lower or equal to the targets posi! \nSo I dont ban him/her.');
       } */
       
       if(!message.member.permissions.has('BAN_MEMBERS'))
       {
          return message.channel.send('You don\'t have kick member permission'); 
       }
       else if(!message.guild.me.permissions.has('BAN_MEMBERS'))
       {
          return message.channel.send('I don\'t have ban member permission'); 
       }
       
       if (!user) {
          if(!reason)
          return message.channel.send('Specify a User & Tell me a reason!');
          else
          return message.channel.send('Specify a User!');
      }
       else if(!reason)
      {
      return message.channel.send('Tell me a reason!');
      }

      else if(user) {
          await user.ban({
              reason: reason,
          }).then(() => {
              message.channel.send('banned!')
          })
      } else {
          message.channel.send('cant find the user!')
      }

  }
}