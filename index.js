const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '938112493:AAGtlVRhc7syYh_ycOo13P7tsNxsoZMlxls';
const bot = new TelegramBot(TOKEN, {polling : true});
bot.on('message' , msg => {
    bot.sendMessage(msg.chat.id, 'Hello my Friend, bot says : "Hi, " ${msg.from.first_name}');
});
