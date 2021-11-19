const { BOT_TOKEN, CLIENT_ID } = process.env;
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const commands = require("./data/commands.json");

const rest = new REST({ version: '9' }).setToken(BOT_TOKEN);

const {
  getLastRegisteredSlashCommandTime, 
  setLastRegisteredSlashCommandTime 
} = require('./cache');

const UPDATE_DURATION = 10 * 60 * 1000; // 10min


async function refreshApplicationCommands(guildId) {
  try {
    const lastRefreshed = await getLastRegisteredSlashCommandTime(guildId);
    if (lastRefreshed && Date.now() - lastRefreshed < UPDATE_DURATION) {
      return;
    }
    await setLastRegisteredSlashCommandTime(guildId);
    // console.log('Started refreshing application (/) commands.');
    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, guildId),
      { body: commands },
    );
    // console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

module.exports = refreshApplicationCommands;