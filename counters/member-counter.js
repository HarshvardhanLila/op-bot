module.exports = async (client) =>{
    const guild = client.guilds.cache.get('807453461414281246')
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('834674400728711189')
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
      

    }, 5000)

}