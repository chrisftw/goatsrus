import init, {zorro_decode} from './zorro_wasm.js';

var readPng = async function(imageUrl) {
    var response = await fetch(imageUrl);
    var fileBlob = await response.blob();
    var arrayBuffer = await fileBlob.arrayBuffer();
    var pixels = new Uint8Array(arrayBuffer);
    console.log('fileBlob', pixels);
    var res = zorro_decode(pixels);
    return res;
};

async function run() {
  await init();
  console.log('A');
  // And afterwards we can use all the functionality defined in wasm.
  var myBlob = await readPng('./img/days.png');
  console.log('B')
  console.log('readData', myBlob);
}
run();
