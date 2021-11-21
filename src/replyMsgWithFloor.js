const { Message } = require("discord.js");
const replies = require("./data/floorReplies.json");

// maybe wanna keep track of number of times users send !ice
/**
 * 
 * @param {Message} message 
 * @returns 
 */
async function replyMsgWithFloor(message) {
  if (!message.content || !message.content.startsWith('!floor')) return;
  message.react('🧊');
  const idx = Math.floor(Math.random() * replies.length);
  message.reply(replies[idx]);
}

module.exports = replyMsgWithFloor;
