const client = require(`../index`)
// const Discord = require(`discord.js`)

client.on(`guildMemberAdd`, guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === ``);

    guildMember.roles.add();
})
