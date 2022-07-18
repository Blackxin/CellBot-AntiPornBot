let yts = require('yt-search')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Wonach suchst du?', m)
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'Video': return `
*Titel:* ${v.title} 
*Link:* (${v.url})
*Dauer:* ${v.timestamp}
*Hochgeladen:* ${v.ago}
*Zuschauer:* ${v.views} 
 `.trim()
      case 'Kanal': return `
*Kanal:* ${v.name} 
*Link:* (${v.url})
*Abonenten:* ${v.subCountLabel} (${v.subCount})
*Videos insgesamt:* ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n*=========================*\n\n')
 conn.reply(m.chat, '*───「 Youtube Suche 」───*\n\n' + teks, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['tools', 'internet']
handler.command = /^yts(earch)?$/i
handler.limit = true

module.exports = handler
