// подключаем фреймворк
const TelegramBot = require('node-telegram-bot-api');

// здесь указывается токен, который получен от родительского бота выше
const token = '938112493:AAGtlVRhc7syYh_ycOo13P7tsNxsoZMlxls';
// создаём бота
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg, match) => {
    var message = '/hello  /id  /end ' ;
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
