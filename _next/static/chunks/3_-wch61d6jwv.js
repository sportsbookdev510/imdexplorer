(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    709361,
    (t) => {
      let e = BigInt(0xffffffff),
        n = BigInt(32);
      t.s([
        "s",
        0,
        function (t, e, n, i) {
          let s = (e >>> 0) + (i >>> 0);
          return { h: (t + n + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
        },
        "H",
        0,
        (t, e, n, i) => (e + n + i + ((t / 0x100000000) | 0)) | 0,
        "d",
        0,
        (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
        "l",
        0,
        (t, e, n, i, s) => (e + n + i + s + ((t / 0x100000000) | 0)) | 0,
        "Z",
        0,
        (t, e, n, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (i >>> 0),
        "p",
        0,
        (t, e, n, i, s, r) => (e + n + i + s + r + ((t / 0x100000000) | 0)) | 0,
        "c",
        0,
        (t, e, n, i, s) =>
          (t >>> 0) + (e >>> 0) + (n >>> 0) + (i >>> 0) + (s >>> 0),
        "v",
        0,
        (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        "L",
        0,
        (t, e, n) => (t << (n - 32)) | (e >>> (64 - n)),
        "C",
        0,
        (t, e, n) => (t << n) | (e >>> (32 - n)),
        "t",
        0,
        (t, e, n) => (e << n) | (t >>> (32 - n)),
        "u",
        0,
        (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
        "N",
        0,
        (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
        "q",
        0,
        (t, e, n) => (t >>> n) | (e << (32 - n)),
        "h",
        0,
        (t, e, n) => (t << (32 - n)) | (e >>> n),
        "a",
        0,
        (t, e, n) => t >>> n,
        "I",
        0,
        (t, e, n) => (t << (32 - n)) | (e >>> n),
        "$",
        0,
        function (t, i = !1) {
          let s = t.length,
            r = new Uint32Array(s),
            o = new Uint32Array(s);
          for (let a = 0; a < s; a++) {
            let { h: s, l: h } = (function (t, i = !1) {
              return i
                ? { h: Number(t & e), l: Number((t >> n) & e) }
                : { h: 0 | Number((t >> n) & e), l: 0 | Number(t & e) };
            })(t[a], i);
            [r[a], o[a]] = [s, h];
          }
          return [r, o];
        },
      ]);
    },
    44314,
    940893,
    (t) => {
      var e = t.i(470525);
      function n(t, e, n) {
        return (t & e) ^ (~t & n);
      }
      function i(t, e, n) {
        return (t & e) ^ (t & n) ^ (e & n);
      }
      class s extends e.B {
        constructor(t, n, i, s) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = t),
            (this.outputLen = n),
            (this.padOffset = i),
            (this.isLE = s),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, e.y)(this.buffer));
        }
        update(t) {
          (0, e.s)(this), (t = (0, e.D)(t)), (0, e.C)(t);
          let { view: n, buffer: i, blockLen: s } = this,
            r = t.length;
          for (let o = 0; o < r; ) {
            let a = Math.min(s - this.pos, r - o);
            if (a === s) {
              let n = (0, e.y)(t);
              for (; s <= r - o; o += s) this.process(n, o);
              continue;
            }
            i.set(t.subarray(o, o + a), this.pos),
              (this.pos += a),
              (o += a),
              this.pos === s && (this.process(n, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, e.s)(this), (0, e.W)(t, this), (this.finished = !0);
          let { buffer: n, view: i, blockLen: s, isLE: r } = this,
            { pos: o } = this;
          (n[o++] = 128),
            (0, e.f)(this.buffer.subarray(o)),
            this.padOffset > s - o && (this.process(i, 0), (o = 0));
          for (let t = o; t < s; t++) n[t] = 0;
          !(function (t, e, n, i) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, n, i);
            let s = BigInt(32),
              r = BigInt(0xffffffff),
              o = Number((n >> s) & r),
              a = Number(n & r),
              h = 4 * !!i,
              c = 4 * !i;
            t.setUint32(e + h, o, i), t.setUint32(e + c, a, i);
          })(i, s - 8, BigInt(8 * this.length), r),
            this.process(i, 0);
          let a = (0, e.y)(t),
            h = this.outputLen;
          if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = h / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < c; t++) a.setUint32(4 * t, l[t], r);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: n,
            length: i,
            finished: s,
            destroyed: r,
            pos: o,
          } = this;
          return (
            (t.destroyed = r),
            (t.finished = s),
            (t.length = i),
            (t.pos = o),
            i % e && t.buffer.set(n),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let r = Uint32Array.from([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        o = Uint32Array.from([
          0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31,
          0x68581511, 0x64f98fa7, 0xbefa4fa4,
        ]),
        a = Uint32Array.from([
          0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
          0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
          0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
          0xbefa4fa4,
        ]),
        h = Uint32Array.from([
          0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
          0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
          0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
          0x137e2179,
        ]);
      t.s(
        [
          "F",
          0,
          n,
          "u",
          0,
          s,
          "O",
          0,
          i,
          "h",
          0,
          o,
          "n",
          0,
          r,
          "D",
          0,
          a,
          "s",
          0,
          h,
        ],
        940893
      );
      var c = t.i(709361);
      let l = Uint32Array.from([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        f = new Uint32Array(64);
      class u extends s {
        constructor(t = 32) {
          super(64, t, 8, !1),
            (this.A = 0 | r[0]),
            (this.B = 0 | r[1]),
            (this.C = 0 | r[2]),
            (this.D = 0 | r[3]),
            (this.E = 0 | r[4]),
            (this.F = 0 | r[5]),
            (this.G = 0 | r[6]),
            (this.H = 0 | r[7]);
        }
        get() {
          let { A: t, B: e, C: n, D: i, E: s, F: r, G: o, H: a } = this;
          return [t, e, n, i, s, r, o, a];
        }
        set(t, e, n, i, s, r, o, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | i),
            (this.E = 0 | s),
            (this.F = 0 | r),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(t, s) {
          for (let e = 0; e < 16; e++, s += 4) f[e] = t.getUint32(s, !1);
          for (let t = 16; t < 64; t++) {
            let n = f[t - 15],
              i = f[t - 2],
              s = (0, e.M)(n, 7) ^ (0, e.M)(n, 18) ^ (n >>> 3),
              r = (0, e.M)(i, 17) ^ (0, e.M)(i, 19) ^ (i >>> 10);
            f[t] = (r + f[t - 7] + s + f[t - 16]) | 0;
          }
          let { A: r, B: o, C: a, D: h, E: c, F: u, G: d, H: b } = this;
          for (let t = 0; t < 64; t++) {
            let s =
                (b +
                  ((0, e.M)(c, 6) ^ (0, e.M)(c, 11) ^ (0, e.M)(c, 25)) +
                  n(c, u, d) +
                  l[t] +
                  f[t]) |
                0,
              x =
                (((0, e.M)(r, 2) ^ (0, e.M)(r, 13) ^ (0, e.M)(r, 22)) +
                  i(r, o, a)) |
                0;
            (b = d),
              (d = u),
              (u = c),
              (c = (h + s) | 0),
              (h = a),
              (a = o),
              (o = r),
              (r = (s + x) | 0);
          }
          (r = (r + this.A) | 0),
            (o = (o + this.B) | 0),
            (a = (a + this.C) | 0),
            (h = (h + this.D) | 0),
            (c = (c + this.E) | 0),
            (u = (u + this.F) | 0),
            (d = (d + this.G) | 0),
            (b = (b + this.H) | 0),
            this.set(r, o, a, h, c, u, d, b);
        }
        roundClean() {
          (0, e.f)(f);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, e.f)(this.buffer);
        }
      }
      class d extends u {
        constructor() {
          super(28),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
      }
      let b = c.$(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        x = b[0],
        p = b[1],
        g = new Uint32Array(80),
        m = new Uint32Array(80);
      class y extends s {
        constructor(t = 64) {
          super(128, t, 16, !1),
            (this.Ah = 0 | h[0]),
            (this.Al = 0 | h[1]),
            (this.Bh = 0 | h[2]),
            (this.Bl = 0 | h[3]),
            (this.Ch = 0 | h[4]),
            (this.Cl = 0 | h[5]),
            (this.Dh = 0 | h[6]),
            (this.Dl = 0 | h[7]),
            (this.Eh = 0 | h[8]),
            (this.El = 0 | h[9]),
            (this.Fh = 0 | h[10]),
            (this.Fl = 0 | h[11]),
            (this.Gh = 0 | h[12]),
            (this.Gl = 0 | h[13]),
            (this.Hh = 0 | h[14]),
            (this.Hl = 0 | h[15]);
        }
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: n,
            Bl: i,
            Ch: s,
            Cl: r,
            Dh: o,
            Dl: a,
            Eh: h,
            El: c,
            Fh: l,
            Fl: f,
            Gh: u,
            Gl: d,
            Hh: b,
            Hl: x,
          } = this;
          return [t, e, n, i, s, r, o, a, h, c, l, f, u, d, b, x];
        }
        set(t, e, n, i, s, r, o, a, h, c, l, f, u, d, b, x) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | n),
            (this.Bl = 0 | i),
            (this.Ch = 0 | s),
            (this.Cl = 0 | r),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | h),
            (this.El = 0 | c),
            (this.Fh = 0 | l),
            (this.Fl = 0 | f),
            (this.Gh = 0 | u),
            (this.Gl = 0 | d),
            (this.Hh = 0 | b),
            (this.Hl = 0 | x);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4)
            (g[n] = t.getUint32(e)), (m[n] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | g[t - 15],
              n = 0 | m[t - 15],
              i = c.q(e, n, 1) ^ c.q(e, n, 8) ^ c.a(e, n, 7),
              s = c.h(e, n, 1) ^ c.h(e, n, 8) ^ c.I(e, n, 7),
              r = 0 | g[t - 2],
              o = 0 | m[t - 2],
              a = c.q(r, o, 19) ^ c.u(r, o, 61) ^ c.a(r, o, 6),
              h = c.h(r, o, 19) ^ c.N(r, o, 61) ^ c.I(r, o, 6),
              l = c.Z(s, h, m[t - 7], m[t - 16]),
              f = c.l(l, i, a, g[t - 7], g[t - 16]);
            (g[t] = 0 | f), (m[t] = 0 | l);
          }
          let {
            Ah: n,
            Al: i,
            Bh: s,
            Bl: r,
            Ch: o,
            Cl: a,
            Dh: h,
            Dl: l,
            Eh: f,
            El: u,
            Fh: d,
            Fl: b,
            Gh: y,
            Gl: v,
            Hh: w,
            Hl: B,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e = c.q(f, u, 14) ^ c.q(f, u, 18) ^ c.u(f, u, 41),
              I = c.h(f, u, 14) ^ c.h(f, u, 18) ^ c.N(f, u, 41),
              P = (f & d) ^ (~f & y),
              L = (u & b) ^ (~u & v),
              U = c.c(B, I, L, p[t], m[t]),
              $ = c.p(U, w, e, P, x[t], g[t]),
              E = 0 | U,
              C = c.q(n, i, 28) ^ c.u(n, i, 34) ^ c.u(n, i, 39),
              A = c.h(n, i, 28) ^ c.N(n, i, 34) ^ c.N(n, i, 39),
              T = (n & s) ^ (n & o) ^ (s & o),
              F = (i & r) ^ (i & a) ^ (r & a);
            (w = 0 | y),
              (B = 0 | v),
              (y = 0 | d),
              (v = 0 | b),
              (d = 0 | f),
              (b = 0 | u),
              ({ h: f, l: u } = c.s(0 | h, 0 | l, 0 | $, 0 | E)),
              (h = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | r),
              (s = 0 | n),
              (r = 0 | i);
            let k = c.d(E, A, F);
            (n = c.H(k, $, C, T)), (i = 0 | k);
          }
          ({ h: n, l: i } = c.s(0 | this.Ah, 0 | this.Al, 0 | n, 0 | i)),
            ({ h: s, l: r } = c.s(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | r)),
            ({ h: o, l: a } = c.s(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: h, l: l } = c.s(0 | this.Dh, 0 | this.Dl, 0 | h, 0 | l)),
            ({ h: f, l: u } = c.s(0 | this.Eh, 0 | this.El, 0 | f, 0 | u)),
            ({ h: d, l: b } = c.s(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | b)),
            ({ h: y, l: v } = c.s(0 | this.Gh, 0 | this.Gl, 0 | y, 0 | v)),
            ({ h: w, l: B } = c.s(0 | this.Hh, 0 | this.Hl, 0 | w, 0 | B)),
            this.set(n, i, s, r, o, a, h, l, f, u, d, b, y, v, w, B);
        }
        roundClean() {
          (0, e.f)(g, m);
        }
        destroy() {
          (0, e.f)(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      class v extends y {
        constructor() {
          super(48),
            (this.Ah = 0 | a[0]),
            (this.Al = 0 | a[1]),
            (this.Bh = 0 | a[2]),
            (this.Bl = 0 | a[3]),
            (this.Ch = 0 | a[4]),
            (this.Cl = 0 | a[5]),
            (this.Dh = 0 | a[6]),
            (this.Dl = 0 | a[7]),
            (this.Eh = 0 | a[8]),
            (this.El = 0 | a[9]),
            (this.Fh = 0 | a[10]),
            (this.Fl = 0 | a[11]),
            (this.Gh = 0 | a[12]),
            (this.Gl = 0 | a[13]),
            (this.Hh = 0 | a[14]),
            (this.Hl = 0 | a[15]);
        }
      }
      let w = (0, e.O)(() => new u()),
        B = (0, e.O)(() => new d()),
        I = (0, e.O)(() => new y()),
        P = (0, e.O)(() => new v());
      t.s(
        ["h", 0, d, "i", 0, u, "z", 0, B, "E", 0, w, "u", 0, P, "s", 0, I],
        44314
      );
    },
    280355,
    (t) => {
      var e = t.i(44314);
      e.i;
      let n = e.E;
      e.h, e.z, t.s(["f", 0, n]);
    },
    470525,
    (t) => {
      let e =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error("positive integer expected, got " + t);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            "Uint8Array expected of length " + e + ", got length=" + t.length
          );
      }
      let s =
        68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
          ? (t) => t
          : function (t) {
              for (let n = 0; n < t.length; n++) {
                var e;
                t[n] =
                  (((e = t[n]) << 24) & 0xff000000) |
                  ((e << 8) & 0xff0000) |
                  ((e >>> 8) & 65280) |
                  ((e >>> 24) & 255);
              }
              return t;
            };
      function r(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          i(t),
          t
        );
      }
      t.s(
        [
          "B",
          0,
          class {},
          "C",
          0,
          i,
          "s",
          0,
          function (t, e = !0) {
            if (t.destroyed) throw Error("Hash instance has been destroyed");
            if (e && t.finished)
              throw Error("Hash#digest() has already been called");
          },
          "v",
          0,
          function (t) {
            if ("function" != typeof t || "function" != typeof t.create)
              throw Error("Hash should be wrapped by utils.createHasher");
            n(t.outputLen), n(t.blockLen);
          },
          "N",
          0,
          n,
          "W",
          0,
          function (t, e) {
            i(t);
            let n = e.outputLen;
            if (t.length < n)
              throw Error(
                "digestInto() expects output buffer of length at least " + n
              );
          },
          "f",
          0,
          function (...t) {
            for (let e = 0; e < t.length; e++) t[e].fill(0);
          },
          "t",
          0,
          function (...t) {
            let e = 0;
            for (let n = 0; n < t.length; n++) {
              let s = t[n];
              i(s), (e += s.length);
            }
            let n = new Uint8Array(e);
            for (let e = 0, i = 0; e < t.length; e++) {
              let s = t[e];
              n.set(s, i), (i += s.length);
            }
            return n;
          },
          "O",
          0,
          function (t) {
            let e = (e) => t().update(r(e)).digest(),
              n = t();
            return (
              (e.outputLen = n.outputLen),
              (e.blockLen = n.blockLen),
              (e.create = () => t()),
              e
            );
          },
          "y",
          0,
          function (t) {
            return new DataView(t.buffer, t.byteOffset, t.byteLength);
          },
          "i",
          0,
          function (t) {
            let e = (e, n) => t(n).update(r(e)).digest(),
              n = t({});
            return (
              (e.outputLen = n.outputLen),
              (e.blockLen = n.blockLen),
              (e.create = (e) => t(e)),
              e
            );
          },
          "a",
          0,
          function (t = 32) {
            if (e && "function" == typeof e.getRandomValues)
              return e.getRandomValues(new Uint8Array(t));
            if (e && "function" == typeof e.randomBytes)
              return Uint8Array.from(e.randomBytes(t));
            throw Error("crypto.getRandomValues must be defined");
          },
          "g",
          0,
          function (t, e) {
            return (t << e) | ((t >>> (32 - e)) >>> 0);
          },
          "M",
          0,
          function (t, e) {
            return (t << (32 - e)) | (t >>> e);
          },
          "o",
          0,
          s,
          "D",
          0,
          r,
          "b",
          0,
          function (t) {
            return new Uint32Array(
              t.buffer,
              t.byteOffset,
              Math.floor(t.byteLength / 4)
            );
          },
        ],
        470525
      );
    },
    674768,
    (t) => {
      t.s([
        "ia",
        0,
        2n ** (104n - 1n) - 1n,
        "Sd",
        0,
        2n ** (112n - 1n) - 1n,
        "R9",
        0,
        2n ** (120n - 1n) - 1n,
        "Cj",
        0,
        2n ** (128n - 1n) - 1n,
        "eh",
        0,
        2n ** (136n - 1n) - 1n,
        "_5",
        0,
        2n ** (144n - 1n) - 1n,
        "UP",
        0,
        2n ** (152n - 1n) - 1n,
        "$z",
        0,
        2n ** (16n - 1n) - 1n,
        "v8",
        0,
        2n ** (160n - 1n) - 1n,
        "cJ",
        0,
        2n ** (168n - 1n) - 1n,
        "Ps",
        0,
        2n ** (176n - 1n) - 1n,
        "sj",
        0,
        2n ** (184n - 1n) - 1n,
        "$3",
        0,
        2n ** (192n - 1n) - 1n,
        "hM",
        0,
        2n ** (200n - 1n) - 1n,
        "zw",
        0,
        2n ** (208n - 1n) - 1n,
        "Hm",
        0,
        2n ** (216n - 1n) - 1n,
        "fE",
        0,
        2n ** (224n - 1n) - 1n,
        "u7",
        0,
        2n ** (232n - 1n) - 1n,
        "h9",
        0,
        2n ** (24n - 1n) - 1n,
        "B0",
        0,
        2n ** (240n - 1n) - 1n,
        "jv",
        0,
        2n ** (248n - 1n) - 1n,
        "f4",
        0,
        2n ** (256n - 1n) - 1n,
        "hq",
        0,
        2n ** (32n - 1n) - 1n,
        "Ha",
        0,
        2n ** (40n - 1n) - 1n,
        "TF",
        0,
        2n ** (48n - 1n) - 1n,
        "iy",
        0,
        2n ** (56n - 1n) - 1n,
        "AG",
        0,
        2n ** (64n - 1n) - 1n,
        "v$",
        0,
        2n ** (72n - 1n) - 1n,
        "FX",
        0,
        2n ** (8n - 1n) - 1n,
        "xB",
        0,
        2n ** (80n - 1n) - 1n,
        "Sf",
        0,
        2n ** (88n - 1n) - 1n,
        "gt",
        0,
        2n ** (96n - 1n) - 1n,
        "Gg",
        0,
        2n ** 104n - 1n,
        "i1",
        0,
        2n ** 112n - 1n,
        "MI",
        0,
        2n ** 120n - 1n,
        "mi",
        0,
        2n ** 128n - 1n,
        "Vg",
        0,
        2n ** 136n - 1n,
        "fl",
        0,
        2n ** 144n - 1n,
        "fF",
        0,
        2n ** 152n - 1n,
        "XF",
        0,
        2n ** 16n - 1n,
        "qi",
        0,
        2n ** 160n - 1n,
        "H3",
        0,
        2n ** 168n - 1n,
        "pM",
        0,
        2n ** 176n - 1n,
        "hc",
        0,
        2n ** 184n - 1n,
        "Sn",
        0,
        2n ** 192n - 1n,
        "CE",
        0,
        2n ** 200n - 1n,
        "Iv",
        0,
        2n ** 208n - 1n,
        "G",
        0,
        2n ** 216n - 1n,
        "I5",
        0,
        2n ** 224n - 1n,
        "rX",
        0,
        2n ** 232n - 1n,
        "fo",
        0,
        2n ** 24n - 1n,
        "m0",
        0,
        2n ** 240n - 1n,
        "aH",
        0,
        2n ** 248n - 1n,
        "hQ",
        0,
        2n ** 256n - 1n,
        "Ko",
        0,
        2n ** 32n - 1n,
        "NZ",
        0,
        2n ** 40n - 1n,
        "em",
        0,
        2n ** 48n - 1n,
        "b$",
        0,
        2n ** 56n - 1n,
        "sn",
        0,
        2n ** 64n - 1n,
        "K7",
        0,
        2n ** 72n - 1n,
        "qV",
        0,
        2n ** 8n - 1n,
        "oW",
        0,
        2n ** 80n - 1n,
        "$E",
        0,
        2n ** 88n - 1n,
        "py",
        0,
        2n ** 96n - 1n,
        "te",
        0,
        -(2n ** (104n - 1n)),
        "SG",
        0,
        -(2n ** (112n - 1n)),
        "Zh",
        0,
        -(2n ** (120n - 1n)),
        "MZ",
        0,
        -(2n ** (128n - 1n)),
        "hf",
        0,
        -(2n ** (136n - 1n)),
        "zf",
        0,
        -(2n ** (144n - 1n)),
        "uu",
        0,
        -(2n ** (152n - 1n)),
        "RY",
        0,
        -(2n ** (16n - 1n)),
        "Jx",
        0,
        -(2n ** (160n - 1n)),
        "ss",
        0,
        -(2n ** (168n - 1n)),
        "Ax",
        0,
        -(2n ** (176n - 1n)),
        "cW",
        0,
        -(2n ** (184n - 1n)),
        "Rt",
        0,
        -(2n ** (192n - 1n)),
        "is",
        0,
        -(2n ** (200n - 1n)),
        "bX",
        0,
        -(2n ** (208n - 1n)),
        "_p",
        0,
        -(2n ** (216n - 1n)),
        "lf",
        0,
        -(2n ** (224n - 1n)),
        "Xe",
        0,
        -(2n ** (232n - 1n)),
        "VW",
        0,
        -(2n ** (24n - 1n)),
        "oZ",
        0,
        -(2n ** (240n - 1n)),
        "qO",
        0,
        -(2n ** (248n - 1n)),
        "Fg",
        0,
        -(2n ** (256n - 1n)),
        "bI",
        0,
        -(2n ** (32n - 1n)),
        "MX",
        0,
        -(2n ** (40n - 1n)),
        "av",
        0,
        -(2n ** (48n - 1n)),
        "fg",
        0,
        -(2n ** (56n - 1n)),
        "Vn",
        0,
        -(2n ** (64n - 1n)),
        "DI",
        0,
        -(2n ** (72n - 1n)),
        "eS",
        0,
        -(2n ** (8n - 1n)),
        "IJ",
        0,
        -(2n ** (80n - 1n)),
        "qg",
        0,
        -(2n ** (88n - 1n)),
        "Hr",
        0,
        -(2n ** (96n - 1n)),
      ]);
    },
    608861,
    (t) => {
      var e = t.i(569934);
      class n extends e.L {
        constructor({ address: t }) {
          super(`Address "${t}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
      t.s(["f", 0, n]);
    },
    505880,
    (t) => {
      var e = t.i(569934);
      class n extends e.L {
        constructor({ blockNumber: t, chain: e, contract: n }) {
          super(`Chain "${e.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(t && n.blockCreated && n.blockCreated > t
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${t}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class i extends e.L {
        constructor({ chain: t, currentChainId: e }) {
          super(
            `The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${e}`,
                `Expected Chain ID: ${t.id} – ${t.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class s extends e.L {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class r extends e.L {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class o extends e.L {
        constructor({ chainId: t }) {
          super(
            "number" == typeof t
              ? `Chain ID "${t}" is invalid.`
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
      t.s(["m", 0, n, "F", 0, i, "r", 0, s, "L", 0, r, "O", 0, o]);
    },
    393702,
    285973,
    (t) => {
      var e = t.i(657256);
      function n(t, i = "wei") {
        return e.i(t, i);
      }
      t.s(["f", 0, n], 285973);
      var i = t.i(976486),
        s = t.i(569934);
      function r(t) {
        let e = Object.entries(t)
            .map(([t, e]) => (void 0 === e || !1 === e ? null : [t, e]))
            .filter(Boolean),
          n = e.reduce((t, [e]) => Math.max(t, e.length), 0);
        return e.map(([t, e]) => `  ${`${t}:`.padEnd(n + 1)}  ${e}`).join("\n");
      }
      class o extends s.L {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      class a extends s.L {
        constructor({ filledNonce: t, requestedNonce: e }) {
          super(
            "The filled transaction nonce does not match the requested nonce.",
            {
              metaMessages: [`Requested Nonce: ${e}`, `Filled Nonce: ${t}`],
              name: "FeePayerNonceMismatchError",
            }
          );
        }
      }
      class h extends s.L {
        constructor({ v: t }) {
          super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError",
          });
        }
      }
      class c extends s.L {
        constructor({ yParity: t }) {
          super(`Invalid \`yParity\` value "${t}". Expected 0 or 1.`, {
            name: "InvalidYParityError",
          });
        }
      }
      class l extends s.L {
        constructor({ transaction: t }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              r(t),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class f extends s.L {
        constructor({ serializedType: t }) {
          super(`Serialized transaction type "${t}" is invalid.`, {
            name: "InvalidSerializedTransactionType",
          }),
            Object.defineProperty(this, "serializedType", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.serializedType = t);
        }
      }
      class u extends s.L {
        constructor({ attributes: t, serializedTransaction: e, type: n }) {
          let i = Object.entries(t)
            .map(([t, e]) => (void 0 === e ? t : void 0))
            .filter(Boolean);
          super(`Invalid serialized transaction of type "${n}" was provided.`, {
            metaMessages: [
              `Serialized Transaction: "${e}"`,
              i.length > 0 ? `Missing Attributes: ${i.join(", ")}` : "",
            ].filter(Boolean),
            name: "InvalidSerializedTransactionError",
          }),
            Object.defineProperty(this, "serializedTransaction", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "type", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.serializedTransaction = e),
            (this.type = n);
        }
      }
      class d extends s.L {
        constructor({ storageKey: t }) {
          super(
            `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (t.length - 2) / 2
            )} bytes.`,
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class b extends s.L {
        constructor(
          t,
          {
            account: e,
            docsPath: s,
            chain: o,
            data: a,
            gas: h,
            gasPrice: c,
            maxFeePerGas: l,
            maxPriorityFeePerGas: f,
            nonce: u,
            to: d,
            value: b,
          }
        ) {
          let x = r({
            chain: o && `${o?.name} (id: ${o?.id})`,
            from: e?.address,
            to: d,
            value:
              void 0 !== b && `${n(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
            data: a,
            gas: h,
            gasPrice: void 0 !== c && `${(0, i.f)(c)} gwei`,
            maxFeePerGas: void 0 !== l && `${(0, i.f)(l)} gwei`,
            maxPriorityFeePerGas: void 0 !== f && `${(0, i.f)(f)} gwei`,
            nonce: u,
          });
          super(t.shortMessage, {
            cause: t,
            docsPath: s,
            metaMessages: [
              ...(t.metaMessages ? [...t.metaMessages, " "] : []),
              "Request Arguments:",
              x,
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = t);
        }
      }
      class x extends s.L {
        constructor({
          blockHash: t,
          blockNumber: e,
          blockTag: n,
          hash: i,
          index: s,
        }) {
          let r = "Transaction";
          n &&
            void 0 !== s &&
            (r = `Transaction at block time "${n}" at index "${s}"`),
            t &&
              void 0 !== s &&
              (r = `Transaction at block hash "${t}" at index "${s}"`),
            e &&
              void 0 !== s &&
              (r = `Transaction at block number "${e}" at index "${s}"`),
            i && (r = `Transaction with hash "${i}"`),
            super(`${r} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class p extends s.L {
        constructor({ hash: t }) {
          super(
            `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class g extends s.L {
        constructor({ receipt: t }) {
          super(`Transaction with hash "${t.transactionHash}" reverted.`, {
            metaMessages: [
              'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
              " ",
              "You can attempt to extract the revert reason by:",
              "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
              "- using the `call` Action with raw `data`",
            ],
            name: "TransactionReceiptRevertedError",
          }),
            Object.defineProperty(this, "receipt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.receipt = t);
        }
      }
      class m extends s.L {
        constructor({ hash: t }) {
          super(
            `Timed out while waiting for transaction with hash "${t}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
      t.s(
        [
          "T",
          0,
          o,
          "b",
          0,
          a,
          "t",
          0,
          h,
          "v",
          0,
          l,
          "M",
          0,
          u,
          "Q",
          0,
          f,
          "J",
          0,
          d,
          "n",
          0,
          c,
          "U",
          0,
          b,
          "z",
          0,
          x,
          "r",
          0,
          p,
          "E",
          0,
          g,
          "K",
          0,
          m,
          "P",
          0,
          r,
        ],
        393702
      );
    },
    823838,
    (t) => {
      t.s(["b", () => a, "A", () => h]);
      var e = t.i(608861),
        n = t.i(769936),
        i = t.i(831095),
        s = t.i(976677),
        r = t.i(796516);
      let o = new s.f(8192);
      function a(t, e) {
        if (o.has(`${t}.${e}`)) return o.get(`${t}.${e}`);
        let s = e ? `${e}${t.toLowerCase()}` : t.substring(2).toLowerCase(),
          r = (0, i.f)((0, n.T)(s), "bytes"),
          a = (e ? s.substring(`${e}0x`.length) : s).split("");
        for (let t = 0; t < 40; t += 2)
          r[t >> 1] >> 4 >= 8 && a[t] && (a[t] = a[t].toUpperCase()),
            (15 & r[t >> 1]) >= 8 &&
              a[t + 1] &&
              (a[t + 1] = a[t + 1].toUpperCase());
        let h = `0x${a.join("")}`;
        return o.set(`${t}.${e}`, h), h;
      }
      function h(t, n) {
        if (!(0, r.f)(t, { strict: !1 })) throw new e.f({ address: t });
        return a(t, n);
      }
    },
    796516,
    (t) => {
      t.s(["f", () => r]);
      var e = t.i(976677),
        n = t.i(823838);
      let i = /^0x[a-fA-F0-9]{40}$/,
        s = new e.f(8192);
      function r(t, e) {
        let { strict: r = !0 } = e ?? {},
          o = `${t}.${r}`;
        if (s.has(o)) return s.get(o);
        let a =
          !!i.test(t) && (t.toLowerCase() === t || !r || (0, n.b)(t) === t);
        return s.set(o, a), a;
      }
    },
    94371,
    49810,
    (t) => {
      var e = t.i(769936),
        n = t.i(675107);
      t.s(
        [
          "f",
          0,
          function (t) {
            let { kzg: i } = t,
              s = t.to ?? ("string" == typeof t.blobs[0] ? "hex" : "bytes"),
              r =
                "string" == typeof t.blobs[0]
                  ? t.blobs.map((t) => (0, e.X)(t))
                  : t.blobs,
              o = [];
            for (let t of r) o.push(Uint8Array.from(i.blobToKzgCommitment(t)));
            return "bytes" === s ? o : o.map((t) => (0, n.v)(t));
          },
        ],
        94371
      ),
        t.s(
          [
            "f",
            0,
            function (t) {
              let { kzg: i } = t,
                s = t.to ?? ("string" == typeof t.blobs[0] ? "hex" : "bytes"),
                r =
                  "string" == typeof t.blobs[0]
                    ? t.blobs.map((t) => (0, e.X)(t))
                    : t.blobs,
                o =
                  "string" == typeof t.commitments[0]
                    ? t.commitments.map((t) => (0, e.X)(t))
                    : t.commitments,
                a = [];
              for (let t = 0; t < r.length; t++) {
                let e = r[t],
                  n = o[t];
                a.push(Uint8Array.from(i.computeBlobKzgProof(e, n)));
              }
              return "bytes" === s ? a : a.map((t) => (0, n.v)(t));
            },
          ],
          49810
        );
    },
    883031,
    862243,
    913028,
    556047,
    86741,
    408910,
    310538,
    576213,
    (t) => {
      var e = t.i(675107),
        n = t.i(280355),
        i = t.i(880841),
        s = t.i(769936);
      function r(t, r) {
        let o = (0, n.f)((0, i.f)(t, { strict: !1 }) ? (0, s.D)(t) : t);
        return "bytes" === (r || "hex") ? o : (0, e.g)(o);
      }
      function o(t) {
        let { commitment: n, version: i = 1 } = t,
          s = t.to ?? ("string" == typeof n ? "hex" : "bytes"),
          o = r(n, "bytes");
        return o.set([i], 0), "bytes" === s ? o : (0, e.v)(o);
      }
      t.s(["f", 0, r], 862243),
        t.s(["f", 0, o], 913028),
        t.s(
          [
            "f",
            0,
            function (t) {
              let { commitments: e, version: n } = t,
                i = t.to ?? ("string" == typeof e[0] ? "hex" : "bytes"),
                s = [];
              for (let t of e) s.push(o({ commitment: t, to: i, version: n }));
              return s;
            },
          ],
          883031
        );
      var a = t.i(94371),
        h = t.i(49810);
      t.s(["f", 0, 1], 556047);
      var c = t.i(569934);
      class l extends c.L {
        constructor({ maxSize: t, size: e }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${e} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class f extends c.L {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      class u extends c.L {
        constructor({ hash: t, size: e }) {
          super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${e}`],
            name: "InvalidVersionedHashSizeError",
          });
        }
      }
      class d extends c.L {
        constructor({ hash: t, version: e }) {
          super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: ["Expected: 1", `Received: ${e}`],
            name: "InvalidVersionedHashVersionError",
          });
        }
      }
      t.s(["G", 0, l, "h", 0, f, "S", 0, u, "t", 0, d], 86741);
      var b = t.i(795),
        x = t.i(401319);
      function p(t) {
        let n = t.to ?? ("string" == typeof t.data ? "hex" : "bytes"),
          i = "string" == typeof t.data ? (0, s.X)(t.data) : t.data,
          r = (0, x.f)(i);
        if (!r) throw new f();
        if (r > 761855) throw new l({ maxSize: 761855, size: r });
        let o = [],
          a = !0,
          h = 0;
        for (; a; ) {
          let t = (0, b.f)(new Uint8Array(131072)),
            e = 0;
          for (; e < 4096; ) {
            let n = i.slice(h, h + 31);
            if ((t.pushByte(0), t.pushBytes(n), n.length < 31)) {
              t.pushByte(128), (a = !1);
              break;
            }
            e++, (h += 31);
          }
          o.push(t);
        }
        return "bytes" === n
          ? o.map((t) => t.bytes)
          : o.map((t) => (0, e.v)(t.bytes));
      }
      t.s(["f", 0, p], 408910),
        t.s(
          [
            "f",
            0,
            function (t) {
              let { data: e, kzg: n, to: i } = t,
                s = t.blobs ?? p({ data: e, to: i }),
                r = t.commitments ?? (0, a.f)({ blobs: s, kzg: n, to: i }),
                o =
                  t.proofs ??
                  (0, h.f)({ blobs: s, commitments: r, kzg: n, to: i }),
                c = [];
              for (let t = 0; t < s.length; t++)
                c.push({ blob: s[t], commitment: r[t], proof: o[t] });
              return c;
            },
          ],
          310538
        );
      var g = t.i(393702);
      t.s(
        [
          "f",
          0,
          function (t) {
            if (t.type) return t.type;
            if (void 0 !== t.authorizationList) return "eip7702";
            if (
              void 0 !== t.blobs ||
              void 0 !== t.blobVersionedHashes ||
              void 0 !== t.maxFeePerBlobGas ||
              void 0 !== t.sidecars
            )
              return "eip4844";
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              return "eip1559";
            if (void 0 !== t.gasPrice)
              return void 0 !== t.accessList ? "eip2930" : "legacy";
            throw new g.v({ transaction: t });
          },
        ],
        576213
      );
    },
    795,
    493429,
    (t) => {
      var e = t.i(569934);
      class n extends e.L {
        constructor({ offset: t }) {
          super(`Offset \`${t}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class i extends e.L {
        constructor({ length: t, position: e }) {
          super(
            `Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class s extends e.L {
        constructor({ count: t, limit: e }) {
          super(
            `Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
      t.s(["R", 0, n, "n", 0, i, "_", 0, s], 493429);
      let r = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new s({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(t) {
          if (t < 0 || t > this.bytes.length - 1)
            throw new i({ length: this.bytes.length, position: t });
        },
        decrementPosition(t) {
          if (t < 0) throw new n({ offset: t });
          let e = this.position - t;
          this.assertPosition(e), (this.position = e);
        },
        getReadCount(t) {
          return this.positionReadCount.get(t || this.position) || 0;
        },
        incrementPosition(t) {
          if (t < 0) throw new n({ offset: t });
          let e = this.position + t;
          this.assertPosition(e), (this.position = e);
        },
        inspectByte(t) {
          let e = t ?? this.position;
          return this.assertPosition(e), this.bytes[e];
        },
        inspectBytes(t, e) {
          let n = e ?? this.position;
          return this.assertPosition(n + t - 1), this.bytes.subarray(n, n + t);
        },
        inspectUint8(t) {
          let e = t ?? this.position;
          return this.assertPosition(e), this.bytes[e];
        },
        inspectUint16(t) {
          let e = t ?? this.position;
          return this.assertPosition(e + 1), this.dataView.getUint16(e);
        },
        inspectUint24(t) {
          let e = t ?? this.position;
          return (
            this.assertPosition(e + 2),
            (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2)
          );
        },
        inspectUint32(t) {
          let e = t ?? this.position;
          return this.assertPosition(e + 3), this.dataView.getUint32(e);
        },
        pushByte(t) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = t),
            this.position++;
        },
        pushBytes(t) {
          this.assertPosition(this.position + t.length - 1),
            this.bytes.set(t, this.position),
            (this.position += t.length);
        },
        pushUint8(t) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = t),
            this.position++;
        },
        pushUint16(t) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, t),
            (this.position += 2);
        },
        pushUint24(t) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, t >> 8),
            this.dataView.setUint8(this.position + 2, 255 & t),
            (this.position += 3);
        },
        pushUint32(t) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, t),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectByte();
          return this.position++, t;
        },
        readBytes(t, e) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(t);
          return (this.position += e ?? t), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint8();
          return (this.position += 1), t;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint16();
          return (this.position += 2), t;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint24();
          return (this.position += 3), t;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint32();
          return (this.position += 4), t;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(t) {
          let e = this.position;
          return (
            this.assertPosition(t),
            (this.position = t),
            () => (this.position = e)
          );
        },
        _touch() {
          if (1 / 0 === this.recursiveReadLimit) return;
          let t = this.getReadCount();
          this.positionReadCount.set(this.position, t + 1),
            t > 0 && this.recursiveReadCount++;
        },
      };
      t.s(
        [
          "f",
          0,
          function (t, { recursiveReadLimit: e = 8192 } = {}) {
            let n = Object.create(r);
            return (
              (n.bytes = t),
              (n.dataView = new DataView(
                t.buffer ?? t,
                t.byteOffset,
                t.byteLength
              )),
              (n.positionReadCount = new Map()),
              (n.recursiveReadLimit = e),
              n
            );
          },
        ],
        795
      );
    },
    147526,
    (t) => {
      function e(t) {
        let e = 0;
        for (let n of t) e += n.length;
        let n = new Uint8Array(e),
          i = 0;
        for (let e of t) n.set(e, i), (i += e.length);
        return n;
      }
      function n(t) {
        return `0x${t.reduce((t, e) => t + e.replace("0x", ""), "")}`;
      }
      t.s([
        "w",
        0,
        function (t) {
          return "string" == typeof t[0] ? n(t) : e(t);
        },
        "t",
        0,
        e,
        "s",
        0,
        n,
      ]);
    },
    790063,
    (t) => {
      var e = t.i(587286),
        n = t.i(880841),
        i = t.i(401319);
      function s(t, n) {
        if ("number" == typeof n && n > 0 && n > (0, i.f)(t) - 1)
          throw new e.p({ offset: n, position: "start", size: (0, i.f)(t) });
      }
      function r(t, n, s) {
        if (
          "number" == typeof n &&
          "number" == typeof s &&
          (0, i.f)(t) !== s - n
        )
          throw new e.p({ offset: s, position: "end", size: (0, i.f)(t) });
      }
      function o(t, e, n, { strict: i } = {}) {
        s(t, e);
        let a = t.slice(e, n);
        return i && r(a, e, n), a;
      }
      function a(t, e, n, { strict: i } = {}) {
        s(t, e);
        let o = `0x${t
          .replace("0x", "")
          .slice((e ?? 0) * 2, (n ?? t.length) * 2)}`;
        return i && r(o, e, n), o;
      }
      t.s([
        "M",
        0,
        function (t, e, i, { strict: s } = {}) {
          return (0, n.f)(t, { strict: !1 })
            ? a(t, e, i, { strict: s })
            : o(t, e, i, { strict: s });
        },
        "S",
        0,
        o,
        "n",
        0,
        a,
      ]);
    },
    70326,
    (t) => {
      var e = t.i(569934),
        n = t.i(795),
        i = t.i(769936),
        s = t.i(675107);
      function r(t, e = "hex") {
        let a = (function t(e) {
            var n, s;
            let r, a, h, c;
            return Array.isArray(e)
              ? ((a = o(
                  (r = (n = e.map((e) => t(e))).reduce(
                    (t, e) => t + e.length,
                    0
                  ))
                )),
                {
                  length: r <= 55 ? 1 + r : 1 + a + r,
                  encode(t) {
                    for (let { encode: e } of (r <= 55
                      ? t.pushByte(192 + r)
                      : (t.pushByte(247 + a),
                        1 === a
                          ? t.pushUint8(r)
                          : 2 === a
                          ? t.pushUint16(r)
                          : 3 === a
                          ? t.pushUint24(r)
                          : t.pushUint32(r)),
                    n))
                      e(t);
                  },
                })
              : ((c = o(
                  (h = "string" == typeof (s = e) ? (0, i.X)(s) : s).length
                )),
                {
                  length:
                    1 === h.length && h[0] < 128
                      ? 1
                      : h.length <= 55
                      ? 1 + h.length
                      : 1 + c + h.length,
                  encode(t) {
                    (1 === h.length && h[0] < 128) ||
                      (h.length <= 55
                        ? t.pushByte(128 + h.length)
                        : (t.pushByte(183 + c),
                          1 === c
                            ? t.pushUint8(h.length)
                            : 2 === c
                            ? t.pushUint16(h.length)
                            : 3 === c
                            ? t.pushUint24(h.length)
                            : t.pushUint32(h.length))),
                      t.pushBytes(h);
                  },
                });
          })(t),
          h = (0, n.f)(new Uint8Array(a.length));
        return (a.encode(h), "hex" === e) ? (0, s.v)(h.bytes) : h.bytes;
      }
      function o(t) {
        if (t < 256) return 1;
        if (t < 65536) return 2;
        if (t < 0x1000000) return 3;
        if (t < 0x100000000) return 4;
        throw new e.L("Length is too large.");
      }
      t.s([
        "A",
        0,
        function (t, e = "bytes") {
          return r(t, e);
        },
        "o",
        0,
        function (t, e = "hex") {
          return r(t, e);
        },
        "C",
        0,
        r,
      ]);
    },
    557874,
    982191,
    (t) => {
      var e = t.i(445024),
        n = t.i(450323);
      let i = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function s(t, e) {
        let s = {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          ...(null != t.blockTimestamp && {
            blockTimestamp: BigInt(t.blockTimestamp),
          }),
          chainId: t.chainId ? (0, n.T)(t.chainId) : void 0,
          gas: t.gas ? BigInt(t.gas) : void 0,
          gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
          maxFeePerBlobGas: t.maxFeePerBlobGas
            ? BigInt(t.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: t.maxPriorityFeePerGas
            ? BigInt(t.maxPriorityFeePerGas)
            : void 0,
          nonce: t.nonce ? (0, n.T)(t.nonce) : void 0,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          type: t.type ? i[t.type] : void 0,
          typeHex: t.type ? t.type : void 0,
          value: t.value ? BigInt(t.value) : void 0,
          v: t.v ? BigInt(t.v) : void 0,
        };
        return (
          t.authorizationList &&
            (s.authorizationList = t.authorizationList.map((t) => ({
              address: t.address,
              chainId: Number(t.chainId),
              nonce: Number(t.nonce),
              r: t.r,
              s: t.s,
              yParity: Number(t.yParity),
            }))),
          (s.yParity = (() => {
            if (t.yParity) return Number(t.yParity);
            if ("bigint" == typeof s.v) {
              if (0n === s.v || 27n === s.v) return 0;
              if (1n === s.v || 28n === s.v) return 1;
              if (s.v >= 35n) return +(s.v % 2n === 0n);
            }
          })()),
          "legacy" === s.type &&
            (delete s.accessList,
            delete s.maxFeePerBlobGas,
            delete s.maxFeePerGas,
            delete s.maxPriorityFeePerGas,
            delete s.yParity),
          "eip2930" === s.type &&
            (delete s.maxFeePerBlobGas,
            delete s.maxFeePerGas,
            delete s.maxPriorityFeePerGas),
          "eip1559" === s.type && delete s.maxFeePerBlobGas,
          s
        );
      }
      let r = (0, e.f)("transaction", s);
      function o(t, e) {
        let n = (t.transactions ?? []).map((t) =>
          "string" == typeof t ? t : s(t)
        );
        return {
          ...t,
          baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
          blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
          difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
          excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
          gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
          hash: t.hash ? t.hash : null,
          logsBloom: t.logsBloom ? t.logsBloom : null,
          nonce: t.nonce ? t.nonce : null,
          number: t.number ? BigInt(t.number) : null,
          size: t.size ? BigInt(t.size) : void 0,
          timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
          transactions: n,
          totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null,
        };
      }
      t.s(["K", 0, r, "F", 0, s, "g", 0, i], 982191);
      let a = (0, e.f)("block", o);
      t.s(["B", 0, a, "K", 0, o], 557874);
    },
    445024,
    (t) => {
      t.s([
        "f",
        0,
        function (t, e) {
          return ({ exclude: n, format: i }) => ({
            exclude: n,
            format: (t, s) => {
              let r = e(t, s);
              if (n) for (let t of n) delete r[t];
              return { ...r, ...i(t, s) };
            },
            type: t,
          });
        },
      ]);
    },
    856324,
    (t) => {
      t.s([
        "f",
        0,
        function (t, { args: e, eventName: n } = {}) {
          return {
            ...t,
            blockHash: t.blockHash ? t.blockHash : null,
            blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
            blockTimestamp: t.blockTimestamp
              ? BigInt(t.blockTimestamp)
              : null === t.blockTimestamp
              ? null
              : void 0,
            logIndex: t.logIndex ? Number(t.logIndex) : null,
            transactionHash: t.transactionHash ? t.transactionHash : null,
            transactionIndex: t.transactionIndex
              ? Number(t.transactionIndex)
              : null,
            ...(n ? { args: e, eventName: n } : {}),
          };
        },
      ]);
    },
    831095,
    145535,
    (t) => {
      var e = t.i(709361),
        n = t.i(470525);
      let i = BigInt(0),
        s = BigInt(1),
        r = BigInt(2),
        o = BigInt(7),
        a = BigInt(256),
        h = BigInt(113),
        c = [],
        l = [],
        f = [];
      for (let t = 0, e = s, n = 1, u = 0; t < 24; t++) {
        ([n, u] = [u, (2 * n + 3 * u) % 5]),
          c.push(2 * (5 * u + n)),
          l.push((((t + 1) * (t + 2)) / 2) % 64);
        let d = i;
        for (let t = 0; t < 7; t++)
          (e = ((e << s) ^ ((e >> o) * h)) % a) & r &&
            (d ^= s << ((s << BigInt(t)) - s));
        f.push(d);
      }
      let u = (0, e.$)(f, !0),
        d = u[0],
        b = u[1],
        x = (t, n, i) => (i > 32 ? (0, e.v)(t, n, i) : (0, e.C)(t, n, i)),
        p = (t, n, i) => (i > 32 ? (0, e.L)(t, n, i) : (0, e.t)(t, n, i));
      class g extends n.B {
        constructor(t, e, i, s = !1, r = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = i),
            (this.enableXOF = s),
            (this.rounds = r),
            (0, n.N)(i),
            !(0 < t && t < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, n.b)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, n.o)(this.state32),
            (function (t, e = 24) {
              let i = new Uint32Array(10);
              for (let n = 24 - e; n < 24; n++) {
                for (let e = 0; e < 10; e++)
                  i[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let n = (e + 8) % 10,
                    s = (e + 2) % 10,
                    r = i[s],
                    o = i[s + 1],
                    a = x(r, o, 1) ^ i[n],
                    h = p(r, o, 1) ^ i[n + 1];
                  for (let n = 0; n < 50; n += 10)
                    (t[e + n] ^= a), (t[e + n + 1] ^= h);
                }
                let e = t[2],
                  s = t[3];
                for (let n = 0; n < 24; n++) {
                  let i = l[n],
                    r = x(e, s, i),
                    o = p(e, s, i),
                    a = c[n];
                  (e = t[a]), (s = t[a + 1]), (t[a] = r), (t[a + 1] = o);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let n = 0; n < 10; n++) i[n] = t[e + n];
                  for (let n = 0; n < 10; n++)
                    t[e + n] ^= ~i[(n + 2) % 10] & i[(n + 4) % 10];
                }
                (t[0] ^= d[n]), (t[1] ^= b[n]);
              }
              (0, n.f)(i);
            })(this.state32, this.rounds),
            (0, n.o)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, n.s)(this), (t = (0, n.D)(t)), (0, n.C)(t);
          let { blockLen: e, state: i } = this,
            s = t.length;
          for (let n = 0; n < s; ) {
            let r = Math.min(e - this.pos, s - n);
            for (let e = 0; e < r; e++) i[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: n, blockLen: i } = this;
          (t[n] ^= e),
            (128 & e) != 0 && n === i - 1 && this.keccak(),
            (t[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.s)(this, !1), (0, n.C)(t), this.finish();
          let e = this.state,
            { blockLen: i } = this;
          for (let n = 0, s = t.length; n < s; ) {
            this.posOut >= i && this.keccak();
            let r = Math.min(i - this.posOut, s - n);
            t.set(e.subarray(this.posOut, this.posOut + r), n),
              (this.posOut += r),
              (n += r);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.N)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.W)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, n.f)(this.state);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: n,
            outputLen: i,
            rounds: s,
            enableXOF: r,
          } = this;
          return (
            t || (t = new g(e, n, i, r, s)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = s),
            (t.suffix = n),
            (t.outputLen = i),
            (t.enableXOF = r),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let m = (0, n.O)(() => new g(136, 1, 32));
      t.s(["f", 0, m], 145535);
      var y = t.i(880841),
        v = t.i(769936),
        w = t.i(675107);
      t.s(
        [
          "f",
          0,
          function (t, e) {
            let n = m((0, y.f)(t, { strict: !1 }) ? (0, v.D)(t) : t);
            return "bytes" === (e || "hex") ? n : (0, w.g)(n);
          },
        ],
        831095
      );
    },
  ]);
})();
