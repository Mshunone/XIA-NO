let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ @${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

๐ฎ *Note:*
โข Gwa gak nerima save contact
โข Gwa berhak tak membalas cht
โข Spam/menggunakan kata kotor ga gw respon
โข Selain tenteang bot no respon
โข Jangan Telp Asw`

//------------ BIO
let ppown = 'https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg'
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *๐ Nama* : Marxell
${htjava} *โ๏ธ Nama RL* : Ya itu
${htjava} *โ๏ธ Gender* : Berbatang
${htjava} *๐ Agama* : Private
${htjava} *โฐ Tanggal lahir* : 248
${htjava} *๐จ Umur* : -
${htjava} *๐งฎ Kelas* : -
${htjava} *๐งฉ Hobby* : Belajar Ngoding, Futsal dll
${htjava} *๐ฌ Sifat* : Baik, Agak sibuk
${htjava} *๐บ๏ธ Tinggal* : Indonesia - JawaTimur - Madiun
${htjava} *โค๏ธ Suka* : Kucing dan Waifu
${htjava} *๐ Benci* : User kont
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
${htjava} *๐ท ษชษดsแดแดษขสแดแด* : ${sig}
${htjava} *๐ซโ าแดแดแดสแดแดแด* : Fay Cat's Kun
${htjava} *๐ ษขษชแดสแดส:* ${sgh}
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = 'Pilih dibawah Ini sesuaikan kebutuhan!'
const sections = [
   {
	title: `${htjava} OWNER โโโโโโโโโยทโข`,
	rows: [
	    {title: "๐ป โข Nomor", rowId: ".owner nomor"},
	{title: "๐ป โข Biodata", rowId: ".owner bio"},
	{title: "๐ฑ โข Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT โโโโโโโยทโข`,
	rows: [
	    {title: "๐ โข Donasi", rowId: ".owner nomor"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER GW* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
