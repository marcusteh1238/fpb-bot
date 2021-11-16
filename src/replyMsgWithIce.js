const { Message } = require("discord.js");
const replies = require("./data/iceReplies.json");

// maybe wanna keep track of number of times users send !ice
/**
 * 
 * @param {Message} message 
 * @returns 
 */
async function replyMsgWithIce(message) {
  if (!message.content || !message.content.startsWith('!ice')) return;
  message.react('🧊');
  const idx = Math.floor(Math.random() * replies.length);
  message.reply(replies[idx]);
}

module.exports = replyMsgWithIce;
