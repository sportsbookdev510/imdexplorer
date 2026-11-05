(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    917105,
    (e) => {
      var t = e.i(815373),
        r = e.i(61460),
        i = e.i(902094),
        n = e.i(88776);
      e.s([
        "f",
        0,
        function (e) {
          let s;
          if ("string" == typeof e) s = (0, n.F)(e);
          else {
            let t = (0, i.f)(e),
              o = e.length;
            for (let i = 0; i < o; i++) {
              let o = e[i];
              if (!(0, r.J)(o)) {
                s = (0, n.F)(o, t);
                break;
              }
            }
          }
          if (!s) throw new t.s({ signature: e });
          return s;
        },
      ]);
    },
    621491,
    (e) => {
      var t = e.i(589513),
        r = e.i(61460),
        i = e.i(902094),
        n = e.i(88776);
      e.s([
        "f",
        0,
        function (e) {
          let s = [];
          if ("string" == typeof e) {
            let t = (0, n.Z)(e),
              i = t.length;
            for (let e = 0; e < i; e++)
              s.push((0, n.l)(t[e], { modifiers: r.m }));
          } else {
            let t = (0, i.f)(e),
              o = e.length;
            for (let i = 0; i < o; i++) {
              let o = e[i];
              if ((0, r.J)(o)) continue;
              let a = (0, n.Z)(o),
                u = a.length;
              for (let e = 0; e < u; e++)
                s.push((0, n.l)(a[e], { modifiers: r.m, structs: t }));
            }
          }
          if (0 === s.length) throw new t.N({ params: e });
          return s;
        },
      ]);
    },
    663771,
    126799,
    62126,
    506570,
    566335,
    (e) => {
      e.s(
        [
          "w",
          () => U,
          "M",
          () => E,
          "z",
          () => $,
          "r",
          () => z,
          "U",
          () => O,
          "G",
          () => v,
          "q",
          () => P,
          "R",
          () => A,
          "f",
          () => B,
        ],
        506570
      );
      var t = e.i(766564),
        r = e.i(917105),
        i = e.i(602376),
        n = e.i(364336),
        s = e.i(284251),
        o = e.i(308131),
        a = e.i(525908),
        u = e.i(621491),
        l = e.i(759384),
        f = i,
        c = i;
      let h = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new b({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new y({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new d({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new d({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (1 / 0 === this.recursiveReadLimit) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function p(e, { recursiveReadLimit: t = 8192 } = {}) {
        let r = Object.create(h);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
      class d extends c.f {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.NegativeOffsetError",
            });
        }
      }
      class y extends c.f {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.PositionOutOfBoundsError",
            });
        }
      }
      class b extends c.f {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.RecursiveReadLimitExceededError",
            });
        }
      }
      e.s(["f", 0, p], 126799);
      let m = /^(.*)\[([0-9]*)\]$/,
        g = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        w =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function v(e, t, r = {}) {
        let { as: i = "Array", checksumAddress: n = !1 } = r,
          a = "string" == typeof t ? l.E(t) : t,
          u = p(a);
        if (0 === l.o(a) && e.length > 0) throw new I();
        if (l.o(a) && 32 > l.o(a))
          throw new $({
            data: "string" == typeof t ? t : s.J(t),
            parameters: e,
            size: l.o(a),
          });
        let f = 0,
          c = "Array" === i ? [] : {};
        for (let t = 0; t < e.length; ++t) {
          let r = e[t];
          f < a.length && u.setPosition(f);
          let [h, p] = (function e(t, r, i) {
            var n, a, u;
            let { checksumAddress: f, staticPosition: c } = i,
              h = j(r.type);
            if (h) {
              let [i, n] = h;
              return (function (t, r, i) {
                let { checksumAddress: n, length: s, staticPosition: o } = i;
                if (null === s) {
                  let i = o + l.L(t.readBytes(32)),
                    s = i + 32;
                  t.setPosition(i);
                  let a = l.L(t.readBytes(32)),
                    u = N(r),
                    f = 0,
                    c = [];
                  for (let i = 0; i < a; ++i) {
                    t.setPosition(s + (u ? 32 * i : f));
                    let [o, a] = e(t, r, {
                      checksumAddress: n,
                      staticPosition: s,
                    });
                    (f += a),
                      c.push(o),
                      0 === a && (t.assertReadLimit(), t._touch());
                  }
                  return t.setPosition(o + 32), [c, 32];
                }
                if (N(r)) {
                  let i = o + l.L(t.readBytes(32)),
                    a = [];
                  for (let o = 0; o < s; ++o) {
                    t.setPosition(i + 32 * o);
                    let [s] = e(t, r, {
                      checksumAddress: n,
                      staticPosition: i,
                    });
                    a.push(s);
                  }
                  return t.setPosition(o + 32), [a, 32];
                }
                let a = 0,
                  u = [];
                for (let i = 0; i < s; ++i) {
                  let [i, s] = e(t, r, {
                    checksumAddress: n,
                    staticPosition: o + a,
                  });
                  (a += s),
                    u.push(i),
                    0 === s && (t.assertReadLimit(), t._touch());
                }
                return [u, a];
              })(
                t,
                { ...r, type: n },
                { checksumAddress: f, length: i, staticPosition: c }
              );
            }
            if ("tuple" === r.type)
              return (function (t, r, i) {
                let { checksumAddress: n, staticPosition: s } = i,
                  o =
                    0 === r.components.length ||
                    r.components.some(({ name: e }) => !e),
                  a = o ? [] : {},
                  u = 0;
                if (N(r)) {
                  let i = s + l.L(t.readBytes(32));
                  for (let s = 0; s < r.components.length; ++s) {
                    let l = r.components[s];
                    t.setPosition(i + u);
                    let [f, c] = e(t, l, {
                      checksumAddress: n,
                      staticPosition: i,
                    });
                    (u += c), (a[o ? s : l?.name] = f);
                  }
                  return t.setPosition(s + 32), [a, 32];
                }
                for (let i = 0; i < r.components.length; ++i) {
                  let l = r.components[i],
                    [f, c] = e(t, l, { checksumAddress: n, staticPosition: s });
                  (a[o ? i : l?.name] = f), (u += c);
                }
                return [a, u];
              })(t, r, { checksumAddress: f, staticPosition: c });
            if ("address" === r.type)
              return (function (e, t = {}) {
                let r,
                  { checksum: i = !1 } = t,
                  n = e.readBytes(32);
                return [((r = s.J(l.N(n, -20))), i ? o.Y(r) : r), 32];
              })(t, { checksum: f });
            if ("bool" === r.type) {
              return (n = t), [l.K(n.readBytes(32), { size: 32 }), 32];
            }
            if (r.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: r }) {
                let [i, n] = t.type.split("bytes");
                if (!n) {
                  let t = l.L(e.readBytes(32));
                  e.setPosition(r + t);
                  let i = l.L(e.readBytes(32));
                  if (0 === i) return e.setPosition(r + 32), ["0x", 32];
                  let n = e.readBytes(i);
                  return e.setPosition(r + 32), [s.J(n), 32];
                }
                return [s.J(e.readBytes(Number.parseInt(n, 10), 32)), 32];
              })(t, r, { staticPosition: c });
            if (r.type.startsWith("uint") || r.type.startsWith("int")) {
              let e, i, n;
              return (
                (a = t),
                (e = (u = r).type.startsWith("int")),
                (i = Number.parseInt(u.type.split("int")[1] || "256", 10)),
                (n = a.readBytes(32)),
                [i > 48 ? l.k(n, { signed: e }) : l.L(n, { signed: e }), 32]
              );
            }
            if ("string" === r.type)
              return (function (e, { staticPosition: t }) {
                let r = l.L(e.readBytes(32));
                e.setPosition(t + r);
                let i = l.L(e.readBytes(32));
                if (0 === i) return e.setPosition(t + 32), ["", 32];
                let n = e.readBytes(i, 32),
                  s = l.e(l.q(n));
                return e.setPosition(t + 32), [s, 32];
              })(t, { staticPosition: c });
            throw new O(r.type);
          })(u, r, { checksumAddress: n, staticPosition: 0 });
          (f += p), "Array" === i ? c.push(h) : (c[r.name ?? t] = h);
        }
        return c;
      }
      function P(e, t, r) {
        let { checksumAddress: n = !1 } = r ?? {};
        if (e.length !== t.length)
          throw new L({ expectedLength: e.length, givenLength: t.length });
        let a = R(
          (function ({ checksumAddress: e, parameters: t, values: r }) {
            let n = [];
            for (let a = 0; a < t.length; a++)
              n.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: r,
                  value: n,
                }) {
                  let a = j(r.type);
                  if (a) {
                    let [i, o] = a;
                    return (function (t, r) {
                      let { checksumAddress: i, length: n, parameter: o } = r,
                        a = null === n;
                      if (!Array.isArray(t)) throw new z(t);
                      if (!a && t.length !== n)
                        throw new U({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${o.type}[${n}]`,
                        });
                      let u = 0 === t.length && N(o),
                        l = [];
                      for (let r = 0; r < t.length; r++) {
                        let n = e({
                          checksumAddress: i,
                          parameter: o,
                          value: t[r],
                        });
                        n.dynamic && (u = !0), l.push(n);
                      }
                      if (a || u) {
                        let e = R(l);
                        if (a) {
                          let t = s.u(l.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: l.length > 0 ? s.w(t, e) : t,
                          };
                        }
                        if (u) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: s.w(...l.map(({ encoded: e }) => e)),
                      };
                    })(n, {
                      checksumAddress: t,
                      length: i,
                      parameter: { ...r, type: o },
                    });
                  }
                  if ("tuple" === r.type)
                    return (function (t, r) {
                      let { checksumAddress: i, parameter: n } = r,
                        o = !1,
                        a = [];
                      for (let r = 0; r < n.components.length; r++) {
                        let s = n.components[r],
                          u = Array.isArray(t) ? r : s.name,
                          l = e({
                            checksumAddress: i,
                            parameter: s,
                            value: t[u],
                          });
                        a.push(l), l.dynamic && (o = !0);
                      }
                      return {
                        dynamic: o,
                        encoded: o
                          ? R(a)
                          : s.w(...a.map(({ encoded: e }) => e)),
                      };
                    })(n, { checksumAddress: t, parameter: r });
                  if ("address" === r.type)
                    return (function (e, t) {
                      let { checksum: r = !1 } = t;
                      return (
                        o.n(e, { strict: r }),
                        { dynamic: !1, encoded: s.V(e.toLowerCase()) }
                      );
                    })(n, { checksum: t });
                  if ("bool" === r.type) {
                    var u = n;
                    if ("boolean" != typeof u)
                      throw new i.f(
                        `Invalid boolean value: "${u}" (type: ${typeof u}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: s.V(s.U(u)) };
                  }
                  if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                    let e = r.type.startsWith("int"),
                      [, , t = "256"] = w.exec(r.type) ?? [];
                    return (function (e, { signed: t, size: r }) {
                      if ("number" == typeof r) {
                        let i = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          n = t ? -i - 1n : 0n;
                        if (e > i || e < n)
                          throw new s.d({
                            max: i.toString(),
                            min: n.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: s.u(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(t) });
                  }
                  if (r.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, r] = t.split("bytes"),
                        i = s.o(e);
                      if (!r) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = s.i(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: s.w(s.V(s.u(i, { size: 32 })), t),
                          }
                        );
                      }
                      if (i !== Number.parseInt(r, 10))
                        throw new E({
                          expectedSize: Number.parseInt(r, 10),
                          value: e,
                        });
                      return { dynamic: !1, encoded: s.i(e) };
                    })(n, { type: r.type });
                  if ("string" === r.type) {
                    var l = n;
                    let e = s.A(l),
                      t = Math.ceil(s.o(e) / 32),
                      r = [];
                    for (let i = 0; i < t; i++)
                      r.push(s.i(s.N(e, 32 * i, (i + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: s.w(s.i(s.u(s.o(e), { size: 32 })), ...r),
                    };
                  }
                  throw new O(r.type);
                })({ checksumAddress: e, parameter: t[a], value: r[a] })
              );
            return n;
          })({ checksumAddress: n, parameters: e, values: t })
        );
        return 0 === a.length ? "0x" : a;
      }
      function x(e, t) {
        if (e.length !== t.length)
          throw new L({ expectedLength: e.length, givenLength: t.length });
        let r = [];
        for (let i = 0; i < e.length; i++) {
          let n = e[i],
            s = t[i];
          r.push(x.encode(n, s));
        }
        return s.w(...r);
      }
      function A(e) {
        return a.f(e);
      }
      function B(e) {
        return (Array.isArray(e) && "string" == typeof e[0]) ||
          "string" == typeof e
          ? u.f(e)
          : e;
      }
      e.s(["c", 0, m, "h", 0, g, "x", 0, w, "_", 0, 2n ** 256n - 1n], 62126),
        ((x || (x = {})).encode = function e(t, r, i = !1) {
          if ("address" === t) return o.n(r), s.V(r.toLowerCase(), 32 * !!i);
          if ("string" === t) return s.A(r);
          if ("bytes" === t) return r;
          if ("bool" === t) return s.V(s.U(r), i ? 32 : 1);
          let n = t.match(w);
          if (n) {
            let [e, t, o = "256"] = n,
              a = Number.parseInt(o, 10) / 8;
            return s.u(r, { size: i ? 32 : a, signed: "int" === t });
          }
          let a = t.match(g);
          if (a) {
            let [e, t] = a;
            if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
              throw new E({ expectedSize: Number.parseInt(t, 10), value: r });
            return s.i(r, 32 * !!i);
          }
          let u = t.match(m);
          if (u && Array.isArray(r)) {
            let [t, i] = u,
              n = [];
            for (let t = 0; t < r.length; t++) n.push(e(i, r[t], !0));
            return 0 === n.length ? "0x" : s.w(...n);
          }
          throw new O(t);
        });
      class $ extends f.f {
        constructor({ data: e, parameters: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [`Params: (${a.f(t)})`, `Data:   ${e} (${r} bytes)`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.DataSizeTooSmallError",
            });
        }
      }
      class I extends f.f {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ZeroDataError",
            });
        }
      }
      class U extends f.f {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class E extends f.f {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${s.o(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class L extends f.f {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class z extends f.f {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class O extends f.f {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function R(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: i, encoded: n } = e[r];
          i ? (t += 32) : (t += s.o(n));
        }
        let r = [],
          i = [],
          n = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: u } = e[o];
          a
            ? (r.push(s.u(t + n, { size: 32 })), i.push(u), (n += s.o(u)))
            : r.push(u);
        }
        return s.w(...r, ...i);
      }
      function j(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function N(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(N);
        let r = j(e.type);
        return !!(r && N({ ...e, type: r[1] }));
      }
      function S(e) {
        let t = !0,
          r = "",
          n = 0,
          s = "",
          o = !1;
        for (let i = 0; i < e.length; i++) {
          let a = e[i];
          if (
            (["(", ")", ","].includes(a) && (t = !0),
            "(" === a && n++,
            ")" === a && n--,
            t)
          ) {
            if (0 === n) {
              if (" " === a && ["event", "function", "error", ""].includes(s))
                s = "";
              else if (((s += a), ")" === a)) {
                o = !0;
                break;
              }
              continue;
            }
            if (" " === a) {
              r.endsWith(",") || r.endsWith("(") || ((r = ""), (t = !1));
              continue;
            }
            (s += a), (r += a);
          }
        }
        if (!o) throw new i.f("Unable to normalize signature.");
        return s;
      }
      function C(e, t, r) {
        return Array.isArray(e) ? e[r] : e?.[t.name];
      }
      function V(e, t, r) {
        let i,
          { args: n = [], prepare: a = !0 } = r ?? {},
          u = s.g(t, { strict: !1 }),
          l = e.filter((e) =>
            u
              ? "function" === e.type || "error" === e.type
                ? M(e) === s.N(t, 0, 4)
                : "event" === e.type && k(e) === t
              : "name" in e && e.name === t
          );
        if (0 === l.length) throw new K({ name: t });
        if (1 === l.length) return { ...l[0], ...(a ? { hash: k(l[0]) } : {}) };
        for (let e of l) {
          if ("inputs" in e) {
            if (!n || 0 === n.length) {
              if (!e.inputs || 0 === e.inputs.length)
                return { ...e, ...(a ? { hash: k(e) } : {}) };
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === n.length &&
              n.every((t, r) => {
                let i = "inputs" in e && e.inputs[r];
                return (
                  !!i &&
                  (function e(t, r) {
                    let i = typeof t,
                      n = r.type;
                    switch (n) {
                      case "address":
                        return o.g(t, { strict: !1 });
                      case "bool":
                        return "boolean" === i;
                      case "function":
                      case "string":
                        return "string" === i;
                      default: {
                        if ("tuple" === n && "components" in r)
                          return Object.values(r.components).every(
                            (r, n) => "object" === i && e(C(t, r, n), r)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            n
                          )
                        )
                          return "number" === i || "bigint" === i;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))
                          return "string" === i || t instanceof Uint8Array;
                        let s = j(n);
                        if (s) {
                          let [i, n] = s;
                          return (
                            Array.isArray(t) &&
                            (null === i || t.length === i) &&
                            t.every((t) => e(t, { ...r, type: n }))
                          );
                        }
                        return !1;
                      }
                    }
                  })(t, i)
                );
              })
            ) {
              if (i && "inputs" in i && i.inputs) {
                let t = (function e(t, r, i) {
                  for (let n in t) {
                    let s = t[n],
                      a = r[n];
                    if (!a) continue;
                    if (
                      "tuple" === s.type &&
                      "tuple" === a.type &&
                      "components" in s &&
                      "components" in a
                    ) {
                      let t = i[n],
                        r = e(
                          s.components,
                          a.components,
                          s.components.map((e, r) => C(t, e, r))
                        );
                      if (r) return r;
                      continue;
                    }
                    let u = j(s.type),
                      l = j(a.type);
                    if (u && l) {
                      let t = e(
                        [{ ...s, type: u[1] }],
                        [{ ...a, type: l[1] }],
                        [i[n]?.[0]]
                      );
                      if (t) return t;
                      continue;
                    }
                    let f = [s.type, a.type],
                      c = i[n];
                    if (
                      (f.includes("address") && f.includes("bytes20")) ||
                      (f.includes("address") &&
                        (f.includes("string") || f.includes("bytes")) &&
                        (void 0 === c || o.g(c, { strict: !1 })))
                    )
                      return f;
                  }
                })(e.inputs, i.inputs, n);
                if (t)
                  throw new J(
                    { abiItem: e, type: t[0] },
                    { abiItem: i, type: t[1] }
                  );
              }
              i = e;
            }
          }
        }
        let f = (() => {
          if (i) return i;
          let [e, ...t] = l;
          return { ...e, overloads: t };
        })();
        if (!f) throw new K({ name: t });
        return { ...f, ...(a ? { hash: k(f) } : {}) };
      }
      function M(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, r] = e;
            return V(t, r);
          }
          return e[0];
        })();
        return s.N(k(t), 0, 4);
      }
      function k(...e) {
        let r = (() => {
          if (Array.isArray(e[0])) {
            let [t, r] = e;
            return V(t, r);
          }
          return e[0];
        })();
        return "string" != typeof r && "hash" in r && r.hash
          ? r.hash
          : n.y(
              s.A(
                (function (...e) {
                  let r = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, r] = e;
                      return V(t, r);
                    }
                    return e[0];
                  })();
                  return S("string" == typeof r ? r : t.f(r));
                })(r)
              )
            );
      }
      class J extends i.f {
        constructor(e, r) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${S(t.f(e.abiItem))}\`, and`,
              `\`${r.type}\` in \`${S(t.f(r.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class K extends i.f {
        constructor({ name: e, data: t, type: r = "item" }) {
          let i = e ? ` with name "${e}"` : t ? ` with data "${t}"` : "";
          super(`ABI ${r}${i} not found.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      class T extends i.f {
        constructor({ data: e }) {
          super(
            `Selector size is invalid. Expected 4 bytes. Received ${s.o(
              e
            )} bytes ("${e}").`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.InvalidSelectorSizeError",
            });
        }
      }
      e.s(
        [
          "l",
          0,
          T,
          "i",
          0,
          K,
          "f",
          0,
          function (e, t = {}) {
            let { prepare: i = !0 } = t,
              n = Array.isArray(e) || "string" == typeof e ? r.f(e) : e;
            return { ...n, ...(i ? { hash: k(n) } : {}) };
          },
          "M",
          0,
          V,
          "e",
          0,
          M,
          "p",
          0,
          k,
        ],
        663771
      );
      function W(e, t, r) {
        if (128 === r && t < 128) return 1;
        if (t <= r + 55) return t - r;
        if (t === r + 55 + 1) return e.readUint8();
        if (t === r + 55 + 2) return e.readUint16();
        if (t === r + 55 + 3) return e.readUint24();
        if (t === r + 55 + 4) return e.readUint32();
        throw new i.f("Invalid RLP prefix");
      }
      function _(e) {
        if (e <= 255) return 1;
        if (e <= 65535) return 2;
        if (e <= 0xffffff) return 3;
        if (e <= 0xffffffff) return 4;
        throw new i.f("Length is too large.");
      }
      e.s(
        [
          "E",
          0,
          function (e, t = {}) {
            let { as: r = "Hex" } = t;
            return (function (e, t) {
              let { as: r } = t,
                i = (function e(t) {
                  var r, i;
                  let n, s, o, a;
                  return Array.isArray(t)
                    ? ((s = _(
                        (n = (r = t.map((t) => e(t))).reduce(
                          (e, t) => e + t.length,
                          0
                        ))
                      )),
                      {
                        length: n <= 55 ? 1 + n : 1 + s + n,
                        encode(e) {
                          for (let { encode: t } of (n <= 55
                            ? e.pushByte(192 + n)
                            : (e.pushByte(247 + s),
                              1 === s
                                ? e.pushUint8(n)
                                : 2 === s
                                ? e.pushUint16(n)
                                : 3 === s
                                ? e.pushUint24(n)
                                : e.pushUint32(n)),
                          r))
                            t(e);
                        },
                      })
                    : ((a = _(
                        (o = "string" == typeof (i = t) ? l.E(i) : i).length
                      )),
                      {
                        length:
                          1 === o.length && o[0] < 128
                            ? 1
                            : o.length <= 55
                            ? 1 + o.length
                            : 1 + a + o.length,
                        encode(e) {
                          (1 === o.length && o[0] < 128) ||
                            (o.length <= 55
                              ? e.pushByte(128 + o.length)
                              : (e.pushByte(183 + a),
                                1 === a
                                  ? e.pushUint8(o.length)
                                  : 2 === a
                                  ? e.pushUint16(o.length)
                                  : 3 === a
                                  ? e.pushUint24(o.length)
                                  : e.pushUint32(o.length))),
                            e.pushBytes(o);
                        },
                      });
                })(e),
                n = p(new Uint8Array(i.length));
              return (i.encode(n), "Hex" === r) ? s.J(n.bytes) : n.bytes;
            })(e, { as: r });
          },
          "g",
          0,
          function (e) {
            var t;
            let r;
            return (
              (t = e),
              (r = "Hex"),
              (function e(t, r = "Hex") {
                if (0 === t.bytes.length)
                  return "Hex" === r ? s.J(t.bytes) : t.bytes;
                let i = t.readByte();
                if ((i < 128 && t.decrementPosition(1), i < 192)) {
                  let e = W(t, i, 128),
                    n = t.readBytes(e);
                  return "Hex" === r ? s.J(n) : n;
                }
                let n = W(t, i, 192);
                var o = t,
                  a = n,
                  u = r;
                let l = o.position,
                  f = [];
                for (; o.position - l < a; ) f.push(e(o, u));
                return f;
              })(
                p(
                  (() => {
                    if ("string" == typeof t) {
                      if (t.length > 3 && t.length % 2 != 0) throw new s.h(t);
                      return l.E(t);
                    }
                    return t;
                  })(),
                  { recursiveReadLimit: 1 / 0 }
                ),
                r
              )
            );
          },
        ],
        566335
      );
    },
    308131,
    620046,
    (e) => {
      var t = e.i(759384),
        r = e.i(428582),
        i = e.i(602376),
        n = e.i(364336),
        s = i,
        o = e.i(284251),
        a = e.i(382721);
      function u(e, t = {}) {
        let { compressed: r } = t,
          { prefix: i, x: n, y: s } = e;
        if (!1 === r || ("bigint" == typeof n && "bigint" == typeof s)) {
          if (4 !== i) throw new h({ prefix: i, cause: new d() });
          return;
        }
        if (!0 === r || ("bigint" == typeof n && void 0 === s)) {
          if (3 !== i && 2 !== i) throw new h({ prefix: i, cause: new p() });
          return;
        }
        throw new c({ publicKey: e });
      }
      function l(e) {
        if (132 !== e.length && 130 !== e.length && 68 !== e.length)
          throw new y({ publicKey: e });
        if (130 === e.length)
          return {
            prefix: 4,
            x: BigInt(o.N(e, 0, 32)),
            y: BigInt(o.N(e, 32, 64)),
          };
        if (132 === e.length) {
          let t = Number(o.N(e, 0, 1));
          return {
            prefix: t,
            x: BigInt(o.N(e, 1, 33)),
            y: BigInt(o.N(e, 33, 65)),
          };
        }
        return { prefix: Number(o.N(e, 0, 1)), x: BigInt(o.N(e, 1, 33)) };
      }
      function f(e, t = {}) {
        u(e);
        let { prefix: r, x: i, y: n } = e,
          { includePrefix: s = !0 } = t;
        return o.w(
          s ? o.u(r, { size: 1 }) : "0x",
          o.u(i, { size: 32 }),
          "bigint" == typeof n ? o.u(n, { size: 32 }) : "0x"
        );
      }
      class c extends s.f {
        constructor({ publicKey: e }) {
          super(`Value \`${a.f(e)}\` is not a valid public key.`, {
            metaMessages: [
              "Public key must contain:",
              "- an `x` and `prefix` value (compressed)",
              "- an `x`, `y`, and `prefix` value (uncompressed)",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidError",
            });
        }
      }
      class h extends s.f {
        constructor({ prefix: e, cause: t }) {
          super(`Prefix "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidPrefixError",
            });
        }
      }
      class p extends s.f {
        constructor() {
          super("Prefix must be 2 or 3 for compressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidCompressedPrefixError",
            });
        }
      }
      class d extends s.f {
        constructor() {
          super("Prefix must be 4 for uncompressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidUncompressedPrefixError",
            });
        }
      }
      class y extends s.f {
        constructor({ publicKey: e }) {
          super(`Value \`${e}\` is an invalid public key size.`, {
            metaMessages: [
              "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
              `Received ${o.o(o.f(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidSerializedSizeError",
            });
        }
      }
      e.s(
        [
          "n",
          0,
          u,
          "f",
          0,
          function (e) {
            let r = (() => {
              if (o.g(e)) return l(e);
              if (t.g(e)) {
                var r;
                return (r = e), l(o.J(r));
              }
              let { prefix: i, x: n, y: s } = e;
              return "bigint" == typeof n && "bigint" == typeof s
                ? { prefix: i ?? 4, x: n, y: s }
                : { prefix: i, x: n };
            })();
            return u(r), r;
          },
          "E",
          0,
          l,
          "D",
          0,
          function (e, r = {}) {
            return t.E(f(e, r));
          },
          "g",
          0,
          f,
        ],
        620046
      );
      let b = /^0x[a-fA-F0-9]{40}$/;
      function m(e, t = {}) {
        let { strict: r = !0 } = t;
        if (!b.test(e)) throw new v({ address: e, cause: new P() });
        if (r) {
          if (e.toLowerCase() === e) return;
          if (g(e) !== e) throw new v({ address: e, cause: new x() });
        }
      }
      function g(e) {
        if (r.f.has(e)) return r.f.get(e);
        m(e, { strict: !1 });
        let i = e.substring(2).toLowerCase(),
          s = n.y(t.A(i), { as: "Bytes" }),
          o = i.split("");
        for (let e = 0; e < 40; e += 2)
          s[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()),
            (15 & s[e >> 1]) >= 8 &&
              o[e + 1] &&
              (o[e + 1] = o[e + 1].toUpperCase());
        let a = `0x${o.join("")}`;
        return r.f.set(e, a), a;
      }
      function w(e, t = {}) {
        let { checksum: r = !1 } = t;
        return (m(e), r) ? g(e) : e;
      }
      class v extends i.f {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class P extends i.f {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class x extends i.f {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      e.s(
        [
          "n",
          0,
          m,
          "Y",
          0,
          g,
          "f",
          0,
          w,
          "E",
          0,
          function (e, t = {}) {
            let r = n.y(`0x${f(e).slice(4)}`).substring(26);
            return w(`0x${r}`, t);
          },
          "M",
          0,
          function (e, t) {
            return (
              m(e, { strict: !1 }),
              m(t, { strict: !1 }),
              e.toLowerCase() === t.toLowerCase()
            );
          },
          "g",
          0,
          function (e, t = {}) {
            let { strict: r = !0 } = t ?? {};
            try {
              return m(e, { strict: r }), !0;
            } catch {
              return !1;
            }
          },
        ],
        308131
      );
    },
    826999,
    (e) => {
      var t = e.i(759384);
      let r = new TextEncoder(),
        i = new TextDecoder(),
        n = Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [t, e.charCodeAt(0)])
        ),
        s = {
          ...Object.fromEntries(
            Array.from(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            ).map((e, t) => [e.charCodeAt(0), t])
          ),
          61: 0,
          45: 62,
          95: 63,
        };
      function o(e, t = {}) {
        let { pad: r = !0, url: s = !1 } = t,
          a = new Uint8Array(4 * Math.ceil(e.length / 3));
        for (let t = 0, r = 0; r < e.length; t += 4, r += 3) {
          let i = (e[r] << 16) + (e[r + 1] << 8) + (0 | e[r + 2]);
          (a[t] = n[i >> 18]),
            (a[t + 1] = n[(i >> 12) & 63]),
            (a[t + 2] = n[(i >> 6) & 63]),
            (a[t + 3] = n[63 & i]);
        }
        let u = e.length % 3,
          l = 4 * Math.floor(e.length / 3) + (u && u + 1),
          f = i.decode(new Uint8Array(a.buffer, 0, l));
        return (
          r && 1 === u && (f += "=="),
          r && 2 === u && (f += "="),
          s && (f = f.replaceAll("+", "-").replaceAll("/", "_")),
          f
        );
      }
      function a(e) {
        let t = e.replace(/=+$/, ""),
          i = t.length,
          n = new Uint8Array(i + 3);
        r.encodeInto(t + "===", n);
        for (let e = 0, r = 0; e < t.length; e += 4, r += 3) {
          let t =
            (s[n[e]] << 18) +
            (s[n[e + 1]] << 12) +
            (s[n[e + 2]] << 6) +
            s[n[e + 3]];
          (n[r] = t >> 16), (n[r + 1] = (t >> 8) & 255), (n[r + 2] = 255 & t);
        }
        return new Uint8Array(
          n.buffer,
          0,
          (i >> 2) * 3 + (i % 4 && (i % 4) - 1)
        );
      }
      e.s([
        "J",
        0,
        o,
        "E",
        0,
        function (e, r = {}) {
          return o(t.E(e), r);
        },
        "A",
        0,
        function (e, r = {}) {
          return o(t.A(e), r);
        },
        "D",
        0,
        a,
        "e",
        0,
        function (e) {
          return t.e(a(e));
        },
      ]);
    },
    428582,
    (e) => {
      class t extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let r = { checksum: new t(8192) }.checksum;
      e.s(["f", 0, r], 428582);
    },
    364336,
    (e) => {
      var t = e.i(145535),
        r = e.i(280355),
        i = e.i(759384),
        n = e.i(284251);
      e.s([
        "y",
        0,
        function (e, r = {}) {
          let { as: s = "string" == typeof e ? "Hex" : "Bytes" } = r,
            o = (0, t.f)(i.f(e));
          return "Bytes" === s ? o : n.J(o);
        },
        "E",
        0,
        function (e, t = {}) {
          let { as: s = "string" == typeof e ? "Hex" : "Bytes" } = t,
            o = (0, r.f)(i.f(e));
          return "Bytes" === s ? o : n.J(o);
        },
        "f",
        0,
        function (e) {
          return 66 === e.length && n.g(e, { strict: !0 });
        },
      ]);
    },
    11517,
    (e) => {
      var t = e.i(776267),
        r = e.i(308131),
        i = e.i(759384),
        n = e.i(602376),
        s = e.i(284251),
        o = e.i(620046);
      function a(e) {
        return r.E(u(e));
      }
      function u(e) {
        let { payload: r, signature: i } = e,
          { r: n, s: a, yParity: u } = i,
          l = new t.secp256k1.Signature(BigInt(n), BigInt(a))
            .addRecoveryBit(u)
            .recoverPublicKey(s.f(r).substring(2));
        return o.f(l);
      }
      t.secp256k1,
        n.f,
        i.A("ox.secp256k1.fromSeed.v1"),
        e.s([
          "R",
          0,
          a,
          "d",
          0,
          u,
          "X",
          0,
          function (e) {
            let { hash: n, payload: s } = e;
            return e.address
              ? r.M(e.address, a({ payload: s, signature: e.signature }))
              : t.secp256k1.verify(
                  e.signature,
                  i.f(s),
                  o.D(e.publicKey),
                  ...(n ? [{ prehash: !0, lowS: !0 }] : [])
                );
          },
        ]);
    },
    779591,
    (e) => {
      var t = e.i(602376),
        r = e.i(284251),
        i = e.i(382721),
        n = e.i(62126);
      function s(e, t = {}) {
        let { recovered: r } = t;
        if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
          throw new h({ signature: e });
        if (e.r < 0n || e.r > n._) throw new p({ value: e.r });
        if (e.s < 0n || e.s > n._) throw new d({ value: e.s });
        if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
          throw new y({ value: e.yParity });
      }
      function o(e) {
        if (130 !== e.length && 132 !== e.length) throw new c({ signature: e });
        let t = BigInt(r.N(e, 0, 32)),
          i = BigInt(r.N(e, 32, 64)),
          n = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                return l(t);
              } catch {
                throw new y({ value: t });
              }
          })();
        return void 0 === n ? { r: t, s: i } : { r: t, s: i, yParity: n };
      }
      function a(e) {
        let t = (() => {
          var t;
          if ("string" == typeof e) return o(e);
          if (e instanceof Uint8Array) return o(r.J(e));
          return "string" == typeof e.r
            ? u(e)
            : e.v
            ? { r: (t = e).r, s: t.s, yParity: l(t.v) }
            : {
                r: e.r,
                s: e.s,
                ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
              };
        })();
        return s(t), t;
      }
      function u(e) {
        let t = (() => {
          let t = e.v ? Number(e.v) : void 0,
            r = e.yParity ? Number(e.yParity) : void 0;
          if (
            ("number" == typeof t && "number" != typeof r && (r = l(t)),
            "number" != typeof r)
          )
            throw new y({ value: e.yParity });
          return r;
        })();
        return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
      }
      function l(e) {
        if (0 === e || 27 === e) return 0;
        if (1 === e || 28 === e) return 1;
        if (e >= 35) return +(e % 2 == 0);
        throw new b({ value: e });
      }
      function f(e) {
        if (0 === e) return 27;
        if (1 === e) return 28;
        throw new y({ value: e });
      }
      class c extends t.f {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${r.o(r.f(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class h extends t.f {
        constructor({ signature: e }) {
          super(
            `Signature \`${i.f(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class p extends t.f {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class d extends t.f {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class y extends t.f {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class b extends t.f {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      e.s([
        "n",
        0,
        s,
        "X",
        0,
        function (e) {
          if (void 0 !== e.r && void 0 !== e.s) return a(e);
        },
        "f",
        0,
        a,
        "E",
        0,
        o,
        "M",
        0,
        u,
        "K",
        0,
        function (e) {
          let [t, r, i] = e;
          return a({
            r: "0x" === r ? 0n : BigInt(r),
            s: "0x" === i ? 0n : BigInt(i),
            yParity: "0x" === t ? 0 : Number(t),
          });
        },
        "g",
        0,
        function (e) {
          s(e);
          let t = e.r,
            i = e.s;
          return r.w(
            r.u(t, { size: 32 }),
            r.u(i, { size: 32 }),
            "number" == typeof e.yParity ? r.u(f(e.yParity), { size: 1 }) : "0x"
          );
        },
        "F",
        0,
        function (e) {
          let { r: t, s: i, yParity: n } = e;
          return {
            r: r.u(t, { size: 32 }),
            s: r.u(i, { size: 32 }),
            yParity: 0 === n ? "0x0" : "0x1",
          };
        },
        "G",
        0,
        function (e) {
          let { r: t, s: i, yParity: n } = e;
          return [
            n ? "0x01" : "0x",
            0n === t ? "0x" : r.q(r.u(t)),
            0n === i ? "0x" : r.q(r.u(i)),
          ];
        },
        "H",
        0,
        f,
      ]);
    },
  ]);
})();
