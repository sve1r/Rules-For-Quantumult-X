// Build: 2025/4/6 16:49:19
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

    function $i(r) {
        "use strict";

        function e() {
        }

        function t() {
        }

        var n = String.fromCharCode, i = {}.toString, s = i.call(r.SharedArrayBuffer), f = i(), a = r.Uint8Array,
            l = a || Array, o = a ? ArrayBuffer : l, u = o.isView || function (v) {
                return v && "length" in v
            }, d = i.call(o.prototype);
        o = t.prototype;
        var w = r.TextEncoder, g = new (a ? Uint16Array : l)(32);
        e.prototype.decode = function (v) {
            if (!u(v)) {
                var O = i.call(v);
                if (O !== d && O !== s && O !== f) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                v = a ? new l(v) : v || []
            }
            for (var T = O = "", k = 0, x = v.length | 0, V = x - 32 | 0, R, U, D = 0, K = 0, C, A = 0, W = -1; k < x;) {
                for (R = k <= V ? 32 : x - k | 0; A < R; k = k + 1 | 0, A = A + 1 | 0) {
                    switch (U = v[k] & 255, U >> 4) {
                        case 15:
                            if (C = v[k = k + 1 | 0] & 255, C >> 6 !== 2 || 247 < U) {
                                k = k - 1 | 0;
                                break
                            }
                            D = (U & 7) << 6 | C & 63, K = 5, U = 256;
                        case 14:
                            C = v[k = k + 1 | 0] & 255, D <<= 6, D |= (U & 15) << 6 | C & 63, K = C >> 6 === 2 ? K + 4 | 0 : 24, U = U + 256 & 768;
                        case 13:
                        case 12:
                            C = v[k = k + 1 | 0] & 255, D <<= 6, D |= (U & 31) << 6 | C & 63, K = K + 7 | 0, k < x && C >> 6 === 2 && D >> K && 1114112 > D ? (U = D, D = D - 65536 | 0, 0 <= D && (W = (D >> 10) + 55296 | 0, U = (D & 1023) + 56320 | 0, 31 > A ? (g[A] = W, A = A + 1 | 0, W = -1) : (C = W, W = U, U = C))) : (U >>= 8, k = k - U - 1 | 0, U = 65533), D = K = 0, R = k <= V ? 32 : x - k | 0;
                        default:
                            g[A] = U;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    g[A] = 65533
                }
                if (T += n(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15], g[16], g[17], g[18], g[19], g[20], g[21], g[22], g[23], g[24], g[25], g[26], g[27], g[28], g[29], g[30], g[31]), 32 > A && (T = T.slice(0, A - 32 | 0)), k < x) {
                    if (g[0] = W, A = ~W >>> 31, W = -1, T.length < O.length) continue
                } else W !== -1 && (T += n(W));
                O += T, T = ""
            }
            return O
        }, o.encode = function (v) {
            v = v === void 0 ? "" : "" + v;
            var O = v.length | 0, T = new l((O << 1) + 8 | 0), k, x = 0, V = !a;
            for (k = 0; k < O; k = k + 1 | 0, x = x + 1 | 0) {
                var R = v.charCodeAt(k) | 0;
                if (127 >= R) T[x] = R; else {
                    if (2047 >= R) T[x] = 192 | R >> 6; else {
                        e:{
                            if (55296 <= R) if (56319 >= R) {
                                var U = v.charCodeAt(k = k + 1 | 0) | 0;
                                if (56320 <= U && 57343 >= U) {
                                    if (R = (R << 10) + U - 56613888 | 0, 65535 < R) {
                                        T[x] = 240 | R >> 18, T[x = x + 1 | 0] = 128 | R >> 12 & 63, T[x = x + 1 | 0] = 128 | R >> 6 & 63, T[x = x + 1 | 0] = 128 | R & 63;
                                        continue
                                    }
                                    break e
                                }
                                R = 65533
                            } else 57343 >= R && (R = 65533);
                            !V && k << 1 < x && k << 1 < (x - 7 | 0) && (V = !0, U = new l(3 * O), U.set(T), T = U)
                        }
                        T[x] = 224 | R >> 12, T[x = x + 1 | 0] = 128 | R >> 6 & 63
                    }
                    T[x = x + 1 | 0] = 128 | R & 63
                }
            }
            return a ? T.subarray(0, x) : T.slice(0, x)
        }, r.TextDecoder = e, r.TextEncoder = t
    }

    var b = $i(globalThis);
    var M = Uint8Array, ie = Uint16Array, Mi = Int32Array,
        Wn = new M([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        $n = new M([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        ji = new M([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Mn = function (r, e) {
            for (var t = new ie(31), n = 0; n < 31; ++n) t[n] = e += 1 << r[n - 1];
            for (var i = new Mi(t[30]), n = 1; n < 30; ++n) for (var s = t[n]; s < t[n + 1]; ++s) i[s] = s - t[n] << 5 | n;
            return {b: t, r: i}
        }, jn = Mn(Wn, 2), zn = jn.b, zi = jn.r;
    zn[28] = 258, zi[258] = 28;
    var _n = Mn($n, 0), _i = _n.b, Nr = _n.r, Me = new ie(32768);
    for (B = 0; B < 32768; ++B) G = (B & 43690) >> 1 | (B & 21845) << 1, G = (G & 52428) >> 2 | (G & 13107) << 2, G = (G & 61680) >> 4 | (G & 3855) << 4, Me[B] = ((G & 65280) >> 8 | (G & 255) << 8) >> 1;
    var G, B, ue = function (r, e, t) {
        for (var n = r.length, i = 0, s = new ie(e); i < n; ++i) r[i] && ++s[r[i] - 1];
        var f = new ie(e);
        for (i = 1; i < e; ++i) f[i] = f[i - 1] + s[i - 1] << 1;
        var a;
        if (t) {
            a = new ie(1 << e);
            var l = 15 - e;
            for (i = 0; i < n; ++i) if (r[i]) for (var o = i << 4 | r[i], u = e - r[i], d = f[r[i] - 1]++ << u, w = d | (1 << u) - 1; d <= w; ++d) a[Me[d] >> l] = o
        } else for (a = new ie(n), i = 0; i < n; ++i) r[i] && (a[i] = Me[f[r[i] - 1]++] >> 15 - r[i]);
        return a
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
    var Ki = ue(ce, 9, 1);
    var Gi = ue(Kn, 5, 1), We = function (r) {
        for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
        return e
    }, z = function (r, e, t) {
        var n = e / 8 | 0;
        return (r[n] | r[n + 1] << 8) >> (e & 7) & t
    }, $e = function (r, e) {
        var t = e / 8 | 0;
        return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7)
    }, qi = function (r) {
        return (r + 7) / 8 | 0
    }, Ji = function (r, e, t) {
        return (e == null || e < 0) && (e = 0), (t == null || t > r.length) && (t = r.length), new M(r.subarray(e, t))
    };
    var Xi = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        _ = function (r, e, t) {
            var n = new Error(e || Xi[r]);
            if (n.code = r, Error.captureStackTrace && Error.captureStackTrace(n, _), !t) throw n;
            return n
        }, Zi = function (r, e, t, n) {
            var i = r.length, s = n ? n.length : 0;
            if (!i || e.f && !e.l) return t || new M(0);
            var f = !t, a = f || e.i != 2, l = e.i;
            f && (t = new M(i * 3));
            var o = function (Sn) {
                var Pn = t.length;
                if (Sn > Pn) {
                    var Cn = new M(Math.max(Pn * 2, Sn));
                    Cn.set(t), t = Cn
                }
            }, u = e.f || 0, d = e.p || 0, w = e.b || 0, g = e.l, v = e.d, O = e.m, T = e.n, k = i * 8;
            do {
                if (!g) {
                    u = z(r, d, 1);
                    var x = z(r, d + 1, 3);
                    if (d += 3, x) if (x == 1) g = Ki, v = Gi, O = 9, T = 5; else if (x == 2) {
                        var D = z(r, d, 31) + 257, K = z(r, d + 10, 15) + 4, C = D + z(r, d + 5, 31) + 1;
                        d += 14;
                        for (var A = new M(C), W = new M(19), j = 0; j < K; ++j) W[ji[j]] = z(r, d + j * 3, 7);
                        d += K * 3;
                        for (var Fn = We(W), Vi = (1 << Fn) - 1, Si = ue(W, Fn, 1), j = 0; j < C;) {
                            var On = Si[z(r, d, Vi)];
                            d += On & 15;
                            var V = On >> 4;
                            if (V < 16) A[j++] = V; else {
                                var te = 0, ye = 0;
                                for (V == 16 ? (ye = 3 + z(r, d, 3), d += 2, te = A[j - 1]) : V == 17 ? (ye = 3 + z(r, d, 7), d += 3) : V == 18 && (ye = 11 + z(r, d, 127), d += 7); ye--;) A[j++] = te
                            }
                        }
                        var Dn = A.subarray(0, D), Z = A.subarray(D);
                        O = We(Dn), T = We(Z), g = ue(Dn, O, 1), v = ue(Z, T, 1)
                    } else _(1); else {
                        var V = qi(d) + 4, R = r[V - 4] | r[V - 3] << 8, U = V + R;
                        if (U > i) {
                            l && _(0);
                            break
                        }
                        a && o(w + R), t.set(r.subarray(V, U), w), e.b = w += R, e.p = d = U * 8, e.f = u;
                        continue
                    }
                    if (d > k) {
                        l && _(0);
                        break
                    }
                }
                a && o(w + 131072);
                for (var Pi = (1 << O) - 1, Ci = (1 << T) - 1, Se = d; ; Se = d) {
                    var te = g[$e(r, d) & Pi], ne = te >> 4;
                    if (d += te & 15, d > k) {
                        l && _(0);
                        break
                    }
                    if (te || _(2), ne < 256) t[w++] = ne; else if (ne == 256) {
                        Se = d, g = null;
                        break
                    } else {
                        var An = ne - 254;
                        if (ne > 264) {
                            var j = ne - 257, fe = Wn[j];
                            An = z(r, d, (1 << fe) - 1) + zn[j], d += fe
                        }
                        var Pe = v[$e(r, d) & Ci], Ce = Pe >> 4;
                        Pe || _(3), d += Pe & 15;
                        var Z = _i[Ce];
                        if (Ce > 3) {
                            var fe = $n[Ce];
                            Z += $e(r, d) & (1 << fe) - 1, d += fe
                        }
                        if (d > k) {
                            l && _(0);
                            break
                        }
                        a && o(w + 131072);
                        var Ln = w + An;
                        if (w < Z) {
                            var Vn = s - Z, Wi = Math.min(Z, Ln);
                            for (Vn + w < 0 && _(3); w < Wi; ++w) t[w] = n[Vn + w]
                        }
                        for (; w < Ln; ++w) t[w] = t[w - Z]
                    }
                }
                e.l = g, e.p = Se, e.b = w, e.f = u, g && (u = 1, e.m = O, e.d = v, e.n = T)
            } while (!u);
            return w != t.length && f ? Ji(t, 0, w) : t.subarray(0, w)
        };
    var Yi = new M(0);
    var Hi = function (r) {
        (r[0] != 31 || r[1] != 139 || r[2] != 8) && _(6, "invalid gzip data");
        var e = r[3], t = 10;
        e & 4 && (t += (r[10] | r[11] << 8) + 2);
        for (var n = (e >> 3 & 1) + (e >> 4 & 1); n > 0; n -= !r[t++]) ;
        return t + (e & 2)
    }, Qi = function (r) {
        var e = r.length;
        return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0
    };

    function Gn(r, e) {
        var t = Hi(r);
        return t + 8 > r.length && _(6, "invalid gzip data"), Zi(r.subarray(t, -8), {i: 2}, e && e.out || new M(Qi(r)), e && e.dictionary)
    }

    var er = typeof TextDecoder < "u" && new TextDecoder, tr = 0;
    try {
        er.decode(Yi, {stream: !0}), tr = 1
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

        setFn(r, e, t, n) {
            return r[e] = t, !0
        }

        getJSON(r, e = {}) {
            let t = this.getVal(r);
            return t ? JSON.parse(t) : e
        }

        setJSON(r, e) {
            this.setVal(JSON.stringify(r), e)
        }

        msg(r = this.name, e = "", t = "", n) {
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
            let n = je.clientAdapter[e] || e;
            return super.getFn(r, n, t)
        }

        setFn(r, e, t, n) {
            let i = je.clientAdapter[e] || e;
            return super.setFn(r, i, t, n)
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

        msg(r = this.name, e = "", t = "", n) {
            $notification.post(r, e, t, {url: n ?? ""})
        }

        async fetch(r) {
            return await new Promise((e, t) => {
                let {method: n, body: i, bodyBytes: s, ...f} = r, a = s ?? i, l = a instanceof Uint8Array;
                $httpClient[n.toLowerCase()]({...f, body: a, "binary-mode": l}, (o, u, d) => {
                    o && t(o);
                    let w = l ? "bodyBytes" : "body";
                    e({status: u.status, headers: u.headers, [w]: d})
                })
            })
        }

        done(r) {
            let e = r.response ?? r, t, n;
            e.bodyBytes ? (t = e.bodyBytes, delete e.bodyBytes, n = {...r}, n.response ? n.response.body = t : n.body = t) : n = r, $done(n)
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
            let n = Y.clientAdapter[e] || e, i = super.getFn(r, n, t);
            return e === "bodyBytes" && (i = Y.transferBodyBytes(i, "Uint8Array")), i
        }

        setFn(r, e, t, n) {
            let i = Y.clientAdapter[e] || e, s = t;
            return e === "bodyBytes" && (s = Y.transferBodyBytes(s, "Uint8Array")), super.setFn(r, i, s, n)
        }

        getVal(r) {
            return $prefs.valueForKey(r)?.replace(/\0/g, "")
        }

        setVal(r, e) {
            $prefs.setValueForKey(r, e)
        }

        msg(r = this.name, e = "", t = "", n) {
            $notify(r, e, t, {"open-url": n ?? ""})
        }

        async fetch(r) {
            return await new Promise(e => {
                let t = {url: "", method: "GET"};
                for (let [n, i] of Object.entries(r)) n === "id" ? t.sessionIndex = i : n === "bodyBytes" ? t.bodyBytes = Y.transferBodyBytes(i, "ArrayBuffer") : t[n] = i;
                r.bodyBytes && delete t.body, $task.fetch(t).then(n => {
                    let i = {status: 200, headers: {}};
                    for (let [s, f] of Object.entries(n)) s === "sessionIndex" ? i.id = f : s === "bodyBytes" ? i.bodyBytes = Y.transferBodyBytes(f, "Uint8Array") : s === "statusCode" ? i.status = f : i[s] = f;
                    e(i)
                })
            })
        }

        done(r) {
            let e = r.response ?? r, t = {};
            for (let [n, i] of Object.entries(e)) n === "status" ? t.status = `HTTP/1.1 ${i}` : n === "bodyBytes" ? t.bodyBytes = Y.transferBodyBytes(i, "ArrayBuffer") : t[n] = i;
            $done(t)
        }
    }, Jn = Y;
    Jn.clientAdapter = {id: "sessionIndex", status: "statusCode"};
    var nr = H.getInstance("Bilibili Helper", {debug: !1});

    function ir(r) {
        let e = rr(r.length), t = new Uint8Array(5 + r.length);
        return t[0] = 0, t.set(e, 1), t.set(r, 5), t
    }

    function rr(r) {
        let e = new ArrayBuffer(4);
        return new DataView(e).setUint32(0, r, !1), new Uint8Array(e)
    }

    function L(r, e) {
        let t = r.toBinary(e);
        nr.done({bodyBytes: ir(t)})
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

    var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), we = [];
    for (let r = 0; r < q.length; r++) we[q[r].charCodeAt(0)] = r;
    we[45] = q.indexOf("+");
    we[95] = q.indexOf("/");

    function Zn(r) {
        let e = r.length * 3 / 4;
        r[r.length - 2] == "=" ? e -= 2 : r[r.length - 1] == "=" && (e -= 1);
        let t = new Uint8Array(e), n = 0, i = 0, s, f = 0;
        for (let a = 0; a < r.length; a++) {
            if (s = we[r.charCodeAt(a)], s === void 0) switch (r[a]) {
                case"=":
                    i = 0;
                case`
`:
                case"\r":
                case"	":
                case" ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
            }
            switch (i) {
                case 0:
                    f = s, i = 1;
                    break;
                case 1:
                    t[n++] = f << 2 | (s & 48) >> 4, f = s, i = 2;
                    break;
                case 2:
                    t[n++] = (f & 15) << 4 | (s & 60) >> 2, f = s, i = 3;
                    break;
                case 3:
                    t[n++] = (f & 3) << 6 | s, i = 0;
                    break
            }
        }
        if (i == 1) throw Error("invalid base64 string.");
        return t.subarray(0, n)
    }

    function Yn(r) {
        let e = "", t = 0, n, i = 0;
        for (let s = 0; s < r.length; s++) switch (n = r[s], t) {
            case 0:
                e += q[n >> 2], i = (n & 3) << 4, t = 1;
                break;
            case 1:
                e += q[i | n >> 4], i = (n & 15) << 2, t = 2;
                break;
            case 2:
                e += q[i | n >> 6], e += q[n & 63], t = 0;
                break
        }
        return t && (e += q[i], e += "=", t == 1 && (e += "=")), e
    }

    var p;
    (function (r) {
        r.symbol = Symbol.for("protobuf-ts/unknown"), r.onRead = (t, n, i, s, f) => {
            (e(n) ? n[r.symbol] : n[r.symbol] = []).push({no: i, wireType: s, data: f})
        }, r.onWrite = (t, n, i) => {
            for (let {no: s, wireType: f, data: a} of r.list(n)) i.tag(s, f).raw(a)
        }, r.list = (t, n) => {
            if (e(t)) {
                let i = t[r.symbol];
                return n ? i.filter(s => s.no == n) : i
            }
            return []
        }, r.last = (t, n) => r.list(t, n).slice(-1)[0];
        let e = t => t && Array.isArray(t[r.symbol])
    })(p || (p = {}));
    var c;
    (function (r) {
        r[r.Varint = 0] = "Varint", r[r.Bit64 = 1] = "Bit64", r[r.LengthDelimited = 2] = "LengthDelimited", r[r.StartGroup = 3] = "StartGroup", r[r.EndGroup = 4] = "EndGroup", r[r.Bit32 = 5] = "Bit32"
    })(c || (c = {}));

    function Hn() {
        let r = 0, e = 0;
        for (let n = 0; n < 28; n += 7) {
            let i = this.buf[this.pos++];
            if (r |= (i & 127) << n, (i & 128) == 0) return this.assertBounds(), [r, e]
        }
        let t = this.buf[this.pos++];
        if (r |= (t & 15) << 28, e = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [r, e];
        for (let n = 3; n <= 31; n += 7) {
            let i = this.buf[this.pos++];
            if (e |= (i & 127) << n, (i & 128) == 0) return this.assertBounds(), [r, e]
        }
        throw new Error("invalid varint")
    }

    function ke(r, e, t) {
        for (let s = 0; s < 28; s = s + 7) {
            let f = r >>> s, a = !(!(f >>> 7) && e == 0), l = (a ? f | 128 : f) & 255;
            if (t.push(l), !a) return
        }
        let n = r >>> 28 & 15 | (e & 7) << 4, i = e >> 3 != 0;
        if (t.push((i ? n | 128 : n) & 255), !!i) {
            for (let s = 3; s < 31; s = s + 7) {
                let f = e >>> s, a = !!(f >>> 7), l = (a ? f | 128 : f) & 255;
                if (t.push(l), !a) return
            }
            t.push(e >>> 31 & 1)
        }
    }

    var be = 65536 * 65536;

    function ze(r) {
        let e = r[0] == "-";
        e && (r = r.slice(1));
        let t = 1e6, n = 0, i = 0;

        function s(f, a) {
            let l = Number(r.slice(f, a));
            i *= t, n = n * t + l, n >= be && (i = i + (n / be | 0), n = n % be)
        }

        return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), [e, n, i]
    }

    function ve(r, e) {
        if (e >>> 0 <= 2097151) return "" + (be * e + (r >>> 0));
        let t = r & 16777215, n = (r >>> 24 | e << 8) >>> 0 & 16777215, i = e >> 16 & 65535,
            s = t + n * 6777216 + i * 6710656, f = n + i * 8147497, a = i * 2, l = 1e7;
        s >= l && (f += Math.floor(s / l), s %= l), f >= l && (a += Math.floor(f / l), f %= l);

        function o(u, d) {
            let w = u ? String(u) : "";
            return d ? "0000000".slice(w.length) + w : w
        }

        return o(a, 0) + o(f, a) + o(s, 1)
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

    function sr() {
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

    sr();

    function ei(r) {
        if (!r) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
    }

    var ti = /^-?[0-9]+$/, Te = 4294967296, Ne = 2147483648, xe = class {
        constructor(e, t) {
            this.lo = e | 0, this.hi = t | 0
        }

        isZero() {
            return this.lo == 0 && this.hi == 0
        }

        toNumber() {
            let e = this.hi * Te + (this.lo >>> 0);
            if (!Number.isSafeInteger(e)) throw new Error("cannot convert to safe number");
            return e
        }
    }, F = class r extends xe {
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
                    let [t, n, i] = ze(e);
                    if (t) throw new Error("signed value for ulong");
                    return new r(n, i);
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    if (e < 0) throw new Error("signed value for ulong");
                    return new r(e, e / Te)
            }
            throw new Error("unknown value " + typeof e)
        }

        toString() {
            return I ? this.toBigInt().toString() : ve(this.lo, this.hi)
        }

        toBigInt() {
            return ei(I), I.V.setInt32(0, this.lo, !0), I.V.setInt32(4, this.hi, !0), I.V.getBigUint64(0, !0)
        }
    };
    F.ZERO = new F(0, 0);
    var E = class r extends xe {
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
                    let [t, n, i] = ze(e);
                    if (t) {
                        if (i > Ne || i == Ne && n != 0) throw new Error("signed long too small")
                    } else if (i >= Ne) throw new Error("signed long too large");
                    let s = new r(n, i);
                    return t ? s.negate() : s;
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    return e > 0 ? new r(e, e / Te) : new r(-e, -e / Te).negate()
            }
            throw new Error("unknown value " + typeof e)
        }

        isNegative() {
            return (this.hi & Ne) !== 0
        }

        negate() {
            let e = ~this.hi, t = this.lo;
            return t ? t = ~t + 1 : e += 1, new r(t, e)
        }

        toString() {
            if (I) return this.toBigInt().toString();
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + ve(e.lo, e.hi)
            }
            return ve(this.lo, this.hi)
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
            let e = this.uint32(), t = e >>> 3, n = e & 7;
            if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
            return [t, n]
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
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case c.StartGroup:
                    let i;
                    for (; (i = this.tag()[1]) !== c.EndGroup;) this.skip(i);
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
            let [e, t] = this.varint64(), n = -(e & 1);
            return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, new E(e, t)
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

    var ar = 34028234663852886e22, or = -34028234663852886e22, lr = 4294967295, fr = 2147483647, ur = -2147483648;

    function Q(r) {
        if (typeof r != "number") throw new Error("invalid int 32: " + typeof r);
        if (!Number.isInteger(r) || r > fr || r < ur) throw new Error("invalid int 32: " + r)
    }

    function ee(r) {
        if (typeof r != "number") throw new Error("invalid uint 32: " + typeof r);
        if (!Number.isInteger(r) || r > lr || r < 0) throw new Error("invalid uint 32: " + r)
    }

    function re(r) {
        if (typeof r != "number") throw new Error("invalid float 32: " + typeof r);
        if (Number.isFinite(r) && (r > ar || r < or)) throw new Error("invalid float 32: " + r)
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
            for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
            let t = new Uint8Array(e), n = 0;
            for (let i = 0; i < this.chunks.length; i++) t.set(this.chunks[i], n), n += this.chunks[i].length;
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
            let t = new Uint8Array(8), n = new DataView(t.buffer), i = E.from(e);
            return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
        }

        fixed64(e) {
            let t = new Uint8Array(8), n = new DataView(t.buffer), i = F.from(e);
            return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
        }

        int64(e) {
            let t = E.from(e);
            return ke(t.lo, t.hi, this.buf), this
        }

        sint64(e) {
            let t = E.from(e), n = t.hi >> 31, i = t.lo << 1 ^ n, s = (t.hi << 1 | t.lo >>> 31) ^ n;
            return ke(i, s, this.buf), this
        }

        uint64(e) {
            let t = F.from(e);
            return ke(t.lo, t.hi, this.buf), this
        }
    };
    var ai = {emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0},
        oi = {ignoreUnknownFields: !1};

    function li(r) {
        return r ? Object.assign(Object.assign({}, oi), r) : oi
    }

    function fi(r) {
        return r ? Object.assign(Object.assign({}, ai), r) : ai
    }

    var Be = Symbol.for("protobuf-ts/message-type");

    function qe(r) {
        let e = !1, t = [];
        for (let n = 0; n < r.length; n++) {
            let i = r.charAt(n);
            i == "_" ? e = !0 : /\d/.test(i) ? (t.push(i), e = !0) : e ? (t.push(i.toUpperCase()), e = !1) : n == 0 ? t.push(i.toLowerCase()) : t.push(i)
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
        var e, t, n, i;
        return r.localName = (e = r.localName) !== null && e !== void 0 ? e : qe(r.name), r.jsonName = (t = r.jsonName) !== null && t !== void 0 ? t : qe(r.name), r.repeat = (n = r.repeat) !== null && n !== void 0 ? n : pe.NO, r.opt = (i = r.opt) !== null && i !== void 0 ? i : r.repeat || r.oneof ? !1 : r.kind == "message", r
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

    var Ue = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        prepare() {
            if (this.data) return;
            let e = [], t = [], n = [];
            for (let i of this.fields) if (i.oneof) n.includes(i.oneof) || (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof)); else switch (t.push(i.localName), i.kind) {
                case"scalar":
                case"enum":
                    (!i.opt || i.repeat) && e.push(i.localName);
                    break;
                case"message":
                    i.repeat && e.push(i.localName);
                    break;
                case"map":
                    e.push(i.localName);
                    break
            }
            this.data = {req: e, known: t, oneofs: Object.values(n)}
        }

        is(e, t, n = !1) {
            if (t < 0) return !0;
            if (e == null || typeof e != "object") return !1;
            this.prepare();
            let i = Object.keys(e), s = this.data;
            if (i.length < s.req.length || s.req.some(f => !i.includes(f)) || !n && i.some(f => !s.known.includes(f))) return !1;
            if (t < 1) return !0;
            for (let f of s.oneofs) {
                let a = e[f];
                if (!ci(a)) return !1;
                if (a.oneofKind === void 0) continue;
                let l = this.fields.find(o => o.localName === a.oneofKind);
                if (!l || !this.field(a[a.oneofKind], l, n, t)) return !1
            }
            for (let f of this.fields) if (f.oneof === void 0 && !this.field(e[f.localName], f, n, t)) return !1;
            return !0
        }

        field(e, t, n, i) {
            let s = t.repeat;
            switch (t.kind) {
                case"scalar":
                    return e === void 0 ? t.opt : s ? this.scalars(e, t.T, i, t.L) : this.scalar(e, t.T, t.L);
                case"enum":
                    return e === void 0 ? t.opt : s ? this.scalars(e, h.INT32, i) : this.scalar(e, h.INT32);
                case"message":
                    return e === void 0 ? !0 : s ? this.messages(e, t.T(), n, i) : this.message(e, t.T(), n, i);
                case"map":
                    if (typeof e != "object" || e === null) return !1;
                    if (i < 2) return !0;
                    if (!this.mapKeys(e, t.K, i)) return !1;
                    switch (t.V.kind) {
                        case"scalar":
                            return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                        case"enum":
                            return this.scalars(Object.values(e), h.INT32, i);
                        case"message":
                            return this.messages(Object.values(e), t.V.T(), n, i)
                    }
                    break
            }
            return !0
        }

        message(e, t, n, i) {
            return n ? t.isAssignable(e, i) : t.is(e, i)
        }

        messages(e, t, n, i) {
            if (!Array.isArray(e)) return !1;
            if (i < 2) return !0;
            if (n) {
                for (let s = 0; s < e.length && s < i; s++) if (!t.isAssignable(e[s], i - 1)) return !1
            } else for (let s = 0; s < e.length && s < i; s++) if (!t.is(e[s], i - 1)) return !1;
            return !0
        }

        scalar(e, t, n) {
            let i = typeof e;
            switch (t) {
                case h.UINT64:
                case h.FIXED64:
                case h.INT64:
                case h.SFIXED64:
                case h.SINT64:
                    switch (n) {
                        case S.BIGINT:
                            return i == "bigint";
                        case S.NUMBER:
                            return i == "number" && !isNaN(e);
                        default:
                            return i == "string"
                    }
                case h.BOOL:
                    return i == "boolean";
                case h.STRING:
                    return i == "string";
                case h.BYTES:
                    return e instanceof Uint8Array;
                case h.DOUBLE:
                case h.FLOAT:
                    return i == "number" && !isNaN(e);
                default:
                    return i == "number" && Number.isInteger(e)
            }
        }

        scalars(e, t, n, i) {
            if (!Array.isArray(e)) return !1;
            if (n < 2) return !0;
            if (Array.isArray(e)) {
                for (let s = 0; s < e.length && s < n; s++) if (!this.scalar(e[s], t, i)) return !1
            }
            return !0
        }

        mapKeys(e, t, n) {
            let i = Object.keys(e);
            switch (t) {
                case h.INT32:
                case h.FIXED32:
                case h.SFIXED32:
                case h.SINT32:
                case h.UINT32:
                    return this.scalars(i.slice(0, n).map(s => parseInt(s)), t, n);
                case h.BOOL:
                    return this.scalars(i.slice(0, n).map(s => s == "true" ? !0 : s == "false" ? !1 : s), t, n);
                default:
                    return this.scalars(i, t, n, S.STRING)
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

    var Re = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (this.fMap === void 0) {
                this.fMap = {};
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                for (let n of t) this.fMap[n.name] = n, this.fMap[n.jsonName] = n, this.fMap[n.localName] = n
            }
        }

        assert(e, t, n) {
            if (!e) {
                let i = ge(n);
                throw (i == "number" || i == "boolean") && (i = n.toString()), new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`)
            }
        }

        read(e, t, n) {
            this.prepare();
            let i = [];
            for (let [s, f] of Object.entries(e)) {
                let a = this.fMap[s];
                if (!a) {
                    if (!n.ignoreUnknownFields) throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${s}`);
                    continue
                }
                let l = a.localName, o;
                if (a.oneof) {
                    if (f === null && (a.kind !== "enum" || a.T()[0] !== "google.protobuf.NullValue")) continue;
                    if (i.includes(a.oneof)) throw new Error(`Multiple members of the oneof group "${a.oneof}" of ${this.info.typeName} are present in JSON.`);
                    i.push(a.oneof), o = t[a.oneof] = {oneofKind: l}
                } else o = t;
                if (a.kind == "map") {
                    if (f === null) continue;
                    this.assert(Xn(f), a.name, f);
                    let u = o[l];
                    for (let [d, w] of Object.entries(f)) {
                        this.assert(w !== null, a.name + " map value", null);
                        let g;
                        switch (a.V.kind) {
                            case"message":
                                g = a.V.T().internalJsonRead(w, n);
                                break;
                            case"enum":
                                if (g = this.enum(a.V.T(), w, a.name, n.ignoreUnknownFields), g === !1) continue;
                                break;
                            case"scalar":
                                g = this.scalar(w, a.V.T, a.V.L, a.name);
                                break
                        }
                        this.assert(g !== void 0, a.name + " map value", w);
                        let v = d;
                        a.K == h.BOOL && (v = v == "true" ? !0 : v == "false" ? !1 : v), v = this.scalar(v, a.K, S.STRING, a.name).toString(), u[v] = g
                    }
                } else if (a.repeat) {
                    if (f === null) continue;
                    this.assert(Array.isArray(f), a.name, f);
                    let u = o[l];
                    for (let d of f) {
                        this.assert(d !== null, a.name, null);
                        let w;
                        switch (a.kind) {
                            case"message":
                                w = a.T().internalJsonRead(d, n);
                                break;
                            case"enum":
                                if (w = this.enum(a.T(), d, a.name, n.ignoreUnknownFields), w === !1) continue;
                                break;
                            case"scalar":
                                w = this.scalar(d, a.T, a.L, a.name);
                                break
                        }
                        this.assert(w !== void 0, a.name, f), u.push(w)
                    }
                } else switch (a.kind) {
                    case"message":
                        if (f === null && a.T().typeName != "google.protobuf.Value") {
                            this.assert(a.oneof === void 0, a.name + " (oneof member)", null);
                            continue
                        }
                        o[l] = a.T().internalJsonRead(f, n, o[l]);
                        break;
                    case"enum":
                        if (f === null) continue;
                        let u = this.enum(a.T(), f, a.name, n.ignoreUnknownFields);
                        if (u === !1) continue;
                        o[l] = u;
                        break;
                    case"scalar":
                        if (f === null) continue;
                        o[l] = this.scalar(f, a.T, a.L, a.name);
                        break
                }
            }
        }

        enum(e, t, n, i) {
            if (e[0] == "google.protobuf.NullValue" && N(t === null || t === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), t === null) return 0;
            switch (typeof t) {
                case"number":
                    return N(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
                case"string":
                    let s = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (s = t.substring(e[2].length));
                    let f = e[1][s];
                    return typeof f > "u" && i ? !1 : (N(typeof f == "number", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), f)
            }
            N(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
        }

        scalar(e, t, n, i) {
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
                        let a;
                        if (typeof e == "number" ? a = e : e === "" ? s = "empty string" : typeof e == "string" && (e.trim().length !== e.length ? s = "extra whitespace" : a = Number(e)), a === void 0) break;
                        return t == h.UINT32 ? ee(a) : Q(a), a;
                    case h.INT64:
                    case h.SFIXED64:
                    case h.SINT64:
                        if (e === null) return $(E.ZERO, n);
                        if (typeof e != "number" && typeof e != "string") break;
                        return $(E.from(e), n);
                    case h.FIXED64:
                    case h.UINT64:
                        if (e === null) return $(F.ZERO, n);
                        if (typeof e != "number" && typeof e != "string") break;
                        return $(F.from(e), n);
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
            this.assert(!1, i + (s ? " - " + s : ""), e)
        }
    };
    var Ie = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        write(e, t) {
            let n = {}, i = e;
            for (let s of this.fields) {
                if (!s.oneof) {
                    let o = this.field(s, i[s.localName], t);
                    o !== void 0 && (n[t.useProtoFieldName ? s.name : s.jsonName] = o);
                    continue
                }
                let f = i[s.oneof];
                if (f.oneofKind !== s.localName) continue;
                let a = s.kind == "scalar" || s.kind == "enum" ? Object.assign(Object.assign({}, t), {emitDefaultValues: !0}) : t,
                    l = this.field(s, f[s.localName], a);
                N(l !== void 0), n[t.useProtoFieldName ? s.name : s.jsonName] = l
            }
            return n
        }

        field(e, t, n) {
            let i;
            if (e.kind == "map") {
                N(typeof t == "object" && t !== null);
                let s = {};
                switch (e.V.kind) {
                    case"scalar":
                        for (let [l, o] of Object.entries(t)) {
                            let u = this.scalar(e.V.T, o, e.name, !1, !0);
                            N(u !== void 0), s[l.toString()] = u
                        }
                        break;
                    case"message":
                        let f = e.V.T();
                        for (let [l, o] of Object.entries(t)) {
                            let u = this.message(f, o, e.name, n);
                            N(u !== void 0), s[l.toString()] = u
                        }
                        break;
                    case"enum":
                        let a = e.V.T();
                        for (let [l, o] of Object.entries(t)) {
                            N(o === void 0 || typeof o == "number");
                            let u = this.enum(a, o, e.name, !1, !0, n.enumAsInteger);
                            N(u !== void 0), s[l.toString()] = u
                        }
                        break
                }
                (n.emitDefaultValues || Object.keys(s).length > 0) && (i = s)
            } else if (e.repeat) {
                N(Array.isArray(t));
                let s = [];
                switch (e.kind) {
                    case"scalar":
                        for (let l = 0; l < t.length; l++) {
                            let o = this.scalar(e.T, t[l], e.name, e.opt, !0);
                            N(o !== void 0), s.push(o)
                        }
                        break;
                    case"enum":
                        let f = e.T();
                        for (let l = 0; l < t.length; l++) {
                            N(t[l] === void 0 || typeof t[l] == "number");
                            let o = this.enum(f, t[l], e.name, e.opt, !0, n.enumAsInteger);
                            N(o !== void 0), s.push(o)
                        }
                        break;
                    case"message":
                        let a = e.T();
                        for (let l = 0; l < t.length; l++) {
                            let o = this.message(a, t[l], e.name, n);
                            N(o !== void 0), s.push(o)
                        }
                        break
                }
                (n.emitDefaultValues || s.length > 0 || n.emitDefaultValues) && (i = s)
            } else switch (e.kind) {
                case"scalar":
                    i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case"enum":
                    i = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case"message":
                    i = this.message(e.T(), t, e.name, n);
                    break
            }
            return i
        }

        enum(e, t, n, i, s, f) {
            if (e[0] == "google.protobuf.NullValue") return !s && !i ? void 0 : null;
            if (t === void 0) {
                N(i);
                return
            }
            if (!(t === 0 && !s && !i)) return N(typeof t == "number"), N(Number.isInteger(t)), f || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        }

        message(e, t, n, i) {
            return t === void 0 ? i.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, i)
        }

        scalar(e, t, n, i, s) {
            if (t === void 0) {
                N(i);
                return
            }
            let f = s || i;
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
                    let a = F.from(t);
                    return a.isZero() && !f ? void 0 : a.toString();
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

    var Ee = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                this.fieldNoToField = new Map(t.map(n => [n.no, n]))
            }
        }

        read(e, t, n, i) {
            this.prepare();
            let s = i === void 0 ? e.len : e.pos + i;
            for (; e.pos < s;) {
                let [f, a] = e.tag(), l = this.fieldNoToField.get(f);
                if (!l) {
                    let w = n.readUnknownField;
                    if (w == "throw") throw new Error(`Unknown field ${f} (wire type ${a}) for ${this.info.typeName}`);
                    let g = e.skip(a);
                    w !== !1 && (w === !0 ? p.onRead : w)(this.info.typeName, t, f, a, g);
                    continue
                }
                let o = t, u = l.repeat, d = l.localName;
                switch (l.oneof && (o = o[l.oneof], o.oneofKind !== d && (o = t[l.oneof] = {oneofKind: d})), l.kind) {
                    case"scalar":
                    case"enum":
                        let w = l.kind == "enum" ? h.INT32 : l.T, g = l.kind == "scalar" ? l.L : void 0;
                        if (u) {
                            let T = o[d];
                            if (a == c.LengthDelimited && w != h.STRING && w != h.BYTES) {
                                let k = e.uint32() + e.pos;
                                for (; e.pos < k;) T.push(this.scalar(e, w, g))
                            } else T.push(this.scalar(e, w, g))
                        } else o[d] = this.scalar(e, w, g);
                        break;
                    case"message":
                        if (u) {
                            let T = o[d], k = l.T().internalBinaryRead(e, e.uint32(), n);
                            T.push(k)
                        } else o[d] = l.T().internalBinaryRead(e, e.uint32(), n, o[d]);
                        break;
                    case"map":
                        let [v, O] = this.mapEntry(l, e, n);
                        o[d][v] = O;
                        break
                }
            }
        }

        mapEntry(e, t, n) {
            let i = t.uint32(), s = t.pos + i, f, a;
            for (; t.pos < s;) {
                let [l, o] = t.tag();
                switch (l) {
                    case 1:
                        e.K == h.BOOL ? f = t.bool().toString() : f = this.scalar(t, e.K, S.STRING);
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case"scalar":
                                a = this.scalar(t, e.V.T, e.V.L);
                                break;
                            case"enum":
                                a = t.int32();
                                break;
                            case"message":
                                a = e.V.T().internalBinaryRead(t, t.uint32(), n);
                                break
                        }
                        break;
                    default:
                        throw new Error(`Unknown field ${l} (wire type ${o}) in map entry for ${this.info.typeName}#${e.name}`)
                }
            }
            if (f === void 0) {
                let l = de(e.K);
                f = e.K == h.BOOL ? l.toString() : l
            }
            if (a === void 0) switch (e.V.kind) {
                case"scalar":
                    a = de(e.V.T, e.V.L);
                    break;
                case"enum":
                    a = 0;
                    break;
                case"message":
                    a = e.V.T().create();
                    break
            }
            return [f, a]
        }

        scalar(e, t, n) {
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
                    return $(e.int64(), n);
                case h.UINT64:
                    return $(e.uint64(), n);
                case h.FIXED64:
                    return $(e.fixed64(), n);
                case h.FIXED32:
                    return e.fixed32();
                case h.BYTES:
                    return e.bytes();
                case h.UINT32:
                    return e.uint32();
                case h.SFIXED32:
                    return e.sfixed32();
                case h.SFIXED64:
                    return $(e.sfixed64(), n);
                case h.SINT32:
                    return e.sint32();
                case h.SINT64:
                    return $(e.sint64(), n)
            }
        }
    };
    var Fe = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((t, n) => t.no - n.no)
            }
        }

        write(e, t, n) {
            this.prepare();
            for (let s of this.fields) {
                let f, a, l = s.repeat, o = s.localName;
                if (s.oneof) {
                    let u = e[s.oneof];
                    if (u.oneofKind !== o) continue;
                    f = u[o], a = !0
                } else f = e[o], a = !1;
                switch (s.kind) {
                    case"scalar":
                    case"enum":
                        let u = s.kind == "enum" ? h.INT32 : s.T;
                        if (l) if (N(Array.isArray(f)), l == pe.PACKED) this.packed(t, u, s.no, f); else for (let d of f) this.scalar(t, u, s.no, d, !0); else f === void 0 ? N(s.opt) : this.scalar(t, u, s.no, f, a || s.opt);
                        break;
                    case"message":
                        if (l) {
                            N(Array.isArray(f));
                            for (let d of f) this.message(t, n, s.T(), s.no, d)
                        } else this.message(t, n, s.T(), s.no, f);
                        break;
                    case"map":
                        N(typeof f == "object" && f !== null);
                        for (let [d, w] of Object.entries(f)) this.mapEntry(t, n, s, d, w);
                        break
                }
            }
            let i = n.writeUnknownFields;
            i !== !1 && (i === !0 ? p.onWrite : i)(this.info.typeName, e, t)
        }

        mapEntry(e, t, n, i, s) {
            e.tag(n.no, c.LengthDelimited), e.fork();
            let f = i;
            switch (n.K) {
                case h.INT32:
                case h.FIXED32:
                case h.UINT32:
                case h.SFIXED32:
                case h.SINT32:
                    f = Number.parseInt(i);
                    break;
                case h.BOOL:
                    N(i == "true" || i == "false"), f = i == "true";
                    break
            }
            switch (this.scalar(e, n.K, 1, f, !0), n.V.kind) {
                case"scalar":
                    this.scalar(e, n.V.T, 2, s, !0);
                    break;
                case"enum":
                    this.scalar(e, h.INT32, 2, s, !0);
                    break;
                case"message":
                    this.message(e, t, n.V.T(), 2, s);
                    break
            }
            e.join()
        }

        message(e, t, n, i, s) {
            s !== void 0 && (n.internalBinaryWrite(s, e.tag(i, c.LengthDelimited).fork(), t), e.join())
        }

        scalar(e, t, n, i, s) {
            let [f, a, l] = this.scalarInfo(t, i);
            (!l || s) && (e.tag(n, f), e[a](i))
        }

        packed(e, t, n, i) {
            if (!i.length) return;
            N(t !== h.BYTES && t !== h.STRING), e.tag(n, c.LengthDelimited), e.fork();
            let [, s] = this.scalarInfo(t);
            for (let f = 0; f < i.length; f++) e[s](i[f]);
            e.join()
        }

        scalarInfo(e, t) {
            let n = c.Varint, i, s = t === void 0, f = t === 0;
            switch (e) {
                case h.INT32:
                    i = "int32";
                    break;
                case h.STRING:
                    f = s || !t.length, n = c.LengthDelimited, i = "string";
                    break;
                case h.BOOL:
                    f = t === !1, i = "bool";
                    break;
                case h.UINT32:
                    i = "uint32";
                    break;
                case h.DOUBLE:
                    n = c.Bit64, i = "double";
                    break;
                case h.FLOAT:
                    n = c.Bit32, i = "float";
                    break;
                case h.INT64:
                    f = s || E.from(t).isZero(), i = "int64";
                    break;
                case h.UINT64:
                    f = s || F.from(t).isZero(), i = "uint64";
                    break;
                case h.FIXED64:
                    f = s || F.from(t).isZero(), n = c.Bit64, i = "fixed64";
                    break;
                case h.BYTES:
                    f = s || !t.byteLength, n = c.LengthDelimited, i = "bytes";
                    break;
                case h.FIXED32:
                    n = c.Bit32, i = "fixed32";
                    break;
                case h.SFIXED32:
                    n = c.Bit32, i = "sfixed32";
                    break;
                case h.SFIXED64:
                    f = s || E.from(t).isZero(), n = c.Bit64, i = "sfixed64";
                    break;
                case h.SINT32:
                    i = "sint32";
                    break;
                case h.SINT64:
                    f = s || E.from(t).isZero(), i = "sint64";
                    break
            }
            return [n, i, s || f]
        }
    };

    function hi(r) {
        let e = r.messagePrototype ? Object.create(r.messagePrototype) : Object.defineProperty({}, Be, {value: r});
        for (let t of r.fields) {
            let n = t.localName;
            if (!t.opt) if (t.oneof) e[t.oneof] = {oneofKind: void 0}; else if (t.repeat) e[n] = []; else switch (t.kind) {
                case"scalar":
                    e[n] = de(t.T, t.L);
                    break;
                case"enum":
                    e[n] = 0;
                    break;
                case"map":
                    e[n] = {};
                    break
            }
        }
        return e
    }

    function m(r, e, t) {
        let n, i = t, s;
        for (let f of r.fields) {
            let a = f.localName;
            if (f.oneof) {
                let l = i[f.oneof];
                if (l?.oneofKind == null) continue;
                if (n = l[a], s = e[f.oneof], s.oneofKind = l.oneofKind, n == null) {
                    delete s[a];
                    continue
                }
            } else if (n = i[a], s = e, n == null) continue;
            switch (f.repeat && (s[a].length = n.length), f.kind) {
                case"scalar":
                case"enum":
                    if (f.repeat) for (let o = 0; o < n.length; o++) s[a][o] = n[o]; else s[a] = n;
                    break;
                case"message":
                    let l = f.T();
                    if (f.repeat) for (let o = 0; o < n.length; o++) s[a][o] = l.create(n[o]); else s[a] === void 0 ? s[a] = l.create(n) : l.mergePartial(s[a], n);
                    break;
                case"map":
                    switch (f.V.kind) {
                        case"scalar":
                        case"enum":
                            Object.assign(s[a], n);
                            break;
                        case"message":
                            let o = f.V.T();
                            for (let u of Object.keys(n)) s[a][u] = o.create(n[u]);
                            break
                    }
                    break
            }
        }
    }

    function mi(r, e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        for (let n of r.fields) {
            let i = n.localName, s = n.oneof ? e[n.oneof][i] : e[i], f = n.oneof ? t[n.oneof][i] : t[i];
            switch (n.kind) {
                case"enum":
                case"scalar":
                    let a = n.kind == "enum" ? h.INT32 : n.T;
                    if (!(n.repeat ? pi(a, s, f) : yi(a, s, f))) return !1;
                    break;
                case"map":
                    if (!(n.V.kind == "message" ? di(n.V.T(), Oe(s), Oe(f)) : pi(n.V.kind == "enum" ? h.INT32 : n.V.T, Oe(s), Oe(f)))) return !1;
                    break;
                case"message":
                    let l = n.T();
                    if (!(n.repeat ? di(l, s, f) : l.equals(s, f))) return !1;
                    break
            }
        }
        return !0
    }

    var Oe = Object.values;

    function yi(r, e, t) {
        if (e === t) return !0;
        if (r !== h.BYTES) return !1;
        let n = e, i = t;
        if (n.length !== i.length) return !1;
        for (let s = 0; s < n.length; s++) if (n[s] != i[s]) return !1;
        return !0
    }

    function pi(r, e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!yi(r, e[n], t[n])) return !1;
        return !0
    }

    function di(r, e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!r.equals(e[n], t[n])) return !1;
        return !0
    }

    var cr = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})), y = class {
        constructor(e, t, n) {
            this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(ui), this.options = n ?? {}, this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, cr), {[Be]: {value: this}})), this.refTypeCheck = new Ue(this), this.refJsonReader = new Re(this), this.refJsonWriter = new Ie(this), this.refBinReader = new Ee(this), this.refBinWriter = new Fe(this)
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
            let n = ii(t);
            return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
        }

        fromJson(e, t) {
            return this.internalJsonRead(e, li(t))
        }

        fromJsonString(e, t) {
            let n = JSON.parse(e);
            return this.fromJson(n, t)
        }

        toJson(e, t) {
            return this.internalJsonWrite(e, fi(t))
        }

        toJsonString(e, t) {
            var n;
            let i = this.toJson(e, t);
            return JSON.stringify(i, null, (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0)
        }

        toBinary(e, t) {
            let n = si(t);
            return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
        }

        internalJsonRead(e, t, n) {
            if (e !== null && typeof e == "object" && !Array.isArray(e)) {
                let i = n ?? this.create();
                return this.refJsonReader.read(e, i, t), i
            }
            throw new Error(`Unable to parse message ${this.typeName} from JSON ${ge(e)}.`)
        }

        internalJsonWrite(e, t) {
            return this.refJsonWriter.write(e, t)
        }

        internalBinaryWrite(e, t, n) {
            return this.refBinWriter.write(e, t, n), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create();
            return this.refBinReader.read(e, s, n, t), s
        }
    };
    var ae;
    (function (r) {
        r[r.DYN_NONE = 0] = "DYN_NONE", r[r.AD = 15] = "AD", r[r.LIVE_RCMD = 18] = "LIVE_RCMD"
    })(ae || (ae = {}));
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.dynamicList = Je.internalBinaryRead(e, e.uint32(), n, s.dynamicList);
                        break;
                    case 2:
                        s.upList = Ze.internalBinaryRead(e, e.uint32(), n, s.upList);
                        break;
                    case 3:
                        s.topicList = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.dynamicList && Je.internalBinaryWrite(e.dynamicList, t.tag(1, c.LengthDelimited).fork(), n).join(), e.upList && Ze.internalBinaryWrite(e.upList, t.tag(2, c.LengthDelimited).fork(), n).join(), e.topicList.length && t.tag(3, c.LengthDelimited).bytes(e.topicList);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.list.push(Xe.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.list.length; s++) Xe.internalBinaryWrite(e.list[s], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Je = new He, Qe = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.DynamicItem", [{
                no: 1,
                name: "card_type",
                kind: "enum",
                T: () => ["bilibili.app.dynamic.v2.DynamicType", ae]
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cardType = 0, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.cardType = e.int32();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.cardType !== 0 && t.tag(1, c.Varint).int32(e.cardType);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 2:
                        s.list.push(se.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 4:
                        s.showLiveNum = e.int32();
                        break;
                    case 10:
                        s.listSecond.push(se.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.list.length; s++) se.internalBinaryWrite(e.list[s], t.tag(2, c.LengthDelimited).fork(), n).join();
            e.showLiveNum !== 0 && t.tag(4, c.Varint).int32(e.showLiveNum);
            for (let s = 0; s < e.listSecond.length; s++) se.internalBinaryWrite(e.listSecond[s], t.tag(10, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ze = new et, tt = class extends y {
        constructor() {
            super("bilibili.app.dynamic.v2.UpListItem", [{no: 11, name: "separator", kind: "scalar", T: 8}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.separator = !1, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 11:
                        s.separator = e.bool();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.separator !== !1 && t.tag(11, c.Varint).bool(e.separator);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
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
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.show !== "" && t.tag(3, c.LengthDelimited).string(e.show), e.word !== "" && t.tag(4, c.LengthDelimited).string(e.word), e.goto !== "" && t.tag(7, c.LengthDelimited).string(e.goto), e.value !== "" && t.tag(8, c.LengthDelimited).string(e.value), e.uri !== "" && t.tag(9, c.LengthDelimited).string(e.uri);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, rt = new it;
    var ot = class extends y {
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.userModels.push(st.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.userModels.length; s++) st.internalBinaryWrite(e.userModels[s], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, ut = new ot, lt = class extends y {
        constructor() {
            super("bilibili.app.interface.v1.UserModel", [{no: 2, name: "mode", kind: "scalar", T: 9}, {
                no: 5,
                name: "policy",
                kind: "message",
                T: () => at
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.mode = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 2:
                        s.mode = e.string();
                        break;
                    case 5:
                        s.policy = at.internalBinaryRead(e, e.uint32(), n, s.policy);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.mode !== "" && t.tag(2, c.LengthDelimited).string(e.mode), e.policy && at.internalBinaryWrite(e.policy, t.tag(5, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, st = new lt, ft = class extends y {
        constructor() {
            super("bilibili.app.interface.v1.Policy", [{no: 1, name: "interval", kind: "scalar", T: 3, L: 2}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.interval = 0, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.interval = e.int64().toNumber();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.interval !== 0 && t.tag(1, c.Varint).int64(e.interval);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, at = new ft;
    var ht = class extends y {
        constructor() {
            super("bilibili.playershared.PlayArcConf", [{
                no: 1,
                name: "arc_confs",
                kind: "map",
                K: 5,
                V: {kind: "message", T: () => De}
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.arcConfs = {}, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        this.binaryReadMap1(s.arcConfs, e, n);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        binaryReadMap1(e, t, n) {
            let i = t.uint32(), s = t.pos + i, f, a;
            for (; t.pos < s;) {
                let [l, o] = t.tag();
                switch (l) {
                    case 1:
                        f = t.int32();
                        break;
                    case 2:
                        a = De.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.playershared.PlayArcConf.arc_confs")
                }
            }
            e[f ?? 0] = a ?? De.create()
        }

        internalBinaryWrite(e, t, n) {
            for (let s of globalThis.Object.keys(e.arcConfs)) t.tag(1, c.LengthDelimited).fork().tag(1, c.Varint).int32(parseInt(s)), t.tag(2, c.LengthDelimited).fork(), De.internalBinaryWrite(e.arcConfs[s], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ae = new ht, pt = class extends y {
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.isSupport = e.bool();
                        break;
                    case 2:
                        s.disabled = e.bool();
                        break;
                    case 3:
                        s.extraContent = ct.internalBinaryRead(e, e.uint32(), n, s.extraContent);
                        break;
                    case 4:
                        if (l === c.LengthDelimited) for (let d = e.int32() + e.pos; e.pos < d;) s.unsupportScene.push(e.int32()); else s.unsupportScene.push(e.int32());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            if (e.isSupport !== !1 && t.tag(1, c.Varint).bool(e.isSupport), e.disabled !== !1 && t.tag(2, c.Varint).bool(e.disabled), e.extraContent && ct.internalBinaryWrite(e.extraContent, t.tag(3, c.LengthDelimited).fork(), n).join(), e.unsupportScene.length) {
                t.tag(4, c.LengthDelimited).fork();
                for (let s = 0; s < e.unsupportScene.length; s++) t.int32(e.unsupportScene[s]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, De = new pt, dt = class extends y {
        constructor() {
            super("bilibili.playershared.ExtraContent", [{no: 1, name: "disable_reason", kind: "scalar", T: 9}, {
                no: 2,
                name: "disable_code",
                kind: "scalar",
                T: 3,
                L: 2
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.disableReason = "", t.disableCode = 0, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.disableReason = e.string();
                        break;
                    case 2:
                        s.disableCode = e.int64().toNumber();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.disableReason !== "" && t.tag(1, c.LengthDelimited).string(e.disableReason), e.disableCode !== 0 && t.tag(2, c.Varint).int64(e.disableCode);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, ct = new dt, mt = class extends y {
        constructor() {
            super("bilibili.playershared.ViewInfo", [{no: 2, name: "prompt_bar", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.promptBar = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 2:
                        s.promptBar = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.promptBar.length && t.tag(2, c.LengthDelimited).bytes(e.promptBar);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Le = new mt;
    var yt = class extends y {
        constructor() {
            super("bilibili.app.playerunite.v1.PlayViewUniteReply", [{
                no: 2,
                name: "play_arc_conf",
                kind: "message",
                T: () => Ae
            }, {no: 9, name: "view_info", kind: "message", T: () => Le}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 2:
                        s.playArcConf = Ae.internalBinaryRead(e, e.uint32(), n, s.playArcConf);
                        break;
                    case 9:
                        s.viewInfo = Le.internalBinaryRead(e, e.uint32(), n, s.viewInfo);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.playArcConf && Ae.internalBinaryWrite(e.playArcConf, t.tag(2, c.LengthDelimited).fork(), n).join(), e.viewInfo && Le.internalBinaryWrite(e.viewInfo, t.tag(9, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, gt = new yt;
    var kt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.PlayViewReply", [{no: 5, name: "play_arc", kind: "message", T: () => wt}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 5:
                        s.playArc = wt.internalBinaryRead(e, e.uint32(), n, s.playArc);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.playArc && wt.internalBinaryWrite(e.playArc, t.tag(5, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, xt = new kt, vt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.PlayArcConf", [{
                no: 1,
                name: "background_play_conf",
                kind: "message",
                T: () => oe
            }, {no: 3, name: "cast_conf", kind: "message", T: () => oe}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.backgroundPlayConf = oe.internalBinaryRead(e, e.uint32(), n, s.backgroundPlayConf);
                        break;
                    case 3:
                        s.castConf = oe.internalBinaryRead(e, e.uint32(), n, s.castConf);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.backgroundPlayConf && oe.internalBinaryWrite(e.backgroundPlayConf, t.tag(1, c.LengthDelimited).fork(), n).join(), e.castConf && oe.internalBinaryWrite(e.castConf, t.tag(3, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, wt = new vt, Nt = class extends y {
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
                L: 2
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.isSupport = !1, t.disabled = !1, t.unsupportScene = [], e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.isSupport = e.bool();
                        break;
                    case 2:
                        s.disabled = e.bool();
                        break;
                    case 3:
                        s.extraContent = bt.internalBinaryRead(e, e.uint32(), n, s.extraContent);
                        break;
                    case 4:
                        if (l === c.LengthDelimited) for (let d = e.int32() + e.pos; e.pos < d;) s.unsupportScene.push(e.int64().toNumber()); else s.unsupportScene.push(e.int64().toNumber());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            if (e.isSupport !== !1 && t.tag(1, c.Varint).bool(e.isSupport), e.disabled !== !1 && t.tag(2, c.Varint).bool(e.disabled), e.extraContent && bt.internalBinaryWrite(e.extraContent, t.tag(3, c.LengthDelimited).fork(), n).join(), e.unsupportScene.length) {
                t.tag(4, c.LengthDelimited).fork();
                for (let s = 0; s < e.unsupportScene.length; s++) t.int64(e.unsupportScene[s]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, oe = new Nt, Tt = class extends y {
        constructor() {
            super("bilibili.app.playurl.v1.ExtraContent", [{
                no: 1,
                name: "disabled_reason",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "disabled_code", kind: "scalar", T: 3, L: 2}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.disabledReason = "", t.disabledCode = 0, e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.disabledReason = e.string();
                        break;
                    case 2:
                        s.disabledCode = e.int64().toNumber();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.disabledReason !== "" && t.tag(1, c.LengthDelimited).string(e.disabledReason), e.disabledCode !== 0 && t.tag(2, c.Varint).int64(e.disabledCode);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.items.push(Bt.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.items.length; s++) Bt.internalBinaryWrite(e.items[s], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
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
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.item.oneofKind === "rcmdOneItem" && t.tag(10, c.LengthDelimited).bytes(e.item.rcmdOneItem), e.item.oneofKind === "smallCoverV5Ad" && t.tag(11, c.LengthDelimited).bytes(e.item.smallCoverV5Ad), e.item.oneofKind === "topicList" && t.tag(12, c.LengthDelimited).bytes(e.item.topicList);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 4:
                        s.reqUser = Et.internalBinaryRead(e, e.uint32(), n, s.reqUser);
                        break;
                    case 10:
                        s.relates.push(Ft.internalBinaryRead(e, e.uint32(), n));
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
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.reqUser && Et.internalBinaryWrite(e.reqUser, t.tag(4, c.LengthDelimited).fork(), n).join();
            for (let s = 0; s < e.relates.length; s++) Ft.internalBinaryWrite(e.relates[s], t.tag(10, c.LengthDelimited).fork(), n).join();
            e.label.length && t.tag(23, c.LengthDelimited).bytes(e.label);
            for (let s = 0; s < e.cms.length; s++) t.tag(30, c.LengthDelimited).bytes(e.cms[s]);
            e.cmConfig.length && t.tag(31, c.LengthDelimited).bytes(e.cmConfig), e.cmIpad.length && t.tag(41, c.LengthDelimited).bytes(e.cmIpad);
            for (let s = 0; s < e.specialCellNew.length; s++) t.tag(50, c.LengthDelimited).bytes(e.specialCellNew[s]);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, St = new Ot, Dt = class extends y {
        constructor() {
            super("bilibili.app.view.v1.ReqUser", [{no: 9, name: "elec_plus_btn", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elecPlusBtn = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 9:
                        s.elecPlusBtn = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.elecPlusBtn.length && t.tag(9, c.LengthDelimited).bytes(e.elecPlusBtn);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Et = new Dt, At = class extends y {
        constructor() {
            super("bilibili.app.view.v1.Relate", [{no: 28, name: "cm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 28:
                        s.cm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.cm.length && t.tag(28, c.LengthDelimited).bytes(e.cm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ft = new At, Lt = class extends y {
        constructor() {
            super("bilibili.app.view.v1.ViewProgressReply", [{no: 1, name: "video_guide", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.videoGuide = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.videoGuide = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.videoGuide.length && t.tag(1, c.LengthDelimited).bytes(e.videoGuide);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Pt = new Lt, Vt = class extends y {
        constructor() {
            super("bilibili.app.view.v1.TFInfoReply", [{no: 1, name: "tips_id", kind: "scalar", T: 3, L: 2}, {
                no: 2,
                name: "tf_toast",
                kind: "scalar",
                T: 12
            }, {no: 3, name: "tf_panel_customized", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tipsId = 0, t.tfToast = new Uint8Array(0), t.tfPanelCustomized = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.tipsId = e.int64().toNumber();
                        break;
                    case 2:
                        s.tfToast = e.bytes();
                        break;
                    case 3:
                        s.tfPanelCustomized = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.tipsId !== 0 && t.tag(1, c.Varint).int64(e.tipsId), e.tfToast.length && t.tag(2, c.LengthDelimited).bytes(e.tfToast), e.tfPanelCustomized.length && t.tag(3, c.LengthDelimited).bytes(e.tfPanelCustomized);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 3:
                        s.reqUser = Wt.internalBinaryRead(e, e.uint32(), n, s.reqUser);
                        break;
                    case 5:
                        s.tab = $t.internalBinaryRead(e, e.uint32(), n, s.tab);
                        break;
                    case 7:
                        s.cm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.reqUser && Wt.internalBinaryWrite(e.reqUser, t.tag(3, c.LengthDelimited).fork(), n).join(), e.tab && $t.internalBinaryWrite(e.tab, t.tag(5, c.LengthDelimited).fork(), n).join(), e.cm.length && t.tag(7, c.LengthDelimited).bytes(e.cm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, on = new Jt, Xt = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.ReqUser", [{no: 7, name: "elec_plus_btn", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elecPlusBtn = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 7:
                        s.elecPlusBtn = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.elecPlusBtn.length && t.tag(7, c.LengthDelimited).bytes(e.elecPlusBtn);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.tabModule.push(Mt.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.tabModule.length; s++) Mt.internalBinaryWrite(e.tabModule[s], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.tabType = e.int32();
                        break;
                    case 2:
                        s.tab = {
                            oneofKind: "introduction",
                            introduction: jt.internalBinaryRead(e, e.uint32(), n, s.tab.introduction)
                        };
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.tabType !== 0 && t.tag(1, c.Varint).int32(e.tabType), e.tab.oneofKind === "introduction" && jt.internalBinaryWrite(e.tab.introduction, t.tag(2, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 2:
                        s.modules.push(zt.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.modules.length; s++) zt.internalBinaryWrite(e.modules[s], t.tag(2, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.type = e.int32();
                        break;
                    case 5:
                        s.data = {
                            oneofKind: "headLine",
                            headLine: _t.internalBinaryRead(e, e.uint32(), n, s.data.headLine)
                        };
                        break;
                    case 22:
                        s.data = {
                            oneofKind: "relates",
                            relates: Kt.internalBinaryRead(e, e.uint32(), n, s.data.relates)
                        };
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.type !== 0 && t.tag(1, c.Varint).int32(e.type), e.data.oneofKind === "headLine" && _t.internalBinaryWrite(e.data.headLine, t.tag(5, c.LengthDelimited).fork(), n).join(), e.data.oneofKind === "relates" && Kt.internalBinaryWrite(e.data.relates, t.tag(22, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, zt = new Qt, en = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.Headline", [{no: 1, name: "label", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.label = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.label = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.label.length && t.tag(1, c.LengthDelimited).bytes(e.label);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.cards.push(le.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.cards.length; s++) le.internalBinaryWrite(e.cards[s], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.relateCardType = e.int32();
                        break;
                    case 11:
                        s.cmStock = e.bytes();
                        break;
                    case 12:
                        s.basicInfo = Gt.internalBinaryRead(e, e.uint32(), n, s.basicInfo);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.relateCardType !== 0 && t.tag(1, c.Varint).int32(e.relateCardType), e.cmStock.length && t.tag(11, c.LengthDelimited).bytes(e.cmStock), e.basicInfo && Gt.internalBinaryWrite(e.basicInfo, t.tag(12, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, le = new nn, rn = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.CardBasicInfo", [{no: 6, name: "unique_id", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.uniqueId = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 6:
                        s.uniqueId = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.uniqueId !== "" && t.tag(6, c.LengthDelimited).string(e.uniqueId);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Gt = new rn, sn = class extends y {
        constructor() {
            super("bilibili.app.viewunite.v1.ViewProgressReply", [{no: 4, name: "dm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.dm = new Uint8Array(0), e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 4:
                        s.dm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.dm.length && t.tag(4, c.LengthDelimited).bytes(e.dm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, ln = new sn, an = class extends y {
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.relates.push(le.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.relates.length; s++) le.internalBinaryWrite(e.relates[s], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, fn = new an;
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 18:
                        s.activityMeta.push(e.string());
                        break;
                    case 22:
                        s.command = un.internalBinaryRead(e, e.uint32(), n, s.command);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.activityMeta.length; s++) t.tag(18, c.LengthDelimited).string(e.activityMeta[s]);
            e.command && un.internalBinaryWrite(e.command, t.tag(22, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.commandDms.push(e.bytes());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.commandDms.length; s++) t.tag(1, c.LengthDelimited).bytes(e.commandDms[s]);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 11:
                        s.cm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.cm.length && t.tag(11, c.LengthDelimited).bytes(e.cm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, mn = new dn;
    var bn = class extends y {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayViewReply", [{
                no: 5,
                name: "view_info",
                kind: "message",
                T: () => yn
            }, {no: 6, name: "play_ext_conf", kind: "message", T: () => gn}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 5:
                        s.viewInfo = yn.internalBinaryRead(e, e.uint32(), n, s.viewInfo);
                        break;
                    case 6:
                        s.playExtConf = gn.internalBinaryRead(e, e.uint32(), n, s.playExtConf);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.viewInfo && yn.internalBinaryWrite(e.viewInfo, t.tag(5, c.LengthDelimited).fork(), n).join(), e.playExtConf && gn.internalBinaryWrite(e.playExtConf, t.tag(6, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Tn = new bn, kn = class extends y {
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 8:
                        s.tryWatchPromptBar = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.tryWatchPromptBar.length && t.tag(8, c.LengthDelimited).bytes(e.tryWatchPromptBar);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, yn = new kn, vn = class extends y {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayAbilityExtConf", [{
                no: 3,
                name: "cast_tips",
                kind: "message",
                T: () => wn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 3:
                        s.castTips = wn.internalBinaryRead(e, e.uint32(), n, s.castTips);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.castTips && wn.internalBinaryWrite(e.castTips, t.tag(3, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, gn = new vn, Nn = class extends y {
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 1:
                        s.code = e.int32();
                        break;
                    case 2:
                        s.message = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.code !== 0 && t.tag(1, c.Varint).int32(e.code), e.message !== "" && t.tag(2, c.LengthDelimited).string(e.message);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, wn = new Nn;
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

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 4:
                        s.item.push(xn.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            for (let s = 0; s < e.item.length; s++) xn.internalBinaryWrite(e.item[s], t.tag(4, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Rn = new Bn, Un = class extends y {
        constructor() {
            super("bilibili.polymer.app.search.v1.Item", [{no: 4, name: "linktype", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.linktype = "", e !== void 0 && m(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let s = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [a, l] = e.tag();
                switch (a) {
                    case 4:
                        s.linktype = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? p.onRead : o)(this.typeName, s, a, l, u)
                }
            }
            return s
        }

        internalBinaryWrite(e, t, n) {
            e.linktype !== "" && t.tag(4, c.LengthDelimited).string(e.linktype);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, xn = new Un;
    var P = new Uint8Array(0);

    function gi(r, e) {
        let t = nt.fromBinary(r);
        if (t.topicList = P, t.dynamicList && (t.dynamicList.list = t.dynamicList.list.filter(n => ![ae.AD, ae.LIVE_RCMD].includes(n.cardType))), e.showUpList === "false") delete t.upList; else if (!e.isIPad && e.showUpList !== "true") if (t.upList?.showLiveNum) {
            let {list: n, listSecond: i} = t.upList, s = i.at(-1);
            s && (s.separator = !0, n.unshift(...i), i.length = 0)
        } else delete t.upList;
        L(nt, t)
    }

    function wi(r) {
        let e = rt.fromBinary(r);
        e.show = "\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u6216up\u4E3B", e.word = "", e.goto = "", e.value = "", e.uri = "", L(rt, e)
    }

    function bi(r) {
        let e = ut.fromBinary(r), t = e.userModels.find(n => n.mode === "teenagers");
        t?.policy?.interval && (t.policy.interval = 0, L(ut, e))
    }

    function ki(r) {
        let e = gt.fromBinary(r);
        e.viewInfo && (e.viewInfo.promptBar = P), e.playArcConf?.arcConfs && Object.values(e.playArcConf.arcConfs).forEach(t => {
            t.isSupport && t.disabled && (t.disabled = !1, t.extraContent = void 0, t.unsupportScene.length = 0)
        }), L(gt, e)
    }

    function vi(r) {
        let e = xt.fromBinary(r), {backgroundPlayConf: t, castConf: n} = e.playArc || {};
        [t, n].forEach(i => {
            i && (!i.isSupport || i.disabled) && (i.isSupport = !0, i.disabled = !1, i.extraContent = void 0, i.unsupportScene.length = 0)
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

    var hr = [X.GAME, X.CM_TYPE, X.LIVE, X.AI_RECOMMEND, X.COURSE],
        Ui = r => !hr.includes(r.relateCardType) && !r.cmStock.length && !r.basicInfo?.uniqueId;

    function Ri(r) {
        let e = fn.fromBinary(r);
        e.relates = e.relates.filter(Ui), L(fn, e)
    }

    function Ii(r) {
        let e = on.fromBinary(r);
        e.cm = P, e.reqUser && (e.reqUser.elecPlusBtn = P), e.tab?.tabModule.forEach(t => {
            t.tab.oneofKind === "introduction" && (t.tab.introduction.modules = t.tab.introduction.modules.reduce((n, i) => ([J.PAY_BAR, J.SPECIALTAG, J.MERCHANDISE].includes(i.type) || (i.type === J.UGC_HEADLINE && i.data.oneofKind === "headLine" ? i.data.headLine.label = P : i.type === J.RELATED_RECOMMEND && i.data.oneofKind === "relates" && (i.data.relates.cards = i.data.relates.cards.filter(Ui)), n.push(i)), n), []))
        }), L(on, e)
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

    var pr = /(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/, me = class {
        constructor(e = "") {
            if (this.name = "URL v1.0.2", !e) throw new Error("Empty URL");
            this.parse(e)
        }

        parse(e) {
            let {scheme: t, host: n, path: i = "", params: s} = e.match(pr)?.groups ?? {};
            this.scheme = t, this.host = n, this.path = i, this.params = s ? s.split("&").reduce((f, a) => {
                let [l, o] = a.split("=");
                return f[l] = o, f
            }, {}) : {}
        }

        toString() {
            let e = this.scheme + "://" + this.host + "/" + this.path;
            return this.params && (e += "?" + Object.entries(this.params).reduce((t, [n, i], s) => t + (s ? "&" : "") + n + "=" + i, "")), e
        }
    };
    var Ve = H.getInstance("Bilibili Helper", {debug: !1}), dr = Ve.request.url, En = Ve.response.bodyBytes;
    En || Ve.exit();
    var mr = new me(dr).path,
        yr = typeof $utils == "object" && typeof $utils?.ungzip == "function" ? $utils.ungzip : Gn, gr = En.slice(0, 5),
        In = En.slice(5);
    gr[0] && (In = yr(In));
    var wr = globalThis.$environment?.["device-model"] || globalThis.$loon,
        br = typeof $argument == "string" ? JSON.parse($argument) : typeof $argument == "object" ? $argument : null,
        kr = {...br, isIPad: wr?.includes("iPad")}, Li = {
            "v2.Dynamic/DynAll": gi,
            "v1.Search/DefaultWords": wi,
            "v1.Teenagers/ModeStatus": bi,
            "playerunite.v1.Player/PlayViewUnite": ki,
            "playurl.v1.PlayURL/PlayView": vi,
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
    for (let r in Li) if (mr.endsWith(r)) {
        Li[r](In, kr);
        break
    }
    Ve.exit();
})();