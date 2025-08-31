
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"CCJidVTUB/U6+t52K2cI3+oGjaogu1Ge4xxV3e/wfl8="},"public":{"type":"Buffer","data":"XqmuV+KkM6gHd96b/g6myIU6FPpmi5s/zTeBX50tkD0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SJ4QpxWgVGO/J3Y4/sT9pfBeOgpO+fE70qhQSuNkPGg="},"public":{"type":"Buffer","data":"thy4qVaGzYQzISe+/A7wLg6bPFdXUa5IAOIek6P3nDc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GER3HZcIWMl6F4IlhDlOdoAJt2uQbLJ4BRDkqVP1FmA="},"public":{"type":"Buffer","data":"606QxZfg2HfOPbUc5GCe98w81fQJAa4cGzpA7/B89nA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sNxvjBApC0Wr9eFBeYz1mSuPDrq3DAuRCpOaTlS/s18="},"public":{"type":"Buffer","data":"yj+Nd5C8a+ci+pG4fwtypKKjhJBt8KbVIcdse7peNzg="}},"signature":{"type":"Buffer","data":"bR8FUEVoeJGZZREBUOmahx6PupWQP5MGWXKeJVYMgpXermvN2nxY1hYldKQZOguwSdP0aM0TOgCdrrfmM8kYCA=="},"keyId":1},"registrationId":32,"advSecretKey":"axkDgxDICB/2iLGWRqJ0fyrlF4/ssePfAOk6mMQ4PMQ=","processedHistoryMessages":[{"key":{"remoteJid":"2348149953788@s.whatsapp.net","fromMe":true,"id":"3A8207C6F7B00B77C517"},"messageTimestamp":1756642508}],"nextPreKeyId":121,"firstUnuploadedPreKeyId":121,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"o3MHvxFpQ06QZbQJWwkEmQ","phoneId":"7e4a5ad9-f4c1-4592-b7cd-577de0e1a8d8","identityId":{"type":"Buffer","data":"E78kp3j5q70V9JRPAs5BrSiOQL8="},"registered":true,"backupToken":{"type":"Buffer","data":"ABkkXAO72b3l01PE/XzWeq6I/70="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2348149953788:20@s.whatsapp.net","lid":"103590936989923:20@lid","name":"🥶Henry۶ৎ"},"account":{"details":"COTj55kEEL350MUGGAIgACgA","accountSignatureKey":"vYf4V2jY7TXpqAANA8Ivce7wlkalE61z2cv7ila0NWA=","accountSignature":"p/eKFAM57A8yZJ1x7M5jQtttOMmcPeNM0oF7MQFXGeptMAbHAgnelHboqCP97rkiQ+Z8Vayhz8hDX7kTVxd9gA==","deviceSignature":"7l+4UyQR1MARMiU4J6qWF16NysqMplg2FBeKRosi3mSP96+rOnDV94FsSpYByr78Ypw3xMRu+df4I4lMVytJBg=="},"signalIdentities":[{"identifier":{"name":"2348149953788:20@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb2H+Fdo2O016agADQPCL3Hu8JZGpROtc9nL+4pWtDVg"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CA0IEg=="},"lastAccountSyncTimestamp":1756642680,"lastPropHash":"2P1Yhf","myAppStateKeyId":"AAAAAEXw","preKeys":{"private":{"type":"Buffer","data":"QMEZ75DpS6RifN5LvuVQpRtIqNh+sOwHWBWsC3zWUEo="},"public":{"type":"Buffer","data":"HeCM2KeBaE3fU4otJA3Wg78i1Gg4nAnatZh9igw5AXk="}},"senderKeys":{},"timestamp":"2025-08-31T12:18:06.247Z"}",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "HENRY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "2348149953788",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "Henry",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "2348149953788",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
