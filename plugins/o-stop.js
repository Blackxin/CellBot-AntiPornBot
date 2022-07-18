let handler = async (m, { conn, isROwner, text }) => {
  let { spawn } = require('child_process');
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Stoppen des Bots...\nBitte warten Sie ca. 1 Minute')
    process.send('stop')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['stop']
handler.tags = ['host']
handler.command = /^(stop)$/i

handler.rowner = true

module.exports = handler
