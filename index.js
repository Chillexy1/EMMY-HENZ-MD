const _0x54cfbd=_0x1d0d;(function(_0x189d39,_0x4ad336){const _0x557e71=_0x1d0d,_0x4b0520=_0x189d39();while(!![]){try{const _0x29ca35=-parseInt(_0x557e71(0x147))/0x1*(-parseInt(_0x557e71(0x150))/0x2)+parseInt(_0x557e71(0x125))/0x3*(parseInt(_0x557e71(0x13d))/0x4)+parseInt(_0x557e71(0x168))/0x5+parseInt(_0x557e71(0x173))/0x6*(parseInt(_0x557e71(0x13a))/0x7)+parseInt(_0x557e71(0x178))/0x8*(-parseInt(_0x557e71(0x137))/0x9)+-parseInt(_0x557e71(0x11a))/0xa*(parseInt(_0x557e71(0x112))/0xb)+parseInt(_0x557e71(0x134))/0xc*(-parseInt(_0x557e71(0x189))/0xd);if(_0x29ca35===_0x4ad336)break;else _0x4b0520['push'](_0x4b0520['shift']());}catch(_0x4009f8){_0x4b0520['push'](_0x4b0520['shift']());}}}(_0x28c8,0x7edb3),require(_0x54cfbd(0x133)));const fs=require('fs'),pino=require(_0x54cfbd(0x16e)),{color}=require(_0x54cfbd(0x186)),path=require(_0x54cfbd(0x141)),axios=require(_0x54cfbd(0x16d)),chalk=require(_0x54cfbd(0x110)),readline=require(_0x54cfbd(0x18a)),{File}=require(_0x54cfbd(0x162)),FileType=require(_0x54cfbd(0x193)),{exec}=require(_0x54cfbd(0x13e)),{Boom}=require(_0x54cfbd(0x124)),NodeCache=require(_0x54cfbd(0x156)),PhoneNumber=require('awesome-phonenumber'),{default:makeWASocket,useMultiFileAuthState,Browsers,DisconnectReason,makeInMemoryStore,makeCacheableSignalKeyStore,proto,getAggregateVotesInPollMessage}=require(_0x54cfbd(0x163));let phoneNumber=_0x54cfbd(0x11f);const pairingCode=!!phoneNumber||process[_0x54cfbd(0x13f)]['includes'](_0x54cfbd(0x183)),useMobile=process[_0x54cfbd(0x13f)][_0x54cfbd(0x165)]('--mobile'),rl=readline['createInterface']({'input':process[_0x54cfbd(0x12f)],'output':process[_0x54cfbd(0x144)]}),store=makeInMemoryStore({'logger':pino()[_0x54cfbd(0x131)]({'level':'silent','stream':_0x54cfbd(0x11b)})}),question=_0x4e11c8=>new Promise(_0x4ddf0b=>rl[_0x54cfbd(0x17a)](_0x4e11c8,_0x4ddf0b));let owner=JSON[_0x54cfbd(0x18d)](fs[_0x54cfbd(0x14d)](_0x54cfbd(0x15e)));global[_0x54cfbd(0x11c)]=(_0x1005d0,_0x3e90a8='/',_0x3810e9={},_0x57567e)=>(_0x1005d0 in global[_0x54cfbd(0x192)]?global['APIs'][_0x1005d0]:_0x1005d0)+_0x3e90a8+(_0x3810e9||_0x57567e?'?'+new URLSearchParams(Object[_0x54cfbd(0x160)]({..._0x3810e9,..._0x57567e?{[_0x57567e]:global[_0x54cfbd(0x12c)][_0x1005d0 in global[_0x54cfbd(0x192)]?global[_0x54cfbd(0x192)][_0x1005d0]:_0x1005d0]}:{}})):'');const DataBase=require(_0x54cfbd(0x161)),database=new DataBase();((async()=>{const _0x2f5002=_0x54cfbd,_0x3777a7=await database[_0x2f5002(0x148)]();_0x3777a7&&Object[_0x2f5002(0x13c)](_0x3777a7)['length']===0x0?(global['db']={'sticker':{},'users':{},'groups':{},'database':{},'settings':{},'others':{},..._0x3777a7||{}},await database[_0x2f5002(0x130)](global['db'])):global['db']=_0x3777a7,setInterval(async()=>{const _0x4729e7=_0x2f5002;if(global['db'])await database[_0x4729e7(0x130)](global['db']);},0x7530);})());const {GroupUpdate,GroupParticipantsUpdate,MessagesUpsert,Solving}=require(_0x54cfbd(0x143)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x54cfbd(0x118)),sessionDir=path[_0x54cfbd(0x179)](__dirname,'session'),credsPath=path['join'](sessionDir,_0x54cfbd(0x135));async function sessionLoader(){const _0x953224=_0x54cfbd;try{await fs[_0x953224(0x166)][_0x953224(0x16c)](sessionDir,{'recursive':!![]});if(!fs['existsSync'](credsPath)){if(!global[_0x953224(0x14b)])return console[_0x953224(0x180)](color('𝗘𝗠𝗠𝗬_𝗛𝗘𝗡𝗭-𝗠𝗗\x20𝗖𝗢𝗨𝗟𝗗𝗡𝗧\x20𝗙𝗜𝗡𝗗\x20𝗬𝗢𝗨𝗥\x20𝗖𝗥𝗘𝗗𝗦\x20𝗙𝗜𝗟𝗘!!\x0a\x0a𝗘𝗠𝗠𝗬_𝗛𝗘𝗡𝗭-𝗠𝗗\x20𝗥𝗘𝗤𝗨𝗜𝗥𝗘𝗦\x20𝗬𝗢𝗨𝗥\x20𝗣𝗛𝗢𝗡𝗘\x20𝗡𝗨𝗠𝗕𝗘𝗥','blue'));const _0x55f3b1=global['SESSION_ID'][_0x953224(0x12e)](_0x953224(0x145))[0x1],_0x368907=File[_0x953224(0x171)](_0x953224(0x111)+_0x55f3b1);await new Promise((_0x5ec0a4,_0x46e32d)=>{const _0x48f951=_0x953224;_0x368907[_0x48f951(0x16f)]((_0x3b9e67,_0x263a5a)=>{if(_0x3b9e67)_0x46e32d(_0x3b9e67);_0x5ec0a4(_0x263a5a);});})['then'](async _0x363882=>{const _0x153671=_0x953224;await fs[_0x153671(0x166)][_0x153671(0x175)](credsPath,_0x363882),console['log'](color(_0x153671(0x152),_0x153671(0x138))),await startXliconBot();});}}catch(_0x1d7327){console['error'](_0x953224(0x117),_0x1d7327);}}console[_0x54cfbd(0x180)](chalk[_0x54cfbd(0x151)](_0x54cfbd(0x18c))),console[_0x54cfbd(0x180)](chalk[_0x54cfbd(0x174)]['bold'](chalk['gray'][_0x54cfbd(0x182)]('🎛\x20𝗜𝗡𝗙𝗢\x20𝗕𝗢𝗧\x20:')+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a✅\x20𝗠𝗗\x20𝗕𝗢𝗧\x20𝗖𝗥𝗘𝗔𝗧𝗘𝗗\x20𝗕𝗬\x20𝗘𝗠𝗠𝗬\x20𝗛𝗘𝗡𝗭\x0a🎁\x20𝗖𝗢𝗡𝗧𝗔𝗖𝗧\x202349125042727\x0a🔥\x20𝗬𝗢𝗨𝗧𝗨𝗕𝗘:\x20@EMMYHENZTECHINFO\x0a♨️\x20𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠\x20:\x20@EMMYHENZTECHINFO\x0a\x0a'+chalk[_0x54cfbd(0x138)][_0x54cfbd(0x182)]('𝗘𝗠𝗠𝗬_𝗛𝗘𝗡𝗭-𝗠𝗗\x20𝗔\x20𝗠𝗨𝗟𝗧𝗜\x20𝗗𝗘𝗩𝗜𝗖𝗘\x20𝗕𝗢𝗧')+'\x0a'));async function startXliconBot(){const _0x177311=_0x54cfbd;let _0x494f6b=[0x2,0xbb8,0x3c8d6c7b],_0x27d28b=![];const {state:_0x7f9d08,saveCreds:_0x4a0a88}=await useMultiFileAuthState(_0x177311(0x16a)),_0x33ee9b=new NodeCache(),_0x1e9a49=makeWASocket({'logger':pino({'level':_0x177311(0x121)}),'printQRInTerminal':!pairingCode,'browser':Browsers[_0x177311(0x17e)](_0x177311(0x126)),'auth':{'creds':_0x7f9d08[_0x177311(0x176)],'keys':makeCacheableSignalKeyStore(_0x7f9d08['keys'],pino({'level':_0x177311(0x16b)})['child']({'level':_0x177311(0x16b)}))},'version':_0x494f6b,'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x43dd76=>{const _0x3306d3=_0x177311;let _0x5da91b=jidNormalizedUser(_0x43dd76[_0x3306d3(0x155)]),_0x66acff=await store['loadMessage'](_0x5da91b,_0x43dd76['id']);return _0x66acff?.[_0x3306d3(0x139)]||'';},'msgRetryCounterCache':_0x33ee9b,'defaultQueryTimeoutMs':undefined});store[_0x177311(0x12b)](_0x1e9a49['ev']);if(pairingCode&&!_0x1e9a49['authState']['creds'][_0x177311(0x116)]){if(useMobile)throw new Error(_0x177311(0x170));let _0x42b544;_0x42b544=await question('𝗘𝗠𝗠𝗬_𝗛𝗘𝗡𝗭-𝗠𝗗\x20𝗥𝗘𝗤𝗨𝗜𝗥𝗘𝗦\x20𝗬𝗢𝗨𝗥\x20𝗡𝗨𝗠𝗕𝗘𝗥\x20𝗘.𝗚:\x2023491****:\x0a'),_0x42b544=_0x42b544['trim'](),setTimeout(async()=>{const _0x54df39=_0x177311,_0x242e9e=await _0x1e9a49[_0x54df39(0x15c)](_0x42b544);console[_0x54df39(0x180)](chalk[_0x54df39(0x14a)](chalk[_0x54df39(0x14c)](_0x54df39(0x13b)+_0x242e9e)));},0xbb8);}return store[_0x177311(0x12b)](_0x1e9a49['ev']),await Solving(_0x1e9a49,store),_0x1e9a49['ev']['on']('creds.update',_0x4a0a88),_0x1e9a49['ev']['on'](_0x177311(0x136),async _0x55442a=>{const _0x3c4a8b=_0x177311,{connection:_0x22a1d7,lastDisconnect:_0x5e8713,receivedPendingNotifications:_0x3762f9}=_0x55442a;if(_0x22a1d7===_0x3c4a8b(0x132)){const _0x3ae2c7=new Boom(_0x5e8713?.[_0x3c4a8b(0x115)])?.[_0x3c4a8b(0x17b)]['statusCode'];if(_0x3ae2c7===DisconnectReason[_0x3c4a8b(0x159)])console[_0x3c4a8b(0x180)](_0x3c4a8b(0x164)),startXliconBot();else{if(_0x3ae2c7===DisconnectReason['connectionClosed'])console[_0x3c4a8b(0x180)](_0x3c4a8b(0x17d)),startXliconBot();else{if(_0x3ae2c7===DisconnectReason[_0x3c4a8b(0x127)])console[_0x3c4a8b(0x180)](_0x3c4a8b(0x114)),startXliconBot();else{if(_0x3ae2c7===DisconnectReason[_0x3c4a8b(0x15d)])console[_0x3c4a8b(0x180)](_0x3c4a8b(0x14f)),startXliconBot();else{if(_0x3ae2c7===DisconnectReason[_0x3c4a8b(0x120)])console['log'](_0x3c4a8b(0x18b)),process[_0x3c4a8b(0x18e)](0x1);else{if(_0x3ae2c7===DisconnectReason[_0x3c4a8b(0x154)])console['log'](_0x3c4a8b(0x122)),_0x1e9a49[_0x3c4a8b(0x185)]();else{if(_0x3ae2c7===DisconnectReason['loggedOut'])console[_0x3c4a8b(0x180)](_0x3c4a8b(0x191));else _0x3ae2c7===DisconnectReason[_0x3c4a8b(0x15f)]?console[_0x3c4a8b(0x180)](_0x3c4a8b(0x11e)):_0x1e9a49[_0x3c4a8b(0x172)]('Unknown\x20DisconnectReason\x20:\x20'+_0x3ae2c7+'|'+_0x22a1d7);}}}}}}}if(_0x22a1d7=='open')console[_0x3c4a8b(0x180)](_0x3c4a8b(0x15b)+JSON['stringify'](_0x1e9a49[_0x3c4a8b(0x17f)],null,0x2));else _0x3762f9==_0x3c4a8b(0x11d)&&console[_0x3c4a8b(0x180)]('Please\x20wait\x20About\x201\x20Minute...');}),_0x1e9a49['ev']['on'](_0x177311(0x149),_0x42383b=>{const _0x55a015=_0x177311;for(let _0x20e927 of _0x42383b){let _0x25b467=_0x1e9a49[_0x55a015(0x184)](_0x20e927['id']);if(store&&store[_0x55a015(0x187)])store[_0x55a015(0x187)][_0x25b467]={'id':_0x25b467,'name':_0x20e927[_0x55a015(0x12a)]};}}),_0x1e9a49['ev']['on'](_0x177311(0x157),async _0x597a35=>{const _0x2077be=_0x177311;let _0x18f4fd=await _0x1e9a49[_0x2077be(0x184)](_0x1e9a49['user']['id']),_0x5c3735=global['db'][_0x2077be(0x167)][_0x18f4fd]['anticall'];if(_0x5c3735)for(let _0x32140e of _0x597a35){if(_0x32140e['status']===_0x2077be(0x119)){let _0x1e515d=await _0x1e9a49[_0x2077be(0x15a)](_0x32140e[_0x2077be(0x188)],{'text':'Currently,\x20We\x20Cannot\x20Receive\x20Calls\x20'+(_0x32140e[_0x2077be(0x177)]?_0x2077be(0x123):'Voice')+'.\x0aIf\x20@'+_0x32140e[_0x2077be(0x188)][_0x2077be(0x12e)]('@')[0x0]+_0x2077be(0x18f),'mentions':[_0x32140e[_0x2077be(0x188)]]});await _0x1e9a49[_0x2077be(0x140)](_0x32140e['from'],global[_0x2077be(0x12d)],_0x1e515d),await _0x1e9a49[_0x2077be(0x142)](_0x32140e['id'],_0x32140e[_0x2077be(0x188)]);}}}),_0x1e9a49['ev']['on'](_0x177311(0x153),async _0x4bb7ab=>{await GroupUpdate(_0x1e9a49,_0x4bb7ab,store);}),_0x1e9a49['ev']['on']('group-participants.update',async _0x573a2f=>{await GroupParticipantsUpdate(_0x1e9a49,_0x573a2f);}),_0x1e9a49['ev']['on'](_0x177311(0x17c),async _0x2b6c8e=>{await MessagesUpsert(_0x1e9a49,_0x2b6c8e,store);}),_0x1e9a49;}async function initStart(){const _0x239710=_0x54cfbd;if(fs[_0x239710(0x129)](credsPath))console[_0x239710(0x180)](color(_0x239710(0x14e),_0x239710(0x190))),await startXliconBot();else{const _0x22f8d2=await sessionLoader();_0x22f8d2?(console[_0x239710(0x180)](_0x239710(0x181)),await startXliconBot()):!fs[_0x239710(0x129)](credsPath)&&(!global[_0x239710(0x14b)]&&(console['log'](color(_0x239710(0x128),_0x239710(0x158))),await startXliconBot()));}}function _0x28c8(){const _0x39977f=['end','12JlJxpd','white','writeFile','creds','isVideo','7818152lyFQmi','join','question','output','messages.upsert','Connection\x20closed,\x20Attempting\x20to\x20Reconnect...','windows','user','log','Session\x20downloaded\x20successfully,\x20proceeding\x20to\x20start...\x20.','bold','--pairing-code','decodeJid','logout','./lib/color','contacts','from','1482403nFcYpC','readline','Delete\x20Session\x20and\x20Scan\x20again...','\x0a███████╗\x0a██╔════╝\x0a█████╗\x20\x20\x0a██╔══╝\x20\x20\x20𝗺\x20𝗺\x20𝘆\x0a███████╗\x0a╚══════╝\x0a\x0a\x0a██╗\x20\x20██╗\x0a██║\x20\x20██║\x0a███████║\x0a██╔══██║\x0a██║\x20\x20██║\x20𝗲\x20𝗻\x20𝘇\x0a╚═╝\x20\x20╚═╝\x0a\x0a\x0a████████╗\x0a╚══██╔══╝\x0a\x20\x20\x20██║\x20\x20\x20\x0a\x20\x20\x20██║\x20\x20\x20\x0a\x20\x20\x20██║\x20𝗲\x20𝗰\x20𝗵\x0a\x20\x20\x20╚═╝\x20\x20\x0a\x20\x20','parse','exit','\x20Needs\x20Help,\x20Please\x20Contact\x20Owner\x20:)','pink','Scan\x20again\x20and\x20Run...','APIs','file-type','redBright','chalk','https://mega.nz/file/','1218514nZhmCC','resolve','Restart\x20Required...','error','registered','Error\x20retrieving\x20session:','./lib/function','offer','10fMlhck','store','api','true','Scan\x20again...','2349125042727','badSession','silent','Close\x20current\x20Session\x20first...','Video','@hapi/boom','3qHyZSP','Firefox','restartRequired','Please\x20wait\x20for\x20a\x20few\x20seconds\x20to\x20enter\x20your\x20number!','existsSync','notify','bind','APIKeys','owner','split','stdin','write','child','close','./settings','156KAKeCc','creds.json','connection.update','9tZqovU','green','message','2989217QNSysj','⭐\x20\x20EMMY\x20HENZ\x20MD\x20PAIRING\x20CODE:\x20','keys','3674932fyHrki','child_process','argv','sendContact','path','rejectCall','./src/message','stdout','XLICON-V4~','unwatchFile','67WrZgFO','read','contacts.update','black','SESSION_ID','bgGreen','readFileSync','Creds.json\x20exists,\x20proceeding\x20to\x20start...','Connection\x20Timed\x20Out,\x20Attempting\x20to\x20Reconnect...','14296sCmYwO','cyan','Session\x20downloaded\x20successfully,\x20proceeding\x20to\x20start...','groups.update','connectionReplaced','remoteJid','node-cache','call','red','connectionLost','sendMessage','Connected\x20to\x20:\x20','requestPairingCode','timedOut','./src/owner.json','Multidevicemismatch','entries','./src/database','megajs','@whiskeysockets/baileys','Connection\x20to\x20Server\x20Lost,\x20Attempting\x20to\x20Reconnect...','includes','promises','settings','4191690SWrWPz','cache','./session','fatal','mkdir','axios','pino','download','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20API','fromURL'];_0x28c8=function(){return _0x39977f;};return _0x28c8();}initStart();let file=require[_0x54cfbd(0x113)](__filename);function _0x1d0d(_0x12a26e,_0x25c831){const _0x28c824=_0x28c8();return _0x1d0d=function(_0x1d0db8,_0x338588){_0x1d0db8=_0x1d0db8-0x110;let _0x4ae220=_0x28c824[_0x1d0db8];return _0x4ae220;},_0x1d0d(_0x12a26e,_0x25c831);}fs['watchFile'](file,()=>{const _0x429dbb=_0x54cfbd;fs[_0x429dbb(0x146)](file),console[_0x429dbb(0x180)](chalk[_0x429dbb(0x194)]('Update\x20'+__filename)),delete require[_0x429dbb(0x169)][file],require(file);});