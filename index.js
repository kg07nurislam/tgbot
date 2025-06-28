const { Telegraf } = require('telegraf');

// BOT_TOKEN .env файлдан алат
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Салам! Мен Renderде иштеп жатам.'));
bot.help((ctx) => ctx.reply('Бул бот 24/7 иштейт.'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
