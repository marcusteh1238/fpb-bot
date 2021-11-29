const fs = require("fs");

const { Message } = require("discord.js");
const path = require("path");
const paperhandGif = fs.readFileSync(path.resolve(__dirname, "./data/files/paperhand.gif"));

/**
 * 
 * @param {Message} message 
 * @returns 
 */
async function replyMsgWithPaperhand(message) {
  message.reply({
    files: [
      {attachment: paperhandGif, name: "paperhand.gif"}
    ]
  });
}

module.exports = replyMsgWithPaperhand;
