module.exports = {
	name: "clear",
    aliases: ["purge", "delete"],
	description: "Clear an amount of messages",
	permission: "MANAGE_MESSAGES",
  execute: async(client, message, args) => {
		const amount = args[0];

		if (isNaN(amount) || parseInt(amount <= 0))
			return message.reply('Error')
    

		if (parseInt(amount) > 100)
			return message.reply("You cannot clear more than 100 messages!")

	await message.channel.bulkDelete(parseInt(amount) + 1, true);

    await message.channel.send(
			`Cleared ${parseInt(amount)} messages!`
		).then(m => {
      setTimeout(() => { m.delete()}, 10000)
    })
	}
}