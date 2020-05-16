// подключаем фреймворк
const TelegramBot = require('node-telegram-bot-api');

// здесь указывается токен, который получен от родительского бота выше
const token = '938112493:AAGtlVRhc7syYh_ycOo13P7tsNxsoZMlxls';
// создаём бота
const bot = new TelegramBot(token, { polling: true });

// проверяем чат и если введена команда "/start", выводим сообщение
bot.onText(/\/start/, (msg, match) => {
    // Составляем сообщение, которое будет содержать имя и фамилию того,
    // кто взаимодействует с ботом
    var message = 'Привет *' + msg.chat.last_name + '* ' + msg.chat.first_name;

    // отсылаем сообщение, первым параметром передавая id чата,
    // а вторым уже само сообщение
    bot.sendMessage(msg.chat.id, message);
});