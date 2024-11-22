export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://developers-resource.landpress.line.me/fx/img/01_1_cafe.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://dog.ceo/dog-api/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '狗！',
          weight: 'bold',
          size: 'lg'
        },
        {
          type: 'box',
          layout: 'baseline',
          margin: 'md',
          contents: [
            {
              type: 'icon',
              size: 'sm',
              url: 'https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png'
            },
            {
              type: 'icon',
              size: 'sm',
              url: 'https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png'
            },
            {
              type: 'icon',
              size: 'sm',
              url: 'https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png'
            },
            {
              type: 'icon',
              size: 'sm',
              url: 'https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png'
            },
            {
              type: 'icon',
              size: 'sm',
              url: 'https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png'
            },
            {
              type: 'text',
              text: '5.0',
              size: 'sm',
              color: '#999999',
              margin: 'md',
              flex: 0
            }
          ]
        }
      ]
    }
  }
}
