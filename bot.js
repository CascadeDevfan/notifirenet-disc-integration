const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Thousands of NFN Networks and counting",  //The message shown
            type: "WATCHING:" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

client.on('message', message => {
    if (message.content === 'nfo!help') {
    	message.reply('Documentation for the OnyxWorks Discord Integration can be found at: ');
  	}
});

client.on('message', message => {
    if (message.content === 'nfo!support') {
    	message.reply('A link to the bot support server can be found at: https://discord.gg/sEBjsau');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
