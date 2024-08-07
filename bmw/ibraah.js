const { zokou } = require("../framework/zokou");
const ffmpeg = require("fluent-ffmpeg");
const fs = require('fs');
zokou( {
  nomCom : "bao",
 categorie : "general",
  reaction : "😂" },
      async (dest, zk, commandeOptions) => {
        
        const { ms, repondre, arg } = commandeOptions;
        
        zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;

        const audiovn = './bmw.mp4';
        
        const fileStream = fs.createWriteStream(audiovn);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
    
          zk.sendMessage(origineMessage, { audio: { url: audiovn,mimetype:'audio/mp4'},{ quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");

  }
});
        
        
/**
     zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;
      // Obtenir le flux audio de la vidéo
      const audioStream = ytdl(urlElement, { filter: 'audioonly', quality: 'highestaudio' });

      // Nom du fichier local pour sauvegarder le fichier audio
      const filename = 'audio.mp3';

      // Écrire le flux audio dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier audio en utilisant l'URL du fichier local
      

     zk.sendMessage(origineMessage, { audio: { url:"audio.mp3"},mimetype:'audio/mp4' }, { quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");
**/   
