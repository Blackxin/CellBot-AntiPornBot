let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw false
  conn.reply(m.chat, `https://pl.pornhub.com/video/search?search=${m.text.replace(`${usedPrefix}searchphpl `,'').replace(' ','+', ' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+')}`.trim(), m, m.mentionedJid ? { contexInfo: {
    mentionedJid: m.mentionedJid
  }
                                                                                                       } : {})
}
handler.help = ['searchphpl <text>']
handler.tags = ['nsfw']
handler.command = /^searchphpl/i 

module.exports = handler
