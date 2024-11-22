export default async event => {
  await event.reply({
    type: 'text',
    text: '你要查哪個縣市的活動',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            // 按下去後使用者會傳送出的文字
            text: 'ubike:taipei',
            // 按鈕顯示文字
            label: '北部'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            // 按下去後使用者會傳送出的文字
            text: 'ubike:taipei',
            // 按鈕顯示文字
            label: '台北市'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            uri: 'https://x.com',
            label: '網站'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: 'postback',
            data: 'aaa'
          }
        }
      ]
    }
  })
}
