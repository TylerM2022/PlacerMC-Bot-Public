const {
    GuildMember
} = require("discord.js")
const BotVersion = require('../package.json').version;
const Discord = require("discord.js");
var botdev = require('../data.json').botdev;
module.exports = {
    name: 'server-info',
    description: "shows server info",
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#ff1100')
            .setThumbnail('https://lh3.googleusercontent.com/nU86U9_biwOwfv_EjtoMmkcBgt88msK1XG-sqikfPmYVFVy4PQLWYp8iOWDWc6oD00tnusRJ32crazrGj--kYg=w122')
            .setTitle('Server Info')
            .setAuthor('PlacerMC', '', "https://info.placermc.net")
            .addFields({
                name: 'Server IP',
                value: 'PlacerMC.net'
            }, {
                name: 'Compatible Versions',
                value: '1.8 or later',
                inline: true
            }, {
                name: 'Website & Store',
                value: 'Check <#730565215283839137> for the website addresses.',
                inline: false
            }, )
            .setFooter(``)
        message.channel.send(Embed)
        message.delete;
    }
}
