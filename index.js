require("dotenv-safe").config();
const { Client, Intents } = require("discord.js");

const refreshApplicationCommands = require("./src/refreshApplicationCommands");
const replyMsgWithIce = require("./src/replyMsgWithIce");
const replyMsgWithFloor = require("./src/replyMsgWithFloor");
const replyMsgWithBand = require("./src/replyMsgWithBand");
const replyMsgWithBasket = require("./src/replyMsgWithBasket");
const replyMsgWithPaperhand = require("./src/replyMsgWithPaperhand");

process.on("uncaughtException", err => console.error(err));
process.on("unhandledRejection", err => console.error(err));

const commands = {
  ice: replyMsgWithIce,
  floor: replyMsgWithFloor,
  band: replyMsgWithBand,
  basket: replyMsgWithBasket,
  paperhand: replyMsgWithPaperhand,
  paperhands: replyMsgWithPaperhand
}

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
    return interaction.reply({ 
      content: `Here is my invite link: ${process.env.OAUTH2_URL}`,
      ephemeral: true
    })
  }
});

client.on('messageCreate', async (message) => {
  refreshApplicationCommands(message.guildId);
  if (message.content) {
    const args = message.content.split(' ');
    if (args.length > 0 && args[0].startsWith('!')) {
      const cmdWord = args[0].replace('!', '');
      const command = commands[cmdWord];
      if (command) return command(message);
    }
  }
})

client.login(process.env.BOT_TOKEN);
