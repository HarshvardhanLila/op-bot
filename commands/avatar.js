const Discord = require('discord.js');


module.exports = {
    name:'avatar',
    description:"Shows your avatar", 
    execute(message,args){

if (args[0]) {
    const user = message.mentions.users.first();
    if (!user) return message.reply('Please mention a user to get the avatar from.');

    const otherIconEmbed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s avatar`)
      .setImage(user.displayAvatarURL());

    return message.channel.send(otherIconEmbed).catch(err => console.log(err));
  }

  const myIconEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s avatar`)
    .setImage(message.author.displayAvatarURL());

  return message.channel.send(myIconEmbed).catch(err => console.log(err));
}
}
