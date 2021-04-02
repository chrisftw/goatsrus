import * as wasm from './zorro_wasm_bg.wasm';

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint8Array} bytes
*/
export function zorro_decode(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.zorro_decode(ptr0, len0);
}

