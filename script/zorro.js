import init, {zorro_decode} from './zorro_wasm.js';

var Zorro = function Zorro(){
  var self = this;
  self.inited = false;
  this.readPng = async function(imageUrl, cb) {
    if(self.inited == false) {
      await init();
      self.inited = true;
    }
    var response = await fetch(imageUrl);
    var fileBlob = await response.blob();
    var arrayBuffer = await fileBlob.arrayBuffer();
    var pixels = new Uint8Array(arrayBuffer);
    var decoded = zorro_decode(pixels);
    cb(decoded);
  };
};
let zorro = new Zorro();
zorro.readPng('./goathidden2b.png', function(data) {
  document.getElementById("img_target").innerHTML = "<img src='./goathidden2b.png'/>";
  document.getElementById("target").innerHTML = data;
});
