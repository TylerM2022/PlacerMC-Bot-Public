const {
    GuildMember
} = require("discord.js")
const BotVersion = require('../package.json').version;
const Discord = require("discord.js");
var botdev = require('../data.json').botdev;
module.exports = {
    name: 'rules',
    description: "states botversion",
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#ff1100')
            .setTitle('General Rules')
            .setAuthor('PlacerMC', '', "https://info.placermc.net/rules/")
            .setDescription("**Official List**\nVisit <#734943142973014079> for an official list of rules.")
            .setThumbnail('https://lh3.googleusercontent.com/nU86U9_biwOwfv_EjtoMmkcBgt88msK1XG-sqikfPmYVFVy4PQLWYp8iOWDWc6oD00tnusRJ32crazrGj--kYg=w122')
            .addFields({
                name: 'Discord TOS',
                value: 'https://discordapp.com/terms',
                inline: true
            }, {
                name: 'Discord Guidelines',
                value: 'https://discordapp.com/guidelines',
                inline: true
            }, {
                name: 'Website Rules Page',
                value: 'https://info.placermc.net/rules',
                inline: true
            }, )
            .setFooter(`You must abide by these rules to be a member on PlacerMC.`);
        message.channel.send(Embed)
        message.delete;
    }
}