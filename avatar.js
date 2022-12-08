const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Give avatar url')
    .addUserOption(option =>
		option.setName('mention')
			.setDescription('He dont have url avatar')
    ),
	async execute(interaction) {
        const mention = interaction.options.getUser('mention');
		if(!mention) return await interaction.reply(`Your avatar : ${interaction.user.displayAvatarURL({ format: 'png' })}`);
    	else return await interaction.reply(`The avatar ${mention.username} is : ${mention.displayAvatarURL({ format: 'png' })}`);
	},
};
