# Fluffy Polar Bears Bot

Just a bot that replies in the chat with random ice / bear related puns whenever someone types `!ice`.
You can use the one that I'm hosting myself by using [this invite link](https://discord.com/api/oauth2/authorize?client_id=910067956640268290&permissions=517543938112&scope=bot%20applications.commands) or by obtaining it using the `/invite` slash command in a server that has the bot.

# Self Hosting

Follow the steps below if you want to set up this discord bot!
## Discord Bot Creation

First you will need a discord bot user.

1. Go to https://discord.com/developers/applications and create a new application.
1. In your application, create a bot user in the Bot tab.
1. Under the Privileged Gateway Intents section, you will need to select the Server Members Intent and the Message Content Intent.
1. In the OAuth2 tab, Select the following scopes:
  - bot
  - applications.commands
1. Also select the following permissions:
  - Everything in Text Permissions except "Mention Everyone", "Send TTS Messages"
1. Copy the OAuth2 link generated.

## Set up

1. Create a `.env` file in the root folder, and fill in the corresponding values in the `.env.example` file which can be obtained from the bot application dashboard. 
1. Install Node.js (version >=16.0.0)
1. npm ci
1. node index.js
