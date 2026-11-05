(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    70204,
    332881,
    (e) => {
      function t(e, { includeName: r = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new L(e.type);
        return `${e.name}(${n(e.inputs, { includeName: r })})`;
      }
      function n(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${n(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
      e.s(
        [
          "j",
          () => s,
          "B",
          () => o,
          "m",
          () => a,
          "D",
          () => u,
          "g",
          () => c,
          "S",
          () => l,
          "T",
          () => d,
          "U",
          () => f,
          "A",
          () => p,
          "k",
          () => y,
          "J",
          () => m,
          "V",
          () => b,
          "R",
          () => h,
          "u",
          () => g,
          "$",
          () => v,
          "Y",
          () => $,
          "N",
          () => x,
          "r",
          () => w,
          "M",
          () => z,
          "t",
          () => I,
          "s",
          () => E,
          "l",
          () => B,
          "v",
          () => A,
          "w",
          () => P,
          "d",
          () => L,
          "b",
          () => S,
        ],
        70204
      ),
        e.s(["r", () => t, "Q", () => n], 332881);
      var r = e.i(401319),
        i = e.i(569934);
      class s extends i.L {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends i.L {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      class a extends i.L {
        constructor({ data: e, size: t }) {
          super(
            `Data size of ${t} bytes is invalid.
Size must be in increments of 32 bytes (size % 32 === 0).`,
            {
              metaMessages: [`Data: ${e} (${t} bytes)`],
              name: "AbiDecodingDataSizeInvalidError",
            }
          );
        }
      }
      class u extends i.L {
        constructor({ data: e, params: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${n(t, { includeName: !0 })})`,
              `Data:   ${e} (${r} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = r);
        }
      }
      class c extends i.L {
        constructor({ cause: e } = {}) {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
            cause: e,
          });
        }
      }
      class l extends i.L {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends i.L {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, r.f)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class f extends i.L {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class p extends i.L {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class y extends i.L {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class m extends i.L {
        constructor(e, { docsPath: t, cause: n }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError", cause: n }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class h extends i.L {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class g extends i.L {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class b extends i.L {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class v extends i.L {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class $ extends i.L {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends i.L {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class w extends i.L {
        constructor(e, n) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${t(e.abiItem)}\`, and`,
              `\`${n.type}\` in \`${t(n.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class z extends i.L {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class I extends i.L {
        constructor({ abiItem: e, data: t, params: r, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${n(r, { includeName: !0 })})`,
                `Data:   ${t} (${i} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = r),
            (this.size = i);
        }
      }
      class E extends i.L {
        constructor({ abiItem: e, param: n }) {
          super(
            `Expected a topic for indexed event parameter${
              n.name ? ` "${n.name}"` : ""
            } on event "${t(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class A extends i.L {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class B extends i.L {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class P extends i.L {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class L extends i.L {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      class S extends i.L {
        constructor(e) {
          super(`Type "${e}" is not supported for packed encoding.`, {
            name: "UnsupportedPackedAbiType",
          });
        }
      }
    },
    569934,
    (e) => {
      let t = "2.57.16",
        n = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) =>
            t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
          version: `viem@${t}`,
        };
      e.s(
        [
          "L",
          0,
          class e extends Error {
            constructor(r, i = {}) {
              let s =
                  i.cause instanceof e
                    ? i.cause.details
                    : i.cause?.message
                    ? i.cause.message
                    : i.details,
                o = (i.cause instanceof e && i.cause.docsPath) || i.docsPath,
                a = n.getDocsUrl?.({ ...i, docsPath: o });
              super(
                [
                  r || "An error occurred.",
                  "",
                  ...(i.metaMessages ? [...i.metaMessages, ""] : []),
                  ...(a ? [`Docs: ${a}`] : []),
                  ...(s ? [`Details: ${s}`] : []),
                  ...(n.version ? [`Version: ${n.version}`] : []),
                ].join("\n"),
                i.cause ? { cause: i.cause } : void 0
              ),
                Object.defineProperty(this, "details", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
                }),
                Object.defineProperty(this, "docsPath", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
                }),
                Object.defineProperty(this, "metaMessages", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
                }),
                Object.defineProperty(this, "shortMessage", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
                }),
                Object.defineProperty(this, "version", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
                }),
                Object.defineProperty(this, "name", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "BaseError",
                }),
                (this.details = s),
                (this.docsPath = o),
                (this.metaMessages = i.metaMessages),
                (this.name = i.name ?? this.name),
                (this.shortMessage = r),
                (this.version = t);
            }
            walk(e) {
              return (function e(t, n) {
                return n?.(t)
                  ? t
                  : t &&
                    "object" == typeof t &&
                    "cause" in t &&
                    void 0 !== t.cause
                  ? e(t.cause, n)
                  : n
                  ? null
                  : t;
              })(this, e);
            }
          },
          "E",
          0,
          function (e) {
            n = e;
          },
        ],
        569934
      );
    },
    587286,
    (e) => {
      var t = e.i(569934);
      class n extends t.L {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class r extends t.L {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class i extends t.L {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
      e.s(["i", 0, i, "G", 0, r, "p", 0, n]);
    },
    400564,
    (e) => {
      var t = e.i(569934);
      class n extends t.L {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class r extends t.L {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class i extends t.L {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      class s extends t.L {
        constructor(e) {
          super(
            `Hex value "${e}" is an odd length (${e.length}). It must be an even length.`,
            { name: "InvalidHexValueError" }
          );
        }
      }
      class o extends t.L {
        constructor({ limit: e }) {
          super(`RLP depth limit of \`${e}\` exceeded.`, {
            name: "RlpDepthLimitExceededError",
          });
        }
      }
      class a extends t.L {
        constructor({ consumed: e, declared: t }) {
          super(
            `RLP list items consumed \`${e}\` bytes but the list declared a length of \`${t}\`.`,
            { name: "RlpListBoundaryExceededError" }
          );
        }
      }
      class u extends t.L {
        constructor({ count: e }) {
          super(
            `RLP payload encodes a single item, but \`${e}\` trailing ${
              1 === e ? "byte remains" : "bytes remain"
            }.`,
            { name: "RlpTrailingBytesError" }
          );
        }
      }
      class c extends t.L {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
      e.s([
        "d",
        0,
        n,
        "C",
        0,
        r,
        "l",
        0,
        i,
        "t",
        0,
        s,
        "q",
        0,
        o,
        "U",
        0,
        a,
        "i",
        0,
        u,
        "j",
        0,
        c,
      ]);
    },
    466769,
    (e) => {
      var t = e.i(34888),
        n = e.i(569934);
      class r extends n.L {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, t.f)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class i extends n.L {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class s extends n.L {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: [
              'Struct type must contain only letters, digits, "_" and "$", and must not be a Solidity type.',
            ],
            name: "InvalidStructTypeError",
          });
        }
      }
      class o extends n.L {
        constructor({ type: e }) {
          let t = /^u?int(\[[0-9]*\])*$/.test(e);
          super(`Type "${e}" is not a valid EIP-712 type.`, {
            metaMessages: t
              ? [`Use "${e.replace(/^(u?int)/, "$&256")}" instead.`]
              : void 0,
            name: "InvalidTypedDataTypeError",
          });
        }
      }
      e.s(["l", 0, r, "x", 0, i, "q", 0, s, "c", 0, o]);
    },
    249311,
    394125,
    (e) => {
      var t = e.i(70204),
        n = e.i(823838),
        r = e.i(795),
        i = e.i(401319),
        s = e.i(790063),
        o = e.i(400564),
        a = e.i(8406),
        u = e.i(450323),
        c = e.i(675107);
      function l(e, t = {}) {
        void 0 !== t.size && (0, u.u)(e, { size: t.size });
        let n = (0, c.v)(e);
        return (0, u.K)(n, t);
      }
      function d(e, t = {}) {
        let n = e;
        if (
          (void 0 !== t.size &&
            ((0, u.u)(n, { size: t.size }), (n = (0, a.f)(n))),
          n.length > 1 || n[0] > 1)
        )
          throw new o.C(n);
        return !!n[0];
      }
      function f(e, t = {}) {
        void 0 !== t.size && (0, u.u)(e, { size: t.size });
        let n = (0, c.v)(e);
        return (0, u.T)(n, t);
      }
      function p(e, t = {}) {
        let n = e;
        return (
          void 0 !== t.size &&
            ((0, u.u)(n, { size: t.size }),
            (n = (0, a.f)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
      e.s(
        [
          "W",
          0,
          l,
          "e",
          0,
          d,
          "Y",
          0,
          f,
          "F",
          0,
          p,
          "J",
          0,
          function (e, t) {
            let n = "string" == typeof t ? { to: t } : t,
              r = n.to;
            return "number" === r
              ? f(e, n)
              : "bigint" === r
              ? l(e, n)
              : "boolean" === r
              ? d(e, n)
              : "string" === r
              ? p(e, n)
              : (0, c.v)(e, n);
          },
        ],
        394125
      );
      var y = e.i(769936),
        m = e.i(704434);
      function h(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(h);
        let n = (0, m.t)(e.type);
        return !!(n && h({ ...e, type: n[1] }));
      }
      e.s(
        [
          "f",
          0,
          function (e, o) {
            let a = "string" == typeof o ? (0, y.X)(o) : o,
              u = (0, r.f)(a);
            if (0 === (0, i.f)(a) && e.length > 0) throw new t.g();
            if ((0, i.f)(o) && 32 > (0, i.f)(o))
              throw new t.D({
                data: "string" == typeof o ? o : (0, c.v)(o),
                params: e,
                size: (0, i.f)(o),
              });
            let g = 0,
              b = [];
            for (let r = 0; r < e.length; ++r) {
              let i = e[r];
              g < a.length && u.setPosition(g);
              let [o, y] = (function e(r, i, { staticPosition: o }) {
                let a = (0, m.t)(i.type);
                if (a) {
                  let [t, n] = a;
                  return (function (t, n, { length: r, staticPosition: i }) {
                    if (null === r) {
                      let r = i + f(t.readBytes(32)),
                        s = r + 32;
                      t.setPosition(r);
                      let o = f(t.readBytes(32)),
                        a = h(n),
                        u = 0,
                        c = [];
                      for (let r = 0; r < o; ++r) {
                        t.setPosition(s + (a ? 32 * r : u));
                        let [i, o] = e(t, n, { staticPosition: s });
                        (u += o),
                          c.push(i),
                          0 === o && (t.assertReadLimit(), t._touch());
                      }
                      return t.setPosition(i + 32), [c, 32];
                    }
                    if (h(n)) {
                      let s = i + f(t.readBytes(32)),
                        o = [];
                      for (let i = 0; i < r; ++i) {
                        t.setPosition(s + 32 * i);
                        let [r] = e(t, n, { staticPosition: s });
                        o.push(r);
                      }
                      return t.setPosition(i + 32), [o, 32];
                    }
                    let s = 0,
                      o = [];
                    for (let a = 0; a < r; ++a) {
                      let [r, a] = e(t, n, { staticPosition: i + s });
                      (s += a),
                        o.push(r),
                        0 === a && (t.assertReadLimit(), t._touch());
                    }
                    return [o, s];
                  })(r, { ...i, type: n }, { length: t, staticPosition: o });
                }
                if ("tuple" === i.type)
                  return (function (t, n, { staticPosition: r }) {
                    let i =
                        0 === n.components.length ||
                        n.components.some(({ name: e }) => !e),
                      s = i ? [] : {},
                      o = 0;
                    if (h(n)) {
                      let a = r + f(t.readBytes(32));
                      for (let r = 0; r < n.components.length; ++r) {
                        let u = n.components[r];
                        t.setPosition(a + o);
                        let [c, l] = e(t, u, { staticPosition: a });
                        (o += l), (s[i ? r : u?.name] = c);
                      }
                      return t.setPosition(r + 32), [s, 32];
                    }
                    for (let a = 0; a < n.components.length; ++a) {
                      let u = n.components[a],
                        [c, l] = e(t, u, { staticPosition: r });
                      (s[i ? a : u?.name] = c), (o += l);
                    }
                    return [s, o];
                  })(r, i, { staticPosition: o });
                if ("address" === i.type) {
                  let e;
                  return (
                    (e = r.readBytes(32)),
                    [(0, n.b)((0, c.v)((0, s.S)(e, -20))), 32]
                  );
                }
                if ("bool" === i.type)
                  return [d(r.readBytes(32), { size: 32 }), 32];
                if (i.type.startsWith("bytes"))
                  return (function (e, t, { staticPosition: n }) {
                    let [r, i] = t.type.split("bytes");
                    if (!i) {
                      let t = f(e.readBytes(32));
                      e.setPosition(n + t);
                      let r = f(e.readBytes(32));
                      if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                      let i = e.readBytes(r);
                      return e.setPosition(n + 32), [(0, c.v)(i), 32];
                    }
                    return [
                      (0, c.v)(e.readBytes(Number.parseInt(i, 10), 32)),
                      32,
                    ];
                  })(r, i, { staticPosition: o });
                if (i.type.startsWith("uint") || i.type.startsWith("int")) {
                  var u, y;
                  let e, t, n;
                  return (
                    (u = r),
                    (e = (y = i).type.startsWith("int")),
                    (t = Number.parseInt(y.type.split("int")[1] || "256", 10)),
                    (n = u.readBytes(32)),
                    [t > 48 ? l(n, { signed: e }) : f(n, { signed: e }), 32]
                  );
                }
                if ("string" === i.type)
                  return (function (e, { staticPosition: t }) {
                    let n = f(e.readBytes(32));
                    e.setPosition(t + n);
                    let r = f(e.readBytes(32));
                    if (0 === r) return e.setPosition(t + 32), ["", 32];
                    let i = p(e.readBytes(r, 32));
                    return e.setPosition(t + 32), [i, 32];
                  })(r, { staticPosition: o });
                throw new t.l(i.type, {
                  docsPath: "/docs/contract/decodeAbiParameters",
                });
              })(u, i, { staticPosition: 0 });
              (g += y), b.push(o);
            }
            return b;
          },
        ],
        249311
      );
    },
    704434,
    (e) => {
      var t = e.i(70204),
        n = e.i(608861),
        r = e.i(569934),
        i = e.i(400564),
        s = e.i(796516),
        o = e.i(147526),
        a = e.i(22411),
        u = e.i(401319),
        c = e.i(790063),
        l = e.i(675107),
        d = e.i(342692);
      function f(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += (0, u.f)(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let s = 0; s < e.length; s++) {
          let { dynamic: o, encoded: a } = e[s];
          o
            ? (n.push((0, l.N)(t + i, { size: 32 })),
              r.push(a),
              (i += (0, u.f)(a)))
            : n.push(a);
        }
        return (0, o.s)([...n, ...r]);
      }
      function p(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      e.s([
        "N",
        0,
        function (e, y) {
          if (e.length !== y.length)
            throw new t.U({ expectedLength: e.length, givenLength: y.length });
          return f(
            (function ({ params: e, values: y }) {
              let m = [];
              for (let h = 0; h < e.length; h++)
                m.push(
                  (function e({ param: y, value: m }) {
                    let h = p(y.type);
                    if (h) {
                      let [n, r] = h;
                      return (function (n, { length: r, param: i }) {
                        let s = null === r;
                        if (!Array.isArray(n)) throw new t.w(n);
                        if (!s && n.length !== r)
                          throw new t.S({
                            expectedLength: r,
                            givenLength: n.length,
                            type: `${i.type}[${r}]`,
                          });
                        let a =
                            0 === n.length &&
                            (function e(t) {
                              let { type: n } = t;
                              if (
                                "string" === n ||
                                "bytes" === n ||
                                n.endsWith("[]")
                              )
                                return !0;
                              if ("tuple" === n) return t.components.some(e);
                              let r = p(n);
                              return !!r && e({ ...t, type: r[1] });
                            })(i),
                          u = [];
                        for (let t = 0; t < n.length; t++) {
                          let r = e({ param: i, value: n[t] });
                          r.dynamic && (a = !0), u.push(r);
                        }
                        if (s || a) {
                          let e = f(u);
                          if (s) {
                            let t = (0, l.N)(u.length, { size: 32 });
                            return { dynamic: !0, encoded: (0, o.s)([t, e]) };
                          }
                          if (a) return { dynamic: !0, encoded: e };
                        }
                        return {
                          dynamic: !1,
                          encoded: (0, o.s)(u.map(({ encoded: e }) => e)),
                        };
                      })(m, { length: n, param: { ...y, type: r } });
                    }
                    if ("tuple" === y.type)
                      return (function (t, { param: n }) {
                        let r = !1,
                          i = [];
                        for (let s = 0; s < n.components.length; s++) {
                          let o = n.components[s],
                            a = Array.isArray(t) ? s : o.name,
                            u = e({ param: o, value: t[a] });
                          i.push(u), u.dynamic && (r = !0);
                        }
                        return {
                          dynamic: r,
                          encoded: r
                            ? f(i)
                            : (0, o.s)(i.map(({ encoded: e }) => e)),
                        };
                      })(m, { param: y });
                    if ("address" === y.type) {
                      var g = m;
                      if (!(0, s.f)(g)) throw new n.f({ address: g });
                      return {
                        dynamic: !1,
                        encoded: (0, a.n)(g.toLowerCase()),
                      };
                    }
                    if ("bool" === y.type) {
                      var b = m;
                      if ("boolean" != typeof b)
                        throw new r.L(
                          `Invalid boolean value: "${b}" (type: ${typeof b}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, a.n)((0, l.V)(b)) };
                    }
                    if (y.type.startsWith("uint") || y.type.startsWith("int")) {
                      let e = y.type.startsWith("int"),
                        [, , t = "256"] = d.x.exec(y.type) ?? [];
                      return (function (e, { signed: t, size: n = 256 }) {
                        if ("number" == typeof n) {
                          let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                            s = t ? -r - 1n : 0n;
                          if (e > r || e < s)
                            throw new i.d({
                              max: r.toString(),
                              min: s.toString(),
                              signed: t,
                              size: n / 8,
                              value: e.toString(),
                            });
                        }
                        return {
                          dynamic: !1,
                          encoded: (0, l.N)(e, { size: 32, signed: t }),
                        };
                      })(m, { signed: e, size: Number(t) });
                    }
                    if (y.type.startsWith("bytes"))
                      return (function (e, { param: n }) {
                        let [, r] = n.type.split("bytes"),
                          i = (0, u.f)(e);
                        if (!r) {
                          let t = e;
                          return (
                            i % 32 != 0 &&
                              (t = (0, a.n)(t, {
                                dir: "right",
                                size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                              })),
                            {
                              dynamic: !0,
                              encoded: (0, o.s)([
                                (0, a.n)((0, l.N)(i, { size: 32 })),
                                t,
                              ]),
                            }
                          );
                        }
                        if (i !== Number.parseInt(r, 10))
                          throw new t.T({
                            expectedSize: Number.parseInt(r, 10),
                            value: e,
                          });
                        return {
                          dynamic: !1,
                          encoded: (0, a.n)(e, { dir: "right" }),
                        };
                      })(m, { param: y });
                    if ("string" === y.type) {
                      var v = m;
                      let e = (0, l.B)(v),
                        t = Math.ceil((0, u.f)(e) / 32),
                        n = [];
                      for (let r = 0; r < t; r++)
                        n.push(
                          (0, a.n)((0, c.M)(e, 32 * r, (r + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, o.s)([
                          (0, a.n)((0, l.N)((0, u.f)(e), { size: 32 })),
                          ...n,
                        ]),
                      };
                    }
                    throw new t.v(y.type, {
                      docsPath: "/docs/contract/encodeAbiParameters",
                    });
                  })({ param: e[h], value: y[h] })
                );
              return m;
            })({ params: e, values: y })
          );
        },
        "t",
        0,
        p,
      ]);
    },
    806685,
    (e) => {
      var t = e.i(608861),
        n = e.i(796516);
      e.s([
        "f",
        0,
        function (e, r) {
          if (!(0, n.f)(e, { strict: !1 })) throw new t.f({ address: e });
          if (!(0, n.f)(r, { strict: !1 })) throw new t.f({ address: r });
          return e.toLowerCase() === r.toLowerCase();
        },
      ]);
    },
    22411,
    (e) => {
      var t = e.i(587286);
      function n(e, { dir: r, size: i = 32 } = {}) {
        if (null === i) return e;
        let s = e.replace("0x", "");
        if (s.length > 2 * i)
          throw new t.G({
            size: Math.ceil(s.length / 2),
            targetSize: i,
            type: "hex",
          });
        return `0x${s["right" === r ? "padEnd" : "padStart"](2 * i, "0")}`;
      }
      function r(e, { dir: n, size: i = 32 } = {}) {
        if (null === i) return e;
        if (e.length > i)
          throw new t.G({ size: e.length, targetSize: i, type: "bytes" });
        let s = new Uint8Array(i);
        for (let t = 0; t < i; t++) {
          let r = "right" === n;
          s[r ? t : i - t - 1] = e[r ? t : e.length - t - 1];
        }
        return s;
      }
      e.s([
        "g",
        0,
        function (e, { dir: t, size: i = 32 } = {}) {
          return "string" == typeof e
            ? n(e, { dir: t, size: i })
            : r(e, { dir: t, size: i });
        },
        "Y",
        0,
        r,
        "n",
        0,
        n,
      ]);
    },
    401319,
    880841,
    (e) => {
      function t(e, { even: n = !1, strict: r = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (!n || e.length % 2 == 0) &&
          (r ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      e.s(["f", 0, t], 880841),
        e.s(
          [
            "f",
            0,
            function (e) {
              return t(e, { strict: !1 })
                ? Math.ceil((e.length - 2) / 2)
                : e.length;
            },
          ],
          401319
        );
    },
    8406,
    (e) => {
      e.s([
        "f",
        0,
        function (e, { dir: t = "left" } = {}) {
          let n = "string" == typeof e ? e.replace("0x", "") : e,
            r = 0;
          for (let e = 0; e < n.length - 1; e++)
            if ("0" === n["left" === t ? e : n.length - e - 1].toString()) r++;
            else break;
          return ((n = "left" === t ? n.slice(r) : n.slice(0, n.length - r)),
          "string" == typeof e)
            ? (1 === n.length && "right" === t && (n = `${n}0`),
              `0x${n.length % 2 == 1 ? `0${n}` : n}`)
            : n;
        },
      ]);
    },
    450323,
    (e) => {
      e.s([
        "u",
        () => s,
        "E",
        () => o,
        "K",
        () => a,
        "d",
        () => u,
        "T",
        () => c,
        "m",
        () => l,
      ]);
      var t = e.i(400564),
        n = e.i(401319),
        r = e.i(8406),
        i = e.i(769936);
      function s(e, { size: r }) {
        if ((0, n.f)(e) > r)
          throw new t.j({ givenSize: (0, n.f)(e), maxSize: r });
      }
      function o(e, t) {
        let n = "string" == typeof t ? { to: t } : t,
          r = n.to;
        return "number" === r
          ? c(e, n)
          : "bigint" === r
          ? a(e, n)
          : "string" === r
          ? l(e, n)
          : "boolean" === r
          ? u(e, n)
          : (0, i.X)(e, n);
      }
      function a(e, t = {}) {
        let { signed: n } = t;
        t.size && s(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let i = Math.ceil((e.length - 2) / 2);
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function u(e, n = {}) {
        let i = e;
        if (
          (n.size && (s(i, { size: n.size }), (i = (0, r.f)(i))),
          "0x00" === (0, r.f)(i))
        )
          return !1;
        if ("0x01" === (0, r.f)(i)) return !0;
        throw new t.l(i);
      }
      function c(e, n = {}) {
        let r = a(e, n),
          i = Number(r);
        if (!Number.isSafeInteger(i))
          throw new t.d({
            max: `${Number.MAX_SAFE_INTEGER}`,
            min: `${Number.MIN_SAFE_INTEGER}`,
            signed: n.signed,
            size: n.size,
            value: `${r}n`,
          });
        return i;
      }
      function l(e, t = {}) {
        let n = (0, i.X)(e);
        return (
          t.size &&
            (s(n, { size: t.size }), (n = (0, r.f)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    769936,
    (e) => {
      e.s([
        "E",
        () => u,
        "X",
        () => l,
        "k",
        () => d,
        "T",
        () => f,
        "D",
        () => a,
      ]);
      var t = e.i(569934),
        n = e.i(880841),
        r = e.i(22411),
        i = e.i(450323),
        s = e.i(675107);
      let o = new TextEncoder();
      function a(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? d(e, t)
          : "boolean" == typeof e
          ? u(e, t)
          : (0, n.f)(e)
          ? l(e, t)
          : f(e, t);
      }
      function u(e, t = {}) {
        let n = new Uint8Array(1);
        return ((n[0] = Number(e)), "number" == typeof t.size)
          ? ((0, i.u)(n, { size: t.size }), (0, r.g)(n, { size: t.size }))
          : n;
      }
      function c(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : void 0;
      }
      function l(e, n = {}) {
        let s = e;
        n.size &&
          ((0, i.u)(s, { size: n.size }),
          (s = (0, r.g)(s, { dir: "right", size: n.size })));
        let o = s.slice(2);
        o.length % 2 && (o = `0${o}`);
        let a = o.length / 2,
          u = new Uint8Array(a);
        for (let e = 0, n = 0; e < a; e++) {
          let r = c(o.charCodeAt(n++)),
            i = c(o.charCodeAt(n++));
          if (void 0 === r || void 0 === i)
            throw new t.L(
              `Invalid byte sequence ("${o[n - 2]}${o[n - 1]}" in "${o}").`
            );
          u[e] = 16 * r + i;
        }
        return u;
      }
      function d(e, t) {
        return l((0, s.N)(e, t));
      }
      function f(e, t = {}) {
        let n = o.encode(e);
        return "number" == typeof t.size
          ? ((0, i.u)(n, { size: t.size }),
            (0, r.g)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    675107,
    (e) => {
      e.s([
        "V",
        () => o,
        "v",
        () => a,
        "N",
        () => u,
        "B",
        () => l,
        "g",
        () => s,
      ]);
      var t = e.i(400564),
        n = e.i(22411),
        r = e.i(450323);
      let i = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function s(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? u(e, t)
          : "string" == typeof e
          ? l(e, t)
          : "boolean" == typeof e
          ? o(e, t)
          : a(e, t);
      }
      function o(e, t = {}) {
        let i = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, r.u)(i, { size: t.size }), (0, n.g)(i, { size: t.size }))
          : i;
      }
      function a(e, t = {}) {
        let s = "";
        for (let t = 0; t < e.length; t++) s += i[e[t]];
        let o = `0x${s}`;
        return "number" == typeof t.size
          ? ((0, r.u)(o, { size: t.size }),
            (0, n.g)(o, { dir: "right", size: t.size }))
          : o;
      }
      function u(e, r = {}) {
        let i,
          { signed: s, size: o } = r,
          a = BigInt(e);
        o
          ? (i = s
              ? (1n << (8n * BigInt(o) - 1n)) - 1n
              : 2n ** (8n * BigInt(o)) - 1n)
          : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof i && s ? -i - 1n : 0;
        if ((i && a > i) || a < c) {
          let n = "bigint" == typeof e ? "n" : "";
          throw new t.d({
            max: i ? `${i}${n}` : void 0,
            min: `${c}${n}`,
            signed: s,
            size: o,
            value: `${e}${n}`,
          });
        }
        let l = `0x${(s && a < 0
          ? (1n << BigInt(8 * o)) + BigInt(a)
          : a
        ).toString(16)}`;
        return o ? (0, n.g)(l, { size: o }) : l;
      }
      let c = new TextEncoder();
      function l(e, t = {}) {
        return a(c.encode(e), t);
      }
    },
    976677,
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
          return super.has(e) && (super.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if (
            (super.has(e) && super.delete(e),
            super.set(e, t),
            this.maxSize && this.size > this.maxSize)
          ) {
            let e = super.keys().next().value;
            void 0 !== e && super.delete(e);
          }
          return this;
        }
      }
      e.s(["f", 0, t]);
    },
    342692,
    (e) => {
      e.s([
        "c",
        0,
        /^(.*)\[([0-9]*)\]$/,
        "h",
        0,
        /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        "x",
        0,
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      ]);
    },
    995062,
    (e) => {
      e.s(["k", () => a, "l", () => u, "c", () => o]);
      var t = e.i(704434),
        n = e.i(147526),
        r = e.i(675107),
        i = e.i(831095),
        s = e.i(643506);
      function o(e) {
        let { domain: t = {}, message: r, primaryType: o } = e,
          c = { EIP712Domain: (0, s.m)({ domain: t }), ...e.types };
        (0, s.N)({ domain: t, message: r, primaryType: o, types: c });
        let l = ["0x1901"];
        return (
          t && l.push(a({ domain: t, types: c })),
          "EIP712Domain" !== o &&
            l.push(u({ data: r, primaryType: o, types: c })),
          (0, i.f)((0, n.w)(l))
        );
      }
      function a({ domain: e, types: t }) {
        return u({ data: e, primaryType: "EIP712Domain", types: t });
      }
      function u({ data: e, primaryType: n, types: s }) {
        let o = (function e({ data: n, primaryType: s, types: o }) {
          let a = [{ type: "bytes32" }],
            u = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, r.g)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let i = t.replace(/(\[[0-9]*\])+$/, "");
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let t of (r.add(i), n[i]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let i of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, i.f)(n);
              })({ primaryType: s, types: o }),
            ];
          for (let c of o[s]) {
            let [s, l] = (function n({ types: s, name: o, type: a, value: u }) {
              if (void 0 !== s[a])
                return [
                  { type: "bytes32" },
                  (0, i.f)(e({ data: u, primaryType: a, types: s })),
                ];
              if ("bytes" === a) return [{ type: "bytes32" }, (0, i.f)(u)];
              if ("string" === a)
                return [{ type: "bytes32" }, (0, i.f)((0, r.g)(u))];
              if (a.lastIndexOf("]") === a.length - 1) {
                let e = a.slice(0, a.lastIndexOf("[")),
                  r = u.map((t) => n({ name: o, type: e, types: s, value: t }));
                return [
                  { type: "bytes32" },
                  (0, i.f)(
                    (0, t.N)(
                      r.map(([e]) => e),
                      r.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: a }, u];
            })({ types: o, name: c.name, type: c.type, value: n[c.name] });
            a.push(s), u.push(l);
          }
          return (0, t.N)(a, u);
        })({ data: e, primaryType: n, types: s });
        return (0, i.f)(o);
      }
    },
    418217,
    781974,
    (e) => {
      var t = e.i(823838),
        n = e.i(831095),
        r = e.i(880841),
        i = e.i(401319),
        s = e.i(450323),
        o = e.i(675107);
      async function a({ hash: t, signature: n }) {
        let c = (0, r.f)(t) ? t : (0, o.g)(t),
          { secp256k1: l } = await e.A(625932),
          d = (() => {
            if ("object" == typeof n && "r" in n && "s" in n) {
              let { r: e, s: t, v: r, yParity: i } = n,
                o = u(Number(i ?? r));
              return new l.Signature((0, s.K)(e), (0, s.K)(t)).addRecoveryBit(
                o
              );
            }
            let e = (0, r.f)(n) ? n : (0, o.g)(n);
            if (65 !== (0, i.f)(e)) throw Error("invalid signature length");
            let t = u((0, s.T)(`0x${e.slice(130)}`));
            return l.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              t
            );
          })()
            .recoverPublicKey(c.substring(2))
            .toHex(!1);
        return `0x${d}`;
      }
      function u(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function c({ hash: e, signature: r }) {
        var i;
        let s;
        return (
          (i = await a({ hash: e, signature: r })),
          (s = (0, n.f)(`0x${i.substring(4)}`).substring(26)),
          (0, t.b)(`0x${s}`)
        );
      }
      e.s(["f", 0, a], 781974), e.s(["f", 0, c], 418217);
    },
    34888,
    (e) => {
      e.s([
        "f",
        0,
        (e, t, n) =>
          JSON.stringify(
            e,
            (e, n) => {
              let r = "bigint" == typeof n ? n.toString() : n;
              return "function" == typeof t ? t(e, r) : r;
            },
            n
          ),
      ]);
    },
    643506,
    (e) => {
      e.s(["I", () => p, "m", () => f, "f", () => l, "N", () => d]);
      var t = e.i(70204),
        n = e.i(608861),
        r = e.i(466769),
        i = e.i(796516),
        s = e.i(401319),
        o = e.i(675107),
        a = e.i(342692),
        u = e.i(995062),
        c = e.i(34888);
      function l(e) {
        let { domain: t, message: n, primaryType: r, types: i } = e,
          s = (e, t) => {
            let n = { ...t };
            for (let t of e) {
              let { name: e, type: r } = t;
              "address" === r && (n[e] = n[e].toLowerCase());
            }
            return n;
          },
          o = i.EIP712Domain && t ? s(i.EIP712Domain, t) : {},
          a = (() => {
            if ("EIP712Domain" !== r) return s(i[r], n);
          })();
        return (0, c.f)({ domain: o, message: a, primaryType: r, types: i });
      }
      function d(e) {
        let { domain: u, message: c, primaryType: l, types: d } = e,
          f = (e, r) => {
            for (let u of e) {
              let { name: e, type: c } = u,
                l = r[e],
                p = c.match(a.x);
              if (p && ("number" == typeof l || "bigint" == typeof l)) {
                let [e, t, n] = p;
                (0, o.N)(l, {
                  signed: "int" === t,
                  size: Number.parseInt(n, 10) / 8,
                });
              }
              if ("address" === c && "string" == typeof l && !(0, i.f)(l))
                throw new n.f({ address: l });
              let y = c.match(a.h);
              if (y) {
                let [e, n] = y;
                if (n && (0, s.f)(l) !== Number.parseInt(n, 10))
                  throw new t.M({
                    expectedSize: Number.parseInt(n, 10),
                    givenSize: (0, s.f)(l),
                  });
              }
              Object.hasOwn(d, c) && f(d[c], l);
            }
          };
        for (let e of Object.keys(d)) {
          var p = e;
          if (
            !/^[A-Za-z0-9_$]+$/.test(p) ||
            "address" === p ||
            "bool" === p ||
            "string" === p ||
            /^(u?int|bytes)[0-9]*$/.test(p)
          )
            throw new r.q({ type: p });
        }
        for (let e of Object.values(d))
          for (let t of e ?? [])
            !(function (e, t) {
              var n;
              let i = e.replace(/(\[[0-9]*\])+$/, "");
              if (
                "int" === i ||
                "uint" === i ||
                (!Object.hasOwn(t, i) &&
                  !(
                    "address" === (n = i) ||
                    "bool" === n ||
                    "string" === n ||
                    a.h.test(n) ||
                    a.x.test(n)
                  ))
              )
                throw new r.c({ type: e });
            })(t.type, d);
        if (d.EIP712Domain && u) {
          if ("object" != typeof u) throw new r.l({ domain: u });
          f(d.EIP712Domain, u);
        }
        if ("EIP712Domain" !== l)
          if (d[l]) f(d[l], c);
          else throw new r.x({ primaryType: l, types: d });
      }
      function f({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          "string" == typeof e?.version && { name: "version", type: "string" },
          ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
            name: "chainId",
            type: "uint256",
          },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
      function p({ domain: e }) {
        return (0, u.k)({
          domain: e,
          types: { EIP712Domain: f({ domain: e }) },
        });
      }
    },
  ]);
})();
