let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
๐๐๐๐๐โนโขโโโโโโโโโโโโโโ
โ       *ใ Kartu Intro ใ*
โ *Nama     :* 
โ *Gender   :* 
โ *Umur      :* 
โ *Kelas      :* 
โ *Asal         :* 
โฐโโโโโ WELCOME. โโโโโ
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler
