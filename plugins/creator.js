let PhoneNumber = require('awesome-phonenumber')
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn, usedPrefix, command }) => {
	conn.p = conn.p ? conn.p : {}
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
        global.kontak2 = [
       ['6281393227036', 'Rifai', 'Source Dev', 'rfiunknown62@gmail.com', true], //Muss bleiben
       ['4917629368004', 'Nico-Pit', 'Translator', 'NicoDring2005@gmail.com', true], //Muss bleiben
        ['491625126233', 'ﾌㄖҜ乇尺', 'Dev & Owner', 'supteam.liam-bot@gmx.de', true], //Muss bleiben
        ['4917682235558', 'Danny', 'Hauptsächlich da', 'supteam.liam-bot@gmx.de', 'Test',  true],
          ['4949017629368004', 'Cellbot2', 'CellBot2', 'supteam.liam-bot@gmx.de', true],

          [`${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`, 'Du', 'Ein Mitglied der Verrückten🇵🇱',`Sie haben keine E-Mail-Adresse, da du nicht der Owner bist. Melde dich doch Bei uns unter ${usedPrefix}mitglied`, true],
        ]
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, fkontak, { contexInfo: { forwardingScore: 99999, isForwarded: true } })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `Hallo @${await m.sender.split('@')[0]}, Dies ist unser Team ^_^`, mentions: [m.sender] }, { quoted: conn.p[id][0] })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
