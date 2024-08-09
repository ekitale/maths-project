/**

const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const yt=require("../framework/dl/ytdl-core.js")
const ffmpeg = require("fluent-ffmpeg");
const yts1 = require("youtube-yts");
//var fs =require("fs-extra")

zokou({
  nomCom: "song",
  categorie: "Search",
  reaction: "🎧"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
  if (!arg[0]) {
    repondre("wrong!!! Ie. _Play hozambe by Beltah ft shifura._");
    return;
  }

  try {
    let topo = arg.join(" ")
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;
          
       let infoMess = {
          image: {url : videos[0]. thumbnail},
         caption : `\n𝑩𝑴𝑾 𝑴𝑫 𝑺𝑶𝑵𝑮 𝑷𝑳𝑨𝒀𝑬𝑹\n\n*song name :* _${videos[0].title}_

*Time :* _${videos[0].timestamp}_

*Url :* _${videos[0].url}_


©𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔`
       }

      

      

      
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

     
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier audio :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
      });
    } else {
      repondre('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});

  

zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("insert video name Ie. _video hozambee by Beltah ft shifura._");
    return;
  }

  const topo = arg.join(" ");
  try {
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
        image: { url: videos[0].thumbnail },
        caption: `𝑩𝑴𝑾 𝑴𝑫 𝑽𝑰𝑫𝑬𝑶 𝑷𝑳𝑨𝒀𝑬𝑹\n\n*Video name :* _${Element.title}_
*Time :* _${Element.timestamp}_
*Url :* _${Element.url}_
\n\n\n ©𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔`
      };

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });

      // Obtenir les informations de la vidéo à partir du lien YouTube
      const videoInfo = await ytdl.getInfo(Element.url);
      // Format vidéo avec la meilleure qualité disponible
      const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
      // Télécharger la vidéo
      const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

      // Nom du fichier local pour sauvegarder la vidéo
      const filename = 'video.mp4';

      // Écrire le flux vidéo dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      videoStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier vidéo en utilisant l'URL du fichier local
        zk.sendMessage(origineMessage, { video: { url :"./video.mp4"} , caption: "©𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔", gifPlayback: false }, { quoted: ms });
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier vidéo :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier vidéo.');
      });
    } else {
      repondre('No video found');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});
**/
const _0x3ba567=_0x2371;(function(_0x454ab5,_0x2d3c95){const _0x3318b5=_0x2371,_0x548f9f=_0x454ab5();while(!![]){try{const _0x26149c=parseInt(_0x3318b5(0x155))/0x1*(parseInt(_0x3318b5(0x186))/0x2)+-parseInt(_0x3318b5(0x176))/0x3*(parseInt(_0x3318b5(0x166))/0x4)+parseInt(_0x3318b5(0x163))/0x5+-parseInt(_0x3318b5(0x185))/0x6+parseInt(_0x3318b5(0x151))/0x7+-parseInt(_0x3318b5(0x18b))/0x8*(-parseInt(_0x3318b5(0x169))/0x9)+-parseInt(_0x3318b5(0x16a))/0xa;if(_0x26149c===_0x2d3c95)break;else _0x548f9f['push'](_0x548f9f['shift']());}catch(_0x2e70f8){_0x548f9f['push'](_0x548f9f['shift']());}}}(_0x1b7f,0x18761));const _0x24d998=(function(){let _0x5e197a=!![];return function(_0x115829,_0x273e96){const _0x33cbb9=_0x5e197a?function(){if(_0x273e96){const _0xe74a2d=_0x273e96['apply'](_0x115829,arguments);return _0x273e96=null,_0xe74a2d;}}:function(){};return _0x5e197a=![],_0x33cbb9;};}()),_0x452bd2=_0x24d998(this,function(){const _0x35d954=_0x2371;return _0x452bd2[_0x35d954(0x13d)]()['search'](_0x35d954(0x142))['toString']()[_0x35d954(0x161)](_0x452bd2)[_0x35d954(0x15f)](_0x35d954(0x142));});_0x452bd2();const _0x40f634=(function(){let _0xf42ed4=!![];return function(_0x11331c,_0x5b1b4d){const _0x39bb4d=_0xf42ed4?function(){const _0x48ac10=_0x2371;if(_0x5b1b4d){const _0x2ad0e2=_0x5b1b4d[_0x48ac10(0x184)](_0x11331c,arguments);return _0x5b1b4d=null,_0x2ad0e2;}}:function(){};return _0xf42ed4=![],_0x39bb4d;};}()),_0xfec1e6=_0x40f634(this,function(){const _0x20dd5a=_0x2371;let _0x29ef20;try{const _0x44dac2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x29ef20=_0x44dac2();}catch(_0x48238c){_0x29ef20=window;}const _0x12b534=_0x29ef20[_0x20dd5a(0x17e)]=_0x29ef20['console']||{},_0x37bf6f=['log','warn',_0x20dd5a(0x12f),'error',_0x20dd5a(0x15a),_0x20dd5a(0x14a),_0x20dd5a(0x14d)];for(let _0x178880=0x0;_0x178880<_0x37bf6f[_0x20dd5a(0x15e)];_0x178880++){const _0x3c41e4=_0x40f634[_0x20dd5a(0x161)]['prototype'][_0x20dd5a(0x130)](_0x40f634),_0x2966de=_0x37bf6f[_0x178880],_0x2db2fc=_0x12b534[_0x2966de]||_0x3c41e4;_0x3c41e4[_0x20dd5a(0x147)]=_0x40f634['bind'](_0x40f634),_0x3c41e4[_0x20dd5a(0x13d)]=_0x2db2fc[_0x20dd5a(0x13d)][_0x20dd5a(0x130)](_0x2db2fc),_0x12b534[_0x2966de]=_0x3c41e4;}});function _0x1b7f(){const _0x205e9b=['search','\x0a│⿻\x20*Author:*\x20','constructor','*GROUP\x20NAME:*-\x20','894370MEhQvK','Error\x20from\x20Flash-MD\x20API:','Insert\x20a\x20song\x20name!','36EvPNNV','entries','subject','9owwxcb','667930BQdjoi','*GROUPS\x20AM\x20IN*\x0a\x0a','\x0a│⿻\x20*Quality:*\x20','timestamp','sendMessage','participants','url','name','\x0a╰────────────────◆\x0a⦿\x20*Direct\x20Link:*\x20','*!!','*ALPHA-MD\x20SONG\x20PLAYER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20','map','21852EcczRT','\x0a│⿻\x20*Duration:*\x20','\x0a\x0a╭───────────────◆\x0a│\x20*_Powered\x20by\x20keithkeizzah._*\x0a╰────────────────◆\x20','Sending\x20audio\x20file\x20completed!','Please\x20insert\x20a\x20video\x20name.','song','join','../framework/dl/ytdl-core.js','console','status','*GROUP\x20ID:*-\x20','success\x20✅','ago','slice','apply','624618opPJJq','24792KCQKVr','file_size','../framework/zokou','Sending\x20video\x20file\x20completed!','Search','836608wKkamO','info','bind','.mp3','download','Please\x20insert\x20a\x20song\x20name.','quality','Download\x20Success...','fluent-ffmpeg','title','No\x20matching\x20videos\x20found\x20for:\x20*','*MEMBERS:*-\x20','data','log','Error:','toString','audio/mpeg','youtube-yts','\x0a│⿻\x20*Artist:*\x20','error','(((.+)+)+)+$','audio/mp4','play','yt-search','You\x20are\x20Currently\x20in\x20','__proto__','thumbnail','*ALPHA-MD\x20VIDEO\x20DOWNLOADER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20','table','React','author','trace','*ALPHA-MD\x20SONG\x20PLAYER*\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20','\x0a│⿻\x20*File\x20Size:*\x20','\x0a│⿻\x20*Uploaded:*\x20','285593twPlUf','\x0a│⿻\x20*Viewers:*\x20','\x0a│⿻\x20*Views:*\x20','mygroups','1MwoMCp','An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20video.','https://api.prabath-md.tech/api/ytmp3?url=','User','views','exception','fileSize','json','videos','length'];_0x1b7f=function(){return _0x205e9b;};return _0x1b7f();}_0xfec1e6();function _0x2371(_0x52b058,_0x1f081a){const _0x50f009=_0x1b7f();return _0x2371=function(_0xfec1e6,_0x40f634){_0xfec1e6=_0xfec1e6-0x12f;let _0x107cc7=_0x50f009[_0xfec1e6];return _0x107cc7;},_0x2371(_0x52b058,_0x1f081a);}const {zokou}=require(_0x3ba567(0x188)),yts=require(_0x3ba567(0x145)),fs=require('fs'),yt=require(_0x3ba567(0x17d)),ffmpeg=require(_0x3ba567(0x136)),yts1=require(_0x3ba567(0x13f));zokou({'nomCom':_0x3ba567(0x154),'categorie':_0x3ba567(0x158),'reaction':'💿'},async(_0xe73fcf,_0x1d49d5,_0xc633f9)=>{const _0xd762ea=_0x3ba567,{ms:_0x4418b5,repondre:_0x415738,arg:_0x51b87f}=_0xc633f9;let _0x11ce06=await _0x1d49d5['groupFetchAllParticipating'](),_0x3c3f1c=Object[_0xd762ea(0x167)](_0x11ce06)[_0xd762ea(0x183)](0x0)[_0xd762ea(0x175)](_0x12ef05=>_0x12ef05[0x1]),_0x3d9614=_0x3c3f1c[_0xd762ea(0x175)](_0x4d35ba=>_0x4d35ba['id']),_0x5b2904=_0xd762ea(0x16b);_0x415738(_0xd762ea(0x146)+_0x3d9614[_0xd762ea(0x15e)]+'\x20groups,\x20Flash\x20MD\x20will\x20send\x20that\x20list\x20in\x20a\x20moment.\x20.\x20.');for(let _0x5d3ea3 of _0x3d9614){let _0xbebbd5=await _0x1d49d5['groupMetadata'](_0x5d3ea3);_0x5b2904+=_0xd762ea(0x162)+_0xbebbd5[_0xd762ea(0x168)]+'\x0a',_0x5b2904+=_0xd762ea(0x139)+_0xbebbd5[_0xd762ea(0x16f)]['length']+'\x0a',_0x5b2904+=_0xd762ea(0x180)+_0x5d3ea3+'\x0a\x0a';}await _0x415738(_0x5b2904);}),zokou({'nomCom':_0x3ba567(0x144),'categorie':_0x3ba567(0x18a),'reaction':'💿'},async(_0x5741c8,_0x5c5f25,_0x4483ba)=>{const _0x52b023=_0x3ba567,{ms:_0xb32ea4,repondre:_0x2c37a2,arg:_0x128652}=_0x4483ba;if(!_0x128652[0x0]){_0x2c37a2(_0x52b023(0x133));return;}try{let _0x22a9a9=_0x128652[_0x52b023(0x17c)]('\x20');const _0x506496=await yts(_0x22a9a9),_0x39b901=_0x506496['videos'];if(_0x39b901&&_0x39b901['length']>0x0&&_0x39b901[0x0]){const _0x577257=_0x39b901[0x0]['url'],_0xc3fe72=await fetch('https://api.prabath-md.tech/api/ytmp3?url='+encodeURIComponent(_0x577257)),_0x3dd901=await _0xc3fe72[_0x52b023(0x15c)]();if(_0x3dd901[_0x52b023(0x17f)]===_0x52b023(0x181)){const _0x1d1276=_0x3dd901[_0x52b023(0x13a)][_0x52b023(0x132)],_0x4cff19={'title':_0x3dd901[_0x52b023(0x13a)][_0x52b023(0x137)],'fileSize':_0x3dd901['data'][_0x52b023(0x187)],'quality':_0x3dd901[_0x52b023(0x13a)][_0x52b023(0x134)]};let _0x2d09c5={'image':{'url':_0x39b901[0x0][_0x52b023(0x148)]},'caption':_0x52b023(0x174)+_0x4cff19[_0x52b023(0x137)]+_0x52b023(0x14f)+_0x4cff19['fileSize']+_0x52b023(0x16c)+_0x4cff19[_0x52b023(0x134)]+'\x0a│⿻\x20*Duration:*\x20'+_0x39b901[0x0][_0x52b023(0x16d)]+'\x0a│⿻\x20*Viewers:*\x20'+_0x39b901[0x0][_0x52b023(0x159)]+_0x52b023(0x150)+_0x39b901[0x0][_0x52b023(0x182)]+_0x52b023(0x140)+_0x39b901[0x0][_0x52b023(0x14c)]['name']+_0x52b023(0x172)+_0x1d1276+'\x0a\x0a╭────────────────◆\x0a│\x20*_Powered\x20by\x20keithkeizzah._*\x0a╰─────────────────◆'};_0x5c5f25[_0x52b023(0x16e)](_0x5741c8,_0x2d09c5,{'quoted':_0xb32ea4}),_0x5c5f25[_0x52b023(0x16e)](_0x5741c8,{'audio':{'url':_0x1d1276},'mimetype':_0x52b023(0x143)},{'quoted':_0xb32ea4,'ptt':![]}),console[_0x52b023(0x13b)]('Sending\x20audio\x20file\x20completed!'),await _0xb32ea4[_0x52b023(0x14b)]('✅'),_0x2c37a2('Download\x20Success...');}else _0x2c37a2('Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.');}else _0x2c37a2('No\x20videos\x20found.');}catch(_0x5f1994){console[_0x52b023(0x141)](_0x52b023(0x164),_0x5f1994),_0x2c37a2(_0x52b023(0x156));}}),zokou({'nomCom':'video','categorie':_0x3ba567(0x18a),'reaction':'🎥'},async(_0x4e5626,_0x3b396b,_0x92d2f7)=>{const _0x369a12=_0x3ba567,{arg:_0x4a47db,ms:_0x376a72,repondre:_0x3c2130}=_0x92d2f7;if(!_0x4a47db[0x0]){_0x3c2130(_0x369a12(0x17a));return;}const _0x4a8d3c=_0x4a47db[_0x369a12(0x17c)]('\x20');try{const _0x1730d5=await yts(_0x4a8d3c),_0x25211c=_0x1730d5[_0x369a12(0x15d)];if(_0x25211c&&_0x25211c[_0x369a12(0x15e)]>0x0&&_0x25211c[0x0]){const _0x233879=_0x25211c[0x0],_0x133532=await fetch('https://api.prabath-md.tech/api/ytmp3?url='+encodeURIComponent(_0x233879[_0x369a12(0x170)])),_0x48eb93=await _0x133532['json']();if(_0x48eb93['status']==='success\x20✅'){const _0x1ef75b=_0x48eb93[_0x369a12(0x13a)][_0x369a12(0x132)],_0x2868c2={'title':_0x48eb93[_0x369a12(0x13a)][_0x369a12(0x137)],'fileSize':_0x48eb93[_0x369a12(0x13a)]['file_size'],'quality':_0x48eb93[_0x369a12(0x13a)]['quality']};let _0x1d0868={'image':{'url':_0x25211c[0x0][_0x369a12(0x148)]},'caption':_0x369a12(0x149)+_0x2868c2[_0x369a12(0x137)]+_0x369a12(0x14f)+_0x2868c2[_0x369a12(0x15b)]+'\x0a│⿻\x20*Quality:*\x20'+_0x2868c2['quality']+_0x369a12(0x177)+_0x233879['timestamp']+_0x369a12(0x152)+_0x233879[_0x369a12(0x159)]+_0x369a12(0x150)+_0x233879[_0x369a12(0x182)]+_0x369a12(0x160)+_0x233879[_0x369a12(0x14c)][_0x369a12(0x171)]+_0x369a12(0x172)+_0x1ef75b+_0x369a12(0x178)};_0x3b396b[_0x369a12(0x16e)](_0x4e5626,_0x1d0868,{'quoted':_0x376a72}),_0x3b396b[_0x369a12(0x16e)](_0x4e5626,{'video':{'url':_0x1ef75b},'caption':'╭───────────────◆\x0a│\x20*ALPHA-MD\x20DOWNLOADER*\x0a╰────────────────◆','gifPlayback':![]},{'quoted':_0x376a72}),console[_0x369a12(0x13b)](_0x369a12(0x189)),await _0x376a72[_0x369a12(0x14b)]('✅'),_0x3c2130('Download\x20Success...');}else _0x3c2130('Failed\x20to\x20download\x20video.\x20Please\x20try\x20again\x20later.');}else _0x3c2130('No\x20video\x20found.');}catch(_0x196442){console[_0x369a12(0x141)](_0x369a12(0x164),_0x196442),_0x3c2130('An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20video.');}}),zokou({'nomCom':_0x3ba567(0x17b),'categorie':_0x3ba567(0x18a),'reaction':'💿'},async(_0x3a06ab,_0x1d1a87,_0x35c9e2)=>{const _0xc21597=_0x3ba567,{ms:_0x11155f,repondre:_0x401be5,arg:_0x502190}=_0x35c9e2;if(!_0x502190[0x0])return _0x401be5(_0xc21597(0x165));try{const _0x57c340=_0x502190['join']('\x20'),_0x386af3=await yts(_0x57c340),_0x4ef72e=_0x386af3['videos'];if(!_0x4ef72e||_0x4ef72e[_0xc21597(0x15e)]<=0x0)return _0x401be5(_0xc21597(0x138)+_0x57c340+_0xc21597(0x173));const _0x41adb3=_0x4ef72e[0x0]['url'],_0x1d1a58=await fetch(_0xc21597(0x157)+encodeURIComponent(_0x41adb3)),_0x440396=await _0x1d1a58[_0xc21597(0x15c)]();if(_0x440396['status']===_0xc21597(0x181)){const _0x1965cf=_0x440396[_0xc21597(0x13a)][_0xc21597(0x132)],_0x1d779e={'title':_0x440396[_0xc21597(0x13a)]['title'],'fileSize':_0x440396['data'][_0xc21597(0x187)],'quality':_0x440396[_0xc21597(0x13a)][_0xc21597(0x134)]},_0x53fe98=_0xc21597(0x14e)+_0x1d779e['title']+'\x0a│⿻\x20*File\x20Size:*\x20'+_0x1d779e[_0xc21597(0x15b)]+_0xc21597(0x16c)+_0x1d779e[_0xc21597(0x134)]+_0xc21597(0x177)+_0x4ef72e[0x0][_0xc21597(0x16d)]+_0xc21597(0x153)+_0x4ef72e[0x0][_0xc21597(0x159)]+'\x0a│⿻\x20*Uploaded:*\x20'+_0x4ef72e[0x0][_0xc21597(0x182)]+_0xc21597(0x140)+_0x4ef72e[0x0][_0xc21597(0x14c)][_0xc21597(0x171)]+'\x0a╰────────────────◆\x0a⦿\x20*Direct\x20Link:*\x20'+_0x1965cf+'\x0a\x0a╭───────────────◆\x0a│\x20*_Powered\x20by\x20keithkeizzah._*\x0a╰────────────────◆';await _0x1d1a87[_0xc21597(0x16e)](_0x3a06ab,{'text':_0x53fe98},{'quoted':_0x11155f}),await _0x1d1a87[_0xc21597(0x16e)](_0x3a06ab,{'document':{'url':_0x1965cf},'mimetype':_0xc21597(0x13e),'fileName':_0x1d779e[_0xc21597(0x137)]+_0xc21597(0x131)},{'quoted':_0x11155f}),console[_0xc21597(0x13b)](_0xc21597(0x179)),await _0x11155f[_0xc21597(0x14b)]('✅'),_0x401be5(_0xc21597(0x135));}else _0x401be5('Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.');}catch(_0x4d5eab){console[_0xc21597(0x141)](_0xc21597(0x13c),_0x4d5eab),_0x401be5(_0xc21597(0x156));}});
/**
const _0x24d998 = function () {
  let _0x5e197a = true;
  return function (_0x115829, _0x273e96) {
    const _0x33cbb9 = _0x5e197a ? function () {
      if (_0x273e96) {
        const _0xe74a2d = _0x273e96.apply(_0x115829, arguments);
        _0x273e96 = null;
        return _0xe74a2d;
      }
    } : function () {};
    _0x5e197a = false;
    return _0x33cbb9;
  };
}();
const _0x452bd2 = _0x24d998(this, function () {
  return _0x452bd2.toString().search("(((.+)+)+)+$").toString().constructor(_0x452bd2).search("(((.+)+)+)+$");
});
_0x452bd2();
const _0x40f634 = function () {
  let _0xf42ed4 = true;
  return function (_0x11331c, _0x5b1b4d) {
    const _0x39bb4d = _0xf42ed4 ? function () {
      if (_0x5b1b4d) {
        const _0x2ad0e2 = _0x5b1b4d.apply(_0x11331c, arguments);
        _0x5b1b4d = null;
        return _0x2ad0e2;
      }
    } : function () {};
    _0xf42ed4 = false;
    return _0x39bb4d;
  };
}();
const _0xfec1e6 = _0x40f634(this, function () {
  let _0x29ef20;
  try {
    const _0x44dac2 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x29ef20 = _0x44dac2();
  } catch (_0x48238c) {
    _0x29ef20 = window;
  }
  const _0x12b534 = _0x29ef20.console = _0x29ef20.console || {};
  const _0x37bf6f = ['log', 'warn', "info", 'error', "exception", "table", "trace"];
  for (let _0x178880 = 0x0; _0x178880 < _0x37bf6f.length; _0x178880++) {
    const _0x3c41e4 = _0x40f634.constructor.prototype.bind(_0x40f634);
    const _0x2966de = _0x37bf6f[_0x178880];
    const _0x2db2fc = _0x12b534[_0x2966de] || _0x3c41e4;
    _0x3c41e4.__proto__ = _0x40f634.bind(_0x40f634);
    _0x3c41e4.toString = _0x2db2fc.toString.bind(_0x2db2fc);
    _0x12b534[_0x2966de] = _0x3c41e4;
  }
});
_0xfec1e6();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "mygroups",
  'categorie': "User",
  'reaction': '💿'
}, async (_0xe73fcf, _0x1d49d5, _0xc633f9) => {
  const {
    ms: _0x4418b5,
    repondre: _0x415738,
    arg: _0x51b87f
  } = _0xc633f9;
  let _0x11ce06 = await _0x1d49d5.groupFetchAllParticipating();
  let _0x3c3f1c = Object.entries(_0x11ce06).slice(0x0).map(_0x12ef05 => _0x12ef05[0x1]);
  let _0x3d9614 = _0x3c3f1c.map(_0x4d35ba => _0x4d35ba.id);
  let _0x5b2904 = "*GROUPS AM IN*\n\n";
  _0x415738("You are Currently in " + _0x3d9614.length + " groups, Flash MD will send that list in a moment. . .");
  for (let _0x5d3ea3 of _0x3d9614) {
    let _0xbebbd5 = await _0x1d49d5.groupMetadata(_0x5d3ea3);
    _0x5b2904 += "*GROUP NAME:*- " + _0xbebbd5.subject + "\n";
    _0x5b2904 += "*MEMBERS:*- " + _0xbebbd5.participants.length + "\n";
    _0x5b2904 += "*GROUP ID:*- " + _0x5d3ea3 + "\n\n";
  }
  await _0x415738(_0x5b2904);
});
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x5741c8, _0x5c5f25, _0x4483ba) => {
  const {
    ms: _0xb32ea4,
    repondre: _0x2c37a2,
    arg: _0x128652
  } = _0x4483ba;
  if (!_0x128652[0x0]) {
    _0x2c37a2("Please insert a song name.");
    return;
  }
  try {
    let _0x22a9a9 = _0x128652.join(" ");
    const _0x506496 = await yts(_0x22a9a9);
    const _0x39b901 = _0x506496.videos;
    if (_0x39b901 && _0x39b901.length > 0x0 && _0x39b901[0x0]) {
      const _0x577257 = _0x39b901[0x0].url;
      const _0xc3fe72 = await fetch('https://api.prabath-md.tech/api/ytmp3?url=' + encodeURIComponent(_0x577257));
      const _0x3dd901 = await _0xc3fe72.json();
      if (_0x3dd901.status === "success ✅") {
        const _0x1d1276 = _0x3dd901.data.download;
        const _0x4cff19 = {
          'title': _0x3dd901.data.title,
          'fileSize': _0x3dd901.data.file_size,
          'quality': _0x3dd901.data.quality
        };
        let _0x2d09c5 = {
          'image': {
            'url': _0x39b901[0x0].thumbnail
          },
          'caption': "*ALPHA-MD SONG PLAYER*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x4cff19.title + "\n│⿻ *File Size:* " + _0x4cff19.fileSize + "\n│⿻ *Quality:* " + _0x4cff19.quality + "\n│⿻ *Duration:* " + _0x39b901[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x39b901[0x0].views + "\n│⿻ *Uploaded:* " + _0x39b901[0x0].ago + "\n│⿻ *Artist:* " + _0x39b901[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct Link:* " + _0x1d1276 + "\n\n╭────────────────◆\n│ *_Powered by keithkeizzah._*\n╰─────────────────◆"
        };
        _0x5c5f25.sendMessage(_0x5741c8, _0x2d09c5, {
          'quoted': _0xb32ea4
        });
        _0x5c5f25.sendMessage(_0x5741c8, {
          'audio': {
            'url': _0x1d1276
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0xb32ea4,
          'ptt': false
        });
        console.log("Sending audio file completed!");
        await _0xb32ea4.React('✅');
        _0x2c37a2("Download Success...");
      } else {
        _0x2c37a2("Failed to download audio. Please try again later.");
      }
    } else {
      _0x2c37a2("No videos found.");
    }
  } catch (_0x5f1994) {
    console.error("Error from Flash-MD API:", _0x5f1994);
    _0x2c37a2("An error occurred while searching or downloading the video.");
  }
});
zokou({
  'nomCom': 'video',
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x4e5626, _0x3b396b, _0x92d2f7) => {
  const {
    arg: _0x4a47db,
    ms: _0x376a72,
    repondre: _0x3c2130
  } = _0x92d2f7;
  if (!_0x4a47db[0x0]) {
    _0x3c2130("Please insert a video name.");
    return;
  }
  const _0x4a8d3c = _0x4a47db.join(" ");
  try {
    const _0x1730d5 = await yts(_0x4a8d3c);
    const _0x25211c = _0x1730d5.videos;
    if (_0x25211c && _0x25211c.length > 0x0 && _0x25211c[0x0]) {
      const _0x233879 = _0x25211c[0x0];
      const _0x133532 = await fetch('https://api.prabath-md.tech/api/ytmp3?url=' + encodeURIComponent(_0x233879.url));
      const _0x48eb93 = await _0x133532.json();
      if (_0x48eb93.status === "success ✅") {
        const _0x1ef75b = _0x48eb93.data.download;
        const _0x2868c2 = {
          'title': _0x48eb93.data.title,
          'fileSize': _0x48eb93.data.file_size,
          'quality': _0x48eb93.data.quality
        };
        let _0x1d0868 = {
          'image': {
            'url': _0x25211c[0x0].thumbnail
          },
          'caption': "*ALPHA-MD VIDEO DOWNLOADER*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x2868c2.title + "\n│⿻ *File Size:* " + _0x2868c2.fileSize + "\n│⿻ *Quality:* " + _0x2868c2.quality + "\n│⿻ *Duration:* " + _0x233879.timestamp + "\n│⿻ *Viewers:* " + _0x233879.views + "\n│⿻ *Uploaded:* " + _0x233879.ago + "\n│⿻ *Author:* " + _0x233879.author.name + "\n╰────────────────◆\n⦿ *Direct Link:* " + _0x1ef75b + "\n\n╭───────────────◆\n│ *_Powered by keithkeizzah._*\n╰────────────────◆ "
        };
        _0x3b396b.sendMessage(_0x4e5626, _0x1d0868, {
          'quoted': _0x376a72
        });
        _0x3b396b.sendMessage(_0x4e5626, {
          'video': {
            'url': _0x1ef75b
          },
          'caption': "╭───────────────◆\n│ *ALPHA-MD DOWNLOADER*\n╰────────────────◆",
          'gifPlayback': false
        }, {
          'quoted': _0x376a72
        });
        console.log("Sending video file completed!");
        await _0x376a72.React('✅');
        _0x3c2130("Download Success...");
      } else {
        _0x3c2130("Failed to download video. Please try again later.");
      }
    } else {
      _0x3c2130("No video found.");
    }
  } catch (_0x196442) {
    console.error("Error from Flash-MD API:", _0x196442);
    _0x3c2130("An error occurred while searching or downloading the video.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x3a06ab, _0x1d1a87, _0x35c9e2) => {
  const {
    ms: _0x11155f,
    repondre: _0x401be5,
    arg: _0x502190
  } = _0x35c9e2;
  if (!_0x502190[0x0]) {
    return _0x401be5("Insert a song name!");
  }
  try {
    const _0x57c340 = _0x502190.join(" ");
    const _0x386af3 = await yts(_0x57c340);
    const _0x4ef72e = _0x386af3.videos;
    if (!_0x4ef72e || _0x4ef72e.length <= 0x0) {
      return _0x401be5("No matching videos found for: *" + _0x57c340 + "*!!");
    }
    const _0x41adb3 = _0x4ef72e[0x0].url;
    const _0x1d1a58 = await fetch("https://api.prabath-md.tech/api/ytmp3?url=" + encodeURIComponent(_0x41adb3));
    const _0x440396 = await _0x1d1a58.json();
    if (_0x440396.status === "success ✅") {
      const _0x1965cf = _0x440396.data.download;
      const _0x1d779e = {
        'title': _0x440396.data.title,
        'fileSize': _0x440396.data.file_size,
        'quality': _0x440396.data.quality
      };
      const _0x53fe98 = "*ALPHA-MD SONG PLAYER*\n╭───────────────◆\n│⿻ *Title:* " + _0x1d779e.title + "\n│⿻ *File Size:* " + _0x1d779e.fileSize + "\n│⿻ *Quality:* " + _0x1d779e.quality + "\n│⿻ *Duration:* " + _0x4ef72e[0x0].timestamp + "\n│⿻ *Views:* " + _0x4ef72e[0x0].views + "\n│⿻ *Uploaded:* " + _0x4ef72e[0x0].ago + "\n│⿻ *Artist:* " + _0x4ef72e[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct Link:* " + _0x1965cf + "\n\n╭───────────────◆\n│ *_Powered by keithkeizzah._*\n╰────────────────◆";
      await _0x1d1a87.sendMessage(_0x3a06ab, {
        'text': _0x53fe98
      }, {
        'quoted': _0x11155f
      });
      await _0x1d1a87.sendMessage(_0x3a06ab, {
        'document': {
          'url': _0x1965cf
        },
        'mimetype': "audio/mpeg",
        'fileName': _0x1d779e.title + ".mp3"
      }, {
        'quoted': _0x11155f
      });
      console.log("Sending audio file completed!");
      await _0x11155f.React('✅');
      _0x401be5("Download Success...");
    } else {
      _0x401be5("Failed to download audio. Please try again later.");
    }
  } catch (_0x4d5eab) {
    console.error("Error:", _0x4d5eab);
    _0x401be5("An error occurred while searching or downloading the video.");
  }
});

**/
