let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
𝐈𝐍𝐓𝐑𝐎‹•═════════════❏
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Kelas      :* 
│ *Asal         :* 
╰═════ WELCOME. ━━━━❏
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler
