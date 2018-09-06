const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağını bana Vahiy mi gelecek?**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(255, 165, 0)
    .setImage(`https://media.giphy.com/media/TlK63EoF34KJy7wt96M/giphy.gif`)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana :hammer: Attı. Canın Acımış Olmalı!**' + '\nhttps://media.giphy.com/media/TlK63EoF34KJy7wt96M/giphy.gif')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç'
};
