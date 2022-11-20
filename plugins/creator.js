//ini bukan creator kalo mau ganti aj di creator2.js ini buat credit ya anjeng
const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


"displayName": "CREATOR•RULLBOT",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:CREATOR•BOT\nitem1.TEL;waid=6287753812675:6287753812675\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:khoirulmustofa767@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3eggcxd\nitem3.X-ABLabel:;;🇵 Indonesian;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Trenggalek 🇯🇵\nitem5.X-ABLabel:───────[ RULLBOT ]───────\nEND:VCARD"
  }, {
  }, {
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler
