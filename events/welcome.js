const client = require(`../index`)
const Discord = require(`discord.js`)

client.on(`guildMemberAdd`, guildMember =>{
    const welcomer = new Discord.MessageEmbed()
    .setColor('RANDOM')
        .setAuthor(`${guildMember.user.username}`, `${guildMember.user.displayAvatarURL({format: "gif", dynamic: true, size: 1024})}`)
        .setAuthor(`${guildMember.user.username}`, `${guildMember.user.displayAvatarURL({format: "png", dynamic: true, size: 1024})}`)
        .setThumbnail(`${guildMember.user.displayAvatarURL({format: "png", dynamic: true, size: 1024})}`)
        .setDescription(`Hello <@${guildMember.user.id}> Welcome To Quarex Server I Hope You enjoy`)
        .setTimestamp()
// guildMember.guild.channels.cache.get(`798986536455897088`).send(`Hello <@${guildMember.user.id}> Khosh Omadi Be Server Ma Omidvaram Lahazat Khoobi Dashte Bashim Kenar Ham`)
    guildMember.guild.channels.cache.get(`804602176102072341`).send(welcomer)
});
