const fs = require("fs");

const { Message } = require("discord.js");
const path = require("path");
const bandGif = fs.readFileSync(path.resolve(__dirname, "./data/files/lucky.gif"));

/**
 * 
 * @param {Message} message 
 * @returns 
 */
async function replyMsgWithBand(message) {
  if (!message.content || !message.content.startsWith('!band')) return;
  message.reply({
    files: [
      {attachment: bandGif, name: "band.gif"}
    ]
  });
}

module.exports = replyMsgWithBand;
