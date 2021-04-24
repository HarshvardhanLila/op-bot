const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name,command);
}

client.once('ready',() => {
    console.log('LULCRAFT IS ONLINE!');
    client.user.setActivity(`Im in development!!!!!!!!!`, {type:"LISTENING"})
    memberCounter(client);
});

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;    

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command === 'ping'){
   client.commands.get('ping').execute(message,args);
} else if (command == 'youtube'){
    client.commands.get('youtube').execute(message,args);
}
else if (command == 'nooblul')
{
    client.commands.get('nooblul').execute(message,args);

}
else if(command == 'avatar')
{
    client.commands.get('avatar').execute(message,args)

}
else if (command == 'blackypro') {
    
    client.commands.get('blackypro').execute(message,args)
  }
else if (command == 'mcserver'){
    client.commands.get('mcserver').execute(message,args)

}
else if (command == 'purge'){
    client.commands.get('purge').execute(message,args)

}
else if (command == 'play'){
    client.commands.get('play').execute(message,args)

}
else if (command == 'leave'){
    client.commands.get('leave').execute(message,args)

}
else if (command == 'mute'){
    client.commands.get('mute').execute(message,args)

}
else if (command == 'unmute'){
    client.commands.get('unmute').execute(message,args)

}
else if (command == 'suggest'){
    client.commands.get('suggestions').execute(message,args)

}
else if (command == 'slowmode'){
    client.commands.get('slowmode').execute(message,args)

}
else if (command == 'say'){
    client.commands.get('say').execute(message,args)

}
else if (command == 'remind'){
    client.commands.get('remind').execute(message,args)

}
else if (command == 'kick'){
    client.commands.get('kick').execute(message,args)

}
else if (command == 'pause'){
    client.commands.get('pause').execute(message,args)

}
else if (command == 'skip'){
    client.commands.get('skip').execute(message,args)

}
else if (command == 'ban'){
    client.commands.get('ban').execute(message,args)

}

else if (command == 'userinfo'){
    client.commands.get('userinfo').execute(message,args)

}
else if (command == 'nowplaying'){
    client.commands.get('nowplaying').execute(message,args)

}
else if (command == 'help'){
    client.commands.get('help').execute(message,args)

}
else if (command == 'loop'){
    client.commands.get('loop').execute(message,args)

}
else if (command == 'afk'){
    client.commands.get('afk').execute(message,args)

}
else if (command == 'snipe'){
    client.commands.get('snipe').execute(message,args)

}
else if (command == 'stop'){
    client.commands.get('leave').execute(message,args)

}
})

// Create an event listener for new guild members


client.login('ODI5NzAzMTU1MjYwMTk0ODI2.YG7_Rw.bDJxBbg83WwcE4r1AOEuOz0hJfU')