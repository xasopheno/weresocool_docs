import * as wasm from './weresocool_wasm_bg.wasm';

const lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : undefined));

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0;
function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0;
function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_24(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4fe86043ec91f28c(arg0, arg1);
}

/**
* @returns {Manager}
*/
export function beep() {
    const ret = wasm.beep();
    return Manager.__wrap(ret);
}

/**
*/
export function main_js() {
    wasm.main_js();
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedFloat32Memory0;
function getFloat32Memory0() {
    if (cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
*/
export class Manager {

    static __wrap(ptr) {
        const obj = Object.create(Manager.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_manager_free(ptr);
    }
    /**
    * @param {string} language
    */
    push(language) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(language, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.manager_push(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} value
    */
    update_volume(value) {
        wasm.manager_update_volume(this.ptr, value);
    }
}

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbindgen_cb_drop(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    return ret;
};

export function __wbg_self_86b4b13392c7af56() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_crypto_b8c92eaac23d0d80(arg0) {
    const ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

export function __wbg_msCrypto_9ad6677321a08dd8(arg0) {
    const ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

export function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

export function __wbg_static_accessor_MODULE_452b4680e8614c81() {
    const ret = module;
    return addHeapObject(ret);
};

export function __wbg_require_f5521a5b85ad2542(arg0, arg1, arg2) {
    const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

export function __wbg_getRandomValues_dd27e6b0652b3236(arg0) {
    const ret = getObject(arg0).getRandomValues;
    return addHeapObject(ret);
};

export function __wbg_getRandomValues_e57c9b75ddead065(arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
};

export function __wbg_randomFillSync_d2ba53160aec6aba(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

export function __wbindgen_json_parse(arg0, arg1) {
    const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export function __wbg_randomFillSync_d90848a552cbd666() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}, arguments) };

export function __wbg_getRandomValues_57e4008f45f0e105() { return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
}, arguments) };

export function __wbg_self_f865985e662246aa() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_crypto_bfb05100db79193b(arg0) {
    const ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

export function __wbg_msCrypto_f6dddc6ae048b7e2(arg0) {
    const ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

export function __wbg_static_accessor_MODULE_39947eb3fe77895f() {
    const ret = module;
    return addHeapObject(ret);
};

export function __wbg_require_c59851dfa0dc7e78() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

export function __wbindgen_boolean_get(arg0) {
    const v = getObject(arg0);
    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

export function __wbg_instanceof_Window_9c4fd26090e1d029(arg0) {
    const ret = getObject(arg0) instanceof Window;
    return ret;
};

export function __wbg_setTimeout_7899ac631e8f16f0() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
}, arguments) };

export function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
};

export function __wbg_destination_c5ce4ac317c9219f(arg0) {
    const ret = getObject(arg0).destination;
    return addHeapObject(ret);
};

export function __wbg_currentTime_ae061c195387b7ac(arg0) {
    const ret = getObject(arg0).currentTime;
    return ret;
};

export function __wbg_newwithcontextoptions_899986e0b4dda14e() { return handleError(function (arg0) {
    const ret = new lAudioContext(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

export function __wbg_close_c3e0ca1346d83fbd() { return handleError(function (arg0) {
    const ret = getObject(arg0).close();
    return addHeapObject(ret);
}, arguments) };

export function __wbg_createBuffer_53c7286e081d0b3e() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).createBuffer(arg1 >>> 0, arg2 >>> 0, arg3);
    return addHeapObject(ret);
}, arguments) };

export function __wbg_createBufferSource_8b7fd8bc4222b208() { return handleError(function (arg0) {
    const ret = getObject(arg0).createBufferSource();
    return addHeapObject(ret);
}, arguments) };

export function __wbg_resume_2c75f8fc1fd26d4b() { return handleError(function (arg0) {
    const ret = getObject(arg0).resume();
    return addHeapObject(ret);
}, arguments) };

export function __wbg_setbuffer_5aca59a6f26d3307(arg0, arg1) {
    getObject(arg0).buffer = getObject(arg1);
};

export function __wbg_setonended_0efd780b31d16bbf(arg0, arg1) {
    getObject(arg0).onended = getObject(arg1);
};

export function __wbg_start_6bccbb331d439280() { return handleError(function (arg0, arg1) {
    getObject(arg0).start(arg1);
}, arguments) };

export function __wbg_connect_3a117c24756fdf62() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).connect(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

export function __wbg_copyToChannel_eebab97203389d82() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).copyToChannel(getArrayF32FromWasm0(arg1, arg2), arg3);
}, arguments) };

export function __wbg_call_cb478d88f3068c91() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

export function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

export function __wbg_self_05c54dcacb623b9a() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_window_9777ce446d12989f() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_globalThis_f0ca0bbb0149cf3d() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_global_c3c8325ae8c7f1a9() { return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_newnoargs_3efc7bfa69a681f9(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export function __wbg_eval_9f16f8cdfa3fb5a8() { return handleError(function (arg0, arg1) {
    const ret = eval(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

export function __wbg_new_d14bf16e62c6b3d5() {
    const ret = new Object();
    return addHeapObject(ret);
};

export function __wbg_buffer_ebc6c8e75510eae3(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export function __wbg_length_317f0dd77f7a6673(arg0) {
    const ret = getObject(arg0).length;
    return ret;
};

export function __wbg_new_135e963dedf67b22(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

export function __wbg_set_4a5072a31008e0cb(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export function __wbg_newwithlength_78dc302d31527318(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

export function __wbg_subarray_34c228a45c72d146(arg0, arg1, arg2) {
    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

export function __wbg_set_61642586f7156f4a() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
}, arguments) };

export function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

export function __wbindgen_closure_wrapper80(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_24);
    return addHeapObject(ret);
};

cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);

