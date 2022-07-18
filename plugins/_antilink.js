let handler = m => m

let pornRegex = /http:\/\/bit.ly\/([0-9A-Za-z])|https:\/\/chat-whatsapp-com([0-9A-Za-z]).blogspot.com\/p\/whatsapp-sex-dating.html|https:\/\/bit.ly\/([0-9A-Za-z])|/i
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  let isPornlink = pornRegex.exec(m.text)

  if (m.text.includes(chat.antiLink && isGroupLink && isPornlink && !isAdmin && !m.isBaileys && m.isGroup)) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    let thisPorn1 = `http://bit.ly/[0-9A-Za-z]`
    let thisPorn2 = `https://bit.ly/[0-9A-Za-z]`
    let thisPorn3 = `https://chat-whatsapp-com([0-9A-Za-z]).blogspot.com/p/whatsapp-sex-dating.html`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    if (m.text.includes(thisPorn1)) throw false
    if (m.text.includes(thisPorn2)) throw false 
    if (m.text.includes(thisPorn3)) throw false
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "Bot ist kein Admin :'v" : `\n\nGruppenlink / Pornlink erkannt und ${global.namabot} ist kein Admin, kann also nicht kicken!`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTILINK 」* \n\nGruppenlink / Pornlink erkannt, tschüss, du wirst gekickt!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
