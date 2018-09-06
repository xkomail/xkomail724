const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("__**Eğlence ve Kullanıcı Komutları:**__", `**.banned** = Dene ve Gör! \n**.profil** = Avatarınınızı Gösterir. \n**.herkesebendençay** = Herkese Çay Alırsınız. \n**.koş** = Koşarsınız.\n**.çayiç** = Çay İçersiniz. \n**.çekiç** = İstediğiniz Kişiye Çekiç Atarsınız. \n**.çayaşekerat** = Çaya Şeker Atarsınız. \n**.yumruk-at** = Yumruk Atarsınız. \n**.yaz** = Bota İstediğiniz Şeyi Yazdırırsınız. \n**.sunucuresmi** = BOT Sunucunun Resmini Atar. \n**.sunucubilgi** = BOT Sunucu Hakkında Bilgi Verir. \n**.kullanıcıbilgim** = Sizin Hakkınızda Bilgi Verir. \n `)
  .addField("__**Yetkilisi Komutlar**__", `**.ban** = İstediğiniz Kişiyi Sunucudan Banlar. \n**.kick**  = İstediğiniz Kişiyi Sunucudan Atar. \n**.unban** = İstediğiniz Kişinin Yasağını Açar. \n**.sustur** = İstediğiniz Kişiyi Susturur. \n**.oylama** = Oylama Açar. \n**.duyuru** = Güzel Bir Duyuru Görünümü Sağlar. \n `)
  .addField("**Ana Komutlar**", "**.yardım** = BOT Komutlarını Atar. \n**.bilgi** = BOT Kendisi Hakkında Bilgi Verir. \n**.ping** = BOT Gecikme Süresini Söyler. \n**.davet** = BOT Davet Linkini Atar. \n**.istatistik** = BOT İstatistiklerini Atar. \n ")
  .addField("__**Yapımcı**__", "Chipsy#4599 ")
  .setFooter('Bot Yenilikler Geldikce Uygulanacakdır, arada Donarsa bilinki Bot Güncellenmiştir')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y', 'komut', 'komutlar', 'komuts'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
