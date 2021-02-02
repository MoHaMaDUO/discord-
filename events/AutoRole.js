const client = require(`../index`)
// const Discord = require(`discord.js`)

client.on(`guildMemberAdd`, guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === `『❤️』𝐉𝐨𝐤𝐞𝐫 𝐒𝐡𝐨𝐩 𝐌𝐞𝐦𝐛𝐞𝐫`);

    guildMember.roles.add(welcomeRole);
})