const Discord = require(`discord.js`)
const client = new Discord.Client();

module.exports = {
    name: `invite`,
    description: "you tube website adress",
    run : async(client, message, args)=>{
        const invite = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Invite`)
        .setAuthor(`you can invite me to your server`)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=807267944660467737&permissions=0&scope=bot`)
        .setTimestamp()
        message.channel.send(invite);
    }
}
