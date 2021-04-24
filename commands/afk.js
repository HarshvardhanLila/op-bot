const db = require('quick.db')
const { MessageEmbed, args } = require('discord.js')

module.exports = {
    name : 'afk',
    
}
module.exports.execute = async(client, message, args) => {
    const content = args.join(" ")

    if(!content){
        return message.channel.send('content here')
    }

    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
    const embed = new MessageEmbed()
    .setDescription(`You have been set to afk\n**Reason :** ${content}`)
    .setColor("GREEN")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    message.channel.send(embed)                
}