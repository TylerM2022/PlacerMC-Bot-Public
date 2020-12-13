const {
    GuildMember
} = require("discord.js")
const BotVersion = require('../package.json').version;
const Discord = require("discord.js");
var botdev = require('../data.json').botdev;
module.exports = {
    name: 'botversion',
    description: "states botversion",
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#ff1100')
            .setTitle('Bot Version')
            .setAuthor('Official PlacerMC Bot', '', "https://info.placermc.net")
            .setDescription(`I am running version __${BotVersion}__.\n\n Coded by <@752989978535002134> and <@562807936477560862>.`)
            .setThumbnail('https://lh3.googleusercontent.com/nU86U9_biwOwfv_EjtoMmkcBgt88msK1XG-sqikfPmYVFVy4PQLWYp8iOWDWc6oD00tnusRJ32crazrGj--kYg=w122')
        message.channel.send(Embed)
        message.delete;
    }
}