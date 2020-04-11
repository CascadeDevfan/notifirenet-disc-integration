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
    	message.reply('documentation for the OnyxWorks Discord Integration can be found at: ');
  	}
});

client.on('message', message => {
    if (message.content === 'nfo!support') {
    	message.reply('a link to the bot support server can be found at: https://discord.gg/sEBjsau');
  	}
});
client.on('message', message => {
    if (message.content === 'nfo!alarms') {
    	message.reply('Currently under development!');
  	}
});

client.on('message', message => {
    if (message.content === 'nfo!botrev') {
    	message.reply('the bot is currently running NFREV0.1.2 Alpha.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
