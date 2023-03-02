// Build: 2023/2/24 23:01:30
// 非压缩状态代码可见同目录下 youtube.src.js
(() => {
  function Wi(l) {
    "use strict";
    function e() {}
    function n() {}
    var i = String.fromCharCode,
      t = {}.toString,
      r = t.call(l.SharedArrayBuffer),
      u = t(),
      s = l.Uint8Array,
      o = s || Array,
      a = s ? ArrayBuffer : o,
      f =
        a.isView ||
        function (B) {
          return B && "length" in B;
        },
      N = t.call(a.prototype);
    a = n.prototype;
    var b = l.TextEncoder,
      m = new (s ? Uint16Array : o)(32);
    (e.prototype.decode = function (B) {
      if (!f(B)) {
        var D = t.call(B);
        if (D !== N && D !== r && D !== u)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
          );
        B = s ? new o(B) : B || [];
      }
      for (
        var R = (D = ""),
          g = 0,
          x = B.length | 0,
          re = (x - 32) | 0,
          U,
          W,
          $ = 0,
          v = 0,
          S,
          j = 0,
          _ = -1;
        g < x;

      ) {
        for (
          U = g <= re ? 32 : (x - g) | 0;
          j < U;
          g = (g + 1) | 0, j = (j + 1) | 0
        ) {
          switch (((W = B[g] & 255), W >> 4)) {
            case 15:
              if (((S = B[(g = (g + 1) | 0)] & 255), S >> 6 !== 2 || 247 < W)) {
                g = (g - 1) | 0;
                break;
              }
              ($ = ((W & 7) << 6) | (S & 63)), (v = 5), (W = 256);
            case 14:
              (S = B[(g = (g + 1) | 0)] & 255),
                ($ <<= 6),
                ($ |= ((W & 15) << 6) | (S & 63)),
                (v = S >> 6 === 2 ? (v + 4) | 0 : 24),
                (W = (W + 256) & 768);
            case 13:
            case 12:
              (S = B[(g = (g + 1) | 0)] & 255),
                ($ <<= 6),
                ($ |= ((W & 31) << 6) | (S & 63)),
                (v = (v + 7) | 0),
                g < x && S >> 6 === 2 && $ >> v && 1114112 > $
                  ? ((W = $),
                    ($ = ($ - 65536) | 0),
                    0 <= $ &&
                      ((_ = (($ >> 10) + 55296) | 0),
                      (W = (($ & 1023) + 56320) | 0),
                      31 > j
                        ? ((m[j] = _), (j = (j + 1) | 0), (_ = -1))
                        : ((S = _), (_ = W), (W = S))))
                  : ((W >>= 8), (g = (g - W - 1) | 0), (W = 65533)),
                ($ = v = 0),
                (U = g <= re ? 32 : (x - g) | 0);
            default:
              m[j] = W;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          m[j] = 65533;
        }
        if (
          ((R += i(
            m[0],
            m[1],
            m[2],
            m[3],
            m[4],
            m[5],
            m[6],
            m[7],
            m[8],
            m[9],
            m[10],
            m[11],
            m[12],
            m[13],
            m[14],
            m[15],
            m[16],
            m[17],
            m[18],
            m[19],
            m[20],
            m[21],
            m[22],
            m[23],
            m[24],
            m[25],
            m[26],
            m[27],
            m[28],
            m[29],
            m[30],
            m[31]
          )),
          32 > j && (R = R.slice(0, (j - 32) | 0)),
          g < x)
        ) {
          if (((m[0] = _), (j = ~_ >>> 31), (_ = -1), R.length < D.length))
            continue;
        } else _ !== -1 && (R += i(_));
        (D += R), (R = "");
      }
      return D;
    }),
      (a.encode = function (B) {
        B = B === void 0 ? "" : "" + B;
        var D = B.length | 0,
          R = new o(((D << 1) + 8) | 0),
          g,
          x = 0,
          re = !s;
        for (g = 0; g < D; g = (g + 1) | 0, x = (x + 1) | 0) {
          var U = B.charCodeAt(g) | 0;
          if (127 >= U) R[x] = U;
          else {
            if (2047 >= U) R[x] = 192 | (U >> 6);
            else {
              e: {
                if (55296 <= U)
                  if (56319 >= U) {
                    var W = B.charCodeAt((g = (g + 1) | 0)) | 0;
                    if (56320 <= W && 57343 >= W) {
                      if (((U = ((U << 10) + W - 56613888) | 0), 65535 < U)) {
                        (R[x] = 240 | (U >> 18)),
                          (R[(x = (x + 1) | 0)] = 128 | ((U >> 12) & 63)),
                          (R[(x = (x + 1) | 0)] = 128 | ((U >> 6) & 63)),
                          (R[(x = (x + 1) | 0)] = 128 | (U & 63));
                        continue;
                      }
                      break e;
                    }
                    U = 65533;
                  } else 57343 >= U && (U = 65533);
                !re &&
                  g << 1 < x &&
                  g << 1 < ((x - 7) | 0) &&
                  ((re = !0), (W = new o(3 * D)), W.set(R), (R = W));
              }
              (R[x] = 224 | (U >> 12)),
                (R[(x = (x + 1) | 0)] = 128 | ((U >> 6) & 63));
            }
            R[(x = (x + 1) | 0)] = 128 | (U & 63);
          }
        }
        return s ? R.subarray(0, x) : R.slice(0, x);
      }),
      (l.TextDecoder = e),
      (l.TextEncoder = n);
  }
  var w = Wi(globalThis);
  var ae = class {
    constructor(e, n) {
      (this.name = e || ""),
        (this.debug = n.debug || !1),
        e && this.log(`${e} Start`);
    }
    isQuanX() {
      return typeof $task != "undefined";
    }
    isSurge() {
      return (
        typeof $environment != "undefined" && $environment["surge-version"]
      );
    }
    isLoon() {
      return typeof $loon != "undefined";
    }
    isShadowrocket() {
      return typeof $rocket != "undefined";
    }
    isStash() {
      return (
        typeof $environment != "undefined" && $environment["stash-version"]
      );
    }
    getval(e) {
      let n = "";
      return (
        this.isSurge() || this.isLoon() || this.isStash()
          ? (n = $persistentStore.read(e))
          : this.isQuanX() && (n = $prefs.valueForKey(e)),
        n == null ? void 0 : n.replace(/\0/g, "")
      );
    }
    setval(e, n) {
      if (this.isSurge() || this.isLoon() || this.isStash())
        return $persistentStore.write(e, n);
      if (this.isQuanX()) return $prefs.setValueForKey(e, n);
    }
    getjson(e, n = {}) {
      let i = this.getval(e);
      return i ? JSON.parse(i) : n;
    }
    setjson(e, n) {
      this.setval(JSON.stringify(e), n);
    }
    msg(e = this.name, n = "", i = "", t) {
      let r = (u) => {
        if (!u) return u;
        if (typeof u == "string")
          return this.isLoon()
            ? u
            : this.isQuanX()
            ? { "open-url": u }
            : this.isSurge() || this.isStash()
            ? { url: u }
            : void 0;
        if (typeof u == "object") {
          if (this.isLoon()) {
            let s = u.openUrl || u.url || u["open-url"],
              o = u.mediaUrl || u["media-url"];
            return { openUrl: s, mediaUrl: o };
          } else if (this.isQuanX()) {
            let s = u["open-url"] || u.url || u.openUrl,
              o = u["media-url"] || u.mediaUrl,
              a = u["update-pasteboard"] || u.updatePasteboard;
            return { "open-url": s, "media-url": o, "update-pasteboard": a };
          } else if (this.isSurge() || this.isStash())
            return { url: u.url || u.openUrl || u["open-url"] };
        } else return;
      };
      this.isSurge() || this.isLoon() || this.isStash()
        ? $notification.post(e, n, i, r(t))
        : this.isQuanX() && $notify(e, n, i, r(t));
    }
    log(e) {
      this.debug &&
        (typeof e == "object" && (e = JSON.stringify(e)), console.log(e));
    }
    done(e = {}) {
      $done(e);
    }
  };
  var C = new ae("YouTube", { debug: !1 });
  function ue(l) {
    let e = typeof l;
    if (e == "object") {
      if (Array.isArray(l)) return "array";
      if (l === null) return "null";
    }
    return e;
  }
  function si(l) {
    return l !== null && typeof l == "object" && !Array.isArray(l);
  }
  var V =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        ""
      ),
    fe = [];
  for (let l = 0; l < V.length; l++) fe[V[l].charCodeAt(0)] = l;
  fe["-".charCodeAt(0)] = V.indexOf("+");
  fe["_".charCodeAt(0)] = V.indexOf("/");
  function oi(l) {
    let e = (l.length * 3) / 4;
    l[l.length - 2] == "=" ? (e -= 2) : l[l.length - 1] == "=" && (e -= 1);
    let n = new Uint8Array(e),
      i = 0,
      t = 0,
      r,
      u = 0;
    for (let s = 0; s < l.length; s++) {
      if (((r = fe[l.charCodeAt(s)]), r === void 0))
        switch (l[s]) {
          case "=":
            t = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (t) {
        case 0:
          (u = r), (t = 1);
          break;
        case 1:
          (n[i++] = (u << 2) | ((r & 48) >> 4)), (u = r), (t = 2);
          break;
        case 2:
          (n[i++] = ((u & 15) << 4) | ((r & 60) >> 2)), (u = r), (t = 3);
          break;
        case 3:
          (n[i++] = ((u & 3) << 6) | r), (t = 0);
          break;
      }
    }
    if (t == 1) throw Error("invalid base64 string.");
    return n.subarray(0, i);
  }
  function li(l) {
    let e = "",
      n = 0,
      i,
      t = 0;
    for (let r = 0; r < l.length; r++)
      switch (((i = l[r]), n)) {
        case 0:
          (e += V[i >> 2]), (t = (i & 3) << 4), (n = 1);
          break;
        case 1:
          (e += V[t | (i >> 4)]), (t = (i & 15) << 2), (n = 2);
          break;
        case 2:
          (e += V[t | (i >> 6)]), (e += V[i & 63]), (n = 0);
          break;
      }
    return n && ((e += V[t]), (e += "="), n == 1 && (e += "=")), e;
  }
  var c;
  (function (l) {
    (l.symbol = Symbol.for("protobuf-ts/unknown")),
      (l.onRead = (n, i, t, r, u) => {
        (e(i) ? i[l.symbol] : (i[l.symbol] = [])).push({
          no: t,
          wireType: r,
          data: u,
        });
      }),
      (l.onWrite = (n, i, t) => {
        for (let { no: r, wireType: u, data: s } of l.list(i))
          t.tag(r, u).raw(s);
      }),
      (l.list = (n, i) => {
        if (e(n)) {
          let t = n[l.symbol];
          return i ? t.filter((r) => r.no == i) : t;
        }
        return [];
      }),
      (l.last = (n, i) => l.list(n, i).slice(-1)[0]);
    let e = (n) => n && Array.isArray(n[l.symbol]);
  })(c || (c = {}));
  var d;
  (function (l) {
    (l[(l.Varint = 0)] = "Varint"),
      (l[(l.Bit64 = 1)] = "Bit64"),
      (l[(l.LengthDelimited = 2)] = "LengthDelimited"),
      (l[(l.StartGroup = 3)] = "StartGroup"),
      (l[(l.EndGroup = 4)] = "EndGroup"),
      (l[(l.Bit32 = 5)] = "Bit32");
  })(d || (d = {}));
  function ui() {
    let l = 0,
      e = 0;
    for (let i = 0; i < 28; i += 7) {
      let t = this.buf[this.pos++];
      if (((l |= (t & 127) << i), !(t & 128)))
        return this.assertBounds(), [l, e];
    }
    let n = this.buf[this.pos++];
    if (((l |= (n & 15) << 28), (e = (n & 112) >> 4), !(n & 128)))
      return this.assertBounds(), [l, e];
    for (let i = 3; i <= 31; i += 7) {
      let t = this.buf[this.pos++];
      if (((e |= (t & 127) << i), !(t & 128)))
        return this.assertBounds(), [l, e];
    }
    throw new Error("invalid varint");
  }
  function de(l, e, n) {
    for (let r = 0; r < 28; r = r + 7) {
      let u = l >>> r,
        s = !(!(u >>> 7) && e == 0),
        o = (s ? u | 128 : u) & 255;
      if ((n.push(o), !s)) return;
    }
    let i = ((l >>> 28) & 15) | ((e & 7) << 4),
      t = !!(e >> 3);
    if ((n.push((t ? i | 128 : i) & 255), !!t)) {
      for (let r = 3; r < 31; r = r + 7) {
        let u = e >>> r,
          s = !!(u >>> 7),
          o = (s ? u | 128 : u) & 255;
        if ((n.push(o), !s)) return;
      }
      n.push((e >>> 31) & 1);
    }
  }
  var ce = (1 << 16) * (1 << 16);
  function Oe(l) {
    let e = l[0] == "-";
    e && (l = l.slice(1));
    let n = 1e6,
      i = 0,
      t = 0;
    function r(u, s) {
      let o = Number(l.slice(u, s));
      (t *= n),
        (i = i * n + o),
        i >= ce && ((t = t + ((i / ce) | 0)), (i = i % ce));
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, i, t];
  }
  function he(l, e) {
    if (e <= 2097151) return "" + (ce * e + (l >>> 0));
    let n = l & 16777215,
      i = (((l >>> 24) | (e << 8)) >>> 0) & 16777215,
      t = (e >> 16) & 65535,
      r = n + i * 6777216 + t * 6710656,
      u = i + t * 8147497,
      s = t * 2,
      o = 1e7;
    r >= o && ((u += Math.floor(r / o)), (r %= o)),
      u >= o && ((s += Math.floor(u / o)), (u %= o));
    function a(f, N) {
      let b = f ? String(f) : "";
      return N ? "0000000".slice(b.length) + b : b;
    }
    return a(s, 0) + a(u, s) + a(r, 1);
  }
  function Ue(l, e) {
    if (l >= 0) {
      for (; l > 127; ) e.push((l & 127) | 128), (l = l >>> 7);
      e.push(l);
    } else {
      for (let n = 0; n < 9; n++) e.push((l & 127) | 128), (l = l >> 7);
      e.push(1);
    }
  }
  function fi() {
    let l = this.buf[this.pos++],
      e = l & 127;
    if (!(l & 128)) return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 7), !(l & 128)))
      return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 14), !(l & 128)))
      return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 21), !(l & 128)))
      return this.assertBounds(), e;
    (l = this.buf[this.pos++]), (e |= (l & 15) << 28);
    for (let n = 5; l & 128 && n < 10; n++) l = this.buf[this.pos++];
    if (l & 128) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0;
  }
  function Oi() {
    let l = new DataView(new ArrayBuffer(8));
    return globalThis.BigInt !== void 0 &&
      typeof l.getBigInt64 == "function" &&
      typeof l.getBigUint64 == "function" &&
      typeof l.setBigInt64 == "function" &&
      typeof l.setBigUint64 == "function"
      ? {
          MIN: BigInt("-9223372036854775808"),
          MAX: BigInt("9223372036854775807"),
          UMIN: BigInt("0"),
          UMAX: BigInt("18446744073709551615"),
          C: BigInt,
          V: l,
        }
      : void 0;
  }
  var I = Oi();
  function ci(l) {
    if (!l)
      throw new Error(
        "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support"
      );
  }
  var di = /^-?[0-9]+$/,
    pe = (1 << 16) * (1 << 16),
    ye = class {
      constructor(e, n) {
        (this.lo = e | 0), (this.hi = n | 0);
      }
      isZero() {
        return this.lo == 0 && this.hi == 0;
      }
      toNumber() {
        let e = this.hi * pe + (this.lo >>> 0);
        if (!Number.isSafeInteger(e))
          throw new Error("cannot convert to safe number");
        return e;
      }
    },
    O = class extends ye {
      static from(e) {
        if (I)
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (e == "") throw new Error("string is no integer");
              e = I.C(e);
            case "number":
              if (e === 0) return this.ZERO;
              e = I.C(e);
            case "bigint":
              if (!e) return this.ZERO;
              if (e < I.UMIN) throw new Error("signed value for ulong");
              if (e > I.UMAX) throw new Error("ulong too large");
              return (
                I.V.setBigUint64(0, e, !0),
                new O(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
              );
          }
        else
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (((e = e.trim()), !di.test(e)))
                throw new Error("string is no integer");
              let [n, i, t] = Oe(e);
              if (n) throw new Error("signed value");
              return new O(i, t);
            case "number":
              if (e == 0) return this.ZERO;
              if (!Number.isSafeInteger(e))
                throw new Error("number is no integer");
              if (e < 0) throw new Error("signed value for ulong");
              return new O(e, e / pe);
          }
        throw new Error("unknown value " + typeof e);
      }
      toString() {
        return I ? this.toBigInt().toString() : he(this.lo, this.hi);
      }
      toBigInt() {
        return (
          ci(I),
          I.V.setInt32(0, this.lo, !0),
          I.V.setInt32(4, this.hi, !0),
          I.V.getBigUint64(0, !0)
        );
      }
    };
  O.ZERO = new O(0, 0);
  var T = class extends ye {
    static from(e) {
      if (I)
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (e == "") throw new Error("string is no integer");
            e = I.C(e);
          case "number":
            if (e === 0) return this.ZERO;
            e = I.C(e);
          case "bigint":
            if (!e) return this.ZERO;
            if (e < I.MIN) throw new Error("ulong too small");
            if (e > I.MAX) throw new Error("ulong too large");
            return (
              I.V.setBigInt64(0, e, !0),
              new T(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
            );
        }
      else
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (((e = e.trim()), !di.test(e)))
              throw new Error("string is no integer");
            let [n, i, t] = Oe(e),
              r = new T(i, t);
            return n ? r.negate() : r;
          case "number":
            if (e == 0) return this.ZERO;
            if (!Number.isSafeInteger(e))
              throw new Error("number is no integer");
            return e > 0 ? new T(e, e / pe) : new T(-e, -e / pe).negate();
        }
      throw new Error("unknown value " + typeof e);
    }
    isNegative() {
      return (this.hi & 2147483648) !== 0;
    }
    negate() {
      let e = ~this.hi,
        n = this.lo;
      return n ? (n = ~n + 1) : (e += 1), new T(n, e);
    }
    toString() {
      if (I) return this.toBigInt().toString();
      if (this.isNegative()) {
        let e = this.negate();
        return "-" + he(e.lo, e.hi);
      }
      return he(this.lo, this.hi);
    }
    toBigInt() {
      return (
        ci(I),
        I.V.setInt32(0, this.lo, !0),
        I.V.setInt32(4, this.hi, !0),
        I.V.getBigInt64(0, !0)
      );
    }
  };
  T.ZERO = new T(0, 0);
  var hi = { readUnknownField: !0, readerFactory: (l) => new Ce(l) };
  function pi(l) {
    return l ? Object.assign(Object.assign({}, hi), l) : hi;
  }
  var Ce = class {
    constructor(e, n) {
      (this.varint64 = ui),
        (this.uint32 = fi),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.textDecoder =
          n ?? new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }));
    }
    tag() {
      let e = this.uint32(),
        n = e >>> 3,
        i = e & 7;
      if (n <= 0 || i < 0 || i > 5)
        throw new Error("illegal tag: field no " + n + " wire type " + i);
      return [n, i];
    }
    skip(e) {
      let n = this.pos;
      switch (e) {
        case d.Varint:
          for (; this.buf[this.pos++] & 128; );
          break;
        case d.Bit64:
          this.pos += 4;
        case d.Bit32:
          this.pos += 4;
          break;
        case d.LengthDelimited:
          let i = this.uint32();
          this.pos += i;
          break;
        case d.StartGroup:
          let t;
          for (; (t = this.tag()[1]) !== d.EndGroup; ) this.skip(t);
          break;
        default:
          throw new Error("cant skip wire type " + e);
      }
      return this.assertBounds(), this.buf.subarray(n, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(e & 1);
    }
    int64() {
      return new T(...this.varint64());
    }
    uint64() {
      return new O(...this.varint64());
    }
    sint64() {
      let [e, n] = this.varint64(),
        i = -(e & 1);
      return (
        (e = ((e >>> 1) | ((n & 1) << 31)) ^ i),
        (n = (n >>> 1) ^ i),
        new T(e, n)
      );
    }
    bool() {
      let [e, n] = this.varint64();
      return e !== 0 || n !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return new O(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new T(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        n = this.pos;
      return (this.pos += e), this.assertBounds(), this.buf.subarray(n, n + e);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  };
  function k(l, e) {
    if (!l) throw new Error(e);
  }
  var Ui = 34028234663852886e22,
    Ci = -34028234663852886e22,
    Pi = 4294967295,
    Ei = 2147483647,
    $i = -2147483648;
  function A(l) {
    if (typeof l != "number") throw new Error("invalid int 32: " + typeof l);
    if (!Number.isInteger(l) || l > Ei || l < $i)
      throw new Error("invalid int 32: " + l);
  }
  function K(l) {
    if (typeof l != "number") throw new Error("invalid uint 32: " + typeof l);
    if (!Number.isInteger(l) || l > Pi || l < 0)
      throw new Error("invalid uint 32: " + l);
  }
  function G(l) {
    if (typeof l != "number") throw new Error("invalid float 32: " + typeof l);
    if (Number.isFinite(l) && (l > Ui || l < Ci))
      throw new Error("invalid float 32: " + l);
  }
  var yi = { writeUnknownFields: !0, writerFactory: () => new Pe() };
  function Fi(l) {
    return l ? Object.assign(Object.assign({}, yi), l) : yi;
  }
  var Pe = class {
    constructor(e) {
      (this.stack = []),
        (this.textEncoder = e ?? new TextEncoder()),
        (this.chunks = []),
        (this.buf = []);
    }
    finish() {
      this.chunks.push(new Uint8Array(this.buf));
      let e = 0;
      for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
      let n = new Uint8Array(e),
        i = 0;
      for (let t = 0; t < this.chunks.length; t++)
        n.set(this.chunks[t], i), (i += this.chunks[t].length);
      return (this.chunks = []), n;
    }
    fork() {
      return (
        this.stack.push({ chunks: this.chunks, buf: this.buf }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let e = this.finish(),
        n = this.stack.pop();
      if (!n) throw new Error("invalid state, fork stack empty");
      return (
        (this.chunks = n.chunks),
        (this.buf = n.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    }
    tag(e, n) {
      return this.uint32(((e << 3) | n) >>> 0);
    }
    raw(e) {
      return (
        this.buf.length &&
          (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
        this.chunks.push(e),
        this
      );
    }
    uint32(e) {
      for (K(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
      return this.buf.push(e), this;
    }
    int32(e) {
      return A(e), Ue(e, this.buf), this;
    }
    bool(e) {
      return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
      return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
      let n = this.textEncoder.encode(e);
      return this.uint32(n.byteLength), this.raw(n);
    }
    float(e) {
      G(e);
      let n = new Uint8Array(4);
      return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
    }
    double(e) {
      let n = new Uint8Array(8);
      return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
    }
    fixed32(e) {
      K(e);
      let n = new Uint8Array(4);
      return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
    }
    sfixed32(e) {
      A(e);
      let n = new Uint8Array(4);
      return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
    }
    sint32(e) {
      return A(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Ue(e, this.buf), this;
    }
    sfixed64(e) {
      let n = new Uint8Array(8),
        i = new DataView(n.buffer),
        t = T.from(e);
      return i.setInt32(0, t.lo, !0), i.setInt32(4, t.hi, !0), this.raw(n);
    }
    fixed64(e) {
      let n = new Uint8Array(8),
        i = new DataView(n.buffer),
        t = O.from(e);
      return i.setInt32(0, t.lo, !0), i.setInt32(4, t.hi, !0), this.raw(n);
    }
    int64(e) {
      let n = T.from(e);
      return de(n.lo, n.hi, this.buf), this;
    }
    sint64(e) {
      let n = T.from(e),
        i = n.hi >> 31,
        t = (n.lo << 1) ^ i,
        r = ((n.hi << 1) | (n.lo >>> 31)) ^ i;
      return de(t, r, this.buf), this;
    }
    uint64(e) {
      let n = O.from(e);
      return de(n.lo, n.hi, this.buf), this;
    }
  };
  var mi = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    },
    gi = { ignoreUnknownFields: !1 };
  function ki(l) {
    return l ? Object.assign(Object.assign({}, gi), l) : gi;
  }
  function wi(l) {
    return l ? Object.assign(Object.assign({}, mi), l) : mi;
  }
  var y = Symbol.for("protobuf-ts/message-type");
  function Ee(l) {
    let e = !1,
      n = [];
    for (let i = 0; i < l.length; i++) {
      let t = l.charAt(i);
      t == "_"
        ? (e = !0)
        : /\d/.test(t)
        ? (n.push(t), (e = !0))
        : e
        ? (n.push(t.toUpperCase()), (e = !1))
        : i == 0
        ? n.push(t.toLowerCase())
        : n.push(t);
    }
    return n.join("");
  }
  var h;
  (function (l) {
    (l[(l.DOUBLE = 1)] = "DOUBLE"),
      (l[(l.FLOAT = 2)] = "FLOAT"),
      (l[(l.INT64 = 3)] = "INT64"),
      (l[(l.UINT64 = 4)] = "UINT64"),
      (l[(l.INT32 = 5)] = "INT32"),
      (l[(l.FIXED64 = 6)] = "FIXED64"),
      (l[(l.FIXED32 = 7)] = "FIXED32"),
      (l[(l.BOOL = 8)] = "BOOL"),
      (l[(l.STRING = 9)] = "STRING"),
      (l[(l.BYTES = 12)] = "BYTES"),
      (l[(l.UINT32 = 13)] = "UINT32"),
      (l[(l.SFIXED32 = 15)] = "SFIXED32"),
      (l[(l.SFIXED64 = 16)] = "SFIXED64"),
      (l[(l.SINT32 = 17)] = "SINT32"),
      (l[(l.SINT64 = 18)] = "SINT64");
  })(h || (h = {}));
  var P;
  (function (l) {
    (l[(l.BIGINT = 0)] = "BIGINT"),
      (l[(l.STRING = 1)] = "STRING"),
      (l[(l.NUMBER = 2)] = "NUMBER");
  })(P || (P = {}));
  var se;
  (function (l) {
    (l[(l.NO = 0)] = "NO"),
      (l[(l.PACKED = 1)] = "PACKED"),
      (l[(l.UNPACKED = 2)] = "UNPACKED");
  })(se || (se = {}));
  function bi(l) {
    var e, n, i, t;
    return (
      (l.localName =
        (e = l.localName) !== null && e !== void 0 ? e : Ee(l.name)),
      (l.jsonName = (n = l.jsonName) !== null && n !== void 0 ? n : Ee(l.name)),
      (l.repeat = (i = l.repeat) !== null && i !== void 0 ? i : se.NO),
      (l.opt =
        (t = l.opt) !== null && t !== void 0
          ? t
          : l.repeat || l.oneof
          ? !1
          : l.kind == "message"),
      l
    );
  }
  function Bi(l) {
    if (typeof l != "object" || l === null || !l.hasOwnProperty("oneofKind"))
      return !1;
    switch (typeof l.oneofKind) {
      case "string":
        return l[l.oneofKind] === void 0 ? !1 : Object.keys(l).length == 2;
      case "undefined":
        return Object.keys(l).length == 1;
      default:
        return !1;
    }
  }
  var Fe = class {
    constructor(e) {
      var n;
      this.fields = (n = e.fields) !== null && n !== void 0 ? n : [];
    }
    prepare() {
      if (this.data) return;
      let e = [],
        n = [],
        i = [];
      for (let t of this.fields)
        if (t.oneof)
          i.includes(t.oneof) ||
            (i.push(t.oneof), e.push(t.oneof), n.push(t.oneof));
        else
          switch ((n.push(t.localName), t.kind)) {
            case "scalar":
            case "enum":
              (!t.opt || t.repeat) && e.push(t.localName);
              break;
            case "message":
              t.repeat && e.push(t.localName);
              break;
            case "map":
              e.push(t.localName);
              break;
          }
      this.data = { req: e, known: n, oneofs: Object.values(i) };
    }
    is(e, n, i = !1) {
      if (n < 0) return !0;
      if (e == null || typeof e != "object") return !1;
      this.prepare();
      let t = Object.keys(e),
        r = this.data;
      if (
        t.length < r.req.length ||
        r.req.some((u) => !t.includes(u)) ||
        (!i && t.some((u) => !r.known.includes(u)))
      )
        return !1;
      if (n < 1) return !0;
      for (let u of r.oneofs) {
        let s = e[u];
        if (!Bi(s)) return !1;
        if (s.oneofKind === void 0) continue;
        let o = this.fields.find((a) => a.localName === s.oneofKind);
        if (!o || !this.field(s[s.oneofKind], o, i, n)) return !1;
      }
      for (let u of this.fields)
        if (u.oneof === void 0 && !this.field(e[u.localName], u, i, n))
          return !1;
      return !0;
    }
    field(e, n, i, t) {
      let r = n.repeat;
      switch (n.kind) {
        case "scalar":
          return e === void 0
            ? n.opt
            : r
            ? this.scalars(e, n.T, t, n.L)
            : this.scalar(e, n.T, n.L);
        case "enum":
          return e === void 0
            ? n.opt
            : r
            ? this.scalars(e, h.INT32, t)
            : this.scalar(e, h.INT32);
        case "message":
          return e === void 0
            ? !0
            : r
            ? this.messages(e, n.T(), i, t)
            : this.message(e, n.T(), i, t);
        case "map":
          if (typeof e != "object" || e === null) return !1;
          if (t < 2) return !0;
          if (!this.mapKeys(e, n.K, t)) return !1;
          switch (n.V.kind) {
            case "scalar":
              return this.scalars(Object.values(e), n.V.T, t, n.V.L);
            case "enum":
              return this.scalars(Object.values(e), h.INT32, t);
            case "message":
              return this.messages(Object.values(e), n.V.T(), i, t);
          }
          break;
      }
      return !0;
    }
    message(e, n, i, t) {
      return i ? n.isAssignable(e, t) : n.is(e, t);
    }
    messages(e, n, i, t) {
      if (!Array.isArray(e)) return !1;
      if (t < 2) return !0;
      if (i) {
        for (let r = 0; r < e.length && r < t; r++)
          if (!n.isAssignable(e[r], t - 1)) return !1;
      } else
        for (let r = 0; r < e.length && r < t; r++)
          if (!n.is(e[r], t - 1)) return !1;
      return !0;
    }
    scalar(e, n, i) {
      let t = typeof e;
      switch (n) {
        case h.UINT64:
        case h.FIXED64:
        case h.INT64:
        case h.SFIXED64:
        case h.SINT64:
          switch (i) {
            case P.BIGINT:
              return t == "bigint";
            case P.NUMBER:
              return t == "number" && !isNaN(e);
            default:
              return t == "string";
          }
        case h.BOOL:
          return t == "boolean";
        case h.STRING:
          return t == "string";
        case h.BYTES:
          return e instanceof Uint8Array;
        case h.DOUBLE:
        case h.FLOAT:
          return t == "number" && !isNaN(e);
        default:
          return t == "number" && Number.isInteger(e);
      }
    }
    scalars(e, n, i, t) {
      if (!Array.isArray(e)) return !1;
      if (i < 2) return !0;
      if (Array.isArray(e)) {
        for (let r = 0; r < e.length && r < i; r++)
          if (!this.scalar(e[r], n, t)) return !1;
      }
      return !0;
    }
    mapKeys(e, n, i) {
      let t = Object.keys(e);
      switch (n) {
        case h.INT32:
        case h.FIXED32:
        case h.SFIXED32:
        case h.SINT32:
        case h.UINT32:
          return this.scalars(
            t.slice(0, i).map((r) => parseInt(r)),
            n,
            i
          );
        case h.BOOL:
          return this.scalars(
            t
              .slice(0, i)
              .map((r) => (r == "true" ? !0 : r == "false" ? !1 : r)),
            n,
            i
          );
        default:
          return this.scalars(t, n, i, P.STRING);
      }
    }
  };
  function L(l, e) {
    switch (e) {
      case P.BIGINT:
        return l.toBigInt();
      case P.NUMBER:
        return l.toNumber();
      default:
        return l.toString();
    }
  }
  var me = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (this.fMap === void 0) {
        this.fMap = {};
        let n = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        for (let i of n)
          (this.fMap[i.name] = i),
            (this.fMap[i.jsonName] = i),
            (this.fMap[i.localName] = i);
      }
    }
    assert(e, n, i) {
      if (!e) {
        let t = ue(i);
        throw (
          ((t == "number" || t == "boolean") && (t = i.toString()),
          new Error(`Cannot parse JSON ${t} for ${this.info.typeName}#${n}`))
        );
      }
    }
    read(e, n, i) {
      this.prepare();
      let t = [];
      for (let [r, u] of Object.entries(e)) {
        let s = this.fMap[r];
        if (!s) {
          if (!i.ignoreUnknownFields)
            throw new Error(
              `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`
            );
          continue;
        }
        let o = s.localName,
          a;
        if (s.oneof) {
          if (t.includes(s.oneof))
            throw new Error(
              `Multiple members of the oneof group "${s.oneof}" of ${this.info.typeName} are present in JSON.`
            );
          t.push(s.oneof), (a = n[s.oneof] = { oneofKind: o });
        } else a = n;
        if (s.kind == "map") {
          if (u === null) continue;
          this.assert(si(u), s.name, u);
          let f = a[o];
          for (let [N, b] of Object.entries(u)) {
            this.assert(b !== null, s.name + " map value", null);
            let m;
            switch (s.V.kind) {
              case "message":
                m = s.V.T().internalJsonRead(b, i);
                break;
              case "enum":
                if (
                  ((m = this.enum(s.V.T(), b, s.name, i.ignoreUnknownFields)),
                  m === !1)
                )
                  continue;
                break;
              case "scalar":
                m = this.scalar(b, s.V.T, s.V.L, s.name);
                break;
            }
            this.assert(m !== void 0, s.name + " map value", b);
            let B = N;
            s.K == h.BOOL && (B = B == "true" ? !0 : B == "false" ? !1 : B),
              (B = this.scalar(B, s.K, P.STRING, s.name).toString()),
              (f[B] = m);
          }
        } else if (s.repeat) {
          if (u === null) continue;
          this.assert(Array.isArray(u), s.name, u);
          let f = a[o];
          for (let N of u) {
            this.assert(N !== null, s.name, null);
            let b;
            switch (s.kind) {
              case "message":
                b = s.T().internalJsonRead(N, i);
                break;
              case "enum":
                if (
                  ((b = this.enum(s.T(), N, s.name, i.ignoreUnknownFields)),
                  b === !1)
                )
                  continue;
                break;
              case "scalar":
                b = this.scalar(N, s.T, s.L, s.name);
                break;
            }
            this.assert(b !== void 0, s.name, u), f.push(b);
          }
        } else
          switch (s.kind) {
            case "message":
              if (u === null && s.T().typeName != "google.protobuf.Value") {
                this.assert(
                  s.oneof === void 0,
                  s.name + " (oneof member)",
                  null
                );
                continue;
              }
              a[o] = s.T().internalJsonRead(u, i, a[o]);
              break;
            case "enum":
              let f = this.enum(s.T(), u, s.name, i.ignoreUnknownFields);
              if (f === !1) continue;
              a[o] = f;
              break;
            case "scalar":
              a[o] = this.scalar(u, s.T, s.L, s.name);
              break;
          }
      }
    }
    enum(e, n, i, t) {
      if (
        (e[0] == "google.protobuf.NullValue" &&
          k(
            n === null,
            `Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} only accepts null.`
          ),
        n === null)
      )
        return 0;
      switch (typeof n) {
        case "number":
          return (
            k(
              Number.isInteger(n),
              `Unable to parse field ${this.info.typeName}#${i}, enum can only be integral number, got ${n}.`
            ),
            n
          );
        case "string":
          let r = n;
          e[2] &&
            n.substring(0, e[2].length) === e[2] &&
            (r = n.substring(e[2].length));
          let u = e[1][r];
          return typeof u > "u" && t
            ? !1
            : (k(
                typeof u == "number",
                `Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} has no value for "${n}".`
              ),
              u);
      }
      k(
        !1,
        `Unable to parse field ${
          this.info.typeName
        }#${i}, cannot parse enum value from ${typeof n}".`
      );
    }
    scalar(e, n, i, t) {
      let r;
      try {
        switch (n) {
          case h.DOUBLE:
          case h.FLOAT:
            if (e === null) return 0;
            if (e === "NaN") return Number.NaN;
            if (e === "Infinity") return Number.POSITIVE_INFINITY;
            if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (e === "") {
              r = "empty string";
              break;
            }
            if (typeof e == "string" && e.trim().length !== e.length) {
              r = "extra whitespace";
              break;
            }
            if (typeof e != "string" && typeof e != "number") break;
            let u = Number(e);
            if (Number.isNaN(u)) {
              r = "not a number";
              break;
            }
            if (!Number.isFinite(u)) {
              r = "too large or small";
              break;
            }
            return n == h.FLOAT && G(u), u;
          case h.INT32:
          case h.FIXED32:
          case h.SFIXED32:
          case h.SINT32:
          case h.UINT32:
            if (e === null) return 0;
            let s;
            if (
              (typeof e == "number"
                ? (s = e)
                : e === ""
                ? (r = "empty string")
                : typeof e == "string" &&
                  (e.trim().length !== e.length
                    ? (r = "extra whitespace")
                    : (s = Number(e))),
              s === void 0)
            )
              break;
            return n == h.UINT32 ? K(s) : A(s), s;
          case h.INT64:
          case h.SFIXED64:
          case h.SINT64:
            if (e === null) return L(T.ZERO, i);
            if (typeof e != "number" && typeof e != "string") break;
            return L(T.from(e), i);
          case h.FIXED64:
          case h.UINT64:
            if (e === null) return L(O.ZERO, i);
            if (typeof e != "number" && typeof e != "string") break;
            return L(O.from(e), i);
          case h.BOOL:
            if (e === null) return !1;
            if (typeof e != "boolean") break;
            return e;
          case h.STRING:
            if (e === null) return "";
            if (typeof e != "string") {
              r = "extra whitespace";
              break;
            }
            try {
              encodeURIComponent(e);
            } catch (o) {
              o = "invalid UTF8";
              break;
            }
            return e;
          case h.BYTES:
            if (e === null || e === "") return new Uint8Array(0);
            if (typeof e != "string") break;
            return oi(e);
        }
      } catch (u) {
        r = u.message;
      }
      this.assert(!1, t + (r ? " - " + r : ""), e);
    }
  };
  var ge = class {
    constructor(e) {
      var n;
      this.fields = (n = e.fields) !== null && n !== void 0 ? n : [];
    }
    write(e, n) {
      let i = {},
        t = e;
      for (let r of this.fields) {
        if (!r.oneof) {
          let a = this.field(r, t[r.localName], n);
          a !== void 0 && (i[n.useProtoFieldName ? r.name : r.jsonName] = a);
          continue;
        }
        let u = t[r.oneof];
        if (u.oneofKind !== r.localName) continue;
        let s =
            r.kind == "scalar" || r.kind == "enum"
              ? Object.assign(Object.assign({}, n), { emitDefaultValues: !0 })
              : n,
          o = this.field(r, u[r.localName], s);
        k(o !== void 0), (i[n.useProtoFieldName ? r.name : r.jsonName] = o);
      }
      return i;
    }
    field(e, n, i) {
      let t;
      if (e.kind == "map") {
        k(typeof n == "object" && n !== null);
        let r = {};
        switch (e.V.kind) {
          case "scalar":
            for (let [o, a] of Object.entries(n)) {
              let f = this.scalar(e.V.T, a, e.name, !1, !0);
              k(f !== void 0), (r[o.toString()] = f);
            }
            break;
          case "message":
            let u = e.V.T();
            for (let [o, a] of Object.entries(n)) {
              let f = this.message(u, a, e.name, i);
              k(f !== void 0), (r[o.toString()] = f);
            }
            break;
          case "enum":
            let s = e.V.T();
            for (let [o, a] of Object.entries(n)) {
              k(a === void 0 || typeof a == "number");
              let f = this.enum(s, a, e.name, !1, !0, i.enumAsInteger);
              k(f !== void 0), (r[o.toString()] = f);
            }
            break;
        }
        (i.emitDefaultValues || Object.keys(r).length > 0) && (t = r);
      } else if (e.repeat) {
        k(Array.isArray(n));
        let r = [];
        switch (e.kind) {
          case "scalar":
            for (let o = 0; o < n.length; o++) {
              let a = this.scalar(e.T, n[o], e.name, e.opt, !0);
              k(a !== void 0), r.push(a);
            }
            break;
          case "enum":
            let u = e.T();
            for (let o = 0; o < n.length; o++) {
              k(n[o] === void 0 || typeof n[o] == "number");
              let a = this.enum(u, n[o], e.name, e.opt, !0, i.enumAsInteger);
              k(a !== void 0), r.push(a);
            }
            break;
          case "message":
            let s = e.T();
            for (let o = 0; o < n.length; o++) {
              let a = this.message(s, n[o], e.name, i);
              k(a !== void 0), r.push(a);
            }
            break;
        }
        (i.emitDefaultValues || r.length > 0 || i.emitDefaultValues) && (t = r);
      } else
        switch (e.kind) {
          case "scalar":
            t = this.scalar(e.T, n, e.name, e.opt, i.emitDefaultValues);
            break;
          case "enum":
            t = this.enum(
              e.T(),
              n,
              e.name,
              e.opt,
              i.emitDefaultValues,
              i.enumAsInteger
            );
            break;
          case "message":
            t = this.message(e.T(), n, e.name, i);
            break;
        }
      return t;
    }
    enum(e, n, i, t, r, u) {
      if (e[0] == "google.protobuf.NullValue") return null;
      if (n === void 0) {
        k(t);
        return;
      }
      if (!(n === 0 && !r && !t))
        return (
          k(typeof n == "number"),
          k(Number.isInteger(n)),
          u || !e[1].hasOwnProperty(n) ? n : e[2] ? e[2] + e[1][n] : e[1][n]
        );
    }
    message(e, n, i, t) {
      return n === void 0
        ? t.emitDefaultValues
          ? null
          : void 0
        : e.internalJsonWrite(n, t);
    }
    scalar(e, n, i, t, r) {
      if (n === void 0) {
        k(t);
        return;
      }
      let u = r || t;
      switch (e) {
        case h.INT32:
        case h.SFIXED32:
        case h.SINT32:
          return n === 0 ? (u ? 0 : void 0) : (A(n), n);
        case h.FIXED32:
        case h.UINT32:
          return n === 0 ? (u ? 0 : void 0) : (K(n), n);
        case h.FLOAT:
          G(n);
        case h.DOUBLE:
          return n === 0
            ? u
              ? 0
              : void 0
            : (k(typeof n == "number"),
              Number.isNaN(n)
                ? "NaN"
                : n === Number.POSITIVE_INFINITY
                ? "Infinity"
                : n === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : n);
        case h.STRING:
          return n === "" ? (u ? "" : void 0) : (k(typeof n == "string"), n);
        case h.BOOL:
          return n === !1 ? (u ? !1 : void 0) : (k(typeof n == "boolean"), n);
        case h.UINT64:
        case h.FIXED64:
          k(
            typeof n == "number" || typeof n == "string" || typeof n == "bigint"
          );
          let s = O.from(n);
          return s.isZero() && !u ? void 0 : s.toString();
        case h.INT64:
        case h.SFIXED64:
        case h.SINT64:
          k(
            typeof n == "number" || typeof n == "string" || typeof n == "bigint"
          );
          let o = T.from(n);
          return o.isZero() && !u ? void 0 : o.toString();
        case h.BYTES:
          return (
            k(n instanceof Uint8Array), n.byteLength ? li(n) : u ? "" : void 0
          );
      }
    }
  };
  function oe(l, e = P.STRING) {
    switch (l) {
      case h.BOOL:
        return !1;
      case h.UINT64:
      case h.FIXED64:
        return L(O.ZERO, e);
      case h.INT64:
      case h.SFIXED64:
      case h.SINT64:
        return L(T.ZERO, e);
      case h.DOUBLE:
      case h.FLOAT:
        return 0;
      case h.BYTES:
        return new Uint8Array(0);
      case h.STRING:
        return "";
      default:
        return 0;
    }
  }
  var ke = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (!this.fieldNoToField) {
        let n = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        this.fieldNoToField = new Map(n.map((i) => [i.no, i]));
      }
    }
    read(e, n, i, t) {
      this.prepare();
      let r = t === void 0 ? e.len : e.pos + t;
      for (; e.pos < r; ) {
        let [u, s] = e.tag(),
          o = this.fieldNoToField.get(u);
        if (!o) {
          let b = i.readUnknownField;
          if (b == "throw")
            throw new Error(
              `Unknown field ${u} (wire type ${s}) for ${this.info.typeName}`
            );
          let m = e.skip(s);
          b !== !1 && (b === !0 ? c.onRead : b)(this.info.typeName, n, u, s, m);
          continue;
        }
        let a = n,
          f = o.repeat,
          N = o.localName;
        switch (
          (o.oneof &&
            ((a = a[o.oneof]),
            a.oneofKind !== N && (a = n[o.oneof] = { oneofKind: N })),
          o.kind)
        ) {
          case "scalar":
          case "enum":
            let b = o.kind == "enum" ? h.INT32 : o.T,
              m = o.kind == "scalar" ? o.L : void 0;
            if (f) {
              let R = a[N];
              if (s == d.LengthDelimited && b != h.STRING && b != h.BYTES) {
                let g = e.uint32() + e.pos;
                for (; e.pos < g; ) R.push(this.scalar(e, b, m));
              } else R.push(this.scalar(e, b, m));
            } else a[N] = this.scalar(e, b, m);
            break;
          case "message":
            if (f) {
              let R = a[N],
                g = o.T().internalBinaryRead(e, e.uint32(), i);
              R.push(g);
            } else a[N] = o.T().internalBinaryRead(e, e.uint32(), i, a[N]);
            break;
          case "map":
            let [B, D] = this.mapEntry(o, e, i);
            a[N][B] = D;
            break;
        }
      }
    }
    mapEntry(e, n, i) {
      let t = n.uint32(),
        r = n.pos + t,
        u,
        s;
      for (; n.pos < r; ) {
        let [o, a] = n.tag();
        switch (o) {
          case 1:
            e.K == h.BOOL
              ? (u = n.bool().toString())
              : (u = this.scalar(n, e.K, P.STRING));
            break;
          case 2:
            switch (e.V.kind) {
              case "scalar":
                s = this.scalar(n, e.V.T, e.V.L);
                break;
              case "enum":
                s = n.int32();
                break;
              case "message":
                s = e.V.T().internalBinaryRead(n, n.uint32(), i);
                break;
            }
            break;
          default:
            throw new Error(
              `Unknown field ${o} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`
            );
        }
      }
      if (u === void 0) {
        let o = oe(e.K);
        u = e.K == h.BOOL ? o.toString() : o;
      }
      if (s === void 0)
        switch (e.V.kind) {
          case "scalar":
            s = oe(e.V.T, e.V.L);
            break;
          case "enum":
            s = 0;
            break;
          case "message":
            s = e.V.T().create();
            break;
        }
      return [u, s];
    }
    scalar(e, n, i) {
      switch (n) {
        case h.INT32:
          return e.int32();
        case h.STRING:
          return e.string();
        case h.BOOL:
          return e.bool();
        case h.DOUBLE:
          return e.double();
        case h.FLOAT:
          return e.float();
        case h.INT64:
          return L(e.int64(), i);
        case h.UINT64:
          return L(e.uint64(), i);
        case h.FIXED64:
          return L(e.fixed64(), i);
        case h.FIXED32:
          return e.fixed32();
        case h.BYTES:
          return e.bytes();
        case h.UINT32:
          return e.uint32();
        case h.SFIXED32:
          return e.sfixed32();
        case h.SFIXED64:
          return L(e.sfixed64(), i);
        case h.SINT32:
          return e.sint32();
        case h.SINT64:
          return L(e.sint64(), i);
      }
    }
  };
  var we = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      if (!this.fields) {
        let e = this.info.fields ? this.info.fields.concat() : [];
        this.fields = e.sort((n, i) => n.no - i.no);
      }
    }
    write(e, n, i) {
      this.prepare();
      for (let r of this.fields) {
        let u,
          s,
          o = r.repeat,
          a = r.localName;
        if (r.oneof) {
          let f = e[r.oneof];
          if (f.oneofKind !== a) continue;
          (u = f[a]), (s = !0);
        } else (u = e[a]), (s = !1);
        switch (r.kind) {
          case "scalar":
          case "enum":
            let f = r.kind == "enum" ? h.INT32 : r.T;
            if (o)
              if ((k(Array.isArray(u)), o == se.PACKED))
                this.packed(n, f, r.no, u);
              else for (let N of u) this.scalar(n, f, r.no, N, !0);
            else
              u === void 0 ? k(r.opt) : this.scalar(n, f, r.no, u, s || r.opt);
            break;
          case "message":
            if (o) {
              k(Array.isArray(u));
              for (let N of u) this.message(n, i, r.T(), r.no, N);
            } else this.message(n, i, r.T(), r.no, u);
            break;
          case "map":
            k(typeof u == "object" && u !== null);
            for (let [N, b] of Object.entries(u)) this.mapEntry(n, i, r, N, b);
            break;
        }
      }
      let t = i.writeUnknownFields;
      t !== !1 && (t === !0 ? c.onWrite : t)(this.info.typeName, e, n);
    }
    mapEntry(e, n, i, t, r) {
      e.tag(i.no, d.LengthDelimited), e.fork();
      let u = t;
      switch (i.K) {
        case h.INT32:
        case h.FIXED32:
        case h.UINT32:
        case h.SFIXED32:
        case h.SINT32:
          u = Number.parseInt(t);
          break;
        case h.BOOL:
          k(t == "true" || t == "false"), (u = t == "true");
          break;
      }
      switch ((this.scalar(e, i.K, 1, u, !0), i.V.kind)) {
        case "scalar":
          this.scalar(e, i.V.T, 2, r, !0);
          break;
        case "enum":
          this.scalar(e, h.INT32, 2, r, !0);
          break;
        case "message":
          this.message(e, n, i.V.T(), 2, r);
          break;
      }
      e.join();
    }
    message(e, n, i, t, r) {
      r !== void 0 &&
        (i.internalBinaryWrite(r, e.tag(t, d.LengthDelimited).fork(), n),
        e.join());
    }
    scalar(e, n, i, t, r) {
      let [u, s, o] = this.scalarInfo(n, t);
      (!o || r) && (e.tag(i, u), e[s](t));
    }
    packed(e, n, i, t) {
      if (!t.length) return;
      k(n !== h.BYTES && n !== h.STRING), e.tag(i, d.LengthDelimited), e.fork();
      let [, r] = this.scalarInfo(n);
      for (let u = 0; u < t.length; u++) e[r](t[u]);
      e.join();
    }
    scalarInfo(e, n) {
      let i = d.Varint,
        t,
        r = n === void 0,
        u = n === 0;
      switch (e) {
        case h.INT32:
          t = "int32";
          break;
        case h.STRING:
          (u = r || !n.length), (i = d.LengthDelimited), (t = "string");
          break;
        case h.BOOL:
          (u = n === !1), (t = "bool");
          break;
        case h.UINT32:
          t = "uint32";
          break;
        case h.DOUBLE:
          (i = d.Bit64), (t = "double");
          break;
        case h.FLOAT:
          (i = d.Bit32), (t = "float");
          break;
        case h.INT64:
          (u = r || T.from(n).isZero()), (t = "int64");
          break;
        case h.UINT64:
          (u = r || O.from(n).isZero()), (t = "uint64");
          break;
        case h.FIXED64:
          (u = r || O.from(n).isZero()), (i = d.Bit64), (t = "fixed64");
          break;
        case h.BYTES:
          (u = r || !n.byteLength), (i = d.LengthDelimited), (t = "bytes");
          break;
        case h.FIXED32:
          (i = d.Bit32), (t = "fixed32");
          break;
        case h.SFIXED32:
          (i = d.Bit32), (t = "sfixed32");
          break;
        case h.SFIXED64:
          (u = r || T.from(n).isZero()), (i = d.Bit64), (t = "sfixed64");
          break;
        case h.SINT32:
          t = "sint32";
          break;
        case h.SINT64:
          (u = r || T.from(n).isZero()), (t = "sint64");
          break;
      }
      return [i, t, r || u];
    }
  };
  function Ni(l) {
    let e = {};
    Object.defineProperty(e, y, { enumerable: !1, value: l });
    for (let n of l.fields) {
      let i = n.localName;
      if (!n.opt)
        if (n.oneof) e[n.oneof] = { oneofKind: void 0 };
        else if (n.repeat) e[i] = [];
        else
          switch (n.kind) {
            case "scalar":
              e[i] = oe(n.T, n.L);
              break;
            case "enum":
              e[i] = 0;
              break;
            case "map":
              e[i] = {};
              break;
          }
    }
    return e;
  }
  function p(l, e, n) {
    let i,
      t = n,
      r;
    for (let u of l.fields) {
      let s = u.localName;
      if (u.oneof) {
        let o = t[u.oneof];
        if (o?.oneofKind == null) continue;
        if (
          ((i = o[s]), (r = e[u.oneof]), (r.oneofKind = o.oneofKind), i == null)
        ) {
          delete r[s];
          continue;
        }
      } else if (((i = t[s]), (r = e), i == null)) continue;
      switch ((u.repeat && (r[s].length = i.length), u.kind)) {
        case "scalar":
        case "enum":
          if (u.repeat) for (let a = 0; a < i.length; a++) r[s][a] = i[a];
          else r[s] = i;
          break;
        case "message":
          let o = u.T();
          if (u.repeat)
            for (let a = 0; a < i.length; a++) r[s][a] = o.create(i[a]);
          else r[s] === void 0 ? (r[s] = o.create(i)) : o.mergePartial(r[s], i);
          break;
        case "map":
          switch (u.V.kind) {
            case "scalar":
            case "enum":
              Object.assign(r[s], i);
              break;
            case "message":
              let a = u.V.T();
              for (let f of Object.keys(i)) r[s][f] = a.create(i[f]);
              break;
          }
          break;
      }
    }
  }
  function Ri(l, e, n) {
    if (e === n) return !0;
    if (!e || !n) return !1;
    for (let i of l.fields) {
      let t = i.localName,
        r = i.oneof ? e[i.oneof][t] : e[t],
        u = i.oneof ? n[i.oneof][t] : n[t];
      switch (i.kind) {
        case "enum":
        case "scalar":
          let s = i.kind == "enum" ? h.INT32 : i.T;
          if (!(i.repeat ? Ti(s, r, u) : Ii(s, r, u))) return !1;
          break;
        case "map":
          if (
            !(i.V.kind == "message"
              ? xi(i.V.T(), be(r), be(u))
              : Ti(i.V.kind == "enum" ? h.INT32 : i.V.T, be(r), be(u)))
          )
            return !1;
          break;
        case "message":
          let o = i.T();
          if (!(i.repeat ? xi(o, r, u) : o.equals(r, u))) return !1;
          break;
      }
    }
    return !0;
  }
  var be = Object.values;
  function Ii(l, e, n) {
    if (e === n) return !0;
    if (l !== h.BYTES) return !1;
    let i = e,
      t = n;
    if (i.length !== t.length) return !1;
    for (let r = 0; r < i.length; r++) if (i[r] != t[r]) return !1;
    return !0;
  }
  function Ti(l, e, n) {
    if (e.length !== n.length) return !1;
    for (let i = 0; i < e.length; i++) if (!Ii(l, e[i], n[i])) return !1;
    return !0;
  }
  function xi(l, e, n) {
    if (e.length !== n.length) return !1;
    for (let i = 0; i < e.length; i++) if (!l.equals(e[i], n[i])) return !1;
    return !0;
  }
  var F = class {
    constructor(e, n, i) {
      (this.defaultCheckDepth = 16),
        (this.typeName = e),
        (this.fields = n.map(bi)),
        (this.options = i ?? {}),
        (this.refTypeCheck = new Fe(this)),
        (this.refJsonReader = new me(this)),
        (this.refJsonWriter = new ge(this)),
        (this.refBinReader = new ke(this)),
        (this.refBinWriter = new we(this));
    }
    create(e) {
      let n = Ni(this);
      return e !== void 0 && p(this, n, e), n;
    }
    clone(e) {
      let n = this.create();
      return p(this, n, e), n;
    }
    equals(e, n) {
      return Ri(this, e, n);
    }
    is(e, n = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, n, !1);
    }
    isAssignable(e, n = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, n, !0);
    }
    mergePartial(e, n) {
      p(this, e, n);
    }
    fromBinary(e, n) {
      let i = pi(n);
      return this.internalBinaryRead(i.readerFactory(e), e.byteLength, i);
    }
    fromJson(e, n) {
      return this.internalJsonRead(e, ki(n));
    }
    fromJsonString(e, n) {
      let i = JSON.parse(e);
      return this.fromJson(i, n);
    }
    toJson(e, n) {
      return this.internalJsonWrite(e, wi(n));
    }
    toJsonString(e, n) {
      var i;
      let t = this.toJson(e, n);
      return JSON.stringify(
        t,
        null,
        (i = n?.prettySpaces) !== null && i !== void 0 ? i : 0
      );
    }
    toBinary(e, n) {
      let i = Fi(n);
      return this.internalBinaryWrite(e, i.writerFactory(), i).finish();
    }
    internalJsonRead(e, n, i) {
      if (e !== null && typeof e == "object" && !Array.isArray(e)) {
        let t = i ?? this.create();
        return this.refJsonReader.read(e, t, n), t;
      }
      throw new Error(
        `Unable to parse message ${this.typeName} from JSON ${ue(e)}.`
      );
    }
    internalJsonWrite(e, n) {
      return this.refJsonWriter.write(e, n);
    }
    internalBinaryWrite(e, n, i) {
      return this.refBinWriter.write(e, n, i), n;
    }
    internalBinaryRead(e, n, i, t) {
      let r = t ?? this.create();
      return this.refBinReader.read(e, r, i, n), r;
    }
  };
  var $n = class extends F {
      constructor() {
        super("Browse", [
          { no: 9, name: "n1F9", kind: "message", T: () => $e },
          { no: 10, name: "n1F10", kind: "message", T: () => Z },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 9:
              r.n1F9 = $e.internalBinaryRead(e, e.uint32(), i, r.n1F9);
              break;
            case 10:
              r.n1F10 = Z.internalBinaryRead(e, e.uint32(), i, r.n1F10);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n1F9 &&
          $e
            .internalBinaryWrite(e.n1F9, n.tag(9, d.LengthDelimited).fork(), i)
            .join(),
          e.n1F10 &&
            Z.internalBinaryWrite(
              e.n1F10,
              n.tag(10, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ht = new $n(),
    Ln = class extends F {
      constructor() {
        super("n1F9", [
          { no: 58173949, name: "m2F58173949", kind: "message", T: () => Le },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 58173949:
              r.m2F58173949 = Le.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.m2F58173949
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.m2F58173949 &&
          Le.internalBinaryWrite(
            e.m2F58173949,
            n.tag(58173949, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    $e = new Ln(),
    Dn = class extends F {
      constructor() {
        super("n1F10", [
          { no: 49399797, name: "n2F49399797", kind: "message", T: () => E },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = E.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n2F49399797
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n2F49399797 &&
          E.internalBinaryWrite(
            e.n2F49399797,
            n.tag(49399797, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Z = new Dn(),
    jn = class extends F {
      constructor() {
        super("m2F58173949", [
          { no: 1, name: "m3F1", kind: "message", repeat: 1, T: () => De },
        ]);
      }
      create(e) {
        let n = { m3F1: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.m3F1.push(De.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.m3F1.length; r++)
          De.internalBinaryWrite(
            e.m3F1[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Le = new jn(),
    Sn = class extends F {
      constructor() {
        super("m3F1", [
          { no: 58174010, name: "m4F58174010", kind: "message", T: () => je },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 58174010:
              r.m4F58174010 = je.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.m4F58174010
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.m4F58174010 &&
          je
            .internalBinaryWrite(
              e.m4F58174010,
              n.tag(58174010, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    De = new Sn(),
    _n = class extends F {
      constructor() {
        super("m4F58174010", [
          { no: 4, name: "n1F10", kind: "message", T: () => Z },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.n1F10 = Z.internalBinaryRead(e, e.uint32(), i, r.n1F10);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n1F10 &&
          Z.internalBinaryWrite(
            e.n1F10,
            n.tag(4, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    je = new _n(),
    Vn = class extends F {
      constructor() {
        super("n2F49399797", [
          { no: 1, name: "n3F1", kind: "message", repeat: 1, T: () => Se },
        ]);
      }
      create(e) {
        let n = { n3F1: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n3F1.push(Se.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.n3F1.length; r++)
          Se.internalBinaryWrite(
            e.n3F1[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    E = new Vn(),
    Mn = class extends F {
      constructor() {
        super("n3F1", [
          { no: 50195462, name: "n4F50195462", kind: "message", T: () => Y },
          { no: 51845067, name: "n4F51845067", kind: "message", T: () => _e },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 50195462:
              r.n4F50195462 = Y.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n4F50195462
              );
              break;
            case 51845067:
              r.n4F51845067 = _e.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n4F51845067
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n4F50195462 &&
          Y.internalBinaryWrite(
            e.n4F50195462,
            n.tag(50195462, d.LengthDelimited).fork(),
            i
          ).join(),
          e.n4F51845067 &&
            _e
              .internalBinaryWrite(
                e.n4F51845067,
                n.tag(51845067, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Se = new Mn(),
    An = class extends F {
      constructor() {
        super("n4F50195462", [
          { no: 1, name: "n5F1", kind: "message", repeat: 1, T: () => q },
        ]);
      }
      create(e) {
        let n = { n5F1: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n5F1.push(q.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.n5F1.length; r++)
          q.internalBinaryWrite(
            e.n5F1[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Y = new An(),
    vn = class extends F {
      constructor() {
        super("n4F51845067", [
          { no: 5, name: "n5F5", kind: "message", T: () => Ve },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 5:
              r.n5F5 = Ve.internalBinaryRead(e, e.uint32(), i, r.n5F5);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n5F5 &&
          Ve.internalBinaryWrite(
            e.n5F5,
            n.tag(5, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    _e = new vn(),
    Kn = class extends F {
      constructor() {
        super("n5F1", [
          { no: 153515154, name: "n6F153515154", kind: "message", T: () => Me },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 153515154:
              r.n6F153515154 = Me.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n6F153515154
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n6F153515154 &&
          Me.internalBinaryWrite(
            e.n6F153515154,
            n.tag(153515154, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    q = new Kn(),
    Xn = class extends F {
      constructor() {
        super("n5F5", [
          { no: 51431404, name: "n6F51431404", kind: "message", T: () => Ae },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 51431404:
              r.n6F51431404 = Ae.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n6F51431404
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n6F51431404 &&
          Ae.internalBinaryWrite(
            e.n6F51431404,
            n.tag(51431404, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ve = new Xn(),
    Gn = class extends F {
      constructor() {
        super("n6F153515154", [
          { no: 172660663, name: "n7F172660663", kind: "message", T: () => ve },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 172660663:
              r.n7F172660663 = ve.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n7F172660663
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n7F172660663 &&
          ve
            .internalBinaryWrite(
              e.n7F172660663,
              n.tag(172660663, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Me = new Gn(),
    Jn = class extends F {
      constructor() {
        super("n6F51431404", [
          { no: 1, name: "n5F1", kind: "message", repeat: 1, T: () => q },
        ]);
      }
      create(e) {
        let n = { n5F1: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n5F1.push(q.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.n5F1.length; r++)
          q.internalBinaryWrite(
            e.n5F1[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ae = new Jn(),
    Zn = class extends F {
      constructor() {
        super("n7F172660663", [
          { no: 1, name: "n8F1", kind: "message", T: () => z },
          { no: 2, name: "n8F2", kind: "message", T: () => Q },
          { no: 3, name: "n8F3", kind: "message", T: () => Ke },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n8F1 = z.internalBinaryRead(e, e.uint32(), i, r.n8F1);
              break;
            case 2:
              r.n8F2 = Q.internalBinaryRead(e, e.uint32(), i, r.n8F2);
              break;
            case 3:
              r.n8F3 = Ke.internalBinaryRead(e, e.uint32(), i, r.n8F3);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n8F1 &&
          z
            .internalBinaryWrite(e.n8F1, n.tag(1, d.LengthDelimited).fork(), i)
            .join(),
          e.n8F2 &&
            Q.internalBinaryWrite(
              e.n8F2,
              n.tag(2, d.LengthDelimited).fork(),
              i
            ).join(),
          e.n8F3 &&
            Ke.internalBinaryWrite(
              e.n8F3,
              n.tag(3, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ve = new Zn(),
    Yn = class extends F {
      constructor() {
        super("n8F1", [
          { no: 168777401, name: "n9F168777401", kind: "message", T: () => Xe },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 168777401:
              r.n9F168777401 = Xe.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n9F168777401
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n9F168777401 &&
          Xe.internalBinaryWrite(
            e.n9F168777401,
            n.tag(168777401, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    z = new Yn(),
    qn = class extends F {
      constructor() {
        super("n8F2", [
          { no: 183314536, name: "n9F183314536", kind: "message", T: () => Ge },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 183314536:
              r.n9F183314536 = Ge.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n9F183314536
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n9F183314536 &&
          Ge.internalBinaryWrite(
            e.n9F183314536,
            n.tag(183314536, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Q = new qn(),
    zn = class extends F {
      constructor() {
        super("n8F3", [
          { no: 1, name: "n8F1", kind: "message", T: () => z },
          { no: 2, name: "n8F2", kind: "message", T: () => Q },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n8F1 = z.internalBinaryRead(e, e.uint32(), i, r.n8F1);
              break;
            case 2:
              r.n8F2 = Q.internalBinaryRead(e, e.uint32(), i, r.n8F2);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n8F1 &&
          z
            .internalBinaryWrite(e.n8F1, n.tag(1, d.LengthDelimited).fork(), i)
            .join(),
          e.n8F2 &&
            Q.internalBinaryWrite(
              e.n8F2,
              n.tag(2, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ke = new zn(),
    Qn = class extends F {
      constructor() {
        super("n9F168777401", [
          { no: 3, name: "n10F3", kind: "message", T: () => Je },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 3:
              r.n10F3 = Je.internalBinaryRead(e, e.uint32(), i, r.n10F3);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n10F3 &&
          Je.internalBinaryWrite(
            e.n10F3,
            n.tag(3, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Xe = new Qn(),
    Hn = class extends F {
      constructor() {
        super("n9F183314536", [{ no: 1, name: "type", kind: "scalar", T: 9 }]);
      }
      create(e) {
        let n = { type: "" };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.type = e.string();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.type !== "" && n.tag(1, d.LengthDelimited).string(e.type);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ge = new Hn(),
    et = class extends F {
      constructor() {
        super("n10F3", [
          {
            no: 172035250,
            name: "n11F172035250",
            kind: "message",
            T: () => Ze,
          },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 172035250:
              r.n11F172035250 = Ze.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n11F172035250
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n11F172035250 &&
          Ze.internalBinaryWrite(
            e.n11F172035250,
            n.tag(172035250, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Je = new et(),
    nt = class extends F {
      constructor() {
        super("n11F172035250", [{ no: 1, name: "type", kind: "scalar", T: 9 }]);
      }
      create(e) {
        let n = { type: "" };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.type = e.string();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.type !== "" && n.tag(1, d.LengthDelimited).string(e.type);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ze = new nt(),
    tt = class extends F {
      constructor() {
        super("Next", [
          { no: 7, name: "a1F7", kind: "message", T: () => Ye },
          { no: 8, name: "a1F8", kind: "message", T: () => qe },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 7:
              r.a1F7 = Ye.internalBinaryRead(e, e.uint32(), i, r.a1F7);
              break;
            case 8:
              r.a1F8 = qe.internalBinaryRead(e, e.uint32(), i, r.a1F8);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.a1F7 &&
          Ye.internalBinaryWrite(
            e.a1F7,
            n.tag(7, d.LengthDelimited).fork(),
            i
          ).join(),
          e.a1F8 &&
            qe
              .internalBinaryWrite(
                e.a1F8,
                n.tag(8, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ei = new tt(),
    it = class extends F {
      constructor() {
        super("a1F7", [
          { no: 51779735, name: "a2F51779735", kind: "message", T: () => ze },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 51779735:
              r.a2F51779735 = ze.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.a2F51779735
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.a2F51779735 &&
          ze
            .internalBinaryWrite(
              e.a2F51779735,
              n.tag(51779735, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ye = new it(),
    rt = class extends F {
      constructor() {
        super("a1F8", [
          { no: 49399797, name: "n2F49399797", kind: "message", T: () => E },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = E.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n2F49399797
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n2F49399797 &&
          E.internalBinaryWrite(
            e.n2F49399797,
            n.tag(49399797, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    qe = new rt(),
    at = class extends F {
      constructor() {
        super("a2F51779735", [
          { no: 1, name: "a3F1", kind: "message", T: () => Qe },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.a3F1 = Qe.internalBinaryRead(e, e.uint32(), i, r.a3F1);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.a3F1 &&
          Qe.internalBinaryWrite(
            e.a3F1,
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ze = new at(),
    st = class extends F {
      constructor() {
        super("a3F1", [
          { no: 49399797, name: "n2F49399797", kind: "message", T: () => E },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = E.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n2F49399797
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n2F49399797 &&
          E.internalBinaryWrite(
            e.n2F49399797,
            n.tag(49399797, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Qe = new st(),
    ot = class extends F {
      constructor() {
        super("Search", [
          { no: 4, name: "s1F4", kind: "message", T: () => He },
          { no: 7, name: "s1F7", kind: "message", T: () => en },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.s1F4 = He.internalBinaryRead(e, e.uint32(), i, r.s1F4);
              break;
            case 7:
              r.s1F7 = en.internalBinaryRead(e, e.uint32(), i, r.s1F7);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.s1F4 &&
          He.internalBinaryWrite(
            e.s1F4,
            n.tag(4, d.LengthDelimited).fork(),
            i
          ).join(),
          e.s1F7 &&
            en
              .internalBinaryWrite(
                e.s1F7,
                n.tag(7, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ni = new ot(),
    lt = class extends F {
      constructor() {
        super("s1F4", [
          { no: 49399797, name: "n2F49399797", kind: "message", T: () => E },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = E.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n2F49399797
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n2F49399797 &&
          E.internalBinaryWrite(
            e.n2F49399797,
            n.tag(49399797, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    He = new lt(),
    ut = class extends F {
      constructor() {
        super("s1F7", [
          { no: 50195462, name: "n4F50195462", kind: "message", T: () => Y },
          { no: 49399797, name: "n2F49399797", kind: "message", T: () => E },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 50195462:
              r.n4F50195462 = Y.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n4F50195462
              );
              break;
            case 49399797:
              r.n2F49399797 = E.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n2F49399797
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n4F50195462 &&
          Y.internalBinaryWrite(
            e.n4F50195462,
            n.tag(50195462, d.LengthDelimited).fork(),
            i
          ).join(),
          e.n2F49399797 &&
            E.internalBinaryWrite(
              e.n2F49399797,
              n.tag(49399797, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    en = new ut(),
    ft = class extends F {
      constructor() {
        super("Shorts", [
          { no: 2, name: "t1F2", kind: "message", repeat: 1, T: () => nn },
        ]);
      }
      create(e) {
        let n = { t1F2: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              r.t1F2.push(nn.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.t1F2.length; r++)
          nn.internalBinaryWrite(
            e.t1F2[r],
            n.tag(2, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ti = new ft(),
    ct = class extends F {
      constructor() {
        super("t1F2", [{ no: 1, name: "n2F1", kind: "message", T: () => tn }]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n2F1 = tn.internalBinaryRead(e, e.uint32(), i, r.n2F1);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n2F1 &&
          tn
            .internalBinaryWrite(e.n2F1, n.tag(1, d.LengthDelimited).fork(), i)
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    nn = new ct(),
    dt = class extends F {
      constructor() {
        super("n2F1", [
          { no: 139608561, name: "n3F139608561", kind: "message", T: () => rn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 139608561:
              r.n3F139608561 = rn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n3F139608561
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n3F139608561 &&
          rn
            .internalBinaryWrite(
              e.n3F139608561,
              n.tag(139608561, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    tn = new dt(),
    ht = class extends F {
      constructor() {
        super("n3F139608561", [
          { no: 8, name: "n4F8", kind: "message", T: () => an },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 8:
              r.n4F8 = an.internalBinaryRead(e, e.uint32(), i, r.n4F8);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n4F8 &&
          an
            .internalBinaryWrite(e.n4F8, n.tag(8, d.LengthDelimited).fork(), i)
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    rn = new ht(),
    pt = class extends F {
      constructor() {
        super("n4F8", [
          { no: 139970731, name: "n4F139970731", kind: "message", T: () => sn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 139970731:
              r.n4F139970731 = sn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.n4F139970731
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.n4F139970731 &&
          sn
            .internalBinaryWrite(
              e.n4F139970731,
              n.tag(139970731, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    an = new pt(),
    yt = class extends F {
      constructor() {
        super("n4F139970731", [{ no: 12, name: "f1", kind: "scalar", T: 5 }]);
      }
      create(e) {
        let n = { f1: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 12:
              r.f1 = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.f1 !== 0 && n.tag(12, d.Varint).int32(e.f1);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    sn = new yt(),
    Ft = class extends F {
      constructor() {
        super("Guide", [
          { no: 4, name: "g1F4", kind: "message", repeat: 1, T: () => on },
          { no: 6, name: "g1F6", kind: "message", repeat: 1, T: () => ln },
        ]);
      }
      create(e) {
        let n = { g1F4: [], g1F6: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.g1F4.push(on.internalBinaryRead(e, e.uint32(), i));
              break;
            case 6:
              r.g1F6.push(ln.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.g1F4.length; r++)
          on.internalBinaryWrite(
            e.g1F4[r],
            n.tag(4, d.LengthDelimited).fork(),
            i
          ).join();
        for (let r = 0; r < e.g1F6.length; r++)
          ln.internalBinaryWrite(
            e.g1F6[r],
            n.tag(6, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ii = new Ft(),
    mt = class extends F {
      constructor() {
        super("g1F4", [
          { no: 117866661, name: "g2F117866661", kind: "message", T: () => H },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 117866661:
              r.g2F117866661 = H.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.g2F117866661
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.g2F117866661 &&
          H.internalBinaryWrite(
            e.g2F117866661,
            n.tag(117866661, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    on = new mt(),
    gt = class extends F {
      constructor() {
        super("g1F6", [
          { no: 117866661, name: "g2F117866661", kind: "message", T: () => H },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 117866661:
              r.g2F117866661 = H.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.g2F117866661
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.g2F117866661 &&
          H.internalBinaryWrite(
            e.g2F117866661,
            n.tag(117866661, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ln = new gt(),
    kt = class extends F {
      constructor() {
        super("g2F117866661", [
          { no: 1, name: "g3F1", kind: "message", repeat: 1, T: () => un },
        ]);
      }
      create(e) {
        let n = { g3F1: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.g3F1.push(un.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.g3F1.length; r++)
          un.internalBinaryWrite(
            e.g3F1[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    H = new kt(),
    wt = class extends F {
      constructor() {
        super("g3F1", [
          { no: 318370163, name: "g4F318370163", kind: "message", T: () => fn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 318370163:
              r.g4F318370163 = fn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.g4F318370163
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.g4F318370163 &&
          fn
            .internalBinaryWrite(
              e.g4F318370163,
              n.tag(318370163, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    un = new wt(),
    bt = class extends F {
      constructor() {
        super("g4F318370163", [{ no: 1, name: "f1", kind: "scalar", T: 9 }]);
      }
      create(e) {
        let n = { f1: "" };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.string();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.f1 !== "" && n.tag(1, d.LengthDelimited).string(e.f1);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    fn = new bt(),
    Bt = class extends F {
      constructor() {
        super("Name", [
          { no: 1, name: "runs", kind: "message", repeat: 1, T: () => cn },
        ]);
      }
      create(e) {
        let n = { runs: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.runs.push(cn.internalBinaryRead(e, e.uint32(), i));
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.runs.length; r++)
          cn.internalBinaryWrite(
            e.runs[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ee = new Bt(),
    Nt = class extends F {
      constructor() {
        super("Name.Runs", [{ no: 1, name: "text", kind: "scalar", T: 9 }]);
      }
      create(e) {
        let n = { text: "" };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.text = e.string();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.text !== "" && n.tag(1, d.LengthDelimited).string(e.text);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    cn = new Nt(),
    Tt = class extends F {
      constructor() {
        super("Player", [
          { no: 7, name: "p1F7", kind: "message", repeat: 1, T: () => gn },
          { no: 2, name: "p1F2", kind: "message", T: () => mn },
          { no: 10, name: "captions", kind: "message", T: () => dn },
        ]);
      }
      create(e) {
        let n = { p1F7: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 7:
              r.p1F7.push(gn.internalBinaryRead(e, e.uint32(), i));
              break;
            case 2:
              r.p1F2 = mn.internalBinaryRead(e, e.uint32(), i, r.p1F2);
              break;
            case 10:
              r.captions = dn.internalBinaryRead(e, e.uint32(), i, r.captions);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.p1F7.length; r++)
          gn.internalBinaryWrite(
            e.p1F7[r],
            n.tag(7, d.LengthDelimited).fork(),
            i
          ).join();
        e.p1F2 &&
          mn
            .internalBinaryWrite(e.p1F2, n.tag(2, d.LengthDelimited).fork(), i)
            .join(),
          e.captions &&
            dn
              .internalBinaryWrite(
                e.captions,
                n.tag(10, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ri = new Tt(),
    xt = class extends F {
      constructor() {
        super("Player.Captions", [
          {
            no: 51621377,
            name: "playerCaptionsTracklistRenderer",
            kind: "message",
            T: () => hn,
          },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 51621377:
              r.playerCaptionsTracklistRenderer = hn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.playerCaptionsTracklistRenderer
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.playerCaptionsTracklistRenderer &&
          hn
            .internalBinaryWrite(
              e.playerCaptionsTracklistRenderer,
              n.tag(51621377, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    dn = new xt(),
    Rt = class extends F {
      constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer", [
          {
            no: 1,
            name: "captionTracks",
            kind: "message",
            repeat: 1,
            T: () => pn,
          },
          {
            no: 2,
            name: "audioTracks",
            kind: "message",
            repeat: 1,
            T: () => yn,
          },
          {
            no: 3,
            name: "translationLanguages",
            kind: "message",
            repeat: 1,
            T: () => Fn,
          },
          {
            no: 4,
            name: "defaultAudioTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
          {
            no: 6,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            jsonName: "defaultAudioTrackIndex",
            opt: !0,
            T: 5,
          },
        ]);
      }
      create(e) {
        let n = {
          captionTracks: [],
          audioTracks: [],
          translationLanguages: [],
        };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.captionTracks.push(pn.internalBinaryRead(e, e.uint32(), i));
              break;
            case 2:
              r.audioTracks.push(yn.internalBinaryRead(e, e.uint32(), i));
              break;
            case 3:
              r.translationLanguages.push(
                Fn.internalBinaryRead(e, e.uint32(), i)
              );
              break;
            case 4:
              r.defaultAudioTrackIndex = e.int32();
              break;
            case 6:
              r.defaultCaptionTrackIndex = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.captionTracks.length; r++)
          pn.internalBinaryWrite(
            e.captionTracks[r],
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        for (let r = 0; r < e.audioTracks.length; r++)
          yn.internalBinaryWrite(
            e.audioTracks[r],
            n.tag(2, d.LengthDelimited).fork(),
            i
          ).join();
        for (let r = 0; r < e.translationLanguages.length; r++)
          Fn.internalBinaryWrite(
            e.translationLanguages[r],
            n.tag(3, d.LengthDelimited).fork(),
            i
          ).join();
        e.defaultAudioTrackIndex !== void 0 &&
          n.tag(4, d.Varint).int32(e.defaultAudioTrackIndex),
          e.defaultCaptionTrackIndex !== void 0 &&
            n.tag(6, d.Varint).int32(e.defaultCaptionTrackIndex);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    hn = new Rt(),
    It = class extends F {
      constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks", [
          { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
          { no: 2, name: "name", kind: "message", T: () => ee },
          { no: 3, name: "vssId", kind: "scalar", T: 9 },
          { no: 4, name: "languageCode", kind: "scalar", T: 9 },
          { no: 5, name: "kind", kind: "scalar", opt: !0, T: 9 },
          { no: 6, name: "rtl", kind: "scalar", opt: !0, T: 8 },
          { no: 7, name: "isTranslatable", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let n = {
          baseUrl: "",
          vssId: "",
          languageCode: "",
          isTranslatable: !1,
        };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.baseUrl = e.string();
              break;
            case 2:
              r.name = ee.internalBinaryRead(e, e.uint32(), i, r.name);
              break;
            case 3:
              r.vssId = e.string();
              break;
            case 4:
              r.languageCode = e.string();
              break;
            case 5:
              r.kind = e.string();
              break;
            case 6:
              r.rtl = e.bool();
              break;
            case 7:
              r.isTranslatable = e.bool();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.baseUrl !== "" && n.tag(1, d.LengthDelimited).string(e.baseUrl),
          e.name &&
            ee
              .internalBinaryWrite(
                e.name,
                n.tag(2, d.LengthDelimited).fork(),
                i
              )
              .join(),
          e.vssId !== "" && n.tag(3, d.LengthDelimited).string(e.vssId),
          e.languageCode !== "" &&
            n.tag(4, d.LengthDelimited).string(e.languageCode),
          e.kind !== void 0 && n.tag(5, d.LengthDelimited).string(e.kind),
          e.rtl !== void 0 && n.tag(6, d.Varint).bool(e.rtl),
          e.isTranslatable !== !1 && n.tag(7, d.Varint).bool(e.isTranslatable);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    pn = new It(),
    Wt = class extends F {
      constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks", [
          {
            no: 2,
            name: "captionTrackIndices",
            kind: "scalar",
            repeat: 2,
            T: 5,
          },
          {
            no: 3,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
          {
            no: 4,
            name: "forcedCaptionTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
          { no: 5, name: "visibility", kind: "scalar", opt: !0, T: 5 },
          { no: 6, name: "hasDefaultTrack", kind: "scalar", opt: !0, T: 8 },
          { no: 7, name: "hasForcedTrack", kind: "scalar", opt: !0, T: 8 },
          { no: 8, name: "audioTrackId", kind: "scalar", opt: !0, T: 9 },
          {
            no: 11,
            name: "captionsInitialState",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
        ]);
      }
      create(e) {
        let n = { captionTrackIndices: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              if (o === d.LengthDelimited)
                for (let N = e.int32() + e.pos; e.pos < N; )
                  r.captionTrackIndices.push(e.int32());
              else r.captionTrackIndices.push(e.int32());
              break;
            case 3:
              r.defaultCaptionTrackIndex = e.int32();
              break;
            case 4:
              r.forcedCaptionTrackIndex = e.int32();
              break;
            case 5:
              r.visibility = e.int32();
              break;
            case 6:
              r.hasDefaultTrack = e.bool();
              break;
            case 7:
              r.hasForcedTrack = e.bool();
              break;
            case 8:
              r.audioTrackId = e.string();
              break;
            case 11:
              r.captionsInitialState = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.captionTrackIndices.length; r++)
          n.tag(2, d.Varint).int32(e.captionTrackIndices[r]);
        e.defaultCaptionTrackIndex !== void 0 &&
          n.tag(3, d.Varint).int32(e.defaultCaptionTrackIndex),
          e.forcedCaptionTrackIndex !== void 0 &&
            n.tag(4, d.Varint).int32(e.forcedCaptionTrackIndex),
          e.visibility !== void 0 && n.tag(5, d.Varint).int32(e.visibility),
          e.hasDefaultTrack !== void 0 &&
            n.tag(6, d.Varint).bool(e.hasDefaultTrack),
          e.hasForcedTrack !== void 0 &&
            n.tag(7, d.Varint).bool(e.hasForcedTrack),
          e.audioTrackId !== void 0 &&
            n.tag(8, d.LengthDelimited).string(e.audioTrackId),
          e.captionsInitialState !== void 0 &&
            n.tag(11, d.Varint).int32(e.captionsInitialState);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    yn = new Wt(),
    Ot = class extends F {
      constructor() {
        super(
          "Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages",
          [
            { no: 1, name: "languageCode", kind: "scalar", T: 9 },
            { no: 2, name: "languageName", kind: "message", T: () => ee },
          ]
        );
      }
      create(e) {
        let n = { languageCode: "" };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.languageCode = e.string();
              break;
            case 2:
              r.languageName = ee.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.languageName
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.languageCode !== "" &&
          n.tag(1, d.LengthDelimited).string(e.languageCode),
          e.languageName &&
            ee
              .internalBinaryWrite(
                e.languageName,
                n.tag(2, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Fn = new Ot(),
    Ut = class extends F {
      constructor() {
        super("p1F2", [
          { no: 21, name: "p2F21", kind: "message", T: () => wn },
          { no: 11, name: "p2F11", kind: "message", T: () => bn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 21:
              r.p2F21 = wn.internalBinaryRead(e, e.uint32(), i, r.p2F21);
              break;
            case 11:
              r.p2F11 = bn.internalBinaryRead(e, e.uint32(), i, r.p2F11);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.p2F21 &&
          wn
            .internalBinaryWrite(
              e.p2F21,
              n.tag(21, d.LengthDelimited).fork(),
              i
            )
            .join(),
          e.p2F11 &&
            bn
              .internalBinaryWrite(
                e.p2F11,
                n.tag(11, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    mn = new Ut(),
    Ct = class extends F {
      constructor() {
        super("p1F7", [
          { no: 84813246, name: "p2F84813246", kind: "message", T: () => kn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 84813246:
              r.p2F84813246 = kn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.p2F84813246
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.p2F84813246 &&
          kn
            .internalBinaryWrite(
              e.p2F84813246,
              n.tag(84813246, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    gn = new Ct(),
    Pt = class extends F {
      constructor() {
        super("p2F84813246", [{ no: 3, name: "v", kind: "scalar", T: 5 }]);
      }
      create(e) {
        let n = { v: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 3:
              r.v = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.v !== 0 && n.tag(3, d.Varint).int32(e.v);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    kn = new Pt(),
    Et = class extends F {
      constructor() {
        super("p2F21", [
          { no: 151635310, name: "p3F151635310", kind: "message", T: () => Bn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 151635310:
              r.p3F151635310 = Bn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.p3F151635310
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.p3F151635310 &&
          Bn.internalBinaryWrite(
            e.p3F151635310,
            n.tag(151635310, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    wn = new Et(),
    $t = class extends F {
      constructor() {
        super("p2F11", [
          { no: 64657230, name: "p3F64657230", kind: "message", T: () => Nn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 64657230:
              r.p3F64657230 = Nn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.p3F64657230
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.p3F64657230 &&
          Nn.internalBinaryWrite(
            e.p3F64657230,
            n.tag(64657230, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    bn = new $t(),
    Lt = class extends F {
      constructor() {
        super("p3F151635310", [{ no: 1, name: "pip", kind: "scalar", T: 5 }]);
      }
      create(e) {
        let n = { pip: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.pip = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.pip !== 0 && n.tag(1, d.Varint).int32(e.pip);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Bn = new Lt(),
    Dt = class extends F {
      constructor() {
        super("p3F64657230", [
          { no: 1, name: "backPlay", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let n = { backPlay: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.backPlay = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.backPlay !== 0 && n.tag(1, d.Varint).int32(e.backPlay);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Nn = new Dt(),
    jt = class extends F {
      constructor() {
        super("Setting", [
          { no: 6, name: "st1F6", kind: "message", repeat: 1, T: () => Tn },
          { no: 7, name: "st1F7", kind: "message", T: () => xn },
          { no: 10, name: "st1F10", kind: "message", T: () => Rn },
        ]);
      }
      create(e) {
        let n = { st1F6: [] };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 6:
              r.st1F6.push(Tn.internalBinaryRead(e, e.uint32(), i));
              break;
            case 7:
              r.st1F7 = xn.internalBinaryRead(e, e.uint32(), i, r.st1F7);
              break;
            case 10:
              r.st1F10 = Rn.internalBinaryRead(e, e.uint32(), i, r.st1F10);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.st1F6.length; r++)
          Tn.internalBinaryWrite(
            e.st1F6[r],
            n.tag(6, d.LengthDelimited).fork(),
            i
          ).join();
        e.st1F7 &&
          xn
            .internalBinaryWrite(e.st1F7, n.tag(7, d.LengthDelimited).fork(), i)
            .join(),
          e.st1F10 &&
            Rn.internalBinaryWrite(
              e.st1F10,
              n.tag(10, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ai = new jt(),
    St = class extends F {
      constructor() {
        super("st1F6", [
          { no: 88478200, name: "st2F88478200", kind: "message", T: () => te },
          { no: 66930374, name: "st2F66930374", kind: "message", T: () => In },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 88478200:
              r.st2F88478200 = te.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.st2F88478200
              );
              break;
            case 66930374:
              r.st2F66930374 = In.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.st2F66930374
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st2F88478200 &&
          te
            .internalBinaryWrite(
              e.st2F88478200,
              n.tag(88478200, d.LengthDelimited).fork(),
              i
            )
            .join(),
          e.st2F66930374 &&
            In.internalBinaryWrite(
              e.st2F66930374,
              n.tag(66930374, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Tn = new St(),
    _t = class extends F {
      constructor() {
        super("st1F7", [
          { no: 88478200, name: "st2F88478200", kind: "message", T: () => te },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 88478200:
              r.st2F88478200 = te.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.st2F88478200
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st2F88478200 &&
          te
            .internalBinaryWrite(
              e.st2F88478200,
              n.tag(88478200, d.LengthDelimited).fork(),
              i
            )
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    xn = new _t(),
    Vt = class extends F {
      constructor() {
        super("st1F10", [
          { no: 4, name: "st2F4", kind: "message", T: () => ne },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.st2F4 = ne.internalBinaryRead(e, e.uint32(), i, r.st2F4);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st2F4 &&
          ne
            .internalBinaryWrite(e.st2F4, n.tag(4, d.LengthDelimited).fork(), i)
            .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Rn = new Vt(),
    Mt = class extends F {
      constructor() {
        super("st2F4", [
          { no: 1, name: "f1", kind: "scalar", T: 4 },
          { no: 2, name: "f2", kind: "scalar", T: 7 },
          { no: 3, name: "f3", kind: "scalar", T: 7 },
        ]);
      }
      create(e) {
        let n = { f1: "0", f2: 0, f3: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.uint64().toString();
              break;
            case 2:
              r.f2 = e.fixed32();
              break;
            case 3:
              r.f3 = e.fixed32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.f1 !== "0" && n.tag(1, d.Varint).uint64(e.f1),
          e.f2 !== 0 && n.tag(2, d.Bit32).fixed32(e.f2),
          e.f3 !== 0 && n.tag(3, d.Bit32).fixed32(e.f3);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    ne = new Mt(),
    At = class extends F {
      constructor() {
        super("st2F88478200", [
          { no: 2, name: "f2", kind: "scalar", T: 5 },
          { no: 3, name: "f3", kind: "scalar", T: 5 },
          { no: 5, name: "st3F5", kind: "message", T: () => M },
          { no: 6, name: "f6", kind: "scalar", T: 5 },
          { no: 7, name: "f7", kind: "scalar", T: 5 },
          { no: 8, name: "f8", kind: "scalar", T: 5 },
          { no: 9, name: "f9", kind: "scalar", T: 5 },
          { no: 10, name: "f10", kind: "scalar", T: 5 },
          { no: 12, name: "f12", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let n = { f2: 0, f3: 0, f6: 0, f7: 0, f8: 0, f9: 0, f10: 0, f12: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              r.f2 = e.int32();
              break;
            case 3:
              r.f3 = e.int32();
              break;
            case 5:
              r.st3F5 = M.internalBinaryRead(e, e.uint32(), i, r.st3F5);
              break;
            case 6:
              r.f6 = e.int32();
              break;
            case 7:
              r.f7 = e.int32();
              break;
            case 8:
              r.f8 = e.int32();
              break;
            case 9:
              r.f9 = e.int32();
              break;
            case 10:
              r.f10 = e.int32();
              break;
            case 12:
              r.f12 = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.f2 !== 0 && n.tag(2, d.Varint).int32(e.f2),
          e.f3 !== 0 && n.tag(3, d.Varint).int32(e.f3),
          e.st3F5 &&
            M.internalBinaryWrite(
              e.st3F5,
              n.tag(5, d.LengthDelimited).fork(),
              i
            ).join(),
          e.f6 !== 0 && n.tag(6, d.Varint).int32(e.f6),
          e.f7 !== 0 && n.tag(7, d.Varint).int32(e.f7),
          e.f8 !== 0 && n.tag(8, d.Varint).int32(e.f8),
          e.f9 !== 0 && n.tag(9, d.Varint).int32(e.f9),
          e.f10 !== 0 && n.tag(10, d.Varint).int32(e.f10),
          e.f12 !== 0 && n.tag(12, d.Varint).int32(e.f12);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    te = new At(),
    vt = class extends F {
      constructor() {
        super("st2F66930374", [
          { no: 3, name: "st3F3", kind: "message", repeat: 1, T: () => Wn },
          { no: 4, name: "num", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let n = { st3F3: [], num: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 3:
              r.st3F3.push(Wn.internalBinaryRead(e, e.uint32(), i));
              break;
            case 4:
              r.num = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        for (let r = 0; r < e.st3F3.length; r++)
          Wn.internalBinaryWrite(
            e.st3F3[r],
            n.tag(3, d.LengthDelimited).fork(),
            i
          ).join();
        e.num !== 0 && n.tag(4, d.Varint).int32(e.num);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    In = new vt(),
    Kt = class extends F {
      constructor() {
        super("st3F1", [
          { no: 1, name: "st4F1", kind: "message", T: () => On },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.st4F1 = On.internalBinaryRead(e, e.uint32(), i, r.st4F1);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st4F1 &&
          On.internalBinaryWrite(
            e.st4F1,
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Ka = new Kt(),
    Xt = class extends F {
      constructor() {
        super("st3F3", [
          { no: 61331416, name: "st4F61331416", kind: "message", T: () => Un },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 61331416:
              r.st4F61331416 = Un.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.st4F61331416
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st4F61331416 &&
          Un.internalBinaryWrite(
            e.st4F61331416,
            n.tag(61331416, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Wn = new Xt(),
    Gt = class extends F {
      constructor() {
        super("st3F5", [
          { no: 1, name: "f1", kind: "scalar", T: 5 },
          { no: 2, name: "f2", kind: "scalar", T: 5 },
          { no: 3, name: "f3", kind: "scalar", T: 5 },
          { no: 4, name: "st2F4", kind: "message", T: () => ne },
        ]);
      }
      create(e) {
        let n = { f1: 0, f2: 0, f3: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.int32();
              break;
            case 2:
              r.f2 = e.int32();
              break;
            case 3:
              r.f3 = e.int32();
              break;
            case 4:
              r.st2F4 = ne.internalBinaryRead(e, e.uint32(), i, r.st2F4);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.f1 !== 0 && n.tag(1, d.Varint).int32(e.f1),
          e.f2 !== 0 && n.tag(2, d.Varint).int32(e.f2),
          e.f3 !== 0 && n.tag(3, d.Varint).int32(e.f3),
          e.st2F4 &&
            ne
              .internalBinaryWrite(
                e.st2F4,
                n.tag(4, d.LengthDelimited).fork(),
                i
              )
              .join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    M = new Gt(),
    Jt = class extends F {
      constructor() {
        super("st4F1", [{ no: 1, name: "title", kind: "scalar", T: 9 }]);
      }
      create(e) {
        let n = { title: "" };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.title = e.string();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.title !== "" && n.tag(1, d.LengthDelimited).string(e.title);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    On = new Jt(),
    Zt = class extends F {
      constructor() {
        super("st4F61331416", [
          { no: 5, name: "st5F5", kind: "message", T: () => J },
          { no: 6, name: "st5F6", kind: "message", T: () => J },
          { no: 13, name: "st3F5", kind: "message", T: () => M },
          { no: 15, name: "f15", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let n = { f15: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 5:
              r.st5F5 = J.internalBinaryRead(e, e.uint32(), i, r.st5F5);
              break;
            case 6:
              r.st5F6 = J.internalBinaryRead(e, e.uint32(), i, r.st5F6);
              break;
            case 13:
              r.st3F5 = M.internalBinaryRead(e, e.uint32(), i, r.st3F5);
              break;
            case 15:
              r.f15 = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st5F5 &&
          J.internalBinaryWrite(
            e.st5F5,
            n.tag(5, d.LengthDelimited).fork(),
            i
          ).join(),
          e.st5F6 &&
            J.internalBinaryWrite(
              e.st5F6,
              n.tag(6, d.LengthDelimited).fork(),
              i
            ).join(),
          e.st3F5 &&
            M.internalBinaryWrite(
              e.st3F5,
              n.tag(13, d.LengthDelimited).fork(),
              i
            ).join(),
          e.f15 !== 0 && n.tag(15, d.Varint).int32(e.f15);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Un = new Zt(),
    Yt = class extends F {
      constructor() {
        super("st5F5", [
          { no: 2, name: "st3F5", kind: "message", T: () => M },
          { no: 81212182, name: "st6F81212182", kind: "message", T: () => Cn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              r.st3F5 = M.internalBinaryRead(e, e.uint32(), i, r.st3F5);
              break;
            case 81212182:
              r.st6F81212182 = Cn.internalBinaryRead(
                e,
                e.uint32(),
                i,
                r.st6F81212182
              );
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st3F5 &&
          M.internalBinaryWrite(
            e.st3F5,
            n.tag(2, d.LengthDelimited).fork(),
            i
          ).join(),
          e.st6F81212182 &&
            Cn.internalBinaryWrite(
              e.st6F81212182,
              n.tag(81212182, d.LengthDelimited).fork(),
              i
            ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    J = new Yt(),
    qt = class extends F {
      constructor() {
        super("st6F81212182", [
          { no: 1, name: "st7F1", kind: "message", T: () => Pn },
        ]);
      }
      create(e) {
        let n = {};
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.st7F1 = Pn.internalBinaryRead(e, e.uint32(), i, r.st7F1);
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st7F1 &&
          Pn.internalBinaryWrite(
            e.st7F1,
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join();
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Cn = new qt(),
    zt = class extends F {
      constructor() {
        super("st7F1", [
          { no: 1, name: "st8F1", kind: "message", T: () => En },
          { no: 3, name: "f3", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let n = { f3: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.st8F1 = En.internalBinaryRead(e, e.uint32(), i, r.st8F1);
              break;
            case 3:
              r.f3 = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.st8F1 &&
          En.internalBinaryWrite(
            e.st8F1,
            n.tag(1, d.LengthDelimited).fork(),
            i
          ).join(),
          e.f3 !== 0 && n.tag(3, d.Varint).int32(e.f3);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    Pn = new zt(),
    Qt = class extends F {
      constructor() {
        super("st8F1", [{ no: 1, name: "f1", kind: "scalar", T: 5 }]);
      }
      create(e) {
        let n = { f1: 0 };
        return (
          globalThis.Object.defineProperty(n, y, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && p(this, n, e),
          n
        );
      }
      internalBinaryRead(e, n, i, t) {
        let r = t != null ? t : this.create(),
          u = e.pos + n;
        for (; e.pos < u; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.int32();
              break;
            default:
              let a = i.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let f = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, f);
          }
        }
        return r;
      }
      internalBinaryWrite(e, n, i) {
        e.f1 !== 0 && n.tag(1, d.Varint).int32(e.f1);
        let t = i.writeUnknownFields;
        return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
      }
    },
    En = new Qt();
  var X = class {
      constructor(e, n) {
        this.decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
        C.log(n),
          (this.whiteNo = e.whiteNo),
          (this.blackNo = e.blackNo),
          (this.whiteEml = e.whiteEml),
          (this.blackEml = e.blackEml);
      }
      save() {
        if (this.needSave) {
          C.log("Update Config");
          let e = {
            whiteNo: this.whiteNo,
            blackNo: this.blackNo,
            whiteEml: this.whiteEml,
            blackEml: this.blackEml,
          };
          C.setjson(e, "YouTubeWhiteStr");
        }
      }
      done() {
        this.save(),
          this.needProcess
            ? (this.toBinary(),
              C.log("Handle"),
              C.isQuanX()
                ? C.done({
                    bodyBytes: this.body.buffer.slice(
                      this.body.byteOffset,
                      this.body.byteLength + this.body.byteOffset
                    ),
                  })
                : C.done({ body: this.body }))
            : C.done();
      }
      iterate(e = {}, n, i, t) {
        let r = [];
        for (r.push(e); r.length; ) {
          let u = r.pop();
          for (let s of Object.keys(u))
            s === n
              ? i(u, r)
              : typeof u[s] == "object" &&
                (r.push(u[s]), typeof t == "function" && t(u, r));
        }
      }
      isAdvertise(e) {
        let n = c.list(e)[0],
          i = n ? this.handleUnknownField(n) : this.handleKnownField(e);
        return i && (this.needProcess = !0), i;
      }
      isUpload(e) {
        let n = e == null ? void 0 : e.g4F318370163;
        return n && (this.needProcess = !0), n;
      }
      handleUnknownField(e) {
        let n = e.no;
        if (this.whiteNo.includes(n)) return !1;
        if (this.blackNo.includes(n)) return !0;
        let t = this.decoder.decode(e.data).includes("pagead");
        return (
          t ? this.blackNo.push(n) : this.whiteNo.push(n),
          (this.needSave = !0),
          C.log("UnknownField:" + n + ": " + t),
          t
        );
      }
      handleKnownField(e) {
        let n = !1,
          i = !0,
          t = "";
        return (
          this.iterate(e, "type", (r, u) => {
            (t = r.type.split("|")[0]),
              this.whiteEml.includes(t)
                ? (n = !1)
                : this.blackEml.includes(t) || /shorts(?!_pivot_item)/.test(t)
                ? (n = !0)
                : (i = !1),
              i && (u.length = 0);
          }),
          i ||
            (this.iterate(
              e,
              "type",
              () => {},
              (r, u) => {
                for (let s of c.list(r))
                  if (
                    s.data.length > 1e3 &&
                    ((n = this.decoder.decode(s.data).includes("pagead")), n)
                  ) {
                    u.length = 0;
                    break;
                  }
              }
            ),
            n ? this.blackEml.push(t) : this.whiteEml.push(t),
            (this.needSave = !0)),
          n
        );
      }
    },
    ie = class extends X {
      constructor(e, n = "Browse") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = Ht.fromBinary(e);
      }
      pure() {
        this.iterate(this.message, "n5F1", (e) => {
          var n;
          for (
            let i = ((n = e.n5F1) == null ? void 0 : n.length) - 1;
            i >= 0;
            i--
          )
            this.isAdvertise(e.n5F1[i]) && e.n5F1.splice(i, 1);
        });
      }
      toBinary() {
        this.body = Ht.toBinary(this.message);
      }
    },
    Be = class extends ie {
      constructor(e, n = "Next") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = ei.fromBinary(e);
      }
      toBinary() {
        this.body = ei.toBinary(this.message);
      }
    },
    Ne = class extends X {
      constructor(e, n = "Player") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = ri.fromBinary(e);
      }
      pure() {
        var i, t, r, u, s;
        (i = this.message.p1F7) != null &&
          i.length &&
          (this.message.p1F7.length = 0);
        let e =
          (u =
            (r = (t = this.message) == null ? void 0 : t.p1F2) == null
              ? void 0
              : r.p2F21) == null
            ? void 0
            : u.p3F151635310;
        typeof e == "object" && (e.pip = 1);
        let n = { p2F11: { p3F64657230: { backPlay: 1 } } };
        typeof ((s = this.message) == null ? void 0 : s.p1F2) == "object" &&
          Object.assign(this.message.p1F2, n),
          this.iterate(this.message, "captionTracks", (o, a) => {
            let f = o.captionTracks;
            if (Array.isArray(f)) for (let N of f) N.isTranslatable = !0;
            (o.translationLanguages = [
              {
                languageCode: "sq",
                languageName: {
                  runs: [{ text: "\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "ak",
                languageName: { runs: [{ text: "\u963F\u80AF\u8BED" }] },
              },
              {
                languageCode: "ar",
                languageName: { runs: [{ text: "\u963F\u62C9\u4F2F\u8BED" }] },
              },
              {
                languageCode: "am",
                languageName: {
                  runs: [{ text: "\u963F\u59C6\u54C8\u62C9\u8BED" }],
                },
              },
              {
                languageCode: "as",
                languageName: { runs: [{ text: "\u963F\u8428\u59C6\u8BED" }] },
              },
              {
                languageCode: "az",
                languageName: {
                  runs: [{ text: "\u963F\u585E\u62DC\u7586\u8BED" }],
                },
              },
              {
                languageCode: "ee",
                languageName: { runs: [{ text: "\u57C3\u7EF4\u8BED" }] },
              },
              {
                languageCode: "ay",
                languageName: { runs: [{ text: "\u827E\u9A6C\u62C9\u8BED" }] },
              },
              {
                languageCode: "ga",
                languageName: { runs: [{ text: "\u7231\u5C14\u5170\u8BED" }] },
              },
              {
                languageCode: "et",
                languageName: {
                  runs: [{ text: "\u7231\u6C99\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "or",
                languageName: { runs: [{ text: "\u5965\u91CC\u4E9A\u8BED" }] },
              },
              {
                languageCode: "om",
                languageName: { runs: [{ text: "\u5965\u7F57\u83AB\u8BED" }] },
              },
              {
                languageCode: "eu",
                languageName: { runs: [{ text: "\u5DF4\u65AF\u514B\u8BED" }] },
              },
              {
                languageCode: "be",
                languageName: {
                  runs: [{ text: "\u767D\u4FC4\u7F57\u65AF\u8BED" }],
                },
              },
              {
                languageCode: "bg",
                languageName: {
                  runs: [{ text: "\u4FDD\u52A0\u5229\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "nso",
                languageName: { runs: [{ text: "\u5317\u7D22\u6258\u8BED" }] },
              },
              {
                languageCode: "is",
                languageName: { runs: [{ text: "\u51B0\u5C9B\u8BED" }] },
              },
              {
                languageCode: "pl",
                languageName: { runs: [{ text: "\u6CE2\u5170\u8BED" }] },
              },
              {
                languageCode: "bs",
                languageName: {
                  runs: [{ text: "\u6CE2\u65AF\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "fa",
                languageName: { runs: [{ text: "\u6CE2\u65AF\u8BED" }] },
              },
              {
                languageCode: "bho",
                languageName: {
                  runs: [{ text: "\u535A\u6770\u666E\u5C14\u8BED" }],
                },
              },
              {
                languageCode: "ts",
                languageName: { runs: [{ text: "\u806A\u52A0\u8BED" }] },
              },
              {
                languageCode: "tt",
                languageName: { runs: [{ text: "\u9791\u977C\u8BED" }] },
              },
              {
                languageCode: "da",
                languageName: { runs: [{ text: "\u4E39\u9EA6\u8BED" }] },
              },
              {
                languageCode: "de",
                languageName: { runs: [{ text: "\u5FB7\u8BED" }] },
              },
              {
                languageCode: "dv",
                languageName: { runs: [{ text: "\u8FEA\u7EF4\u5E0C\u8BED" }] },
              },
              {
                languageCode: "ru",
                languageName: { runs: [{ text: "\u4FC4\u8BED" }] },
              },
              {
                languageCode: "fr",
                languageName: { runs: [{ text: "\u6CD5\u8BED" }] },
              },
              {
                languageCode: "sa",
                languageName: { runs: [{ text: "\u68B5\u8BED" }] },
              },
              {
                languageCode: "fil",
                languageName: { runs: [{ text: "\u83F2\u5F8B\u5BBE\u8BED" }] },
              },
              {
                languageCode: "fi",
                languageName: { runs: [{ text: "\u82AC\u5170\u8BED" }] },
              },
              {
                languageCode: "km",
                languageName: { runs: [{ text: "\u9AD8\u68C9\u8BED" }] },
              },
              {
                languageCode: "ka",
                languageName: {
                  runs: [{ text: "\u683C\u9C81\u5409\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "gu",
                languageName: {
                  runs: [{ text: "\u53E4\u5409\u62C9\u7279\u8BED" }],
                },
              },
              {
                languageCode: "gn",
                languageName: { runs: [{ text: "\u74DC\u62C9\u5C3C\u8BED" }] },
              },
              {
                languageCode: "kk",
                languageName: { runs: [{ text: "\u54C8\u8428\u514B\u8BED" }] },
              },
              {
                languageCode: "ht",
                languageName: {
                  runs: [
                    { text: "\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED" },
                  ],
                },
              },
              {
                languageCode: "ko",
                languageName: { runs: [{ text: "\u97E9\u8BED" }] },
              },
              {
                languageCode: "ha",
                languageName: { runs: [{ text: "\u8C6A\u8428\u8BED" }] },
              },
              {
                languageCode: "nl",
                languageName: { runs: [{ text: "\u8377\u5170\u8BED" }] },
              },
              {
                languageCode: "gl",
                languageName: {
                  runs: [{ text: "\u52A0\u5229\u897F\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "ca",
                languageName: {
                  runs: [{ text: "\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "cs",
                languageName: { runs: [{ text: "\u6377\u514B\u8BED" }] },
              },
              {
                languageCode: "kn",
                languageName: { runs: [{ text: "\u5361\u7EB3\u8FBE\u8BED" }] },
              },
              {
                languageCode: "ky",
                languageName: {
                  runs: [{ text: "\u67EF\u5C14\u514B\u5B5C\u8BED" }],
                },
              },
              {
                languageCode: "xh",
                languageName: { runs: [{ text: "\u79D1\u8428\u8BED" }] },
              },
              {
                languageCode: "co",
                languageName: { runs: [{ text: "\u79D1\u897F\u5609\u8BED" }] },
              },
              {
                languageCode: "hr",
                languageName: {
                  runs: [{ text: "\u514B\u7F57\u5730\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "qu",
                languageName: { runs: [{ text: "\u514B\u4E18\u4E9A\u8BED" }] },
              },
              {
                languageCode: "ku",
                languageName: { runs: [{ text: "\u5E93\u5C14\u5FB7\u8BED" }] },
              },
              {
                languageCode: "la",
                languageName: { runs: [{ text: "\u62C9\u4E01\u8BED" }] },
              },
              {
                languageCode: "lv",
                languageName: {
                  runs: [{ text: "\u62C9\u8131\u7EF4\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "lo",
                languageName: { runs: [{ text: "\u8001\u631D\u8BED" }] },
              },
              {
                languageCode: "lt",
                languageName: { runs: [{ text: "\u7ACB\u9676\u5B9B\u8BED" }] },
              },
              {
                languageCode: "ln",
                languageName: { runs: [{ text: "\u6797\u52A0\u62C9\u8BED" }] },
              },
              {
                languageCode: "lg",
                languageName: { runs: [{ text: "\u5362\u5E72\u8FBE\u8BED" }] },
              },
              {
                languageCode: "lb",
                languageName: { runs: [{ text: "\u5362\u68EE\u5821\u8BED" }] },
              },
              {
                languageCode: "rw",
                languageName: { runs: [{ text: "\u5362\u65FA\u8FBE\u8BED" }] },
              },
              {
                languageCode: "ro",
                languageName: {
                  runs: [{ text: "\u7F57\u9A6C\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "mt",
                languageName: { runs: [{ text: "\u9A6C\u8033\u4ED6\u8BED" }] },
              },
              {
                languageCode: "mr",
                languageName: { runs: [{ text: "\u9A6C\u62C9\u5730\u8BED" }] },
              },
              {
                languageCode: "mg",
                languageName: {
                  runs: [{ text: "\u9A6C\u62C9\u52A0\u65AF\u8BED" }],
                },
              },
              {
                languageCode: "ml",
                languageName: {
                  runs: [{ text: "\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED" }],
                },
              },
              {
                languageCode: "ms",
                languageName: { runs: [{ text: "\u9A6C\u6765\u8BED" }] },
              },
              {
                languageCode: "mk",
                languageName: { runs: [{ text: "\u9A6C\u5176\u987F\u8BED" }] },
              },
              {
                languageCode: "mi",
                languageName: { runs: [{ text: "\u6BDB\u5229\u8BED" }] },
              },
              {
                languageCode: "mn",
                languageName: { runs: [{ text: "\u8499\u53E4\u8BED" }] },
              },
              {
                languageCode: "bn",
                languageName: { runs: [{ text: "\u5B5F\u52A0\u62C9\u8BED" }] },
              },
              {
                languageCode: "my",
                languageName: { runs: [{ text: "\u7F05\u7538\u8BED" }] },
              },
              {
                languageCode: "hmn",
                languageName: { runs: [{ text: "\u82D7\u8BED" }] },
              },
              {
                languageCode: "af",
                languageName: {
                  runs: [{ text: "\u5357\u975E\u8377\u5170\u8BED" }],
                },
              },
              {
                languageCode: "st",
                languageName: { runs: [{ text: "\u5357\u7D22\u6258\u8BED" }] },
              },
              {
                languageCode: "ne",
                languageName: { runs: [{ text: "\u5C3C\u6CCA\u5C14\u8BED" }] },
              },
              {
                languageCode: "no",
                languageName: { runs: [{ text: "\u632A\u5A01\u8BED" }] },
              },
              {
                languageCode: "pa",
                languageName: { runs: [{ text: "\u65C1\u906E\u666E\u8BED" }] },
              },
              {
                languageCode: "pt",
                languageName: { runs: [{ text: "\u8461\u8404\u7259\u8BED" }] },
              },
              {
                languageCode: "ps",
                languageName: { runs: [{ text: "\u666E\u4EC0\u56FE\u8BED" }] },
              },
              {
                languageCode: "ny",
                languageName: { runs: [{ text: "\u9F50\u5207\u74E6\u8BED" }] },
              },
              {
                languageCode: "ja",
                languageName: { runs: [{ text: "\u65E5\u8BED" }] },
              },
              {
                languageCode: "sv",
                languageName: { runs: [{ text: "\u745E\u5178\u8BED" }] },
              },
              {
                languageCode: "sm",
                languageName: { runs: [{ text: "\u8428\u6469\u4E9A\u8BED" }] },
              },
              {
                languageCode: "sr",
                languageName: {
                  runs: [{ text: "\u585E\u5C14\u7EF4\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "si",
                languageName: { runs: [{ text: "\u50E7\u4F3D\u7F57\u8BED" }] },
              },
              {
                languageCode: "sn",
                languageName: { runs: [{ text: "\u7ECD\u7EB3\u8BED" }] },
              },
              {
                languageCode: "eo",
                languageName: { runs: [{ text: "\u4E16\u754C\u8BED" }] },
              },
              {
                languageCode: "sk",
                languageName: {
                  runs: [{ text: "\u65AF\u6D1B\u4F10\u514B\u8BED" }],
                },
              },
              {
                languageCode: "sl",
                languageName: {
                  runs: [{ text: "\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "sw",
                languageName: {
                  runs: [{ text: "\u65AF\u74E6\u5E0C\u91CC\u8BED" }],
                },
              },
              {
                languageCode: "gd",
                languageName: {
                  runs: [{ text: "\u82CF\u683C\u5170\u76D6\u5C14\u8BED" }],
                },
              },
              {
                languageCode: "ceb",
                languageName: { runs: [{ text: "\u5BBF\u52A1\u8BED" }] },
              },
              {
                languageCode: "so",
                languageName: { runs: [{ text: "\u7D22\u9A6C\u91CC\u8BED" }] },
              },
              {
                languageCode: "tg",
                languageName: { runs: [{ text: "\u5854\u5409\u514B\u8BED" }] },
              },
              {
                languageCode: "te",
                languageName: { runs: [{ text: "\u6CF0\u5362\u56FA\u8BED" }] },
              },
              {
                languageCode: "ta",
                languageName: { runs: [{ text: "\u6CF0\u7C73\u5C14\u8BED" }] },
              },
              {
                languageCode: "th",
                languageName: { runs: [{ text: "\u6CF0\u8BED" }] },
              },
              {
                languageCode: "ti",
                languageName: {
                  runs: [{ text: "\u63D0\u683C\u5229\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "tr",
                languageName: { runs: [{ text: "\u571F\u8033\u5176\u8BED" }] },
              },
              {
                languageCode: "tk",
                languageName: { runs: [{ text: "\u571F\u5E93\u66FC\u8BED" }] },
              },
              {
                languageCode: "cy",
                languageName: { runs: [{ text: "\u5A01\u5C14\u58EB\u8BED" }] },
              },
              {
                languageCode: "ug",
                languageName: { runs: [{ text: "\u7EF4\u543E\u5C14\u8BED" }] },
              },
              {
                languageCode: "und",
                languageName: { runs: [{ text: "\u672A\u77E5\u8BED\u8A00" }] },
              },
              {
                languageCode: "ur",
                languageName: { runs: [{ text: "\u4E4C\u5C14\u90FD\u8BED" }] },
              },
              {
                languageCode: "uk",
                languageName: { runs: [{ text: "\u4E4C\u514B\u5170\u8BED" }] },
              },
              {
                languageCode: "uz",
                languageName: {
                  runs: [{ text: "\u4E4C\u5179\u522B\u514B\u8BED" }],
                },
              },
              {
                languageCode: "es",
                languageName: { runs: [{ text: "\u897F\u73ED\u7259\u8BED" }] },
              },
              {
                languageCode: "fy",
                languageName: {
                  runs: [{ text: "\u897F\u5F17\u91CC\u897F\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "iw",
                languageName: { runs: [{ text: "\u5E0C\u4F2F\u6765\u8BED" }] },
              },
              {
                languageCode: "el",
                languageName: { runs: [{ text: "\u5E0C\u814A\u8BED" }] },
              },
              {
                languageCode: "haw",
                languageName: { runs: [{ text: "\u590F\u5A01\u5937\u8BED" }] },
              },
              {
                languageCode: "sd",
                languageName: { runs: [{ text: "\u4FE1\u5FB7\u8BED" }] },
              },
              {
                languageCode: "hu",
                languageName: { runs: [{ text: "\u5308\u7259\u5229\u8BED" }] },
              },
              {
                languageCode: "su",
                languageName: { runs: [{ text: "\u5DFD\u4ED6\u8BED" }] },
              },
              {
                languageCode: "hy",
                languageName: {
                  runs: [{ text: "\u4E9A\u7F8E\u5C3C\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "ig",
                languageName: { runs: [{ text: "\u4F0A\u535A\u8BED" }] },
              },
              {
                languageCode: "it",
                languageName: { runs: [{ text: "\u610F\u5927\u5229\u8BED" }] },
              },
              {
                languageCode: "yi",
                languageName: { runs: [{ text: "\u610F\u7B2C\u7EEA\u8BED" }] },
              },
              {
                languageCode: "hi",
                languageName: { runs: [{ text: "\u5370\u5730\u8BED" }] },
              },
              {
                languageCode: "id",
                languageName: {
                  runs: [{ text: "\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED" }],
                },
              },
              {
                languageCode: "en",
                languageName: { runs: [{ text: "\u82F1\u8BED" }] },
              },
              {
                languageCode: "yo",
                languageName: { runs: [{ text: "\u7EA6\u9C81\u5DF4\u8BED" }] },
              },
              {
                languageCode: "vi",
                languageName: { runs: [{ text: "\u8D8A\u5357\u8BED" }] },
              },
              {
                languageCode: "jv",
                languageName: { runs: [{ text: "\u722A\u54C7\u8BED" }] },
              },
              {
                languageCode: "zh-Hant",
                languageName: {
                  runs: [{ text: "\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09" }],
                },
              },
              {
                languageCode: "zh-Hans",
                languageName: {
                  runs: [{ text: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09" }],
                },
              },
              {
                languageCode: "zu",
                languageName: { runs: [{ text: "\u7956\u9C81\u8BED" }] },
              },
              {
                languageCode: "kri",
                languageName: { runs: [{ text: "Kri" }] },
              },
            ]),
              (a.length = 0);
          }),
          (this.needProcess = !0);
      }
      toBinary() {
        this.body = ri.toBinary(this.message);
      }
    },
    Te = class extends ie {
      constructor(e, n = "Search") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = ni.fromBinary(e);
      }
      toBinary() {
        this.body = ni.toBinary(this.message);
      }
    },
    xe = class extends X {
      constructor(e, n = "Shorts") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = ti.fromBinary(e);
      }
      pure() {
        var n, i, t;
        let e = (n = this.message.t1F2) == null ? void 0 : n.length;
        if (e)
          for (let r = e - 1; r >= 0; r--)
            ((t =
              (i = this.message.t1F2[r].n2F1) == null
                ? void 0
                : i.n3F139608561) != null &&
              t.n4F8) ||
              (this.message.t1F2.splice(r, 1), (this.needProcess = !0));
      }
      toBinary() {
        this.body = ti.toBinary(this.message);
      }
    },
    Re = class extends X {
      constructor(e, n = "Guide") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = ii.fromBinary(e);
      }
      pure() {
        this.iterate(this.message, "g3F1", (e) => {
          for (let n = e.g3F1.length - 1; n >= 0; n--)
            this.isUpload(e.g3F1[n]) && e.g3F1.splice(n, 1);
        });
      }
      toBinary() {
        this.body = ii.toBinary(this.message);
      }
    },
    Ie = class extends X {
      constructor(e, n = "Setting") {
        super(e, n);
      }
      fromBinary(e) {
        this.message = ai.fromBinary(e);
      }
      pure() {
        this.iterate(this.message, "num", (n) => {
          if (n.num === 10005) {
            let i = {
                f1: 135,
                f2: 20434,
                f3: 2,
                st2F4: this.message.st1F10.st2F4,
              },
              t = {
                st4F61331416: {
                  f15: 0,
                  st5F5: {
                    st3F5: i,
                    st6F81212182: { st7F1: { st8F1: { f1: 151 }, f3: 1 } },
                  },
                  st5F6: {
                    st3F5: i,
                    st6F81212182: { st7F1: { st8F1: { f1: 151 }, f3: 0 } },
                  },
                  st3F5: i,
                },
              };
            n.st3F3.push(t);
          }
        });
        let e = {
          st2F88478200: {
            f2: 1,
            f3: 1,
            st3F5: {
              f1: 2,
              f2: 20020,
              f3: 8,
              st2F4: this.message.st1F10.st2F4,
            },
            f6: 0,
            f7: 1,
            f8: 1,
            f9: 1,
            f10: 1,
            f12: 1,
          },
        };
        this.message.st1F6.push(JSON.parse(JSON.stringify(e))),
          (e.st2F88478200.st3F5.f1 = 1),
          (e.st2F88478200.st3F5.f3 = 9),
          (this.message.st1F7 = e),
          (this.needProcess = !0);
      }
      toBinary() {
        this.body = ai.toBinary(this.message);
      }
    };
  var le = class {
    static create(e, n) {
      return e.includes("/v1/browse")
        ? new ie(n)
        : e.includes("/v1/next")
        ? new Be(n)
        : e.includes("/v1/player")
        ? new Ne(n)
        : e.includes("/v1/search")
        ? new Te(n)
        : e.includes("/v1/reel/reel_watch_sequence")
        ? new xe(n)
        : e.includes("/v1/guide")
        ? new Re(n)
        : e.includes("/v1/account/get_setting")
        ? new Ie(n)
        : !1;
    }
  };
  var Li = $request.url,
    Di = C.isQuanX() ? new Uint8Array($response.bodyBytes) : $response.body,
    ji = C.getjson("YouTubeWhiteStr", {
      whiteNo: [],
      blackNo: [],
      whiteEml: [],
      blackEml: [],
    }),
    We = le.create(Li, ji);
  We
    ? (We.fromBinary(Di), We.pure(), We.done())
    : (C.msg(
        "YouTubeAds",
        "\u811A\u672C\u9700\u8981\u66F4\u65B0",
        "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0"
      ),
      C.done());
})();
