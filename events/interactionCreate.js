const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.command.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${commandName} found`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Unable to execute ${interaction.commandName}`);
      console.error(error);
    }
  },
};
