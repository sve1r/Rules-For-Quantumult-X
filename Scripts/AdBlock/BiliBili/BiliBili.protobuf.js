// Build: 2025/3/25 22:39:08
(() => {
    console.time = function (r) {
        this._times = this._times || {}, this._times[r] = Date.now()
    };
    console.timeEnd = function (r) {
        if (this._times && this._times[r]) {
            let e = Date.now() - this._times[r];
            console.log(`${r}: ${e}ms`), delete this._times[r]
        } else console.log(`Timer with label ${r} does not exist.`)
    };

    function Mi(r) {
        "use strict";

        function e() {
        }

        function t() {
        }

        var i = String.fromCharCode, n = {}.toString, s = n.call(r.SharedArrayBuffer), f = n(), o = r.Uint8Array,
            l = o || Array, a = o ? ArrayBuffer : l, u = a.isView || function (k) {
                return k && "length" in k
            }, d = n.call(a.prototype);
        a = t.prototype;
        var g = r.TextEncoder, w = new (o ? Uint16Array : l)(32);
        e.prototype.decode = function (k) {
            if (!u(k)) {
                var O = n.call(k);
                if (O !== d && O !== s && O !== f) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                k = o ? new l(k) : k || []
            }
            for (var T = O = "", v = 0, x = k.length | 0, V = x - 32 | 0, R, U, D = 0, K = 0, C, A = 0, W = -1; v < x;) {
                for (R = v <= V ? 32 : x - v | 0; A < R; v = v + 1 | 0, A = A + 1 | 0) {
                    switch (U = k[v] & 255, U >> 4) {
                        case 15:
                            if (C = k[v = v + 1 | 0] & 255, C >> 6 !== 2 || 247 < U) {
                                v = v - 1 | 0;
                                break
                            }
                            D = (U & 7) << 6 | C & 63, K = 5, U = 256;
                        case 14:
                            C = k[v = v + 1 | 0] & 255, D <<= 6, D |= (U & 15) << 6 | C & 63, K = C >> 6 === 2 ? K + 4 | 0 : 24, U = U + 256 & 768;
                        case 13:
                        case 12:
                            C = k[v = v + 1 | 0] & 255, D <<= 6, D |= (U & 31) << 6 | C & 63, K = K + 7 | 0, v < x && C >> 6 === 2 && D >> K && 1114112 > D ? (U = D, D = D - 65536 | 0, 0 <= D && (W = (D >> 10) + 55296 | 0, U = (D & 1023) + 56320 | 0, 31 > A ? (w[A] = W, A = A + 1 | 0, W = -1) : (C = W, W = U, U = C))) : (U >>= 8, v = v - U - 1 | 0, U = 65533), D = K = 0, R = v <= V ? 32 : x - v | 0;
                        default:
                            w[A] = U;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    w[A] = 65533
                }
                if (T += i(w[0], w[1], w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9], w[10], w[11], w[12], w[13], w[14], w[15], w[16], w[17], w[18], w[19], w[20], w[21], w[22], w[23], w[24], w[25], w[26], w[27], w[28], w[29], w[30], w[31]), 32 > A && (T = T.slice(0, A - 32 | 0)), v < x) {
                    if (w[0] = W, A = ~W >>> 31, W = -1, T.length < O.length) continue
                } else W !== -1 && (T += i(W));
                O += T, T = ""
            }
            return O
        }, a.encode = function (k) {
            k = k === void 0 ? "" : "" + k;
            var O = k.length | 0, T = new l((O << 1) + 8 | 0), v, x = 0, V = !o;
            for (v = 0; v < O; v = v + 1 | 0, x = x + 1 | 0) {
                var R = k.charCodeAt(v) | 0;
                if (127 >= R) T[x] = R; else {
                    if (2047 >= R) T[x] = 192 | R >> 6; else {
                        e:{
                            if (55296 <= R) if (56319 >= R) {
                                var U = k.charCodeAt(v = v + 1 | 0) | 0;
                                if (56320 <= U && 57343 >= U) {
                                    if (R = (R << 10) + U - 56613888 | 0, 65535 < R) {
                                        T[x] = 240 | R >> 18, T[x = x + 1 | 0] = 128 | R >> 12 & 63, T[x = x + 1 | 0] = 128 | R >> 6 & 63, T[x = x + 1 | 0] = 128 | R & 63;
                                        continue
                                    }
                                    break e
                                }
                                R = 65533
                            } else 57343 >= R && (R = 65533);
                            !V && v << 1 < x && v << 1 < (x - 7 | 0) && (V = !0, U = new l(3 * O), U.set(T), T = U)
                        }
                        T[x] = 224 | R >> 12, T[x = x + 1 | 0] = 128 | R >> 6 & 63
                    }
                    T[x = x + 1 | 0] = 128 | R & 63
                }
            }
            return o ? T.subarray(0, x) : T.slice(0, x)
        }, r.TextDecoder = e, r.TextEncoder = t
    }

    var b = Mi(globalThis);
    var M = Uint8Array, ie = Uint16Array, ji = Int32Array,
        Wn = new M([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        $n = new M([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        zi = new M([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Mn = function (r, e) {
            for (var t = new ie(31), i = 0; i < 31; ++i) t[i] = e += 1 << r[i - 1];
            for (var n = new ji(t[30]), i = 1; i < 30; ++i) for (var s = t[i]; s < t[i + 1]; ++s) n[s] = s - t[i] << 5 | i;
            return {b: t, r: n}
        }, jn = Mn(Wn, 2), zn = jn.b, _i = jn.r;
    zn[28] = 258, _i[258] = 28;
    var _n = Mn($n, 0), Ki = _n.b, Tr = _n.r, Me = new ie(32768);
    for (B = 0; B < 32768; ++B) G = (B & 43690) >> 1 | (B & 21845) << 1, G = (G & 52428) >> 2 | (G & 13107) << 2, G = (G & 61680) >> 4 | (G & 3855) << 4, Me[B] = ((G & 65280) >> 8 | (G & 255) << 8) >> 1;
    var G, B, ue = function (r, e, t) {
        for (var i = r.length, n = 0, s = new ie(e); n < i; ++n) r[n] && ++s[r[n] - 1];
        var f = new ie(e);
        for (n = 1; n < e; ++n) f[n] = f[n - 1] + s[n - 1] << 1;
        var o;
        if (t) {
            o = new ie(1 << e);
            var l = 15 - e;
            for (n = 0; n < i; ++n) if (r[n]) for (var a = n << 4 | r[n], u = e - r[n], d = f[r[n] - 1]++ << u, g = d | (1 << u) - 1; d <= g; ++d) o[Me[d] >> l] = a
        } else for (o = new ie(i), n = 0; n < i; ++n) r[n] && (o[n] = Me[f[r[n] - 1]++] >> 15 - r[n]);
        return o
    }, ce = new M(288);
    for (B = 0; B < 144; ++B) ce[B] = 8;
    var B;
    for (B = 144; B < 256; ++B) ce[B] = 9;
    var B;
    for (B = 256; B < 280; ++B) ce[B] = 7;
    var B;
    for (B = 280; B < 288; ++B) ce[B] = 8;
    var B, Kn = new M(32);
    for (B = 0; B < 32; ++B) Kn[B] = 5;
    var B;
    var Gi = ue(ce, 9, 1);
    var qi = ue(Kn, 5, 1), We = function (r) {
        for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
        return e
    }, z = function (r, e, t) {
        var i = e / 8 | 0;
        return (r[i] | r[i + 1] << 8) >> (e & 7) & t
    }, $e = function (r, e) {
        var t = e / 8 | 0;
        return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7)
    }, Ji = function (r) {
        return (r + 7) / 8 | 0
    }, Xi = function (r, e, t) {
        return (e == null || e < 0) && (e = 0), (t == null || t > r.length) && (t = r.length), new M(r.subarray(e, t))
    };
    var Zi = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        _ = function (r, e, t) {
            var i = new Error(e || Zi[r]);
            if (i.code = r, Error.captureStackTrace && Error.captureStackTrace(i, _), !t) throw i;
            return i
        }, Yi = function (r, e, t, i) {
            var n = r.length, s = i ? i.length : 0;
            if (!n || e.f && !e.l) return t || new M(0);
            var f = !t, o = f || e.i != 2, l = e.i;
            f && (t = new M(n * 3));
            var a = function (Sn) {
                var Pn = t.length;
                if (Sn > Pn) {
                    var Cn = new M(Math.max(Pn * 2, Sn));
                    Cn.set(t), t = Cn
                }
            }, u = e.f || 0, d = e.p || 0, g = e.b || 0, w = e.l, k = e.d, O = e.m, T = e.n, v = n * 8;
            do {
                if (!w) {
                    u = z(r, d, 1);
                    var x = z(r, d + 1, 3);
                    if (d += 3, x) if (x == 1) w = Gi, k = qi, O = 9, T = 5; else if (x == 2) {
                        var D = z(r, d, 31) + 257, K = z(r, d + 10, 15) + 4, C = D + z(r, d + 5, 31) + 1;
                        d += 14;
                        for (var A = new M(C), W = new M(19), j = 0; j < K; ++j) W[zi[j]] = z(r, d + j * 3, 7);
                        d += K * 3;
                        for (var Fn = We(W), Si = (1 << Fn) - 1, Pi = ue(W, Fn, 1), j = 0; j < C;) {
                            var On = Pi[z(r, d, Si)];
                            d += On & 15;
                            var V = On >> 4;
                            if (V < 16) A[j++] = V; else {
                                var te = 0, we = 0;
                                for (V == 16 ? (we = 3 + z(r, d, 3), d += 2, te = A[j - 1]) : V == 17 ? (we = 3 + z(r, d, 7), d += 3) : V == 18 && (we = 11 + z(r, d, 127), d += 7); we--;) A[j++] = te
                            }
                        }
                        var Dn = A.subarray(0, D), Z = A.subarray(D);
                        O = We(Dn), T = We(Z), w = ue(Dn, O, 1), k = ue(Z, T, 1)
                    } else _(1); else {
                        var V = Ji(d) + 4, R = r[V - 4] | r[V - 3] << 8, U = V + R;
                        if (U > n) {
                            l && _(0);
                            break
                        }
                        o && a(g + R), t.set(r.subarray(V, U), g), e.b = g += R, e.p = d = U * 8, e.f = u;
                        continue
                    }
                    if (d > v) {
                        l && _(0);
                        break
                    }
                }
                o && a(g + 131072);
                for (var Ci = (1 << O) - 1, Wi = (1 << T) - 1, Se = d; ; Se = d) {
                    var te = w[$e(r, d) & Ci], ne = te >> 4;
                    if (d += te & 15, d > v) {
                        l && _(0);
                        break
                    }
                    if (te || _(2), ne < 256) t[g++] = ne; else if (ne == 256) {
                        Se = d, w = null;
                        break
                    } else {
                        var An = ne - 254;
                        if (ne > 264) {
                            var j = ne - 257, fe = Wn[j];
                            An = z(r, d, (1 << fe) - 1) + zn[j], d += fe
                        }
                        var Pe = k[$e(r, d) & Wi], Ce = Pe >> 4;
                        Pe || _(3), d += Pe & 15;
                        var Z = Ki[Ce];
                        if (Ce > 3) {
                            var fe = $n[Ce];
                            Z += $e(r, d) & (1 << fe) - 1, d += fe
                        }
                        if (d > v) {
                            l && _(0);
                            break
                        }
                        o && a(g + 131072);
                        var Ln = g + An;
                        if (g < Z) {
                            var Vn = s - Z, $i = Math.min(Z, Ln);
                            for (Vn + g < 0 && _(3); g < $i; ++g) t[g] = i[Vn + g]
                        }
                        for (; g < Ln; ++g) t[g] = t[g - Z]
                    }
                }
                e.l = w, e.p = Se, e.b = g, e.f = u, w && (u = 1, e.m = O, e.d = k, e.n = T)
            } while (!u);
            return g != t.length && f ? Xi(t, 0, g) : t.subarray(0, g)
        };
    var Hi = new M(0);
    var Qi = function (r) {
        (r[0] != 31 || r[1] != 139 || r[2] != 8) && _(6, "invalid gzip data");
        var e = r[3], t = 10;
        e & 4 && (t += (r[10] | r[11] << 8) + 2);
        for (var i = (e >> 3 & 1) + (e >> 4 & 1); i > 0; i -= !r[t++]) ;
        return t + (e & 2)
    }, er = function (r) {
        var e = r.length;
        return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0
    };

    function Gn(r, e) {
        var t = Qi(r);
        return t + 8 > r.length && _(6, "invalid gzip data"), Yi(r.subarray(t, -8), {i: 2}, e && e.out || new M(er(r)), e && e.dictionary)
    }

    var tr = typeof TextDecoder < "u" && new TextDecoder, nr = 0;
    try {
        tr.decode(Hi, {stream: !0}), nr = 1
    } catch {
    }
    var he = class {
        constructor(r, e, t) {
            this._times = new Map, this.name = r ?? "", this.debug = t?.debug ?? !1, r && this.log(`${r} Start`), this.className = e ?? "", this.init()
        }

        static getInstance(r, e) {
            let t = typeof $task < "u" ? "QuanX" : "Surge";
            return he.instances[t] || (he.instances[t] = he.classNames[t](r, t, e)), he.instances[t]
        }

        createProxy(r) {
            return new Proxy(r, {get: this.getFn, set: this.setFn})
        }

        getFn(r, e, t) {
            return r[e]
        }

        setFn(r, e, t, i) {
            return r[e] = t, !0
        }

        getJSON(r, e = {}) {
            let t = this.getVal(r);
            return t ? JSON.parse(t) : e
        }

        setJSON(r, e) {
            this.setVal(JSON.stringify(r), e)
        }

        msg(r = this.name, e = "", t = "", i) {
        }

        log(r) {
            this.debug && (typeof r == "object" && (r = JSON.stringify(r)), console.log(r))
        }

        timeStart(r) {
            this._times.set(r, Date.now())
        }

        timeEnd(r) {
            if (this._times?.has(r)) {
                let e = Date.now() - this._times.get(r);
                this.log(`${r}: ${e}ms`), this._times.delete(r)
            } else this.log(`Timer with label ${r} does not exist.`)
        }

        exit() {
            $done({})
        }

        reject() {
            $done()
        }
    }, H = he;
    H.instances = {}, H.classNames = {QuanX: (r, e, t) => new Jn(r, e, t), Surge: (r, e, t) => new qn(r, e, t)};
    var je = class extends H {
        getFn(r, e, t) {
            let i = je.clientAdapter[e] || e;
            return super.getFn(r, i, t)
        }

        setFn(r, e, t, i) {
            let n = je.clientAdapter[e] || e;
            return super.setFn(r, n, t, i)
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (r) {
                this.log(r.toString())
            }
        }

        getVal(r) {
            return $persistentStore.read(r)
        }

        setVal(r, e) {
            $persistentStore.write(r, e)
        }

        msg(r = this.name, e = "", t = "", i) {
            $notification.post(r, e, t, {url: i ?? ""})
        }

        async fetch(r) {
            return await new Promise((e, t) => {
                let {method: i, body: n, bodyBytes: s, ...f} = r, o = s ?? n, l = o instanceof Uint8Array;
                $httpClient[i.toLowerCase()]({...f, body: o, "binary-mode": l}, (a, u, d) => {
                    a && t(a);
                    let g = l ? "bodyBytes" : "body";
                    e({status: u.status, headers: u.headers, [g]: d})
                })
            })
        }

        done(r) {
            let e = r.response ?? r, t, i;
            e.bodyBytes ? (t = e.bodyBytes, delete e.bodyBytes, i = {...r}, i.response ? i.response.body = t : i.body = t) : i = r, $done(i)
        }
    }, qn = je;
    qn.clientAdapter = {bodyBytes: "body"};
    var Y = class extends H {
        static transferBodyBytes(r, e) {
            return r instanceof ArrayBuffer ? e === "Uint8Array" ? new Uint8Array(r) : r : r instanceof Uint8Array && e === "ArrayBuffer" ? r.buffer.slice(r.byteOffset, r.byteLength + r.byteOffset) : r
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (r) {
                this.log(r.toString())
            }
        }

        getFn(r, e, t) {
            let i = Y.clientAdapter[e] || e, n = super.getFn(r, i, t);
            return e === "bodyBytes" && (n = Y.transferBodyBytes(n, "Uint8Array")), n
        }

        setFn(r, e, t, i) {
            let n = Y.clientAdapter[e] || e, s = t;
            return e === "bodyBytes" && (s = Y.transferBodyBytes(s, "Uint8Array")), super.setFn(r, n, s, i)
        }

        getVal(r) {
            return $prefs.valueForKey(r)?.replace(/\0/g, "")
        }

        setVal(r, e) {
            $prefs.setValueForKey(r, e)
        }

        msg(r = this.name, e = "", t = "", i) {
            $notify(r, e, t, {"open-url": i ?? ""})
        }

        async fetch(r) {
            return await new Promise(e => {
                let t = {url: "", method: "GET"};
                for (let [i, n] of Object.entries(r)) i === "id" ? t.sessionIndex = n : i === "bodyBytes" ? t.bodyBytes = Y.transferBodyBytes(n, "ArrayBuffer") : t[i] = n;
                r.bodyBytes && delete t.body, $task.fetch(t).then(i => {
                    let n = {status: 200, headers: {}};
                    for (let [s, f] of Object.entries(i)) s === "sessionIndex" ? n.id = f : s === "bodyBytes" ? n.bodyBytes = Y.transferBodyBytes(f, "Uint8Array") : s === "statusCode" ? n.status = f : n[s] = f;
                    e(n)
                })
            })
        }

        done(r) {
            let e = r.response ?? r, t = {};
            for (let [i, n] of Object.entries(e)) i === "status" ? t.status = `HTTP/1.1 ${n}` : i === "bodyBytes" ? t.bodyBytes = Y.transferBodyBytes(n, "ArrayBuffer") : t[i] = n;
            $done(t)
        }
    }, Jn = Y;
    Jn.clientAdapter = {id: "sessionIndex", status: "statusCode"};
    var ir = H.getInstance("Bilibili Helper", {debug: !1});

    function rr(r) {
        let e = sr(r.length), t = new Uint8Array(5 + r.length);
        return t[0] = 0, t.set(e, 1), t.set(r, 5), t
    }

    function sr(r) {
        let e = new ArrayBuffer(4);
        return new DataView(e).setUint32(0, r, !1), new Uint8Array(e)
    }

    function L(r, e) {
        let t = r.toBinary(e);
        ir.done({bodyBytes: rr(t)})
    }

    function ge(r) {
        let e = typeof r;
        if (e == "object") {
            if (Array.isArray(r)) return "array";
            if (r === null) return "null"
        }
        return e
    }

    function Xn(r) {
        return r !== null && typeof r == "object" && !Array.isArray(r)
    }

    var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), be = [];
    for (let r = 0; r < q.length; r++) be[q[r].charCodeAt(0)] = r;
    be[45] = q.indexOf("+");
    be[95] = q.indexOf("/");

    function Zn(r) {
        let e = r.length * 3 / 4;
        r[r.length - 2] == "=" ? e -= 2 : r[r.length - 1] == "=" && (e -= 1);
        let t = new Uint8Array(e), i = 0, n = 0, s, f = 0;
        for (let o = 0; o < r.length; o++) {
            if (s = be[r.charCodeAt(o)], s === void 0) switch (r[o]) {
                case"=":
                    n = 0;
                case`
`:
                case"\r":
                case"	":
                case" ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
            }
            switch (n) {
                case 0:
                    f = s, n = 1;
                    break;
                case 1:
                    t[i++] = f << 2 | (s & 48) >> 4, f = s, n = 2;
                    break;
                case 2:
                    t[i++] = (f & 15) << 4 | (s & 60) >> 2, f = s, n = 3;
                    break;
                case 3:
                    t[i++] = (f & 3) << 6 | s, n = 0;
                    break
            }
        }
        if (n == 1) throw Error("invalid base64 string.");
        return t.subarray(0, i)
    }

    function Yn(r) {
        let e = "", t = 0, i, n = 0;
        for (let s = 0; s < r.length; s++) switch (i = r[s], t) {
            case 0:
                e += q[i >> 2], n = (i & 3) << 4, t = 1;
                break;
            case 1:
                e += q[n | i >> 4], n = (i & 15) << 2, t = 2;
                break;
            case 2:
                e += q[n | i >> 6], e += q[i & 63], t = 0;
                break
        }
        return t && (e += q[n], e += "=", t == 1 && (e += "=")), e
    }

    var p;
    (function (r) {
        r.symbol = Symbol.for("protobuf-ts/unknown"), r.onRead = (t, i, n, s, f) => {
            (e(i) ? i[r.symbol] : i[r.symbol] = []).push({no: n, wireType: s, data: f})
        }, r.onWrite = (t, i, n) => {
            for (let {no: s, wireType: f, data: o} of r.list(i)) n.tag(s, f).raw(o)
        }, r.list = (t, i) => {
            if (e(t)) {
                let n = t[r.symbol];
                return i ? n.filter(s => s.no == i) : n
            }
            return []
        }, r.last = (t, i) => r.list(t, i).slice(-1)[0];
        let e = t => t && Array.isArray(t[r.symbol])
    })(p || (p = {}));
    var c;
    (function (r) {
        r[r.Varint = 0] = "Varint", r[r.Bit64 = 1] = "Bit64", r[r.LengthDelimited = 2] = "LengthDelimited", r[r.StartGroup = 3] = "StartGroup", r[r.EndGroup = 4] = "EndGroup", r[r.Bit32 = 5] = "Bit32"
    })(c || (c = {}));

    function Hn() {
        let r = 0, e = 0;
        for (let i = 0; i < 28; i += 7) {
            let n = this.buf[this.pos++];
            if (r |= (n & 127) << i, (n & 128) == 0) return this.assertBounds(), [r, e]
        }
        let t = this.buf[this.pos++];
        if (r |= (t & 15) << 28, e = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [r, e];
        for (let i = 3; i <= 31; i += 7) {
            let n = this.buf[this.pos++];
            if (e |= (n & 127) << i, (n & 128) == 0) return this.assertBounds(), [r, e]
        }
        throw new Error("invalid varint")
    }

    function ke(r, e, t) {
        for (let s = 0; s < 28; s = s + 7) {
            let f = r >>> s, o = !(!(f >>> 7) && e == 0), l = (o ? f | 128 : f) & 255;
            if (t.push(l), !o) return
        }
        let i = r >>> 28 & 15 | (e & 7) << 4, n = e >> 3 != 0;
        if (t.push((n ? i | 128 : i) & 255), !!n) {
            for (let s = 3; s < 31; s = s + 7) {
                let f = e >>> s, o = !!(f >>> 7), l = (o ? f | 128 : f) & 255;
                if (t.push(l), !o) return
            }
            t.push(e >>> 31 & 1)
        }
    }

    var ve = 65536 * 65536;

    function ze(r) {
        let e = r[0] == "-";
        e && (r = r.slice(1));
        let t = 1e6, i = 0, n = 0;

        function s(f, o) {
            let l = Number(r.slice(f, o));
            n *= t, i = i * t + l, i >= ve && (n = n + (i / ve | 0), i = i % ve)
        }

        return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), [e, i, n]
    }

    function Ne(r, e) {
        if (e >>> 0 <= 2097151) return "" + (ve * e + (r >>> 0));
        let t = r & 16777215, i = (r >>> 24 | e << 8) >>> 0 & 16777215, n = e >> 16 & 65535,
            s = t + i * 6777216 + n * 6710656, f = i + n * 8147497, o = n * 2, l = 1e7;
        s >= l && (f += Math.floor(s / l), s %= l), f >= l && (o += Math.floor(f / l), f %= l);

        function a(u, d) {
            let g = u ? String(u) : "";
            return d ? "0000000".slice(g.length) + g : g
        }

        return a(o, 0) + a(f, o) + a(s, 1)
    }

    function _e(r, e) {
        if (r >= 0) {
            for (; r > 127;) e.push(r & 127 | 128), r = r >>> 7;
            e.push(r)
        } else {
            for (let t = 0; t < 9; t++) e.push(r & 127 | 128), r = r >> 7;
            e.push(1)
        }
    }

    function Qn() {
        let r = this.buf[this.pos++], e = r & 127;
        if ((r & 128) == 0) return this.assertBounds(), e;
        if (r = this.buf[this.pos++], e |= (r & 127) << 7, (r & 128) == 0) return this.assertBounds(), e;
        if (r = this.buf[this.pos++], e |= (r & 127) << 14, (r & 128) == 0) return this.assertBounds(), e;
        if (r = this.buf[this.pos++], e |= (r & 127) << 21, (r & 128) == 0) return this.assertBounds(), e;
        r = this.buf[this.pos++], e |= (r & 15) << 28;
        for (let t = 5; (r & 128) !== 0 && t < 10; t++) r = this.buf[this.pos++];
        if ((r & 128) != 0) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0
    }

    var I;

    function or() {
        let r = new DataView(new ArrayBuffer(8));
        I = globalThis.BigInt !== void 0 && typeof r.getBigInt64 == "function" && typeof r.getBigUint64 == "function" && typeof r.setBigInt64 == "function" && typeof r.setBigUint64 == "function" ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: r
        } : void 0
    }

    or();

    function ei(r) {
        if (!r) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
    }

    var ti = /^-?[0-9]+$/, xe = 4294967296, Te = 2147483648, Be = class {
        constructor(e, t) {
            this.lo = e | 0, this.hi = t | 0
        }

        isZero() {
            return this.lo == 0 && this.hi == 0
        }

        toNumber() {
            let e = this.hi * xe + (this.lo >>> 0);
            if (!Number.isSafeInteger(e)) throw new Error("cannot convert to safe number");
            return e
        }
    }, F = class r extends Be {
        static from(e) {
            if (I) switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e == "") throw new Error("string is no integer");
                    e = I.C(e);
                case"number":
                    if (e === 0) return this.ZERO;
                    e = I.C(e);
                case"bigint":
                    if (!e) return this.ZERO;
                    if (e < I.UMIN) throw new Error("signed value for ulong");
                    if (e > I.UMAX) throw new Error("ulong too large");
                    return I.V.setBigUint64(0, e, !0), new r(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
            } else switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e = e.trim(), !ti.test(e)) throw new Error("string is no integer");
                    let [t, i, n] = ze(e);
                    if (t) throw new Error("signed value for ulong");
                    return new r(i, n);
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    if (e < 0) throw new Error("signed value for ulong");
                    return new r(e, e / xe)
            }
            throw new Error("unknown value " + typeof e)
        }

        toString() {
            return I ? this.toBigInt().toString() : Ne(this.lo, this.hi)
        }

        toBigInt() {
            return ei(I), I.V.setInt32(0, this.lo, !0), I.V.setInt32(4, this.hi, !0), I.V.getBigUint64(0, !0)
        }
    };
    F.ZERO = new F(0, 0);
    var E = class r extends Be {
        static from(e) {
            if (I) switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e == "") throw new Error("string is no integer");
                    e = I.C(e);
                case"number":
                    if (e === 0) return this.ZERO;
                    e = I.C(e);
                case"bigint":
                    if (!e) return this.ZERO;
                    if (e < I.MIN) throw new Error("signed long too small");
                    if (e > I.MAX) throw new Error("signed long too large");
                    return I.V.setBigInt64(0, e, !0), new r(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
            } else switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e = e.trim(), !ti.test(e)) throw new Error("string is no integer");
                    let [t, i, n] = ze(e);
                    if (t) {
                        if (n > Te || n == Te && i != 0) throw new Error("signed long too small")
                    } else if (n >= Te) throw new Error("signed long too large");
                    let s = new r(i, n);
                    return t ? s.negate() : s;
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    return e > 0 ? new r(e, e / xe) : new r(-e, -e / xe).negate()
            }
            throw new Error("unknown value " + typeof e)
        }

        isNegative() {
            return (this.hi & Te) !== 0
        }

        negate() {
            let e = ~this.hi, t = this.lo;
            return t ? t = ~t + 1 : e += 1, new r(t, e)
        }

        toString() {
            if (I) return this.toBigInt().toString();
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + Ne(e.lo, e.hi)
            }
            return Ne(this.lo, this.hi)
        }

        toBigInt() {
            return ei(I), I.V.setInt32(0, this.lo, !0), I.V.setInt32(4, this.hi, !0), I.V.getBigInt64(0, !0)
        }
    };
    E.ZERO = new E(0, 0);
    var ni = {readUnknownField: !0, readerFactory: r => new Ke(r)};

    function ii(r) {
        return r ? Object.assign(Object.assign({}, ni), r) : ni
    }

    var Ke = class {
        constructor(e, t) {
            this.varint64 = Hn, this.uint32 = Qn, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            })
        }

        tag() {
            let e = this.uint32(), t = e >>> 3, i = e & 7;
            if (t <= 0 || i < 0 || i > 5) throw new Error("illegal tag: field no " + t + " wire type " + i);
            return [t, i]
        }

        skip(e) {
            let t = this.pos;
            switch (e) {
                case c.Varint:
                    for (; this.buf[this.pos++] & 128;) ;
                    break;
                case c.Bit64:
                    this.pos += 4;
                case c.Bit32:
                    this.pos += 4;
                    break;
                case c.LengthDelimited:
                    let i = this.uint32();
                    this.pos += i;
                    break;
                case c.StartGroup:
                    let n;
                    for (; (n = this.tag()[1]) !== c.EndGroup;) this.skip(n);
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }

        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }

        int32() {
            return this.uint32() | 0
        }

        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(e & 1)
        }

        int64() {
            return new E(...this.varint64())
        }

        uint64() {
            return new F(...this.varint64())
        }

        sint64() {
            let [e, t] = this.varint64(), i = -(e & 1);
            return e = (e >>> 1 | (t & 1) << 31) ^ i, t = t >>> 1 ^ i, new E(e, t)
        }

        bool() {
            let [e, t] = this.varint64();
            return e !== 0 || t !== 0
        }

        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }

        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }

        fixed64() {
            return new F(this.sfixed32(), this.sfixed32())
        }

        sfixed64() {
            return new E(this.sfixed32(), this.sfixed32())
        }

        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }

        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }

        bytes() {
            let e = this.uint32(), t = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
        }

        string() {
            return this.textDecoder.decode(this.bytes())
        }
    };

    function N(r, e) {
        if (!r) throw new Error(e)
    }

    var ar = 34028234663852886e22, lr = -34028234663852886e22, fr = 4294967295, ur = 2147483647, cr = -2147483648;

    function Q(r) {
        if (typeof r != "number") throw new Error("invalid int 32: " + typeof r);
        if (!Number.isInteger(r) || r > ur || r < cr) throw new Error("invalid int 32: " + r)
    }

    function ee(r) {
        if (typeof r != "number") throw new Error("invalid uint 32: " + typeof r);
        if (!Number.isInteger(r) || r > fr || r < 0) throw new Error("invalid uint 32: " + r)
    }

    function re(r) {
        if (typeof r != "number") throw new Error("invalid float 32: " + typeof r);
        if (Number.isFinite(r) && (r > ar || r < lr)) throw new Error("invalid float 32: " + r)
    }

    var ri = {writeUnknownFields: !0, writerFactory: () => new Ge};

    function si(r) {
        return r ? Object.assign(Object.assign({}, ri), r) : ri
    }

    var Ge = class {
        constructor(e) {
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
        }

        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let n = 0; n < this.chunks.length; n++) e += this.chunks[n].length;
            let t = new Uint8Array(e), i = 0;
            for (let n = 0; n < this.chunks.length; n++) t.set(this.chunks[n], i), i += this.chunks[n].length;
            return this.chunks = [], t
        }

        fork() {
            return this.stack.push({chunks: this.chunks, buf: this.buf}), this.chunks = [], this.buf = [], this
        }

        join() {
            let e = this.finish(), t = this.stack.pop();
            if (!t) throw new Error("invalid state, fork stack empty");
            return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
        }

        tag(e, t) {
            return this.uint32((e << 3 | t) >>> 0)
        }

        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }

        uint32(e) {
            for (ee(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
            return this.buf.push(e), this
        }

        int32(e) {
            return Q(e), _e(e, this.buf), this
        }

        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }

        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }

        string(e) {
            let t = this.textEncoder.encode(e);
            return this.uint32(t.byteLength), this.raw(t)
        }

        float(e) {
            re(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
        }

        double(e) {
            let t = new Uint8Array(8);
            return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
        }

        fixed32(e) {
            ee(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
        }

        sfixed32(e) {
            Q(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
        }

        sint32(e) {
            return Q(e), e = (e << 1 ^ e >> 31) >>> 0, _e(e, this.buf), this
        }

        sfixed64(e) {
            let t = new Uint8Array(8), i = new DataView(t.buffer), n = E.from(e);
            return i.setInt32(0, n.lo, !0), i.setInt32(4, n.hi, !0), this.raw(t)
        }

        fixed64(e) {
            let t = new Uint8Array(8), i = new DataView(t.buffer), n = F.from(e);
            return i.setInt32(0, n.lo, !0), i.setInt32(4, n.hi, !0), this.raw(t)
        }

        int64(e) {
            let t = E.from(e);
            return ke(t.lo, t.hi, this.buf), this
        }

        sint64(e) {
            let t = E.from(e), i = t.hi >> 31, n = t.lo << 1 ^ i, s = (t.hi << 1 | t.lo >>> 31) ^ i;
            return ke(n, s, this.buf), this
        }

        uint64(e) {
            let t = F.from(e);
            return ke(t.lo, t.hi, this.buf), this
        }
    };
    var oi = {emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0},
        ai = {ignoreUnknownFields: !1};

    function li(r) {
        return r ? Object.assign(Object.assign({}, ai), r) : ai
    }

    function fi(r) {
        return r ? Object.assign(Object.assign({}, oi), r) : oi
    }

    var Ue = Symbol.for("protobuf-ts/message-type");

    function qe(r) {
        let e = !1, t = [];
        for (let i = 0; i < r.length; i++) {
            let n = r.charAt(i);
            n == "_" ? e = !0 : /\d/.test(n) ? (t.push(n), e = !0) : e ? (t.push(n.toUpperCase()), e = !1) : i == 0 ? t.push(n.toLowerCase()) : t.push(n)
        }
        return t.join("")
    }

    var h;
    (function (r) {
        r[r.DOUBLE = 1] = "DOUBLE", r[r.FLOAT = 2] = "FLOAT", r[r.INT64 = 3] = "INT64", r[r.UINT64 = 4] = "UINT64", r[r.INT32 = 5] = "INT32", r[r.FIXED64 = 6] = "FIXED64", r[r.FIXED32 = 7] = "FIXED32", r[r.BOOL = 8] = "BOOL", r[r.STRING = 9] = "STRING", r[r.BYTES = 12] = "BYTES", r[r.UINT32 = 13] = "UINT32", r[r.SFIXED32 = 15] = "SFIXED32", r[r.SFIXED64 = 16] = "SFIXED64", r[r.SINT32 = 17] = "SINT32", r[r.SINT64 = 18] = "SINT64"
    })(h || (h = {}));
    var S;
    (function (r) {
        r[r.BIGINT = 0] = "BIGINT", r[r.STRING = 1] = "STRING", r[r.NUMBER = 2] = "NUMBER"
    })(S || (S = {}));
    var pe;
    (function (r) {
        r[r.NO = 0] = "NO", r[r.PACKED = 1] = "PACKED", r[r.UNPACKED = 2] = "UNPACKED"
    })(pe || (pe = {}));

    function ui(r) {
        var e, t, i, n;
        return r.localName = (e = r.localName) !== null && e !== void 0 ? e : qe(r.name), r.jsonName = (t = r.jsonName) !== null && t !== void 0 ? t : qe(r.name), r.repeat = (i = r.repeat) !== null && i !== void 0 ? i : pe.NO, r.opt = (n = r.opt) !== null && n !== void 0 ? n : r.repeat || r.oneof ? !1 : r.kind == "message", r
    }

    function ci(r) {
        if (typeof r != "object" || r === null || !r.hasOwnProperty("oneofKind")) return !1;
        switch (typeof r.oneofKind) {
            case"string":
                return r[r.oneofKind] === void 0 ? !1 : Object.keys(r).length == 2;
            case"undefined":
                return Object.keys(r).length == 1;
            default:
                return !1
        }
    }

    var Re = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        prepare() {
            if (this.data) return;
            let e = [], t = [], i = [];
            for (let n of this.fields) if (n.oneof) i.includes(n.oneof) || (i.push(n.oneof), e.push(n.oneof), t.push(n.oneof)); else switch (t.push(n.localName), n.kind) {
                case"scalar":
                case"enum":
                    (!n.opt || n.repeat) && e.push(n.localName);
                    break;
                case"message":
                    n.repeat && e.push(n.localName);
                    break;
                case"map":
                    e.push(n.localName);
                    break
            }
            this.data = {req: e, known: t, oneofs: Object.values(i)}
        }

        is(e, t, i = !1) {
            if (t < 0) return !0;
            if (e == null || typeof e != "object") return !1;
            this.prepare();
            let n = Object.keys(e), s = this.data;
            if (n.length < s.req.length || s.req.some(f => !n.includes(f)) || !i && n.some(f => !s.known.includes(f))) return !1;
            if (t < 1) return !0;
            for (let f of s.oneofs) {
                let o = e[f];
                if (!ci(o)) return !1;
                if (o.oneofKind === void 0) continue;
                let l = this.fields.find(a => a.localName === o.oneofKind);
                if (!l || !this.field(o[o.oneofKind], l, i, t)) return !1
            }
            for (let f of this.fields) if (f.oneof === void 0 && !this.field(e[f.localName], f, i, t)) return !1;
            return !0
        }

        field(e, t, i, n) {
            let s = t.repeat;
            switch (t.kind) {
                case"scalar":
                    return e === void 0 ? t.opt : s ? this.scalars(e, t.T, n, t.L) : this.scalar(e, t.T, t.L);
                case"enum":
                    return e === void 0 ? t.opt : s ? this.scalars(e, h.INT32, n) : this.scalar(e, h.INT32);
                case"message":
                    return e === void 0 ? !0 : s ? this.messages(e, t.T(), i, n) : this.message(e, t.T(), i, n);
                case"map":
                    if (typeof e != "object" || e === null) return !1;
                    if (n < 2) return !0;
                    if (!this.mapKeys(e, t.K, n)) return !1;
                    switch (t.V.kind) {
                        case"scalar":
                            return this.scalars(Object.values(e), t.V.T, n, t.V.L);
                        case"enum":
                            return this.scalars(Object.values(e), h.INT32, n);
                        case"message":
                            return this.messages(Object.values(e), t.V.T(), i, n)
                    }
                    break
            }
            return !0
        }

        message(e, t, i, n) {
            return i ? t.isAssignable(e, n) : t.is(e, n)
        }

        messages(e, t, i, n) {
            if (!Array.isArray(e)) return !1;
            if (n < 2) return !0;
            if (i) {
                for (let s = 0; s < e.length && s < n; s++) if (!t.isAssignable(e[s], n - 1)) return !1
            } else for (let s = 0; s < e.length && s < n; s++) if (!t.is(e[s], n - 1)) return !1;
            return !0
        }

        scalar(e, t, i) {
            let n = typeof e;
            switch (t) {
                case h.UINT64:
                case h.FIXED64:
                case h.INT64:
                case h.SFIXED64:
                case h.SINT64:
                    switch (i) {
                        case S.BIGINT:
                            return n == "bigint";
                        case S.NUMBER:
                            return n == "number" && !isNaN(e);
                        default:
                            return n == "string"
                    }
                case h.BOOL:
                    return n == "boolean";
                case h.STRING:
                    return n == "string";
                case h.BYTES:
                    return e instanceof Uint8Array;
                case h.DOUBLE:
                case h.FLOAT:
                    return n == "number" && !isNaN(e);
                default:
                    return n == "number" && Number.isInteger(e)
            }
        }

        scalars(e, t, i, n) {
            if (!Array.isArray(e)) return !1;
            if (i < 2) return !0;
            if (Array.isArray(e)) {
                for (let s = 0; s < e.length && s < i; s++) if (!this.scalar(e[s], t, n)) return !1
            }
            return !0
        }

        mapKeys(e, t, i) {
            let n = Object.keys(e);
            switch (t) {
                case h.INT32:
                case h.FIXED32:
                case h.SFIXED32:
                case h.SINT32:
                case h.UINT32:
                    return this.scalars(n.slice(0, i).map(s => parseInt(s)), t, i);
                case h.BOOL:
                    return this.scalars(n.slice(0, i).map(s => s == "true" ? !0 : s == "false" ? !1 : s), t, i);
                default:
                    return this.scalars(n, t, i, S.STRING)
            }
        }
    };

    function $(r, e) {
        switch (e) {
            case S.BIGINT:
                return r.toBigInt();
            case S.NUMBER:
                return r.toNumber();
            default:
                return r.toString()
        }
    }

    var Ie = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (this.fMap === void 0) {
                this.fMap = {};
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                for (let i of t) this.fMap[i.name] = i, this.fMap[i.jsonName] = i, this.fMap[i.localName] = i
            }
        }

        assert(e, t, i) {
            if (!e) {
                let n = ge(i);
                throw (n == "number" || n == "boolean") && (n = i.toString()), new Error(`Cannot parse JSON ${n} for ${this.info.typeName}#${t}`)
            }
        }

        read(e, t, i) {
            this.prepare();
            let n = [];
            for (let [s, f] of Object.entries(e)) {
                let o = this.fMap[s];
                if (!o) {
                    if (!i.ignoreUnknownFields) throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${s}`);
                    continue
                }
                let l = o.localName, a;
                if (o.oneof) {
                    if (f === null && (o.kind !== "enum" || o.T()[0] !== "google.protobuf.NullValue")) continue;
                    if (n.includes(o.oneof)) throw new Error(`Multiple members of the oneof group "${o.oneof}" of ${this.info.typeName} are present in JSON.`);
                    n.push(o.oneof), a = t[o.oneof] = {oneofKind: l}
                } else a = t;
                if (o.kind == "map") {
                    if (f === null) continue;
                    this.assert(Xn(f), o.name, f);
                    let u = a[l];
                    for (let [d, g] of Object.entries(f)) {
                        this.assert(g !== null, o.name + " map value", null);
                        let w;
                        switch (o.V.kind) {
                            case"message":
                                w = o.V.T().internalJsonRead(g, i);
                                break;
                            case"enum":
                                if (w = this.enum(o.V.T(), g, o.name, i.ignoreUnknownFields), w === !1) continue;
                                break;
                            case"scalar":
                                w = this.scalar(g, o.V.T, o.V.L, o.name);
                                break
                        }
                        this.assert(w !== void 0, o.name + " map value", g);
                        let k = d;
                        o.K == h.BOOL && (k = k == "true" ? !0 : k == "false" ? !1 : k), k = this.scalar(k, o.K, S.STRING, o.name).toString(), u[k] = w
                    }
                } else if (o.repeat) {
                    if (f === null) continue;
                    this.assert(Array.isArray(f), o.name, f);
                    let u = a[l];
                    for (let d of f) {
                        this.assert(d !== null, o.name, null);
                        let g;
                        switch (o.kind) {
                            case"message":
                                g = o.T().internalJsonRead(d, i);
                                break;
                            case"enum":
                                if (g = this.enum(o.T(), d, o.name, i.ignoreUnknownFields), g === !1) continue;
                                break;
                            case"scalar":
                                g = this.scalar(d, o.T, o.L, o.name);
                                break
                        }
                        this.assert(g !== void 0, o.name, f), u.push(g)
                    }
                } else switch (o.kind) {
                    case"message":
                        if (f === null && o.T().typeName != "google.protobuf.Value") {
                            this.assert(o.oneof === void 0, o.name + " (oneof member)", null);
                            continue
                        }
                        a[l] = o.T().internalJsonRead(f, i, a[l]);
                        break;
                    case"enum":
                        if (f === null) continue;
                        let u = this.enum(o.T(), f, o.name, i.ignoreUnknownFields);
                        if (u === !1) continue;
                        a[l] = u;
                        break;
                    case"scalar":
                        if (f === null) continue;
                        a[l] = this.scalar(f, o.T, o.L, o.name);
                        break
                }
            }
        }

        enum(e, t, i, n) {
            if (e[0] == "google.protobuf.NullValue" && N(t === null || t === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} only accepts null.`), t === null) return 0;
            switch (typeof t) {
                case"number":
                    return N(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${i}, enum can only be integral number, got ${t}.`), t;
                case"string":
                    let s = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (s = t.substring(e[2].length));
                    let f = e[1][s];
                    return typeof f > "u" && n ? !1 : (N(typeof f == "number", `Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} has no value for "${t}".`), f)
            }
            N(!1, `Unable to parse field ${this.info.typeName}#${i}, cannot parse enum value from ${typeof t}".`)
        }

        scalar(e, t, i, n) {
            let s;
            try {
                switch (t) {
                    case h.DOUBLE:
                    case h.FLOAT:
                        if (e === null) return 0;
                        if (e === "NaN") return Number.NaN;
                        if (e === "Infinity") return Number.POSITIVE_INFINITY;
                        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                        if (e === "") {
                            s = "empty string";
                            break
                        }
                        if (typeof e == "string" && e.trim().length !== e.length) {
                            s = "extra whitespace";
                            break
                        }
                        if (typeof e != "string" && typeof e != "number") break;
                        let f = Number(e);
                        if (Number.isNaN(f)) {
                            s = "not a number";
                            break
                        }
                        if (!Number.isFinite(f)) {
                            s = "too large or small";
                            break
                        }
                        return t == h.FLOAT && re(f), f;
                    case h.INT32:
                    case h.FIXED32:
                    case h.SFIXED32:
                    case h.SINT32:
                    case h.UINT32:
                        if (e === null) return 0;
                        let o;
                        if (typeof e == "number" ? o = e : e === "" ? s = "empty string" : typeof e == "string" && (e.trim().length !== e.length ? s = "extra whitespace" : o = Number(e)), o === void 0) break;
                        return t == h.UINT32 ? ee(o) : Q(o), o;
                    case h.INT64:
                    case h.SFIXED64:
                    case h.SINT64:
                        if (e === null) return $(E.ZERO, i);
                        if (typeof e != "number" && typeof e != "string") break;
                        return $(E.from(e), i);
                    case h.FIXED64:
                    case h.UINT64:
                        if (e === null) return $(F.ZERO, i);
                        if (typeof e != "number" && typeof e != "string") break;
                        return $(F.from(e), i);
                    case h.BOOL:
                        if (e === null) return !1;
                        if (typeof e != "boolean") break;
                        return e;
                    case h.STRING:
                        if (e === null) return "";
                        if (typeof e != "string") {
                            s = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(e)
                        } catch (l) {
                            l = "invalid UTF8";
                            break
                        }
                        return e;
                    case h.BYTES:
                        if (e === null || e === "") return new Uint8Array(0);
                        if (typeof e != "string") break;
                        return Zn(e)
                }
            } catch (f) {
                s = f.message
            }
            this.assert(!1, n + (s ? " - " + s : ""), e)
        }
    };
    var Ee = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        write(e, t) {
            let i = {}, n = e;
            for (let s of this.fields) {
                if (!s.oneof) {
                    let a = this.field(s, n[s.localName], t);
                    a !== void 0 && (i[t.useProtoFieldName ? s.name : s.jsonName] = a);
                    continue
                }
                let f = n[s.oneof];
                if (f.oneofKind !== s.localName) continue;
                let o = s.kind == "scalar" || s.kind == "enum" ? Object.assign(Object.assign({}, t), {emitDefaultValues: !0}) : t,
                    l = this.field(s, f[s.localName], o);
                N(l !== void 0), i[t.useProtoFieldName ? s.name : s.jsonName] = l
            }
            return i
        }

        field(e, t, i) {
            let n;
            if (e.kind == "map") {
                N(typeof t == "object" && t !== null);
                let s = {};
                switch (e.V.kind) {
                    case"scalar":
                        for (let [l, a] of Object.entries(t)) {
                            let u = this.scalar(e.V.T, a, e.name, !1, !0);
                            N(u !== void 0), s[l.toString()] = u
                        }
                        break;
                    case"message":
                        let f = e.V.T();
                        for (let [l, a] of Object.entries(t)) {
                            let u = this.message(f, a, e.name, i);
                            N(u !== void 0), s[l.toString()] = u
                        }
                        break;
                    case"enum":
                        let o = e.V.T();
                        for (let [l, a] of Object.entries(t)) {
                            N(a === void 0 || typeof a == "number");
                            let u = this.enum(o, a, e.name, !1, !0, i.enumAsInteger);
                            N(u !== void 0), s[l.toString()] = u
                        }
                        break
                }
                (i.emitDefaultValues || Object.keys(s).length > 0) && (n = s)
            } else if (e.repeat) {
                N(Array.isArray(t));
                let s = [];
                switch (e.kind) {
                    case"scalar":
                        for (let l = 0; l < t.length; l++) {
                            let a = this.scalar(e.T, t[l], e.name, e.opt, !0);
                            N(a !== void 0), s.push(a)
                        }
                        break;
                    case"enum":
                        let f = e.T();
                        for (let l = 0; l < t.length; l++) {
                            N(t[l] === void 0 || typeof t[l] == "number");
                            let a = this.enum(f, t[l], e.name, e.opt, !0, i.enumAsInteger);
                            N(a !== void 0), s.push(a)
                        }
                        break;
                    case"message":
                        let o = e.T();
                        for (let l = 0; l < t.length; l++) {
                            let a = this.message(o, t[l], e.name, i);
                            N(a !== void 0), s.push(a)
                        }
                        break
                }
                (i.emitDefaultValues || s.length > 0 || i.emitDefaultValues) && (n = s)
            } else switch (e.kind) {
                case"scalar":
                    n = this.scalar(e.T, t, e.name, e.opt, i.emitDefaultValues);
                    break;
                case"enum":
                    n = this.enum(e.T(), t, e.name, e.opt, i.emitDefaultValues, i.enumAsInteger);
                    break;
                case"message":
                    n = this.message(e.T(), t, e.name, i);
                    break
            }
            return n
        }

        enum(e, t, i, n, s, f) {
            if (e[0] == "google.protobuf.NullValue") return !s && !n ? void 0 : null;
            if (t === void 0) {
                N(n);
                return
            }
            if (!(t === 0 && !s && !n)) return N(typeof t == "number"), N(Number.isInteger(t)), f || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        }

        message(e, t, i, n) {
            return t === void 0 ? n.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, n)
        }

        scalar(e, t, i, n, s) {
            if (t === void 0) {
                N(n);
                return
            }
            let f = s || n;
            switch (e) {
                case h.INT32:
                case h.SFIXED32:
                case h.SINT32:
                    return t === 0 ? f ? 0 : void 0 : (Q(t), t);
                case h.FIXED32:
                case h.UINT32:
                    return t === 0 ? f ? 0 : void 0 : (ee(t), t);
                case h.FLOAT:
                    re(t);
                case h.DOUBLE:
                    return t === 0 ? f ? 0 : void 0 : (N(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t);
                case h.STRING:
                    return t === "" ? f ? "" : void 0 : (N(typeof t == "string"), t);
                case h.BOOL:
                    return t === !1 ? f ? !1 : void 0 : (N(typeof t == "boolean"), t);
                case h.UINT64:
                case h.FIXED64:
                    N(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                    let o = F.from(t);
                    return o.isZero() && !f ? void 0 : o.toString();
                case h.INT64:
                case h.SFIXED64:
                case h.SINT64:
                    N(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                    let l = E.from(t);
                    return l.isZero() && !f ? void 0 : l.toString();
                case h.BYTES:
                    return N(t instanceof Uint8Array), t.byteLength ? Yn(t) : f ? "" : void 0
            }
        }
    };

    function de(r, e = S.STRING) {
        switch (r) {
            case h.BOOL:
                return !1;
            case h.UINT64:
            case h.FIXED64:
                return $(F.ZERO, e);
            case h.INT64:
            case h.SFIXED64:
            case h.SINT64:
                return $(E.ZERO, e);
            case h.DOUBLE:
            case h.FLOAT:
                return 0;
            case h.BYTES:
                return new Uint8Array(0);
            case h.STRING:
                return "";
            default:
                return 0
        }
    }

    var Fe = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                this.fieldNoToField = new Map(t.map(i => [i.no, i]))
            }
        }

        read(e, t, i, n) {
            this.prepare();
            let s = n === void 0 ? e.len : e.pos + n;
            for (; e.pos < s;) {
                let [f, o] = e.tag(), l = this.fieldNoToField.get(f);
                if (!l) {
                    let g = i.readUnknownField;
                    if (g == "throw") throw new Error(`Unknown field ${f} (wire type ${o}) for ${this.info.typeName}`);
                    let w = e.skip(o);
                    g !== !1 && (g === !0 ? p.onRead : g)(this.info.typeName, t, f, o, w);
                    continue
                }
                let a = t, u = l.repeat, d = l.localName;
                switch (l.oneof && (a = a[l.oneof], a.oneofKind !== d && (a = t[l.oneof] = {oneofKind: d})), l.kind) {
                    case"scalar":
                    case"enum":
                        let g = l.kind == "enum" ? h.INT32 : l.T, w = l.kind == "scalar" ? l.L : void 0;
                        if (u) {
                            let T = a[d];
                            if (o == c.LengthDelimited && g != h.STRING && g != h.BYTES) {
                                let v = e.uint32() + e.pos;
                                for (; e.pos < v;) T.push(this.scalar(e, g, w))
                            } else T.push(this.scalar(e, g, w))
                        } else a[d] = this.scalar(e, g, w);
                        break;
                    case"message":
                        if (u) {
                            let T = a[d], v = l.T().internalBinaryRead(e, e.uint32(), i);
                            T.push(v)
                        } else a[d] = l.T().internalBinaryRead(e, e.uint32(), i, a[d]);
                        break;
                    case"map":
                        let [k, O] = this.mapEntry(l, e, i);
                        a[d][k] = O;
                        break
                }
            }
        }

        mapEntry(e, t, i) {
            let n = t.uint32(), s = t.pos + n, f, o;
            for (; t.pos < s;) {
                let [l, a] = t.tag();
                switch (l) {
                    case 1:
                        e.K == h.BOOL ? f = t.bool().toString() : f = this.scalar(t, e.K, S.STRING);
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case"scalar":
                                o = this.scalar(t, e.V.T, e.V.L);
                                break;
                            case"enum":
                                o = t.int32();
                                break;
                            case"message":
                                o = e.V.T().internalBinaryRead(t, t.uint32(), i);
                                break
                        }
                        break;
                    default:
                        throw new Error(`Unknown field ${l} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`)
                }
            }
            if (f === void 0) {
                let l = de(e.K);
                f = e.K == h.BOOL ? l.toString() : l
            }
            if (o === void 0) switch (e.V.kind) {
                case"scalar":
                    o = de(e.V.T, e.V.L);
                    break;
                case"enum":
                    o = 0;
                    break;
                case"message":
                    o = e.V.T().create();
                    break
            }
            return [f, o]
        }

        scalar(e, t, i) {
            switch (t) {
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
                    return $(e.int64(), i);
                case h.UINT64:
                    return $(e.uint64(), i);
                case h.FIXED64:
                    return $(e.fixed64(), i);
                case h.FIXED32:
                    return e.fixed32();
                case h.BYTES:
                    return e.bytes();
                case h.UINT32:
                    return e.uint32();
                case h.SFIXED32:
                    return e.sfixed32();
                case h.SFIXED64:
                    return $(e.sfixed64(), i);
                case h.SINT32:
                    return e.sint32();
                case h.SINT64:
                    return $(e.sint64(), i)
            }
        }
    };
    var Oe = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((t, i) => t.no - i.no)
            }
        }

        write(e, t, i) {
            this.prepare();
            for (let s of this.fields) {
                let f, o, l = s.repeat, a = s.localName;
                if (s.oneof) {
                    let u = e[s.oneof];
                    if (u.oneofKind !== a) continue;
                    f = u[a], o = !0
                } else f = e[a], o = !1;
                switch (s.kind) {
                    case"scalar":
                    case"enum":
                        let u = s.kind == "enum" ? h.INT32 : s.T;
                        if (l) if (N(Array.isArray(f)), l == pe.PACKED) this.packed(t, u, s.no, f); else for (let d of f) this.scalar(t, u, s.no, d, !0); else f === void 0 ? N(s.opt) : this.scalar(t, u, s.no, f, o || s.opt);
                        break;
                    case"message":
                        if (l) {
                            N(Array.isArray(f));
                            for (let d of f) this.message(t, i, s.T(), s.no, d)
                        } else this.message(t, i, s.T(), s.no, f);
                        break;
                    case"map":
                        N(typeof f == "object" && f !== null);
                        for (let [d, g] of Object.entries(f)) this.mapEntry(t, i, s, d, g);
                        break
                }
            }
            let n = i.writeUnknownFields;
            n !== !1 && (n === !0 ? p.onWrite : n)(this.info.typeName, e, t)
        }

        mapEntry(e, t, i, n, s) {
            e.tag(i.no, c.LengthDelimited), e.fork();
            let f = n;
            switch (i.K) {
                case h.INT32:
                case h.FIXED32:
                case h.UINT32:
                case h.SFIXED32:
                case h.SINT32:
                    f = Number.parseInt(n);
                    break;
                case h.BOOL:
                    N(n == "true" || n == "false"), f = n == "true";
                    break
            }
            switch (this.scalar(e, i.K, 1, f, !0), i.V.kind) {
                case"scalar":
                    this.scalar(e, i.V.T, 2, s, !0);
                    break;
                case"enum":
                    this.scalar(e, h.INT32, 2, s, !0);
                    break;
                case"message":
                    this.message(e, t, i.V.T(), 2, s);
                    break
            }
            e.join()
        }

        message(e, t, i, n, s) {
            s !== void 0 && (i.internalBinaryWrite(s, e.tag(n, c.LengthDelimited).fork(), t), e.join())
        }

        scalar(e, t, i, n, s) {
            let [f, o, l] = this.scalarInfo(t, n);
            (!l || s) && (e.tag(i, f), e[o](n))
        }

        packed(e, t, i, n) {
            if (!n.length) return;
            N(t !== h.BYTES && t !== h.STRING), e.tag(i, c.LengthDelimited), e.fork();
            let [, s] = this.scalarInfo(t);
            for (let f = 0; f < n.length; f++) e[s](n[f]);
            e.join()
        }

        scalarInfo(e, t) {
            let i = c.Varint, n, s = t === void 0, f = t === 0;
            switch (e) {
                case h.INT32:
                    n = "int32";
                    break;
                case h.STRING:
                    f = s || !t.length, i = c.LengthDelimited, n = "string";
                    break;
                case h.BOOL:
                    f = t === !1, n = "bool";
                    break;
                case h.UINT32:
                    n = "uint32";
                    break;
                case h.DOUBLE:
                    i = c.Bit64, n = "double";
                    break;
                case h.FLOAT:
                    i = c.Bit32, n = "float";
                    break;
                case h.INT64:
                    f = s || E.from(t).isZero(), n = "int64";
                    break;
                case h.UINT64:
                    f = s || F.from(t).isZero(), n = "uint64";
                    break;
                case h.FIXED64:
                    f = s || F.from(t).isZero(), i = c.Bit64, n = "fixed64";
                    break;
                case h.BYTES:
                    f = s || !t.byteLength, i = c.LengthDelimited, n = "bytes";
                    break;
                case h.FIXED32:
                    i = c.Bit32, n = "fixed32";
                    break;
                case h.SFIXED32:
                    i = c.Bit32, n = "sfixed32";
                    break;
                case h.SFIXED64:
                    f = s || E.from(t).isZero(), i = c.Bit64, n = "sfixed64";
                    break;
                case h.SINT32:
                    n = "sint32";
                    break;
                case h.SINT64:
                    f = s || E.from(t).isZero(), n = "sint64";
                    break
            }
            return [i, n, s || f]
        }
    };

    function hi(r) {
        let e = r.messagePrototype ? Object.create(r.messagePrototype) : Object.defineProperty({}, Ue, {value: r});
        for (let t of r.fields) {
            let i = t.localName;
            if (!t.opt) if (t.oneof) e[t.oneof] = {oneofKind: void 0}; else if (t.repeat) e[i] = []; else switch (t.kind) {
                case"scalar":
                    e[i] = de(t.T, t.L);
                    break;
                case"enum":
                    e[i] = 0;
                    break;
                case"map":
                    e[i] = {};
                    break
            }
        }
        return e
    }

    function m(r, e, t) {
        let i, n = t, s;
        for (let f of r.fields) {
            let o = f.localName;
            if (f.oneof) {
                let l = n[f.oneof];
                if (l?.oneofKind == null) continue;
                if (i = l[o], s = e[f.oneof], s.oneofKind = l.oneofKind, i == null) {
                    delete s[o];
                    continue
                }
            } else if (i = n[o], s = e, i == null) continue;
            switch (f.repeat && (s[o].length = i.length), f.kind) {
                case"scalar":
                case"enum":
                    if (f.repeat) for (let a = 0; a < i.length; a++) s[o][a] = i[a]; else s[o] = i;
                    break;
                case"message":
                    let l = f.T();
                    if (f.repeat) for (let a = 0; a < i.length; a++) s[o][a] = l.create(i[a]); else s[o] === void 0 ? s[o] = l.create(i) : l.mergePartial(s[o], i);
                    break;
                case"map":
                    switch (f.V.kind) {
                        case"scalar":
                        case"enum":
                            Object.assign(s[o], i);
                            break;
                        case"message":
                            let a = f.V.T();
                            for (let u of Object.keys(i)) s[o][u] = a.create(i[u]);
                            break
                    }
                    break
            }
        }
    }

    function mi(r, e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        for (let i of r.fields) {
            let n = i.localName, s = i.oneof ? e[i.oneof][n] : e[n], f = i.oneof ? t[i.oneof][n] : t[n];
            switch (i.kind) {
                case"enum":
                case"scalar":
                    let o = i.kind == "enum" ? h.INT32 : i.T;
                    if (!(i.repeat ? pi(o, s, f) : yi(o, s, f))) return !1;
                    break;
                case"map":
                    if (!(i.V.kind == "message" ? di(i.V.T(), De(s), De(f)) : pi(i.V.kind == "enum" ? h.INT32 : i.V.T, De(s), De(f)))) return !1;
                    break;
                case"message":
                    let l = i.T();
                    if (!(i.repeat ? di(l, s, f) : l.equals(s, f))) return !1;
                    break
            }
        }
        return !0
    }

    var De = Object.values;

    function yi(r, e, t) {
        if (e === t) return !0;
        if (r !== h.BYTES) return !1;
        let i = e, n = t;
        if (i.length !== n.length) return !1;
        for (let s = 0; s < i.length; s++) if (i[s] != n[s]) return !1;
        return !0
    }

    function pi(r, e, t) {
        if (e.length !== t.length) return !1;
        for (let i = 0; i < e.length; i++) if (!yi(r, e[i], t[i])) return !1;
        return !0
    }

    function di(r, e, t) {
        if (e.length !== t.length) return !1;
        for (let i = 0; i < e.length; i++) if (!r.equals(e[i], t[i])) return !1;
        return !0
    }

    var hr = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})), y = class {
        constructor(e, t, i) {
            this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(ui), this.options = i ?? {}, this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, hr), {[Ue]: {value: this}})), this.refTypeCheck = new Re(this), this.refJsonReader = new Ie(this), this.refJsonWriter = new Ee(this), this.refBinReader = new Fe(this), this.refBinWriter = new Oe(this)
        }

        create(e) {
            let t = hi(this);
            return e !== void 0 && m(this, t, e), t
        }

        clone(e) {
            let t = this.create();
            return m(this, t, e), t
        }

        equals(e, t) {
            return mi(this, e, t)
        }

        is(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !1)
        }

        isAssignable(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !0)
        }

        mergePartial(e, t) {
            m(this, e, t)
        }

        fromBinary(e, t) {
            let i = ii(t);
            return this.internalBinaryRead(i.readerFactory(e), e.byteLength, i)
        }

        fromJson(e, t) {
            return this.internalJsonRead(e, li(t))
        }

        fromJsonString(e, t) {
            let i = JSON.parse(e);
            return this.fromJson(i, t)
        }

        toJson(e, t) {
            return this.internalJsonWrite(e, fi(t))
        }

        toJsonString(e, t) {
            var i;
            let n = this.toJson(e, t);
            return JSON.stringify(n, null, (i = t?.prettySpaces) !== null && i !== void 0 ? i : 0)
        }

        toBinary(e, t) {
            let i = si(t);
            return this.internalBinaryWrite(e, i.writerFactory(), i).finish()
        }

        internalJsonRead(e, t, i) {
            if (e !== null && typeof e == "object" && !Array.isArray(e)) {
                let n = i ?? this.create();
                return this.refJsonReader.read(e, n, t), n
            }
            throw new Error(`Unable to parse message ${this.typeName} from JSON ${ge(e)}.`)
        }

        internalJsonWrite(e, t) {
            return this.refJsonWriter.write(e, t)
        }

        internalBinaryWrite(e, t, i) {
            return this.refBinWriter.write(e, t, i), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create();
            return this.refBinReader.read(e, s, i, t), s
        }
    };
    var oe;
    (function (r) {
        r[r.DYN_NONE = 0] = "DYN_NONE", r[r.AD = 15] = "AD", r[r.LIVE_RCMD = 18] = "LIVE_RCMD"
    })(oe || (oe = {}));
    var Ye = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.DynAllReply", [{
                no: 1,
                name: "dynamic_list",
                kind: "message",
                T: () => Je
            }, {no: 2, name: "up_list", kind: "message", T: () => Ze}, {
                no: 3,
                name: "topic_list",
                kind: "scalar",
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.topicList = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.dynamicList = Je.internalBinaryRead(e, e.uint32(), i, s.dynamicList);
                        break;
                    case 2:
                        s.upList = Ze.internalBinaryRead(e, e.uint32(), i, s.upList);
                        break;
                    case 3:
                        s.topicList = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.dynamicList && Je.internalBinaryWrite(e.dynamicList, t.tag(1, c.LengthDelimited).fork(), i).join(), e.upList && Ze.internalBinaryWrite(e.upList, t.tag(2, c.LengthDelimited).fork(), i).join(), e.topicList.length && t.tag(3, c.LengthDelimited).bytes(e.topicList);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, nt = new Ye, He = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.DynamicList", [{
                no: 1,
                name: "list",
                kind: "message",
                repeat: 1,
                T: () => Xe
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.list = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.list.push(Xe.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.list.length; s++) Xe.internalBinaryWrite(e.list[s], t.tag(1, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Je = new He, Qe = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.DynamicItem", [{
                no: 1,
                name: "card_type",
                kind: "enum",
                T: () => ["bilibili.app.dynamic.v2.DynamicType", oe]
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cardType = 0, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.cardType = e.int32();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.cardType !== 0 && t.tag(1, c.Varint).int32(e.cardType);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Xe = new Qe, et = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.CardVideoUpList", [{
                no: 2,
                name: "list",
                kind: "message",
                repeat: 1,
                T: () => se
            }, {no: 4, name: "show_live_num", kind: "scalar", T: 5}, {
                no: 10,
                name: "list_second",
                kind: "message",
                repeat: 1,
                T: () => se
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.list = [], t.showLiveNum = 0, t.listSecond = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 2:
                        s.list.push(se.internalBinaryRead(e, e.uint32(), i));
                        break;
                    case 4:
                        s.showLiveNum = e.int32();
                        break;
                    case 10:
                        s.listSecond.push(se.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.list.length; s++) se.internalBinaryWrite(e.list[s], t.tag(2, c.LengthDelimited).fork(), i).join();
            e.showLiveNum !== 0 && t.tag(4, c.Varint).int32(e.showLiveNum);
            for (let s = 0; s < e.listSecond.length; s++) se.internalBinaryWrite(e.listSecond[s], t.tag(10, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Ze = new et, tt = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.UpListItem", [{no: 11, name: "separator", kind: "scalar", T: 8}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.separator = !1, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 11:
                        s.separator = e.bool();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.separator !== !1 && t.tag(11, c.Varint).bool(e.separator);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, se = new tt;
    var it = class extends y {
        constructor() {
            super("bilibili.app.interface.v1.DefaultWordsReply", [{no: 3, name: "show", kind: "scalar", T: 9}, {
                no: 4,
                name: "word",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "goto", kind: "scalar", T: 9}, {no: 8, name: "value", kind: "scalar", T: 9}, {
                no: 9,
                name: "uri",
                kind: "scalar",
                T: 9
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.show = "", t.word = "", t.goto = "", t.value = "", t.uri = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 3:
                        s.show = e.string();
                        break;
                    case 4:
                        s.word = e.string();
                        break;
                    case 7:
                        s.goto = e.string();
                        break;
                    case 8:
                        s.value = e.string();
                        break;
                    case 9:
                        s.uri = e.string();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.show !== "" && t.tag(3, c.LengthDelimited).string(e.show), e.word !== "" && t.tag(4, c.LengthDelimited).string(e.word), e.goto !== "" && t.tag(7, c.LengthDelimited).string(e.goto), e.value !== "" && t.tag(8, c.LengthDelimited).string(e.value), e.uri !== "" && t.tag(9, c.LengthDelimited).string(e.uri);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, rt = new it;
    var at = class extends y {
        constructor() {
            super("bilibili.app.interface.v1.ModeStatusReply", [{
                no: 1,
                name: "user_models",
                kind: "message",
                repeat: 1,
                T: () => st
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.userModels = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.userModels.push(st.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.userModels.length; s++) st.internalBinaryWrite(e.userModels[s], t.tag(1, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, ut = new at, lt = class extends y {
        constructor() {
            super("bilibili.app.interface.v1.UserModel", [{no: 2, name: "mode", kind: "scalar", T: 9}, {
                no: 5,
                name: "policy",
                kind: "message",
                T: () => ot
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.mode = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 2:
                        s.mode = e.string();
                        break;
                    case 5:
                        s.policy = ot.internalBinaryRead(e, e.uint32(), i, s.policy);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.mode !== "" && t.tag(2, c.LengthDelimited).string(e.mode), e.policy && ot.internalBinaryWrite(e.policy, t.tag(5, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, st = new lt, ft = class extends y {
        constructor() {
            super("bilibili.app.interface.v1.Policy", [{no: 1, name: "interval", kind: "scalar", T: 3, L: 0}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.interval = 0n, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.interval = e.int64().toBigInt();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.interval !== 0n && t.tag(1, c.Varint).int64(e.interval);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, ot = new ft;
    var ht = class extends y {
        constructor() {
            super("bilibili.playershared.PlayArcConf", [{
                no: 1,
                name: "arc_confs",
                kind: "map",
                K: 5,
                V: {kind: "message", T: () => Ae}
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.arcConfs = {}, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        this.binaryReadMap1(s.arcConfs, e, i);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        binaryReadMap1(e, t, i) {
            let n = t.uint32(), s = t.pos + n, f, o;
            for (; t.pos < s;) {
                let [l, a] = t.tag();
                switch (l) {
                    case 1:
                        f = t.int32();
                        break;
                    case 2:
                        o = Ae.internalBinaryRead(t, t.uint32(), i);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.playershared.PlayArcConf.arc_confs")
                }
            }
            e[f ?? 0] = o ?? Ae.create()
        }

        internalBinaryWrite(e, t, i) {
            for (let s of globalThis.Object.keys(e.arcConfs)) t.tag(1, c.LengthDelimited).fork().tag(1, c.Varint).int32(parseInt(s)), t.tag(2, c.LengthDelimited).fork(), Ae.internalBinaryWrite(e.arcConfs[s], t, i), t.join().join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Le = new ht, pt = class extends y {
        constructor() {
            super("bilibili.playershared.ArcConf", [{no: 1, name: "is_support", kind: "scalar", T: 8}, {
                no: 2,
                name: "disabled",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "extra_content", kind: "message", T: () => ct}, {
                no: 4,
                name: "unsupport_scene",
                kind: "scalar",
                repeat: 1,
                T: 5
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.isSupport = !1, t.disabled = !1, t.unsupportScene = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.isSupport = e.bool();
                        break;
                    case 2:
                        s.disabled = e.bool();
                        break;
                    case 3:
                        s.extraContent = ct.internalBinaryRead(e, e.uint32(), i, s.extraContent);
                        break;
                    case 4:
                        if (l === c.LengthDelimited) for (let d = e.int32() + e.pos; e.pos < d;) s.unsupportScene.push(e.int32()); else s.unsupportScene.push(e.int32());
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            if (e.isSupport !== !1 && t.tag(1, c.Varint).bool(e.isSupport), e.disabled !== !1 && t.tag(2, c.Varint).bool(e.disabled), e.extraContent && ct.internalBinaryWrite(e.extraContent, t.tag(3, c.LengthDelimited).fork(), i).join(), e.unsupportScene.length) {
                t.tag(4, c.LengthDelimited).fork();
                for (let s = 0; s < e.unsupportScene.length; s++) t.int32(e.unsupportScene[s]);
                t.join()
            }
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Ae = new pt, dt = class extends y {
        constructor() {
            super("bilibili.playershared.ExtraContent", [{no: 1, name: "disable_reason", kind: "scalar", T: 9}, {
                no: 2,
                name: "disable_code",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.disableReason = "", t.disableCode = 0n, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.disableReason = e.string();
                        break;
                    case 2:
                        s.disableCode = e.int64().toBigInt();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.disableReason !== "" && t.tag(1, c.LengthDelimited).string(e.disableReason), e.disableCode !== 0n && t.tag(2, c.Varint).int64(e.disableCode);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, ct = new dt, mt = class extends y {
        constructor() {
            super("bilibili.playershared.ViewInfo", [{no: 2, name: "prompt_bar", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.promptBar = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 2:
                        s.promptBar = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.promptBar.length && t.tag(2, c.LengthDelimited).bytes(e.promptBar);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Ve = new mt;
    var yt = class extends y {
        constructor() {
            super("bilibili.app.playerunite.v1.PlayViewUniteReply", [{
                no: 2,
                name: "play_arc_conf",
                kind: "message",
                T: () => Le
            }, {no: 9, name: "view_info", kind: "message", T: () => Ve}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 2:
                        s.playArcConf = Le.internalBinaryRead(e, e.uint32(), i, s.playArcConf);
                        break;
                    case 9:
                        s.viewInfo = Ve.internalBinaryRead(e, e.uint32(), i, s.viewInfo);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.playArcConf && Le.internalBinaryWrite(e.playArcConf, t.tag(2, c.LengthDelimited).fork(), i).join(), e.viewInfo && Ve.internalBinaryWrite(e.viewInfo, t.tag(9, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, wt = new yt;
    var vt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.PlayViewReply", [{no: 5, name: "play_arc", kind: "message", T: () => gt}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 5:
                        s.playArc = gt.internalBinaryRead(e, e.uint32(), i, s.playArc);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.playArc && gt.internalBinaryWrite(e.playArc, t.tag(5, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, xt = new vt, kt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.PlayArcConf", [{
                no: 1,
                name: "background_play_conf",
                kind: "message",
                T: () => ae
            }, {no: 3, name: "cast_conf", kind: "message", T: () => ae}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.backgroundPlayConf = ae.internalBinaryRead(e, e.uint32(), i, s.backgroundPlayConf);
                        break;
                    case 3:
                        s.castConf = ae.internalBinaryRead(e, e.uint32(), i, s.castConf);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.backgroundPlayConf && ae.internalBinaryWrite(e.backgroundPlayConf, t.tag(1, c.LengthDelimited).fork(), i).join(), e.castConf && ae.internalBinaryWrite(e.castConf, t.tag(3, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, gt = new kt, Nt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.ArcConf", [{no: 1, name: "is_support", kind: "scalar", T: 8}, {
                no: 2,
                name: "disabled",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "extra_content", kind: "message", T: () => bt}, {
                no: 4,
                name: "unsupport_scene",
                kind: "scalar",
                repeat: 1,
                T: 3,
                L: 0
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.isSupport = !1, t.disabled = !1, t.unsupportScene = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.isSupport = e.bool();
                        break;
                    case 2:
                        s.disabled = e.bool();
                        break;
                    case 3:
                        s.extraContent = bt.internalBinaryRead(e, e.uint32(), i, s.extraContent);
                        break;
                    case 4:
                        if (l === c.LengthDelimited) for (let d = e.int32() + e.pos; e.pos < d;) s.unsupportScene.push(e.int64().toBigInt()); else s.unsupportScene.push(e.int64().toBigInt());
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            if (e.isSupport !== !1 && t.tag(1, c.Varint).bool(e.isSupport), e.disabled !== !1 && t.tag(2, c.Varint).bool(e.disabled), e.extraContent && bt.internalBinaryWrite(e.extraContent, t.tag(3, c.LengthDelimited).fork(), i).join(), e.unsupportScene.length) {
                t.tag(4, c.LengthDelimited).fork();
                for (let s = 0; s < e.unsupportScene.length; s++) t.int64(e.unsupportScene[s]);
                t.join()
            }
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, ae = new Nt, Tt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.ExtraContent", [{
                no: 1,
                name: "disabled_reason",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "disabled_code", kind: "scalar", T: 3, L: 0}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.disabledReason = "", t.disabledCode = 0n, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.disabledReason = e.string();
                        break;
                    case 2:
                        s.disabledCode = e.int64().toBigInt();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.disabledReason !== "" && t.tag(1, c.LengthDelimited).string(e.disabledReason), e.disabledCode !== 0n && t.tag(2, c.Varint).int64(e.disabledCode);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, bt = new Tt;
    var Ut = class extends y {
        constructor() {
            super("bilibili.app.show.popular.v1.PopularReply", [{
                no: 1,
                name: "items",
                kind: "message",
                repeat: 1,
                T: () => Bt
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.items = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.items.push(Bt.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.items.length; s++) Bt.internalBinaryWrite(e.items[s], t.tag(1, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, It = new Ut, Rt = class extends y {
        constructor() {
            super("bilibili.app.show.popular.v1.Card", [{
                no: 10,
                name: "rcmd_one_item",
                kind: "scalar",
                oneof: "item",
                T: 12
            }, {no: 11, name: "small_cover_v5_ad", kind: "scalar", oneof: "item", T: 12}, {
                no: 12,
                name: "topic_list",
                kind: "scalar",
                oneof: "item",
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.item = {oneofKind: void 0}, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 10:
                        s.item = {oneofKind: "rcmdOneItem", rcmdOneItem: e.bytes()};
                        break;
                    case 11:
                        s.item = {oneofKind: "smallCoverV5Ad", smallCoverV5Ad: e.bytes()};
                        break;
                    case 12:
                        s.item = {oneofKind: "topicList", topicList: e.bytes()};
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.item.oneofKind === "rcmdOneItem" && t.tag(10, c.LengthDelimited).bytes(e.item.rcmdOneItem), e.item.oneofKind === "smallCoverV5Ad" && t.tag(11, c.LengthDelimited).bytes(e.item.smallCoverV5Ad), e.item.oneofKind === "topicList" && t.tag(12, c.LengthDelimited).bytes(e.item.topicList);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Bt = new Rt;
    var Ot = class extends y {
        constructor() {
            super("bilibili.app.view.v1.ViewReply", [{no: 4, name: "req_user", kind: "message", T: () => Et}, {
                no: 10,
                name: "relates",
                kind: "message",
                repeat: 1,
                T: () => Ft
            }, {no: 23, name: "label", kind: "scalar", T: 12}, {
                no: 30,
                name: "cms",
                kind: "scalar",
                repeat: 2,
                T: 12
            }, {no: 31, name: "cm_config", kind: "scalar", T: 12}, {
                no: 41,
                name: "cm_ipad",
                kind: "scalar",
                T: 12
            }, {no: 50, name: "special_cell_new", kind: "scalar", repeat: 2, T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.relates = [], t.label = new Uint8Array(0), t.cms = [], t.cmConfig = new Uint8Array(0), t.cmIpad = new Uint8Array(0), t.specialCellNew = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 4:
                        s.reqUser = Et.internalBinaryRead(e, e.uint32(), i, s.reqUser);
                        break;
                    case 10:
                        s.relates.push(Ft.internalBinaryRead(e, e.uint32(), i));
                        break;
                    case 23:
                        s.label = e.bytes();
                        break;
                    case 30:
                        s.cms.push(e.bytes());
                        break;
                    case 31:
                        s.cmConfig = e.bytes();
                        break;
                    case 41:
                        s.cmIpad = e.bytes();
                        break;
                    case 50:
                        s.specialCellNew.push(e.bytes());
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.reqUser && Et.internalBinaryWrite(e.reqUser, t.tag(4, c.LengthDelimited).fork(), i).join();
            for (let s = 0; s < e.relates.length; s++) Ft.internalBinaryWrite(e.relates[s], t.tag(10, c.LengthDelimited).fork(), i).join();
            e.label.length && t.tag(23, c.LengthDelimited).bytes(e.label);
            for (let s = 0; s < e.cms.length; s++) t.tag(30, c.LengthDelimited).bytes(e.cms[s]);
            e.cmConfig.length && t.tag(31, c.LengthDelimited).bytes(e.cmConfig), e.cmIpad.length && t.tag(41, c.LengthDelimited).bytes(e.cmIpad);
            for (let s = 0; s < e.specialCellNew.length; s++) t.tag(50, c.LengthDelimited).bytes(e.specialCellNew[s]);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, St = new Ot, Dt = class extends y {
        constructor() {
            super("bilibili.app.view.v1.ReqUser", [{no: 9, name: "elec_plus_btn", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elecPlusBtn = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 9:
                        s.elecPlusBtn = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.elecPlusBtn.length && t.tag(9, c.LengthDelimited).bytes(e.elecPlusBtn);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Et = new Dt, At = class extends y {
        constructor() {
            super("bilibili.app.view.v1.Relate", [{no: 28, name: "cm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 28:
                        s.cm = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.cm.length && t.tag(28, c.LengthDelimited).bytes(e.cm);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Ft = new At, Lt = class extends y {
        constructor() {
            super("bilibili.app.view.v1.ViewProgressReply", [{no: 1, name: "video_guide", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.videoGuide = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.videoGuide = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.videoGuide.length && t.tag(1, c.LengthDelimited).bytes(e.videoGuide);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Pt = new Lt, Vt = class extends y {
        constructor() {
            super("bilibili.app.view.v1.TFInfoReply", [{no: 1, name: "tips_id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "tf_toast",
                kind: "scalar",
                T: 12
            }, {no: 3, name: "tf_panel_customized", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tipsId = 0n, t.tfToast = new Uint8Array(0), t.tfPanelCustomized = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.tipsId = e.int64().toBigInt();
                        break;
                    case 2:
                        s.tfToast = e.bytes();
                        break;
                    case 3:
                        s.tfPanelCustomized = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.tipsId !== 0n && t.tag(1, c.Varint).int64(e.tipsId), e.tfToast.length && t.tag(2, c.LengthDelimited).bytes(e.tfToast), e.tfPanelCustomized.length && t.tag(3, c.LengthDelimited).bytes(e.tfPanelCustomized);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Ct = new Vt;
    var qt;
    (function (r) {
        r[r.TAB_NONE = 0] = "TAB_NONE", r[r.TAB_INTRODUCTION = 1] = "TAB_INTRODUCTION"
    })(qt || (qt = {}));
    var J;
    (function (r) {
        r[r.UNKNOWN = 0] = "UNKNOWN", r[r.UGC_HEADLINE = 3] = "UGC_HEADLINE", r[r.RELATED_RECOMMEND = 28] = "RELATED_RECOMMEND", r[r.PAY_BAR = 29] = "PAY_BAR", r[r.SPECIALTAG = 37] = "SPECIALTAG", r[r.MERCHANDISE = 55] = "MERCHANDISE"
    })(J || (J = {}));
    var X;
    (function (r) {
        r[r.CARD_TYPE_UNKNOWN = 0] = "CARD_TYPE_UNKNOWN", r[r.AV = 1] = "AV", r[r.GAME = 4] = "GAME", r[r.CM_TYPE = 5] = "CM_TYPE", r[r.LIVE = 6] = "LIVE", r[r.AI_RECOMMEND = 7] = "AI_RECOMMEND", r[r.COURSE = 11] = "COURSE"
    })(X || (X = {}));
    var Jt = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.ViewReply", [{
                no: 3,
                name: "req_user",
                kind: "message",
                T: () => Wt
            }, {no: 5, name: "tab", kind: "message", T: () => $t}, {no: 7, name: "cm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 3:
                        s.reqUser = Wt.internalBinaryRead(e, e.uint32(), i, s.reqUser);
                        break;
                    case 5:
                        s.tab = $t.internalBinaryRead(e, e.uint32(), i, s.tab);
                        break;
                    case 7:
                        s.cm = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.reqUser && Wt.internalBinaryWrite(e.reqUser, t.tag(3, c.LengthDelimited).fork(), i).join(), e.tab && $t.internalBinaryWrite(e.tab, t.tag(5, c.LengthDelimited).fork(), i).join(), e.cm.length && t.tag(7, c.LengthDelimited).bytes(e.cm);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, an = new Jt, Xt = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.ReqUser", [{no: 7, name: "elec_plus_btn", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elecPlusBtn = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 7:
                        s.elecPlusBtn = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.elecPlusBtn.length && t.tag(7, c.LengthDelimited).bytes(e.elecPlusBtn);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Wt = new Xt, Zt = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.Tab", [{
                no: 1,
                name: "tab_module",
                kind: "message",
                repeat: 1,
                T: () => Mt
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tabModule = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.tabModule.push(Mt.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.tabModule.length; s++) Mt.internalBinaryWrite(e.tabModule[s], t.tag(1, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, $t = new Zt, Yt = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.TabModule", [{
                no: 1,
                name: "tab_type",
                kind: "enum",
                T: () => ["bilibili.app.viewunite.v1.TabType", qt]
            }, {no: 2, name: "introduction", kind: "message", oneof: "tab", T: () => jt}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tabType = 0, t.tab = {oneofKind: void 0}, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.tabType = e.int32();
                        break;
                    case 2:
                        s.tab = {
                            oneofKind: "introduction",
                            introduction: jt.internalBinaryRead(e, e.uint32(), i, s.tab.introduction)
                        };
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.tabType !== 0 && t.tag(1, c.Varint).int32(e.tabType), e.tab.oneofKind === "introduction" && jt.internalBinaryWrite(e.tab.introduction, t.tag(2, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Mt = new Yt, Ht = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.IntroductionTab", [{
                no: 2,
                name: "modules",
                kind: "message",
                repeat: 1,
                T: () => zt
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.modules = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 2:
                        s.modules.push(zt.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.modules.length; s++) zt.internalBinaryWrite(e.modules[s], t.tag(2, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, jt = new Ht, Qt = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.Module", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["bilibili.app.viewunite.v1.ModuleType", J]
            }, {no: 5, name: "head_line", kind: "message", oneof: "data", T: () => _t}, {
                no: 22,
                name: "relates",
                kind: "message",
                oneof: "data",
                T: () => Kt
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.type = 0, t.data = {oneofKind: void 0}, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.type = e.int32();
                        break;
                    case 5:
                        s.data = {
                            oneofKind: "headLine",
                            headLine: _t.internalBinaryRead(e, e.uint32(), i, s.data.headLine)
                        };
                        break;
                    case 22:
                        s.data = {
                            oneofKind: "relates",
                            relates: Kt.internalBinaryRead(e, e.uint32(), i, s.data.relates)
                        };
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.type !== 0 && t.tag(1, c.Varint).int32(e.type), e.data.oneofKind === "headLine" && _t.internalBinaryWrite(e.data.headLine, t.tag(5, c.LengthDelimited).fork(), i).join(), e.data.oneofKind === "relates" && Kt.internalBinaryWrite(e.data.relates, t.tag(22, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, zt = new Qt, en = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.Headline", [{no: 1, name: "label", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.label = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.label = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.label.length && t.tag(1, c.LengthDelimited).bytes(e.label);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, _t = new en, tn = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.Relates", [{
                no: 1,
                name: "cards",
                kind: "message",
                repeat: 1,
                T: () => le
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cards = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.cards.push(le.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.cards.length; s++) le.internalBinaryWrite(e.cards[s], t.tag(1, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Kt = new tn, nn = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.RelateCard", [{
                no: 1,
                name: "relate_card_type",
                kind: "enum",
                T: () => ["bilibili.app.viewunite.v1.RelateCardType", X]
            }, {no: 11, name: "cm_stock", kind: "scalar", T: 12}, {
                no: 12,
                name: "basic_info",
                kind: "message",
                T: () => Gt
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.relateCardType = 0, t.cmStock = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.relateCardType = e.int32();
                        break;
                    case 11:
                        s.cmStock = e.bytes();
                        break;
                    case 12:
                        s.basicInfo = Gt.internalBinaryRead(e, e.uint32(), i, s.basicInfo);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.relateCardType !== 0 && t.tag(1, c.Varint).int32(e.relateCardType), e.cmStock.length && t.tag(11, c.LengthDelimited).bytes(e.cmStock), e.basicInfo && Gt.internalBinaryWrite(e.basicInfo, t.tag(12, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, le = new nn, rn = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.CardBasicInfo", [{no: 6, name: "unique_id", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.uniqueId = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 6:
                        s.uniqueId = e.string();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.uniqueId !== "" && t.tag(6, c.LengthDelimited).string(e.uniqueId);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Gt = new rn, sn = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.ViewProgressReply", [{no: 4, name: "dm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.dm = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 4:
                        s.dm = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.dm.length && t.tag(4, c.LengthDelimited).bytes(e.dm);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, ln = new sn, on = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.RelatesFeedReply", [{
                no: 1,
                name: "relates",
                kind: "message",
                repeat: 1,
                T: () => le
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.relates = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.relates.push(le.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.relates.length; s++) le.internalBinaryWrite(e.relates[s], t.tag(1, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, fn = new on;
    var cn = class extends y {
        constructor() {
            super("bilibili.community.service.dm.v1.DmViewReply", [{
                no: 18,
                name: "activity_meta",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 22, name: "command", kind: "message", T: () => un}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.activityMeta = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 18:
                        s.activityMeta.push(e.string());
                        break;
                    case 22:
                        s.command = un.internalBinaryRead(e, e.uint32(), i, s.command);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.activityMeta.length; s++) t.tag(18, c.LengthDelimited).string(e.activityMeta[s]);
            e.command && un.internalBinaryWrite(e.command, t.tag(22, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, pn = new cn, hn = class extends y {
        constructor() {
            super("bilibili.community.service.dm.v1.Command", [{
                no: 1,
                name: "command_dms",
                kind: "scalar",
                repeat: 2,
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.commandDms = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.commandDms.push(e.bytes());
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.commandDms.length; s++) t.tag(1, c.LengthDelimited).bytes(e.commandDms[s]);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, un = new hn;
    var dn = class extends y {
        constructor() {
            super("bilibili.main.community.reply.v1.MainListReply", [{no: 11, name: "cm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 11:
                        s.cm = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.cm.length && t.tag(11, c.LengthDelimited).bytes(e.cm);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, mn = new dn;
    var bn = class extends y {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayViewReply", [{
                no: 5,
                name: "view_info",
                kind: "message",
                T: () => yn
            }, {no: 6, name: "play_ext_conf", kind: "message", T: () => wn}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 5:
                        s.viewInfo = yn.internalBinaryRead(e, e.uint32(), i, s.viewInfo);
                        break;
                    case 6:
                        s.playExtConf = wn.internalBinaryRead(e, e.uint32(), i, s.playExtConf);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.viewInfo && yn.internalBinaryWrite(e.viewInfo, t.tag(5, c.LengthDelimited).fork(), i).join(), e.playExtConf && wn.internalBinaryWrite(e.playExtConf, t.tag(6, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Tn = new bn, vn = class extends y {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ViewInfo", [{
                no: 8,
                name: "try_watch_prompt_bar",
                kind: "scalar",
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tryWatchPromptBar = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 8:
                        s.tryWatchPromptBar = e.bytes();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.tryWatchPromptBar.length && t.tag(8, c.LengthDelimited).bytes(e.tryWatchPromptBar);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, yn = new vn, kn = class extends y {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayAbilityExtConf", [{
                no: 3,
                name: "cast_tips",
                kind: "message",
                T: () => gn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 3:
                        s.castTips = gn.internalBinaryRead(e, e.uint32(), i, s.castTips);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.castTips && gn.internalBinaryWrite(e.castTips, t.tag(3, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, wn = new kn, Nn = class extends y {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.CastTips", [{no: 1, name: "code", kind: "scalar", T: 5}, {
                no: 2,
                name: "message",
                kind: "scalar",
                T: 9
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.code = 0, t.message = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 1:
                        s.code = e.int32();
                        break;
                    case 2:
                        s.message = e.string();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.code !== 0 && t.tag(1, c.Varint).int32(e.code), e.message !== "" && t.tag(2, c.LengthDelimited).string(e.message);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, gn = new Nn;
    var Bn = class extends y {
        constructor() {
            super("bilibili.polymer.app.search.v1.SearchAllResponse", [{
                no: 4,
                name: "item",
                kind: "message",
                repeat: 1,
                T: () => xn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.item = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 4:
                        s.item.push(xn.internalBinaryRead(e, e.uint32(), i));
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            for (let s = 0; s < e.item.length; s++) xn.internalBinaryWrite(e.item[s], t.tag(4, c.LengthDelimited).fork(), i).join();
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, Rn = new Bn, Un = class extends y {
        constructor() {
            super("bilibili.polymer.app.search.v1.Item", [{no: 4, name: "linktype", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.linktype = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, i, n) {
            let s = n ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [o, l] = e.tag();
                switch (o) {
                    case 4:
                        s.linktype = e.string();
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw") throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        a !== !1 && (a === !0 ? p.onRead : a)(this.typeName, s, o, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, i) {
            e.linktype !== "" && t.tag(4, c.LengthDelimited).string(e.linktype);
            let n = i.writeUnknownFields;
            return n !== !1 && (n == !0 ? p.onWrite : n)(this.typeName, e, t), t
        }
    }, xn = new Un;
    var P = new Uint8Array(0);

    function wi(r, e) {
        let t = nt.fromBinary(r);
        if (t.topicList = P, t.dynamicList.list = t.dynamicList.list.filter(i => ![oe.AD, oe.LIVE_RCMD].includes(i.cardType)), e.showUpList === "false") delete t.upList; else if (!e.isHD && e.showUpList !== "true") if (t.upList?.showLiveNum) {
            let {list: i, listSecond: n} = t.upList;
            n.length && (n.at(-1).separator = !0, i.unshift(...n), n.length = 0)
        } else delete t.upList;
        L(nt, t)
    }

    function gi(r) {
        let e = rt.fromBinary(r);
        e.show = "\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u6216up\u4E3B", delete e.word, delete e.goto, delete e.value, delete e.uri, L(rt, e)
    }

    function bi(r) {
        let e = ut.fromBinary(r), t = e.userModels.find(i => i.mode === "teenagers");
        t?.policy?.interval && (t.policy.interval = 0, L(ut, e))
    }

    function vi(r) {
        let e = wt.fromBinary(r);
        e.viewInfo && (e.viewInfo.promptBar = P), e.playArcConf?.arcConfs && Object.values(e.playArcConf.arcConfs).forEach(t => {
            t.isSupport && t.disabled && (t.disabled = !1, t.extraContent = null, t.unsupportScene.length = 0)
        }), L(wt, e)
    }

    function ki(r) {
        let e = xt.fromBinary(r), {backgroundPlayConf: t, castConf: i} = e.playArc || {};
        [t, i].forEach(n => {
            n && (!n.isSupport || n.disabled) && (n.isSupport = !0, n.disabled = !1, n.extraContent = null, n.unsupportScene.length = 0)
        }), L(xt, e)
    }

    function Ni(r) {
        let e = It.fromBinary(r);
        e.items = e.items.filter(t => !["rcmdOneItem", "smallCoverV5Ad", "topicList"].includes(t.item.oneofKind)), L(It, e)
    }

    function Ti(r) {
        let e = Ct.fromBinary(r);
        e.tipsId && (e.tfToast = P, e.tfPanelCustomized = P, L(Ct, e))
    }

    function xi(r) {
        let e = St.fromBinary(r);
        e.label = P, e.cmIpad = P, e.cmConfig = P, e.reqUser && (e.reqUser.elecPlusBtn = P), e.cms.length = 0, e.specialCellNew.length = 0, e.relates = e.relates.filter(t => !t.cm.length), L(St, e)
    }

    function Bi(r) {
        let e = Pt.fromBinary(r);
        e.videoGuide = P, L(Pt, e)
    }

    var pr = [X.GAME, X.CM_TYPE, X.LIVE, X.AI_RECOMMEND, X.COURSE],
        Ui = r => !pr.includes(r.relateCardType) && !r.cmStock.length && !r.basicInfo?.uniqueId;

    function Ri(r) {
        let e = fn.fromBinary(r);
        e.relates = e.relates.filter(Ui), L(fn, e)
    }

    function Ii(r) {
        let e = an.fromBinary(r);
        e.cm = P, e.reqUser && (e.reqUser.elecPlusBtn = P), e.tab?.tabModule.forEach(t => {
            if (t.tab.oneofKind !== "introduction") return;
            t.tab.introduction.modules = t.tab.introduction.modules.filter(s => ![J.PAY_BAR, J.SPECIALTAG, J.MERCHANDISE].includes(s.type));
            let i = t.tab.introduction.modules.find(s => s.type === J.UGC_HEADLINE);
            i?.data.oneofKind === "headLine" && (i.data.headLine.label = P);
            let n = t.tab.introduction.modules.find(s => s.type === J.RELATED_RECOMMEND);
            n?.data.oneofKind === "relates" && (n.data.relates.cards = n.data.relates.cards.filter(Ui))
        }), L(an, e)
    }

    function Ei(r) {
        let e = ln.fromBinary(r);
        e.dm = P, L(ln, e)
    }

    function Fi(r) {
        let e = pn.fromBinary(r);
        e.activityMeta.length = 0, e.command?.commandDms.length && (e.command.commandDms.length = 0), L(pn, e)
    }

    function Oi(r) {
        let e = mn.fromBinary(r);
        e.cm = P, L(mn, e)
    }

    function Di(r) {
        let e = Tn.fromBinary(r);
        e.viewInfo && (e.viewInfo.tryWatchPromptBar = P), e.playExtConf?.castTips && (e.playExtConf.castTips = {
            code: 0,
            message: ""
        }), L(Tn, e)
    }

    function Ai(r) {
        let e = Rn.fromBinary(r);
        e.item = e.item.filter(t => !t.linktype.endsWith("_ad")), L(Rn, e)
    }

    var dr = /(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/, me = class {
        constructor(e = "") {
            if (this.name = "URL v1.0.2", !e) throw new Error("Empty URL");
            this.parse(e)
        }

        parse(e) {
            let {scheme: t, host: i, path: n = "", params: s} = e.match(dr)?.groups ?? {};
            this.scheme = t, this.host = i, this.path = n, this.params = s ? s.split("&").reduce((f, o) => {
                let [l, a] = o.split("=");
                return f[l] = a, f
            }, {}) : {}
        }

        toString() {
            let e = this.scheme + "://" + this.host + "/" + this.path;
            return this.params && (e += "?" + Object.entries(this.params).reduce((t, [i, n], s) => t + (s ? "&" : "") + i + "=" + n, "")), e
        }
    };
    var ye = H.getInstance("Bilibili Helper", {debug: !1}), mr = ye.request.url, Li = ye.request.headers,
        En = ye.response.bodyBytes;
    En || ye.exit();
    var yr = new me(mr).path,
        wr = typeof $utils == "object" && typeof $utils?.ungzip == "function" ? $utils.ungzip : Gn, gr = En.slice(0, 5),
        In = En.slice(5);
    gr[0] && (In = wr(In));
    var br = Li["user-agent"] || Li["User-Agent"],
        vr = typeof $argument == "string" ? JSON.parse($argument) : typeof $argument == "object" ? $argument : null,
        kr = {...vr, isHD: br?.includes("bili-hd")}, Vi = {
            "v2.Dynamic/DynAll": wi,
            "v1.Search/DefaultWords": gi,
            "v1.Teenagers/ModeStatus": bi,
            "playerunite.v1.Player/PlayViewUnite": vi,
            "playurl.v1.PlayURL/PlayView": ki,
            "v1.Popular/Index": Ni,
            "view.v1.View/TFInfo": Ti,
            "view.v1.View/View": xi,
            "view.v1.View/ViewProgress": Bi,
            "viewunite.v1.View/RelatesFeed": Ri,
            "viewunite.v1.View/View": Ii,
            "viewunite.v1.View/ViewProgress": Ei,
            "v1.DM/DmView": Fi,
            "v1.Reply/MainList": Oi,
            "v2.PlayURL/PlayView": Di,
            "v1.Search/SearchAll": Ai
        };
    for (let r in Vi) if (yr.endsWith(r)) {
        Vi[r](In, kr);
        break
    }
    ye.exit();
})();