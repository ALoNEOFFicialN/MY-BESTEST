module.exports = {
    name: "counts",
    execute: async(client, message, args) => {
        var count=0
        for(count=0;count<1000;)
        {
            await message.channel.send(`${count}`)
            count=count+1
        }                    
},           
  };