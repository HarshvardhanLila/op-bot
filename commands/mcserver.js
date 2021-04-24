const util = require('minecraft-server-util');
const ping = require('minecraft-server-util')
module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    execute(client, message, args, Discord){
        
        if(!args[1]) return message.channel.send('You must type a minecraft server ip')
        if(!args[2]) return message.channel.send('You must type a minecraft server port')

        ping(args[1], parseInt(args[2]), (error, reponse) =>{
            if(error) throw error
            const Embed = new RichEmbed()
            .setTitle('Server Status')
            .addField('Server IP', reponse.host)
            .addField('Server Version', reponse.version)
            .addField('Online Players', reponse.onlinePlayers)
            .addField('Max Players', reponse.maxPlayers)
            
            message.channel.send(Embed)
        })
    }}