const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Салам! Мен kg07nurislam`дын ботумун.'));
bot.help((ctx) => ctx.reply('Бул бот 24/7 иштейт.'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
