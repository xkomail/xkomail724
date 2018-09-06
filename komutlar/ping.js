const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(':rotating_light: **Bot Pingi:' + ':star2: ' + client.ping + ' :star2:' + '** ms.' + '\n ' + '\n:pushpin: **Bot İstatistikleri için**' + ':pushpin:' + '\n:white_check_mark:  **.istatistik**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
