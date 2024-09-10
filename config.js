//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348074619176";
global.owner = process.env.OWNER_NUMBER || "2348074619176";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNkTlhsTVZqQ3pmMGIydE1Oc3M2N2hVQURWVDA3TDNHdVlIdkxicngwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHFCTTVoU1Q1VTBWRzdyRkFYTlFnOFJhTXdGOEtKVGYya2ZLb3FIRk9WOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUFRmblFwNXdHV2t1b1RIMjhzRi81ZUZ0emYwZmNqbUYzbWVjd2hEd240PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmV0hua2hlR3dzdWc0eEdGY2cwTFluei83T1poTkh3NU1QNkRQVzAyQUFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGTDgraGIycEZBL0NOZmtYUEZkSUpiYWtYV3JPUVlZdmpoMzJiWkc1MEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imhjc2pnQVJNdzZTaXdmd3VidXpQSzhwSGFjUVdnaUM2bEtURGJNRTRURVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9vY1pNdDV2R05OdnpyaW9aWDFxRVBiVnFjejJoOHN1TWQ1eXZ4NEkyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzRxTFgvai9hSXNLbU4xUXo2RW9RMStXUFZ2MU5oMGpRNHZiZmdxOWl4cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY3Wi8vYjNKZDlSR3V5SVVTRXVJNzN4UWRrTGFLSy9GYXgxNVE2dnlPTWpPQmRQODR3LzdQamFwMFd6Rk5KMkJzMUF0eUhQNFoxRUdhMzNIcDVDTmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJkWThjWXBEcThkZnhNOGtsSmtFckorcXVmcjdHQlk3NTY4MEZoazg4RHBrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzQ2MTkxNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEM0OTg5NTI2NzcwQzNBNjM2MzlCRkQ5NkM4ODcwQTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTk2ODAwN31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYUFaM1Y1SUhTMjZSaUdFMThVWTNYUSIsInBob25lSWQiOiIzMzljZGY5Yy0wMjc1LTQ5NzItYjhhZC1hYWNkNjJhOGMyYTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnI2TlFLSXgxYUFhamV2K2NtQWpsZFVqVVNjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRMdFh4Wm1TbVkzeklOUE5UZjlZMUN1bFNpcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIOUE1RlhCSiIsIm1lIjp7ImlkIjoiMjM0ODA3NDYxOTE3NjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6In4gYEnihKIgIPCfmIwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lMRzI4WUVFUGJjZ0xjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imc2UnVkYStPbWNzVlJjSGRmK2JsVkJTTCtROEZIT2NPdVM1L2YrQkMrV2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNDRC9HMHY1R0dLVDZpRkdqKzRJcjlmRXdOYVcxUjRxQU9wdUl5Lyt2OVlMdUZHMWlnclpMd2VnalNobU5qNXhwSHRvT0hqNGhhK09jL29GUWRRekFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3R1BUYzhLMVhqK0M3akRwZlRsbU9YN2gzLzMyM0xldTlKVU5uU3JuMEpyVFU2Skl6OTVqN1JucUR1STc5TnROV25haTBhRGs4VDJ6L0FCeWVxQi9nQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzQ2MTkxNzY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZT2tibld2anBuTEZVWEIzWC9tNVZRVWkva1BCUnpuRHJrdWYzL2dRdmxwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTY4MDAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNnbyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
