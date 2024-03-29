const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  let [t, o] = text.split`,`
  if (!t) throw `Bitte gib eine Suchanfrage ein!\n\nZum Beispiel: ${usedPrefix + command} Rammstein Ohne Dich`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(t)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Inhalt nicht gefunden'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nTrying another server...'}`)
    }
  }
  if (yt === false) throw 'Keine Songs gefunden. Versuche es mit einem Schlüsselwort oder möglichst mit Songtitel und Künstlername'
  if (yt2 === false) throw 'Keine Songs gefunden. Versuche es mit einem Schlüsselwort oder möglichst mit Songtitel und Künstlername'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let th = await(await fetch(image)).buffer()
  let thb = await(await fetch(thumb)).buffer()
  await conn.reply(m.chat, `- Angefordert von @${m.sender.split`@`[0]}`, m, { thumbnail: th, contextInfo: { 
    mentionedJid: [m.sender],
    externalAdReply: {
       sourceUrl: 'https://youtu.be/-tKVN2mAKRI',
       title: 'Läuft grade',
       body: title,
       thumbnail: thb
     }
   }})
  if (o === ' vn') {
    await conn.sendFile(m.chat, dl_link, `${title}` + '.mp3', null, m, true)
  } else if (!o || o === ' audio') {
    await conn.sendFile(m.chat, dl_link, `${title}` + '.mp3', null, m)
  }
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler
