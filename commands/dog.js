import axios from 'axios'
import template from '../templates/dog.js'

export default async event => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    const dogUrl = response.data.message

    console.log('Dog Image URL:', dogUrl)
    const dogs = []
    const t = template()
    t.hero.url = dogUrl
    t.hero.action.uri = dogUrl
    dogs.push(t)
    console.log(t.hero)
    await event.reply([{
      type: 'flex',
      altText: '狗ㄉ結果',
      contents: {
        type: 'carousel',
        contents: [t]
      }
    }, { type: 'text', text: 'ＢＥＳＴ★ＤＯＧ' }])
  } catch (error) {
    console.error('Error fetching dog image:', error)
    throw new Error('Failed to fetch dog image')
  }
}
