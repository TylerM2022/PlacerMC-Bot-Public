import {
    BotVersion,
    Discord,
    botdev,
    servername
} from '../constants'
module.exports = {
    name: 'kick',
    description: "kick",
    execute(message, args) {

        let person = message.guild.member(message.mentions.users.first());

        if (!person) return message.channel.send("**Usage:** -kick <user> [reason ...]");

        if (!person.id === "786116605133717534") return message.channel.send("Nice try >:(");

        if (!person.kickable) return message.channel.send("This user can\'t be kicked.");

        if (!person.id === message.author.id) return message.channel.send("You cannot kick yourself!");



        let reason = "Misconduct";

        if (args[2]) reason = args.splice(2).join(" ");

        if (!person.user.bot) {
            person.send(`You have been kicked from ${servername} for **${reason}**.`);
            person.kick({
                reason: reason
            })


            const embed = new Discord.MessageEmbed()
                .setTitle("User kicked")
                .setDescription(`User kicked for: **${reason}**`)
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
            message.channel.send(embed)
            message.delete;
        }
    }
}