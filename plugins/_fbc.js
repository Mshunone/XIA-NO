import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => await conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Broadcast Here')).buffer(), `
*ʙʀᴏᴀᴅᴄᴀsᴛ ʜᴇʀᴇ*

${text}
`.trim(), 'Saxia Botz💌', 'ᴍᴇɴᴜ', '.menu', 'sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ?', '.sc', 'ᴅᴏɴᴀsɪ', '.donasi', m)
handler.help = ['bchere <text>']
handler.tags = ['owner']
handler.command = ['bchere']
handler.rowner = true

export default handler
