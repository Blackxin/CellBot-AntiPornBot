let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendButton(m.chat, `
${conn.getName(m.sender)} ist jetzt AFK Grund${text ? ': ' + text : ''}
`, wm, `Menu`, `${usedPrefix}menu`, m)
}
handler.help = ['afk <reason>']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler