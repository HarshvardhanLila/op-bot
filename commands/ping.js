module.exports = {
    name: 'ping',
    description:"this is a pong!", 
    execute(message,args){

        message.channel.send('pong!')

    }

}