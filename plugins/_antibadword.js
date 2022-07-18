let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|Arschloch|b(a?n)?gsa?t|ko?nto?l|me?me?(k |q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tits|toket|gewe|go?blo?k|to?lo?l|idiot|(k| ng)e?nto?(t|d)|haarig|dumm|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|Hure|col(i|mek?) |Schlampe|Hurensohn|Nigga|Fick|Schwanz|Schlampe|bit.ly\/([0-9A-Za-z]{20,24})||Titten|Bastard|Arschloch/i // tambahin sendiri

handler.before = function (m, { isOwner, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe && isOwner) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && !user.banned && isBadword && !isOwner && !isAdmin) {
        user.warning += 10
        this.send2Button(m.chat, `*Schimpfwort entdeckt!*
Warnung: ${user.warning} / 10
Wenn die Warnung 10 erreicht, wirst du *gebannt + gekickt*

Geben Sie *+on antibadword* ein, um Antibadword zu aktivieren
Geben Sie *+Odinbehüte* oder *+maaf* ein, um die Warnung zu reduzieren

„Wer an Odin Glaubt sagt Odin Behüte“ `, wm, 'ANTI-BADWORD AUSSCHALTEN', '+off antibadword', 'Odinbehüte', '+maaf', m)
        if (user.warning >= 10) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}
module.exports = handler
