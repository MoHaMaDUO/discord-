module.exports = async (client) =>{
    const guild = client.guilds.cache.get(`804602174670766113`)
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(`805012260358455316`)
        channel.setName(`【👥】𝐌𝐞𝐦𝐛𝐞𝐫𝐬 : ${memberCount.toLocaleString()}`)
    }, 50000)
}

module.exports = async (client) =>{
    const guild = client.guilds.cache.get(`804602174670766113`)
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(`805012266247258123`)
        channel.setName(`【👥】bot : ${client.count.toLocaleString()}`)
    }, 50000)
}
