let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'apikeylu',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

//============= Wait and Eror ================//
global.wait = '「 ⏱️ 」Bitte warten...'
global.eror = '「❗」Server FEHLER!'

//========Url Template Buttons=========//
global.dtu = 'ᴛᴡɪᴛᴄʜ'
global.urlnya = "https://www.twitch.tv/losemymind17"

//============= callButtons =============//
global.dtc = 'ʙᴇsɪᴛᴢᴇʀ ᴀɴʀᴜғᴇɴ'
global.phn = '+4917629368004'

//============= Watermark Bot and Sticker =============//
global.wm = '© CellBot2(Original)'
global.author = '© CellBot2(Original)'
global.packname ='CellBot2(Original)'
global.namabot = 'CellBot2(Original)'

//============= Games ================//
global.benar = '_*Richtig✅*_'
global.salah = '_*Falsch❌*_'
global.dikit = "Ein bisschen mehr, Kopf hoch :')"

global.multiplier = 100 // The higher, The harder levelup

//============= Thumb And Image ================//
global.pp = 'https://telegra.ph/file/9f522389d2ed68e53262d.jpg'
global.image = 'https://telegra.ph/file/9f522389d2ed68e53262d.jpg'
global.thumbfoto = 'https://telegra.ph/file/9f522389d2ed68e53262d.jpg'

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("aktualisiert 'config.js'"))
  delete require.cache[file]
  require(file)
})
