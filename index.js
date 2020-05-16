var TelegramBot = require('node-telegram-bot-api');
var imagesnapjs = require('imagesnapjs'), fs = require('fs');

var token = 'токен_вашего_бота';
var filename = '/Users/catethysis/telegram/webcam.jpg';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
var chatId = msg.chat.id;
console.log(msg);
if(msg.text == 'photo')
fs.exists(filename, function (exists) {
if(exists)
fs.unlinkSync(filename);
imagesnapjs.capture(filename, { cliflags: '-w 2'}, function(err) {
console.log(err ? err : 'Success!');
bot.sendPhoto(chatId, filename, {caption: "It's your photo!"});
});
});
});