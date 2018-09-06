const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` **komutu sadece sunucularda kullanılabilir.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('**Kaç mesaj silmem gerektiğini belirtmedin.**')
  if (mesajsayisi > 101) return message.channel.send('**__100__** **adetden fazla mesaj silemem!**');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(':white_check_mark:' + 'İşlem **Başarılı!** Toplam Silinen Mesaj Sayısı » `' + mesajsayisi + '` «')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'clear', 'çöp'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
