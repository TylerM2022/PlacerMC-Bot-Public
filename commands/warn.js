import {
    BotVersion,
    Discord,
    botdev,
    servername
} from '../constants'
module.exports = {
    name: 'warn',
    description: "warn",
    execute(message, args) {

        let person = message.guild.member(message.mentions.users.first());

        if (!person) return message.channel.send("**Usage:** /warn <user> [reason ...]");

        if (!person.id === message.author.id) return message.channel.send("You cannot warn yourself!");



        let reason = "Misconduct";

        if (args[2]) reason = args.splice(2).join(" ");

        if (!person.user.bot) {
            person.send(`You have been warned in ${servername} for **${reason}**.`);


            const embed = new Discord.MessageEmbed()
                .setTitle("User Warned")
                .setDescription(`User warned for: **${reason}**`)
                .setAuthor(message.member.displayName)
                .setColor("RED")
                .setThumbnail(person.user.avatarURL())
                .addFields({
                    name: 'Member',
                    value: person.toString(),
                    inline: true
                }, {
                    name: 'Member ID',
                    value: person.id,
                    inline: true
                })

                .setTimestamp();

            const embed1 = new Discord.MessageEmbed()

                .setDescription(`${person} warned by ${message.member}, for **${reason}**`)
                .setColor("RED")
                .setTimestamp();
            message.channel.send(embed1)


            let ModLogs = '787436459053154314'
            let targetChannel = message.guild.channels.cache.get(ModLogs)
            if (targetChannel) targetChannel.send(embed)
            message.delete
        }
    }
}