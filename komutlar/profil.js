const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`__**Avatarınız**__:` + '\n ')
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['avatar', 'pp', 'profilresmi'],
 permLevel: 0
};

exports.help = {
 name: 'profil',
 description: 'Avatarınızı Atar ',
 usage: 'profil'
};
