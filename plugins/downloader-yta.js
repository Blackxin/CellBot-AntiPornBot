let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let limit = 50
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  if (!args || !args[0]) throw `Bitte geben Sie die Youtube-URL ein, die Sie herunterladen möchten!\n\nBeispiel: ${usedPrefix + command} https://youtu.be/zyJJlPSeEpo`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `Dateigröße: ${filesizeF}\nDateigröße über ${limit} MB, laden Sie es selbst herunter: ${dl_link}` : global.wait)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
Titel: ${title}
Dateigröße: ${filesizeF}
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4'
  })
}
handler.help = ['mp3', 'ytmp3']
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)|mp3$/i
handler.limit = true

module.exports = handler
