const TGReport = async (bot: any) => {
  // ? Tg Report Function
  bot.command('/Report', async (ctx: any) => {
    ctx.telegram.sendMessage(ctx.chat.id, `Please Provie Your info to continue next section`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Req Your '
            }
          ]
        ]
      }
    });
  });
};
