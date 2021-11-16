require("dotenv-safe").config();
const { Client, Intents } = require("discord.js");

const replyMsgWithIce = require("./src/replyMsgWithIce");
const refreshApplicationCommands = require("./src/refreshApplicationCommands");

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MEMBERS, 
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    return interaction.reply('Pong!');
  }
  if (interaction.commandName === "invite") {
    return interaction.reply(`Here is my invite link: ${process.env.OAUTH2_URL}`)
  }
});

client.on('messageCreate', async (message) => {
  refreshApplicationCommands(message.guildId);
  await replyMsgWithIce(message);
})

client.login(process.env.BOT_TOKEN);
