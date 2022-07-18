let PhoneNumber = require('awesome-phonenumber')
let fs = require('fs')
let moment = require('moment-timezone')

let handler = m => m

handler.all = async function (m) { 
   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (m.chat.endsWith('status@broadcast')) {
        console.log('Status Wangsaf')
    }
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings
    let setting = db.data.settings
    let user = global.db.data.users[m.sender]
    

   let istiktok = /(tiktok.com)/i.test(m.text)
    if (m.text.startsWith('https://') && istiktok && !m.fromMe) {
       this.sendButton(m.chat, `*Gesendeter Tiktok-Link erkannt* \ nSie können direkt herunterladen, indem Sie auf die Schaltfläche unten klicken 👇`, wm, 'Download', `+tt ${m.text}`, m)
    }
                
                       
let usr = m.sender;                    
 let isbitly = /(bit.ly\/([0-9A-Za-z]))/i.test(m.text)
    if (m.text.startsWith('') && isbitly && !m.fromMe) {

      conn.groupParticipantsUpdate(m.chat, [usr], "remove"); return;
    }
    
  let whatsapp = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i.test(m.text)
  if (m.text.startsWith('https://') && whatsapp && !m.fromMe){
    this.sendButton(m.chat, `*Ein gesendeter Link zur Gruppe wurde erkannt!* \nKann der Gruppe direkt beitreten, indem du auf die Schaltfläche unten klickst 👇`, wm, 'Anfrage zum Beitritt zu Gruppen', `+join ${m.text} 666`, m)
  }
   let isyt = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/g.test(m.text)
    if (m.text.startsWith('https://') && isyt && !m.fromMe) {
       this.send2Button(m.chat, `*Von YouTube gesendeter Link erkannt * \ nSie können ihn direkt herunterladen, indem Sie auf die Schaltfläche unten klicken👇`, wm, 'Video', `!ytmp4 ${m.text}`,'Audio', `+ytmp3 ${m.text}`, m)
    }
   let isinsta = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/g.test(m.text)
    if (m.text.startsWith('https://') && isinsta && !m.fromMe) {
       this.sendButton(m.chat, `*Instagram-Link erkannt und gesendet * \nSie können ihn direkt herunterladen, indem Sie auf die Schaltfläche unten klicken 👇`, wm, 'Download', `+ig ${m.text}`, m)
    }
  
    
    
    if (/^bot$/i.test(m.text)) {
        await this.sendButton(m.chat, !(m.isGroup || m.isPrems) && group ? 'nur eine Gruppe' : isBanned ? 'blockierte Chats' : banned ? 'blockierte Benutzer' : 'aktiv', wm, !(m.isGroup || m.isPrems) && group ? 'OWNER' : isBanned ? 'unban' : banned ? 'Fragen Sie den Eigentümer, ob Sie die Blockierung aufheben möchten' : 'OWNER', !(m.isGroup || m.isPrems) && group ? '+owner' : isBanned ? '+unban' : banned ? '+owner' : '+owner', m)
    }


    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: null })
            setting.backupDB = new Date() * 1
        }
    }

    return !0
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Europe/Warsaw').format('HH')
    res = "Gute Nacht"
    if (time >= 4) {
        res = "Guten Morgen"
    }
    if (time > 10) {
        res = "Guten Vormittag"
    }
    if (time >= 15) {
        res = "Guten Nachmittag"
    }
    if (time >= 18) {
        res = "Guten Abend"
    }
    return res
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
