let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Wenn Sie eine Fehlermeldung finden, melden Sie sie mit diesem Befehl\n\nBeispiel:\n ${usedPrefix + command} Guten Tag Besitzer, ich habe einen Fehler wie diesen gefunden <Kopieren/markieren Sie die Fehlermeldung>`
    if (text.length < 4) throw `Der Bericht ist zu kurz, mindestens 4 Zeichen!`
    if (text.length > 10000) throw `Bericht ist zu lang, maximal 10000 Zeichen!`
    let teks = `*${command.toUpperCase()}!*\n\nvon : *@${m.sender.split`@`[0]}*\n\nNachricht : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
    	mentions: [m.sender]
    })
    conn.reply(m.chat, `_Nachricht an Bot-Besitzer gesendet, wenn ${command.toLowerCase()} nur herumspielt, wird nicht darauf geantwortet._\n\n*Du erhälttst die Report Antwort im Privat Chat!*`, m)
}
handler.help = ['report', 'request'].map(v => v + '<text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
handler.limit = false
handler.private = false

module.exports = handler
