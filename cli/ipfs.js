/*!-----------------------------------------------------------
* Copyright (c) IJS Technologies. All rights reserved.
* Released under dual AGPLv3/commercial license
* https://ijs.network
*-----------------------------------------------------------*/

; (function (globalObject) {
  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2020 Protocol Labs
  *  Licensed under the MIT License.
  *  https://github.com/multiformats/js-multiformats/blob/master/LICENSE-MIT
  *--------------------------------------------------------------------------------------------*/
  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/hashes/digest.js#L66

  class Digest {
    constructor(code, size, digest, bytes) {
      this.code = code;
      this.size = size;
      this.digest = digest;
      this.bytes = bytes;
    }
  }

  const readonly = { writable: false, configurable: false, enumerable: true }
  const hidden = { writable: false, enumerable: false, configurable: false }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L78
  class Decoder {

    constructor(name, prefix, baseDecode) {
      this.name = name
      this.prefix = prefix
      this.baseDecode = baseDecode
    }

    decode(text) {
      if (typeof text === 'string') {
        switch (text[0]) {
          case this.prefix: {
            return this.baseDecode(text.slice(1))
          }
          default: {
            throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)
          }
        }
      } else {
        throw Error('Can only multibase decode strings')
      }
    }

    or(decoder) {
      return or(this, decoder)
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L29
  class Encoder {

    constructor(name, prefix, baseEncode) {
      this.name = name
      this.prefix = prefix
      this.baseEncode = baseEncode
    }

    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`
      } else {
        throw Error('Unknown type, must be binary type')
      }
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L195
  class Codec {

    constructor(name, prefix, baseEncode, baseDecode) {
      this.name = name
      this.prefix = prefix
      this.baseEncode = baseEncode
      this.baseDecode = baseDecode
      this.encoder = new Encoder(name, prefix, baseEncode)
      this.decoder = new Decoder(name, prefix, baseDecode)
    }

    encode(input) {
      return this.encoder.encode(input)
    }

    decode(input) {
      return this.decoder.decode(input)
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L236
  const from_1 = ({ name, prefix, encode, decode }) =>
    new Codec(name, prefix, encode, decode)

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/vendor/base-x.js#L6
  function _basex(ALPHABET, name) {
    if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256); // log(BASE) / log(256), rounded up
    var iFACTOR = Math.log(256) / Math.log(BASE); // log(256) / log(BASE), rounded up
    function encode(source) {
      if (source instanceof Uint8Array); else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from_1(source);
      }
      if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
      if (source.length === 0) { return '' }
      // Skip & count leading zeroes.
      var zeroes = 0;
      var length = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      // Allocate enough space in big-endian base58 representation.
      var size = ((pend - pbegin) * iFACTOR + 1) >>> 0;
      var b58 = new Uint8Array(size);
      // Process the bytes.
      while (pbegin !== pend) {
        var carry = source[pbegin];
        // Apply "b58 = b58 * 256 + ch".
        var i = 0;
        for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
          carry += (256 * b58[it1]) >>> 0;
          b58[it1] = (carry % BASE) >>> 0;
          carry = (carry / BASE) >>> 0;
        }
        if (carry !== 0) { throw new Error('Non-zero carry') }
        length = i;
        pbegin++;
      }
      // Skip leading zeroes in base58 result.
      var it2 = size - length;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      // Translate the result into a string.
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]); }
      return str
    }
    function decodeUnsafe(source) {
      if (typeof source !== 'string') { throw new TypeError('Expected String') }
      if (source.length === 0) { return new Uint8Array() }
      var psz = 0;
      // Skip leading spaces.
      if (source[psz] === ' ') { return }
      // Skip and count leading '1's.
      var zeroes = 0;
      var length = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      // Allocate enough space in big-endian base256 representation.
      var size = (((source.length - psz) * FACTOR) + 1) >>> 0; // log(58) / log(256), rounded up.
      var b256 = new Uint8Array(size);
      // Process the characters.
      while (source[psz]) {
        // Decode character
        var carry = BASE_MAP[source.charCodeAt(psz)];
        // Invalid character
        if (carry === 255) { return }
        var i = 0;
        for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
          carry += (BASE * b256[it3]) >>> 0;
          b256[it3] = (carry % 256) >>> 0;
          carry = (carry / 256) >>> 0;
        }
        if (carry !== 0) { throw new Error('Non-zero carry') }
        length = i;
        psz++;
      }
      // Skip trailing spaces.
      if (source[psz] === ' ') { return }
      // Skip leading zeroes in b256.
      var it4 = size - length;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j = zeroes;
      while (it4 !== size) {
        vch[j++] = b256[it4++];
      }
      return vch
    }
    function decode(string) {
      var buffer = decodeUnsafe(string);
      if (buffer) { return buffer }
      throw new Error(`Non-${name} character`)
    }
    return {
      encode: encode,
      decodeUnsafe: decodeUnsafe,
      decode: decode
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L248
  const baseX = ({ prefix, name, alphabet }) => {
    const { encode, decode } = _basex(alphabet, name)
    return from_1({
      prefix,
      name,
      encode,
      decode: text => coerce(decode(text))
    })
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L321
  const _encode = (data, alphabet, bitsPerChar) => {
    const pad = alphabet[alphabet.length - 1] === '='
    const mask = (1 << bitsPerChar) - 1
    let out = ''

    let bits = 0 // Number of bits currently in the buffer
    let buffer = 0 // Bits waiting to be written out, MSB first
    for (let i = 0; i < data.length; ++i) {
      // Slurp data into the buffer:
      buffer = (buffer << 8) | data[i]
      bits += 8

      // Write out as much as we can:
      while (bits > bitsPerChar) {
        bits -= bitsPerChar
        out += alphabet[mask & (buffer >> bits)]
      }
    }

    // Partial character:
    if (bits) {
      out += alphabet[mask & (buffer << (bitsPerChar - bits))]
    }

    // Add padding characters until we hit a byte boundary:
    if (pad) {
      while ((out.length * bitsPerChar) & 7) {
        out += '='
      }
    }

    return out
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L268
  const _decode = (string, alphabet, bitsPerChar, name) => {
    const codes = {}
    for (let i = 0; i < alphabet.length; ++i) {
      codes[alphabet[i]] = i
    }

    // Count the padding bytes:
    let end = string.length
    while (string[end - 1] === '=') {
      --end
    }

    const out = new Uint8Array((end * bitsPerChar / 8) | 0)

    let bits = 0
    let buffer = 0
    let written = 0
    for (let i = 0; i < end; ++i) {
      const value = codes[string[i]]
      if (value === undefined) {
        throw new SyntaxError(`Non-${name} character`)
      }

      buffer = (buffer << bitsPerChar) | value
      bits += bitsPerChar

      if (bits >= 8) {
        bits -= 8
        out[written++] = 0xff & (buffer >> bits)
      }
    }

    if (bits >= bitsPerChar || 0xff & (buffer << (8 - bits))) {
      throw new SyntaxError('Unexpected end of data')
    }

    return out
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base.js#L366
  const rfc4648 = ({ name, prefix, bitsPerChar, alphabet }) => {
    return from_1({
      prefix,
      name,
      encode(input) {
        return _encode(input, alphabet, bitsPerChar)
      },
      decode(input) {
        return _decode(input, alphabet, bitsPerChar, name)
      }
    })
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base58.js#L3
  const base58btc = baseX({
    name: 'base58btc',
    prefix: 'z',
    alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
  })

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bases/base32.js#L3
  const base32 = rfc4648({
    prefix: 'b',
    name: 'base32',
    alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
    bitsPerChar: 5
  })

  const DAG_PB_CODE = 0x70
  const RAW_CODE = 0x55

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/vendor/varint.js#L58
  var N1 = Math.pow(2, 7);
  var N2 = Math.pow(2, 14);
  var N3 = Math.pow(2, 21);
  var N4 = Math.pow(2, 28);
  var N5 = Math.pow(2, 35);
  var N6 = Math.pow(2, 42);
  var N7 = Math.pow(2, 49);
  var N8 = Math.pow(2, 56);
  var N9 = Math.pow(2, 63);

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/vendor/varint.js#L68
  var encodingLength_2 = function (value) {
    return (
      value < N1 ? 1
        : value < N2 ? 2
          : value < N3 ? 3
            : value < N4 ? 4
              : value < N5 ? 5
                : value < N6 ? 6
                  : value < N7 ? 7
                    : value < N8 ? 8
                      : value < N9 ? 9
                        : 10
    )
  };

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/vendor/varint.js#L30
  var MSB$1 = 0x80
    , REST$1 = 0x7F
    , MSBALL = ~REST
    , INT = Math.pow(2, 31);

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/vendor/varint.js#L33
  function decode_2(buf, offset) {
    var res = 0
      , offset = offset || 0
      , shift = 0
      , counter = offset
      , b
      , l = buf.length;

    do {
      if (counter >= l) {
        decode_2.bytes = 0;
        throw new RangeError('Could not decode varint')
      }
      b = buf[counter++];
      res += shift < 28
        ? (b & REST$1) << shift
        : (b & REST$1) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$1)

    decode_2.bytes = counter - offset;

    return res
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/varint.js#L7
  const decode_1 = (data) => {
    const code = decode_2(data)
    return [code, decode_2.bytes]
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/vendor/varint.js#L8
  function encode_2(num, out, offset) {
    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
      encode.bytes = 0
      throw new RangeError('Could not encode varint')
    }
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;

    while (num >= INT) {
      out[offset++] = (num & 0xFF) | MSB;
      num /= 128;
    }
    while (num & MSBALL) {
      out[offset++] = (num & 0xFF) | MSB;
      num >>>= 7;
    }
    out[offset] = num | 0;

    encode_2.bytes = offset - oldOffset + 1;

    return out
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/varint.js#L17
  const encodeTo_1 = (int, target, offset = 0) => {
    encode_2(int, target, offset)
    return target
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/varint.js#L26
  const encodingLength_1 = (int) => {
    return encodingLength_2(int)
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/cid.js#L382
  const parseCIDtoBytes = (source, base) => {
    switch (source[0]) {
      case 'Q': {
        const decoder = base || base58btc
        return [base58btc.prefix, decoder.decode(`${base58btc.prefix}${source}`)]
      }
      case base58btc.prefix: {
        const decoder = base || base58btc
        return [base58btc.prefix, decoder.decode(source)]
      }
      case base32.prefix: {
        const decoder = base || base32
        return [base32.prefix, decoder.decode(source)]
      }
      default: {
        if (base == null) {
          throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided')
        }
        return [source[0], base.decode(source)]
      }
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/cid.js#L412
  const toStringV0 = (bytes, cache, base) => {
    const { prefix } = base
    if (prefix !== base58btc.prefix) {
      throw Error(`Cannot string encode V0 in ${base.name} encoding`)
    }

    const cid = cache.get(prefix)
    if (cid == null) {
      const cid = base.encode(bytes).slice(1)
      cache.set(prefix, cid)
      return cid
    } else {
      return cid
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/cid.js#L434
  const toStringV1 = (bytes, cache, base) => {
    const { prefix } = base
    const cid = cache.get(prefix)
    if (cid == null) {
      const cid = base.encode(bytes)
      cache.set(prefix, cid)
      return cid
    } else {
      return cid
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/cid.js#L455
  const encodeCID = (version, code, multihash) => {
    const codeOffset = encodingLength_1(version)
    const hashOffset = codeOffset + encodingLength_1(code)
    const bytes = new Uint8Array(hashOffset + multihash.byteLength)
    encodeTo_1(version, bytes, 0)
    encodeTo_1(code, bytes, codeOffset)
    bytes.set(multihash, hashOffset)
    return bytes
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/bytes.js#L39
  const coerce = o => {
    if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array') return o
    if (o instanceof ArrayBuffer) return new Uint8Array(o)
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
    }
    throw new Error('Unknown type, must be binary type')
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/cid.js#L22
  class CID {

    constructor(version, code, multihash, bytes) {
      this.code = code
      this.version = version
      this.multihash = multihash
      this.bytes = bytes
      this.byteOffset = bytes.byteOffset
      this.byteLength = bytes.byteLength
      this.asCID = this
      this._baseCache = new Map()

      Object.defineProperties(this, {
        byteOffset: hidden,
        byteLength: hidden,

        code: readonly,
        version: readonly,
        multihash: readonly,
        bytes: readonly,

        _baseCache: hidden,
        asCID: hidden
      })
    }

    toString(base) {
      const { bytes, version, _baseCache } = this
      switch (version) {
        case 0:
          return toStringV0(bytes, _baseCache, base || base58btc.encoder)
        default:
          return toStringV1(bytes, _baseCache, base || base32.encoder)
      }
    }

    static create(version, code, digest) {
      if (typeof code !== 'number') {
        throw new Error('String codecs are no longer supported')
      }

      switch (version) {
        case 0: {
          if (code !== DAG_PB_CODE) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`)
          } else {
            return new CID(version, code, digest, digest.bytes)
          }
        }
        case 1: {
          const bytes = encodeCID(version, code, digest.bytes)
          return new CID(version, code, digest, bytes)
        }
        default: {
          throw new Error('Invalid version')
        }
      }
    }

    static parse(source, base) {
      const [prefix, bytes] = parseCIDtoBytes(source, base)

      const cid = CID.decode(bytes)
      cid._baseCache.set(prefix, source)

      return cid
    }

    static decode(bytes) {
      const [cid, remainder] = CID.decodeFirst(bytes)
      if (remainder.length) {
        throw new Error('Incorrect length')
      }
      return cid
    }

    static decodeFirst(bytes) {
      const specs = CID.inspectBytes(bytes)
      const prefixSize = specs.size - specs.multihashSize
      const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize))
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error('Incorrect length')
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize)
      const digest = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes)
      const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest)
      return [cid, bytes.subarray(specs.size)]
    }

    static inspectBytes(initialBytes) {
      let offset = 0
      const next = () => {
        const [i, length] = decode_1(initialBytes.subarray(offset))
        offset += length
        return i
      }

      let version = next()
      let codec = DAG_PB_CODE
      if (version === 18) { // CIDv0
        version = 0
        offset = 0
      } else if (version === 1) {
        codec = next()
      }

      if (version !== 0 && version !== 1) {
        throw new RangeError(`Invalid CID version ${version}`)
      }

      const prefixSize = offset
      const multihashCode = next()
      const digestSize = next()
      const size = offset + digestSize
      const multihashSize = size - prefixSize

      return { version, codec, multihashCode, digestSize, multihashSize, size }
    }

    static createV0(digest) {
      return CID.create(0, DAG_PB_CODE, digest)
    }

    static createV1(code, digest) {
      return CID.create(1, code, digest)
    }
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/hashes/digest.js#L10
  const create = (code, digest) => {
    const size = digest.byteLength
    const sizeOffset = encodingLength_1(code)
    const digestOffset = sizeOffset + encodingLength_1(size)

    const bytes = new Uint8Array(digestOffset + size)
    encodeTo_1(code, bytes, 0)
    encodeTo_1(size, bytes, sizeOffset)
    bytes.set(digest, digestOffset)

    return new Digest(code, size, digest, bytes)
  }

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/hashes/hasher.js#L22
  class Hasher {

    constructor(name, code, encode) {
      this.name = name
      this.code = code
      this.encode = encode
    }

    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input)
        return result instanceof Uint8Array
          ? create(this.code, result)
          : result.then((digest) => create(this.code, digest))
      } else {
        throw Error('Unknown type, must be binary type')
      }
    }
  }

  const from = ({ name, code, encode }) => new Hasher(name, code, encode)

  //https://github.com/multiformats/js-multiformats/blob/bb14a29dd823a517ef0c6c741d265e022591d831/src/hashes/sha2.js#L7
  s_sha256 = from({
    name: 'sha2-256',
    code: 18,
    //encode: (input) => coerce(crypto__default["default"].createHash('sha256').update(input).digest())
    encode: (input) => {
      return coerce(createHash('sha256').update(input).digest());
    }
  });

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2016, Daniel Wirtz  All rights reserved.
  *  https://github.com/protobufjs/protobuf.js/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/
  var protobuf = {};//exports;

  protobuf.build = "minimal";

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/lib/inquire/index.js#L10
  const util_inquire = function inquire(moduleName) {
    try {
      var mod = eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length))
        return mod;
    } catch (e) { }
    return null;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/minimal.js#L126
  const util_Buffer = (function () {
    try {
      var Buffer = util_inquire("buffer").Buffer;
      return Buffer.prototype.utf8Write ? Buffer : null;
    } catch (e) {
      return null;
    }
  })();

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L21
  function Op(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.next = undefined;
    this.val = val;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L49
  function noop() { }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L91
  function Writer() {
    this.len = 0;
    this.head = new Op(noop, 0, 0);
    this.tail = this.head;
    this.states = null;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/longbits.js#L14
  function util_LongBits(lo, hi) {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/longbits.js#L37
  var zero = util_LongBits.zero = new util_LongBits(0, 0);

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/longbits.js#L55
  util_LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
      return zero;
    var sign = value < 0;
    if (sign)
      value = -value;
    var lo = value >>> 0,
      hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295)
          hi = 0;
      }
    }
    return new util_LongBits(lo, hi);
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/longbits.js#L80
  util_LongBits.from = function from(value) {
    if (typeof value === "number")
      return util_LongBits.fromNumber(value);
    if (util_isString(value)) {
      if (util_Long)
        value = util_Long.fromString(value);
      else
        return util_LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new util_LongBits(value.low >>> 0, value.high >>> 0) : zero;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/longbits.js#L187
  util_LongBits.prototype.length = function length() {
    var part0 = this.lo,
      part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
      part2 = this.hi >>> 24;
    return part2 === 0
      ? part1 === 0
        ? part0 < 16384
          ? part0 < 128 ? 1 : 2
          : part0 < 2097152 ? 3 : 4
        : part1 < 16384
          ? part1 < 128 ? 5 : 6
          : part1 < 2097152 ? 7 : 8
      : part2 < 128 ? 9 : 10;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L242
  function writeVarint64(val, buf, pos) {
    while (val.hi) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
      val.hi >>>= 7;
    }
    while (val.lo > 127) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L261
  Writer.prototype.uint64 = function write_uint64(value) {
    var bits = util_LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L166
  Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/minimal.js#L79
  const util_isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
  };

  var invalidEncoding = "invalid encoding";
  var s64 = new Array(123);

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/lib/base64/index.js#L96
  const base64_decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0,
      t;
    for (var i = 0; i < string.length;) {
      var c = string.charCodeAt(i++);
      if (c === 61 && j > 1)
        break;
      if ((c = s64[c]) === undefined)
        throw Error(invalidEncoding);
      switch (j) {
        case 0:
          t = c;
          j = 1;
          break;
        case 1:
          buffer[offset++] = t << 2 | (c & 48) >> 4;
          t = c;
          j = 2;
          break;
        case 2:
          buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
          t = c;
          j = 3;
          break;
        case 3:
          buffer[offset++] = (t & 3) << 6 | c;
          j = 0;
          break;
      }
    }
    if (j === 1)
      throw Error(invalidEncoding);
    return offset - start;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L172
  function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/lib/base64/index.js#L15
  const base64_length = function length(string) {
    var p = string.length;
    if (!p)
      return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
      ++n;
    return Math.ceil(string.length * 3) / 4 - n;
  };

  var util_Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L359
  var writeBytes = util_Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    }
    : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L374
  Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
      return this._push(writeByte, 1, 0);
    if (util_isString(value)) {
      var buf = Writer.alloc(len = base64_length(value));
      base64_decode(value, buf, 0);
      value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L124
  var w1_create = function w1_create() {
    return util_Buffer
      ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      }
      : function create_array() {
        return new Writer();
      };
  };

  Writer.create = w1_create();

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L176
  function writeVarint32(val, buf, pos) {
    while (val > 127) {
      buf[pos++] = val & 127 | 128;
      val >>>= 7;
    }
    buf[pos] = val;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L193
  function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
  }

  VarintOp.prototype.fn = writeVarint32;

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L207
  Writer.prototype.uint32 = function write_uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp(
      (value = value >>> 0)
        < 128 ? 1
        : value < 16384 ? 2
          : value < 2097152 ? 3
            : value < 268435456 ? 4
              : 5,
      value)).len;
    return this;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L227
  Writer.prototype.int32 = function write_int32(value) {
    return value < 0
      ? this._push(writeVarint64, 10, util_LongBits.fromNumber(value))
      : this.uint32(value);
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L149
  Writer.alloc = function alloc(size) {
    return new util_Array(size);
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer_buffer.js#L6
  (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L448
  Writer.prototype.finish = function finish() {
    var head = this.head.next,
      buf = this.constructor.alloc(this.len),
      pos = 0;
    while (head) {
      head.fn(head.val, buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L461
  Writer._configure = function (BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = w1_create();
    BufferWriter._configure();
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader.js#L22
  function Reader(buffer) {
    this.buf = buffer;
    this.pos = 0;
    this.len = buffer.length;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader.js#L43
  var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    }
    : function create_array(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader.js#L56
  var r1_create = function r1_create() {
    return util_Buffer
      ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
          return util_Buffer.isBuffer(buffer)
            ? new BufferReader(buffer)
            : create_array(buffer);
        })(buffer);
      }
      : create_array;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/minimal.js#L237
  function util_merge(dst, src, ifNotSet) {
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
      if (dst[keys[i]] === undefined || !ifNotSet)
        dst[keys[i]] = src[keys[i]];
    return dst;
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader.js#L382
  Reader._configure = function (BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = r1_create();
    BufferReader._configure();

    var fn = "toLong";
    util_merge(Reader.prototype, {

      int64: function read_int64() {
        return readLongVarint.call(this)[fn](false);
      },

      uint64: function read_uint64() {
        return readLongVarint.call(this)[fn](true);
      },

      sint64: function read_sint64() {
        return readLongVarint.call(this).zzDecode()[fn](false);
      },

      fixed64: function read_fixed64() {
        return readFixed64.call(this)[fn](true);
      },

      sfixed64: function read_sfixed64() {
        return readFixed64.call(this)[fn](false);
      }

    });
  };
  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer_buffer.js#L16
  function BufferWriter() {
    Writer.call(this);
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L374
  Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
      return this._push(writeByte, 1, 0);
    if (util_isString(value)) {
      var buf = Writer.alloc(len = base64.length(value));
      base64.decode(value, buf, 0);
      value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
  };

  //https://github.com/protobufjs/protobuf.js/blob/48457c47372c39e07a8ecf1360f80de7f263ab2e/lib/utf8/index.js#L15
  function utf8_length(string) {
    var len = 0,
      c = 0;
    for (var i = 0; i < string.length; ++i) {
      c = string.charCodeAt(i);
      if (c < 128)
        len += 1;
      else if (c < 2048)
        len += 2;
      else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
        ++i;
        len += 4;
      } else
        len += 3;
    }
    return len;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer.js#L391
  Writer.prototype.string = function write_string(value) {
    var len = utf8_length(value);
    return len
      ? this.uint32(len)._push(utf8.write, len, value)
      : this._push(writeByte, 1, 0);
  };

  //https://github.com/protobufjs/protobuf.js/blob/48457c47372c39e07a8ecf1360f80de7f263ab2e/src/writer.js#L207
  Writer.prototype.uint32 = function write_uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp(
      (value = value >>> 0)
        < 128 ? 1
        : value < 16384 ? 2
          : value < 2097152 ? 3
            : value < 268435456 ? 4
              : 5,
      value)).len;
    return this;
  };

  //https://github.com/protobufjs/protobuf.js/blob/48457c47372c39e07a8ecf1360f80de7f263ab2e/src/writer.js#L59
  function State(writer) {
    this.head = writer.head;
    this.tail = writer.tail;
    this.len = writer.len;
    this.next = writer.states;
  }

  //https://github.com/protobufjs/protobuf.js/blob/48457c47372c39e07a8ecf1360f80de7f263ab2e/src/writer.js#L403
  Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
  };

  //https://github.com/protobufjs/protobuf.js/blob/48457c47372c39e07a8ecf1360f80de7f263ab2e/src/writer.js#L414
  Writer.prototype.reset = function reset() {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
    }
    return this;
  };

  //https://github.com/protobufjs/protobuf.js/blob/48457c47372c39e07a8ecf1360f80de7f263ab2e/src/writer.js#L431
  Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
      tail = this.tail,
      len = this.len;
    this.reset().uint32(len);
    if (len) {
      this.tail.next = head.next; // skip noop
      this.tail = tail;
      this.len += len;
    }
    return this;
  };

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) Feross Aboukhadijeh, and other contributors.
  *  Licensed under the MIT License.
  *  https://github.com/feross/buffer/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/feross/buffer/blob/795bbb5bda1b39f1370ebd784bea6107b087e3a7/index.js#L98
  function Buffer(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        )
      }
      return allocUnsafe(arg)
    }
    return from(arg, encodingOrOffset, length)
  }

  Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
  Object.setPrototypeOf(Buffer, Uint8Array)

  const K_MAX_LENGTH = 0x7fffffff

  //https://github.com/feross/buffer/blob/795bbb5bda1b39f1370ebd784bea6107b087e3a7/index.js#L322
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
        'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
    }
    return length | 0
  }

  //https://github.com/feross/buffer/blob/795bbb5bda1b39f1370ebd784bea6107b087e3a7/index.js#L78
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"')
    }
    const buf = new Uint8Array(length)
    Object.setPrototypeOf(buf, Buffer.prototype)
    return buf
  }

  //https://github.com/feross/buffer/blob/795bbb5bda1b39f1370ebd784bea6107b087e3a7/index.js#L182
  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be of type number')
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
  }

  //https://github.com/feross/buffer/blob/795bbb5bda1b39f1370ebd784bea6107b087e3a7/index.js#L214
  function allocUnsafe(size) {
    assertSize(size)
    return createBuffer(size < 0 ? 0 : checked(size) | 0)
  }

  //https://github.com/feross/buffer/blob/795bbb5bda1b39f1370ebd784bea6107b087e3a7/index.js#L222
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(size)
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/writer_buffer.js#L20
  BufferWriter._configure = function () {

    BufferWriter.alloc = Buffer.allocUnsafe

    BufferWriter.writeBytesBuffer = util_Buffer && util_Buffer.prototype instanceof Uint8Array && util_Buffer.prototype.set.name === "set"
      ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      }
      : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;)
          buf[pos++] = val[i++];
      };
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader_buffer.js#L6
  (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader_buffer.js#L17
  function BufferReader(buffer) {
    Reader.call(this, buffer);
  }

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/reader_buffer.js#L27
  BufferReader._configure = function () {
    if (util_Buffer)
      BufferReader.prototype._slice = util_Buffer.prototype.slice;
  };

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/util/minimal.js#L402
  util_configure = function () {
    var Buffer = util_Buffer;
    if (!Buffer) {
      util_Buffer_from = util_Buffer_allocUnsafe = null;
      return;
    }
    util_Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
      function Buffer_from(value, encoding) {
        return new Buffer(value, encoding);
      };
    util_Buffer_allocUnsafe = Buffer.allocUnsafe ||
      function Buffer_allocUnsafe(size) {
        return new Buffer(size);
      };
  };

  protobuf.rpc = {};
  protobuf.roots = {};
  protobuf.configure = configure;

  //https://github.com/protobufjs/protobuf.js/blob/2cdbba32da9951c1ff14e55e65e4a9a9f24c70fd/src/index-minimal.js#L29
  function configure() {
    util_configure();
    Writer._configure(BufferWriter);
    Reader._configure(BufferReader);
  }

  configure();

  var $protobuf = protobuf;
  var $protobuf__default = _interopDefaultLegacy($protobuf);

  /*---------------------------------------------------------------------------------------------
*  Licensed under the MIT License.
*  https://github.com/IndigoUnited/js-err-code/blob/8dd437663a48e833ab70223f8a58a888985d1e3a/README.md
*--------------------------------------------------------------------------------------------*/

  //https://github.com/IndigoUnited/js-err-code/blob/8dd437663a48e833ab70223f8a58a888985d1e3a/index.js#L15
  function assign(obj, props) {
    for (const key in props) {
      Object.defineProperty(obj, key, {
        value: props[key],
        enumerable: true,
        configurable: true,
      });
    }

    return obj;
  }

  //https://github.com/IndigoUnited/js-err-code/blob/8dd437663a48e833ab70223f8a58a888985d1e3a/index.js#L34
  function createError(err, code, props) {
    if (!err || typeof err === 'string') {
      throw new TypeError('Please pass an Error to err-code');
    }

    if (!props) {
      props = {};
    }

    if (typeof code === 'object') {
      props = code;
      code = '';
    }

    if (code) {
      props.code = code;
    }

    try {
      return assign(err, props);
    } catch (_) {
      props.message = err.message;
      props.stack = err.stack;

      const ErrClass = function () { };

      ErrClass.prototype = Object.create(Object.getPrototypeOf(err));

      // @ts-ignore
      const output = assign(new ErrClass(), props);

      return output;
    }
  }

  var errcode = createError;

  function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }
  var errcode__default = /*#__PURE__*/_interopDefaultLegacy(errcode);

  /*---------------------------------------------------------------------------------------------
  *  Licensed under the MIT License.
  *  https://github.com/ipfs/js-ipfs-unixfs/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/unixfs.js#L8
  const $root = $protobuf__default["default"].roots['ipfs-unixfs'] || ($protobuf__default["default"].roots['ipfs-unixfs'] = {});

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/unixfs.js#L10
  const Data = $root.Data = (() => {
    function Data(p) {
      this.blocksizes = [];
      if (p)
        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
          if (p[ks[i]] != null)
            this[ks[i]] = p[ks[i]];
    }
    Data.prototype.Type = 0;
    Data.prototype.filesize = 0;
    Data.prototype.hashType = 0;
    Data.prototype.fanout = 0;
    Data.prototype.mode = 0;
    Data.prototype.mtime = null;
    Data.encode = function encode(m, w) {
      if (!w) {
        w = Writer.create();
      }
      w.uint32(8).int32(m.Type);
      if (m.Data != null && Object.hasOwnProperty.call(m, 'Data')) {
        w.uint32(18).bytes(m.Data);
      }
      if (m.filesize != null && Object.hasOwnProperty.call(m, 'filesize')) {
        w.uint32(24).uint64(m.filesize); // here is the bug
      }
      if (m.blocksizes != null && m.blocksizes.length) {
        for (var i = 0; i < m.blocksizes.length; ++i)
          w.uint32(32).uint64(m.blocksizes[i]);
      }
      if (m.hashType != null && Object.hasOwnProperty.call(m, 'hashType')) {
        w.uint32(40).uint64(m.hashType);
      }
      if (m.fanout != null && Object.hasOwnProperty.call(m, 'fanout')) {
        w.uint32(48).uint64(m.fanout);
      }

      if (m.mode != null && Object.hasOwnProperty.call(m, 'mode')) {
        w.uint32(56).uint32(m.mode);
      }

      if (m.mtime != null && Object.hasOwnProperty.call(m, 'mtime')) {
        $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
      }

      return w;
    };
    Data.decode = function decode(r, l) {
      if (!(r instanceof Reader))
        r = Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l, m = new $root.Data();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.Type = r.int32();
            break;
          case 2:
            m.Data = r.bytes();
            break;
          case 3:
            m.filesize = r.uint64();
            break;
          case 4:
            if (!(m.blocksizes && m.blocksizes.length))
              m.blocksizes = [];
            if ((t & 7) === 2) {
              var c2 = r.uint32() + r.pos;
              while (r.pos < c2)
                m.blocksizes.push(r.uint64());
            } else
              m.blocksizes.push(r.uint64());
            break;
          case 5:
            m.hashType = r.uint64();
            break;
          case 6:
            m.fanout = r.uint64();
            break;
          case 7:
            m.mode = r.uint32();
            break;
          case 8:
            m.mtime = $root.UnixTime.decode(r, r.uint32());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Data.fromObject = function fromObject(d) {
      if (d instanceof $root.Data)
        return d;
      var m = new $root.Data();
      switch (d.Type) {
        case 'Raw':
        case 0:
          m.Type = 0;
          break;
        case 'Directory':
        case 1:
          m.Type = 1;
          break;
        case 'File':
        case 2:
          m.Type = 2;
          break;
      }
      return m;
    };

    Data.DataType = function () {
      const valuesById = {}, values = Object.create(valuesById);
      values[valuesById[0] = 'Raw'] = 0;
      values[valuesById[1] = 'Directory'] = 1;
      values[valuesById[2] = 'File'] = 2;
      return values;
    }();
    return Data;
  })();

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/index.js#L10
  const types = [
    'raw',
    'directory',
    'file',
    'metadata',
    'symlink',
    'hamt-sharded-directory'
  ];

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/index.js#L19
  const dirTypes = [
    'directory',
    'hamt-sharded-directory'
  ];

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/index.js#L30
  function parseMode(mode) {
    if (mode == null) {
      return undefined;
    }
    if (typeof mode === 'number') {
      return mode & 4095;
    }
    mode = mode.toString();
    if (mode.substring(0, 1) === '0') {
      return parseInt(mode, 8) & 4095;
    }
    return parseInt(mode, 10) & 4095;
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/index.js#L53
  function parseMtime(input) {
    if (input == null) {
      return undefined;
    }
    let mtime;
    if (input.secs != null) {
      mtime = {
        secs: input.secs,
        nsecs: input.nsecs
      };
    }
    if (input.Seconds != null) {
      mtime = {
        secs: input.Seconds,
        nsecs: input.FractionalNanoseconds
      };
    }
    if (Array.isArray(input)) {
      mtime = {
        secs: input[0],
        nsecs: input[1]
      };
    }
    if (input instanceof Date) {
      const ms = input.getTime();
      const secs = Math.floor(ms / 1000);
      mtime = {
        secs: secs,
        nsecs: (ms - secs * 1000) * 1000
      };
    }
    if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
      return undefined;
    }
    if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
      throw errcode__default["default"](new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
    }
    return mtime;
  }

  const PBData = Data;

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/index.js#L24
  const DEFAULT_FILE_MODE = parseInt('0644', 8);
  const DEFAULT_DIRECTORY_MODE = parseInt('0755', 8);

  //https://github.com/ipfs/js-ipfs-unixfs/blob/de1a7f0afc144462b374919a44d3af4fae3a49da/packages/ipfs-unixfs/src/index.js#L122
  class UnixFS {
    constructor(options = { type: 'file' }) {
      const { type, data, blockSizes, hashType, fanout, mtime, mode } = options;
      if (type && !types.includes(type)) {
        throw errcode__default["default"](new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
      }
      this.type = type || 'file';
      this.data = data;
      this.hashType = hashType;
      this.fanout = fanout;
      this.blockSizes = blockSizes || [];
      this._originalMode = 0;
      this.mode = parseMode(mode);
      if (mtime) {
        this.mtime = parseMtime(mtime);
        if (this.mtime && !this.mtime.nsecs) {
          this.mtime.nsecs = 0;
        }
      }
    }
    set mode(mode) {
      this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
      const parsedMode = parseMode(mode);
      if (parsedMode !== undefined) {
        this._mode = parsedMode;
      }
    }
    get mode() {
      return this._mode;
    }
    isDirectory() {
      return Boolean(this.type && dirTypes.includes(this.type));
    }
    addBlockSize(size) {
      this.blockSizes.push(size)
    }
    fileSize() {
      if (this.isDirectory()) {
        return 0;
      }
      let sum = 0;
      this.blockSizes.forEach(size => {
        sum += size;
      });
      if (this.data) {
        sum += this.data.length;
      }
      return sum;
    }
    marshal() {
      let type;
      switch (this.type) {
        case 'raw':
          type = PBData.DataType.Raw;
          break;
        case 'directory':
          type = PBData.DataType.Directory;
          break;
        case 'file':
          type = PBData.DataType.File;
          break;
        case 'metadata':
          type = PBData.DataType.Metadata;
          break;
        case 'symlink':
          type = PBData.DataType.Symlink;
          break;
        case 'hamt-sharded-directory':
          type = PBData.DataType.HAMTShard;
          break;
        default:
          throw errcode__default["default"](new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
      }
      let data = this.data;
      if (!this.data || !this.data.length) {
        data = undefined;
      }
      let mode;
      if (this.mode != null) {
        mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);
        if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
          mode = undefined;
        }
        if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
          mode = undefined;
        }
      }
      let mtime;
      if (this.mtime != null) {
        const parsed = parseMtime(this.mtime);
        if (parsed) {
          mtime = {
            Seconds: parsed.secs,
            FractionalNanoseconds: parsed.nsecs
          };
          if (mtime.FractionalNanoseconds === 0) {
            delete mtime.FractionalNanoseconds;
          }
        }
      }
      const pbData = {
        Type: type,
        Data: data,
        filesize: this.isDirectory() ? undefined : this.fileSize(),
        blocksizes: this.blockSizes,
        hashType: this.hashType,
        fanout: this.fanout,
        mode,
        mtime
      };
      return PBData.encode(pbData).finish();
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/options.js#L8
  async function hamtHashFn(buf) {
    const hash = await multihashing(buf, 'murmur3-128')
    const justHash = hash.slice(2, 10)
    const length = justHash.length
    const result = new Uint8Array(length)
    // TODO: invert buffer because that's how Go impl does it
    for (let i = 0; i < length; i++) {
      result[length - i - 1] = justHash[i]
    }

    return result
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/chunker/rabin.js#L19
  async function* rabinChunker(source, options) {
    let min, max, avg

    if (options.minChunkSize && options.maxChunkSize && options.avgChunkSize) {
      avg = options.avgChunkSize
      min = options.minChunkSize
      max = options.maxChunkSize
    } else if (!options.avgChunkSize) {
      throw errcode(new Error('please specify an average chunk size'), 'ERR_INVALID_AVG_CHUNK_SIZE')
    } else {
      avg = options.avgChunkSize
      min = avg / 3
      max = avg + (avg / 2)
    }

    // validate min/max/avg in the same way as go
    if (min < 16) {
      throw errcode(new Error('rabin min must be greater than 16'), 'ERR_INVALID_MIN_CHUNK_SIZE')
    }

    if (max < min) {
      max = min
    }

    if (avg < min) {
      avg = min
    }

    const sizepow = Math.floor(Math.log2(avg))

    for await (const chunk of rabin(source, {
      min: min,
      max: max,
      bits: sizepow,
      window: options.window,
      polynomial: options.polynomial
    })) {
      yield chunk
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/chunker/rabin.js#L66
  async function* rabin(source, options) {
    const r = await create(options.bits, options.min, options.max, options.window)
    const buffers = new BufferList()

    for await (const chunk of source) {
      buffers.append(chunk)

      const sizes = r.fingerprint(chunk)

      for (let i = 0; i < sizes.length; i++) {
        const size = sizes[i]
        const buf = buffers.slice(0, size)
        buffers.consume(size)

        yield buf
      }
    }

    if (buffers.length) {
      yield buffers.slice(0)
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/chunker/fixed-size.js#L7
  async function* fixedSizeChunker(source, options) {
    let bl = new BufferList()
    let currentLength = 0
    let emitted = false
    const maxChunkSize = options.maxChunkSize

    for await (const buffer of source) {
      bl.append(buffer)

      currentLength += buffer.length

      while (currentLength >= maxChunkSize) {
        yield bl.slice(0, maxChunkSize)
        emitted = true

        // throw away consumed bytes
        if (maxChunkSize === bl.length) {
          bl = new BufferList()
          currentLength = 0
        } else {
          const newBl = new BufferList()
          newBl.append(bl.shallowSlice(maxChunkSize))
          bl = newBl

          // update our offset
          currentLength -= maxChunkSize
        }
      }
    }

    if (!emitted || currentLength) {
      // return any remaining bytes or an empty buffer
      yield bl.slice(0, currentLength)
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/dag-builder/index.js#L59
  async function* dagBuilder1(source, block, options) {
    for await (const entry of source) {
      if (entry.path) {
        if (entry.path.substring(0, 2) === './') {
          options.wrapWithDirectory = true
        }

        entry.path = entry.path
          .split('/')
          .filter(path => path && path !== '.')
          .join('/')
      }

      if (entry.content) {
        let chunker

        if (typeof options.chunker === 'function') {
          chunker = options.chunker
        } else if (options.chunker === 'rabin') {
          chunker = rabinChunker
        } else {
          chunker = fixedSizeChunker
        }

        let chunkValidator

        if (typeof options.chunkValidator === 'function') {
          chunkValidator = options.chunkValidator
        } else {
          chunkValidator = validateChunks // point 5
        }

        const file = {
          path: entry.path,
          mtime: entry.mtime,
          mode: entry.mode,
          content: chunker(chunkValidator(contentAsAsyncIterable(entry.content), options), options) // here change content to other data type
        }

        yield () => fileBuilder(file, block, options)
      } else if (entry.path) {
        const dir = {
          path: entry.path,
          mtime: entry.mtime,
          mode: entry.mode
        }

        yield () => dirBuilder(dir, block, options)
      } else {
        throw new Error('Import candidate must have content or path or both')
      }
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/dag-builder/validate-chunks.js#L11
  async function* validateChunks(source) {
    for await (const content of source) {
      if (content.length === undefined) {
        throw errCode(new Error('Content was invalid'), 'ERR_INVALID_CONTENT')
      }

      if (typeof content === 'string' || content instanceof String) {
        yield uint8ArrayFromString(content.toString())
      } else if (Array.isArray(content)) {
        yield Uint8Array.from(content)
      } else if (content instanceof Uint8Array) {
        yield content
      } else {
        throw errCode(new Error('Content was invalid'), 'ERR_INVALID_CONTENT')
      }
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/dag-builder/dir.js#L12
  const dirBuilder = async (item, block, options) => {
    const unixfs = new UnixFS({
      type: 'directory',
      mtime: item.mtime,
      mode: item.mode
    })

    const buffer = new DAGNode(unixfs.marshal()).serialize()
    const cid = await persist(buffer, block, options)
    const path = item.path

    return {
      cid,
      path,
      unixfs,
      size: buffer.length
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/balanced.js#L17
  async function reduceToParents(source, reduce, options) {
    const roots = []

    for await (const chunked of batch(source, options.maxChildrenPerNode)) {
      roots.push(await reduce(chunked))
    }

    if (roots.length > 1) {
      return reduceToParents(roots, reduce, options)
    }

    return roots[0]
  }

  const dagBuilders = {
    //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/flat.js#L6
    flat: async function (source, reduce) {
      return reduce(await all(source))
    },
    //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/balanced.js#L10
    balanced: function balanced(source, reduce, options) {
      return reduceToParents(source, reduce, options)
    },
    //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/trickle.js#L15
    trickle: async function trickleStream(source, reduce, options) {
      const root = new Root(options.layerRepeat)
      let iteration = 0
      let maxDepth = 1
      let subTree = root

      for await (const layer of batch(source, options.maxChildrenPerNode)) {
        if (subTree.isFull()) {
          if (subTree !== root) {
            root.addChild(await subTree.reduce(reduce))
          }

          if (iteration && iteration % options.layerRepeat === 0) {
            maxDepth++
          }

          subTree = new SubTree(maxDepth, options.layerRepeat, iteration)

          iteration++
        }

        subTree.append(layer)
      }

      if (subTree && subTree !== root) {
        root.addChild(await subTree.reduce(reduce))
      }

      return root.reduce(reduce)
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/trickle.js#L50
  class SubTree {
    constructor(maxDepth, layerRepeat, iteration = 0) {
      this.maxDepth = maxDepth
      this.layerRepeat = layerRepeat
      this.currentDepth = 1
      this.iteration = iteration

      this.root = this.node = this.parent = {
        children: [],
        depth: this.currentDepth,
        maxDepth,
        maxChildren: (this.maxDepth - this.currentDepth) * this.layerRepeat
      }
    }

    isFull() {
      if (!this.root.data) {
        return false
      }

      if (this.currentDepth < this.maxDepth && this.node.maxChildren) {
        this._addNextNodeToParent(this.node)
        return false
      }

      const distantRelative = this._findParent(this.node, this.currentDepth)

      if (distantRelative) {
        this._addNextNodeToParent(distantRelative)

        return false
      }

      return true
    }

    _addNextNodeToParent(parent) {
      this.parent = parent
      const nextNode = {
        children: [],
        depth: parent.depth + 1,
        parent,
        maxDepth: this.maxDepth,
        maxChildren: Math.floor(parent.children.length / this.layerRepeat) * this.layerRepeat
      }

      // @ts-ignore
      parent.children.push(nextNode)

      this.currentDepth = nextNode.depth
      this.node = nextNode
    }

    append(layer) {
      this.node.data = layer
    }

    reduce(reduce) {
      return this._reduce(this.root, reduce)
    }

    async _reduce(node, reduce) {
      /** @type {InProgressImportResult[]} */
      let children = []

      if (node.children.length) {
        children = await Promise.all(
          node.children
            // @ts-ignore
            .filter(child => child.data)
            // @ts-ignore
            .map(child => this._reduce(child, reduce))
        )
      }

      return reduce((node.data || []).concat(children))
    }

    _findParent(node, depth) {
      const parent = node.parent

      if (!parent || parent.depth === 0) {
        return
      }

      if (parent.children.length === parent.maxChildren || !parent.maxChildren) {
        return this._findParent(parent, depth)
      }

      return parent
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/trickle.js#L175
  class Root extends SubTree {

    constructor(layerRepeat) {
      super(0, layerRepeat)

      this.root.depth = 0
      this.currentDepth = 1
    }

    addChild(child) {
      this.root.children.push(child)
    }

    reduce(reduce) {
      return reduce((this.root.data || []).concat(this.root.children))
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/index.js#L198
  function fileBuilder(file, block, options) {
    const dagBuilder = dagBuilders[options.strategy]

    if (!dagBuilder) {
      throw errCode(new Error(`Unknown importer build strategy name: ${options.strategy}`), 'ERR_BAD_STRATEGY')
    }
    return dagBuilder(buildFileBatch(file, block, options), reduce(file, block, options), options)
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/buffer-importer.js#L13
  async function* bufferImporter1(file, block, options) {
    for await (let buffer of file.content) {
      yield async () => {
        options.progress(buffer.length, file.path)
        let unixfs

        const opts = {
          codec: 'dag-pb',
          cidVersion: options.cidVersion,
          hashAlg: options.hashAlg,
          onlyHash: options.onlyHash
        }

        if (options.rawLeaves) {
          opts.codec = 'raw'
          opts.cidVersion = 1
        } else {
          unixfs = new UnixFS({
            type: options.leafType,
            data: buffer,
            mtime: file.mtime,
            mode: file.mode
          })

          buffer = new DAGNode(unixfs.marshal()).serialize()  // buffer is [Uint8Array]
        }
        return {
          cid: await persist(buffer, block, opts),
          unixfs,
          size: buffer.length
        }
      }
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/index.js#L37
  async function* buildFileBatch(file, block, options) {
    let count = -1
    let previous
    let bufferImporter

    if (typeof options.bufferImporter === 'function') {
      bufferImporter = options.bufferImporter
    } else {
      bufferImporter = bufferImporter1
    }

    for await (const entry of parallelBatch(bufferImporter(file, block, options), options.blockWriteConcurrency)) {
      count++

      if (count === 0) {
        previous = entry
        continue
      } else if (count === 1 && previous) {
        yield previous
        previous = null
      }

      yield entry
    }

    if (previous) {
      previous.single = true
      yield previous
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dag-builder/file/index.js#L73
  const reduce = (file, block, options) => {

    async function reducer(leaves) {
      if (leaves.length === 1 && leaves[0].single && options.reduceSingleLeafToSelf) {
        const leaf = leaves[0]

        if (leaf.cid.codec === 'raw' && (file.mtime !== undefined || file.mode !== undefined)) {
          let { data: buffer } = await block.get(leaf.cid, options)

          leaf.unixfs = new UnixFS({
            type: 'file',
            mtime: file.mtime,
            mode: file.mode,
            data: buffer
          })

          const multihash = mh.decode(leaf.cid.multihash)
          buffer = new DAGNode(leaf.unixfs.marshal()).serialize()

          leaf.cid = await persist(buffer, block, {
            ...options,
            codec: 'dag-pb',
            hashAlg: multihash.name,
            cidVersion: options.cidVersion
          })
          leaf.size = buffer.length
        }
        return {
          cid: leaf.cid,
          path: file.path,
          unixfs: leaf.unixfs,
          size: leaf.size
        }
      }

      const f = new UnixFS({
        type: 'file',
        mtime: file.mtime,
        mode: file.mode
      })

      const links = leaves
        .filter(leaf => {
          if (leaf.cid.codec === 'raw' && leaf.size) {
            return true
          }

          if (leaf.unixfs && !leaf.unixfs.data && leaf.unixfs.fileSize()) {
            return true
          }

          return Boolean(leaf.unixfs && leaf.unixfs.data && leaf.unixfs.data.length)
        })
        .map((leaf) => {
          if (leaf.cid.codec === 'raw') {
            f.addBlockSize(leaf.size)

            return new DAGLink('', leaf.size, leaf.cid)
          }

          if (!leaf.unixfs || !leaf.unixfs.data) {
            f.addBlockSize((leaf.unixfs && leaf.unixfs.fileSize()) || 0)
          } else {
            f.addBlockSize(leaf.unixfs.data.length)
          }

          return new DAGLink('', leaf.size, leaf.cid)
        })

      const node = new DAGNode(f.marshal(), links)
      const buffer = node.serialize()
      const cid = await persist(buffer, block, options)

      return {
        cid,
        path: file.path,
        unixfs: f,
        size: buffer.length + node.Links.reduce((acc, curr) => acc + curr.Tsize, 0)
      }
    }

    return reducer
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/dag-builder/index.js#L36
  function contentAsAsyncIterable(content) {
    try {
      if (content instanceof Uint8Array) {
        return (async function* () {
          yield content
        }())
      } else if (isIterable(content)) {
        return (async function* () {
          yield* content
        }())
      } else if (isAsyncIterable(content)) {
        return content
      }
    } catch {
      throw errCode(new Error('Content was invalid'), 'ERR_INVALID_CONTENT')
    }

    throw errCode(new Error('Content was invalid'), 'ERR_INVALID_CONTENT')
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/dag-builder/index.js#L20
  function isIterable(thing) {
    return Symbol.iterator in thing
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/dag-builder/index.js#L28
  function isAsyncIterable(thing) {
    return Symbol.asyncIterator in thing
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/utils/to-path-components.js#L1
  const toPathComponents = (path = '') => {
    return (path
      .trim()
      .match(/([^\\^/]|\\\/)+/g) || [])
      .filter(Boolean)
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/tree-builder.js#L19
  async function addToTree(elem, tree, options) {
    const pathElems = toPathComponents(elem.path || '')
    const lastIndex = pathElems.length - 1
    let parent = tree
    let currentPath = ''

    for (let i = 0; i < pathElems.length; i++) {
      const pathElem = pathElems[i]

      currentPath += `${currentPath ? '/' : ''}${pathElem}`

      const last = (i === lastIndex)
      parent.dirty = true
      parent.cid = undefined
      parent.size = undefined

      if (last) {
        await parent.put(pathElem, elem)
        tree = await flatToShard(null, parent, options.shardSplitThreshold, options)
      } else {
        let dir = await parent.get(pathElem)

        if (!dir || !(dir instanceof Dir)) {
          dir = new DirFlat({
            root: false,
            dir: true,
            parent: parent,
            parentKey: pathElem,
            path: currentPath,
            dirty: true,
            flat: true,
            mtime: dir && dir.unixfs && dir.unixfs.mtime,
            mode: dir && dir.unixfs && dir.unixfs.mode
          }, options)
        }

        await parent.put(pathElem, dir)

        parent = dir
      }
    }
    return tree
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/tree-builder.js#L68
  async function* flushAndYield(tree, block) {
    if (!(tree instanceof Dir)) {
      if (tree && tree.unixfs && tree.unixfs.isDirectory()) {
        yield tree
      }

      return
    }

    yield* tree.flush(block)
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/tree-builder.js#L83
  async function* treeBuilder1(source, block, options) {
    let tree = new DirFlat({
      root: true,
      dir: true,
      path: '',
      dirty: true,
      flat: true
    }, options)

    for await (const entry of source) {
      if (!entry) {
        continue
      }

      tree = await addToTree(entry, tree, options)

      if (!entry.unixfs || !entry.unixfs.isDirectory()) {
        yield entry
      }
    }

    if (options.wrapWithDirectory) {
      yield* flushAndYield(tree, block)
    } else {
      for await (const unwrapped of tree.eachChildSeries()) {
        if (!unwrapped) {
          continue
        }

        yield* flushAndYield(unwrapped.child, block)
      }
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dir.js#L20
  class Dir {
    constructor(props, options) {
      this.options = options || {}

      this.root = props.root
      this.dir = props.dir
      this.path = props.path
      this.dirty = props.dirty
      this.flat = props.flat
      this.parent = props.parent
      this.parentKey = props.parentKey
      this.unixfs = props.unixfs
      this.mode = props.mode
      this.mtime = props.mtime

      this.cid = undefined
      this.size = undefined
    }

    async put(name, value) { }
    get(name) {
      return Promise.resolve(this)
    }
    async * eachChildSeries() { }
    async * flush(block) { }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/dir-flat.js#L16
  class DirFlat extends Dir {

    constructor(props, options) {
      super(props, options)
      this._children = {}
    }

    async put(name, value) {
      this.cid = undefined
      this.size = undefined
      this._children[name] = value
    }

    get(name) {
      return Promise.resolve(this._children[name])
    }

    childCount() {
      return Object.keys(this._children).length
    }

    directChildrenCount() {
      return this.childCount()
    }

    onlyChild() {
      return this._children[Object.keys(this._children)[0]]
    }

    async * eachChildSeries() {
      const keys = Object.keys(this._children)

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]

        yield {
          key: key,
          child: this._children[key]
        }
      }
    }

    async * flush(block) {
      const children = Object.keys(this._children)
      const links = []

      for (let i = 0; i < children.length; i++) {
        let child = this._children[children[i]]

        if (child instanceof Dir) {
          for await (const entry of child.flush(block)) {
            child = entry

            yield child
          }
        }

        if (child.size != null && child.cid) {
          links.push(new DAGLink(children[i], child.size, child.cid))
        }
      }

      const unixfs = new UnixFS({
        type: 'directory',
        mtime: this.mtime,
        mode: this.mode
      })

      const node = new DAGNode(unixfs.marshal(), links)
      const buffer = node.serialize()
      const cid = await persist(buffer, block, this.options)
      const size = buffer.length + node.Links.reduce(
        (acc, curr) => acc + curr.Tsize,
        0)

      this.cid = cid
      this.size = size

      yield {
        cid,
        unixfs,
        path: this.path,
        size
      }
    }
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/options.js#L26
  const defaultOptions = {
    chunker: 'fixed',
    strategy: 'balanced', // 'flat', 'trickle'
    rawLeaves: false,
    onlyHash: false,
    reduceSingleLeafToSelf: true,
    hashAlg: 'sha2-256',
    leafType: 'file', // 'raw'
    cidVersion: 0,
    progress: () => () => { },
    shardSplitThreshold: 1000,
    fileImportConcurrency: 50,
    blockWriteConcurrency: 10,
    minChunkSize: 262144,
    maxChunkSize: 262144,
    avgChunkSize: 262144,
    window: 16,
    // FIXME: This number is too big for JavaScript
    // https://github.com/ipfs/go-ipfs-chunker/blob/d0125832512163708c0804a3cda060e21acddae4/rabin.go#L11
    polynomial: 17437180132763653, // eslint-disable-line no-loss-of-precision
    maxChildrenPerNode: 174,
    layerRepeat: 4,
    wrapWithDirectory: false,
    pin: false,
    recursive: false,
    hidden: false,
    preload: false,
    timeout: undefined,
    hamtHashFn,
    hamtHashCode: 0x22,
    hamtBucketBits: 8
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2020-2021 Yusuke Kawasaki
  *  Licensed under the MIT License.
  *  https://github.com/kawanet/sha256-uint8array/blob/main/LICENSE
  *--------------------------------------------------------------------------------------------*/
  //https://github.com/kawanet/sha256-uint8array/blob/52e8f1b891c84fcb436f0f2e1103527d3a6465ea/lib/sha256-uint8array.ts#L36
  const algorithms = {
    sha256: 1,
  };

  //https://github.com/kawanet/sha256-uint8array/blob/52e8f1b891c84fcb436f0f2e1103527d3a6465ea/lib/sha256-uint8array.ts#L40
  function createHash(algorithm) {
    if (algorithm && !algorithms[algorithm] && !algorithms[algorithm.toLowerCase()]) {
      throw new Error("Digest method not supported");
    }
    return new Hash();
  }

  //https://github.com/kawanet/sha256-uint8array/blob/52e8f1b891c84fcb436f0f2e1103527d3a6465ea/lib/sha256-uint8array.ts#L6
  const K = [
    0x428a2f98 | 0, 0x71374491 | 0, 0xb5c0fbcf | 0, 0xe9b5dba5 | 0,
    0x3956c25b | 0, 0x59f111f1 | 0, 0x923f82a4 | 0, 0xab1c5ed5 | 0,
    0xd807aa98 | 0, 0x12835b01 | 0, 0x243185be | 0, 0x550c7dc3 | 0,
    0x72be5d74 | 0, 0x80deb1fe | 0, 0x9bdc06a7 | 0, 0xc19bf174 | 0,
    0xe49b69c1 | 0, 0xefbe4786 | 0, 0x0fc19dc6 | 0, 0x240ca1cc | 0,
    0x2de92c6f | 0, 0x4a7484aa | 0, 0x5cb0a9dc | 0, 0x76f988da | 0,
    0x983e5152 | 0, 0xa831c66d | 0, 0xb00327c8 | 0, 0xbf597fc7 | 0,
    0xc6e00bf3 | 0, 0xd5a79147 | 0, 0x06ca6351 | 0, 0x14292967 | 0,
    0x27b70a85 | 0, 0x2e1b2138 | 0, 0x4d2c6dfc | 0, 0x53380d13 | 0,
    0x650a7354 | 0, 0x766a0abb | 0, 0x81c2c92e | 0, 0x92722c85 | 0,
    0xa2bfe8a1 | 0, 0xa81a664b | 0, 0xc24b8b70 | 0, 0xc76c51a3 | 0,
    0xd192e819 | 0, 0xd6990624 | 0, 0xf40e3585 | 0, 0x106aa070 | 0,
    0x19a4c116 | 0, 0x1e376c08 | 0, 0x2748774c | 0, 0x34b0bcb5 | 0,
    0x391c0cb3 | 0, 0x4ed8aa4a | 0, 0x5b9cca4f | 0, 0x682e6ff3 | 0,
    0x748f82ee | 0, 0x78a5636f | 0, 0x84c87814 | 0, 0x8cc70208 | 0,
    0x90befffa | 0, 0xa4506ceb | 0, 0xbef9a3f7 | 0, 0xc67178f2 | 0,
  ];

  //https://github.com/kawanet/sha256-uint8array/blob/52e8f1b891c84fcb436f0f2e1103527d3a6465ea/lib/sha256-uint8array.ts#L48
  class Hash {
    constructor() {
      // first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19
      this.A = 0x6a09e667 | 0;
      this.B = 0xbb67ae85 | 0;
      this.C = 0x3c6ef372 | 0;
      this.D = 0xa54ff53a | 0;
      this.E = 0x510e527f | 0;
      this.F = 0x9b05688c | 0;
      this.G = 0x1f83d9ab | 0;
      this.H = 0x5be0cd19 | 0;
      this._size = 0;
      this._sp = 0; // surrogate pair
      if (!sharedBuffer || sharedOffset >= 8000 /* allocTotal */) {
        sharedBuffer = new ArrayBuffer(8000 /* allocTotal */);
        sharedOffset = 0;
      }
      this._byte = new Uint8Array(sharedBuffer, sharedOffset, 80 /* allocBytes */);
      this._word = new Int32Array(sharedBuffer, sharedOffset, 20 /* allocWords */);
      sharedOffset += 80 /* allocBytes */;
    }
    update(data) {
      // data: string
      if ("string" === typeof data) {
        return this._utf8(data);
      }
      // data: undefined
      if (data == null) {
        throw new TypeError("Invalid type: " + typeof data);
      }
      const byteOffset = data.byteOffset;
      const length = data.byteLength;
      let blocks = (length / 64 /* inputBytes */) | 0;
      let offset = 0;
      // longer than 1 block
      if (blocks && !(byteOffset & 3) && !(this._size % 64 /* inputBytes */)) {
        const block = new Int32Array(data.buffer, byteOffset, blocks * 16 /* inputWords */);
        while (blocks--) {
          this._int32(block, offset >> 2);
          offset += 64 /* inputBytes */;
        }
        this._size += offset;
      }
      // data: TypedArray | DataView
      const BYTES_PER_ELEMENT = data.BYTES_PER_ELEMENT;
      if (BYTES_PER_ELEMENT !== 1 && data.buffer) {
        const rest = new Uint8Array(data.buffer, byteOffset + offset, length - offset);
        return this._uint8(rest);
      }
      // no more bytes
      if (offset === length)
        return this;
      // data: Uint8Array | Int8Array
      return this._uint8(data, offset);
    }
    _uint8(data, offset) {
      const { _byte, _word } = this;
      const length = data.length;
      offset = offset | 0;
      while (offset < length) {
        const start = this._size % 64 /* inputBytes */;
        let index = start;
        while (offset < length && index < 64 /* inputBytes */) {
          _byte[index++] = data[offset++];
        }
        if (index >= 64 /* inputBytes */) {
          this._int32(_word);
        }
        this._size += index - start;
      }
      return this;
    }
    _utf8(text) {
      const { _byte, _word } = this;
      const length = text.length;
      let surrogate = this._sp;
      for (let offset = 0; offset < length;) {
        const start = this._size % 64 /* inputBytes */;
        let index = start;
        while (offset < length && index < 64 /* inputBytes */) {
          let code = text.charCodeAt(offset++) | 0;
          if (code < 0x80) {
            // ASCII characters
            _byte[index++] = code;
          }
          else if (code < 0x800) {
            // 2 bytes
            _byte[index++] = 0xC0 | (code >>> 6);
            _byte[index++] = 0x80 | (code & 0x3F);
          }
          else if (code < 0xD800 || code > 0xDFFF) {
            // 3 bytes
            _byte[index++] = 0xE0 | (code >>> 12);
            _byte[index++] = 0x80 | ((code >>> 6) & 0x3F);
            _byte[index++] = 0x80 | (code & 0x3F);
          }
          else if (surrogate) {
            // 4 bytes - surrogate pair
            code = ((surrogate & 0x3FF) << 10) + (code & 0x3FF) + 0x10000;
            _byte[index++] = 0xF0 | (code >>> 18);
            _byte[index++] = 0x80 | ((code >>> 12) & 0x3F);
            _byte[index++] = 0x80 | ((code >>> 6) & 0x3F);
            _byte[index++] = 0x80 | (code & 0x3F);
            surrogate = 0;
          }
          else {
            surrogate = code;
          }
        }
        if (index >= 64 /* inputBytes */) {
          this._int32(_word);
          _word[0] = _word[16 /* inputWords */];
        }
        this._size += index - start;
      }
      this._sp = surrogate;
      return this;
    }
    _int32(data, offset) {
      let { A, B, C, D, E, F, G, H } = this;
      let i = 0;
      offset = offset | 0;
      while (i < 16 /* inputWords */) {
        W[i++] = swap32(data[offset++]);
      }
      for (i = 16 /* inputWords */; i < 64 /* workWords */; i++) {
        W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0;
      }
      for (i = 0; i < 64 /* workWords */; i++) {
        const T1 = (H + sigma1(E) + ch(E, F, G) + K[i] + W[i]) | 0;
        const T2 = (sigma0(A) + maj(A, B, C)) | 0;
        H = G;
        G = F;
        F = E;
        E = (D + T1) | 0;
        D = C;
        C = B;
        B = A;
        A = (T1 + T2) | 0;
      }
      this.A = (A + this.A) | 0;
      this.B = (B + this.B) | 0;
      this.C = (C + this.C) | 0;
      this.D = (D + this.D) | 0;
      this.E = (E + this.E) | 0;
      this.F = (F + this.F) | 0;
      this.G = (G + this.G) | 0;
      this.H = (H + this.H) | 0;
    }
    digest(encoding) {
      const { _byte, _word } = this;
      let i = (this._size % 64 /* inputBytes */) | 0;
      _byte[i++] = 0x80;
      // pad 0 for current word
      while (i & 3) {
        _byte[i++] = 0;
      }
      i >>= 2;
      if (i > 14 /* highIndex */) {
        while (i < 16 /* inputWords */) {
          _word[i++] = 0;
        }
        i = 0;
        this._int32(_word);
      }
      // pad 0 for rest words
      while (i < 16 /* inputWords */) {
        _word[i++] = 0;
      }
      // input size
      const bits64 = this._size * 8;
      const low32 = (bits64 & 0xffffffff) >>> 0;
      const high32 = (bits64 - low32) / 0x100000000;
      if (high32)
        _word[14 /* highIndex */] = swap32(high32);
      if (low32)
        _word[15 /* lowIndex */] = swap32(low32);
      this._int32(_word);
      return (encoding === "hex") ? this._hex() : this._bin();
    }
    _hex() {
      const { A, B, C, D, E, F, G, H } = this;
      return hex32(A) + hex32(B) + hex32(C) + hex32(D) + hex32(E) + hex32(F) + hex32(G) + hex32(H);
    }
    _bin() {
      const { A, B, C, D, E, F, G, H, _byte, _word } = this;
      _word[0] = swap32(A);
      _word[1] = swap32(B);
      _word[2] = swap32(C);
      _word[3] = swap32(D);
      _word[4] = swap32(E);
      _word[5] = swap32(F);
      _word[6] = swap32(G);
      _word[7] = swap32(H);
      return _byte.slice(0, 32);
    }
  }

  //https://github.com/kawanet/sha256-uint8array/blob/52e8f1b891c84fcb436f0f2e1103527d3a6465ea/lib/sha256-uint8array.ts#L290
  const W = new Int32Array(64 /* workWords */);
  let sharedBuffer;
  let sharedOffset = 0;
  const hex32 = num => (num + 0x100000000).toString(16).substr(-8);
  const swapLE = (c => (((c << 24) & 0xff000000) | ((c << 8) & 0xff0000) | ((c >> 8) & 0xff00) | ((c >> 24) & 0xff)));
  const swapBE = (c => c);
  const swap32 = isBE() ? swapBE : swapLE;
  const ch = (x, y, z) => (z ^ (x & (y ^ z)));
  const maj = (x, y, z) => ((x & y) | (z & (x | y)));
  const sigma0 = x => ((x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10));
  const sigma1 = x => ((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7));
  const gamma0 = x => ((x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3));
  const gamma1 = x => ((x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10));

  //https://github.com/kawanet/sha256-uint8array/blob/52e8f1b891c84fcb436f0f2e1103527d3a6465ea/lib/sha256-uint8array.ts#L308
  function isBE() {
    const buf = new Uint8Array(new Uint16Array([0xFEFF]).buffer); // BOM
    return (buf[0] === 0xFE);
  }

  var MSB = 0x80
    , REST = 0x7F
    , MSBALL = ~REST
    , INT = Math.pow(2, 31);

  /*---------------------------------------------------------------------------------------------
  *  Copyright 2016-2020 Protocol Labs
  *  Licensed under the MIT License.
  *  https://github.com/ipld/js-dag-pb/blob/master/LICENSE-MIT
  *--------------------------------------------------------------------------------------------*/
  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/util.js#L8
  const pbNodeProperties = ['Data', 'Links']
  const pbLinkProperties = ['Hash', 'Name', 'Tsize']

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L1
  const textEncoder = new TextEncoder()
  const maxInt32 = 2 ** 32
  const maxUInt32 = 2 ** 31

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L197
  const len8tab = [
    0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
  ]

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L23
  function encodeLink(link, bytes) {
    let i = bytes.length

    if (typeof link.Tsize === 'number') {
      if (link.Tsize < 0) {
        throw new Error('Tsize cannot be negative')
      }
      if (!Number.isSafeInteger(link.Tsize)) {
        throw new Error('Tsize too large for encoding')
      }
      i = encodeVarint(bytes, i, link.Tsize) - 1
      bytes[i] = 0x18
    }

    if (typeof link.Name === 'string') {
      const nameBytes = textEncoder.encode(link.Name)
      i -= nameBytes.length
      bytes.set(nameBytes, i)
      i = encodeVarint(bytes, i, nameBytes.length) - 1
      bytes[i] = 0x12
    }

    if (link.Hash) {
      i -= link.Hash.length
      bytes.set(link.Hash, i)
      i = encodeVarint(bytes, i, link.Hash.length) - 1
      bytes[i] = 0xa
    }

    return bytes.length - i
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L91
  function sizeLink(link) {
    let n = 0

    if (link.Hash) {
      const l = link.Hash.length
      n += 1 + l + sov(l)
    }

    if (typeof link.Name === 'string') {
      const l = textEncoder.encode(link.Name).length
      n += 1 + l + sov(l)
    }

    if (typeof link.Tsize === 'number') {
      n += 1 + sov(link.Tsize)
    }

    return n
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L179
  function len64(x) {
    let n = 0
    if (x >= maxInt32) {
      x = Math.floor(x / maxInt32)
      n = 32
    }
    if (x >= (1 << 16)) {
      x >>>= 16
      n += 16
    }
    if (x >= (1 << 8)) {
      x >>>= 8
      n += 8
    }
    return n + len8tab[x]
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L166
  function sov(x) {
    if (x % 2 === 0) {
      x++
    }
    return Math.floor((len64(x) + 6) / 7)
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L141
  function encodeVarint(bytes, offset, v) {
    offset -= sov(v)
    const base = offset

    while (v >= maxUInt32) {
      bytes[offset++] = (v & 0x7f) | 0x80
      v /= 128
    }

    while (v >= 128) {
      bytes[offset++] = (v & 0x7f) | 0x80
      v >>>= 7
    }

    bytes[offset] = v

    return base
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L141
  function sizeNode(node) {
    let n = 0

    if (node.Data) {
      const l = node.Data.length
      n += 1 + l + sov(l)
    }

    if (node.Links) {
      for (const link of node.Links) {
        const l = sizeLink(link)
        n += 1 + l + sov(l)
      }
    }

    return n
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/pb-encode.js#L61
  function encodeNode(node) {
    const size = sizeNode(node)
    const bytes = new Uint8Array(size)
    let i = size

    if (node.Data) {
      i -= node.Data.length
      bytes.set(node.Data, i)
      i = encodeVarint(bytes, i, node.Data.length) - 1
      bytes[i] = 0xa
    }

    if (node.Links) {
      for (let index = node.Links.length - 1; index >= 0; index--) {
        const size = encodeLink(node.Links[index], bytes.subarray(0, i))
        i -= size
        i = encodeVarint(bytes, i, size) - 1
        bytes[i] = 0x12
      }
    }

    return bytes
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/util.js#L18
  function linkComparator(a, b) {
    if (a === b) {
      return 0
    }

    const abuf = a.Name ? textEncoder.encode(a.Name) : []
    const bbuf = b.Name ? textEncoder.encode(b.Name) : []

    let x = abuf.length
    let y = bbuf.length

    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
      if (abuf[i] !== bbuf[i]) {
        x = abuf[i]
        y = bbuf[i]
        break
      }
    }

    return x < y ? -1 : y < x ? 1 : 0
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/util.js#L45
  function hasOnlyProperties(node, properties) {
    return !Object.keys(node).some((p) => !properties.includes(p))
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/util.js#L147
  function validate(node) {

    if (!node || typeof node !== 'object' || Array.isArray(node)) {
      throw new TypeError('Invalid DAG-PB form')
    }

    if (!hasOnlyProperties(node, pbNodeProperties)) {
      throw new TypeError('Invalid DAG-PB form (extraneous properties)')
    }

    if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) {
      throw new TypeError('Invalid DAG-PB form (Data must be a Uint8Array)')
    }

    if (!Array.isArray(node.Links)) {
      throw new TypeError('Invalid DAG-PB form (Links must be an array)')
    }

    for (let i = 0; i < node.Links.length; i++) {
      const link = node.Links[i]
      if (!link || typeof link !== 'object' || Array.isArray(link)) {
        throw new TypeError('Invalid DAG-PB form (bad link object)')
      }

      if (!hasOnlyProperties(link, pbLinkProperties)) {
        throw new TypeError('Invalid DAG-PB form (extraneous properties on link object)')
      }

      if (!link.Hash) {
        throw new TypeError('Invalid DAG-PB form (link must have a Hash)')
      }

      if (link.Hash.asCID !== link.Hash) {
        throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)')
      }

      if (link.Name !== undefined && typeof link.Name !== 'string') {
        throw new TypeError('Invalid DAG-PB form (link Name must be a string)')
      }

      if (link.Tsize !== undefined && (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0)) {
        throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)')
      }

      if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
        throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)')
      }
    }
  }

  //https://github.com/ipld/js-dag-pb/blob/422f91ea722efdd119b25a8c41087ef9a61f2252/src/index.js#L23
  var d_encode = (node) => {
    validate(node)
    const pbn = {}
    if (node.Links) {
      pbn.Links = node.Links.map((l) => {
        const link = {}
        if (l.Hash) {
          link.Hash = l.Hash.bytes // cid -> bytes
        }
        if (l.Name !== undefined) {
          link.Name = l.Name
        }
        if (l.Tsize !== undefined) {
          link.Tsize = l.Tsize
        }
        return link
      })
    }
    if (node.Data) {
      pbn.Data = node.Data
    }

    return encodeNode(pbn)
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2016-2018 Protocol Labs
  *  Licensed under the MIT License.
  *  https://github.com/ipld/js-ipld-dag-pb/blob/master/LICENSE.md
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/dag-node/sortLinks.js#L28
  const sortLinks = (links) => {
    const sort = stable;
    sort.inplace(links, linkSort)
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/dag-node/sortLinks.js#L15
  const linkSort = (a, b) => {
    const buf1 = a.nameAsBuffer
    const buf2 = b.nameAsBuffer

    return uint8ArrayCompare(buf1, buf2)
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/dag-link/dagLink.js#L9
  class DAGLink {
    constructor(name, size, cid) {
      if (!cid) {
        throw new Error('A link requires a cid to point to')
      }
      this.Name = name || ''
      this.Tsize = size
      this.Hash = new CID1(cid)

      Object.defineProperties(this, {
        _nameBuf: { value: null, writable: true, enumerable: false }
      })
    }

    toString() {
      return `DAGLink <${this.Hash.toBaseEncodedString()} - name: "${this.Name}", size: ${this.Tsize}>`
    }

    toJSON() {
      if (!this._json) {
        this._json = Object.freeze({
          name: this.Name,
          size: this.Tsize,
          cid: this.Hash.toBaseEncodedString()
        })
      }

      return Object.assign({}, this._json)
    }
    get nameAsBuffer() {
      if (this._nameBuf != null) {
        return this._nameBuf
      }

      this._nameBuf = uint8ArrayFromString(this.Name)
      return this._nameBuf
    }
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/dag-node/dagNode.js#L18
  class DAGNode {

    constructor(data, links = [], serializedSize = null) {
      if (!data) {
        data = new Uint8Array(0)
      }
      if (typeof data === 'string') {
        data = uint8ArrayFromString(data)
      }

      if (!(data instanceof Uint8Array)) {
        throw new Error('Passed \'data\' is not a Uint8Array or a String!')
      }

      if (serializedSize !== null && typeof serializedSize !== 'number') {
        throw new Error('Passed \'serializedSize\' must be a number!')
      }

      const sortedLinks = links.map((link) => {
        return link instanceof DAGLink
          ? link
          : createDagLinkFromB58EncodedHash(link)
      })
      sortLinks(sortedLinks)

      this.Data = data
      this.Links = sortedLinks

      Object.defineProperties(this, {
        _serializedSize: { value: serializedSize, writable: true, enumerable: false },
        _size: { value: null, writable: true, enumerable: false }
      })
    }

    toJSON() {
      if (!this._json) {
        this._json = Object.freeze({
          data: this.Data,
          links: this.Links.map((l) => l.toJSON()),
          size: this.size
        })
      }

      return Object.assign({}, this._json)
    }

    toString() {
      return `DAGNode <data: "${uint8ArrayToString(this.Data, 'base64urlpad')}", links: ${this.Links.length}, size: ${this.size}>`
    }

    _invalidateCached() {
      this._serializedSize = null
      this._size = null
    }

    /**
     * @param {DAGLink | import('../types').DAGLinkLike} link
     */
    addLink(link) {
      this._invalidateCached()
      return addLink(this, link)
    }

    /**
     * @param {DAGLink | string | CID} link
     */
    rmLink(link) {
      this._invalidateCached()
      return rmLink(this, link)
    }

    /**
     * @param {import('./toDagLink').ToDagLinkOptions} [options]
     */
    toDAGLink(options) {
      return toDAGLink(this, options)
    }

    serialize() {
      const buf = serializeDAGNode(this)

      this._serializedSize = buf.length

      return buf
    }

    get size() {
      if (this._size == null) {
        let serializedSize

        if (serializedSize == null) {
          this._serializedSize = this.serialize().length
          serializedSize = this._serializedSize
        }

        this._size = this.Links.reduce((sum, l) => sum + l.Tsize, serializedSize)
      }

      return this._size
    }

    set size(size) {
      throw new Error("Can't set property: 'size' is immutable")
    }
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/serialize.js#L23
  const toProtoBuf = (node) => {
    const pbn = {}

    if (node.Data && node.Data.byteLength > 0) {
      pbn.Data = node.Data
    } else {
      // NOTE: this has to be null in order to match go-ipfs serialization
      // `null !== new Uint8Array(0)`
      pbn.Data = null
    }

    if (node.Links && node.Links.length > 0) {
      pbn.Links = node.Links
        .map((link) => ({
          Hash: link.Hash.bytes,
          Name: link.Name,
          Tsize: link.Tsize
        }))
    } else {
      pbn.Links = null
    }

    return pbn
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/serialize.js#L53
  const serializeDAGNode = (node) => {
    return encode(toProtoBuf(node))
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/dag.js#L31
  function PBLink(p) {
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/dag.js#L71
  PBLink.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    if (m.Hash != null && Object.hasOwnProperty.call(m, "Hash"))
      w.uint32(10).bytes(m.Hash);
    if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
      w.uint32(18).string(m.Name);
    if (m.Tsize != null && Object.hasOwnProperty.call(m, "Tsize"))
      w.uint32(24).uint64(m.Tsize);
    return w;
  };

  //https://github.com/ipld/js-ipld-dag-pb/blob/6b0e011b7917611386cff392d56bfd81c8cacf8c/src/serialize.js#L87
  function encode(pbf) {
    const writer = Writer.create()

    if (pbf.Links != null) {
      for (let i = 0; i < pbf.Links.length; i++) {
        PBLink.encode(pbf.Links[i], writer.uint32(18).fork()).ldelim()
      }
    }

    if (pbf.Data != null) {
      writer.uint32(10).bytes(pbf.Data)
    }

    return writer.finish()
  }

  const hashItems = async (items, version) => {
    const opts = mergeOptions(defaultOptions, { cidVersion: 1, onlyHash: true, rawLeaves: true, maxChunkSize: 1048576 })
    if (version == undefined)
      version = 1;
    let Links = [];
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      Links.push({
        Name: item.name,
        Hash: parse(item.cid),
        Tsize: item.size
      })
    };
    Links.sort(linkComparator);
    try {
      const dirUnixFS = new UnixFS({
        type: 'directory',
        mtime: undefined,
        mode: 493
      });
      const node = {
        Data: dirUnixFS.marshal(),
        Links
      };
      // const buffer = d_encode(node);

      // const cid = await persist(buffer, {
      //   get: async cid => { throw new Error(`unexpected block API get for ${cid}`) },
      //   put: async () => { }
      // }, opts);
      // console.dir(opts);
      // return {
      //   size: 0,//bytes.length + Links.reduce((acc, curr) => acc + (curr.Tsize == null ? 0 : curr.Tsize), 0),
      //   cid: cid.toString()
      // }
      const bytes = d_encode(node);
      const hash = await s_sha256.digest(bytes);
      const dagPB_code = 0x70;
      // const cid = CID.create(version, RAW_CODE, hash);
      const cid = CID.create(version, dagPB_code, hash);
      return {
        size: bytes.length + Links.reduce((acc, curr) => acc + (curr.Tsize == null ? 0 : curr.Tsize), 0),
        cid: cid.toString()
      }
    } catch (e) {
      throw e;
    }
  };
  const hashContent = async (value, version) => {
    try {
      if (version == undefined)
        version = 1;
      if (typeof (value) == 'string')
        value = new TextEncoder("utf-8").encode(value);

      var cid;
      if (version == 0) {
        const unixFS = new UnixFS({
          type: 'file',
          data: value
        })
        const bytes = d_encode({
          Data: unixFS.marshal(),
          Links: []
        })
        const hash = await s_sha256.digest(bytes);
        cid = CID.create(version, DAG_PB_CODE, hash);
      }
      else {
        const hash = await s_sha256.digest(value);
        if (value.length <= 1048576) //1 MB
          cid = CID.create(version, RAW_CODE, hash)
        else
          cid = CID.create(version, DAG_PB_CODE, hash)
      }
      return cid.toString();
    }
    catch (e) {
      throw e;
    }
  };
  const parse = function (cid) {
    return CID.parse(cid)
  };

  // new code start from here
  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2013-2019 bl contributors
  *  Licensed under the MIT License.
  *  https://github.com/rvagg/bl/blob/master/LICENSE.md
  *--------------------------------------------------------------------------------------------*/
  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L4
  const symbol = Symbol.for('BufferList')
  function BufferList(buf) {
    if (!(this instanceof BufferList)) {
      return new BufferList(buf)
    }

    BufferList._init.call(this, buf)
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L14
  BufferList._init = function _init(buf) {
    Object.defineProperty(this, symbol, { value: true })

    this._bufs = []
    this.length = 0

    if (buf) {
      this.append(buf)
    }
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L25
  BufferList.prototype._new = function _new(buf) {
    return new BufferList(buf)
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L29
  BufferList.prototype._offset = function _offset(offset) {
    if (offset === 0) {
      return [0, 0]
    }

    let tot = 0

    for (let i = 0; i < this._bufs.length; i++) {
      const _t = tot + this._bufs[i].length
      if (offset < _t || i === this._bufs.length - 1) {
        return [i, offset - tot]
      }
      tot = _t
    }
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L45
  BufferList.prototype._reverseOffset = function (blOffset) {
    const bufferId = blOffset[0]
    let offset = blOffset[1]

    for (let i = 0; i < bufferId; i++) {
      offset += this._bufs[i].length
    }

    return offset
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L56
  BufferList.prototype.get = function get(index) {
    if (index > this.length || index < 0) {
      return undefined
    }

    const offset = this._offset(index)

    return this._bufs[offset[0]][offset[1]]
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L66
  BufferList.prototype.slice = function slice(start, end) {
    if (typeof start === 'number' && start < 0) {
      start += this.length
    }

    if (typeof end === 'number' && end < 0) {
      end += this.length
    }

    return this.copy(null, 0, start, end)
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L78
  BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
    if (typeof srcStart !== 'number' || srcStart < 0) {
      srcStart = 0
    }

    if (typeof srcEnd !== 'number' || srcEnd > this.length) {
      srcEnd = this.length
    }

    if (srcStart >= this.length) {
      return dst || Buffer.alloc(0)
    }

    if (srcEnd <= 0) {
      return dst || Buffer.alloc(0)
    }

    const copy = !!dst
    const off = this._offset(srcStart)
    const len = srcEnd - srcStart
    let bytes = len
    let bufoff = (copy && dstStart) || 0
    let start = off[1]

    // copy/slice everything
    if (srcStart === 0 && srcEnd === this.length) {
      if (!copy) {
        // slice, but full concat if multiple buffers
        return this._bufs.length === 1
          ? this._bufs[0]
          : util_Buffer.concat(this._bufs, this.length)
      }

      // copy, need to copy individual buffers
      for (let i = 0; i < this._bufs.length; i++) {
        this._bufs[i].copy(dst, bufoff)
        bufoff += this._bufs[i].length
      }

      return dst
    }

    // easy, cheap case where it's a subset of one of the buffers
    if (bytes <= this._bufs[off[0]].length - start) {
      return copy
        ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
        : this._bufs[off[0]].slice(start, start + bytes)
    }

    if (!copy) {
      // a slice, we need something to copy in to
      dst = Buffer.allocUnsafe(len)
    }

    for (let i = off[0]; i < this._bufs.length; i++) {
      const l = this._bufs[i].length - start

      if (bytes > l) {
        this._bufs[i].copy(dst, bufoff, start)
        bufoff += l
      } else {
        this._bufs[i].copy(dst, bufoff, start, start + bytes)
        bufoff += l
        break
      }

      bytes -= l

      if (start) {
        start = 0
      }
    }

    // safeguard so that we don't return uninitialized memory
    if (dst.length > bufoff) return dst.slice(0, bufoff)

    return dst
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L157
  BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
    start = start || 0
    end = typeof end !== 'number' ? this.length : end

    if (start < 0) {
      start += this.length
    }

    if (end < 0) {
      end += this.length
    }

    if (start === end) {
      return this._new()
    }

    const startOffset = this._offset(start)
    const endOffset = this._offset(end)
    const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1)

    if (endOffset[1] === 0) {
      buffers.pop()
    } else {
      buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1])
    }

    if (startOffset[1] !== 0) {
      buffers[0] = buffers[0].slice(startOffset[1])
    }

    return this._new(buffers)
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L190
  BufferList.prototype.toString = function toString(encoding, start, end) {
    return this.slice(start, end).toString(encoding)
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L194
  BufferList.prototype.consume = function consume(bytes) {
    // first, normalize the argument, in accordance with how Buffer does it
    bytes = Math.trunc(bytes)
    // do nothing if not a positive number
    if (Number.isNaN(bytes) || bytes <= 0) return this

    while (this._bufs.length) {
      if (bytes >= this._bufs[0].length) {
        bytes -= this._bufs[0].length
        this.length -= this._bufs[0].length
        this._bufs.shift()
      } else {
        this._bufs[0] = this._bufs[0].slice(bytes)
        this.length -= bytes
        break
      }
    }

    return this
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L215
  BufferList.prototype.duplicate = function duplicate() {
    const copy = this._new()

    for (let i = 0; i < this._bufs.length; i++) {
      copy.append(this._bufs[i])
    }

    return copy
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L225
  BufferList.prototype.append = function append(buf) {
    if (buf == null) {
      return this
    }

    if (buf.buffer) {
      // append a view of the underlying ArrayBuffer
      this._appendBuffer(util_Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength))
    } else if (Array.isArray(buf)) {
      for (let i = 0; i < buf.length; i++) {
        this.append(buf[i])
      }
    } else if (this._isBufferList(buf)) {
      // unwrap argument into individual BufferLists
      for (let i = 0; i < buf._bufs.length; i++) {
        this.append(buf._bufs[i])
      }
    } else {
      // coerce number arguments to strings, since Buffer(number) does
      // uninitialized memory allocation
      if (typeof buf === 'number') {
        buf = buf.toString()
      }

      this._appendBuffer(util_Buffer.from(buf))
    }

    return this
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L255
  BufferList.prototype._appendBuffer = function appendBuffer(buf) {
    this._bufs.push(buf)
    this.length += buf.length
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L260
  BufferList.prototype.indexOf = function (search, offset, encoding) {
    if (encoding === undefined && typeof offset === 'string') {
      encoding = offset
      offset = undefined
    }

    if (typeof search === 'function' || Array.isArray(search)) {
      throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.')
    } else if (typeof search === 'number') {
      search = util_Buffer.from([search])
    } else if (typeof search === 'string') {
      search = util_Buffer.from(search, encoding)
    } else if (this._isBufferList(search)) {
      search = search.slice()
    } else if (Array.isArray(search.buffer)) {
      search = util_Buffer.from(search.buffer, search.byteOffset, search.byteLength)
    } else if (!Buffer.isBuffer(search)) {
      search = util_Buffer.from(search)
    }

    offset = Number(offset || 0)

    if (isNaN(offset)) {
      offset = 0
    }

    if (offset < 0) {
      offset = this.length + offset
    }

    if (offset < 0) {
      offset = 0
    }

    if (search.length === 0) {
      return offset > this.length ? this.length : offset
    }

    const blOffset = this._offset(offset)
    let blIndex = blOffset[0] // index of which internal buffer we're working on
    let buffOffset = blOffset[1] // offset of the internal buffer we're working on

    // scan over each buffer
    for (; blIndex < this._bufs.length; blIndex++) {
      const buff = this._bufs[blIndex]

      while (buffOffset < buff.length) {
        const availableWindow = buff.length - buffOffset

        if (availableWindow >= search.length) {
          const nativeSearchResult = buff.indexOf(search, buffOffset)

          if (nativeSearchResult !== -1) {
            return this._reverseOffset([blIndex, nativeSearchResult])
          }

          buffOffset = buff.length - search.length + 1 // end of native search window
        } else {
          const revOffset = this._reverseOffset([blIndex, buffOffset])

          if (this._match(revOffset, search)) {
            return revOffset
          }

          buffOffset++
        }
      }

      buffOffset = 0
    }

    return -1
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L334
  BufferList.prototype._match = function (offset, search) {
    if (this.length - offset < search.length) {
      return false
    }

    for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
      if (this.get(offset + searchOffset) !== search[searchOffset]) {
        return false
      }
    }
    return true
  }

    //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L347
    ; (function () {
      const methods = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
      }

      for (const m in methods) {
        (function (m) {
          if (methods[m] === null) {
            BufferList.prototype[m] = function (offset, byteLength) {
              return this.slice(offset, offset + byteLength)[m](0, byteLength)
            }
          } else {
            BufferList.prototype[m] = function (offset = 0) {
              return this.slice(offset, offset + methods[m])[m](0)
            }
          }
        }(m))
      }
    }())

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L388
  BufferList.prototype._isBufferList = function _isBufferList(b) {
    return b instanceof BufferList || BufferList.isBufferList(b)
  }

  //https://github.com/rvagg/bl/blob/f7a00711cbf04a20d42f7aebfe2fa948390b9ccd/BufferList.js#L392
  BufferList.isBufferList = function isBufferList(b) {
    return b != null && b[symbol]
  }

  // No license(?)
  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/util/bases.js#L15
  function createCodec(name, prefix, encode, decode) {
    return {
      name,
      prefix,
      encoder: {
        name,
        prefix,
        encode
      },
      decoder: { decode }
    };
  }

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/util/bases.js#L30
  const string = createCodec('utf8', 'u', buf => {
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
  }, str => {
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
  });

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/util/bases.js#L63
  var bases = {
    utf8: string,
    'utf-8': string,
  };

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/to-string.js#L18
  function uint8ArrayToString(array, encoding = 'utf8') {
    const base = bases[encoding];
    if (!base) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
  }

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/alloc.js#L24
  function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
      return globalThis.Buffer.allocUnsafe(size);
    }
    return new Uint8Array(size);
  }

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/concat.js#L9
  function uint8ArrayConcat(arrays, length) {
    if (!length) {
      length = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = allocUnsafe(length);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return output;
  }

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/compare.js#L7
  function uint8ArrayCompare(a, b) {
    for (let i = 0; i < a.byteLength; i++) {
      if (a[i] < b[i]) {
        return -1
      }

      if (a[i] > b[i]) {
        return 1
      }
    }

    if (a.byteLength > b.byteLength) {
      return 1
    }

    if (a.byteLength < b.byteLength) {
      return -1
    }

    return 0
  }

  //https://github.com/achingbrain/uint8arrays/blob/56329d16d6ca575c9638f3abb9601b8a034783b8/src/from-string.js#L18
  function uint8ArrayFromString(string, encoding = 'utf8') {
    const base = bases[encoding]

    if (!base) {
      throw new Error(`Unsupported encoding "${encoding}"`)
    }

    return base.decoder.decode(`${base.prefix}${string}`)
  }

  // No license(?)
  //https://github.com/achingbrain/it/blob/c74ff5ff0d1b4164cd2f556f1b431d77ad47dd16/packages/it-all/index.js#L9
  const all = async (source) => {
    const arr = []

    for await (const entry of source) {
      arr.push(entry)
    }

    return arr
  }

  //https://github.com/achingbrain/it/blob/c74ff5ff0d1b4164cd2f556f1b431d77ad47dd16/packages/it-batch/index.js#L12
  async function* batch(source, size = 1) {
    let things = []

    if (size < 1) {
      size = 1
    }

    for await (const thing of source) {
      things.push(thing)

      while (things.length >= size) {
        yield things.slice(0, size)

        things = things.slice(size)
      }
    }

    while (things.length) {
      yield things.slice(0, size)

      things = things.slice(size)
    }
  }

  // No license(?)
  //https://github.com/achingbrain/it-parallel-batch/blob/2a7f2c29b44be057c0862d4864856fcc66466d57/packages/it-parallel-batch/index.js#L5
  async function* parallelBatch(source, size = 1) {
    for await (const tasks of batch(source, size)) {
      const things = tasks.map(
        p => {
          return p().then(value => ({ ok: true, value }), err => ({ ok: false, err }))
        })

      for (let i = 0; i < things.length; i++) {
        const result = await things[i]
        if (result.ok) {
          yield result.value
        } else {
          throw result.err
        }
      }
    }
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2020 Protocol Labs
  *  Licensed under the MIT License.
  *  https://github.com/multiformats/js-multihash/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/constants.js#L18
  const mh_names = Object.freeze({
    'sha2-256': 0x12,
  })

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L13
  const mh_codes = /** @type {import('./types').CodeNameMap} */({})
  for (const key in mh_names) {
    const name = /** @type {HashName} */(key)
    mh_codes[mh_names[name]] = name
  }
  Object.freeze(mh_codes)

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L28
  function mh_toHexString(hash) {
    if (!(hash instanceof Uint8Array)) {
      throw new Error('must be passed a Uint8Array')
    }

    return uint8ArrayToString(hash, 'base16')
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L42
  function mh_fromHexString(hash) {
    return uint8ArrayFromString(hash, 'base16')
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L52
  function mh_toB58String(hash) {
    if (!(hash instanceof Uint8Array)) {
      throw new Error('must be passed a Uint8Array')
    }
    return uint8ArrayToString(multibase_encode('base58btc', hash)).slice(1)
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L66
  function mh_fromB58String(hash) {
    const encoded = hash instanceof Uint8Array
      ? uint8ArrayToString(hash)
      : hash

    return multibase_decode('z' + encoded)
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L80
  function mh_decode(bytes) {
    if (!(bytes instanceof Uint8Array)) {
      throw new Error('multihash must be a Uint8Array')
    }

    if (bytes.length < 2) {
      throw new Error('multihash too short. must be > 2 bytes.')
    }

    const code = /** @type {HashCode} */(decode_2(bytes))
    if (!mh_isValidCode(code)) {
      throw new Error(`multihash unknown function code: 0x${code.toString(16)}`)
    }
    bytes = bytes.slice(decode_2.bytes)

    const len = decode_2(bytes)
    if (len < 0) {
      throw new Error(`multihash invalid length: ${len}`)
    }
    bytes = bytes.slice(decode_2.bytes)

    if (bytes.length !== len) {
      throw new Error(`multihash length inconsistent: 0x${uint8ArrayToString(bytes, 'base16')}`)
    }

    return {
      code,
      name: mh_codes[code],
      length: len,
      digest: bytes
    }
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L123
  function mh_encode(digest, code, length) {
    if (!digest || code === undefined) {
      throw new Error('multihash encode requires at least two args: digest, code')
    }
    const hashfn = mh_coerceCode(code)

    if (!(digest instanceof Uint8Array)) {
      throw new Error('digest should be a Uint8Array')
    }

    if (length == null) {
      length = digest.length
    }

    if (length && digest.length !== length) {
      throw new Error('digest length should be equal to specified length.')
    }

    function alloc_allocUnsafe(size = 0) {
      if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return globalThis.Buffer.allocUnsafe(size);
      }
      return new Uint8Array(size);
    }

    const hash = encode_2(hashfn)
    const len = encode_2(length)
    function uint8ArrayConcat(arrays, length) {
      if (!length) {
        length = arrays.reduce((acc, curr) => acc + curr.length, 0);
      }
      const output = alloc_allocUnsafe(length);
      let offset = 0;
      for (const arr of arrays) {
        output.set(arr, offset);
        offset += arr.length;
      }
      return output;
    }
    return uint8ArrayConcat([hash, len, digest], hash.length + len.length + digest.length)
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L155
  function mh_coerceCode(name) {
    let code = name

    if (typeof name === 'string') {
      if (mh_names[name] === undefined) {
        throw new Error(`Unrecognized hash function named: ${name}`)
      }
      code = mh_names[name]
    }

    if (typeof code !== 'number') {
      throw new Error(`Hash function code should be a number. Got: ${code}`)
    }

    if (mh_codes[code] === undefined && !mh_isAppCode(code)) {
      throw new Error(`Unrecognized function code: ${code}`)
    }

    return code
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L183
  function mh_isAppCode(code) {
    return code > 0 && code < 0x10
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L212
  function mh_validate(multihash) {
    mh_decode(multihash)
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L223
  function mh_prefix(multihash) {
    mh_validate(multihash)

    return multihash.subarray(0, 2)
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L193
  function mh_isValidCode(code) {
    if (mh_isAppCode(code)) {
      return true
    }

    if (mh_codes[code]) {
      return true
    }

    return false
  }

  //https://github.com/multiformats/js-multihash/blob/98ebff7e248bc842fbdfb22b14b58fb9c8679f96/src/index.js#L229
  const multihash = {
    mh_names,
    mh_codes,
    mh_toHexString,
    mh_fromHexString,
    mh_toB58String,
    mh_fromB58String,
    mh_decode,
    mh_encode,
    mh_coerceCode,
    mh_isAppCode,
    mh_validate,
    mh_prefix,
    mh_isValidCode
  }


  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2020 Protocol Labs
  *  Licensed under the MIT License.
  *  https://github.com/multiformats/js-multihashing-async/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/index.js#L21
  async function Multihashing(bytes, alg, length) {
    const digest = await Multihashing.digest(bytes, alg, length)
    return multihash.mh_encode(digest, alg, length)
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/index.js#L29
  Multihashing.multihash = multihash

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/index.js#L37
  Multihashing.digest = async (bytes, alg, length) => {
    const hash = Multihashing.createHash(alg)
    const digest = await hash(bytes)
    return length ? digest.slice(0, length) : digest
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/index.js#L49
  Multihashing.createHash = function (alg) {
    if (!alg) {
      const e = errcode(new Error('hash algorithm must be specified'), 'ERR_HASH_ALGORITHM_NOT_SPECIFIED')
      throw e
    }
    const code = multihash.mh_coerceCode(alg)
    if (!Multihashing.functions[code]) {
      throw errcode(new Error(`multihash function '${alg}' not yet supported`), 'ERR_HASH_ALGORITHM_NOT_SUPPORTED')
    }
    return Multihashing.functions[code]
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/sha.js#L21
  const digest = async (data, alg) => {
    switch (alg) {
      case 'sha2-256':
        return createHash('sha256').update(data).digest()
      default:
        throw new Error(`${alg} is not a supported algorithm`)
    }
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/sha.js#L38
  const { factory: sha } = {
    factory: (alg) => async (data) => {
      return digest(data, alg)
    },
    digest,
    multihashing: async (buf, alg, length) => {
      const h = await digest(buf, alg)
      return multihash.encode(h, alg, length)
    }
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/crypto.js#L53
  var crypto = {
    sha2256: sha('sha2-256'),
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/index.js#L69
  Multihashing.functions = {
    0x12: crypto.sha2256,
  }

  //https://github.com/multiformats/js-multihashing-async/blob/52b2c2b61a16a94ba0a93548209f85a01cffb5dc/src/index.js#L114
  Multihashing.validate = async (bytes, hash) => {
    const newHash = await Multihashing(bytes, multihash.decode(hash).name)
    return equals(hash, newHash)
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2020 Protocol Labs Inc
  *  Licensed under the MIT License.
  *  https://github.com/multiformats/js-multibase/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/base.js#L3
  const encodeText = (text) => textEncoder.encode(text)

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/base.js#L13
  class Base {
    constructor(name, code, factory, alphabet) {
      this.name = name
      this.code = code
      this.codeBuf = encodeText(this.code)
      this.alphabet = alphabet
      this.codec = factory(alphabet)
    }
    encode(buf) {
      return this.codec.encode(buf)
    }
    decode(string) {
      for (const char of string) {
        if (this.alphabet && this.alphabet.indexOf(char) < 0) {
          throw new Error(`invalid character '${char}' in '${string}'`)
        }
      }
      return this.codec.decode(string)
    }
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/rfc4648.js#L104
  const rfc4648_1 = (bitsPerChar) => (alphabet) => {
    return {
      encode(input) {
        return _encode(input, alphabet, bitsPerChar)
      },
      decode(input) {
        return _decode(input, alphabet, bitsPerChar)
      }
    }
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/constants.js#L27
  const constants = [
    ['base32', 'b', rfc4648_1(5), 'abcdefghijklmnopqrstuvwxyz234567'],
    ['base58btc', 'z', _basex, '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'],
  ]

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/constants.js#L54
  const constants1_names = constants.reduce((prev, tupple) => {
    prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3])
    return prev
  }, /** @type {Record<BaseName,Base>} */({}))

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/constants.js#L59
  const constants1_codes = constants.reduce((prev, tupple) => {
    prev[tupple[1]] = constants1_names[tupple[0]]
    return prev
  }, /** @type {Record<BaseCode,Base>} */({}))

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/index.js#L115
  function encoding(nameOrCode) {
    if (Object.prototype.hasOwnProperty.call(constants1_names, /** @type {BaseName} */(nameOrCode))) {
      return constants1_names[/** @type {BaseName} */(nameOrCode)]
    } else if (Object.prototype.hasOwnProperty.call(constants1_codes, /** @type {BaseCode} */(nameOrCode))) {
      return constants1_codes[/** @type {BaseCode} */(nameOrCode)]
    } else {
      throw new Error(`Unsupported encoding: ${nameOrCode}`)
    }
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/util.js#L24
  function concat(arrs, length) {
    const output = new Uint8Array(length)
    let offset = 0

    for (const arr of arrs) {
      output.set(arr, offset)
      offset += arr.length
    }

    return output
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/util.js#L3
  const textDecoder = new TextDecoder()
  const decodeText = (bytes) => textDecoder.decode(bytes)

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/index.js#L103
  function validEncode(name, buf) {
    const enc = encoding(name)
    enc.decode(decodeText(buf))
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/index.js#L23
  function multibase(nameOrCode, buf) {
    if (!buf) {
      throw new Error('requires an encoded Uint8Array')
    }
    const { name, codeBuf } = encoding(nameOrCode)
    validEncode(name, buf)

    return concat([codeBuf, buf], codeBuf.length + buf.length)
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/index.js#L42
  function multibase_encode(nameOrCode, buf) {
    const enc = encoding(nameOrCode)
    const data = encodeText(enc.encode(buf))

    return concat([enc.codeBuf, data], enc.codeBuf.length + data.length)
  }

  //https://github.com/multiformats/js-multibase/blob/f3a4e2dd0c0090b44bb0af67336594122ec930e2/src/index.js#L58
  function multibase_decode(data) {
    if (data instanceof Uint8Array) {
      data = decodeText(data)
    }
    const prefix = data[0]
    if (['f', 'F', 'v', 'V', 't', 'T', 'b', 'B', 'c', 'C', 'h', 'k', 'K'].includes(prefix)) {
      data = data.toLowerCase()
    }
    const enc = encoding(/** @type {BaseCode} */(data[0]))
    return enc.decode(data.substring(1))
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2016 Friedel Ziegelmayer
  *  Licensed under the MIT License.
  *  https://github.com/multiformats/js-cid/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/multiformats/js-cid/blob/2ed9449c7a7d2df522485822ae46f2d8d10fbbcc/src/cid-util.js#L5
  const CIDUtil = {
    checkCIDComponents: function (other) {
      if (other == null) {
        return 'null values are not valid CIDs'
      }

      if (!(other.version === 0 || other.version === 1)) {
        return 'Invalid version, must be a number equal to 1 or 0'
      }

      if (typeof other.codec !== 'string') {
        return 'codec must be string'
      }

      if (other.version === 0) {
        if (other.codec !== 'dag-pb') {
          return "codec must be 'dag-pb' for CIDv0"
        }
        if (other.multibaseName !== 'base58btc') {
          return "multibaseName must be 'base58btc' for CIDv0"
        }
      }

      if (!(other.multihash instanceof Uint8Array)) {
        return 'multihash must be a Uint8Array'
      }

      try {
        var mh = multihash
        mh.mh_validate(other.multihash)
      } catch (err) {
        let errorMsg = err.message
        if (!errorMsg) { // Just in case mh.validate() throws an error with empty error message
          errorMsg = 'Multihash validation failed'
        }
        return errorMsg
      }
    }
  }

  //https://github.com/multiformats/js-cid/blob/2ed9449c7a7d2df522485822ae46f2d8d10fbbcc/src/index.js#L38
  class CID1 {
    constructor(version, codec, multihash, multibaseName) {
      this.version
      this.codec
      this.multihash

      Object.defineProperty(this, symbol, { value: true })
      if (CID1.isCID(version)) {
        const cid = /** @type {CID1} */(version)
        this.version = cid.version
        this.codec = cid.codec
        this.multihash = cid.multihash
        this.multibaseName = cid.multibaseName || (cid.version === 0 ? 'base58btc' : 'base32')
        return
      }

      this.version = version

      this.codec = /** @type {CodecName} */ (codec)
      this.multihash = /** @type {Uint8Array} */ (multihash)
      this.multibaseName = multibaseName || (version === 0 ? 'base58btc' : 'base32')

      CID1.validateCID(this)
    }

    get bytes() {
      let bytes = this._bytes

      if (!bytes) {
        if (this.version === 0) {
          bytes = this.multihash
        } else if (this.version === 1) {
          const codec = multicodec.getCodeVarint(this.codec)
          bytes = uint8ArrayConcat([
            [1], codec, this.multihash
          ], 1 + codec.byteLength + this.multihash.byteLength)
        } else {
          throw new Error('unsupported version')
        }
        Object.defineProperty(this, '_bytes', { value: bytes })
      }

      return bytes
    }

    toBaseEncodedString(base = this.multibaseName) {
      if (this.string && this.string.length !== 0 && base === this.multibaseName) {
        return this.string
      }
      let str
      if (this.version === 0) {
        if (base !== 'base58btc') {
          throw new Error('not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()')
        }
        str = multihash.mh_toB58String(this.multihash)
      } else if (this.version === 1) {
        str = uint8ArrayToString(multibase_encode(base, this.bytes))
      } else {
        throw new Error('unsupported version')
      }
      if (base === this.multibaseName) {
        // cache the string value
        Object.defineProperty(this, 'string', { value: str })
      }
      return str
    }

    toString(base) {
      return this.toBaseEncodedString(base)
    }

    static validateCID(other) {
      const errorMsg = CIDUtil.checkCIDComponents(other)
      if (errorMsg) {
        throw new Error(errorMsg)
      }
    }

    static isCID(value) {
      return value instanceof CID1 || Boolean(value && value[symbol])
    }
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright © 2016 Multiformats
  *  Licensed under the MIT License.
  *  https://github.com/multiformats/js-multicodec/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/util.js#L17
  function uint8ArrayToNumber(buf) {
    return parseInt(uint8ArrayToString(buf, 'base16'), 16)
  }

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/util.js#L35
  function varintUint8ArrayEncode(input) {
    return Uint8Array.from(encode_2(uint8ArrayToNumber(input)))
  }

  const baseTable = Object.freeze({
    'raw': 0x55,
    'dag-pb': 0x70,
  })

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/util.js#L42
  function varintEncode(num) {
    return Uint8Array.from(encode_2(num))
  }

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/maps.js#L12
  const nameToVarint = /** @type {NameUint8ArrayMap} */ ({})
  const constantToCode = /** @type {ConstantCodeMap} */({})
  const codeToName = /** @type {CodeNameMap} */({})

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/index.js#L111
  function getVarintFromName(name) {
    const code = nameToVarint[name]
    if (code === undefined) {
      throw new Error(`Codec "${name}" not found`)
    }
    return code
  }

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/maps.js#L17
  for (const name in baseTable) {
    const codecName = /** @type {CodecName} */(name)
    const code = baseTable[codecName]
    nameToVarint[codecName] = varintEncode(code)

    const constant = /** @type {CodecConstant} */(codecName.toUpperCase().replace(/-/g, '_'))
    constantToCode[constant] = code

    if (!codeToName[code]) {
      codeToName[code] = codecName
    }
  }

  //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/maps.js#L30
  Object.freeze(nameToVarint)
  Object.freeze(constantToCode)
  Object.freeze(codeToName)

  const multicodec = {
    //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/index.js#L29
    addPrefix: function addPrefix(multicodecStrOrCode, data) {
      let prefix

      if (multicodecStrOrCode instanceof Uint8Array) {
        prefix = varintUint8ArrayEncode(multicodecStrOrCode)
      } else {
        if (nameToVarint[multicodecStrOrCode]) {
          prefix = nameToVarint[multicodecStrOrCode]
        } else {
          throw new Error('multicodec not recognized')
        }
      }

      return uint8ArrayConcat([prefix, data], prefix.length + data.length)
    },
    //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/index.js#L51
    rmPrefix: function rmPrefix(data) {
      varint.decode(/** @type {Buffer} */(data))
      return data.slice(varint.decode.bytes)
    },
    //https://github.com/multiformats/js-multicodec/blob/2945d8b4f65552cb93ae60892f69ee6fac24b359/src/index.js#L77
    getCodeVarint: function getCodeVarint(name) {
      return getVarintFromName(name)
    },
  }

  /*---------------------------------------------------------------------------------------------
  *  Licensed under the MIT and Apache-2.0 License.
  *  https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/ipfs/js-ipfs-unixfs/blob/99a830dadc400df16d1fd3a5e92943d43c09b2d6/packages/ipfs-unixfs-importer/src/utils/persist.js#L10
  const persist = async (buffer, block, options) => {
    if (!options.codec) {
      options.codec = 'dag-pb'
    }

    if (!options.cidVersion) {
      options.cidVersion = 0
    }

    if (!options.hashAlg) {
      options.hashAlg = 'sha2-256'
    }

    if (options.hashAlg !== 'sha2-256') {
      options.cidVersion = 1
    }

    const multihash = await Multihashing(buffer, options.hashAlg) // buffer is [Uint8Array]
    const cid = new CID1(options.cidVersion, options.codec, multihash)

    if (!options.onlyHash) {
      await block.put(buffer, {
        pin: options.pin,
        preload: options.preload,
        timeout: options.timeout,
        cid
      })
    }

    return cid
  }

  //https://github.com/ipfs/js-ipfs-unixfs/blob/ba851f65469a7afa926752df1154e2bebbd6c31b/packages/ipfs-unixfs-importer/src/index.js#L30
  async function* importer(source, block, options = {}) {
    const opts = mergeOptions(defaultOptions, options)

    let dagBuilder

    if (typeof options.dagBuilder === 'function') {
      dagBuilder = options.dagBuilder
    } else {
      dagBuilder = dagBuilder1
    }

    let treeBuilder

    if (typeof options.treeBuilder === 'function') {
      treeBuilder = options.treeBuilder
    } else {
      treeBuilder = treeBuilder1
    }

    let candidates

    if (Symbol.asyncIterator in source || Symbol.iterator in source) {
      candidates = source
    } else {
      candidates = [source]
    }
    for await (const entry of treeBuilder(parallelBatch(dagBuilder(candidates, block, opts), opts.fileImportConcurrency), block, opts)) {
      yield {
        cid: entry.cid,
        path: entry.path,
        unixfs: entry.unixfs,
        size: entry.size
      }
    }
  }

  /*---------------------------------------------------------------------------------------------
  *  Copyright (C) 2018 Angry Bytes and contributors.
  *  https://github.com/Two-Screen/stable/blob/master/README.md
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/Two-Screen/stable/blob/fff2be6088a96c9613e3799cb966c912c6d6fcb7/stable.js#L31
  function exec(arr, comp) {
    if (typeof (comp) !== 'function') {
      comp = function (a, b) {
        return String(a).localeCompare(b)
      };
    }
    var len = arr.length;
    if (len <= 1) {
      return arr
    }
    var buffer = new Array(len);
    for (var chk = 1; chk < len; chk *= 2) {
      pass(arr, comp, chk, buffer);

      var tmp = arr;
      arr = buffer;
      buffer = tmp;
    }

    return arr
  }

  //https://github.com/Two-Screen/stable/blob/fff2be6088a96c9613e3799cb966c912c6d6fcb7/stable.js#L60
  var pass = function (arr, comp, chk, result) {
    var len = arr.length;
    var i = 0;
    // Step size / double chunk size.
    var dbl = chk * 2;
    // Bounds of the left and right chunks.
    var l, r, e;
    // Iterators over the left and right chunk.
    var li, ri;

    // Iterate over pairs of chunks.
    for (l = 0; l < len; l += dbl) {
      r = l + chk;
      e = r + chk;
      if (r > len) r = len;
      if (e > len) e = len;

      // Iterate both chunks in parallel.
      li = l;
      ri = r;
      while (true) {
        // Compare the chunks.
        if (li < r && ri < e) {
          // This works for a regular `sort()` compatible comparator,
          // but also for a simple comparator like: `a > b`
          if (comp(arr[li], arr[ri]) <= 0) {
            result[i++] = arr[li++];
          }
          else {
            result[i++] = arr[ri++];
          }
        }
        // Nothing to compare, just flush what's left.
        else if (li < r) {
          result[i++] = arr[li++];
        }
        else if (ri < e) {
          result[i++] = arr[ri++];
        }
        // Both iterators are at the chunk ends.
        else {
          break
        }
      }
    }
  };

  //https://github.com/Two-Screen/stable/blob/fff2be6088a96c9613e3799cb966c912c6d6fcb7/stable.js#L13
  var stable = function (arr, comp) {
    return exec(arr.slice(), comp)
  };

  //https://github.com/Two-Screen/stable/blob/fff2be6088a96c9613e3799cb966c912c6d6fcb7/stable.js#L17
  stable.inplace = function (arr, comp) {
    var result = exec(arr, comp);

    if (result !== arr) {
      pass(result, null, arr.length, arr);
    }

    return arr
  };

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2020 Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
  *  Licensed under the MIT License.
  *  https://github.com/sindresorhus/is-plain-obj/blob/main/license
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/sindresorhus/is-plain-obj/blob/68e8cc77bb1bbd0bf7d629d3574b6ca70289b2cc/index.js#L1
  const isOptionObject = value => {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
      return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
  };

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) Michael Mayer <michael@schnittstabil.de>
  *  Licensed under the MIT License.
  *  https://github.com/schnittstabil/merge-options/blob/master/license
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L4
  const { hasOwnProperty } = Object.prototype;
  const { propertyIsEnumerable } = Object;

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L6
  const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L13
  const globalThis = this;
  const defaultMergeOptions = {
    concatArrays: false,
    ignoreUndefined: false
  };

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L19
  const getEnumerableOwnPropertyKeys = value => {
    const keys = [];

    for (const key in value) {
      if (hasOwnProperty.call(value, key)) {
        keys.push(key);
      }
    }

    /* istanbul ignore else  */
    if (Object.getOwnPropertySymbols) {
      const symbols = Object.getOwnPropertySymbols(value);

      for (const symbol of symbols) {
        if (propertyIsEnumerable.call(value, symbol)) {
          keys.push(symbol);
        }
      }
    }

    return keys;
  };

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L42
  function clone(value) {
    if (Array.isArray(value)) {
      return cloneArray(value);
    }

    if (isOptionObject(value)) {
      return cloneOptionObject(value);
    }

    return value;
  }

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L54
  function cloneArray(array) {
    const result = array.slice(0, 0);

    getEnumerableOwnPropertyKeys(array).forEach(key => {
      defineProperty(result, key, clone(array[key]));
    });

    return result;
  }

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L64
  function cloneOptionObject(object) {
    const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};

    getEnumerableOwnPropertyKeys(object).forEach(key => {
      defineProperty(result, key, clone(object[key]));
    });

    return result;
  }

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L81
  const mergeKeys = (merged, source, keys, config) => {
    keys.forEach(key => {
      if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
        return;
      }

      // Do not recurse into prototype chain of merged
      if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
        defineProperty(merged, key, merge(merged[key], source[key], config));
      } else {
        defineProperty(merged, key, clone(source[key]));
      }
    });

    return merged;
  };

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L106
  const concatArrays = (merged, source, config) => {
    let result = merged.slice(0, 0);
    let resultIndex = 0;

    [merged, source].forEach(array => {
      const indices = [];

      // `result.concat(array)` with cloning
      for (let k = 0; k < array.length; k++) {
        if (!hasOwnProperty.call(array, k)) {
          continue;
        }

        indices.push(String(k));

        if (array === merged) {
          // Already cloned
          defineProperty(result, resultIndex++, array[k]);
        } else {
          defineProperty(result, resultIndex++, clone(array[k]));
        }
      }

      // Merge non-index keys
      result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
    });

    return result;
  };

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L142
  function merge(merged, source, config) {
    if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
      return concatArrays(merged, source, config);
    }

    if (!isOptionObject(source) || !isOptionObject(merged)) {
      return clone(source);
    }

    return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
  }

  //https://github.com/schnittstabil/merge-options/blob/2b96ee3e6e9b276b1410d239c7e20e3326fdd6cd/index.js#L154
  function merge_options(...options) {
    const config = merge(clone(defaultMergeOptions), (this !== globalThis && this) || {}, defaultMergeOptions);
    let merged = { _: {} };

    for (const option of options) {
      if (option === undefined) {
        continue;
      }

      if (!isOptionObject(option)) {
        throw new TypeError('`' + option + '` is not an Option Object');
      }

      merged = merge(merged, { _: option }, config);
    }

    return merged._;
  };

  const mergeOptions = merge_options.bind({ ignoreUndefined: true })

  /*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2019 Alan Shaw
  *  Licensed under the MIT License.
  *  https://github.com/alanshaw/ipfs-only-hash/blob/master/LICENSE
  *--------------------------------------------------------------------------------------------*/

  //https://github.com/alanshaw/ipfs-only-hash/blob/31a971c167c94ca38715a25e50fdc521c1c57ddf/index.js#L3
  const block = {
    get: async cid => { throw new Error(`unexpected block API get for ${cid}`) },
    put: async () => { throw new Error('unexpected block API put') }
  }

  //https://github.com/alanshaw/ipfs-only-hash/blob/31a971c167c94ca38715a25e50fdc521c1c57ddf/index.js#L8
  async function hashFile(content, version, options) {

    var options = options || {}
    options.onlyHash = true
    options.cidVersion = version

    if (typeof content === 'string') {
      content = new TextEncoder().encode(content)
    }

    let lastCid
    let lastSize;
    for await (const { cid, size } of importer([{ content }], block, options)) {
      lastCid = cid;
      lastSize = size;
    }
    return { cid: lastCid.toString(), size: lastSize }
  };
  // AMD
  if (typeof define == 'function' && define.amd)
    define('@ijstech/ipfs-utils', function () { return { parse, hashItems, hashContent, hashFile, mergeOptions }; })
  // Node.js
  else if (typeof module != 'undefined' && module.exports)
    module.exports = { parse, hashItems, hashContent, hashFile, mergeOptions }
  // Browser
  else {
    if (!globalObject)
      globalObject = typeof self != 'undefined' && self ? self : window;
    globalObject.IPFSUtils = { parse, hashItems, hashContent, hashFile, mergeOptions };
  };
})(this);