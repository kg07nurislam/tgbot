const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Салам! Мен kg07nurislam`дын ботумун.'));
bot.help((ctx) => ctx.reply('Бул бот 24/7 иштейт.'));

bot.launch();

app.get('/', (req, res) => {
  res.send('Бот жандуу!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
