const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    console.log("I'm Ready !");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!yo') {
            //message.reply('poto');
            message.channel.send('poto');
        }
    }
});

bot.on('message', msg => {
    if(msg.content[0] === PREFIX) {
        if(msg.content === PREFIX + 'lu et approuvé') {
            //Recherche si le rôle existe
            let role = msg.guild.roles.find('name', 'The Defenders Fr')

            //Le membre a-t-il le rôle ou non?
            if(msg.member.roles.find('name', 'The Defenders Fr')) {
                msg.channel.send({embed: {
                    color: 0xff0000,
                    description: 'tu es déjà membre.',
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL,
                    },
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: 'By Heliadon'
                    },
                }})
            }
            else{
                msg.member.addRole(role)
                msg.channel.send({embed: {
                    color: 00447003,
                    description: 'Bienvenue dans la secte tenno amuse toi bien et évite de te faire!',
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL,
                    },
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: 'By Heliadon'
                    }
                }});
            }
        }
    }
})

bot.login('NDk4OTMwOTA1NjA0NDIzNjg3.Dp5COw.4SFJxQV1pt577u70d1lTNVVq0iQ') //Token
