import 'dotenv/config'
import linebot from 'linebot'
import commandDog from './commands/dog.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (/狗|dog/i.test(event.message.text)) {
      await commandDog(event)
    } else {
      await event.reply('你沒提到 「狗」，狗呢？')
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
