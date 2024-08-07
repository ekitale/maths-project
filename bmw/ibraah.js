const { zokou } = require("../framework/zokou");
const ffmpeg = require("fluent-ffmpeg");
zokou( {
  nomCom : "bao",
 categorie : "general",
  reaction : "😂" },
      async (dest, zk, commandeOptions) => {
        const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
    const audiovn = './bmw.mp4';
          zk.sendMessage(dest, { audio: { url: audiovn,mimetype:'audio/mp4'},ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100] });
  }
) ;
        
        
