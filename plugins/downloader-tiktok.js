const { tiktokdl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Beispiel verwenden ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Videos können nicht heruntergeladen werden!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok|tt|tkdl|td)$/i
handler.limits = 0.1
handler.premium = true
module.exports = handler
