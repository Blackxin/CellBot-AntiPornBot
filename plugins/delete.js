let handler = function (m) {
  if (!m.quoted) throw false
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) throw 'Die Nachricht wurde nicht von einem Bot gesendet!'
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
handler.help = ['delete']
handler.tags = ['info']
handler.command = /^(d|del|delete|unsend?)$/i
handler.limit = false

module.exports = handler
