(function () {
  'use strict';
  var zn = "ズン";
  var dk = "ドコ";
  var kys = "キ・ヨ・シ！";
  var zunCount = 0;
  var zundokoFlg = 0;
  var appendElement = function(txt) {
    var tag = document.createElement('p');
    tag.textContent = txt;
    document.getElementById('kysArea').appendChild(tag);
  };
  
  while(zundokoFlg === 0) {
    var chk = Math.random();
    if (chk > 0.5) {
      appendElement(zn);
      zunCount++;
    } else if (chk <= 0.5) {
      appendElement(dk);
      if (zunCount <= 3) {
        zunCount = 0;
      } else {
        zundokoFlg = 1;
      }
    }
  }
  appendElement(kys);
})();
