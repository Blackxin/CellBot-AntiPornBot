let handler = m => m
handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        this.sendButton(m.chat, `
Du hast AFK Verlassen ${user.afkReason ? ' Grund war: ' + user.afkReason : ''}
Wärend ${this.clockString(new Date - user.afk)}
`.trim(), wm, `Menu`, `+menu`, m)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        this.sendButton(m.chat, `
Tagge diese Person nicht!
Diese Person ist AFK ${reason ? 'Grund ' + reason : 'ohne Grund'}
Seit ${this.clockString(new Date - afkTime)}
`.trim(), wm, 'Menu', '.menu', m)
    }
    return true
}

module.exports = handler
