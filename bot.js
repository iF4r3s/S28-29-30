const Discord = require('discord.js');
const bot28 = new Discord.Client();

bot28.on('ready', () => {
  console.log('Logged in as S28-29-30')
});


bot28.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot28.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot28.on('ready', () => {
  let ch = bot28.guilds.get("507972785650401301").channels.find(c => c.id == "516958114201731104");
  setInterval(function() {
    ch.send("28th Lover")
  }, 900);
});


bot28.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f28"){
    message.channel.send(args.join(" "))
  }
});


bot28.login(process.env.FB28);
////////////////////////
////////////////////////
const bot29 = new Discord.Client();
bot29.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot29.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot29.on('ready', () => {
  let ch = bot29.guilds.get("507972785650401301").channels.find(c => c.id == "516958114201731104");
  setInterval(function() {
    ch.send("29th Lover")
  }, 900);
});


bot29.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f29"){
    message.channel.send(args.join(" "))
  }
});


bot29.login(process.env.FB29);
////////////////////////
////////////////////////
const bot30 = new Discord.Client();
bot30.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot30.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot30.on('ready', () => {
  let ch = bot30.guilds.get("507972785650401301").channels.find(c => c.id == "516958114201731104");
  setInterval(function() {
    ch.send("24th Lover")
  }, 900);
});


bot30.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f30"){
    message.channel.send(args.join(" "))
  }
});


bot30.login(process.env.FB30);
