const client = require(`../index`)
const memberCounter = require(`./member-counter`)
//Status
// client.on(`ready`, () => {
//     console.log(`${client.user.tag} start`)
//     memberCounter(client)
//     client.user.setActivity("my code", { type: "WATCHING"})
//     client.user.setActivity("Help" , {
//         type: "PLAYING"
//     })
// })  
client.on(`ready`, () =>{
    console.log(`${client.user.username} Tavasot MoHaMaD Online Shod`)
    memberCounter(client)
    const arrayOfStatus = [
        `${client.guilds.cache.size} Servers`,
        `$Help`,
        `welcome to quarex`
    ]
    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0
        const status = arrayOfStatus[index];
        memberCounter(client)
        client.user.setActivity(status , {
            type: "PLAYING"
        })
        index++;
    }, 5000)
})
