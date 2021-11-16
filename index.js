require("dotenv-safe").config();
const { Client, Intents } = require("discord.js");

const replyMsgWithIce = require("./src/replyMsgWithIce");

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
    await interaction.reply('Pong!');
  }
});

client.on('messageCreate', (message) => {
  replyMsgWithIce(message);
})

client.login(process.env.BOT_TOKEN);