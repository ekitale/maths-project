"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "bau", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '\n\n ' + "";
    let d = '                                                ';
    let varmess = z + d;
    var mp3 = 'https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound';
    await zk.sendMessage(dest, { audio: { url:mp3}, caption: varmess });

    //console.log("montest")
    
});
console.log("mon test");
