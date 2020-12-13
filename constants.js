//Variables, do not remove "export"
//constants DO NOT TOUCH:

export const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
export const client = new discord.Client({disableEveryone: true});
export const BotVersion = require('./package.json').version;
export const {Client, RichEmbed} = require('discord.js');
export const name = require('./package.json').name;
export const discord = require("discord.js");
export const Discord = require("discord.js");
export const bot = new Discord.Client();
export const fs = require('fs');

//var variables, anything can be changed:

export var embedcolor = require('./data.json').embedcolor
export var servername = require('./data.json').servername;
export var botdev = require('./data.json').botdev;
export var prefix = require('./data.json').prefix;

//let variables, do not change var name, only the value:

export let botToken = require('./token.json').token;