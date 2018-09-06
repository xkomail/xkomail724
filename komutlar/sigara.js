const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.send('Sigara İçiyorum!');
  message.edit(' :smoking: :cloud: :cloud: :cloud: ');
  message.edit(' :smoking: :cloud: :cloud: ');
  message.edit(' :smoking: :cloud: ');
  message.edit(' :smoking: ')
  message.edit('**Bot Sigar İçsin! ama Siz Sigara İçmeyin!**')
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sigara'],
    permLevel: 0
};

exports.help = {
    name: 'sigara',
    description: 'Sigara İçersiniz, Ama Bot Sigara İçmenizi Tavsiye Etmez',
    usage: 'sigara'
  };