module.exports = (client) => {
    const channelId = '809453345436598303'

    client.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = 'welcome <@${member.id}> to the server!'

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    

    })
}