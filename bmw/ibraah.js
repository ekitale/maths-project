"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "bau", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '\n\n ' + "";
    let d = '                                                ';
    let varmess = z + d;
    var mp3 = './bmw.mp4';
    await zk.sendMessage(dest, { audio: { url:mp3,mimetype:'audio/mp4' }, caption: varmess });

    //console.log("montest")
    
});
console.log("mon test");
