const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "/";
const pubEmbed = new Discord.RichEmbed()
    .setColor('#eb18d5')
	.setTitle('Welcome to 𝕆 𝕤 𝕒 𝕜 𝕒 ー大阪 !!')
	.setURL('https://discord.gg/Vv3ZAcE')
	.setAuthor('𝕆 𝕤 𝕒 𝕜 𝕒 ᵇ ᵒ ᵗ', 'https://cdn.discordapp.com/avatars/655145254420217857/290ea5e0ef675a6917bba3ed70555d46.png?size=2048')
	.setDescription('Osaka project est un serveur ou tout le monde peut se retrouver et rencontrer des gens vace les memes gôuts!')
	.setThumbnail('https://cdn.discordapp.com/attachments/654096305261641752/655780657523327016/osaka.png')
	.addField('Ici', 'tu peux trouver:')
    .addField('Un chat communautaire!', 'pour faire des rencontres 😁')
    .addField('Un casino!', 'pour les fannas d oseilles 💸')
    .addField('Une partie selfie!', 'pour les fans d insta et snap! 📱')
    .addField('Une partie gaming!', 'pour ceux qui sont des gameurs! 🎮')
    .addField('Une partie love!', 'pour ceux qui sont celib et veulent trouver le grand A! 💘')
    .addField('Une partie art!', 'pour les artistes incompris 🖼🎨')
    .addField('Une partie reseaux sociaux!', 'pour les streamers de discord! ⏺▶')
    .addBlankField()
    .addField('Serveur:', 'https://discord.gg/Vv3ZAcE')
    .addField('made by:', 'Eichi society')
	.setTimestamp()
	.setFooter('Eichi society', 'https://cdn.discordapp.com/attachments/654096305261641752/655761849848954893/eichi_societyTM.png');


client.on("ready", () => {
    console.log(`Dope and ready!`);
    client.user.setStatus('available')
      client.user.setPresence({
          game: {
              name: `Osaka - https://discord.gg/Vv3ZAcE`,
              type: "STREAMING",
              url: "https://www.twitch.tv/hebisnake"
          }
      });
  });


  client.on("message", (message) => {
    if (message.content.startsWith (prefix + "userinfo")) {
        const moment = require('moment');
        let member = message.mentions.members.first() || message.member,
        user = member.user;
        const joinDiscord = moment(user.createdAt).format('llll');
        const joinServer = moment(user.joinedAt).format('llll');
        const embed = new Discord.RichEmbed()
            .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
            .setDescription(`${user}`)
            .setColor(`RANDOM`)
            .setThumbnail(`${user.displayAvatarURL}`)
            .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
            .addField('Status:', user.presence.status, true)
            .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
            .setFooter(`ID: ${user.id}`)
            .setTimestamp();
    
        message.channel.send(embed);
    }
    
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'selfie')) {
		message.react('✅')
			.then(() => message.react('❌'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "sondage")) {
        if (message.member.hasPermission("ADMINISTRATOR")); 
        if(message.deletable) message.delete();
        const channel = message.guild.channels.find('name', 'general');
        const args = message.content.slice(8).trim().split(/ +/g);
        let suggestion = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
        .setColor("#55FFFF")
        .setThumbnail('https://cdn.discordapp.com/attachments/654096305261641752/655768560668377108/statistics-logo-png-computer-icons-chart-clipart-67c96256a107a6ff.png')
        .setTitle('«    Sondage    »')
        .setDescription('**' + suggestion + '**\n\nSay what you think! ⬇')
 
        channel.send(embed).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
            message.channel.send('@everyone')
        })};
    });

    client.on("message", async function(message){
        if (message.content.startsWith( prefix + "pub")) {
            if (message.member.hasPermission("ADMINISTRATOR")); 
            if(message.deletable) message.delete();
            message.channel.send(pubEmbed)
            .then(() => message.channel.send("@everyone"));
        }
    });

    client.on('message', message => {
        if (message.content.startsWith(prefix + "say")) {
            if (message.member.hasPermission("ADMINISTRATOR")); 
            if(message.deletable) message.delete();
            const args = message.content.slice(4).trim().split(/ +/g);
            let suggestion = args.slice(0).join(" ");
     
            message.channel.send(suggestion)
            }
        });

    client.on('message', message => {
        if (message.content.startsWith(prefix + "massping")) {

            message.channel.send('@everyone') 
            if (message.member.hasPermission("ADMINISTRATOR")); 
            if(message.deletable) message.delete();
        }
    });      
            

client.login("NjU1MTQ1MjU0NDIwMjE3ODU3.XfP15w.Gjr9rIdQbMBO4-4iI8KVQH4nhw4")
