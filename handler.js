//imports needed variables:
import {
    Discord,
    discord,
    bot,
    BotVersion,
    client,
    name,
    botdev,
    prefix,
    fs,
    servername,
    embedcolor,
    commandFiles,
    botToken
} from './constants'

//makes a new collection, don't touch this
bot.commands = new Discord.Collection();
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

//command handler, do not change anything from line 26 to line 30
bot.on(`message`, message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/g);
    switch (args[0].toLowerCase()) {

        //commands:
        //add a new command by doing this:
//      
//      case "command":
//          bot.commands.get('put your javascript file here, do not add .js')
//          break;

        // for staff commands:
//
//      case "command":
//          if (message.member.roles.cache.has('732229478092374016')) {
//          bot.commands.get('put your javascript file here, do not add .js')
//          } else { message.reply("You do not have permission to use that command!")}
//          break; 

        case "botversion":
            bot.commands.get('botversion').execute(message, args)
            break;

        case "kick":
            if (message.member.roles.cache.has('732229478092374016')) {
                bot.commands.get('kick').execute(message, args);
            } else {
                message.reply("You do not have permission to use that command!")
            }
            break;

        case "rules":
            bot.commands.get('rules').execute(message, args);
            break;

        case "server-info":
            bot.commands.get('server-info').execute(message, args);
            break;

        case "ban":
            if (message.member.roles.cache.has('732229478092374016')) {
                bot.commands.get('ban').execute(message, args);
            } else {
                message.reply("You do not have permission to use that command!")
            }
            break;

        case "warn":
            if (message.member.roles.cache.has('732229478092374016')) {
                bot.commands.get('warn').execute(message, args);
            } else {
                message.reply("You do not have permission to use that command!")
            }
            break;

    }
});