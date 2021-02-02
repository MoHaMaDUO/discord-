// const express = require('express')
// const app = express()
// app.get("/", (req, res) =>{
//     res.send("Hello World!")
// })
// app.listen(5000, () =>{
//     console.log(`${client.user.username} Tavasot MRJOKER Online Shod`)
// })
//#consts
const Discord = require(`discord.js`)
const client = new Discord.Client();
const prefix = ``
const fs = require(`fs`);
const memberCounter = require(`./events/member-counter`)
module.exports = client;
//#Handlers
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
//#Commands
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
//Logging in to discord
client.login(`Nzk0MTM0ODY3MDg3OTgyNjAy.X-2Zug.E20m5UXlDT_fFhngKufLJUF4qX4`);