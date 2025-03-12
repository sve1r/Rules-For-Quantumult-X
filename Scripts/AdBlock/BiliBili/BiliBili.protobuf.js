// Build: 2025/3/11 21:38:12
(() => {
    console.time = function (o) {
        this._times = this._times || {}, this._times[o] = Date.now()
    };
    console.timeEnd = function (o) {
        if (this._times && this._times[o]) {
            let t = Date.now() - this._times[o];
            console.log(`${o}: ${t}ms`), delete this._times[o]
        } else console.log(`Timer with label ${o} does not exist.`)
    };

    function Hs(o) {
        "use strict";

        function t() {
        }

        function n() {
        }

        var a = String.fromCharCode, i = {}.toString, e = i.call(o.SharedArrayBuffer), c = i(), l = o.Uint8Array,
            f = l || Array, r = l ? ArrayBuffer : f, d = r.isView || function (T) {
                return T && "length" in T
            }, g = i.call(r.prototype);
        r = n.prototype;
        var m = o.TextEncoder, b = new (l ? Uint16Array : f)(32);
        t.prototype.decode = function (T) {
            if (!d(T)) {
                var V = i.call(T);
                if (V !== g && V !== e && V !== c) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                T = l ? new f(T) : T || []
            }
            for (var B = V = "", w = 0, L = T.length | 0, S = L - 32 | 0, U, I, F = 0, it = 0, G, C = 0, z = -1; w < L;) {
                for (U = w <= S ? 32 : L - w | 0; C < U; w = w + 1 | 0, C = C + 1 | 0) {
                    switch (I = T[w] & 255, I >> 4) {
                        case 15:
                            if (G = T[w = w + 1 | 0] & 255, G >> 6 !== 2 || 247 < I) {
                                w = w - 1 | 0;
                                break
                            }
                            F = (I & 7) << 6 | G & 63, it = 5, I = 256;
                        case 14:
                            G = T[w = w + 1 | 0] & 255, F <<= 6, F |= (I & 15) << 6 | G & 63, it = G >> 6 === 2 ? it + 4 | 0 : 24, I = I + 256 & 768;
                        case 13:
                        case 12:
                            G = T[w = w + 1 | 0] & 255, F <<= 6, F |= (I & 31) << 6 | G & 63, it = it + 7 | 0, w < L && G >> 6 === 2 && F >> it && 1114112 > F ? (I = F, F = F - 65536 | 0, 0 <= F && (z = (F >> 10) + 55296 | 0, I = (F & 1023) + 56320 | 0, 31 > C ? (b[C] = z, C = C + 1 | 0, z = -1) : (G = z, z = I, I = G))) : (I >>= 8, w = w - I - 1 | 0, I = 65533), F = it = 0, U = w <= S ? 32 : L - w | 0;
                        default:
                            b[C] = I;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    b[C] = 65533
                }
                if (B += a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15], b[16], b[17], b[18], b[19], b[20], b[21], b[22], b[23], b[24], b[25], b[26], b[27], b[28], b[29], b[30], b[31]), 32 > C && (B = B.slice(0, C - 32 | 0)), w < L) {
                    if (b[0] = z, C = ~z >>> 31, z = -1, B.length < V.length) continue
                } else z !== -1 && (B += a(z));
                V += B, B = ""
            }
            return V
        }, r.encode = function (T) {
            T = T === void 0 ? "" : "" + T;
            var V = T.length | 0, B = new f((V << 1) + 8 | 0), w, L = 0, S = !l;
            for (w = 0; w < V; w = w + 1 | 0, L = L + 1 | 0) {
                var U = T.charCodeAt(w) | 0;
                if (127 >= U) B[L] = U; else {
                    if (2047 >= U) B[L] = 192 | U >> 6; else {
                        t:{
                            if (55296 <= U) if (56319 >= U) {
                                var I = T.charCodeAt(w = w + 1 | 0) | 0;
                                if (56320 <= I && 57343 >= I) {
                                    if (U = (U << 10) + I - 56613888 | 0, 65535 < U) {
                                        B[L] = 240 | U >> 18, B[L = L + 1 | 0] = 128 | U >> 12 & 63, B[L = L + 1 | 0] = 128 | U >> 6 & 63, B[L = L + 1 | 0] = 128 | U & 63;
                                        continue
                                    }
                                    break t
                                }
                                U = 65533
                            } else 57343 >= U && (U = 65533);
                            !S && w << 1 < L && w << 1 < (L - 7 | 0) && (S = !0, I = new f(3 * V), I.set(B), B = I)
                        }
                        B[L] = 224 | U >> 12, B[L = L + 1 | 0] = 128 | U >> 6 & 63
                    }
                    B[L = L + 1 | 0] = 128 | U & 63
                }
            }
            return l ? B.subarray(0, L) : B.slice(0, L)
        }, o.TextDecoder = t, o.TextEncoder = n
    }

    var y = Hs(globalThis);
    var q = Uint8Array, Tt = Uint16Array, Js = Int32Array,
        Al = new q([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        jl = new q([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Xs = new q([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Sl = function (o, t) {
            for (var n = new Tt(31), a = 0; a < 31; ++a) n[a] = t += 1 << o[a - 1];
            for (var i = new Js(n[30]), a = 1; a < 30; ++a) for (var e = n[a]; e < n[a + 1]; ++e) i[e] = e - n[a] << 5 | a;
            return {b: n, r: i}
        }, $l = Sl(Al, 2), Ml = $l.b, Zs = $l.r;
    Ml[28] = 258, Zs[258] = 28;
    var Kl = Sl(jl, 0), Qs = Kl.b, Uf = Kl.r, bn = new Tt(32768);
    for (v = 0; v < 32768; ++v) ot = (v & 43690) >> 1 | (v & 21845) << 1, ot = (ot & 52428) >> 2 | (ot & 13107) << 2, ot = (ot & 61680) >> 4 | (ot & 3855) << 4, bn[v] = ((ot & 65280) >> 8 | (ot & 255) << 8) >> 1;
    var ot, v, Vt = function (o, t, n) {
        for (var a = o.length, i = 0, e = new Tt(t); i < a; ++i) o[i] && ++e[o[i] - 1];
        var c = new Tt(t);
        for (i = 1; i < t; ++i) c[i] = c[i - 1] + e[i - 1] << 1;
        var l;
        if (n) {
            l = new Tt(1 << t);
            var f = 15 - t;
            for (i = 0; i < a; ++i) if (o[i]) for (var r = i << 4 | o[i], d = t - o[i], g = c[o[i] - 1]++ << d, m = g | (1 << d) - 1; g <= m; ++g) l[bn[g] >> f] = r
        } else for (l = new Tt(a), i = 0; i < a; ++i) o[i] && (l[i] = bn[c[o[i] - 1]++] >> 15 - o[i]);
        return l
    }, Pt = new q(288);
    for (v = 0; v < 144; ++v) Pt[v] = 8;
    var v;
    for (v = 144; v < 256; ++v) Pt[v] = 9;
    var v;
    for (v = 256; v < 280; ++v) Pt[v] = 7;
    var v;
    for (v = 280; v < 288; ++v) Pt[v] = 8;
    var v, Gl = new q(32);
    for (v = 0; v < 32; ++v) Gl[v] = 5;
    var v;
    var tf = Vt(Pt, 9, 1);
    var nf = Vt(Gl, 5, 1), kn = function (o) {
        for (var t = o[0], n = 1; n < o.length; ++n) o[n] > t && (t = o[n]);
        return t
    }, nt = function (o, t, n) {
        var a = t / 8 | 0;
        return (o[a] | o[a + 1] << 8) >> (t & 7) & n
    }, gn = function (o, t) {
        var n = t / 8 | 0;
        return (o[n] | o[n + 1] << 8 | o[n + 2] << 16) >> (t & 7)
    }, ef = function (o) {
        return (o + 7) / 8 | 0
    }, af = function (o, t, n) {
        return (t == null || t < 0) && (t = 0), (n == null || n > o.length) && (n = o.length), new q(o.subarray(t, n))
    };
    var of = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        et = function (o, t, n) {
            var a = new Error(t || of[o]);
            if (a.code = o, Error.captureStackTrace && Error.captureStackTrace(a, et), !n) throw a;
            return a
        }, rf = function (o, t, n, a) {
            var i = o.length, e = a ? a.length : 0;
            if (!i || t.f && !t.l) return n || new q(0);
            var c = !n, l = c || t.i != 2, f = t.i;
            c && (n = new q(i * 3));
            var r = function (Pl) {
                var Fl = n.length;
                if (Pl > Fl) {
                    var Cl = new q(Math.max(Fl * 2, Pl));
                    Cl.set(n), n = Cl
                }
            }, d = t.f || 0, g = t.p || 0, m = t.b || 0, b = t.l, T = t.d, V = t.m, B = t.n, w = i * 8;
            do {
                if (!b) {
                    d = nt(o, g, 1);
                    var L = nt(o, g + 1, 3);
                    if (g += 3, L) if (L == 1) b = tf, T = nf, V = 9, B = 5; else if (L == 2) {
                        var F = nt(o, g, 31) + 257, it = nt(o, g + 10, 15) + 4, G = F + nt(o, g + 5, 31) + 1;
                        g += 14;
                        for (var C = new q(G), z = new q(19), J = 0; J < it; ++J) z[Xs[J]] = nt(o, g + J * 3, 7);
                        g += it * 3;
                        for (var _l = kn(z), Ks = (1 << _l) - 1, Gs = Vt(z, _l, 1), J = 0; J < G;) {
                            var Ul = Gs[nt(o, g, Ks)];
                            g += Ul & 15;
                            var S = Ul >> 4;
                            if (S < 16) C[J++] = S; else {
                                var yt = 0, Mt = 0;
                                for (S == 16 ? (Mt = 3 + nt(o, g, 3), g += 2, yt = C[J - 1]) : S == 17 ? (Mt = 3 + nt(o, g, 7), g += 3) : S == 18 && (Mt = 11 + nt(o, g, 127), g += 7); Mt--;) C[J++] = yt
                            }
                        }
                        var El = C.subarray(0, F), ft = C.subarray(F);
                        V = kn(El), B = kn(ft), b = Vt(El, V, 1), T = Vt(ft, B, 1)
                    } else et(1); else {
                        var S = ef(g) + 4, U = o[S - 4] | o[S - 3] << 8, I = S + U;
                        if (I > i) {
                            f && et(0);
                            break
                        }
                        l && r(m + U), n.set(o.subarray(S, I), m), t.b = m += U, t.p = g = I * 8, t.f = d;
                        continue
                    }
                    if (g > w) {
                        f && et(0);
                        break
                    }
                }
                l && r(m + 131072);
                for (var zs = (1 << V) - 1, Ys = (1 << B) - 1, hn = g; ; hn = g) {
                    var yt = b[gn(o, g) & zs], wt = yt >> 4;
                    if (g += yt & 15, g > w) {
                        f && et(0);
                        break
                    }
                    if (yt || et(2), wt < 256) n[m++] = wt; else if (wt == 256) {
                        hn = g, b = null;
                        break
                    } else {
                        var Wl = wt - 254;
                        if (wt > 264) {
                            var J = wt - 257, Ot = Al[J];
                            Wl = nt(o, g, (1 << Ot) - 1) + Ml[J], g += Ot
                        }
                        var un = T[gn(o, g) & Ys], pn = un >> 4;
                        un || et(3), g += un & 15;
                        var ft = Qs[pn];
                        if (pn > 3) {
                            var Ot = jl[pn];
                            ft += gn(o, g) & (1 << Ot) - 1, g += Ot
                        }
                        if (g > w) {
                            f && et(0);
                            break
                        }
                        l && r(m + 131072);
                        var Ol = m + Wl;
                        if (m < ft) {
                            var Vl = e - ft, qs = Math.min(ft, Ol);
                            for (Vl + m < 0 && et(3); m < qs; ++m) n[m] = a[Vl + m]
                        }
                        for (; m < Ol; ++m) n[m] = n[m - ft]
                    }
                }
                t.l = b, t.p = hn, t.b = m, t.f = d, b && (d = 1, t.m = V, t.d = T, t.n = B)
            } while (!d);
            return m != n.length && c ? af(n, 0, m) : n.subarray(0, m)
        };
    var lf = new q(0);
    var sf = function (o) {
        (o[0] != 31 || o[1] != 139 || o[2] != 8) && et(6, "invalid gzip data");
        var t = o[3], n = 10;
        t & 4 && (n += (o[10] | o[11] << 8) + 2);
        for (var a = (t >> 3 & 1) + (t >> 4 & 1); a > 0; a -= !o[n++]) ;
        return n + (t & 2)
    }, ff = function (o) {
        var t = o.length;
        return (o[t - 4] | o[t - 3] << 8 | o[t - 2] << 16 | o[t - 1] << 24) >>> 0
    };

    function zl(o, t) {
        var n = sf(o);
        return n + 8 > o.length && et(6, "invalid gzip data"), rf(o.subarray(n, -8), {i: 2}, t && t.out || new q(ff(o)), t && t.dictionary)
    }

    var cf = typeof TextDecoder < "u" && new TextDecoder, df = 0;
    try {
        cf.decode(lf, {stream: !0}), df = 1
    } catch {
    }
    var Ft = class {
        constructor(o, t, n) {
            this._times = new Map, this.name = o ?? "", this.debug = n?.debug ?? !1, o && this.log(`${o} Start`), this.className = t ?? "", this.init()
        }

        static getInstance(o, t) {
            let n = typeof $task < "u" ? "QuanX" : "Surge";
            return Ft.instances[n] || (Ft.instances[n] = Ft.classNames[n](o, n, t)), Ft.instances[n]
        }

        createProxy(o) {
            return new Proxy(o, {get: this.getFn, set: this.setFn})
        }

        getFn(o, t, n) {
            return o[t]
        }

        setFn(o, t, n, a) {
            return o[t] = n, !0
        }

        getJSON(o, t = {}) {
            let n = this.getVal(o);
            return n ? JSON.parse(n) : t
        }

        setJSON(o, t) {
            this.setVal(JSON.stringify(o), t)
        }

        msg(o = this.name, t = "", n = "", a) {
        }

        log(o) {
            this.debug && (typeof o == "object" && (o = JSON.stringify(o)), console.log(o))
        }

        timeStart(o) {
            this._times.set(o, Date.now())
        }

        timeEnd(o) {
            if (this._times?.has(o)) {
                let t = Date.now() - this._times.get(o);
                this.log(`${o}: ${t}ms`), this._times.delete(o)
            } else this.log(`Timer with label ${o} does not exist.`)
        }

        exit() {
            $done({})
        }

        reject() {
            $done()
        }
    }, dt = Ft;
    dt.instances = {}, dt.classNames = {QuanX: (o, t, n) => new ql(o, t, n), Surge: (o, t, n) => new Yl(o, t, n)};
    var mn = class extends dt {
        getFn(o, t, n) {
            let a = mn.clientAdapter[t] || t;
            return super.getFn(o, a, n)
        }

        setFn(o, t, n, a) {
            let i = mn.clientAdapter[t] || t;
            return super.setFn(o, i, n, a)
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (o) {
                this.log(o.toString())
            }
        }

        getVal(o) {
            return $persistentStore.read(o)
        }

        setVal(o, t) {
            $persistentStore.write(o, t)
        }

        msg(o = this.name, t = "", n = "", a) {
            $notification.post(o, t, n, {url: a ?? ""})
        }

        async fetch(o) {
            return await new Promise((t, n) => {
                let {method: a, body: i, bodyBytes: e, ...c} = o, l = e ?? i, f = l instanceof Uint8Array;
                $httpClient[a.toLowerCase()]({...c, body: l, "binary-mode": f}, (r, d, g) => {
                    r && n(r);
                    let m = f ? "bodyBytes" : "body";
                    t({status: d.status, headers: d.headers, [m]: g})
                })
            })
        }

        done(o) {
            let t = o.response ?? o, n, a;
            t.bodyBytes ? (n = t.bodyBytes, delete t.bodyBytes, a = {...o}, a.response ? a.response.body = n : a.body = n) : a = o, $done(a)
        }
    }, Yl = mn;
    Yl.clientAdapter = {bodyBytes: "body"};
    var ct = class extends dt {
        static transferBodyBytes(o, t) {
            return o instanceof ArrayBuffer ? t === "Uint8Array" ? new Uint8Array(o) : o : o instanceof Uint8Array && t === "ArrayBuffer" ? o.buffer.slice(o.byteOffset, o.byteLength + o.byteOffset) : o
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (o) {
                this.log(o.toString())
            }
        }

        getFn(o, t, n) {
            let a = ct.clientAdapter[t] || t, i = super.getFn(o, a, n);
            return t === "bodyBytes" && (i = ct.transferBodyBytes(i, "Uint8Array")), i
        }

        setFn(o, t, n, a) {
            let i = ct.clientAdapter[t] || t, e = n;
            return t === "bodyBytes" && (e = ct.transferBodyBytes(e, "Uint8Array")), super.setFn(o, i, e, a)
        }

        getVal(o) {
            return $prefs.valueForKey(o)?.replace(/\0/g, "")
        }

        setVal(o, t) {
            $prefs.setValueForKey(o, t)
        }

        msg(o = this.name, t = "", n = "", a) {
            $notify(o, t, n, {"open-url": a ?? ""})
        }

        async fetch(o) {
            return await new Promise(t => {
                let n = {url: "", method: "GET"};
                for (let [a, i] of Object.entries(o)) a === "id" ? n.sessionIndex = i : a === "bodyBytes" ? n.bodyBytes = ct.transferBodyBytes(i, "ArrayBuffer") : n[a] = i;
                o.bodyBytes && delete n.body, $task.fetch(n).then(a => {
                    let i = {status: 200, headers: {}};
                    for (let [e, c] of Object.entries(a)) e === "sessionIndex" ? i.id = c : e === "bodyBytes" ? i.bodyBytes = ct.transferBodyBytes(c, "Uint8Array") : e === "statusCode" ? i.status = c : i[e] = c;
                    t(i)
                })
            })
        }

        done(o) {
            let t = o.response ?? o, n = {};
            for (let [a, i] of Object.entries(t)) a === "status" ? n.status = `HTTP/1.1 ${i}` : a === "bodyBytes" ? n.bodyBytes = ct.transferBodyBytes(i, "ArrayBuffer") : n[a] = i;
            $done(n)
        }
    }, ql = ct;
    ql.clientAdapter = {id: "sessionIndex", status: "statusCode"};
    var hf = dt.getInstance("Bilibili Helper", {debug: !1});

    function uf(o) {
        let t = pf(o.length), n = new Uint8Array(5 + o.length);
        return n[0] = 0, n.set(t, 1), n.set(o, 5), n
    }

    function pf(o) {
        let t = new ArrayBuffer(4);
        return new DataView(t).setUint32(0, o, !1), new Uint8Array(t)
    }

    function j(o, t) {
        let n = o.toBinary(t);
        hf.done({bodyBytes: uf(n)})
    }

    function pt(o) {
        let t = typeof o;
        if (t == "object") {
            if (Array.isArray(o)) return "array";
            if (o === null) return "null"
        }
        return t
    }

    function Nt(o) {
        return o !== null && typeof o == "object" && !Array.isArray(o)
    }

    var rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Kt = [];
    for (let o = 0; o < rt.length; o++) Kt[rt[o].charCodeAt(0)] = o;
    Kt["-".charCodeAt(0)] = rt.indexOf("+");
    Kt["_".charCodeAt(0)] = rt.indexOf("/");

    function Hl(o) {
        let t = o.length * 3 / 4;
        o[o.length - 2] == "=" ? t -= 2 : o[o.length - 1] == "=" && (t -= 1);
        let n = new Uint8Array(t), a = 0, i = 0, e, c = 0;
        for (let l = 0; l < o.length; l++) {
            if (e = Kt[o.charCodeAt(l)], e === void 0) switch (o[l]) {
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
                    c = e, i = 1;
                    break;
                case 1:
                    n[a++] = c << 2 | (e & 48) >> 4, c = e, i = 2;
                    break;
                case 2:
                    n[a++] = (c & 15) << 4 | (e & 60) >> 2, c = e, i = 3;
                    break;
                case 3:
                    n[a++] = (c & 3) << 6 | e, i = 0;
                    break
            }
        }
        if (i == 1) throw Error("invalid base64 string.");
        return n.subarray(0, a)
    }

    function Jl(o) {
        let t = "", n = 0, a, i = 0;
        for (let e = 0; e < o.length; e++) switch (a = o[e], n) {
            case 0:
                t += rt[a >> 2], i = (a & 3) << 4, n = 1;
                break;
            case 1:
                t += rt[i | a >> 4], i = (a & 15) << 2, n = 2;
                break;
            case 2:
                t += rt[i | a >> 6], t += rt[a & 63], n = 0;
                break
        }
        return n && (t += rt[i], t += "=", n == 1 && (t += "=")), t
    }

    var h;
    (function (o) {
        o.symbol = Symbol.for("protobuf-ts/unknown"), o.onRead = (n, a, i, e, c) => {
            (t(a) ? a[o.symbol] : a[o.symbol] = []).push({no: i, wireType: e, data: c})
        }, o.onWrite = (n, a, i) => {
            for (let {no: e, wireType: c, data: l} of o.list(a)) i.tag(e, c).raw(l)
        }, o.list = (n, a) => {
            if (t(n)) {
                let i = n[o.symbol];
                return a ? i.filter(e => e.no == a) : i
            }
            return []
        }, o.last = (n, a) => o.list(n, a).slice(-1)[0];
        let t = n => n && Array.isArray(n[o.symbol])
    })(h || (h = {}));
    var s;
    (function (o) {
        o[o.Varint = 0] = "Varint", o[o.Bit64 = 1] = "Bit64", o[o.LengthDelimited = 2] = "LengthDelimited", o[o.StartGroup = 3] = "StartGroup", o[o.EndGroup = 4] = "EndGroup", o[o.Bit32 = 5] = "Bit32"
    })(s || (s = {}));

    function Xl() {
        let o = 0, t = 0;
        for (let a = 0; a < 28; a += 7) {
            let i = this.buf[this.pos++];
            if (o |= (i & 127) << a, !(i & 128)) return this.assertBounds(), [o, t]
        }
        let n = this.buf[this.pos++];
        if (o |= (n & 15) << 28, t = (n & 112) >> 4, !(n & 128)) return this.assertBounds(), [o, t];
        for (let a = 3; a <= 31; a += 7) {
            let i = this.buf[this.pos++];
            if (t |= (i & 127) << a, !(i & 128)) return this.assertBounds(), [o, t]
        }
        throw new Error("invalid varint")
    }

    function zt(o, t, n) {
        for (let e = 0; e < 28; e = e + 7) {
            let c = o >>> e, l = !(!(c >>> 7) && t == 0), f = (l ? c | 128 : c) & 255;
            if (n.push(f), !l) return
        }
        let a = o >>> 28 & 15 | (t & 7) << 4, i = !!(t >> 3);
        if (n.push((i ? a | 128 : a) & 255), !!i) {
            for (let e = 3; e < 31; e = e + 7) {
                let c = t >>> e, l = !!(c >>> 7), f = (l ? c | 128 : c) & 255;
                if (n.push(f), !l) return
            }
            n.push(t >>> 31 & 1)
        }
    }

    var Gt = 65536 * 65536;

    function yn(o) {
        let t = o[0] == "-";
        t && (o = o.slice(1));
        let n = 1e6, a = 0, i = 0;

        function e(c, l) {
            let f = Number(o.slice(c, l));
            i *= n, a = a * n + f, a >= Gt && (i = i + (a / Gt | 0), a = a % Gt)
        }

        return e(-24, -18), e(-18, -12), e(-12, -6), e(-6), [t, a, i]
    }

    function Yt(o, t) {
        if (t >>> 0 <= 2097151) return "" + (Gt * t + (o >>> 0));
        let n = o & 16777215, a = (o >>> 24 | t << 8) >>> 0 & 16777215, i = t >> 16 & 65535,
            e = n + a * 6777216 + i * 6710656, c = a + i * 8147497, l = i * 2, f = 1e7;
        e >= f && (c += Math.floor(e / f), e %= f), c >= f && (l += Math.floor(c / f), c %= f);

        function r(d, g) {
            let m = d ? String(d) : "";
            return g ? "0000000".slice(m.length) + m : m
        }

        return r(l, 0) + r(c, l) + r(e, 1)
    }

    function wn(o, t) {
        if (o >= 0) {
            for (; o > 127;) t.push(o & 127 | 128), o = o >>> 7;
            t.push(o)
        } else {
            for (let n = 0; n < 9; n++) t.push(o & 127 | 128), o = o >> 7;
            t.push(1)
        }
    }

    function Zl() {
        let o = this.buf[this.pos++], t = o & 127;
        if (!(o & 128)) return this.assertBounds(), t;
        if (o = this.buf[this.pos++], t |= (o & 127) << 7, !(o & 128)) return this.assertBounds(), t;
        if (o = this.buf[this.pos++], t |= (o & 127) << 14, !(o & 128)) return this.assertBounds(), t;
        if (o = this.buf[this.pos++], t |= (o & 127) << 21, !(o & 128)) return this.assertBounds(), t;
        o = this.buf[this.pos++], t |= (o & 15) << 28;
        for (let n = 5; o & 128 && n < 10; n++) o = this.buf[this.pos++];
        if (o & 128) throw new Error("invalid varint");
        return this.assertBounds(), t >>> 0
    }

    var E;

    function kf() {
        let o = new DataView(new ArrayBuffer(8));
        E = globalThis.BigInt !== void 0 && typeof o.getBigInt64 == "function" && typeof o.getBigUint64 == "function" && typeof o.setBigInt64 == "function" && typeof o.setBigUint64 == "function" ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: o
        } : void 0
    }

    kf();

    function Ql(o) {
        if (!o) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
    }

    var ts = /^-?[0-9]+$/, Ht = 4294967296, qt = 2147483648, Jt = class {
        constructor(t, n) {
            this.lo = t | 0, this.hi = n | 0
        }

        isZero() {
            return this.lo == 0 && this.hi == 0
        }

        toNumber() {
            let t = this.hi * Ht + (this.lo >>> 0);
            if (!Number.isSafeInteger(t)) throw new Error("cannot convert to safe number");
            return t
        }
    }, W = class extends Jt {
        static from(t) {
            if (E) switch (typeof t) {
                case"string":
                    if (t == "0") return this.ZERO;
                    if (t == "") throw new Error("string is no integer");
                    t = E.C(t);
                case"number":
                    if (t === 0) return this.ZERO;
                    t = E.C(t);
                case"bigint":
                    if (!t) return this.ZERO;
                    if (t < E.UMIN) throw new Error("signed value for ulong");
                    if (t > E.UMAX) throw new Error("ulong too large");
                    return E.V.setBigUint64(0, t, !0), new W(E.V.getInt32(0, !0), E.V.getInt32(4, !0))
            } else switch (typeof t) {
                case"string":
                    if (t == "0") return this.ZERO;
                    if (t = t.trim(), !ts.test(t)) throw new Error("string is no integer");
                    let [n, a, i] = yn(t);
                    if (n) throw new Error("signed value for ulong");
                    return new W(a, i);
                case"number":
                    if (t == 0) return this.ZERO;
                    if (!Number.isSafeInteger(t)) throw new Error("number is no integer");
                    if (t < 0) throw new Error("signed value for ulong");
                    return new W(t, t / Ht)
            }
            throw new Error("unknown value " + typeof t)
        }

        toString() {
            return E ? this.toBigInt().toString() : Yt(this.lo, this.hi)
        }

        toBigInt() {
            return Ql(E), E.V.setInt32(0, this.lo, !0), E.V.setInt32(4, this.hi, !0), E.V.getBigUint64(0, !0)
        }
    };
    W.ZERO = new W(0, 0);
    var R = class extends Jt {
        static from(t) {
            if (E) switch (typeof t) {
                case"string":
                    if (t == "0") return this.ZERO;
                    if (t == "") throw new Error("string is no integer");
                    t = E.C(t);
                case"number":
                    if (t === 0) return this.ZERO;
                    t = E.C(t);
                case"bigint":
                    if (!t) return this.ZERO;
                    if (t < E.MIN) throw new Error("signed long too small");
                    if (t > E.MAX) throw new Error("signed long too large");
                    return E.V.setBigInt64(0, t, !0), new R(E.V.getInt32(0, !0), E.V.getInt32(4, !0))
            } else switch (typeof t) {
                case"string":
                    if (t == "0") return this.ZERO;
                    if (t = t.trim(), !ts.test(t)) throw new Error("string is no integer");
                    let [n, a, i] = yn(t);
                    if (n) {
                        if (i > qt || i == qt && a != 0) throw new Error("signed long too small")
                    } else if (i >= qt) throw new Error("signed long too large");
                    let e = new R(a, i);
                    return n ? e.negate() : e;
                case"number":
                    if (t == 0) return this.ZERO;
                    if (!Number.isSafeInteger(t)) throw new Error("number is no integer");
                    return t > 0 ? new R(t, t / Ht) : new R(-t, -t / Ht).negate()
            }
            throw new Error("unknown value " + typeof t)
        }

        isNegative() {
            return (this.hi & qt) !== 0
        }

        negate() {
            let t = ~this.hi, n = this.lo;
            return n ? n = ~n + 1 : t += 1, new R(n, t)
        }

        toString() {
            if (E) return this.toBigInt().toString();
            if (this.isNegative()) {
                let t = this.negate();
                return "-" + Yt(t.lo, t.hi)
            }
            return Yt(this.lo, this.hi)
        }

        toBigInt() {
            return Ql(E), E.V.setInt32(0, this.lo, !0), E.V.setInt32(4, this.hi, !0), E.V.getBigInt64(0, !0)
        }
    };
    R.ZERO = new R(0, 0);
    var ns = {readUnknownField: !0, readerFactory: o => new Tn(o)};

    function es(o) {
        return o ? Object.assign(Object.assign({}, ns), o) : ns
    }

    var Tn = class {
        constructor(t, n) {
            this.varint64 = Xl, this.uint32 = Zl, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = n ?? new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            })
        }

        tag() {
            let t = this.uint32(), n = t >>> 3, a = t & 7;
            if (n <= 0 || a < 0 || a > 5) throw new Error("illegal tag: field no " + n + " wire type " + a);
            return [n, a]
        }

        skip(t) {
            let n = this.pos;
            switch (t) {
                case s.Varint:
                    for (; this.buf[this.pos++] & 128;) ;
                    break;
                case s.Bit64:
                    this.pos += 4;
                case s.Bit32:
                    this.pos += 4;
                    break;
                case s.LengthDelimited:
                    let a = this.uint32();
                    this.pos += a;
                    break;
                case s.StartGroup:
                    let i;
                    for (; (i = this.tag()[1]) !== s.EndGroup;) this.skip(i);
                    break;
                default:
                    throw new Error("cant skip wire type " + t)
            }
            return this.assertBounds(), this.buf.subarray(n, this.pos)
        }

        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }

        int32() {
            return this.uint32() | 0
        }

        sint32() {
            let t = this.uint32();
            return t >>> 1 ^ -(t & 1)
        }

        int64() {
            return new R(...this.varint64())
        }

        uint64() {
            return new W(...this.varint64())
        }

        sint64() {
            let [t, n] = this.varint64(), a = -(t & 1);
            return t = (t >>> 1 | (n & 1) << 31) ^ a, n = n >>> 1 ^ a, new R(t, n)
        }

        bool() {
            let [t, n] = this.varint64();
            return t !== 0 || n !== 0
        }

        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }

        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }

        fixed64() {
            return new W(this.sfixed32(), this.sfixed32())
        }

        sfixed64() {
            return new R(this.sfixed32(), this.sfixed32())
        }

        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }

        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }

        bytes() {
            let t = this.uint32(), n = this.pos;
            return this.pos += t, this.assertBounds(), this.buf.subarray(n, n + t)
        }

        string() {
            return this.textDecoder.decode(this.bytes())
        }
    };

    function N(o, t) {
        if (!o) throw new Error(t)
    }

    var gf = 34028234663852886e22, bf = -34028234663852886e22, mf = 4294967295, yf = 2147483647, wf = -2147483648;

    function ht(o) {
        if (typeof o != "number") throw new Error("invalid int 32: " + typeof o);
        if (!Number.isInteger(o) || o > yf || o < wf) throw new Error("invalid int 32: " + o)
    }

    function kt(o) {
        if (typeof o != "number") throw new Error("invalid uint 32: " + typeof o);
        if (!Number.isInteger(o) || o > mf || o < 0) throw new Error("invalid uint 32: " + o)
    }

    function Bt(o) {
        if (typeof o != "number") throw new Error("invalid float 32: " + typeof o);
        if (Number.isFinite(o) && (o > gf || o < bf)) throw new Error("invalid float 32: " + o)
    }

    var is = {writeUnknownFields: !0, writerFactory: () => new Nn};

    function as(o) {
        return o ? Object.assign(Object.assign({}, is), o) : is
    }

    var Nn = class {
        constructor(t) {
            this.stack = [], this.textEncoder = t ?? new TextEncoder, this.chunks = [], this.buf = []
        }

        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let t = 0;
            for (let i = 0; i < this.chunks.length; i++) t += this.chunks[i].length;
            let n = new Uint8Array(t), a = 0;
            for (let i = 0; i < this.chunks.length; i++) n.set(this.chunks[i], a), a += this.chunks[i].length;
            return this.chunks = [], n
        }

        fork() {
            return this.stack.push({chunks: this.chunks, buf: this.buf}), this.chunks = [], this.buf = [], this
        }

        join() {
            let t = this.finish(), n = this.stack.pop();
            if (!n) throw new Error("invalid state, fork stack empty");
            return this.chunks = n.chunks, this.buf = n.buf, this.uint32(t.byteLength), this.raw(t)
        }

        tag(t, n) {
            return this.uint32((t << 3 | n) >>> 0)
        }

        raw(t) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t), this
        }

        uint32(t) {
            for (kt(t); t > 127;) this.buf.push(t & 127 | 128), t = t >>> 7;
            return this.buf.push(t), this
        }

        int32(t) {
            return ht(t), wn(t, this.buf), this
        }

        bool(t) {
            return this.buf.push(t ? 1 : 0), this
        }

        bytes(t) {
            return this.uint32(t.byteLength), this.raw(t)
        }

        string(t) {
            let n = this.textEncoder.encode(t);
            return this.uint32(n.byteLength), this.raw(n)
        }

        float(t) {
            Bt(t);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setFloat32(0, t, !0), this.raw(n)
        }

        double(t) {
            let n = new Uint8Array(8);
            return new DataView(n.buffer).setFloat64(0, t, !0), this.raw(n)
        }

        fixed32(t) {
            kt(t);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setUint32(0, t, !0), this.raw(n)
        }

        sfixed32(t) {
            ht(t);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setInt32(0, t, !0), this.raw(n)
        }

        sint32(t) {
            return ht(t), t = (t << 1 ^ t >> 31) >>> 0, wn(t, this.buf), this
        }

        sfixed64(t) {
            let n = new Uint8Array(8), a = new DataView(n.buffer), i = R.from(t);
            return a.setInt32(0, i.lo, !0), a.setInt32(4, i.hi, !0), this.raw(n)
        }

        fixed64(t) {
            let n = new Uint8Array(8), a = new DataView(n.buffer), i = W.from(t);
            return a.setInt32(0, i.lo, !0), a.setInt32(4, i.hi, !0), this.raw(n)
        }

        int64(t) {
            let n = R.from(t);
            return zt(n.lo, n.hi, this.buf), this
        }

        sint64(t) {
            let n = R.from(t), a = n.hi >> 31, i = n.lo << 1 ^ a, e = (n.hi << 1 | n.lo >>> 31) ^ a;
            return zt(i, e, this.buf), this
        }

        uint64(t) {
            let n = W.from(t);
            return zt(n.lo, n.hi, this.buf), this
        }
    };
    var os = {emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0},
        rs = {ignoreUnknownFields: !1};

    function Bn(o) {
        return o ? Object.assign(Object.assign({}, rs), o) : rs
    }

    function Ct(o) {
        return o ? Object.assign(Object.assign({}, os), o) : os
    }

    var Xt = Symbol.for("protobuf-ts/message-type");

    function Ln(o) {
        let t = !1, n = [];
        for (let a = 0; a < o.length; a++) {
            let i = o.charAt(a);
            i == "_" ? t = !0 : /\d/.test(i) ? (n.push(i), t = !0) : t ? (n.push(i.toUpperCase()), t = !1) : a == 0 ? n.push(i.toLowerCase()) : n.push(i)
        }
        return n.join("")
    }

    var k;
    (function (o) {
        o[o.DOUBLE = 1] = "DOUBLE", o[o.FLOAT = 2] = "FLOAT", o[o.INT64 = 3] = "INT64", o[o.UINT64 = 4] = "UINT64", o[o.INT32 = 5] = "INT32", o[o.FIXED64 = 6] = "FIXED64", o[o.FIXED32 = 7] = "FIXED32", o[o.BOOL = 8] = "BOOL", o[o.STRING = 9] = "STRING", o[o.BYTES = 12] = "BYTES", o[o.UINT32 = 13] = "UINT32", o[o.SFIXED32 = 15] = "SFIXED32", o[o.SFIXED64 = 16] = "SFIXED64", o[o.SINT32 = 17] = "SINT32", o[o.SINT64 = 18] = "SINT64"
    })(k || (k = {}));
    var $;
    (function (o) {
        o[o.BIGINT = 0] = "BIGINT", o[o.STRING = 1] = "STRING", o[o.NUMBER = 2] = "NUMBER"
    })($ || ($ = {}));
    var At;
    (function (o) {
        o[o.NO = 0] = "NO", o[o.PACKED = 1] = "PACKED", o[o.UNPACKED = 2] = "UNPACKED"
    })(At || (At = {}));

    function ls(o) {
        var t, n, a, i;
        return o.localName = (t = o.localName) !== null && t !== void 0 ? t : Ln(o.name), o.jsonName = (n = o.jsonName) !== null && n !== void 0 ? n : Ln(o.name), o.repeat = (a = o.repeat) !== null && a !== void 0 ? a : At.NO, o.opt = (i = o.opt) !== null && i !== void 0 ? i : o.repeat || o.oneof ? !1 : o.kind == "message", o
    }

    function ss(o) {
        if (typeof o != "object" || o === null || !o.hasOwnProperty("oneofKind")) return !1;
        switch (typeof o.oneofKind) {
            case"string":
                return o[o.oneofKind] === void 0 ? !1 : Object.keys(o).length == 2;
            case"undefined":
                return Object.keys(o).length == 1;
            default:
                return !1
        }
    }

    var Zt = class {
        constructor(t) {
            var n;
            this.fields = (n = t.fields) !== null && n !== void 0 ? n : []
        }

        prepare() {
            if (this.data) return;
            let t = [], n = [], a = [];
            for (let i of this.fields) if (i.oneof) a.includes(i.oneof) || (a.push(i.oneof), t.push(i.oneof), n.push(i.oneof)); else switch (n.push(i.localName), i.kind) {
                case"scalar":
                case"enum":
                    (!i.opt || i.repeat) && t.push(i.localName);
                    break;
                case"message":
                    i.repeat && t.push(i.localName);
                    break;
                case"map":
                    t.push(i.localName);
                    break
            }
            this.data = {req: t, known: n, oneofs: Object.values(a)}
        }

        is(t, n, a = !1) {
            if (n < 0) return !0;
            if (t == null || typeof t != "object") return !1;
            this.prepare();
            let i = Object.keys(t), e = this.data;
            if (i.length < e.req.length || e.req.some(c => !i.includes(c)) || !a && i.some(c => !e.known.includes(c))) return !1;
            if (n < 1) return !0;
            for (let c of e.oneofs) {
                let l = t[c];
                if (!ss(l)) return !1;
                if (l.oneofKind === void 0) continue;
                let f = this.fields.find(r => r.localName === l.oneofKind);
                if (!f || !this.field(l[l.oneofKind], f, a, n)) return !1
            }
            for (let c of this.fields) if (c.oneof === void 0 && !this.field(t[c.localName], c, a, n)) return !1;
            return !0
        }

        field(t, n, a, i) {
            let e = n.repeat;
            switch (n.kind) {
                case"scalar":
                    return t === void 0 ? n.opt : e ? this.scalars(t, n.T, i, n.L) : this.scalar(t, n.T, n.L);
                case"enum":
                    return t === void 0 ? n.opt : e ? this.scalars(t, k.INT32, i) : this.scalar(t, k.INT32);
                case"message":
                    return t === void 0 ? !0 : e ? this.messages(t, n.T(), a, i) : this.message(t, n.T(), a, i);
                case"map":
                    if (typeof t != "object" || t === null) return !1;
                    if (i < 2) return !0;
                    if (!this.mapKeys(t, n.K, i)) return !1;
                    switch (n.V.kind) {
                        case"scalar":
                            return this.scalars(Object.values(t), n.V.T, i, n.V.L);
                        case"enum":
                            return this.scalars(Object.values(t), k.INT32, i);
                        case"message":
                            return this.messages(Object.values(t), n.V.T(), a, i)
                    }
                    break
            }
            return !0
        }

        message(t, n, a, i) {
            return a ? n.isAssignable(t, i) : n.is(t, i)
        }

        messages(t, n, a, i) {
            if (!Array.isArray(t)) return !1;
            if (i < 2) return !0;
            if (a) {
                for (let e = 0; e < t.length && e < i; e++) if (!n.isAssignable(t[e], i - 1)) return !1
            } else for (let e = 0; e < t.length && e < i; e++) if (!n.is(t[e], i - 1)) return !1;
            return !0
        }

        scalar(t, n, a) {
            let i = typeof t;
            switch (n) {
                case k.UINT64:
                case k.FIXED64:
                case k.INT64:
                case k.SFIXED64:
                case k.SINT64:
                    switch (a) {
                        case $.BIGINT:
                            return i == "bigint";
                        case $.NUMBER:
                            return i == "number" && !isNaN(t);
                        default:
                            return i == "string"
                    }
                case k.BOOL:
                    return i == "boolean";
                case k.STRING:
                    return i == "string";
                case k.BYTES:
                    return t instanceof Uint8Array;
                case k.DOUBLE:
                case k.FLOAT:
                    return i == "number" && !isNaN(t);
                default:
                    return i == "number" && Number.isInteger(t)
            }
        }

        scalars(t, n, a, i) {
            if (!Array.isArray(t)) return !1;
            if (a < 2) return !0;
            if (Array.isArray(t)) {
                for (let e = 0; e < t.length && e < a; e++) if (!this.scalar(t[e], n, i)) return !1
            }
            return !0
        }

        mapKeys(t, n, a) {
            let i = Object.keys(t);
            switch (n) {
                case k.INT32:
                case k.FIXED32:
                case k.SFIXED32:
                case k.SINT32:
                case k.UINT32:
                    return this.scalars(i.slice(0, a).map(e => parseInt(e)), n, a);
                case k.BOOL:
                    return this.scalars(i.slice(0, a).map(e => e == "true" ? !0 : e == "false" ? !1 : e), n, a);
                default:
                    return this.scalars(i, n, a, $.STRING)
            }
        }
    };

    function Y(o, t) {
        switch (t) {
            case $.BIGINT:
                return o.toBigInt();
            case $.NUMBER:
                return o.toNumber();
            default:
                return o.toString()
        }
    }

    var Qt = class {
        constructor(t) {
            this.info = t
        }

        prepare() {
            var t;
            if (this.fMap === void 0) {
                this.fMap = {};
                let n = (t = this.info.fields) !== null && t !== void 0 ? t : [];
                for (let a of n) this.fMap[a.name] = a, this.fMap[a.jsonName] = a, this.fMap[a.localName] = a
            }
        }

        assert(t, n, a) {
            if (!t) {
                let i = pt(a);
                throw (i == "number" || i == "boolean") && (i = a.toString()), new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${n}`)
            }
        }

        read(t, n, a) {
            this.prepare();
            let i = [];
            for (let [e, c] of Object.entries(t)) {
                let l = this.fMap[e];
                if (!l) {
                    if (!a.ignoreUnknownFields) throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${e}`);
                    continue
                }
                let f = l.localName, r;
                if (l.oneof) {
                    if (c === null && (l.kind !== "enum" || l.T()[0] !== "google.protobuf.NullValue")) continue;
                    if (i.includes(l.oneof)) throw new Error(`Multiple members of the oneof group "${l.oneof}" of ${this.info.typeName} are present in JSON.`);
                    i.push(l.oneof), r = n[l.oneof] = {oneofKind: f}
                } else r = n;
                if (l.kind == "map") {
                    if (c === null) continue;
                    this.assert(Nt(c), l.name, c);
                    let d = r[f];
                    for (let [g, m] of Object.entries(c)) {
                        this.assert(m !== null, l.name + " map value", null);
                        let b;
                        switch (l.V.kind) {
                            case"message":
                                b = l.V.T().internalJsonRead(m, a);
                                break;
                            case"enum":
                                if (b = this.enum(l.V.T(), m, l.name, a.ignoreUnknownFields), b === !1) continue;
                                break;
                            case"scalar":
                                b = this.scalar(m, l.V.T, l.V.L, l.name);
                                break
                        }
                        this.assert(b !== void 0, l.name + " map value", m);
                        let T = g;
                        l.K == k.BOOL && (T = T == "true" ? !0 : T == "false" ? !1 : T), T = this.scalar(T, l.K, $.STRING, l.name).toString(), d[T] = b
                    }
                } else if (l.repeat) {
                    if (c === null) continue;
                    this.assert(Array.isArray(c), l.name, c);
                    let d = r[f];
                    for (let g of c) {
                        this.assert(g !== null, l.name, null);
                        let m;
                        switch (l.kind) {
                            case"message":
                                m = l.T().internalJsonRead(g, a);
                                break;
                            case"enum":
                                if (m = this.enum(l.T(), g, l.name, a.ignoreUnknownFields), m === !1) continue;
                                break;
                            case"scalar":
                                m = this.scalar(g, l.T, l.L, l.name);
                                break
                        }
                        this.assert(m !== void 0, l.name, c), d.push(m)
                    }
                } else switch (l.kind) {
                    case"message":
                        if (c === null && l.T().typeName != "google.protobuf.Value") {
                            this.assert(l.oneof === void 0, l.name + " (oneof member)", null);
                            continue
                        }
                        r[f] = l.T().internalJsonRead(c, a, r[f]);
                        break;
                    case"enum":
                        let d = this.enum(l.T(), c, l.name, a.ignoreUnknownFields);
                        if (d === !1) continue;
                        r[f] = d;
                        break;
                    case"scalar":
                        r[f] = this.scalar(c, l.T, l.L, l.name);
                        break
                }
            }
        }

        enum(t, n, a, i) {
            if (t[0] == "google.protobuf.NullValue" && N(n === null || n === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${a}, enum ${t[0]} only accepts null.`), n === null) return 0;
            switch (typeof n) {
                case"number":
                    return N(Number.isInteger(n), `Unable to parse field ${this.info.typeName}#${a}, enum can only be integral number, got ${n}.`), n;
                case"string":
                    let e = n;
                    t[2] && n.substring(0, t[2].length) === t[2] && (e = n.substring(t[2].length));
                    let c = t[1][e];
                    return typeof c > "u" && i ? !1 : (N(typeof c == "number", `Unable to parse field ${this.info.typeName}#${a}, enum ${t[0]} has no value for "${n}".`), c)
            }
            N(!1, `Unable to parse field ${this.info.typeName}#${a}, cannot parse enum value from ${typeof n}".`)
        }

        scalar(t, n, a, i) {
            let e;
            try {
                switch (n) {
                    case k.DOUBLE:
                    case k.FLOAT:
                        if (t === null) return 0;
                        if (t === "NaN") return Number.NaN;
                        if (t === "Infinity") return Number.POSITIVE_INFINITY;
                        if (t === "-Infinity") return Number.NEGATIVE_INFINITY;
                        if (t === "") {
                            e = "empty string";
                            break
                        }
                        if (typeof t == "string" && t.trim().length !== t.length) {
                            e = "extra whitespace";
                            break
                        }
                        if (typeof t != "string" && typeof t != "number") break;
                        let c = Number(t);
                        if (Number.isNaN(c)) {
                            e = "not a number";
                            break
                        }
                        if (!Number.isFinite(c)) {
                            e = "too large or small";
                            break
                        }
                        return n == k.FLOAT && Bt(c), c;
                    case k.INT32:
                    case k.FIXED32:
                    case k.SFIXED32:
                    case k.SINT32:
                    case k.UINT32:
                        if (t === null) return 0;
                        let l;
                        if (typeof t == "number" ? l = t : t === "" ? e = "empty string" : typeof t == "string" && (t.trim().length !== t.length ? e = "extra whitespace" : l = Number(t)), l === void 0) break;
                        return n == k.UINT32 ? kt(l) : ht(l), l;
                    case k.INT64:
                    case k.SFIXED64:
                    case k.SINT64:
                        if (t === null) return Y(R.ZERO, a);
                        if (typeof t != "number" && typeof t != "string") break;
                        return Y(R.from(t), a);
                    case k.FIXED64:
                    case k.UINT64:
                        if (t === null) return Y(W.ZERO, a);
                        if (typeof t != "number" && typeof t != "string") break;
                        return Y(W.from(t), a);
                    case k.BOOL:
                        if (t === null) return !1;
                        if (typeof t != "boolean") break;
                        return t;
                    case k.STRING:
                        if (t === null) return "";
                        if (typeof t != "string") {
                            e = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(t)
                        } catch (f) {
                            f = "invalid UTF8";
                            break
                        }
                        return t;
                    case k.BYTES:
                        if (t === null || t === "") return new Uint8Array(0);
                        if (typeof t != "string") break;
                        return Hl(t)
                }
            } catch (c) {
                e = c.message
            }
            this.assert(!1, i + (e ? " - " + e : ""), t)
        }
    };
    var tn = class {
        constructor(t) {
            var n;
            this.fields = (n = t.fields) !== null && n !== void 0 ? n : []
        }

        write(t, n) {
            let a = {}, i = t;
            for (let e of this.fields) {
                if (!e.oneof) {
                    let r = this.field(e, i[e.localName], n);
                    r !== void 0 && (a[n.useProtoFieldName ? e.name : e.jsonName] = r);
                    continue
                }
                let c = i[e.oneof];
                if (c.oneofKind !== e.localName) continue;
                let l = e.kind == "scalar" || e.kind == "enum" ? Object.assign(Object.assign({}, n), {emitDefaultValues: !0}) : n,
                    f = this.field(e, c[e.localName], l);
                N(f !== void 0), a[n.useProtoFieldName ? e.name : e.jsonName] = f
            }
            return a
        }

        field(t, n, a) {
            let i;
            if (t.kind == "map") {
                N(typeof n == "object" && n !== null);
                let e = {};
                switch (t.V.kind) {
                    case"scalar":
                        for (let [f, r] of Object.entries(n)) {
                            let d = this.scalar(t.V.T, r, t.name, !1, !0);
                            N(d !== void 0), e[f.toString()] = d
                        }
                        break;
                    case"message":
                        let c = t.V.T();
                        for (let [f, r] of Object.entries(n)) {
                            let d = this.message(c, r, t.name, a);
                            N(d !== void 0), e[f.toString()] = d
                        }
                        break;
                    case"enum":
                        let l = t.V.T();
                        for (let [f, r] of Object.entries(n)) {
                            N(r === void 0 || typeof r == "number");
                            let d = this.enum(l, r, t.name, !1, !0, a.enumAsInteger);
                            N(d !== void 0), e[f.toString()] = d
                        }
                        break
                }
                (a.emitDefaultValues || Object.keys(e).length > 0) && (i = e)
            } else if (t.repeat) {
                N(Array.isArray(n));
                let e = [];
                switch (t.kind) {
                    case"scalar":
                        for (let f = 0; f < n.length; f++) {
                            let r = this.scalar(t.T, n[f], t.name, t.opt, !0);
                            N(r !== void 0), e.push(r)
                        }
                        break;
                    case"enum":
                        let c = t.T();
                        for (let f = 0; f < n.length; f++) {
                            N(n[f] === void 0 || typeof n[f] == "number");
                            let r = this.enum(c, n[f], t.name, t.opt, !0, a.enumAsInteger);
                            N(r !== void 0), e.push(r)
                        }
                        break;
                    case"message":
                        let l = t.T();
                        for (let f = 0; f < n.length; f++) {
                            let r = this.message(l, n[f], t.name, a);
                            N(r !== void 0), e.push(r)
                        }
                        break
                }
                (a.emitDefaultValues || e.length > 0 || a.emitDefaultValues) && (i = e)
            } else switch (t.kind) {
                case"scalar":
                    i = this.scalar(t.T, n, t.name, t.opt, a.emitDefaultValues);
                    break;
                case"enum":
                    i = this.enum(t.T(), n, t.name, t.opt, a.emitDefaultValues, a.enumAsInteger);
                    break;
                case"message":
                    i = this.message(t.T(), n, t.name, a);
                    break
            }
            return i
        }

        enum(t, n, a, i, e, c) {
            if (t[0] == "google.protobuf.NullValue") return !e && !i ? void 0 : null;
            if (n === void 0) {
                N(i);
                return
            }
            if (!(n === 0 && !e && !i)) return N(typeof n == "number"), N(Number.isInteger(n)), c || !t[1].hasOwnProperty(n) ? n : t[2] ? t[2] + t[1][n] : t[1][n]
        }

        message(t, n, a, i) {
            return n === void 0 ? i.emitDefaultValues ? null : void 0 : t.internalJsonWrite(n, i)
        }

        scalar(t, n, a, i, e) {
            if (n === void 0) {
                N(i);
                return
            }
            let c = e || i;
            switch (t) {
                case k.INT32:
                case k.SFIXED32:
                case k.SINT32:
                    return n === 0 ? c ? 0 : void 0 : (ht(n), n);
                case k.FIXED32:
                case k.UINT32:
                    return n === 0 ? c ? 0 : void 0 : (kt(n), n);
                case k.FLOAT:
                    Bt(n);
                case k.DOUBLE:
                    return n === 0 ? c ? 0 : void 0 : (N(typeof n == "number"), Number.isNaN(n) ? "NaN" : n === Number.POSITIVE_INFINITY ? "Infinity" : n === Number.NEGATIVE_INFINITY ? "-Infinity" : n);
                case k.STRING:
                    return n === "" ? c ? "" : void 0 : (N(typeof n == "string"), n);
                case k.BOOL:
                    return n === !1 ? c ? !1 : void 0 : (N(typeof n == "boolean"), n);
                case k.UINT64:
                case k.FIXED64:
                    N(typeof n == "number" || typeof n == "string" || typeof n == "bigint");
                    let l = W.from(n);
                    return l.isZero() && !c ? void 0 : l.toString();
                case k.INT64:
                case k.SFIXED64:
                case k.SINT64:
                    N(typeof n == "number" || typeof n == "string" || typeof n == "bigint");
                    let f = R.from(n);
                    return f.isZero() && !c ? void 0 : f.toString();
                case k.BYTES:
                    return N(n instanceof Uint8Array), n.byteLength ? Jl(n) : c ? "" : void 0
            }
        }
    };

    function jt(o, t = $.STRING) {
        switch (o) {
            case k.BOOL:
                return !1;
            case k.UINT64:
            case k.FIXED64:
                return Y(W.ZERO, t);
            case k.INT64:
            case k.SFIXED64:
            case k.SINT64:
                return Y(R.ZERO, t);
            case k.DOUBLE:
            case k.FLOAT:
                return 0;
            case k.BYTES:
                return new Uint8Array(0);
            case k.STRING:
                return "";
            default:
                return 0
        }
    }

    var nn = class {
        constructor(t) {
            this.info = t
        }

        prepare() {
            var t;
            if (!this.fieldNoToField) {
                let n = (t = this.info.fields) !== null && t !== void 0 ? t : [];
                this.fieldNoToField = new Map(n.map(a => [a.no, a]))
            }
        }

        read(t, n, a, i) {
            this.prepare();
            let e = i === void 0 ? t.len : t.pos + i;
            for (; t.pos < e;) {
                let [c, l] = t.tag(), f = this.fieldNoToField.get(c);
                if (!f) {
                    let m = a.readUnknownField;
                    if (m == "throw") throw new Error(`Unknown field ${c} (wire type ${l}) for ${this.info.typeName}`);
                    let b = t.skip(l);
                    m !== !1 && (m === !0 ? h.onRead : m)(this.info.typeName, n, c, l, b);
                    continue
                }
                let r = n, d = f.repeat, g = f.localName;
                switch (f.oneof && (r = r[f.oneof], r.oneofKind !== g && (r = n[f.oneof] = {oneofKind: g})), f.kind) {
                    case"scalar":
                    case"enum":
                        let m = f.kind == "enum" ? k.INT32 : f.T, b = f.kind == "scalar" ? f.L : void 0;
                        if (d) {
                            let B = r[g];
                            if (l == s.LengthDelimited && m != k.STRING && m != k.BYTES) {
                                let w = t.uint32() + t.pos;
                                for (; t.pos < w;) B.push(this.scalar(t, m, b))
                            } else B.push(this.scalar(t, m, b))
                        } else r[g] = this.scalar(t, m, b);
                        break;
                    case"message":
                        if (d) {
                            let B = r[g], w = f.T().internalBinaryRead(t, t.uint32(), a);
                            B.push(w)
                        } else r[g] = f.T().internalBinaryRead(t, t.uint32(), a, r[g]);
                        break;
                    case"map":
                        let [T, V] = this.mapEntry(f, t, a);
                        r[g][T] = V;
                        break
                }
            }
        }

        mapEntry(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        t.K == k.BOOL ? c = n.bool().toString() : c = this.scalar(n, t.K, $.STRING);
                        break;
                    case 2:
                        switch (t.V.kind) {
                            case"scalar":
                                l = this.scalar(n, t.V.T, t.V.L);
                                break;
                            case"enum":
                                l = n.int32();
                                break;
                            case"message":
                                l = t.V.T().internalBinaryRead(n, n.uint32(), a);
                                break
                        }
                        break;
                    default:
                        throw new Error(`Unknown field ${f} (wire type ${r}) in map entry for ${this.info.typeName}#${t.name}`)
                }
            }
            if (c === void 0) {
                let f = jt(t.K);
                c = t.K == k.BOOL ? f.toString() : f
            }
            if (l === void 0) switch (t.V.kind) {
                case"scalar":
                    l = jt(t.V.T, t.V.L);
                    break;
                case"enum":
                    l = 0;
                    break;
                case"message":
                    l = t.V.T().create();
                    break
            }
            return [c, l]
        }

        scalar(t, n, a) {
            switch (n) {
                case k.INT32:
                    return t.int32();
                case k.STRING:
                    return t.string();
                case k.BOOL:
                    return t.bool();
                case k.DOUBLE:
                    return t.double();
                case k.FLOAT:
                    return t.float();
                case k.INT64:
                    return Y(t.int64(), a);
                case k.UINT64:
                    return Y(t.uint64(), a);
                case k.FIXED64:
                    return Y(t.fixed64(), a);
                case k.FIXED32:
                    return t.fixed32();
                case k.BYTES:
                    return t.bytes();
                case k.UINT32:
                    return t.uint32();
                case k.SFIXED32:
                    return t.sfixed32();
                case k.SFIXED64:
                    return Y(t.sfixed64(), a);
                case k.SINT32:
                    return t.sint32();
                case k.SINT64:
                    return Y(t.sint64(), a)
            }
        }
    };
    var en = class {
        constructor(t) {
            this.info = t
        }

        prepare() {
            if (!this.fields) {
                let t = this.info.fields ? this.info.fields.concat() : [];
                this.fields = t.sort((n, a) => n.no - a.no)
            }
        }

        write(t, n, a) {
            this.prepare();
            for (let e of this.fields) {
                let c, l, f = e.repeat, r = e.localName;
                if (e.oneof) {
                    let d = t[e.oneof];
                    if (d.oneofKind !== r) continue;
                    c = d[r], l = !0
                } else c = t[r], l = !1;
                switch (e.kind) {
                    case"scalar":
                    case"enum":
                        let d = e.kind == "enum" ? k.INT32 : e.T;
                        if (f) if (N(Array.isArray(c)), f == At.PACKED) this.packed(n, d, e.no, c); else for (let g of c) this.scalar(n, d, e.no, g, !0); else c === void 0 ? N(e.opt) : this.scalar(n, d, e.no, c, l || e.opt);
                        break;
                    case"message":
                        if (f) {
                            N(Array.isArray(c));
                            for (let g of c) this.message(n, a, e.T(), e.no, g)
                        } else this.message(n, a, e.T(), e.no, c);
                        break;
                    case"map":
                        N(typeof c == "object" && c !== null);
                        for (let [g, m] of Object.entries(c)) this.mapEntry(n, a, e, g, m);
                        break
                }
            }
            let i = a.writeUnknownFields;
            i !== !1 && (i === !0 ? h.onWrite : i)(this.info.typeName, t, n)
        }

        mapEntry(t, n, a, i, e) {
            t.tag(a.no, s.LengthDelimited), t.fork();
            let c = i;
            switch (a.K) {
                case k.INT32:
                case k.FIXED32:
                case k.UINT32:
                case k.SFIXED32:
                case k.SINT32:
                    c = Number.parseInt(i);
                    break;
                case k.BOOL:
                    N(i == "true" || i == "false"), c = i == "true";
                    break
            }
            switch (this.scalar(t, a.K, 1, c, !0), a.V.kind) {
                case"scalar":
                    this.scalar(t, a.V.T, 2, e, !0);
                    break;
                case"enum":
                    this.scalar(t, k.INT32, 2, e, !0);
                    break;
                case"message":
                    this.message(t, n, a.V.T(), 2, e);
                    break
            }
            t.join()
        }

        message(t, n, a, i, e) {
            e !== void 0 && (a.internalBinaryWrite(e, t.tag(i, s.LengthDelimited).fork(), n), t.join())
        }

        scalar(t, n, a, i, e) {
            let [c, l, f] = this.scalarInfo(n, i);
            (!f || e) && (t.tag(a, c), t[l](i))
        }

        packed(t, n, a, i) {
            if (!i.length) return;
            N(n !== k.BYTES && n !== k.STRING), t.tag(a, s.LengthDelimited), t.fork();
            let [, e] = this.scalarInfo(n);
            for (let c = 0; c < i.length; c++) t[e](i[c]);
            t.join()
        }

        scalarInfo(t, n) {
            let a = s.Varint, i, e = n === void 0, c = n === 0;
            switch (t) {
                case k.INT32:
                    i = "int32";
                    break;
                case k.STRING:
                    c = e || !n.length, a = s.LengthDelimited, i = "string";
                    break;
                case k.BOOL:
                    c = n === !1, i = "bool";
                    break;
                case k.UINT32:
                    i = "uint32";
                    break;
                case k.DOUBLE:
                    a = s.Bit64, i = "double";
                    break;
                case k.FLOAT:
                    a = s.Bit32, i = "float";
                    break;
                case k.INT64:
                    c = e || R.from(n).isZero(), i = "int64";
                    break;
                case k.UINT64:
                    c = e || W.from(n).isZero(), i = "uint64";
                    break;
                case k.FIXED64:
                    c = e || W.from(n).isZero(), a = s.Bit64, i = "fixed64";
                    break;
                case k.BYTES:
                    c = e || !n.byteLength, a = s.LengthDelimited, i = "bytes";
                    break;
                case k.FIXED32:
                    a = s.Bit32, i = "fixed32";
                    break;
                case k.SFIXED32:
                    a = s.Bit32, i = "sfixed32";
                    break;
                case k.SFIXED64:
                    c = e || R.from(n).isZero(), a = s.Bit64, i = "sfixed64";
                    break;
                case k.SINT32:
                    i = "sint32";
                    break;
                case k.SINT64:
                    c = e || R.from(n).isZero(), i = "sint64";
                    break
            }
            return [a, i, e || c]
        }
    };

    function fs(o) {
        let t = o.messagePrototype ? Object.create(o.messagePrototype) : Object.defineProperty({}, Xt, {value: o});
        for (let n of o.fields) {
            let a = n.localName;
            if (!n.opt) if (n.oneof) t[n.oneof] = {oneofKind: void 0}; else if (n.repeat) t[a] = []; else switch (n.kind) {
                case"scalar":
                    t[a] = jt(n.T, n.L);
                    break;
                case"enum":
                    t[a] = 0;
                    break;
                case"map":
                    t[a] = {};
                    break
            }
        }
        return t
    }

    function u(o, t, n) {
        let a, i = n, e;
        for (let c of o.fields) {
            let l = c.localName;
            if (c.oneof) {
                let f = i[c.oneof];
                if (f?.oneofKind == null) continue;
                if (a = f[l], e = t[c.oneof], e.oneofKind = f.oneofKind, a == null) {
                    delete e[l];
                    continue
                }
            } else if (a = i[l], e = t, a == null) continue;
            switch (c.repeat && (e[l].length = a.length), c.kind) {
                case"scalar":
                case"enum":
                    if (c.repeat) for (let r = 0; r < a.length; r++) e[l][r] = a[r]; else e[l] = a;
                    break;
                case"message":
                    let f = c.T();
                    if (c.repeat) for (let r = 0; r < a.length; r++) e[l][r] = f.create(a[r]); else e[l] === void 0 ? e[l] = f.create(a) : f.mergePartial(e[l], a);
                    break;
                case"map":
                    switch (c.V.kind) {
                        case"scalar":
                        case"enum":
                            Object.assign(e[l], a);
                            break;
                        case"message":
                            let r = c.V.T();
                            for (let d of Object.keys(a)) e[l][d] = r.create(a[d]);
                            break
                    }
                    break
            }
        }
    }

    function hs(o, t, n) {
        if (t === n) return !0;
        if (!t || !n) return !1;
        for (let a of o.fields) {
            let i = a.localName, e = a.oneof ? t[a.oneof][i] : t[i], c = a.oneof ? n[a.oneof][i] : n[i];
            switch (a.kind) {
                case"enum":
                case"scalar":
                    let l = a.kind == "enum" ? k.INT32 : a.T;
                    if (!(a.repeat ? cs(l, e, c) : us(l, e, c))) return !1;
                    break;
                case"map":
                    if (!(a.V.kind == "message" ? ds(a.V.T(), an(e), an(c)) : cs(a.V.kind == "enum" ? k.INT32 : a.V.T, an(e), an(c)))) return !1;
                    break;
                case"message":
                    let f = a.T();
                    if (!(a.repeat ? ds(f, e, c) : f.equals(e, c))) return !1;
                    break
            }
        }
        return !0
    }

    var an = Object.values;

    function us(o, t, n) {
        if (t === n) return !0;
        if (o !== k.BYTES) return !1;
        let a = t, i = n;
        if (a.length !== i.length) return !1;
        for (let e = 0; e < a.length; e++) if (a[e] != i[e]) return !1;
        return !0
    }

    function cs(o, t, n) {
        if (t.length !== n.length) return !1;
        for (let a = 0; a < t.length; a++) if (!us(o, t[a], n[a])) return !1;
        return !0
    }

    function ds(o, t, n) {
        if (t.length !== n.length) return !1;
        for (let a = 0; a < t.length; a++) if (!o.equals(t[a], n[a])) return !1;
        return !0
    }

    var Tf = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})), p = class {
        constructor(t, n, a) {
            this.defaultCheckDepth = 16, this.typeName = t, this.fields = n.map(ls), this.options = a ?? {}, this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, Tf), {[Xt]: {value: this}})), this.refTypeCheck = new Zt(this), this.refJsonReader = new Qt(this), this.refJsonWriter = new tn(this), this.refBinReader = new nn(this), this.refBinWriter = new en(this)
        }

        create(t) {
            let n = fs(this);
            return t !== void 0 && u(this, n, t), n
        }

        clone(t) {
            let n = this.create();
            return u(this, n, t), n
        }

        equals(t, n) {
            return hs(this, t, n)
        }

        is(t, n = this.defaultCheckDepth) {
            return this.refTypeCheck.is(t, n, !1)
        }

        isAssignable(t, n = this.defaultCheckDepth) {
            return this.refTypeCheck.is(t, n, !0)
        }

        mergePartial(t, n) {
            u(this, t, n)
        }

        fromBinary(t, n) {
            let a = es(n);
            return this.internalBinaryRead(a.readerFactory(t), t.byteLength, a)
        }

        fromJson(t, n) {
            return this.internalJsonRead(t, Bn(n))
        }

        fromJsonString(t, n) {
            let a = JSON.parse(t);
            return this.fromJson(a, n)
        }

        toJson(t, n) {
            return this.internalJsonWrite(t, Ct(n))
        }

        toJsonString(t, n) {
            var a;
            let i = this.toJson(t, n);
            return JSON.stringify(i, null, (a = n?.prettySpaces) !== null && a !== void 0 ? a : 0)
        }

        toBinary(t, n) {
            let a = as(n);
            return this.internalBinaryWrite(t, a.writerFactory(), a).finish()
        }

        internalJsonRead(t, n, a) {
            if (t !== null && typeof t == "object" && !Array.isArray(t)) {
                let i = a ?? this.create();
                return this.refJsonReader.read(t, i, n), i
            }
            throw new Error(`Unable to parse message ${this.typeName} from JSON ${pt(t)}.`)
        }

        internalJsonWrite(t, n) {
            return this.refJsonWriter.write(t, n)
        }

        internalBinaryWrite(t, n, a) {
            return this.refBinWriter.write(t, n, a), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create();
            return this.refBinReader.read(t, e, a, n), e
        }
    };
    var xn = class extends p {
        constructor() {
            super("ModeStatus", [{no: 1, name: "modes", kind: "message", repeat: 1, T: () => vn}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.modes = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.modes.push(vn.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.modes.length; e++) vn.internalBinaryWrite(t.modes[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, _n = new xn, Rn = class extends p {
        constructor() {
            super("Mode", [{no: 1, name: "id", kind: "scalar", T: 5}, {
                no: 2,
                name: "name",
                kind: "scalar",
                T: 9
            }, {no: 4, name: "f4", kind: "scalar", T: 5}, {no: 5, name: "f5", kind: "message", T: () => Dn}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.id = 0, n.name = "", n.f4 = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.id = t.int32();
                        break;
                    case 2:
                        e.name = t.string();
                        break;
                    case 4:
                        e.f4 = t.int32();
                        break;
                    case 5:
                        e.f5 = Dn.internalBinaryRead(t, t.uint32(), a, e.f5);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.id !== 0 && n.tag(1, s.Varint).int32(t.id), t.name !== "" && n.tag(2, s.LengthDelimited).string(t.name), t.f4 !== 0 && n.tag(4, s.Varint).int32(t.f4), t.f5 && Dn.internalBinaryWrite(t.f5, n.tag(5, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, vn = new Rn, In = class extends p {
        constructor() {
            super("F5", [{no: 1, name: "f1", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.f1 = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.f1 = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.f1 !== 0 && n.tag(1, s.Varint).int32(t.f1);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Dn = new In;
    var Un = class extends p {
        constructor() {
            super("DefaultWordsReply", [{no: 1, name: "trackid", kind: "scalar", T: 9}, {
                no: 2,
                name: "param",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "show", kind: "scalar", T: 9}, {no: 4, name: "word", kind: "scalar", T: 9}, {
                no: 5,
                name: "show_front",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 6, name: "exp_str", kind: "scalar", T: 9}, {no: 7, name: "goto", kind: "scalar", T: 9}, {
                no: 8,
                name: "value",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "uri", kind: "scalar", T: 9}, {
                no: 10,
                name: "enable_refresh",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 11, name: "refresh_interval_milli", kind: "scalar", T: 3, L: 0}, {
                no: 12,
                name: "enable_animation",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 13, name: "animation_time_milli", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.trackid = "", n.param = "", n.show = "", n.word = "", n.showFront = 0n, n.expStr = "", n.goto = "", n.value = "", n.uri = "", n.enableRefresh = 0n, n.refreshIntervalMilli = 0n, n.enableAnimation = 0n, n.animationTimeMilli = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.trackid = t.string();
                        break;
                    case 2:
                        e.param = t.string();
                        break;
                    case 3:
                        e.show = t.string();
                        break;
                    case 4:
                        e.word = t.string();
                        break;
                    case 5:
                        e.showFront = t.int64().toBigInt();
                        break;
                    case 6:
                        e.expStr = t.string();
                        break;
                    case 7:
                        e.goto = t.string();
                        break;
                    case 8:
                        e.value = t.string();
                        break;
                    case 9:
                        e.uri = t.string();
                        break;
                    case 10:
                        e.enableRefresh = t.int64().toBigInt();
                        break;
                    case 11:
                        e.refreshIntervalMilli = t.int64().toBigInt();
                        break;
                    case 12:
                        e.enableAnimation = t.int64().toBigInt();
                        break;
                    case 13:
                        e.animationTimeMilli = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.trackid !== "" && n.tag(1, s.LengthDelimited).string(t.trackid), t.param !== "" && n.tag(2, s.LengthDelimited).string(t.param), t.show !== "" && n.tag(3, s.LengthDelimited).string(t.show), t.word !== "" && n.tag(4, s.LengthDelimited).string(t.word), t.showFront !== 0n && n.tag(5, s.Varint).int64(t.showFront), t.expStr !== "" && n.tag(6, s.LengthDelimited).string(t.expStr), t.goto !== "" && n.tag(7, s.LengthDelimited).string(t.goto), t.value !== "" && n.tag(8, s.LengthDelimited).string(t.value), t.uri !== "" && n.tag(9, s.LengthDelimited).string(t.uri), t.enableRefresh !== 0n && n.tag(10, s.Varint).int64(t.enableRefresh), t.refreshIntervalMilli !== 0n && n.tag(11, s.Varint).int64(t.refreshIntervalMilli), t.enableAnimation !== 0n && n.tag(12, s.Varint).int64(t.enableAnimation), t.animationTimeMilli !== 0n && n.tag(13, s.Varint).int64(t.animationTimeMilli);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, En = new Un;
    var Pn = class extends p {
        constructor() {
            super("PopularReply", [{no: 1, name: "items", kind: "message", repeat: 1, T: () => Wn}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.items = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.items.push(Wn.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.items.length; e++) Wn.internalBinaryWrite(t.items[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, jn = new Pn, Fn = class extends p {
        constructor() {
            super("Card", [{no: 10, name: "rcmd_one_item", kind: "message", oneof: "item", T: () => On}, {
                no: 12,
                name: "topic_list",
                kind: "message",
                oneof: "item",
                T: () => Vn
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.item = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 10:
                        e.item = {
                            oneofKind: "rcmdOneItem",
                            rcmdOneItem: On.internalBinaryRead(t, t.uint32(), a, e.item.rcmdOneItem)
                        };
                        break;
                    case 12:
                        e.item = {
                            oneofKind: "topicList",
                            topicList: Vn.internalBinaryRead(t, t.uint32(), a, e.item.topicList)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.item.oneofKind === "rcmdOneItem" && On.internalBinaryWrite(t.item.rcmdOneItem, n.tag(10, s.LengthDelimited).fork(), a).join(), t.item.oneofKind === "topicList" && Vn.internalBinaryWrite(t.item.topicList, n.tag(12, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Wn = new Fn, Cn = class extends p {
        constructor() {
            super("RcmdOneItem", [])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            return i ?? this.create()
        }

        internalBinaryWrite(t, n, a) {
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, On = new Cn, An = class extends p {
        constructor() {
            super("PopularTopicList", [])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            return i ?? this.create()
        }

        internalBinaryWrite(t, n, a) {
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Vn = new An;
    var gt;
    (function (o) {
        o[o.dyn_none = 0] = "dyn_none", o[o.forward = 1] = "forward", o[o.av = 2] = "av", o[o.pgc = 3] = "pgc", o[o.courses = 4] = "courses", o[o.fold = 5] = "fold", o[o.word = 6] = "word", o[o.draw = 7] = "draw", o[o.article = 8] = "article", o[o.music = 9] = "music", o[o.common_square = 10] = "common_square", o[o.common_vertical = 11] = "common_vertical", o[o.live = 12] = "live", o[o.medialist = 13] = "medialist", o[o.courses_season = 14] = "courses_season", o[o.ad = 15] = "ad", o[o.applet = 16] = "applet", o[o.subscription = 17] = "subscription", o[o.live_rcmd = 18] = "live_rcmd", o[o.banner = 19] = "banner", o[o.ugc_season = 20] = "ugc_season", o[o.subscription_new = 21] = "subscription_new", o[o.story = 22] = "story", o[o.topic_rcmd = 23] = "topic_rcmd"
    })(gt || (gt = {}));
    var Gn;
    (function (o) {
        o[o.live_none = 0] = "live_none", o[o.live_live = 1] = "live_live", o[o.live_rotation = 2] = "live_rotation"
    })(Gn || (Gn = {}));
    var zn = class extends p {
        constructor() {
            super("DynamicItem", [{no: 1, name: "card_type", kind: "enum", T: () => ["DynamicType", gt]}, {
                no: 2,
                name: "item_type",
                kind: "enum",
                T: () => ["DynamicType", gt]
            }, {no: 5, name: "has_fold", kind: "scalar", T: 5}, {no: 6, name: "server_info", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.cardType = 0, n.itemType = 0, n.hasFold = 0, n.serverInfo = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.cardType = t.int32();
                        break;
                    case 2:
                        e.itemType = t.int32();
                        break;
                    case 5:
                        e.hasFold = t.int32();
                        break;
                    case 6:
                        e.serverInfo = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.cardType !== 0 && n.tag(1, s.Varint).int32(t.cardType), t.itemType !== 0 && n.tag(2, s.Varint).int32(t.itemType), t.hasFold !== 0 && n.tag(5, s.Varint).int32(t.hasFold), t.serverInfo !== "" && n.tag(6, s.LengthDelimited).string(t.serverInfo);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Sn = new zn, Yn = class extends p {
        constructor() {
            super("DynamicList", [{no: 1, name: "list", kind: "message", repeat: 1, T: () => Sn}, {
                no: 2,
                name: "update_num",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "history_offset", kind: "scalar", T: 9}, {
                no: 4,
                name: "update_baseline",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "has_more", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.list = [], n.updateNum = 0n, n.historyOffset = "", n.updateBaseline = "", n.hasMore = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.list.push(Sn.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 2:
                        e.updateNum = t.int64().toBigInt();
                        break;
                    case 3:
                        e.historyOffset = t.string();
                        break;
                    case 4:
                        e.updateBaseline = t.string();
                        break;
                    case 5:
                        e.hasMore = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.list.length; e++) Sn.internalBinaryWrite(t.list[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            t.updateNum !== 0n && n.tag(2, s.Varint).int64(t.updateNum), t.historyOffset !== "" && n.tag(3, s.LengthDelimited).string(t.historyOffset), t.updateBaseline !== "" && n.tag(4, s.LengthDelimited).string(t.updateBaseline), t.hasMore !== !1 && n.tag(5, s.Varint).bool(t.hasMore);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, $n = new Yn, qn = class extends p {
        constructor() {
            super("TopicList", [{no: 1, name: "title", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Mn = new qn, Hn = class extends p {
        constructor() {
            super("UpListItem", [{no: 3, name: "name", kind: "scalar", T: 9}, {
                no: 4,
                name: "uid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 5, name: "pos", kind: "scalar", T: 3, L: 0}, {
                no: 10,
                name: "live_state",
                kind: "enum",
                T: () => ["LiveState", Gn]
            }, {no: 11, name: "separator", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.name = "", n.uid = 0n, n.pos = 0n, n.liveState = 0, n.separator = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 3:
                        e.name = t.string();
                        break;
                    case 4:
                        e.uid = t.int64().toBigInt();
                        break;
                    case 5:
                        e.pos = t.int64().toBigInt();
                        break;
                    case 10:
                        e.liveState = t.int32();
                        break;
                    case 11:
                        e.separator = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.name !== "" && n.tag(3, s.LengthDelimited).string(t.name), t.uid !== 0n && n.tag(4, s.Varint).int64(t.uid), t.pos !== 0n && n.tag(5, s.Varint).int64(t.pos), t.liveState !== 0 && n.tag(10, s.Varint).int32(t.liveState), t.separator !== !1 && n.tag(11, s.Varint).bool(t.separator);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Lt = new Hn, Jn = class extends p {
        constructor() {
            super("CardVideoUpList", [{no: 2, name: "list", kind: "message", repeat: 1, T: () => Lt}, {
                no: 4,
                name: "show_live_num",
                kind: "scalar",
                T: 5
            }, {no: 10, name: "list_second", kind: "message", repeat: 1, T: () => Lt}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.list = [], n.showLiveNum = 0, n.listSecond = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 2:
                        e.list.push(Lt.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 4:
                        e.showLiveNum = t.int32();
                        break;
                    case 10:
                        e.listSecond.push(Lt.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.list.length; e++) Lt.internalBinaryWrite(t.list[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            t.showLiveNum !== 0 && n.tag(4, s.Varint).int32(t.showLiveNum);
            for (let e = 0; e < t.listSecond.length; e++) Lt.internalBinaryWrite(t.listSecond[e], n.tag(10, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Kn = new Jn, Xn = class extends p {
        constructor() {
            super("DynAllReply", [{no: 1, name: "dynamic_list", kind: "message", T: () => $n}, {
                no: 2,
                name: "up_list",
                kind: "message",
                T: () => Kn
            }, {no: 3, name: "topic_list", kind: "message", T: () => Mn}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.dynamicList = $n.internalBinaryRead(t, t.uint32(), a, e.dynamicList);
                        break;
                    case 2:
                        e.upList = Kn.internalBinaryRead(t, t.uint32(), a, e.upList);
                        break;
                    case 3:
                        e.topicList = Mn.internalBinaryRead(t, t.uint32(), a, e.topicList);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.dynamicList && $n.internalBinaryWrite(t.dynamicList, n.tag(1, s.LengthDelimited).fork(), a).join(), t.upList && Kn.internalBinaryWrite(t.upList, n.tag(2, s.LengthDelimited).fork(), a).join(), t.topicList && Mn.internalBinaryWrite(t.topicList, n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Zn = new Xn;
    var Qn = class extends p {
        constructor() {
            super("google.protobuf.Any", [{no: 1, name: "type_url", kind: "scalar", T: 9}, {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 12
            }])
        }

        pack(t, n) {
            return {typeUrl: this.typeNameToUrl(n.typeName), value: n.toBinary(t)}
        }

        unpack(t, n, a) {
            if (!this.contains(t, n)) throw new Error("Cannot unpack google.protobuf.Any with typeUrl '" + t.typeUrl + "' as " + n.typeName + ".");
            return n.fromBinary(t.value, a)
        }

        contains(t, n) {
            if (!t.typeUrl.length) return !1;
            let a = typeof n == "string" ? n : n.typeName, i = this.typeUrlToName(t.typeUrl);
            return a === i
        }

        internalJsonWrite(t, n) {
            var a;
            if (t.typeUrl === "") return {};
            let i = this.typeUrlToName(t.typeUrl), e = Ct(n),
                c = (a = e.typeRegistry) === null || a === void 0 ? void 0 : a.find(r => r.typeName === i);
            if (!c) throw new globalThis.Error("Unable to convert google.protobuf.Any with typeUrl '" + t.typeUrl + "' to JSON. The specified type " + i + " is not available in the type registry.");
            let l = c.fromBinary(t.value, {readUnknownField: !1}), f = c.internalJsonWrite(l, e);
            return (i.startsWith("google.protobuf.") || !Nt(f)) && (f = {value: f}), f["@type"] = t.typeUrl, f
        }

        internalJsonRead(t, n, a) {
            var i;
            if (!Nt(t)) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON " + pt(t) + ".");
            if (typeof t["@type"] != "string" || t["@type"] == "") return this.create();
            let e = this.typeUrlToName(t["@type"]),
                c = (i = n?.typeRegistry) === null || i === void 0 ? void 0 : i.find(f => f.typeName == e);
            if (!c) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON. The specified type " + e + " is not available in the type registry.");
            let l;
            if (e.startsWith("google.protobuf.") && t.hasOwnProperty("value")) l = c.fromJson(t.value, n); else {
                let f = Object.assign({}, t);
                delete f["@type"], l = c.fromJson(f, n)
            }
            return a === void 0 && (a = this.create()), a.typeUrl = t["@type"], a.value = c.toBinary(l), a
        }

        typeNameToUrl(t) {
            if (!t.length) throw new Error("invalid type name: " + t);
            return "type.googleapis.com/" + t
        }

        typeUrlToName(t) {
            if (!t.length) throw new Error("invalid type url: " + t);
            let n = t.lastIndexOf("/"), a = n > 0 ? t.substring(n + 1) : t;
            if (!a.length) throw new Error("invalid type url: " + t);
            return a
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.typeUrl = "", n.value = new Uint8Array(0), t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.typeUrl = t.string();
                        break;
                    case 2:
                        e.value = t.bytes();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.typeUrl !== "" && n.tag(1, s.LengthDelimited).string(t.typeUrl), t.value.length && n.tag(2, s.LengthDelimited).bytes(t.value);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, _ = new Qn;
    var le = class extends p {
        constructor() {
            super("CM", [{no: 1, name: "source_content", kind: "message", T: () => _}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.sourceContent = _.internalBinaryRead(t, t.uint32(), a, e.sourceContent);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.sourceContent && _.internalBinaryWrite(t.sourceContent, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, H = new le, se = class extends p {
        constructor() {
            super("CMConfig", [{no: 1, name: "ads_control", kind: "message", T: () => _}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.adsControl = _.internalBinaryRead(t, t.uint32(), a, e.adsControl);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.adsControl && _.internalBinaryWrite(t.adsControl, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, te = new se, fe = class extends p {
        constructor() {
            super("CmIpad", [{no: 1, name: "cm", kind: "message", T: () => H}, {
                no: 4,
                name: "duration",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 5, name: "aid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.duration = 0n, n.aid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.cm = H.internalBinaryRead(t, t.uint32(), a, e.cm);
                        break;
                    case 4:
                        e.duration = t.int64().toBigInt();
                        break;
                    case 5:
                        e.aid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.cm && H.internalBinaryWrite(t.cm, n.tag(1, s.LengthDelimited).fork(), a).join(), t.duration !== 0n && n.tag(4, s.Varint).int64(t.duration), t.aid !== 0n && n.tag(5, s.Varint).int64(t.aid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ne = new fe, ce = class extends p {
        constructor() {
            super("Relate", [{no: 28, name: "cm", kind: "message", T: () => H}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 28:
                        e.cm = H.internalBinaryRead(t, t.uint32(), a, e.cm);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.cm && H.internalBinaryWrite(t.cm, n.tag(28, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ee = new ce, de = class extends p {
        constructor() {
            super("ViewReply", [{no: 4, name: "req_user", kind: "message", T: () => ie}, {
                no: 10,
                name: "relates",
                kind: "message",
                repeat: 1,
                T: () => ee
            }, {no: 23, name: "label", kind: "message", T: () => oe}, {
                no: 30,
                name: "cms",
                kind: "message",
                repeat: 1,
                T: () => H
            }, {no: 31, name: "cm_config", kind: "message", T: () => te}, {
                no: 41,
                name: "cm_ipad",
                kind: "message",
                T: () => ne
            }, {no: 50, name: "special_cell_new", kind: "message", repeat: 1, T: () => re}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.relates = [], n.cms = [], n.specialCellNew = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 4:
                        e.reqUser = ie.internalBinaryRead(t, t.uint32(), a, e.reqUser);
                        break;
                    case 10:
                        e.relates.push(ee.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 23:
                        e.label = oe.internalBinaryRead(t, t.uint32(), a, e.label);
                        break;
                    case 30:
                        e.cms.push(H.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 31:
                        e.cmConfig = te.internalBinaryRead(t, t.uint32(), a, e.cmConfig);
                        break;
                    case 41:
                        e.cmIpad = ne.internalBinaryRead(t, t.uint32(), a, e.cmIpad);
                        break;
                    case 50:
                        e.specialCellNew.push(re.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.reqUser && ie.internalBinaryWrite(t.reqUser, n.tag(4, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.relates.length; e++) ee.internalBinaryWrite(t.relates[e], n.tag(10, s.LengthDelimited).fork(), a).join();
            t.label && oe.internalBinaryWrite(t.label, n.tag(23, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.cms.length; e++) H.internalBinaryWrite(t.cms[e], n.tag(30, s.LengthDelimited).fork(), a).join();
            t.cmConfig && te.internalBinaryWrite(t.cmConfig, n.tag(31, s.LengthDelimited).fork(), a).join(), t.cmIpad && ne.internalBinaryWrite(t.cmIpad, n.tag(41, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.specialCellNew.length; e++) re.internalBinaryWrite(t.specialCellNew[e], n.tag(50, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ge = new de, he = class extends p {
        constructor() {
            super("ReqUser", [{no: 1, name: "attention", kind: "scalar", T: 5}, {
                no: 2,
                name: "guest_attention",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "favorite", kind: "scalar", T: 5}, {no: 4, name: "like", kind: "scalar", T: 5}, {
                no: 5,
                name: "dislike",
                kind: "scalar",
                T: 5
            }, {no: 6, name: "coin", kind: "scalar", T: 5}, {
                no: 7,
                name: "attention_level",
                kind: "scalar",
                T: 5
            }, {no: 8, name: "fav_season", kind: "scalar", T: 5}, {
                no: 9,
                name: "elec_plus_btn",
                kind: "message",
                T: () => ae
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.attention = 0, n.guestAttention = 0, n.favorite = 0, n.like = 0, n.dislike = 0, n.coin = 0, n.attentionLevel = 0, n.favSeason = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.attention = t.int32();
                        break;
                    case 2:
                        e.guestAttention = t.int32();
                        break;
                    case 3:
                        e.favorite = t.int32();
                        break;
                    case 4:
                        e.like = t.int32();
                        break;
                    case 5:
                        e.dislike = t.int32();
                        break;
                    case 6:
                        e.coin = t.int32();
                        break;
                    case 7:
                        e.attentionLevel = t.int32();
                        break;
                    case 8:
                        e.favSeason = t.int32();
                        break;
                    case 9:
                        e.elecPlusBtn = ae.internalBinaryRead(t, t.uint32(), a, e.elecPlusBtn);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.attention !== 0 && n.tag(1, s.Varint).int32(t.attention), t.guestAttention !== 0 && n.tag(2, s.Varint).int32(t.guestAttention), t.favorite !== 0 && n.tag(3, s.Varint).int32(t.favorite), t.like !== 0 && n.tag(4, s.Varint).int32(t.like), t.dislike !== 0 && n.tag(5, s.Varint).int32(t.dislike), t.coin !== 0 && n.tag(6, s.Varint).int32(t.coin), t.attentionLevel !== 0 && n.tag(7, s.Varint).int32(t.attentionLevel), t.favSeason !== 0 && n.tag(8, s.Varint).int32(t.favSeason), t.elecPlusBtn && ae.internalBinaryWrite(t.elecPlusBtn, n.tag(9, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ie = new he, ue = class extends p {
        constructor() {
            super("Button", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "icon", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.uri = "", n.icon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.uri = t.string();
                        break;
                    case 3:
                        e.icon = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title), t.uri !== "" && n.tag(2, s.LengthDelimited).string(t.uri), t.icon !== "" && n.tag(3, s.LengthDelimited).string(t.icon);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ae = new ue, pe = class extends p {
        constructor() {
            super("Label", [{no: 1, name: "type", kind: "scalar", T: 5}, {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "icon", kind: "scalar", T: 9}, {no: 4, name: "icon_night", kind: "scalar", T: 9}, {
                no: 5,
                name: "icon_width",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 6, name: "icon_height", kind: "scalar", T: 3, L: 0}, {
                no: 7,
                name: "lottie",
                kind: "scalar",
                T: 9
            }, {no: 8, name: "lottie_night", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, n.uri = "", n.icon = "", n.iconNight = "", n.iconWidth = 0n, n.iconHeight = 0n, n.lottie = "", n.lottieNight = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 2:
                        e.uri = t.string();
                        break;
                    case 3:
                        e.icon = t.string();
                        break;
                    case 4:
                        e.iconNight = t.string();
                        break;
                    case 5:
                        e.iconWidth = t.int64().toBigInt();
                        break;
                    case 6:
                        e.iconHeight = t.int64().toBigInt();
                        break;
                    case 7:
                        e.lottie = t.string();
                        break;
                    case 8:
                        e.lottieNight = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type), t.uri !== "" && n.tag(2, s.LengthDelimited).string(t.uri), t.icon !== "" && n.tag(3, s.LengthDelimited).string(t.icon), t.iconNight !== "" && n.tag(4, s.LengthDelimited).string(t.iconNight), t.iconWidth !== 0n && n.tag(5, s.Varint).int64(t.iconWidth), t.iconHeight !== 0n && n.tag(6, s.Varint).int64(t.iconHeight), t.lottie !== "" && n.tag(7, s.LengthDelimited).string(t.lottie), t.lottieNight !== "" && n.tag(8, s.LengthDelimited).string(t.lottieNight);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, oe = new pe, ke = class extends p {
        constructor() {
            super("SpecialCell", [])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            return i ?? this.create()
        }

        internalBinaryWrite(t, n, a) {
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, re = new ke;
    var me = class extends p {
        constructor() {
            super("CommandDm", [{no: 1, name: "id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "oid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "mid", kind: "scalar", T: 3, L: 0}, {no: 4, name: "command", kind: "scalar", T: 9}, {
                no: 5,
                name: "content",
                kind: "scalar",
                T: 9
            }, {no: 6, name: "progress", kind: "scalar", T: 5}, {no: 7, name: "ctime", kind: "scalar", T: 9}, {
                no: 8,
                name: "mtime",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "extra", kind: "scalar", T: 9}, {no: 10, name: "idStr", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.id = 0n, n.oid = 0n, n.mid = 0n, n.command = "", n.content = "", n.progress = 0, n.ctime = "", n.mtime = "", n.extra = "", n.idStr = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.id = t.int64().toBigInt();
                        break;
                    case 2:
                        e.oid = t.int64().toBigInt();
                        break;
                    case 3:
                        e.mid = t.int64().toBigInt();
                        break;
                    case 4:
                        e.command = t.string();
                        break;
                    case 5:
                        e.content = t.string();
                        break;
                    case 6:
                        e.progress = t.int32();
                        break;
                    case 7:
                        e.ctime = t.string();
                        break;
                    case 8:
                        e.mtime = t.string();
                        break;
                    case 9:
                        e.extra = t.string();
                        break;
                    case 10:
                        e.idStr = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.id !== 0n && n.tag(1, s.Varint).int64(t.id), t.oid !== 0n && n.tag(2, s.Varint).int64(t.oid), t.mid !== 0n && n.tag(3, s.Varint).int64(t.mid), t.command !== "" && n.tag(4, s.LengthDelimited).string(t.command), t.content !== "" && n.tag(5, s.LengthDelimited).string(t.content), t.progress !== 0 && n.tag(6, s.Varint).int32(t.progress), t.ctime !== "" && n.tag(7, s.LengthDelimited).string(t.ctime), t.mtime !== "" && n.tag(8, s.LengthDelimited).string(t.mtime), t.extra !== "" && n.tag(9, s.LengthDelimited).string(t.extra), t.idStr !== "" && n.tag(10, s.LengthDelimited).string(t.idStr);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, bt = new me, ye = class extends p {
        constructor() {
            super("DmView", [{no: 1, name: "commandDms", kind: "message", repeat: 1, T: () => bt}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.commandDms = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.commandDms.push(bt.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.commandDms.length; e++) bt.internalBinaryWrite(t.commandDms[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, be = new ye, we = class extends p {
        constructor() {
            super("DmViewReply", [{no: 18, name: "activity_meta", kind: "scalar", repeat: 2, T: 9}, {
                no: 22,
                name: "dmView",
                kind: "message",
                T: () => be
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.activityMeta = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 18:
                        e.activityMeta.push(t.string());
                        break;
                    case 22:
                        e.dmView = be.internalBinaryRead(t, t.uint32(), a, e.dmView);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.activityMeta.length; e++) n.tag(18, s.LengthDelimited).string(t.activityMeta[e]);
            t.dmView && be.internalBinaryWrite(t.dmView, n.tag(22, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Te = new we;
    var Be = class extends p {
        constructor() {
            super("ViewProgress", [{no: 1, name: "dm", kind: "message", T: () => Ne}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.dm = Ne.internalBinaryRead(t, t.uint32(), a, e.dm);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.dm && Ne.internalBinaryWrite(t.dm, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ve = new Be, Le = class extends p {
        constructor() {
            super("DM", [{no: 2, name: "commandDms", kind: "message", repeat: 1, T: () => bt}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.commandDms = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 2:
                        e.commandDms.push(bt.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.commandDms.length; e++) bt.internalBinaryWrite(t.commandDms[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ne = new Le;
    var Re = class extends p {
        constructor() {
            super("TFInfoReply", [{no: 1, name: "tips_id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "tf_toast",
                kind: "message",
                T: () => De
            }, {no: 3, name: "tf_panel_customized", kind: "message", T: () => xe}, {
                no: 4,
                name: "user_flag_new",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.tipsId = 0n, n.userFlagNew = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.tipsId = t.int64().toBigInt();
                        break;
                    case 2:
                        e.tfToast = De.internalBinaryRead(t, t.uint32(), a, e.tfToast);
                        break;
                    case 3:
                        e.tfPanelCustomized = xe.internalBinaryRead(t, t.uint32(), a, e.tfPanelCustomized);
                        break;
                    case 4:
                        e.userFlagNew = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.tipsId !== 0n && n.tag(1, s.Varint).int64(t.tipsId), t.tfToast && De.internalBinaryWrite(t.tfToast, n.tag(2, s.LengthDelimited).fork(), a).join(), t.tfPanelCustomized && xe.internalBinaryWrite(t.tfPanelCustomized, n.tag(3, s.LengthDelimited).fork(), a).join(), t.userFlagNew !== !1 && n.tag(4, s.Varint).bool(t.userFlagNew);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ee = new Re, Ie = class extends p {
        constructor() {
            super("TFToast", [{no: 1, name: "btn_text", kind: "scalar", T: 9}, {
                no: 2,
                name: "btn_link",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "title", kind: "scalar", T: 9}, {no: 4, name: "description", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.btnText = "", n.btnLink = "", n.title = "", n.description = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.btnText = t.string();
                        break;
                    case 2:
                        e.btnLink = t.string();
                        break;
                    case 3:
                        e.title = t.string();
                        break;
                    case 4:
                        e.description = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.btnText !== "" && n.tag(1, s.LengthDelimited).string(t.btnText), t.btnLink !== "" && n.tag(2, s.LengthDelimited).string(t.btnLink), t.title !== "" && n.tag(3, s.LengthDelimited).string(t.title), t.description !== "" && n.tag(4, s.LengthDelimited).string(t.description);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, De = new Ie, _e = class extends p {
        constructor() {
            super("TFPanelCustomized", [{no: 1, name: "right_btn_img", kind: "scalar", T: 9}, {
                no: 2,
                name: "right_btn_text",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "right_btn_text_color", kind: "scalar", T: 9}, {
                no: 4,
                name: "right_btn_link",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "main_label", kind: "scalar", T: 9}, {
                no: 6,
                name: "operator",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "sub_panel", kind: "map", K: 9, V: {kind: "message", T: () => on}}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.rightBtnImg = "", n.rightBtnText = "", n.rightBtnTextColor = "", n.rightBtnLink = "", n.mainLabel = "", n.operator = "", n.subPanel = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.rightBtnImg = t.string();
                        break;
                    case 2:
                        e.rightBtnText = t.string();
                        break;
                    case 3:
                        e.rightBtnTextColor = t.string();
                        break;
                    case 4:
                        e.rightBtnLink = t.string();
                        break;
                    case 5:
                        e.mainLabel = t.string();
                        break;
                    case 6:
                        e.operator = t.string();
                        break;
                    case 7:
                        this.binaryReadMap7(e.subPanel, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap7(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = on.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field TFPanelCustomized.sub_panel")
                }
            }
            t[c ?? ""] = l ?? on.create()
        }

        internalBinaryWrite(t, n, a) {
            t.rightBtnImg !== "" && n.tag(1, s.LengthDelimited).string(t.rightBtnImg), t.rightBtnText !== "" && n.tag(2, s.LengthDelimited).string(t.rightBtnText), t.rightBtnTextColor !== "" && n.tag(3, s.LengthDelimited).string(t.rightBtnTextColor), t.rightBtnLink !== "" && n.tag(4, s.LengthDelimited).string(t.rightBtnLink), t.mainLabel !== "" && n.tag(5, s.LengthDelimited).string(t.mainLabel), t.operator !== "" && n.tag(6, s.LengthDelimited).string(t.operator);
            for (let e of globalThis.Object.keys(t.subPanel)) n.tag(7, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e), n.tag(2, s.LengthDelimited).fork(), on.internalBinaryWrite(t.subPanel[e], n, a), n.join().join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, xe = new _e, Ue = class extends p {
        constructor() {
            super("subTFPanel", [{no: 1, name: "right_btn_img", kind: "scalar", T: 9}, {
                no: 2,
                name: "right_btn_text",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "right_btn_text_color", kind: "scalar", T: 9}, {
                no: 4,
                name: "right_btn_link",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "main_label", kind: "scalar", T: 9}, {no: 6, name: "operator", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.rightBtnImg = "", n.rightBtnText = "", n.rightBtnTextColor = "", n.rightBtnLink = "", n.mainLabel = "", n.operator = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.rightBtnImg = t.string();
                        break;
                    case 2:
                        e.rightBtnText = t.string();
                        break;
                    case 3:
                        e.rightBtnTextColor = t.string();
                        break;
                    case 4:
                        e.rightBtnLink = t.string();
                        break;
                    case 5:
                        e.mainLabel = t.string();
                        break;
                    case 6:
                        e.operator = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.rightBtnImg !== "" && n.tag(1, s.LengthDelimited).string(t.rightBtnImg), t.rightBtnText !== "" && n.tag(2, s.LengthDelimited).string(t.rightBtnText), t.rightBtnTextColor !== "" && n.tag(3, s.LengthDelimited).string(t.rightBtnTextColor), t.rightBtnLink !== "" && n.tag(4, s.LengthDelimited).string(t.rightBtnLink), t.mainLabel !== "" && n.tag(5, s.LengthDelimited).string(t.mainLabel), t.operator !== "" && n.tag(6, s.LengthDelimited).string(t.operator);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, on = new Ue;
    var Pe = class extends p {
        constructor() {
            super("PlayViewReply", [{no: 5, name: "play_arc", kind: "message", T: () => We}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 5:
                        e.playArc = We.internalBinaryRead(t, t.uint32(), a, e.playArc);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.playArc && We.internalBinaryWrite(t.playArc, n.tag(5, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, je = new Pe, Fe = class extends p {
        constructor() {
            super("PlayArcConf", [{no: 1, name: "background_play_conf", kind: "message", T: () => Oe}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.backgroundPlayConf = Oe.internalBinaryRead(t, t.uint32(), a, e.backgroundPlayConf);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.backgroundPlayConf && Oe.internalBinaryWrite(t.backgroundPlayConf, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, We = new Fe, Ce = class extends p {
        constructor() {
            super("ArcConf", [{no: 1, name: "is_support", kind: "scalar", T: 8}, {
                no: 2,
                name: "disabled",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "extra_content", kind: "message", T: () => Ve}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.isSupport = !1, n.disabled = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.isSupport = t.bool();
                        break;
                    case 2:
                        e.disabled = t.bool();
                        break;
                    case 3:
                        e.extraContent = Ve.internalBinaryRead(t, t.uint32(), a, e.extraContent);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.isSupport !== !1 && n.tag(1, s.Varint).bool(t.isSupport), t.disabled !== !1 && n.tag(2, s.Varint).bool(t.disabled), t.extraContent && Ve.internalBinaryWrite(t.extraContent, n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Oe = new Ce, Ae = class extends p {
        constructor() {
            super("ExtraContent", [{no: 1, name: "disabled_reason", kind: "scalar", T: 9}, {
                no: 2,
                name: "disabled_code",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.disabledReason = "", n.disabledCode = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.disabledReason = t.string();
                        break;
                    case 2:
                        e.disabledCode = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.disabledReason !== "" && n.tag(1, s.LengthDelimited).string(t.disabledReason), t.disabledCode !== 0n && n.tag(2, s.Varint).int64(t.disabledCode);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ve = new Ae;
    var Qe;
    (function (o) {
        o[o.TAB_NONE = 0] = "TAB_NONE", o[o.TAB_INTRODUCTION = 1] = "TAB_INTRODUCTION", o[o.TAB_REPLY = 2] = "TAB_REPLY", o[o.TAB_OGV_ACTIVITY = 3] = "TAB_OGV_ACTIVITY"
    })(Qe || (Qe = {}));
    var ut;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.OGV_INTRODUCTION = 1] = "OGV_INTRODUCTION", o[o.OGV_TITLE = 2] = "OGV_TITLE", o[o.UGC_HEADLINE = 3] = "UGC_HEADLINE", o[o.UGC_INTRODUCTION = 4] = "UGC_INTRODUCTION", o[o.KING_POSITION = 5] = "KING_POSITION", o[o.MASTER_USER_LIST = 6] = "MASTER_USER_LIST", o[o.STAFFS = 7] = "STAFFS", o[o.HONOR = 8] = "HONOR", o[o.OWNER = 9] = "OWNER", o[o.PAGE = 10] = "PAGE", o[o.ACTIVITY_RESERVE = 11] = "ACTIVITY_RESERVE", o[o.LIVE_ORDER = 12] = "LIVE_ORDER", o[o.POSITIVE = 13] = "POSITIVE", o[o.SECTION = 14] = "SECTION", o[o.RELATE = 15] = "RELATE", o[o.PUGV = 16] = "PUGV", o[o.COLLECTION_CARD = 17] = "COLLECTION_CARD", o[o.ACTIVITY = 18] = "ACTIVITY", o[o.CHARACTER = 19] = "CHARACTER", o[o.FOLLOW_LAYER = 20] = "FOLLOW_LAYER", o[o.OGV_SEASONS = 21] = "OGV_SEASONS", o[o.UGC_SEASON = 22] = "UGC_SEASON", o[o.OGV_LIVE_RESERVE = 23] = "OGV_LIVE_RESERVE", o[o.COMBINATION_EPISODE = 24] = "COMBINATION_EPISODE", o[o.SPONSOR = 25] = "SPONSOR", o[o.ACTIVITY_ENTRANCE = 26] = "ACTIVITY_ENTRANCE", o[o.THEATRE_HOT_TOPIC = 27] = "THEATRE_HOT_TOPIC", o[o.RELATED_RECOMMEND = 28] = "RELATED_RECOMMEND", o[o.PAY_BAR = 29] = "PAY_BAR", o[o.BANNER = 30] = "BANNER", o[o.AUDIO = 31] = "AUDIO", o[o.AGG_CARD = 32] = "AGG_CARD", o[o.SINGLE_EP = 33] = "SINGLE_EP", o[o.LIKE_COMMENT = 34] = "LIKE_COMMENT", o[o.ATTENTION_RECOMMEND = 35] = "ATTENTION_RECOMMEND", o[o.COVENANTER = 36] = "COVENANTER", o[o.SPECIALTAG = 37] = "SPECIALTAG"
    })(ut || (ut = {}));
    var lt;
    (function (o) {
        o[o.CARD_TYPE_UNKNOWN = 0] = "CARD_TYPE_UNKNOWN", o[o.AV = 1] = "AV", o[o.BANGUMI = 2] = "BANGUMI", o[o.RESOURCE = 3] = "RESOURCE", o[o.GAME = 4] = "GAME", o[o.CM_TYPE = 5] = "CM_TYPE", o[o.LIVE = 6] = "LIVE", o[o.AI_RECOMMEND = 7] = "AI_RECOMMEND", o[o.BANGUMI_AV = 8] = "BANGUMI_AV", o[o.BANGUMI_UGC = 9] = "BANGUMI_UGC", o[o.SPECIAL = 10] = "SPECIAL", o[o.COURSE = 11] = "COURSE"
    })(lt || (lt = {}));
    var ti = class extends p {
        constructor() {
            super("viewunite.v1.RelateCard", [{
                no: 1,
                name: "relate_card_type",
                kind: "enum",
                T: () => ["viewunite.v1.RelateCardType", lt]
            }, {no: 11, name: "cm_stock", kind: "message", T: () => _}, {
                no: 12,
                name: "basic_info",
                kind: "message",
                T: () => $e
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.relateCardType = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.relateCardType = t.int32();
                        break;
                    case 11:
                        e.cmStock = _.internalBinaryRead(t, t.uint32(), a, e.cmStock);
                        break;
                    case 12:
                        e.basicInfo = $e.internalBinaryRead(t, t.uint32(), a, e.basicInfo);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.relateCardType !== 0 && n.tag(1, s.Varint).int32(t.relateCardType), t.cmStock && _.internalBinaryWrite(t.cmStock, n.tag(11, s.LengthDelimited).fork(), a).join(), t.basicInfo && $e.internalBinaryWrite(t.basicInfo, n.tag(12, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Se = new ti, ni = class extends p {
        constructor() {
            super("viewunite.v1.CardBasicInfo", [{no: 6, name: "unique_id", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.uniqueId = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 6:
                        e.uniqueId = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.uniqueId !== "" && n.tag(6, s.LengthDelimited).string(t.uniqueId);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, $e = new ni, ei = class extends p {
        constructor() {
            super("viewunite.v1.Relates", [{no: 1, name: "cards", kind: "message", repeat: 1, T: () => Se}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.cards = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.cards.push(Se.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.cards.length; e++) Se.internalBinaryWrite(t.cards[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Me = new ei, ii = class extends p {
        constructor() {
            super("viewunite.v1.Headline", [{no: 1, name: "label", kind: "message", T: () => Ge}, {
                no: 2,
                name: "content",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.content = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.label = Ge.internalBinaryRead(t, t.uint32(), a, e.label);
                        break;
                    case 2:
                        e.content = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.label && Ge.internalBinaryWrite(t.label, n.tag(1, s.LengthDelimited).fork(), a).join(), t.content !== "" && n.tag(2, s.LengthDelimited).string(t.content);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ke = new ii, ai = class extends p {
        constructor() {
            super("viewunite.v1.Label", [])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            return i ?? this.create()
        }

        internalBinaryWrite(t, n, a) {
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ge = new ai, oi = class extends p {
        constructor() {
            super("viewunite.v1.CommonModule", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["viewunite.v1.ModuleType", ut]
            }, {no: 5, name: "head_line", kind: "message", oneof: "data", T: () => Ke}, {
                no: 22,
                name: "relates",
                kind: "message",
                oneof: "data",
                T: () => Me
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, n.data = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 5:
                        e.data = {
                            oneofKind: "headLine",
                            headLine: Ke.internalBinaryRead(t, t.uint32(), a, e.data.headLine)
                        };
                        break;
                    case 22:
                        e.data = {
                            oneofKind: "relates",
                            relates: Me.internalBinaryRead(t, t.uint32(), a, e.data.relates)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type), t.data.oneofKind === "headLine" && Ke.internalBinaryWrite(t.data.headLine, n.tag(5, s.LengthDelimited).fork(), a).join(), t.data.oneofKind === "relates" && Me.internalBinaryWrite(t.data.relates, n.tag(22, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ze = new oi, ri = class extends p {
        constructor() {
            super("viewunite.v1.IntroductionTab", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "modules",
                kind: "message",
                repeat: 1,
                T: () => ze
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.modules = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.modules.push(ze.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title);
            for (let e = 0; e < t.modules.length; e++) ze.internalBinaryWrite(t.modules[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ye = new ri, li = class extends p {
        constructor() {
            super("viewunite.v1.TabModule", [{
                no: 1,
                name: "tab_type",
                kind: "enum",
                T: () => ["viewunite.v1.TabType", Qe]
            }, {no: 2, name: "introduction", kind: "message", oneof: "tab", T: () => Ye}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.tabType = 0, n.tab = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.tabType = t.int32();
                        break;
                    case 2:
                        e.tab = {
                            oneofKind: "introduction",
                            introduction: Ye.internalBinaryRead(t, t.uint32(), a, e.tab.introduction)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.tabType !== 0 && n.tag(1, s.Varint).int32(t.tabType), t.tab.oneofKind === "introduction" && Ye.internalBinaryWrite(t.tab.introduction, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, qe = new li, si = class extends p {
        constructor() {
            super("viewunite.v1.Tab", [{no: 1, name: "tab_module", kind: "message", repeat: 1, T: () => qe}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.tabModule = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.tabModule.push(qe.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.tabModule.length; e++) qe.internalBinaryWrite(t.tabModule[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, He = new si, fi = class extends p {
        constructor() {
            super("viewunite.v1.CM", [{no: 1, name: "cm_under_player", kind: "message", T: () => _}, {
                no: 2,
                name: "ads_control",
                kind: "message",
                T: () => _
            }, {no: 3, name: "source_content", kind: "message", repeat: 1, T: () => _}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.sourceContent = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.cmUnderPlayer = _.internalBinaryRead(t, t.uint32(), a, e.cmUnderPlayer);
                        break;
                    case 2:
                        e.adsControl = _.internalBinaryRead(t, t.uint32(), a, e.adsControl);
                        break;
                    case 3:
                        e.sourceContent.push(_.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.cmUnderPlayer && _.internalBinaryWrite(t.cmUnderPlayer, n.tag(1, s.LengthDelimited).fork(), a).join(), t.adsControl && _.internalBinaryWrite(t.adsControl, n.tag(2, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.sourceContent.length; e++) _.internalBinaryWrite(t.sourceContent[e], n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Je = new fi, ci = class extends p {
        constructor() {
            super("viewunite.v1.ReqUser", [{no: 7, name: "elec_plus_btn", kind: "message", T: () => Ze}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 7:
                        e.elecPlusBtn = Ze.internalBinaryRead(t, t.uint32(), a, e.elecPlusBtn);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.elecPlusBtn && Ze.internalBinaryWrite(t.elecPlusBtn, n.tag(7, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Xe = new ci, di = class extends p {
        constructor() {
            super("viewunite.v1.Button", [])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            return i ?? this.create()
        }

        internalBinaryWrite(t, n, a) {
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ze = new di, hi = class extends p {
        constructor() {
            super("viewunite.v1.ViewUniteReply", [{no: 3, name: "req_user", kind: "message", T: () => Xe}, {
                no: 5,
                name: "tab",
                kind: "message",
                T: () => He
            }, {no: 7, name: "cm", kind: "message", T: () => Je}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 3:
                        e.reqUser = Xe.internalBinaryRead(t, t.uint32(), a, e.reqUser);
                        break;
                    case 5:
                        e.tab = He.internalBinaryRead(t, t.uint32(), a, e.tab);
                        break;
                    case 7:
                        e.cm = Je.internalBinaryRead(t, t.uint32(), a, e.cm);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.reqUser && Xe.internalBinaryWrite(t.reqUser, n.tag(3, s.LengthDelimited).fork(), a).join(), t.tab && He.internalBinaryWrite(t.tab, n.tag(5, s.LengthDelimited).fork(), a).join(), t.cm && Je.internalBinaryWrite(t.cm, n.tag(7, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ui = new hi;
    var gi = class extends p {
        constructor() {
            super("ViewProgressReply", [{no: 4, name: "dm", kind: "message", T: () => pi}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 4:
                        e.dm = pi.internalBinaryRead(t, t.uint32(), a, e.dm);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.dm && pi.internalBinaryWrite(t.dm, n.tag(4, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, yi = new gi, bi = class extends p {
        constructor() {
            super("DmResource", [{no: 1, name: "command_dms", kind: "message", repeat: 1, T: () => ki}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.commandDms = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.commandDms.push(ki.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.commandDms.length; e++) ki.internalBinaryWrite(t.commandDms[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, pi = new bi, mi = class extends p {
        constructor() {
            super("CommandDm", [{no: 1, name: "id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "oid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "mid", kind: "scalar", T: 3, L: 0}, {no: 4, name: "command", kind: "scalar", T: 9}, {
                no: 5,
                name: "content",
                kind: "scalar",
                T: 9
            }, {no: 6, name: "progress", kind: "scalar", T: 5}, {no: 7, name: "ctime", kind: "scalar", T: 9}, {
                no: 8,
                name: "mtime",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "extra", kind: "scalar", T: 9}, {no: 10, name: "idstr", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.id = 0n, n.oid = 0n, n.mid = 0n, n.command = "", n.content = "", n.progress = 0, n.ctime = "", n.mtime = "", n.extra = "", n.idstr = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.id = t.int64().toBigInt();
                        break;
                    case 2:
                        e.oid = t.int64().toBigInt();
                        break;
                    case 3:
                        e.mid = t.int64().toBigInt();
                        break;
                    case 4:
                        e.command = t.string();
                        break;
                    case 5:
                        e.content = t.string();
                        break;
                    case 6:
                        e.progress = t.int32();
                        break;
                    case 7:
                        e.ctime = t.string();
                        break;
                    case 8:
                        e.mtime = t.string();
                        break;
                    case 9:
                        e.extra = t.string();
                        break;
                    case 10:
                        e.idstr = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.id !== 0n && n.tag(1, s.Varint).int64(t.id), t.oid !== 0n && n.tag(2, s.Varint).int64(t.oid), t.mid !== 0n && n.tag(3, s.Varint).int64(t.mid), t.command !== "" && n.tag(4, s.LengthDelimited).string(t.command), t.content !== "" && n.tag(5, s.LengthDelimited).string(t.content), t.progress !== 0 && n.tag(6, s.Varint).int32(t.progress), t.ctime !== "" && n.tag(7, s.LengthDelimited).string(t.ctime), t.mtime !== "" && n.tag(8, s.LengthDelimited).string(t.mtime), t.extra !== "" && n.tag(9, s.LengthDelimited).string(t.extra), t.idstr !== "" && n.tag(10, s.LengthDelimited).string(t.idstr);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ki = new mi;
    var Ti;
    (function (o) {
        o[o.CARD_TYPE_UNKNOWN = 0] = "CARD_TYPE_UNKNOWN", o[o.AV = 1] = "AV", o[o.BANGUMI = 2] = "BANGUMI", o[o.RESOURCE = 3] = "RESOURCE", o[o.GAME = 4] = "GAME", o[o.CM_TYPE = 5] = "CM_TYPE", o[o.LIVE = 6] = "LIVE", o[o.AI_RECOMMEND = 7] = "AI_RECOMMEND", o[o.BANGUMI_AV = 8] = "BANGUMI_AV", o[o.BANGUMI_UGC = 9] = "BANGUMI_UGC", o[o.SPECIAL = 10] = "SPECIAL"
    })(Ti || (Ti = {}));
    var Ni = class extends p {
        constructor() {
            super("RelatesFeedReply", [{no: 1, name: "relates", kind: "message", repeat: 1, T: () => wi}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.relates = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.relates.push(wi.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.relates.length; e++) wi.internalBinaryWrite(t.relates[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Li = new Ni, Bi = class extends p {
        constructor() {
            super("RelateCard", [{no: 1, name: "relate_card_type", kind: "enum", T: () => ["RelateCardType", Ti]}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.relateCardType = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.relateCardType = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.relateCardType !== 0 && n.tag(1, s.Varint).int32(t.relateCardType);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, wi = new Bi;
    var Qi;
    (function (o) {
        o[o.NONE = 0] = "NONE", o[o.COMMON = 1] = "COMMON", o[o.ATMOS = 2] = "ATMOS"
    })(Qi || (Qi = {}));
    var ta;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.SHOW_TOAST = 1] = "SHOW_TOAST"
    })(ta || (ta = {}));
    var na;
    (function (o) {
        o[o.NORMAL = 0] = "NORMAL", o[o.INTERACT = 1] = "INTERACT"
    })(na || (na = {}));
    var fn;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.UGC = 1] = "UGC", o[o.PGC = 2] = "PGC", o[o.PUGV = 3] = "PUGV"
    })(fn || (fn = {}));
    var ea;
    (function (o) {
        o[o.BUTTON_UNKNOWN = 0] = "BUTTON_UNKNOWN", o[o.PAY = 1] = "PAY", o[o.VIP = 2] = "VIP", o[o.PACK = 3] = "PACK", o[o.LINK = 4] = "LINK", o[o.COUPON = 5] = "COUPON", o[o.DEMAND = 6] = "DEMAND", o[o.DEMAND_PACK = 7] = "DEMAND_PACK", o[o.FOLLOW = 8] = "FOLLOW", o[o.APPOINTMENT = 9] = "APPOINTMENT", o[o.VIP_FREE = 10] = "VIP_FREE", o[o.TASK = 11] = "TASK", o[o.CHARGINGPLUS = 12] = "CHARGINGPLUS", o[o.BP = 13] = "BP", o[o.PRE_SELL = 14] = "PRE_SELL", o[o.LOGIN = 15] = "LOGIN"
    })(ea || (ea = {}));
    var ia;
    (function (o) {
        o[o.NOCODE = 0] = "NOCODE", o[o.CODE264 = 1] = "CODE264", o[o.CODE265 = 2] = "CODE265", o[o.CODEAV1 = 3] = "CODEAV1"
    })(ia || (ia = {}));
    var ps;
    (function (o) {
        o[o.NoType = 0] = "NoType", o[o.FLIPCONF = 1] = "FLIPCONF", o[o.CASTCONF = 2] = "CASTCONF", o[o.FEEDBACK = 3] = "FEEDBACK", o[o.SUBTITLE = 4] = "SUBTITLE", o[o.PLAYBACKRATE = 5] = "PLAYBACKRATE", o[o.TIMEUP = 6] = "TIMEUP", o[o.PLAYBACKMODE = 7] = "PLAYBACKMODE", o[o.SCALEMODE = 8] = "SCALEMODE", o[o.BACKGROUNDPLAY = 9] = "BACKGROUNDPLAY", o[o.LIKE = 10] = "LIKE", o[o.DISLIKE = 11] = "DISLIKE", o[o.COIN = 12] = "COIN", o[o.ELEC = 13] = "ELEC", o[o.SHARE = 14] = "SHARE", o[o.SCREENSHOT = 15] = "SCREENSHOT", o[o.LOCKSCREEN = 16] = "LOCKSCREEN", o[o.RECOMMEND = 17] = "RECOMMEND", o[o.PLAYBACKSPEED = 18] = "PLAYBACKSPEED", o[o.DEFINITION = 19] = "DEFINITION", o[o.SELECTIONS = 20] = "SELECTIONS", o[o.NEXT = 21] = "NEXT", o[o.EDITDM = 22] = "EDITDM", o[o.SMALLWINDOW = 23] = "SMALLWINDOW", o[o.SHAKE = 24] = "SHAKE", o[o.OUTERDM = 25] = "OUTERDM", o[o.INNERDM = 26] = "INNERDM", o[o.PANORAMA = 27] = "PANORAMA", o[o.DOLBY = 28] = "DOLBY", o[o.COLORFILTER = 29] = "COLORFILTER", o[o.LOSSLESS = 30] = "LOSSLESS", o[o.FREYAENTER = 31] = "FREYAENTER", o[o.FREYAFULLENTER = 32] = "FREYAFULLENTER", o[o.SKIPOPED = 33] = "SKIPOPED", o[o.RECORDSCREEN = 34] = "RECORDSCREEN", o[o.DUBBING = 35] = "DUBBING", o[o.LISTEN = 36] = "LISTEN"
    })(ps || (ps = {}));
    var aa;
    (function (o) {
        o[o.UNKNOWN_DRM = 0] = "UNKNOWN_DRM", o[o.FAIR_PLAY = 1] = "FAIR_PLAY", o[o.WIDE_VINE = 2] = "WIDE_VINE", o[o.BILI_DRM = 3] = "BILI_DRM"
    })(aa || (aa = {}));
    var ks;
    (function (o) {
        o[o.EFFECTS_UNKNOWN = 0] = "EFFECTS_UNKNOWN", o[o.GAUSSIAN_BLUR = 1] = "GAUSSIAN_BLUR", o[o.HALF_ALPHA = 2] = "HALF_ALPHA"
    })(ks || (ks = {}));
    var oa;
    (function (o) {
        o[o.EXT_DATA_TYPE_UNKNOWN = 0] = "EXT_DATA_TYPE_UNKNOWN", o[o.PLAY_LIST = 1] = "PLAY_LIST"
    })(oa || (oa = {}));
    var ra;
    (function (o) {
        o[o.INVALID = 0] = "INVALID", o[o.PRE = 1] = "PRE", o[o.MIDDLE = 2] = "MIDDLE", o[o.POST = 3] = "POST"
    })(ra || (ra = {}));
    var la;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.AD_FRAGMENT = 1] = "AD_FRAGMENT", o[o.OGV_FRAGMENT = 2] = "OGV_FRAGMENT"
    })(la || (la = {}));
    var sa;
    (function (o) {
        o[o.STYLE_UNKNOWN = 0] = "STYLE_UNKNOWN", o[o.HORIZONTAL_IMAGE = 1] = "HORIZONTAL_IMAGE", o[o.VERTICAL_TEXT = 2] = "VERTICAL_TEXT", o[o.SIMPLE_TEXT = 3] = "SIMPLE_TEXT", o[o.CHARGING_TEXT = 4] = "CHARGING_TEXT"
    })(sa || (sa = {}));
    var fa;
    (function (o) {
        o[o.LAT_UNKNOWN = 0] = "LAT_UNKNOWN", o[o.SHOW_LIMIT_DIALOG = 1] = "SHOW_LIMIT_DIALOG", o[o.SKIP_CURRENT_EP = 2] = "SKIP_CURRENT_EP"
    })(fa || (fa = {}));
    var gs;
    (function (o) {
        o[o.NoErr = 0] = "NoErr", o[o.WithMultiDeviceLoginErr = 1] = "WithMultiDeviceLoginErr"
    })(gs || (gs = {}));
    var ca;
    (function (o) {
        o[o.PROMPT_BAR_STYLE_UNKNOWN = 0] = "PROMPT_BAR_STYLE_UNKNOWN", o[o.TEXT = 1] = "TEXT", o[o.CURING_BENEFITS = 2] = "CURING_BENEFITS", o[o.CARD_OPENING_GIFT = 3] = "CARD_OPENING_GIFT", o[o.COUNTDOWN = 4] = "COUNTDOWN"
    })(ca || (ca = {}));
    var da;
    (function (o) {
        o[o.PROMPT_BAR_TYPE_UNKNOWN = 0] = "PROMPT_BAR_TYPE_UNKNOWN", o[o.OPEN_PROMPT_BAR = 1] = "OPEN_PROMPT_BAR"
    })(da || (da = {}));
    var bs;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.ORDINARY = 1] = "ORDINARY", o[o.RESIDENT = 2] = "RESIDENT"
    })(bs || (bs = {}));
    var ms;
    (function (o) {
        o[o.TOAST_TYPE_UNKNOWN = 0] = "TOAST_TYPE_UNKNOWN", o[o.VIP_CONTENT_REMIND = 1] = "VIP_CONTENT_REMIND", o[o.VIP_DEFINITION_REMIND = 2] = "VIP_DEFINITION_REMIND", o[o.VIP_DEFINITION_GUIDE = 3] = "VIP_DEFINITION_GUIDE", o[o.OGV_VIDEO_START_TOAST = 4] = "OGV_VIDEO_START_TOAST", o[o.CHARGING_TOAST = 5] = "CHARGING_TOAST", o[o.VIP_SKIP_FRAGMENT_TOAST = 6] = "VIP_SKIP_FRAGMENT_TOAST"
    })(ms || (ms = {}));
    var ys;
    (function (o) {
        o[o.UNKNOWN_SCENE = 0] = "UNKNOWN_SCENE", o[o.PREMIERE = 1] = "PREMIERE"
    })(ys || (ys = {}));
    var ha = class extends p {
        constructor() {
            super("protos.playershared.ArcConf", [{no: 1, name: "is_support", kind: "scalar", T: 8}, {
                no: 2,
                name: "disabled",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "extra_content", kind: "message", T: () => Oi}, {
                no: 4,
                name: "unsupport_scene",
                kind: "scalar",
                repeat: 1,
                T: 5
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.isSupport = !1, n.disabled = !1, n.unsupportScene = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.isSupport = t.bool();
                        break;
                    case 2:
                        e.disabled = t.bool();
                        break;
                    case 3:
                        e.extraContent = Oi.internalBinaryRead(t, t.uint32(), a, e.extraContent);
                        break;
                    case 4:
                        if (f === s.LengthDelimited) for (let g = t.int32() + t.pos; t.pos < g;) e.unsupportScene.push(t.int32()); else e.unsupportScene.push(t.int32());
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            if (t.isSupport !== !1 && n.tag(1, s.Varint).bool(t.isSupport), t.disabled !== !1 && n.tag(2, s.Varint).bool(t.disabled), t.extraContent && Oi.internalBinaryWrite(t.extraContent, n.tag(3, s.LengthDelimited).fork(), a).join(), t.unsupportScene.length) {
                n.tag(4, s.LengthDelimited).fork();
                for (let e = 0; e < t.unsupportScene.length; e++) n.int32(t.unsupportScene[e]);
                n.join()
            }
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, rn = new ha, ua = class extends p {
        constructor() {
            super("protos.playershared.BackgroundInfo", [{no: 1, name: "drawable_color", kind: "scalar", T: 9}, {
                no: 2,
                name: "drawable_bitmap_url",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "effects", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.drawableColor = "", n.drawableBitmapUrl = "", n.effects = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.drawableColor = t.string();
                        break;
                    case 2:
                        e.drawableBitmapUrl = t.string();
                        break;
                    case 3:
                        e.effects = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.drawableColor !== "" && n.tag(1, s.LengthDelimited).string(t.drawableColor), t.drawableBitmapUrl !== "" && n.tag(2, s.LengthDelimited).string(t.drawableBitmapUrl), t.effects !== 0 && n.tag(3, s.Varint).int32(t.effects);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, vi = new ua, pa = class extends p {
        constructor() {
            super("protos.playershared.BadgeInfo", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "bg_color",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "bg_color_night", kind: "scalar", T: 9}, {
                no: 4,
                name: "text_color",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "bg_gradient_color", kind: "message", T: () => Z}, {
                no: 6,
                name: "img",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.bgColor = "", n.bgColorNight = "", n.textColor = "", n.img = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.bgColor = t.string();
                        break;
                    case 3:
                        e.bgColorNight = t.string();
                        break;
                    case 4:
                        e.textColor = t.string();
                        break;
                    case 5:
                        e.bgGradientColor = Z.internalBinaryRead(t, t.uint32(), a, e.bgGradientColor);
                        break;
                    case 6:
                        e.img = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.bgColor !== "" && n.tag(2, s.LengthDelimited).string(t.bgColor), t.bgColorNight !== "" && n.tag(3, s.LengthDelimited).string(t.bgColorNight), t.textColor !== "" && n.tag(4, s.LengthDelimited).string(t.textColor), t.bgGradientColor && Z.internalBinaryWrite(t.bgGradientColor, n.tag(5, s.LengthDelimited).fork(), a).join(), t.img !== "" && n.tag(6, s.LengthDelimited).string(t.img);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Dt = new pa, ka = class extends p {
        constructor() {
            super("protos.playershared.Banner", [{no: 1, name: "jump_link", kind: "scalar", T: 9}, {
                no: 2,
                name: "image_link",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "half_image_link", kind: "scalar", T: 9}, {
                no: 4,
                name: "report",
                kind: "message",
                T: () => K
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.jumpLink = "", n.imageLink = "", n.halfImageLink = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.jumpLink = t.string();
                        break;
                    case 2:
                        e.imageLink = t.string();
                        break;
                    case 3:
                        e.halfImageLink = t.string();
                        break;
                    case 4:
                        e.report = K.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.jumpLink !== "" && n.tag(1, s.LengthDelimited).string(t.jumpLink), t.imageLink !== "" && n.tag(2, s.LengthDelimited).string(t.imageLink), t.halfImageLink !== "" && n.tag(3, s.LengthDelimited).string(t.halfImageLink), t.report && K.internalBinaryWrite(t.report, n.tag(4, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, sp = new ka, ga = class extends p {
        constructor() {
            super("protos.playershared.BenefitInfo", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "icon",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.icon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.icon = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title), t.icon !== "" && n.tag(2, s.LengthDelimited).string(t.icon);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Di = new ga, ba = class extends p {
        constructor() {
            super("protos.playershared.BottomDisplay", [{no: 1, name: "title", kind: "message", T: () => O}, {
                no: 2,
                name: "icon",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.icon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = O.internalBinaryRead(t, t.uint32(), a, e.title);
                        break;
                    case 2:
                        e.icon = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title && O.internalBinaryWrite(t.title, n.tag(1, s.LengthDelimited).fork(), a).join(), t.icon !== "" && n.tag(2, s.LengthDelimited).string(t.icon);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, xi = new ba, ma = class extends p {
        constructor() {
            super("protos.playershared.Button", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "link",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "report_params", kind: "map", K: 9, V: {kind: "scalar", T: 9}}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.link = "", n.reportParams = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.link = t.string();
                        break;
                    case 3:
                        this.binaryReadMap3(e.reportParams, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap3(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field protos.playershared.Button.report_params")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.link !== "" && n.tag(2, s.LengthDelimited).string(t.link);
            for (let e of globalThis.Object.keys(t.reportParams)) n.tag(3, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.reportParams[e]).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, xt = new ma, ya = class extends p {
        constructor() {
            super("protos.playershared.ButtonInfo", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "text_color",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "text_color_night", kind: "scalar", T: 9}, {
                no: 4,
                name: "bg_color",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "bg_color_night", kind: "scalar", T: 9}, {
                no: 6,
                name: "link",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "action_type", kind: "enum", T: () => ["protos.playershared.ButtonAction", ea]}, {
                no: 8,
                name: "badge_info",
                kind: "message",
                T: () => Dt
            }, {no: 9, name: "report", kind: "message", T: () => K}, {
                no: 10,
                name: "left_strikethrough_text",
                kind: "scalar",
                T: 9
            }, {no: 11, name: "simple_text_info", kind: "message", T: () => O}, {
                no: 12,
                name: "simple_bg_color",
                kind: "scalar",
                T: 9
            }, {no: 13, name: "simple_bg_color_night", kind: "scalar", T: 9}, {
                no: 14,
                name: "bg_gradient_color",
                kind: "message",
                T: () => Z
            }, {no: 15, name: "order_report_params", kind: "map", K: 9, V: {kind: "scalar", T: 9}}, {
                no: 16,
                name: "task_param",
                kind: "message",
                T: () => Ji
            }, {no: 17, name: "frame_color", kind: "scalar", T: 9}, {no: 18, name: "icon", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.textColor = "", n.textColorNight = "", n.bgColor = "", n.bgColorNight = "", n.link = "", n.actionType = 0, n.leftStrikethroughText = "", n.simpleBgColor = "", n.simpleBgColorNight = "", n.orderReportParams = {}, n.frameColor = "", n.icon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.textColor = t.string();
                        break;
                    case 3:
                        e.textColorNight = t.string();
                        break;
                    case 4:
                        e.bgColor = t.string();
                        break;
                    case 5:
                        e.bgColorNight = t.string();
                        break;
                    case 6:
                        e.link = t.string();
                        break;
                    case 7:
                        e.actionType = t.int32();
                        break;
                    case 8:
                        e.badgeInfo = Dt.internalBinaryRead(t, t.uint32(), a, e.badgeInfo);
                        break;
                    case 9:
                        e.report = K.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 10:
                        e.leftStrikethroughText = t.string();
                        break;
                    case 11:
                        e.simpleTextInfo = O.internalBinaryRead(t, t.uint32(), a, e.simpleTextInfo);
                        break;
                    case 12:
                        e.simpleBgColor = t.string();
                        break;
                    case 13:
                        e.simpleBgColorNight = t.string();
                        break;
                    case 14:
                        e.bgGradientColor = Z.internalBinaryRead(t, t.uint32(), a, e.bgGradientColor);
                        break;
                    case 15:
                        this.binaryReadMap15(e.orderReportParams, t, a);
                        break;
                    case 16:
                        e.taskParam = Ji.internalBinaryRead(t, t.uint32(), a, e.taskParam);
                        break;
                    case 17:
                        e.frameColor = t.string();
                        break;
                    case 18:
                        e.icon = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap15(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field protos.playershared.ButtonInfo.order_report_params")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.textColor !== "" && n.tag(2, s.LengthDelimited).string(t.textColor), t.textColorNight !== "" && n.tag(3, s.LengthDelimited).string(t.textColorNight), t.bgColor !== "" && n.tag(4, s.LengthDelimited).string(t.bgColor), t.bgColorNight !== "" && n.tag(5, s.LengthDelimited).string(t.bgColorNight), t.link !== "" && n.tag(6, s.LengthDelimited).string(t.link), t.actionType !== 0 && n.tag(7, s.Varint).int32(t.actionType), t.badgeInfo && Dt.internalBinaryWrite(t.badgeInfo, n.tag(8, s.LengthDelimited).fork(), a).join(), t.report && K.internalBinaryWrite(t.report, n.tag(9, s.LengthDelimited).fork(), a).join(), t.leftStrikethroughText !== "" && n.tag(10, s.LengthDelimited).string(t.leftStrikethroughText), t.simpleTextInfo && O.internalBinaryWrite(t.simpleTextInfo, n.tag(11, s.LengthDelimited).fork(), a).join(), t.simpleBgColor !== "" && n.tag(12, s.LengthDelimited).string(t.simpleBgColor), t.simpleBgColorNight !== "" && n.tag(13, s.LengthDelimited).string(t.simpleBgColorNight), t.bgGradientColor && Z.internalBinaryWrite(t.bgGradientColor, n.tag(14, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.orderReportParams)) n.tag(15, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.orderReportParams[e]).join();
            t.taskParam && Ji.internalBinaryWrite(t.taskParam, n.tag(16, s.LengthDelimited).fork(), a).join(), t.frameColor !== "" && n.tag(17, s.LengthDelimited).string(t.frameColor), t.icon !== "" && n.tag(18, s.LengthDelimited).string(t.icon);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, X = new ya, wa = class extends p {
        constructor() {
            super("protos.playershared.ComprehensiveToast", [{no: 1, name: "type", kind: "scalar", T: 5}, {
                no: 2,
                name: "button",
                kind: "message",
                T: () => X
            }, {no: 3, name: "show_style_type", kind: "scalar", T: 5}, {
                no: 4,
                name: "icon",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "toast_text", kind: "message", T: () => O}, {
                no: 6,
                name: "report",
                kind: "message",
                T: () => K
            }, {no: 7, name: "order_report_params", kind: "map", K: 9, V: {kind: "scalar", T: 9}}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, n.showStyleType = 0, n.icon = "", n.orderReportParams = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 2:
                        e.button = X.internalBinaryRead(t, t.uint32(), a, e.button);
                        break;
                    case 3:
                        e.showStyleType = t.int32();
                        break;
                    case 4:
                        e.icon = t.string();
                        break;
                    case 5:
                        e.toastText = O.internalBinaryRead(t, t.uint32(), a, e.toastText);
                        break;
                    case 6:
                        e.report = K.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 7:
                        this.binaryReadMap7(e.orderReportParams, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap7(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field protos.playershared.ComprehensiveToast.order_report_params")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type), t.button && X.internalBinaryWrite(t.button, n.tag(2, s.LengthDelimited).fork(), a).join(), t.showStyleType !== 0 && n.tag(3, s.Varint).int32(t.showStyleType), t.icon !== "" && n.tag(4, s.LengthDelimited).string(t.icon), t.toastText && O.internalBinaryWrite(t.toastText, n.tag(5, s.LengthDelimited).fork(), a).join(), t.report && K.internalBinaryWrite(t.report, n.tag(6, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.orderReportParams)) n.tag(7, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.orderReportParams[e]).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ri = new wa, Ta = class extends p {
        constructor() {
            super("protos.playershared.ConfValue", [{
                no: 1,
                name: "switch_val",
                kind: "scalar",
                oneof: "value",
                T: 5
            }, {no: 2, name: "selected_val", kind: "scalar", oneof: "value", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.value = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.value = {oneofKind: "switchVal", switchVal: t.int32()};
                        break;
                    case 2:
                        e.value = {oneofKind: "selectedVal", selectedVal: t.int32()};
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.value.oneofKind === "switchVal" && n.tag(1, s.Varint).int32(t.value.switchVal), t.value.oneofKind === "selectedVal" && n.tag(2, s.Varint).int32(t.value.selectedVal);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ii = new Ta, Na = class extends p {
        constructor() {
            super("protos.playershared.DashItem", [{no: 1, name: "id", kind: "scalar", T: 13}, {
                no: 2,
                name: "base_url",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "backup_url", kind: "scalar", repeat: 2, T: 9}, {
                no: 4,
                name: "bandwidth",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "codecid", kind: "scalar", T: 13}, {no: 6, name: "md5", kind: "scalar", T: 9}, {
                no: 7,
                name: "size",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 8, name: "frame_rate", kind: "scalar", T: 9}, {no: 9, name: "widevine_pssh", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.id = 0, n.baseUrl = "", n.backupUrl = [], n.bandwidth = 0, n.codecid = 0, n.md5 = "", n.size = 0n, n.frameRate = "", n.widevinePssh = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.id = t.uint32();
                        break;
                    case 2:
                        e.baseUrl = t.string();
                        break;
                    case 3:
                        e.backupUrl.push(t.string());
                        break;
                    case 4:
                        e.bandwidth = t.uint32();
                        break;
                    case 5:
                        e.codecid = t.uint32();
                        break;
                    case 6:
                        e.md5 = t.string();
                        break;
                    case 7:
                        e.size = t.uint64().toBigInt();
                        break;
                    case 8:
                        e.frameRate = t.string();
                        break;
                    case 9:
                        e.widevinePssh = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.id !== 0 && n.tag(1, s.Varint).uint32(t.id), t.baseUrl !== "" && n.tag(2, s.LengthDelimited).string(t.baseUrl);
            for (let e = 0; e < t.backupUrl.length; e++) n.tag(3, s.LengthDelimited).string(t.backupUrl[e]);
            t.bandwidth !== 0 && n.tag(4, s.Varint).uint32(t.bandwidth), t.codecid !== 0 && n.tag(5, s.Varint).uint32(t.codecid), t.md5 !== "" && n.tag(6, s.LengthDelimited).string(t.md5), t.size !== 0n && n.tag(7, s.Varint).uint64(t.size), t.frameRate !== "" && n.tag(8, s.LengthDelimited).string(t.frameRate), t.widevinePssh !== "" && n.tag(9, s.LengthDelimited).string(t.widevinePssh);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, M = new Na, Ba = class extends p {
        constructor() {
            super("protos.playershared.DashVideo", [{no: 1, name: "base_url", kind: "scalar", T: 9}, {
                no: 2,
                name: "backup_url",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 3, name: "bandwidth", kind: "scalar", T: 13}, {
                no: 4,
                name: "codecid",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "md5", kind: "scalar", T: 9}, {no: 6, name: "size", kind: "scalar", T: 4, L: 0}, {
                no: 7,
                name: "audio_id",
                kind: "scalar",
                T: 13
            }, {no: 8, name: "no_rexcode", kind: "scalar", T: 8}, {
                no: 9,
                name: "frame_rate",
                kind: "scalar",
                T: 9
            }, {no: 10, name: "width", kind: "scalar", T: 5}, {no: 11, name: "height", kind: "scalar", T: 5}, {
                no: 12,
                name: "widevine_pssh",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.baseUrl = "", n.backupUrl = [], n.bandwidth = 0, n.codecid = 0, n.md5 = "", n.size = 0n, n.audioId = 0, n.noRexcode = !1, n.frameRate = "", n.width = 0, n.height = 0, n.widevinePssh = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.baseUrl = t.string();
                        break;
                    case 2:
                        e.backupUrl.push(t.string());
                        break;
                    case 3:
                        e.bandwidth = t.uint32();
                        break;
                    case 4:
                        e.codecid = t.uint32();
                        break;
                    case 5:
                        e.md5 = t.string();
                        break;
                    case 6:
                        e.size = t.uint64().toBigInt();
                        break;
                    case 7:
                        e.audioId = t.uint32();
                        break;
                    case 8:
                        e.noRexcode = t.bool();
                        break;
                    case 9:
                        e.frameRate = t.string();
                        break;
                    case 10:
                        e.width = t.int32();
                        break;
                    case 11:
                        e.height = t.int32();
                        break;
                    case 12:
                        e.widevinePssh = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.baseUrl !== "" && n.tag(1, s.LengthDelimited).string(t.baseUrl);
            for (let e = 0; e < t.backupUrl.length; e++) n.tag(2, s.LengthDelimited).string(t.backupUrl[e]);
            t.bandwidth !== 0 && n.tag(3, s.Varint).uint32(t.bandwidth), t.codecid !== 0 && n.tag(4, s.Varint).uint32(t.codecid), t.md5 !== "" && n.tag(5, s.LengthDelimited).string(t.md5), t.size !== 0n && n.tag(6, s.Varint).uint64(t.size), t.audioId !== 0 && n.tag(7, s.Varint).uint32(t.audioId), t.noRexcode !== !1 && n.tag(8, s.Varint).bool(t.noRexcode), t.frameRate !== "" && n.tag(9, s.LengthDelimited).string(t.frameRate), t.width !== 0 && n.tag(10, s.Varint).int32(t.width), t.height !== 0 && n.tag(11, s.Varint).int32(t.height), t.widevinePssh !== "" && n.tag(12, s.LengthDelimited).string(t.widevinePssh);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, _i = new Ba, La = class extends p {
        constructor() {
            super("protos.playershared.DeviceConf", [{no: 1, name: "conf_value", kind: "message", T: () => Ii}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.confValue = Ii.internalBinaryRead(t, t.uint32(), a, e.confValue);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.confValue && Ii.internalBinaryWrite(t.confValue, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ln = new La, va = class extends p {
        constructor() {
            super("protos.playershared.Dialog", [{
                no: 1,
                name: "style_type",
                kind: "enum",
                T: () => ["protos.playershared.GuideStyle", sa]
            }, {no: 2, name: "background_info", kind: "message", T: () => vi}, {
                no: 3,
                name: "title",
                kind: "message",
                T: () => O
            }, {no: 4, name: "subtitle", kind: "message", T: () => O}, {
                no: 5,
                name: "image",
                kind: "message",
                T: () => Pi
            }, {no: 6, name: "button", kind: "message", repeat: 1, T: () => X}, {
                no: 7,
                name: "bottom_desc",
                kind: "message",
                T: () => X
            }, {no: 8, name: "report", kind: "message", T: () => K}, {
                no: 9,
                name: "count_down_sec",
                kind: "scalar",
                T: 5
            }, {no: 10, name: "right_bottom_desc", kind: "message", T: () => O}, {
                no: 11,
                name: "bottom_display",
                kind: "message",
                repeat: 1,
                T: () => xi
            }, {no: 12, name: "ext_data", kind: "message", T: () => Wi}, {
                no: 13,
                name: "limit_action_type",
                kind: "enum",
                T: () => ["protos.playershared.LimitActionType", fa]
            }, {no: 14, name: "is_hide_more_btn", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.styleType = 0, n.button = [], n.countDownSec = 0, n.bottomDisplay = [], n.limitActionType = 0, n.isHideMoreBtn = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.styleType = t.int32();
                        break;
                    case 2:
                        e.backgroundInfo = vi.internalBinaryRead(t, t.uint32(), a, e.backgroundInfo);
                        break;
                    case 3:
                        e.title = O.internalBinaryRead(t, t.uint32(), a, e.title);
                        break;
                    case 4:
                        e.subtitle = O.internalBinaryRead(t, t.uint32(), a, e.subtitle);
                        break;
                    case 5:
                        e.image = Pi.internalBinaryRead(t, t.uint32(), a, e.image);
                        break;
                    case 6:
                        e.button.push(X.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 7:
                        e.bottomDesc = X.internalBinaryRead(t, t.uint32(), a, e.bottomDesc);
                        break;
                    case 8:
                        e.report = K.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 9:
                        e.countDownSec = t.int32();
                        break;
                    case 10:
                        e.rightBottomDesc = O.internalBinaryRead(t, t.uint32(), a, e.rightBottomDesc);
                        break;
                    case 11:
                        e.bottomDisplay.push(xi.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 12:
                        e.extData = Wi.internalBinaryRead(t, t.uint32(), a, e.extData);
                        break;
                    case 13:
                        e.limitActionType = t.int32();
                        break;
                    case 14:
                        e.isHideMoreBtn = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.styleType !== 0 && n.tag(1, s.Varint).int32(t.styleType), t.backgroundInfo && vi.internalBinaryWrite(t.backgroundInfo, n.tag(2, s.LengthDelimited).fork(), a).join(), t.title && O.internalBinaryWrite(t.title, n.tag(3, s.LengthDelimited).fork(), a).join(), t.subtitle && O.internalBinaryWrite(t.subtitle, n.tag(4, s.LengthDelimited).fork(), a).join(), t.image && Pi.internalBinaryWrite(t.image, n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.button.length; e++) X.internalBinaryWrite(t.button[e], n.tag(6, s.LengthDelimited).fork(), a).join();
            t.bottomDesc && X.internalBinaryWrite(t.bottomDesc, n.tag(7, s.LengthDelimited).fork(), a).join(), t.report && K.internalBinaryWrite(t.report, n.tag(8, s.LengthDelimited).fork(), a).join(), t.countDownSec !== 0 && n.tag(9, s.Varint).int32(t.countDownSec), t.rightBottomDesc && O.internalBinaryWrite(t.rightBottomDesc, n.tag(10, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.bottomDisplay.length; e++) xi.internalBinaryWrite(t.bottomDisplay[e], n.tag(11, s.LengthDelimited).fork(), a).join();
            t.extData && Wi.internalBinaryWrite(t.extData, n.tag(12, s.LengthDelimited).fork(), a).join(), t.limitActionType !== 0 && n.tag(13, s.Varint).int32(t.limitActionType), t.isHideMoreBtn !== 0 && n.tag(14, s.Varint).int32(t.isHideMoreBtn);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, sn = new va, Da = class extends p {
        constructor() {
            super("protos.playershared.Dimension", [{no: 1, name: "width", kind: "scalar", T: 5}, {
                no: 2,
                name: "height",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "rotate", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.width = 0, n.height = 0, n.rotate = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.width = t.int32();
                        break;
                    case 2:
                        e.height = t.int32();
                        break;
                    case 3:
                        e.rotate = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.width !== 0 && n.tag(1, s.Varint).int32(t.width), t.height !== 0 && n.tag(2, s.Varint).int32(t.height), t.rotate !== 0 && n.tag(3, s.Varint).int32(t.rotate);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Rt = new Da, xa = class extends p {
        constructor() {
            super("protos.playershared.DolbyItem", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["protos.playershared.DolbyItem.Type", Qi]
            }, {no: 2, name: "audio", kind: "message", repeat: 1, T: () => M}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, n.audio = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 2:
                        e.audio.push(M.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type);
            for (let e = 0; e < t.audio.length; e++) M.internalBinaryWrite(t.audio[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ui = new xa, Ra = class extends p {
        constructor() {
            super("protos.playershared.EpInlineVideo", [{
                no: 1,
                name: "material_no",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "aid", kind: "scalar", T: 3, L: 0}, {no: 3, name: "cid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.materialNo = 0n, n.aid = 0n, n.cid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.materialNo = t.int64().toBigInt();
                        break;
                    case 2:
                        e.aid = t.int64().toBigInt();
                        break;
                    case 3:
                        e.cid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.materialNo !== 0n && n.tag(1, s.Varint).int64(t.materialNo), t.aid !== 0n && n.tag(2, s.Varint).int64(t.aid), t.cid !== 0n && n.tag(3, s.Varint).int64(t.cid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ei = new Ra, Ia = class extends p {
        constructor() {
            super("protos.playershared.EpInlineVideoInfo", [{
                no: 1,
                name: "ep_inline_video",
                kind: "message",
                repeat: 1,
                T: () => Ei
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.epInlineVideo = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.epInlineVideo.push(Ei.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.epInlineVideo.length; e++) Ei.internalBinaryWrite(t.epInlineVideo[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, fp = new Ia, _a = class extends p {
        constructor() {
            super("protos.playershared.Event", [{no: 1, name: "shake", kind: "message", T: () => zi}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.shake = zi.internalBinaryRead(t, t.uint32(), a, e.shake);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.shake && zi.internalBinaryWrite(t.shake, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, cp = new _a, Ua = class extends p {
        constructor() {
            super("protos.playershared.ExtData", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["protos.playershared.ExtDataType", oa]
            }, {no: 2, name: "play_list_info", kind: "message", oneof: "data", T: () => Si}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, n.data = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 2:
                        e.data = {
                            oneofKind: "playListInfo",
                            playListInfo: Si.internalBinaryRead(t, t.uint32(), a, e.data.playListInfo)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type), t.data.oneofKind === "playListInfo" && Si.internalBinaryWrite(t.data.playListInfo, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Wi = new Ua, Ea = class extends p {
        constructor() {
            super("protos.playershared.ExtraContent", [{no: 1, name: "disable_reason", kind: "scalar", T: 9}, {
                no: 2,
                name: "disable_code",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.disableReason = "", n.disableCode = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.disableReason = t.string();
                        break;
                    case 2:
                        e.disableCode = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.disableReason !== "" && n.tag(1, s.LengthDelimited).string(t.disableReason), t.disableCode !== 0n && n.tag(2, s.Varint).int64(t.disableCode);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Oi = new Ea, Wa = class extends p {
        constructor() {
            super("protos.playershared.Fragment", [{no: 1, name: "infos", kind: "message", repeat: 1, T: () => It}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.infos = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.infos.push(It.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.infos.length; e++) It.internalBinaryWrite(t.infos[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, dp = new Wa, Oa = class extends p {
        constructor() {
            super("protos.playershared.FragmentInfo", [{no: 1, name: "index", kind: "scalar", T: 5}, {
                no: 2,
                name: "fragment_position",
                kind: "enum",
                T: () => ["protos.playershared.FragmentPosition", ra]
            }, {no: 3, name: "fragment_type", kind: "enum", T: () => ["protos.playershared.FragmentType", la]}, {
                no: 4,
                name: "aid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 5, name: "cid", kind: "scalar", T: 3, L: 0}, {
                no: 6,
                name: "start_time",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 7, name: "report", kind: "message", T: () => _}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.index = 0, n.fragmentPosition = 0, n.fragmentType = 0, n.aid = 0n, n.cid = 0n, n.startTime = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.index = t.int32();
                        break;
                    case 2:
                        e.fragmentPosition = t.int32();
                        break;
                    case 3:
                        e.fragmentType = t.int32();
                        break;
                    case 4:
                        e.aid = t.int64().toBigInt();
                        break;
                    case 5:
                        e.cid = t.int64().toBigInt();
                        break;
                    case 6:
                        e.startTime = t.int64().toBigInt();
                        break;
                    case 7:
                        e.report = _.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.index !== 0 && n.tag(1, s.Varint).int32(t.index), t.fragmentPosition !== 0 && n.tag(2, s.Varint).int32(t.fragmentPosition), t.fragmentType !== 0 && n.tag(3, s.Varint).int32(t.fragmentType), t.aid !== 0n && n.tag(4, s.Varint).int64(t.aid), t.cid !== 0n && n.tag(5, s.Varint).int64(t.cid), t.startTime !== 0n && n.tag(6, s.Varint).int64(t.startTime), t.report && _.internalBinaryWrite(t.report, n.tag(7, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, It = new Oa, Va = class extends p {
        constructor() {
            super("protos.playershared.FragmentVideo", [{
                no: 1,
                name: "videos",
                kind: "message",
                repeat: 1,
                T: () => Vi
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.videos = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.videos.push(Vi.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.videos.length; e++) Vi.internalBinaryWrite(t.videos[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, hp = new Va, Pa = class extends p {
        constructor() {
            super("protos.playershared.FragmentVideoInfo", [{
                no: 1,
                name: "fragment_info",
                kind: "message",
                T: () => It
            }, {no: 2, name: "vod_info", kind: "message", T: () => Xi}, {
                no: 3,
                name: "play_arc_conf",
                kind: "message",
                T: () => mt
            }, {no: 4, name: "dimension", kind: "message", T: () => Rt}, {
                no: 5,
                name: "timelength",
                kind: "scalar",
                T: 3,
                L: 0
            }, {
                no: 6,
                name: "video_type",
                kind: "enum",
                T: () => ["protos.playershared.BizType", fn, "BIZ_TYPE_"]
            }, {no: 7, name: "playable_status", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.timelength = 0n, n.videoType = 0, n.playableStatus = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.fragmentInfo = It.internalBinaryRead(t, t.uint32(), a, e.fragmentInfo);
                        break;
                    case 2:
                        e.vodInfo = Xi.internalBinaryRead(t, t.uint32(), a, e.vodInfo);
                        break;
                    case 3:
                        e.playArcConf = mt.internalBinaryRead(t, t.uint32(), a, e.playArcConf);
                        break;
                    case 4:
                        e.dimension = Rt.internalBinaryRead(t, t.uint32(), a, e.dimension);
                        break;
                    case 5:
                        e.timelength = t.int64().toBigInt();
                        break;
                    case 6:
                        e.videoType = t.int32();
                        break;
                    case 7:
                        e.playableStatus = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.fragmentInfo && It.internalBinaryWrite(t.fragmentInfo, n.tag(1, s.LengthDelimited).fork(), a).join(), t.vodInfo && Xi.internalBinaryWrite(t.vodInfo, n.tag(2, s.LengthDelimited).fork(), a).join(), t.playArcConf && mt.internalBinaryWrite(t.playArcConf, n.tag(3, s.LengthDelimited).fork(), a).join(), t.dimension && Rt.internalBinaryWrite(t.dimension, n.tag(4, s.LengthDelimited).fork(), a).join(), t.timelength !== 0n && n.tag(5, s.Varint).int64(t.timelength), t.videoType !== 0 && n.tag(6, s.Varint).int32(t.videoType), t.playableStatus !== !1 && n.tag(7, s.Varint).bool(t.playableStatus);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Vi = new Pa, Fa = class extends p {
        constructor() {
            super("protos.playershared.GradientColor", [{no: 1, name: "start_color", kind: "scalar", T: 9}, {
                no: 2,
                name: "end_color",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.startColor = "", n.endColor = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.startColor = t.string();
                        break;
                    case 2:
                        e.endColor = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.startColor !== "" && n.tag(1, s.LengthDelimited).string(t.startColor), t.endColor !== "" && n.tag(2, s.LengthDelimited).string(t.endColor);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Z = new Fa, Ca = class extends p {
        constructor() {
            super("protos.playershared.History", [{no: 1, name: "current_video", kind: "message", T: () => vt}, {
                no: 2,
                name: "related_video",
                kind: "message",
                T: () => vt
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.currentVideo = vt.internalBinaryRead(t, t.uint32(), a, e.currentVideo);
                        break;
                    case 2:
                        e.relatedVideo = vt.internalBinaryRead(t, t.uint32(), a, e.relatedVideo);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.currentVideo && vt.internalBinaryWrite(t.currentVideo, n.tag(1, s.LengthDelimited).fork(), a).join(), t.relatedVideo && vt.internalBinaryWrite(t.relatedVideo, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, up = new Ca, Aa = class extends p {
        constructor() {
            super("protos.playershared.HistoryInfo", [{no: 1, name: "progress", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "last_play_cid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "toast", kind: "message", T: () => Q}, {
                no: 4,
                name: "toast_without_time",
                kind: "message",
                T: () => Q
            }, {no: 5, name: "last_play_aid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.progress = 0n, n.lastPlayCid = 0n, n.lastPlayAid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.progress = t.int64().toBigInt();
                        break;
                    case 2:
                        e.lastPlayCid = t.int64().toBigInt();
                        break;
                    case 3:
                        e.toast = Q.internalBinaryRead(t, t.uint32(), a, e.toast);
                        break;
                    case 4:
                        e.toastWithoutTime = Q.internalBinaryRead(t, t.uint32(), a, e.toastWithoutTime);
                        break;
                    case 5:
                        e.lastPlayAid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.progress !== 0n && n.tag(1, s.Varint).int64(t.progress), t.lastPlayCid !== 0n && n.tag(2, s.Varint).int64(t.lastPlayCid), t.toast && Q.internalBinaryWrite(t.toast, n.tag(3, s.LengthDelimited).fork(), a).join(), t.toastWithoutTime && Q.internalBinaryWrite(t.toastWithoutTime, n.tag(4, s.LengthDelimited).fork(), a).join(), t.lastPlayAid !== 0n && n.tag(5, s.Varint).int64(t.lastPlayAid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, vt = new Aa, ja = class extends p {
        constructor() {
            super("protos.playershared.ImageInfo", [{no: 1, name: "url", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.url = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.url = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.url !== "" && n.tag(1, s.LengthDelimited).string(t.url);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Pi = new ja, Sa = class extends p {
        constructor() {
            super("protos.playershared.Interaction", [{
                no: 1,
                name: "history_node",
                kind: "message",
                T: () => Ai
            }, {no: 2, name: "graph_version", kind: "scalar", T: 3, L: 0}, {
                no: 3,
                name: "msg",
                kind: "scalar",
                T: 9
            }, {no: 4, name: "mark", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.graphVersion = 0n, n.msg = "", n.mark = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.historyNode = Ai.internalBinaryRead(t, t.uint32(), a, e.historyNode);
                        break;
                    case 2:
                        e.graphVersion = t.int64().toBigInt();
                        break;
                    case 3:
                        e.msg = t.string();
                        break;
                    case 4:
                        e.mark = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.historyNode && Ai.internalBinaryWrite(t.historyNode, n.tag(1, s.LengthDelimited).fork(), a).join(), t.graphVersion !== 0n && n.tag(2, s.Varint).int64(t.graphVersion), t.msg !== "" && n.tag(3, s.LengthDelimited).string(t.msg), t.mark !== 0n && n.tag(4, s.Varint).int64(t.mark);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Fi = new Sa, $a = class extends p {
        constructor() {
            super("protos.playershared.LossLessItem", [{no: 1, name: "is_lossless_audio", kind: "scalar", T: 8}, {
                no: 2,
                name: "audio",
                kind: "message",
                T: () => M
            }, {no: 3, name: "need_vip", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.isLosslessAudio = !1, n.needVip = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.isLosslessAudio = t.bool();
                        break;
                    case 2:
                        e.audio = M.internalBinaryRead(t, t.uint32(), a, e.audio);
                        break;
                    case 3:
                        e.needVip = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.isLosslessAudio !== !1 && n.tag(1, s.Varint).bool(t.isLosslessAudio), t.audio && M.internalBinaryWrite(t.audio, n.tag(2, s.LengthDelimited).fork(), a).join(), t.needVip !== !1 && n.tag(3, s.Varint).bool(t.needVip);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ci = new $a, Ma = class extends p {
        constructor() {
            super("protos.playershared.Node", [{no: 1, name: "node_id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "cid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.nodeId = 0n, n.title = "", n.cid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.nodeId = t.int64().toBigInt();
                        break;
                    case 2:
                        e.title = t.string();
                        break;
                    case 3:
                        e.cid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.nodeId !== 0n && n.tag(1, s.Varint).int64(t.nodeId), t.title !== "" && n.tag(2, s.LengthDelimited).string(t.title), t.cid !== 0n && n.tag(3, s.Varint).int64(t.cid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ai = new Ma, Ka = class extends p {
        constructor() {
            super("protos.playershared.PlayArc", [{
                no: 1,
                name: "video_type",
                kind: "enum",
                T: () => ["protos.playershared.BizType", fn, "BIZ_TYPE_"]
            }, {no: 2, name: "aid", kind: "scalar", T: 4, L: 0}, {
                no: 3,
                name: "cid",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 4, name: "drm_tech_type", kind: "enum", T: () => ["protos.playershared.DrmTechType", aa]}, {
                no: 5,
                name: "arc_type",
                kind: "enum",
                T: () => ["protos.playershared.ArcType", na, "ARC_TYPE_"]
            }, {no: 6, name: "interaction", kind: "message", T: () => Fi}, {
                no: 7,
                name: "dimension",
                kind: "message",
                T: () => Rt
            }, {no: 8, name: "duration", kind: "scalar", T: 3, L: 0}, {
                no: 9,
                name: "is_preview",
                kind: "scalar",
                T: 8
            }, {no: 10, name: "watch_time_length", kind: "scalar", T: 3, L: 0}, {
                no: 11,
                name: "duration_ms",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.videoType = 0, n.aid = 0n, n.cid = 0n, n.drmTechType = 0, n.arcType = 0, n.duration = 0n, n.isPreview = !1, n.watchTimeLength = 0n, n.durationMs = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.videoType = t.int32();
                        break;
                    case 2:
                        e.aid = t.uint64().toBigInt();
                        break;
                    case 3:
                        e.cid = t.uint64().toBigInt();
                        break;
                    case 4:
                        e.drmTechType = t.int32();
                        break;
                    case 5:
                        e.arcType = t.int32();
                        break;
                    case 6:
                        e.interaction = Fi.internalBinaryRead(t, t.uint32(), a, e.interaction);
                        break;
                    case 7:
                        e.dimension = Rt.internalBinaryRead(t, t.uint32(), a, e.dimension);
                        break;
                    case 8:
                        e.duration = t.int64().toBigInt();
                        break;
                    case 9:
                        e.isPreview = t.bool();
                        break;
                    case 10:
                        e.watchTimeLength = t.int64().toBigInt();
                        break;
                    case 11:
                        e.durationMs = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.videoType !== 0 && n.tag(1, s.Varint).int32(t.videoType), t.aid !== 0n && n.tag(2, s.Varint).uint64(t.aid), t.cid !== 0n && n.tag(3, s.Varint).uint64(t.cid), t.drmTechType !== 0 && n.tag(4, s.Varint).int32(t.drmTechType), t.arcType !== 0 && n.tag(5, s.Varint).int32(t.arcType), t.interaction && Fi.internalBinaryWrite(t.interaction, n.tag(6, s.LengthDelimited).fork(), a).join(), t.dimension && Rt.internalBinaryWrite(t.dimension, n.tag(7, s.LengthDelimited).fork(), a).join(), t.duration !== 0n && n.tag(8, s.Varint).int64(t.duration), t.isPreview !== !1 && n.tag(9, s.Varint).bool(t.isPreview), t.watchTimeLength !== 0n && n.tag(10, s.Varint).int64(t.watchTimeLength), t.durationMs !== 0n && n.tag(11, s.Varint).int64(t.durationMs);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, pp = new Ka, Ga = class extends p {
        constructor() {
            super("protos.playershared.PlayArcConf", [{
                no: 1,
                name: "arc_confs",
                kind: "map",
                K: 5,
                V: {kind: "message", T: () => rn}
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.arcConfs = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        this.binaryReadMap1(e.arcConfs, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap1(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.int32();
                        break;
                    case 2:
                        l = rn.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field protos.playershared.PlayArcConf.arc_confs")
                }
            }
            t[c ?? 0] = l ?? rn.create()
        }

        internalBinaryWrite(t, n, a) {
            for (let e of globalThis.Object.keys(t.arcConfs)) n.tag(1, s.LengthDelimited).fork().tag(1, s.Varint).int32(parseInt(e)), n.tag(2, s.LengthDelimited).fork(), rn.internalBinaryWrite(t.arcConfs[e], n, a), n.join().join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, mt = new Ga, za = class extends p {
        constructor() {
            super("protos.playershared.PlayDeviceConf", [{
                no: 1,
                name: "device_confs",
                kind: "map",
                K: 5,
                V: {kind: "message", T: () => ln}
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.deviceConfs = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        this.binaryReadMap1(e.deviceConfs, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap1(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.int32();
                        break;
                    case 2:
                        l = ln.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field protos.playershared.PlayDeviceConf.device_confs")
                }
            }
            t[c ?? 0] = l ?? ln.create()
        }

        internalBinaryWrite(t, n, a) {
            for (let e of globalThis.Object.keys(t.deviceConfs)) n.tag(1, s.LengthDelimited).fork().tag(1, s.Varint).int32(parseInt(e)), n.tag(2, s.LengthDelimited).fork(), ln.internalBinaryWrite(t.deviceConfs[e], n, a), n.join().join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, kp = new za, Ya = class extends p {
        constructor() {
            super("protos.playershared.PlayList", [{no: 1, name: "season_id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "cover", kind: "scalar", T: 9}, {no: 4, name: "link", kind: "scalar", T: 9}, {
                no: 5,
                name: "badge_info",
                kind: "message",
                T: () => Dt
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.seasonId = 0n, n.title = "", n.cover = "", n.link = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.seasonId = t.int64().toBigInt();
                        break;
                    case 2:
                        e.title = t.string();
                        break;
                    case 3:
                        e.cover = t.string();
                        break;
                    case 4:
                        e.link = t.string();
                        break;
                    case 5:
                        e.badgeInfo = Dt.internalBinaryRead(t, t.uint32(), a, e.badgeInfo);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.seasonId !== 0n && n.tag(1, s.Varint).int64(t.seasonId), t.title !== "" && n.tag(2, s.LengthDelimited).string(t.title), t.cover !== "" && n.tag(3, s.LengthDelimited).string(t.cover), t.link !== "" && n.tag(4, s.LengthDelimited).string(t.link), t.badgeInfo && Dt.internalBinaryWrite(t.badgeInfo, n.tag(5, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ji = new Ya, qa = class extends p {
        constructor() {
            super("protos.playershared.PlayListInfo", [{
                no: 2,
                name: "play_list",
                kind: "message",
                repeat: 1,
                T: () => ji
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.playList = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 2:
                        e.playList.push(ji.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.playList.length; e++) ji.internalBinaryWrite(t.playList[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Si = new qa, Ha = class extends p {
        constructor() {
            super("protos.playershared.PromptBar", [{no: 1, name: "title", kind: "message", T: () => O}, {
                no: 2,
                name: "subtitle",
                kind: "message",
                T: () => O
            }, {no: 3, name: "sub_title_icon", kind: "scalar", T: 9}, {
                no: 4,
                name: "bg_image",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "bg_gradient_color", kind: "message", T: () => Z}, {
                no: 6,
                name: "button",
                kind: "message",
                repeat: 1,
                T: () => X
            }, {no: 7, name: "report", kind: "message", T: () => K}, {
                no: 8,
                name: "full_screen_ip_icon",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "full_screen_bg_gradient_color", kind: "message", T: () => Z}, {
                no: 10,
                name: "prompt_bar_type",
                kind: "enum",
                T: () => ["protos.playershared.PromptBarType", da]
            }, {
                no: 11,
                name: "prompt_bar_style",
                kind: "enum",
                T: () => ["protos.playershared.PromptBarStyle", ca]
            }, {no: 12, name: "benefit_infos", kind: "message", repeat: 1, T: () => Di}, {
                no: 13,
                name: "end_time",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.subTitleIcon = "", n.bgImage = "", n.button = [], n.fullScreenIpIcon = "", n.promptBarType = 0, n.promptBarStyle = 0, n.benefitInfos = [], n.endTime = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = O.internalBinaryRead(t, t.uint32(), a, e.title);
                        break;
                    case 2:
                        e.subtitle = O.internalBinaryRead(t, t.uint32(), a, e.subtitle);
                        break;
                    case 3:
                        e.subTitleIcon = t.string();
                        break;
                    case 4:
                        e.bgImage = t.string();
                        break;
                    case 5:
                        e.bgGradientColor = Z.internalBinaryRead(t, t.uint32(), a, e.bgGradientColor);
                        break;
                    case 6:
                        e.button.push(X.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 7:
                        e.report = K.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 8:
                        e.fullScreenIpIcon = t.string();
                        break;
                    case 9:
                        e.fullScreenBgGradientColor = Z.internalBinaryRead(t, t.uint32(), a, e.fullScreenBgGradientColor);
                        break;
                    case 10:
                        e.promptBarType = t.int32();
                        break;
                    case 11:
                        e.promptBarStyle = t.int32();
                        break;
                    case 12:
                        e.benefitInfos.push(Di.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 13:
                        e.endTime = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title && O.internalBinaryWrite(t.title, n.tag(1, s.LengthDelimited).fork(), a).join(), t.subtitle && O.internalBinaryWrite(t.subtitle, n.tag(2, s.LengthDelimited).fork(), a).join(), t.subTitleIcon !== "" && n.tag(3, s.LengthDelimited).string(t.subTitleIcon), t.bgImage !== "" && n.tag(4, s.LengthDelimited).string(t.bgImage), t.bgGradientColor && Z.internalBinaryWrite(t.bgGradientColor, n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.button.length; e++) X.internalBinaryWrite(t.button[e], n.tag(6, s.LengthDelimited).fork(), a).join();
            t.report && K.internalBinaryWrite(t.report, n.tag(7, s.LengthDelimited).fork(), a).join(), t.fullScreenIpIcon !== "" && n.tag(8, s.LengthDelimited).string(t.fullScreenIpIcon), t.fullScreenBgGradientColor && Z.internalBinaryWrite(t.fullScreenBgGradientColor, n.tag(9, s.LengthDelimited).fork(), a).join(), t.promptBarType !== 0 && n.tag(10, s.Varint).int32(t.promptBarType), t.promptBarStyle !== 0 && n.tag(11, s.Varint).int32(t.promptBarStyle);
            for (let e = 0; e < t.benefitInfos.length; e++) Di.internalBinaryWrite(t.benefitInfos[e], n.tag(12, s.LengthDelimited).fork(), a).join();
            t.endTime !== 0n && n.tag(13, s.Varint).int64(t.endTime);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, $i = new Ha, Ja = class extends p {
        constructor() {
            super("protos.playershared.QnTrialInfo", [{no: 1, name: "trial_able", kind: "scalar", T: 8}, {
                no: 2,
                name: "remaining_times",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "start", kind: "scalar", T: 5}, {no: 4, name: "time_length", kind: "scalar", T: 5}, {
                no: 5,
                name: "start_toast",
                kind: "message",
                T: () => Q
            }, {no: 6, name: "end_toast", kind: "message", T: () => Q}, {
                no: 8,
                name: "quality_open_tip_btn",
                kind: "message",
                T: () => xt
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.trialAble = !1, n.remainingTimes = 0, n.start = 0, n.timeLength = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.trialAble = t.bool();
                        break;
                    case 2:
                        e.remainingTimes = t.int32();
                        break;
                    case 3:
                        e.start = t.int32();
                        break;
                    case 4:
                        e.timeLength = t.int32();
                        break;
                    case 5:
                        e.startToast = Q.internalBinaryRead(t, t.uint32(), a, e.startToast);
                        break;
                    case 6:
                        e.endToast = Q.internalBinaryRead(t, t.uint32(), a, e.endToast);
                        break;
                    case 8:
                        e.qualityOpenTipBtn = xt.internalBinaryRead(t, t.uint32(), a, e.qualityOpenTipBtn);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.trialAble !== !1 && n.tag(1, s.Varint).bool(t.trialAble), t.remainingTimes !== 0 && n.tag(2, s.Varint).int32(t.remainingTimes), t.start !== 0 && n.tag(3, s.Varint).int32(t.start), t.timeLength !== 0 && n.tag(4, s.Varint).int32(t.timeLength), t.startToast && Q.internalBinaryWrite(t.startToast, n.tag(5, s.LengthDelimited).fork(), a).join(), t.endToast && Q.internalBinaryWrite(t.endToast, n.tag(6, s.LengthDelimited).fork(), a).join(), t.qualityOpenTipBtn && xt.internalBinaryWrite(t.qualityOpenTipBtn, n.tag(8, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, gp = new Ja, Xa = class extends p {
        constructor() {
            super("protos.playershared.Report", [{no: 1, name: "show_event_id", kind: "scalar", T: 9}, {
                no: 2,
                name: "click_event_id",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "extends", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.showEventId = "", n.clickEventId = "", n.extends = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.showEventId = t.string();
                        break;
                    case 2:
                        e.clickEventId = t.string();
                        break;
                    case 3:
                        e.extends = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.showEventId !== "" && n.tag(1, s.LengthDelimited).string(t.showEventId), t.clickEventId !== "" && n.tag(2, s.LengthDelimited).string(t.clickEventId), t.extends !== "" && n.tag(3, s.LengthDelimited).string(t.extends);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, K = new Xa, Za = class extends p {
        constructor() {
            super("protos.playershared.ResponseDash", [{
                no: 1,
                name: "video",
                kind: "message",
                repeat: 1,
                T: () => M
            }, {no: 2, name: "audio", kind: "message", repeat: 1, T: () => M}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.video = [], n.audio = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.video.push(M.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 2:
                        e.audio.push(M.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.video.length; e++) M.internalBinaryWrite(t.video[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.audio.length; e++) M.internalBinaryWrite(t.audio[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, bp = new Za, Qa = class extends p {
        constructor() {
            super("protos.playershared.ResponseUrl", [{no: 1, name: "order", kind: "scalar", T: 13}, {
                no: 2,
                name: "length",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 3, name: "size", kind: "scalar", T: 4, L: 0}, {no: 4, name: "url", kind: "scalar", T: 9}, {
                no: 5,
                name: "backup_url",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 6, name: "md5", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.order = 0, n.length = 0n, n.size = 0n, n.url = "", n.backupUrl = [], n.md5 = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.order = t.uint32();
                        break;
                    case 2:
                        e.length = t.uint64().toBigInt();
                        break;
                    case 3:
                        e.size = t.uint64().toBigInt();
                        break;
                    case 4:
                        e.url = t.string();
                        break;
                    case 5:
                        e.backupUrl.push(t.string());
                        break;
                    case 6:
                        e.md5 = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.order !== 0 && n.tag(1, s.Varint).uint32(t.order), t.length !== 0n && n.tag(2, s.Varint).uint64(t.length), t.size !== 0n && n.tag(3, s.Varint).uint64(t.size), t.url !== "" && n.tag(4, s.LengthDelimited).string(t.url);
            for (let e = 0; e < t.backupUrl.length; e++) n.tag(5, s.LengthDelimited).string(t.backupUrl[e]);
            t.md5 !== "" && n.tag(6, s.LengthDelimited).string(t.md5);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Mi = new Qa, to = class extends p {
        constructor() {
            super("protos.playershared.Scheme", [{
                no: 1,
                name: "action_type",
                kind: "enum",
                T: () => ["protos.playershared.Scheme.ActionType", ta]
            }, {no: 2, name: "toast", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.actionType = 0, n.toast = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.actionType = t.int32();
                        break;
                    case 2:
                        e.toast = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.actionType !== 0 && n.tag(1, s.Varint).int32(t.actionType), t.toast !== "" && n.tag(2, s.LengthDelimited).string(t.toast);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ki = new to, no = class extends p {
        constructor() {
            super("protos.playershared.SegmentVideo", [{
                no: 1,
                name: "segment",
                kind: "message",
                repeat: 1,
                T: () => Mi
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.segment = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.segment.push(Mi.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.segment.length; e++) Mi.internalBinaryWrite(t.segment[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Gi = new no, eo = class extends p {
        constructor() {
            super("protos.playershared.Shake", [{no: 1, name: "file", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.file = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.file = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.file !== "" && n.tag(1, s.LengthDelimited).string(t.file);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, zi = new eo, io = class extends p {
        constructor() {
            super("protos.playershared.Stream", [{no: 1, name: "stream_info", kind: "message", T: () => qi}, {
                no: 2,
                name: "dash_video",
                kind: "message",
                oneof: "content",
                T: () => _i
            }, {no: 3, name: "segment_video", kind: "message", oneof: "content", T: () => Gi}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.content = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.streamInfo = qi.internalBinaryRead(t, t.uint32(), a, e.streamInfo);
                        break;
                    case 2:
                        e.content = {
                            oneofKind: "dashVideo",
                            dashVideo: _i.internalBinaryRead(t, t.uint32(), a, e.content.dashVideo)
                        };
                        break;
                    case 3:
                        e.content = {
                            oneofKind: "segmentVideo",
                            segmentVideo: Gi.internalBinaryRead(t, t.uint32(), a, e.content.segmentVideo)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.streamInfo && qi.internalBinaryWrite(t.streamInfo, n.tag(1, s.LengthDelimited).fork(), a).join(), t.content.oneofKind === "dashVideo" && _i.internalBinaryWrite(t.content.dashVideo, n.tag(2, s.LengthDelimited).fork(), a).join(), t.content.oneofKind === "segmentVideo" && Gi.internalBinaryWrite(t.content.segmentVideo, n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Yi = new io, ao = class extends p {
        constructor() {
            super("protos.playershared.StreamInfo", [{no: 1, name: "quality", kind: "scalar", T: 13}, {
                no: 2,
                name: "format",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "description", kind: "scalar", T: 9}, {
                no: 4,
                name: "err_code",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "limit", kind: "message", T: () => Hi}, {
                no: 6,
                name: "need_vip",
                kind: "scalar",
                T: 8
            }, {no: 7, name: "need_login", kind: "scalar", T: 8}, {no: 8, name: "intact", kind: "scalar", T: 8}, {
                no: 9,
                name: "no_rexcode",
                kind: "scalar",
                T: 8
            }, {no: 10, name: "attribute", kind: "scalar", T: 3, L: 0}, {
                no: 11,
                name: "new_description",
                kind: "scalar",
                T: 9
            }, {no: 12, name: "display_desc", kind: "scalar", T: 9}, {
                no: 13,
                name: "superscript",
                kind: "scalar",
                T: 9
            }, {no: 14, name: "vip_free", kind: "scalar", T: 8}, {
                no: 15,
                name: "subtitle",
                kind: "scalar",
                T: 9
            }, {no: 16, name: "scheme", kind: "message", T: () => Ki}, {
                no: 17,
                name: "support_drm",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.quality = 0, n.format = "", n.description = "", n.errCode = 0, n.needVip = !1, n.needLogin = !1, n.intact = !1, n.noRexcode = !1, n.attribute = 0n, n.newDescription = "", n.displayDesc = "", n.superscript = "", n.vipFree = !1, n.subtitle = "", n.supportDrm = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.quality = t.uint32();
                        break;
                    case 2:
                        e.format = t.string();
                        break;
                    case 3:
                        e.description = t.string();
                        break;
                    case 4:
                        e.errCode = t.uint32();
                        break;
                    case 5:
                        e.limit = Hi.internalBinaryRead(t, t.uint32(), a, e.limit);
                        break;
                    case 6:
                        e.needVip = t.bool();
                        break;
                    case 7:
                        e.needLogin = t.bool();
                        break;
                    case 8:
                        e.intact = t.bool();
                        break;
                    case 9:
                        e.noRexcode = t.bool();
                        break;
                    case 10:
                        e.attribute = t.int64().toBigInt();
                        break;
                    case 11:
                        e.newDescription = t.string();
                        break;
                    case 12:
                        e.displayDesc = t.string();
                        break;
                    case 13:
                        e.superscript = t.string();
                        break;
                    case 14:
                        e.vipFree = t.bool();
                        break;
                    case 15:
                        e.subtitle = t.string();
                        break;
                    case 16:
                        e.scheme = Ki.internalBinaryRead(t, t.uint32(), a, e.scheme);
                        break;
                    case 17:
                        e.supportDrm = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.quality !== 0 && n.tag(1, s.Varint).uint32(t.quality), t.format !== "" && n.tag(2, s.LengthDelimited).string(t.format), t.description !== "" && n.tag(3, s.LengthDelimited).string(t.description), t.errCode !== 0 && n.tag(4, s.Varint).uint32(t.errCode), t.limit && Hi.internalBinaryWrite(t.limit, n.tag(5, s.LengthDelimited).fork(), a).join(), t.needVip !== !1 && n.tag(6, s.Varint).bool(t.needVip), t.needLogin !== !1 && n.tag(7, s.Varint).bool(t.needLogin), t.intact !== !1 && n.tag(8, s.Varint).bool(t.intact), t.noRexcode !== !1 && n.tag(9, s.Varint).bool(t.noRexcode), t.attribute !== 0n && n.tag(10, s.Varint).int64(t.attribute), t.newDescription !== "" && n.tag(11, s.LengthDelimited).string(t.newDescription), t.displayDesc !== "" && n.tag(12, s.LengthDelimited).string(t.displayDesc), t.superscript !== "" && n.tag(13, s.LengthDelimited).string(t.superscript), t.vipFree !== !1 && n.tag(14, s.Varint).bool(t.vipFree), t.subtitle !== "" && n.tag(15, s.LengthDelimited).string(t.subtitle), t.scheme && Ki.internalBinaryWrite(t.scheme, n.tag(16, s.LengthDelimited).fork(), a).join(), t.supportDrm !== !1 && n.tag(17, s.Varint).bool(t.supportDrm);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, qi = new ao, oo = class extends p {
        constructor() {
            super("protos.playershared.StreamLimit", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "msg", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.uri = "", n.msg = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.uri = t.string();
                        break;
                    case 3:
                        e.msg = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title), t.uri !== "" && n.tag(2, s.LengthDelimited).string(t.uri), t.msg !== "" && n.tag(3, s.LengthDelimited).string(t.msg);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Hi = new oo, ro = class extends p {
        constructor() {
            super("protos.playershared.TaskParam", [{no: 1, name: "task_type", kind: "scalar", T: 9}, {
                no: 2,
                name: "activity_id",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "tips_id", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.taskType = "", n.activityId = 0n, n.tipsId = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.taskType = t.string();
                        break;
                    case 2:
                        e.activityId = t.int64().toBigInt();
                        break;
                    case 3:
                        e.tipsId = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.taskType !== "" && n.tag(1, s.LengthDelimited).string(t.taskType), t.activityId !== 0n && n.tag(2, s.Varint).int64(t.activityId), t.tipsId !== 0n && n.tag(3, s.Varint).int64(t.tipsId);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ji = new ro, lo = class extends p {
        constructor() {
            super("protos.playershared.TextInfo", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "text_color",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "text_color_night", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.textColor = "", n.textColorNight = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.textColor = t.string();
                        break;
                    case 3:
                        e.textColorNight = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.textColor !== "" && n.tag(2, s.LengthDelimited).string(t.textColor), t.textColorNight !== "" && n.tag(3, s.LengthDelimited).string(t.textColorNight);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, O = new lo, so = class extends p {
        constructor() {
            super("protos.playershared.Toast", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "button",
                kind: "message",
                T: () => xt
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.button = xt.internalBinaryRead(t, t.uint32(), a, e.button);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.button && xt.internalBinaryWrite(t.button, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Q = new so, fo = class extends p {
        constructor() {
            super("protos.playershared.VideoVod", [{no: 1, name: "aid", kind: "scalar", T: 5}, {
                no: 2,
                name: "cid",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "qn", kind: "scalar", T: 4, L: 0}, {no: 4, name: "fnver", kind: "scalar", T: 5}, {
                no: 5,
                name: "fnval",
                kind: "scalar",
                T: 5
            }, {no: 6, name: "download", kind: "scalar", T: 13}, {
                no: 7,
                name: "force_host",
                kind: "scalar",
                T: 5
            }, {no: 8, name: "fourk", kind: "scalar", T: 8}, {
                no: 9,
                name: "prefer_codec_type",
                kind: "enum",
                T: () => ["protos.playershared.CodeType", ia]
            }, {no: 10, name: "voice_balance", kind: "scalar", T: 4, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.aid = 0, n.cid = 0, n.qn = 0n, n.fnver = 0, n.fnval = 0, n.download = 0, n.forceHost = 0, n.fourk = !1, n.preferCodecType = 0, n.voiceBalance = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.aid = t.int32();
                        break;
                    case 2:
                        e.cid = t.int32();
                        break;
                    case 3:
                        e.qn = t.uint64().toBigInt();
                        break;
                    case 4:
                        e.fnver = t.int32();
                        break;
                    case 5:
                        e.fnval = t.int32();
                        break;
                    case 6:
                        e.download = t.uint32();
                        break;
                    case 7:
                        e.forceHost = t.int32();
                        break;
                    case 8:
                        e.fourk = t.bool();
                        break;
                    case 9:
                        e.preferCodecType = t.int32();
                        break;
                    case 10:
                        e.voiceBalance = t.uint64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.aid !== 0 && n.tag(1, s.Varint).int32(t.aid), t.cid !== 0 && n.tag(2, s.Varint).int32(t.cid), t.qn !== 0n && n.tag(3, s.Varint).uint64(t.qn), t.fnver !== 0 && n.tag(4, s.Varint).int32(t.fnver), t.fnval !== 0 && n.tag(5, s.Varint).int32(t.fnval), t.download !== 0 && n.tag(6, s.Varint).uint32(t.download), t.forceHost !== 0 && n.tag(7, s.Varint).int32(t.forceHost), t.fourk !== !1 && n.tag(8, s.Varint).bool(t.fourk), t.preferCodecType !== 0 && n.tag(9, s.Varint).int32(t.preferCodecType), t.voiceBalance !== 0n && n.tag(10, s.Varint).uint64(t.voiceBalance);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, mp = new fo, co = class extends p {
        constructor() {
            super("protos.playershared.ViewInfo", [{
                no: 1,
                name: "dialog_map",
                kind: "map",
                K: 9,
                V: {kind: "message", T: () => sn}
            }, {no: 2, name: "prompt_bar", kind: "message", T: () => $i}, {
                no: 3,
                name: "toasts",
                kind: "message",
                repeat: 1,
                T: () => Ri
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.dialogMap = {}, n.toasts = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        this.binaryReadMap1(e.dialogMap, t, a);
                        break;
                    case 2:
                        e.promptBar = $i.internalBinaryRead(t, t.uint32(), a, e.promptBar);
                        break;
                    case 3:
                        e.toasts.push(Ri.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap1(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = sn.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field protos.playershared.ViewInfo.dialog_map")
                }
            }
            t[c ?? ""] = l ?? sn.create()
        }

        internalBinaryWrite(t, n, a) {
            for (let e of globalThis.Object.keys(t.dialogMap)) n.tag(1, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e), n.tag(2, s.LengthDelimited).fork(), sn.internalBinaryWrite(t.dialogMap[e], n, a), n.join().join();
            t.promptBar && $i.internalBinaryWrite(t.promptBar, n.tag(2, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.toasts.length; e++) Ri.internalBinaryWrite(t.toasts[e], n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, cn = new co, ho = class extends p {
        constructor() {
            super("protos.playershared.VodInfo", [{no: 1, name: "quality", kind: "scalar", T: 13}, {
                no: 2,
                name: "format",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "timelength", kind: "scalar", T: 4, L: 0}, {
                no: 4,
                name: "video_codecid",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "stream_list", kind: "message", repeat: 1, T: () => Yi}, {
                no: 6,
                name: "dash_audio",
                kind: "message",
                repeat: 1,
                T: () => M
            }, {no: 7, name: "dolby", kind: "message", T: () => Ui}, {
                no: 8,
                name: "volume",
                kind: "message",
                T: () => Zi
            }, {no: 9, name: "loss_less_item", kind: "message", T: () => Ci}, {
                no: 10,
                name: "support_project",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.quality = 0, n.format = "", n.timelength = 0n, n.videoCodecid = 0, n.streamList = [], n.dashAudio = [], n.supportProject = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.quality = t.uint32();
                        break;
                    case 2:
                        e.format = t.string();
                        break;
                    case 3:
                        e.timelength = t.uint64().toBigInt();
                        break;
                    case 4:
                        e.videoCodecid = t.uint32();
                        break;
                    case 5:
                        e.streamList.push(Yi.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 6:
                        e.dashAudio.push(M.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 7:
                        e.dolby = Ui.internalBinaryRead(t, t.uint32(), a, e.dolby);
                        break;
                    case 8:
                        e.volume = Zi.internalBinaryRead(t, t.uint32(), a, e.volume);
                        break;
                    case 9:
                        e.lossLessItem = Ci.internalBinaryRead(t, t.uint32(), a, e.lossLessItem);
                        break;
                    case 10:
                        e.supportProject = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.quality !== 0 && n.tag(1, s.Varint).uint32(t.quality), t.format !== "" && n.tag(2, s.LengthDelimited).string(t.format), t.timelength !== 0n && n.tag(3, s.Varint).uint64(t.timelength), t.videoCodecid !== 0 && n.tag(4, s.Varint).uint32(t.videoCodecid);
            for (let e = 0; e < t.streamList.length; e++) Yi.internalBinaryWrite(t.streamList[e], n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.dashAudio.length; e++) M.internalBinaryWrite(t.dashAudio[e], n.tag(6, s.LengthDelimited).fork(), a).join();
            t.dolby && Ui.internalBinaryWrite(t.dolby, n.tag(7, s.LengthDelimited).fork(), a).join(), t.volume && Zi.internalBinaryWrite(t.volume, n.tag(8, s.LengthDelimited).fork(), a).join(), t.lossLessItem && Ci.internalBinaryWrite(t.lossLessItem, n.tag(9, s.LengthDelimited).fork(), a).join(), t.supportProject !== !1 && n.tag(10, s.Varint).bool(t.supportProject);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Xi = new ho, uo = class extends p {
        constructor() {
            super("protos.playershared.VolumeInfo", [{no: 1, name: "measured_i", kind: "scalar", T: 1}, {
                no: 2,
                name: "measured_lra",
                kind: "scalar",
                T: 1
            }, {no: 3, name: "measured_tp", kind: "scalar", T: 1}, {
                no: 4,
                name: "measured_threshold",
                kind: "scalar",
                T: 1
            }, {no: 5, name: "target_offset", kind: "scalar", T: 1}, {
                no: 6,
                name: "target_i",
                kind: "scalar",
                T: 1
            }, {no: 7, name: "target_tp", kind: "scalar", T: 1}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.measuredI = 0, n.measuredLra = 0, n.measuredTp = 0, n.measuredThreshold = 0, n.targetOffset = 0, n.targetI = 0, n.targetTp = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.measuredI = t.double();
                        break;
                    case 2:
                        e.measuredLra = t.double();
                        break;
                    case 3:
                        e.measuredTp = t.double();
                        break;
                    case 4:
                        e.measuredThreshold = t.double();
                        break;
                    case 5:
                        e.targetOffset = t.double();
                        break;
                    case 6:
                        e.targetI = t.double();
                        break;
                    case 7:
                        e.targetTp = t.double();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.measuredI !== 0 && n.tag(1, s.Bit64).double(t.measuredI), t.measuredLra !== 0 && n.tag(2, s.Bit64).double(t.measuredLra), t.measuredTp !== 0 && n.tag(3, s.Bit64).double(t.measuredTp), t.measuredThreshold !== 0 && n.tag(4, s.Bit64).double(t.measuredThreshold), t.targetOffset !== 0 && n.tag(5, s.Bit64).double(t.targetOffset), t.targetI !== 0 && n.tag(6, s.Bit64).double(t.targetI), t.targetTp !== 0 && n.tag(7, s.Bit64).double(t.targetTp);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Zi = new uo;
    var po = class extends p {
        constructor() {
            super("PlayViewUniteReply", [{no: 2, name: "play_arc_conf", kind: "message", T: () => mt}, {
                no: 5,
                name: "supplement",
                kind: "message",
                T: () => _
            }, {no: 9, name: "view_info", kind: "message", T: () => cn}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 2:
                        e.playArcConf = mt.internalBinaryRead(t, t.uint32(), a, e.playArcConf);
                        break;
                    case 5:
                        e.supplement = _.internalBinaryRead(t, t.uint32(), a, e.supplement);
                        break;
                    case 9:
                        e.viewInfo = cn.internalBinaryRead(t, t.uint32(), a, e.viewInfo);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.playArcConf && mt.internalBinaryWrite(t.playArcConf, n.tag(2, s.LengthDelimited).fork(), a).join(), t.supplement && _.internalBinaryWrite(t.supplement, n.tag(5, s.LengthDelimited).fork(), a).join(), t.viewInfo && cn.internalBinaryWrite(t.viewInfo, n.tag(9, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ko = new po;
    var bo = class extends p {
        constructor() {
            super("Item", [{no: 4, name: "linktype", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.linktype = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 4:
                        e.linktype = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.linktype !== "" && n.tag(4, s.LengthDelimited).string(t.linktype);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, go = new bo, mo = class extends p {
        constructor() {
            super("SearchAll", [{no: 4, name: "items", kind: "message", repeat: 1, T: () => go}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.items = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 4:
                        e.items.push(go.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.items.length; e++) go.internalBinaryWrite(t.items[e], n.tag(4, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, yo = new mo;
    var wo = class extends p {
        constructor() {
            super("MainListReply", [{no: 11, name: "cm", kind: "message", T: () => H}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 11:
                        e.cm = H.internalBinaryRead(t, t.uint32(), a, e.cm);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.cm && H.internalBinaryWrite(t.cm, n.tag(11, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, To = new wo;
    var dr;
    (function (o) {
        o[o.NONE = 0] = "NONE", o[o.COMMON = 1] = "COMMON", o[o.ATMOS = 2] = "ATMOS"
    })(dr || (dr = {}));
    var hr;
    (function (o) {
        o[o.DATA_NOT_SET = 0] = "DATA_NOT_SET", o[o.EP_PRE_VIDEO = 2] = "EP_PRE_VIDEO", o[o.EP_INLINE = 3] = "EP_INLINE"
    })(hr || (hr = {}));
    var ur;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.SHOW_TOAST = 1] = "SHOW_TOAST"
    })(ur || (ur = {}));
    var pr;
    (function (o) {
        o[o.NT_UNKNOWN = 0] = "NT_UNKNOWN", o[o.CLIP_TYPE_OP = 1] = "CLIP_TYPE_OP", o[o.CLIP_TYPE_ED = 2] = "CLIP_TYPE_ED", o[o.CLIP_TYPE_HE = 3] = "CLIP_TYPE_HE", o[o.CLIP_TYPE_MULTI_VIEW = 4] = "CLIP_TYPE_MULTI_VIEW", o[o.CLIP_TYPE_AD = 5] = "CLIP_TYPE_AD"
    })(pr || (pr = {}));
    var ws;
    (function (o) {
        o[o.NOCODE = 0] = "NOCODE", o[o.CODE264 = 1] = "CODE264", o[o.CODE265 = 2] = "CODE265"
    })(ws || (ws = {}));
    var kr;
    (function (o) {
        o[o.NON = 0] = "NON", o[o.FAIR_PLAY = 1] = "FAIR_PLAY", o[o.WIDE_VINE = 2] = "WIDE_VINE", o[o.BILI_DRM = 3] = "BILI_DRM"
    })(kr || (kr = {}));
    var Ts;
    (function (o) {
        o[o.PRE = 0] = "PRE", o[o.INLINE = 1] = "INLINE"
    })(Ts || (Ts = {}));
    var Ns;
    (function (o) {
        o[o.UNKNOWN = 0] = "UNKNOWN", o[o.RELATED_EP = 1] = "RELATED_EP", o[o.HE = 2] = "HE", o[o.SKIP = 3] = "SKIP"
    })(Ns || (Ns = {}));
    var gr;
    (function (o) {
        o[o.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", o[o.TYPE_WHOLE = 1] = "TYPE_WHOLE", o[o.TYPE_HE_CLIP = 2] = "TYPE_HE_CLIP", o[o.TYPE_PREVIEW = 3] = "TYPE_PREVIEW"
    })(gr || (gr = {}));
    var Bs;
    (function (o) {
        o[o.LAT_UNKNOWN = 0] = "LAT_UNKNOWN", o[o.SHOW_LIMIT_DIALOG = 1] = "SHOW_LIMIT_DIALOG", o[o.SKIP_CURRENT_EP = 2] = "SKIP_CURRENT_EP"
    })(Bs || (Bs = {}));
    var Ls;
    (function (o) {
        o[o.NoErr = 0] = "NoErr", o[o.WithMultiDeviceLoginErr = 1] = "WithMultiDeviceLoginErr"
    })(Ls || (Ls = {}));
    var vs;
    (function (o) {
        o[o.LEVEL_UNKNOWN = 0] = "LEVEL_UNKNOWN", o[o.LEVEL_L1 = 1] = "LEVEL_L1", o[o.LEVEL_L2 = 2] = "LEVEL_L2", o[o.LEVEL_L3 = 3] = "LEVEL_L3"
    })(vs || (vs = {}));
    var br = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Animation", [{
                no: 1,
                name: "qn_svga_animation_map",
                kind: "map",
                K: 9,
                V: {kind: "scalar", T: 9}
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.qnSvgaAnimationMap = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        this.binaryReadMap1(e.qnSvgaAnimationMap, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap1(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.Animation.qn_svga_animation_map")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            for (let e of globalThis.Object.keys(t.qnSvgaAnimationMap)) n.tag(1, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.qnSvgaAnimationMap[e]).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, No = new br, mr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.AudioMaterialProto", [{
                no: 1,
                name: "audio_id",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "title", kind: "scalar", T: 9}, {no: 3, name: "edition", kind: "scalar", T: 9}, {
                no: 4,
                name: "person_id",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 5, name: "person_name", kind: "scalar", T: 9}, {
                no: 6,
                name: "person_avatar",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "audio", kind: "message", repeat: 1, T: () => st}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.audioId = "", n.title = "", n.edition = "", n.personId = 0n, n.personName = "", n.personAvatar = "", n.audio = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.audioId = t.string();
                        break;
                    case 2:
                        e.title = t.string();
                        break;
                    case 3:
                        e.edition = t.string();
                        break;
                    case 4:
                        e.personId = t.uint64().toBigInt();
                        break;
                    case 5:
                        e.personName = t.string();
                        break;
                    case 6:
                        e.personAvatar = t.string();
                        break;
                    case 7:
                        e.audio.push(st.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.audioId !== "" && n.tag(1, s.LengthDelimited).string(t.audioId), t.title !== "" && n.tag(2, s.LengthDelimited).string(t.title), t.edition !== "" && n.tag(3, s.LengthDelimited).string(t.edition), t.personId !== 0n && n.tag(4, s.Varint).uint64(t.personId), t.personName !== "" && n.tag(5, s.LengthDelimited).string(t.personName), t.personAvatar !== "" && n.tag(6, s.LengthDelimited).string(t.personAvatar);
            for (let e = 0; e < t.audio.length; e++) st.internalBinaryWrite(t.audio[e], n.tag(7, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ut = new mr, yr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.BadgeInfo", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "bg_color",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "bg_color_night", kind: "scalar", T: 9}, {
                no: 4,
                name: "text_color",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "bg_gradient_color", kind: "message", T: () => tt}, {
                no: 6,
                name: "img",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.bgColor = "", n.bgColorNight = "", n.textColor = "", n.img = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.bgColor = t.string();
                        break;
                    case 3:
                        e.bgColorNight = t.string();
                        break;
                    case 4:
                        e.textColor = t.string();
                        break;
                    case 5:
                        e.bgGradientColor = tt.internalBinaryRead(t, t.uint32(), a, e.bgGradientColor);
                        break;
                    case 6:
                        e.img = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.bgColor !== "" && n.tag(2, s.LengthDelimited).string(t.bgColor), t.bgColorNight !== "" && n.tag(3, s.LengthDelimited).string(t.bgColorNight), t.textColor !== "" && n.tag(4, s.LengthDelimited).string(t.textColor), t.bgGradientColor && tt.internalBinaryWrite(t.bgGradientColor, n.tag(5, s.LengthDelimited).fork(), a).join(), t.img !== "" && n.tag(6, s.LengthDelimited).string(t.img);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Et = new yr, wr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.BottomDisplay", [{
                no: 1,
                name: "title",
                kind: "message",
                T: () => D
            }, {no: 2, name: "icon", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.icon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = D.internalBinaryRead(t, t.uint32(), a, e.title);
                        break;
                    case 2:
                        e.icon = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title && D.internalBinaryWrite(t.title, n.tag(1, s.LengthDelimited).fork(), a).join(), t.icon !== "" && n.tag(2, s.LengthDelimited).string(t.icon);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Bo = new wr, Tr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ButtonInfo", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "text_color",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "text_color_night", kind: "scalar", T: 9}, {
                no: 4,
                name: "bg_color",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "bg_color_night", kind: "scalar", T: 9}, {
                no: 6,
                name: "link",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "action_type", kind: "scalar", T: 9}, {
                no: 8,
                name: "badge_info",
                kind: "message",
                T: () => Et
            }, {no: 9, name: "report", kind: "message", T: () => A}, {
                no: 10,
                name: "left_strikethrough_text",
                kind: "scalar",
                T: 9
            }, {no: 11, name: "simple_text_info", kind: "message", T: () => D}, {
                no: 12,
                name: "simple_bg_color",
                kind: "scalar",
                T: 9
            }, {no: 13, name: "simple_bg_color_night", kind: "scalar", T: 9}, {
                no: 14,
                name: "bg_gradient_color",
                kind: "message",
                T: () => tt
            }, {no: 15, name: "order_report_params", kind: "map", K: 9, V: {kind: "scalar", T: 9}}, {
                no: 16,
                name: "task_param",
                kind: "message",
                T: () => sr
            }, {no: 17, name: "pc_link", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.textColor = "", n.textColorNight = "", n.bgColor = "", n.bgColorNight = "", n.link = "", n.actionType = "", n.leftStrikethroughText = "", n.simpleBgColor = "", n.simpleBgColorNight = "", n.orderReportParams = {}, n.pcLink = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.textColor = t.string();
                        break;
                    case 3:
                        e.textColorNight = t.string();
                        break;
                    case 4:
                        e.bgColor = t.string();
                        break;
                    case 5:
                        e.bgColorNight = t.string();
                        break;
                    case 6:
                        e.link = t.string();
                        break;
                    case 7:
                        e.actionType = t.string();
                        break;
                    case 8:
                        e.badgeInfo = Et.internalBinaryRead(t, t.uint32(), a, e.badgeInfo);
                        break;
                    case 9:
                        e.report = A.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 10:
                        e.leftStrikethroughText = t.string();
                        break;
                    case 11:
                        e.simpleTextInfo = D.internalBinaryRead(t, t.uint32(), a, e.simpleTextInfo);
                        break;
                    case 12:
                        e.simpleBgColor = t.string();
                        break;
                    case 13:
                        e.simpleBgColorNight = t.string();
                        break;
                    case 14:
                        e.bgGradientColor = tt.internalBinaryRead(t, t.uint32(), a, e.bgGradientColor);
                        break;
                    case 15:
                        this.binaryReadMap15(e.orderReportParams, t, a);
                        break;
                    case 16:
                        e.taskParam = sr.internalBinaryRead(t, t.uint32(), a, e.taskParam);
                        break;
                    case 17:
                        e.pcLink = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap15(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.ButtonInfo.order_report_params")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.textColor !== "" && n.tag(2, s.LengthDelimited).string(t.textColor), t.textColorNight !== "" && n.tag(3, s.LengthDelimited).string(t.textColorNight), t.bgColor !== "" && n.tag(4, s.LengthDelimited).string(t.bgColor), t.bgColorNight !== "" && n.tag(5, s.LengthDelimited).string(t.bgColorNight), t.link !== "" && n.tag(6, s.LengthDelimited).string(t.link), t.actionType !== "" && n.tag(7, s.LengthDelimited).string(t.actionType), t.badgeInfo && Et.internalBinaryWrite(t.badgeInfo, n.tag(8, s.LengthDelimited).fork(), a).join(), t.report && A.internalBinaryWrite(t.report, n.tag(9, s.LengthDelimited).fork(), a).join(), t.leftStrikethroughText !== "" && n.tag(10, s.LengthDelimited).string(t.leftStrikethroughText), t.simpleTextInfo && D.internalBinaryWrite(t.simpleTextInfo, n.tag(11, s.LengthDelimited).fork(), a).join(), t.simpleBgColor !== "" && n.tag(12, s.LengthDelimited).string(t.simpleBgColor), t.simpleBgColorNight !== "" && n.tag(13, s.LengthDelimited).string(t.simpleBgColorNight), t.bgGradientColor && tt.internalBinaryWrite(t.bgGradientColor, n.tag(14, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.orderReportParams)) n.tag(15, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.orderReportParams[e]).join();
            t.taskParam && sr.internalBinaryWrite(t.taskParam, n.tag(16, s.LengthDelimited).fork(), a).join(), t.pcLink !== "" && n.tag(17, s.LengthDelimited).string(t.pcLink);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, x = new Tr, Nr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.CastTips", [{no: 1, name: "code", kind: "scalar", T: 5}, {
                no: 2,
                name: "message",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.code = 0, n.message = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.code = t.int32();
                        break;
                    case 2:
                        e.message = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.code !== 0 && n.tag(1, s.Varint).int32(t.code), t.message !== "" && n.tag(2, s.LengthDelimited).string(t.message);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Lo = new Nr, Br = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ClipInfo", [{
                no: 1,
                name: "material_no",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "start", kind: "scalar", T: 5}, {no: 3, name: "end", kind: "scalar", T: 5}, {
                no: 4,
                name: "clip_type",
                kind: "enum",
                T: () => ["bilibili.pgc.gateway.player.v2.ClipType", pr]
            }, {no: 5, name: "toast_text", kind: "scalar", T: 9}, {
                no: 6,
                name: "multi_view",
                kind: "message",
                T: () => Go
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.materialNo = 0n, n.start = 0, n.end = 0, n.clipType = 0, n.toastText = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.materialNo = t.int64().toBigInt();
                        break;
                    case 2:
                        e.start = t.int32();
                        break;
                    case 3:
                        e.end = t.int32();
                        break;
                    case 4:
                        e.clipType = t.int32();
                        break;
                    case 5:
                        e.toastText = t.string();
                        break;
                    case 6:
                        e.multiView = Go.internalBinaryRead(t, t.uint32(), a, e.multiView);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.materialNo !== 0n && n.tag(1, s.Varint).int64(t.materialNo), t.start !== 0 && n.tag(2, s.Varint).int32(t.start), t.end !== 0 && n.tag(3, s.Varint).int32(t.end), t.clipType !== 0 && n.tag(4, s.Varint).int32(t.clipType), t.toastText !== "" && n.tag(5, s.LengthDelimited).string(t.toastText), t.multiView && Go.internalBinaryWrite(t.multiView, n.tag(6, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, vo = new Br, Lr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ContinuePlayInfo", [{
                no: 1,
                name: "continue_play_ep_id",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.continuePlayEpId = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.continuePlayEpId = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.continuePlayEpId !== 0n && n.tag(1, s.Varint).int64(t.continuePlayEpId);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Do = new Lr, vr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Coupon", [{no: 1, name: "coupon_token", kind: "scalar", T: 9}, {
                no: 2,
                name: "type",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "value", kind: "scalar", T: 9}, {no: 4, name: "use_desc", kind: "scalar", T: 9}, {
                no: 5,
                name: "title",
                kind: "scalar",
                T: 9
            }, {no: 6, name: "desc", kind: "scalar", T: 9}, {
                no: 7,
                name: "pay_button_text",
                kind: "scalar",
                T: 9
            }, {no: 8, name: "pay_button_text_line_through", kind: "scalar", T: 9}, {
                no: 9,
                name: "real_amount",
                kind: "scalar",
                T: 9
            }, {no: 11, name: "otype", kind: "scalar", T: 3, L: 0}, {no: 12, name: "amount", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.couponToken = "", n.type = 0n, n.value = "", n.useDesc = "", n.title = "", n.desc = "", n.payButtonText = "", n.payButtonTextLineThrough = "", n.realAmount = "", n.otype = 0n, n.amount = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.couponToken = t.string();
                        break;
                    case 2:
                        e.type = t.int64().toBigInt();
                        break;
                    case 3:
                        e.value = t.string();
                        break;
                    case 4:
                        e.useDesc = t.string();
                        break;
                    case 5:
                        e.title = t.string();
                        break;
                    case 6:
                        e.desc = t.string();
                        break;
                    case 7:
                        e.payButtonText = t.string();
                        break;
                    case 8:
                        e.payButtonTextLineThrough = t.string();
                        break;
                    case 9:
                        e.realAmount = t.string();
                        break;
                    case 11:
                        e.otype = t.int64().toBigInt();
                        break;
                    case 12:
                        e.amount = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.couponToken !== "" && n.tag(1, s.LengthDelimited).string(t.couponToken), t.type !== 0n && n.tag(2, s.Varint).int64(t.type), t.value !== "" && n.tag(3, s.LengthDelimited).string(t.value), t.useDesc !== "" && n.tag(4, s.LengthDelimited).string(t.useDesc), t.title !== "" && n.tag(5, s.LengthDelimited).string(t.title), t.desc !== "" && n.tag(6, s.LengthDelimited).string(t.desc), t.payButtonText !== "" && n.tag(7, s.LengthDelimited).string(t.payButtonText), t.payButtonTextLineThrough !== "" && n.tag(8, s.LengthDelimited).string(t.payButtonTextLineThrough), t.realAmount !== "" && n.tag(9, s.LengthDelimited).string(t.realAmount), t.otype !== 0n && n.tag(11, s.Varint).int64(t.otype), t.amount !== "" && n.tag(12, s.LengthDelimited).string(t.amount);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, xo = new vr, Dr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.CouponInfo", [{
                no: 1,
                name: "toast",
                kind: "message",
                T: () => _o
            }, {no: 2, name: "pop_win", kind: "message", T: () => Wt}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.toast = _o.internalBinaryRead(t, t.uint32(), a, e.toast);
                        break;
                    case 2:
                        e.popWin = Wt.internalBinaryRead(t, t.uint32(), a, e.popWin);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.toast && _o.internalBinaryWrite(t.toast, n.tag(1, s.LengthDelimited).fork(), a).join(), t.popWin && Wt.internalBinaryWrite(t.popWin, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ro = new Dr, xr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.CouponTextInfo", [{
                no: 1,
                name: "positive_preview",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "section", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.positivePreview = "", n.section = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.positivePreview = t.string();
                        break;
                    case 2:
                        e.section = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.positivePreview !== "" && n.tag(1, s.LengthDelimited).string(t.positivePreview), t.section !== "" && n.tag(2, s.LengthDelimited).string(t.section);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Io = new xr, Rr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.CouponToast", [{
                no: 1,
                name: "text_info",
                kind: "message",
                T: () => Io
            }, {no: 2, name: "button", kind: "message", T: () => x}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.textInfo = Io.internalBinaryRead(t, t.uint32(), a, e.textInfo);
                        break;
                    case 2:
                        e.button = x.internalBinaryRead(t, t.uint32(), a, e.button);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.textInfo && Io.internalBinaryWrite(t.textInfo, n.tag(1, s.LengthDelimited).fork(), a).join(), t.button && x.internalBinaryWrite(t.button, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, _o = new Rr, Ir = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.DashItem", [{no: 1, name: "id", kind: "scalar", T: 13}, {
                no: 2,
                name: "base_url",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "backup_url", kind: "scalar", repeat: 2, T: 9}, {
                no: 4,
                name: "bandwidth",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "codecid", kind: "scalar", T: 13}, {no: 6, name: "md5", kind: "scalar", T: 9}, {
                no: 7,
                name: "size",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 8, name: "frame_rate", kind: "scalar", T: 9}, {no: 9, name: "widevine_pssh", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.id = 0, n.baseUrl = "", n.backupUrl = [], n.bandwidth = 0, n.codecid = 0, n.md5 = "", n.size = 0n, n.frameRate = "", n.widevinePssh = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.id = t.uint32();
                        break;
                    case 2:
                        e.baseUrl = t.string();
                        break;
                    case 3:
                        e.backupUrl.push(t.string());
                        break;
                    case 4:
                        e.bandwidth = t.uint32();
                        break;
                    case 5:
                        e.codecid = t.uint32();
                        break;
                    case 6:
                        e.md5 = t.string();
                        break;
                    case 7:
                        e.size = t.uint64().toBigInt();
                        break;
                    case 8:
                        e.frameRate = t.string();
                        break;
                    case 9:
                        e.widevinePssh = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.id !== 0 && n.tag(1, s.Varint).uint32(t.id), t.baseUrl !== "" && n.tag(2, s.LengthDelimited).string(t.baseUrl);
            for (let e = 0; e < t.backupUrl.length; e++) n.tag(3, s.LengthDelimited).string(t.backupUrl[e]);
            t.bandwidth !== 0 && n.tag(4, s.Varint).uint32(t.bandwidth), t.codecid !== 0 && n.tag(5, s.Varint).uint32(t.codecid), t.md5 !== "" && n.tag(6, s.LengthDelimited).string(t.md5), t.size !== 0n && n.tag(7, s.Varint).uint64(t.size), t.frameRate !== "" && n.tag(8, s.LengthDelimited).string(t.frameRate), t.widevinePssh !== "" && n.tag(9, s.LengthDelimited).string(t.widevinePssh);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, st = new Ir, _r = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.DashVideo", [{no: 1, name: "base_url", kind: "scalar", T: 9}, {
                no: 2,
                name: "backup_url",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 3, name: "bandwidth", kind: "scalar", T: 13}, {
                no: 4,
                name: "codecid",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "md5", kind: "scalar", T: 9}, {no: 6, name: "size", kind: "scalar", T: 4, L: 0}, {
                no: 7,
                name: "audio_id",
                kind: "scalar",
                T: 13
            }, {no: 8, name: "no_rexcode", kind: "scalar", T: 8}, {
                no: 9,
                name: "frame_rate",
                kind: "scalar",
                T: 9
            }, {no: 10, name: "width", kind: "scalar", T: 5}, {no: 11, name: "height", kind: "scalar", T: 5}, {
                no: 12,
                name: "widevine_pssh",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.baseUrl = "", n.backupUrl = [], n.bandwidth = 0, n.codecid = 0, n.md5 = "", n.size = 0n, n.audioId = 0, n.noRexcode = !1, n.frameRate = "", n.width = 0, n.height = 0, n.widevinePssh = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.baseUrl = t.string();
                        break;
                    case 2:
                        e.backupUrl.push(t.string());
                        break;
                    case 3:
                        e.bandwidth = t.uint32();
                        break;
                    case 4:
                        e.codecid = t.uint32();
                        break;
                    case 5:
                        e.md5 = t.string();
                        break;
                    case 6:
                        e.size = t.uint64().toBigInt();
                        break;
                    case 7:
                        e.audioId = t.uint32();
                        break;
                    case 8:
                        e.noRexcode = t.bool();
                        break;
                    case 9:
                        e.frameRate = t.string();
                        break;
                    case 10:
                        e.width = t.int32();
                        break;
                    case 11:
                        e.height = t.int32();
                        break;
                    case 12:
                        e.widevinePssh = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.baseUrl !== "" && n.tag(1, s.LengthDelimited).string(t.baseUrl);
            for (let e = 0; e < t.backupUrl.length; e++) n.tag(2, s.LengthDelimited).string(t.backupUrl[e]);
            t.bandwidth !== 0 && n.tag(3, s.Varint).uint32(t.bandwidth), t.codecid !== 0 && n.tag(4, s.Varint).uint32(t.codecid), t.md5 !== "" && n.tag(5, s.LengthDelimited).string(t.md5), t.size !== 0n && n.tag(6, s.Varint).uint64(t.size), t.audioId !== 0 && n.tag(7, s.Varint).uint32(t.audioId), t.noRexcode !== !1 && n.tag(8, s.Varint).bool(t.noRexcode), t.frameRate !== "" && n.tag(9, s.LengthDelimited).string(t.frameRate), t.width !== 0 && n.tag(10, s.Varint).int32(t.width), t.height !== 0 && n.tag(11, s.Varint).int32(t.height), t.widevinePssh !== "" && n.tag(12, s.LengthDelimited).string(t.widevinePssh);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Uo = new _r, Ur = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.DataControl", [{
                no: 1,
                name: "need_watch_progress",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.needWatchProgress = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.needWatchProgress = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.needWatchProgress !== !1 && n.tag(1, s.Varint).bool(t.needWatchProgress);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Xp = new Ur, Er = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Dialog", [{no: 1, name: "code", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "msg",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "type", kind: "scalar", T: 9}, {no: 4, name: "style_type", kind: "scalar", T: 9}, {
                no: 5,
                name: "config",
                kind: "message",
                T: () => Eo
            }, {no: 6, name: "title", kind: "message", T: () => D}, {
                no: 7,
                name: "subtitle",
                kind: "message",
                T: () => D
            }, {no: 8, name: "image", kind: "message", T: () => Mo}, {
                no: 9,
                name: "button",
                kind: "message",
                repeat: 1,
                T: () => x
            }, {no: 10, name: "bottom_desc", kind: "message", T: () => x}, {
                no: 11,
                name: "report",
                kind: "message",
                T: () => A
            }, {no: 12, name: "count_down_sec", kind: "scalar", T: 5}, {
                no: 13,
                name: "right_bottom_desc",
                kind: "message",
                T: () => D
            }, {no: 14, name: "bottom_display", kind: "message", repeat: 1, T: () => Bo}, {
                no: 15,
                name: "play_list",
                kind: "message",
                repeat: 1,
                T: () => Ho
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.code = 0n, n.msg = "", n.type = "", n.styleType = "", n.button = [], n.countDownSec = 0, n.bottomDisplay = [], n.playList = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.code = t.int64().toBigInt();
                        break;
                    case 2:
                        e.msg = t.string();
                        break;
                    case 3:
                        e.type = t.string();
                        break;
                    case 4:
                        e.styleType = t.string();
                        break;
                    case 5:
                        e.config = Eo.internalBinaryRead(t, t.uint32(), a, e.config);
                        break;
                    case 6:
                        e.title = D.internalBinaryRead(t, t.uint32(), a, e.title);
                        break;
                    case 7:
                        e.subtitle = D.internalBinaryRead(t, t.uint32(), a, e.subtitle);
                        break;
                    case 8:
                        e.image = Mo.internalBinaryRead(t, t.uint32(), a, e.image);
                        break;
                    case 9:
                        e.button.push(x.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 10:
                        e.bottomDesc = x.internalBinaryRead(t, t.uint32(), a, e.bottomDesc);
                        break;
                    case 11:
                        e.report = A.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 12:
                        e.countDownSec = t.int32();
                        break;
                    case 13:
                        e.rightBottomDesc = D.internalBinaryRead(t, t.uint32(), a, e.rightBottomDesc);
                        break;
                    case 14:
                        e.bottomDisplay.push(Bo.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 15:
                        e.playList.push(Ho.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.code !== 0n && n.tag(1, s.Varint).int64(t.code), t.msg !== "" && n.tag(2, s.LengthDelimited).string(t.msg), t.type !== "" && n.tag(3, s.LengthDelimited).string(t.type), t.styleType !== "" && n.tag(4, s.LengthDelimited).string(t.styleType), t.config && Eo.internalBinaryWrite(t.config, n.tag(5, s.LengthDelimited).fork(), a).join(), t.title && D.internalBinaryWrite(t.title, n.tag(6, s.LengthDelimited).fork(), a).join(), t.subtitle && D.internalBinaryWrite(t.subtitle, n.tag(7, s.LengthDelimited).fork(), a).join(), t.image && Mo.internalBinaryWrite(t.image, n.tag(8, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.button.length; e++) x.internalBinaryWrite(t.button[e], n.tag(9, s.LengthDelimited).fork(), a).join();
            t.bottomDesc && x.internalBinaryWrite(t.bottomDesc, n.tag(10, s.LengthDelimited).fork(), a).join(), t.report && A.internalBinaryWrite(t.report, n.tag(11, s.LengthDelimited).fork(), a).join(), t.countDownSec !== 0 && n.tag(12, s.Varint).int32(t.countDownSec), t.rightBottomDesc && D.internalBinaryWrite(t.rightBottomDesc, n.tag(13, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.bottomDisplay.length; e++) Bo.internalBinaryWrite(t.bottomDisplay[e], n.tag(14, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.playList.length; e++) Ho.internalBinaryWrite(t.playList[e], n.tag(15, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, at = new Er, Wr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.DialogConfig", [{
                no: 1,
                name: "is_show_cover",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "is_orientation_enable", kind: "scalar", T: 8}, {
                no: 3,
                name: "is_nested_scroll_enable",
                kind: "scalar",
                T: 8
            }, {no: 4, name: "is_force_halfscreen_enable", kind: "scalar", T: 8}, {
                no: 5,
                name: "is_background_translucent_enable",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.isShowCover = !1, n.isOrientationEnable = !1, n.isNestedScrollEnable = !1, n.isForceHalfscreenEnable = !1, n.isBackgroundTranslucentEnable = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.isShowCover = t.bool();
                        break;
                    case 2:
                        e.isOrientationEnable = t.bool();
                        break;
                    case 3:
                        e.isNestedScrollEnable = t.bool();
                        break;
                    case 4:
                        e.isForceHalfscreenEnable = t.bool();
                        break;
                    case 5:
                        e.isBackgroundTranslucentEnable = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.isShowCover !== !1 && n.tag(1, s.Varint).bool(t.isShowCover), t.isOrientationEnable !== !1 && n.tag(2, s.Varint).bool(t.isOrientationEnable), t.isNestedScrollEnable !== !1 && n.tag(3, s.Varint).bool(t.isNestedScrollEnable), t.isForceHalfscreenEnable !== !1 && n.tag(4, s.Varint).bool(t.isForceHalfscreenEnable), t.isBackgroundTranslucentEnable !== !1 && n.tag(5, s.Varint).bool(t.isBackgroundTranslucentEnable);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Eo = new Wr, Or = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Dimension", [{no: 1, name: "width", kind: "scalar", T: 5}, {
                no: 2,
                name: "height",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "rotate", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.width = 0, n.height = 0, n.rotate = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.width = t.int32();
                        break;
                    case 2:
                        e.height = t.int32();
                        break;
                    case 3:
                        e.rotate = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.width !== 0 && n.tag(1, s.Varint).int32(t.width), t.height !== 0 && n.tag(2, s.Varint).int32(t.height), t.rotate !== 0 && n.tag(3, s.Varint).int32(t.rotate);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Wo = new Or, Vr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.DolbyItem", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["bilibili.pgc.gateway.player.v2.DolbyItem.Type", dr]
            }, {no: 2, name: "audio", kind: "message", T: () => st}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 2:
                        e.audio = st.internalBinaryRead(t, t.uint32(), a, e.audio);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type), t.audio && st.internalBinaryWrite(t.audio, n.tag(2, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Oo = new Vr, Pr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EndPage", [{
                no: 1,
                name: "dialog",
                kind: "message",
                T: () => at
            }, {no: 2, name: "hide", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.hide = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.dialog = at.internalBinaryRead(t, t.uint32(), a, e.dialog);
                        break;
                    case 2:
                        e.hide = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.dialog && at.internalBinaryWrite(t.dialog, n.tag(1, s.LengthDelimited).fork(), a).join(), t.hide !== !1 && n.tag(2, s.Varint).bool(t.hide);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Vo = new Pr, Fr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EpInlineVideo", [{
                no: 1,
                name: "material_no",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "aid", kind: "scalar", T: 3, L: 0}, {no: 3, name: "cid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.materialNo = 0n, n.aid = 0n, n.cid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.materialNo = t.int64().toBigInt();
                        break;
                    case 2:
                        e.aid = t.int64().toBigInt();
                        break;
                    case 3:
                        e.cid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.materialNo !== 0n && n.tag(1, s.Varint).int64(t.materialNo), t.aid !== 0n && n.tag(2, s.Varint).int64(t.aid), t.cid !== 0n && n.tag(3, s.Varint).int64(t.cid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Po = new Fr, Cr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EpisodeAdvertisementInfo", [{
                no: 1,
                name: "aid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "title", kind: "scalar", T: 9}, {no: 3, name: "link", kind: "scalar", T: 9}, {
                no: 4,
                name: "follow_video_bnt_flag",
                kind: "scalar",
                T: 5
            }, {no: 5, name: "next_video_title", kind: "scalar", T: 9}, {
                no: 6,
                name: "next_video_link",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "cid", kind: "scalar", T: 3, L: 0}, {
                no: 8,
                name: "season_id",
                kind: "scalar",
                T: 5
            }, {no: 9, name: "follow", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.aid = 0n, n.title = "", n.link = "", n.followVideoBntFlag = 0, n.nextVideoTitle = "", n.nextVideoLink = "", n.cid = 0n, n.seasonId = 0, n.follow = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.aid = t.int64().toBigInt();
                        break;
                    case 2:
                        e.title = t.string();
                        break;
                    case 3:
                        e.link = t.string();
                        break;
                    case 4:
                        e.followVideoBntFlag = t.int32();
                        break;
                    case 5:
                        e.nextVideoTitle = t.string();
                        break;
                    case 6:
                        e.nextVideoLink = t.string();
                        break;
                    case 7:
                        e.cid = t.int64().toBigInt();
                        break;
                    case 8:
                        e.seasonId = t.int32();
                        break;
                    case 9:
                        e.follow = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.aid !== 0n && n.tag(1, s.Varint).int64(t.aid), t.title !== "" && n.tag(2, s.LengthDelimited).string(t.title), t.link !== "" && n.tag(3, s.LengthDelimited).string(t.link), t.followVideoBntFlag !== 0 && n.tag(4, s.Varint).int32(t.followVideoBntFlag), t.nextVideoTitle !== "" && n.tag(5, s.LengthDelimited).string(t.nextVideoTitle), t.nextVideoLink !== "" && n.tag(6, s.LengthDelimited).string(t.nextVideoLink), t.cid !== 0n && n.tag(7, s.Varint).int64(t.cid), t.seasonId !== 0 && n.tag(8, s.Varint).int32(t.seasonId), t.follow !== 0 && n.tag(9, s.Varint).int32(t.follow);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Fo = new Cr, Ar = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EpisodeInfo", [{no: 1, name: "ep_id", kind: "scalar", T: 5}, {
                no: 2,
                name: "cid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "aid", kind: "scalar", T: 3, L: 0}, {
                no: 4,
                name: "ep_status",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 5, name: "season_info", kind: "message", T: () => er}, {
                no: 6,
                name: "cover",
                kind: "scalar",
                T: 9
            }, {no: 7, name: "title", kind: "scalar", T: 9}, {
                no: 8,
                name: "interaction",
                kind: "message",
                T: () => Ko
            }, {no: 9, name: "long_title", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.epId = 0, n.cid = 0n, n.aid = 0n, n.epStatus = 0n, n.cover = "", n.title = "", n.longTitle = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.epId = t.int32();
                        break;
                    case 2:
                        e.cid = t.int64().toBigInt();
                        break;
                    case 3:
                        e.aid = t.int64().toBigInt();
                        break;
                    case 4:
                        e.epStatus = t.int64().toBigInt();
                        break;
                    case 5:
                        e.seasonInfo = er.internalBinaryRead(t, t.uint32(), a, e.seasonInfo);
                        break;
                    case 6:
                        e.cover = t.string();
                        break;
                    case 7:
                        e.title = t.string();
                        break;
                    case 8:
                        e.interaction = Ko.internalBinaryRead(t, t.uint32(), a, e.interaction);
                        break;
                    case 9:
                        e.longTitle = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.epId !== 0 && n.tag(1, s.Varint).int32(t.epId), t.cid !== 0n && n.tag(2, s.Varint).int64(t.cid), t.aid !== 0n && n.tag(3, s.Varint).int64(t.aid), t.epStatus !== 0n && n.tag(4, s.Varint).int64(t.epStatus), t.seasonInfo && er.internalBinaryWrite(t.seasonInfo, n.tag(5, s.LengthDelimited).fork(), a).join(), t.cover !== "" && n.tag(6, s.LengthDelimited).string(t.cover), t.title !== "" && n.tag(7, s.LengthDelimited).string(t.title), t.interaction && Ko.internalBinaryWrite(t.interaction, n.tag(8, s.LengthDelimited).fork(), a).join(), t.longTitle !== "" && n.tag(9, s.LengthDelimited).string(t.longTitle);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Co = new Ar, jr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EpPreVideo", [{
                no: 1,
                name: "aid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "cid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.aid = 0n, n.cid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.aid = t.int64().toBigInt();
                        break;
                    case 2:
                        e.cid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.aid !== 0n && n.tag(1, s.Varint).int64(t.aid), t.cid !== 0n && n.tag(2, s.Varint).int64(t.cid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ao = new jr, Sr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EpPublicityVideo", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["bilibili.pgc.gateway.player.v2.EpPublicityVideo.Type", hr]
            }, {no: 2, name: "ep_pre_video", kind: "message", oneof: "data", T: () => Ao}, {
                no: 3,
                name: "ep_inline_video",
                kind: "message",
                oneof: "data",
                T: () => Po
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.type = 0, n.data = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.type = t.int32();
                        break;
                    case 2:
                        e.data = {
                            oneofKind: "epPreVideo",
                            epPreVideo: Ao.internalBinaryRead(t, t.uint32(), a, e.data.epPreVideo)
                        };
                        break;
                    case 3:
                        e.data = {
                            oneofKind: "epInlineVideo",
                            epInlineVideo: Po.internalBinaryRead(t, t.uint32(), a, e.data.epInlineVideo)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.type !== 0 && n.tag(1, s.Varint).int32(t.type), t.data.oneofKind === "epPreVideo" && Ao.internalBinaryWrite(t.data.epPreVideo, n.tag(2, s.LengthDelimited).fork(), a).join(), t.data.oneofKind === "epInlineVideo" && Po.internalBinaryWrite(t.data.epInlineVideo, n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Zp = new Sr, $r = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Event", [{no: 1, name: "shake", kind: "message", T: () => ar}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.shake = ar.internalBinaryRead(t, t.uint32(), a, e.shake);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.shake && ar.internalBinaryWrite(t.shake, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Qp = new $r, Mr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.FreyaConfig", [{no: 1, name: "desc", kind: "scalar", T: 9}, {
                no: 2,
                name: "type",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "issued_cnt", kind: "scalar", T: 5}, {
                no: 4,
                name: "is_always_show",
                kind: "scalar",
                T: 8
            }, {no: 5, name: "screen_number", kind: "scalar", T: 5}, {
                no: 6,
                name: "full_screen_number",
                kind: "scalar",
                T: 5
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.desc = "", n.type = 0, n.issuedCnt = 0, n.isAlwaysShow = !1, n.screenNumber = 0, n.fullScreenNumber = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.desc = t.string();
                        break;
                    case 2:
                        e.type = t.int32();
                        break;
                    case 3:
                        e.issuedCnt = t.int32();
                        break;
                    case 4:
                        e.isAlwaysShow = t.bool();
                        break;
                    case 5:
                        e.screenNumber = t.int32();
                        break;
                    case 6:
                        e.fullScreenNumber = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.desc !== "" && n.tag(1, s.LengthDelimited).string(t.desc), t.type !== 0 && n.tag(2, s.Varint).int32(t.type), t.issuedCnt !== 0 && n.tag(3, s.Varint).int32(t.issuedCnt), t.isAlwaysShow !== !1 && n.tag(4, s.Varint).bool(t.isAlwaysShow), t.screenNumber !== 0 && n.tag(5, s.Varint).int32(t.screenNumber), t.fullScreenNumber !== 0 && n.tag(6, s.Varint).int32(t.fullScreenNumber);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, jo = new Mr, Kr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.GradientColor", [{
                no: 1,
                name: "start_color",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "end_color", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.startColor = "", n.endColor = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.startColor = t.string();
                        break;
                    case 2:
                        e.endColor = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.startColor !== "" && n.tag(1, s.LengthDelimited).string(t.startColor), t.endColor !== "" && n.tag(2, s.LengthDelimited).string(t.endColor);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, tt = new Kr, Gr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.HighDefinitionTrialInfo", [{
                no: 1,
                name: "trial_able",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "remaining_times", kind: "scalar", T: 5}, {
                no: 3,
                name: "start",
                kind: "scalar",
                T: 5
            }, {no: 4, name: "time_length", kind: "scalar", T: 5}, {
                no: 5,
                name: "start_toast",
                kind: "message",
                T: () => P
            }, {no: 6, name: "end_toast", kind: "message", T: () => P}, {
                no: 7,
                name: "report",
                kind: "message",
                T: () => A
            }, {no: 8, name: "quality_open_tip_btn", kind: "message", T: () => x}, {
                no: 9,
                name: "no_longer_trial_btn",
                kind: "message",
                T: () => x
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.trialAble = !1, n.remainingTimes = 0, n.start = 0, n.timeLength = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.trialAble = t.bool();
                        break;
                    case 2:
                        e.remainingTimes = t.int32();
                        break;
                    case 3:
                        e.start = t.int32();
                        break;
                    case 4:
                        e.timeLength = t.int32();
                        break;
                    case 5:
                        e.startToast = P.internalBinaryRead(t, t.uint32(), a, e.startToast);
                        break;
                    case 6:
                        e.endToast = P.internalBinaryRead(t, t.uint32(), a, e.endToast);
                        break;
                    case 7:
                        e.report = A.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 8:
                        e.qualityOpenTipBtn = x.internalBinaryRead(t, t.uint32(), a, e.qualityOpenTipBtn);
                        break;
                    case 9:
                        e.noLongerTrialBtn = x.internalBinaryRead(t, t.uint32(), a, e.noLongerTrialBtn);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.trialAble !== !1 && n.tag(1, s.Varint).bool(t.trialAble), t.remainingTimes !== 0 && n.tag(2, s.Varint).int32(t.remainingTimes), t.start !== 0 && n.tag(3, s.Varint).int32(t.start), t.timeLength !== 0 && n.tag(4, s.Varint).int32(t.timeLength), t.startToast && P.internalBinaryWrite(t.startToast, n.tag(5, s.LengthDelimited).fork(), a).join(), t.endToast && P.internalBinaryWrite(t.endToast, n.tag(6, s.LengthDelimited).fork(), a).join(), t.report && A.internalBinaryWrite(t.report, n.tag(7, s.LengthDelimited).fork(), a).join(), t.qualityOpenTipBtn && x.internalBinaryWrite(t.qualityOpenTipBtn, n.tag(8, s.LengthDelimited).fork(), a).join(), t.noLongerTrialBtn && x.internalBinaryWrite(t.noLongerTrialBtn, n.tag(9, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, So = new Gr, zr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.HistoryNode", [{
                no: 1,
                name: "node_id",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "title", kind: "scalar", T: 9}, {no: 3, name: "cid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.nodeId = 0n, n.title = "", n.cid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.nodeId = t.int64().toBigInt();
                        break;
                    case 2:
                        e.title = t.string();
                        break;
                    case 3:
                        e.cid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.nodeId !== 0n && n.tag(1, s.Varint).int64(t.nodeId), t.title !== "" && n.tag(2, s.LengthDelimited).string(t.title), t.cid !== 0n && n.tag(3, s.Varint).int64(t.cid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, $o = new zr, Yr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ImageInfo", [{no: 1, name: "url", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.url = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.url = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.url !== "" && n.tag(1, s.LengthDelimited).string(t.url);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Mo = new Yr, qr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Interaction", [{
                no: 1,
                name: "history_node",
                kind: "message",
                T: () => $o
            }, {no: 2, name: "graph_version", kind: "scalar", T: 3, L: 0}, {
                no: 3,
                name: "msg",
                kind: "scalar",
                T: 9
            }, {no: 4, name: "is_interaction", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.graphVersion = 0n, n.msg = "", n.isInteraction = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.historyNode = $o.internalBinaryRead(t, t.uint32(), a, e.historyNode);
                        break;
                    case 2:
                        e.graphVersion = t.int64().toBigInt();
                        break;
                    case 3:
                        e.msg = t.string();
                        break;
                    case 4:
                        e.isInteraction = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.historyNode && $o.internalBinaryWrite(t.historyNode, n.tag(1, s.LengthDelimited).fork(), a).join(), t.graphVersion !== 0n && n.tag(2, s.Varint).int64(t.graphVersion), t.msg !== "" && n.tag(3, s.LengthDelimited).string(t.msg), t.isInteraction !== !1 && n.tag(4, s.Varint).bool(t.isInteraction);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ko = new qr, Hr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.MultiView", [{
                no: 1,
                name: "button_material",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "ep_id", kind: "scalar", T: 3, L: 0}, {
                no: 3,
                name: "cid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 4, name: "avid", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.buttonMaterial = "", n.epId = 0n, n.cid = 0n, n.avid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.buttonMaterial = t.string();
                        break;
                    case 2:
                        e.epId = t.int64().toBigInt();
                        break;
                    case 3:
                        e.cid = t.int64().toBigInt();
                        break;
                    case 4:
                        e.avid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.buttonMaterial !== "" && n.tag(1, s.LengthDelimited).string(t.buttonMaterial), t.epId !== 0n && n.tag(2, s.Varint).int64(t.epId), t.cid !== 0n && n.tag(3, s.Varint).int64(t.cid), t.avid !== 0n && n.tag(4, s.Varint).int64(t.avid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Go = new Hr, Jr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PayTip", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "url",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "icon", kind: "scalar", T: 9}, {no: 4, name: "type", kind: "scalar", T: 5}, {
                no: 5,
                name: "show_type",
                kind: "scalar",
                T: 5
            }, {no: 6, name: "img", kind: "scalar", T: 9}, {no: 7, name: "bg_day_color", kind: "scalar", T: 9}, {
                no: 8,
                name: "bg_night_color",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "bg_line_color", kind: "scalar", T: 9}, {
                no: 10,
                name: "bg_night_line_color",
                kind: "scalar",
                T: 9
            }, {no: 11, name: "text_color", kind: "scalar", T: 9}, {
                no: 12,
                name: "text_night_color",
                kind: "scalar",
                T: 9
            }, {no: 13, name: "view_start_time", kind: "scalar", T: 3, L: 0}, {
                no: 14,
                name: "button",
                kind: "message",
                repeat: 1,
                T: () => x
            }, {no: 15, name: "url_open_type", kind: "scalar", T: 5}, {
                no: 16,
                name: "report",
                kind: "message",
                T: () => A
            }, {no: 17, name: "angle_style", kind: "scalar", T: 5}, {
                no: 18,
                name: "report_type",
                kind: "scalar",
                T: 5
            }, {no: 19, name: "order_report_params", kind: "map", K: 9, V: {kind: "scalar", T: 9}}, {
                no: 20,
                name: "giant_screen_img",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.url = "", n.icon = "", n.type = 0, n.showType = 0, n.img = "", n.bgDayColor = "", n.bgNightColor = "", n.bgLineColor = "", n.bgNightLineColor = "", n.textColor = "", n.textNightColor = "", n.viewStartTime = 0n, n.button = [], n.urlOpenType = 0, n.angleStyle = 0, n.reportType = 0, n.orderReportParams = {}, n.giantScreenImg = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.url = t.string();
                        break;
                    case 3:
                        e.icon = t.string();
                        break;
                    case 4:
                        e.type = t.int32();
                        break;
                    case 5:
                        e.showType = t.int32();
                        break;
                    case 6:
                        e.img = t.string();
                        break;
                    case 7:
                        e.bgDayColor = t.string();
                        break;
                    case 8:
                        e.bgNightColor = t.string();
                        break;
                    case 9:
                        e.bgLineColor = t.string();
                        break;
                    case 10:
                        e.bgNightLineColor = t.string();
                        break;
                    case 11:
                        e.textColor = t.string();
                        break;
                    case 12:
                        e.textNightColor = t.string();
                        break;
                    case 13:
                        e.viewStartTime = t.int64().toBigInt();
                        break;
                    case 14:
                        e.button.push(x.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 15:
                        e.urlOpenType = t.int32();
                        break;
                    case 16:
                        e.report = A.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 17:
                        e.angleStyle = t.int32();
                        break;
                    case 18:
                        e.reportType = t.int32();
                        break;
                    case 19:
                        this.binaryReadMap19(e.orderReportParams, t, a);
                        break;
                    case 20:
                        e.giantScreenImg = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap19(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.PayTip.order_report_params")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title), t.url !== "" && n.tag(2, s.LengthDelimited).string(t.url), t.icon !== "" && n.tag(3, s.LengthDelimited).string(t.icon), t.type !== 0 && n.tag(4, s.Varint).int32(t.type), t.showType !== 0 && n.tag(5, s.Varint).int32(t.showType), t.img !== "" && n.tag(6, s.LengthDelimited).string(t.img), t.bgDayColor !== "" && n.tag(7, s.LengthDelimited).string(t.bgDayColor), t.bgNightColor !== "" && n.tag(8, s.LengthDelimited).string(t.bgNightColor), t.bgLineColor !== "" && n.tag(9, s.LengthDelimited).string(t.bgLineColor), t.bgNightLineColor !== "" && n.tag(10, s.LengthDelimited).string(t.bgNightLineColor), t.textColor !== "" && n.tag(11, s.LengthDelimited).string(t.textColor), t.textNightColor !== "" && n.tag(12, s.LengthDelimited).string(t.textNightColor), t.viewStartTime !== 0n && n.tag(13, s.Varint).int64(t.viewStartTime);
            for (let e = 0; e < t.button.length; e++) x.internalBinaryWrite(t.button[e], n.tag(14, s.LengthDelimited).fork(), a).join();
            t.urlOpenType !== 0 && n.tag(15, s.Varint).int32(t.urlOpenType), t.report && A.internalBinaryWrite(t.report, n.tag(16, s.LengthDelimited).fork(), a).join(), t.angleStyle !== 0 && n.tag(17, s.Varint).int32(t.angleStyle), t.reportType !== 0 && n.tag(18, s.Varint).int32(t.reportType);
            for (let e of globalThis.Object.keys(t.orderReportParams)) n.tag(19, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.orderReportParams[e]).join();
            t.giantScreenImg !== "" && n.tag(20, s.LengthDelimited).string(t.giantScreenImg);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, zo = new Jr, Xr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayAbilityConf", [{
                no: 1,
                name: "background_play_disable",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "flip_disable", kind: "scalar", T: 8}, {
                no: 3,
                name: "cast_disable",
                kind: "scalar",
                T: 8
            }, {no: 4, name: "feedback_disable", kind: "scalar", T: 8}, {
                no: 5,
                name: "subtitle_disable",
                kind: "scalar",
                T: 8
            }, {no: 6, name: "playback_rate_disable", kind: "scalar", T: 8}, {
                no: 7,
                name: "time_up_disable",
                kind: "scalar",
                T: 8
            }, {no: 8, name: "playback_mode_disable", kind: "scalar", T: 8}, {
                no: 9,
                name: "scale_mode_disable",
                kind: "scalar",
                T: 8
            }, {no: 10, name: "like_disable", kind: "scalar", T: 8}, {
                no: 11,
                name: "dislike_disable",
                kind: "scalar",
                T: 8
            }, {no: 12, name: "coin_disable", kind: "scalar", T: 8}, {
                no: 13,
                name: "elec_disable",
                kind: "scalar",
                T: 8
            }, {no: 14, name: "share_disable", kind: "scalar", T: 8}, {
                no: 15,
                name: "screen_shot_disable",
                kind: "scalar",
                T: 8
            }, {no: 16, name: "lock_screen_disable", kind: "scalar", T: 8}, {
                no: 17,
                name: "recommend_disable",
                kind: "scalar",
                T: 8
            }, {no: 18, name: "playback_speed_disable", kind: "scalar", T: 8}, {
                no: 19,
                name: "definition_disable",
                kind: "scalar",
                T: 8
            }, {no: 20, name: "selections_disable", kind: "scalar", T: 8}, {
                no: 21,
                name: "next_disable",
                kind: "scalar",
                T: 8
            }, {no: 22, name: "edit_dm_disable", kind: "scalar", T: 8}, {
                no: 23,
                name: "small_window_disable",
                kind: "scalar",
                T: 8
            }, {no: 24, name: "shake_disable", kind: "scalar", T: 8}, {
                no: 25,
                name: "outer_dm_disable",
                kind: "scalar",
                T: 8
            }, {no: 26, name: "inner_dm_disable", kind: "scalar", T: 8}, {
                no: 27,
                name: "freya_enter_disable",
                kind: "scalar",
                T: 8
            }, {no: 28, name: "dolby_disable", kind: "scalar", T: 8}, {
                no: 29,
                name: "freya_full_disable",
                kind: "scalar",
                T: 8
            }, {no: 30, name: "skip_oped_switch_disable", kind: "scalar", T: 8}, {
                no: 31,
                name: "record_screen_disable",
                kind: "scalar",
                T: 8
            }, {no: 32, name: "color_optimize_disable", kind: "scalar", T: 8}, {
                no: 33,
                name: "dubbing_disable",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.backgroundPlayDisable = !1, n.flipDisable = !1, n.castDisable = !1, n.feedbackDisable = !1, n.subtitleDisable = !1, n.playbackRateDisable = !1, n.timeUpDisable = !1, n.playbackModeDisable = !1, n.scaleModeDisable = !1, n.likeDisable = !1, n.dislikeDisable = !1, n.coinDisable = !1, n.elecDisable = !1, n.shareDisable = !1, n.screenShotDisable = !1, n.lockScreenDisable = !1, n.recommendDisable = !1, n.playbackSpeedDisable = !1, n.definitionDisable = !1, n.selectionsDisable = !1, n.nextDisable = !1, n.editDmDisable = !1, n.smallWindowDisable = !1, n.shakeDisable = !1, n.outerDmDisable = !1, n.innerDmDisable = !1, n.freyaEnterDisable = !1, n.dolbyDisable = !1, n.freyaFullDisable = !1, n.skipOpedSwitchDisable = !1, n.recordScreenDisable = !1, n.colorOptimizeDisable = !1, n.dubbingDisable = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.backgroundPlayDisable = t.bool();
                        break;
                    case 2:
                        e.flipDisable = t.bool();
                        break;
                    case 3:
                        e.castDisable = t.bool();
                        break;
                    case 4:
                        e.feedbackDisable = t.bool();
                        break;
                    case 5:
                        e.subtitleDisable = t.bool();
                        break;
                    case 6:
                        e.playbackRateDisable = t.bool();
                        break;
                    case 7:
                        e.timeUpDisable = t.bool();
                        break;
                    case 8:
                        e.playbackModeDisable = t.bool();
                        break;
                    case 9:
                        e.scaleModeDisable = t.bool();
                        break;
                    case 10:
                        e.likeDisable = t.bool();
                        break;
                    case 11:
                        e.dislikeDisable = t.bool();
                        break;
                    case 12:
                        e.coinDisable = t.bool();
                        break;
                    case 13:
                        e.elecDisable = t.bool();
                        break;
                    case 14:
                        e.shareDisable = t.bool();
                        break;
                    case 15:
                        e.screenShotDisable = t.bool();
                        break;
                    case 16:
                        e.lockScreenDisable = t.bool();
                        break;
                    case 17:
                        e.recommendDisable = t.bool();
                        break;
                    case 18:
                        e.playbackSpeedDisable = t.bool();
                        break;
                    case 19:
                        e.definitionDisable = t.bool();
                        break;
                    case 20:
                        e.selectionsDisable = t.bool();
                        break;
                    case 21:
                        e.nextDisable = t.bool();
                        break;
                    case 22:
                        e.editDmDisable = t.bool();
                        break;
                    case 23:
                        e.smallWindowDisable = t.bool();
                        break;
                    case 24:
                        e.shakeDisable = t.bool();
                        break;
                    case 25:
                        e.outerDmDisable = t.bool();
                        break;
                    case 26:
                        e.innerDmDisable = t.bool();
                        break;
                    case 27:
                        e.freyaEnterDisable = t.bool();
                        break;
                    case 28:
                        e.dolbyDisable = t.bool();
                        break;
                    case 29:
                        e.freyaFullDisable = t.bool();
                        break;
                    case 30:
                        e.skipOpedSwitchDisable = t.bool();
                        break;
                    case 31:
                        e.recordScreenDisable = t.bool();
                        break;
                    case 32:
                        e.colorOptimizeDisable = t.bool();
                        break;
                    case 33:
                        e.dubbingDisable = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.backgroundPlayDisable !== !1 && n.tag(1, s.Varint).bool(t.backgroundPlayDisable), t.flipDisable !== !1 && n.tag(2, s.Varint).bool(t.flipDisable), t.castDisable !== !1 && n.tag(3, s.Varint).bool(t.castDisable), t.feedbackDisable !== !1 && n.tag(4, s.Varint).bool(t.feedbackDisable), t.subtitleDisable !== !1 && n.tag(5, s.Varint).bool(t.subtitleDisable), t.playbackRateDisable !== !1 && n.tag(6, s.Varint).bool(t.playbackRateDisable), t.timeUpDisable !== !1 && n.tag(7, s.Varint).bool(t.timeUpDisable), t.playbackModeDisable !== !1 && n.tag(8, s.Varint).bool(t.playbackModeDisable), t.scaleModeDisable !== !1 && n.tag(9, s.Varint).bool(t.scaleModeDisable), t.likeDisable !== !1 && n.tag(10, s.Varint).bool(t.likeDisable), t.dislikeDisable !== !1 && n.tag(11, s.Varint).bool(t.dislikeDisable), t.coinDisable !== !1 && n.tag(12, s.Varint).bool(t.coinDisable), t.elecDisable !== !1 && n.tag(13, s.Varint).bool(t.elecDisable), t.shareDisable !== !1 && n.tag(14, s.Varint).bool(t.shareDisable), t.screenShotDisable !== !1 && n.tag(15, s.Varint).bool(t.screenShotDisable), t.lockScreenDisable !== !1 && n.tag(16, s.Varint).bool(t.lockScreenDisable), t.recommendDisable !== !1 && n.tag(17, s.Varint).bool(t.recommendDisable), t.playbackSpeedDisable !== !1 && n.tag(18, s.Varint).bool(t.playbackSpeedDisable), t.definitionDisable !== !1 && n.tag(19, s.Varint).bool(t.definitionDisable), t.selectionsDisable !== !1 && n.tag(20, s.Varint).bool(t.selectionsDisable), t.nextDisable !== !1 && n.tag(21, s.Varint).bool(t.nextDisable), t.editDmDisable !== !1 && n.tag(22, s.Varint).bool(t.editDmDisable), t.smallWindowDisable !== !1 && n.tag(23, s.Varint).bool(t.smallWindowDisable), t.shakeDisable !== !1 && n.tag(24, s.Varint).bool(t.shakeDisable), t.outerDmDisable !== !1 && n.tag(25, s.Varint).bool(t.outerDmDisable), t.innerDmDisable !== !1 && n.tag(26, s.Varint).bool(t.innerDmDisable), t.freyaEnterDisable !== !1 && n.tag(27, s.Varint).bool(t.freyaEnterDisable), t.dolbyDisable !== !1 && n.tag(28, s.Varint).bool(t.dolbyDisable), t.freyaFullDisable !== !1 && n.tag(29, s.Varint).bool(t.freyaFullDisable), t.skipOpedSwitchDisable !== !1 && n.tag(30, s.Varint).bool(t.skipOpedSwitchDisable), t.recordScreenDisable !== !1 && n.tag(31, s.Varint).bool(t.recordScreenDisable), t.colorOptimizeDisable !== !1 && n.tag(32, s.Varint).bool(t.colorOptimizeDisable), t.dubbingDisable !== !1 && n.tag(33, s.Varint).bool(t.dubbingDisable);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, tk = new Xr, Zr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayAbilityExtConf", [{
                no: 1,
                name: "allow_close_subtitle",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "freya_config", kind: "message", T: () => jo}, {
                no: 3,
                name: "cast_tips",
                kind: "message",
                T: () => Lo
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.allowCloseSubtitle = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.allowCloseSubtitle = t.bool();
                        break;
                    case 2:
                        e.freyaConfig = jo.internalBinaryRead(t, t.uint32(), a, e.freyaConfig);
                        break;
                    case 3:
                        e.castTips = Lo.internalBinaryRead(t, t.uint32(), a, e.castTips);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.allowCloseSubtitle !== !1 && n.tag(1, s.Varint).bool(t.allowCloseSubtitle), t.freyaConfig && jo.internalBinaryWrite(t.freyaConfig, n.tag(2, s.LengthDelimited).fork(), a).join(), t.castTips && Lo.internalBinaryWrite(t.castTips, n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Yo = new Zr, Qr = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayDubbingInfo", [{
                no: 1,
                name: "background_audio",
                kind: "message",
                T: () => Ut
            }, {no: 2, name: "role_audio_list", kind: "message", repeat: 1, T: () => tr}, {
                no: 3,
                name: "guide_text",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.roleAudioList = [], n.guideText = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.backgroundAudio = Ut.internalBinaryRead(t, t.uint32(), a, e.backgroundAudio);
                        break;
                    case 2:
                        e.roleAudioList.push(tr.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 3:
                        e.guideText = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.backgroundAudio && Ut.internalBinaryWrite(t.backgroundAudio, n.tag(1, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.roleAudioList.length; e++) tr.internalBinaryWrite(t.roleAudioList[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            t.guideText !== "" && n.tag(3, s.LengthDelimited).string(t.guideText);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, qo = new Qr, tl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayExtInfo", [{
                no: 1,
                name: "play_dubbing_info",
                kind: "message",
                T: () => qo
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.playDubbingInfo = qo.internalBinaryRead(t, t.uint32(), a, e.playDubbingInfo);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.playDubbingInfo && qo.internalBinaryWrite(t.playDubbingInfo, n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, nk = new tl, nl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayList", [{no: 1, name: "season_id", kind: "scalar", T: 5}, {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "cover", kind: "scalar", T: 9}, {no: 4, name: "link", kind: "scalar", T: 9}, {
                no: 5,
                name: "badge_info",
                kind: "message",
                T: () => Et
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.seasonId = 0, n.title = "", n.cover = "", n.link = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.seasonId = t.int32();
                        break;
                    case 2:
                        e.title = t.string();
                        break;
                    case 3:
                        e.cover = t.string();
                        break;
                    case 4:
                        e.link = t.string();
                        break;
                    case 5:
                        e.badgeInfo = Et.internalBinaryRead(t, t.uint32(), a, e.badgeInfo);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.seasonId !== 0 && n.tag(1, s.Varint).int32(t.seasonId), t.title !== "" && n.tag(2, s.LengthDelimited).string(t.title), t.cover !== "" && n.tag(3, s.LengthDelimited).string(t.cover), t.link !== "" && n.tag(4, s.LengthDelimited).string(t.link), t.badgeInfo && Et.internalBinaryWrite(t.badgeInfo, n.tag(5, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Ho = new nl, el = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo", [{
                no: 1,
                name: "is_preview",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "bp", kind: "scalar", T: 8}, {no: 3, name: "marlin_token", kind: "scalar", T: 9}, {
                no: 4,
                name: "playback_speed_color",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "continue_play_info", kind: "message", T: () => Do}, {
                no: 6,
                name: "clip_info",
                kind: "message",
                repeat: 1,
                T: () => vo
            }, {
                no: 7,
                name: "inline_type",
                kind: "enum",
                T: () => ["bilibili.pgc.gateway.player.v2.InlineType", gr]
            }, {no: 8, name: "ep_whole_duration", kind: "scalar", T: 5}, {
                no: 9,
                name: "dimension",
                kind: "message",
                T: () => Wo
            }, {no: 10, name: "quality_ext_map", kind: "map", K: 5, V: {kind: "message", T: () => dn}}, {
                no: 11,
                name: "exp_map",
                kind: "map",
                K: 9,
                V: {kind: "scalar", T: 5}
            }, {
                no: 12,
                name: "drm_tech_type",
                kind: "enum",
                T: () => ["bilibili.pgc.gateway.player.v2.DrmTechType", kr]
            }, {no: 13, name: "limit_action_type", kind: "scalar", T: 5}, {
                no: 14,
                name: "is_drm",
                kind: "scalar",
                T: 8
            }, {no: 15, name: "record_info", kind: "message", T: () => Xo}, {
                no: 16,
                name: "vip_status",
                kind: "scalar",
                T: 5
            }, {no: 17, name: "is_live_pre", kind: "scalar", T: 8}, {
                no: 18,
                name: "episode_info",
                kind: "message",
                T: () => Co
            }, {no: 19, name: "episode_advertisement_info", kind: "message", T: () => Fo}, {
                no: 20,
                name: "user_status",
                kind: "message",
                T: () => fr
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.isPreview = !1, n.bp = !1, n.marlinToken = "", n.playbackSpeedColor = "", n.clipInfo = [], n.inlineType = 0, n.epWholeDuration = 0, n.qualityExtMap = {}, n.expMap = {}, n.drmTechType = 0, n.limitActionType = 0, n.isDrm = !1, n.vipStatus = 0, n.isLivePre = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.isPreview = t.bool();
                        break;
                    case 2:
                        e.bp = t.bool();
                        break;
                    case 3:
                        e.marlinToken = t.string();
                        break;
                    case 4:
                        e.playbackSpeedColor = t.string();
                        break;
                    case 5:
                        e.continuePlayInfo = Do.internalBinaryRead(t, t.uint32(), a, e.continuePlayInfo);
                        break;
                    case 6:
                        e.clipInfo.push(vo.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 7:
                        e.inlineType = t.int32();
                        break;
                    case 8:
                        e.epWholeDuration = t.int32();
                        break;
                    case 9:
                        e.dimension = Wo.internalBinaryRead(t, t.uint32(), a, e.dimension);
                        break;
                    case 10:
                        this.binaryReadMap10(e.qualityExtMap, t, a);
                        break;
                    case 11:
                        this.binaryReadMap11(e.expMap, t, a);
                        break;
                    case 12:
                        e.drmTechType = t.int32();
                        break;
                    case 13:
                        e.limitActionType = t.int32();
                        break;
                    case 14:
                        e.isDrm = t.bool();
                        break;
                    case 15:
                        e.recordInfo = Xo.internalBinaryRead(t, t.uint32(), a, e.recordInfo);
                        break;
                    case 16:
                        e.vipStatus = t.int32();
                        break;
                    case 17:
                        e.isLivePre = t.bool();
                        break;
                    case 18:
                        e.episodeInfo = Co.internalBinaryRead(t, t.uint32(), a, e.episodeInfo);
                        break;
                    case 19:
                        e.episodeAdvertisementInfo = Fo.internalBinaryRead(t, t.uint32(), a, e.episodeAdvertisementInfo);
                        break;
                    case 20:
                        e.userStatus = fr.internalBinaryRead(t, t.uint32(), a, e.userStatus);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap10(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.int32();
                        break;
                    case 2:
                        l = dn.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.quality_ext_map")
                }
            }
            t[c ?? 0] = l ?? dn.create()
        }

        binaryReadMap11(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.int32();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo.exp_map")
                }
            }
            t[c ?? ""] = l ?? 0
        }

        internalBinaryWrite(t, n, a) {
            t.isPreview !== !1 && n.tag(1, s.Varint).bool(t.isPreview), t.bp !== !1 && n.tag(2, s.Varint).bool(t.bp), t.marlinToken !== "" && n.tag(3, s.LengthDelimited).string(t.marlinToken), t.playbackSpeedColor !== "" && n.tag(4, s.LengthDelimited).string(t.playbackSpeedColor), t.continuePlayInfo && Do.internalBinaryWrite(t.continuePlayInfo, n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.clipInfo.length; e++) vo.internalBinaryWrite(t.clipInfo[e], n.tag(6, s.LengthDelimited).fork(), a).join();
            t.inlineType !== 0 && n.tag(7, s.Varint).int32(t.inlineType), t.epWholeDuration !== 0 && n.tag(8, s.Varint).int32(t.epWholeDuration), t.dimension && Wo.internalBinaryWrite(t.dimension, n.tag(9, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.qualityExtMap)) n.tag(10, s.LengthDelimited).fork().tag(1, s.Varint).int32(parseInt(e)), n.tag(2, s.LengthDelimited).fork(), dn.internalBinaryWrite(t.qualityExtMap[e], n, a), n.join().join();
            for (let e of globalThis.Object.keys(t.expMap)) n.tag(11, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.Varint).int32(t.expMap[e]).join();
            t.drmTechType !== 0 && n.tag(12, s.Varint).int32(t.drmTechType), t.limitActionType !== 0 && n.tag(13, s.Varint).int32(t.limitActionType), t.isDrm !== !1 && n.tag(14, s.Varint).bool(t.isDrm), t.recordInfo && Xo.internalBinaryWrite(t.recordInfo, n.tag(15, s.LengthDelimited).fork(), a).join(), t.vipStatus !== 0 && n.tag(16, s.Varint).int32(t.vipStatus), t.isLivePre !== !1 && n.tag(17, s.Varint).bool(t.isLivePre), t.episodeInfo && Co.internalBinaryWrite(t.episodeInfo, n.tag(18, s.LengthDelimited).fork(), a).join(), t.episodeAdvertisementInfo && Fo.internalBinaryWrite(t.episodeAdvertisementInfo, n.tag(19, s.LengthDelimited).fork(), a).join(), t.userStatus && fr.internalBinaryWrite(t.userStatus, n.tag(20, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ek = new el, il = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayViewReply", [{
                no: 5,
                name: "view_info",
                kind: "message",
                T: () => cr
            }, {no: 6, name: "play_ext_conf", kind: "message", T: () => Yo}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 5:
                        e.viewInfo = cr.internalBinaryRead(t, t.uint32(), a, e.viewInfo);
                        break;
                    case 6:
                        e.playExtConf = Yo.internalBinaryRead(t, t.uint32(), a, e.playExtConf);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.viewInfo && cr.internalBinaryWrite(t.viewInfo, n.tag(5, s.LengthDelimited).fork(), a).join(), t.playExtConf && Yo.internalBinaryWrite(t.playExtConf, n.tag(6, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, xl = new il, al = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PopWin", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "coupon",
                kind: "message",
                repeat: 1,
                T: () => xo
            }, {no: 3, name: "button", kind: "message", repeat: 1, T: () => x}, {
                no: 4,
                name: "bottom_text",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "pop_title", kind: "message", T: () => D}, {
                no: 6,
                name: "subtitle",
                kind: "message",
                T: () => D
            }, {no: 7, name: "bottom_desc", kind: "message", T: () => x}, {
                no: 8,
                name: "cover",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "pop_type", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.coupon = [], n.button = [], n.bottomText = "", n.cover = "", n.popType = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.coupon.push(xo.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 3:
                        e.button.push(x.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 4:
                        e.bottomText = t.string();
                        break;
                    case 5:
                        e.popTitle = D.internalBinaryRead(t, t.uint32(), a, e.popTitle);
                        break;
                    case 6:
                        e.subtitle = D.internalBinaryRead(t, t.uint32(), a, e.subtitle);
                        break;
                    case 7:
                        e.bottomDesc = x.internalBinaryRead(t, t.uint32(), a, e.bottomDesc);
                        break;
                    case 8:
                        e.cover = t.string();
                        break;
                    case 9:
                        e.popType = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title);
            for (let e = 0; e < t.coupon.length; e++) xo.internalBinaryWrite(t.coupon[e], n.tag(2, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.button.length; e++) x.internalBinaryWrite(t.button[e], n.tag(3, s.LengthDelimited).fork(), a).join();
            t.bottomText !== "" && n.tag(4, s.LengthDelimited).string(t.bottomText), t.popTitle && D.internalBinaryWrite(t.popTitle, n.tag(5, s.LengthDelimited).fork(), a).join(), t.subtitle && D.internalBinaryWrite(t.subtitle, n.tag(6, s.LengthDelimited).fork(), a).join(), t.bottomDesc && x.internalBinaryWrite(t.bottomDesc, n.tag(7, s.LengthDelimited).fork(), a).join(), t.cover !== "" && n.tag(8, s.LengthDelimited).string(t.cover), t.popType !== "" && n.tag(9, s.LengthDelimited).string(t.popType);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Wt = new al, ol = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PromptBar", [{
                no: 1,
                name: "title",
                kind: "message",
                T: () => D
            }, {no: 2, name: "sub_title", kind: "message", T: () => D}, {
                no: 3,
                name: "sub_title_icon",
                kind: "scalar",
                T: 9
            }, {no: 4, name: "bg_image", kind: "scalar", T: 9}, {
                no: 5,
                name: "bg_gradient_color",
                kind: "message",
                T: () => tt
            }, {no: 6, name: "button", kind: "message", repeat: 1, T: () => x}, {
                no: 7,
                name: "report",
                kind: "message",
                T: () => A
            }, {no: 8, name: "full_screen_ip_icon", kind: "scalar", T: 9}, {
                no: 9,
                name: "full_screen_bg_gradient_color",
                kind: "message",
                T: () => tt
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.subTitleIcon = "", n.bgImage = "", n.button = [], n.fullScreenIpIcon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = D.internalBinaryRead(t, t.uint32(), a, e.title);
                        break;
                    case 2:
                        e.subTitle = D.internalBinaryRead(t, t.uint32(), a, e.subTitle);
                        break;
                    case 3:
                        e.subTitleIcon = t.string();
                        break;
                    case 4:
                        e.bgImage = t.string();
                        break;
                    case 5:
                        e.bgGradientColor = tt.internalBinaryRead(t, t.uint32(), a, e.bgGradientColor);
                        break;
                    case 6:
                        e.button.push(x.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 7:
                        e.report = A.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 8:
                        e.fullScreenIpIcon = t.string();
                        break;
                    case 9:
                        e.fullScreenBgGradientColor = tt.internalBinaryRead(t, t.uint32(), a, e.fullScreenBgGradientColor);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title && D.internalBinaryWrite(t.title, n.tag(1, s.LengthDelimited).fork(), a).join(), t.subTitle && D.internalBinaryWrite(t.subTitle, n.tag(2, s.LengthDelimited).fork(), a).join(), t.subTitleIcon !== "" && n.tag(3, s.LengthDelimited).string(t.subTitleIcon), t.bgImage !== "" && n.tag(4, s.LengthDelimited).string(t.bgImage), t.bgGradientColor && tt.internalBinaryWrite(t.bgGradientColor, n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.button.length; e++) x.internalBinaryWrite(t.button[e], n.tag(6, s.LengthDelimited).fork(), a).join();
            t.report && A.internalBinaryWrite(t.report, n.tag(7, s.LengthDelimited).fork(), a).join(), t.fullScreenIpIcon !== "" && n.tag(8, s.LengthDelimited).string(t.fullScreenIpIcon), t.fullScreenBgGradientColor && tt.internalBinaryWrite(t.fullScreenBgGradientColor, n.tag(9, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Jo = new ol, rl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.QualityExtInfo", [{
                no: 1,
                name: "trial_support",
                kind: "scalar",
                T: 8
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.trialSupport = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.trialSupport = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.trialSupport !== !1 && n.tag(1, s.Varint).bool(t.trialSupport);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, dn = new rl, ll = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.RecordInfo", [{no: 1, name: "record", kind: "scalar", T: 9}, {
                no: 2,
                name: "record_icon",
                kind: "scalar",
                T: 9
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.record = "", n.recordIcon = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.record = t.string();
                        break;
                    case 2:
                        e.recordIcon = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.record !== "" && n.tag(1, s.LengthDelimited).string(t.record), t.recordIcon !== "" && n.tag(2, s.LengthDelimited).string(t.recordIcon);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Xo = new ll, sl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Report", [{
                no: 1,
                name: "show_event_id",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "click_event_id", kind: "scalar", T: 9}, {no: 3, name: "extends", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.showEventId = "", n.clickEventId = "", n.extends = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.showEventId = t.string();
                        break;
                    case 2:
                        e.clickEventId = t.string();
                        break;
                    case 3:
                        e.extends = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.showEventId !== "" && n.tag(1, s.LengthDelimited).string(t.showEventId), t.clickEventId !== "" && n.tag(2, s.LengthDelimited).string(t.clickEventId), t.extends !== "" && n.tag(3, s.LengthDelimited).string(t.extends);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, A = new sl, fl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ResponseUrl", [{no: 1, name: "order", kind: "scalar", T: 13}, {
                no: 2,
                name: "length",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 3, name: "size", kind: "scalar", T: 4, L: 0}, {no: 4, name: "url", kind: "scalar", T: 9}, {
                no: 5,
                name: "backup_url",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 6, name: "md5", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.order = 0, n.length = 0n, n.size = 0n, n.url = "", n.backupUrl = [], n.md5 = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.order = t.uint32();
                        break;
                    case 2:
                        e.length = t.uint64().toBigInt();
                        break;
                    case 3:
                        e.size = t.uint64().toBigInt();
                        break;
                    case 4:
                        e.url = t.string();
                        break;
                    case 5:
                        e.backupUrl.push(t.string());
                        break;
                    case 6:
                        e.md5 = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.order !== 0 && n.tag(1, s.Varint).uint32(t.order), t.length !== 0n && n.tag(2, s.Varint).uint64(t.length), t.size !== 0n && n.tag(3, s.Varint).uint64(t.size), t.url !== "" && n.tag(4, s.LengthDelimited).string(t.url);
            for (let e = 0; e < t.backupUrl.length; e++) n.tag(5, s.LengthDelimited).string(t.backupUrl[e]);
            t.md5 !== "" && n.tag(6, s.LengthDelimited).string(t.md5);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Zo = new fl, cl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Rights", [{no: 1, name: "can_watch", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.canWatch = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.canWatch = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.canWatch !== 0 && n.tag(1, s.Varint).int32(t.canWatch);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, Qo = new cl, dl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.RoleAudioProto", [{
                no: 1,
                name: "role_id",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 2, name: "role_name", kind: "scalar", T: 9}, {
                no: 3,
                name: "role_avatar",
                kind: "scalar",
                T: 9
            }, {no: 4, name: "audio_material_list", kind: "message", repeat: 1, T: () => Ut}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.roleId = 0n, n.roleName = "", n.roleAvatar = "", n.audioMaterialList = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.roleId = t.int64().toBigInt();
                        break;
                    case 2:
                        e.roleName = t.string();
                        break;
                    case 3:
                        e.roleAvatar = t.string();
                        break;
                    case 4:
                        e.audioMaterialList.push(Ut.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.roleId !== 0n && n.tag(1, s.Varint).int64(t.roleId), t.roleName !== "" && n.tag(2, s.LengthDelimited).string(t.roleName), t.roleAvatar !== "" && n.tag(3, s.LengthDelimited).string(t.roleAvatar);
            for (let e = 0; e < t.audioMaterialList.length; e++) Ut.internalBinaryWrite(t.audioMaterialList[e], n.tag(4, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, tr = new dl, hl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.SceneControl", [{
                no: 1,
                name: "fav_playlist",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "small_window", kind: "scalar", T: 8}, {no: 3, name: "pip", kind: "scalar", T: 8}, {
                no: 4,
                name: "was_he_inline",
                kind: "scalar",
                T: 8
            }, {no: 5, name: "is_need_trial", kind: "scalar", T: 8}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.favPlaylist = !1, n.smallWindow = !1, n.pip = !1, n.wasHeInline = !1, n.isNeedTrial = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.favPlaylist = t.bool();
                        break;
                    case 2:
                        e.smallWindow = t.bool();
                        break;
                    case 3:
                        e.pip = t.bool();
                        break;
                    case 4:
                        e.wasHeInline = t.bool();
                        break;
                    case 5:
                        e.isNeedTrial = t.bool();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.favPlaylist !== !1 && n.tag(1, s.Varint).bool(t.favPlaylist), t.smallWindow !== !1 && n.tag(2, s.Varint).bool(t.smallWindow), t.pip !== !1 && n.tag(3, s.Varint).bool(t.pip), t.wasHeInline !== !1 && n.tag(4, s.Varint).bool(t.wasHeInline), t.isNeedTrial !== !1 && n.tag(5, s.Varint).bool(t.isNeedTrial);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ik = new hl, ul = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Scheme", [{
                no: 1,
                name: "action_type",
                kind: "enum",
                T: () => ["bilibili.pgc.gateway.player.v2.Scheme.ActionType", ur]
            }, {no: 2, name: "toast", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.actionType = 0, n.toast = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.actionType = t.int32();
                        break;
                    case 2:
                        e.toast = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.actionType !== 0 && n.tag(1, s.Varint).int32(t.actionType), t.toast !== "" && n.tag(2, s.LengthDelimited).string(t.toast);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, nr = new ul, pl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.SeasonInfo", [{
                no: 1,
                name: "season_id",
                kind: "scalar",
                T: 5
            }, {no: 2, name: "season_type", kind: "scalar", T: 5}, {
                no: 3,
                name: "season_status",
                kind: "scalar",
                T: 5
            }, {no: 4, name: "cover", kind: "scalar", T: 9}, {no: 5, name: "title", kind: "scalar", T: 9}, {
                no: 6,
                name: "rights",
                kind: "message",
                T: () => Qo
            }, {no: 7, name: "mode", kind: "scalar", T: 5}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.seasonId = 0, n.seasonType = 0, n.seasonStatus = 0, n.cover = "", n.title = "", n.mode = 0, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.seasonId = t.int32();
                        break;
                    case 2:
                        e.seasonType = t.int32();
                        break;
                    case 3:
                        e.seasonStatus = t.int32();
                        break;
                    case 4:
                        e.cover = t.string();
                        break;
                    case 5:
                        e.title = t.string();
                        break;
                    case 6:
                        e.rights = Qo.internalBinaryRead(t, t.uint32(), a, e.rights);
                        break;
                    case 7:
                        e.mode = t.int32();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.seasonId !== 0 && n.tag(1, s.Varint).int32(t.seasonId), t.seasonType !== 0 && n.tag(2, s.Varint).int32(t.seasonType), t.seasonStatus !== 0 && n.tag(3, s.Varint).int32(t.seasonStatus), t.cover !== "" && n.tag(4, s.LengthDelimited).string(t.cover), t.title !== "" && n.tag(5, s.LengthDelimited).string(t.title), t.rights && Qo.internalBinaryWrite(t.rights, n.tag(6, s.LengthDelimited).fork(), a).join(), t.mode !== 0 && n.tag(7, s.Varint).int32(t.mode);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, er = new pl, kl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.SegmentVideo", [{
                no: 1,
                name: "segment",
                kind: "message",
                repeat: 1,
                T: () => Zo
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.segment = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.segment.push(Zo.internalBinaryRead(t, t.uint32(), a));
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            for (let e = 0; e < t.segment.length; e++) Zo.internalBinaryWrite(t.segment[e], n.tag(1, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ir = new kl, gl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Shake", [{no: 1, name: "file", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.file = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.file = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.file !== "" && n.tag(1, s.LengthDelimited).string(t.file);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ar = new gl, bl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Stream", [{no: 1, name: "info", kind: "message", T: () => rr}, {
                no: 2,
                name: "dash_video",
                kind: "message",
                oneof: "content",
                T: () => Uo
            }, {no: 3, name: "segment_video", kind: "message", oneof: "content", T: () => ir}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.content = {oneofKind: void 0}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.info = rr.internalBinaryRead(t, t.uint32(), a, e.info);
                        break;
                    case 2:
                        e.content = {
                            oneofKind: "dashVideo",
                            dashVideo: Uo.internalBinaryRead(t, t.uint32(), a, e.content.dashVideo)
                        };
                        break;
                    case 3:
                        e.content = {
                            oneofKind: "segmentVideo",
                            segmentVideo: ir.internalBinaryRead(t, t.uint32(), a, e.content.segmentVideo)
                        };
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.info && rr.internalBinaryWrite(t.info, n.tag(1, s.LengthDelimited).fork(), a).join(), t.content.oneofKind === "dashVideo" && Uo.internalBinaryWrite(t.content.dashVideo, n.tag(2, s.LengthDelimited).fork(), a).join(), t.content.oneofKind === "segmentVideo" && ir.internalBinaryWrite(t.content.segmentVideo, n.tag(3, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, or = new bl, ml = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.StreamInfo", [{no: 1, name: "quality", kind: "scalar", T: 5}, {
                no: 2,
                name: "format",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "description", kind: "scalar", T: 9}, {
                no: 4,
                name: "err_code",
                kind: "scalar",
                T: 5
            }, {no: 5, name: "limit", kind: "message", T: () => lr}, {
                no: 6,
                name: "need_vip",
                kind: "scalar",
                T: 8
            }, {no: 7, name: "need_login", kind: "scalar", T: 8}, {
                no: 8,
                name: "intact",
                kind: "scalar",
                T: 8
            }, {no: 10, name: "attribute", kind: "scalar", T: 3, L: 0}, {
                no: 11,
                name: "new_description",
                kind: "scalar",
                T: 9
            }, {no: 12, name: "display_desc", kind: "scalar", T: 9}, {
                no: 13,
                name: "superscript",
                kind: "scalar",
                T: 9
            }, {no: 14, name: "scheme", kind: "message", T: () => nr}, {
                no: 15,
                name: "support_drm",
                kind: "scalar",
                T: 8
            }, {no: 16, name: "subtitle", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.quality = 0, n.format = "", n.description = "", n.errCode = 0, n.needVip = !1, n.needLogin = !1, n.intact = !1, n.attribute = 0n, n.newDescription = "", n.displayDesc = "", n.superscript = "", n.supportDrm = !1, n.subtitle = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.quality = t.int32();
                        break;
                    case 2:
                        e.format = t.string();
                        break;
                    case 3:
                        e.description = t.string();
                        break;
                    case 4:
                        e.errCode = t.int32();
                        break;
                    case 5:
                        e.limit = lr.internalBinaryRead(t, t.uint32(), a, e.limit);
                        break;
                    case 6:
                        e.needVip = t.bool();
                        break;
                    case 7:
                        e.needLogin = t.bool();
                        break;
                    case 8:
                        e.intact = t.bool();
                        break;
                    case 10:
                        e.attribute = t.int64().toBigInt();
                        break;
                    case 11:
                        e.newDescription = t.string();
                        break;
                    case 12:
                        e.displayDesc = t.string();
                        break;
                    case 13:
                        e.superscript = t.string();
                        break;
                    case 14:
                        e.scheme = nr.internalBinaryRead(t, t.uint32(), a, e.scheme);
                        break;
                    case 15:
                        e.supportDrm = t.bool();
                        break;
                    case 16:
                        e.subtitle = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.quality !== 0 && n.tag(1, s.Varint).int32(t.quality), t.format !== "" && n.tag(2, s.LengthDelimited).string(t.format), t.description !== "" && n.tag(3, s.LengthDelimited).string(t.description), t.errCode !== 0 && n.tag(4, s.Varint).int32(t.errCode), t.limit && lr.internalBinaryWrite(t.limit, n.tag(5, s.LengthDelimited).fork(), a).join(), t.needVip !== !1 && n.tag(6, s.Varint).bool(t.needVip), t.needLogin !== !1 && n.tag(7, s.Varint).bool(t.needLogin), t.intact !== !1 && n.tag(8, s.Varint).bool(t.intact), t.attribute !== 0n && n.tag(10, s.Varint).int64(t.attribute), t.newDescription !== "" && n.tag(11, s.LengthDelimited).string(t.newDescription), t.displayDesc !== "" && n.tag(12, s.LengthDelimited).string(t.displayDesc), t.superscript !== "" && n.tag(13, s.LengthDelimited).string(t.superscript), t.scheme && nr.internalBinaryWrite(t.scheme, n.tag(14, s.LengthDelimited).fork(), a).join(), t.supportDrm !== !1 && n.tag(15, s.Varint).bool(t.supportDrm), t.subtitle !== "" && n.tag(16, s.LengthDelimited).string(t.subtitle);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, rr = new ml, yl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.StreamLimit", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "msg", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.title = "", n.uri = "", n.msg = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.title = t.string();
                        break;
                    case 2:
                        e.uri = t.string();
                        break;
                    case 3:
                        e.msg = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.title !== "" && n.tag(1, s.LengthDelimited).string(t.title), t.uri !== "" && n.tag(2, s.LengthDelimited).string(t.uri), t.msg !== "" && n.tag(3, s.LengthDelimited).string(t.msg);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, lr = new yl, wl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.TaskParam", [{no: 1, name: "task_type", kind: "scalar", T: 9}, {
                no: 2,
                name: "activity_id",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "tips_id", kind: "scalar", T: 3, L: 0}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.taskType = "", n.activityId = 0n, n.tipsId = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.taskType = t.string();
                        break;
                    case 2:
                        e.activityId = t.int64().toBigInt();
                        break;
                    case 3:
                        e.tipsId = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.taskType !== "" && n.tag(1, s.LengthDelimited).string(t.taskType), t.activityId !== 0n && n.tag(2, s.Varint).int64(t.activityId), t.tipsId !== 0n && n.tag(3, s.Varint).int64(t.tipsId);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, sr = new wl, Tl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.TextInfo", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "text_color",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "text_color_night", kind: "scalar", T: 9}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.textColor = "", n.textColorNight = "", t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.textColor = t.string();
                        break;
                    case 3:
                        e.textColorNight = t.string();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.textColor !== "" && n.tag(2, s.LengthDelimited).string(t.textColor), t.textColorNight !== "" && n.tag(3, s.LengthDelimited).string(t.textColorNight);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, D = new Tl, Nl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.Toast", [{no: 1, name: "text", kind: "scalar", T: 9}, {
                no: 2,
                name: "button",
                kind: "message",
                T: () => x
            }, {no: 3, name: "show_style_type", kind: "scalar", T: 5}, {
                no: 4,
                name: "icon",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "toast_text", kind: "message", T: () => D}, {
                no: 6,
                name: "report",
                kind: "message",
                T: () => A
            }, {no: 7, name: "order_report_params", kind: "map", K: 9, V: {kind: "scalar", T: 9}}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.text = "", n.showStyleType = 0, n.icon = "", n.orderReportParams = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.text = t.string();
                        break;
                    case 2:
                        e.button = x.internalBinaryRead(t, t.uint32(), a, e.button);
                        break;
                    case 3:
                        e.showStyleType = t.int32();
                        break;
                    case 4:
                        e.icon = t.string();
                        break;
                    case 5:
                        e.toastText = D.internalBinaryRead(t, t.uint32(), a, e.toastText);
                        break;
                    case 6:
                        e.report = A.internalBinaryRead(t, t.uint32(), a, e.report);
                        break;
                    case 7:
                        this.binaryReadMap7(e.orderReportParams, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap7(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.Toast.order_report_params")
                }
            }
            t[c ?? ""] = l ?? ""
        }

        internalBinaryWrite(t, n, a) {
            t.text !== "" && n.tag(1, s.LengthDelimited).string(t.text), t.button && x.internalBinaryWrite(t.button, n.tag(2, s.LengthDelimited).fork(), a).join(), t.showStyleType !== 0 && n.tag(3, s.Varint).int32(t.showStyleType), t.icon !== "" && n.tag(4, s.LengthDelimited).string(t.icon), t.toastText && D.internalBinaryWrite(t.toastText, n.tag(5, s.LengthDelimited).fork(), a).join(), t.report && A.internalBinaryWrite(t.report, n.tag(6, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.orderReportParams)) n.tag(7, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.LengthDelimited).string(t.orderReportParams[e]).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, P = new Nl, Bl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.UserStatus", [{
                no: 1,
                name: "pay_check",
                kind: "scalar",
                T: 8
            }, {no: 2, name: "sponsor", kind: "scalar", T: 8}, {
                no: 3,
                name: "watch_progress",
                kind: "message",
                T: () => _t
            }, {no: 4, name: "aid_watch_progress", kind: "message", T: () => _t}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.payCheck = !1, n.sponsor = !1, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.payCheck = t.bool();
                        break;
                    case 2:
                        e.sponsor = t.bool();
                        break;
                    case 3:
                        e.watchProgress = _t.internalBinaryRead(t, t.uint32(), a, e.watchProgress);
                        break;
                    case 4:
                        e.aidWatchProgress = _t.internalBinaryRead(t, t.uint32(), a, e.aidWatchProgress);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.payCheck !== !1 && n.tag(1, s.Varint).bool(t.payCheck), t.sponsor !== !1 && n.tag(2, s.Varint).bool(t.sponsor), t.watchProgress && _t.internalBinaryWrite(t.watchProgress, n.tag(3, s.LengthDelimited).fork(), a).join(), t.aidWatchProgress && _t.internalBinaryWrite(t.aidWatchProgress, n.tag(4, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, fr = new Bl, Ll = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.VideoInfo", [{no: 1, name: "quality", kind: "scalar", T: 13}, {
                no: 2,
                name: "format",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "timelength", kind: "scalar", T: 4, L: 0}, {
                no: 4,
                name: "video_codecid",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "stream_list", kind: "message", repeat: 1, T: () => or}, {
                no: 6,
                name: "dash_audio",
                kind: "message",
                repeat: 1,
                T: () => st
            }, {no: 7, name: "dolby", kind: "message", T: () => Oo}])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.quality = 0, n.format = "", n.timelength = 0n, n.videoCodecid = 0, n.streamList = [], n.dashAudio = [], t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.quality = t.uint32();
                        break;
                    case 2:
                        e.format = t.string();
                        break;
                    case 3:
                        e.timelength = t.uint64().toBigInt();
                        break;
                    case 4:
                        e.videoCodecid = t.uint32();
                        break;
                    case 5:
                        e.streamList.push(or.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 6:
                        e.dashAudio.push(st.internalBinaryRead(t, t.uint32(), a));
                        break;
                    case 7:
                        e.dolby = Oo.internalBinaryRead(t, t.uint32(), a, e.dolby);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.quality !== 0 && n.tag(1, s.Varint).uint32(t.quality), t.format !== "" && n.tag(2, s.LengthDelimited).string(t.format), t.timelength !== 0n && n.tag(3, s.Varint).uint64(t.timelength), t.videoCodecid !== 0 && n.tag(4, s.Varint).uint32(t.videoCodecid);
            for (let e = 0; e < t.streamList.length; e++) or.internalBinaryWrite(t.streamList[e], n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e = 0; e < t.dashAudio.length; e++) st.internalBinaryWrite(t.dashAudio[e], n.tag(6, s.LengthDelimited).fork(), a).join();
            t.dolby && Oo.internalBinaryWrite(t.dolby, n.tag(7, s.LengthDelimited).fork(), a).join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, ak = new Ll, vl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ViewInfo", [{
                no: 1,
                name: "dialog",
                kind: "message",
                T: () => at
            }, {no: 2, name: "toast", kind: "message", T: () => P}, {
                no: 3,
                name: "coupon_info",
                kind: "message",
                T: () => Ro
            }, {no: 4, name: "demand_no_pay_epids", kind: "scalar", repeat: 1, T: 3, L: 0}, {
                no: 5,
                name: "end_page",
                kind: "message",
                T: () => Vo
            }, {no: 6, name: "exp_config", kind: "map", K: 9, V: {kind: "scalar", T: 8}}, {
                no: 7,
                name: "pop_win",
                kind: "message",
                T: () => Wt
            }, {no: 8, name: "try_watch_prompt_bar", kind: "message", T: () => Jo}, {
                no: 9,
                name: "pay_tip",
                kind: "message",
                T: () => zo
            }, {no: 10, name: "high_definition_trial_info", kind: "message", T: () => So}, {
                no: 11,
                name: "ext_dialog",
                kind: "map",
                K: 9,
                V: {kind: "message", T: () => at}
            }, {no: 12, name: "animation", kind: "message", T: () => No}, {
                no: 13,
                name: "ext_toast",
                kind: "map",
                K: 9,
                V: {kind: "message", T: () => P}
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.demandNoPayEpids = [], n.expConfig = {}, n.extDialog = {}, n.extToast = {}, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.dialog = at.internalBinaryRead(t, t.uint32(), a, e.dialog);
                        break;
                    case 2:
                        e.toast = P.internalBinaryRead(t, t.uint32(), a, e.toast);
                        break;
                    case 3:
                        e.couponInfo = Ro.internalBinaryRead(t, t.uint32(), a, e.couponInfo);
                        break;
                    case 4:
                        if (f === s.LengthDelimited) for (let g = t.int32() + t.pos; t.pos < g;) e.demandNoPayEpids.push(t.int64().toBigInt()); else e.demandNoPayEpids.push(t.int64().toBigInt());
                        break;
                    case 5:
                        e.endPage = Vo.internalBinaryRead(t, t.uint32(), a, e.endPage);
                        break;
                    case 6:
                        this.binaryReadMap6(e.expConfig, t, a);
                        break;
                    case 7:
                        e.popWin = Wt.internalBinaryRead(t, t.uint32(), a, e.popWin);
                        break;
                    case 8:
                        e.tryWatchPromptBar = Jo.internalBinaryRead(t, t.uint32(), a, e.tryWatchPromptBar);
                        break;
                    case 9:
                        e.payTip = zo.internalBinaryRead(t, t.uint32(), a, e.payTip);
                        break;
                    case 10:
                        e.highDefinitionTrialInfo = So.internalBinaryRead(t, t.uint32(), a, e.highDefinitionTrialInfo);
                        break;
                    case 11:
                        this.binaryReadMap11(e.extDialog, t, a);
                        break;
                    case 12:
                        e.animation = No.internalBinaryRead(t, t.uint32(), a, e.animation);
                        break;
                    case 13:
                        this.binaryReadMap13(e.extToast, t, a);
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        binaryReadMap6(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = n.bool();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.ViewInfo.exp_config")
                }
            }
            t[c ?? ""] = l ?? !1
        }

        binaryReadMap11(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = at.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.ViewInfo.ext_dialog")
                }
            }
            t[c ?? ""] = l ?? at.create()
        }

        binaryReadMap13(t, n, a) {
            let i = n.uint32(), e = n.pos + i, c, l;
            for (; n.pos < e;) {
                let [f, r] = n.tag();
                switch (f) {
                    case 1:
                        c = n.string();
                        break;
                    case 2:
                        l = P.internalBinaryRead(n, n.uint32(), a);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.pgc.gateway.player.v2.ViewInfo.ext_toast")
                }
            }
            t[c ?? ""] = l ?? P.create()
        }

        internalBinaryWrite(t, n, a) {
            if (t.dialog && at.internalBinaryWrite(t.dialog, n.tag(1, s.LengthDelimited).fork(), a).join(), t.toast && P.internalBinaryWrite(t.toast, n.tag(2, s.LengthDelimited).fork(), a).join(), t.couponInfo && Ro.internalBinaryWrite(t.couponInfo, n.tag(3, s.LengthDelimited).fork(), a).join(), t.demandNoPayEpids.length) {
                n.tag(4, s.LengthDelimited).fork();
                for (let e = 0; e < t.demandNoPayEpids.length; e++) n.int64(t.demandNoPayEpids[e]);
                n.join()
            }
            t.endPage && Vo.internalBinaryWrite(t.endPage, n.tag(5, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.expConfig)) n.tag(6, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e).tag(2, s.Varint).bool(t.expConfig[e]).join();
            t.popWin && Wt.internalBinaryWrite(t.popWin, n.tag(7, s.LengthDelimited).fork(), a).join(), t.tryWatchPromptBar && Jo.internalBinaryWrite(t.tryWatchPromptBar, n.tag(8, s.LengthDelimited).fork(), a).join(), t.payTip && zo.internalBinaryWrite(t.payTip, n.tag(9, s.LengthDelimited).fork(), a).join(), t.highDefinitionTrialInfo && So.internalBinaryWrite(t.highDefinitionTrialInfo, n.tag(10, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.extDialog)) n.tag(11, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e), n.tag(2, s.LengthDelimited).fork(), at.internalBinaryWrite(t.extDialog[e], n, a), n.join().join();
            t.animation && No.internalBinaryWrite(t.animation, n.tag(12, s.LengthDelimited).fork(), a).join();
            for (let e of globalThis.Object.keys(t.extToast)) n.tag(13, s.LengthDelimited).fork().tag(1, s.LengthDelimited).string(e), n.tag(2, s.LengthDelimited).fork(), P.internalBinaryWrite(t.extToast[e], n, a), n.join().join();
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, cr = new vl, Dl = class extends p {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.WatchProgress", [{
                no: 1,
                name: "last_ep_id",
                kind: "scalar",
                T: 5
            }, {no: 2, name: "last_ep_index", kind: "scalar", T: 9}, {
                no: 3,
                name: "progress",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 4, name: "last_play_cid", kind: "scalar", T: 3, L: 0}, {
                no: 5,
                name: "toast",
                kind: "message",
                T: () => P
            }, {no: 6, name: "toast_without_time", kind: "message", T: () => P}, {
                no: 7,
                name: "last_play_aid",
                kind: "scalar",
                T: 3,
                L: 0
            }])
        }

        create(t) {
            let n = globalThis.Object.create(this.messagePrototype);
            return n.lastEpId = 0, n.lastEpIndex = "", n.progress = 0n, n.lastPlayCid = 0n, n.lastPlayAid = 0n, t !== void 0 && u(this, n, t), n
        }

        internalBinaryRead(t, n, a, i) {
            let e = i ?? this.create(), c = t.pos + n;
            for (; t.pos < c;) {
                let [l, f] = t.tag();
                switch (l) {
                    case 1:
                        e.lastEpId = t.int32();
                        break;
                    case 2:
                        e.lastEpIndex = t.string();
                        break;
                    case 3:
                        e.progress = t.int64().toBigInt();
                        break;
                    case 4:
                        e.lastPlayCid = t.int64().toBigInt();
                        break;
                    case 5:
                        e.toast = P.internalBinaryRead(t, t.uint32(), a, e.toast);
                        break;
                    case 6:
                        e.toastWithoutTime = P.internalBinaryRead(t, t.uint32(), a, e.toastWithoutTime);
                        break;
                    case 7:
                        e.lastPlayAid = t.int64().toBigInt();
                        break;
                    default:
                        let r = a.readUnknownField;
                        if (r === "throw") throw new globalThis.Error(`Unknown field ${l} (wire type ${f}) for ${this.typeName}`);
                        let d = t.skip(f);
                        r !== !1 && (r === !0 ? h.onRead : r)(this.typeName, e, l, f, d)
                }
            }
            return e
        }

        internalBinaryWrite(t, n, a) {
            t.lastEpId !== 0 && n.tag(1, s.Varint).int32(t.lastEpId), t.lastEpIndex !== "" && n.tag(2, s.LengthDelimited).string(t.lastEpIndex), t.progress !== 0n && n.tag(3, s.Varint).int64(t.progress), t.lastPlayCid !== 0n && n.tag(4, s.Varint).int64(t.lastPlayCid), t.toast && P.internalBinaryWrite(t.toast, n.tag(5, s.LengthDelimited).fork(), a).join(), t.toastWithoutTime && P.internalBinaryWrite(t.toastWithoutTime, n.tag(6, s.LengthDelimited).fork(), a).join(), t.lastPlayAid !== 0n && n.tag(7, s.Varint).int64(t.lastPlayAid);
            let i = a.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, t, n), n
        }
    }, _t = new Dl;

    function Ds(o) {
        let t = _n.fromBinary(o), n = t.modes.find(a => a.name === "teenagers");
        n?.f5?.f1 && (n.f5.f1 = 0, j(_n, t))
    }

    function xs(o) {
        let t = En.fromBinary(o);
        t.show = "\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u6216up\u4E3B", delete t.word, delete t.goto, delete t.value, delete t.uri, j(En, t)
    }

    function Rs(o) {
        let t = jn.fromBinary(o);
        t.items = t.items.filter(n => !["topicList", "rcmdOneItem"].includes(n.item.oneofKind)), j(jn, t)
    }

    function Is(o, t) {
        let n = Zn.fromBinary(o);
        delete n.topicList, t.showUpList === "false" ? delete n.upList : !t.isHD && t.showUpList !== "true" && (n.upList?.showLiveNum ? n.upList.listSecond.length && (n.upList.listSecond[n.upList.listSecond.length - 1].separator = !0, n.upList.list.unshift(...n.upList.listSecond), n.upList.listSecond.length = 0) : delete n.upList), n.dynamicList.list = n.dynamicList.list.filter(a => ![gt.ad, gt.live_rcmd].includes(a.cardType)), j(Zn, n)
    }

    function _s(o) {
        let t = ge.fromBinary(o);
        delete t.cmConfig, delete t.cmIpad, delete t.label, delete t.reqUser?.elecPlusBtn, t.specialCellNew.length = 0, t.cms.length = 0, t.relates = t.relates.filter(n => !n.cm), j(ge, t)
    }

    function Us(o) {
        let t = ve.fromBinary(o);
        delete t.dm, j(ve, t)
    }

    function Es(o) {
        let t = Ee.fromBinary(o);
        t?.tipsId && (delete t.tfToast, delete t.tfPanelCustomized, j(Ee, t))
    }

    function Ws(o) {
        let t = je.fromBinary(o), n = t.playArc?.backgroundPlayConf;
        n && (!n.isSupport || n.disabled) && (n.isSupport = !0, n.disabled = !1, n.extraContent = null, j(je, t))
    }

    function Os(o) {
        let t = ui.fromBinary(o);
        delete t.cm, delete t.reqUser?.elecPlusBtn, t.tab?.tabModule.forEach(n => {
            if (n.tab.oneofKind !== "introduction") return;
            n.tab.introduction.modules = n.tab.introduction.modules.filter(e => ![ut.SPECIALTAG, ut.PAY_BAR, 55].includes(e.type));
            let a = n.tab.introduction.modules.find(e => e.type === ut.RELATED_RECOMMEND);
            a?.data.oneofKind === "relates" && (a.data.relates.cards = a.data.relates.cards.filter(e => ![lt.GAME, lt.CM_TYPE, lt.LIVE, lt.COURSE].includes(e.relateCardType) && !e.cmStock && !e.basicInfo?.uniqueId));
            let i = n.tab.introduction.modules.find(e => e.type === ut.UGC_HEADLINE);
            i?.data.oneofKind === "headLine" && delete i.data.headLine.label
        }), j(ui, t)
    }

    function Vs(o) {
        let t = yi.fromBinary(o);
        delete t.dm, j(yi, t)
    }

    function Ps(o) {
        let t = Li.fromBinary(o);
        t.relates = t.relates.filter(n => n.relateCardType === lt.AV), j(Li, t)
    }

    function Fs(o) {
        let t = ko.fromBinary(o);
        delete t.viewInfo?.promptBar, t.playArcConf?.arcConf && Object.values(t.playArcConf.arcConf).forEach((n, a) => {
            [9].includes(a) && (n.isSupport = !0, n.disabled = !1, n.extraContent = null, n.unsupportScene.length = 0)
        }), j(ko, t)
    }

    function Cs(o) {
        let t = yo.fromBinary(o);
        t.items = t.items.filter(n => !n.linktype.endsWith("_ad")), j(yo, t)
    }

    function As(o) {
        let t = Te.fromBinary(o);
        t.dmView?.commandDms.length && (t.dmView.commandDms.length = 0), t.activityMeta.length = 0, j(Te, t)
    }

    function js(o) {
        let t = To.fromBinary(o);
        delete t.cm, j(To, t)
    }

    function Ss(o) {
        let t = xl.fromBinary(o);
        t.playExtConf.castTips = {code: 0, message: ""}, delete t.viewInfo.tryWatchPromptBar, j(xl, t)
    }

    var Nf = /(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/, St = class {
        constructor(t = "") {
            if (this.name = "URL v1.0.2", !t) throw new Error("Empty URL");
            this.parse(t)
        }

        parse(t) {
            let {scheme: n, host: a, path: i = "", params: e} = t.match(Nf)?.groups ?? {};
            this.scheme = n, this.host = a, this.path = i, this.params = e ? e.split("&").reduce((c, l) => {
                let [f, r] = l.split("=");
                return c[f] = r, c
            }, {}) : {}
        }

        toString() {
            let t = this.scheme + "://" + this.host + "/" + this.path;
            return this.params && (t += "?" + Object.entries(this.params).reduce((n, [a, i], e) => n + (e ? "&" : "") + a + "=" + i, "")), t
        }
    };
    var $t = dt.getInstance("Bilibili Helper", {debug: !1}), Bf = $t.request.url, $s = $t.request.headers,
        Il = $t.response.bodyBytes;
    Il || $t.exit();
    var Lf = new St(Bf).path,
        vf = typeof $utils == "object" && typeof $utils?.ungzip == "function" ? $utils.ungzip : zl, Df = Il.slice(0, 5),
        Rl = Il.slice(5);
    Df[0] && (Rl = vf(Rl));
    var xf = $s["user-agent"] || $s["User-Agent"],
        Rf = typeof $argument == "string" ? JSON.parse($argument) : typeof $argument == "object" ? $argument : null,
        If = {...Rf, isHD: xf?.includes("bili-hd")}, Ms = {
            "v1.Teenagers/ModeStatus": Ds,
            "v1.Search/DefaultWords": xs,
            "v1.Popular/Index": Rs,
            "v2.Dynamic/DynAll": Is,
            "view.v1.View/View": _s,
            "view.v1.View/ViewProgress": Us,
            "view.v1.View/TFInfo": Es,
            "playurl.v1.PlayURL/PlayView": Ws,
            "viewunite.v1.View/View": Os,
            "viewunite.v1.View/ViewProgress": Vs,
            "viewunite.v1.View/RelatesFeed": Ps,
            "playerunite.v1.Player/PlayViewUnite": Fs,
            "v1.Search/SearchAll": Cs,
            "v1.DM/DmView": As,
            "v1.Reply/MainList": js,
            "v2.PlayURL/PlayView": Ss
        };
    for (let o in Ms) if (Lf.endsWith(o)) {
        Ms[o](Rl, If);
        break
    }
    $t.exit();
})();
