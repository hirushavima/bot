const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_25_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkExMFRkcmhPZzRvb1FuOEVyUjM5c0FVNEwwUnJPZEgzd284eHN5ajRzWlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpiS0s5bkp2UWMtRUwyeEo4QWFfU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTVjODBiZWItNGU0NS00MjAzLWFiYTUtMDVlYjZiNzBiNjIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE4NyxcbiAgICAgIDE2NyxcbiAgICAgIDMsXG4gICAgICAyNDMsXG4gICAgICA0OSxcbiAgICAgIDU2LFxuICAgICAgNjIsXG4gICAgICAxMjgsXG4gICAgICAxMTEsXG4gICAgICA1NSxcbiAgICAgIDkxLFxuICAgICAgMjM2LFxuICAgICAgMjAxLFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICA0OCxcbiAgICAgIDEyMixcbiAgICAgIDgyLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAxOSxcbiAgICAgIDE2OCxcbiAgICAgIDE1OCxcbiAgICAgIDI0OSxcbiAgICAgIDIyMixcbiAgICAgIDEwOCxcbiAgICAgIDIzMyxcbiAgICAgIDc5LFxuICAgICAgMjMwLFxuICAgICAgMjQ0LFxuICAgICAgNzAsXG4gICAgICA2NSxcbiAgICAgIDgsXG4gICAgICAxNzcsXG4gICAgICAyMjYsXG4gICAgICA4MCxcbiAgICAgIDIyOSxcbiAgICAgIDUzLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldDTFBTRTk3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MDA0OTY5Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjkwMTI1MjIxODg4MTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krRG45NERFSTZ2dmNBR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieCs1ajBkV2tpaXVrNUtoa0txNmpWeVJzOWJzbHpyR1Y0bERTaSt4MUNYUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKYTFYQ2ZyZXFROWx3b1dQZ1lITUtQcitHRVc0R1lJVXBhZmpqT21uSjIvWm5udEtUenE5NTBjMVJ6bzNZajE0eHVJL3BwdjRMOUl5UHJHZ1NHNTlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVUTNRN21RSkc0cjg2SjFZbDcwTkFyZ2JpcDMyRkVHU01iRjlZN3crZXkvRUlRa0VJOU96QzdmT2FJT21QR0Vob0ZobDVoVEJVMjhhcFBHaDFlREZEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MDA0OTY5Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1ODM1OTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1hOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLWE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3RnNXTFZTYmNWbUJBeGFIQ1JiaFFYMnkwRmNIZkpjYThnNlVQWkZzVnZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDI5NDY5NTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDU2NDk1MDg1MzJcIn0iCn0=,  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
