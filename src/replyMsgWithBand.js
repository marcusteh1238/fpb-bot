const { Message } = require("discord.js");

/**
 * 
 * @param {Message} message 
 * @returns 
 */
async function replyMsgWithBand(message) {
  if (!message.content || !message.content.startsWith('!band')) return;
  message.reply("https://media.discordapp.net/attachments/892675220593324072/912303927536541696/lucky.gif");
}

module.exports = replyMsgWithBand;
