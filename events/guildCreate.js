const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Botumuzun özelliklerini öğrenmek için f!yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için kayıtlar kanalı açın ve deneme için',
  'f!uyarı komutunu kullanın.',
  '',
  `CST resmi sunucusu : https://discord.gg/yq69bGz`,
  `**cst sunucusu** https://discord.gg/yq69bGz`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'f!yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
