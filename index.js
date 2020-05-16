// подключаем фреймворк
const TelegramBot = require('node-telegram-bot-api');

////////////////////////
var imagesnapjs = require('imagesnapjs'), fs = require('fs');


var filename = 'C:/Users/rosti/Desktop/telegram/webcam.jpg';

/////////////////////


// здесь указывается токен, который получен от родительского бота выше
const token = '938112493:AAGtlVRhc7syYh_ycOo13P7tsNxsoZMlxls';
// создаём бота
const bot = new TelegramBot(token, { polling: true });

//////////////////////////
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    if(msg.text == 'photo'){
        fs.exists(filename, function (exists) {
            if(exists) 
                fs.unlinkSync(filename);
            imagesnapjs.capture(filename, { cliflags: '-w 2'}, function(err) {
            console.log(err ? err : 'Success!');
            bot.sendPhoto(chatId, filename, {caption: "It's your photo!"});
            });
        });
    }
});
//////////////////////////


bot.onText(/\/start/, (msg, match) => {
    var message = '/hello /id photo /end' ;
    bot.sendMessage(msg.chat.id, message);
});

// проверяем чат и если введена команда "/start", выводим сообщение
bot.onText(/\/hello/, (msg, match) => {
    // Составляем сообщение, которое будет содержать имя и фамилию того,
    // кто взаимодействует с ботом
    var message = 'Привіт, ' + msg.chat.first_name;
    //console.log(msg);
    // отсылаем сообщение, первым параметром передавая id чата,
    // а вторым уже само сообщение
    bot.sendMessage(msg.chat.id, message);
});

bot.onText(/\/end/, (msg, match) => {
    var message = 'Бувайте, ' + msg.chat.first_name;
    bot.sendMessage(msg.chat.id, message);
});

bot.onText(/\/id/, (msg, match) => {
    var message = 'ID, ' + msg.chat.id;
    bot.sendMessage(msg.chat.id, message);
});


function sendMessageByBot(aChatId, aMessage){
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}
