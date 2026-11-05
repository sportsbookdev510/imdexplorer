(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  609813,
  (e) => {
    "use strict";
    let t, n;
    e.s(
      [
        "$ZodAsyncError",
        () => e6,
        "$ZodEncodeError",
        () => e2,
        "$brand",
        () => e4,
        "$constructor",
        () => e1,
        "NEVER",
        () => eY,
        "config",
        () => e3,
        "globalConfig",
        () => e9,
      ],
      197753
    ),
      e.s(
        [
          "BIGINT_FORMAT_RANGES",
          () => ec,
          "CONSTANT_CATCH",
          () => eH,
          "Class",
          () => eR,
          "NUMBER_FORMAT_RANGES",
          () => ed,
          "aborted",
          () => e_,
          "allowsEval",
          () => X,
          "assert",
          () => k,
          "assertEqual",
          () => y,
          "assertIs",
          () => x,
          "assertNever",
          () => w,
          "assertNotEqual",
          () => b,
          "assignProp",
          () => E,
          "attachSchema",
          () => eS,
          "base64ToUint8Array",
          () => eC,
          "base64urlToUint8Array",
          () => eZ,
          "cached",
          () => z,
          "captureStackTrace",
          () => G,
          "cleanEnum",
          () => eP,
          "cleanRegex",
          () => A,
          "clone",
          () => ea,
          "cloneDef",
          () => M,
          "codePointLength",
          () => eD,
          "constantCatch",
          () => eX,
          "createTransparentProxy",
          () => es,
          "defineLazy",
          () => P,
          "defineLazyInternal",
          () => eK,
          "derived",
          () => eJ,
          "esc",
          () => W,
          "escapeRegex",
          () => er,
          "explicitlyAborted",
          () => ex,
          "extend",
          () => eh,
          "finalizeIssue",
          () => ej,
          "floatSafeRemainder",
          () => U,
          "getElementAtPath",
          () => B,
          "getEnumValues",
          () => I,
          "getLengthableOrigin",
          () => eA,
          "getParsedType",
          () => et,
          "getSizableOrigin",
          () => eN,
          "hexToUint8Array",
          () => eL,
          "hide",
          () => eB,
          "installLazyProp",
          () => eG,
          "isObject",
          () => H,
          "isPlainObject",
          () => Y,
          "issue",
          () => eO,
          "joinValues",
          () => S,
          "jsonStringifyReplacer",
          () => j,
          "members",
          () => eF,
          "merge",
          () => e$,
          "mergeDefs",
          () => F,
          "normalizeParams",
          () => eo,
          "nullish",
          () => D,
          "numKeys",
          () => ee,
          "objectClone",
          () => C,
          "omit",
          () => ep,
          "optionalKeys",
          () => el,
          "own",
          () => eM,
          "parsedType",
          () => eU,
          "partial",
          () => ey,
          "pick",
          () => em,
          "prefixIssues",
          () => ew,
          "primitiveTypes",
          () => ei,
          "promiseAllObject",
          () => J,
          "propertyKeyTypes",
          () => en,
          "randomString",
          () => V,
          "rawShape",
          () => Z,
          "required",
          () => eb,
          "safeExtend",
          () => eg,
          "shallowClone",
          () => Q,
          "sizeCaps",
          () => eI,
          "slugify",
          () => K,
          "stringifyPrimitive",
          () => eu,
          "toZod",
          () => _,
          "uint8ArrayToBase64",
          () => eE,
          "uint8ArrayToBase64url",
          () => eT,
          "uint8ArrayToHex",
          () => eq,
          "unwrapMessage",
          () => ek,
        ],
        922143
      );
    var i,
      r,
      a,
      o = e.i(843476),
      s = e.i(522016),
      u = e.i(618566),
      l = e.i(271645),
      d = e.i(174080),
      c = e.i(57159),
      m = e.i(911347),
      f = e.i(656679),
      p = e.i(752012),
      h = e.i(285973),
      v = e.i(644616),
      g = e.i(823838),
      $ = e.i(321960);
    function y(e) {
      return e;
    }
    function b(e) {
      return e;
    }
    function _() {
      return (e) => e;
    }
    function x(e) {}
    function w(e) {
      throw Error("Unexpected value in exhaustive check");
    }
    function k(e) {}
    function I(e) {
      let t = Object.values(e).filter((e) => "number" == typeof e);
      return Object.entries(e)
        .filter(([e, n]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
    }
    function S(e, t = "|") {
      return e.map((e) => eu(e)).join(t);
    }
    function j(e, t) {
      return "bigint" == typeof t ? t.toString() : t;
    }
    class N {
      constructor(e) {
        (this._getter = e), (this._value = void 0);
      }
      get value() {
        let e = this._getter;
        return (
          void 0 !== e && ((this._value = e()), (this._getter = void 0)),
          this._value
        );
      }
    }
    function z(e) {
      return new N(e);
    }
    function D(e) {
      return null == e;
    }
    function A(e) {
      let t = +!!e.startsWith("^"),
        n = e.endsWith("$") ? e.length - 1 : e.length;
      return e.slice(t, n);
    }
    function U(e, t) {
      let n = e / t,
        i = Math.round(n),
        r = 4 * Number.EPSILON * Math.max(Math.abs(n), 1);
      return Math.abs(n - i) < r ? 0 : n - i;
    }
    let O = Symbol("evaluating");
    function P(e, t, n) {
      let i;
      Object.defineProperty(e, t, {
        get() {
          if (i !== O) return void 0 === i && ((i = O), (i = n())), i;
        },
        set(n) {
          Object.defineProperty(e, t, { value: n });
        },
        configurable: !0,
      });
    }
    function C(e) {
      return Object.create(
        Object.getPrototypeOf(e),
        Object.getOwnPropertyDescriptors(e)
      );
    }
    function E(e, t, n) {
      Object.defineProperty(e, t, {
        value: n,
        writable: !0,
        enumerable: !0,
        configurable: !0,
      });
    }
    function Z(e) {
      let t = Object.getOwnPropertyDescriptor(e, "shape");
      return t?.get ? t.get.raw : t?.value;
    }
    function T(e) {
      return Z(e._zod.def) ?? e._zod.def.shape;
    }
    function L(e, t, n) {
      Object.defineProperty(e, t, {
        get() {
          let e = n();
          return E(this, t, e), e;
        },
        enumerable: !0,
        configurable: !0,
      });
    }
    function q(e, t, n) {
      t in e ? E(e, t, n) : (e[t] = n);
    }
    function R(e, t, n, i) {
      let r = T(t);
      for (let a of n) {
        let n = Object.getOwnPropertyDescriptor(r, a);
        n.enumerable &&
          (n.get
            ? L(e, a, () => {
                let e = t._zod.def.shape[a];
                return i ? i(e, a) : e;
              })
            : q(e, a, i ? i(n.value, a) : n.value));
      }
    }
    function F(...e) {
      let t = {};
      for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
      return Object.defineProperties({}, t);
    }
    function M(e) {
      return F(e._zod.def);
    }
    function B(e, t) {
      return t ? t.reduce((e, t) => e?.[t], e) : e;
    }
    function J(e) {
      let t = Object.keys(e);
      return Promise.all(t.map((t) => e[t])).then((e) => {
        let n = {};
        for (let i = 0; i < t.length; i++) n[t[i]] = e[i];
        return n;
      });
    }
    function V(e = 10) {
      let t = "abcdefghijklmnopqrstuvwxyz",
        n = "";
      for (let i = 0; i < e; i++) n += t[Math.floor(Math.random() * t.length)];
      return n;
    }
    function W(e) {
      return JSON.stringify(e);
    }
    function K(e) {
      return e
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    let G =
      "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
    function H(e) {
      return "object" == typeof e && null !== e && !Array.isArray(e);
    }
    let X = z(() => {
      if (
        e9.jitless ||
        ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare"))
      )
        return !1;
      try {
        return Function(""), !0;
      } catch (e) {
        return !1;
      }
    });
    function Y(e) {
      if (!1 === H(e)) return !1;
      let t = e.constructor;
      if (void 0 === t || "function" != typeof t) return !0;
      let n = t.prototype;
      return (
        !1 !== H(n) &&
        !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
      );
    }
    function Q(e) {
      return Y(e)
        ? { ...e }
        : Array.isArray(e)
        ? [...e]
        : e instanceof Map
        ? new Map(e)
        : e instanceof Set
        ? new Set(e)
        : e;
    }
    function ee(e) {
      let t = 0;
      for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
      return t;
    }
    let et = (e) => {
        let t = typeof e;
        switch (t) {
          case "undefined":
            return "undefined";
          case "string":
            return "string";
          case "number":
            return Number.isNaN(e) ? "nan" : "number";
          case "boolean":
            return "boolean";
          case "function":
            return "function";
          case "bigint":
            return "bigint";
          case "symbol":
            return "symbol";
          case "object":
            if (Array.isArray(e)) return "array";
            if (null === e) return "null";
            if (
              e.then &&
              "function" == typeof e.then &&
              e.catch &&
              "function" == typeof e.catch
            )
              return "promise";
            if ("u" > typeof Map && e instanceof Map) return "map";
            if ("u" > typeof Set && e instanceof Set) return "set";
            if ("u" > typeof Date && e instanceof Date) return "date";
            if ("u" > typeof File && e instanceof File) return "file";
            return "object";
          default:
            throw Error(`Unknown data type: ${t}`);
        }
      },
      en = new Set(["string", "number", "symbol"]),
      ei = new Set([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined",
      ]);
    function er(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ea(e, t, n) {
      let i = new e._zod.constr(t ?? e._zod.def);
      return (!t || n?.parent) && (i._zod.parent = e), i;
    }
    function eo(e) {
      if (!e) return {};
      if ("string" == typeof e) return { error: () => e };
      if (e?.message !== void 0) {
        if (e?.error !== void 0)
          throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
      }
      return (delete e.message, "string" == typeof e.error)
        ? { ...e, error: () => e.error }
        : e;
    }
    function es(e) {
      let t;
      return new Proxy(
        {},
        {
          get: (n, i, r) => (t ?? (t = e()), Reflect.get(t, i, r)),
          set: (n, i, r, a) => (t ?? (t = e()), Reflect.set(t, i, r, a)),
          has: (n, i) => (t ?? (t = e()), Reflect.has(t, i)),
          deleteProperty: (n, i) => (
            t ?? (t = e()), Reflect.deleteProperty(t, i)
          ),
          ownKeys: (n) => (t ?? (t = e()), Reflect.ownKeys(t)),
          getOwnPropertyDescriptor: (n, i) => (
            t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, i)
          ),
          defineProperty: (n, i, r) => (
            t ?? (t = e()), Reflect.defineProperty(t, i, r)
          ),
        }
      );
    }
    function eu(e) {
      return "bigint" == typeof e
        ? e.toString() + "n"
        : "string" == typeof e
        ? `"${e}"`
        : `${e}`;
    }
    function el(e) {
      return Object.keys(e).filter(
        (t) => void 0 !== e[t]._zod.optin && "optional" === e[t]._zod.optout
      );
    }
    let ed = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      },
      ec = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
      };
    function em(e, t) {
      let n = e._zod.def,
        i = n.checks;
      if (i && i.length > 0)
        throw Error(
          ".pick() cannot be used on object schemas containing refinements"
        );
      let r = {};
      return R(r, e, ef(e, t)), ea(e, F(n, { shape: r, checks: [] }));
    }
    function ef(e, t) {
      let n = T(e),
        i = [];
      for (let e of Reflect.ownKeys(t)) {
        if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable)
          throw Error(`Unrecognized key: "${String(e)}"`);
        t[e] && i.push(e);
      }
      return i;
    }
    function ep(e, t) {
      let n = e._zod.def,
        i = n.checks;
      if (i && i.length > 0)
        throw Error(
          ".omit() cannot be used on object schemas containing refinements"
        );
      let r = new Set(ef(e, t)),
        a = {};
      return (
        R(
          a,
          e,
          Reflect.ownKeys(T(e)).filter((e) => !r.has(e))
        ),
        ea(e, F(n, { shape: a, checks: [] }))
      );
    }
    function eh(e, t) {
      if (!Y(t))
        throw Error("Invalid input to extend: expected a plain object");
      let n = e._zod.def.checks;
      if (n && n.length > 0) {
        let n = T(e);
        for (let e of Reflect.ownKeys(t))
          if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
            throw Error(
              "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead."
            );
      }
      return ea(e, F(e._zod.def, { shape: ev(e, t) }));
    }
    function ev(e, t) {
      let n = {};
      R(n, e, Reflect.ownKeys(T(e)));
      for (let e of Reflect.ownKeys(t)) {
        let i = Object.getOwnPropertyDescriptor(t, e);
        i.enumerable && (i.get ? L(n, e, () => t[e]) : q(n, e, i.value));
      }
      return n;
    }
    function eg(e, t) {
      if (!Y(t))
        throw Error("Invalid input to safeExtend: expected a plain object");
      return ea(e, F(e._zod.def, { shape: ev(e, t) }));
    }
    function e$(e, t) {
      if (!t?._zod?.def)
        throw Error(
          "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`."
        );
      if (e._zod.def.checks?.length)
        throw Error(
          ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead."
        );
      let n = {};
      R(n, e, Reflect.ownKeys(T(e))), R(n, t, Reflect.ownKeys(T(t)));
      let i = F(e._zod.def, {
        shape: n,
        get catchall() {
          return t._zod.def.catchall;
        },
        checks: t._zod.def.checks ?? [],
      });
      return ea(e, i);
    }
    function ey(e, t, n, i = "partial") {
      let r = t._zod.def.checks;
      if (r && r.length > 0)
        throw Error(
          `.${i}() cannot be used on object schemas containing refinements`
        );
      let a = n ? new Set(ef(t, n)) : void 0,
        o = {};
      return (
        R(
          o,
          t,
          Reflect.ownKeys(T(t)),
          e &&
            ((t, n) =>
              a && !a.has(n) ? t : new e({ type: "optional", innerType: t }))
        ),
        ea(t, F(t._zod.def, { shape: o, checks: [] }))
      );
    }
    function eb(e, t, n) {
      let i = n ? new Set(ef(t, n)) : void 0,
        r = {};
      return (
        R(r, t, Reflect.ownKeys(T(t)), (t, n) =>
          i && !i.has(n) ? t : new e({ type: "nonoptional", innerType: t })
        ),
        ea(t, F(t._zod.def, { shape: r }))
      );
    }
    function e_(e, t = 0) {
      if (!0 === e.aborted) return !0;
      for (let n = t; n < e.issues.length; n++)
        if (e.issues[n]?.continue !== !0) return !0;
      return !1;
    }
    function ex(e, t = 0) {
      if (!0 === e.aborted) return !0;
      for (let n = t; n < e.issues.length; n++)
        if (e.issues[n]?.continue === !1) return !0;
      return !1;
    }
    function ew(e, t) {
      return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
    }
    function ek(e) {
      return "string" == typeof e ? e : e?.message;
    }
    function eI(e) {
      let t = [];
      for (let n of e ?? []) {
        let e = n._zod.def;
        if (!/_(length|size)$|_equals$/.test(e.check)) break;
        let i = e.maximum ?? e.length ?? e.size;
        i >= 0 && t.push([i, n]);
      }
      return t;
    }
    function eS(e, t, n) {
      var i;
      for (let r = t; r < e.length; r++) (i = e[r]).schema ?? (i.schema = n);
    }
    function ej(e, t, n) {
      let i = e.inst?._zod?.traits;
      i?.has("$ZodType") &&
        (i.has("$ZodCheck")
          ? e.schema ?? (e.schema = e.inst)
          : (e.schema = e.inst));
      let r = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
        a = e.message
          ? e.message
          : ek(e.inst?._zod.def?.error?.(e)) ??
            ek(r?.(e)) ??
            ek(t?.error?.(e)) ??
            ek(n.customError?.(e)) ??
            ek(n.localeError?.(e)) ??
            "Invalid input",
        o = {};
      for (let t of Object.keys(e))
        "inst" !== t &&
          "schema" !== t &&
          "continue" !== t &&
          "input" !== t &&
          "__proto__" !== t &&
          (o[t] = e[t]);
      return (
        o.path ?? (o.path = []),
        (o.message = a),
        t?.reportInput && (o.input = e.input),
        o
      );
    }
    function eN(e) {
      return e instanceof Set
        ? "set"
        : e instanceof Map
        ? "map"
        : e instanceof File
        ? "file"
        : "unknown";
    }
    let ez = /[\uD800-\uDBFF]/;
    function eD(e) {
      let t = e.length;
      if (!ez.test(e)) return t;
      let n = t;
      for (let i = 0; i < t - 1; i++)
        (64512 & e.charCodeAt(i)) == 55296 &&
          (64512 & e.charCodeAt(i + 1)) == 56320 &&
          (n--, i++);
      return n;
    }
    function eA(e) {
      return Array.isArray(e)
        ? "array"
        : "string" == typeof e
        ? "string"
        : "unknown";
    }
    function eU(e) {
      let t = typeof e;
      switch (t) {
        case "number":
          return Number.isNaN(e) ? "nan" : "number";
        case "object":
          if (null === e) return "null";
          if (Array.isArray(e)) return "array";
          if (
            e &&
            Object.getPrototypeOf(e) !== Object.prototype &&
            "constructor" in e &&
            e.constructor
          )
            return e.constructor.name;
      }
      return t;
    }
    function eO(...e) {
      let [t, n, i] = e;
      return "string" == typeof t
        ? { message: t, code: "custom", input: n, inst: i }
        : { ...t };
    }
    function eP(e) {
      return Object.entries(e)
        .filter(([e, t]) => Number.isNaN(Number.parseInt(e, 10)))
        .map((e) => e[1]);
    }
    function eC(e) {
      let t = atob(e),
        n = new Uint8Array(t.length);
      for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
      return n;
    }
    function eE(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return btoa(t);
    }
    function eZ(e) {
      let t = e.replace(/-/g, "+").replace(/_/g, "/"),
        n = "=".repeat((4 - (t.length % 4)) % 4);
      return eC(t + n);
    }
    function eT(e) {
      return eE(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function eL(e) {
      let t = e.replace(/^0x/, "");
      if (t.length % 2 != 0) throw Error("Invalid hex string length");
      let n = new Uint8Array(t.length / 2);
      for (let e = 0; e < t.length; e += 2)
        n[e / 2] = Number.parseInt(t.slice(e, e + 2), 16);
      return n;
    }
    function eq(e) {
      return Array.from(e)
        .map((e) => e.toString(16).padStart(2, "0"))
        .join("");
    }
    class eR {
      constructor(...e) {}
    }
    function eF(e, t) {
      for (let n in t) {
        let i = Object.getOwnPropertyDescriptor(t, n);
        i.get
          ? Object.defineProperty(e, n, { ...i, enumerable: !1 })
          : (function (e, t, n) {
              Object.defineProperty(e, t, {
                configurable: !0,
                get() {
                  return this == null ? n : eM(this, t, n.bind(this));
                },
                set(e) {
                  eM(this, t, e);
                },
              });
            })(e, n, i.value);
      }
    }
    function eM(e, t, n, i = !0) {
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          writable: !0,
          enumerable: i,
          value: n,
        }),
        n
      );
    }
    function eB(e, t, n) {
      return eM(e, t, n, !1);
    }
    function eJ(e, t) {
      for (let n in e) {
        let i = e[n];
        Object.defineProperty(t, n, {
          configurable: !0,
          enumerable: !0,
          get() {
            return eM(this, n, i(this));
          },
          set(e) {
            eM(this, n, e);
          },
        });
      }
      return t;
    }
    let eV = !1,
      eW = {
        configurable: !0,
        get() {
          eV = !0;
        },
      };
    function eK(e, n, i) {
      let r = Object.getPrototypeOf(e._zod);
      if (n in r && t !== e._zod) {
        t = void 0;
        return;
      }
      (t = e._zod),
        Object.defineProperty(r, n, {
          configurable: !0,
          get() {
            Object.defineProperty(this, n, eW);
            let e = eV;
            eV = !1;
            try {
              let t = i(this);
              return (
                eV
                  ? delete this[n]
                  : Object.defineProperty(this, n, {
                      configurable: !0,
                      writable: !0,
                      value: t,
                    }),
                (eV = eV || e),
                t
              );
            } catch (t) {
              throw (delete this[n], (eV = eV || e), t);
            }
          },
          set(e) {
            Object.defineProperty(this, n, {
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
    }
    function eG(e, t, n, i) {
      let r,
        a = t in (r = Object.getPrototypeOf(e)) ? void 0 : r;
      a &&
        Object.defineProperty(a, t, {
          configurable: !0,
          get() {
            let e = {
              configurable: !0,
              writable: !0,
              enumerable: i,
              value: void 0,
            };
            return (
              Object.defineProperty(this, t, e),
              (e.value = n(this)),
              Object.defineProperty(this, t, e),
              e.value
            );
          },
          set(e) {
            Object.defineProperty(this, t, {
              configurable: !0,
              writable: !0,
              enumerable: i,
              value: e,
            });
          },
        });
    }
    let eH = "~constantCatch";
    function eX(e) {
      let t = () => e;
      return (t[eH] = !0), t;
    }
    let eY = Object.freeze({ status: "aborted" }),
      eQ = { value: void 0, enumerable: !1 },
      e0 = "captureStackTrace" in Error ? Error : null;
    function e1(e, t, n, i) {
      function r(e) {
        (this.def = e), (this.constr = l), (this.traits = new Set());
      }
      r.prototype = {};
      let a = n && new WeakSet();
      function o(i, o) {
        if (i._zod) {
          if (i._zod.traits.has(e)) return;
        } else {
          eQ.value = new r(o);
          try {
            Object.defineProperty(i, "_zod", eQ);
          } finally {
            eQ.value = void 0;
          }
        }
        if ((i._zod.traits.add(e), t(i, o), a)) {
          let e = Object.getPrototypeOf(i),
            t = i._zod.constr.prototype,
            r = e;
          for (; r && r !== t; ) r = Object.getPrototypeOf(r);
          let o = r ?? e;
          a.has(o) || (a.add(o), eF(o, n));
        }
        let s = l.prototype;
        for (let e in s)
          Object.prototype.hasOwnProperty.call(s, e) &&
            (e in i || (i[e] = s[e].bind(i)));
      }
      let s = i?.Parent ?? Object;
      class u extends s {}
      function l(e) {
        let t = i?.Parent
          ? (function (e) {
              let t = e0;
              if (t) {
                let n = t.stackTraceLimit;
                if ("number" == typeof n) {
                  try {
                    t.stackTraceLimit = 0;
                  } catch {
                    return (e0 = null), new e();
                  }
                  try {
                    return new e();
                  } finally {
                    t.stackTraceLimit = n;
                  }
                }
              }
              return new e();
            })(u)
          : this;
        o(t, e);
        let n = t._zod.deferred;
        if (n) {
          for (let e of n) e();
          t._zod.deferred = void 0;
        }
        let r = globalThis.__zod_globalConfig?.postProcessor;
        return r && r(t), t;
      }
      return (
        Object.defineProperty(u, "name", { value: e }),
        Object.defineProperty(l, "init", { value: o }),
        Object.defineProperty(l, Symbol.hasInstance, {
          value: (t) =>
            (!!i?.Parent && t instanceof i.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(l, "name", { value: e }),
        l
      );
    }
    let e4 = Symbol("zod_brand");
    class e6 extends Error {
      constructor() {
        super(
          "Encountered Promise during synchronous parse. Use .parseAsync() instead."
        );
      }
    }
    class e2 extends Error {
      constructor(e) {
        super(`Encountered unidirectional transform during encode: ${e}`),
          (this.name = "ZodEncodeError");
      }
    }
    (i = globalThis).__zod_globalConfig ?? (i.__zod_globalConfig = {});
    let e9 = globalThis.__zod_globalConfig;
    function e3(e) {
      return e && Object.assign(e9, e), e9;
    }
    e.i(197753);
    let e5 = {
        get: function () {
          let e = this._zod;
          return (
            e.message ?? (e.message = JSON.stringify(e.def, j, 2)), e.message
          );
        },
        set: function (e) {
          this._zod.message = e;
        },
        enumerable: !0,
        configurable: !0,
      },
      e8 = { value: void 0, enumerable: !1 },
      e7 = new WeakSet([Object.prototype, Error.prototype]),
      te = (e, t) => {
        (e.name = "$ZodError"),
          (e8.value = t),
          Object.defineProperty(e, "issues", e8),
          (e8.value = void 0),
          Object.defineProperty(e, "message", e5);
        let n = Object.getPrototypeOf(e);
        e7.has(n) ||
          (e7.add(n),
          Object.defineProperty(n, "toString", {
            configurable: !0,
            enumerable: !1,
            get() {
              let e = () => this.message;
              return (
                Object.defineProperty(this, "toString", {
                  value: e,
                  configurable: !0,
                  writable: !0,
                }),
                e
              );
            },
            set(e) {
              Object.defineProperty(this, "toString", {
                value: e,
                configurable: !0,
                writable: !0,
              });
            },
          }));
      },
      tt = e1("$ZodError", te),
      tn = e1("$ZodError", te, void 0, { Parent: Error });
    function ti(e, t = (e) => e.message) {
      let n = {},
        i = [];
      for (let o of e.issues)
        if (o.path.length > 0) {
          var r, a;
          ((r = o.path[0]),
          (a = () => []),
          !Object.prototype.hasOwnProperty.call(n, r) &&
            ("__proto__" === r
              ? Object.defineProperty(n, r, {
                  value: a(),
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                })
              : (n[r] = a())),
          n[r]).push(t(o));
        } else i.push(t(o));
      return { formErrors: i, fieldErrors: n };
    }
    function tr(e, t = (e) => e.message) {
      let n = { _errors: [] },
        i = (e, r = []) => {
          for (let a of e.issues)
            if ("invalid_union" === a.code && a.errors.length)
              a.errors.map((e) => i({ issues: e }, [...r, ...a.path]));
            else if ("invalid_key" === a.code)
              i({ issues: a.issues }, [...r, ...a.path]);
            else if ("invalid_element" === a.code)
              i({ issues: a.issues }, [...r, ...a.path]);
            else {
              let e = [...r, ...a.path];
              if (0 === e.length) n._errors.push(t(a));
              else {
                let i = n,
                  r = 0;
                for (; r < e.length; ) {
                  let n = e[r],
                    o = r === e.length - 1;
                  if ("_errors" === n) {
                    o && i._errors.push(t(a)), r++;
                    continue;
                  }
                  Object.prototype.hasOwnProperty.call(i, n) ||
                    Object.defineProperty(i, n, {
                      value: { _errors: [] },
                      enumerable: !0,
                      writable: !0,
                      configurable: !0,
                    });
                  let s = i[n];
                  o && s._errors.push(t(a)), (i = s), r++;
                }
              }
            }
        };
      return i(e), n;
    }
    function ta(e, t = (e) => e.message) {
      let n = { errors: [] },
        i = (e, r = []) => {
          var a;
          for (let o of e.issues)
            if ("invalid_union" === o.code && o.errors.length)
              o.errors.map((e) => i({ issues: e }, [...r, ...o.path]));
            else if ("invalid_key" === o.code)
              i({ issues: o.issues }, [...r, ...o.path]);
            else if ("invalid_element" === o.code)
              i({ issues: o.issues }, [...r, ...o.path]);
            else {
              let e = [...r, ...o.path];
              if (0 === e.length) {
                n.errors.push(t(o));
                continue;
              }
              let i = n,
                s = 0;
              for (; s < e.length; ) {
                let n = e[s],
                  r = s === e.length - 1;
                "string" == typeof n
                  ? (i.properties ?? (i.properties = {}),
                    Object.prototype.hasOwnProperty.call(i.properties, n) ||
                      Object.defineProperty(i.properties, n, {
                        value: { errors: [] },
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      }),
                    (i = i.properties[n]))
                  : (i.items ?? (i.items = []),
                    (a = i.items)[n] ?? (a[n] = { errors: [] }),
                    (i = i.items[n])),
                  r && i.errors.push(t(o)),
                  s++;
              }
            }
        };
      return i(e), n;
    }
    function to(e) {
      let t = [];
      for (let n of e.map((e) => ("object" == typeof e ? e.key : e)))
        "number" == typeof n
          ? t.push(`[${n}]`)
          : "symbol" == typeof n
          ? t.push(`[${JSON.stringify(String(n))}]`)
          : /[^\w$]/.test(n)
          ? t.push(`[${JSON.stringify(n)}]`)
          : (t.length && t.push("."), t.push(n));
      return t.join("");
    }
    function ts(e) {
      let t = [];
      for (let n of [...e.issues].sort(
        (e, t) => (e.path ?? []).length - (t.path ?? []).length
      ))
        t.push(`✖ ${n.message}`),
          n.path?.length && t.push(`  → at ${to(n.path)}`);
      return t.join("\n");
    }
    function tu(e, t) {
      return { callee: t?.callee ?? e, Err: t?.Err };
    }
    e.s(
      [
        "$ZodError",
        0,
        tt,
        "$ZodRealError",
        0,
        tn,
        "flattenError",
        0,
        ti,
        "formatError",
        0,
        tr,
        "prettifyError",
        0,
        ts,
        "toDotPath",
        0,
        to,
        "treeifyError",
        0,
        ta,
      ],
      374969
    );
    let tl = (e) => {
        let t = (n, i, r, a) => {
          let o = r ? { ...r, async: !1 } : { async: !1 },
            s = n._zod.run({ value: i, issues: [] }, o);
          if (s instanceof Promise) throw new e6();
          if (s.issues.length) {
            let n = new (a?.Err ?? e)(s.issues.map((e) => ej(e, o, e3())));
            throw (G(n, a?.callee ?? t), n);
          }
          return s.value;
        };
        return t;
      },
      td = tl(tn),
      tc = (e) => {
        let t = async (n, i, r, a) => {
          let o = r ? { ...r, async: !0 } : { async: !0 },
            s = n._zod.run({ value: i, issues: [] }, o);
          if ((s instanceof Promise && (s = await s), s.issues.length)) {
            let n = new (a?.Err ?? e)(s.issues.map((e) => ej(e, o, e3())));
            throw (G(n, a?.callee ?? t), n);
          }
          return s.value;
        };
        return t;
      },
      tm = tc(tn),
      tf = (e) => (t, n, i) => {
        let r = i ? { ...i, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, r);
        if (a instanceof Promise) throw new e6();
        return a.issues.length
          ? th(e, a.issues, r)
          : { success: !0, data: a.value };
      },
      tp = tf(tn);
    function th(e, t, n) {
      let i;
      return {
        success: !1,
        get error() {
          return (
            i ||
              ((i = new e(t.map((e) => ej(e, n, e3())))),
              (t = void 0),
              (n = void 0)),
            i
          );
        },
        set error(e) {
          (i = e), (t = void 0), (n = void 0);
        },
      };
    }
    let tv = (e) => async (t, n, i) => {
        let r = i ? { ...i, async: !0 } : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, r);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length ? th(e, a.issues, r) : { success: !0, data: a.value }
        );
      },
      tg = tv(tn),
      t$ = Symbol.for("zod.compile.invalid"),
      ty = Symbol.for("zod.compile.fallback"),
      tb = (e, t, n) => {
        let i = e._zod.bag.validator;
        if (void 0 !== i) {
          if (i(t) !== t$) return !0;
          if (!0 === i.definite && void 0 === n) return !1;
        }
        var r = e,
          a = t,
          o = n;
        let s,
          u = o
            ? { ...o, async: !1, abortEarly: !0 }
            : { async: !1, abortEarly: !0 },
          l = r._zod.bag.fallbackRun;
        if (
          (l
            ? ((u[ty] = !0), (s = l({ value: a, issues: [] }, u)))
            : (s = r._zod.run({ value: a, issues: [] }, u)),
          s instanceof Promise)
        )
          throw new e6();
        return 0 === s.issues.length;
      },
      t_ = async (e, t, n) => {
        let i = n
            ? { ...n, async: !0, abortEarly: !0 }
            : { async: !0, abortEarly: !0 },
          r = e._zod.run({ value: t, issues: [] }, i);
        return r instanceof Promise && (r = await r), 0 === r.issues.length;
      },
      tx = (e) => {
        let t = tl(e),
          n = (e, i, r, a) =>
            t(
              e,
              i,
              r ? { ...r, direction: "backward" } : { direction: "backward" },
              tu(n, a)
            );
        return n;
      },
      tw = tx(tn),
      tk = (e) => {
        let t = tl(e),
          n = (e, i, r, a) => t(e, i, r, tu(n, a));
        return n;
      },
      tI = tk(tn),
      tS = (e) => {
        let t = tc(e),
          n = async (e, i, r, a) => {
            let o = r
              ? { ...r, direction: "backward" }
              : { direction: "backward" };
            return await t(e, i, o, tu(n, a));
          };
        return n;
      },
      tj = tS(tn),
      tN = (e) => {
        let t = tc(e),
          n = async (e, i, r, a) => await t(e, i, r, tu(n, a));
        return n;
      },
      tz = tN(tn),
      tD = (e) => (t, n, i) => {
        let r = i ? { ...i, direction: "backward" } : { direction: "backward" };
        return tf(e)(t, n, r);
      },
      tA = tD(tn),
      tU = (e) => (t, n, i) => tf(e)(t, n, i),
      tO = tU(tn),
      tP = (e) => async (t, n, i) => {
        let r = i ? { ...i, direction: "backward" } : { direction: "backward" };
        return tv(e)(t, n, r);
      },
      tC = tP(tn),
      tE = (e) => async (t, n, i) => tv(e)(t, n, i),
      tZ = tE(tn);
    e.s(
      [
        "_decode",
        0,
        tk,
        "_decodeAsync",
        0,
        tN,
        "_encode",
        0,
        tx,
        "_encodeAsync",
        0,
        tS,
        "_parse",
        0,
        tl,
        "_parseAsync",
        0,
        tc,
        "_safeDecode",
        0,
        tU,
        "_safeDecodeAsync",
        0,
        tE,
        "_safeEncode",
        0,
        tD,
        "_safeEncodeAsync",
        0,
        tP,
        "_safeParse",
        0,
        tf,
        "_safeParseAsync",
        0,
        tv,
        "decode",
        0,
        tI,
        "decodeAsync",
        0,
        tz,
        "encode",
        0,
        tw,
        "encodeAsync",
        0,
        tj,
        "parse",
        0,
        td,
        "parseAsync",
        0,
        tm,
        "safeDecode",
        0,
        tO,
        "safeDecodeAsync",
        0,
        tZ,
        "safeEncode",
        0,
        tA,
        "safeEncodeAsync",
        0,
        tC,
        "safeParse",
        0,
        tp,
        "safeParseAsync",
        0,
        tg,
        "validate",
        0,
        tb,
        "validateAsync",
        0,
        t_,
      ],
      803108
    ),
      e.i(803108),
      e.i(374969);
    let tT = /^[cC][0-9a-z]{6,}$/,
      tL = /^[0-9a-z]+$/,
      tq = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
      tR = /^[0-9a-vA-V]{20}$/,
      tF = /^[A-Za-z0-9]{27}$/,
      tM = /^[a-zA-Z0-9_-]{21}$/;
    function tB(e) {
      return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
    }
    let tJ =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
      tV =
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
      tW = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      tK = tW(4),
      tG = tW(6),
      tH = tW(7),
      tX =
        /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      tY = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
    function tQ() {
      return RegExp(
        "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
        "u"
      );
    }
    let t0 =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
      t1 =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
      t4 = (e) => {
        let t = er(e ?? ":");
        return RegExp(
          `^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`
        );
      },
      t6 =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
      t2 =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      t9 =
        /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
      t3 = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
      t5 =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
      t8 =
        /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/,
      t7 = /^https?$/,
      ne = /^\+[1-9]\d{6,14}$/,
      nt = /^\d(?:[ -]?\d){11,18}$/,
      nn =
        /^(?:AED|AFN|ALL|AMD|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLE|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UYW|UZS|VED|VES|VND|VUV|WST|XAD|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XCG|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWG)$/,
      ni = /^[A-Z]{2}(?!00|01|99)\d{2}[A-Z0-9]{11,30}$/,
      nr =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
      na = RegExp(`^${nr}$`);
    function no(e) {
      let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
      return "number" == typeof e.precision
        ? -1 === e.precision
          ? `${t}`
          : 0 === e.precision
          ? `${t}:[0-5]\\d`
          : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : e.seconds
        ? `${t}:[0-5]\\d(?:\\.\\d+)?`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function ns(e) {
      return RegExp(`^${no(e)}$`);
    }
    function nu(e) {
      let t = ["Z"];
      e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      let n = `${no({ precision: e.precision, seconds: !0 })}(?:${t.join(
          "|"
        )})`,
        i = e.local ? `${n}|${no({ precision: e.precision })}` : n;
      return RegExp(`^${nr}T(?:${i})$`);
    }
    let nl = /^[\s\S]{0,}$/,
      nd = (e) => {
        let t = e
          ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
          : "[\\s\\S]*";
        return RegExp(`^${t}$`);
      },
      nc = /^-?\d+n?$/,
      nm = /^-?\d+$/,
      nf = /^-?\d+(?:\.\d+)?$/,
      np = /^(?:true|false)$/i,
      nh = /^null$/i,
      nv = /^undefined$/i,
      ng = /^[^A-Z]*$/,
      n$ = /^[^a-z]*$/,
      ny = /^[0-9a-fA-F]*$/;
    function nb(e, t) {
      return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
    }
    function n_(e) {
      return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
    }
    let nx = nb(22, "=="),
      nw = n_(22),
      nk = nb(27, "="),
      nI = n_(27),
      nS = nb(43, "="),
      nj = n_(43),
      nN = nb(64, ""),
      nz = n_(64),
      nD = nb(86, "=="),
      nA = n_(86);
    e.s(
      [
        "anyString",
        0,
        nl,
        "base64",
        0,
        t9,
        "base64url",
        0,
        t3,
        "bigint",
        0,
        nc,
        "boolean",
        0,
        np,
        "browserEmail",
        0,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "cidrv4",
        0,
        t6,
        "cidrv6",
        0,
        t2,
        "creditCard",
        0,
        nt,
        "cuid",
        0,
        tT,
        "cuid2",
        0,
        tL,
        "currencyCode",
        0,
        nn,
        "date",
        0,
        na,
        "datetime",
        0,
        nu,
        "domain",
        0,
        t8,
        "duration",
        0,
        tJ,
        "e164",
        0,
        ne,
        "email",
        0,
        tX,
        "emoji",
        0,
        tQ,
        "extendedDuration",
        0,
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        "guid",
        0,
        tV,
        "hex",
        0,
        ny,
        "hostname",
        0,
        t5,
        "html5Email",
        0,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "httpProtocol",
        0,
        t7,
        "iban",
        0,
        ni,
        "idnEmail",
        0,
        tY,
        "integer",
        0,
        nm,
        "ipv4",
        0,
        t0,
        "ipv6",
        0,
        t1,
        "ksuid",
        0,
        tF,
        "lowercase",
        0,
        ng,
        "mac",
        0,
        t4,
        "md5_base64",
        0,
        nx,
        "md5_base64url",
        0,
        nw,
        "md5_hex",
        0,
        /^[0-9a-fA-F]{32}$/,
        "nanoid",
        0,
        tM,
        "nanoidOfLength",
        0,
        tB,
        "null",
        0,
        nh,
        "number",
        0,
        nf,
        "rfc5322Email",
        0,
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "sha1_base64",
        0,
        nk,
        "sha1_base64url",
        0,
        nI,
        "sha1_hex",
        0,
        /^[0-9a-fA-F]{40}$/,
        "sha256_base64",
        0,
        nS,
        "sha256_base64url",
        0,
        nj,
        "sha256_hex",
        0,
        /^[0-9a-fA-F]{64}$/,
        "sha384_base64",
        0,
        nN,
        "sha384_base64url",
        0,
        nz,
        "sha384_hex",
        0,
        /^[0-9a-fA-F]{96}$/,
        "sha512_base64",
        0,
        nD,
        "sha512_base64url",
        0,
        nA,
        "sha512_hex",
        0,
        /^[0-9a-fA-F]{128}$/,
        "string",
        0,
        nd,
        "time",
        0,
        ns,
        "ulid",
        0,
        tq,
        "undefined",
        0,
        nv,
        "unicodeEmail",
        0,
        tY,
        "uppercase",
        0,
        n$,
        "uuid",
        0,
        tW,
        "uuid4",
        0,
        tK,
        "uuid6",
        0,
        tG,
        "uuid7",
        0,
        tH,
        "xid",
        0,
        tR,
      ],
      682358
    );
    let nU = e1("$ZodCheck", (e, t) => {
        var n;
        e._zod ?? (e._zod = {}),
          (e._zod.def = t),
          (n = e._zod).onattach ?? (n.onattach = []);
      }),
      nO = (e) => {
        let t = e.value;
        return !D(t) && void 0 !== t.size;
      },
      nP = (e) => {
        let t = e.value;
        return !D(t) && void 0 !== t.length;
      },
      nC = { number: "number", bigint: "bigint", object: "date" },
      nE = e1("$ZodCheckLessThan", (e, t) => {
        nU.init(e, t);
        let n = nC[typeof t.value];
        e._zod.check = (i) => {
          (t.inclusive ? i.value <= t.value : i.value < t.value) ||
            i.issues.push({
              origin: nC[typeof i.value] ?? n,
              code: "too_big",
              maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
              input: i.value,
              inclusive: t.inclusive,
              inst: e,
              continue: !t.abort,
            });
        };
      }),
      nZ = e1("$ZodCheckGreaterThan", (e, t) => {
        nU.init(e, t);
        let n = nC[typeof t.value];
        e._zod.check = (i) => {
          (t.inclusive ? i.value >= t.value : i.value > t.value) ||
            i.issues.push({
              origin: nC[typeof i.value] ?? n,
              code: "too_small",
              minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
              input: i.value,
              inclusive: t.inclusive,
              inst: e,
              continue: !t.abort,
            });
        };
      }),
      nT = e1("$ZodCheckMultipleOf", (e, t) => {
        nU.init(e, t),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error("Cannot mix number and bigint in multiple_of check.");
            ("bigint" == typeof n.value
              ? t.value !== BigInt(0) && n.value % t.value === BigInt(0)
              : 0 === U(n.value, t.value)) ||
              n.issues.push({
                origin: typeof n.value,
                code: "not_multiple_of",
                divisor: t.value,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      nL = e1("$ZodCheckNumberFormat", (e, t) => {
        nU.init(e, t), (t.format = t.format || "float64");
        let n = t.format?.includes("int"),
          i = n ? "int" : "number",
          [r, a] = ed[t.format];
        e._zod.check = (o) => {
          let s = o.value;
          if (n) {
            if (!Number.isInteger(s))
              return void o.issues.push({
                expected: i,
                format: t.format,
                code: "invalid_type",
                continue: !1,
                input: s,
                inst: e,
              });
            if (!Number.isSafeInteger(s))
              return void (s > 0
                ? o.issues.push({
                    input: s,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: i,
                    inclusive: !0,
                    continue: !t.abort,
                  })
                : o.issues.push({
                    input: s,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: i,
                    inclusive: !0,
                    continue: !t.abort,
                  }));
          }
          s < r &&
            o.issues.push({
              origin: "number",
              input: s,
              code: "too_small",
              minimum: r,
              inclusive: !0,
              inst: e,
              continue: !t.abort,
            }),
            s > a &&
              o.issues.push({
                origin: "number",
                input: s,
                code: "too_big",
                maximum: a,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              });
        };
      }),
      nq = e1("$ZodCheckBigIntFormat", (e, t) => {
        nU.init(e, t);
        let [n, i] = ec[t.format];
        e._zod.check = (r) => {
          let a = r.value;
          a < n &&
            r.issues.push({
              origin: "bigint",
              input: a,
              code: "too_small",
              minimum: n,
              inclusive: !0,
              inst: e,
              continue: !t.abort,
            }),
            a > i &&
              r.issues.push({
                origin: "bigint",
                input: a,
                code: "too_big",
                maximum: i,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              });
        };
      }),
      nR = e1("$ZodCheckMaxSize", (e, t) => {
        var n;
        nU.init(e, t),
          (n = e._zod.def).when ?? (n.when = nO),
          (e._zod.check = (n) => {
            let i = n.value;
            i.size <= t.maximum ||
              n.issues.push({
                origin: eN(i),
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: i,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      nF = e1("$ZodCheckMinSize", (e, t) => {
        var n;
        nU.init(e, t),
          (n = e._zod.def).when ?? (n.when = nO),
          (e._zod.check = (n) => {
            let i = n.value;
            i.size >= t.minimum ||
              n.issues.push({
                origin: eN(i),
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: i,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      nM = e1("$ZodCheckSizeEquals", (e, t) => {
        var n;
        nU.init(e, t),
          (n = e._zod.def).when ?? (n.when = nO),
          (e._zod.check = (n) => {
            let i = n.value,
              r = i.size;
            if (r === t.size) return;
            let a = r > t.size;
            n.issues.push({
              origin: eN(i),
              ...(a
                ? { code: "too_big", maximum: t.size }
                : { code: "too_small", minimum: t.size }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      nB = e1("$ZodCheckMaxLength", (e, t) => {
        var n;
        nU.init(e, t),
          (n = e._zod.def).when ?? (n.when = nP),
          (e._zod.check = (n) => {
            let i = n.value,
              r = i.length;
            if (
              ("string" == typeof i && r > t.maximum ? eD(i) : r) <= t.maximum
            )
              return;
            let a = eA(i);
            n.issues.push({
              origin: a,
              code: "too_big",
              maximum: t.maximum,
              inclusive: !0,
              input: i,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      nJ = e1("$ZodCheckMinLength", (e, t) => {
        var n;
        nU.init(e, t),
          (n = e._zod.def).when ?? (n.when = nP),
          (e._zod.check = (n) => {
            let i = n.value,
              r = i.length;
            if (
              ("string" == typeof i && r >= t.minimum && r < 2 * t.minimum
                ? eD(i)
                : r) >= t.minimum
            )
              return;
            let a = eA(i);
            n.issues.push({
              origin: a,
              code: "too_small",
              minimum: t.minimum,
              inclusive: !0,
              input: i,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      nV = e1("$ZodCheckLengthEquals", (e, t) => {
        var n;
        nU.init(e, t),
          (n = e._zod.def).when ?? (n.when = nP),
          (e._zod.check = (n) => {
            let i = n.value,
              r = i.length,
              a =
                "string" == typeof i && r >= t.length && r <= 2 * t.length
                  ? eD(i)
                  : r;
            if (a === t.length) return;
            let o = eA(i),
              s = a > t.length;
            n.issues.push({
              origin: o,
              ...(s
                ? { code: "too_big", maximum: t.length }
                : { code: "too_small", minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          });
      }),
      nW = e1("$ZodCheckStringFormat", (e, t) => {
        var n, i;
        nU.init(e, t),
          t.pattern
            ? (n = e._zod).check ??
              (n.check = (n) => {
                (t.pattern.lastIndex = 0),
                  t.pattern.test(n.value) ||
                    n.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: t.format,
                      input: n.value,
                      ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                      inst: e,
                      continue: !t.abort,
                    });
              })
            : (i = e._zod).check ?? (i.check = () => {});
      }),
      nK = e1("$ZodCheckRegex", (e, t) => {
        nW.init(e, t),
          (e._zod.check = (n) => {
            (t.pattern.lastIndex = 0),
              t.pattern.test(n.value) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "regex",
                  input: n.value,
                  pattern: t.pattern.toString(),
                  inst: e,
                  continue: !t.abort,
                });
          });
      }),
      nG = e1("$ZodCheckLowerCase", (e, t) => {
        t.pattern ?? (t.pattern = ng), nW.init(e, t);
      }),
      nH = e1("$ZodCheckUpperCase", (e, t) => {
        t.pattern ?? (t.pattern = n$), nW.init(e, t);
      }),
      nX = e1("$ZodCheckIncludes", (e, t) => {
        nU.init(e, t);
        let n = er(t.includes),
          i = new RegExp(
            "number" == typeof t.position ? `^.{${t.position},}${n}` : n
          );
        (t.pattern = i),
          (e._zod.check = (n) => {
            n.value.includes(t.includes, t.position) ||
              n.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: t.includes,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      nY = e1("$ZodCheckStartsWith", (e, t) => {
        nU.init(e, t);
        let n = RegExp(`^${er(t.prefix)}.*`);
        t.pattern ?? (t.pattern = n),
          (e._zod.check = (n) => {
            n.value.startsWith(t.prefix) ||
              n.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: t.prefix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      nQ = e1("$ZodCheckEndsWith", (e, t) => {
        nU.init(e, t);
        let n = RegExp(`.*${er(t.suffix)}$`);
        t.pattern ?? (t.pattern = n),
          (e._zod.check = (n) => {
            n.value.endsWith(t.suffix) ||
              n.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: t.suffix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      });
    function n0(e, t, n) {
      e.issues.length && t.issues.push(...ew(n, e.issues));
    }
    let n1 = e1("$ZodCheckProperty", (e, t) => {
        nU.init(e, t),
          (e._zod.check = (e) => {
            let n = t.schema._zod.run(
              { value: e.value[t.property], issues: [] },
              {}
            );
            if (n instanceof Promise)
              return n.then((n) => n0(n, e, t.property));
            n0(n, e, t.property);
          });
      }),
      n4 = e1("$ZodCheckProperties", (e, t) => {
        let n;
        nU.init(e, t),
          eB(e, Symbol.iterator, function* () {
            yield e;
          }),
          (e._zod.check = (i) => {
            let r;
            if (null == i.value)
              return void i.issues.push({
                expected: "object",
                code: "invalid_type",
                input: i.value,
                inst: e,
              });
            n ?? (n = Reflect.ownKeys(t.shape).map((e) => [e, t.shape[e]]));
            let a = i.value;
            for (let [e, t] of n) {
              let n = t._zod.run({ value: a[e], issues: [] }, {});
              n instanceof Promise
                ? (r ?? (r = []), r.push(n.then((t) => n0(t, i, e))))
                : n0(n, i, e);
            }
            if (r) return Promise.all(r).then(() => void 0);
          });
      }),
      n6 = e1("$ZodCheckMimeType", (e, t) => {
        nU.init(e, t);
        let n = new Set(t.mime);
        e._zod.check = (i) => {
          n.has(i.value.type) ||
            i.issues.push({
              code: "invalid_value",
              values: t.mime,
              input: i.value.type,
              inst: e,
              continue: !t.abort,
            });
        };
      }),
      n2 = e1("$ZodCheckOverwrite", (e, t) => {
        nU.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          });
      });
    e.s(
      [
        "$ZodCheck",
        0,
        nU,
        "$ZodCheckBigIntFormat",
        0,
        nq,
        "$ZodCheckEndsWith",
        0,
        nQ,
        "$ZodCheckGreaterThan",
        0,
        nZ,
        "$ZodCheckIncludes",
        0,
        nX,
        "$ZodCheckLengthEquals",
        0,
        nV,
        "$ZodCheckLessThan",
        0,
        nE,
        "$ZodCheckLowerCase",
        0,
        nG,
        "$ZodCheckMaxLength",
        0,
        nB,
        "$ZodCheckMaxSize",
        0,
        nR,
        "$ZodCheckMimeType",
        0,
        n6,
        "$ZodCheckMinLength",
        0,
        nJ,
        "$ZodCheckMinSize",
        0,
        nF,
        "$ZodCheckMultipleOf",
        0,
        nT,
        "$ZodCheckNumberFormat",
        0,
        nL,
        "$ZodCheckOverwrite",
        0,
        n2,
        "$ZodCheckProperties",
        0,
        n4,
        "$ZodCheckProperty",
        0,
        n1,
        "$ZodCheckRegex",
        0,
        nK,
        "$ZodCheckSizeEquals",
        0,
        nM,
        "$ZodCheckStartsWith",
        0,
        nY,
        "$ZodCheckStringFormat",
        0,
        nW,
        "$ZodCheckUpperCase",
        0,
        nH,
      ],
      355605
    );
    class n9 {
      constructor(e = [], t = {}) {
        (this.content = []),
          (this.indent = 0),
          (this.args = e),
          (this.closed = t);
      }
      indented(e) {
        this.indent += 1;
        try {
          e(this);
        } finally {
          this.indent -= 1;
        }
      }
      write(e) {
        if ("function" == typeof e) {
          e(this, { execution: "sync" }), e(this, { execution: "async" });
          return;
        }
        let t = e.split("\n").filter((e) => e),
          n = Math.min(...t.map((e) => e.length - e.trimStart().length));
        for (let e of t
          .map((e) => e.slice(n))
          .map((e) => " ".repeat(2 * this.indent) + e))
          this.content.push(e);
      }
      compile() {
        let e = Function,
          t = this?.content ?? [""];
        return new e(
          ...Object.keys(this.closed),
          `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`
        )(...Object.values(this.closed));
      }
    }
    e.s(["Doc", 0, n9], 698530);
    let n3 = { major: 4, minor: 6, patch: 7 };
    e.s(["version", 0, n3], 398477);
    let n5 = e1(
        "$ZodType",
        (e, t) => {
          var n;
          e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = n3);
          let i = e._zod.def.checks,
            r = e._zod.traits.has("$ZodCheck")
              ? [e, ...(i ?? [])]
              : i?.length
              ? [...i]
              : [];
          for (let t of r) for (let n of t._zod.onattach) n(e);
          if (0 === r.length)
            (n = e._zod).deferred ?? (n.deferred = []),
              e._zod.deferred?.push(() => {
                e._zod.run = e._zod.parse;
              });
          else {
            let t = (t, n, i) => {
                let r;
                if (t.memo) return t;
                let a = e_(t);
                for (let o of n) {
                  if (o._zod.def.when) {
                    if (ex(t) || !o._zod.def.when(t)) continue;
                  } else if (a) continue;
                  let n = t.issues.length,
                    s = o._zod.check(t);
                  if (s instanceof Promise && i?.async === !1) throw new e6();
                  if (r || s instanceof Promise)
                    r = (r ?? Promise.resolve()).then(async () => {
                      await s,
                        t.issues.length !== n &&
                          (eS(t.issues, n, e), a || (a = e_(t, n)));
                    });
                  else {
                    if (t.issues.length === n) continue;
                    eS(t.issues, n, e), a || (a = e_(t, n));
                  }
                }
                return r ? r.then(() => t) : t;
              },
              n = (n, i, a) => {
                if (e_(n)) return (n.aborted = !0), n;
                let o = t(i, r, a);
                if (o instanceof Promise) {
                  if (!1 === a.async) throw new e6();
                  return o.then((t) => e._zod.parse(t, a));
                }
                return e._zod.parse(o, a);
              };
            e._zod.run = (i, a) => {
              if (a.skipChecks) return e._zod.parse(i, a);
              if ("backward" === a.direction) {
                let t = e._zod.parse(
                  { value: i.value, issues: [] },
                  { ...a, skipChecks: !0 }
                );
                return t instanceof Promise
                  ? t.then((e) => n(e, i, a))
                  : n(t, i, a);
              }
              let o = e._zod.parse(i, a);
              if (o instanceof Promise) {
                if (!1 === a.async) throw new e6();
                return o.then((e) => t(e, r, a));
              }
              return t(o, r, a);
            };
          }
        },
        {
          get "~standard"() {
            return eB(this, "~standard", ie(this));
          },
          set "~standard"(e) {
            eM(this, "~standard", e);
          },
        }
      ),
      n8 = (e, t) =>
        e.issues.length
          ? { issues: e.issues.map((e) => ej(e, t, e3())) }
          : { value: e.value };
    async function n7(e, t) {
      let n = { async: !0 };
      return n8(await e._zod.run({ value: t, issues: [] }, n), n);
    }
    function ie(e) {
      return {
        validate: (t) => {
          let n = { async: !1 };
          try {
            let i = e._zod.run({ value: t, issues: [] }, n);
            if (!(i instanceof Promise)) return n8(i, n);
          } catch (e) {}
          return n7(e, t);
        },
        vendor: "zod",
        version: 1,
      };
    }
    let it = e1("$ZodString", (e, t) => {
        n5.init(e, t),
          (e._zod.pattern = t.pattern ?? nl),
          (e._zod.parse = (n, i) => {
            if (t.coerce)
              try {
                n.value = String(n.value);
              } catch (e) {}
            return (
              "string" == typeof n.value ||
                n.issues.push({
                  expected: "string",
                  code: "invalid_type",
                  input: n.value,
                  inst: e,
                }),
              n
            );
          });
      }),
      ii = e1("$ZodStringFormat", (e, t) => {
        nW.init(e, t), it.init(e, t);
      }),
      ir = e1("$ZodGUID", (e, t) => {
        t.pattern ?? (t.pattern = tV), ii.init(e, t);
      }),
      ia = e1("$ZodUUID", (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
            t.version
          ];
          if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ?? (t.pattern = tW(e));
        } else t.pattern ?? (t.pattern = tW());
        ii.init(e, t);
      }),
      io = e1("$ZodEmail", (e, t) => {
        t.pattern ?? (t.pattern = tX), ii.init(e, t);
      });
    function is(e) {
      try {
        if ("u" > typeof URL && "function" == typeof URL.canParse)
          return URL.canParse(e);
        return new URL(e), !0;
      } catch {
        return !1;
      }
    }
    function iu(e, t) {
      return "normalize" in t || "hostname" in t || "protocol" in t
        ? il(e, t)
        : is(e) || 2;
    }
    function il(e, t) {
      if (
        !t.normalize &&
        t.protocol?.source === t7.source &&
        !/^https?:\/\//i.test(e)
      )
        return 1;
      try {
        if ("u" > typeof URL) {
          let t = URL;
          if ("function" == typeof t.parse) return t.parse(e) ?? 2;
        }
        return new URL(e);
      } catch {
        return 2;
      }
    }
    let id = /[\t\n\r]/g;
    function ic(e) {
      return e.replace(id, "");
    }
    function im(e, t) {
      return (t.lastIndex = 0), t.test(e.hostname);
    }
    function ip(e, t) {
      return (
        (t.lastIndex = 0),
        t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol)
      );
    }
    let ih = e1("$ZodURL", (e, t) => {
        ii.init(e, t),
          (e._zod.check = (n) => {
            try {
              let i = n.value.trim(),
                r = iu(i, t);
              if (1 === r)
                return void n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid URL format",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              if (2 === r)
                return void n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              if (!0 === r) {
                n.value = ic(i);
                return;
              }
              t.hostname &&
                !im(r, t.hostname) &&
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid hostname",
                  pattern: t.hostname.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                }),
                t.protocol &&
                  !ip(r, t.protocol) &&
                  n.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: t.protocol.source,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  }),
                (n.value = t.normalize ? r.href : ic(i));
              return;
            } catch (i) {
              n.issues.push({
                code: "invalid_format",
                format: "url",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          });
      }),
      iv = e1("$ZodEmoji", (e, t) => {
        t.pattern ?? (t.pattern = tQ()), ii.init(e, t);
      }),
      ig = e1("$ZodNanoID", (e, t) => {
        if (
          void 0 !== t.length &&
          (!Number.isInteger(t.length) || t.length < 1)
        )
          throw Error(`Invalid nanoid length: ${t.length}`);
        t.pattern ?? (t.pattern = void 0 === t.length ? tM : tB(t.length)),
          ii.init(e, t);
      }),
      i$ = e1("$ZodCUID", (e, t) => {
        t.pattern ?? (t.pattern = tT), ii.init(e, t);
      }),
      iy = e1("$ZodCUID2", (e, t) => {
        t.pattern ?? (t.pattern = tL), ii.init(e, t);
      }),
      ib = e1("$ZodULID", (e, t) => {
        t.pattern ?? (t.pattern = tq), ii.init(e, t);
      }),
      i_ = e1("$ZodXID", (e, t) => {
        t.pattern ?? (t.pattern = tR), ii.init(e, t);
      }),
      ix = e1("$ZodKSUID", (e, t) => {
        t.pattern ?? (t.pattern = tF), ii.init(e, t);
      }),
      iw = e1("$ZodISODateTime", (e, t) => {
        t.pattern ?? (t.pattern = nu(t)), ii.init(e, t);
      }),
      ik = e1("$ZodISODate", (e, t) => {
        t.pattern ?? (t.pattern = na), ii.init(e, t);
      }),
      iI = e1("$ZodISOTime", (e, t) => {
        t.pattern ?? (t.pattern = ns(t)), ii.init(e, t);
      }),
      iS = e1("$ZodISODuration", (e, t) => {
        t.pattern ?? (t.pattern = tJ), ii.init(e, t);
      }),
      ij = e1("$ZodIPv4", (e, t) => {
        t.pattern ?? (t.pattern = t0), ii.init(e, t);
      }),
      iN = /^[0-9a-fA-F:.]+$/;
    function iz(e) {
      return !!iN.test(e) && is(`http://[${e}]`);
    }
    let iD = e1("$ZodIPv6", (e, t) => {
        t.pattern ?? (t.pattern = t1),
          ii.init(e, t),
          (e._zod.check = (n) => {
            iz(n.value) ||
              n.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iA = e1("$ZodMAC", (e, t) => {
        t.pattern ?? (t.pattern = t4(t.delimiter)), ii.init(e, t);
      }),
      iU = e1("$ZodCIDRv4", (e, t) => {
        t.pattern ?? (t.pattern = t6), ii.init(e, t);
      });
    function iO(e) {
      let t = e.split("/");
      if (2 !== t.length) return !1;
      let [n, i] = t;
      if (!i) return !1;
      let r = Number(i);
      return `${r}` === i && !(r < 0) && !(r > 128) && iz(n);
    }
    let iP = e1("$ZodCIDRv6", (e, t) => {
      t.pattern ?? (t.pattern = t2),
        ii.init(e, t),
        (e._zod.check = (n) => {
          iO(n.value) ||
            n.issues.push({
              code: "invalid_format",
              format: "cidrv6",
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
        });
    });
    function iC(e) {
      if ("" === e) return !0;
      if (/\s/.test(e) || e.length % 4 != 0) return !1;
      try {
        return atob(e), !0;
      } catch {
        return !1;
      }
    }
    let iE = /^[0-9a-zA-Z+/]*={0,2}$/,
      iZ = e1("$ZodBase64", (e, t) => {
        t.pattern ?? (t.pattern = iE),
          ii.init(e, t),
          (e._zod.check = (n) => {
            iC(n.value) ||
              n.issues.push({
                code: "invalid_format",
                format: "base64",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iT = /^[A-Za-z0-9_-]*$/;
    function iL(e) {
      if (!iT.test(e)) return !1;
      let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
      return iC(t.padEnd(4 * Math.ceil(t.length / 4), "="));
    }
    let iq = e1("$ZodBase64URL", (e, t) => {
        t.pattern ?? (t.pattern = iT),
          ii.init(e, t),
          (e._zod.check = (n) => {
            iL(n.value) ||
              n.issues.push({
                code: "invalid_format",
                format: "base64url",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iR = e1("$ZodE164", (e, t) => {
        t.pattern ?? (t.pattern = ne), ii.init(e, t);
      }),
      iF = /[- ]/g;
    function iM(e) {
      return (
        !!nt.test(e) &&
        (function (e) {
          let t = e.length,
            n = 1,
            i = 0;
          for (; t; ) {
            let r = e.charCodeAt(--t) - 48;
            (n ^= 1), (i += n ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][r] : r);
          }
          return i % 10 == 0;
        })(e.replace(iF, ""))
      );
    }
    let iB = e1("$ZodCreditCard", (e, t) => {
      t.pattern ?? (t.pattern = nt),
        ii.init(e, t),
        (e._zod.check = (n) => {
          iM(n.value) ||
            n.issues.push({
              code: "invalid_format",
              format: "credit_card",
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
        });
    });
    function iJ(e) {
      return (
        !!ni.test(e) &&
        (function (e) {
          let t = 0,
            n = e.length;
          for (let i = 4; i < n; i++) {
            let n = e.charCodeAt(i);
            t = (n >= 65 ? 100 * t + (n - 55) : 10 * t + (n - 48)) % 97;
          }
          for (let n = 0; n < 4; n++) {
            let i = e.charCodeAt(n);
            t = (i >= 65 ? 100 * t + (i - 55) : 10 * t + (i - 48)) % 97;
          }
          return 1 === t;
        })(e)
      );
    }
    let iV = e1("$ZodIBAN", (e, t) => {
      t.pattern ?? (t.pattern = ni),
        ii.init(e, t),
        (e._zod.check = (n) => {
          iJ(n.value) ||
            n.issues.push({
              code: "invalid_format",
              format: "iban",
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
        });
    });
    function iW(e, t = null) {
      try {
        let n = e.split(".");
        if (3 !== n.length) return !1;
        let [i] = n;
        if (!i) return !1;
        let r = JSON.parse(atob(i));
        if (
          ("typ" in r && r?.typ !== "JWT") ||
          !r.alg ||
          (t && (!("alg" in r) || r.alg !== t))
        )
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }
    let iK = e1("$ZodJWT", (e, t) => {
        ii.init(e, t),
          (e._zod.check = (n) => {
            iW(n.value, t.alg) ||
              n.issues.push({
                code: "invalid_format",
                format: "jwt",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iG = e1("$ZodCustomStringFormat", (e, t) => {
        ii.init(e, t),
          (e._zod.check = (n) => {
            t.fn(n.value) ||
              n.issues.push({
                code: "invalid_format",
                format: t.format,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      }),
      iH = e1("$ZodNumber", (e, t) => {
        n5.init(e, t),
          (e._zod.pattern = nf),
          (e._zod.parse = (n, i) => {
            if (t.coerce)
              try {
                n.value = Number(n.value);
              } catch (e) {}
            let r = n.value;
            if ("number" == typeof r && !Number.isNaN(r) && Number.isFinite(r))
              return n;
            let a =
              "number" == typeof r
                ? Number.isNaN(r)
                  ? "NaN"
                  : Number.isFinite(r)
                  ? void 0
                  : String(r)
                : void 0;
            return (
              n.issues.push({
                expected: "number",
                code: "invalid_type",
                input: r,
                inst: e,
                ...(a ? { received: a } : {}),
              }),
              n
            );
          });
      }),
      iX = e1("$ZodNumberFormat", (e, t) => {
        nL.init(e, t), iH.init(e, t);
      }),
      iY = e1("$ZodBoolean", (e, t) => {
        n5.init(e, t),
          (e._zod.pattern = np),
          (e._zod.parse = (n, i) => {
            if (t.coerce)
              try {
                n.value = !!n.value;
              } catch (e) {}
            let r = n.value;
            return (
              "boolean" == typeof r ||
                n.issues.push({
                  expected: "boolean",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                }),
              n
            );
          });
      }),
      iQ = e1("$ZodBigInt", (e, t) => {
        n5.init(e, t),
          (e._zod.pattern = nc),
          (e._zod.parse = (n, i) => {
            if (t.coerce)
              try {
                n.value = BigInt(n.value);
              } catch (e) {}
            return (
              "bigint" == typeof n.value ||
                n.issues.push({
                  expected: "bigint",
                  code: "invalid_type",
                  input: n.value,
                  inst: e,
                }),
              n
            );
          });
      }),
      i0 = e1("$ZodBigIntFormat", (e, t) => {
        nq.init(e, t), iQ.init(e, t);
      }),
      i1 = e1("$ZodSymbol", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (t, n) => {
            let i = t.value;
            return (
              "symbol" == typeof i ||
                t.issues.push({
                  expected: "symbol",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
              t
            );
          });
      }),
      i4 = e1("$ZodUndefined", (e, t) => {
        n5.init(e, t),
          (e._zod.pattern = nv),
          (e._zod.values = new Set([void 0])),
          (e._zod.parse = (t, n) => {
            let i = t.value;
            return (
              void 0 === i ||
                t.issues.push({
                  expected: "undefined",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
              t
            );
          });
      }),
      i6 = e1("$ZodNull", (e, t) => {
        n5.init(e, t),
          (e._zod.pattern = nh),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (t, n) => {
            let i = t.value;
            return (
              null === i ||
                t.issues.push({
                  expected: "null",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
              t
            );
          });
      }),
      i2 = e1("$ZodAny", (e, t) => {
        n5.init(e, t), (e._zod.parse = (e) => e);
      }),
      i9 = e1("$ZodUnknown", (e, t) => {
        n5.init(e, t), (e._zod.parse = (e) => e);
      }),
      i3 = e1("$ZodNever", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({
              expected: "never",
              code: "invalid_type",
              input: t.value,
              inst: e,
            }),
            t
          ));
      }),
      i5 = e1("$ZodVoid", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (t, n) => {
            let i = t.value;
            return (
              void 0 === i ||
                t.issues.push({
                  expected: "void",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
              t
            );
          });
      }),
      i8 = e1("$ZodDate", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (n, i) => {
            if (t.coerce)
              try {
                n.value = new Date(n.value);
              } catch (e) {}
            let r = n.value,
              a = r instanceof Date;
            return (
              (a && !Number.isNaN(r.getTime())) ||
                n.issues.push({
                  expected: "date",
                  code: "invalid_type",
                  input: r,
                  ...(a ? { received: "Invalid Date" } : {}),
                  inst: e,
                }),
              n
            );
          });
      });
    function i7(e, t) {
      let n = eI(e._zod.def.checks);
      if (!n.length) return;
      let i = Math.min(...n.map((e) => e[0])),
        r = e._zod.parse;
      e._zod.parse = (n, a) => {
        let o = t(n.value);
        if (o > i && !a?.skipChecks && a?.direction !== "backward") {
          for (let [t, i] of eI(e._zod.def.checks))
            if (o > t && i._zod.def.when(n)) {
              let t = n.issues.length;
              return (
                i._zod.check(n),
                (n.issues[t].continue = !1),
                eS(n.issues, t, e),
                n
              );
            }
        }
        return r(n, a);
      };
    }
    let re = (e) => (Array.isArray(e) ? e.length : -1),
      rt = (e) => (e instanceof Map ? e.size : -1),
      rn = (e) => (e instanceof Set ? e.size : -1);
    function ri(e, t, n) {
      e.issues.length && t.issues.push(...ew(n, e.issues)),
        (t.value[n] = e.value);
    }
    let rr = e1("$ZodArray", (e, t) => {
      n5.init(e, t);
      let n = e9.memoizer;
      n?.attach(e),
        (e._zod.parse = (i, r) => {
          let a = i.value;
          if (!Array.isArray(a))
            return (
              i.issues.push({
                expected: "array",
                code: "invalid_type",
                input: a,
                inst: e,
              }),
              i
            );
          i.value = n ? n.alloc(e, i, Array(a.length), r) : Array(a.length);
          let o = [],
            s = r?.abortEarly;
          for (let e = 0; e < a.length; e++) {
            let n = a[e],
              u = t.element._zod.run({ value: n, issues: [] }, r);
            if (u instanceof Promise) o.push(u.then((t) => ri(t, i, e)));
            else if ((ri(u, i, e), s && 0 !== u.issues.length && e_(u))) break;
          }
          return o.length ? Promise.all(o).then(() => i) : i;
        }),
        i7(e, re);
    });
    function ra(e, t, n, i, r, a) {
      let o = n in i,
        s = "optional" === a;
      if (o || !s || "optional" !== r) {
        if (e.issues.length) {
          if (void 0 !== r && s && !o) return;
          t.issues.push(...ew(n, e.issues));
        }
        if (!o && void 0 === r) {
          e.issues.length ||
            t.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: void 0,
              path: [n],
            });
          return;
        }
        void 0 === e.value
          ? (o || ("defaulted" === r && !s)) && (t.value[n] = void 0)
          : (t.value[n] = e.value);
      }
    }
    let ro = [];
    function rs(e) {
      let t = Object.keys(e.shape),
        n = Object.getOwnPropertySymbols(e.shape),
        i = n.length ? n : ro,
        r = i.length ? [...t, ...i] : t;
      for (let t of r)
        if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
          throw Error(
            `Invalid element at key "${String(t)}": expected a Zod schema`
          );
      let a = el(e.shape);
      return {
        ...e,
        allKeys: r,
        symbolKeys: i,
        keySet: new Set(t),
        numKeys: t.length,
        optionalKeys: new Set(a),
      };
    }
    function ru(e, t, n, i, r, a, o) {
      let s = [],
        u = r.keySet,
        l = r.catchall._zod,
        d = l.def.type,
        c = l.optin,
        m = l.optout,
        f = 0;
      for (let r in t) {
        if (o && n.issues.length !== f) {
          if (e_(n, f)) break;
          f = n.issues.length;
        }
        if (u.has(r)) continue;
        if ("__proto__" === r) {
          "never" === d && s.push(r);
          continue;
        }
        if ("never" === d) {
          s.push(r);
          continue;
        }
        let a = l.run({ value: t[r], issues: [] }, i);
        a instanceof Promise
          ? e.push(a.then((e) => ra(e, n, r, t, c, m)))
          : ra(a, n, r, t, c, m);
      }
      return (s.length &&
        n.issues.push({
          code: "unrecognized_keys",
          keys: s,
          input: t,
          inst: a,
          continue: !0,
        }),
      e.length)
        ? Promise.all(e).then(() => n)
        : n;
    }
    let rl = e1("$ZodObject", (e, t) => {
        let n;
        n5.init(e, t);
        let i = Object.getOwnPropertyDescriptor(t, "shape"),
          r = i?.get ? i.get.raw : t.shape ?? {};
        if (r) {
          let e = () => {
            let n = { ...r };
            return (
              Object.defineProperty(t, "shape", { value: n }), (e.raw = n), n
            );
          };
          (e.raw = r), Object.defineProperty(t, "shape", { get: e });
        }
        let a = z(() => rs(t));
        eK(e, "propValues", (e) => {
          let t = e.def.shape,
            n = {};
          for (let e in t) {
            let i = t[e]._zod;
            if (i.values) {
              for (let t of (Object.prototype.hasOwnProperty.call(n, e) ||
                E(n, e, new Set()),
              i.values))
                n[e].add(t);
              void 0 !== i.optin && n[e].add(void 0);
            }
          }
          return n;
        });
        let o = t.catchall,
          s = e9.memoizer;
        s?.attach(e),
          (e._zod.parse = (t, i) => {
            n ?? (n = a.value);
            let r = t.value;
            if (!H(r))
              return (
                t.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                }),
                t
              );
            t.value = s ? s.alloc(e, t, {}, i) : {};
            let u = [],
              l = n.shape,
              d = i?.abortEarly,
              c = t.issues.length;
            for (let e of n.allKeys) {
              if (d && t.issues.length !== c) {
                if (e_(t, c)) break;
                c = t.issues.length;
              }
              if ("__proto__" === e) continue;
              let n = l[e],
                a = n._zod.optin,
                o = n._zod.optout,
                s = n._zod.run({ value: r[e], issues: [] }, i);
              s instanceof Promise
                ? u.push(s.then((n) => ra(n, t, e, r, a, o)))
                : ra(s, t, e, r, a, o);
            }
            return o
              ? ru(u, r, t, i, a.value, e, !0 === d)
              : u.length
              ? Promise.all(u).then(() => t)
              : t;
          });
      }),
      rd = e1("$ZodObjectJIT", (e, t) => {
        let n, i;
        rl.init(e, t);
        let r = e._zod.parse,
          a = z(() => rs(t)),
          o = e9.memoizer,
          s = !e9.jitless,
          u = s && X.value,
          l = t.catchall;
        e._zod.parse = (d, c) => {
          i ?? (i = a.value);
          let m = d.value;
          return H(m)
            ? s && u && c?.async === !1 && !0 !== c.jitless
              ? (n ||
                  (n = ((t) => {
                    let n = a.value,
                      i = n.symbolKeys,
                      r = new n9(["payload", "ctx"], {
                        shape: t,
                        inst: e,
                        memo: o,
                        syms: i,
                      }),
                      s = (e) =>
                        `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                      u = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
                    r.write("const input = payload.value;");
                    let l = Object.create(null),
                      d = 0;
                    for (let e of n.allKeys) l[e] = `key_${d++}`;
                    for (let e of (r.write(
                      o
                        ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
                        : "const newResult = {};"
                    ),
                    n.allKeys)) {
                      if ("__proto__" === e) continue;
                      let n = l[e],
                        a =
                          "symbol" == typeof e ? `syms[${i.indexOf(e)}]` : W(e),
                        o = `${a} in input`,
                        d = t[e],
                        c = d?._zod?.optin,
                        m = void 0 !== c,
                        f = d?._zod?.optout === "optional";
                      if ((r.write(`const ${n} = ${s(a)};`), m && f)) {
                        let e =
                          "optional" === c
                            ? `${n}_present`
                            : `${n}.value !== undefined || ${n}_present`;
                        r.write(`
        const ${n}_present = ${o};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${u(n, a)}
          }

          if (${e}) {
            newResult[${a}] = ${n}.value;
          }
        }

      `);
                      } else
                        m
                          ? (r.write(`
        if (${n}.issues.length) {${u(n, a)}
        }
      `),
                            "defaulted" === c
                              ? r.write(`newResult[${a}] = ${n}.value;`)
                              : r.write(`
        if (${n}.value !== undefined || ${o}) {
          newResult[${a}] = ${n}.value;
        }
      `))
                          : r.write(`
        const ${n}_present = ${o};
        if (${n}.issues.length) {${u(n, a)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${a}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${a}] = ${n}.value;
        }

      `);
                    }
                    return (
                      r.write("payload.value = newResult;"),
                      r.write("return payload;"),
                      r.compile()
                    );
                  })(t.shape)),
                (d = n(d, c)),
                l)
                ? ru([], m, d, c, i, e, c?.abortEarly === !0)
                : d
              : r(d, c)
            : (d.issues.push({
                expected: "object",
                code: "invalid_type",
                input: m,
                inst: e,
              }),
              d);
        };
      });
    function rc(e, t, n, i) {
      for (let n of e) if (0 === n.issues.length) return (t.value = n.value), t;
      let r = e.filter((e) => !e_(e));
      return 1 === r.length
        ? ((t.value = r[0].value), r[0])
        : (t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: n,
            errors: e.map((e) => e.issues.map((e) => ej(e, i, e3()))),
          }),
          t);
    }
    let rm = e1("$ZodUnion", (e, t) => {
      n5.init(e, t),
        eK(e, "optin", (e) =>
          e.def.options.some((e) => "defaulted" === e._zod.optin)
            ? "defaulted"
            : e.def.options.some((e) => void 0 !== e._zod.optin)
            ? "optional"
            : void 0
        ),
        eK(e, "optout", (e) =>
          e.def.options.some((e) => "optional" === e._zod.optout)
            ? "optional"
            : void 0
        ),
        eK(e, "values", (e) => {
          if (e.def.options.every((e) => e._zod.values))
            return new Set(
              e.def.options.flatMap((e) => Array.from(e._zod.values))
            );
        }),
        eK(e, "pattern", (e) => {
          if (e.def.options.every((e) => e._zod.pattern)) {
            let t = e.def.options.map((e) => e._zod.pattern);
            return RegExp(`^(${t.map((e) => A(e.source)).join("|")})$`);
          }
        });
      let n = 1 === t.options.length ? t.options[0]._zod.run : null;
      e._zod.parse = (i, r) => {
        if (n) return n(i, r);
        let a = !1,
          o = [];
        for (let e of t.options) {
          let t = e._zod.run({ value: i.value, issues: [] }, r);
          if (t instanceof Promise) o.push(t), (a = !0);
          else {
            if (0 === t.issues.length) return t;
            o.push(t);
          }
        }
        return a ? Promise.all(o).then((t) => rc(t, i, e, r)) : rc(o, i, e, r);
      };
    });
    function rf(e, t, n, i) {
      let r = [];
      for (let t = 0; t < e.length; t++) 0 === e[t].issues.length && r.push(t);
      return (
        1 === r.length
          ? (t.value = e[r[0]].value)
          : 0 === r.length
          ? t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => ej(e, i, e3()))),
            })
          : t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: [],
              inclusive: !1,
              matches: r,
            }),
        t
      );
    }
    let rp = e1("$ZodXor", (e, t) => {
      rm.init(e, t), (t.inclusive = !1);
      let n = 1 === t.options.length ? t.options[0]._zod.run : null;
      e._zod.parse = (i, r) => {
        if (n) return n(i, r);
        let a = !1,
          o = [];
        for (let e of t.options) {
          let t = e._zod.run({ value: i.value, issues: [] }, r);
          t instanceof Promise ? (o.push(t), (a = !0)) : o.push(t);
        }
        return a ? Promise.all(o).then((t) => rf(t, i, e, r)) : rf(o, i, e, r);
      };
    });
    function rh(e, t) {
      let n = e._zod,
        i = n.bag.optionsMap;
      i || ((i = rv(n.def)), (n.bag.optionsMap = i));
      let r = i.get(t);
      if (null === r)
        throw Error(`Ambiguous discriminator value "${String(t)}"`);
      return r;
    }
    function rv(e) {
      let t = new Map();
      for (let n of e.options) {
        let i = n._zod.propValues?.[e.discriminator];
        if (!i || 0 === i.size)
          throw Error(
            `Invalid discriminated union option at index "${e.options.indexOf(
              n
            )}"`
          );
        for (let e of i)
          if (t.has(e)) {
            if (void 0 !== e)
              throw Error(`Duplicate discriminator value "${String(e)}"`);
            t.set(e, null);
          } else t.set(e, n);
      }
      return t;
    }
    let rg = e1("$ZodDiscriminatedUnion", (e, t) => {
        (t.inclusive = !1), rm.init(e, t);
        let n = e._zod.parse;
        eK(e, "propValues", (e) => {
          let t = {},
            n = 0;
          for (let i of e.def.options) {
            let r = i._zod.propValues;
            if (!r || 0 === Object.keys(r).length)
              throw Error(
                `Invalid discriminated union option at index "${e.def.options.indexOf(
                  i
                )}"`
              );
            for (let [i, a] of (r[e.def.discriminator]?.has(void 0) && n++,
            Object.entries(r)))
              for (let e of (Object.prototype.hasOwnProperty.call(t, i) ||
                E(t, i, new Set()),
              a))
                t[i].add(e);
          }
          return (
            !e.def.unionFallback &&
              n > 1 &&
              t[e.def.discriminator]?.delete(void 0),
            t
          );
        }),
          t.options.forEach((e, n) => {
            let i = Z(e._zod.def);
            if (i && !Object.prototype.hasOwnProperty.call(i, t.discriminator))
              throw Error(`Invalid discriminated union option at index "${n}"`);
          });
        let i = z(() => rv(t));
        e._zod.parse = (r, a) => {
          let o = r.value;
          if (!H(o))
            return (
              r.issues.push({
                code: "invalid_type",
                expected: "object",
                input: o,
                inst: e,
              }),
              r
            );
          let s = o?.[t.discriminator],
            u = i.value.get(s);
          return u && (void 0 !== s || "backward" !== a.direction)
            ? u._zod.run(r, a)
            : t.unionFallback || "backward" === a.direction
            ? n(r, a)
            : (r.issues.push({
                code: "invalid_union",
                errors: [],
                note: "No matching discriminator",
                discriminator: t.discriminator,
                options: Array.from(i.value.keys()).filter(
                  (e) => null !== i.value.get(e)
                ),
                input: o,
                path: [t.discriminator],
                inst: e,
              }),
              r);
        };
      }),
      r$ = e1("$ZodIntersection", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (e, n) => {
            let i = e.value,
              r = t.left._zod.run({ value: i, issues: [] }, n),
              a = t.right._zod.run({ value: i, issues: [] }, n);
            return r instanceof Promise || a instanceof Promise
              ? Promise.all([r, a]).then(([t, n]) => rb(e, t, n))
              : rb(e, r, a);
          });
      });
    function ry(e, t) {
      if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
        return { valid: !0, data: e };
      if (Y(e) && Y(t)) {
        let n = Object.keys(t),
          i = Object.keys(e).filter((e) => -1 !== n.indexOf(e)),
          r = { ...e, ...t };
        for (let n of (Object.prototype.hasOwnProperty.call(r, "__proto__") &&
          delete r.__proto__,
        i)) {
          if ("__proto__" === n) continue;
          let i = ry(e[n], t[n]);
          if (!i.valid)
            return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] };
          r[n] = i.data;
        }
        return { valid: !0, data: r };
      }
      if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
        let n = [];
        for (let i = 0; i < e.length; i++) {
          let r = ry(e[i], t[i]);
          if (!r.valid)
            return { valid: !1, mergeErrorPath: [i, ...r.mergeErrorPath] };
          n.push(r.data);
        }
        return { valid: !0, data: n };
      }
      return { valid: !1, mergeErrorPath: [] };
    }
    function rb(e, t, n) {
      let i,
        r = new Map(),
        a = new Map(),
        o = (e, t) => {
          let n;
          if ("unrecognized_keys" !== e.code || e.path?.length)
            if (
              "invalid_key" !== e.code ||
              "record" !== e.origin ||
              e.path?.length !== 1
            )
              return !1;
            else {
              let t = String(e.path[0]);
              a.has(t) || a.set(t, e), (n = [t]);
            }
          else i ?? (i = e), (n = e.keys);
          for (let e of n) r.has(e) || r.set(e, {}), (r.get(e)[t] = !0);
          return !0;
        };
      for (let n of t.issues) o(n, "l") || e.issues.push(n);
      for (let t of n.issues) o(t, "r") || e.issues.push(t);
      let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
      if (s.length) {
        let t = i ? s.filter((e) => i.keys.includes(e)) : [];
        for (let n of (t.length && e.issues.push({ ...i, keys: t }), s))
          !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
      }
      let u = ry(t.value, n.value);
      if (!u.valid) {
        if (e_(e)) return e;
        throw Error(
          `Unmergable intersection. Error path: ${JSON.stringify(
            u.mergeErrorPath
          )}`
        );
      }
      return (e.value = u.data), e;
    }
    let r_ = e1("$ZodTuple", (e, t) => {
      n5.init(e, t);
      let n = t.items,
        i = e9.memoizer;
      i?.attach(e),
        (e._zod.parse = (r, a) => {
          let o = r.value;
          if (!Array.isArray(o))
            return (
              r.issues.push({
                input: o,
                inst: e,
                expected: "tuple",
                code: "invalid_type",
              }),
              r
            );
          r.value = i ? i.alloc(e, r, [], a) : [];
          let s = [],
            u = rx(n, "optin"),
            l = rx(n, "optout");
          if (!t.rest) {
            if (o.length < u)
              return (
                r.issues.push({
                  code: "too_small",
                  minimum: u,
                  inclusive: !0,
                  input: o,
                  inst: e,
                  origin: "array",
                }),
                r
              );
            o.length > n.length &&
              r.issues.push({
                code: "too_big",
                maximum: n.length,
                inclusive: !0,
                input: o,
                inst: e,
                origin: "array",
              });
          }
          let d = Array(n.length),
            c = t.rest ? a?.abortEarly : void 0,
            m = !1;
          for (let e = 0; e < n.length; e++) {
            let t = n[e]._zod.run({ value: o[e], issues: [] }, a);
            t instanceof Promise
              ? s.push(
                  t.then((t) => {
                    d[e] = t;
                  })
                )
              : ((d[e] = t), c && !m && t.issues.length && (m = e_(t)));
          }
          if (t.rest && !m) {
            let e = n.length - 1,
              i = o.slice(n.length),
              u = r.issues.length;
            for (let n of i) {
              if (c && r.issues.length !== u) {
                if (e_(r, u)) break;
                u = r.issues.length;
              }
              e++;
              let i = t.rest._zod.run({ value: n, issues: [] }, a);
              i instanceof Promise
                ? s.push(i.then((t) => rw(t, r, e)))
                : rw(i, r, e);
            }
          }
          return s.length
            ? Promise.all(s).then(() => rk(d, r, n, o, l))
            : rk(d, r, n, o, l);
        });
    });
    function rx(e, t) {
      for (let n = e.length - 1; n >= 0; n--)
        if (
          !("optin" === t
            ? void 0 !== e[n]._zod.optin
            : "optional" === e[n]._zod.optout)
        )
          return n + 1;
      return 0;
    }
    function rw(e, t, n) {
      e.issues.length && t.issues.push(...ew(n, e.issues)),
        (t.value[n] = e.value);
    }
    function rk(e, t, n, i, r) {
      for (let a = 0; a < n.length; a++) {
        let o = e[a],
          s = a < i.length;
        if (!s && a >= r && "optional" === n[a]._zod.optin) {
          t.value.length = a;
          break;
        }
        if (o.issues.length) {
          if (!s && a >= r) {
            t.value.length = a;
            break;
          }
          t.issues.push(...ew(a, o.issues));
        }
        t.value[a] = o.value;
      }
      for (let e = t.value.length - 1; e >= i.length; e--)
        if ("optional" === n[e]._zod.optout && void 0 === t.value[e])
          t.value.length = e;
        else break;
      return t;
    }
    let rI = e1("$ZodRecord", (e, t) => {
        n5.init(e, t);
        let n = e9.memoizer;
        n?.attach(e),
          (e._zod.parse = (i, r) => {
            let a = i.value;
            if (!Y(a))
              return (
                i.issues.push({
                  expected: "record",
                  code: "invalid_type",
                  input: a,
                  inst: e,
                }),
                i
              );
            let o = [],
              s = t.keyType._zod.values;
            if (s && !t.partial) {
              let u;
              i.value = n ? n.alloc(e, i, {}, r) : {};
              let l = new Set();
              for (let n of s)
                if (
                  "string" == typeof n ||
                  "number" == typeof n ||
                  "symbol" == typeof n
                ) {
                  if (
                    (l.add("number" == typeof n ? n.toString() : n),
                    "__proto__" === n)
                  )
                    continue;
                  let s = t.keyType._zod.run({ value: n, issues: [] }, r);
                  if (s instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently"
                    );
                  if (s.issues.length) {
                    i.issues.push({
                      code: "invalid_key",
                      origin: "record",
                      issues: s.issues.map((e) => ej(e, r, e3())),
                      input: n,
                      path: [n],
                      inst: e,
                    });
                    continue;
                  }
                  let u = s.value;
                  if ("__proto__" === u) continue;
                  let d = t.valueType._zod.run({ value: a[n], issues: [] }, r);
                  d instanceof Promise
                    ? o.push(
                        d.then((e) => {
                          e.issues.length && i.issues.push(...ew(n, e.issues)),
                            (i.value[u] = e.value);
                        })
                      )
                    : (d.issues.length && i.issues.push(...ew(n, d.issues)),
                      (i.value[u] = d.value));
                }
              for (let e in a)
                if (!l.has(e))
                  if ("loose" === t.mode) {
                    if ("__proto__" === e) continue;
                    i.value[e] = a[e];
                  } else (u = u ?? []).push(e);
              u &&
                u.length > 0 &&
                i.issues.push({
                  code: "unrecognized_keys",
                  input: a,
                  inst: e,
                  keys: u,
                  continue: !0,
                });
            } else {
              let u;
              for (let l of ((i.value = n ? n.alloc(e, i, {}, r) : {}),
              Reflect.ownKeys(a))) {
                if (
                  "__proto__" === l ||
                  !Object.prototype.propertyIsEnumerable.call(a, l)
                )
                  continue;
                let n = t.keyType._zod.run({ value: l, issues: [] }, r);
                if (n instanceof Promise)
                  throw Error(
                    "Async schemas not supported in object keys currently"
                  );
                if ("string" == typeof l && nf.test(l) && n.issues.length) {
                  let e = t.keyType._zod.run(
                    { value: Number(l), issues: [] },
                    r
                  );
                  if (e instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently"
                    );
                  0 === e.issues.length && (n = e);
                }
                if (n.issues.length) {
                  "loose" === t.mode
                    ? (i.value[l] = a[l])
                    : s
                    ? (u = u ?? []).push(l)
                    : i.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: n.issues.map((e) => ej(e, r, e3())),
                        input: l,
                        path: [l],
                        inst: e,
                      });
                  continue;
                }
                let d = n.value;
                if ("__proto__" === d) continue;
                let c = t.valueType._zod.run({ value: a[l], issues: [] }, r);
                c instanceof Promise
                  ? o.push(
                      c.then((e) => {
                        e.issues.length && i.issues.push(...ew(l, e.issues)),
                          (i.value[d] = e.value);
                      })
                    )
                  : (c.issues.length && i.issues.push(...ew(l, c.issues)),
                    (i.value[d] = c.value));
              }
              u &&
                u.length > 0 &&
                i.issues.push({
                  code: "unrecognized_keys",
                  input: a,
                  inst: e,
                  keys: u,
                  continue: !0,
                });
            }
            return o.length ? Promise.all(o).then(() => i) : i;
          });
      }),
      rS = e1("$ZodMap", (e, t) => {
        n5.init(e, t);
        let n = e9.memoizer;
        n?.attach(e),
          (e._zod.parse = (i, r) => {
            let a = i.value;
            if (!(a instanceof Map))
              return (
                i.issues.push({
                  expected: "map",
                  code: "invalid_type",
                  input: a,
                  inst: e,
                }),
                i
              );
            let o = [];
            i.value = n ? n.alloc(e, i, new Map(), r) : new Map();
            let s = r?.abortEarly,
              u = i.issues.length;
            for (let [n, l] of a) {
              if (s && i.issues.length !== u) {
                if (e_(i, u)) break;
                u = i.issues.length;
              }
              let d = t.keyType._zod.run({ value: n, issues: [] }, r),
                c = t.valueType._zod.run({ value: l, issues: [] }, r);
              d instanceof Promise || c instanceof Promise
                ? o.push(
                    Promise.all([d, c]).then(([t, o]) => {
                      rj(t, o, i, n, a, e, r);
                    })
                  )
                : rj(d, c, i, n, a, e, r);
            }
            return o.length ? Promise.all(o).then(() => i) : i;
          }),
          i7(e, rt);
      });
    function rj(e, t, n, i, r, a, o) {
      e.issues.length &&
        (en.has(typeof i)
          ? n.issues.push(...ew(i, e.issues))
          : n.issues.push({
              code: "invalid_key",
              origin: "map",
              input: r,
              inst: a,
              issues: e.issues.map((e) => ej(e, o, e3())),
            })),
        t.issues.length &&
          (en.has(typeof i)
            ? n.issues.push(...ew(i, t.issues))
            : n.issues.push({
                origin: "map",
                code: "invalid_element",
                input: r,
                inst: a,
                key: i,
                issues: t.issues.map((e) => ej(e, o, e3())),
              })),
        n.value.set(e.value, t.value);
    }
    let rN = e1("$ZodSet", (e, t) => {
      n5.init(e, t);
      let n = e9.memoizer;
      n?.attach(e),
        (e._zod.parse = (i, r) => {
          let a = i.value;
          if (!(a instanceof Set))
            return (
              i.issues.push({
                input: a,
                inst: e,
                expected: "set",
                code: "invalid_type",
              }),
              i
            );
          let o = [];
          i.value = n ? n.alloc(e, i, new Set(), r) : new Set();
          let s = r?.abortEarly,
            u = i.issues.length;
          for (let e of a) {
            if (s && i.issues.length !== u) {
              if (e_(i, u)) break;
              u = i.issues.length;
            }
            let n = t.valueType._zod.run({ value: e, issues: [] }, r);
            n instanceof Promise ? o.push(n.then((e) => rz(e, i))) : rz(n, i);
          }
          return o.length ? Promise.all(o).then(() => i) : i;
        }),
        i7(e, rn);
    });
    function rz(e, t) {
      e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
    }
    let rD = e1("$ZodEnum", (e, t) => {
        n5.init(e, t);
        let n = I(t.entries),
          i = new Set(n);
        (e._zod.values = i),
          eK(e, "pattern", (e) => {
            let t = I(e.def.entries).filter((e) => en.has(typeof e));
            return new RegExp(
              t.length
                ? `^(${t.map((e) => er(e.toString())).join("|")})$`
                : "^[^\\s\\S]$"
            );
          }),
          (e._zod.parse = (t, r) => {
            let a = t.value;
            return (
              i.has(a) ||
                t.issues.push({
                  code: "invalid_value",
                  values: n,
                  input: a,
                  inst: e,
                }),
              t
            );
          });
      }),
      rA = e1("$ZodLiteral", (e, t) => {
        n5.init(e, t);
        let n = new Set(t.values);
        (e._zod.values = n),
          eK(e, "pattern", (e) => {
            let t = e.def.values;
            return new RegExp(
              t.length
                ? `^(${t
                    .map((e) =>
                      "string" == typeof e
                        ? er(e)
                        : e
                        ? er(e.toString())
                        : String(e)
                    )
                    .join("|")})$`
                : "^[^\\s\\S]$"
            );
          }),
          (e._zod.parse = (i, r) => {
            let a = i.value;
            return (
              n.has(a) ||
                i.issues.push({
                  code: "invalid_value",
                  values: t.values,
                  input: a,
                  inst: e,
                }),
              i
            );
          });
      }),
      rU = e1("$ZodFile", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (t, n) => {
            let i = t.value;
            return (
              i instanceof File ||
                t.issues.push({
                  expected: "file",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
              t
            );
          });
      }),
      rO = e1("$ZodTransform", (e, t) => {
        n5.init(e, t),
          (e._zod.optin = "optional"),
          e9.memoizer?.guard(e),
          (e._zod.parse = (n, i) => {
            if ("backward" === i.direction) throw new e2(e.constructor.name);
            let r = t.transform(n.value, n);
            if (i.async)
              return (r instanceof Promise ? r : Promise.resolve(r)).then(
                (e) => ((n.value = e), n)
              );
            if (r instanceof Promise) throw new e6();
            return (n.value = r), n;
          });
      });
    function rP(e, t) {
      return (e.value = t.issues.length ? void 0 : t.value), e;
    }
    let rC = e1("$ZodOptional", (e, t) => {
        n5.init(e, t),
          eK(e, "optin", (e) =>
            "defaulted" === e.def.innerType._zod.optin
              ? "defaulted"
              : "optional"
          ),
          (e._zod.optout = "optional"),
          eK(e, "values", (e) => {
            let t = e.def.innerType._zod.values;
            return t ? new Set([...t, void 0]) : void 0;
          }),
          eK(e, "pattern", (e) => {
            let t = e.def.innerType._zod.pattern;
            return t ? RegExp(`^(${A(t.source)})?$`) : void 0;
          }),
          (e._zod.parse = (e, n) => {
            if (void 0 === e.value) {
              if ("defaulted" !== t.innerType._zod.optin) return e;
              let i = t.innerType._zod.run({ value: e.value, issues: [] }, n);
              return i instanceof Promise ? i.then((t) => rP(e, t)) : rP(e, i);
            }
            return t.innerType._zod.run(e, n);
          });
      }),
      rE = e1("$ZodExactOptional", (e, t) => {
        rC.init(e, t),
          eK(e, "values", (e) => e.def.innerType._zod.values),
          eK(e, "pattern", (e) => e.def.innerType._zod.pattern),
          (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
      }),
      rZ = e1("$ZodNullable", (e, t) => {
        n5.init(e, t),
          eK(e, "optin", (e) => e.def.innerType._zod.optin),
          eK(e, "optout", (e) => e.def.innerType._zod.optout),
          eK(e, "pattern", (e) => {
            let t = e.def.innerType._zod.pattern;
            return t ? RegExp(`^(${A(t.source)}|null)$`) : void 0;
          }),
          eK(e, "values", (e) =>
            e.def.innerType._zod.values
              ? new Set([...e.def.innerType._zod.values, null])
              : void 0
          ),
          (e._zod.parse = (e, n) =>
            null === e.value ? e : t.innerType._zod.run(e, n));
      }),
      rT = e1("$ZodDefault", (e, t) => {
        n5.init(e, t),
          (e._zod.optin = "defaulted"),
          eK(e, "values", (e) => e.def.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            if (void 0 === e.value) return (e.value = t.defaultValue), e;
            let i = t.innerType._zod.run(e, n);
            return i instanceof Promise ? i.then((e) => rL(e, t)) : rL(i, t);
          });
      });
    function rL(e, t) {
      return void 0 === e.value && (e.value = t.defaultValue), e;
    }
    let rq = e1("$ZodPrefault", (e, t) => {
        n5.init(e, t),
          (e._zod.optin = "defaulted"),
          eK(e, "values", (e) => e.def.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            "backward" === n.direction ||
              (void 0 === e.value && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          ));
      }),
      rR = e1("$ZodNonOptional", (e, t) => {
        n5.init(e, t),
          eK(e, "values", (e) => {
            let t = e.def.innerType._zod.values;
            return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
          }),
          (e._zod.parse = (n, i) => {
            let r = t.innerType._zod.run(n, i);
            return r instanceof Promise ? r.then((t) => rF(t, e)) : rF(r, e);
          });
      });
    function rF(e, t) {
      return (
        e.issues.length ||
          void 0 !== e.value ||
          e.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: e.value,
            inst: t,
          }),
        e
      );
    }
    let rM = e1("$ZodSuccess", (e, t) => {
      n5.init(e, t),
        (e._zod.parse = (e, n) => {
          if ("backward" === n.direction) throw new e2("ZodSuccess");
          let i = t.innerType._zod.run(e, n);
          return i instanceof Promise
            ? i.then((t) => ((e.value = 0 === t.issues.length), e))
            : ((e.value = 0 === i.issues.length), e);
        });
    });
    function rB(e, t, n, i) {
      return (
        t.issues.length
          ? (e.value = n.catchValue({
              ...t,
              value: e.value,
              error: { issues: t.issues.map((e) => ej(e, i, e3())) },
              input: e.value,
            }))
          : ((e.value = t.value), t.memo && (e.memo = !0)),
        e
      );
    }
    let rJ = e1("$ZodCatch", (e, t) => {
        n5.init(e, t),
          eK(e, "optin", (e) =>
            "defaulted" === e.def.innerType._zod.optin
              ? "defaulted"
              : "optional"
          ),
          eK(e, "optout", (e) => e.def.innerType._zod.optout),
          eK(e, "values", (e) => e.def.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let i = t.innerType._zod.run({ value: e.value, issues: [] }, n);
            return i instanceof Promise
              ? i.then((i) => rB(e, i, t, n))
              : rB(e, i, t, n);
          });
      }),
      rV = e1("$ZodNaN", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (t, n) => (
            ("number" == typeof t.value && Number.isNaN(t.value)) ||
              t.issues.push({
                input: t.value,
                inst: e,
                expected: "nan",
                code: "invalid_type",
              }),
            t
          ));
      }),
      rW = e1("$ZodPipe", (e, t) => {
        n5.init(e, t),
          eK(e, "values", (e) => e.def.in._zod.values),
          eK(e, "optin", (e) => e.def.in._zod.optin),
          eK(e, "optout", (e) => e.def.out._zod.optout),
          eK(e, "propValues", (e) => e.def.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) {
              let i = t.out._zod.run(e, n);
              return i instanceof Promise
                ? i.then((e) => rK(e, t.in, n))
                : rK(i, t.in, n);
            }
            let i = t.in._zod.run(e, n);
            return i instanceof Promise
              ? i.then((e) => rK(e, t.out, n))
              : rK(i, t.out, n);
          });
      });
    function rK(e, t, n) {
      return e.issues.some((e) => "unrecognized_keys" !== e.code)
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, n);
    }
    let rG = e1("$ZodCodec", (e, t) => {
      n5.init(e, t),
        eK(e, "values", (e) => e.def.in._zod.values),
        eK(e, "optin", (e) => e.def.in._zod.optin),
        eK(e, "optout", (e) => e.def.out._zod.optout),
        eK(e, "propValues", (e) => e.def.in._zod.propValues),
        (e._zod.parse = (e, n) => {
          if ("forward" === (n.direction || "forward")) {
            let i = t.in._zod.run(e, n);
            return i instanceof Promise
              ? i.then((e) => rH(e, t, n))
              : rH(i, t, n);
          }
          {
            let i = t.out._zod.run(e, n);
            return i instanceof Promise
              ? i.then((e) => rH(e, t, n))
              : rH(i, t, n);
          }
        });
    });
    function rH(e, t, n) {
      if (e.issues.length) return (e.aborted = !0), e;
      if ("forward" === (n.direction || "forward")) {
        let i = t.transform(e.value, e);
        return i instanceof Promise
          ? i.then((i) => rX(e, i, t.out, n))
          : rX(e, i, t.out, n);
      }
      {
        let i = t.reverseTransform(e.value, e);
        return i instanceof Promise
          ? i.then((i) => rX(e, i, t.in, n))
          : rX(e, i, t.in, n);
      }
    }
    function rX(e, t, n, i) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : n._zod.run({ value: t, issues: e.issues }, i);
    }
    let rY = e1("$ZodPreprocess", (e, t) => {
        rW.init(e, t);
      }),
      rQ = e1("$ZodReadonly", (e, t) => {
        n5.init(e, t),
          eK(e, "propValues", (e) => e.def.innerType._zod.propValues),
          eK(e, "values", (e) => e.def.innerType._zod.values),
          eK(e, "optin", (e) => e.def.innerType?._zod?.optin),
          eK(e, "optout", (e) => e.def.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let i = t.innerType._zod.run(e, n);
            return i instanceof Promise ? i.then(r0) : r0(i);
          });
      });
    function r0(e) {
      return e.memo || (e.value = Object.freeze(e.value)), e;
    }
    let r1 = e1("$ZodTemplateLiteral", (e, t) => {
        n5.init(e, t);
        let n = [];
        for (let e of t.parts)
          if ("object" == typeof e && null !== e) {
            let t = (function e(t) {
              let n = t._zod.def,
                i = t._zod.pattern?.source,
                r = n.innerType ?? t._zod.innerType;
              if (r) {
                let t = r._zod.pattern?.source,
                  n = e(r);
                return i && t && n && n !== t ? i.replace(A(t), () => A(n)) : i;
              }
              if (n.options) {
                let t = n.options.map(e);
                if (t.every(Boolean))
                  return `^(${t.map((e) => A(e)).join("|")})$`;
              }
              return (function (e) {
                let t,
                  n,
                  i = e._zod.def,
                  r = i.pattern,
                  a = !!i.format?.includes("int");
                for (let e of i.checks ?? []) {
                  let i = e._zod.def;
                  i.pattern && (r = i.pattern),
                    a || (a = !!i.format?.includes("int"));
                  let o = i.minimum ?? i.length,
                    s = i.maximum ?? i.length;
                  void 0 !== o && (void 0 === t || o > t) && (t = o),
                    void 0 !== s && (void 0 === n || s < n) && (n = s);
                }
                if (r) return r.source;
                if (void 0 !== t && void 0 !== n && t > n) return "(?!)";
                if (void 0 !== t || void 0 !== n)
                  return nd({ minimum: t, maximum: n }).source;
                let o = e._zod.pattern;
                return (a && o === nf ? nm : o)?.source;
              })(t);
            })(e);
            if (!t)
              throw Error(
                `Invalid template literal part, no pattern found: ${[
                  ...e._zod.traits,
                ].shift()}`
              );
            n.push(A(t));
          } else if (null === e || ei.has(typeof e)) n.push(er(`${e}`));
          else throw Error(`Invalid template literal part: ${e}`);
        (e._zod.pattern = RegExp(`^${n.join("")}$`)),
          (e._zod.parse = (n, i) => (
            "string" != typeof n.value
              ? n.issues.push({
                  input: n.value,
                  inst: e,
                  expected: "string",
                  code: "invalid_type",
                })
              : ((e._zod.pattern.lastIndex = 0),
                e._zod.pattern.test(n.value) ||
                  n.issues.push({
                    input: n.value,
                    inst: e,
                    code: "invalid_format",
                    format: t.format ?? "template_literal",
                    pattern: e._zod.pattern.source,
                  })),
            n
          ));
      }),
      r4 = e1(
        "$ZodFunction",
        (e, t) => (
          n5.init(e, t),
          Object.defineProperty(e, "_def", { value: t }),
          (e._zod.def = t),
          (e.implement = (t) => {
            if ("function" != typeof t)
              throw Error("implement() must be called with a function");
            return Object.defineProperty(
              function (...n) {
                let i = Reflect.apply(
                  t,
                  this,
                  e._def.input ? td(e._def.input, n) : n
                );
                return e._def.output ? td(e._def.output, i) : i;
              },
              "_zod",
              { value: e._zod, enumerable: !1 }
            );
          }),
          (e.implementAsync = (t) => {
            if ("function" != typeof t)
              throw Error("implementAsync() must be called with a function");
            return Object.defineProperty(
              async function (...n) {
                let i = e._def.input ? await tm(e._def.input, n) : n,
                  r = await Reflect.apply(t, this, i);
                return e._def.output ? await tm(e._def.output, r) : r;
              },
              "_zod",
              { value: e._zod, enumerable: !1 }
            );
          }),
          (e._zod.parse = (t, n) => (
            "function" != typeof t.value
              ? t.issues.push({
                  code: "invalid_type",
                  expected: "function",
                  input: t.value,
                  inst: e,
                })
              : e._def.output && "promise" === e._def.output._zod.def.type
              ? (t.value = e.implementAsync(t.value))
              : (t.value = e.implement(t.value)),
            t
          )),
          (e.input = (...t) => {
            let n = e.constructor;
            return new n(
              Array.isArray(t[0])
                ? {
                    type: "function",
                    input: new r_({ type: "tuple", items: t[0], rest: t[1] }),
                    output: e._def.output,
                  }
                : { type: "function", input: t[0], output: e._def.output }
            );
          }),
          (e.output = (t) =>
            new e.constructor({
              type: "function",
              input: e._def.input,
              output: t,
            })),
          e
        )
      ),
      r6 = e1("$ZodPromise", (e, t) => {
        n5.init(e, t),
          (e._zod.parse = (e, n) =>
            Promise.resolve(e.value).then((e) =>
              t.innerType._zod.run({ value: e, issues: [] }, n)
            ));
      }),
      r2 = e1("$ZodLazy", (e, t) => {
        n5.init(e, t),
          P(
            e._zod,
            "innerType",
            () => (
              t._cachedInner || (t._cachedInner = t.getter()), t._cachedInner
            )
          ),
          eK(e, "pattern", (e) => e.innerType?._zod?.pattern),
          eK(e, "propValues", (e) => e.innerType?._zod?.propValues),
          eK(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0),
          eK(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0),
          (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n));
      }),
      r9 = e1("$ZodCustom", (e, t) => {
        nU.init(e, t),
          n5.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let i = n.value,
              r = t.fn(i);
            if (r instanceof Promise) return r.then((t) => r3(t, n, i, e));
            r3(r, n, i, e);
          });
      });
    function r3(e, t, n, i) {
      if (!e) {
        let e = {
          code: "custom",
          input: n,
          inst: i,
          path: [...(i._zod.def.path ?? [])],
          continue: !i._zod.def.abort,
        };
        i._zod.def.params && (e.params = i._zod.def.params),
          t.issues.push(eO(e));
      }
    }
    e.s(
      [
        "$ZodAny",
        0,
        i2,
        "$ZodArray",
        0,
        rr,
        "$ZodBase64",
        0,
        iZ,
        "$ZodBase64URL",
        0,
        iq,
        "$ZodBigInt",
        0,
        iQ,
        "$ZodBigIntFormat",
        0,
        i0,
        "$ZodBoolean",
        0,
        iY,
        "$ZodCIDRv4",
        0,
        iU,
        "$ZodCIDRv6",
        0,
        iP,
        "$ZodCUID",
        0,
        i$,
        "$ZodCUID2",
        0,
        iy,
        "$ZodCatch",
        0,
        rJ,
        "$ZodCodec",
        0,
        rG,
        "$ZodCreditCard",
        0,
        iB,
        "$ZodCustom",
        0,
        r9,
        "$ZodCustomStringFormat",
        0,
        iG,
        "$ZodDate",
        0,
        i8,
        "$ZodDefault",
        0,
        rT,
        "$ZodDiscriminatedUnion",
        0,
        rg,
        "$ZodE164",
        0,
        iR,
        "$ZodEmail",
        0,
        io,
        "$ZodEmoji",
        0,
        iv,
        "$ZodEnum",
        0,
        rD,
        "$ZodExactOptional",
        0,
        rE,
        "$ZodFile",
        0,
        rU,
        "$ZodFunction",
        0,
        r4,
        "$ZodGUID",
        0,
        ir,
        "$ZodIBAN",
        0,
        iV,
        "$ZodIPv4",
        0,
        ij,
        "$ZodIPv6",
        0,
        iD,
        "$ZodISODate",
        0,
        ik,
        "$ZodISODateTime",
        0,
        iw,
        "$ZodISODuration",
        0,
        iS,
        "$ZodISOTime",
        0,
        iI,
        "$ZodIntersection",
        0,
        r$,
        "$ZodJWT",
        0,
        iK,
        "$ZodKSUID",
        0,
        ix,
        "$ZodLazy",
        0,
        r2,
        "$ZodLiteral",
        0,
        rA,
        "$ZodMAC",
        0,
        iA,
        "$ZodMap",
        0,
        rS,
        "$ZodNaN",
        0,
        rV,
        "$ZodNanoID",
        0,
        ig,
        "$ZodNever",
        0,
        i3,
        "$ZodNonOptional",
        0,
        rR,
        "$ZodNull",
        0,
        i6,
        "$ZodNullable",
        0,
        rZ,
        "$ZodNumber",
        0,
        iH,
        "$ZodNumberFormat",
        0,
        iX,
        "$ZodObject",
        0,
        rl,
        "$ZodObjectJIT",
        0,
        rd,
        "$ZodOptional",
        0,
        rC,
        "$ZodPipe",
        0,
        rW,
        "$ZodPrefault",
        0,
        rq,
        "$ZodPreprocess",
        0,
        rY,
        "$ZodPromise",
        0,
        r6,
        "$ZodReadonly",
        0,
        rQ,
        "$ZodRecord",
        0,
        rI,
        "$ZodSet",
        0,
        rN,
        "$ZodString",
        0,
        it,
        "$ZodStringFormat",
        0,
        ii,
        "$ZodSuccess",
        0,
        rM,
        "$ZodSymbol",
        0,
        i1,
        "$ZodTemplateLiteral",
        0,
        r1,
        "$ZodTransform",
        0,
        rO,
        "$ZodTuple",
        0,
        r_,
        "$ZodType",
        0,
        n5,
        "$ZodULID",
        0,
        ib,
        "$ZodURL",
        0,
        ih,
        "$ZodUUID",
        0,
        ia,
        "$ZodUndefined",
        0,
        i4,
        "$ZodUnion",
        0,
        rm,
        "$ZodUnknown",
        0,
        i9,
        "$ZodVoid",
        0,
        i5,
        "$ZodXID",
        0,
        i_,
        "$ZodXor",
        0,
        rp,
        "URL_BAD_FORMAT",
        0,
        1,
        "URL_UNPARSEABLE",
        0,
        2,
        "base64Charset",
        0,
        iE,
        "base64urlCharset",
        0,
        iT,
        "canParseURL",
        0,
        is,
        "clone",
        0,
        ea,
        "getDiscriminatedOption",
        0,
        rh,
        "isValidBase64",
        0,
        iC,
        "isValidBase64URL",
        0,
        iL,
        "isValidCIDRv6",
        0,
        iO,
        "isValidCreditCard",
        0,
        iM,
        "isValidIBAN",
        0,
        iJ,
        "isValidIPv6",
        0,
        iz,
        "isValidJWT",
        0,
        iW,
        "mergeValues",
        0,
        ry,
        "parseURLObject",
        0,
        il,
        "standardProps",
        0,
        ie,
        "stripTabAndNewline",
        0,
        ic,
        "urlHostnameOk",
        0,
        im,
        "urlProtocolOk",
        0,
        ip,
        "validateURL",
        0,
        iu,
      ],
      532952
    ),
      e.i(532952);
    class r5 extends Error {
      constructor() {
        super("Cannot parse a reference cycle that closes through a transform"),
          (this.name = "ZodCyclicError");
      }
    }
    let r8 = "~memo",
      r7 = [];
    function ae(e) {
      return null !== e && "object" == typeof e;
    }
    function at(e) {
      return e.map((e) => (e.path ? { ...e, path: e.path.slice() } : { ...e }));
    }
    let an = new WeakMap();
    function ai(e, t, n) {
      var i, r;
      let a = an.get(e);
      if (void 0 !== a) return 2 * !!a;
      if (t.has(e)) return 2;
      t.add(e);
      let o = 0,
        s = (e) => {
          if (2 !== o && e?._zod) {
            let i = ai(e, t, n);
            i > o && (o = i);
          }
        },
        u = (e) => {
          e > o && (o = e);
        },
        l = e._zod.def;
      switch (l.type) {
        case "object": {
          let e = Z(l);
          u(
            e
              ? ((e, i) => {
                  let r = 0;
                  for (let a of Reflect.ownKeys(e)) {
                    let o = Object.getOwnPropertyDescriptor(e, a);
                    if (i && !o.enumerable) continue;
                    let s = o.get ? 1 : o.value?._zod ? ai(o.value, t, n) : 0;
                    s > r && (r = s);
                  }
                  return r;
                })(e, !0)
              : 1
          ),
            s(l.catchall);
          break;
        }
        case "array":
          s(l.element);
          break;
        case "tuple":
          for (let e of l.items) s(e);
          s(l.rest);
          break;
        case "record":
        case "map":
          s(l.keyType), s(l.valueType);
          break;
        case "set":
          s(l.valueType);
          break;
        case "union":
          for (let e of l.options) s(e);
          break;
        case "intersection":
          s(l.left), s(l.right);
          break;
        case "optional":
        case "nullable":
        case "default":
        case "prefault":
        case "catch":
        case "readonly":
        case "nonoptional":
        case "promise":
        case "success":
          s(l.innerType);
          break;
        case "pipe":
          s(l.in), s(l.out);
          break;
        case "function":
          s(l.input), s(l.output);
          break;
        case "lazy": {
          let i = l._cachedInner ?? (n ? e._zod.innerType : void 0);
          u(i ? ai(i, t, !1) : 1);
          break;
        }
        case "template_literal":
        case "string":
        case "number":
        case "int":
        case "boolean":
        case "bigint":
        case "symbol":
        case "undefined":
        case "null":
        case "void":
        case "never":
        case "any":
        case "unknown":
        case "date":
        case "nan":
        case "enum":
        case "literal":
        case "file":
        case "transform":
        case "custom":
          break;
        default:
          for (let e in l) {
            let t = Object.getOwnPropertyDescriptor(l, e);
            if (!t || t.get) continue;
            let n = t.value;
            if (n && "object" == typeof n) {
              if (n._zod) s(n);
              else if (Array.isArray(n)) for (let e of n) s(e);
            }
          }
      }
      return t.delete(e), (i = e), 1 !== (r = o) && an.set(i, 2 === r), r;
    }
    function ar(e) {
      return 0 !== ai(e, new Set(), !0);
    }
    let aa = [],
      ao = {
        alloc(e, t, i) {
          let r = n;
          if (!r) return i;
          n = void 0;
          let a = { value: i, issues: null };
          return r.set(t.value, a), aa.push(a), i;
        },
        guard(e) {
          var t;
          (t = e._zod).deferred ?? (t.deferred = []),
            e._zod.deferred.push(() => {
              let t = e._zod.parse,
                n = (e, n) => {
                  if ("backward" !== n.direction && au(n, e.value))
                    throw new r5();
                  return t(e, n);
                };
              (e._zod.parse = n), e._zod.run === t && (e._zod.run = n);
            });
        },
        attach(e) {
          var t;
          let i,
            r,
            a,
            o = !1;
          (t = e._zod).deferred ?? (t.deferred = []),
            e._zod.deferred.push(() => {
              let t = e._zod.parse,
                s = (u, l) => {
                  let d;
                  if (void 0 === i) {
                    let n = ai(e, new Set(), !1);
                    if (0 === n)
                      return (
                        (e._zod.parse = t),
                        e._zod.run === s && (e._zod.run = t),
                        t(u, l)
                      );
                    2 === n || o ? (i = !0) : (o = !0);
                  }
                  let c = u.value;
                  if (!ae(c)) return t(u, l);
                  let m = l[r8];
                  if (
                    (m ||
                      ((m = { buckets: new WeakMap(), backEdges: void 0 }),
                      (l[r8] = m)),
                    r === l)
                  )
                    d = a;
                  else {
                    var f;
                    let t;
                    (t = (f = m).buckets.get(e)) ||
                      ((t = new WeakMap()), f.buckets.set(e, t)),
                      (d = t),
                      (r = l),
                      (a = d);
                  }
                  let p = d.get(c);
                  if (p)
                    return (
                      (u.value = p.value),
                      p.issues
                        ? p.issues.length && u.issues.push(...at(p.issues))
                        : ((u.memo = !0),
                          m.backEdges ?? (m.backEdges = new WeakSet()),
                          m.backEdges.add(p.value)),
                      u
                    );
                  n = d;
                  let h = aa.length,
                    v = t(u, l);
                  n = void 0;
                  let g = aa.length > h ? aa.pop() : void 0;
                  return v instanceof Promise
                    ? v.then(
                        (e) => (
                          g && (g.issues = e.issues.length ? at(e.issues) : r7),
                          e
                        )
                      )
                    : (g && (g.issues = v.issues.length ? at(v.issues) : r7),
                      v);
                };
              (e._zod.parse = s), e._zod.run === t && (e._zod.run = s);
            });
        },
      };
    function as() {
      return ao;
    }
    function au(e, t) {
      let n = e[r8]?.backEdges;
      return void 0 !== n && ae(t) && n.has(t);
    }
    e.s(
      [
        "$ZodCyclicError",
        0,
        r5,
        "isBackEdge",
        0,
        au,
        "isRecursiveSchema",
        0,
        ar,
        "memoizer",
        0,
        as,
      ],
      937634
    ),
      e.i(937634),
      e.i(355605),
      e.i(398477);
    var al = e.i(922143),
      ad = e.i(682358);
    function ac(e, t, n, i) {
      let r = Math.abs(e),
        a = r % 10,
        o = r % 100;
      return o >= 11 && o <= 19 ? i : 1 === a ? t : a >= 2 && a <= 4 ? n : i;
    }
    function am() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: "characters", verb: "to have" },
              file: { unit: "bytes", verb: "to have" },
              array: { unit: "items", verb: "to have" },
              set: { unit: "items", verb: "to have" },
              map: { unit: "entries", verb: "to have" },
            },
            t = {
              regex: "input",
              email: "email address",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datetime",
              date: "ISO date",
              time: "ISO time",
              duration: "ISO duration",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              mac: "MAC address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded string",
              base64url: "base64url-encoded string",
              json_string: "JSON string",
              e164: "E.164 number",
              currency_code: "currency code",
              credit_card: "credit card number",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            },
            n = { nan: "NaN" };
          function i(e, t) {
            return "number" !== e || "number" != typeof t || Number.isFinite(t)
              ? n[e] ?? e
              : String(t);
          }
          return (n) => {
            switch (n.code) {
              case "invalid_type": {
                let e = i(n.expected),
                  t = i(eU(n.input), n.input);
                return `Invalid input: expected ${e}, received ${t}`;
              }
              case "invalid_value":
                if (1 === n.values.length)
                  return `Invalid input: expected ${eu(n.values[0])}`;
                return `Invalid option: expected one of ${S(n.values, "|")}`;
              case "too_big": {
                let t = n.exact ? "exactly " : n.inclusive ? "<=" : "<",
                  i = e[n.origin] ?? null;
                if (i)
                  return `Too big: expected ${
                    n.origin ?? "value"
                  } to have ${t}${n.maximum.toString()} ${
                    i.unit ?? "elements"
                  }`;
                return `Too big: expected ${
                  n.origin ?? "value"
                } to be ${t}${n.maximum.toString()}`;
              }
              case "too_small": {
                let t = n.exact ? "exactly " : n.inclusive ? ">=" : ">",
                  i = e[n.origin] ?? null;
                if (i)
                  return `Too small: expected ${
                    n.origin
                  } to have ${t}${n.minimum.toString()} ${i.unit}`;
                return `Too small: expected ${
                  n.origin
                } to be ${t}${n.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === n.format)
                  return `Invalid string: must start with "${n.prefix}"`;
                if ("ends_with" === n.format)
                  return `Invalid string: must end with "${n.suffix}"`;
                if ("includes" === n.format)
                  return `Invalid string: must include "${n.includes}"`;
                if ("regex" === n.format)
                  return `Invalid string: must match pattern ${n.pattern}`;
                return `Invalid ${t[n.format] ?? n.format}`;
              case "not_multiple_of":
                return `Invalid number: must be a multiple of ${n.divisor}`;
              case "unrecognized_keys":
                return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${S(
                  n.keys,
                  ", "
                )}`;
              case "invalid_key":
                return `Invalid key in ${n.origin}`;
              case "invalid_union":
                if (
                  n.options &&
                  Array.isArray(n.options) &&
                  n.options.length > 0
                ) {
                  let e = n.options.map((e) => `'${e}'`).join(" | ");
                  return `Invalid discriminator value. Expected ${e}`;
                }
                if (!1 === n.inclusive)
                  return "Invalid input: more than one option matched";
                return "Invalid input";
              case "invalid_element":
                return `Invalid value in ${n.origin}`;
              default:
                return "Invalid input";
            }
          };
        })(),
      };
    }
    function af(e, t, n) {
      return 1 === Math.abs(e) ? t : n;
    }
    function ap(e) {
      if (!e) return "";
      let t = e[e.length - 1];
      return e + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(t) ? "ն" : "ը");
    }
    function ah() {
      let e, t, n;
      return {
        localeError:
          ((e = {
            string: { unit: "តួអក្សរ", verb: "គួរមាន" },
            file: { unit: "បៃ", verb: "គួរមាន" },
            array: { unit: "ធាតុ", verb: "គួរមាន" },
            set: { unit: "ធាតុ", verb: "គួរមាន" },
            map: { unit: "ធាតុ", verb: "គួរមាន" },
          }),
          (t = {
            regex: "ទិន្នន័យបញ្ចូល",
            email: "អាសយដ្ឋានអ៊ីមែល",
            url: "URL",
            emoji: "សញ្ញាអារម្មណ៍",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
            date: "កាលបរិច្ឆេទ ISO",
            time: "ម៉ោង ISO",
            duration: "រយៈពេល ISO",
            ipv4: "អាសយដ្ឋាន IPv4",
            ipv6: "អាសយដ្ឋាន IPv6",
            mac: "អាសយដ្ឋាន MAC",
            cidrv4: "ដែនអាសយដ្ឋាន IPv4",
            cidrv6: "ដែនអាសយដ្ឋាន IPv6",
            base64: "ខ្សែអក្សរអ៊ិកូដ base64",
            base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
            json_string: "ខ្សែអក្សរ JSON",
            e164: "លេខ E.164",
            credit_card: "លេខប័ណ្ណឥណទាន",
            currency_code: "កូដរូបិយប័ណ្ណ",
            iban: "IBAN",
            jwt: "JWT",
            template_literal: "ទិន្នន័យបញ្ចូល",
          }),
          (n = {
            nan: "NaN",
            number: "លេខ",
            array: "អារេ (Array)",
            null: "គ្មានតម្លៃ (null)",
          }),
          (i) => {
            switch (i.code) {
              case "invalid_type": {
                let e = n[i.expected] ?? i.expected,
                  t = eU(i.input),
                  r = n[t] ?? t;
                if (/^[A-Z]/.test(i.expected))
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${i.expected} ប៉ុន្តែទទួលបាន ${r}`;
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${e} ប៉ុន្តែទទួលបាន ${r}`;
              }
              case "invalid_value":
                if (1 === i.values.length)
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${eu(
                    i.values[0]
                  )}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${S(
                  i.values,
                  "|"
                )}`;
              case "too_big": {
                let t = i.inclusive ? "<=" : "<",
                  n = e[i.origin] ?? null;
                if (n)
                  return `ធំពេក៖ ត្រូវការ ${
                    i.origin ?? "តម្លៃ"
                  } ${t} ${i.maximum.toString()} ${n.unit ?? "ធាតុ"}`;
                return `ធំពេក៖ ត្រូវការ ${
                  i.origin ?? "តម្លៃ"
                } ${t} ${i.maximum.toString()}`;
              }
              case "too_small": {
                let t = i.inclusive ? ">=" : ">",
                  n = e[i.origin] ?? null;
                if (n)
                  return `តូចពេក៖ ត្រូវការ ${
                    i.origin
                  } ${t} ${i.minimum.toString()} ${n.unit}`;
                return `តូចពេក៖ ត្រូវការ ${
                  i.origin
                } ${t} ${i.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === i.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"`;
                if ("ends_with" === i.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"`;
                if ("includes" === i.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"`;
                if ("regex" === i.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${t[i.format] ?? i.format}`;
              case "not_multiple_of":
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${i.divisor}`;
              case "unrecognized_keys":
                return `រកឃើញសោមិនស្គាល់៖ ${S(i.keys, ", ")}`;
              case "invalid_key":
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${i.origin}`;
              case "invalid_union":
              default:
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
              case "invalid_element":
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${i.origin}`;
            }
          }),
      };
    }
    let av = (e) => e.charAt(0).toUpperCase() + e.slice(1);
    function ag(e) {
      let t = Math.abs(e),
        n = t % 10,
        i = t % 100;
      return (i >= 11 && i <= 19) || 0 === n ? "many" : 1 === n ? "one" : "few";
    }
    function a$(e, t, n, i) {
      let r = Math.abs(e),
        a = r % 10,
        o = r % 100;
      return o >= 11 && o <= 19 ? i : 1 === a ? t : a >= 2 && a <= 4 ? n : i;
    }
    function ay() {
      let e, t, n;
      return {
        localeError:
          ((e = {
            string: { unit: "символів", verb: "матиме" },
            file: { unit: "байтів", verb: "матиме" },
            array: { unit: "елементів", verb: "матиме" },
            set: { unit: "елементів", verb: "матиме" },
            map: { unit: "елементів", verb: "матиме" },
          }),
          (t = {
            regex: "вхідні дані",
            email: "адреса електронної пошти",
            url: "URL",
            emoji: "емодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "дата та час ISO",
            date: "дата ISO",
            time: "час ISO",
            duration: "тривалість ISO",
            ipv4: "адреса IPv4",
            ipv6: "адреса IPv6",
            mac: "адреса MAC",
            cidrv4: "діапазон IPv4",
            cidrv6: "діапазон IPv6",
            base64: "рядок у кодуванні base64",
            base64url: "рядок у кодуванні base64url",
            json_string: "рядок JSON",
            e164: "номер E.164",
            credit_card: "номер кредитної картки",
            currency_code: "код валюти",
            iban: "IBAN",
            jwt: "JWT",
            template_literal: "вхідні дані",
          }),
          (n = { nan: "NaN", number: "число", array: "масив" }),
          (i) => {
            switch (i.code) {
              case "invalid_type": {
                let e = n[i.expected] ?? i.expected,
                  t = eU(i.input),
                  r = n[t] ?? t;
                if (/^[A-Z]/.test(i.expected))
                  return `Неправильні вхідні дані: очікується instanceof ${i.expected}, отримано ${r}`;
                return `Неправильні вхідні дані: очікується ${e}, отримано ${r}`;
              }
              case "invalid_value":
                if (1 === i.values.length)
                  return `Неправильні вхідні дані: очікується ${eu(
                    i.values[0]
                  )}`;
                return `Неправильна опція: очікується одне з ${S(
                  i.values,
                  "|"
                )}`;
              case "too_big": {
                let t = i.inclusive ? "<=" : "<",
                  n = e[i.origin] ?? null;
                if (n)
                  return `Занадто велике: очікується, що ${
                    i.origin ?? "значення"
                  } ${n.verb} ${t}${i.maximum.toString()} ${
                    n.unit ?? "елементів"
                  }`;
                return `Занадто велике: очікується, що ${
                  i.origin ?? "значення"
                } буде ${t}${i.maximum.toString()}`;
              }
              case "too_small": {
                let t = i.inclusive ? ">=" : ">",
                  n = e[i.origin] ?? null;
                if (n)
                  return `Занадто мале: очікується, що ${i.origin} ${
                    n.verb
                  } ${t}${i.minimum.toString()} ${n.unit}`;
                return `Занадто мале: очікується, що ${
                  i.origin
                } буде ${t}${i.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === i.format)
                  return `Неправильний рядок: повинен починатися з "${i.prefix}"`;
                if ("ends_with" === i.format)
                  return `Неправильний рядок: повинен закінчуватися на "${i.suffix}"`;
                if ("includes" === i.format)
                  return `Неправильний рядок: повинен містити "${i.includes}"`;
                if ("regex" === i.format)
                  return `Неправильний рядок: повинен відповідати шаблону ${i.pattern}`;
                return `Неправильний ${t[i.format] ?? i.format}`;
              case "not_multiple_of":
                return `Неправильне число: повинно бути кратним ${i.divisor}`;
              case "unrecognized_keys":
                return `Нерозпізнаний ключ${i.keys.length > 1 ? "і" : ""}: ${S(
                  i.keys,
                  ", "
                )}`;
              case "invalid_key":
                return `Неправильний ключ у ${i.origin}`;
              case "invalid_union":
              default:
                return "Неправильні вхідні дані";
              case "invalid_element":
                return `Неправильне значення у ${i.origin}`;
            }
          }),
      };
    }
    e.s(
      [
        "ar",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "حرف", verb: "أن يحوي" },
                file: { unit: "بايت", verb: "أن يحوي" },
                array: { unit: "عنصر", verb: "أن يحوي" },
                set: { unit: "عنصر", verb: "أن يحوي" },
                map: { unit: "عنصر", verb: "أن يحوي" },
              }),
              (t = {
                regex: "مدخل",
                email: "بريد إلكتروني",
                url: "رابط",
                emoji: "إيموجي",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "تاريخ ووقت بمعيار ISO",
                date: "تاريخ بمعيار ISO",
                time: "وقت بمعيار ISO",
                duration: "مدة بمعيار ISO",
                ipv4: "عنوان IPv4",
                ipv6: "عنوان IPv6",
                mac: "عنوان MAC",
                cidrv4: "مدى عناوين بصيغة IPv4",
                cidrv6: "مدى عناوين بصيغة IPv6",
                base64: "نَص بترميز base64-encoded",
                base64url: "نَص بترميز base64url-encoded",
                json_string: "نَص على هيئة JSON",
                e164: "رقم هاتف بمعيار E.164",
                credit_card: "رقم بطاقة الائتمان",
                currency_code: "رمز العملة",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "مدخل",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `مدخلات غير مقبولة: يفترض إدخال instanceof ${i.expected}، ولكن تم إدخال ${r}`;
                    return `مدخلات غير مقبولة: يفترض إدخال ${e}، ولكن تم إدخال ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `مدخلات غير مقبولة: يفترض إدخال ${eu(
                        i.values[0]
                      )}`;
                    return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return ` أكبر من اللازم: يفترض أن تكون ${
                        i.origin ?? "القيمة"
                      } ${t} ${i.maximum.toString()} ${n.unit ?? "عنصر"}`;
                    return `أكبر من اللازم: يفترض أن تكون ${
                      i.origin ?? "القيمة"
                    } ${t} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `أصغر من اللازم: يفترض لـ ${
                        i.origin
                      } أن يكون ${t} ${i.minimum.toString()} ${n.unit}`;
                    return `أصغر من اللازم: يفترض لـ ${
                      i.origin
                    } أن يكون ${t} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `نَص غير مقبول: يجب أن يبدأ بـ "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"`;
                    if ("regex" === i.format)
                      return `نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}`;
                    return `${t[i.format] ?? i.format} غير مقبول`;
                  case "not_multiple_of":
                    return `رقم غير مقبول: يجب أن يكون من مضاعفات ${i.divisor}`;
                  case "unrecognized_keys":
                    return `معرف${i.keys.length > 1 ? "ات" : ""} غريب${
                      i.keys.length > 1 ? "ة" : ""
                    }: ${S(i.keys, "، ")}`;
                  case "invalid_key":
                    return `معرف غير مقبول في ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "مدخل غير مقبول";
                  case "invalid_element":
                    return `مدخل غير مقبول في ${i.origin}`;
                }
              }),
          };
        },
        "az",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "simvol", verb: "olmalıdır" },
                file: { unit: "bayt", verb: "olmalıdır" },
                array: { unit: "element", verb: "olmalıdır" },
                set: { unit: "element", verb: "olmalıdır" },
                map: { unit: "element", verb: "olmalıdır" },
              }),
              (t = {
                regex: "input",
                email: "email address",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datetime",
                date: "ISO date",
                time: "ISO time",
                duration: "ISO duration",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded string",
                base64url: "base64url-encoded string",
                json_string: "JSON string",
                e164: "E.164 number",
                credit_card: "kredit kartı nömrəsi",
                currency_code: "valyuta kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Yanlış dəyər: g\xf6zlənilən instanceof ${i.expected}, daxil olan ${r}`;
                    return `Yanlış dəyər: g\xf6zlənilən ${e}, daxil olan ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Yanlış dəyər: g\xf6zlənilən ${eu(i.values[0])}`;
                    return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${
                        i.origin ?? "dəyər"
                      } ${t}${i.maximum.toString()} ${n.unit ?? "element"}`;
                    return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${
                      i.origin ?? "dəyər"
                    } ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `\xc7ox ki\xe7ik: g\xf6zlənilən ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `\xc7ox ki\xe7ik: g\xf6zlənilən ${
                      i.origin
                    } ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Yanlış mətn: "${i.prefix}" ilə başlamalıdır`;
                    if ("ends_with" === i.format)
                      return `Yanlış mətn: "${i.suffix}" ilə bitməlidir`;
                    if ("includes" === i.format)
                      return `Yanlış mətn: "${i.includes}" daxil olmalıdır`;
                    if ("regex" === i.format)
                      return `Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır`;
                    return `Yanlış ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Yanlış ədəd: ${i.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
                  case "unrecognized_keys":
                    return `Tanınmayan a\xe7ar${
                      i.keys.length > 1 ? "lar" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} daxilində yanlış a\xe7ar`;
                  case "invalid_union":
                  default:
                    return "Yanlış dəyər";
                  case "invalid_element":
                    return `${i.origin} daxilində yanlış dəyər`;
                }
              }),
          };
        },
        "be",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: {
                  unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" },
                  verb: "мець",
                },
                array: {
                  unit: { one: "элемент", few: "элементы", many: "элементаў" },
                  verb: "мець",
                },
                set: {
                  unit: { one: "элемент", few: "элементы", many: "элементаў" },
                  verb: "мець",
                },
                map: {
                  unit: { one: "элемент", few: "элементы", many: "элементаў" },
                  verb: "мець",
                },
                file: {
                  unit: { one: "байт", few: "байты", many: "байтаў" },
                  verb: "мець",
                },
              }),
              (t = {
                regex: "увод",
                email: "email адрас",
                url: "URL",
                emoji: "эмодзі",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO дата і час",
                date: "ISO дата",
                time: "ISO час",
                duration: "ISO працягласць",
                ipv4: "IPv4 адрас",
                ipv6: "IPv6 адрас",
                mac: "MAC адрас",
                cidrv4: "IPv4 дыяпазон",
                cidrv6: "IPv6 дыяпазон",
                base64: "радок у фармаце base64",
                base64url: "радок у фармаце base64url",
                json_string: "JSON радок",
                e164: "нумар E.164",
                credit_card: "нумар крэдытнай карты",
                currency_code: "код валюты",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "увод",
              }),
              (n = { nan: "NaN", number: "лік", array: "масіў" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Няправільны ўвод: чакаўся instanceof ${i.expected}, атрымана ${r}`;
                    return `Няправільны ўвод: чакаўся ${e}, атрымана ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Няправільны ўвод: чакалася ${eu(i.values[0])}`;
                    return `Няправільны варыянт: чакаўся адзін з ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n) {
                      let e = ac(
                        Number(i.maximum),
                        n.unit.one,
                        n.unit.few,
                        n.unit.many
                      );
                      return `Занадта вялікі: чакалася, што ${
                        i.origin ?? "значэнне"
                      } павінна ${n.verb} ${t}${i.maximum.toString()} ${e}`;
                    }
                    return `Занадта вялікі: чакалася, што ${
                      i.origin ?? "значэнне"
                    } павінна быць ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n) {
                      let e = ac(
                        Number(i.minimum),
                        n.unit.one,
                        n.unit.few,
                        n.unit.many
                      );
                      return `Занадта малы: чакалася, што ${i.origin} павінна ${
                        n.verb
                      } ${t}${i.minimum.toString()} ${e}`;
                    }
                    return `Занадта малы: чакалася, што ${
                      i.origin
                    } павінна быць ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Няправільны радок: павінен пачынацца з "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Няправільны радок: павінен заканчвацца на "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Няправільны радок: павінен змяшчаць "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Няправільны радок: павінен адпавядаць шаблону ${i.pattern}`;
                    return `Няправільны ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Няправільны лік: павінен быць кратным ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Нераспазнаны ${
                      i.keys.length > 1 ? "ключы" : "ключ"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Няправільны ключ у ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Няправільны ўвод";
                  case "invalid_element":
                    return `Няправільнае значэнне ў ${i.origin}`;
                }
              }),
          };
        },
        "bg",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "символа", verb: "да съдържа" },
                file: { unit: "байта", verb: "да съдържа" },
                array: { unit: "елемента", verb: "да съдържа" },
                set: { unit: "елемента", verb: "да съдържа" },
                map: { unit: "елемента", verb: "да съдържа" },
              }),
              (t = {
                regex: "вход",
                email: "имейл адрес",
                url: "URL",
                emoji: "емоджи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO време",
                date: "ISO дата",
                time: "ISO време",
                duration: "ISO продължителност",
                ipv4: "IPv4 адрес",
                ipv6: "IPv6 адрес",
                mac: "MAC адрес",
                cidrv4: "IPv4 диапазон",
                cidrv6: "IPv6 диапазон",
                base64: "base64-кодиран низ",
                base64url: "base64url-кодиран низ",
                json_string: "JSON низ",
                e164: "E.164 номер",
                credit_card: "номер на кредитна карта",
                currency_code: "код на валута",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вход",
              }),
              (n = { nan: "NaN", number: "число", array: "масив" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Невалиден вход: очакван instanceof ${i.expected}, получен ${r}`;
                    return `Невалиден вход: очакван ${e}, получен ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Невалиден вход: очакван ${eu(i.values[0])}`;
                    return `Невалидна опция: очаквано едно от ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Твърде голямо: очаква се ${
                        i.origin ?? "стойност"
                      } да съдържа ${t}${i.maximum.toString()} ${
                        n.unit ?? "елемента"
                      }`;
                    return `Твърде голямо: очаква се ${
                      i.origin ?? "стойност"
                    } да бъде ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Твърде малко: очаква се ${
                        i.origin
                      } да съдържа ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Твърде малко: очаква се ${
                      i.origin
                    } да бъде ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format": {
                    if ("starts_with" === i.format)
                      return `Невалиден низ: трябва да започва с "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Невалиден низ: трябва да завършва с "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Невалиден низ: трябва да включва "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Невалиден низ: трябва да съвпада с ${i.pattern}`;
                    let e = "Невалиден";
                    return (
                      "emoji" === i.format && (e = "Невалидно"),
                      "datetime" === i.format && (e = "Невалидно"),
                      "date" === i.format && (e = "Невалидна"),
                      "time" === i.format && (e = "Невалидно"),
                      "duration" === i.format && (e = "Невалидна"),
                      `${e} ${t[i.format] ?? i.format}`
                    );
                  }
                  case "not_multiple_of":
                    return `Невалидно число: трябва да бъде кратно на ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Неразпознат${i.keys.length > 1 ? "и" : ""} ключ${
                      i.keys.length > 1 ? "ове" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Невалиден ключ в ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Невалиден вход";
                  case "invalid_element":
                    return `Невалидна стойност в ${i.origin}`;
                }
              }),
          };
        },
        "bn",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "অক্ষর", verb: "থাকতে হবে" },
                file: { unit: "বাইট", verb: "থাকতে হবে" },
                array: { unit: "আইটেম", verb: "থাকতে হবে" },
                set: { unit: "আইটেম", verb: "থাকতে হবে" },
                map: { unit: "এন্ট্রি", verb: "থাকতে হবে" },
              }),
              (t = {
                regex: "ইনপুট",
                email: "ইমেইল ঠিকানা",
                url: "URL",
                emoji: "ইমোজি",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO তারিখ ও সময়",
                date: "ISO তারিখ",
                time: "ISO সময়",
                duration: "ISO সময়কাল",
                ipv4: "IPv4 ঠিকানা",
                ipv6: "IPv6 ঠিকানা",
                mac: "MAC ঠিকানা",
                cidrv4: "IPv4 রেঞ্জ",
                cidrv6: "IPv6 রেঞ্জ",
                base64: "base64-এনকোডেড স্ট্রিং",
                base64url: "base64url-এনকোডেড স্ট্রিং",
                json_string: "JSON স্ট্রিং",
                e164: "E.164 নম্বর",
                credit_card: "ক্রেডিট কার্ড নম্বর",
                currency_code: "মুদ্রা কোড",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ইনপুট",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `অবৈধ ইনপুট: প্রত্যাশিত ${e}, প্রাপ্ত ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `অবৈধ ইনপুট: প্রত্যাশিত ${eu(i.values[0])}`;
                    return `অবৈধ অপশন: ${S(
                      i.values,
                      " | "
                    )} এর মধ্যে একটি প্রত্যাশিত`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `অনেক বড়: ${
                        i.origin ?? "মান"
                      } ${t}${i.maximum.toString()} ${
                        n.unit ?? "এলিমেন্ট"
                      } হতে হবে`;
                    return `অনেক বড়: ${
                      i.origin ?? "মান"
                    } ${t}${i.maximum.toString()} হতে হবে`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `অনেক ছোট: ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit} হতে হবে`;
                    return `অনেক ছোট: ${
                      i.origin
                    } ${t}${i.minimum.toString()} হতে হবে`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `অবৈধ স্ট্রিং: "${i.prefix}" দিয়ে শুরু হতে হবে`;
                    if ("ends_with" === i.format)
                      return `অবৈধ স্ট্রিং: "${i.suffix}" দিয়ে শেষ হতে হবে`;
                    if ("includes" === i.format)
                      return `অবৈধ স্ট্রিং: "${i.includes}" অন্তর্ভুক্ত থাকতে হবে`;
                    if ("regex" === i.format)
                      return `অবৈধ স্ট্রিং: ${i.pattern} প্যাটার্ন মিলতে হবে`;
                    return `অবৈধ ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `অবৈধ নম্বর: ${i.divisor} এর গুণিতক হতে হবে`;
                  case "unrecognized_keys":
                    return `অচেনা কী${i.keys.length > 1 ? "গুলো" : ""}: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `${i.origin} এ অবৈধ কী`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `অবৈধ ডিসক্রিমিনেটর মান। প্রত্যাশিত ${e}`;
                    }
                    return "অবৈধ ইনপুট";
                  case "invalid_element":
                    return `${i.origin} এ অবৈধ মান`;
                  default:
                    return "অবৈধ ইনপুট";
                }
              }),
          };
        },
        "ca",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "caràcters", verb: "contenir" },
                file: { unit: "bytes", verb: "contenir" },
                array: { unit: "elements", verb: "contenir" },
                set: { unit: "elements", verb: "contenir" },
                map: { unit: "elements", verb: "contenir" },
              }),
              (t = {
                regex: "entrada",
                email: "adreça electrònica",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data i hora ISO",
                date: "data ISO",
                time: "hora ISO",
                duration: "durada ISO",
                ipv4: "adreça IPv4",
                ipv6: "adreça IPv6",
                mac: "adreça MAC",
                cidrv4: "rang IPv4",
                cidrv6: "rang IPv6",
                base64: "cadena codificada en base64",
                base64url: "cadena codificada en base64url",
                json_string: "cadena JSON",
                e164: "número E.164",
                credit_card: "número de targeta de crèdit",
                currency_code: "codi de moneda",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrada",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Tipus inv\xe0lid: s'esperava instanceof ${i.expected}, s'ha rebut ${r}`;
                    return `Tipus inv\xe0lid: s'esperava ${e}, s'ha rebut ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Valor inv\xe0lid: s'esperava ${eu(i.values[0])}`;
                    return `Opci\xf3 inv\xe0lida: s'esperava una de ${S(
                      i.values,
                      " o "
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "com a màxim" : "menys de",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Massa gran: s'esperava que ${
                        i.origin ?? "el valor"
                      } contingu\xe9s ${t} ${i.maximum.toString()} ${
                        n.unit ?? "elements"
                      }`;
                    return `Massa gran: s'esperava que ${
                      i.origin ?? "el valor"
                    } fos ${t} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? "com a mínim" : "més de",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Massa petit: s'esperava que ${
                        i.origin
                      } contingu\xe9s ${t} ${i.minimum.toString()} ${n.unit}`;
                    return `Massa petit: s'esperava que ${
                      i.origin
                    } fos ${t} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Format inv\xe0lid: ha de comen\xe7ar amb "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Format inv\xe0lid: ha d'acabar amb "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Format inv\xe0lid: ha d'incloure "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${i.pattern}`;
                    return `Format inv\xe0lid per a ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Clau${i.keys.length > 1 ? "s" : ""} no reconeguda${
                      i.keys.length > 1 ? "s" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Clau inv\xe0lida a ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrada invàlida";
                  case "invalid_element":
                    return `Element inv\xe0lid a ${i.origin}`;
                }
              }),
          };
        },
        "ckb",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "پیت", verb: "بێت" },
                file: { unit: "بایت", verb: "بێت" },
                array: { unit: "دانە", verb: "بێت" },
                set: { unit: "دانە", verb: "بێت" },
                map: { unit: "دانە", verb: "بێت" },
              }),
              (t = {
                regex: "regex",
                email: "ئیمەیڵ",
                url: "بەستەر (URL)",
                emoji: "ئیمۆجی",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ڕێکەوت و کات",
                date: "ڕێکەوت",
                time: "کات",
                duration: "ماوە",
                ipv4: "ناونیشانی IPv4",
                ipv6: "ناونیشانی IPv6",
                mac: "ناونیشانی MAC",
                cidrv4: "مەودای IPv4",
                cidrv6: "مەودای IPv6",
                base64: "دەقی base64",
                base64url: "دەقی base64url",
                json_string: "دەقی JSON",
                e164: "ژمارەی E.164",
                credit_card: "ژمارەی کارتی کرێدیت",
                currency_code: "کۆدی دراو",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "تێکردە",
              }),
              (n = {
                nan: "NaN",
                string: "نووسین",
                number: "ژمارە",
                boolean: "boolean",
                array: "array",
                object: "object",
                date: "ڕێکەوت",
                integer: "ژمارە",
                float: "ژمارە",
                null: "null",
                undefined: "undefined",
                function: "function",
                symbol: "symbol",
                unknown: "unknown",
                promise: "promise",
                void: "void",
                never: "never",
                map: "map",
                set: "set",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t,
                      a = ["ا", "و", "ۆ", "وو", "ە", "ی", "ێ"].some((e) =>
                        r.endsWith(e)
                      )
                        ? "یە"
                        : "ە",
                      o = /^[a-zA-Z]+$/.test(r);
                    if ("null" === t || "undefined" === t) return "داواکراوە";
                    return `چاوەڕوانکراوە ${e} بێت، بەڵام ${r}${o ? "" : a}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `بەهاکە نادرووستە: چاوەڕوانکراوە ${eu(
                        i.values[0]
                      )} بێت`;
                    return `هەڵبژاردەی نادروست: چاوەڕوانکراوە یەکێک بێت لە ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = e[i.origin] ?? null;
                    if (t)
                      return `پێویستە بە لایەنی زۆرەوە ${i.maximum.toString()} ${
                        t.unit
                      } ${t.verb}`;
                    return `پێویستە بە لایەنی زۆرەوە ${i.maximum.toString()} بێت`;
                  }
                  case "too_small": {
                    let t = e[i.origin] ?? null;
                    if (t)
                      return `پێویستە بە لایەنی کەمەوە ${i.minimum.toString()} ${
                        t.unit
                      } ${t.verb}`;
                    return `پێویستە بە لایەنی کەمەوە ${i.minimum.toString()} بێت`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `دەقی نادروست: پێویستە دەستپێبکات بە "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `دەقی نادروست: پێویستە کۆتاییبێت بە "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `دەقی نادروست: پێویستە "${i.includes}" لەخۆبگرێت`;
                    if ("regex" === i.format)
                      return `دەقی نادروست: پێویستە لەگەڵ پاتێرنی ${i.pattern} بگونجێت`;
                    return `بەهای ${t[i.format] ?? i.format} نادروستە`;
                  case "not_multiple_of":
                    return `ژمارەی نادروست: دەبێت چەند هێندە بێت بۆ ${i.divisor}`;
                  case "unrecognized_keys":
                    return `کلیلی نەناسراو: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `کلیلی نادروست لە ${i.origin}`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `بەهای نەناسراو هەیە. بەهای چاوەڕوانکراو: ${e}`;
                    }
                    return "یەکگرتنی نادروست";
                  case "invalid_element":
                    return `${i.origin} بەهاکە نادروستە`;
                  default:
                    return "تێکردەی نادروست";
                }
              }),
          };
        },
        "cs",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "znaků", verb: "mít" },
                file: { unit: "bajtů", verb: "mít" },
                array: { unit: "prvků", verb: "mít" },
                set: { unit: "prvků", verb: "mít" },
                map: { unit: "prvků", verb: "mít" },
              }),
              (t = {
                regex: "regulární výraz",
                email: "e-mailová adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "datum a čas ve formátu ISO",
                date: "datum ve formátu ISO",
                time: "čas ve formátu ISO",
                duration: "doba trvání ISO",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "rozsah IPv4",
                cidrv6: "rozsah IPv6",
                base64: "řetězec zakódovaný ve formátu base64",
                base64url: "řetězec zakódovaný ve formátu base64url",
                json_string: "řetězec ve formátu JSON",
                e164: "číslo E.164",
                credit_card: "číslo kreditní karty",
                currency_code: "kód měny",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vstup",
              }),
              (n = {
                nan: "NaN",
                number: "číslo",
                string: "řetězec",
                function: "funkce",
                array: "pole",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Neplatn\xfd vstup: oček\xe1v\xe1no instanceof ${i.expected}, obdrženo ${r}`;
                    return `Neplatn\xfd vstup: oček\xe1v\xe1no ${e}, obdrženo ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Neplatn\xfd vstup: oček\xe1v\xe1no ${eu(
                        i.values[0]
                      )}`;
                    return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Hodnota je př\xedliš velk\xe1: ${
                        i.origin ?? "hodnota"
                      } mus\xed m\xedt ${t}${i.maximum.toString()} ${
                        n.unit ?? "prvků"
                      }`;
                    return `Hodnota je př\xedliš velk\xe1: ${
                      i.origin ?? "hodnota"
                    } mus\xed b\xfdt ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Hodnota je př\xedliš mal\xe1: ${
                        i.origin ?? "hodnota"
                      } mus\xed m\xedt ${t}${i.minimum.toString()} ${
                        n.unit ?? "prvků"
                      }`;
                    return `Hodnota je př\xedliš mal\xe1: ${
                      i.origin ?? "hodnota"
                    } mus\xed b\xfdt ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Neplatn\xfd řetězec: mus\xed končit na "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Neplatn\xfd řetězec: mus\xed obsahovat "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${i.pattern}`;
                    return `Neplatn\xfd form\xe1t ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Nezn\xe1m\xe9 kl\xedče: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Neplatn\xfd kl\xedč v ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Neplatný vstup";
                  case "invalid_element":
                    return `Neplatn\xe1 hodnota v ${i.origin}`;
                }
              }),
          };
        },
        "da",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "tegn", verb: "havde" },
                file: { unit: "bytes", verb: "havde" },
                array: { unit: "elementer", verb: "indeholdt" },
                set: { unit: "elementer", verb: "indeholdt" },
                map: { unit: "elementer", verb: "indeholdt" },
              }),
              (t = {
                regex: "input",
                email: "e-mailadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslæt",
                date: "ISO-dato",
                time: "ISO-klokkeslæt",
                duration: "ISO-varighed",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spektrum",
                cidrv6: "IPv6-spektrum",
                base64: "base64-kodet streng",
                base64url: "base64url-kodet streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kreditkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = {
                nan: "NaN",
                string: "streng",
                number: "tal",
                boolean: "boolean",
                array: "liste",
                object: "objekt",
                set: "sæt",
                file: "fil",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ugyldigt input: forventede instanceof ${i.expected}, fik ${r}`;
                    return `Ugyldigt input: forventede ${e}, fik ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ugyldig v\xe6rdi: forventede ${eu(i.values[0])}`;
                    return `Ugyldigt valg: forventede en af f\xf8lgende ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      r = e[i.origin] ?? null,
                      a = n[i.origin] ?? i.origin;
                    if (r)
                      return `For stor: forventede ${a ?? "value"} ${
                        r.verb
                      } ${t} ${i.maximum.toString()} ${r.unit ?? "elementer"}`;
                    return `For stor: forventede ${
                      a ?? "value"
                    } havde ${t} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      r = e[i.origin] ?? null,
                      a = n[i.origin] ?? i.origin;
                    if (r)
                      return `For lille: forventede ${a} ${
                        r.verb
                      } ${t} ${i.minimum.toString()} ${r.unit}`;
                    return `For lille: forventede ${a} havde ${t} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ugyldig streng: skal starte med "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Ugyldig streng: skal ende med "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Ugyldig streng: skal indeholde "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Ugyldig streng: skal matche m\xf8nsteret ${i.pattern}`;
                    return `Ugyldig ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ugyldigt tal: skal v\xe6re deleligt med ${i.divisor}`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Ugyldig n\xf8gle i ${i.origin}`;
                  case "invalid_union":
                    return "Ugyldigt input: matcher ingen af de tilladte typer";
                  case "invalid_element":
                    return `Ugyldig v\xe6rdi i ${i.origin}`;
                  default:
                    return "Ugyldigt input";
                }
              }),
          };
        },
        "de",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "Zeichen", verb: "zu haben" },
                file: { unit: "Bytes", verb: "zu haben" },
                array: { unit: "Elemente", verb: "zu haben" },
                set: { unit: "Elemente", verb: "zu haben" },
                map: { unit: "Elemente", verb: "zu haben" },
              }),
              (t = {
                regex: "Eingabe",
                email: "E-Mail-Adresse",
                url: "URL",
                emoji: "Emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-Datum und -Uhrzeit",
                date: "ISO-Datum",
                time: "ISO-Uhrzeit",
                duration: "ISO-Dauer",
                ipv4: "IPv4-Adresse",
                ipv6: "IPv6-Adresse",
                mac: "MAC-Adresse",
                cidrv4: "IPv4-Bereich",
                cidrv6: "IPv6-Bereich",
                base64: "Base64-codierter String",
                base64url: "Base64-URL-codierter String",
                json_string: "JSON-String",
                e164: "E.164-Nummer",
                credit_card: "Kreditkartennummer",
                currency_code: "Währungscode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "Eingabe",
              }),
              (n = { nan: "NaN", number: "Zahl", array: "Array" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ung\xfcltige Eingabe: erwartet instanceof ${i.expected}, erhalten ${r}`;
                    return `Ung\xfcltige Eingabe: erwartet ${e}, erhalten ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ung\xfcltige Eingabe: erwartet ${eu(
                        i.values[0]
                      )}`;
                    return `Ung\xfcltige Option: erwartet eine von ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Zu gro\xdf: erwartet, dass ${
                        i.origin ?? "Wert"
                      } ${t}${i.maximum.toString()} ${
                        n.unit ?? "Elemente"
                      } hat`;
                    return `Zu gro\xdf: erwartet, dass ${
                      i.origin ?? "Wert"
                    } ${t}${i.maximum.toString()} ist`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Zu klein: erwartet, dass ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit} hat`;
                    return `Zu klein: erwartet, dass ${
                      i.origin
                    } ${t}${i.minimum.toString()} ist`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ung\xfcltiger String: muss mit "${i.prefix}" beginnen`;
                    if ("ends_with" === i.format)
                      return `Ung\xfcltiger String: muss mit "${i.suffix}" enden`;
                    if ("includes" === i.format)
                      return `Ung\xfcltiger String: muss "${i.includes}" enthalten`;
                    if ("regex" === i.format)
                      return `Ung\xfcltiger String: muss dem Muster ${i.pattern} entsprechen`;
                    return `Ung\xfcltig: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ung\xfcltige Zahl: muss ein Vielfaches von ${i.divisor} sein`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1
                        ? "Unbekannte Schlüssel"
                        : "Unbekannter Schlüssel"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Ung\xfcltiger Schl\xfcssel in ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Ungültige Eingabe";
                  case "invalid_element":
                    return `Ung\xfcltiger Wert in ${i.origin}`;
                }
              }),
          };
        },
        "el",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "χαρακτήρες", verb: "να έχει" },
                file: { unit: "bytes", verb: "να έχει" },
                array: { unit: "στοιχεία", verb: "να έχει" },
                set: { unit: "στοιχεία", verb: "να έχει" },
                map: { unit: "καταχωρήσεις", verb: "να έχει" },
              }),
              (t = {
                regex: "είσοδος",
                email: "διεύθυνση email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ημερομηνία και ώρα",
                date: "ISO ημερομηνία",
                time: "ISO ώρα",
                duration: "ISO διάρκεια",
                ipv4: "διεύθυνση IPv4",
                ipv6: "διεύθυνση IPv6",
                mac: "διεύθυνση MAC",
                cidrv4: "εύρος IPv4",
                cidrv6: "εύρος IPv6",
                base64: "συμβολοσειρά κωδικοποιημένη σε base64",
                base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
                json_string: "συμβολοσειρά JSON",
                e164: "αριθμός E.164",
                credit_card: "αριθμός πιστωτικής κάρτας",
                currency_code: "κωδικός νομίσματος",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "είσοδος",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (
                      "string" == typeof i.expected &&
                      /^[A-Z]/.test(i.expected)
                    )
                      return `Μη έγκυρη είσοδος: αναμενόταν instanceof ${i.expected}, λήφθηκε ${r}`;
                    return `Μη έγκυρη είσοδος: αναμενόταν ${e}, λήφθηκε ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Μη έγκυρη είσοδος: αναμενόταν ${eu(i.values[0])}`;
                    return `Μη έγκυρη επιλογή: αναμενόταν ένα από ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Πολύ μεγάλο: αναμενόταν ${
                        i.origin ?? "τιμή"
                      } να έχει ${t}${i.maximum.toString()} ${
                        n.unit ?? "στοιχεία"
                      }`;
                    return `Πολύ μεγάλο: αναμενόταν ${
                      i.origin ?? "τιμή"
                    } να είναι ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Πολύ μικρό: αναμενόταν ${
                        i.origin
                      } να έχει ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Πολύ μικρό: αναμενόταν ${
                      i.origin
                    } να είναι ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${i.pattern}`;
                    return `Μη έγκυρο: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Άγνωστ${i.keys.length > 1 ? "α" : "ο"} κλειδ${
                      i.keys.length > 1 ? "ιά" : "ί"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Μη έγκυρο κλειδί στο ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Μη έγκυρη είσοδος";
                  case "invalid_element":
                    return `Μη έγκυρη τιμή στο ${i.origin}`;
                }
              }),
          };
        },
        "en",
        0,
        am,
        "eo",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "karaktrojn", verb: "havi" },
                file: { unit: "bajtojn", verb: "havi" },
                array: { unit: "elementojn", verb: "havi" },
                set: { unit: "elementojn", verb: "havi" },
                map: { unit: "elementojn", verb: "havi" },
              }),
              (t = {
                regex: "enigo",
                email: "retadreso",
                url: "URL",
                emoji: "emoĝio",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-datotempo",
                date: "ISO-dato",
                time: "ISO-tempo",
                duration: "ISO-daŭro",
                ipv4: "IPv4-adreso",
                ipv6: "IPv6-adreso",
                mac: "MAC-adreso",
                cidrv4: "IPv4-rango",
                cidrv6: "IPv6-rango",
                base64: "64-ume kodita karaktraro",
                base64url: "URL-64-ume kodita karaktraro",
                json_string: "JSON-karaktraro",
                e164: "E.164-nombro",
                credit_card: "kreditkarta numero",
                currency_code: "valuta kodo",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "enigo",
              }),
              (n = {
                nan: "NaN",
                number: "nombro",
                array: "tabelo",
                null: "senvalora",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Nevalida enigo: atendiĝis instanceof ${i.expected}, riceviĝis ${r}`;
                    return `Nevalida enigo: atendiĝis ${e}, riceviĝis ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Nevalida enigo: atendiĝis ${eu(i.values[0])}`;
                    return `Nevalida opcio: atendiĝis unu el ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Tro granda: atendiĝis ke ${
                        i.origin ?? "valoro"
                      } havu ${t}${i.maximum.toString()} ${
                        n.unit ?? "elementojn"
                      }`;
                    return `Tro granda: atendiĝis ke ${
                      i.origin ?? "valoro"
                    } havu ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Tro malgranda: atendiĝis ke ${
                        i.origin
                      } havu ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Tro malgranda: atendiĝis ke ${
                      i.origin
                    } estu ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Nevalida karaktraro: devas komenciĝi per "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Nevalida karaktraro: devas finiĝi per "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Nevalida karaktraro: devas inkluzivi "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}`;
                    return `Nevalida ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Nevalida nombro: devas esti oblo de ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Nekonata${i.keys.length > 1 ? "j" : ""} ŝlosilo${
                      i.keys.length > 1 ? "j" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Nevalida ŝlosilo en ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Nevalida enigo";
                  case "invalid_element":
                    return `Nevalida valoro en ${i.origin}`;
                }
              }),
          };
        },
        "es",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "caracteres", verb: "tener" },
                file: { unit: "bytes", verb: "tener" },
                array: { unit: "elementos", verb: "tener" },
                set: { unit: "elementos", verb: "tener" },
              }),
              (t = {
                regex: "entrada",
                email: "dirección de correo electrónico",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "fecha y hora ISO",
                date: "fecha ISO",
                time: "hora ISO",
                duration: "duración ISO",
                ipv4: "dirección IPv4",
                ipv6: "dirección IPv6",
                mac: "dirección MAC",
                cidrv4: "rango IPv4",
                cidrv6: "rango IPv6",
                base64: "cadena codificada en base64",
                base64url: "URL codificada en base64",
                json_string: "cadena JSON",
                e164: "número E.164",
                credit_card: "número de tarjeta de crédito",
                currency_code: "código de moneda",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrada",
              }),
              (n = {
                nan: "NaN",
                string: "texto",
                number: "número",
                boolean: "booleano",
                array: "arreglo",
                object: "objeto",
                set: "conjunto",
                file: "archivo",
                date: "fecha",
                bigint: "número grande",
                symbol: "símbolo",
                undefined: "indefinido",
                null: "nulo",
                function: "función",
                map: "mapa",
                record: "registro",
                tuple: "tupla",
                enum: "enumeración",
                union: "unión",
                literal: "literal",
                promise: "promesa",
                void: "vacío",
                never: "nunca",
                unknown: "desconocido",
                any: "cualquiera",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Entrada inv\xe1lida: se esperaba instanceof ${i.expected}, recibido ${r}`;
                    return `Entrada inv\xe1lida: se esperaba ${e}, recibido ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Entrada inv\xe1lida: se esperaba ${eu(
                        i.values[0]
                      )}`;
                    return `Opci\xf3n inv\xe1lida: se esperaba una de ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      r = e[i.origin] ?? null,
                      a = n[i.origin] ?? i.origin;
                    if (r)
                      return `Demasiado grande: se esperaba que ${
                        a ?? "valor"
                      } tuviera ${t}${i.maximum.toString()} ${
                        r.unit ?? "elementos"
                      }`;
                    return `Demasiado grande: se esperaba que ${
                      a ?? "valor"
                    } fuera ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      r = e[i.origin] ?? null,
                      a = n[i.origin] ?? i.origin;
                    if (r)
                      return `Demasiado peque\xf1o: se esperaba que ${a} tuviera ${t}${i.minimum.toString()} ${
                        r.unit
                      }`;
                    return `Demasiado peque\xf1o: se esperaba que ${a} fuera ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Cadena inv\xe1lida: debe comenzar con "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Cadena inv\xe1lida: debe terminar en "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Cadena inv\xe1lida: debe incluir "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${i.pattern}`;
                    return `Inv\xe1lido ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Llave${i.keys.length > 1 ? "s" : ""} desconocida${
                      i.keys.length > 1 ? "s" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Llave inv\xe1lida en ${n[i.origin] ?? i.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrada inválida";
                  case "invalid_element":
                    return `Valor inv\xe1lido en ${n[i.origin] ?? i.origin}`;
                }
              }),
          };
        },
        "fa",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "کاراکتر", verb: "داشته باشد" },
                file: { unit: "بایت", verb: "داشته باشد" },
                array: { unit: "آیتم", verb: "داشته باشد" },
                set: { unit: "آیتم", verb: "داشته باشد" },
                map: { unit: "آیتم", verb: "داشته باشد" },
              }),
              (t = {
                regex: "ورودی",
                email: "آدرس ایمیل",
                url: "URL",
                emoji: "ایموجی",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "تاریخ و زمان ایزو",
                date: "تاریخ ایزو",
                time: "زمان ایزو",
                duration: "مدت زمان ایزو",
                ipv4: "IPv4 آدرس",
                ipv6: "IPv6 آدرس",
                mac: "MAC آدرس",
                cidrv4: "IPv4 دامنه",
                cidrv6: "IPv6 دامنه",
                base64: "base64-encoded رشته",
                base64url: "base64url-encoded رشته",
                json_string: "JSON رشته",
                e164: "E.164 عدد",
                credit_card: "شماره کارت اعتباری",
                currency_code: "کد ارز",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ورودی",
              }),
              (n = { nan: "NaN", number: "عدد", array: "آرایه" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `ورودی نامعتبر: می‌بایست instanceof ${i.expected} می‌بود، ${r} دریافت شد`;
                    return `ورودی نامعتبر: می‌بایست ${e} می‌بود، ${r} دریافت شد`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `ورودی نامعتبر: می‌بایست ${eu(
                        i.values[0]
                      )} می‌بود`;
                    return `گزینه نامعتبر: می‌بایست یکی از ${S(
                      i.values,
                      "|"
                    )} می‌بود`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `خیلی بزرگ: ${
                        i.origin ?? "مقدار"
                      } باید ${t}${i.maximum.toString()} ${
                        n.unit ?? "عنصر"
                      } باشد`;
                    return `خیلی بزرگ: ${
                      i.origin ?? "مقدار"
                    } باید ${t}${i.maximum.toString()} باشد`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `خیلی کوچک: ${
                        i.origin
                      } باید ${t}${i.minimum.toString()} ${n.unit} باشد`;
                    return `خیلی کوچک: ${
                      i.origin
                    } باید ${t}${i.minimum.toString()} باشد`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `رشته نامعتبر: باید با "${i.prefix}" شروع شود`;
                    if ("ends_with" === i.format)
                      return `رشته نامعتبر: باید با "${i.suffix}" تمام شود`;
                    if ("includes" === i.format)
                      return `رشته نامعتبر: باید شامل "${i.includes}" باشد`;
                    if ("regex" === i.format)
                      return `رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد`;
                    return `${t[i.format] ?? i.format} نامعتبر`;
                  case "not_multiple_of":
                    return `عدد نامعتبر: باید مضرب ${i.divisor} باشد`;
                  case "unrecognized_keys":
                    return `کلید${i.keys.length > 1 ? "های" : ""} ناشناس: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `کلید ناشناس در ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "ورودی نامعتبر";
                  case "invalid_element":
                    return `مقدار نامعتبر در ${i.origin}`;
                }
              }),
          };
        },
        "fi",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "merkkiä", subject: "merkkijonon" },
                file: { unit: "tavua", subject: "tiedoston" },
                array: { unit: "alkiota", subject: "listan" },
                set: { unit: "alkiota", subject: "joukon" },
                map: { unit: "alkiota", subject: "kuvauksen" },
                number: { unit: "", subject: "luvun" },
                bigint: { unit: "", subject: "suuren kokonaisluvun" },
                int: { unit: "", subject: "kokonaisluvun" },
                date: { unit: "", subject: "päivämäärän" },
              }),
              (t = {
                regex: "säännöllinen lauseke",
                email: "sähköpostiosoite",
                url: "URL-osoite",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-aikaleima",
                date: "ISO-päivämäärä",
                time: "ISO-aika",
                duration: "ISO-kesto",
                ipv4: "IPv4-osoite",
                ipv6: "IPv6-osoite",
                mac: "MAC-osoite",
                cidrv4: "IPv4-alue",
                cidrv6: "IPv6-alue",
                base64: "base64-koodattu merkkijono",
                base64url: "base64url-koodattu merkkijono",
                json_string: "JSON-merkkijono",
                e164: "E.164-luku",
                credit_card: "luottokortin numero",
                currency_code: "valuuttakoodi",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "templaattimerkkijono",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Virheellinen tyyppi: odotettiin instanceof ${i.expected}, oli ${r}`;
                    return `Virheellinen tyyppi: odotettiin ${e}, oli ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Virheellinen sy\xf6te: t\xe4ytyy olla ${eu(
                        i.values[0]
                      )}`;
                    return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Liian suuri: ${
                        n.subject
                      } t\xe4ytyy olla ${t}${i.maximum.toString()} ${
                        n.unit
                      }`.trim();
                    return `Liian suuri: arvon t\xe4ytyy olla ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Liian pieni: ${
                        n.subject
                      } t\xe4ytyy olla ${t}${i.minimum.toString()} ${
                        n.unit
                      }`.trim();
                    return `Liian pieni: arvon t\xe4ytyy olla ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${i.pattern}`;
                    return `Virheellinen ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Virheellinen luku: t\xe4ytyy olla luvun ${i.divisor} monikerta`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1
                        ? "Tuntemattomat avaimet"
                        : "Tuntematon avain"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return "Virheellinen avain tietueessa";
                  case "invalid_union":
                    return "Virheellinen unioni";
                  case "invalid_element":
                    return "Virheellinen arvo joukossa";
                  default:
                    return "Virheellinen syöte";
                }
              }),
          };
        },
        "fr",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "caractères", verb: "avoir" },
                file: { unit: "octets", verb: "avoir" },
                array: { unit: "éléments", verb: "avoir" },
                set: { unit: "éléments", verb: "avoir" },
              }),
              (t = {
                regex: "expression régulière",
                email: "adresse e-mail",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "date et heure ISO",
                date: "date ISO",
                time: "heure ISO",
                duration: "durée ISO",
                ipv4: "adresse IPv4",
                ipv6: "adresse IPv6",
                mac: "adresse MAC",
                cidrv4: "plage IPv4",
                cidrv6: "plage IPv6",
                base64: "chaîne de caractères encodée en base64",
                base64url: "chaîne de caractères encodée en base64url",
                json_string: "chaîne de caractères JSON",
                e164: "numéro au format E.164",
                credit_card: "numéro de carte de crédit",
                currency_code: "code de devise",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrée",
              }),
              (n = {
                string: "chaîne de caractères",
                number: "nombre",
                int: "entier",
                boolean: "booléen",
                bigint: "grand entier",
                symbol: "symbole",
                undefined: "indéfini",
                null: "null",
                never: "jamais",
                void: "vide",
                date: "date",
                array: "tableau",
                object: "objet",
                tuple: "tuple",
                record: "record",
                map: "map",
                set: "ensemble",
                file: "fichier",
                nonoptional: "non optionnel",
                nan: "NaN",
                function: "fonction",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Entr\xe9e invalide : instance de ${i.expected} attendu, ${r} re\xe7u`;
                    return `Entr\xe9e invalide : ${e} attendu, ${r} re\xe7u`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Entr\xe9e invalide : ${eu(i.values[0])} attendu`;
                    return `Option invalide : une valeur parmi ${S(
                      i.values,
                      "|"
                    )} attendue`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      r = e[i.origin] ?? null;
                    if (r)
                      return `Trop grand : ${n[i.origin] ?? "valeur"} doit ${
                        r.verb
                      } ${t}${i.maximum.toString()} ${r.unit ?? "élément(s)"}`;
                    return `Trop grand : ${
                      n[i.origin] ?? "valeur"
                    } doit \xeatre ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      r = e[i.origin] ?? null;
                    if (r)
                      return `Trop petit : ${n[i.origin] ?? "valeur"} doit ${
                        r.verb
                      } ${t}${i.minimum.toString()} ${r.unit}`;
                    return `Trop petit : ${
                      n[i.origin] ?? "valeur"
                    } doit \xeatre ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Cha\xeene de caract\xe8res invalide : doit commencer par "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Cha\xeene de caract\xe8res invalide : doit se terminer par "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Cha\xeene de caract\xe8res invalide : doit inclure "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Cha\xeene de caract\xe8res invalide : doit correspondre au motif ${i.pattern}`;
                    return `${t[i.format] ?? i.format} invalide`;
                  case "not_multiple_of":
                    return `Nombre invalide : doit \xeatre un multiple de ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Cl\xe9${i.keys.length > 1 ? "s" : ""} non reconnue${
                      i.keys.length > 1 ? "s" : ""
                    } : ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Cl\xe9 invalide dans ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrée invalide";
                  case "invalid_element":
                    return `Valeur invalide dans ${i.origin}`;
                }
              }),
          };
        },
        "frCA",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "caractères", verb: "avoir" },
                file: { unit: "octets", verb: "avoir" },
                array: { unit: "éléments", verb: "avoir" },
                set: { unit: "éléments", verb: "avoir" },
                map: { unit: "éléments", verb: "avoir" },
              }),
              (t = {
                regex: "entrée",
                email: "adresse courriel",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "date-heure ISO",
                date: "date ISO",
                time: "heure ISO",
                duration: "durée ISO",
                ipv4: "adresse IPv4",
                ipv6: "adresse IPv6",
                mac: "adresse MAC",
                cidrv4: "plage IPv4",
                cidrv6: "plage IPv6",
                base64: "chaîne encodée en base64",
                base64url: "chaîne encodée en base64url",
                json_string: "chaîne JSON",
                e164: "numéro E.164",
                credit_card: "numéro de carte de crédit",
                currency_code: "code de devise",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrée",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Entr\xe9e invalide : attendu instanceof ${i.expected}, re\xe7u ${r}`;
                    return `Entr\xe9e invalide : attendu ${e}, re\xe7u ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Entr\xe9e invalide : attendu ${eu(i.values[0])}`;
                    return `Option invalide : attendu l'une des valeurs suivantes ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "≤" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Trop grand : attendu que ${
                        i.origin ?? "la valeur"
                      } ait ${t}${i.maximum.toString()} ${n.unit}`;
                    return `Trop grand : attendu que ${
                      i.origin ?? "la valeur"
                    } soit ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? "≥" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Trop petit : attendu que ${
                        i.origin
                      } ait ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Trop petit : attendu que ${
                      i.origin
                    } soit ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Cha\xeene invalide : doit commencer par "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Cha\xeene invalide : doit se terminer par "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Cha\xeene invalide : doit inclure "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Cha\xeene invalide : doit correspondre au motif ${i.pattern}`;
                    return `${t[i.format] ?? i.format} invalide`;
                  case "not_multiple_of":
                    return `Nombre invalide : doit \xeatre un multiple de ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Cl\xe9${i.keys.length > 1 ? "s" : ""} non reconnue${
                      i.keys.length > 1 ? "s" : ""
                    } : ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Cl\xe9 invalide dans ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrée invalide";
                  case "invalid_element":
                    return `Valeur invalide dans ${i.origin}`;
                }
              }),
          };
        },
        "gu",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "અક્ષર", verb: "હોવા જોઈએ" },
                file: { unit: "બાયટ", verb: "હોવા જોઈએ" },
                array: { unit: "આઇટમ", verb: "હોવા જોઈએ" },
                set: { unit: "આઇટમ", verb: "હોવા જોઈએ" },
                map: { unit: "એન્ટ્રી", verb: "હોવા જોઈએ" },
              }),
              (t = {
                regex: "ઇનપુટ",
                email: "ઈમેઇલ એડ્રેસ",
                url: "URL",
                emoji: "ઇમોજી",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO તારીખ અને સમય",
                date: "ISO તારીખ",
                time: "ISO સમય",
                duration: "ISO અવધિ",
                ipv4: "IPv4 એડ્રેસ",
                ipv6: "IPv6 એડ્રેસ",
                mac: "MAC એડ્રેસ",
                cidrv4: "IPv4 શ્રેણી",
                cidrv6: "IPv6 શ્રેણી",
                base64: "base64-એન્કોડેડ સ્ટ્રિંગ",
                base64url: "base64url-એન્કોડેડ સ્ટ્રિંગ",
                json_string: "JSON સ્ટ્રિંગ",
                e164: "E.164 નંબર",
                credit_card: "ક્રેડિટ કાર્ડ નંબર",
                currency_code: "ચલણ કોડ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ઇનપુટ",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `અમાન્ય ઇનપુટ: અપેક્ષિત ${e}, પ્રાપ્ત ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `અમાન્ય ઇનપુટ: અપેક્ષિત ${eu(i.values[0])}`;
                    return `અમાન્ય વિકલ્પ: ${S(
                      i.values,
                      " | "
                    )} માધ્યમથી એક અપેક્ષિત`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ખૂબ મોટું: ${
                        i.origin ?? "મૂલ્ય"
                      } ${t}${i.maximum.toString()} ${
                        n.unit ?? "એલિમેન્ટ"
                      } હોવા જોઈએ`;
                    return `ખૂબ મોટું: ${
                      i.origin ?? "મૂલ્ય"
                    } ${t}${i.maximum.toString()} હોવું જોઈએ`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ખૂબ નાનું: ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit} હોવા જોઈએ`;
                    return `ખૂબ નાનું: ${
                      i.origin
                    } ${t}${i.minimum.toString()} હોવું જોઈએ`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `અમાન્ય સ્ટ્રિંગ: "${i.prefix}" થી શરૂ થવું જોઈએ`;
                    if ("ends_with" === i.format)
                      return `અમાન્ય સ્ટ્રિંગ: "${i.suffix}" પર સમાપ્ત થવું જોઈએ`;
                    if ("includes" === i.format)
                      return `અમાન્ય સ્ટ્રિંગ: "${i.includes}" શામેલ હોવું જોઈએ`;
                    if ("regex" === i.format)
                      return `અમાન્ય સ્ટ્રિંગ: પેટર્ન ${i.pattern} સાથે મેળ ખાવું જોઈએ`;
                    return `અમાન્ય ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `અમાન્ય નંબર: ${i.divisor} નો ગુણાંક હોવો જોઈએ`;
                  case "unrecognized_keys":
                    return `ઓળખી શકાતા નહીં તે કી${
                      i.keys.length > 1 ? "ઓ" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} માં અમાન્ય કી`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `અમાન્ય ડિસ્ક્રિમિનેટર મૂલ્ય. અપેક્ષિત ${e}`;
                    }
                    return "અમાન્ય ઇનપુટ";
                  case "invalid_element":
                    return `${i.origin} માં અમાન્ય મૂલ્ય`;
                  default:
                    return "અમાન્ય ઇનપુટ";
                }
              }),
          };
        },
        "he",
        0,
        function () {
          let e, t, n, i, r, a, o, s, u;
          return {
            localeError:
              ((e = {
                string: { label: "מחרוזת", gender: "f" },
                number: { label: "מספר", gender: "m" },
                boolean: { label: "ערך בוליאני", gender: "m" },
                bigint: { label: "BigInt", gender: "m" },
                date: { label: "תאריך", gender: "m" },
                array: { label: "מערך", gender: "m" },
                object: { label: "אובייקט", gender: "m" },
                null: { label: "ערך ריק (null)", gender: "m" },
                undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
                symbol: { label: "סימבול (Symbol)", gender: "m" },
                function: { label: "פונקציה", gender: "f" },
                map: { label: "מפה (Map)", gender: "f" },
                set: { label: "קבוצה (Set)", gender: "f" },
                file: { label: "קובץ", gender: "m" },
                promise: { label: "Promise", gender: "m" },
                NaN: { label: "NaN", gender: "m" },
                unknown: { label: "ערך לא ידוע", gender: "m" },
                value: { label: "ערך", gender: "m" },
              }),
              (t = {
                string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
                file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
                array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
                set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
                number: { unit: "", shortLabel: "קטן", longLabel: "גדול" },
              }),
              (n = (t) => (t ? e[t] : void 0)),
              (i = (t) => {
                let i = n(t);
                return i ? i.label : t ?? e.unknown.label;
              }),
              (r = (e) => `ה${i(e)}`),
              (a = (e) => {
                let t = n(e);
                return "f" === (t?.gender ?? "m")
                  ? "צריכה להיות"
                  : "צריך להיות";
              }),
              (o = (e) => (e ? t[e] ?? null : null)),
              (s = {
                regex: { label: "קלט", gender: "m" },
                email: { label: "כתובת אימייל", gender: "f" },
                url: { label: "כתובת רשת", gender: "f" },
                emoji: { label: "אימוג'י", gender: "m" },
                uuid: { label: "UUID", gender: "m" },
                uuidv4: { label: "UUIDv4", gender: "m" },
                uuidv6: { label: "UUIDv6", gender: "m" },
                nanoid: { label: "nanoid", gender: "m" },
                guid: { label: "GUID", gender: "m" },
                cuid: { label: "cuid", gender: "m" },
                cuid2: { label: "cuid2", gender: "m" },
                ulid: { label: "ULID", gender: "m" },
                xid: { label: "XID", gender: "m" },
                ksuid: { label: "KSUID", gender: "m" },
                datetime: { label: "תאריך וזמן ISO", gender: "m" },
                date: { label: "תאריך ISO", gender: "m" },
                time: { label: "זמן ISO", gender: "m" },
                duration: { label: "משך זמן ISO", gender: "m" },
                ipv4: { label: "כתובת IPv4", gender: "f" },
                ipv6: { label: "כתובת IPv6", gender: "f" },
                mac: { label: "כתובת MAC", gender: "f" },
                cidrv4: { label: "טווח IPv4", gender: "m" },
                cidrv6: { label: "טווח IPv6", gender: "m" },
                base64: { label: "מחרוזת בבסיס 64", gender: "f" },
                base64url: {
                  label: "מחרוזת בבסיס 64 לכתובות רשת",
                  gender: "f",
                },
                json_string: { label: "מחרוזת JSON", gender: "f" },
                e164: { label: "מספר E.164", gender: "m" },
                credit_card: { label: "מספר כרטיס אשראי", gender: "m" },
                currency_code: { label: "קוד מטבע", gender: "m" },
                iban: { label: "IBAN", gender: "m" },
                jwt: { label: "JWT", gender: "m" },
                template_literal: { label: "קלט", gender: "m" },
                ends_with: { label: "קלט", gender: "m" },
                includes: { label: "קלט", gender: "m" },
                lowercase: { label: "קלט", gender: "m" },
                starts_with: { label: "קלט", gender: "m" },
                uppercase: { label: "קלט", gender: "m" },
              }),
              (u = { nan: "NaN" }),
              (t) => {
                switch (t.code) {
                  case "invalid_type": {
                    let n = t.expected,
                      r = u[n ?? ""] ?? i(n),
                      a = eU(t.input),
                      o = u[a] ?? e[a]?.label ?? a;
                    if (/^[A-Z]/.test(t.expected))
                      return `קלט לא תקין: צריך להיות instanceof ${t.expected}, התקבל ${o}`;
                    return `קלט לא תקין: צריך להיות ${r}, התקבל ${o}`;
                  }
                  case "invalid_value": {
                    if (1 === t.values.length)
                      return `ערך לא תקין: הערך חייב להיות ${eu(t.values[0])}`;
                    let e = t.values.map((e) => eu(e));
                    if (2 === t.values.length)
                      return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`;
                    let n = e[e.length - 1],
                      i = e.slice(0, -1).join(", ");
                    return `ערך לא תקין: האפשרויות המתאימות הן ${i} או ${n}`;
                  }
                  case "too_big": {
                    let e = o(t.origin),
                      n = r(t.origin ?? "value");
                    if ("string" === t.origin)
                      return `${
                        e?.longLabel ?? "ארוך"
                      } מדי: ${n} צריכה להכיל ${t.maximum.toString()} ${
                        e?.unit ?? ""
                      } ${t.inclusive ? "או פחות" : "לכל היותר"}`.trim();
                    if ("number" === t.origin) {
                      let e = t.inclusive
                        ? `קטן או שווה ל-${t.maximum}`
                        : `קטן מ-${t.maximum}`;
                      return `גדול מדי: ${n} צריך להיות ${e}`;
                    }
                    if ("array" === t.origin || "set" === t.origin) {
                      let i = "set" === t.origin ? "צריכה" : "צריך",
                        r = t.inclusive
                          ? `${t.maximum} ${e?.unit ?? ""} או פחות`
                          : `פחות מ-${t.maximum} ${e?.unit ?? ""}`;
                      return `גדול מדי: ${n} ${i} להכיל ${r}`.trim();
                    }
                    let i = t.inclusive ? "<=" : "<",
                      s = a(t.origin ?? "value");
                    if (e?.unit)
                      return `${
                        e.longLabel
                      } מדי: ${n} ${s} ${i}${t.maximum.toString()} ${e.unit}`;
                    return `${
                      e?.longLabel ?? "גדול"
                    } מדי: ${n} ${s} ${i}${t.maximum.toString()}`;
                  }
                  case "too_small": {
                    let e = o(t.origin),
                      n = r(t.origin ?? "value");
                    if ("string" === t.origin)
                      return `${
                        e?.shortLabel ?? "קצר"
                      } מדי: ${n} צריכה להכיל ${t.minimum.toString()} ${
                        e?.unit ?? ""
                      } ${t.inclusive ? "או יותר" : "לפחות"}`.trim();
                    if ("number" === t.origin) {
                      let e = t.inclusive
                        ? `גדול או שווה ל-${t.minimum}`
                        : `גדול מ-${t.minimum}`;
                      return `קטן מדי: ${n} צריך להיות ${e}`;
                    }
                    if ("array" === t.origin || "set" === t.origin) {
                      let i = "set" === t.origin ? "צריכה" : "צריך";
                      if (1 === t.minimum && t.inclusive) {
                        let e = (t.origin, "לפחות פריט אחד");
                        return `קטן מדי: ${n} ${i} להכיל ${e}`;
                      }
                      let r = t.inclusive
                        ? `${t.minimum} ${e?.unit ?? ""} או יותר`
                        : `יותר מ-${t.minimum} ${e?.unit ?? ""}`;
                      return `קטן מדי: ${n} ${i} להכיל ${r}`.trim();
                    }
                    let i = t.inclusive ? ">=" : ">",
                      s = a(t.origin ?? "value");
                    if (e?.unit)
                      return `${
                        e.shortLabel
                      } מדי: ${n} ${s} ${i}${t.minimum.toString()} ${e.unit}`;
                    return `${
                      e?.shortLabel ?? "קטן"
                    } מדי: ${n} ${s} ${i}${t.minimum.toString()}`;
                  }
                  case "invalid_format": {
                    if ("starts_with" === t.format)
                      return `המחרוזת חייבת להתחיל ב "${t.prefix}"`;
                    if ("ends_with" === t.format)
                      return `המחרוזת חייבת להסתיים ב "${t.suffix}"`;
                    if ("includes" === t.format)
                      return `המחרוזת חייבת לכלול "${t.includes}"`;
                    if ("regex" === t.format)
                      return `המחרוזת חייבת להתאים לתבנית ${t.pattern}`;
                    let e = s[t.format],
                      n = e?.label ?? t.format,
                      i = e?.gender ?? "m";
                    return `${n} לא ${"f" === i ? "תקינה" : "תקין"}`;
                  }
                  case "not_multiple_of":
                    return `מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;
                  case "unrecognized_keys":
                    return `מפתח${t.keys.length > 1 ? "ות" : ""} לא מזוה${
                      t.keys.length > 1 ? "ים" : "ה"
                    }: ${S(t.keys, ", ")}`;
                  case "invalid_key":
                    return "שדה לא תקין באובייקט";
                  case "invalid_union":
                  default:
                    return "קלט לא תקין";
                  case "invalid_element": {
                    let e = r(t.origin ?? "array");
                    return `ערך לא תקין ב${e}`;
                  }
                }
              }),
          };
        },
        "hi",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "अक्षर", verb: "रखने के लिए" },
                file: { unit: "बाइट्स", verb: "रखने के लिए" },
                array: { unit: "तत्व", verb: "रखने के लिए" },
                set: { unit: "तत्व", verb: "रखने के लिए" },
                map: { unit: "प्रविष्टियाँ", verb: "रखने के लिए" },
              }),
              (t = {
                regex: "इनपुट",
                email: "ईमेल पता",
                url: "URL",
                emoji: "इमोजी",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO तिथि और समय",
                date: "ISO तिथि",
                time: "ISO समय",
                duration: "ISO अवधि",
                ipv4: "IPv4 पता",
                ipv6: "IPv6 पता",
                mac: "MAC पता",
                cidrv4: "IPv4 श्रेणी",
                cidrv6: "IPv6 श्रेणी",
                base64: "Base64-एन्कोडेड स्ट्रिंग",
                base64url: "Base64URL-एन्कोडेड स्ट्रिंग",
                json_string: "JSON स्ट्रिंग",
                e164: "E.164 संख्या",
                credit_card: "क्रेडिट कार्ड संख्या",
                currency_code: "मुद्रा कोड",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "इनपुट",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `अमान्य इनपुट: अपेक्षित ${e}, प्राप्त ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `अमान्य इनपुट: अपेक्षित ${eu(i.values[0])}`;
                    return `अमान्य विकल्प: अपेक्षित मानों में से एक ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `बहुत बड़ा: अपेक्षित था कि ${
                        i.origin ?? "मान"
                      } में ${t}${i.maximum} ${n.unit} हों`;
                    return `बहुत बड़ा: अपेक्षित था कि ${
                      i.origin ?? "मान"
                    } ${t}${i.maximum} हो`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `बहुत छोटा: अपेक्षित था कि ${i.origin} में ${t}${i.minimum} ${n.unit} हों`;
                    return `बहुत छोटा: अपेक्षित था कि ${i.origin} ${t}${i.minimum} हो`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `अमान्य स्ट्रिंग: "${i.prefix}" से शुरू होना चाहिए`;
                    if ("ends_with" === i.format)
                      return `अमान्य स्ट्रिंग: "${i.suffix}" पर समाप्त होना चाहिए`;
                    if ("includes" === i.format)
                      return `अमान्य स्ट्रिंग: इसमें "${i.includes}" शामिल होना चाहिए`;
                    if ("regex" === i.format)
                      return `अमान्य स्ट्रिंग: पैटर्न ${i.pattern} से मेल खाना चाहिए`;
                    return `अमान्य ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `अमान्य संख्या: यह ${i.divisor} का गुणज होना चाहिए`;
                  case "unrecognized_keys":
                    return `अपरिचित कुंजी${i.keys.length > 1 ? "याँ" : ""}: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `अमान्य कुंजी: ${i.origin} में`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e}`;
                    }
                    return "अमान्य इनपुट";
                  case "invalid_element":
                    return `अमान्य मान: ${i.origin} में`;
                  default:
                    return "अमान्य इनपुट";
                }
              }),
          };
        },
        "hr",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "znakova", verb: "imati" },
                file: { unit: "bajtova", verb: "imati" },
                array: { unit: "stavki", verb: "imati" },
                set: { unit: "stavki", verb: "imati" },
              }),
              (t = {
                regex: "unos",
                email: "email adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum i vrijeme",
                date: "ISO datum",
                time: "ISO vrijeme",
                duration: "ISO trajanje",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "IPv4 raspon",
                cidrv6: "IPv6 raspon",
                base64: "base64 kodirani tekst",
                base64url: "base64url kodirani tekst",
                json_string: "JSON tekst",
                e164: "E.164 broj",
                credit_card: "broj kreditne kartice",
                currency_code: "kod valute",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "unos",
              }),
              (n = {
                nan: "NaN",
                string: "tekst",
                number: "broj",
                boolean: "boolean",
                array: "niz",
                object: "objekt",
                set: "skup",
                file: "datoteka",
                date: "datum",
                bigint: "bigint",
                symbol: "simbol",
                undefined: "undefined",
                null: "null",
                function: "funkcija",
                map: "mapa",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Neispravan unos: očekuje se instanceof ${i.expected}, a primljeno je ${r}`;
                    return `Neispravan unos: očekuje se ${e}, a primljeno je ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Neispravna vrijednost: očekivano ${eu(
                        i.values[0]
                      )}`;
                    return `Neispravna opcija: očekivano jedno od ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      r = e[i.origin] ?? null,
                      a = n[i.origin] ?? i.origin;
                    if (r)
                      return `Preveliko: očekivano da ${
                        a ?? "vrijednost"
                      } ima ${t}${i.maximum.toString()} ${
                        r.unit ?? "elemenata"
                      }`;
                    return `Preveliko: očekivano da ${
                      a ?? "vrijednost"
                    } bude ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      r = e[i.origin] ?? null,
                      a = n[i.origin] ?? i.origin;
                    if (r)
                      return `Premalo: očekivano da ${a} ima ${t}${i.minimum.toString()} ${
                        r.unit
                      }`;
                    return `Premalo: očekivano da ${a} bude ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Neispravan tekst: mora započinjati s "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Neispravan tekst: mora završavati s "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Neispravan tekst: mora sadržavati "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Neispravan tekst: mora odgovarati uzorku ${i.pattern}`;
                    return `Neispravna ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Neispravan broj: mora biti višekratnik od ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Neprepoznat${
                      i.keys.length > 1 ? "i ključevi" : " ključ"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Neispravan ključ u ${n[i.origin] ?? i.origin}`;
                  case "invalid_union":
                  default:
                    return "Neispravan unos";
                  case "invalid_element":
                    return `Neispravna vrijednost u ${n[i.origin] ?? i.origin}`;
                }
              }),
          };
        },
        "hu",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "karakter", verb: "legyen" },
                file: { unit: "byte", verb: "legyen" },
                array: { unit: "elem", verb: "legyen" },
                set: { unit: "elem", verb: "legyen" },
                map: { unit: "elem", verb: "legyen" },
              }),
              (t = {
                regex: "bemenet",
                email: "email cím",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO időbélyeg",
                date: "ISO dátum",
                time: "ISO idő",
                duration: "ISO időintervallum",
                ipv4: "IPv4 cím",
                ipv6: "IPv6 cím",
                mac: "MAC cím",
                cidrv4: "IPv4 tartomány",
                cidrv6: "IPv6 tartomány",
                base64: "base64-kódolt string",
                base64url: "base64url-kódolt string",
                json_string: "JSON string",
                e164: "E.164 szám",
                credit_card: "hitelkártyaszám",
                currency_code: "pénznemkód",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "bemenet",
              }),
              (n = { nan: "NaN", number: "szám", array: "tömb" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k instanceof ${i.expected}, a kapott \xe9rt\xe9k ${r}`;
                    return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${e}, a kapott \xe9rt\xe9k ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${eu(
                        i.values[0]
                      )}`;
                    return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `T\xfal nagy: ${
                        i.origin ?? "érték"
                      } m\xe9rete t\xfal nagy ${t}${i.maximum.toString()} ${
                        n.unit ?? "elem"
                      }`;
                    return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${
                      i.origin ?? "érték"
                    } t\xfal nagy: ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${
                        i.origin
                      } m\xe9rete t\xfal kicsi ${t}${i.minimum.toString()} ${
                        n.unit
                      }`;
                    return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${
                      i.origin
                    } t\xfal kicsi ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `\xc9rv\xe9nytelen string: "${i.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
                    if ("ends_with" === i.format)
                      return `\xc9rv\xe9nytelen string: "${i.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
                    if ("includes" === i.format)
                      return `\xc9rv\xe9nytelen string: "${i.includes}" \xe9rt\xe9ket kell tartalmaznia`;
                    if ("regex" === i.format)
                      return `\xc9rv\xe9nytelen string: ${i.pattern} mint\xe1nak kell megfelelnie`;
                    return `\xc9rv\xe9nytelen ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `\xc9rv\xe9nytelen sz\xe1m: ${i.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
                  case "unrecognized_keys":
                    return `Ismeretlen kulcs${
                      i.keys.length > 1 ? "s" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `\xc9rv\xe9nytelen kulcs ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Érvénytelen bemenet";
                  case "invalid_element":
                    return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${i.origin}`;
                }
              }),
          };
        },
        "hy",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: {
                  unit: { one: "նշան", many: "նշաններ" },
                  verb: "ունենալ",
                },
                file: {
                  unit: { one: "բայթ", many: "բայթեր" },
                  verb: "ունենալ",
                },
                array: {
                  unit: { one: "տարր", many: "տարրեր" },
                  verb: "ունենալ",
                },
                set: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
                map: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
              }),
              (t = {
                regex: "մուտք",
                email: "էլ. հասցե",
                url: "URL",
                emoji: "էմոջի",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ամսաթիվ և ժամ",
                date: "ISO ամսաթիվ",
                time: "ISO ժամ",
                duration: "ISO տևողություն",
                ipv4: "IPv4 հասցե",
                ipv6: "IPv6 հասցե",
                mac: "MAC հասցե",
                cidrv4: "IPv4 միջակայք",
                cidrv6: "IPv6 միջակայք",
                base64: "base64 ձևաչափով տող",
                base64url: "base64url ձևաչափով տող",
                json_string: "JSON տող",
                e164: "E.164 համար",
                credit_card: "կրեդիտ քարտի համար",
                currency_code: "արժույթի կոդ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "մուտք",
              }),
              (n = { nan: "NaN", number: "թիվ", array: "զանգված" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Սխալ մուտքագրում․ սպասվում էր instanceof ${i.expected}, ստացվել է ${r}`;
                    return `Սխալ մուտքագրում․ սպասվում էր ${e}, ստացվել է ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Սխալ մուտքագրում․ սպասվում էր ${eu(i.values[1])}`;
                    return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n) {
                      let e = af(Number(i.maximum), n.unit.one, n.unit.many);
                      return `Չափազանց մեծ արժեք․ սպասվում է, որ ${ap(
                        i.origin ?? "արժեք"
                      )} կունենա ${t}${i.maximum.toString()} ${e}`;
                    }
                    return `Չափազանց մեծ արժեք․ սպասվում է, որ ${ap(
                      i.origin ?? "արժեք"
                    )} լինի ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n) {
                      let e = af(Number(i.minimum), n.unit.one, n.unit.many);
                      return `Չափազանց փոքր արժեք․ սպասվում է, որ ${ap(
                        i.origin
                      )} կունենա ${t}${i.minimum.toString()} ${e}`;
                    }
                    return `Չափազանց փոքր արժեք․ սպասվում է, որ ${ap(
                      i.origin
                    )} լինի ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Սխալ տող․ պետք է սկսվի "${i.prefix}"-ով`;
                    if ("ends_with" === i.format)
                      return `Սխալ տող․ պետք է ավարտվի "${i.suffix}"-ով`;
                    if ("includes" === i.format)
                      return `Սխալ տող․ պետք է պարունակի "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Սխալ տող․ պետք է համապատասխանի ${i.pattern} ձևաչափին`;
                    return `Սխալ ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${i.divisor}-ի`;
                  case "unrecognized_keys":
                    return `Չճանաչված բանալի${
                      i.keys.length > 1 ? "ներ" : ""
                    }. ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Սխալ բանալի ${ap(i.origin)}-ում`;
                  case "invalid_union":
                  default:
                    return "Սխալ մուտքագրում";
                  case "invalid_element":
                    return `Սխալ արժեք ${ap(i.origin)}-ում`;
                }
              }),
          };
        },
        "id",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "karakter", verb: "memiliki" },
                file: { unit: "byte", verb: "memiliki" },
                array: { unit: "item", verb: "memiliki" },
                set: { unit: "item", verb: "memiliki" },
                map: { unit: "item", verb: "memiliki" },
              }),
              (t = {
                regex: "input",
                email: "alamat email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "tanggal dan waktu format ISO",
                date: "tanggal format ISO",
                time: "jam format ISO",
                duration: "durasi format ISO",
                ipv4: "alamat IPv4",
                ipv6: "alamat IPv6",
                mac: "alamat MAC",
                cidrv4: "rentang alamat IPv4",
                cidrv6: "rentang alamat IPv6",
                base64: "string dengan enkode base64",
                base64url: "string dengan enkode base64url",
                json_string: "string JSON",
                e164: "angka E.164",
                credit_card: "nomor kartu kredit",
                currency_code: "kode mata uang",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Input tidak valid: diharapkan instanceof ${i.expected}, diterima ${r}`;
                    return `Input tidak valid: diharapkan ${e}, diterima ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Input tidak valid: diharapkan ${eu(i.values[0])}`;
                    return `Pilihan tidak valid: diharapkan salah satu dari ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Terlalu besar: diharapkan ${
                        i.origin ?? "value"
                      } memiliki ${t}${i.maximum.toString()} ${
                        n.unit ?? "elemen"
                      }`;
                    return `Terlalu besar: diharapkan ${
                      i.origin ?? "value"
                    } menjadi ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Terlalu kecil: diharapkan ${
                        i.origin
                      } memiliki ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Terlalu kecil: diharapkan ${
                      i.origin
                    } menjadi ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `String tidak valid: harus dimulai dengan "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `String tidak valid: harus berakhir dengan "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `String tidak valid: harus menyertakan "${i.includes}"`;
                    if ("regex" === i.format)
                      return `String tidak valid: harus sesuai pola ${i.pattern}`;
                    return `${t[i.format] ?? i.format} tidak valid`;
                  case "not_multiple_of":
                    return `Angka tidak valid: harus kelipatan dari ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Kunci tidak dikenali ${
                      i.keys.length > 1 ? "s" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Kunci tidak valid di ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Input tidak valid";
                  case "invalid_element":
                    return `Nilai tidak valid di ${i.origin}`;
                }
              }),
          };
        },
        "is",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "stafi", verb: "að hafa" },
                file: { unit: "bæti", verb: "að hafa" },
                array: { unit: "hluti", verb: "að hafa" },
                set: { unit: "hluti", verb: "að hafa" },
                map: { unit: "hluti", verb: "að hafa" },
              }),
              (t = {
                regex: "gildi",
                email: "netfang",
                url: "vefslóð",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dagsetning og tími",
                date: "ISO dagsetning",
                time: "ISO tími",
                duration: "ISO tímalengd",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded strengur",
                base64url: "base64url-encoded strengur",
                json_string: "JSON strengur",
                e164: "E.164 tölugildi",
                credit_card: "kreditkortanúmer",
                currency_code: "gjaldmiðilskóði",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "gildi",
              }),
              (n = { nan: "NaN", number: "númer", array: "fylki" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Rangt gildi: \xde\xfa sl\xf3st inn ${r} \xfear sem \xe1 a\xf0 vera instanceof ${i.expected}`;
                    return `Rangt gildi: \xde\xfa sl\xf3st inn ${r} \xfear sem \xe1 a\xf0 vera ${e}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Rangt gildi: gert r\xe1\xf0 fyrir ${eu(
                        i.values[0]
                      )}`;
                    return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${
                        i.origin ?? "gildi"
                      } hafi ${t}${i.maximum.toString()} ${n.unit ?? "hluti"}`;
                    return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${
                      i.origin ?? "gildi"
                    } s\xe9 ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${
                        i.origin
                      } hafi ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${
                      i.origin
                    } s\xe9 ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${i.includes}"`;
                    if ("regex" === i.format)
                      return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${i.pattern}`;
                    return `Rangt ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${i.divisor}`;
                  case "unrecognized_keys":
                    return `\xd3\xfeekkt ${
                      i.keys.length > 1 ? "ir lyklar" : "ur lykill"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Rangur lykill \xed ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Rangt gildi";
                  case "invalid_element":
                    return `Rangt gildi \xed ${i.origin}`;
                }
              }),
          };
        },
        "it",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "caratteri", verb: "avere" },
                file: { unit: "byte", verb: "avere" },
                array: { unit: "elementi", verb: "avere" },
                set: { unit: "elementi", verb: "avere" },
                map: { unit: "elementi", verb: "avere" },
              }),
              (t = {
                regex: "input",
                email: "indirizzo email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data e ora ISO",
                date: "data ISO",
                time: "ora ISO",
                duration: "durata ISO",
                ipv4: "indirizzo IPv4",
                ipv6: "indirizzo IPv6",
                mac: "indirizzo MAC",
                cidrv4: "intervallo IPv4",
                cidrv6: "intervallo IPv6",
                base64: "stringa codificata in base64",
                base64url: "URL codificata in base64",
                json_string: "stringa JSON",
                e164: "numero E.164",
                credit_card: "numero di carta di credito",
                currency_code: "codice valuta",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN", number: "numero", array: "vettore" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Input non valido: atteso instanceof ${i.expected}, ricevuto ${r}`;
                    return `Input non valido: atteso ${e}, ricevuto ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Input non valido: atteso ${eu(i.values[0])}`;
                    return `Opzione non valida: atteso uno tra ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Troppo grande: ${
                        i.origin ?? "valore"
                      } deve avere ${t}${i.maximum.toString()} ${
                        n.unit ?? "elementi"
                      }`;
                    return `Troppo grande: ${
                      i.origin ?? "valore"
                    } deve essere ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Troppo piccolo: ${
                        i.origin
                      } deve avere ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Troppo piccolo: ${
                      i.origin
                    } deve essere ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Stringa non valida: deve iniziare con "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Stringa non valida: deve terminare con "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Stringa non valida: deve includere "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Stringa non valida: deve corrispondere al pattern ${i.pattern}`;
                    return `Input non valido: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Numero non valido: deve essere un multiplo di ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Chiav${
                      i.keys.length > 1 ? "i" : "e"
                    } non riconosciut${i.keys.length > 1 ? "e" : "a"}: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `Chiave non valida in ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Input non valido";
                  case "invalid_element":
                    return `Valore non valido in ${i.origin}`;
                }
              }),
          };
        },
        "ja",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "文字", verb: "である" },
                file: { unit: "バイト", verb: "である" },
                array: { unit: "要素", verb: "である" },
                set: { unit: "要素", verb: "である" },
                map: { unit: "要素", verb: "である" },
              }),
              (t = {
                regex: "入力値",
                email: "メールアドレス",
                url: "URL",
                emoji: "絵文字",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO日時",
                date: "ISO日付",
                time: "ISO時刻",
                duration: "ISO期間",
                ipv4: "IPv4アドレス",
                ipv6: "IPv6アドレス",
                mac: "MACアドレス",
                cidrv4: "IPv4範囲",
                cidrv6: "IPv6範囲",
                base64: "base64エンコード文字列",
                base64url: "base64urlエンコード文字列",
                json_string: "JSON文字列",
                e164: "E.164番号",
                credit_card: "クレジットカード番号",
                currency_code: "通貨コード",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "入力値",
              }),
              (n = { nan: "NaN", number: "数値", array: "配列" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `無効な入力: instanceof ${i.expected}が期待されましたが、${r}が入力されました`;
                    return `無効な入力: ${e}が期待されましたが、${r}が入力されました`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `無効な入力: ${eu(i.values[0])}が期待されました`;
                    return `無効な選択: ${S(
                      i.values,
                      "、"
                    )}のいずれかである必要があります`;
                  case "too_big": {
                    let t = i.inclusive ? "以下である" : "より小さい",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `大きすぎる値: ${
                        i.origin ?? "値"
                      }は${i.maximum.toString()}${
                        n.unit ?? "要素"
                      }${t}必要があります`;
                    return `大きすぎる値: ${
                      i.origin ?? "値"
                    }は${i.maximum.toString()}${t}必要があります`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? "以上である" : "より大きい",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `小さすぎる値: ${
                        i.origin
                      }は${i.minimum.toString()}${n.unit}${t}必要があります`;
                    return `小さすぎる値: ${
                      i.origin
                    }は${i.minimum.toString()}${t}必要があります`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `無効な文字列: "${i.prefix}"で始まる必要があります`;
                    if ("ends_with" === i.format)
                      return `無効な文字列: "${i.suffix}"で終わる必要があります`;
                    if ("includes" === i.format)
                      return `無効な文字列: "${i.includes}"を含む必要があります`;
                    if ("regex" === i.format)
                      return `無効な文字列: パターン${i.pattern}に一致する必要があります`;
                    return `無効な${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `無効な数値: ${i.divisor}の倍数である必要があります`;
                  case "unrecognized_keys":
                    return `認識されていないキー${
                      i.keys.length > 1 ? "群" : ""
                    }: ${S(i.keys, "、")}`;
                  case "invalid_key":
                    return `${i.origin}内の無効なキー`;
                  case "invalid_union":
                  default:
                    return "無効な入力";
                  case "invalid_element":
                    return `${i.origin}内の無効な値`;
                }
              }),
          };
        },
        "ka",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
                file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
                array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
                set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
                map: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
              }),
              (t = {
                regex: "შეყვანა",
                email: "ელ-ფოსტის მისამართი",
                url: "URL",
                emoji: "ემოჯი",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "თარიღი-დრო",
                date: "თარიღი",
                time: "დრო",
                duration: "ხანგრძლივობა",
                ipv4: "IPv4 მისამართი",
                ipv6: "IPv6 მისამართი",
                mac: "MAC მისამართი",
                cidrv4: "IPv4 დიაპაზონი",
                cidrv6: "IPv6 დიაპაზონი",
                base64: "base64-კოდირებული ველი",
                base64url: "base64url-კოდირებული ველი",
                json_string: "JSON ველი",
                e164: "E.164 ნომერი",
                credit_card: "საკრედიტო ბარათის ნომერი",
                currency_code: "ვალუტის კოდი",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "შეყვანა",
              }),
              (n = {
                nan: "NaN",
                number: "რიცხვი",
                string: "ველი",
                boolean: "ბულეანი",
                function: "ფუნქცია",
                array: "მასივი",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `არასწორი შეყვანა: მოსალოდნელი instanceof ${i.expected}, მიღებული ${r}`;
                    return `არასწორი შეყვანა: მოსალოდნელი ${e}, მიღებული ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `არასწორი შეყვანა: მოსალოდნელი ${eu(i.values[0])}`;
                    return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${S(
                      i.values,
                      "|"
                    )}-დან`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ზედმეტად დიდი: მოსალოდნელი ${
                        i.origin ?? "მნიშვნელობა"
                      } ${n.verb} ${t}${i.maximum.toString()} ${n.unit}`;
                    return `ზედმეტად დიდი: მოსალოდნელი ${
                      i.origin ?? "მნიშვნელობა"
                    } იყოს ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ზედმეტად პატარა: მოსალოდნელი ${i.origin} ${
                        n.verb
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `ზედმეტად პატარა: მოსალოდნელი ${
                      i.origin
                    } იყოს ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `არასწორი ველი: უნდა იწყებოდეს "${i.prefix}"-ით`;
                    if ("ends_with" === i.format)
                      return `არასწორი ველი: უნდა მთავრდებოდეს "${i.suffix}"-ით`;
                    if ("includes" === i.format)
                      return `არასწორი ველი: უნდა შეიცავდეს "${i.includes}"-ს`;
                    if ("regex" === i.format)
                      return `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${i.pattern}`;
                    return `არასწორი ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `არასწორი რიცხვი: უნდა იყოს ${i.divisor}-ის ჯერადი`;
                  case "unrecognized_keys":
                    return `უცნობი გასაღებ${
                      i.keys.length > 1 ? "ები" : "ი"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `არასწორი გასაღები ${i.origin}-ში`;
                  case "invalid_union":
                  default:
                    return "არასწორი შეყვანა";
                  case "invalid_element":
                    return `არასწორი მნიშვნელობა ${i.origin}-ში`;
                }
              }),
          };
        },
        "kh",
        0,
        function () {
          return ah();
        },
        "km",
        0,
        ah,
        "kn",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "ಅಕ್ಷರಗಳು", verb: "ಹೊಂದಲು" },
                file: { unit: "ಬೈಟ್‌ಗಳು", verb: "ಹೊಂದಲು" },
                array: { unit: "ವಸ್ತುಗಳು", verb: "ಹೊಂದಲು" },
                set: { unit: "ವಸ್ತುಗಳು", verb: "ಹೊಂದಲು" },
                map: { unit: "entries", verb: "ಹೊಂದಲು" },
              }),
              (t = {
                regex: "ಇನ್ಪುಟ್",
                email: "email ವಿಳಾಸ",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ದಿನಾಂಕದ ಸಮಯ",
                date: "ISO ದಿನಾಂಕ",
                time: "ISO ಸಮಯ",
                duration: "ISO ಅವಧಿ",
                ipv4: "IPv4 ವಿಳಾಸ",
                ipv6: "IPv6 ವಿಳಾಸ",
                mac: "MAC ವಿಳಾಸ",
                cidrv4: "IPv4 ವ್ಯಾಪ್ತಿಯ",
                cidrv6: "IPv6 ವ್ಯಾಪ್ತಿಯ",
                base64: "base64-encodedಸ್ಟ್ರಿಂಗ್",
                base64url: "base64url-encodedಸ್ಟ್ರಿಂಗ್",
                json_string: "JSONಸ್ಟ್ರಿಂಗ್",
                e164: "E.164 ಸಂಖ್ಯೆ",
                credit_card: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
                currency_code: "ಕರೆನ್ಸಿ ಕೋಡ್",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ಇನ್ಪುಟ್",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e}, ಸ್ವೀಕರಿಸಿದನು ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${eu(
                        i.values[0]
                      )}`;
                    return `ಅಮಾನ್ಯ ಆಯ್ಕೆ: ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${
                        i.origin ?? "value"
                      } ಹೊಂದಲು ${t}${i.maximum.toString()} ${
                        n.unit ?? "ಅಂಶಗಳು"
                      }`;
                    return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${
                      i.origin ?? "value"
                    } ಎಂದು ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${
                        i.origin
                      } ಹೊಂದಲು ${t}${i.minimum.toString()} ${n.unit}`;
                    return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${
                      i.origin
                    } ಎಂದು ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳಬೇಕು "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `ಅಮಾನ್ಯ ಸ್ಟ್ರಿಂಗ್: ಒಳಗೊಂಡಿರಬೇಕು "${i.includes}"`;
                    if ("regex" === i.format)
                      return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ${i.pattern}`;
                    return `ಅಮಾನ್ಯ ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `ಅಮಾನ್ಯ ಸಂಖ್ಯೆ: ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು ${i.divisor}`;
                  case "unrecognized_keys":
                    return `ಗುರುತಿಸಲಾಗದ ಕೀ ${i.keys.length > 1 ? "s" : ""}: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `ಅಮಾನ್ಯವಾದ ಕೀ ಇನ್ ${i.origin}`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `ಅಮಾನ್ಯ ತಾರತಮ್ಯ ಮೌಲ್ಯ. ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e}`;
                    }
                    return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್";
                  case "invalid_element":
                    return `ರಲ್ಲಿ ಅಮಾನ್ಯ ಮೌಲ್ಯ ${i.origin}`;
                  default:
                    return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್";
                }
              }),
          };
        },
        "ko",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "문자", verb: "to have" },
                file: { unit: "바이트", verb: "to have" },
                array: { unit: "개", verb: "to have" },
                set: { unit: "개", verb: "to have" },
                map: { unit: "개", verb: "to have" },
              }),
              (t = {
                regex: "입력",
                email: "이메일 주소",
                url: "URL",
                emoji: "이모지",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO 날짜시간",
                date: "ISO 날짜",
                time: "ISO 시간",
                duration: "ISO 기간",
                ipv4: "IPv4 주소",
                ipv6: "IPv6 주소",
                mac: "MAC 주소",
                cidrv4: "IPv4 범위",
                cidrv6: "IPv6 범위",
                base64: "base64 인코딩 문자열",
                base64url: "base64url 인코딩 문자열",
                json_string: "JSON 문자열",
                e164: "E.164 번호",
                credit_card: "신용카드 번호",
                currency_code: "통화 코드",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "입력",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `잘못된 입력: 예상 타입은 instanceof ${i.expected}, 받은 타입은 ${r}입니다`;
                    return `잘못된 입력: 예상 타입은 ${e}, 받은 타입은 ${r}입니다`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `잘못된 입력: 값은 ${eu(
                        i.values[0]
                      )} 이어야 합니다`;
                    return `잘못된 옵션: ${S(
                      i.values,
                      "또는 "
                    )} 중 하나여야 합니다`;
                  case "too_big": {
                    let t = i.inclusive ? "이하" : "미만",
                      n = "미만" === t ? "이어야 합니다" : "여야 합니다",
                      r = e[i.origin] ?? null,
                      a = r?.unit ?? "요소";
                    if (r)
                      return `${
                        i.origin ?? "값"
                      }이 너무 큽니다: ${i.maximum.toString()}${a} ${t}${n}`;
                    return `${
                      i.origin ?? "값"
                    }이 너무 큽니다: ${i.maximum.toString()} ${t}${n}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? "이상" : "초과",
                      n = "이상" === t ? "이어야 합니다" : "여야 합니다",
                      r = e[i.origin] ?? null,
                      a = r?.unit ?? "요소";
                    if (r)
                      return `${
                        i.origin ?? "값"
                      }이 너무 작습니다: ${i.minimum.toString()}${a} ${t}${n}`;
                    return `${
                      i.origin ?? "값"
                    }이 너무 작습니다: ${i.minimum.toString()} ${t}${n}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다`;
                    if ("ends_with" === i.format)
                      return `잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다`;
                    if ("includes" === i.format)
                      return `잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다`;
                    if ("regex" === i.format)
                      return `잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다`;
                    return `잘못된 ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `잘못된 숫자: ${i.divisor}의 배수여야 합니다`;
                  case "unrecognized_keys":
                    return `인식할 수 없는 키: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `잘못된 키: ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "잘못된 입력";
                  case "invalid_element":
                    return `잘못된 값: ${i.origin}`;
                }
              }),
          };
        },
        "lt",
        0,
        function () {
          return {
            localeError: (() => {
              let e = {
                string: {
                  unit: { one: "simbolis", few: "simboliai", many: "simbolių" },
                  verb: {
                    smaller: {
                      inclusive: "turi būti ne ilgesnė kaip",
                      notInclusive: "turi būti trumpesnė kaip",
                    },
                    bigger: {
                      inclusive: "turi būti ne trumpesnė kaip",
                      notInclusive: "turi būti ilgesnė kaip",
                    },
                  },
                },
                file: {
                  unit: { one: "baitas", few: "baitai", many: "baitų" },
                  verb: {
                    smaller: {
                      inclusive: "turi būti ne didesnis kaip",
                      notInclusive: "turi būti mažesnis kaip",
                    },
                    bigger: {
                      inclusive: "turi būti ne mažesnis kaip",
                      notInclusive: "turi būti didesnis kaip",
                    },
                  },
                },
                array: {
                  unit: { one: "elementą", few: "elementus", many: "elementų" },
                  verb: {
                    smaller: {
                      inclusive: "turi turėti ne daugiau kaip",
                      notInclusive: "turi turėti mažiau kaip",
                    },
                    bigger: {
                      inclusive: "turi turėti ne mažiau kaip",
                      notInclusive: "turi turėti daugiau kaip",
                    },
                  },
                },
                set: {
                  unit: { one: "elementą", few: "elementus", many: "elementų" },
                  verb: {
                    smaller: {
                      inclusive: "turi turėti ne daugiau kaip",
                      notInclusive: "turi turėti mažiau kaip",
                    },
                    bigger: {
                      inclusive: "turi turėti ne mažiau kaip",
                      notInclusive: "turi turėti daugiau kaip",
                    },
                  },
                },
              };
              function t(t, n, i, r) {
                let a = e[t] ?? null;
                return null === a
                  ? a
                  : {
                      unit: a.unit[n],
                      verb: a.verb[r][i ? "inclusive" : "notInclusive"],
                    };
              }
              let n = {
                  regex: "įvestis",
                  email: "el. pašto adresas",
                  url: "URL",
                  emoji: "jaustukas",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO data ir laikas",
                  date: "ISO data",
                  time: "ISO laikas",
                  duration: "ISO trukmė",
                  ipv4: "IPv4 adresas",
                  ipv6: "IPv6 adresas",
                  mac: "MAC adresas",
                  cidrv4: "IPv4 tinklo prefiksas (CIDR)",
                  cidrv6: "IPv6 tinklo prefiksas (CIDR)",
                  base64: "base64 užkoduota eilutė",
                  base64url: "base64url užkoduota eilutė",
                  json_string: "JSON eilutė",
                  e164: "E.164 numeris",
                  credit_card: "kredito kortelės numeris",
                  currency_code: "valiutos kodas",
                  iban: "IBAN",
                  jwt: "JWT",
                  template_literal: "įvestis",
                },
                i = {
                  nan: "NaN",
                  number: "skaičius",
                  bigint: "sveikasis skaičius",
                  string: "eilutė",
                  boolean: "loginė reikšmė",
                  undefined: "neapibrėžta reikšmė",
                  function: "funkcija",
                  symbol: "simbolis",
                  array: "masyvas",
                  object: "objektas",
                  null: "nulinė reikšmė",
                };
              return (e) => {
                switch (e.code) {
                  case "invalid_type": {
                    let t = i[e.expected] ?? e.expected,
                      n = eU(e.input),
                      r = i[n] ?? n;
                    if (/^[A-Z]/.test(e.expected))
                      return `Gautas tipas ${r}, o tikėtasi - instanceof ${e.expected}`;
                    return `Gautas tipas ${r}, o tikėtasi - ${t}`;
                  }
                  case "invalid_value":
                    if (1 === e.values.length)
                      return `Privalo būti ${eu(e.values[0])}`;
                    return `Privalo būti vienas iš ${S(
                      e.values,
                      "|"
                    )} pasirinkimų`;
                  case "too_big": {
                    let n = i[e.origin] ?? e.origin,
                      r = t(
                        e.origin,
                        ag(Number(e.maximum)),
                        e.inclusive ?? !1,
                        "smaller"
                      );
                    if (r?.verb)
                      return `${av(n ?? e.origin ?? "reikšmė")} ${
                        r.verb
                      } ${e.maximum.toString()} ${r.unit ?? "elementų"}`;
                    let a = e.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
                    return `${av(
                      n ?? e.origin ?? "reikšmė"
                    )} turi būti ${a} ${e.maximum.toString()} ${r?.unit}`;
                  }
                  case "too_small": {
                    let n = i[e.origin] ?? e.origin,
                      r = t(
                        e.origin,
                        ag(Number(e.minimum)),
                        e.inclusive ?? !1,
                        "bigger"
                      );
                    if (r?.verb)
                      return `${av(n ?? e.origin ?? "reikšmė")} ${
                        r.verb
                      } ${e.minimum.toString()} ${r.unit ?? "elementų"}`;
                    let a = e.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
                    return `${av(
                      n ?? e.origin ?? "reikšmė"
                    )} turi būti ${a} ${e.minimum.toString()} ${r?.unit}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === e.format)
                      return `Eilutė privalo prasidėti "${e.prefix}"`;
                    if ("ends_with" === e.format)
                      return `Eilutė privalo pasibaigti "${e.suffix}"`;
                    if ("includes" === e.format)
                      return `Eilutė privalo įtraukti "${e.includes}"`;
                    if ("regex" === e.format)
                      return `Eilutė privalo atitikti ${e.pattern}`;
                    return `Neteisingas ${n[e.format] ?? e.format}`;
                  case "not_multiple_of":
                    return `Skaičius privalo būti ${e.divisor} kartotinis.`;
                  case "unrecognized_keys":
                    return `Neatpažint${e.keys.length > 1 ? "i" : "as"} rakt${
                      e.keys.length > 1 ? "ai" : "as"
                    }: ${S(e.keys, ", ")}`;
                  case "invalid_key":
                    return "Rastas klaidingas raktas";
                  case "invalid_union":
                  default:
                    return "Klaidinga įvestis";
                  case "invalid_element": {
                    let t = i[e.origin] ?? e.origin;
                    return `${av(
                      t ?? e.origin ?? "reikšmė"
                    )} turi klaidingą įvestį`;
                  }
                }
              };
            })(),
          };
        },
        "mk",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "знаци", verb: "да имаат" },
                file: { unit: "бајти", verb: "да имаат" },
                array: { unit: "ставки", verb: "да имаат" },
                set: { unit: "ставки", verb: "да имаат" },
                map: { unit: "ставки", verb: "да имаат" },
              }),
              (t = {
                regex: "внес",
                email: "адреса на е-пошта",
                url: "URL",
                emoji: "емоџи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO датум и време",
                date: "ISO датум",
                time: "ISO време",
                duration: "ISO времетраење",
                ipv4: "IPv4 адреса",
                ipv6: "IPv6 адреса",
                mac: "MAC адреса",
                cidrv4: "IPv4 опсег",
                cidrv6: "IPv6 опсег",
                base64: "base64-енкодирана низа",
                base64url: "base64url-енкодирана низа",
                json_string: "JSON низа",
                e164: "E.164 број",
                credit_card: "број на кредитна картичка",
                currency_code: "код на валута",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "внес",
              }),
              (n = { nan: "NaN", number: "број", array: "низа" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Грешен внес: се очекува instanceof ${i.expected}, примено ${r}`;
                    return `Грешен внес: се очекува ${e}, примено ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Invalid input: expected ${eu(i.values[0])}`;
                    return `Грешана опција: се очекува една ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Премногу голем: се очекува ${
                        i.origin ?? "вредноста"
                      } да има ${t}${i.maximum.toString()} ${
                        n.unit ?? "елементи"
                      }`;
                    return `Премногу голем: се очекува ${
                      i.origin ?? "вредноста"
                    } да биде ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Премногу мал: се очекува ${
                        i.origin
                      } да има ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Премногу мал: се очекува ${
                      i.origin
                    } да биде ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Неважечка низа: мора да започнува со "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Неважечка низа: мора да завршува со "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Неважечка низа: мора да вклучува "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Неважечка низа: мора да одгоара на патернот ${i.pattern}`;
                    return `Invalid ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Грешен број: мора да биде делив со ${i.divisor}`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1
                        ? "Непрепознаени клучеви"
                        : "Непрепознаен клуч"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Грешен клуч во ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Грешен внес";
                  case "invalid_element":
                    return `Грешна вредност во ${i.origin}`;
                }
              }),
          };
        },
        "ms",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "aksara", verb: "mempunyai" },
                file: { unit: "bait", verb: "mempunyai" },
                array: { unit: "elemen", verb: "mempunyai" },
                set: { unit: "elemen", verb: "mempunyai" },
                map: { unit: "elemen", verb: "mempunyai" },
              }),
              (t = {
                regex: "input",
                email: "alamat e-mel",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "tarikh masa ISO",
                date: "tarikh ISO",
                time: "masa ISO",
                duration: "tempoh ISO",
                ipv4: "alamat IPv4",
                ipv6: "alamat IPv6",
                mac: "alamat MAC",
                cidrv4: "julat IPv4",
                cidrv6: "julat IPv6",
                base64: "string dikodkan base64",
                base64url: "string dikodkan base64url",
                json_string: "string JSON",
                e164: "nombor E.164",
                credit_card: "nombor kad kredit",
                currency_code: "kod mata wang",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN", number: "nombor" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Input tidak sah: dijangka instanceof ${i.expected}, diterima ${r}`;
                    return `Input tidak sah: dijangka ${e}, diterima ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Input tidak sah: dijangka ${eu(i.values[0])}`;
                    return `Pilihan tidak sah: dijangka salah satu daripada ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Terlalu besar: dijangka ${i.origin ?? "nilai"} ${
                        n.verb
                      } ${t}${i.maximum.toString()} ${n.unit ?? "elemen"}`;
                    return `Terlalu besar: dijangka ${
                      i.origin ?? "nilai"
                    } adalah ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Terlalu kecil: dijangka ${i.origin} ${
                        n.verb
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Terlalu kecil: dijangka ${
                      i.origin
                    } adalah ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `String tidak sah: mesti bermula dengan "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `String tidak sah: mesti berakhir dengan "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `String tidak sah: mesti mengandungi "${i.includes}"`;
                    if ("regex" === i.format)
                      return `String tidak sah: mesti sepadan dengan corak ${i.pattern}`;
                    return `${t[i.format] ?? i.format} tidak sah`;
                  case "not_multiple_of":
                    return `Nombor tidak sah: perlu gandaan ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Kunci tidak dikenali: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Kunci tidak sah dalam ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Input tidak sah";
                  case "invalid_element":
                    return `Nilai tidak sah dalam ${i.origin}`;
                }
              }),
          };
        },
        "ne",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "अक्षर", verb: "हुनुपर्छ" },
                file: { unit: "बाइट", verb: "हुनुपर्छ" },
                array: { unit: "तत्व", verb: "हुनुपर्छ" },
                set: { unit: "तत्व", verb: "हुनुपर्छ" },
                map: { unit: "प्रविष्टि", verb: "हुनुपर्छ" },
              }),
              (t = {
                regex: "इनपुट",
                email: "इमेल ठेगाना",
                url: "URL",
                emoji: "इमोजी",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO मिति र समय",
                date: "ISO मिति",
                time: "ISO समय",
                duration: "ISO अवधि",
                ipv4: "IPv4 ठेगाना",
                ipv6: "IPv6 ठेगाना",
                mac: "MAC ठेगाना",
                cidrv4: "IPv4 दायरा",
                cidrv6: "IPv6 दायरा",
                base64: "base64-इन्कोड गरिएको स्ट्रिङ",
                base64url: "base64url-इन्कोड गरिएको स्ट्रिङ",
                json_string: "JSON स्ट्रिङ",
                e164: "E.164 नम्बर",
                credit_card: "क्रेडिट कार्ड नम्बर",
                currency_code: "मुद्रा कोड",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "इनपुट",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `अमान्य इनपुट: अपेक्षित ${e}, प्राप्त ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `अमान्य इनपुट: अपेक्षित ${eu(i.values[0])}`;
                    return `अमान्य विकल्प: अपेक्षित मानहरू मध्ये एक ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `धेरै ठूलो: ${
                        i.origin ?? "मान"
                      } मा ${t}${i.maximum.toString()} ${n.unit} ${n.verb}`;
                    return `धेरै ठूलो: ${
                      i.origin ?? "मान"
                    } ${t}${i.maximum.toString()} हुनुपर्छ`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `धेरै सानो: ${
                        i.origin
                      } मा ${t}${i.minimum.toString()} ${n.unit} ${n.verb}`;
                    return `धेरै सानो: ${
                      i.origin
                    } ${t}${i.minimum.toString()} हुनुपर्छ`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `अमान्य स्ट्रिङ: "${i.prefix}" बाट सुरु हुनुपर्छ`;
                    if ("ends_with" === i.format)
                      return `अमान्य स्ट्रिङ: "${i.suffix}" मा समाप्त हुनुपर्छ`;
                    if ("includes" === i.format)
                      return `अमान्य स्ट्रिङ: "${i.includes}" समावेश हुनुपर्छ`;
                    if ("regex" === i.format)
                      return `अमान्य स्ट्रिङ: ढाँचा ${i.pattern} सँग मेल खानुपर्छ`;
                    return `अमान्य ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `अमान्य संख्या: ${i.divisor} को गुणज हुनुपर्छ`;
                  case "unrecognized_keys":
                    return `अपरिचित कुञ्जी${
                      i.keys.length > 1 ? "हरू" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `अमान्य कुञ्जी: ${i.origin} मा`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e}`;
                    }
                    return "अमान्य इनपुट";
                  case "invalid_element":
                    return `अमान्य मान: ${i.origin} मा`;
                  default:
                    return "अमान्य इनपुट";
                }
              }),
          };
        },
        "nl",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "tekens", verb: "heeft" },
                file: { unit: "bytes", verb: "heeft" },
                array: { unit: "elementen", verb: "heeft" },
                set: { unit: "elementen", verb: "heeft" },
                map: { unit: "elementen", verb: "heeft" },
              }),
              (t = {
                regex: "invoer",
                email: "emailadres",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum en tijd",
                date: "ISO datum",
                time: "ISO tijd",
                duration: "ISO duur",
                ipv4: "IPv4-adres",
                ipv6: "IPv6-adres",
                mac: "MAC-adres",
                cidrv4: "IPv4-bereik",
                cidrv6: "IPv6-bereik",
                base64: "base64-gecodeerde tekst",
                base64url: "base64 URL-gecodeerde tekst",
                json_string: "JSON string",
                e164: "E.164-nummer",
                credit_card: "creditcardnummer",
                currency_code: "valutacode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "invoer",
              }),
              (n = { nan: "NaN", number: "getal" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ongeldige invoer: verwacht instanceof ${i.expected}, ontving ${r}`;
                    return `Ongeldige invoer: verwacht ${e}, ontving ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ongeldige invoer: verwacht ${eu(i.values[0])}`;
                    return `Ongeldige optie: verwacht \xe9\xe9n van ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null,
                      r =
                        "date" === i.origin
                          ? "laat"
                          : "string" === i.origin
                          ? "lang"
                          : "groot";
                    if (n)
                      return `Te ${r}: verwacht dat ${
                        i.origin ?? "waarde"
                      } ${t}${i.maximum.toString()} ${n.unit ?? "elementen"} ${
                        n.verb
                      }`;
                    return `Te ${r}: verwacht dat ${
                      i.origin ?? "waarde"
                    } ${t}${i.maximum.toString()} is`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null,
                      r =
                        "date" === i.origin
                          ? "vroeg"
                          : "string" === i.origin
                          ? "kort"
                          : "klein";
                    if (n)
                      return `Te ${r}: verwacht dat ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit} ${n.verb}`;
                    return `Te ${r}: verwacht dat ${
                      i.origin
                    } ${t}${i.minimum.toString()} is`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ongeldige tekst: moet met "${i.prefix}" beginnen`;
                    if ("ends_with" === i.format)
                      return `Ongeldige tekst: moet op "${i.suffix}" eindigen`;
                    if ("includes" === i.format)
                      return `Ongeldige tekst: moet "${i.includes}" bevatten`;
                    if ("regex" === i.format)
                      return `Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}`;
                    return `Ongeldig: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ongeldig getal: moet een veelvoud van ${i.divisor} zijn`;
                  case "unrecognized_keys":
                    return `Onbekende key${i.keys.length > 1 ? "s" : ""}: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `Ongeldige key in ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Ongeldige invoer";
                  case "invalid_element":
                    return `Ongeldige waarde in ${i.origin}`;
                }
              }),
          };
        },
        "nn",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "teikn", verb: "å ha" },
                file: { unit: "bytes", verb: "å ha" },
                array: { unit: "element", verb: "å innehalde" },
                set: { unit: "element", verb: "å innehalde" },
                map: { unit: "element", verb: "å innehalde" },
              }),
              (t = {
                regex: "input",
                email: "e-postadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslett",
                date: "ISO-dato",
                time: "ISO-klokkeslett",
                duration: "ISO-varigheit",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spekter",
                cidrv6: "IPv6-spekter",
                base64: "base64-enkoda streng",
                base64url: "base64url-enkoda streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kredittkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN", number: "tal", array: "liste" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ugyldig input: forventa instanceof ${i.expected}, fekk ${r}`;
                    return `Ugyldig input: forventa ${e}, fekk ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ugyldig verdi: forventa ${eu(i.values[0])}`;
                    return `Ugyldig val: forventa eitt av ${S(i.values, "|")}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `For stor(t): forventa ${
                        i.origin ?? "value"
                      } til \xe5 ha ${t}${i.maximum.toString()} ${
                        n.unit ?? "element"
                      }`;
                    return `For stor(t): forventa ${
                      i.origin ?? "value"
                    } til \xe5 ha ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `For lite(n): forventa ${
                        i.origin
                      } til \xe5 ha ${t}${i.minimum.toString()} ${n.unit}`;
                    return `For lite(n): forventa ${
                      i.origin
                    } til \xe5 ha ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ugyldig streng: m\xe5 starte med "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Ugyldig streng: m\xe5 slutte med "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Ugyldig streng: m\xe5 innehalde "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${i.pattern}`;
                    return `Ugyldig ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ugyldig tal: m\xe5 vere eit multiplum av ${i.divisor}`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1 ? "Ukjende nøklar" : "Ukjend nøkkel"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Ugyldig n\xf8kkel i ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Ugyldig input";
                  case "invalid_element":
                    return `Ugyldig verdi i ${i.origin}`;
                }
              }),
          };
        },
        "no",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "tegn", verb: "å ha" },
                file: { unit: "bytes", verb: "å ha" },
                array: { unit: "elementer", verb: "å inneholde" },
                set: { unit: "elementer", verb: "å inneholde" },
                map: { unit: "elementer", verb: "å inneholde" },
              }),
              (t = {
                regex: "input",
                email: "e-postadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslett",
                date: "ISO-dato",
                time: "ISO-klokkeslett",
                duration: "ISO-varighet",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spekter",
                cidrv6: "IPv6-spekter",
                base64: "base64-enkodet streng",
                base64url: "base64url-enkodet streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kredittkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN", number: "tall", array: "liste" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ugyldig input: forventet instanceof ${i.expected}, fikk ${r}`;
                    return `Ugyldig input: forventet ${e}, fikk ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ugyldig verdi: forventet ${eu(i.values[0])}`;
                    return `Ugyldig valg: forventet en av ${S(i.values, "|")}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `For stor(t): forventet ${
                        i.origin ?? "value"
                      } til \xe5 ha ${t}${i.maximum.toString()} ${
                        n.unit ?? "elementer"
                      }`;
                    return `For stor(t): forventet ${
                      i.origin ?? "value"
                    } til \xe5 ha ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `For lite(n): forventet ${
                        i.origin
                      } til \xe5 ha ${t}${i.minimum.toString()} ${n.unit}`;
                    return `For lite(n): forventet ${
                      i.origin
                    } til \xe5 ha ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ugyldig streng: m\xe5 starte med "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Ugyldig streng: m\xe5 ende med "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Ugyldig streng: m\xe5 inneholde "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${i.pattern}`;
                    return `Ugyldig ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${i.divisor}`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Ugyldig n\xf8kkel i ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Ugyldig input";
                  case "invalid_element":
                    return `Ugyldig verdi i ${i.origin}`;
                }
              }),
          };
        },
        "ota",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "harf", verb: "olmalıdır" },
                file: { unit: "bayt", verb: "olmalıdır" },
                array: { unit: "unsur", verb: "olmalıdır" },
                set: { unit: "unsur", verb: "olmalıdır" },
                map: { unit: "unsur", verb: "olmalıdır" },
              }),
              (t = {
                regex: "giren",
                email: "epostagâh",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO hengâmı",
                date: "ISO tarihi",
                time: "ISO zamanı",
                duration: "ISO müddeti",
                ipv4: "IPv4 nişânı",
                ipv6: "IPv6 nişânı",
                mac: "MAC nişânı",
                cidrv4: "IPv4 menzili",
                cidrv6: "IPv6 menzili",
                base64: "base64-şifreli metin",
                base64url: "base64url-şifreli metin",
                json_string: "JSON metin",
                e164: "E.164 sayısı",
                credit_card: "i'tibâr kartı numarası",
                currency_code: "para birimi kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "giren",
              }),
              (n = {
                nan: "NaN",
                number: "numara",
                array: "saf",
                null: "gayb",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `F\xe2sit giren: umulan instanceof ${i.expected}, alınan ${r}`;
                    return `F\xe2sit giren: umulan ${e}, alınan ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `F\xe2sit giren: umulan ${eu(i.values[0])}`;
                    return `F\xe2sit tercih: m\xfbteberler ${S(i.values, "|")}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Fazla b\xfcy\xfck: ${
                        i.origin ?? "value"
                      }, ${t}${i.maximum.toString()} ${
                        n.unit ?? "elements"
                      } sahip olmalıydı.`;
                    return `Fazla b\xfcy\xfck: ${
                      i.origin ?? "value"
                    }, ${t}${i.maximum.toString()} olmalıydı.`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Fazla k\xfc\xe7\xfck: ${
                        i.origin
                      }, ${t}${i.minimum.toString()} ${
                        n.unit
                      } sahip olmalıydı.`;
                    return `Fazla k\xfc\xe7\xfck: ${
                      i.origin
                    }, ${t}${i.minimum.toString()} olmalıydı.`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `F\xe2sit metin: "${i.prefix}" ile başlamalı.`;
                    if ("ends_with" === i.format)
                      return `F\xe2sit metin: "${i.suffix}" ile bitmeli.`;
                    if ("includes" === i.format)
                      return `F\xe2sit metin: "${i.includes}" ihtiv\xe2 etmeli.`;
                    if ("regex" === i.format)
                      return `F\xe2sit metin: ${i.pattern} nakşına uymalı.`;
                    return `F\xe2sit ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `F\xe2sit sayı: ${i.divisor} katı olmalıydı.`;
                  case "unrecognized_keys":
                    return `Tanınmayan anahtar ${
                      i.keys.length > 1 ? "s" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} i\xe7in tanınmayan anahtar var.`;
                  case "invalid_union":
                    return "Giren tanınamadı.";
                  case "invalid_element":
                    return `${i.origin} i\xe7in tanınmayan kıymet var.`;
                  default:
                    return "Kıymet tanınamadı.";
                }
              }),
          };
        },
        "pl",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "znaków", verb: "mieć" },
                file: { unit: "bajtów", verb: "mieć" },
                array: { unit: "elementów", verb: "mieć" },
                set: { unit: "elementów", verb: "mieć" },
                map: { unit: "elementów", verb: "mieć" },
              }),
              (t = {
                regex: "wyrażenie",
                email: "adres email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data i godzina w formacie ISO",
                date: "data w formacie ISO",
                time: "godzina w formacie ISO",
                duration: "czas trwania ISO",
                ipv4: "adres IPv4",
                ipv6: "adres IPv6",
                mac: "adres MAC",
                cidrv4: "zakres IPv4",
                cidrv6: "zakres IPv6",
                base64: "ciąg znaków zakodowany w formacie base64",
                base64url: "ciąg znaków zakodowany w formacie base64url",
                json_string: "ciąg znaków w formacie JSON",
                e164: "liczba E.164",
                credit_card: "numer karty kredytowej",
                currency_code: "kod waluty",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "wejście",
              }),
              (n = { nan: "NaN", number: "liczba", array: "tablica" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${i.expected}, otrzymano ${r}`;
                    return `Nieprawidłowe dane wejściowe: oczekiwano ${e}, otrzymano ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Nieprawidłowe dane wejściowe: oczekiwano ${eu(
                        i.values[0]
                      )}`;
                    return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Za duża wartość: oczekiwano, że ${
                        i.origin ?? "wartość"
                      } będzie mieć ${t}${i.maximum.toString()} ${
                        n.unit ?? "elementów"
                      }`;
                    return `Zbyt duż(y/a/e): oczekiwano, że ${
                      i.origin ?? "wartość"
                    } będzie wynosić ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Za mała wartość: oczekiwano, że ${
                        i.origin ?? "wartość"
                      } będzie mieć ${t}${i.minimum.toString()} ${
                        n.unit ?? "elementów"
                      }`;
                    return `Zbyt mał(y/a/e): oczekiwano, że ${
                      i.origin ?? "wartość"
                    } będzie wynosić ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${i.pattern}`;
                    return `Nieprawidłow(y/a/e) ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Nieprawidłowa liczba: musi być wielokrotnością ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Nierozpoznane klucze${
                      i.keys.length > 1 ? "s" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Nieprawidłowy klucz w ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Nieprawidłowe dane wejściowe";
                  case "invalid_element":
                    return `Nieprawidłowa wartość w ${i.origin}`;
                }
              }),
          };
        },
        "ps",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "توکي", verb: "ولري" },
                file: { unit: "بایټس", verb: "ولري" },
                array: { unit: "توکي", verb: "ولري" },
                set: { unit: "توکي", verb: "ولري" },
                map: { unit: "توکي", verb: "ولري" },
              }),
              (t = {
                regex: "ورودي",
                email: "بریښنالیک",
                url: "یو آر ال",
                emoji: "ایموجي",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "نیټه او وخت",
                date: "نېټه",
                time: "وخت",
                duration: "موده",
                ipv4: "د IPv4 پته",
                ipv6: "د IPv6 پته",
                mac: "د MAC پته",
                cidrv4: "د IPv4 ساحه",
                cidrv6: "د IPv6 ساحه",
                base64: "base64-encoded متن",
                base64url: "base64url-encoded متن",
                json_string: "JSON متن",
                e164: "د E.164 شمېره",
                credit_card: "د کریډیټ کارت شمیره",
                currency_code: "د اسعارو کوډ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ورودي",
              }),
              (n = { nan: "NaN", number: "عدد", array: "ارې" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `ناسم ورودي: باید instanceof ${i.expected} وای, مګر ${r} ترلاسه شو`;
                    return `ناسم ورودي: باید ${e} وای, مګر ${r} ترلاسه شو`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `ناسم ورودي: باید ${eu(i.values[0])} وای`;
                    return `ناسم انتخاب: باید یو له ${S(
                      i.values,
                      "|"
                    )} څخه وای`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ډیر لوی: ${
                        i.origin ?? "ارزښت"
                      } باید ${t}${i.maximum.toString()} ${
                        n.unit ?? "عنصرونه"
                      } ولري`;
                    return `ډیر لوی: ${
                      i.origin ?? "ارزښت"
                    } باید ${t}${i.maximum.toString()} وي`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `ډیر کوچنی: ${
                        i.origin
                      } باید ${t}${i.minimum.toString()} ${n.unit} ولري`;
                    return `ډیر کوچنی: ${
                      i.origin
                    } باید ${t}${i.minimum.toString()} وي`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `ناسم متن: باید د "${i.prefix}" سره پیل شي`;
                    if ("ends_with" === i.format)
                      return `ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي`;
                    if ("includes" === i.format)
                      return `ناسم متن: باید "${i.includes}" ولري`;
                    if ("regex" === i.format)
                      return `ناسم متن: باید د ${i.pattern} سره مطابقت ولري`;
                    return `${t[i.format] ?? i.format} ناسم دی`;
                  case "not_multiple_of":
                    return `ناسم عدد: باید د ${i.divisor} مضرب وي`;
                  case "unrecognized_keys":
                    return `ناسم ${i.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `ناسم کلیډ په ${i.origin} کې`;
                  case "invalid_union":
                  default:
                    return "ناسمه ورودي";
                  case "invalid_element":
                    return `ناسم عنصر په ${i.origin} کې`;
                }
              }),
          };
        },
        "pt",
        0,
        function () {
          return {
            localeError: (() => {
              let e = {
                  string: { unit: "caracteres" },
                  file: { unit: "bytes" },
                  array: { unit: "elementos" },
                  set: { unit: "elementos" },
                  map: { unit: "entradas" },
                },
                t = {
                  regex: "a entrada",
                  email: "o endereço de e-mail",
                  url: "o URL",
                  emoji: "o emoji",
                  uuid: "o UUID",
                  uuidv4: "o UUIDv4",
                  uuidv6: "o UUIDv6",
                  nanoid: "o nanoid",
                  guid: "o GUID",
                  cuid: "o cuid",
                  cuid2: "o cuid2",
                  ulid: "o ULID",
                  xid: "o XID",
                  ksuid: "o KSUID",
                  datetime: "a data e hora ISO",
                  date: "a data ISO",
                  time: "a hora ISO",
                  duration: "a duração ISO",
                  ipv4: "o endereço IPv4",
                  ipv6: "o endereço IPv6",
                  mac: "o endereço MAC",
                  cidrv4: "o intervalo de endereços IPv4",
                  cidrv6: "o intervalo de endereços IPv6",
                  base64: "o texto codificado em base64",
                  base64url: "o texto codificado em base64url",
                  json_string: "o texto JSON",
                  e164: "o número E.164",
                  credit_card: "o número de cartão de crédito",
                  currency_code: "o código de moeda",
                  iban: "o IBAN",
                  jwt: "o JWT",
                  template_literal: "a entrada",
                },
                n = { definite: "o", indefinite: "um" },
                i = { definite: "a", indefinite: "uma" },
                r = {
                  string: { name: "texto", articles: n },
                  number: { name: "número", articles: n },
                  int: { name: "número inteiro", articles: n },
                  boolean: { name: "valor booleano", articles: n },
                  bigint: { name: "número bigint", articles: n },
                  symbol: { name: "símbolo", articles: n },
                  undefined: { name: 'valor "undefined"', articles: n },
                  null: { name: 'valor "nulo"', articles: n },
                  never: { name: 'valor "never"', articles: n },
                  void: { name: 'valor "void"', articles: n },
                  date: { name: "data", articles: i },
                  array: { name: "vetor", articles: n },
                  object: { name: "objeto", articles: n },
                  tuple: { name: "tuplo", articles: n },
                  record: { name: "registo", articles: n },
                  map: { name: "mapa", articles: n },
                  set: { name: "conjunto", articles: n },
                  file: { name: "ficheiro", articles: n },
                  nonoptional: { name: "valor não opcional", articles: n },
                  nan: { name: 'valor "NaN"', articles: n },
                  function: { name: "função", articles: i },
                };
              function a(e, t) {
                let i = r[e] ?? { name: `valor "${e}"`, articles: n };
                return `${i.articles[t]} ${i.name}`;
              }
              return (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let e = a(n.expected, "indefinite"),
                      t = a(eU(n.input), "indefinite");
                    return `Entrada inv\xe1lida: esperava ${e}, recebeu ${t}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length)
                      return `Entrada inv\xe1lida: esperava ${eu(n.values[0])}`;
                    return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${S(
                      n.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = n.inclusive ? "<=" : "<",
                      i = e[n.origin] ?? null;
                    if (i)
                      return `Demasiado grande: esperava que ${a(
                        n.origin,
                        "definite"
                      )} tivesse ${t} ${n.maximum.toString()} ${
                        i.unit ?? "elementos"
                      }`;
                    return `Demasiado grande: esperava que ${a(
                      n.origin,
                      "definite"
                    )} fosse ${t} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = n.inclusive ? ">=" : ">",
                      i = e[n.origin] ?? null;
                    if (i)
                      return `Demasiado pequeno: esperava que ${a(
                        n.origin,
                        "definite"
                      )} tivesse ${t} ${n.minimum.toString()} ${
                        i.unit ?? "elementos"
                      }`;
                    return `Demasiado pequeno: esperava que ${a(
                      n.origin,
                      "definite"
                    )} fosse ${t} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format)
                      return `Texto inv\xe1lido: deve come\xe7ar por "${n.prefix}"`;
                    if ("ends_with" === n.format)
                      return `Texto inv\xe1lido: deve terminar em "${n.suffix}"`;
                    if ("includes" === n.format)
                      return `Texto inv\xe1lido: deve incluir "${n.includes}"`;
                    if ("regex" === n.format)
                      return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${n.pattern}`;
                    return `Formato d${t[n.format] ?? n.format} inv\xe1lido`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${n.divisor}`;
                  case "unrecognized_keys": {
                    let e = n.keys.length > 1 ? "s" : "";
                    return `Chave${e} inv\xe1lida${e}: ${S(n.keys, ", ")}`;
                  }
                  case "invalid_key":
                  case "invalid_element":
                    return `Entrada inv\xe1lida n${a(n.origin, "definite")}`;
                  case "invalid_union":
                    if (
                      n.options &&
                      Array.isArray(n.options) &&
                      n.options.length > 0
                    ) {
                      let e = n.options.map((e) => `'${e}'`).join(" | ");
                      return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${e}`;
                    }
                    return "Entrada inválida";
                  default:
                    return "Entrada inválida";
                }
              };
            })(),
          };
        },
        "ptBR",
        0,
        function () {
          return {
            localeError: (() => {
              let e = {
                  string: { unit: "caracteres" },
                  file: { unit: "bytes" },
                  array: { unit: "elementos" },
                  set: { unit: "elementos" },
                  map: { unit: "entradas" },
                },
                t = {
                  regex: "a entrada",
                  email: "o endereço de e-mail",
                  url: "o URL",
                  emoji: "o emoji",
                  uuid: "o UUID",
                  uuidv4: "o UUIDv4",
                  uuidv6: "o UUIDv6",
                  nanoid: "o nanoid",
                  guid: "o GUID",
                  cuid: "o cuid",
                  cuid2: "o cuid2",
                  ulid: "o ULID",
                  xid: "o XID",
                  ksuid: "o KSUID",
                  datetime: "a data e hora ISO",
                  date: "a data ISO",
                  time: "a hora ISO",
                  duration: "a duração ISO",
                  ipv4: "o endereço IPv4",
                  ipv6: "o endereço IPv6",
                  mac: "o endereço MAC",
                  cidrv4: "a faixa de endereços IPv4",
                  cidrv6: "a faixa de endereços IPv6",
                  base64: "o texto codificado em base64",
                  base64url: "o texto codificado em base64url",
                  json_string: "o texto JSON",
                  e164: "o número E.164",
                  credit_card: "o número de cartão de crédito",
                  currency_code: "o código de moeda",
                  iban: "o IBAN",
                  jwt: "o JWT",
                  template_literal: "a entrada",
                },
                n = { definite: "o", indefinite: "um" },
                i = { definite: "a", indefinite: "uma" },
                r = {
                  string: { name: "texto", articles: n },
                  number: { name: "número", articles: n },
                  int: { name: "número inteiro", articles: n },
                  boolean: { name: "valor booleano", articles: n },
                  bigint: { name: "número bigint", articles: n },
                  symbol: { name: "símbolo", articles: n },
                  undefined: { name: 'valor "undefined"', articles: n },
                  null: { name: 'valor "nulo"', articles: n },
                  never: { name: 'valor "never"', articles: n },
                  void: { name: 'valor "void"', articles: n },
                  date: { name: "data", articles: i },
                  array: { name: "vetor", articles: n },
                  object: { name: "objeto", articles: n },
                  tuple: { name: "tupla", articles: i },
                  record: { name: "registro", articles: n },
                  map: { name: "mapa", articles: n },
                  set: { name: "conjunto", articles: n },
                  file: { name: "arquivo", articles: n },
                  nonoptional: { name: "valor não opcional", articles: n },
                  nan: { name: 'valor "NaN"', articles: n },
                  function: { name: "função", articles: i },
                };
              function a(e, t) {
                let i = r[e] ?? { name: `valor "${e}"`, articles: n };
                return `${i.articles[t]} ${i.name}`;
              }
              return (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let e = a(n.expected, "indefinite"),
                      t = a(eU(n.input), "indefinite");
                    return `Entrada inv\xe1lida: esperava ${e}, recebeu ${t}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length)
                      return `Entrada inv\xe1lida: esperava ${eu(n.values[0])}`;
                    return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${S(
                      n.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = n.inclusive ? "<=" : "<",
                      i = e[n.origin] ?? null;
                    if (i)
                      return `Grande demais: esperava que ${a(
                        n.origin,
                        "definite"
                      )} tivesse ${t} ${n.maximum.toString()} ${
                        i.unit ?? "elementos"
                      }`;
                    return `Grande demais: esperava que ${a(
                      n.origin,
                      "definite"
                    )} fosse ${t} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = n.inclusive ? ">=" : ">",
                      i = e[n.origin] ?? null;
                    if (i)
                      return `Pequeno demais: esperava que ${a(
                        n.origin,
                        "definite"
                      )} tivesse ${t} ${n.minimum.toString()} ${
                        i.unit ?? "elementos"
                      }`;
                    return `Pequeno demais: esperava que ${a(
                      n.origin,
                      "definite"
                    )} fosse ${t} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format)
                      return `Texto inv\xe1lido: deve come\xe7ar com "${n.prefix}"`;
                    if ("ends_with" === n.format)
                      return `Texto inv\xe1lido: deve terminar com "${n.suffix}"`;
                    if ("includes" === n.format)
                      return `Texto inv\xe1lido: deve incluir "${n.includes}"`;
                    if ("regex" === n.format)
                      return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${n.pattern}`;
                    return `Formato d${t[n.format] ?? n.format} inv\xe1lido`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${n.divisor}`;
                  case "unrecognized_keys": {
                    let e = n.keys.length > 1 ? "s" : "";
                    return `Chave${e} inv\xe1lida${e}: ${S(n.keys, ", ")}`;
                  }
                  case "invalid_key":
                  case "invalid_element":
                    return `Entrada inv\xe1lida n${a(n.origin, "definite")}`;
                  case "invalid_union":
                    if (
                      n.options &&
                      Array.isArray(n.options) &&
                      n.options.length > 0
                    ) {
                      let e = n.options.map((e) => `'${e}'`).join(" | ");
                      return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${e}`;
                    }
                    return "Entrada inválida";
                  default:
                    return "Entrada inválida";
                }
              };
            })(),
          };
        },
        "ro",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "caractere", verb: "să aibă" },
                file: { unit: "octeți", verb: "să aibă" },
                array: { unit: "elemente", verb: "să aibă" },
                set: { unit: "elemente", verb: "să aibă" },
                map: { unit: "intrări", verb: "să aibă" },
              }),
              (t = {
                regex: "intrare",
                email: "adresă de email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "dată și oră ISO",
                date: "dată ISO",
                time: "oră ISO",
                duration: "durată ISO",
                ipv4: "adresă IPv4",
                ipv6: "adresă IPv6",
                mac: "adresă MAC",
                cidrv4: "interval IPv4",
                cidrv6: "interval IPv6",
                base64: "șir codat base64",
                base64url: "șir codat base64url",
                json_string: "șir JSON",
                e164: "număr E.164",
                credit_card: "număr de card de credit",
                currency_code: "cod valutar",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "intrare",
              }),
              (n = {
                nan: "NaN",
                string: "șir",
                number: "număr",
                boolean: "boolean",
                function: "funcție",
                array: "matrice",
                object: "obiect",
                undefined: "nedefinit",
                symbol: "simbol",
                bigint: "număr mare",
                void: "void",
                never: "never",
                map: "hartă",
                set: "set",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `Intrare invalidă: așteptat ${e}, primit ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Intrare invalidă: așteptat ${eu(i.values[0])}`;
                    return `Opțiune invalidă: așteptat una dintre ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Prea mare: așteptat ca ${
                        i.origin ?? "valoarea"
                      } ${n.verb} ${t}${i.maximum.toString()} ${
                        n.unit ?? "elemente"
                      }`;
                    return `Prea mare: așteptat ca ${
                      i.origin ?? "valoarea"
                    } să fie ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Prea mic: așteptat ca ${i.origin} ${
                        n.verb
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Prea mic: așteptat ca ${
                      i.origin
                    } să fie ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Șir invalid: trebuie să \xeenceapă cu "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Șir invalid: trebuie să se termine cu "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Șir invalid: trebuie să includă "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Șir invalid: trebuie să se potrivească cu modelul ${i.pattern}`;
                    return `Format invalid: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Număr invalid: trebuie să fie multiplu de ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Chei nerecunoscute: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Cheie invalidă \xeen ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Intrare invalidă";
                  case "invalid_element":
                    return `Valoare invalidă \xeen ${i.origin}`;
                }
              }),
          };
        },
        "ru",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: {
                  unit: { one: "символ", few: "символа", many: "символов" },
                  verb: "иметь",
                },
                file: {
                  unit: { one: "байт", few: "байта", many: "байт" },
                  verb: "иметь",
                },
                array: {
                  unit: { one: "элемент", few: "элемента", many: "элементов" },
                  verb: "иметь",
                },
                set: {
                  unit: { one: "элемент", few: "элемента", many: "элементов" },
                  verb: "иметь",
                },
                map: {
                  unit: { one: "элемент", few: "элемента", many: "элементов" },
                  verb: "иметь",
                },
              }),
              (t = {
                regex: "ввод",
                email: "email адрес",
                url: "URL",
                emoji: "эмодзи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO дата и время",
                date: "ISO дата",
                time: "ISO время",
                duration: "ISO длительность",
                ipv4: "IPv4 адрес",
                ipv6: "IPv6 адрес",
                mac: "MAC адрес",
                cidrv4: "IPv4 диапазон",
                cidrv6: "IPv6 диапазон",
                base64: "строка в формате base64",
                base64url: "строка в формате base64url",
                json_string: "JSON строка",
                e164: "номер E.164",
                credit_card: "номер кредитной карты",
                currency_code: "код валюты",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ввод",
              }),
              (n = { nan: "NaN", number: "число", array: "массив" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Неверный ввод: ожидалось instanceof ${i.expected}, получено ${r}`;
                    return `Неверный ввод: ожидалось ${e}, получено ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Неверный ввод: ожидалось ${eu(i.values[0])}`;
                    return `Неверный вариант: ожидалось одно из ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n) {
                      let e = a$(
                        Number(i.maximum),
                        n.unit.one,
                        n.unit.few,
                        n.unit.many
                      );
                      return `Слишком большое значение: ожидалось, что ${
                        i.origin ?? "значение"
                      } будет иметь ${t}${i.maximum.toString()} ${e}`;
                    }
                    return `Слишком большое значение: ожидалось, что ${
                      i.origin ?? "значение"
                    } будет ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n) {
                      let e = a$(
                        Number(i.minimum),
                        n.unit.one,
                        n.unit.few,
                        n.unit.many
                      );
                      return `Слишком маленькое значение: ожидалось, что ${
                        i.origin
                      } будет иметь ${t}${i.minimum.toString()} ${e}`;
                    }
                    return `Слишком маленькое значение: ожидалось, что ${
                      i.origin
                    } будет ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Неверная строка: должна начинаться с "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Неверная строка: должна заканчиваться на "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Неверная строка: должна содержать "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Неверная строка: должна соответствовать шаблону ${i.pattern}`;
                    return `Неверный ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Неверное число: должно быть кратным ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Нераспознанн${
                      i.keys.length > 1 ? "ые" : "ый"
                    } ключ${i.keys.length > 1 ? "и" : ""}: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Неверный ключ в ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Неверные входные данные";
                  case "invalid_element":
                    return `Неверное значение в ${i.origin}`;
                }
              }),
          };
        },
        "sk",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "znakov", verb: "mať" },
                file: { unit: "bajtov", verb: "mať" },
                array: { unit: "prvkov", verb: "mať" },
                set: { unit: "prvkov", verb: "mať" },
                map: { unit: "položiek", verb: "mať" },
              }),
              (t = {
                regex: "regulárny výraz",
                email: "e-mailová adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "dátum a čas vo formáte ISO",
                date: "dátum vo formáte ISO",
                time: "čas vo formáte ISO",
                duration: "doba trvania ISO",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "rozsah IPv4",
                cidrv6: "rozsah IPv6",
                base64: "reťazec zakódovaný vo formáte base64",
                base64url: "reťazec zakódovaný vo formáte base64url",
                json_string: "reťazec vo formáte JSON",
                e164: "číslo E.164",
                credit_card: "číslo kreditnej karty",
                currency_code: "kód meny",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vstup",
              }),
              (n = {
                nan: "NaN",
                number: "číslo",
                string: "reťazec",
                function: "funkcia",
                array: "pole",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Neplatn\xfd vstup: očak\xe1van\xe9 instanceof ${i.expected}, obdržan\xe9 ${r}`;
                    return `Neplatn\xfd vstup: očak\xe1van\xe9 ${e}, obdržan\xe9 ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Neplatn\xfd vstup: očak\xe1van\xe9 ${eu(
                        i.values[0]
                      )}`;
                    return `Neplatn\xfd vstup: očak\xe1van\xe1 jedna z hodn\xf4t ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Hodnota je pr\xedliš veľk\xe1: ${
                        i.origin ?? "hodnota"
                      } mus\xed mať ${t}${i.maximum.toString()} ${
                        n.unit ?? "prvkov"
                      }`;
                    return `Hodnota je pr\xedliš veľk\xe1: ${
                      i.origin ?? "hodnota"
                    } mus\xed byť ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Hodnota je pr\xedliš mal\xe1: ${
                        i.origin ?? "hodnota"
                      } mus\xed mať ${t}${i.minimum.toString()} ${
                        n.unit ?? "prvkov"
                      }`;
                    return `Hodnota je pr\xedliš mal\xe1: ${
                      i.origin ?? "hodnota"
                    } mus\xed byť ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Neplatn\xfd reťazec: mus\xed zač\xednať na "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Neplatn\xfd reťazec: mus\xed končiť na "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Neplatn\xfd reťazec: mus\xed obsahovať "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Neplatn\xfd reťazec: mus\xed zodpovedať vzoru ${i.pattern}`;
                    return `Neplatn\xfd form\xe1t ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Neplatn\xe9 č\xedslo: mus\xed byť n\xe1sobkom ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Nezn\xe1me kl\xfače: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Neplatn\xfd kl\xfač v ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Neplatný vstup";
                  case "invalid_element":
                    return `Neplatn\xe1 hodnota v ${i.origin}`;
                }
              }),
          };
        },
        "sl",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "znakov", verb: "imeti" },
                file: { unit: "bajtov", verb: "imeti" },
                array: { unit: "elementov", verb: "imeti" },
                set: { unit: "elementov", verb: "imeti" },
                map: { unit: "elementov", verb: "imeti" },
              }),
              (t = {
                regex: "vnos",
                email: "e-poštni naslov",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum in čas",
                date: "ISO datum",
                time: "ISO čas",
                duration: "ISO trajanje",
                ipv4: "IPv4 naslov",
                ipv6: "IPv6 naslov",
                mac: "MAC naslov",
                cidrv4: "obseg IPv4",
                cidrv6: "obseg IPv6",
                base64: "base64 kodiran niz",
                base64url: "base64url kodiran niz",
                json_string: "JSON niz",
                e164: "E.164 številka",
                credit_card: "številka kreditne kartice",
                currency_code: "koda valute",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vnos",
              }),
              (n = { nan: "NaN", number: "število", array: "tabela" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Neveljaven vnos: pričakovano instanceof ${i.expected}, prejeto ${r}`;
                    return `Neveljaven vnos: pričakovano ${e}, prejeto ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Neveljaven vnos: pričakovano ${eu(i.values[0])}`;
                    return `Neveljavna možnost: pričakovano eno izmed ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Preveliko: pričakovano, da bo ${
                        i.origin ?? "vrednost"
                      } imelo ${t}${i.maximum.toString()} ${
                        n.unit ?? "elementov"
                      }`;
                    return `Preveliko: pričakovano, da bo ${
                      i.origin ?? "vrednost"
                    } ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Premajhno: pričakovano, da bo ${
                        i.origin
                      } imelo ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Premajhno: pričakovano, da bo ${
                      i.origin
                    } ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Neveljaven niz: mora se začeti z "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Neveljaven niz: mora se končati z "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Neveljaven niz: mora vsebovati "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Neveljaven niz: mora ustrezati vzorcu ${i.pattern}`;
                    return `Neveljaven ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Neveljavno število: mora biti večkratnik ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Neprepoznan${
                      i.keys.length > 1 ? "i ključi" : " ključ"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Neveljaven ključ v ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Neveljaven vnos";
                  case "invalid_element":
                    return `Neveljavna vrednost v ${i.origin}`;
                }
              }),
          };
        },
        "sv",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "tecken", verb: "att ha" },
                file: { unit: "bytes", verb: "att ha" },
                array: { unit: "objekt", verb: "att innehålla" },
                set: { unit: "objekt", verb: "att innehålla" },
                map: { unit: "objekt", verb: "att innehålla" },
              }),
              (t = {
                regex: "reguljärt uttryck",
                email: "e-postadress",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-datum och tid",
                date: "ISO-datum",
                time: "ISO-tid",
                duration: "ISO-varaktighet",
                ipv4: "IPv4-adress",
                ipv6: "IPv6-adress",
                mac: "MAC-adress",
                cidrv4: "IPv4-spektrum",
                cidrv6: "IPv6-spektrum",
                base64: "base64-kodad sträng",
                base64url: "base64url-kodad sträng",
                json_string: "JSON-sträng",
                e164: "E.164-nummer",
                credit_card: "kreditkortsnummer",
                currency_code: "valutakod",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "mall-literal",
              }),
              (n = { nan: "NaN", number: "antal", array: "lista" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ogiltig inmatning: f\xf6rv\xe4ntat instanceof ${i.expected}, fick ${r}`;
                    return `Ogiltig inmatning: f\xf6rv\xe4ntat ${e}, fick ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ogiltig inmatning: f\xf6rv\xe4ntat ${eu(
                        i.values[0]
                      )}`;
                    return `Ogiltigt val: f\xf6rv\xe4ntade en av ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `F\xf6r stor(t): f\xf6rv\xe4ntade ${
                        i.origin ?? "värdet"
                      } att ha ${t}${i.maximum.toString()} ${
                        n.unit ?? "element"
                      }`;
                    return `F\xf6r stor(t): f\xf6rv\xe4ntat ${
                      i.origin ?? "värdet"
                    } att ha ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `F\xf6r lite(t): f\xf6rv\xe4ntade ${
                        i.origin ?? "värdet"
                      } att ha ${t}${i.minimum.toString()} ${n.unit}`;
                    return `F\xf6r lite(t): f\xf6rv\xe4ntade ${
                      i.origin ?? "värdet"
                    } att ha ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Ogiltig str\xe4ng: m\xe5ste sluta med "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${i.pattern}"`;
                    return `Ogiltig(t) ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ogiltigt tal: m\xe5ste vara en multipel av ${i.divisor}`;
                  case "unrecognized_keys":
                    return `${
                      i.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Ogiltig nyckel i ${i.origin ?? "värdet"}`;
                  case "invalid_union":
                  default:
                    return "Ogiltig input";
                  case "invalid_element":
                    return `Ogiltigt v\xe4rde i ${i.origin ?? "värdet"}`;
                }
              }),
          };
        },
        "ta",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
                file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
                array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
                set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
                map: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
              }),
              (t = {
                regex: "உள்ளீடு",
                email: "மின்னஞ்சல் முகவரி",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO தேதி நேரம்",
                date: "ISO தேதி",
                time: "ISO நேரம்",
                duration: "ISO கால அளவு",
                ipv4: "IPv4 முகவரி",
                ipv6: "IPv6 முகவரி",
                mac: "MAC முகவரி",
                cidrv4: "IPv4 வரம்பு",
                cidrv6: "IPv6 வரம்பு",
                base64: "base64-encoded சரம்",
                base64url: "base64url-encoded சரம்",
                json_string: "JSON சரம்",
                e164: "E.164 எண்",
                credit_card: "கடன் அட்டை எண்",
                currency_code: "நாணயக் குறியீடு",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (n = { nan: "NaN", number: "எண்", array: "அணி", null: "வெறுமை" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${i.expected}, பெறப்பட்டது ${r}`;
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${e}, பெறப்பட்டது ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${eu(
                        i.values[0]
                      )}`;
                    return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${S(
                      i.values,
                      "|"
                    )} இல் ஒன்று`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${
                        i.origin ?? "மதிப்பு"
                      } ${t}${i.maximum.toString()} ${
                        n.unit ?? "உறுப்புகள்"
                      } ஆக இருக்க வேண்டும்`;
                    return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${
                      i.origin ?? "மதிப்பு"
                    } ${t}${i.maximum.toString()} ஆக இருக்க வேண்டும்`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${
                        n.unit
                      } ஆக இருக்க வேண்டும்`;
                    return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${
                      i.origin
                    } ${t}${i.minimum.toString()} ஆக இருக்க வேண்டும்`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்`;
                    if ("ends_with" === i.format)
                      return `தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்`;
                    if ("includes" === i.format)
                      return `தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்`;
                    if ("regex" === i.format)
                      return `தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                    return `தவறான ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `தவறான எண்: ${i.divisor} இன் பலமாக இருக்க வேண்டும்`;
                  case "unrecognized_keys":
                    return `அடையாளம் தெரியாத விசை${
                      i.keys.length > 1 ? "கள்" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} இல் தவறான விசை`;
                  case "invalid_union":
                  default:
                    return "தவறான உள்ளீடு";
                  case "invalid_element":
                    return `${i.origin} இல் தவறான மதிப்பு`;
                }
              }),
          };
        },
        "tg",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "аломат", verb: "дошта бошад" },
                file: { unit: "байт", verb: "дошта бошад" },
                array: { unit: "унсур", verb: "дошта бошад" },
                set: { unit: "унсур", verb: "дошта бошад" },
                map: { unit: "сабт", verb: "дошта бошад" },
              }),
              (t = {
                regex: "вуруд",
                email: "суроғаи email",
                url: "URL",
                emoji: "эмоҷи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "санаву вақти ISO",
                date: "санаи ISO",
                time: "вақти ISO",
                duration: "давомнокии ISO",
                ipv4: "суроғаи IPv4",
                ipv6: "суроғаи IPv6",
                mac: "суроғаи MAC",
                cidrv4: "маҳдудаи IPv4",
                cidrv6: "маҳдудаи IPv6",
                base64: "сатри дар формати base64",
                base64url: "сатри дар формати base64url",
                json_string: "сатри JSON",
                e164: "рақами E.164",
                credit_card: "рақами корти кредитӣ",
                currency_code: "рамзи асъор",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вуруд",
              }),
              (n = {
                nan: "NaN",
                number: "рақам",
                string: "сатр",
                array: "массив",
                object: "объект",
                date: "сана",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `Вуруди нодуруст: ${e} интизор мерафт, ${r} гирифта шуд`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Вуруди нодуруст: ${eu(
                        i.values[0]
                      )} интизор мерафт`;
                    return `Интихоби нодуруст: яке аз ${S(
                      i.values,
                      "|"
                    )} интизор мерафт`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Хеле калон: ${
                        i.origin ?? "қимат"
                      } бояд ${t}${i.maximum.toString()} ${n.unit} ${n.verb}`;
                    return `Хеле калон: ${
                      i.origin ?? "қимат"
                    } бояд ${t}${i.maximum.toString()} бошад`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Хеле хурд: ${
                        i.origin
                      } бояд ${t}${i.minimum.toString()} ${n.unit} ${n.verb}`;
                    return `Хеле хурд: ${
                      i.origin
                    } бояд ${t}${i.minimum.toString()} бошад`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Сатри нодуруст: бояд бо "${i.prefix}" оғоз шавад`;
                    if ("ends_with" === i.format)
                      return `Сатри нодуруст: бояд бо "${i.suffix}" анҷом ёбад`;
                    if ("includes" === i.format)
                      return `Сатри нодуруст: бояд "${i.includes}"-ро дар бар гирад`;
                    if ("regex" === i.format)
                      return `Сатри нодуруст: бояд ба намунаи ${i.pattern} мувофиқат кунад`;
                    return `${t[i.format] ?? i.format}-и нодуруст`;
                  case "not_multiple_of":
                    return `Рақами нодуруст: бояд ба ${i.divisor} бе бақия тақсим шавад`;
                  case "unrecognized_keys":
                    return `Калид${
                      i.keys.length > 1 ? "ҳои" : "и"
                    } номаълум: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Калиди нодуруст дар ${i.origin}`;
                  case "invalid_union":
                    if (
                      i.options &&
                      Array.isArray(i.options) &&
                      i.options.length > 0
                    ) {
                      let e = i.options.map((e) => `'${e}'`).join(" | ");
                      return `Қимати нодурусти дискриминатор: ${e} интизор мерафт`;
                    }
                    return "Вуруди нодуруст";
                  case "invalid_element":
                    return `Қимати нодуруст дар ${i.origin}`;
                  default:
                    return "Вуруди нодуруст";
                }
              }),
          };
        },
        "th",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "ตัวอักษร", verb: "ควรมี" },
                file: { unit: "ไบต์", verb: "ควรมี" },
                array: { unit: "รายการ", verb: "ควรมี" },
                set: { unit: "รายการ", verb: "ควรมี" },
                map: { unit: "รายการ", verb: "ควรมี" },
              }),
              (t = {
                regex: "ข้อมูลที่ป้อน",
                email: "ที่อยู่อีเมล",
                url: "URL",
                emoji: "อิโมจิ",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "วันที่เวลาแบบ ISO",
                date: "วันที่แบบ ISO",
                time: "เวลาแบบ ISO",
                duration: "ช่วงเวลาแบบ ISO",
                ipv4: "ที่อยู่ IPv4",
                ipv6: "ที่อยู่ IPv6",
                mac: "ที่อยู่ MAC",
                cidrv4: "ช่วง IP แบบ IPv4",
                cidrv6: "ช่วง IP แบบ IPv6",
                base64: "ข้อความแบบ Base64",
                base64url: "ข้อความแบบ Base64 สำหรับ URL",
                json_string: "ข้อความแบบ JSON",
                e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
                credit_card: "หมายเลขบัตรเครดิต",
                currency_code: "รหัสสกุลเงิน",
                iban: "IBAN",
                jwt: "โทเคน JWT",
                template_literal: "ข้อมูลที่ป้อน",
              }),
              (n = {
                nan: "NaN",
                number: "ตัวเลข",
                array: "อาร์เรย์ (Array)",
                null: "ไม่มีค่า (null)",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${i.expected} แต่ได้รับ ${r}`;
                    return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${e} แต่ได้รับ ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `ค่าไม่ถูกต้อง: ควรเป็น ${eu(i.values[0])}`;
                    return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `เกินกำหนด: ${
                        i.origin ?? "ค่า"
                      } ควรมี${t} ${i.maximum.toString()} ${
                        n.unit ?? "รายการ"
                      }`;
                    return `เกินกำหนด: ${
                      i.origin ?? "ค่า"
                    } ควรมี${t} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? "อย่างน้อย" : "มากกว่า",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `น้อยกว่ากำหนด: ${
                        i.origin
                      } ควรมี${t} ${i.minimum.toString()} ${n.unit}`;
                    return `น้อยกว่ากำหนด: ${
                      i.origin
                    } ควรมี${t} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ`;
                    if ("regex" === i.format)
                      return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}`;
                    return `รูปแบบไม่ถูกต้อง: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${i.divisor} ได้ลงตัว`;
                  case "unrecognized_keys":
                    return `พบคีย์ที่ไม่รู้จัก: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `คีย์ไม่ถูกต้องใน ${i.origin}`;
                  case "invalid_union":
                    return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
                  case "invalid_element":
                    return `ข้อมูลไม่ถูกต้องใน ${i.origin}`;
                  default:
                    return "ข้อมูลไม่ถูกต้อง";
                }
              }),
          };
        },
        "tk",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "simwol", verb: "bolmaly" },
                file: { unit: "baýt", verb: "bolmaly" },
                array: { unit: "elementler", verb: "bolmaly" },
                set: { unit: "elementler", verb: "bolmaly" },
                map: { unit: "elementler", verb: "bolmaly" },
              }),
              (t = {
                regex: "giriş",
                email: "e-poçta salgysy",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO sene we wagt",
                date: "ISO sene",
                time: "ISO wagt",
                duration: "ISO wagt aralygy",
                ipv4: "IPv4 salgysy",
                ipv6: "IPv6 salgysy",
                mac: "MAC salgysy",
                cidrv4: "IPv4 aralygy",
                cidrv6: "IPv6 aralygy",
                base64: "base64 bilen şifrlenen setir",
                base64url: "base64url bilen şifrlenen setir",
                json_string: "JSON setiri",
                e164: "E.164 nomeri",
                credit_card: "kredit kartynyň nomeri",
                currency_code: "walýuta kody",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "şablon",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    return `N\xe4dogry baha: garaşylan ${e} \xfderine ${r} alyndy`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `N\xe4dogry baha: ${eu(i.values[0])} bolmaly`;
                    return `N\xe4dogry sa\xfdlaw: aşakdakylardan biri bolmaly: ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Has uly: garaşyl\xfdan ${
                        i.origin ?? "baha"
                      } ${t} ${i.maximum.toString()} ${n.unit ?? "element"}`;
                    return `Has uly: garaşyl\xfdan ${
                      i.origin ?? "baha"
                    } ${t} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Has ki\xe7i: garaşyl\xfdan ${
                        i.origin
                      } ${t} ${i.minimum.toString()} ${n.unit}`;
                    return `Has ki\xe7i: garaşyl\xfdan ${
                      i.origin
                    } ${t} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `N\xe4dogry setir: "${i.prefix}" bilen başlamaly`;
                    if ("ends_with" === i.format)
                      return `N\xe4dogry setir: "${i.suffix}" bilen gutarmaly`;
                    if ("includes" === i.format)
                      return `N\xe4dogry setir: "${i.includes}" saklamaly`;
                    if ("regex" === i.format)
                      return `N\xe4dogry setir: ${i.pattern} nusga la\xfdyk bolmaly`;
                    return `N\xe4dogry ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `N\xe4dogry san: ${i.divisor} bilen galyndysyz b\xf6l\xfcnmeli`;
                  case "unrecognized_keys":
                    return `Tanalma\xfdan a\xe7ar${
                      i.keys.length > 1 ? "lar" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} i\xe7inde n\xe4dogry a\xe7ar`;
                  case "invalid_union":
                  default:
                    return "Nädogry baha";
                  case "invalid_element":
                    return `${i.origin} i\xe7inde n\xe4dogry baha`;
                }
              }),
          };
        },
        "tr",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "karakter", verb: "olmalı" },
                file: { unit: "bayt", verb: "olmalı" },
                array: { unit: "öğe", verb: "olmalı" },
                set: { unit: "öğe", verb: "olmalı" },
                map: { unit: "öğe", verb: "olmalı" },
              }),
              (t = {
                regex: "girdi",
                email: "e-posta adresi",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO tarih ve saat",
                date: "ISO tarih",
                time: "ISO saat",
                duration: "ISO süre",
                ipv4: "IPv4 adresi",
                ipv6: "IPv6 adresi",
                mac: "MAC adresi",
                cidrv4: "IPv4 aralığı",
                cidrv6: "IPv6 aralığı",
                base64: "base64 ile şifrelenmiş metin",
                base64url: "base64url ile şifrelenmiş metin",
                json_string: "JSON dizesi",
                e164: "E.164 sayısı",
                credit_card: "kredi kartı numarası",
                currency_code: "para birimi kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "Şablon dizesi",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Ge\xe7ersiz değer: beklenen instanceof ${i.expected}, alınan ${r}`;
                    return `Ge\xe7ersiz değer: beklenen ${e}, alınan ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Ge\xe7ersiz değer: beklenen ${eu(i.values[0])}`;
                    return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `\xc7ok b\xfcy\xfck: beklenen ${
                        i.origin ?? "değer"
                      } ${t}${i.maximum.toString()} ${n.unit ?? "öğe"}`;
                    return `\xc7ok b\xfcy\xfck: beklenen ${
                      i.origin ?? "değer"
                    } ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `\xc7ok k\xfc\xe7\xfck: beklenen ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `\xc7ok k\xfc\xe7\xfck: beklenen ${
                      i.origin
                    } ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ge\xe7ersiz metin: "${i.prefix}" ile başlamalı`;
                    if ("ends_with" === i.format)
                      return `Ge\xe7ersiz metin: "${i.suffix}" ile bitmeli`;
                    if ("includes" === i.format)
                      return `Ge\xe7ersiz metin: "${i.includes}" i\xe7ermeli`;
                    if ("regex" === i.format)
                      return `Ge\xe7ersiz metin: ${i.pattern} desenine uymalı`;
                    return `Ge\xe7ersiz ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Ge\xe7ersiz sayı: ${i.divisor} ile tam b\xf6l\xfcnebilmeli`;
                  case "unrecognized_keys":
                    return `Tanınmayan anahtar${
                      i.keys.length > 1 ? "lar" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} i\xe7inde ge\xe7ersiz anahtar`;
                  case "invalid_union":
                  default:
                    return "Geçersiz değer";
                  case "invalid_element":
                    return `${i.origin} i\xe7inde ge\xe7ersiz değer`;
                }
              }),
          };
        },
        "ua",
        0,
        function () {
          return ay();
        },
        "uk",
        0,
        ay,
        "ur",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "حروف", verb: "ہونا" },
                file: { unit: "بائٹس", verb: "ہونا" },
                array: { unit: "آئٹمز", verb: "ہونا" },
                set: { unit: "آئٹمز", verb: "ہونا" },
                map: { unit: "آئٹمز", verb: "ہونا" },
              }),
              (t = {
                regex: "ان پٹ",
                email: "ای میل ایڈریس",
                url: "یو آر ایل",
                emoji: "ایموجی",
                uuid: "یو یو آئی ڈی",
                uuidv4: "یو یو آئی ڈی وی 4",
                uuidv6: "یو یو آئی ڈی وی 6",
                nanoid: "نینو آئی ڈی",
                guid: "جی یو آئی ڈی",
                cuid: "سی یو آئی ڈی",
                cuid2: "سی یو آئی ڈی 2",
                ulid: "یو ایل آئی ڈی",
                xid: "ایکس آئی ڈی",
                ksuid: "کے ایس یو آئی ڈی",
                datetime: "آئی ایس او ڈیٹ ٹائم",
                date: "آئی ایس او تاریخ",
                time: "آئی ایس او وقت",
                duration: "آئی ایس او مدت",
                ipv4: "آئی پی وی 4 ایڈریس",
                ipv6: "آئی پی وی 6 ایڈریس",
                mac: "ایم اے سی ایڈریس",
                cidrv4: "آئی پی وی 4 رینج",
                cidrv6: "آئی پی وی 6 رینج",
                base64: "بیس 64 ان کوڈڈ سٹرنگ",
                base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
                json_string: "جے ایس او این سٹرنگ",
                e164: "ای 164 نمبر",
                credit_card: "کریڈٹ کارڈ نمبر",
                currency_code: "کرنسی کوڈ",
                iban: "IBAN",
                jwt: "جے ڈبلیو ٹی",
                template_literal: "ان پٹ",
              }),
              (n = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `غلط ان پٹ: instanceof ${i.expected} متوقع تھا، ${r} موصول ہوا`;
                    return `غلط ان پٹ: ${e} متوقع تھا، ${r} موصول ہوا`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `غلط ان پٹ: ${eu(i.values[0])} متوقع تھا`;
                    return `غلط آپشن: ${S(i.values, "|")} میں سے ایک متوقع تھا`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `بہت بڑا: ${
                        i.origin ?? "ویلیو"
                      } کے ${t}${i.maximum.toString()} ${
                        n.unit ?? "عناصر"
                      } ہونے متوقع تھے`;
                    return `بہت بڑا: ${
                      i.origin ?? "ویلیو"
                    } کا ${t}${i.maximum.toString()} ہونا متوقع تھا`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `بہت چھوٹا: ${
                        i.origin
                      } کے ${t}${i.minimum.toString()} ${
                        n.unit
                      } ہونے متوقع تھے`;
                    return `بہت چھوٹا: ${
                      i.origin
                    } کا ${t}${i.minimum.toString()} ہونا متوقع تھا`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے`;
                    if ("ends_with" === i.format)
                      return `غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے`;
                    if ("includes" === i.format)
                      return `غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے`;
                    if ("regex" === i.format)
                      return `غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے`;
                    return `غلط ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `غلط نمبر: ${i.divisor} کا مضاعف ہونا چاہیے`;
                  case "unrecognized_keys":
                    return `غیر تسلیم شدہ کی${
                      i.keys.length > 1 ? "ز" : ""
                    }: ${S(i.keys, "، ")}`;
                  case "invalid_key":
                    return `${i.origin} میں غلط کی`;
                  case "invalid_union":
                  default:
                    return "غلط ان پٹ";
                  case "invalid_element":
                    return `${i.origin} میں غلط ویلیو`;
                }
              }),
          };
        },
        "uz",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "belgi", verb: "bo‘lishi kerak" },
                file: { unit: "bayt", verb: "bo‘lishi kerak" },
                array: { unit: "element", verb: "bo‘lishi kerak" },
                set: { unit: "element", verb: "bo‘lishi kerak" },
                map: { unit: "yozuv", verb: "bo‘lishi kerak" },
              }),
              (t = {
                regex: "kirish",
                email: "elektron pochta manzili",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO sana va vaqti",
                date: "ISO sana",
                time: "ISO vaqt",
                duration: "ISO davomiylik",
                ipv4: "IPv4 manzil",
                ipv6: "IPv6 manzil",
                mac: "MAC manzil",
                cidrv4: "IPv4 diapazon",
                cidrv6: "IPv6 diapazon",
                base64: "base64 kodlangan satr",
                base64url: "base64url kodlangan satr",
                json_string: "JSON satr",
                e164: "E.164 raqam",
                credit_card: "kredit karta raqami",
                currency_code: "valyuta kodi",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "kirish",
              }),
              (n = { nan: "NaN", number: "raqam", array: "massiv" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Noto‘g‘ri kirish: kutilgan instanceof ${i.expected}, qabul qilingan ${r}`;
                    return `Noto‘g‘ri kirish: kutilgan ${e}, qabul qilingan ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Noto‘g‘ri kirish: kutilgan ${eu(i.values[0])}`;
                    return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Juda katta: kutilgan ${
                        i.origin ?? "qiymat"
                      } ${t}${i.maximum.toString()} ${n.unit} ${n.verb}`;
                    return `Juda katta: kutilgan ${
                      i.origin ?? "qiymat"
                    } ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Juda kichik: kutilgan ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit} ${n.verb}`;
                    return `Juda kichik: kutilgan ${
                      i.origin
                    } ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Noto‘g‘ri satr: "${i.prefix}" bilan boshlanishi kerak`;
                    if ("ends_with" === i.format)
                      return `Noto‘g‘ri satr: "${i.suffix}" bilan tugashi kerak`;
                    if ("includes" === i.format)
                      return `Noto‘g‘ri satr: "${i.includes}" ni o‘z ichiga olishi kerak`;
                    if ("regex" === i.format)
                      return `Noto‘g‘ri satr: ${i.pattern} shabloniga mos kelishi kerak`;
                    return `Noto‘g‘ri ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Noto‘g‘ri raqam: ${i.divisor} ning karralisi bo‘lishi kerak`;
                  case "unrecognized_keys":
                    return `Noma’lum kalit${
                      i.keys.length > 1 ? "lar" : ""
                    }: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} dagi kalit noto‘g‘ri`;
                  case "invalid_union":
                  default:
                    return "Noto‘g‘ri kirish";
                  case "invalid_element":
                    return `${i.origin} da noto‘g‘ri qiymat`;
                }
              }),
          };
        },
        "vi",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "ký tự", verb: "có" },
                file: { unit: "byte", verb: "có" },
                array: { unit: "phần tử", verb: "có" },
                set: { unit: "phần tử", verb: "có" },
                map: { unit: "phần tử", verb: "có" },
              }),
              (t = {
                regex: "đầu vào",
                email: "địa chỉ email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ngày giờ ISO",
                date: "ngày ISO",
                time: "giờ ISO",
                duration: "khoảng thời gian ISO",
                ipv4: "địa chỉ IPv4",
                ipv6: "địa chỉ IPv6",
                mac: "địa chỉ MAC",
                cidrv4: "dải IPv4",
                cidrv6: "dải IPv6",
                base64: "chuỗi mã hóa base64",
                base64url: "chuỗi mã hóa base64url",
                json_string: "chuỗi JSON",
                e164: "số E.164",
                credit_card: "số thẻ tín dụng",
                currency_code: "mã tiền tệ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "đầu vào",
              }),
              (n = { nan: "NaN", number: "số", array: "mảng" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi instanceof ${i.expected}, nhận được ${r}`;
                    return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${e}, nhận được ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${eu(
                        i.values[0]
                      )}`;
                    return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Qu\xe1 lớn: mong đợi ${i.origin ?? "giá trị"} ${
                        n.verb
                      } ${t}${i.maximum.toString()} ${n.unit ?? "phần tử"}`;
                    return `Qu\xe1 lớn: mong đợi ${
                      i.origin ?? "giá trị"
                    } ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `Qu\xe1 nhỏ: mong đợi ${i.origin} ${
                        n.verb
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `Qu\xe1 nhỏ: mong đợi ${
                      i.origin
                    } ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${i.pattern}`;
                    return `${t[i.format] ?? i.format} kh\xf4ng hợp lệ`;
                  case "not_multiple_of":
                    return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Kh\xf3a kh\xf4ng được nhận dạng: ${S(
                      i.keys,
                      ", "
                    )}`;
                  case "invalid_key":
                    return `Kh\xf3a kh\xf4ng hợp lệ trong ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Đầu vào không hợp lệ";
                  case "invalid_element":
                    return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${i.origin}`;
                }
              }),
          };
        },
        "yo",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "àmi", verb: "ní" },
                file: { unit: "bytes", verb: "ní" },
                array: { unit: "nkan", verb: "ní" },
                set: { unit: "nkan", verb: "ní" },
                map: { unit: "nkan", verb: "ní" },
              }),
              (t = {
                regex: "ẹ̀rọ ìbáwọlé",
                email: "àdírẹ́sì ìmẹ́lì",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "àkókò ISO",
                date: "ọjọ́ ISO",
                time: "àkókò ISO",
                duration: "àkókò tó pé ISO",
                ipv4: "àdírẹ́sì IPv4",
                ipv6: "àdírẹ́sì IPv6",
                mac: "àdírẹ́sì MAC",
                cidrv4: "àgbègbè IPv4",
                cidrv6: "àgbègbè IPv6",
                base64: "ọ̀rọ̀ tí a kọ́ ní base64",
                base64url: "ọ̀rọ̀ base64url",
                json_string: "ọ̀rọ̀ JSON",
                e164: "nọ́mbà E.164",
                credit_card: "nọmba kaadi gbese",
                currency_code: "koodu owó",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ẹ̀rọ ìbáwọlé",
              }),
              (n = { nan: "NaN", number: "nọ́mbà", array: "akopọ" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi instanceof ${i.expected}, \xe0mọ̀ a r\xed ${r}`;
                    return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${e}, \xe0mọ̀ a r\xed ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${eu(
                        i.values[0]
                      )}`;
                    return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${S(
                      i.values,
                      "|"
                    )}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${
                        i.origin ?? "iye"
                      } ${n.verb} ${t}${i.maximum} ${n.unit}`;
                    return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${t}${i.maximum}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${i.origin} ${n.verb} ${t}${i.minimum} ${n.unit}`;
                    return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${t}${i.minimum}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${i.prefix}"`;
                    if ("ends_with" === i.format)
                      return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${i.suffix}"`;
                    if ("includes" === i.format)
                      return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${i.includes}"`;
                    if ("regex" === i.format)
                      return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${i.pattern}`;
                    return `Aṣ\xecṣe: ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${i.divisor}`;
                  case "unrecognized_keys":
                    return `Bọt\xecn\xec \xe0\xecmọ̀: ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${i.origin}`;
                  case "invalid_union":
                  default:
                    return "Ìbáwọlé aṣìṣe";
                  case "invalid_element":
                    return `Iye aṣ\xecṣe n\xedn\xfa ${i.origin}`;
                }
              }),
          };
        },
        "zhCN",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "字符", verb: "包含" },
                file: { unit: "字节", verb: "包含" },
                array: { unit: "项", verb: "包含" },
                set: { unit: "项", verb: "包含" },
                map: { unit: "项", verb: "包含" },
              }),
              (t = {
                regex: "输入",
                email: "电子邮件",
                url: "URL",
                emoji: "表情符号",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO日期时间",
                date: "ISO日期",
                time: "ISO时间",
                duration: "ISO时长",
                ipv4: "IPv4地址",
                ipv6: "IPv6地址",
                mac: "MAC地址",
                cidrv4: "IPv4网段",
                cidrv6: "IPv6网段",
                base64: "base64编码字符串",
                base64url: "base64url编码字符串",
                json_string: "JSON字符串",
                e164: "E.164号码",
                credit_card: "信用卡号",
                currency_code: "货币代码",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "输入",
              }),
              (n = {
                nan: "NaN",
                number: "数字",
                array: "数组",
                null: "空值(null)",
              }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `无效输入：期望 instanceof ${i.expected}，实际接收 ${r}`;
                    return `无效输入：期望 ${e}，实际接收 ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `无效输入：期望 ${eu(i.values[0])}`;
                    return `无效选项：期望以下之一 ${S(i.values, "|")}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `数值过大：期望 ${
                        i.origin ?? "值"
                      } ${t}${i.maximum.toString()} ${n.unit ?? "个元素"}`;
                    return `数值过大：期望 ${
                      i.origin ?? "值"
                    } ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `数值过小：期望 ${
                        i.origin
                      } ${t}${i.minimum.toString()} ${n.unit}`;
                    return `数值过小：期望 ${
                      i.origin
                    } ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `无效字符串：必须以 "${i.prefix}" 开头`;
                    if ("ends_with" === i.format)
                      return `无效字符串：必须以 "${i.suffix}" 结尾`;
                    if ("includes" === i.format)
                      return `无效字符串：必须包含 "${i.includes}"`;
                    if ("regex" === i.format)
                      return `无效字符串：必须满足正则表达式 ${i.pattern}`;
                    return `无效${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `无效数字：必须是 ${i.divisor} 的倍数`;
                  case "unrecognized_keys":
                    return `出现未知的键(key): ${S(i.keys, ", ")}`;
                  case "invalid_key":
                    return `${i.origin} 中的键(key)无效`;
                  case "invalid_union":
                  default:
                    return "无效输入";
                  case "invalid_element":
                    return `${i.origin} 中包含无效值(value)`;
                }
              }),
          };
        },
        "zhTW",
        0,
        function () {
          let e, t, n;
          return {
            localeError:
              ((e = {
                string: { unit: "字元", verb: "擁有" },
                file: { unit: "位元組", verb: "擁有" },
                array: { unit: "項目", verb: "擁有" },
                set: { unit: "項目", verb: "擁有" },
                map: { unit: "項目", verb: "擁有" },
              }),
              (t = {
                regex: "輸入",
                email: "郵件地址",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO 日期時間",
                date: "ISO 日期",
                time: "ISO 時間",
                duration: "ISO 期間",
                ipv4: "IPv4 位址",
                ipv6: "IPv6 位址",
                mac: "MAC 位址",
                cidrv4: "IPv4 範圍",
                cidrv6: "IPv6 範圍",
                base64: "base64 編碼字串",
                base64url: "base64url 編碼字串",
                json_string: "JSON 字串",
                e164: "E.164 數值",
                credit_card: "信用卡號",
                currency_code: "貨幣代碼",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "輸入",
              }),
              (n = { nan: "NaN" }),
              (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let e = n[i.expected] ?? i.expected,
                      t = eU(i.input),
                      r = n[t] ?? t;
                    if (/^[A-Z]/.test(i.expected))
                      return `無效的輸入值：預期為 instanceof ${i.expected}，但收到 ${r}`;
                    return `無效的輸入值：預期為 ${e}，但收到 ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length)
                      return `無效的輸入值：預期為 ${eu(i.values[0])}`;
                    return `無效的選項：預期為以下其中之一 ${S(i.values, "|")}`;
                  case "too_big": {
                    let t = i.inclusive ? "<=" : "<",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `數值過大：預期 ${
                        i.origin ?? "值"
                      } 應為 ${t}${i.maximum.toString()} ${n.unit ?? "個元素"}`;
                    return `數值過大：預期 ${
                      i.origin ?? "值"
                    } 應為 ${t}${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = i.inclusive ? ">=" : ">",
                      n = e[i.origin] ?? null;
                    if (n)
                      return `數值過小：預期 ${
                        i.origin
                      } 應為 ${t}${i.minimum.toString()} ${n.unit}`;
                    return `數值過小：預期 ${
                      i.origin
                    } 應為 ${t}${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format)
                      return `無效的字串：必須以 "${i.prefix}" 開頭`;
                    if ("ends_with" === i.format)
                      return `無效的字串：必須以 "${i.suffix}" 結尾`;
                    if ("includes" === i.format)
                      return `無效的字串：必須包含 "${i.includes}"`;
                    if ("regex" === i.format)
                      return `無效的字串：必須符合格式 ${i.pattern}`;
                    return `無效的 ${t[i.format] ?? i.format}`;
                  case "not_multiple_of":
                    return `無效的數字：必須為 ${i.divisor} 的倍數`;
                  case "unrecognized_keys":
                    return `無法識別的鍵值${i.keys.length > 1 ? "們" : ""}：${S(
                      i.keys,
                      "、"
                    )}`;
                  case "invalid_key":
                    return `${i.origin} 中有無效的鍵值`;
                  case "invalid_union":
                  default:
                    return "無效的輸入值";
                  case "invalid_element":
                    return `${i.origin} 中有無效的值`;
                }
              }),
          };
        },
      ],
      554580
    );
    var ab = e.i(554580);
    let a_ = Symbol("ZodOutput"),
      ax = Symbol("ZodInput");
    class aw {
      constructor() {
        (this._map = new WeakMap()), (this._idmap = new Map());
      }
      add(e, ...t) {
        let n = t[0];
        return (
          this._map.set(e, n),
          n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e),
          this
        );
      }
      clear() {
        return (this._map = new WeakMap()), (this._idmap = new Map()), this;
      }
      remove(e) {
        let t = this._map.get(e);
        return (
          t && "object" == typeof t && "id" in t && this._idmap.delete(t.id),
          this._map.delete(e),
          this
        );
      }
      get(e) {
        let t = e._zod.parent;
        if (t) {
          let n = { ...(this.get(t) ?? {}) };
          delete n.id;
          let i = { ...n, ...this._map.get(e) };
          return Object.keys(i).length ? i : void 0;
        }
        return this._map.get(e);
      }
      has(e) {
        return this._map.has(e);
      }
    }
    function ak() {
      return new aw();
    }
    (r = globalThis).__zod_globalRegistry ?? (r.__zod_globalRegistry = ak());
    let aI = globalThis.__zod_globalRegistry;
    e.s(
      [
        "$ZodRegistry",
        0,
        aw,
        "$input",
        0,
        ax,
        "$output",
        0,
        a_,
        "globalRegistry",
        0,
        aI,
        "registry",
        0,
        ak,
      ],
      525527
    ),
      e.i(525527),
      e.i(698530);
    let aS = Symbol.for("zod.compile.invalid"),
      aj = Symbol.for("zod.compile.fallback");
    class aN extends Error {
      constructor(
        e = "z.compile does not support async refinements, transforms, or checks"
      ) {
        super(e), (this.name = "ZodCompileAsyncError");
      }
    }
    class az extends Error {
      constructor(e, t = !0) {
        super(
          `z.compile does not support ${e}; this schema must use the runtime parser`
        ),
          (this.name = "ZodCompileUnsupportedError"),
          (this.islandable = t);
      }
    }
    function aD(e, t) {
      try {
        let t = aU(e),
          n = aA(e, t);
        return (
          (n._zod.bag.validator = (function (e, t) {
            try {
              return aU(e, { assertOnly: !0 });
            } catch {
              return t;
            }
          })(e, t)),
          n
        );
      } catch (n) {
        if (t?.strict) throw n;
        return e;
      }
    }
    function aA(e, t) {
      if (ar(e))
        throw new az("a schema whose subtree contains a reference cycle");
      let n = ea(e),
        i = e._zod.run,
        r = i.__originalRun ?? i,
        a = (e, n) => {
          if (
            n?.async ||
            n?.direction === "backward" ||
            n?.skipChecks ||
            n?.[aj] ||
            (n && au(n, e.value))
          )
            return r(e, n);
          let i = t(e.value);
          return i !== aS ? ((e.value = i), e) : (n && (n[aj] = !0), r(e, n));
        };
      return (
        (a.__originalRun = r),
        (n._zod.bag.fallbackRun = r),
        (n._zod.bag.validator = t),
        (n._zod.run = a),
        i.__originalRun ||
          (function (e, t, n) {
            if ("function" == typeof t.safeParse) {
              let i = t.safeParse;
              e.safeParse = (e, t) => {
                let r = n(e);
                return r !== aS ? { success: !0, data: r } : i(e, t);
              };
            }
            if ("function" == typeof t.parse) {
              let i = t.parse;
              e.parse = (e, t) => {
                let r = n(e);
                return r !== aS ? r : i(e, t);
              };
            }
          })(n, e, t),
        n
      );
    }
    function aU(e, t) {
      let n,
        i = !0;
      try {
        i = ar(e);
      } catch {}
      if (i) throw new az("a schema whose subtree contains a reference cycle");
      let r = {
          constants: new Map(),
          constantCounter: 0,
          varCounter: 0,
          definite: !0,
        },
        a = new n9(["input"]),
        o = aW(a, r, e, "input", !t?.assertOnly);
      a.write(null === o ? "return true;" : `return ${o};`);
      let s = ["INVALID", ...r.constants.keys()],
        u = [aS, ...r.constants.values()],
        l = a.content.join("\n"),
        d = t?.debug
          ? s.length > 0
            ? `// Constants: ${s.join(", ")}
${l}`
            : l
          : "",
        c = Function,
        m = `return (input) => {
${l}
}`;
      try {
        n = new c(...s, m)(...u);
      } catch (e) {
        throw new az(
          `this schema (generated code failed to evaluate: ${e.message})`
        );
      }
      return t?.debug && (n.code = d), (n.definite = r.definite), n;
    }
    function aO(e, t) {
      for (let [n, i] of e.constants) if (i === t) return n;
      let n = `c${e.constantCounter++}`;
      return e.constants.set(n, t), n;
    }
    function aP(e, t) {
      return (e.definite = !1), aO(e, t);
    }
    function aC(e) {
      return `v${e.varCounter++}`;
    }
    function aE(e, t) {
      let n = e._zod.run({ value: t, issues: [] }, {});
      return n && "function" == typeof n.then
        ? aS
        : 0 === n.issues.length
        ? n.value
        : aS;
    }
    function aZ(e, t, n, i, r = !0) {
      let a = e.content.length,
        o = t.constants.size,
        s = t.constantCounter,
        u = t.varCounter;
      try {
        return aW(e, t, n, i, r);
      } catch (h) {
        var l, d, c, m;
        let r, f, p;
        if (!(h instanceof az) || !h.islandable) throw h;
        if (((e.content.length = a), t.constants.size > o))
          for (let e of Array.from(t.constants.keys()).slice(o))
            t.constants.delete(e);
        return (
          (t.constantCounter = s),
          (t.varCounter = u),
          (l = e),
          (d = t),
          (c = n),
          (m = i),
          (d.definite = !1),
          (r = aO(d, c)),
          (f = aO(d, aE)),
          (p = aC(d)),
          l.write(`const ${p} = ${f}(${r}, ${m});`),
          l.write(`if (${p} === INVALID) return INVALID;`),
          p
        );
      }
    }
    let aT = new Set([
      "max_size",
      "min_size",
      "size_equals",
      "max_length",
      "min_length",
      "length_equals",
    ]);
    function aL(e, t, n, i) {
      let r = aO(t, eD),
        a = aC(t);
      return (
        e.write(
          `const ${a} = typeof ${n} === "string" && ${i} ? ${r}(${n}) : ${n}.length;`
        ),
        a
      );
    }
    function aq(e, t) {
      if ("number" != typeof e || !Number.isFinite(e))
        throw new az(`${t} bound of type ${typeof e}`);
      return `${e}`;
    }
    function aR(e, t) {
      if ("bigint" == typeof t) return `${t}n`;
      if ("number" == typeof t) {
        if (Number.isNaN(t)) throw new az("comparison check with NaN bound");
        return `${t}`;
      }
      if (t instanceof Date) {
        if (Number.isNaN(t.getTime()))
          throw new az("comparison check with Invalid Date bound");
        return aO(e, t);
      }
      throw new az(`comparison check bound of type ${typeof t}`);
    }
    function aF(e, t, n) {
      let i = t.format;
      switch (i) {
        case "safeint":
          e.write(`if (!Number.isSafeInteger(${n})) return INVALID;`);
          break;
        case "int32":
          e.write(
            `if (!Number.isInteger(${n}) || ${n} < -2147483648 || ${n} > 2147483647) return INVALID;`
          );
          break;
        case "uint32":
          e.write(
            `if (!Number.isInteger(${n}) || ${n} < 0 || ${n} > 4294967295) return INVALID;`
          );
          break;
        case "float32":
          e.write(
            `if (!Number.isFinite(${n}) || ${n} < -3.4028234663852886e38 || ${n} > 3.4028234663852886e38) return INVALID;`
          );
          break;
        case "float64":
          e.write(`if (!Number.isFinite(${n})) return INVALID;`);
          break;
        default:
          throw new az(`number format ${i}`);
      }
    }
    function aM() {
      throw new e6();
    }
    function aB(e) {
      this.issues.push(e);
    }
    let aJ = new Set([
      "cidrv4",
      "cuid",
      "cuid2",
      "date",
      "datetime",
      "duration",
      "e164",
      "email",
      "emoji",
      "ends_with",
      "guid",
      "includes",
      "ipv4",
      "ksuid",
      "lowercase",
      "mac",
      "nanoid",
      "regex",
      "starts_with",
      "time",
      "ulid",
      "uppercase",
      "uuid",
      "xid",
    ]);
    function aV(e, t, n, i, r = !0) {
      let a = n.format;
      if ("base64" === a) {
        let n = aO(t, iC);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if ("base64url" === a) {
        let n = aO(t, iL);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if ("jwt" === a) {
        let r = aO(t, iW),
          a = aO(t, n.alg ?? null);
        return e.write(`if (!${r}(${i}, ${a})) return INVALID;`), i;
      }
      if ("ipv6" === a) {
        let n = aO(t, iz);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if ("cidrv6" === a) {
        let n = aO(t, iO);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if ("credit_card" === a) {
        let n = aO(t, iM);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if ("iban" === a) {
        let n = aO(t, iJ);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if (
        "url" === a ||
        "httpurl" === a ||
        n.normalize ||
        void 0 !== n.hostname ||
        void 0 !== n.protocol
      ) {
        let a = aO(t, iu),
          o = aO(t, n),
          s = aC(t),
          u = aC(t);
        if (
          (e.write(`const ${s} = ${i}.trim();`),
          e.write(`const ${u} = ${a}(${s}, ${o});`),
          e.write(`if (typeof ${u} === "number") return INVALID;`),
          void 0 !== n.hostname)
        ) {
          let n = aO(t, im);
          e.write(`if (!${n}(${u}, ${o}.hostname)) return INVALID;`);
        }
        if (void 0 !== n.protocol) {
          let n = aO(t, ip);
          e.write(`if (!${n}(${u}, ${o}.protocol)) return INVALID;`);
        }
        if (!r) return null;
        let l = aC(t),
          d = n.normalize ? `${u}.href` : `${aO(t, ic)}(${s})`;
        return e.write(`const ${l} = ${d};`), l;
      }
      let o = n.fn;
      if (o) {
        if (a0(o)) throw new az(`async string format ${a}`);
        let n = aO(t, o);
        return e.write(`if (!${n}(${i})) return INVALID;`), i;
      }
      if (aJ.has(a) && n.pattern) {
        let r = aO(t, n.pattern);
        return (
          e.write(`${r}.lastIndex = 0;`),
          e.write(`if (!${r}.test(${i})) return INVALID;`),
          i
        );
      }
      let s = n.format;
      switch (s) {
        case "regex":
          throw new az("regex format without a pattern");
        case "lowercase":
          e.write(`if (${i} !== ${i}.toLowerCase()) return INVALID;`);
          break;
        case "uppercase":
          e.write(`if (${i} !== ${i}.toUpperCase()) return INVALID;`);
          break;
        case "includes":
          e.write(`if (!${i}.includes(${W(n.includes)})) return INVALID;`);
          break;
        case "starts_with": {
          let t = n.prefix;
          e.write(
            `if (${i}.slice(0, ${t.length}) !== ${W(t)}) return INVALID;`
          );
          break;
        }
        case "ends_with": {
          let t = n.suffix;
          e.write(`if (${i}.slice(-${t.length}) !== ${W(t)}) return INVALID;`);
          break;
        }
        default:
          throw new az(`string format ${s}`);
      }
      return i;
    }
    function aW(e, t, n, i, r = !0) {
      var a,
        o,
        s,
        u,
        l,
        d,
        c,
        m,
        f,
        p,
        h,
        v,
        g,
        $,
        y,
        b,
        _,
        x,
        w,
        k,
        I,
        S,
        j,
        N,
        z,
        D,
        A,
        O,
        P,
        C,
        E,
        Z,
        T,
        L,
        q,
        R,
        F,
        M,
        B;
      let J,
        V = n._zod.def,
        K = V.type;
      if (V.coerce) throw new az(`coercion (z.coerce.${K}())`);
      let G = r || !!V.checks?.length;
      switch (K) {
        case "string":
          J = (function (e, t, n, i, r = !0) {
            e.write(`if (typeof ${i} !== "string") return INVALID;`);
            let a = n._zod.def;
            return void 0 === a.format ? i : aV(e, t, a, i, r);
          })(e, t, n, i, G);
          break;
        case "number":
          let H;
          (a = e),
            (o = n),
            (s = i),
            a.write(
              `if (typeof ${s} !== "number" || !Number.isFinite(${s})) return INVALID;`
            ),
            "number_format" === (H = o._zod.def).check &&
              H.format &&
              aF(a, { format: H.format }, s),
            (J = s);
          break;
        case "boolean":
          (u = e),
            (l = i),
            u.write(`if (typeof ${l} !== "boolean") return INVALID;`),
            (J = l);
          break;
        case "bigint":
          J = (function (e, t, n) {
            e.write(`if (typeof ${n} !== "bigint") return INVALID;`);
            let i = t._zod.def;
            if (i.format)
              switch (i.format) {
                case "int64":
                  e.write(
                    `if (${n} < -9223372036854775808n || ${n} > 9223372036854775807n) return INVALID;`
                  );
                  break;
                case "uint64":
                  e.write(
                    `if (${n} < 0n || ${n} > 18446744073709551615n) return INVALID;`
                  );
              }
            return n;
          })(e, n, i);
          break;
        case "symbol":
          (d = e),
            (c = i),
            d.write(`if (typeof ${c} !== "symbol") return INVALID;`),
            (J = c);
          break;
        case "undefined":
          (m = e),
            (f = i),
            m.write(`if (${f} !== undefined) return INVALID;`),
            (J = f);
          break;
        case "null":
          (p = e),
            (h = i),
            p.write(`if (${h} !== null) return INVALID;`),
            (J = h);
          break;
        case "any":
        case "unknown":
          J = i;
          break;
        case "never":
          e.write("return INVALID;"), (J = i);
          break;
        case "void":
          (v = e),
            (g = i),
            v.write(`if (${g} !== undefined) return INVALID;`),
            (J = g);
          break;
        case "nan":
          ($ = e),
            (y = i),
            $.write(
              `if (typeof ${y} !== "number" || !Number.isNaN(${y})) return INVALID;`
            ),
            (J = y);
          break;
        case "date":
          (b = e),
            (_ = i),
            b.write(
              `if (!(${_} instanceof Date) || Number.isNaN(${_}.getTime())) return INVALID;`
            ),
            (J = _);
          break;
        case "object":
          J = (function (e, t, n, i, r = !0) {
            let a = n._zod.def;
            e.write(
              `if (typeof ${i} !== "object" || ${i} === null || Array.isArray(${i})) return INVALID;`
            );
            let o = a.shape,
              s = Object.keys(o),
              u = Object.getOwnPropertySymbols(o),
              l = u.length ? [...s, ...u] : s,
              d = (e) => ("symbol" == typeof e ? aO(t, e) : W(e));
            if (s.includes("__proto__"))
              throw new az('object shape key "__proto__"');
            let c = new Map();
            for (let n of l) {
              let a = o[n],
                s = d(n),
                u = aC(t);
              if (
                (e.write(`const ${u} = ${i}[${s}];`), void 0 !== a._zod.optin)
              ) {
                let r = aC(t);
                e.write(`let ${r} = (() => {`),
                  e.indented((e) => {
                    let n = aZ(e, t, a, u);
                    e.write(`return ${n};`);
                  }),
                  e.write("})();"),
                  "optional" === a._zod.optout
                    ? (e.write(`if (${r} === INVALID) {`),
                      e.indented((e) => {
                        e.write(`if (${s} in ${i}) return INVALID;`),
                          e.write(`${r} = undefined;`);
                      }),
                      e.write("}"))
                    : e.write(`if (${r} === INVALID) return INVALID;`),
                  c.set(n, r);
              } else {
                var m;
                void 0 === (m = a)._zod.optin &&
                  (function e(t) {
                    if (t._zod.def.coerce) return !0;
                    let n = t._zod.def;
                    switch (n.type) {
                      case "any":
                      case "unknown":
                      case "undefined":
                      case "void":
                      case "default":
                      case "prefault":
                      case "transform":
                      case "custom":
                      case "lazy":
                      case "catch":
                      default:
                        return !0;
                      case "string":
                      case "number":
                      case "boolean":
                      case "bigint":
                      case "symbol":
                      case "null":
                      case "never":
                      case "nan":
                      case "date":
                      case "object":
                      case "array":
                      case "tuple":
                      case "record":
                      case "map":
                      case "set":
                      case "file":
                      case "template_literal":
                        return !1;
                      case "nonoptional":
                        return !!n.innerType && e(n.innerType);
                      case "literal":
                        return !!n.values?.includes(void 0);
                      case "enum":
                        return !!t._zod.values?.has(void 0);
                      case "optional":
                      case "nullable":
                      case "readonly":
                      case "success":
                        return !n.innerType || e(n.innerType);
                      case "union":
                        return !n.options || n.options.some(e);
                      case "intersection":
                        if (!n.left || !n.right) return !0;
                        return e(n.left) && e(n.right);
                      case "pipe":
                        return !n.in || e(n.in);
                    }
                  })(m) &&
                  e.write(`if (!(${s} in ${i})) return INVALID;`);
                let o = aZ(e, t, a, u, r);
                null !== o && c.set(n, o);
              }
            }
            let f = a.catchall,
              p = "none";
            if (f) {
              let t = f._zod.def.type;
              if ("never" === t) {
                let t = s.map((e) => `k !== ${W(e)}`).join(" && ") || "true";
                e.write(`for (const k in ${i}) {`),
                  e.indented((e) => {
                    e.write(`if (${t}) return INVALID;`);
                  }),
                  e.write("}");
              } else
                p =
                  ("unknown" !== t && "any" !== t) || f._zod.def.checks?.length
                    ? "schema"
                    : "passthrough";
            }
            let h = aC(t),
              v = l.some((e) => aG(o[e]) || aK(o[e]));
            if (!r) {
              if ("schema" === p) {
                let n = s.length > 0 ? aO(t, new Set(s)) : null;
                e.write(`for (const k in ${i}) {`),
                  e.indented((e) => {
                    e.write('if (k === "__proto__") continue;'),
                      n && e.write(`if (${n}.has(k)) continue;`);
                    let r = aC(t);
                    e.write(`const ${r} = ${i}[k];`), aZ(e, t, f, r, !1);
                  }),
                  e.write("}");
              }
              return null;
            }
            if (v)
              for (let t of (e.write(`const ${h} = {};`), l)) {
                let n = d(t),
                  r = c.get(t);
                aK(o[t])
                  ? e.write(`if (${n} in ${i}) ${h}[${n}] = ${r};`)
                  : aG(o[t])
                  ? e.write(
                      `if (${r} !== undefined || ${n} in ${i}) ${h}[${n}] = ${r};`
                    )
                  : e.write(`${h}[${n}] = ${r};`);
              }
            else {
              let t = l
                .map(
                  (e) =>
                    `${"symbol" == typeof e ? `[${d(e)}]` : W(e)}: ${c.get(e)}`
                )
                .join(", ");
              e.write(`const ${h} = { ${t} };`);
            }
            if ("none" !== p) {
              let n = s.length > 0 ? aO(t, new Set(s)) : null;
              e.write(`for (const k in ${i}) {`),
                e.indented((e) => {
                  if (
                    (e.write('if (k === "__proto__") continue;'),
                    n && e.write(`if (${n}.has(k)) continue;`),
                    "passthrough" === p)
                  )
                    e.write(`${h}[k] = ${i}[k];`);
                  else {
                    let n = aC(t);
                    e.write(`const ${n} = ${i}[k];`);
                    let r = aZ(e, t, f, n);
                    e.write(`${h}[k] = ${r};`);
                  }
                }),
                e.write("}");
            }
            return h;
          })(e, t, n, i, G);
          break;
        case "optional":
          J = (function (e, t, n, i, r = !0) {
            var a;
            let o = n._zod.def;
            if (((a = n), a._zod.traits?.has("$ZodExactOptional") === !0))
              return aW(e, t, o.innerType, i, r);
            if ("defaulted" === o.innerType._zod.optin) {
              let n = aC(t),
                r = aC(t);
              return (
                e.write(`let ${n};`),
                e.write(`if (${i} === undefined) {`),
                e.indented((e) => {
                  e.write(`const ${r} = (() => {`),
                    e.indented((e) => {
                      let n = aW(e, t, o.innerType, i);
                      e.write(`return ${n};`);
                    }),
                    e.write("})();"),
                    e.write(`if (${r} !== INVALID) ${n} = ${r};`);
                }),
                e.write("} else {"),
                e.indented((e) => {
                  let r = aW(e, t, o.innerType, i);
                  e.write(`${n} = ${r};`);
                }),
                e.write("}"),
                n
              );
            }
            let s = r ? aC(t) : null;
            return (
              s && e.write(`let ${s};`),
              e.write(`if (${i} !== undefined) {`),
              e.indented((e) => {
                let n = aW(e, t, o.innerType, i, r);
                s && null !== n && e.write(`${s} = ${n};`);
              }),
              e.write("}"),
              s
            );
          })(e, t, n, i, G);
          break;
        case "nullable":
          J = (function (e, t, n, i, r = !0) {
            let a = n._zod.def,
              o = r ? aC(t) : null;
            return (
              o && e.write(`let ${o} = null;`),
              e.write(`if (${i} !== null) {`),
              e.indented((e) => {
                let n = aW(e, t, a.innerType, i, r);
                o && null !== n && e.write(`${o} = ${n};`);
              }),
              e.write("}"),
              o
            );
          })(e, t, n, i, G);
          break;
        case "array":
          J = (function (e, t, n, i, r = !0) {
            let a = n._zod.def;
            e.write(`if (!Array.isArray(${i})) return INVALID;`),
              aH(e, n, `${i}.length`);
            let o = r ? aC(t) : null,
              s = aC(t),
              u = aC(t);
            return (
              o && e.write(`const ${o} = new Array(${i}.length);`),
              e.write(`for (let ${s} = 0; ${s} < ${i}.length; ${s}++) {`),
              e.indented((e) => {
                e.write(`const ${u} = ${i}[${s}];`);
                let n = aZ(e, t, a.element, u, r);
                o && null !== n && e.write(`${o}[${s}] = ${n};`);
              }),
              e.write("}"),
              o
            );
          })(e, t, n, i, G);
          break;
        case "literal":
          J = (function (e, t, n, i) {
            let r = n._zod.def.values;
            if (1 !== r.length) {
              let n = aO(t, new Set(r));
              return e.write(`if (!${n}.has(${i})) return INVALID;`), i;
            }
            let a = r[0];
            if ("number" == typeof a && Number.isNaN(a)) {
              let n = aO(t, new Set(r));
              return e.write(`if (!${n}.has(${i})) return INVALID;`), i;
            }
            if ("string" == typeof a)
              e.write(`if (${i} !== ${W(a)}) return INVALID;`);
            else if ("number" == typeof a || "boolean" == typeof a)
              e.write(`if (${i} !== ${a}) return INVALID;`);
            else if (null === a) e.write(`if (${i} !== null) return INVALID;`);
            else if (void 0 === a)
              e.write(`if (${i} !== undefined) return INVALID;`);
            else if ("bigint" == typeof a)
              e.write(`if (${i} !== ${a}n) return INVALID;`);
            else throw new az(`literal type ${typeof a}`);
            return i;
          })(e, t, n, i);
          break;
        case "enum":
          J = (function (e, t, n, i) {
            let r = n._zod.values;
            if (!r) throw new az("enum schema without enumerated values");
            let a = aO(t, r);
            return e.write(`if (!${a}.has(${i})) return INVALID;`), i;
          })(e, t, n, i);
          break;
        case "readonly": {
          let r = aX(e, t, n, i),
            a = aC(t);
          e.write(`const ${a} = Object.freeze(${r});`), (J = a);
          break;
        }
        case "success":
          aX(e, t, n, i), (J = "true");
          break;
        case "default":
        case "prefault":
          J = (function (e, t, n, i) {
            let r = n._zod.def,
              a = Object.getOwnPropertyDescriptor(n._zod.def, "defaultValue")
                ? () => n._zod.def.defaultValue
                : void 0;
            if ("prefault" === n._zod.def.type) {
              if (!a) return aW(e, t, r.innerType, i);
              let n = aO(t, a),
                o = aC(t);
              return (
                e.write(`let ${o} = ${i};`),
                e.write(`if (${i} === undefined) ${o} = ${n}();`),
                aW(e, t, r.innerType, o)
              );
            }
            let o = aC(t);
            if (a) {
              let n = aO(t, a),
                s = aO(t, Q);
              e.write(`let ${o};`),
                e.write(`if (${i} === undefined) {`),
                e.indented((e) => {
                  e.write(`${o} = ${s}(${n}());`);
                }),
                e.write("} else {"),
                e.indented((e) => {
                  let a = aW(e, t, r.innerType, i);
                  e.write(`${o} = ${a} === undefined ? ${s}(${n}()) : ${a};`);
                }),
                e.write("}");
            } else
              e.write(`let ${o};`),
                e.write(`if (${i} !== undefined) {`),
                e.indented((e) => {
                  let n = aW(e, t, r.innerType, i);
                  e.write(`${o} = ${n};`);
                }),
                e.write("}");
            return o;
          })(e, t, n, i);
          break;
        case "nonoptional":
          let X, ee;
          (x = e),
            (w = t),
            (k = n),
            (I = i),
            (X = aW(x, w, k._zod.def.innerType, I)),
            (ee = aC(w)),
            x.write(`const ${ee} = ${X};`),
            x.write(`if (${ee} === undefined) return INVALID;`),
            (J = ee);
          break;
        case "tuple":
          J = (function (e, t, n, i) {
            let r = n._zod.def,
              a = r.items,
              o = r.rest;
            e.write(`if (!Array.isArray(${i})) return INVALID;`);
            let s = aY(a, "optin"),
              u = aY(a, "optout");
            o
              ? e.write(`if (${i}.length < ${s}) return INVALID;`)
              : e.write(
                  `if (${i}.length < ${s} || ${i}.length > ${a.length}) return INVALID;`
                );
            let l = aC(t);
            e.write(`const ${l} = [];`);
            for (let n = 0; n < a.length; n++) {
              let r = a[n];
              if (n >= u)
                e.write(`if (${l}.length === ${n}) {`),
                  e.indented((e) => {
                    e.write(`if (${n} < ${i}.length) {`),
                      e.indented((e) => {
                        let a = aC(t);
                        e.write(`const ${a} = ${i}[${n}];`);
                        let o = aZ(e, t, r, a);
                        e.write(`${l}[${n}] = ${o};`);
                      }),
                      e.write("} else {"),
                      e.indented((e) => {
                        if (aK(r)) return void e.write(`${l}.length = ${n};`);
                        let i = aC(t),
                          a = aC(t);
                        e.write(`const ${i} = undefined;`),
                          e.write(`const ${a} = (() => {`),
                          e.indented((e) => {
                            let n = aZ(e, t, r, i);
                            e.write(`return ${n};`);
                          }),
                          e.write("})();"),
                          e.write(
                            `if (${a} === INVALID || ${a} === undefined) ${l}.length = ${n};`
                          ),
                          e.write(`else ${l}[${n}] = ${a};`);
                      }),
                      e.write("}");
                  }),
                  e.write("}");
              else {
                let a = aC(t);
                e.write(`const ${a} = ${i}[${n}];`);
                let o = aZ(e, t, r, a);
                e.write(`${l}[${n}] = ${o};`);
              }
            }
            if (o) {
              let n = aC(t),
                r = aC(t);
              e.write(
                `for (let ${n} = ${a.length}; ${n} < ${i}.length; ${n}++) {`
              ),
                e.indented((e) => {
                  e.write(`const ${r} = ${i}[${n}];`);
                  let a = aZ(e, t, o, r);
                  e.write(`${l}[${n}] = ${a};`);
                }),
                e.write("}");
            }
            return l;
          })(e, t, n, i);
          break;
        case "union":
          J = (function (e, t, n, i) {
            let r = n._zod.def,
              a = r.options;
            if (r.discriminator)
              return (function (e, t, n, i) {
                if (n.unionFallback)
                  throw new az("discriminated union with unionFallback");
                if (0 === n.options.length)
                  return e.write("return INVALID;"), i;
                let r = aC(t),
                  a = aC(t);
                e.write(`const ${r} = ${i}?.[${W(n.discriminator)}];`),
                  e.write(`let ${a};`);
                let o = !0,
                  s = new Set();
                for (let u of n.options) {
                  let l = u._zod.propValues?.[n.discriminator];
                  if (!l || 0 === l.size)
                    throw new az(
                      "discriminated union option without static discriminator values"
                    );
                  for (let e of l) {
                    if (s.has(e))
                      throw new az(
                        `duplicate discriminator value ${String(e)}`
                      );
                    s.add(e);
                  }
                  let d = Array.from(l, (e) =>
                      (function (e, t, n) {
                        if ("string" == typeof n) return `${t} === ${W(n)}`;
                        if ("number" == typeof n)
                          return Number.isNaN(n)
                            ? `Number.isNaN(${t})`
                            : `${t} === ${n}`;
                        if ("boolean" == typeof n) return `${t} === ${n}`;
                        if (null === n) return `${t} === null`;
                        if (void 0 === n) return `${t} === undefined`;
                        if ("bigint" == typeof n) return `${t} === ${n}n`;
                        if ("symbol" == typeof n) {
                          let i = aO(e, n);
                          return `${t} === ${i}`;
                        }
                        throw new az(
                          `literal discriminator value ${String(n)}`
                        );
                      })(t, r, e)
                    ),
                    c = o ? "if" : "else if";
                  e.write(`${c} (${d.join(" || ")}) {`),
                    e.indented((e) => {
                      let n = aW(e, t, u, i);
                      e.write(`${a} = ${n};`);
                    }),
                    e.write("}"),
                    (o = !1);
                }
                return e.write("else { return INVALID; }"), a;
              })(e, t, r, i);
            if (!1 === r.inclusive) throw new az("exclusive unions (z.xor)");
            if (0 === a.length) return e.write("return INVALID;"), i;
            if (1 === a.length) return aW(e, t, a[0], i);
            if (
              a.every(
                (e) =>
                  "literal" === e._zod.def.type && !e._zod.def.checks?.length
              )
            ) {
              let n = aO(t, new Set(a.flatMap((e) => e._zod.def.values)));
              return e.write(`if (!${n}.has(${i})) return INVALID;`), i;
            }
            let o = aC(t);
            e.write(`let ${o};`);
            for (let n = 0; n < a.length; n++) {
              let r = a[n];
              0 === n
                ? e.write(`${o} = (() => {`)
                : e.write(`if (${o} === INVALID) ${o} = (() => {`),
                e.indented((e) => {
                  let n = aW(e, t, r, i);
                  e.write(`return ${n};`);
                }),
                e.write("})();");
            }
            return e.write(`if (${o} === INVALID) return INVALID;`), o;
          })(e, t, n, i);
          break;
        case "intersection":
          let et, en, ei, er, ea;
          (S = e),
            (j = t),
            (N = n),
            (z = i),
            (et = N._zod.def),
            (j.definite = !1),
            (en = aZ(S, j, et.left, z)),
            (ei = aZ(S, j, et.right, z)),
            (er = aO(j, ry)),
            (ea = aC(j)),
            S.write(`const ${ea} = ${er}(${en}, ${ei});`),
            S.write(`if (!${ea}.valid) return INVALID;`),
            (J = `${ea}.data`);
          break;
        case "record":
          J = (function (e, t, n, i) {
            let r = n._zod.def,
              a = aO(t, Y);
            e.write(`if (!${a}(${i})) return INVALID;`);
            let o = aC(t),
              s = aC(t),
              u = aC(t);
            e.write(`const ${o} = {};`);
            let l = r.partial ? void 0 : r.keyType._zod.values;
            if (l) {
              let n = [];
              for (let a of l) {
                var d, c;
                if (
                  "string" != typeof a &&
                  "number" != typeof a &&
                  "symbol" != typeof a
                )
                  throw new az(`record key value ${String(a)}`);
                let s = "number" == typeof a ? a.toString() : a;
                if ("__proto__" === s) throw new az('record key "__proto__"');
                n.push(s);
                let u = aO(t, a),
                  l = aW(e, t, r.keyType, u),
                  m = aC(t);
                e.write(
                  `const ${m} = ${i}[${
                    ((d = t), "string" == typeof (c = s) ? W(c) : aO(d, c))
                  }];`
                );
                let f = aZ(e, t, r.valueType, m);
                e.write(`${o}[${l}] = ${f};`);
              }
              let a = aO(t, new Set(n));
              return (
                e.write(`for (const ${s} in ${i}) {`),
                e.indented((e) => {
                  e.write(`if (${a}.has(${s})) continue;`),
                    "loose" === r.mode
                      ? e.write(
                          `if (${s} !== "__proto__") ${o}[${s}] = ${i}[${s}];`
                        )
                      : e.write("return INVALID;");
                }),
                e.write("}"),
                o
              );
            }
            let m = r.keyType._zod.def;
            if (
              !(
                "string" === m.type &&
                void 0 === m.format &&
                !m.coerce &&
                (m.checks?.length ?? 0) === 0
              )
            ) {
              let n = "loose" === r.mode,
                a = aU(r.keyType);
              !1 === a.definite && (t.definite = !1);
              let u = aO(t, a),
                l = aO(t, nf),
                d = aC(t);
              return (
                aQ(e, t, i, s, (e) => {
                  e.write(`let ${d} = ${u}(${s});`),
                    e.write(
                      `if (${d} === INVALID && typeof ${s} === "string" && ${l}.test(${s})) ${d} = ${u}(Number(${s}));`
                    ),
                    n
                      ? e.write(
                          `if (${d} === INVALID) { ${o}[${s}] = ${i}[${s}]; continue; }`
                        )
                      : e.write(`if (${d} === INVALID) return INVALID;`),
                    e.write(`if (${d} === "__proto__") continue;`);
                  let a = aC(t);
                  e.write(`const ${a} = ${i}[${s}];`);
                  let c = aZ(e, t, r.valueType, a);
                  e.write(`${o}[${d}] = ${c};`);
                }),
                o
              );
            }
            return (
              aQ(
                e,
                t,
                i,
                s,
                (e) => {
                  e.write(`const ${u} = ${i}[${s}];`);
                  let n = aZ(e, t, r.valueType, u);
                  e.write(`${o}[${s}] = ${n};`);
                },
                "return INVALID;"
              ),
              o
            );
          })(e, t, n, i);
          break;
        case "map":
          let eo, es, eu, el;
          (D = e),
            (A = t),
            (O = n),
            (P = i),
            (eo = O._zod.def),
            D.write(`if (!(${P} instanceof Map)) return INVALID;`),
            aH(D, O, `${P}.size`),
            (es = aC(A)),
            (eu = aC(A)),
            (el = aC(A)),
            D.write(`const ${es} = new Map();`),
            D.write(`for (const [${eu}, ${el}] of ${P}) {`),
            D.indented((e) => {
              let t = aW(e, A, eo.keyType, eu),
                n = aW(e, A, eo.valueType, el);
              e.write(`${es}.set(${t}, ${n});`);
            }),
            D.write("}"),
            (J = es);
          break;
        case "set":
          let ed, ec, em;
          (C = e),
            (E = t),
            (Z = n),
            (T = i),
            (ed = Z._zod.def),
            C.write(`if (!(${T} instanceof Set)) return INVALID;`),
            aH(C, Z, `${T}.size`),
            (ec = aC(E)),
            (em = aC(E)),
            C.write(`const ${ec} = new Set();`),
            C.write(`for (const ${em} of ${T}) {`),
            C.indented((e) => {
              let t = aW(e, E, ed.valueType, em);
              e.write(`${ec}.add(${t});`);
            }),
            C.write("}"),
            (J = ec);
          break;
        case "file":
          (L = e),
            (q = i),
            L.write(`if (!(${q} instanceof File)) return INVALID;`),
            (J = q);
          break;
        case "template_literal":
          J = (function (e, t, n, i) {
            e.write(`if (typeof ${i} !== "string") return INVALID;`);
            let r = n._zod.pattern;
            if (r) {
              let n = aO(t, r);
              e.write(`${n}.lastIndex = 0;`),
                e.write(`if (!${n}.test(${i})) return INVALID;`);
            }
            return i;
          })(e, t, n, i);
          break;
        case "lazy":
          let ef, ep, eh;
          (R = e),
            (F = t),
            (M = n),
            (B = i),
            (ef = aP(F, M._zod.def.getter)),
            (ep = aO(F, { parser: null })),
            R.write(`if (!${ep}.parser) {`),
            R.indented((e) => {
              e.write(`const inner = ${ef}();`),
                e.write(`${ep}.parser = function(input) {`),
                e.indented((e) => {
                  e.write(
                    "const result = inner._zod.run({ value: input, issues: [] }, {});"
                  ),
                    e.write(
                      "return result.issues.length === 0 ? result.value : INVALID;"
                    );
                }),
                e.write("};");
            }),
            R.write("}"),
            (eh = aC(F)),
            R.write(`const ${eh} = ${ep}.parser(${B});`),
            R.write(`if (${eh} === INVALID) return INVALID;`),
            (J = eh);
          break;
        case "pipe":
          J = (function (e, t, n, i) {
            let r = n._zod.def,
              a = aW(e, t, r.in, i);
            if (!r.transform) return aW(e, t, r.out, a);
            {
              if (a0(r.transform))
                throw new aN(
                  "z.compile: async transforms in pipes are not supported"
                );
              let n = r.transform,
                i = aP(t, (e) => {
                  let t = { value: e, issues: [], addIssue: aB },
                    i = n(e, t);
                  return i instanceof Promise
                    ? aS
                    : 0 === t.issues.length
                    ? i
                    : aS;
                }),
                o = aC(t);
              return (
                e.write(`const ${o} = ${i}(${a});`),
                e.write(`if (${o} === INVALID) return INVALID;`),
                aW(e, t, r.out, o)
              );
            }
          })(e, t, n, i);
          break;
        case "custom":
          J = (function (e, t, n, i) {
            let r = n._zod.def;
            if (r.fn) {
              if (a0(r.fn))
                throw new aN(
                  "z.compile: async custom predicates are not supported"
                );
              let n = aP(t, r.fn),
                a = aO(t, aM),
                o = aC(t);
              e.write(`const ${o} = ${n}(${i});`),
                e.write(`if (${o} instanceof Promise) ${a}();`),
                e.write(`if (!${o}) return INVALID;`);
            } else throw new az("custom schema without a predicate function");
            return i;
          })(e, t, n, i);
          break;
        case "transform":
          J = (function (e, t, n, i) {
            let r = n._zod.def;
            if (r.transform) {
              if (a0(r.transform))
                throw new aN("z.compile: async transforms are not supported");
              let n = r.transform,
                a = aP(t, (e) => {
                  let t = { value: e, issues: [], addIssue: aB },
                    i = n(e, t);
                  return i instanceof Promise
                    ? aS
                    : 0 === t.issues.length
                    ? i
                    : aS;
                }),
                o = aC(t);
              return (
                e.write(`const ${o} = ${a}(${i});`),
                e.write(`if (${o} === INVALID) return INVALID;`),
                o
              );
            }
            return i;
          })(e, t, n, i);
          break;
        case "catch":
          J = (function (e, t, n, i) {
            let r = n._zod.def;
            if (!r.catchValue[eH])
              throw new az(
                "catch with a callback (only a constant catch value compiles)",
                !1
              );
            let a = aC(t);
            e.write(`let ${a} = (() => {`),
              e.indented((e) => {
                let n = aZ(e, t, r.innerType, i);
                e.write(`return ${n};`);
              }),
              e.write("})();");
            let o = aO(t, r.innerType),
              s = aP(t, r.catchValue),
              u = aO(t, a1);
            return (
              e.write(`if (${a} === INVALID) {`),
              e.indented((e) => {
                e.write(`${a} = ${u}(${o}, ${s}, ${i});`),
                  e.write(`if (${a} === INVALID) return INVALID;`);
              }),
              e.write("}"),
              a
            );
          })(e, t, n, i);
          break;
        default:
          throw new az(`schema type ${K}`);
      }
      return null === J
        ? null
        : (function (e, t, n, i) {
            let r = n._zod.def.checks;
            if (!r || 0 === r.length) return i;
            let a = i;
            for (let n of r) {
              let i = n._zod.def;
              if (i.when && !aT.has(i.check))
                throw new az('check with a custom "when" condition');
              switch (i.check) {
                case "greater_than":
                  !(function (e, t, n, i) {
                    let r = n.inclusive ? "<" : "<=";
                    e.write(`if (${i} ${r} ${aR(t, n.value)}) return INVALID;`);
                  })(e, t, i, a);
                  break;
                case "less_than":
                  !(function (e, t, n, i) {
                    let r = n.inclusive ? ">" : ">=";
                    e.write(`if (${i} ${r} ${aR(t, n.value)}) return INVALID;`);
                  })(e, t, i, a);
                  break;
                case "multiple_of":
                  !(function (e, t, n, i) {
                    if ("bigint" == typeof n.value) {
                      if (n.value === BigInt(0))
                        throw new az("multiple_of check with a zero divisor");
                      e.write(`if (${i} % ${n.value}n !== 0n) return INVALID;`);
                    } else {
                      let r = aO(t, U);
                      e.write(
                        `if (${r}(${i}, ${aq(
                          n.value,
                          "multiple_of"
                        )}) !== 0) return INVALID;`
                      );
                    }
                  })(e, t, i, a);
                  break;
                case "number_format":
                  aF(e, i, a);
                  break;
                case "min_length": {
                  let n = aq(i.minimum, "min_length"),
                    r = aL(
                      e,
                      t,
                      a,
                      `${a}.length >= ${n} && ${a}.length < ${2 * i.minimum}`
                    );
                  e.write(`if (${r} < ${n}) return INVALID;`);
                  break;
                }
                case "max_length": {
                  let n = aq(i.maximum, "max_length"),
                    r = aL(e, t, a, `${a}.length > ${n}`);
                  e.write(`if (${r} > ${n}) return INVALID;`);
                  break;
                }
                case "length_equals": {
                  let n = aq(i.length, "length_equals"),
                    r = aL(
                      e,
                      t,
                      a,
                      `${a}.length >= ${n} && ${a}.length <= ${2 * i.length}`
                    );
                  e.write(`if (${r} !== ${n}) return INVALID;`);
                  break;
                }
                case "min_size":
                  e.write(
                    `if (${a}.size < ${aq(
                      i.minimum,
                      "min_size"
                    )}) return INVALID;`
                  );
                  break;
                case "max_size":
                  e.write(
                    `if (${a}.size > ${aq(
                      i.maximum,
                      "max_size"
                    )}) return INVALID;`
                  );
                  break;
                case "size_equals":
                  e.write(
                    `if (${a}.size !== ${aq(
                      i.size,
                      "size_equals"
                    )}) return INVALID;`
                  );
                  break;
                case "string_format":
                  a = aV(e, t, i, a);
                  break;
                case "custom":
                  a = (function (e, t, n, i) {
                    let r = n._zod.def;
                    if (r.fn) {
                      if (a0(r.fn))
                        throw new aN(
                          "z.compile: async .refine() predicates are not supported"
                        );
                      let n = aP(t, r.fn),
                        a = aO(t, aM),
                        o = aC(t);
                      return (
                        e.write(`const ${o} = ${n}(${i});`),
                        e.write(`if (${o} instanceof Promise) ${a}();`),
                        e.write(`if (!${o}) return INVALID;`),
                        i
                      );
                    }
                    if (n._zod.check) {
                      if (a0(n._zod.check))
                        throw new aN(
                          "z.compile: async .superRefine() / check functions are not supported"
                        );
                      let r = n._zod.check,
                        a = aP(t, (e) => {
                          let t = { value: e, issues: [], addIssue: aB };
                          return (
                            r(t) instanceof Promise && aM(),
                            0 === t.issues.length ? t.value : aS
                          );
                        }),
                        o = aC(t);
                      return (
                        e.write(`const ${o} = ${a}(${i});`),
                        e.write(`if (${o} === INVALID) return INVALID;`),
                        o
                      );
                    }
                    throw new az(
                      "custom check without a predicate or check function"
                    );
                  })(e, t, n, a);
                  break;
                case "bigint_format":
                  !(function (e, t, n) {
                    let i = t.format;
                    if (i)
                      switch (i) {
                        case "int64":
                          e.write(
                            `if (${n} < -9223372036854775808n || ${n} > 9223372036854775807n) return INVALID;`
                          );
                          break;
                        case "uint64":
                          e.write(
                            `if (${n} < 0n || ${n} > 18446744073709551615n) return INVALID;`
                          );
                          break;
                        default:
                          throw new az(`bigint format ${i}`);
                      }
                  })(e, i, a);
                  break;
                case "mime_type":
                  !(function (e, t, n, i) {
                    let r = n.mime;
                    if (r && r.length > 0) {
                      let n = aO(t, new Set(r));
                      e.write(`if (!${n}.has(${i}.type)) return INVALID;`);
                    }
                  })(e, t, i, a);
                  break;
                case "property":
                  !(function (e, t, n, i) {
                    let r = `${i}[${JSON.stringify(n.property)}]`;
                    aW(e, t, n.schema, r);
                  })(e, t, i, a);
                  break;
                case "properties":
                  !(function (e, t, n, i) {
                    if (n.when)
                      throw new az('check with a custom "when" condition');
                    e.write(`if (${i} == null) return INVALID;`);
                    let r = n.shape;
                    for (let n of Reflect.ownKeys(r)) {
                      let a = "symbol" == typeof n ? aO(t, n) : W(n),
                        o = aC(t);
                      e.write(`const ${o} = ${i}[${a}];`),
                        aZ(e, t, r[n], o, !1);
                    }
                  })(e, t, i, a);
                  break;
                case "overwrite": {
                  let i = aC(t);
                  (function (e, t, n, i, r) {
                    let a = n._zod.def.tx;
                    if (!a)
                      throw new az(
                        "overwrite check without a transform function"
                      );
                    if (a0(a))
                      throw new aN(
                        "z.compile: async overwrite transforms are not supported"
                      );
                    let o = aO(t, a);
                    e.write(`const ${r} = ${o}(${i});`);
                  })(e, t, n, a, i),
                    (a = i);
                  break;
                }
                default:
                  throw new az(`check type ${i.check}`);
              }
            }
            return a;
          })(e, t, n, J);
    }
    function aK(e) {
      return "optional" === e._zod.optin && "optional" === e._zod.optout;
    }
    function aG(e) {
      return (
        ("defaulted" !== e._zod.optin || "optional" === e._zod.optout) &&
        (function e(t) {
          let n = t._zod.def;
          switch (n.type) {
            case "string":
            case "number":
            case "boolean":
            case "bigint":
            case "symbol":
            case "null":
            case "nan":
            case "date":
            case "object":
            case "array":
            case "tuple":
            case "record":
            case "map":
            case "set":
            case "file":
            case "template_literal":
            case "never":
            case "success":
              return !1;
            case "literal":
              return !!n.values?.includes(void 0);
            case "enum":
              return !!t._zod.values?.has(void 0);
            case "optional":
            default:
              return !0;
            case "nullable":
            case "readonly":
            case "nonoptional":
              return !n.innerType || e(n.innerType);
            case "union":
              return !n.options || n.options.some(e);
            case "intersection":
              return !n.left || !n.right || e(n.left) || e(n.right);
            case "pipe":
              return !n.out || e(n.out);
          }
        })(e)
      );
    }
    function aH(e, t, n) {
      for (let [i, r] of eI(t._zod.def.checks))
        e.write(`if (${n} > ${aq(i, r._zod.def.check)}) return INVALID;`);
    }
    function aX(e, t, n, i) {
      return aW(e, t, n._zod.def.innerType, i);
    }
    function aY(e, t) {
      for (let n = e.length - 1; n >= 0; n--)
        if (
          !("optin" === t
            ? void 0 !== e[n]._zod.optin
            : "optional" === e[n]._zod.optout)
        )
          return n + 1;
      return 0;
    }
    function aQ(e, t, n, i, r, a) {
      let o = aO(t, Object.prototype.propertyIsEnumerable),
        s = aC(t),
        u = aC(t),
        l = aC(t);
      e.write(`const ${s} = Object.getOwnPropertySymbols(${n});`),
        e.write(`const ${u} = Object.getOwnPropertyNames(${n});`),
        e.write(`for (let ${l} = 0; ${l} < ${u}.length; ${l}++) {`),
        e.indented((e) => {
          e.write(`const ${i} = ${u}[${l}];`),
            e.write(
              `if (${i} === "__proto__" || !${o}.call(${n}, ${i})) continue;`
            ),
            r(e);
        }),
        e.write("}"),
        e.write(`for (let ${l} = 0; ${l} < ${s}.length; ${l}++) {`),
        e.indented((e) => {
          e.write(`const ${i} = ${s}[${l}];`),
            e.write(`if (!${o}.call(${n}, ${i})) continue;`),
            a ? e.write(a) : r(e);
        }),
        e.write("}");
    }
    function a0(e) {
      return (
        "function" == typeof e &&
        ("AsyncFunction" === e.constructor.name ||
          "AsyncFunction" === e[Symbol.toStringTag])
      );
    }
    function a1(e, t, n) {
      let i = e._zod.run({ value: n, issues: [] }, {});
      return i && "function" == typeof i.then
        ? aS
        : 0 === i.issues.length
        ? i.value
        : t();
    }
    function a4(e) {
      return e.checks && (e.checks = [...e.checks]), e;
    }
    function a6(e, t) {
      return new e(a4({ type: "string", ...eo(t) }));
    }
    function a2(e, t) {
      return new e(a4({ type: "string", coerce: !0, ...eo(t) }));
    }
    function a9(e, t) {
      return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function a3(e, t) {
      return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function a5(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function a8(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...eo(t),
      });
    }
    function a7(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...eo(t),
      });
    }
    function oe(e, t) {
      return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...eo(t),
      });
    }
    function ot(e, t) {
      return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function on(e, t) {
      return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function oi(e, t) {
      return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function or(e, t) {
      return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function oa(e, t) {
      return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function oo(e, t) {
      return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function os(e, t) {
      return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function ou(e, t) {
      return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function ol(e, t) {
      return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function od(e, t) {
      return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function oc(e, t) {
      return new e({
        type: "string",
        format: "mac",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function om(e, t) {
      return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function of(e, t) {
      return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function op(e, t) {
      return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function oh(e, t) {
      return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function ov(e, t) {
      return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function og(e, t) {
      return new e({
        type: "string",
        format: "credit_card",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function o$(e, t) {
      return new e({
        type: "string",
        format: "iban",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    function oy(e, t) {
      return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...eo(t),
      });
    }
    e.s(
      [
        "INVALID",
        0,
        aS,
        "ZodCompileAsyncError",
        0,
        aN,
        "ZodCompileUnsupportedError",
        0,
        az,
        "compile",
        0,
        aD,
        "compileFn",
        0,
        aU,
        "withParser",
        0,
        aA,
      ],
      393989
    ),
      e.i(393989);
    let ob = {
      Any: null,
      Minute: -1,
      Second: 0,
      Millisecond: 3,
      Microsecond: 6,
    };
    function o_(e, t) {
      return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...eo(t),
      });
    }
    function ox(e, t) {
      return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...eo(t),
      });
    }
    function ow(e, t) {
      return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...eo(t),
      });
    }
    function ok(e, t) {
      return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...eo(t),
      });
    }
    function oI(e, t) {
      return new e(a4({ type: "number", checks: [], ...eo(t) }));
    }
    function oS(e, t) {
      return new e(a4({ type: "number", coerce: !0, checks: [], ...eo(t) }));
    }
    function oj(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...eo(t),
      });
    }
    function oN(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "float32",
        ...eo(t),
      });
    }
    function oz(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "float64",
        ...eo(t),
      });
    }
    function oD(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "int32",
        ...eo(t),
      });
    }
    function oA(e, t) {
      return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "uint32",
        ...eo(t),
      });
    }
    function oU(e, t) {
      return new e({ type: "boolean", ...eo(t) });
    }
    function oO(e, t) {
      return new e({ type: "boolean", coerce: !0, ...eo(t) });
    }
    function oP(e, t) {
      return new e({ type: "bigint", ...eo(t) });
    }
    function oC(e, t) {
      return new e({ type: "bigint", coerce: !0, ...eo(t) });
    }
    function oE(e, t) {
      return new e({
        type: "bigint",
        check: "bigint_format",
        abort: !1,
        format: "int64",
        ...eo(t),
      });
    }
    function oZ(e, t) {
      return new e({
        type: "bigint",
        check: "bigint_format",
        abort: !1,
        format: "uint64",
        ...eo(t),
      });
    }
    function oT(e, t) {
      return new e({ type: "symbol", ...eo(t) });
    }
    function oL(e, t) {
      return new e({ type: "undefined", ...eo(t) });
    }
    function oq(e, t) {
      return new e({ type: "null", ...eo(t) });
    }
    function oR(e) {
      return new e({ type: "any" });
    }
    function oF(e) {
      return new e({ type: "unknown" });
    }
    function oM(e, t) {
      return new e({ type: "never", ...eo(t) });
    }
    function oB(e, t) {
      return new e({ type: "void", ...eo(t) });
    }
    function oJ(e, t) {
      return new e({ type: "date", ...eo(t) });
    }
    function oV(e, t) {
      return new e({ type: "date", coerce: !0, ...eo(t) });
    }
    function oW(e, t) {
      return new e({ type: "nan", ...eo(t) });
    }
    function oK(e, t) {
      return new nE({ check: "less_than", ...eo(t), value: e, inclusive: !1 });
    }
    function oG(e, t) {
      return new nE({ check: "less_than", ...eo(t), value: e, inclusive: !0 });
    }
    function oH(e, t) {
      return new nZ({
        check: "greater_than",
        ...eo(t),
        value: e,
        inclusive: !1,
      });
    }
    function oX(e, t) {
      return new nZ({
        check: "greater_than",
        ...eo(t),
        value: e,
        inclusive: !0,
      });
    }
    function oY(e) {
      return oH(0, e);
    }
    function oQ(e) {
      return oK(0, e);
    }
    function o0(e) {
      return oG(0, e);
    }
    function o1(e) {
      return oX(0, e);
    }
    function o4(e, t) {
      return new nT({ check: "multiple_of", ...eo(t), value: e });
    }
    function o6(e, t) {
      return new nR({ check: "max_size", ...eo(t), maximum: e });
    }
    function o2(e, t) {
      return new nF({ check: "min_size", ...eo(t), minimum: e });
    }
    function o9(e, t) {
      return new nM({ check: "size_equals", ...eo(t), size: e });
    }
    function o3(e, t) {
      return new nB({ check: "max_length", ...eo(t), maximum: e });
    }
    function o5(e, t) {
      return new nJ({ check: "min_length", ...eo(t), minimum: e });
    }
    function o8(e, t) {
      return new nV({ check: "length_equals", ...eo(t), length: e });
    }
    function o7(e, t) {
      return new nK({
        check: "string_format",
        format: "regex",
        ...eo(t),
        pattern: e,
      });
    }
    function se(e) {
      return new nG({ check: "string_format", format: "lowercase", ...eo(e) });
    }
    function st(e) {
      return new nH({ check: "string_format", format: "uppercase", ...eo(e) });
    }
    function sn(e, t) {
      return new nX({
        check: "string_format",
        format: "includes",
        ...eo(t),
        includes: e,
      });
    }
    function si(e, t) {
      return new nY({
        check: "string_format",
        format: "starts_with",
        ...eo(t),
        prefix: e,
      });
    }
    function sr(e, t) {
      return new nQ({
        check: "string_format",
        format: "ends_with",
        ...eo(t),
        suffix: e,
      });
    }
    function sa(e, t, n) {
      return new n1({ check: "property", property: e, schema: t, ...eo(n) });
    }
    function so(e, t) {
      return new n4({ check: "properties", shape: e, ...eo(t) });
    }
    function ss(e, t) {
      return new n6({ check: "mime_type", mime: e, ...eo(t) });
    }
    function su(e) {
      return new n2({ check: "overwrite", tx: e });
    }
    function sl(e) {
      return su((t) => t.normalize(e));
    }
    function sd() {
      return su((e) => e.trim());
    }
    function sc() {
      return su((e) => e.toLowerCase());
    }
    function sm() {
      return su((e) => e.toUpperCase());
    }
    function sf() {
      return su((e) => K(e));
    }
    function sp(e, t, n) {
      return new e({ type: "array", element: t, ...eo(n) });
    }
    function sh(e, t, n) {
      return new e({ type: "union", options: t, ...eo(n) });
    }
    function sv(e, t, n) {
      return new e({ type: "union", options: t, inclusive: !1, ...eo(n) });
    }
    function sg(e, t, n, i) {
      return new e({ type: "union", options: n, discriminator: t, ...eo(i) });
    }
    function s$(e, t, n) {
      return new e({ type: "intersection", left: t, right: n });
    }
    function sy(e, t, n, i) {
      let r = n instanceof n5,
        a = r ? i : n;
      return new e({ type: "tuple", items: t, rest: r ? n : null, ...eo(a) });
    }
    function sb(e, t, n, i) {
      return new e({ type: "record", keyType: t, valueType: n, ...eo(i) });
    }
    function s_(e, t, n, i) {
      return new e({ type: "map", keyType: t, valueType: n, ...eo(i) });
    }
    function sx(e, t, n) {
      return new e({ type: "set", valueType: t, ...eo(n) });
    }
    function sw(e, t, n) {
      return new e({
        type: "enum",
        entries: Array.isArray(t)
          ? Object.fromEntries(t.map((e) => [e, e]))
          : t,
        ...eo(n),
      });
    }
    function sk(e, t, n) {
      return new e({ type: "enum", entries: t, ...eo(n) });
    }
    function sI(e, t, n) {
      return new e({
        type: "literal",
        values: Array.isArray(t) ? t : [t],
        ...eo(n),
      });
    }
    function sS(e, t) {
      return new e({ type: "file", ...eo(t) });
    }
    function sj(e, t) {
      return new e({ type: "transform", transform: t });
    }
    function sN(e, t) {
      return new e({ type: "optional", innerType: t });
    }
    function sz(e, t) {
      return new e({ type: "nullable", innerType: t });
    }
    function sD(e, t, n) {
      return new e({
        type: "default",
        innerType: t,
        get defaultValue() {
          return "function" == typeof n ? n() : Q(n);
        },
      });
    }
    function sA(e, t, n) {
      return new e({ type: "nonoptional", innerType: t, ...eo(n) });
    }
    function sU(e, t) {
      return new e({ type: "success", innerType: t });
    }
    function sO(e, t, n) {
      return new e({
        type: "catch",
        innerType: t,
        catchValue: "function" == typeof n ? n : eX(n),
      });
    }
    function sP(e, t, n) {
      return new e({ type: "pipe", in: t, out: n });
    }
    function sC(e, t) {
      return new e({ type: "readonly", innerType: t });
    }
    function sE(e, t, n) {
      return new e({ type: "template_literal", parts: t, ...eo(n) });
    }
    function sZ(e, t) {
      return new e({ type: "lazy", getter: t });
    }
    function sT(e, t) {
      return new e({ type: "promise", innerType: t });
    }
    function sL(e, t, n) {
      let i = eo(n);
      return (
        i.abort ?? (i.abort = !0),
        new e({ type: "custom", check: "custom", fn: t, ...i })
      );
    }
    function sq(e, t, n) {
      return new e({ type: "custom", check: "custom", fn: t, ...eo(n) });
    }
    function sR(e, t) {
      let n = sF(
        (t) => (
          (t.addIssue = (e) => {
            "string" == typeof e
              ? t.issues.push(eO(e, t.value, n._zod.def))
              : (e.fatal && (e.continue = !1),
                e.code ?? (e.code = "custom"),
                "input" in e || (e.input = t.value),
                e.inst ?? (e.inst = n),
                e.continue ?? (e.continue = !n._zod.def.abort),
                t.issues.push(eO(e)));
          }),
          e(t.value, t)
        ),
        t
      );
      return n;
    }
    function sF(e, t) {
      let n = new nU({ check: "custom", ...eo(t) });
      return (n._zod.check = e), n;
    }
    function sM(e) {
      let t = new nU({ check: "describe" });
      return (
        (t._zod.onattach = [
          (t) => {
            let n = aI.get(t) ?? {};
            aI.add(t, { ...n, description: e });
          },
        ]),
        (t._zod.check = () => {}),
        t
      );
    }
    function sB(e) {
      let t = new nU({ check: "meta" });
      return (
        (t._zod.onattach = [
          (t) => {
            let n = aI.get(t) ?? {};
            aI.add(t, { ...n, ...e });
          },
        ]),
        (t._zod.check = () => {}),
        t
      );
    }
    function sJ(e, t) {
      let n = eo(t),
        i = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
        r = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      "sensitive" !== n.case &&
        ((i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
        (r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
      let a = new Set(i),
        o = new Set(r),
        s = e.Codec ?? rG,
        u = e.Boolean ?? iY,
        l = new s({
          type: "pipe",
          in: new (e.String ?? it)({ type: "string", error: n.error }),
          out: new u({ type: "boolean", error: n.error }),
          transform: (e, t) => {
            let i = e;
            return (
              "sensitive" !== n.case && (i = i.toLowerCase()),
              !!a.has(i) ||
                (!o.has(i) &&
                  (t.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...a, ...o],
                    input: t.value,
                    inst: l,
                    continue: !1,
                  }),
                  {}))
            );
          },
          reverseTransform: (e, t) =>
            !0 === e ? i[0] || "true" : r[0] || "false",
          error: n.error,
        });
      return (
        (l._zod.bag.truthy = i),
        (l._zod.bag.falsy = r),
        (l._zod.bag.case = n.case ?? "insensitive"),
        l
      );
    }
    function sV(e, t, n, i = {}) {
      let r = {
        check: "string_format",
        type: "string",
        format: t,
        fn: "function" == typeof n ? n : (e) => n.test(e),
        ...eo(i),
      };
      return n instanceof RegExp && (r.pattern = n), new e(r);
    }
    function sW(e, ...t) {
      for (let n of t)
        for (let t of Reflect.ownKeys(n))
          Object.prototype.propertyIsEnumerable.call(n, t) && E(e, t, n[t]);
      return e;
    }
    function sK(e) {
      let t = e?.target ?? "draft-2020-12";
      return (
        "draft-4" === t && (t = "draft-04"),
        "draft-7" === t && (t = "draft-07"),
        {
          processors: e.processors ?? {},
          metadataRegistry: e?.metadata ?? aI,
          target: t,
          unrepresentable: e?.unrepresentable ?? "throw",
          override: e?.override ?? (() => {}),
          io: e?.io ?? "output",
          counter: 0,
          seen: new Map(),
          sharedDefsExtractedFor: void 0,
          sharedEmitDoneFor: void 0,
          cycles: e?.cycles ?? "ref",
          reused: e?.reused ?? "inline",
          intersections: [],
          deferred: [],
          external: e?.external ?? void 0,
        }
      );
    }
    function sG(e, t, n, i, r) {
      let a =
        "function" == typeof t.unrepresentable
          ? t.unrepresentable({ zodSchema: e, path: i.path, message: r })
          : t.unrepresentable;
      if ("any" === a) return !1;
      if (void 0 === a || "throw" === a) throw Error(r);
      return Object.assign(n, a), !0;
    }
    function sH(e, t, n = { path: [], schemaPath: [] }) {
      var i;
      let r = e._zod.def,
        a = t.seen.get(e);
      if (a)
        return (
          a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema
        );
      let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
      t.seen.set(e, o),
        (t.sharedDefsExtractedFor = void 0),
        (t.sharedEmitDoneFor = void 0);
      let s = e._zod.toJSONSchema?.();
      if (s) o.schema = s;
      else {
        let i = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, i);
        else {
          let n = o.schema,
            a = t.processors[r.type];
          if (!a)
            throw Error(
              `[toJSONSchema]: Non-representable type encountered: ${r.type}`
            );
          a(e, t, n, i);
        }
        let a = e._zod.parent;
        a && (o.ref || (o.ref = a), sH(a, t, i), (t.seen.get(a).isParent = !0));
      }
      let u = t.metadataRegistry.get(e);
      return (
        u && sW(o.schema, u),
        "input" === t.io &&
          (function e(t, n) {
            let i = n ?? { seen: new Set() };
            if (i.seen.has(t)) return !1;
            i.seen.add(t);
            let r = t._zod.def;
            if ("transform" === r.type) return !0;
            if ("array" === r.type) return e(r.element, i);
            if ("set" === r.type) return e(r.valueType, i);
            if ("lazy" === r.type) return e(r.getter(), i);
            if (
              "promise" === r.type ||
              "optional" === r.type ||
              "nonoptional" === r.type ||
              "nullable" === r.type ||
              "readonly" === r.type ||
              "default" === r.type ||
              "prefault" === r.type ||
              "catch" === r.type
            )
              return e(r.innerType, i);
            if ("intersection" === r.type) return e(r.left, i) || e(r.right, i);
            if ("record" === r.type || "map" === r.type)
              return e(r.keyType, i) || e(r.valueType, i);
            if ("pipe" === r.type)
              return (
                !!t._zod.traits.has("$ZodCodec") || e(r.in, i) || e(r.out, i)
              );
            if ("object" === r.type) {
              for (let t in r.shape) if (e(r.shape[t], i)) return !0;
              return !1;
            }
            if ("union" === r.type) {
              for (let t of r.options) if (e(t, i)) return !0;
              return !1;
            }
            if ("tuple" === r.type) {
              for (let t of r.items) if (e(t, i)) return !0;
              if (r.rest && e(r.rest, i)) return !0;
            }
            return !1;
          })(e) &&
          (delete o.schema.examples, delete o.schema.default),
        "input" === t.io &&
          "_prefault" in o.schema &&
          ((i = o.schema).default ?? (i.default = o.schema._prefault)),
        delete o.schema._prefault,
        t.seen.get(e).schema
      );
    }
    function sX(e) {
      return e.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function sY(e, t) {
      let n = e.seen.get(t);
      if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
      if (e.external && e.sharedDefsExtractedFor === e.external) return;
      let i = new Map();
      for (let t of e.seen.entries()) {
        let n = e.metadataRegistry.get(t[0])?.id;
        if (n) {
          let e = i.get(n);
          if (e && e !== t[0])
            throw Error(
              `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
            );
          i.set(n, t[0]);
        }
      }
      let r = (t) => {
        if (t[1].schema.$ref) return;
        let i = t[1],
          { ref: r, defId: a } = ((t) => {
            let i = "draft-2020-12" === e.target ? "$defs" : "definitions";
            if (e.external) {
              let n = e.external.registry.get(t[0])?.id,
                r = e.external.uri ?? ((e) => e);
              if (n) return { ref: r(n) };
              let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
              return (
                (t[1].defId = a),
                { defId: a, ref: `${r("__shared")}#/${i}/${sX(a)}` }
              );
            }
            let r = `#/${i}/`;
            if (t[1] === n && !t[1].schema.id) return { ref: "#" };
            let a = t[1].schema.id ?? `__schema${e.counter++}`;
            return { defId: a, ref: r + sX(a) };
          })(t);
        (i.def = { ...i.schema }), a && (i.defId = a);
        let o = i.schema;
        for (let e in o) delete o[e];
        o.$ref = r;
      };
      if ("throw" === e.cycles)
        for (let t of e.seen.entries()) {
          let e = t[1];
          if (e.cycle)
            throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      for (let n of e.seen.entries()) {
        let i = n[1];
        if (t === n[0]) {
          r(n);
          continue;
        }
        if (e.external) {
          let i = e.external.registry.get(n[0])?.id;
          if (t !== n[0] && i) {
            r(n);
            continue;
          }
        }
        if (e.metadataRegistry.get(n[0])?.id || i.cycle) {
          r(n);
          continue;
        }
        i.count > 1 && "ref" === e.reused && r(n);
      }
      e.external && (e.sharedDefsExtractedFor = e.external);
    }
    e.s(
      [
        "TimePrecision",
        0,
        ob,
        "_any",
        0,
        oR,
        "_array",
        0,
        sp,
        "_base64",
        0,
        op,
        "_base64url",
        0,
        oh,
        "_bigint",
        0,
        oP,
        "_boolean",
        0,
        oU,
        "_catch",
        0,
        sO,
        "_check",
        0,
        sF,
        "_cidrv4",
        0,
        om,
        "_cidrv6",
        0,
        of,
        "_coercedBigint",
        0,
        oC,
        "_coercedBoolean",
        0,
        oO,
        "_coercedDate",
        0,
        oV,
        "_coercedNumber",
        0,
        oS,
        "_coercedString",
        0,
        a2,
        "_creditCard",
        0,
        og,
        "_cuid",
        0,
        or,
        "_cuid2",
        0,
        oa,
        "_custom",
        0,
        sL,
        "_date",
        0,
        oJ,
        "_default",
        0,
        sD,
        "_discriminatedUnion",
        0,
        sg,
        "_e164",
        0,
        ov,
        "_email",
        0,
        a9,
        "_emoji",
        0,
        on,
        "_endsWith",
        0,
        sr,
        "_enum",
        0,
        sw,
        "_file",
        0,
        sS,
        "_float32",
        0,
        oN,
        "_float64",
        0,
        oz,
        "_gt",
        0,
        oH,
        "_gte",
        0,
        oX,
        "_guid",
        0,
        a3,
        "_iban",
        0,
        o$,
        "_includes",
        0,
        sn,
        "_int",
        0,
        oj,
        "_int32",
        0,
        oD,
        "_int64",
        0,
        oE,
        "_intersection",
        0,
        s$,
        "_ipv4",
        0,
        ol,
        "_ipv6",
        0,
        od,
        "_isoDate",
        0,
        ox,
        "_isoDateTime",
        0,
        o_,
        "_isoDuration",
        0,
        ok,
        "_isoTime",
        0,
        ow,
        "_jwt",
        0,
        oy,
        "_ksuid",
        0,
        ou,
        "_lazy",
        0,
        sZ,
        "_length",
        0,
        o8,
        "_literal",
        0,
        sI,
        "_lowercase",
        0,
        se,
        "_lt",
        0,
        oK,
        "_lte",
        0,
        oG,
        "_mac",
        0,
        oc,
        "_map",
        0,
        s_,
        "_max",
        0,
        oG,
        "_maxLength",
        0,
        o3,
        "_maxSize",
        0,
        o6,
        "_mime",
        0,
        ss,
        "_min",
        0,
        oX,
        "_minLength",
        0,
        o5,
        "_minSize",
        0,
        o2,
        "_multipleOf",
        0,
        o4,
        "_nan",
        0,
        oW,
        "_nanoid",
        0,
        oi,
        "_nativeEnum",
        0,
        sk,
        "_negative",
        0,
        oQ,
        "_never",
        0,
        oM,
        "_nonnegative",
        0,
        o1,
        "_nonoptional",
        0,
        sA,
        "_nonpositive",
        0,
        o0,
        "_normalize",
        0,
        sl,
        "_null",
        0,
        oq,
        "_nullable",
        0,
        sz,
        "_number",
        0,
        oI,
        "_optional",
        0,
        sN,
        "_overwrite",
        0,
        su,
        "_pipe",
        0,
        sP,
        "_positive",
        0,
        oY,
        "_promise",
        0,
        sT,
        "_properties",
        0,
        so,
        "_property",
        0,
        sa,
        "_readonly",
        0,
        sC,
        "_record",
        0,
        sb,
        "_refine",
        0,
        sq,
        "_regex",
        0,
        o7,
        "_set",
        0,
        sx,
        "_size",
        0,
        o9,
        "_slugify",
        0,
        sf,
        "_startsWith",
        0,
        si,
        "_string",
        0,
        a6,
        "_stringFormat",
        0,
        sV,
        "_stringbool",
        0,
        sJ,
        "_success",
        0,
        sU,
        "_superRefine",
        0,
        sR,
        "_symbol",
        0,
        oT,
        "_templateLiteral",
        0,
        sE,
        "_toLowerCase",
        0,
        sc,
        "_toUpperCase",
        0,
        sm,
        "_transform",
        0,
        sj,
        "_trim",
        0,
        sd,
        "_tuple",
        0,
        sy,
        "_uint32",
        0,
        oA,
        "_uint64",
        0,
        oZ,
        "_ulid",
        0,
        oo,
        "_undefined",
        0,
        oL,
        "_union",
        0,
        sh,
        "_unknown",
        0,
        oF,
        "_uppercase",
        0,
        st,
        "_url",
        0,
        ot,
        "_uuid",
        0,
        a5,
        "_uuidv4",
        0,
        a8,
        "_uuidv6",
        0,
        a7,
        "_uuidv7",
        0,
        oe,
        "_void",
        0,
        oB,
        "_xid",
        0,
        os,
        "_xor",
        0,
        sv,
        "describe",
        0,
        sM,
        "meta",
        0,
        sB,
      ],
      650215
    ),
      e.i(650215);
    let sQ = new Set([
        "type",
        "properties",
        "required",
        "additionalProperties",
      ]),
      s0 = ["oneOf", "anyOf"];
    function s1(e) {
      let t = e.additionalProperties;
      return void 0 === t || !1 === t || "object" != typeof t || null === t
        ? null
        : Object.keys(t).length
        ? t
        : null;
    }
    function s4(e) {
      let t = [];
      for (let n of e) {
        if ("object" != typeof n || "object" !== n.type) return null;
        for (let e in n) if (!sQ.has(e)) return null;
        t.push(n);
      }
      let n = {},
        i = new Set();
      for (let e of t) {
        for (let i in e.properties) {
          if (Object.prototype.hasOwnProperty.call(n, i)) continue;
          let e = [];
          for (let n of t) {
            let t = n.properties?.[i] ?? s1(n);
            null != t &&
              (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) ||
                e.push(t));
          }
          E(n, i, 1 === e.length ? e[0] : s4(e) ?? { allOf: e });
        }
        for (let t of e.required ?? []) i.add(t);
      }
      let r = { type: "object", properties: n };
      if (
        (i.size && (r.required = [...i]),
        t.every((e) => !1 === e.additionalProperties))
      )
        r.additionalProperties = !1;
      else {
        let e = [];
        for (let n of t) {
          let t = s1(n);
          t &&
            !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) &&
            e.push(t);
        }
        1 === e.length
          ? (r.additionalProperties = e[0])
          : e.length > 1 && (r.additionalProperties = { allOf: e });
      }
      return r;
    }
    function s6(e, t) {
      let n = e.seen.get(t);
      if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
      let i = (t) => {
        let n = e.seen.get(t);
        if (null === n.ref) return;
        let r = n.def ?? n.schema,
          a = { ...r },
          o = n.ref;
        if (((n.ref = null), o)) {
          i(o);
          let n = e.seen.get(o),
            s = n.schema;
          if (
            (s.$ref &&
            ("draft-07" === e.target ||
              "draft-04" === e.target ||
              "openapi-3.0" === e.target)
              ? ((r.allOf = r.allOf ?? []), r.allOf.push(s))
              : sW(r, s),
            sW(r, a),
            t._zod.parent === o)
          )
            for (let e in r)
              "$ref" !== e && "allOf" !== e && (e in a || delete r[e]);
          if (s.$ref && n.def)
            for (let e in r)
              "$ref" !== e &&
                "allOf" !== e &&
                e in n.def &&
                JSON.stringify(r[e]) === JSON.stringify(n.def[e]) &&
                delete r[e];
        }
        let s = t._zod.parent;
        if (s && s !== o) {
          i(s);
          let t = e.seen.get(s);
          if (t?.schema.$ref && ((r.$ref = t.schema.$ref), t.def))
            for (let e in r)
              "$ref" !== e &&
                "allOf" !== e &&
                e in t.def &&
                JSON.stringify(r[e]) === JSON.stringify(t.def[e]) &&
                delete r[e];
        }
        e.override({ zodSchema: t, jsonSchema: r, path: n.path ?? [] });
      };
      if (!e.external || e.sharedEmitDoneFor !== e.external) {
        for (let t of [...e.seen.entries()].reverse()) i(t[0]);
        if ("openapi-3.0" !== e.target)
          for (let t of e.seen.entries())
            !(function e(t) {
              let n = t.anyOf;
              if (!Array.isArray(n) || 0 === n.length || void 0 !== t.type)
                return;
              let i = [];
              for (let t of n) {
                if (!t || "object" != typeof t) return;
                e(t);
                let n = Object.keys(t);
                if (1 !== n.length || "type" !== n[0]) return;
                let r = t.type;
                for (let e of Array.isArray(r) ? r : [r]) {
                  if ("string" != typeof e) return;
                  i.includes(e) || i.push(e);
                }
              }
              delete t.anyOf, (t.type = 1 === i.length ? i[0] : i);
            })(t[1].def ?? t[1].schema);
        for (let t of e.deferred) t();
        if (e.intersections.length) {
          let t = new Map();
          for (let n of e.seen.values())
            for (let e of [n.schema, n.def]) {
              let n = e?.allOf;
              if (!Array.isArray(n)) continue;
              let i = t.get(n);
              i ? i.push(e) : t.set(n, [e]);
            }
          for (let n of e.intersections)
            for (let e of t.get(n) ?? [])
              !(function (e) {
                let t = e.allOf;
                if (!Array.isArray(t) || t.length < 2) return;
                for (let t of sQ) if (t in e) return;
                let n = t.filter((e) => s0.some((t) => Array.isArray(e[t]))),
                  i = null;
                if (n.length) {
                  let e = n[0],
                    r = s0.find((t) => Array.isArray(e[t]));
                  if (1 !== Object.keys(e).length) return;
                  let a = t.filter((t) => t !== e),
                    o = e[r].map((e) => s4([...a, e]));
                  if (o.some((e) => !e)) return;
                  i = { [r]: o };
                } else i = s4(t);
                i && (delete e.allOf, sW(e, i));
              })(e);
        }
      }
      let r = {};
      if (
        ("draft-2020-12" === e.target
          ? (r.$schema = "https://json-schema.org/draft/2020-12/schema")
          : "draft-07" === e.target
          ? (r.$schema = "http://json-schema.org/draft-07/schema#")
          : "draft-04" === e.target
          ? (r.$schema = "http://json-schema.org/draft-04/schema#")
          : e.target,
        e.external?.uri)
      ) {
        let n = e.external.registry.get(t)?.id;
        if (!n) throw Error("Schema is missing an `id` property");
        r.$id = e.external.uri(n);
      }
      sW(r, n.defId ? n.schema : n.def ?? n.schema);
      let a = e.metadataRegistry.get(t)?.id;
      void 0 !== a && r.id === a && delete r.id;
      let o = e.external?.defs ?? {};
      if (!e.external || e.sharedEmitDoneFor !== e.external)
        for (let t of e.seen.entries()) {
          let e = t[1];
          e.def &&
            e.defId &&
            (e.def.id === e.defId && delete e.def.id, E(o, e.defId, e.def));
        }
      e.external && (e.sharedEmitDoneFor = e.external),
        e.external ||
          (Object.keys(o).length > 0 &&
            ("draft-2020-12" === e.target
              ? (r.$defs = o)
              : (r.definitions = o)));
      try {
        let n = JSON.parse(JSON.stringify(r));
        return (
          Object.defineProperty(n, "~standard", {
            value: {
              ...t["~standard"],
              jsonSchema: {
                input: s9(t, "input", e.processors),
                output: s9(t, "output", e.processors),
              },
            },
            enumerable: !1,
            writable: !1,
          }),
          n
        );
      } catch (e) {
        throw Error("Error converting schema to JSON.");
      }
    }
    let s2 =
        (e, t = {}) =>
        (n) => {
          let i = sK({ ...n, processors: t });
          return sH(e, i), sY(i, e), s6(i, e);
        },
      s9 =
        (e, t, n = {}) =>
        (i) => {
          let { libraryOptions: r, target: a } = i ?? {},
            o = sK({ ...(r ?? {}), target: a, io: t, processors: n });
          return sH(e, o), sY(o, e), s6(o, e);
        };
    e.s(
      [
        "createStandardJSONSchemaMethod",
        0,
        s9,
        "createToJSONSchemaMethod",
        0,
        s2,
        "extractDefs",
        0,
        sY,
        "finalize",
        0,
        s6,
        "handleUnrepresentable",
        0,
        sG,
        "initializeContext",
        0,
        sK,
        "process",
        0,
        sH,
        "processSchema",
        0,
        sH,
      ],
      34966
    ),
      e.i(34966);
    let s3 = (e, t, n) => {
        (void 0 === e[t] || n > e[t]) && (e[t] = n);
      },
      s5 = (e, t, n) => {
        (void 0 === e[t] || n < e[t]) && (e[t] = n);
      },
      s8 = (e, t) => {
        s3(e, "minimum", t), s5(e, "maximum", t);
      },
      s7 = (e, t) => {
        e.multipleOf ?? (e.multipleOf = []),
          e.multipleOf.includes(t) || e.multipleOf.push(t);
      },
      ue = (e, t) => {
        e.patterns ?? (e.patterns = new Set()), e.patterns.add(t);
      },
      ut = (e, t) => {
        e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
      },
      un = (e, t) => {
        (e.format = t), t.includes("int") && (e.isInt = !0);
      },
      ui = (e, t) => s3(e, "minimum", t.minimum),
      ur = (e, t) => s5(e, "maximum", t.maximum),
      ua = (e) => (t, n) => {
        un(t, n.format);
        let [i, r] = e[n.format];
        s3(t, "minimum", i), s5(t, "maximum", r);
      },
      uo = {
        greater_than: (e, t) =>
          s3(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
        less_than: (e, t) =>
          s5(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
        multiple_of: (e, t) => s7(e, t.value),
        number_format: ua(ed),
        bigint_format: ua(ec),
        min_length: ui,
        max_length: ur,
        length_equals: (e, t) => s8(e, t.length),
        min_size: ui,
        max_size: ur,
        size_equals: (e, t) => s8(e, t.size),
        string_format: (e, t) => {
          un(e, t.format),
            t.pattern && ue(e, t.pattern),
            ("base64" === t.format || "base64url" === t.format) &&
              (e.contentEncoding = t.format),
            (t.local || -1 === t.precision) && (e.laxFormat = !0);
        },
        mime_type: (e, t) => ut(e, t.mime),
      };
    function us(e) {
      let t = {},
        n = e._zod.def;
      for (let i of e._zod.traits.has("$ZodCheck")
        ? [e, ...(n.checks ?? [])]
        : n.checks ?? [])
        uo[i._zod.def.check]?.(t, i._zod.def);
      let i = e._zod.bag;
      for (let e of (void 0 !== i.minimum && s3(t, "minimum", i.minimum),
      void 0 !== i.exclusiveMinimum &&
        s3(t, "exclusiveMinimum", i.exclusiveMinimum),
      void 0 !== i.maximum && s5(t, "maximum", i.maximum),
      void 0 !== i.exclusiveMaximum &&
        s5(t, "exclusiveMaximum", i.exclusiveMaximum),
      void 0 !== i.multipleOf && s7(t, i.multipleOf),
      void 0 !== i.format &&
        (t.format ?? (t.format = i.format),
        i.format.includes("int") && (t.isInt = !0)),
      i.mime && ut(t, i.mime),
      i.patterns ?? []))
        ue(t, e);
      return t;
    }
    let uu = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      ul = new Map([
        [iE, t9],
        [iT, t3],
      ]),
      ud = (e) => ul.get(e) ?? e,
      uc = (e, t, n, i) => {
        n.type = "string";
        let {
          minimum: r,
          maximum: a,
          format: o,
          patterns: s,
          contentEncoding: u,
          laxFormat: l,
        } = us(e);
        if (
          ("number" == typeof r && (n.minLength = r),
          "number" == typeof a && (n.maxLength = a),
          o &&
            ((n.format = uu[o] ?? o),
            "" === n.format && delete n.format,
            ("time" === o || l) && delete n.format),
          u && (n.contentEncoding = u),
          s && s.size > 0)
        ) {
          let e = [...s].map(ud);
          1 === e.length
            ? (n.pattern = e[0].source)
            : e.length > 1 &&
              (n.allOf = [
                ...e.map((e) => ({
                  ...("draft-07" === t.target ||
                  "draft-04" === t.target ||
                  "openapi-3.0" === t.target
                    ? { type: "string" }
                    : {}),
                  pattern: e.source,
                })),
              ]);
        }
      },
      um = (e, t, n, i) => {
        let {
          minimum: r,
          maximum: a,
          multipleOf: o,
          exclusiveMaximum: s,
          exclusiveMinimum: u,
          isInt: l,
        } = us(e);
        n.type = l ? "integer" : "number";
        let d = "number" == typeof u && u >= (r ?? -1 / 0),
          c = "number" == typeof s && s <= (a ?? 1 / 0),
          m = "draft-04" === t.target || "openapi-3.0" === t.target;
        if (
          (d
            ? m
              ? ((n.minimum = u), (n.exclusiveMinimum = !0))
              : (n.exclusiveMinimum = u)
            : "number" == typeof r && (n.minimum = r),
          c
            ? m
              ? ((n.maximum = s), (n.exclusiveMaximum = !0))
              : (n.exclusiveMaximum = s)
            : "number" == typeof a && (n.maximum = a),
          o)
        ) {
          let r = new Set();
          for (let a of o)
            Number.isFinite(a) && 0 !== a
              ? r.add(Math.abs(a))
              : sG(
                  e,
                  t,
                  n,
                  i,
                  `A multipleOf divisor of ${a} cannot be represented in JSON Schema`
                );
          let [a, ...s] = r;
          void 0 !== a && (n.multipleOf = a),
            s.length &&
              (n.allOf = [
                ...(n.allOf ?? []),
                ...s.map((e) => ({ multipleOf: e })),
              ]);
        }
      },
      uf = (e, t, n, i) => {
        n.type = "boolean";
      },
      up = (e, t, n, i) => {
        sG(e, t, n, i, "BigInt cannot be represented in JSON Schema");
      },
      uh = (e, t, n, i) => {
        sG(e, t, n, i, "Symbols cannot be represented in JSON Schema");
      },
      uv = (e, t, n, i) => {
        "openapi-3.0" === t.target
          ? ((n.type = "string"), (n.nullable = !0), (n.enum = [null]))
          : (n.type = "null");
      },
      ug = (e, t, n, i) => {
        sG(e, t, n, i, "Undefined cannot be represented in JSON Schema");
      },
      u$ = (e, t, n, i) => {
        sG(e, t, n, i, "Void cannot be represented in JSON Schema");
      },
      uy = (e, t, n, i) => {
        n.not = {};
      },
      ub = (e, t, n, i) => {},
      u_ = (e, t, n, i) => {},
      ux = (e, t, n, i) => {
        sG(e, t, n, i, "Date cannot be represented in JSON Schema");
      },
      uw = (e, t, n, i) => {
        let r = I(e._zod.def.entries);
        if (0 === r.length) {
          n.not = {};
          return;
        }
        r.every((e) => "number" == typeof e) && (n.type = "number"),
          r.every((e) => "string" == typeof e) && (n.type = "string"),
          (n.enum = r);
      },
      uk = (e, t, n, i) => {
        let r = e._zod.def;
        if (0 === r.values.length) {
          n.not = {};
          return;
        }
        let a = [];
        for (let o of r.values)
          if (void 0 === o) {
            if (
              sG(
                e,
                t,
                n,
                i,
                "Literal `undefined` cannot be represented in JSON Schema"
              )
            )
              return;
          } else if ("bigint" == typeof o) {
            if (
              sG(
                e,
                t,
                n,
                i,
                "BigInt literals cannot be represented in JSON Schema"
              )
            )
              return;
            a.push(Number(o));
          } else a.push(o);
        if (0 === a.length);
        else if (1 === a.length) {
          let e = a[0];
          (n.type = null === e ? "null" : typeof e),
            "draft-04" === t.target || "openapi-3.0" === t.target
              ? (n.enum = [e])
              : (n.const = e);
        } else
          a.every((e) => "number" == typeof e) && (n.type = "number"),
            a.every((e) => "string" == typeof e) && (n.type = "string"),
            a.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
            a.every((e) => null === e) && (n.type = "null"),
            (n.enum = a);
      },
      uI = (e, t, n, i) => {
        sG(e, t, n, i, "NaN cannot be represented in JSON Schema");
      },
      uS = (e, t, n, i) => {
        let r = e._zod.pattern;
        if (!r) throw Error("Pattern not found in template literal");
        (n.type = "string"), (n.pattern = r.source);
      },
      uj = (e, t, n, i) => {
        (n.type = "string"),
          (n.format = "binary"),
          (n.contentEncoding = "binary");
        let { minimum: r, maximum: a, mime: o } = us(e);
        void 0 !== r && (n.minLength = r),
          void 0 !== a && (n.maxLength = a),
          o &&
            (0 === o.length
              ? (n.not = {})
              : 1 === o.length
              ? (n.contentMediaType = o[0])
              : (n.anyOf = o.map((e) => ({ contentMediaType: e }))));
      },
      uN = (e, t, n, i) => {
        n.type = "boolean";
      },
      uz = (e, t, n, i) => {
        sG(e, t, n, i, "Custom types cannot be represented in JSON Schema");
      },
      uD = (e, t, n, i) => {
        sG(e, t, n, i, "Function types cannot be represented in JSON Schema");
      },
      uA = (e, t, n, i) => {
        sG(e, t, n, i, "Transforms cannot be represented in JSON Schema");
      },
      uU = (e, t, n, i) => {
        sG(e, t, n, i, "Map cannot be represented in JSON Schema");
      },
      uO = (e, t, n, i) => {
        sG(e, t, n, i, "Set cannot be represented in JSON Schema");
      },
      uP = (e, t, n, i) => {
        let r = e._zod.def,
          { minimum: a, maximum: o } = us(e);
        "number" == typeof a && (n.minItems = a),
          "number" == typeof o && (n.maxItems = o),
          (n.type = "array"),
          (n.items = sH(r.element, t, { ...i, path: [...i.path, "items"] }));
      };
    function uC(e) {
      let t = e._zod.def;
      return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform")
        ? uC(t.out)
        : "catch" === t.type
        ? uC(t.innerType)
        : e._zod.optin;
    }
    let uE = (e, t, n, i) => {
        let r = e._zod.def,
          a = r.shape;
        if (
          Object.getOwnPropertySymbols(a).length &&
          sG(e, t, n, i, "Symbol keys cannot be represented in JSON Schema")
        )
          return;
        for (let e in ((n.type = "object"), (n.properties = {}), a))
          E(
            n.properties,
            e,
            sH(a[e], t, { ...i, path: [...i.path, "properties", e] })
          );
        let o = [];
        for (let e of Object.keys(a)) {
          let n = r.shape[e];
          ("input" === t.io ? void 0 === uC(n) : void 0 === n._zod.optout) &&
            o.push(e);
        }
        o.length > 0 && (n.required = o),
          r.catchall?._zod.def.type === "never"
            ? (n.additionalProperties = !1)
            : r.catchall
            ? r.catchall &&
              (n.additionalProperties = sH(r.catchall, t, {
                ...i,
                path: [...i.path, "additionalProperties"],
              }))
            : "output" === t.io && (n.additionalProperties = !1);
      },
      uZ = (e, t, n, i) => {
        let r = e._zod.def,
          a = !1 === r.inclusive,
          o = r.options.map((e, n) =>
            sH(e, t, { ...i, path: [...i.path, a ? "oneOf" : "anyOf", n] })
          );
        a ? (n.oneOf = o) : (n.anyOf = o);
      },
      uT = (e, t, n, i) => {
        let r = e._zod.def,
          a = sH(r.left, t, { ...i, path: [...i.path, "allOf", 0] }),
          o = sH(r.right, t, { ...i, path: [...i.path, "allOf", 1] }),
          s = (e) => "allOf" in e && 1 === Object.keys(e).length,
          u = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
        (n.allOf = u), t.intersections.push(u);
      },
      uL = (e, t, n, i) => {
        let r = e._zod.def;
        n.type = "array";
        let a = "draft-2020-12" === t.target ? "prefixItems" : "items",
          o =
            "draft-2020-12" === t.target || "openapi-3.0" === t.target
              ? "items"
              : "additionalItems",
          s = r.items.map((e, n) =>
            sH(e, t, { ...i, path: [...i.path, a, n] })
          ),
          u = r.rest
            ? sH(r.rest, t, {
                ...i,
                path: [
                  ...i.path,
                  o,
                  ...("openapi-3.0" === t.target ? [r.items.length] : []),
                ],
              })
            : null,
          l = r.items.length;
        for (; l > 0; ) {
          let e = r.items[l - 1];
          if (
            !("input" === t.io
              ? void 0 !== uC(e)
              : "optional" === e._zod.optout)
          )
            break;
          l--;
        }
        let d = r.items.length,
          c = !r.rest;
        "draft-2020-12" === t.target
          ? ((n.prefixItems = s), c ? (n.items = !1) : u && (n.items = u))
          : "openapi-3.0" === t.target
          ? ((n.items = { anyOf: s }), u && n.items.anyOf.push(u))
          : ((n.items = s),
            c ? (n.additionalItems = !1) : u && (n.additionalItems = u)),
          l > 0 && (n.minItems = l),
          c && (n.maxItems = d);
        let { minimum: m, maximum: f } = us(e);
        "number" == typeof m && (n.minItems = m),
          "number" == typeof f && (n.maxItems = f);
      },
      uq = new WeakMap(),
      uR = (e, t, n, i) => {
        let r = e._zod.def;
        n.type = "object";
        let a = r.keyType,
          o = us(a).patterns;
        if ("loose" === r.mode && o && o.size > 0) {
          let e = sH(r.valueType, t, {
            ...i,
            path: [...i.path, "patternProperties", "*"],
          });
          for (let t of ((n.patternProperties = {}), o))
            E(n.patternProperties, ud(t).source, e);
        } else {
          if ("draft-07" === t.target || "draft-2020-12" === t.target) {
            n.propertyNames = sH(r.keyType, t, {
              ...i,
              path: [...i.path, "propertyNames"],
            });
            let a = uq.get(t);
            a ||
              ((a = []),
              uq.set(t, a),
              t.deferred.push(() =>
                (function (e) {
                  let t = new Map();
                  for (let n of e.seen.values())
                    n.def && !t.has(n.schema) && t.set(n.schema, n);
                  let n = new Map();
                  for (let i of uq.get(e) ?? []) {
                    let r = e.seen.get(i),
                      a = (r?.def ?? r?.schema)?.propertyNames;
                    if (!a || !0 === a || n.has(a)) continue;
                    let o = (function e(t, n, i) {
                      if (n.$ref) {
                        if (i.has(n)) return n;
                        i.add(n);
                        let r = t.get(n)?.def;
                        if (!r) return n;
                        let a = e(t, r, i);
                        return a === r ? n : a;
                      }
                      for (let r of ["anyOf", "oneOf"]) {
                        let a = n[r];
                        if (!Array.isArray(a)) continue;
                        let o = a.map((n) => e(t, n, i));
                        o.some((e, t) => e !== a[t]) && (n = { ...n, [r]: o });
                      }
                      let r = Array.isArray(n.type) ? n.type : [n.type],
                        a =
                          !r.includes("string") &&
                          r.some((e) => "number" === e || "integer" === e),
                        o = n.enum ?? (void 0 !== n.const ? [n.const] : void 0);
                      if (!a && !o?.some((e) => "number" == typeof e)) return n;
                      let {
                        minimum: s,
                        maximum: u,
                        exclusiveMinimum: l,
                        exclusiveMaximum: d,
                        multipleOf: c,
                        format: m,
                        id: f,
                        ...p
                      } = n;
                      return (
                        p.enum
                          ? (p.enum = p.enum.map((e) =>
                              "number" == typeof e ? String(e) : e
                            ))
                          : "number" == typeof p.const &&
                            (p.const = String(p.const)),
                        a &&
                          ((p.type = "string"),
                          o ||
                            (p.pattern = (
                              r.includes("number") ? nf : nm
                            ).source)),
                        p
                      );
                    })(t, a, new Set());
                    o !== a && n.set(a, o);
                  }
                  if (n.size)
                    for (let t of e.seen.values())
                      for (let e of [t.schema, t.def]) {
                        let t = e && n.get(e.propertyNames);
                        t && (e.propertyNames = t);
                      }
                })(t)
              )),
              a.push(e);
          }
          n.additionalProperties = sH(r.valueType, t, {
            ...i,
            path: [...i.path, "additionalProperties"],
          });
        }
        let s = a._zod.values,
          u = "input" === t.io && void 0 !== uC(r.valueType);
        if (s && !r.partial && !u) {
          let e = [...s].filter(
            (e) => "string" == typeof e || "number" == typeof e
          );
          e.length > 0 && (n.required = e.map(String));
        }
      },
      uF = (e, t, n, i) => {
        let r = e._zod.def,
          a = sH(r.innerType, t, i),
          o = t.seen.get(e);
        "openapi-3.0" === t.target
          ? ((o.ref = r.innerType), (n.nullable = !0))
          : (n.anyOf = [a, { type: "null" }]);
      },
      uM = (e, t, n, i) => {
        let r = e._zod.def;
        sH(r.innerType, t, i), (t.seen.get(e).ref = r.innerType);
      },
      uB = Symbol();
    function uJ(e, t, n, i, r) {
      let a = !1,
        o = JSON.stringify(e, (e, t) =>
          "bigint" != typeof t ? t : ((a = !0), null)
        );
      return a
        ? (sG(
            t,
            n,
            i,
            r,
            "BigInt defaults cannot be represented in JSON Schema"
          ),
          uB)
        : JSON.parse(o);
    }
    let uV = (e, t, n, i) => {
        let r = e._zod.def;
        sH(r.innerType, t, i), (t.seen.get(e).ref = r.innerType);
        let a = uJ(r.defaultValue, e, t, n, i);
        a !== uB && (n.default = a);
      },
      uW = (e, t, n, i) => {
        let r = e._zod.def;
        if (
          (sH(r.innerType, t, i),
          (t.seen.get(e).ref = r.innerType),
          "input" !== t.io)
        )
          return;
        let a = uJ(r.defaultValue, e, t, n, i);
        a !== uB && (n._prefault = a);
      },
      uK = (e, t, n, i) => {
        let r,
          a = e._zod.def;
        sH(a.innerType, t, i), (t.seen.get(e).ref = a.innerType);
        try {
          r = a.catchValue(void 0);
        } catch {
          sG(
            e,
            t,
            n,
            i,
            "Dynamic catch values are not supported in JSON Schema"
          );
          return;
        }
        n.default = r;
      },
      uG = (e, t, n, i) => {
        let r = e._zod.def,
          a = r.in._zod.traits.has("$ZodTransform"),
          o = "input" === t.io ? (a ? r.out : r.in) : r.out;
        sH(o, t, i), (t.seen.get(e).ref = o);
      },
      uH = (e, t, n, i) => {
        let r = e._zod.def;
        sH(r.innerType, t, i),
          (t.seen.get(e).ref = r.innerType),
          (n.readOnly = !0);
      },
      uX = (e, t, n, i) => {
        let r = e._zod.def;
        sH(r.innerType, t, i), (t.seen.get(e).ref = r.innerType);
      },
      uY = (e, t, n, i) => {
        let r = e._zod.def;
        sH(r.innerType, t, i), (t.seen.get(e).ref = r.innerType);
      },
      uQ = (e, t, n, i) => {
        let r = e._zod.innerType;
        sH(r, t, i), (t.seen.get(e).ref = r);
      },
      u0 = {
        string: uc,
        number: um,
        boolean: uf,
        bigint: up,
        symbol: uh,
        null: uv,
        undefined: ug,
        void: u$,
        never: uy,
        any: ub,
        unknown: u_,
        date: ux,
        enum: uw,
        literal: uk,
        nan: uI,
        template_literal: uS,
        file: uj,
        success: uN,
        custom: uz,
        function: uD,
        transform: uA,
        map: uU,
        set: uO,
        array: uP,
        object: uE,
        union: uZ,
        intersection: uT,
        tuple: uL,
        record: uR,
        nullable: uF,
        nonoptional: uM,
        default: uV,
        prefault: uW,
        catch: uK,
        pipe: uG,
        readonly: uH,
        promise: uX,
        optional: uY,
        lazy: uQ,
      };
    function u1(e, t) {
      if ("_idmap" in e) {
        let n = sK({ ...t, processors: u0 }),
          i = {};
        for (let t of e._idmap.entries()) {
          let [e, i] = t;
          sH(i, n);
        }
        let r = {};
        for (let a of ((n.external = { registry: e, uri: t?.uri, defs: i }),
        e._idmap.entries())) {
          let [e, t] = a;
          sY(n, t), E(r, e, s6(n, t));
        }
        return (
          Object.keys(i).length > 0 &&
            (r.__shared = {
              ["draft-2020-12" === n.target ? "$defs" : "definitions"]: i,
            }),
          { schemas: r }
        );
      }
      let n = sK({ ...t, processors: u0 });
      return sH(e, n), sY(n, e), s6(n, e);
    }
    e.s([], 84708);
    var u4 = e.i(84708);
    e.s(
      [
        "$ZodAny",
        0,
        i2,
        "$ZodArray",
        0,
        rr,
        "$ZodAsyncError",
        0,
        e6,
        "$ZodBase64",
        0,
        iZ,
        "$ZodBase64URL",
        0,
        iq,
        "$ZodBigInt",
        0,
        iQ,
        "$ZodBigIntFormat",
        0,
        i0,
        "$ZodBoolean",
        0,
        iY,
        "$ZodCIDRv4",
        0,
        iU,
        "$ZodCIDRv6",
        0,
        iP,
        "$ZodCUID",
        0,
        i$,
        "$ZodCUID2",
        0,
        iy,
        "$ZodCatch",
        0,
        rJ,
        "$ZodCheck",
        0,
        nU,
        "$ZodCheckBigIntFormat",
        0,
        nq,
        "$ZodCheckEndsWith",
        0,
        nQ,
        "$ZodCheckGreaterThan",
        0,
        nZ,
        "$ZodCheckIncludes",
        0,
        nX,
        "$ZodCheckLengthEquals",
        0,
        nV,
        "$ZodCheckLessThan",
        0,
        nE,
        "$ZodCheckLowerCase",
        0,
        nG,
        "$ZodCheckMaxLength",
        0,
        nB,
        "$ZodCheckMaxSize",
        0,
        nR,
        "$ZodCheckMimeType",
        0,
        n6,
        "$ZodCheckMinLength",
        0,
        nJ,
        "$ZodCheckMinSize",
        0,
        nF,
        "$ZodCheckMultipleOf",
        0,
        nT,
        "$ZodCheckNumberFormat",
        0,
        nL,
        "$ZodCheckOverwrite",
        0,
        n2,
        "$ZodCheckProperties",
        0,
        n4,
        "$ZodCheckProperty",
        0,
        n1,
        "$ZodCheckRegex",
        0,
        nK,
        "$ZodCheckSizeEquals",
        0,
        nM,
        "$ZodCheckStartsWith",
        0,
        nY,
        "$ZodCheckStringFormat",
        0,
        nW,
        "$ZodCheckUpperCase",
        0,
        nH,
        "$ZodCodec",
        0,
        rG,
        "$ZodCreditCard",
        0,
        iB,
        "$ZodCustom",
        0,
        r9,
        "$ZodCustomStringFormat",
        0,
        iG,
        "$ZodCyclicError",
        0,
        r5,
        "$ZodDate",
        0,
        i8,
        "$ZodDefault",
        0,
        rT,
        "$ZodDiscriminatedUnion",
        0,
        rg,
        "$ZodE164",
        0,
        iR,
        "$ZodEmail",
        0,
        io,
        "$ZodEmoji",
        0,
        iv,
        "$ZodEncodeError",
        0,
        e2,
        "$ZodEnum",
        0,
        rD,
        "$ZodError",
        0,
        tt,
        "$ZodExactOptional",
        0,
        rE,
        "$ZodFile",
        0,
        rU,
        "$ZodFunction",
        0,
        r4,
        "$ZodGUID",
        0,
        ir,
        "$ZodIBAN",
        0,
        iV,
        "$ZodIPv4",
        0,
        ij,
        "$ZodIPv6",
        0,
        iD,
        "$ZodISODate",
        0,
        ik,
        "$ZodISODateTime",
        0,
        iw,
        "$ZodISODuration",
        0,
        iS,
        "$ZodISOTime",
        0,
        iI,
        "$ZodIntersection",
        0,
        r$,
        "$ZodJWT",
        0,
        iK,
        "$ZodKSUID",
        0,
        ix,
        "$ZodLazy",
        0,
        r2,
        "$ZodLiteral",
        0,
        rA,
        "$ZodMAC",
        0,
        iA,
        "$ZodMap",
        0,
        rS,
        "$ZodNaN",
        0,
        rV,
        "$ZodNanoID",
        0,
        ig,
        "$ZodNever",
        0,
        i3,
        "$ZodNonOptional",
        0,
        rR,
        "$ZodNull",
        0,
        i6,
        "$ZodNullable",
        0,
        rZ,
        "$ZodNumber",
        0,
        iH,
        "$ZodNumberFormat",
        0,
        iX,
        "$ZodObject",
        0,
        rl,
        "$ZodObjectJIT",
        0,
        rd,
        "$ZodOptional",
        0,
        rC,
        "$ZodPipe",
        0,
        rW,
        "$ZodPrefault",
        0,
        rq,
        "$ZodPreprocess",
        0,
        rY,
        "$ZodPromise",
        0,
        r6,
        "$ZodReadonly",
        0,
        rQ,
        "$ZodRealError",
        0,
        tn,
        "$ZodRecord",
        0,
        rI,
        "$ZodRegistry",
        0,
        aw,
        "$ZodSet",
        0,
        rN,
        "$ZodString",
        0,
        it,
        "$ZodStringFormat",
        0,
        ii,
        "$ZodSuccess",
        0,
        rM,
        "$ZodSymbol",
        0,
        i1,
        "$ZodTemplateLiteral",
        0,
        r1,
        "$ZodTransform",
        0,
        rO,
        "$ZodTuple",
        0,
        r_,
        "$ZodType",
        0,
        n5,
        "$ZodULID",
        0,
        ib,
        "$ZodURL",
        0,
        ih,
        "$ZodUUID",
        0,
        ia,
        "$ZodUndefined",
        0,
        i4,
        "$ZodUnion",
        0,
        rm,
        "$ZodUnknown",
        0,
        i9,
        "$ZodVoid",
        0,
        i5,
        "$ZodXID",
        0,
        i_,
        "$ZodXor",
        0,
        rp,
        "$brand",
        0,
        e4,
        "$constructor",
        0,
        e1,
        "$input",
        0,
        ax,
        "$output",
        0,
        a_,
        "Doc",
        0,
        n9,
        "INVALID",
        0,
        aS,
        "JSONSchema",
        0,
        u4,
        "JSONSchemaGenerator",
        0,
        class {
          get metadataRegistry() {
            return this.ctx.metadataRegistry;
          }
          get target() {
            return this.ctx.target;
          }
          get unrepresentable() {
            return this.ctx.unrepresentable;
          }
          get override() {
            return this.ctx.override;
          }
          get io() {
            return this.ctx.io;
          }
          get counter() {
            return this.ctx.counter;
          }
          set counter(e) {
            this.ctx.counter = e;
          }
          get seen() {
            return this.ctx.seen;
          }
          constructor(e) {
            let t = e?.target ?? "draft-2020-12";
            "draft-4" === t && (t = "draft-04"),
              "draft-7" === t && (t = "draft-07"),
              (this.ctx = sK({
                processors: u0,
                target: t,
                ...(e?.metadata && { metadata: e.metadata }),
                ...(e?.unrepresentable && {
                  unrepresentable: e.unrepresentable,
                }),
                ...(e?.override && { override: e.override }),
                ...(e?.io && { io: e.io }),
              }));
          }
          process(e, t = { path: [], schemaPath: [] }) {
            return sH(e, this.ctx, t);
          }
          emit(e, t) {
            t &&
              (t.cycles && (this.ctx.cycles = t.cycles),
              t.reused && (this.ctx.reused = t.reused),
              t.external && (this.ctx.external = t.external)),
              (this.ctx.sharedDefsExtractedFor = void 0),
              (this.ctx.sharedEmitDoneFor = void 0),
              sY(this.ctx, e);
            let { "~standard": n, ...i } = s6(this.ctx, e);
            return i;
          }
        },
        "NEVER",
        0,
        eY,
        "TimePrecision",
        0,
        ob,
        "URL_BAD_FORMAT",
        0,
        1,
        "URL_UNPARSEABLE",
        0,
        2,
        "ZodCompileAsyncError",
        0,
        aN,
        "ZodCompileUnsupportedError",
        0,
        az,
        "_any",
        0,
        oR,
        "_array",
        0,
        sp,
        "_base64",
        0,
        op,
        "_base64url",
        0,
        oh,
        "_bigint",
        0,
        oP,
        "_boolean",
        0,
        oU,
        "_catch",
        0,
        sO,
        "_check",
        0,
        sF,
        "_cidrv4",
        0,
        om,
        "_cidrv6",
        0,
        of,
        "_coercedBigint",
        0,
        oC,
        "_coercedBoolean",
        0,
        oO,
        "_coercedDate",
        0,
        oV,
        "_coercedNumber",
        0,
        oS,
        "_coercedString",
        0,
        a2,
        "_creditCard",
        0,
        og,
        "_cuid",
        0,
        or,
        "_cuid2",
        0,
        oa,
        "_custom",
        0,
        sL,
        "_date",
        0,
        oJ,
        "_decode",
        0,
        tk,
        "_decodeAsync",
        0,
        tN,
        "_default",
        0,
        sD,
        "_discriminatedUnion",
        0,
        sg,
        "_e164",
        0,
        ov,
        "_email",
        0,
        a9,
        "_emoji",
        0,
        on,
        "_encode",
        0,
        tx,
        "_encodeAsync",
        0,
        tS,
        "_endsWith",
        0,
        sr,
        "_enum",
        0,
        sw,
        "_file",
        0,
        sS,
        "_float32",
        0,
        oN,
        "_float64",
        0,
        oz,
        "_gt",
        0,
        oH,
        "_gte",
        0,
        oX,
        "_guid",
        0,
        a3,
        "_iban",
        0,
        o$,
        "_includes",
        0,
        sn,
        "_int",
        0,
        oj,
        "_int32",
        0,
        oD,
        "_int64",
        0,
        oE,
        "_intersection",
        0,
        s$,
        "_ipv4",
        0,
        ol,
        "_ipv6",
        0,
        od,
        "_isoDate",
        0,
        ox,
        "_isoDateTime",
        0,
        o_,
        "_isoDuration",
        0,
        ok,
        "_isoTime",
        0,
        ow,
        "_jwt",
        0,
        oy,
        "_ksuid",
        0,
        ou,
        "_lazy",
        0,
        sZ,
        "_length",
        0,
        o8,
        "_literal",
        0,
        sI,
        "_lowercase",
        0,
        se,
        "_lt",
        0,
        oK,
        "_lte",
        0,
        oG,
        "_mac",
        0,
        oc,
        "_map",
        0,
        s_,
        "_max",
        0,
        oG,
        "_maxLength",
        0,
        o3,
        "_maxSize",
        0,
        o6,
        "_mime",
        0,
        ss,
        "_min",
        0,
        oX,
        "_minLength",
        0,
        o5,
        "_minSize",
        0,
        o2,
        "_multipleOf",
        0,
        o4,
        "_nan",
        0,
        oW,
        "_nanoid",
        0,
        oi,
        "_nativeEnum",
        0,
        sk,
        "_negative",
        0,
        oQ,
        "_never",
        0,
        oM,
        "_nonnegative",
        0,
        o1,
        "_nonoptional",
        0,
        sA,
        "_nonpositive",
        0,
        o0,
        "_normalize",
        0,
        sl,
        "_null",
        0,
        oq,
        "_nullable",
        0,
        sz,
        "_number",
        0,
        oI,
        "_optional",
        0,
        sN,
        "_overwrite",
        0,
        su,
        "_parse",
        0,
        tl,
        "_parseAsync",
        0,
        tc,
        "_pipe",
        0,
        sP,
        "_positive",
        0,
        oY,
        "_promise",
        0,
        sT,
        "_properties",
        0,
        so,
        "_property",
        0,
        sa,
        "_readonly",
        0,
        sC,
        "_record",
        0,
        sb,
        "_refine",
        0,
        sq,
        "_regex",
        0,
        o7,
        "_safeDecode",
        0,
        tU,
        "_safeDecodeAsync",
        0,
        tE,
        "_safeEncode",
        0,
        tD,
        "_safeEncodeAsync",
        0,
        tP,
        "_safeParse",
        0,
        tf,
        "_safeParseAsync",
        0,
        tv,
        "_set",
        0,
        sx,
        "_size",
        0,
        o9,
        "_slugify",
        0,
        sf,
        "_startsWith",
        0,
        si,
        "_string",
        0,
        a6,
        "_stringFormat",
        0,
        sV,
        "_stringbool",
        0,
        sJ,
        "_success",
        0,
        sU,
        "_superRefine",
        0,
        sR,
        "_symbol",
        0,
        oT,
        "_templateLiteral",
        0,
        sE,
        "_toLowerCase",
        0,
        sc,
        "_toUpperCase",
        0,
        sm,
        "_transform",
        0,
        sj,
        "_trim",
        0,
        sd,
        "_tuple",
        0,
        sy,
        "_uint32",
        0,
        oA,
        "_uint64",
        0,
        oZ,
        "_ulid",
        0,
        oo,
        "_undefined",
        0,
        oL,
        "_union",
        0,
        sh,
        "_unknown",
        0,
        oF,
        "_uppercase",
        0,
        st,
        "_url",
        0,
        ot,
        "_uuid",
        0,
        a5,
        "_uuidv4",
        0,
        a8,
        "_uuidv6",
        0,
        a7,
        "_uuidv7",
        0,
        oe,
        "_void",
        0,
        oB,
        "_xid",
        0,
        os,
        "_xor",
        0,
        sv,
        "base64Charset",
        0,
        iE,
        "base64urlCharset",
        0,
        iT,
        "canParseURL",
        0,
        is,
        "clone",
        0,
        ea,
        "compile",
        0,
        aD,
        "compileFn",
        0,
        aU,
        "config",
        0,
        e3,
        "createStandardJSONSchemaMethod",
        0,
        s9,
        "createToJSONSchemaMethod",
        0,
        s2,
        "decode",
        0,
        tI,
        "decodeAsync",
        0,
        tz,
        "describe",
        0,
        sM,
        "encode",
        0,
        tw,
        "encodeAsync",
        0,
        tj,
        "extractDefs",
        0,
        sY,
        "finalize",
        0,
        s6,
        "flattenError",
        0,
        ti,
        "formatError",
        0,
        tr,
        "getDiscriminatedOption",
        0,
        rh,
        "globalConfig",
        0,
        e9,
        "globalRegistry",
        0,
        aI,
        "handleUnrepresentable",
        0,
        sG,
        "initializeContext",
        0,
        sK,
        "isBackEdge",
        0,
        au,
        "isRecursiveSchema",
        0,
        ar,
        "isValidBase64",
        0,
        iC,
        "isValidBase64URL",
        0,
        iL,
        "isValidCIDRv6",
        0,
        iO,
        "isValidCreditCard",
        0,
        iM,
        "isValidIBAN",
        0,
        iJ,
        "isValidIPv6",
        0,
        iz,
        "isValidJWT",
        0,
        iW,
        "locales",
        0,
        ab,
        "memoizer",
        0,
        as,
        "mergeValues",
        0,
        ry,
        "meta",
        0,
        sB,
        "parse",
        0,
        td,
        "parseAsync",
        0,
        tm,
        "parseURLObject",
        0,
        il,
        "prettifyError",
        0,
        ts,
        "process",
        0,
        sH,
        "processSchema",
        0,
        sH,
        "regexes",
        0,
        ad,
        "registry",
        0,
        ak,
        "safeDecode",
        0,
        tO,
        "safeDecodeAsync",
        0,
        tZ,
        "safeEncode",
        0,
        tA,
        "safeEncodeAsync",
        0,
        tC,
        "safeParse",
        0,
        tp,
        "safeParseAsync",
        0,
        tg,
        "standardProps",
        0,
        ie,
        "stripTabAndNewline",
        0,
        ic,
        "toDotPath",
        0,
        to,
        "toJSONSchema",
        0,
        u1,
        "toZod",
        0,
        _,
        "treeifyError",
        0,
        ta,
        "urlHostnameOk",
        0,
        im,
        "urlProtocolOk",
        0,
        ip,
        "util",
        0,
        al,
        "validate",
        0,
        tb,
        "validateAsync",
        0,
        t_,
        "validateURL",
        0,
        iu,
        "version",
        0,
        n3,
        "withParser",
        0,
        aA,
      ],
      712717
    );
    var u6 = e.i(712717),
      u2 = ad,
      u9 = al;
    let u3 = new WeakSet([Object.prototype, Error.prototype]);
    function u5(e, t, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        get() {
          let e = n(this);
          return (
            Object.defineProperty(this, t, {
              value: e,
              configurable: !0,
              writable: !0,
            }),
            e
          );
        },
        set(e) {
          Object.defineProperty(this, t, {
            value: e,
            configurable: !0,
            writable: !0,
          });
        },
      });
    }
    let u8 = (e, t) => {
        tt.init(e, t), (e.name = "ZodError");
        let n = Object.getPrototypeOf(e);
        u3.has(n) ||
          (u3.add(n),
          u5(n, "format", (e) => (t) => tr(e, t)),
          u5(n, "flatten", (e) => (t) => ti(e, t)),
          u5(n, "addIssue", (e) => (t) => {
            e.issues.push(t), (e.message = JSON.stringify(e.issues, j, 2));
          }),
          u5(n, "addIssues", (e) => (t) => {
            e.issues.push(...t), (e.message = JSON.stringify(e.issues, j, 2));
          }),
          Object.defineProperty(n, "isEmpty", {
            configurable: !0,
            enumerable: !1,
            get() {
              return 0 === this.issues.length;
            },
          }));
      },
      u7 = e1("ZodError", u8),
      le = e1("ZodError", u8, void 0, { Parent: Error });
    e.s(["ZodError", 0, u7, "ZodRealError", 0, le], 789282);
    let lt = tl(le),
      ln = tc(le),
      li = tf(le),
      lr = tv(le),
      la = tx(le),
      lo = tk(le),
      ls = tS(le),
      lu = tN(le),
      ll = tD(le),
      ld = tU(le),
      lc = tP(le),
      lm = tE(le);
    function lf() {
      e9.memoizer || e3({ memoizer: as() });
    }
    let lp = e1(
        "ZodType",
        (e, t) => (
          e9.localeError || e3(am()),
          n5.init(e, t),
          (e.def = t),
          (e.type = t.type),
          e
        ),
        {
          check(...e) {
            let t = this.def;
            return this.clone(
              al.mergeDefs(t, {
                checks: [
                  ...(t.checks ?? []),
                  ...e.map((e) =>
                    "function" == typeof e
                      ? {
                          _zod: {
                            check: e,
                            def: { check: "custom" },
                            onattach: [],
                          },
                        }
                      : e
                  ),
                ],
              }),
              { parent: !0 }
            );
          },
          with(...e) {
            return this.check(...e);
          },
          clone(e, t) {
            return ea(this, e, t);
          },
          brand() {
            return this;
          },
          register(e, t) {
            return e.add(this, t), this;
          },
          refine(e, t) {
            return this.check(cQ(e, t));
          },
          superRefine(e, t) {
            return this.check(c0(e, t));
          },
          overwrite(e) {
            return this.check(su(e));
          },
          optional() {
            return cv(this);
          },
          exactOptional() {
            return c$(this);
          },
          nullable() {
            return cb(this);
          },
          nullish() {
            return cv(cb(this));
          },
          nonoptional(e) {
            return cj(this, e);
          },
          array() {
            return dV(this);
          },
          or(e) {
            return dQ([this, e]);
          },
          and(e) {
            return d9(this, e);
          },
          transform(e) {
            return cC(this, cp(e));
          },
          default(e) {
            return cw(this, e);
          },
          prefault(e) {
            return cI(this, e);
          },
          catch(e) {
            return cA(this, e);
          },
          pipe(e) {
            return cC(this, e);
          },
          readonly() {
            return cR(this);
          },
          describe(e) {
            let t = this.clone();
            return aI.add(t, { description: e }), t;
          },
          meta(...e) {
            if (0 === e.length) return aI.get(this);
            let t = this.clone();
            return aI.add(t, e[0]), t;
          },
          isOptional() {
            return this.safeParse(void 0).success;
          },
          isNullable() {
            return this.safeParse(null).success;
          },
          apply(e, ...t) {
            return 0 === t.length ? e(this) : e(this, ...t);
          },
          get "~standard"() {
            return al.hide(this, "~standard", {
              ...ie(this),
              jsonSchema: {
                input: s9(this, "input"),
                output: s9(this, "output"),
              },
            });
          },
          set "~standard"(e) {
            al.own(this, "~standard", e);
          },
          parse: function e(t, n) {
            return lt(this, t, n, { callee: e });
          },
          parseAsync: async function e(t, n) {
            return await ln(this, t, n, { callee: e });
          },
          safeParse(e, t) {
            return li(this, e, t);
          },
          async safeParseAsync(e, t) {
            return lr(this, e, t);
          },
          get spa() {
            return this?.safeParseAsync;
          },
          set spa(e) {
            al.own(this, "spa", e);
          },
          validate(e, t) {
            return tb(this, e, t);
          },
          validateAsync(e, t) {
            return t_(this, e, t);
          },
          encode: function e(t, n) {
            return la(this, t, n, { callee: e });
          },
          decode: function e(t, n) {
            return lo(this, t, n, { callee: e });
          },
          encodeAsync: async function e(t, n) {
            return await ls(this, t, n, { callee: e });
          },
          decodeAsync: async function e(t, n) {
            return await lu(this, t, n, { callee: e });
          },
          safeEncode(e, t) {
            return ll(this, e, t);
          },
          safeDecode(e, t) {
            return ld(this, e, t);
          },
          async safeEncodeAsync(e, t) {
            return lc(this, e, t);
          },
          async safeDecodeAsync(e, t) {
            return lm(this, e, t);
          },
          toJSONSchema(e) {
            return s2(this, {})(e);
          },
          get description() {
            return aI.get(this)?.description;
          },
          get _def() {
            return this._zod.def;
          },
        }
      ),
      lh = e1(
        "_ZodString",
        (e, t) => {
          it.init(e, t),
            lp.init(e, t),
            (e._zod.processJSONSchema = (t, n, i) => uc(e, t, n, i));
        },
        al.derived(
          {
            format: (e) => us(e).format ?? null,
            minLength: (e) => us(e).minimum ?? null,
            maxLength: (e) => us(e).maximum ?? null,
          },
          {
            regex(...e) {
              return this.check(o7(...e));
            },
            includes(...e) {
              return this.check(sn(...e));
            },
            startsWith(...e) {
              return this.check(si(...e));
            },
            endsWith(...e) {
              return this.check(sr(...e));
            },
            min(...e) {
              return this.check(o5(...e));
            },
            max(...e) {
              return this.check(o3(...e));
            },
            length(...e) {
              return this.check(o8(...e));
            },
            nonempty(...e) {
              return this.check(o5(1, ...e));
            },
            lowercase(e) {
              return this.check(se(e));
            },
            uppercase(e) {
              return this.check(st(e));
            },
            trim() {
              return this.check(sd());
            },
            normalize(...e) {
              return this.check(sl(...e));
            },
            toLowerCase() {
              return this.check(sc());
            },
            toUpperCase() {
              return this.check(sm());
            },
            slugify() {
              return this.check(sf());
            },
          }
        )
      ),
      lv = e1(
        "ZodString",
        (e, t) => {
          it.init(e, t), lh.init(e, t);
        },
        {
          email(e) {
            return this.check(a9(lw, e));
          },
          url(e) {
            return this.check(ot(lU, e));
          },
          jwt(e) {
            return this.check(oy(da, e));
          },
          emoji(e) {
            return this.check(on(lC, e));
          },
          guid(e) {
            return this.check(a3(lI, e));
          },
          uuid(e) {
            return this.check(a5(lj, e));
          },
          uuidv4(e) {
            return this.check(a8(lj, e));
          },
          uuidv6(e) {
            return this.check(a7(lj, e));
          },
          uuidv7(e) {
            return this.check(oe(lj, e));
          },
          nanoid(e) {
            return this.check(oi(lZ, e));
          },
          cuid(e) {
            return this.check(or(lL, e));
          },
          cuid2(e) {
            return this.check(oa(lR, e));
          },
          ulid(e) {
            return this.check(oo(lM, e));
          },
          base64(e) {
            return this.check(op(l9, e));
          },
          base64url(e) {
            return this.check(oh(l5, e));
          },
          xid(e) {
            return this.check(os(lJ, e));
          },
          ksuid(e) {
            return this.check(ou(lW, e));
          },
          ipv4(e) {
            return this.check(ol(lG, e));
          },
          ipv6(e) {
            return this.check(od(lQ, e));
          },
          cidrv4(e) {
            return this.check(om(l1, e));
          },
          cidrv6(e) {
            return this.check(of(l6, e));
          },
          e164(e) {
            return this.check(ov(l7, e));
          },
          datetime(e) {
            return this.check(o_(ly, e));
          },
          date(e) {
            return this.check(ox(lb, e));
          },
          time(e) {
            return this.check(ow(l_, e));
          },
          duration(e) {
            return this.check(ok(lx, e));
          },
        }
      );
    function lg(e) {
      return a6(lv, e);
    }
    let l$ = e1("ZodStringFormat", (e, t) => {
        ii.init(e, t), lh.init(e, t);
      }),
      ly = e1("ZodISODateTime", (e, t) => {
        iw.init(e, t), l$.init(e, t);
      }),
      lb = e1("ZodISODate", (e, t) => {
        ik.init(e, t), l$.init(e, t);
      }),
      l_ = e1("ZodISOTime", (e, t) => {
        iI.init(e, t), l$.init(e, t);
      }),
      lx = e1("ZodISODuration", (e, t) => {
        iS.init(e, t), l$.init(e, t);
      }),
      lw = e1("ZodEmail", (e, t) => {
        io.init(e, t), l$.init(e, t);
      });
    function lk(e) {
      return a9(lw, e);
    }
    let lI = e1("ZodGUID", (e, t) => {
      ir.init(e, t), l$.init(e, t);
    });
    function lS(e) {
      return a3(lI, e);
    }
    let lj = e1("ZodUUID", (e, t) => {
      ia.init(e, t), l$.init(e, t);
    });
    function lN(e) {
      return a5(lj, e);
    }
    function lz(e) {
      return a8(lj, e);
    }
    function lD(e) {
      return a7(lj, e);
    }
    function lA(e) {
      return oe(lj, e);
    }
    let lU = e1("ZodURL", (e, t) => {
      ih.init(e, t), l$.init(e, t);
    });
    function lO(e) {
      return ot(lU, e);
    }
    function lP(e) {
      return ot(lU, { protocol: t7, hostname: t8, ...al.normalizeParams(e) });
    }
    let lC = e1("ZodEmoji", (e, t) => {
      iv.init(e, t), l$.init(e, t);
    });
    function lE(e) {
      return on(lC, e);
    }
    let lZ = e1("ZodNanoID", (e, t) => {
      ig.init(e, t), l$.init(e, t);
    });
    function lT(e) {
      return oi(lZ, e);
    }
    let lL = e1("ZodCUID", (e, t) => {
      i$.init(e, t), l$.init(e, t);
    });
    function lq(e) {
      return or(lL, e);
    }
    let lR = e1("ZodCUID2", (e, t) => {
      iy.init(e, t), l$.init(e, t);
    });
    function lF(e) {
      return oa(lR, e);
    }
    let lM = e1("ZodULID", (e, t) => {
      ib.init(e, t), l$.init(e, t);
    });
    function lB(e) {
      return oo(lM, e);
    }
    let lJ = e1("ZodXID", (e, t) => {
      i_.init(e, t), l$.init(e, t);
    });
    function lV(e) {
      return os(lJ, e);
    }
    let lW = e1("ZodKSUID", (e, t) => {
      ix.init(e, t), l$.init(e, t);
    });
    function lK(e) {
      return ou(lW, e);
    }
    let lG = e1("ZodIPv4", (e, t) => {
      ij.init(e, t), l$.init(e, t);
    });
    function lH(e) {
      return ol(lG, e);
    }
    let lX = e1("ZodMAC", (e, t) => {
      iA.init(e, t), l$.init(e, t);
    });
    function lY(e) {
      return oc(lX, e);
    }
    let lQ = e1("ZodIPv6", (e, t) => {
      iD.init(e, t), l$.init(e, t);
    });
    function l0(e) {
      return od(lQ, e);
    }
    let l1 = e1("ZodCIDRv4", (e, t) => {
      iU.init(e, t), l$.init(e, t);
    });
    function l4(e) {
      return om(l1, e);
    }
    let l6 = e1("ZodCIDRv6", (e, t) => {
      iP.init(e, t), l$.init(e, t);
    });
    function l2(e) {
      return of(l6, e);
    }
    let l9 = e1("ZodBase64", (e, t) => {
      iZ.init(e, t), l$.init(e, t);
    });
    function l3(e) {
      return op(l9, e);
    }
    let l5 = e1("ZodBase64URL", (e, t) => {
      iq.init(e, t), l$.init(e, t);
    });
    function l8(e) {
      return oh(l5, e);
    }
    let l7 = e1("ZodE164", (e, t) => {
      iR.init(e, t), l$.init(e, t);
    });
    function de(e) {
      return ov(l7, e);
    }
    let dt = e1("ZodCreditCard", (e, t) => {
      iB.init(e, t), l$.init(e, t);
    });
    function dn(e) {
      return og(dt, e);
    }
    let di = e1("ZodIBAN", (e, t) => {
      iV.init(e, t), l$.init(e, t);
    });
    function dr(e) {
      return o$(di, e);
    }
    let da = e1("ZodJWT", (e, t) => {
      iK.init(e, t), l$.init(e, t);
    });
    function ds(e) {
      return oy(da, e);
    }
    let du = e1("ZodCustomStringFormat", (e, t) => {
      iG.init(e, t), l$.init(e, t);
    });
    function dl(e, t, n = {}) {
      return sV(du, e, t, n);
    }
    function dd(e) {
      return sV(du, "hostname", t5, e);
    }
    function dc(e) {
      return sV(du, "hex", ny, e);
    }
    function dm(e) {
      return sV(du, "currency_code", nn, e);
    }
    function df(e, t) {
      let n = t?.enc ?? "hex",
        i = `${e}_${n}`,
        r = u2[i];
      if (!r) throw Error(`Unrecognized hash format: ${i}`);
      return sV(du, i, r, t);
    }
    let dp = e1(
      "ZodNumber",
      (e, t) => {
        iH.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => um(e, t, n, i)),
          (e.isFinite = !0);
      },
      al.derived(
        {
          minValue: (e) => {
            let { minimum: t, exclusiveMinimum: n } = us(e);
            return Math.max(t ?? -1 / 0, n ?? -1 / 0);
          },
          maxValue: (e) => {
            let { maximum: t, exclusiveMaximum: n } = us(e);
            return Math.min(t ?? 1 / 0, n ?? 1 / 0);
          },
          isInt: (e) => {
            let { isInt: t, multipleOf: n } = us(e);
            return !!t || !!n?.some(Number.isSafeInteger);
          },
          format: (e) => us(e).format ?? null,
        },
        {
          gt(e, t) {
            return this.check(oH(e, t));
          },
          gte(e, t) {
            return this.check(oX(e, t));
          },
          min(e, t) {
            return this.check(oX(e, t));
          },
          lt(e, t) {
            return this.check(oK(e, t));
          },
          lte(e, t) {
            return this.check(oG(e, t));
          },
          max(e, t) {
            return this.check(oG(e, t));
          },
          int(e) {
            return this.check(dg(e));
          },
          safe(e) {
            return this.check(dg(e));
          },
          positive(e) {
            return this.check(oH(0, e));
          },
          nonnegative(e) {
            return this.check(oX(0, e));
          },
          negative(e) {
            return this.check(oK(0, e));
          },
          nonpositive(e) {
            return this.check(oG(0, e));
          },
          multipleOf(e, t) {
            return this.check(o4(e, t));
          },
          step(e, t) {
            return this.check(o4(e, t));
          },
          finite() {
            return this;
          },
        }
      )
    );
    function dh(e) {
      return oI(dp, e);
    }
    let dv = e1("ZodNumberFormat", (e, t) => {
      iX.init(e, t), dp.init(e, t);
    });
    function dg(e) {
      return oj(dv, e);
    }
    function d$(e) {
      return oN(dv, e);
    }
    function dy(e) {
      return oz(dv, e);
    }
    function db(e) {
      return oD(dv, e);
    }
    function d_(e) {
      return oA(dv, e);
    }
    let dx = e1("ZodBoolean", (e, t) => {
      iY.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uf(e, t, n, i));
    });
    function dw(e) {
      return oU(dx, e);
    }
    let dk = e1(
      "ZodBigInt",
      (e, t) => {
        iQ.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => up(e, t, n, i));
      },
      al.derived(
        {
          minValue: (e) => us(e).minimum ?? null,
          maxValue: (e) => us(e).maximum ?? null,
          format: (e) => us(e).format ?? null,
        },
        {
          gte(e, t) {
            return this.check(oX(e, t));
          },
          min(e, t) {
            return this.check(oX(e, t));
          },
          gt(e, t) {
            return this.check(oH(e, t));
          },
          lt(e, t) {
            return this.check(oK(e, t));
          },
          lte(e, t) {
            return this.check(oG(e, t));
          },
          max(e, t) {
            return this.check(oG(e, t));
          },
          positive(e) {
            return this.check(oH(BigInt(0), e));
          },
          negative(e) {
            return this.check(oK(BigInt(0), e));
          },
          nonpositive(e) {
            return this.check(oG(BigInt(0), e));
          },
          nonnegative(e) {
            return this.check(oX(BigInt(0), e));
          },
          multipleOf(e, t) {
            return this.check(o4(e, t));
          },
        }
      )
    );
    function dI(e) {
      return oP(dk, e);
    }
    let dS = e1("ZodBigIntFormat", (e, t) => {
      i0.init(e, t), dk.init(e, t);
    });
    function dj(e) {
      return oE(dS, e);
    }
    function dN(e) {
      return oZ(dS, e);
    }
    let dz = e1("ZodSymbol", (e, t) => {
      i1.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uh(e, t, n, i));
    });
    function dD(e) {
      return oT(dz, e);
    }
    let dA = e1("ZodUndefined", (e, t) => {
      i4.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => ug(e, t, n, i));
    });
    function dU(e) {
      return oL(dA, e);
    }
    let dO = e1("ZodNull", (e, t) => {
      i6.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uv(e, t, n, i));
    });
    function dP(e) {
      return oq(dO, e);
    }
    let dC = e1("ZodAny", (e, t) => {
      i2.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => ub(e, t, n, i));
    });
    function dE() {
      return oR(dC);
    }
    let dZ = e1("ZodUnknown", (e, t) => {
      i9.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => u_(e, t, n, i));
    });
    function dT() {
      return oF(dZ);
    }
    let dL = e1("ZodNever", (e, t) => {
      i3.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uy(e, t, n, i));
    });
    function dq(e) {
      return oM(dL, e);
    }
    let dR = e1("ZodVoid", (e, t) => {
      i5.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => u$(e, t, n, i));
    });
    function dF(e) {
      return oB(dR, e);
    }
    let dM = e1(
      "ZodDate",
      (e, t) => {
        i8.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => ux(e, t, n, i)),
          (e.min = (t, n) => e.check(oX(t, n))),
          (e.max = (t, n) => e.check(oG(t, n)));
      },
      al.derived(
        {
          minDate: (e) => {
            let { minimum: t } = us(e);
            return t ? new Date(t) : null;
          },
          maxDate: (e) => {
            let { maximum: t } = us(e);
            return t ? new Date(t) : null;
          },
        },
        {}
      )
    );
    function dB(e) {
      return oJ(dM, e);
    }
    let dJ = e1(
      "ZodArray",
      (e, t) => {
        lf(),
          rr.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => uP(e, t, n, i)),
          (e.element = t.element);
      },
      {
        min(e, t) {
          return this.check(o5(e, t));
        },
        nonempty(e) {
          return this.check(o5(1, e));
        },
        max(e, t) {
          return this.check(o3(e, t));
        },
        length(e, t) {
          return this.check(o8(e, t));
        },
        unwrap() {
          return this.element;
        },
      }
    );
    function dV(e, t) {
      return sp(dJ, e, t);
    }
    function dW(e) {
      return cs(Object.keys(e._zod.def.shape));
    }
    let dK = e1(
      "ZodObject",
      (e, t) => {
        lf(),
          rd.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => uE(e, t, n, i)),
          al.installLazyProp(e, "shape", (e) => e._zod.def.shape, !1);
      },
      {
        keyof() {
          return cs(Object.keys(this._zod.def.shape));
        },
        catchall(e) {
          return this.clone(al.mergeDefs(this._zod.def, { catchall: e }));
        },
        passthrough() {
          return this.clone(al.mergeDefs(this._zod.def, { catchall: dT() }));
        },
        loose() {
          return this.clone(al.mergeDefs(this._zod.def, { catchall: dT() }));
        },
        strict() {
          return this.clone(al.mergeDefs(this._zod.def, { catchall: dq() }));
        },
        strip() {
          return this.clone(al.mergeDefs(this._zod.def, { catchall: void 0 }));
        },
        extend(e) {
          return al.extend(this, e);
        },
        safeExtend(e) {
          return al.safeExtend(this, e);
        },
        merge(e) {
          return al.merge(this, e);
        },
        pick(e) {
          return al.pick(this, e);
        },
        omit(e) {
          return al.omit(this, e);
        },
        partial(...e) {
          return al.partial(ch, this, e[0]);
        },
        exactPartial(...e) {
          return al.partial(cg, this, e[0], "exactPartial");
        },
        required(...e) {
          return al.required(cS, this, e[0]);
        },
      }
    );
    function dG(e, t) {
      return new dK({
        type: "object",
        shape: e ?? {},
        ...al.normalizeParams(t),
      });
    }
    function dH(e, t) {
      return new dK({
        type: "object",
        shape: e,
        catchall: dq(),
        ...al.normalizeParams(t),
      });
    }
    function dX(e, t) {
      return new dK({
        type: "object",
        shape: e,
        catchall: dT(),
        ...al.normalizeParams(t),
      });
    }
    let dY = e1("ZodUnion", (e, t) => {
      rm.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uZ(e, t, n, i)),
        (e.options = t.options);
    });
    function dQ(e, t) {
      return new dY({ type: "union", options: e, ...al.normalizeParams(t) });
    }
    let d0 = e1("ZodXor", (e, t) => {
      dY.init(e, t),
        rp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uZ(e, t, n, i)),
        (e.options = t.options);
    });
    function d1(e, t) {
      return new d0({
        type: "union",
        options: e,
        inclusive: !1,
        ...al.normalizeParams(t),
      });
    }
    let d4 = e1("ZodDiscriminatedUnion", (e, t) => {
      dY.init(e, t), rg.init(e, t);
    });
    function d6(e, t, n) {
      return new d4({
        type: "union",
        options: t,
        discriminator: e,
        ...al.normalizeParams(n),
      });
    }
    let d2 = e1("ZodIntersection", (e, t) => {
      r$.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uT(e, t, n, i));
    });
    function d9(e, t) {
      return new d2({ type: "intersection", left: e, right: t });
    }
    let d3 = e1(
      "ZodTuple",
      (e, t) => {
        lf(),
          r_.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => uL(e, t, n, i));
      },
      {
        rest(e) {
          return this.clone({ ...this._zod.def, rest: e });
        },
        partial() {
          let e = this._zod.def;
          if (e.checks?.length)
            throw Error(
              ".partial() cannot be used on tuple schemas containing refinements"
            );
          return this.clone({
            ...e,
            items: e.items.map(
              (e) => new ch({ type: "optional", innerType: e })
            ),
          });
        },
      }
    );
    function d5(e, t, n) {
      let i = t instanceof n5,
        r = i ? n : t;
      return new d3({
        type: "tuple",
        items: e,
        rest: i ? t : null,
        ...al.normalizeParams(r),
      });
    }
    let d8 = e1("ZodRecord", (e, t) => {
      lf(),
        rI.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uR(e, t, n, i)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType);
    });
    function d7(e, t, n) {
      return new d8(
        t && t._zod
          ? {
              type: "record",
              keyType: e,
              valueType: t,
              ...al.normalizeParams(n),
            }
          : {
              type: "record",
              keyType: lg(),
              valueType: e,
              ...al.normalizeParams(t),
            }
      );
    }
    function ce(e, t, n) {
      return new d8({
        type: "record",
        keyType: e,
        valueType: t,
        ...al.normalizeParams(n),
        partial: !0,
      });
    }
    function ct(e, t, n) {
      return new d8({
        type: "record",
        keyType: e,
        valueType: t,
        mode: "loose",
        ...al.normalizeParams(n),
      });
    }
    let cn = e1("ZodMap", (e, t) => {
      lf(),
        rS.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uU(e, t, n, i)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType),
        (e.min = (...t) => e.check(o2(...t))),
        (e.nonempty = (t) => e.check(o2(1, t))),
        (e.max = (...t) => e.check(o6(...t))),
        (e.size = (...t) => e.check(o9(...t)));
    });
    function ci(e, t, n) {
      return new cn({
        type: "map",
        keyType: e,
        valueType: t,
        ...al.normalizeParams(n),
      });
    }
    let cr = e1("ZodSet", (e, t) => {
      lf(),
        rN.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uO(e, t, n, i)),
        (e.min = (...t) => e.check(o2(...t))),
        (e.nonempty = (t) => e.check(o2(1, t))),
        (e.max = (...t) => e.check(o6(...t))),
        (e.size = (...t) => e.check(o9(...t)));
    });
    function ca(e, t) {
      return new cr({ type: "set", valueType: e, ...al.normalizeParams(t) });
    }
    let co = e1("ZodEnum", (e, t) => {
      rD.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uw(e, t, n, i)),
        (e.enum = t.entries),
        (e.options = [...e._zod.values]);
      let n = new Set(Object.keys(t.entries));
      (e.extract = (e, i) => {
        let r = {};
        for (let i of e)
          if (n.has(i)) r[i] = t.entries[i];
          else throw Error(`Key ${i} not found in enum`);
        return new co({
          ...t,
          checks: [],
          ...al.normalizeParams(i),
          entries: r,
        });
      }),
        (e.exclude = (e, i) => {
          let r = { ...t.entries };
          for (let t of e)
            if (n.has(t)) delete r[t];
            else throw Error(`Key ${t} not found in enum`);
          return new co({
            ...t,
            checks: [],
            ...al.normalizeParams(i),
            entries: r,
          });
        });
    });
    function cs(e, t) {
      return new co({
        type: "enum",
        entries: Array.isArray(e)
          ? Object.fromEntries(e.map((e) => [e, e]))
          : e,
        ...al.normalizeParams(t),
      });
    }
    function cu(e, t) {
      return new co({ type: "enum", entries: e, ...al.normalizeParams(t) });
    }
    let cl = e1("ZodLiteral", (e, t) => {
      rA.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uk(e, t, n, i)),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, "value", {
          get() {
            if (t.values.length > 1)
              throw Error(
                "This schema contains multiple valid literal values. Use `.values` instead."
              );
            return t.values[0];
          },
        });
    });
    function cd(e, t) {
      return new cl({
        type: "literal",
        values: Array.isArray(e) ? e : [e],
        ...al.normalizeParams(t),
      });
    }
    let cc = e1("ZodFile", (e, t) => {
      rU.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uj(e, t, n, i)),
        (e.min = (t, n) => e.check(o2(t, n))),
        (e.max = (t, n) => e.check(o6(t, n))),
        (e.mime = (t, n) => e.check(ss(Array.isArray(t) ? t : [t], n)));
    });
    function cm(e) {
      return sS(cc, e);
    }
    let cf = e1("ZodTransform", (e, t) => {
      lf(),
        rO.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uA(e, t, n, i)),
        (e._zod.parse = (n, i) => {
          if ("backward" === i.direction) throw new e2(e.constructor.name);
          n.addIssue = (i) => {
            "string" == typeof i
              ? n.issues.push(al.issue(i, n.value, t))
              : (i.fatal && (i.continue = !1),
                i.code ?? (i.code = "custom"),
                "input" in i || (i.input = n.value),
                i.inst ?? (i.inst = e),
                n.issues.push(al.issue(i)));
          };
          let r = t.transform(n.value, n);
          return r instanceof Promise
            ? r.then((e) => ((n.value = e), n))
            : ((n.value = r), n);
        });
    });
    function cp(e) {
      return new cf({ type: "transform", transform: e });
    }
    let ch = e1("ZodOptional", (e, t) => {
      rC.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uY(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function cv(e) {
      return new ch({ type: "optional", innerType: e });
    }
    let cg = e1("ZodExactOptional", (e, t) => {
      rE.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uY(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function c$(e) {
      return new cg({ type: "optional", innerType: e });
    }
    let cy = e1("ZodNullable", (e, t) => {
      rZ.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uF(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function cb(e) {
      return new cy({ type: "nullable", innerType: e });
    }
    function c_(e) {
      return cv(cb(e));
    }
    let cx = e1("ZodDefault", (e, t) => {
      rT.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uV(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap);
    });
    function cw(e, t) {
      return new cx({
        type: "default",
        innerType: e,
        get defaultValue() {
          return "function" == typeof t ? t() : al.shallowClone(t);
        },
      });
    }
    let ck = e1("ZodPrefault", (e, t) => {
      rq.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uW(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function cI(e, t) {
      return new ck({
        type: "prefault",
        innerType: e,
        get defaultValue() {
          return "function" == typeof t ? t() : al.shallowClone(t);
        },
      });
    }
    let cS = e1("ZodNonOptional", (e, t) => {
      rR.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uM(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function cj(e, t) {
      return new cS({
        type: "nonoptional",
        innerType: e,
        ...al.normalizeParams(t),
      });
    }
    let cN = e1("ZodSuccess", (e, t) => {
      rM.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uN(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function cz(e) {
      return new cN({ type: "success", innerType: e });
    }
    let cD = e1("ZodCatch", (e, t) => {
      rJ.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uK(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap);
    });
    function cA(e, t) {
      return new cD({
        type: "catch",
        innerType: e,
        catchValue: "function" == typeof t ? t : u9.constantCatch(t),
      });
    }
    let cU = e1("ZodNaN", (e, t) => {
      rV.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uI(e, t, n, i));
    });
    function cO(e) {
      return oW(cU, e);
    }
    let cP = e1("ZodPipe", (e, t) => {
      rW.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uG(e, t, n, i)),
        (e.in = t.in),
        (e.out = t.out);
    });
    function cC(e, t) {
      return new cP({ type: "pipe", in: e, out: t });
    }
    let cE = e1("ZodCodec", (e, t) => {
      cP.init(e, t), rG.init(e, t);
    });
    function cZ(e, t, n) {
      return new cE({
        type: "pipe",
        in: e,
        out: t,
        transform: n.decode,
        reverseTransform: n.encode,
      });
    }
    function cT(e) {
      let t = e._zod.def;
      return new cE({
        type: "pipe",
        in: t.out,
        out: t.in,
        transform: t.reverseTransform,
        reverseTransform: t.transform,
      });
    }
    let cL = e1("ZodPreprocess", (e, t) => {
        cP.init(e, t), rY.init(e, t);
      }),
      cq = e1("ZodReadonly", (e, t) => {
        rQ.init(e, t),
          lp.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => uH(e, t, n, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
    function cR(e) {
      return new cq({ type: "readonly", innerType: e });
    }
    let cF = e1("ZodTemplateLiteral", (e, t) => {
      r1.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uS(e, t, n, i));
    });
    function cM(e, t) {
      return new cF({
        type: "template_literal",
        parts: e,
        ...al.normalizeParams(t),
      });
    }
    let cB = e1("ZodLazy", (e, t) => {
      r2.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uQ(e, t, n, i)),
        (e.unwrap = () => e._zod.def.getter());
    });
    function cJ(e) {
      return new cB({ type: "lazy", getter: e });
    }
    let cV = e1("ZodPromise", (e, t) => {
      r6.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uX(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
    });
    function cW(e) {
      return new cV({ type: "promise", innerType: e });
    }
    let cK = e1("ZodFunction", (e, t) => {
      r4.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uD(e, t, n, i));
    });
    function cG(e) {
      return new cK({
        type: "function",
        input: Array.isArray(e?.input) ? d5(e?.input) : e?.input ?? dV(dT()),
        output: e?.output ?? dT(),
      });
    }
    let cH = e1("ZodCustom", (e, t) => {
      r9.init(e, t),
        lp.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => uz(e, t, n, i));
    });
    function cX(e) {
      let t = new nU({ check: "custom" });
      return (t._zod.check = e), t;
    }
    function cY(e, t) {
      return sL(cH, e ?? (() => !0), t);
    }
    function cQ(e, t = {}) {
      return sq(cH, e, t);
    }
    function c0(e, t) {
      return sR(e, t);
    }
    let c1 = e1(
      "ZodInstanceOf",
      (e, t) => {
        cH.init(e, t);
      },
      {
        properties(e, t) {
          return this.check(so(e, t));
        },
      }
    );
    function c4(e, t = {}) {
      let n = new c1({
        type: "custom",
        check: "custom",
        fn: (t) => t instanceof e,
        abort: !0,
        ...al.normalizeParams(t),
      });
      return (
        (n._zod.bag.Class = e),
        (n._zod.check = (t) => {
          t.value instanceof e ||
            t.issues.push({
              code: "invalid_type",
              expected: e.name,
              input: t.value,
              inst: n,
              path: [...(n._zod.def.path ?? [])],
            });
        }),
        n
      );
    }
    let c6 = (...e) => sJ({ Codec: cE, Boolean: dx, String: lv }, ...e);
    function c2(e) {
      let t = cJ(() => dQ([lg(e), dh(), dw(), dP(), dV(t), d7(lg(), t)]));
      return t;
    }
    function c9(e, t) {
      return new cL({ type: "pipe", in: cp(e), out: t });
    }
    e.s(
      [
        "ZodAny",
        0,
        dC,
        "ZodArray",
        0,
        dJ,
        "ZodBase64",
        0,
        l9,
        "ZodBase64URL",
        0,
        l5,
        "ZodBigInt",
        0,
        dk,
        "ZodBigIntFormat",
        0,
        dS,
        "ZodBoolean",
        0,
        dx,
        "ZodCIDRv4",
        0,
        l1,
        "ZodCIDRv6",
        0,
        l6,
        "ZodCUID",
        0,
        lL,
        "ZodCUID2",
        0,
        lR,
        "ZodCatch",
        0,
        cD,
        "ZodCodec",
        0,
        cE,
        "ZodCreditCard",
        0,
        dt,
        "ZodCustom",
        0,
        cH,
        "ZodCustomStringFormat",
        0,
        du,
        "ZodDate",
        0,
        dM,
        "ZodDefault",
        0,
        cx,
        "ZodDiscriminatedUnion",
        0,
        d4,
        "ZodE164",
        0,
        l7,
        "ZodEmail",
        0,
        lw,
        "ZodEmoji",
        0,
        lC,
        "ZodEnum",
        0,
        co,
        "ZodExactOptional",
        0,
        cg,
        "ZodFile",
        0,
        cc,
        "ZodFunction",
        0,
        cK,
        "ZodGUID",
        0,
        lI,
        "ZodIBAN",
        0,
        di,
        "ZodIPv4",
        0,
        lG,
        "ZodIPv6",
        0,
        lQ,
        "ZodISODate",
        0,
        lb,
        "ZodISODateTime",
        0,
        ly,
        "ZodISODuration",
        0,
        lx,
        "ZodISOTime",
        0,
        l_,
        "ZodInstanceOf",
        0,
        c1,
        "ZodIntersection",
        0,
        d2,
        "ZodJWT",
        0,
        da,
        "ZodKSUID",
        0,
        lW,
        "ZodLazy",
        0,
        cB,
        "ZodLiteral",
        0,
        cl,
        "ZodMAC",
        0,
        lX,
        "ZodMap",
        0,
        cn,
        "ZodNaN",
        0,
        cU,
        "ZodNanoID",
        0,
        lZ,
        "ZodNever",
        0,
        dL,
        "ZodNonOptional",
        0,
        cS,
        "ZodNull",
        0,
        dO,
        "ZodNullable",
        0,
        cy,
        "ZodNumber",
        0,
        dp,
        "ZodNumberFormat",
        0,
        dv,
        "ZodObject",
        0,
        dK,
        "ZodOptional",
        0,
        ch,
        "ZodPipe",
        0,
        cP,
        "ZodPrefault",
        0,
        ck,
        "ZodPreprocess",
        0,
        cL,
        "ZodPromise",
        0,
        cV,
        "ZodReadonly",
        0,
        cq,
        "ZodRecord",
        0,
        d8,
        "ZodSet",
        0,
        cr,
        "ZodString",
        0,
        lv,
        "ZodStringFormat",
        0,
        l$,
        "ZodSuccess",
        0,
        cN,
        "ZodSymbol",
        0,
        dz,
        "ZodTemplateLiteral",
        0,
        cF,
        "ZodTransform",
        0,
        cf,
        "ZodTuple",
        0,
        d3,
        "ZodType",
        0,
        lp,
        "ZodULID",
        0,
        lM,
        "ZodURL",
        0,
        lU,
        "ZodUUID",
        0,
        lj,
        "ZodUndefined",
        0,
        dA,
        "ZodUnion",
        0,
        dY,
        "ZodUnknown",
        0,
        dZ,
        "ZodVoid",
        0,
        dR,
        "ZodXID",
        0,
        lJ,
        "ZodXor",
        0,
        d0,
        "_ZodString",
        0,
        lh,
        "_default",
        0,
        cw,
        "_function",
        0,
        cG,
        "any",
        0,
        dE,
        "array",
        0,
        dV,
        "base64",
        0,
        l3,
        "base64url",
        0,
        l8,
        "bigint",
        0,
        dI,
        "boolean",
        0,
        dw,
        "catch",
        0,
        cA,
        "check",
        0,
        cX,
        "cidrv4",
        0,
        l4,
        "cidrv6",
        0,
        l2,
        "codec",
        0,
        cZ,
        "creditCard",
        0,
        dn,
        "cuid",
        0,
        lq,
        "cuid2",
        0,
        lF,
        "currencyCode",
        0,
        dm,
        "custom",
        0,
        cY,
        "date",
        0,
        dB,
        "describe",
        0,
        sM,
        "discriminatedUnion",
        0,
        d6,
        "e164",
        0,
        de,
        "email",
        0,
        lk,
        "emoji",
        0,
        lE,
        "enum",
        0,
        cs,
        "exactOptional",
        0,
        c$,
        "file",
        0,
        cm,
        "float32",
        0,
        d$,
        "float64",
        0,
        dy,
        "function",
        0,
        cG,
        "guid",
        0,
        lS,
        "hash",
        0,
        df,
        "hex",
        0,
        dc,
        "hostname",
        0,
        dd,
        "httpUrl",
        0,
        lP,
        "iban",
        0,
        dr,
        "instanceof",
        0,
        c4,
        "int",
        0,
        dg,
        "int32",
        0,
        db,
        "int64",
        0,
        dj,
        "intersection",
        0,
        d9,
        "invertCodec",
        0,
        cT,
        "ipv4",
        0,
        lH,
        "ipv6",
        0,
        l0,
        "json",
        0,
        c2,
        "jwt",
        0,
        ds,
        "keyof",
        0,
        dW,
        "ksuid",
        0,
        lK,
        "lazy",
        0,
        cJ,
        "literal",
        0,
        cd,
        "looseObject",
        0,
        dX,
        "looseRecord",
        0,
        ct,
        "mac",
        0,
        lY,
        "map",
        0,
        ci,
        "meta",
        0,
        sB,
        "nan",
        0,
        cO,
        "nanoid",
        0,
        lT,
        "nativeEnum",
        0,
        cu,
        "never",
        0,
        dq,
        "nonoptional",
        0,
        cj,
        "null",
        0,
        dP,
        "nullable",
        0,
        cb,
        "nullish",
        0,
        c_,
        "number",
        0,
        dh,
        "object",
        0,
        dG,
        "optional",
        0,
        cv,
        "partialRecord",
        0,
        ce,
        "pipe",
        0,
        cC,
        "prefault",
        0,
        cI,
        "preprocess",
        0,
        c9,
        "promise",
        0,
        cW,
        "readonly",
        0,
        cR,
        "record",
        0,
        d7,
        "refine",
        0,
        cQ,
        "set",
        0,
        ca,
        "strictObject",
        0,
        dH,
        "string",
        0,
        lg,
        "stringFormat",
        0,
        dl,
        "stringbool",
        0,
        c6,
        "success",
        0,
        cz,
        "superRefine",
        0,
        c0,
        "symbol",
        0,
        dD,
        "templateLiteral",
        0,
        cM,
        "transform",
        0,
        cp,
        "tuple",
        0,
        d5,
        "uint32",
        0,
        d_,
        "uint64",
        0,
        dN,
        "ulid",
        0,
        lB,
        "undefined",
        0,
        dU,
        "union",
        0,
        dQ,
        "unknown",
        0,
        dT,
        "url",
        0,
        lO,
        "uuid",
        0,
        lN,
        "uuidv4",
        0,
        lz,
        "uuidv6",
        0,
        lD,
        "uuidv7",
        0,
        lA,
        "void",
        0,
        dF,
        "xid",
        0,
        lV,
        "xor",
        0,
        d1,
      ],
      362201
    );
    var c3 = e.i(362201);
    e.s(
      [
        "endsWith",
        0,
        sr,
        "gt",
        0,
        oH,
        "gte",
        0,
        oX,
        "includes",
        0,
        sn,
        "length",
        0,
        o8,
        "lowercase",
        0,
        se,
        "lt",
        0,
        oK,
        "lte",
        0,
        oG,
        "maxLength",
        0,
        o3,
        "maxSize",
        0,
        o6,
        "mime",
        0,
        ss,
        "minLength",
        0,
        o5,
        "minSize",
        0,
        o2,
        "multipleOf",
        0,
        o4,
        "negative",
        0,
        oQ,
        "nonnegative",
        0,
        o1,
        "nonpositive",
        0,
        o0,
        "normalize",
        0,
        sl,
        "overwrite",
        0,
        su,
        "positive",
        0,
        oY,
        "properties",
        0,
        so,
        "property",
        0,
        sa,
        "regex",
        0,
        o7,
        "size",
        0,
        o9,
        "slugify",
        0,
        sf,
        "startsWith",
        0,
        si,
        "toLowerCase",
        0,
        sc,
        "toUpperCase",
        0,
        sm,
        "trim",
        0,
        sd,
        "uppercase",
        0,
        st,
      ],
      430421
    );
    var c5 = e.i(430421);
    e.i(789282),
      e.s(
        [
          "decode",
          0,
          lo,
          "decodeAsync",
          0,
          lu,
          "encode",
          0,
          la,
          "encodeAsync",
          0,
          ls,
          "parse",
          0,
          lt,
          "parseAsync",
          0,
          ln,
          "safeDecode",
          0,
          ld,
          "safeDecodeAsync",
          0,
          lm,
          "safeEncode",
          0,
          ll,
          "safeEncodeAsync",
          0,
          lc,
          "safeParse",
          0,
          li,
          "safeParseAsync",
          0,
          lr,
          "validate",
          0,
          tb,
          "validateAsync",
          0,
          t_,
        ],
        100364
      ),
      e.i(100364);
    let c8 = {
      invalid_type: "invalid_type",
      too_big: "too_big",
      too_small: "too_small",
      invalid_format: "invalid_format",
      not_multiple_of: "not_multiple_of",
      unrecognized_keys: "unrecognized_keys",
      invalid_union: "invalid_union",
      invalid_key: "invalid_key",
      invalid_element: "invalid_element",
      invalid_value: "invalid_value",
      custom: "custom",
    };
    function c7(e) {
      e3({ customError: e });
    }
    function me() {
      return e3().customError;
    }
    a || (a = {}),
      e.s(
        [
          "$brand",
          0,
          e4,
          "ZodFirstPartyTypeKind",
          0,
          a,
          "ZodIssueCode",
          0,
          c8,
          "config",
          0,
          e3,
          "getErrorMap",
          0,
          me,
          "setErrorMap",
          0,
          c7,
        ],
        458829
      ),
      e.i(458829);
    var u2 = ad,
      u9 = al;
    e.s(
      [
        "ZodISODate",
        0,
        lb,
        "ZodISODateTime",
        0,
        ly,
        "ZodISODuration",
        0,
        lx,
        "ZodISOTime",
        0,
        l_,
        "date",
        0,
        function (e) {
          return ox(lb, e);
        },
        "datetime",
        0,
        function (e) {
          return o_(ly, e);
        },
        "duration",
        0,
        function (e) {
          return ok(lx, e);
        },
        "time",
        0,
        function (e) {
          return ow(l_, e);
        },
      ],
      49732
    );
    var mt = e.i(49732);
    let mn = { ...c3, ...c5, iso: mt },
      mi = new Set([
        "$schema",
        "$ref",
        "$defs",
        "definitions",
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
        "type",
        "enum",
        "const",
        "anyOf",
        "oneOf",
        "allOf",
        "not",
        "properties",
        "required",
        "additionalProperties",
        "patternProperties",
        "propertyNames",
        "minProperties",
        "maxProperties",
        "items",
        "prefixItems",
        "additionalItems",
        "minItems",
        "maxItems",
        "uniqueItems",
        "contains",
        "minContains",
        "maxContains",
        "minLength",
        "maxLength",
        "pattern",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "description",
        "default",
        "contentEncoding",
        "contentMediaType",
        "contentSchema",
        "unevaluatedItems",
        "unevaluatedProperties",
        "if",
        "then",
        "else",
        "dependentSchemas",
        "dependentRequired",
        "nullable",
        "readOnly",
      ]);
    function mr(e, t) {
      return e.map((e, n) => (n < t ? e : e.optional()));
    }
    let ma = new Set([
        "items",
        "prefixItems",
        "additionalItems",
        "additionalProperties",
        "contains",
        "propertyNames",
        "not",
        "if",
        "then",
        "else",
        "allOf",
        "anyOf",
        "oneOf",
        "unevaluatedItems",
        "unevaluatedProperties",
        "contentSchema",
      ]),
      mo = new Set([
        "properties",
        "patternProperties",
        "dependentSchemas",
        "dependencies",
        "$defs",
        "definitions",
      ]);
    function ms(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        (Array.isArray(e)
          ? e.some(ms)
          : "string" == typeof e.$ref ||
            Object.entries(e).some(([e, t]) =>
              ma.has(e)
                ? ms(t)
                : !!mo.has(e) &&
                  "object" == typeof t &&
                  null !== t &&
                  Object.values(t).some(ms)
            ))
      );
    }
    function mu(e) {
      return 1 === e ? "element" : "elements";
    }
    function ml(e, t) {
      if (!1 !== e) return void 0 === e || !0 === e ? mn.any() : mc(e, t);
    }
    let md =
      /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/;
    function mc(e, t) {
      if ("boolean" == typeof e) return e ? mn.any() : mn.never();
      let n = (function e(t, n) {
          var i, r, a, o;
          let s;
          if (void 0 !== t.not) {
            if ("object" == typeof t.not && 0 === Object.keys(t.not).length)
              return mn.never();
            throw Error(
              "not is not supported in Zod (except { not: {} } for never)"
            );
          }
          if (void 0 !== t.unevaluatedItems)
            throw Error("unevaluatedItems is not supported");
          if (void 0 !== t.unevaluatedProperties)
            throw Error("unevaluatedProperties is not supported");
          if (void 0 !== t.if || void 0 !== t.then || void 0 !== t.else)
            throw Error("Conditional schemas (if/then/else) are not supported");
          if (void 0 !== t.dependentSchemas || void 0 !== t.dependentRequired)
            throw Error(
              "dependentSchemas and dependentRequired are not supported"
            );
          if (t.$ref) {
            let e = t.$ref;
            if (n.refs.has(e)) return n.refs.get(e);
            if (n.processing.has(e))
              return mn.lazy(() => {
                if (!n.refs.has(e))
                  throw Error(`Circular reference not resolved: ${e}`);
                return n.refs.get(e);
              });
            n.processing.add(e);
            let i = mc(
              (function (e, t) {
                if (!e.startsWith("#"))
                  throw Error(
                    "External $ref is not supported, only local refs (#/...) are allowed"
                  );
                let n = e.slice(1).split("/").filter(Boolean);
                if (0 === n.length) return t.rootSchema;
                let i = "draft-2020-12" === t.version ? "$defs" : "definitions";
                if (n[0] === i) {
                  let i =
                    void 0 === n[1]
                      ? void 0
                      : n[1].replace(/~1/g, "/").replace(/~0/g, "~");
                  if (!i || !t.defs[i])
                    throw Error(`Reference not found: ${e}`);
                  return t.defs[i];
                }
                throw Error(`Reference not found: ${e}`);
              })(e, n),
              n
            );
            return n.refs.set(e, i), n.processing.delete(e), i;
          }
          if (void 0 !== t.enum) {
            let e = t.enum;
            if (
              "openapi-3.0" === n.version &&
              !0 === t.nullable &&
              1 === e.length &&
              null === e[0]
            )
              return mn.null();
            if (0 === e.length) return mn.never();
            if (1 === e.length) return mn.literal(e[0]);
            if (e.every((e) => "string" == typeof e)) return mn.enum(e);
            let i = e.map((e) => mn.literal(e));
            return i.length < 2 ? i[0] : mn.union([i[0], i[1], ...i.slice(2)]);
          }
          if (void 0 !== t.const) return mn.literal(t.const);
          let u = t.type;
          if (Array.isArray(u)) {
            let i = u.map((i) => e({ ...t, type: i }, n));
            return 0 === i.length
              ? mn.never()
              : 1 === i.length
              ? i[0]
              : mn.union(i);
          }
          if (!u) return mn.any();
          switch (u) {
            case "string": {
              let e = mn.string();
              if (t.format) {
                let n = t.format;
                "email" === n
                  ? (e = e.check(mn.email()))
                  : "uri" === n || "uri-reference" === n
                  ? (e = e.check(mn.url()))
                  : "uuid" === n || "guid" === n
                  ? (e = e.check(mn.uuid()))
                  : "date-time" === n
                  ? (e = e.check(mn.iso.datetime({ offset: !0 })))
                  : "date" === n
                  ? (e = e.check(mn.iso.date()))
                  : "time" === n
                  ? (e = e.check(mn.regex(md)))
                  : "duration" === n
                  ? (e = e.check(mn.iso.duration()))
                  : "hostname" === n
                  ? (e = e.check(mn.hostname()))
                  : "ipv4" === n
                  ? (e = e.check(mn.ipv4()))
                  : "ipv6" === n
                  ? (e = e.check(mn.ipv6()))
                  : "mac" === n
                  ? (e = e.check(mn.mac()))
                  : "cidr" === n
                  ? (e = e.check(mn.cidrv4()))
                  : "cidr-v6" === n
                  ? (e = e.check(mn.cidrv6()))
                  : "base64" === n
                  ? (e = e.check(mn.base64()))
                  : "base64url" === n
                  ? (e = e.check(mn.base64url()))
                  : "e164" === n
                  ? (e = e.check(mn.e164()))
                  : "credit_card" === n
                  ? (e = e.check(mn.creditCard()))
                  : "iban" === n
                  ? (e = e.check(mn.iban()))
                  : "jwt" === n
                  ? (e = e.check(mn.jwt()))
                  : "emoji" === n
                  ? (e = e.check(mn.emoji()))
                  : "nanoid" === n
                  ? (e = e.check(mn.nanoid()))
                  : "cuid" === n
                  ? (e = e.check(mn.cuid()))
                  : "cuid2" === n
                  ? (e = e.check(mn.cuid2()))
                  : "ulid" === n
                  ? (e = e.check(mn.ulid()))
                  : "xid" === n
                  ? (e = e.check(mn.xid()))
                  : "ksuid" === n && (e = e.check(mn.ksuid()));
              }
              "number" == typeof t.minLength && (e = e.min(t.minLength)),
                "number" == typeof t.maxLength && (e = e.max(t.maxLength)),
                t.pattern && (e = e.regex(new RegExp(t.pattern))),
                (s = e);
              break;
            }
            case "number":
            case "integer": {
              let e = "integer" === u ? mn.number().int() : mn.number();
              "number" == typeof t.minimum &&
                !0 !== t.exclusiveMinimum &&
                (e = e.min(t.minimum)),
                "number" == typeof t.maximum &&
                  !0 !== t.exclusiveMaximum &&
                  (e = e.max(t.maximum)),
                "number" == typeof t.exclusiveMinimum
                  ? (e = e.gt(t.exclusiveMinimum))
                  : !0 === t.exclusiveMinimum &&
                    "number" == typeof t.minimum &&
                    (e = e.gt(t.minimum)),
                "number" == typeof t.exclusiveMaximum
                  ? (e = e.lt(t.exclusiveMaximum))
                  : !0 === t.exclusiveMaximum &&
                    "number" == typeof t.maximum &&
                    (e = e.lt(t.maximum)),
                "number" == typeof t.multipleOf &&
                  (e = e.multipleOf(t.multipleOf)),
                (s = e);
              break;
            }
            case "boolean":
              s = mn.boolean();
              break;
            case "null":
              s = mn.null();
              break;
            case "object": {
              let e = {},
                a = t.properties || {},
                o = new Set(t.required || []),
                u =
                  "object" == typeof t.additionalProperties
                    ? mc(t.additionalProperties, n)
                    : void 0;
              for (let [t, i] of Object.entries(a)) {
                let r = mc(i, n);
                E(e, t, o.has(t) ? r : r.optional());
              }
              if (t.patternProperties) {
                let i = t.patternProperties,
                  r = Object.keys(i),
                  a = [];
                for (let e of r) {
                  let t = mc(i[e], n),
                    r = mn.string().regex(new RegExp(e));
                  a.push(mn.looseRecord(r, t));
                }
                let o = [];
                if (
                  (Object.keys(e).length > 0 &&
                    o.push(mn.object(e).passthrough()),
                  o.push(...a),
                  0 === o.length)
                )
                  s = mn.object({}).passthrough();
                else if (1 === o.length) s = o[0];
                else {
                  let e = mn.intersection(o[0], o[1]);
                  for (let t = 2; t < o.length; t++)
                    e = mn.intersection(e, o[t]);
                  s = e;
                }
                if (!1 === t.additionalProperties) {
                  let t = Object.keys(e),
                    n = r.map((e) => new RegExp(e)),
                    i = s;
                  s = s.check((e) => {
                    if (!Y(e.value)) return;
                    let r = [];
                    for (let i of Object.keys(e.value))
                      !t.includes(i) && (n.some((e) => e.test(i)) || r.push(i));
                    r.length &&
                      e.issues.push({
                        code: "unrecognized_keys",
                        keys: r,
                        input: e.value,
                        inst: i,
                      });
                  });
                }
              } else {
                let n = mn.object(e);
                s =
                  !1 === t.additionalProperties
                    ? n.strict()
                    : u
                    ? n.catchall(u)
                    : n.passthrough();
              }
              let l = void 0 !== t.propertyNames && !0 !== t.propertyNames,
                d =
                  "number" == typeof t.minProperties ? t.minProperties : void 0,
                c =
                  "number" == typeof t.maxProperties ? t.maxProperties : void 0;
              if (l || void 0 !== d || void 0 !== c) {
                let e;
                l &&
                  (e = mc(
                    "object" == typeof t.propertyNames &&
                      void 0 === t.propertyNames.type
                      ? { type: "string", ...t.propertyNames }
                      : t.propertyNames,
                    n
                  )),
                  (i = s),
                  (r = { keySchema: e, minProperties: d, maxProperties: c }),
                  (s = mn
                    .transform((e) => e)
                    .check((e) => {
                      let t = e.value;
                      if (
                        "object" != typeof t ||
                        null === t ||
                        Array.isArray(t)
                      )
                        return;
                      let n = Object.getOwnPropertyNames(t);
                      if (
                        (void 0 !== r.minProperties &&
                          n.length < r.minProperties &&
                          e.issues.push({
                            origin: "object",
                            code: "too_small",
                            minimum: r.minProperties,
                            inclusive: !0,
                            message: `Too small: expected object to have >=${r.minProperties} properties`,
                            input: t,
                            inst: i,
                            continue: !0,
                          }),
                        void 0 !== r.maxProperties &&
                          n.length > r.maxProperties &&
                          e.issues.push({
                            origin: "object",
                            code: "too_big",
                            maximum: r.maxProperties,
                            inclusive: !0,
                            message: `Too big: expected object to have <=${r.maxProperties} properties`,
                            input: t,
                            inst: i,
                            continue: !0,
                          }),
                        r.keySchema)
                      )
                        for (let t of n) {
                          let n = r.keySchema.safeParse(t);
                          n.success ||
                            e.issues.push({
                              code: "invalid_key",
                              origin: "record",
                              issues: n.error.issues,
                              input: t,
                              path: [t],
                              continue: !0,
                            });
                        }
                    })
                    .pipe(i));
              }
              break;
            }
            case "array": {
              let e = t.prefixItems,
                i = t.items;
              if (e && Array.isArray(e)) {
                let r = "number" == typeof t.minItems ? t.minItems : 0,
                  a = mr(
                    e.map((e) => mc(e, n)),
                    r
                  ),
                  o = Array.isArray(i) ? void 0 : ml(i, n),
                  u = mn.tuple(a);
                (s = o ? u.rest(o) : u),
                  "number" == typeof t.minItems &&
                    (s = s.check(mn.minLength(t.minItems))),
                  "number" == typeof t.maxItems &&
                    (s = s.check(mn.maxLength(t.maxItems)));
              } else if (Array.isArray(i)) {
                let e = "number" == typeof t.minItems ? t.minItems : 0,
                  r = mr(
                    i.map((e) => mc(e, n)),
                    e
                  ),
                  a = ml(t.additionalItems, n),
                  o = mn.tuple(r);
                (s = a ? o.rest(a) : o),
                  "number" == typeof t.minItems &&
                    (s = s.check(mn.minLength(t.minItems))),
                  "number" == typeof t.maxItems &&
                    (s = s.check(mn.maxLength(t.maxItems)));
              } else if (void 0 !== i) {
                let e = mc(i, n),
                  r = mn.array(e);
                "number" == typeof t.minItems && (r = r.min(t.minItems)),
                  "number" == typeof t.maxItems && (r = r.max(t.maxItems)),
                  (s = r);
              } else s = mn.array(mn.any());
              (!0 === t.uniqueItems || void 0 !== t.contains) &&
                ((a = s),
                (o = {
                  uniqueItems: !0 === t.uniqueItems,
                  containsSchema:
                    void 0 !== t.contains ? mc(t.contains, n) : void 0,
                  minContains:
                    "number" == typeof t.minContains ? t.minContains : void 0,
                  maxContains:
                    "number" == typeof t.maxContains ? t.maxContains : void 0,
                }),
                (s = mn
                  .transform((e) => e)
                  .check((e) => {
                    let t = e.value;
                    if (Array.isArray(t)) {
                      if (!0 === o.uniqueItems) {
                        let n = new Map();
                        for (let i = 0; i < t.length; i++) {
                          let r = (function e(t, n) {
                            if (null === t) return "z";
                            let i = typeof t;
                            if ("object" !== i) {
                              if ("number" === i && Number.isNaN(t))
                                return null;
                              let e = String(t);
                              return `${i[0]}${e.length}:${e}`;
                            }
                            if (n.has(t)) return null;
                            n.add(t);
                            try {
                              if (Array.isArray(t)) {
                                let i = [];
                                for (let r of t) {
                                  let t = e(r, n);
                                  if (null === t) return null;
                                  i.push(t);
                                }
                                return `a${i.length}:[${i.join(",")}]`;
                              }
                              let i = Object.keys(t).sort(),
                                r = [];
                              for (let a of i) {
                                let i = e(t[a], n);
                                if (null === i) return null;
                                r.push(`${a.length}:${a}=${i}`);
                              }
                              return `o${r.length}:{${r.join(",")}}`;
                            } finally {
                              n.delete(t);
                            }
                          })(t[i], new Set());
                          if (null === r) continue;
                          let a = n.get(r);
                          if (void 0 === a) {
                            n.set(r, i);
                            continue;
                          }
                          e.issues.push({
                            code: "custom",
                            message: `Array items must be unique: element at index ${i} duplicates the one at index ${a}`,
                            input: t,
                            path: [i],
                            continue: !0,
                          });
                        }
                      }
                      if (o.containsSchema) {
                        let n = o.minContains ?? 1,
                          i =
                            void 0 !== o.maxContains
                              ? o.maxContains + 1
                              : 1 / 0,
                          r = 0;
                        for (let e of t)
                          if (o.containsSchema.safeParse(e).success && ++r >= i)
                            break;
                        r < n &&
                          e.issues.push({
                            code: "custom",
                            message: `Array must contain at least ${n} matching ${mu(
                              n
                            )}; found ${r}`,
                            input: t,
                            continue: !0,
                          }),
                          void 0 !== o.maxContains &&
                            r > o.maxContains &&
                            e.issues.push({
                              code: "custom",
                              message: `Array must contain at most ${
                                o.maxContains
                              } matching ${mu(o.maxContains)}`,
                              input: t,
                              continue: !0,
                            });
                      }
                    }
                  })
                  .pipe(a)));
              break;
            }
            default:
              throw Error(`Unsupported type: ${u}`);
          }
          return s;
        })(e, t),
        i = e.type || void 0 !== e.enum || void 0 !== e.const;
      if (e.anyOf && Array.isArray(e.anyOf)) {
        let r = e.anyOf.map((e) => mc(e, t)),
          a = mn.union(r);
        n = i ? mn.intersection(n, a) : a;
      }
      if (e.oneOf && Array.isArray(e.oneOf)) {
        let r = e.oneOf.map((e) => mc(e, t)),
          a = mn.xor(r);
        n = i ? mn.intersection(n, a) : a;
      }
      if (e.allOf && Array.isArray(e.allOf))
        if (0 === e.allOf.length) n = i ? n : mn.any();
        else {
          let r = i ? n : mc(e.allOf[0], t),
            a = +!i;
          for (let n = a; n < e.allOf.length; n++)
            r = mn.intersection(r, mc(e.allOf[n], t));
          n = r;
        }
      !0 === e.nullable && "openapi-3.0" === t.version && (n = mn.nullable(n)),
        !0 === e.readOnly && (n = mn.readonly(n)),
        void 0 !== e.default && (n = n.default(e.default));
      let r = {};
      for (let t of [
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
      ])
        t in e && (r[t] = e[t]);
      for (let t of ["contentEncoding", "contentMediaType", "contentSchema"])
        t in e && (r[t] = e[t]);
      if ("object" === e.type && void 0 === e.$ref)
        for (let t of (void 0 === e.propertyNames ||
          ms(e.propertyNames) ||
          (r.propertyNames = e.propertyNames),
        ["minProperties", "maxProperties"]))
          void 0 !== e[t] && (r[t] = e[t]);
      if ("array" === e.type && void 0 === e.$ref)
        for (let t of (void 0 === e.contains ||
          ms(e.contains) ||
          (r.contains = e.contains),
        ["uniqueItems", "minContains", "maxContains"]))
          void 0 !== e[t] && (r[t] = e[t]);
      for (let t of Object.keys(e)) mi.has(t) || E(r, t, e[t]);
      return (
        Object.keys(r).length > 0 && t.registry.add(n, r),
        e.description && (n = n.describe(e.description)),
        n
      );
    }
    let mm = Symbol("z.visit/resolving");
    function mf(e, t) {
      let n =
          "function" == typeof t
            ? t
            : (e, n) => {
                let i = t[e._zod.def.type];
                return i ? i(e, n) : e;
              },
        i = new Map();
      return (function e(t) {
        let r = i.get(t);
        if (r === mm) return new r2({ type: "lazy", getter: () => i.get(t) });
        if (void 0 !== r) return r;
        i.set(t, mm);
        let a = (function (t) {
            let n = t._zod.def;
            switch (n.type) {
              case "object": {
                let i = n.shape,
                  r = Object.keys(i),
                  a = !1,
                  o = {};
                for (let t of r) {
                  let n = e(i[t]);
                  n !== i[t] && (a = !0), (o[t] = n);
                }
                let s = n.catchall;
                return (
                  n.catchall && (s = e(n.catchall)) !== n.catchall && (a = !0),
                  a ? ea(t, { ...n, shape: o, catchall: s }) : t
                );
              }
              case "array": {
                let i = e(n.element);
                return i === n.element ? t : ea(t, { ...n, element: i });
              }
              case "tuple": {
                let i = n.items,
                  r = !1,
                  a = [];
                for (let t of i) {
                  let n = e(t);
                  n !== t && (r = !0), a.push(n);
                }
                let o = n.rest;
                return (
                  n.rest && (o = e(n.rest)) !== n.rest && (r = !0),
                  r ? ea(t, { ...n, items: a, rest: o }) : t
                );
              }
              case "record":
              case "map": {
                let i = e(n.keyType),
                  r = e(n.valueType);
                return i === n.keyType && r === n.valueType
                  ? t
                  : ea(t, { ...n, keyType: i, valueType: r });
              }
              case "set": {
                let i = e(n.valueType);
                return i === n.valueType ? t : ea(t, { ...n, valueType: i });
              }
              case "union": {
                let i = n.options,
                  r = !1,
                  a = [];
                for (let t of i) {
                  let n = e(t);
                  n !== t && (r = !0), a.push(n);
                }
                return r ? ea(t, { ...n, options: a }) : t;
              }
              case "intersection": {
                let i = e(n.left),
                  r = e(n.right);
                return i === n.left && r === n.right
                  ? t
                  : ea(t, { ...n, left: i, right: r });
              }
              case "optional":
              case "nullable":
              case "default":
              case "prefault":
              case "catch":
              case "readonly":
              case "nonoptional":
              case "promise":
              case "success": {
                let i = e(n.innerType);
                return i === n.innerType ? t : ea(t, { ...n, innerType: i });
              }
              case "pipe": {
                let i = e(n.in),
                  r = e(n.out);
                return i === n.in && r === n.out
                  ? t
                  : ea(t, { ...n, in: i, out: r });
              }
              case "function": {
                let i = e(n.input),
                  r = e(n.output);
                return i === n.input && r === n.output
                  ? t
                  : ea(t, { ...n, input: i, output: r });
              }
              case "lazy": {
                let i = n.getter,
                  { _cachedInner: r, ...a } = n;
                return ea(t, { ...a, getter: () => e(i()) });
              }
              default:
                return t;
            }
          })(t),
          o = n(a, a !== t);
        return i.set(t, o), o;
      })(e);
    }
    function mp(e) {
      return (function (e, t) {
        if (!t?.length) return e;
        let n = e._zod.def;
        return ea(e, F(n, { checks: [...(n.checks ?? []), ...t] }), {
          parent: !0,
        });
      })(e.out, e.checks);
    }
    e.s(
      [
        "bigint",
        0,
        function (e) {
          return oC(dk, e);
        },
        "boolean",
        0,
        function (e) {
          return oO(dx, e);
        },
        "date",
        0,
        function (e) {
          return oV(dM, e);
        },
        "number",
        0,
        function (e) {
          return oS(dp, e);
        },
        "string",
        0,
        function (e) {
          return a2(lv, e);
        },
      ],
      313657
    );
    var mh = e.i(313657);
    e.s(
      [
        "$brand",
        0,
        e4,
        "$input",
        0,
        ax,
        "$output",
        0,
        a_,
        "INVALID",
        0,
        aS,
        "NEVER",
        0,
        eY,
        "TimePrecision",
        0,
        ob,
        "ZodAny",
        0,
        dC,
        "ZodArray",
        0,
        dJ,
        "ZodBase64",
        0,
        l9,
        "ZodBase64URL",
        0,
        l5,
        "ZodBigInt",
        0,
        dk,
        "ZodBigIntFormat",
        0,
        dS,
        "ZodBoolean",
        0,
        dx,
        "ZodCIDRv4",
        0,
        l1,
        "ZodCIDRv6",
        0,
        l6,
        "ZodCUID",
        0,
        lL,
        "ZodCUID2",
        0,
        lR,
        "ZodCatch",
        0,
        cD,
        "ZodCodec",
        0,
        cE,
        "ZodCompileAsyncError",
        0,
        aN,
        "ZodCompileUnsupportedError",
        0,
        az,
        "ZodCreditCard",
        0,
        dt,
        "ZodCustom",
        0,
        cH,
        "ZodCustomStringFormat",
        0,
        du,
        "ZodDate",
        0,
        dM,
        "ZodDefault",
        0,
        cx,
        "ZodDiscriminatedUnion",
        0,
        d4,
        "ZodE164",
        0,
        l7,
        "ZodEmail",
        0,
        lw,
        "ZodEmoji",
        0,
        lC,
        "ZodEnum",
        0,
        co,
        "ZodError",
        0,
        u7,
        "ZodExactOptional",
        0,
        cg,
        "ZodFile",
        0,
        cc,
        "ZodFirstPartyTypeKind",
        0,
        a,
        "ZodFunction",
        0,
        cK,
        "ZodGUID",
        0,
        lI,
        "ZodIBAN",
        0,
        di,
        "ZodIPv4",
        0,
        lG,
        "ZodIPv6",
        0,
        lQ,
        "ZodISODate",
        0,
        lb,
        "ZodISODateTime",
        0,
        ly,
        "ZodISODuration",
        0,
        lx,
        "ZodISOTime",
        0,
        l_,
        "ZodInstanceOf",
        0,
        c1,
        "ZodIntersection",
        0,
        d2,
        "ZodIssueCode",
        0,
        c8,
        "ZodJWT",
        0,
        da,
        "ZodKSUID",
        0,
        lW,
        "ZodLazy",
        0,
        cB,
        "ZodLiteral",
        0,
        cl,
        "ZodMAC",
        0,
        lX,
        "ZodMap",
        0,
        cn,
        "ZodNaN",
        0,
        cU,
        "ZodNanoID",
        0,
        lZ,
        "ZodNever",
        0,
        dL,
        "ZodNonOptional",
        0,
        cS,
        "ZodNull",
        0,
        dO,
        "ZodNullable",
        0,
        cy,
        "ZodNumber",
        0,
        dp,
        "ZodNumberFormat",
        0,
        dv,
        "ZodObject",
        0,
        dK,
        "ZodOptional",
        0,
        ch,
        "ZodPipe",
        0,
        cP,
        "ZodPrefault",
        0,
        ck,
        "ZodPreprocess",
        0,
        cL,
        "ZodPromise",
        0,
        cV,
        "ZodReadonly",
        0,
        cq,
        "ZodRealError",
        0,
        le,
        "ZodRecord",
        0,
        d8,
        "ZodSet",
        0,
        cr,
        "ZodString",
        0,
        lv,
        "ZodStringFormat",
        0,
        l$,
        "ZodSuccess",
        0,
        cN,
        "ZodSymbol",
        0,
        dz,
        "ZodTemplateLiteral",
        0,
        cF,
        "ZodTransform",
        0,
        cf,
        "ZodTuple",
        0,
        d3,
        "ZodType",
        0,
        lp,
        "ZodULID",
        0,
        lM,
        "ZodURL",
        0,
        lU,
        "ZodUUID",
        0,
        lj,
        "ZodUndefined",
        0,
        dA,
        "ZodUnion",
        0,
        dY,
        "ZodUnknown",
        0,
        dZ,
        "ZodVoid",
        0,
        dR,
        "ZodXID",
        0,
        lJ,
        "ZodXor",
        0,
        d0,
        "_ZodString",
        0,
        lh,
        "_default",
        0,
        cw,
        "_function",
        0,
        cG,
        "any",
        0,
        dE,
        "array",
        0,
        dV,
        "base64",
        0,
        l3,
        "base64url",
        0,
        l8,
        "bigint",
        0,
        dI,
        "boolean",
        0,
        dw,
        "catch",
        0,
        cA,
        "check",
        0,
        cX,
        "cidrv4",
        0,
        l4,
        "cidrv6",
        0,
        l2,
        "clone",
        0,
        ea,
        "codec",
        0,
        cZ,
        "coerce",
        0,
        mh,
        "compile",
        0,
        aD,
        "config",
        0,
        e3,
        "core",
        0,
        u6,
        "creditCard",
        0,
        dn,
        "cuid",
        0,
        lq,
        "cuid2",
        0,
        lF,
        "currencyCode",
        0,
        dm,
        "custom",
        0,
        cY,
        "date",
        0,
        dB,
        "decode",
        0,
        lo,
        "decodeAsync",
        0,
        lu,
        "deepPartial",
        0,
        function (e) {
          return mf(e, {
            object: (e) => e.partial(),
            union: (e) => {
              let t = e._zod.def;
              return void 0 === t.discriminator ? e : dQ(t.options);
            },
          });
        },
        "describe",
        0,
        sM,
        "discriminatedUnion",
        0,
        d6,
        "e164",
        0,
        de,
        "email",
        0,
        lk,
        "emoji",
        0,
        lE,
        "encode",
        0,
        la,
        "encodeAsync",
        0,
        ls,
        "endsWith",
        0,
        sr,
        "enum",
        0,
        cs,
        "exactOptional",
        0,
        c$,
        "file",
        0,
        cm,
        "flattenError",
        0,
        ti,
        "float32",
        0,
        d$,
        "float64",
        0,
        dy,
        "formatError",
        0,
        tr,
        "fromJSONSchema",
        0,
        function (e, t) {
          var n, i;
          let r, a;
          if ("boolean" == typeof e) return e ? mn.any() : mn.never();
          try {
            r = JSON.parse(JSON.stringify(e));
          } catch {
            throw Error(
              "fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas"
            );
          }
          let o = {
            version:
              ((n = r),
              (i = t?.defaultTarget),
              "https://json-schema.org/draft/2020-12/schema" === (a = n.$schema)
                ? "draft-2020-12"
                : "http://json-schema.org/draft-07/schema#" === a
                ? "draft-7"
                : "http://json-schema.org/draft-04/schema#" === a
                ? "draft-4"
                : i ?? "draft-2020-12"),
            defs: r.$defs || r.definitions || {},
            refs: new Map(),
            processing: new Set(),
            rootSchema: r,
            registry: t?.registry ?? aI,
          };
          return mc(r, o);
        },
        "function",
        0,
        cG,
        "getDiscriminatedOption",
        0,
        rh,
        "getErrorMap",
        0,
        me,
        "globalRegistry",
        0,
        aI,
        "gt",
        0,
        oH,
        "gte",
        0,
        oX,
        "guid",
        0,
        lS,
        "hash",
        0,
        df,
        "hex",
        0,
        dc,
        "hostname",
        0,
        dd,
        "httpUrl",
        0,
        lP,
        "iban",
        0,
        dr,
        "includes",
        0,
        sn,
        "input",
        0,
        function (e) {
          return mf(e, {
            pipe: (e) => {
              var t;
              return (t = e._zod.def).in._zod.traits.has("$ZodTransform")
                ? mp(t)
                : t.in;
            },
            default: (e, t) => (t ? cv(e._zod.def.innerType) : e),
            catch: (e, t) => (t ? e._zod.def.innerType : e),
          });
        },
        "instanceof",
        0,
        c4,
        "int",
        0,
        dg,
        "int32",
        0,
        db,
        "int64",
        0,
        dj,
        "intersection",
        0,
        d9,
        "invertCodec",
        0,
        cT,
        "ipv4",
        0,
        lH,
        "ipv6",
        0,
        l0,
        "iso",
        0,
        mt,
        "json",
        0,
        c2,
        "jwt",
        0,
        ds,
        "keyof",
        0,
        dW,
        "ksuid",
        0,
        lK,
        "lazy",
        0,
        cJ,
        "length",
        0,
        o8,
        "literal",
        0,
        cd,
        "locales",
        0,
        ab,
        "looseObject",
        0,
        dX,
        "looseRecord",
        0,
        ct,
        "lowercase",
        0,
        se,
        "lt",
        0,
        oK,
        "lte",
        0,
        oG,
        "mac",
        0,
        lY,
        "map",
        0,
        ci,
        "maxLength",
        0,
        o3,
        "maxSize",
        0,
        o6,
        "memoizer",
        0,
        as,
        "meta",
        0,
        sB,
        "mime",
        0,
        ss,
        "minLength",
        0,
        o5,
        "minSize",
        0,
        o2,
        "multipleOf",
        0,
        o4,
        "nan",
        0,
        cO,
        "nanoid",
        0,
        lT,
        "nativeEnum",
        0,
        cu,
        "negative",
        0,
        oQ,
        "never",
        0,
        dq,
        "nonnegative",
        0,
        o1,
        "nonoptional",
        0,
        cj,
        "nonpositive",
        0,
        o0,
        "normalize",
        0,
        sl,
        "null",
        0,
        dP,
        "nullable",
        0,
        cb,
        "nullish",
        0,
        c_,
        "number",
        0,
        dh,
        "object",
        0,
        dG,
        "optional",
        0,
        cv,
        "output",
        0,
        function (e) {
          return mf(e, {
            pipe: (e) => mp(e._zod.def),
            prefault: (e, t) => (t ? e._zod.def.innerType : e),
          });
        },
        "overwrite",
        0,
        su,
        "parse",
        0,
        lt,
        "parseAsync",
        0,
        ln,
        "partialRecord",
        0,
        ce,
        "pipe",
        0,
        cC,
        "positive",
        0,
        oY,
        "prefault",
        0,
        cI,
        "preprocess",
        0,
        c9,
        "prettifyError",
        0,
        ts,
        "promise",
        0,
        cW,
        "properties",
        0,
        so,
        "property",
        0,
        sa,
        "readonly",
        0,
        cR,
        "record",
        0,
        d7,
        "refine",
        0,
        cQ,
        "regex",
        0,
        o7,
        "regexes",
        () => u2,
        "registry",
        0,
        ak,
        "safeDecode",
        0,
        ld,
        "safeDecodeAsync",
        0,
        lm,
        "safeEncode",
        0,
        ll,
        "safeEncodeAsync",
        0,
        lc,
        "safeParse",
        0,
        li,
        "safeParseAsync",
        0,
        lr,
        "set",
        0,
        ca,
        "setErrorMap",
        0,
        c7,
        "size",
        0,
        o9,
        "slugify",
        0,
        sf,
        "startsWith",
        0,
        si,
        "strictObject",
        0,
        dH,
        "string",
        0,
        lg,
        "stringFormat",
        0,
        dl,
        "stringbool",
        0,
        c6,
        "success",
        0,
        cz,
        "superRefine",
        0,
        c0,
        "symbol",
        0,
        dD,
        "templateLiteral",
        0,
        cM,
        "toJSONSchema",
        0,
        u1,
        "toLowerCase",
        0,
        sc,
        "toUpperCase",
        0,
        sm,
        "toZod",
        0,
        _,
        "transform",
        0,
        cp,
        "treeifyError",
        0,
        ta,
        "trim",
        0,
        sd,
        "tuple",
        0,
        d5,
        "uint32",
        0,
        d_,
        "uint64",
        0,
        dN,
        "ulid",
        0,
        lB,
        "undefined",
        0,
        dU,
        "union",
        0,
        dQ,
        "unknown",
        0,
        dT,
        "uppercase",
        0,
        st,
        "url",
        0,
        lO,
        "util",
        () => u9,
        "uuid",
        0,
        lN,
        "uuidv4",
        0,
        lz,
        "uuidv6",
        0,
        lD,
        "uuidv7",
        0,
        lA,
        "validate",
        0,
        tb,
        "validateAsync",
        0,
        t_,
        "void",
        0,
        dF,
        "withParser",
        0,
        aA,
        "xid",
        0,
        lV,
        "xor",
        0,
        d1,
      ],
      722219
    );
    var mv = e.i(722219),
      mv = mv,
      mg = mv,
      m$ = mv,
      my = mv,
      mb = mv,
      m_ = mv,
      mx = mv,
      mw = mv,
      mk = mv,
      mI = mv,
      mS = mg.string().min(1),
      mj = m$.record(mg.string(), my.unknown()),
      mN = m$.record(mg.string(), my.unknown()).optional().nullable(),
      mz = mg
        .string()
        .regex(/^[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}$/, {
          message: "Network must be in CAIP-2 format (e.g., 'eip155:84532')",
        });
    mb.union([mS, mz]);
    var mD = /^[\x20-\x7e]+$/,
      mA = m_.object({
        url: mS,
        description: mg
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        mimeType: mg
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        serviceName: mg
          .string()
          .min(1)
          .max(32)
          .regex(mD)
          .nullish()
          .transform((e) => e ?? void 0),
        tags: mx
          .array(mg.string().min(1).max(32).regex(mD))
          .max(5)
          .nullish()
          .transform((e) => e ?? void 0),
        iconUrl: mg
          .string()
          .max(2048)
          .nullish()
          .transform((e) => e ?? void 0),
      }),
      mU = m_.object({
        scheme: mS,
        network: mS,
        maxAmountRequired: mS,
        resource: mS,
        description: mg.string(),
        mimeType: mg.string().optional(),
        outputSchema: mj.optional().nullable(),
        payTo: mS,
        maxTimeoutSeconds: mw.number().positive(),
        asset: mS,
        extra: mN,
      }),
      mO = m_.object({
        x402Version: mk.literal(1),
        error: mg.string().optional(),
        accepts: mx.array(mU).min(1).max(1024),
      }),
      mP = m_.object({
        x402Version: mk.literal(1),
        scheme: mS,
        network: mS,
        payload: mj,
      }),
      mC = m_.object({
        scheme: mS,
        network: mz,
        amount: mS,
        asset: mS,
        payTo: mS,
        maxTimeoutSeconds: mw.number().positive(),
        extra: mN,
      }),
      mE = m_.object({
        x402Version: mk.literal(2),
        error: mg
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        resource: mA,
        accepts: mx.array(mC).min(1).max(1024),
        extensions: mN,
      }),
      mZ = m_.object({
        x402Version: mk.literal(2),
        resource: mA.nullish().transform((e) => e ?? void 0),
        accepted: mC,
        payload: mj,
        extensions: mN,
      });
    mb.union([mU, mC]),
      mI.discriminatedUnion("x402Version", [mO, mE]),
      mI.discriminatedUnion("x402Version", [mP, mZ]);
    var mv = mv,
      mT = e.i(467034);
    function mL(e) {
      if ("number" == typeof e) {
        if (!Number.isFinite(e) || e < 0)
          throw Error(`Invalid money format: ${e}`);
        return {
          amount: (function (e) {
            let t = e.toString();
            if (!/[eE]/.test(t)) return t;
            let [n, i] = t.split(/[eE]/),
              r = parseInt(i, 10),
              a = n.startsWith("-"),
              [o, s = ""] = (a ? n.slice(1) : n).split("."),
              u = o + s,
              l = o.length + r;
            return (
              (a ? "-" : "") +
              (l <= 0
                ? "0." + "0".repeat(-l) + u
                : l >= u.length
                ? u + "0".repeat(l - u.length)
                : u.slice(0, l) + "." + u.slice(l))
            );
          })(e),
        };
      }
      let t = e
        .trim()
        .match(/^\$?\s*(-?\d+(?:\.\d+)?)(?:\s+([A-Za-z][A-Za-z0-9.]*))?$/);
      if (!t) throw Error(`Invalid money format: ${e}`);
      let n = (function (e) {
          let t = e.replace(/^\$/, "").trim();
          if (!/^\d+(?:\.\d+)?$/.test(t) || /[eE]/.test(t))
            throw Error(`Invalid money format: ${e}`);
          return t;
        })(t[1]),
        i = t[2];
      return i && "USD" !== i.toUpperCase()
        ? { amount: n, symbol: i.toUpperCase() }
        : { amount: n };
    }
    function mq(e, t) {
      if (/[eE]/.test(e))
        throw Error(
          `Invalid amount: ${e} — use decimal notation, not scientific notation`
        );
      if (!/^-?\d+\.?\d*$/.test(e)) throw Error(`Invalid amount: ${e}`);
      let [n, i = ""] = e.split(".");
      return (n + i.padEnd(t, "0").slice(0, t)).replace(/^0+/, "") || "0";
    }
    var mR = (e, t) => {
        let n;
        return ((n = e
          .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
          .replace(/\\\*/g, ".*")),
        RegExp(`^${n}$`)).test(t);
      },
      mF = (e, t) => {
        let n = e.get(t);
        if (!n) {
          for (let [i, r] of e.entries())
            if (mR(i, t)) {
              n = r;
              break;
            }
        }
        return n;
      },
      mM = (e, t, n) => mF(e, n)?.get(t);
    function mB(e) {
      return Array.isArray(e)
        ? e
        : null != e && "object" != typeof e
        ? [e]
        : void 0;
    }
    var mJ = { "builder-code": new Set(["s"]) };
    mv.object({
      isValid: mv.boolean(),
      invalidReason: mv
        .string()
        .nullish()
        .transform((e) => e ?? void 0),
      invalidMessage: mv
        .string()
        .nullish()
        .transform((e) => e ?? void 0),
      payer: mv
        .string()
        .nullish()
        .transform((e) => e ?? void 0),
      extensions: mv
        .record(mv.string(), mv.unknown())
        .nullish()
        .transform((e) => e ?? void 0),
      extra: mv
        .record(mv.string(), mv.unknown())
        .nullish()
        .transform((e) => e ?? void 0),
    }),
      mv.object({
        success: mv.boolean(),
        errorReason: mv
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        errorMessage: mv
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        payer: mv
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        transaction: mv.string(),
        network: mv.custom((e) => "string" == typeof e),
        amount: mv
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        extensions: mv
          .record(mv.string(), mv.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
        extra: mv
          .record(mv.string(), mv.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
      });
    var mV = mv.object({
      x402Version: mv.number(),
      scheme: mv.string(),
      network: mv.custom((e) => "string" == typeof e),
      extra: mv
        .record(mv.string(), mv.unknown())
        .nullish()
        .transform((e) => e ?? void 0),
    });
    mv.object({
      kinds: mv.array(mV),
      extensions: mv.array(mv.string()).default([]),
      signers: mv.record(mv.string(), mv.array(mv.string())).default({}),
    }),
      Symbol.for("x402.afterSettleAborted"),
      e.i(995062),
      e.i(418217),
      e.i(806685),
      e.i(647734),
      e.i(401319);
    var mW = {
      ethereum: 1,
      sepolia: 0xaa36a7,
      abstract: 2741,
      "abstract-testnet": 11124,
      "base-sepolia": 84532,
      base: 8453,
      "avalanche-fuji": 43113,
      avalanche: 43114,
      iotex: 4689,
      sei: 1329,
      "sei-testnet": 1328,
      polygon: 137,
      "polygon-amoy": 80002,
      peaq: 3338,
      story: 1514,
      educhain: 41923,
      "skale-base-sepolia": 0x135a9d92,
      megaeth: 4326,
      monad: 143,
      "monad-testnet": 10143,
      stable: 988,
      "stable-testnet": 2201,
      celo: 42220,
      flare: 14,
    };
    Object.keys(mW);
    var mK = {
        TransferWithAuthorization: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "value", type: "uint256" },
          { name: "validAfter", type: "uint256" },
          { name: "validBefore", type: "uint256" },
          { name: "nonce", type: "bytes32" },
        ],
      },
      mG = {
        PermitWitnessTransferFrom: [
          { name: "permitted", type: "TokenPermissions" },
          { name: "spender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
          { name: "witness", type: "Witness" },
        ],
        TokenPermissions: [
          { name: "token", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        Witness: [
          { name: "to", type: "address" },
          { name: "validAfter", type: "uint256" },
        ],
      },
      mH = {
        Permit: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
          { name: "value", type: "uint256" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
      },
      mX = [
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "owner", type: "address" }],
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
        },
      ],
      mY = [
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
        },
      ],
      mQ = [
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
        },
      ],
      m0 = "0x000000000022D473030F116dDEE9F6B43aC78BA3";
    e.i(796516);
    var m1 = e.i(831095),
      m4 = e.i(769936);
    e.i(704434);
    var m6 = e.i(675107);
    e.i(914146),
      (0, m1.f)(
        (0, m4.D)(
          "x402AuthCaptureSaltBinding(address receiverAuthorizer,address policy,uint256 saltNonce)"
        )
      ),
      (0, m1.f)(
        new TextEncoder().encode(
          "PaymentInfo(address operator,address payer,address receiver,address token,uint120 maxAmount,uint48 preApprovalExpiry,uint48 authorizationExpiry,uint48 refundExpiry,uint16 minFeeBps,uint16 maxFeeBps,address feeReceiver,uint256 salt)"
        )
      ),
      e.i(545913);
    var m2 = /^eip155:(\d+)$/;
    function m9(e) {
      if (!e.startsWith("eip155:"))
        throw Error(
          `Unsupported network format: ${e} (expected eip155:CHAIN_ID)`
        );
      let t = m2.exec(e);
      if (!t) throw Error(`Invalid CAIP-2 chain ID: ${e}`);
      let n = Number(t[1]);
      if (!Number.isSafeInteger(n))
        throw Error(`Invalid CAIP-2 chain ID: ${e}`);
      return n;
    }
    function m3() {
      let e = globalThis.crypto;
      if (!e) throw Error("Crypto API not available");
      return e;
    }
    var m5 = {
        "eip155:8453": [
          {
            asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            name: "USD Coin",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:84532": [
          {
            asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:1": [
          {
            asset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            name: "USD Coin",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:43114": [
          {
            asset: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            name: "USD Coin",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:4326": [
          {
            asset: "0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7",
            name: "MegaUSD",
            version: "1",
            decimals: 18,
            symbol: "MegaUSD",
            assetTransferMethod: "permit2",
            supportsEip2612: !0,
          },
        ],
        "eip155:143": [
          {
            asset: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:10143": [
          {
            asset: "0x534b2f3A21130d7a60830c2Df862319e593943A3",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:988": [
          {
            asset: "0x779Ded0c9e1022225f8E0630b35a9b54bE713736",
            name: "USDT0",
            version: "1",
            decimals: 6,
            symbol: "USDT0",
          },
        ],
        "eip155:2201": [
          {
            asset: "0x78Cf24370174180738C5B8E352B6D14c83a6c9A9",
            name: "USDT0",
            version: "1",
            decimals: 6,
            symbol: "USDT0",
          },
        ],
        "eip155:137": [
          {
            asset: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
            name: "USD Coin",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:42161": [
          {
            asset: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            name: "USD Coin",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:421614": [
          {
            asset: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
            name: "USD Coin",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:31612": [
          {
            asset: "0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186",
            name: "Mezo USD",
            version: "1",
            decimals: 18,
            symbol: "mUSD",
            assetTransferMethod: "permit2",
            supportsEip2612: !0,
          },
        ],
        "eip155:31611": [
          {
            asset: "0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503",
            name: "Mezo USD",
            version: "1",
            decimals: 18,
            symbol: "mUSD",
            assetTransferMethod: "permit2",
            supportsEip2612: !0,
          },
        ],
        "eip155:723487": [
          {
            asset: "0x33ad9e4BD16B69B5BFdED37D8B5D9fF9aba014Fb",
            name: "Stable Coin",
            version: "1",
            decimals: 6,
            symbol: "SBC",
            assetTransferMethod: "permit2",
            supportsEip2612: !0,
          },
        ],
        "eip155:72344": [
          {
            asset: "0x33ad9e4BD16B69B5BFdED37D8B5D9fF9aba014Fb",
            name: "Stable Coin",
            version: "1",
            decimals: 6,
            symbol: "SBC",
            assetTransferMethod: "permit2",
            supportsEip2612: !0,
          },
        ],
        "eip155:36900": [
          {
            asset: "0x9cb8142aEBBcdc60AF7c97Af897A67A8f3CA71C2",
            name: "USDC.e",
            version: "2",
            decimals: 6,
            symbol: "USDC.e",
          },
        ],
        "eip155:190415": [
          {
            asset: "0x401eCb1D350407f13ba348573E5630B83638E30D",
            name: "Bridged USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC.e",
          },
        ],
        "eip155:181228": [
          {
            asset: "0x401eCb1D350407f13ba348573E5630B83638E30D",
            name: "Bridged USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC.e",
          },
        ],
        "eip155:50": [
          {
            asset: "0xfA2958CB79b0491CC627c1557F441eF849Ca8eb1",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:51": [
          {
            asset: "0xb5AB69F7bBada22B28e79C8FFAECe55eF1c771D4",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:38833": [
          {
            asset: "0xA5b8BF902b2844dA17d4506cc827F7F1681735E7",
            name: "USDC",
            version: "1",
            decimals: 6,
            symbol: "USDC",
            assetTransferMethod: "permit2",
          },
        ],
        "eip155:14": [
          {
            asset: "0xe7cd86e13AC4309349F30B3435a9d337750fC82D",
            name: "USD₮0",
            version: "1",
            decimals: 6,
            symbol: "USDT0",
          },
        ],
        "eip155:42220": [
          {
            asset: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
          {
            asset: "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
            name: "Tether USD",
            version: "1",
            decimals: 6,
            symbol: "USDT",
          },
          {
            asset: "0xD2ab3C9A02DBBAB236BfEC45D1d755DF4267F771",
            name: "Tether America USD",
            version: "1",
            decimals: 6,
            symbol: "USAT",
          },
        ],
        "eip155:11142220": [
          {
            asset: "0x01C5C0122039549AD1493B8220cABEdD739BC44E",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:1329": [
          {
            asset: "0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:1328": [
          {
            asset: "0x4fCF1784B31630811181f670Aea7A7bEF803eaED",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:5042": [
          {
            asset: "0x3600000000000000000000000000000000000000",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
        "eip155:5042002": [
          {
            asset: "0x3600000000000000000000000000000000000000",
            name: "USDC",
            version: "2",
            decimals: 6,
            symbol: "USDC",
          },
        ],
      },
      m8 = (e, t) => {
        let n =
          m5[
            (function (e) {
              if (e in m5) return e;
              let t = mW[e];
              return void 0 !== t ? `eip155:${t}` : e;
            })(t)
          ];
        if (!n) return;
        let i = e.toLowerCase();
        return n.find((e) => e.asset.toLowerCase() === i);
      };
    e.i(450323),
      (0, m1.f)(
        (0, m4.D)(
          "ChannelConfig(address payer,address payerAuthorizer,address receiver,address receiverAuthorizer,address token,uint40 withdrawDelay,bytes32 salt)"
        )
      );
    var m7 = e.i(674768),
      fe = e.i(309682),
      ft = e.i(110163),
      fn = "eip2612GasSponsoring",
      fi = "erc20ApprovalGasSponsoring";
    async function fr(e, t, n, i, r, a, o) {
      let s = e.address,
        u = (0, g.A)(m0),
        l = await e.readContract({
          address: t,
          abi: mX,
          functionName: "nonces",
          args: [s],
        }),
        d = BigInt(o),
        c = { owner: s, spender: u, value: d, nonce: l, deadline: BigInt(a) },
        m = await e.signTypedData({
          domain: { name: n, version: i, chainId: r, verifyingContract: t },
          types: mH,
          primaryType: "Permit",
          message: c,
        });
      return {
        from: s,
        asset: t,
        spender: u,
        amount: d.toString(),
        nonce: l.toString(),
        deadline: a,
        signature: m,
        version: "1",
      };
    }
    async function fa(e, t, n) {
      let i,
        r,
        a = e.address,
        o = (0, g.A)(m0),
        s = (0, f.f)({ abi: mY, functionName: "approve", args: [o, m7.hQ] }),
        u = await e.getTransactionCount({ address: a });
      try {
        let t = await e.estimateFeesPerGas?.();
        if (!t) throw Error("no fee estimates available");
        (i = t.maxFeePerGas), (r = t.maxPriorityFeePerGas);
      } catch {
        (i = 1000000000n), (r = 100000000n);
      }
      let l = await e.signTransaction({
        to: t,
        data: s,
        nonce: u,
        gas: 70000n,
        maxFeePerGas: i,
        maxPriorityFeePerGas: r,
        chainId: n,
      });
      return {
        from: a,
        asset: t,
        spender: o,
        amount: m7.hQ.toString(),
        signedTransaction: l,
        version: "1",
      };
    }
    var fo = new Map();
    function fs(e, t, n) {
      let i = {
        signTransaction: t.signTransaction,
        readContract: t.readContract,
        getTransactionCount: t.getTransactionCount,
        estimateFeesPerGas: t.estimateFeesPerGas,
      };
      if (!(!i.readContract || !i.getTransactionCount || !i.estimateFeesPerGas))
        return i;
      let r = (function (e, t) {
        if (t) {
          let n;
          if (
            (n = Object.keys(t)).length > 0 &&
            n.every((e) => /^\d+$/.test(e))
          ) {
            let n = m9(e);
            return t[n]?.rpcUrl;
          }
          return t.rpcUrl;
        }
      })(e, n);
      if (!r) return i;
      let a = (function (e) {
        let t = fo.get(e);
        if (t) return t;
        let n = (0, fe.f)({ transport: (0, ft.f)(e) });
        return fo.set(e, n), n;
      })(r);
      return (
        i.readContract || (i.readContract = (e) => a.readContract(e)),
        i.getTransactionCount ||
          (i.getTransactionCount = async (e) =>
            a.getTransactionCount({ address: e.address })),
        i.estimateFeesPerGas ||
          (i.estimateFeesPerGas = async () => a.estimateFeesPerGas()),
        i
      );
    }
    var fu = new Set();
    function fl(e) {
      fu.has(e) ||
        (fu.add(e),
        console.warn(
          `[x402] gas sponsoring is advertised for ${e} but the client cannot read the chain, so the sponsored permit/approval will not be signed and a fresh wallet will get 412 permit2_allowance_required. Pass { rpcUrl } to ExactEvmScheme, or use a signer with readContract (e.g. toClientEvmSigner(account, publicClient)).`
        ));
    }
    async function fd(e, t, n, i, r, a) {
      if (!r?.extensions?.[fn]) return;
      let o = fs(n.network, e, t);
      if (!o.readContract) return void fl(n.network);
      let s = n.extra?.name,
        u = n.extra?.version;
      if (!s || !u) return;
      let l = m9(n.network),
        d = (0, g.A)(n.asset),
        c = a ?? n.amount;
      try {
        if (
          (await o.readContract({
            address: d,
            abi: mQ,
            functionName: "allowance",
            args: [e.address, m0],
          })) >= BigInt(c)
        )
          return;
      } catch {}
      let m = i.payload?.permit2Authorization,
        f =
          m?.deadline ??
          Math.floor(Date.now() / 1e3 + n.maxTimeoutSeconds).toString();
      return {
        [fn]: {
          info: await fr(
            {
              address: e.address,
              signTypedData: (t) => e.signTypedData(t),
              readContract: o.readContract,
            },
            d,
            s,
            u,
            l,
            f,
            c
          ),
        },
      };
    }
    async function fc(e, t, n, i, r) {
      if (!i?.extensions?.[fi]) return;
      let a = fs(n.network, e, t);
      if (!a.readContract) return void fl(n.network);
      if (!a.signTransaction || !a.getTransactionCount) return;
      let o = m9(n.network),
        s = (0, g.A)(n.asset),
        u = r ?? n.amount;
      try {
        if (
          (await a.readContract({
            address: s,
            abi: mQ,
            functionName: "allowance",
            args: [e.address, m0],
          })) >= BigInt(u)
        )
          return;
      } catch {}
      return {
        [fi]: {
          info: await fa(
            {
              address: e.address,
              signTransaction: a.signTransaction,
              getTransactionCount: a.getTransactionCount,
              estimateFeesPerGas: a.estimateFeesPerGas,
            },
            s,
            o
          ),
        },
      };
    }
    function fm(e) {
      return /^\d+$/.test(e);
    }
    function ff(e, t, n) {
      if (!0 !== e.allowedAssets)
        return e.allowedAssets?.find(
          (e) =>
            !!mR(e.network, t.network) &&
            (e.asset.toLowerCase() === t.asset.toLowerCase() ||
              (null != n && n.symbol.toLowerCase() === e.asset.toLowerCase()))
        );
    }
    function fp(e, t, n) {
      if (!1 === e) return;
      let i = ff(e, t, n);
      if (i?.maxAmountPerPayment != null) {
        if (!fm(i.maxAmountPerPayment))
          throw Error(
            `spendControls.allowedAssets[].maxAmountPerPayment must be an integer atomic amount, not a dollar value; got ${JSON.stringify(
              i.maxAmountPerPayment
            )}`
          );
        return i.maxAmountPerPayment;
      }
      if (n && !1 !== e.maxAmountPerPayment)
        return mq(mL(e.maxAmountPerPayment ?? "$1").amount, n.decimals);
    }
    e.i(393653);
    var fh = class e {
      constructor(e) {
        (this.registeredClientSchemes = new Map()),
          (this.schemeClientHookAdapters = new Map()),
          (this.policies = []),
          (this.registeredExtensions = new Map()),
          (this.spendControls = {}),
          (this.beforePaymentCreationHooks = []),
          (this.afterPaymentCreationHooks = []),
          (this.onPaymentCreationFailureHooks = []),
          (this.paymentResponseHooks = []),
          (this.paymentRequirementsSelector = e || ((e, t) => t[0]));
      }
      static fromConfig(t) {
        let n = new e(t.paymentRequirementsSelector);
        return (
          t.schemes.forEach((e) => {
            1 === e.x402Version
              ? n.registerV1(e.network, e.client)
              : n.register(e.network, e.client);
          }),
          t.policies?.forEach((e) => {
            n.registerPolicy(e);
          }),
          void 0 !== t.spendControls && n.setSpendControls(t.spendControls),
          n
        );
      }
      register(e, t) {
        return this._registerScheme(2, e, t);
      }
      registerV1(e, t) {
        return this._registerScheme(1, e, t);
      }
      registerPolicy(e) {
        return this.policies.push(e), this;
      }
      setSpendControls(e) {
        return (this.spendControls = e), this;
      }
      registerExtension(e) {
        return this.registeredExtensions.set(e.key, e), this;
      }
      getExtensions() {
        return Array.from(this.registeredExtensions.values());
      }
      onBeforePaymentCreation(e) {
        return this.beforePaymentCreationHooks.push(e), this;
      }
      onAfterPaymentCreation(e) {
        return this.afterPaymentCreationHooks.push(e), this;
      }
      onPaymentCreationFailure(e) {
        return this.onPaymentCreationFailureHooks.push(e), this;
      }
      onPaymentResponse(e) {
        return this.paymentResponseHooks.push(e), this;
      }
      async handlePaymentResponse(e) {
        for (let t of this.getLabeledHooks(
          "onPaymentResponse",
          e.paymentPayload.x402Version,
          e.requirements,
          e.paymentRequired?.extensions ?? e.paymentPayload.extensions
        )) {
          let n = await t(e);
          if (n && "recovered" in n && n.recovered) return { recovered: !0 };
        }
      }
      async createPaymentPayload(e) {
        let t = this.registeredClientSchemes.get(e.x402Version);
        if (!t)
          throw Error(
            `No client registered for x402 version: ${e.x402Version}`
          );
        let n = this.selectPaymentRequirements(e.x402Version, e.accepts),
          i = { paymentRequired: e, selectedRequirements: n };
        for (let t of this.getLabeledHooks(
          "beforePaymentCreation",
          e.x402Version,
          n,
          e.extensions
        )) {
          let e = await t(i);
          if (e && "abort" in e && e.abort)
            throw Error(`Payment creation aborted: ${e.reason}`);
        }
        try {
          let r,
            a = mM(t, n.scheme, n.network);
          if (!a)
            throw Error(
              `No client registered for scheme: ${n.scheme} and network: ${n.network}`
            );
          let o = await a.createPaymentPayload(e.x402Version, n, {
            extensions: e.extensions,
            maxAmountPerPayment: fp(
              this.spendControls,
              n,
              a.findDefaultAsset?.(n.asset, n.network)
            ),
          });
          if (1 == o.x402Version) r = o;
          else {
            let t = this.mergeExtensions(e.extensions, o.extensions);
            r = {
              x402Version: o.x402Version,
              payload: o.payload,
              extensions: t,
              resource: e.resource,
              accepted: n,
            };
          }
          r = await this.enrichPaymentPayloadWithExtensions(r, e);
          let s = { ...i, paymentPayload: r };
          for (let t of this.getLabeledHooks(
            "afterPaymentCreation",
            e.x402Version,
            n,
            e.extensions
          ))
            await t(s);
          return r;
        } catch (r) {
          let t = { ...i, error: r };
          for (let i of this.getLabeledHooks(
            "onPaymentCreationFailure",
            e.x402Version,
            n,
            e.extensions
          )) {
            let e = await i(t);
            if (e && "recovered" in e && e.recovered) return e.payload;
          }
          throw r;
        }
      }
      mergeExtensions(e, t) {
        if (!t) return e;
        if (!e) return t;
        let n = { ...e };
        for (let [e, i] of Object.entries(t)) {
          let t = n[e];
          if (
            null === t ||
            "object" != typeof t ||
            Array.isArray(t) ||
            null === i ||
            "object" != typeof i ||
            Array.isArray(i)
          ) {
            n[e] = i;
            continue;
          }
          let r = mJ[e],
            a = { ...t },
            o = [{ target: a, source: i }];
          for (let e of o)
            for (let [t, n] of Object.entries(e.source)) {
              let i = e.target[t];
              if (
                null !== i &&
                "object" == typeof i &&
                !Array.isArray(i) &&
                null !== n &&
                "object" == typeof n &&
                !Array.isArray(n)
              ) {
                let r = { ...i };
                (e.target[t] = r), o.push({ target: r, source: n });
                continue;
              }
              if (r?.has(t) && (Array.isArray(i) || Array.isArray(n))) {
                let r = mB(i),
                  a = mB(n);
                if (r && a) {
                  e.target[t] = (function (e, t) {
                    let n = [];
                    for (let i of [...e, ...t])
                      n.some((e) =>
                        (function (e, t) {
                          let n = (e) => {
                            if (null == e || "object" != typeof e)
                              return JSON.stringify(e);
                            if (Array.isArray(e))
                              return JSON.stringify(
                                e.map((e) =>
                                  "object" == typeof e && null !== e
                                    ? JSON.parse(n(e))
                                    : e
                                )
                              );
                            let t = {};
                            return (
                              Object.keys(e)
                                .sort()
                                .forEach((i) => {
                                  let r = e[i];
                                  t[i] =
                                    "object" == typeof r && null !== r
                                      ? JSON.parse(n(r))
                                      : r;
                                }),
                              JSON.stringify(t)
                            );
                          };
                          try {
                            return n(e) === n(t);
                          } catch {
                            return JSON.stringify(e) === JSON.stringify(t);
                          }
                        })(e, i)
                      ) || n.push(i);
                    return n;
                  })(a, r);
                  continue;
                }
              }
              Object.prototype.hasOwnProperty.call(e.target, t) ||
                (e.target[t] = n);
            }
          n[e] = a;
        }
        return n;
      }
      async enrichPaymentPayloadWithExtensions(e, t) {
        if (0 === this.registeredExtensions.size) return e;
        let n = e;
        for (let [, e] of this.registeredExtensions)
          e.enrichPaymentPayload && (n = await e.enrichPaymentPayload(n, t));
        return {
          ...n,
          extensions: this.mergeExtensions(t.extensions, n.extensions),
        };
      }
      selectPaymentRequirements(e, t) {
        let n = this.registeredClientSchemes.get(e);
        if (!n) throw Error(`No client registered for x402 version: ${e}`);
        let i = t.filter((e) => {
          let t = mF(n, e.network);
          return !!t && t.has(e.scheme);
        });
        if (0 === i.length)
          throw Error(
            `No network/scheme registered for x402 version: ${e} which comply with the payment requirements. ${JSON.stringify(
              {
                x402Version: e,
                paymentRequirements: t,
                x402Versions: Array.from(this.registeredClientSchemes.keys()),
                networks: Array.from(n.keys()),
                schemes: Array.from(n.values())
                  .map((e) => Array.from(e.keys()))
                  .flat(),
              }
            )}`
          );
        let r = i.filter((e) => {
          let t = e.extra?.paymentFlow;
          return (
            null == t ||
            "authorization" === t ||
            "upfront" === t ||
            "escrow" === t
          );
        });
        if (0 === r.length)
          throw Error(
            `No payment requirements with a recognized paymentFlow for x402 version: ${e}`
          );
        let a = this.applySpendControls(e, r, n);
        for (let t of this.policies)
          if (0 === (a = t(e, a)).length)
            throw Error(
              `All payment requirements were filtered out by policies for x402 version: ${e}`
            );
        let o = a.filter(
          (e) =>
            e.extra?.paymentFlow == null ||
            e.extra?.paymentFlow === "authorization"
        );
        return o.length > 0 && (a = o), this.paymentRequirementsSelector(e, a);
      }
      applySpendControls(e, t, n) {
        let i,
          r = this.spendControls;
        if (!1 === r) return t;
        let a = (e) =>
            mM(n, e.scheme, e.network)?.findDefaultAsset?.(e.asset, e.network),
          o = (e) => ff(r, e, a(e)),
          s =
            !0 === r.allowedAssets
              ? t
              : t.filter((e) => null != a(e) || null != o(e));
        if (0 === s.length)
          throw Error(
            "All payment requirements were rejected by spendControls: only default assets or entries in spendControls.allowedAssets are allowed. Add an allowedAssets entry for non-default tokens, set allowedAssets: true, or set spendControls: false."
          );
        let u = !1 !== r.maxAmountPerPayment && (r.maxAmountPerPayment ?? "$1"),
          l = s,
          d = !1;
        if (
          0 ===
          (s = s.filter((t) => {
            let n = a(t),
              o = ff(r, t, n),
              s = fp(r, t, n);
            if (void 0 === s) return !0;
            let l = 1 === e ? t.maxAmountRequired : t.amount;
            if (!fm(l)) {
              if (o?.maxAmountPerPayment != null) return (d = !0), !1;
              if (!1 === u) return !0;
              let e = BigInt(mq(l, 18)) <= BigInt(mq(mL(u).amount, 18));
              return e || (i = n?.symbol), e;
            }
            let c = BigInt(l) <= BigInt(s);
            return (
              c ||
                (o?.maxAmountPerPayment != null ? (d = !0) : (i = n?.symbol)),
              c
            );
          })).length
        ) {
          if (
            d &&
            l.every((e) => {
              let t = o(e);
              return t?.maxAmountPerPayment != null;
            })
          )
            throw Error(
              "All payment requirements were rejected by spendControls.allowedAssets maxAmountPerPayment. Raise the per-asset cap, or omit maxAmountPerPayment to allow uncapped (default assets then fall back to the top-level USD cap)."
            );
          throw Error(
            `All payment requirements were rejected by spendControls.maxAmountPerPayment (${String(
              u
            )}${
              i ? `, including ${i}` : ""
            }). Raise maxAmountPerPayment, set it to false to disable, set allowedAssets[].maxAmountPerPayment for a per-asset atomic cap, or set spendControls: false to disable all spend controls.`
          );
        }
        return s;
      }
      _registerScheme(e, t, n) {
        this.registeredClientSchemes.has(e) ||
          this.registeredClientSchemes.set(e, new Map());
        let i = this.registeredClientSchemes.get(e);
        i.has(t) || i.set(t, new Map()),
          i.get(t).set(n.scheme, n),
          this.schemeClientHookAdapters.has(e) ||
            this.schemeClientHookAdapters.set(e, new Map());
        let r = this.schemeClientHookAdapters.get(e);
        r.has(t) || r.set(t, new Map());
        let a = r.get(t),
          o = n.schemeHooks;
        if (!o) return a.delete(n.scheme), this;
        let s = {};
        return (
          o.onBeforePaymentCreation &&
            (s.beforePaymentCreation = o.onBeforePaymentCreation),
          o.onAfterPaymentCreation &&
            (s.afterPaymentCreation = o.onAfterPaymentCreation),
          o.onPaymentCreationFailure &&
            (s.onPaymentCreationFailure = o.onPaymentCreationFailure),
          o.onPaymentResponse && (s.onPaymentResponse = o.onPaymentResponse),
          Object.keys(s).length > 0 ? a.set(n.scheme, s) : a.delete(n.scheme),
          this
        );
      }
      getLabeledHooks(e, t, n, i) {
        let r;
        switch (e) {
          case "beforePaymentCreation":
            r = this.beforePaymentCreationHooks;
            break;
          case "afterPaymentCreation":
            r = this.afterPaymentCreationHooks;
            break;
          case "onPaymentCreationFailure":
            r = this.onPaymentCreationFailureHooks;
            break;
          case "onPaymentResponse":
            r = this.paymentResponseHooks;
        }
        let a = [...r],
          o = this.schemeClientHookAdapters.get(t),
          s = o ? mM(o, n.scheme, n.network) : void 0,
          u = s?.[e];
        if ((void 0 !== u && a.push(u), !i)) return a;
        let l = this.getClientExtensionHookKey(e);
        for (let [e, t] of this.registeredExtensions) {
          if (!(e in i)) continue;
          let n = t.hooks?.[l];
          n && a.push(async (t) => n(i[e], t));
        }
        return a;
      }
      getClientExtensionHookKey(e) {
        switch (e) {
          case "beforePaymentCreation":
            return "onBeforePaymentCreation";
          case "afterPaymentCreation":
            return "onAfterPaymentCreation";
          case "onPaymentCreationFailure":
            return "onPaymentCreationFailure";
          case "onPaymentResponse":
            return "onPaymentResponse";
        }
      }
    };
    async function fv(e, t, n, i) {
      let r,
        a = Math.floor(Date.now() / 1e3),
        o =
          ((r = m3().getRandomValues(new Uint8Array(32))),
          BigInt((0, m6.g)(r)).toString()),
        s = (a + i.maxTimeoutSeconds).toString(),
        u = {
          from: t.address,
          permitted: { token: (0, g.A)(i.asset), amount: i.amount },
          spender: e,
          nonce: o,
          deadline: s,
          witness: { to: (0, g.A)(i.payTo), validAfter: "0" },
        };
      return {
        x402Version: n,
        payload: { signature: await fg(t, u, i), permit2Authorization: u },
      };
    }
    async function fg(e, t, n) {
      let i = m9(n.network);
      return await e.signTypedData({
        domain: { name: "Permit2", chainId: i, verifyingContract: m0 },
        types: mG,
        primaryType: "PermitWitnessTransferFrom",
        message: {
          permitted: {
            token: (0, g.A)(t.permitted.token),
            amount: BigInt(t.permitted.amount),
          },
          spender: (0, g.A)(t.spender),
          nonce: BigInt(t.nonce),
          deadline: BigInt(t.deadline),
          witness: {
            to: (0, g.A)(t.witness.to),
            validAfter: BigInt(t.witness.validAfter),
          },
        },
      });
    }
    async function f$(e, t, n) {
      return fv("0x402085c248EeA27D92E8b30b2C58ed07f9E20001", e, t, n);
    }
    async function fy(e, t, n) {
      let i = (0, m6.g)(m3().getRandomValues(new Uint8Array(32))),
        r = Math.floor(Date.now() / 1e3),
        a = {
          from: e.address,
          to: (0, g.A)(n.payTo),
          value: n.amount,
          validAfter: "0",
          validBefore: (r + n.maxTimeoutSeconds).toString(),
          nonce: i,
        },
        o = await fb(e, a, n);
      return { x402Version: t, payload: { authorization: a, signature: o } };
    }
    async function fb(e, t, n) {
      let i = m9(n.network);
      if (!n.extra?.name || !n.extra?.version)
        throw Error(
          `EIP-712 domain parameters (name, version) are required in payment requirements for asset ${n.asset}`
        );
      let { name: r, version: a } = n.extra,
        o = {
          name: r,
          version: a,
          chainId: i,
          verifyingContract: (0, g.A)(n.asset),
        },
        s = {
          from: (0, g.A)(t.from),
          to: (0, g.A)(t.to),
          value: BigInt(t.value),
          validAfter: BigInt(t.validAfter),
          validBefore: BigInt(t.validBefore),
          nonce: t.nonce,
        };
      return await e.signTypedData({
        domain: o,
        types: mK,
        primaryType: "TransferWithAuthorization",
        message: s,
      });
    }
    e.i(600547),
      e.i(897282),
      e.i(189643),
      e.i(123847),
      e.i(316819),
      e.i(694382),
      BigInt(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
    var f_ = class {
        constructor(e, t) {
          (this.signer = e),
            (this.options = t),
            (this.scheme = "exact"),
            (this.findDefaultAsset = m8);
        }
        async createPaymentPayload(e, t, n) {
          if ("permit2" === (t.extra?.assetTransferMethod ?? "eip3009")) {
            let i = await f$(this.signer, e, t),
              r = await fd(this.signer, this.options, t, i, n);
            if (r) return { ...i, extensions: r };
            let a = await fc(this.signer, this.options, t, n);
            return a ? { ...i, extensions: a } : i;
          }
          return fy(this.signer, e, t);
        }
      },
      fx = e.i(928095),
      fw = e.i(748233),
      fk = e.i(835359),
      fI = e.i(173329),
      fS = e.i(321014),
      fj = e.i(80109),
      fN = e.i(948536);
    let fz = "schedule.create",
      fD = "schedule.topup",
      fA = [fz, fD],
      fU = ["oracle.request", "job.open"],
      fO = { "oracle.request": 600, "job.open": 1800 },
      fP = { minutes: 60, hours: 3600, days: 86400 },
      fC = { mode: "every", amount: 6, unit: "hours" },
      fE = /^([01]\d|2[0-3]):([0-5]\d)$/;
    function fZ(e) {
      return "daily" === e.mode
        ? fE.test(e.time)
          ? 86400
          : null
        : Number.isInteger(e.amount) && e.amount > 0
        ? e.amount * fP[e.unit]
        : null;
    }
    function fT(e, t) {
      let n = fZ(t);
      if (!n || !Number.isSafeInteger(e) || e < 1) return "";
      let i = (e * n) / 86400,
        r = (e, t) => `${1 === e ? "a" : e} ${t}${1 === e ? "" : "s"}`;
      return i < 1
        ? `about ${r(Math.max(1, Math.round(24 * i)), "hour")}`
        : i < 14
        ? `about ${r(Math.round(i), "day")}`
        : i < 60
        ? `about ${r(Math.round(i / 7), "week")}`
            .replace("about 4 weeks", "about a month")
            .replace("about 5 weeks", "about a month")
        : i < 730
        ? `about ${r(Math.round(i / 30), "month")}`
        : `about ${r(Math.round(i / 365), "year")}`;
    }
    function fL(e, t = 1e6) {
      return Number.isSafeInteger(e) && e >= 1 && e <= t
        ? null
        : `How many runs: a whole number from 1 to ${t.toLocaleString(
            "en-US"
          )}.`;
    }
    let fq = {
        "research-report": {
          name: "report",
          path: "artifacts/report.md",
          mediaType: "text/markdown",
        },
        "write-readme-and-docs": {
          name: "docs",
          path: "artifacts/README.md",
          mediaType: "text/markdown",
        },
        "create-image": {
          name: "image",
          path: "artifacts/image.png",
          mediaType: "image/png",
        },
        "create-audio": {
          name: "audio",
          path: "artifacts/audio.mp3",
          mediaType: "audio/mpeg",
        },
        "create-video": {
          name: "video",
          path: "artifacts/video.mp4",
          mediaType: "video/mp4",
        },
      },
      fR = new Set(["build-website"]);
    function fF(e) {
      let t = e.objective.trim();
      if (!t) throw Error("Say what the swarm should do.");
      let n = fq[e.skill];
      return {
        objective: t,
        skill: e.skill,
        github: !0,
        ...(fR.has(e.skill) ? { ipfs: !0 } : {}),
        ...(n ? { outputs: [n] } : {}),
        ...(e.references?.length ? { references: e.references } : {}),
      };
    }
    let fM = [
        "bool",
        "uint256",
        "bytes32",
        "bytes32[]",
        "address",
        "address[]",
      ],
      fB = {
        bool: "Yes or no",
        uint256: "A number",
        bytes32: "Text",
        "bytes32[]": "A list of text",
        address: "An address",
        "address[]": "A list of addresses",
      },
      fJ = (e) => Math.max(2, Math.floor((7 * e + 9) / 10));
    function fV(e) {
      let t = e.question.trim();
      if (!t) throw Error("Ask the oracle something.");
      let { question: n, panelSize: i, min: r = 5, max: a, ...o } = e;
      return {
        question: t,
        panelSize: Math.max(
          r,
          Math.min(a, Math.round(Number.isFinite(i) ? i : 20))
        ),
        ...Object.fromEntries(
          Object.entries(o).filter(([, e]) => void 0 !== e)
        ),
      };
    }
    let fW = {
      univ4_hook: ["uniswap-v4-hooks", "uniswap-v4-security"],
      evm_project: ["solidity-security-review"],
    };
    function fK(e) {
      return Number.isInteger(e) && e >= 10 && e <= 90
        ? null
        : "A pool share of 10 to 90% of the supply, in whole percent.";
    }
    function fG(e) {
      let t = e.trim();
      if (!t) return;
      let n = fH(t);
      if (n) throw Error(n);
      return t.startsWith("0x") ? t.toLowerCase() : `$contract:${t}`;
    }
    function fH(e) {
      let t = e.trim();
      return t
        ? t.startsWith("0x")
          ? /^0x[0-9a-fA-F]{40}$/.test(t)
            ? /^0x0{40}$/.test(t)
              ? "The rest cannot go to the zero address."
              : null
            : "A wallet is 0x and 40 hex characters."
          : /^[A-Za-z_][A-Za-z0-9_]{0,31}$/.test(t)
          ? "MerkleDistributor" === t || "PoolInitializationGuard" === t
            ? `${t} is the launch's own; name one of your contracts.`
            : null
          : "A contract is named as in its source, e.g. CharterClaim: letters, digits and underscores, at most 32."
        : null;
    }
    function fX(e) {
      let t = e.trim().toLowerCase();
      return /^0x[0-9a-f]{40}$/.test(t)
        ? /^0x0{40}$/.test(t)
          ? "The owner cannot be the zero address."
          : null
        : "An owner is a wallet address: 0x and 40 hex characters.";
    }
    function fY(e) {
      let t = fK(e);
      if (t) throw Error(t);
      return 100 * e;
    }
    let fQ = {
      company: "a company launch",
      contracts: "contracts",
      hook: "a v4 hook",
      token: "a token",
      report: "a report",
      website: "a website",
      indexer: "an indexer",
      image: "an image",
      audio: "audio",
      video: "a video",
    };
    function f0(e, t) {
      let n = t
        .map(({ label: e, value: t }) => [e.trim(), t.trim()])
        .filter(([, e]) => e)
        .map(([e, t]) => `${e}: ${t}`);
      return n.length
        ? `${e.trim()}

${n.join("\n")}`
        : e;
    }
    let f1 = [
        [/^(contracts|site|build|adapt)$/, "builds", "build"],
        [/^tests$/, "tests", "test"],
        [/^(audit|review|judge)$/, "audits", "audit"],
        [/^design review$/, "reviews", "review"],
        [/^content check$/, "checks", "check"],
        [/^report$/, "researches and writes", "research and write"],
        [/^(image|audio|video)$/, "makes", "make"],
      ],
      f4 = "2500",
      f6 = {
        name: "",
        symbol: "",
        supply: "1000000000",
        notes: "",
        poolPercent: 88,
        cap: "10",
        remainderTo: "",
      };
    function f2(e, t) {
      let n = 10n ** BigInt(t),
        i = BigInt(e),
        r = (i % n).toString().padStart(t, "0").replace(/0+$/, "");
      return `${i / n}${r ? `.${r}` : ""}`;
    }
    function f9(e) {
      return e && "eth" !== e.pairWith
        ? "imd" === e.pairWith
          ? f4
          : e.customCap
          ? f2((10n * BigInt(e.customCap.min)).toString(), e.decimals ?? 18)
          : ""
        : "10";
    }
    function f3(e) {
      return (e.trim().split(/\s+/)[0] ?? "")
        .replace(/[^A-Za-z0-9]/g, "")
        .toUpperCase()
        .slice(0, 8);
    }
    let f5 = /^0x[0-9a-fA-F]{40}$/;
    function f8(e, t = "ETH") {
      let n =
          "string" == typeof t
            ? { pairWith: "ETH" === t ? "eth" : "imd", symbol: t }
            : t,
        i = [],
        r = e.name.trim();
      (!r || r.length > 40) &&
        i.push({ field: "name", text: "A name, up to 40 characters." }),
        /^[A-Z0-9]{2,11}$/.test(e.symbol.trim()) ||
          i.push({
            field: "symbol",
            text: "A symbol of 2 to 11 capital letters or digits.",
          });
      let a = e.supply.replace(/[,_\s]/g, "");
      /^[1-9][0-9]{0,17}$/.test(a) ||
        i.push({
          field: "supply",
          text: "A supply in whole tokens, from 1 to 18 digits.",
        });
      let o = fK(e.poolPercent);
      o && i.push({ field: "pool", text: o });
      let s = e.cap.trim();
      if (
        !/^(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,6})?$/.test(s) ||
        0 >= Number(s)
      )
        i.push({
          field: "cap",
          text: `An opening market cap in ${n.symbol}, such as ${f9(n) || f4}.`,
        });
      else if (n.customCap) {
        let e = n.decimals ?? 18,
          t = BigInt(f7(s, e));
        if (t < BigInt(n.customCap.min) || t > BigInt(n.customCap.max)) {
          let t = (t) => Number(f2(t, e)).toLocaleString("en-US");
          i.push({
            field: "cap",
            text: `An opening market cap between ${t(n.customCap.min)} and ${t(
              n.customCap.max
            )} ${n.symbol}.`,
          });
        }
      }
      return (
        e.poolPercent < 90 &&
          !f5.test(e.remainderTo.trim()) &&
          i.push({
            field: "rest",
            text: "The wallet the rest of your share goes to: connect one, or paste its address.",
          }),
        i
      );
    }
    function f7(e, t = 18) {
      let [n, i = ""] = e.trim().split(".");
      return (
        BigInt(n) * 10n ** BigInt(t) +
        BigInt((i + "0".repeat(t)).slice(0, t) || "0")
      ).toString();
    }
    function pe(e) {
      return e.ok ? e.buildProblems ?? [] : e.problems;
    }
    var pt = e.i(862243);
    function pn(e) {
      return (function e(t, n) {
        if (null === t) return "null";
        switch (typeof t) {
          case "boolean":
            return t ? "true" : "false";
          case "number":
            if (!Number.isFinite(t)) throw new pr("non-finite number", n);
            if (!Number.isInteger(t)) throw new pr("non-integer number", n);
            return JSON.stringify(0 === t ? 0 : t);
          case "string":
            return JSON.stringify(t);
          case "object": {
            if (Array.isArray(t))
              return `[${t.map((t, i) => e(t, [...n, String(i)])).join(",")}]`;
            let i = Object.getPrototypeOf(t);
            if (i === Object.prototype || null === i) {
              let i = Object.keys(t)
                .sort()
                .map((i) => {
                  let r = t[i];
                  if (void 0 === r) throw new pr(`undefined at key "${i}"`, n);
                  return `${JSON.stringify(i)}:${e(r, [...n, i])}`;
                });
              return `{${i.join(",")}}`;
            }
            throw new pr("unsupported object", n);
          }
          default:
            throw new pr(`unsupported type "${typeof t}"`, n);
        }
      })(e, []);
    }
    function pi(e) {
      return (0, pt.f)((0, m4.T)(pn(e))).slice(2);
    }
    class pr extends Error {
      constructor(e, t) {
        super(
          `cannot canonicalize: ${e}${
            t.length > 0 ? ` at $.${t.join(".")}` : ""
          }`
        ),
          (this.name = "CanonicalError");
      }
    }
    class pa extends Error {
      constructor(e) {
        super(
          `Payment details changed (${e}). Nothing was signed. Reload and check the quote.`
        ),
          (this.name = "OfferChanged");
      }
    }
    async function po(
      e,
      t,
      n,
      i = () => Math.floor(Date.now() / 1e3),
      r = () => void 0
    ) {
      let a = (function (e, t) {
        var n;
        let i,
          r = (e) => {
            throw new pa(e);
          },
          { quoteHash: a, ...o } = e.quote,
          s = t.controlPlane.replace(/\/+$/, ""),
          u = `${s}/requests/${t.quote.id}`,
          l = e.accepts?.[0],
          d = t.quote.payment;
        pn(e.quote) !== pn(t.quote) && r("quote"),
          a !== pi({ domain: "identitymd.paid-action-quote", ...o }) &&
            r("quote hash"),
          (pi(e.input) !== t.quote.inputHash || pn(e.input) !== pn(t.input)) &&
            r("work"),
          ([
            u,
            ...(t.site
              ? [`${t.site.replace(/\/+$/, "")}/api/requests/${t.quote.id}`]
              : []),
          ].includes(e.resourceUrl) &&
            e.resource?.url === e.resourceUrl) ||
            r("resource"),
          e.requesterScopeHash !==
            ((n = t.token),
            (i = `paid-client:${pi({
              domain: "identitymd.paid-http-client",
              token: n,
            })}`),
            pi({ domain: "identitymd.paid-requester", scope: i })) &&
            r("credential"),
          (2 === e.x402Version && 1 === e.accepts.length && l) || r("version"),
          ("exact" !== l.scheme || l.network !== d.network) && r("network"),
          (l.asset.toLowerCase() !== d.asset.toLowerCase() ||
            l.payTo.toLowerCase() !== d.payTo.toLowerCase() ||
            l.amount !== d.amount) &&
            r("amount"),
          pn(l.extra ?? null) !== pn({ assetTransferMethod: "permit2" }) &&
            r("transfer method"),
          (!Number.isInteger(l.maxTimeoutSeconds) ||
            l.maxTimeoutSeconds < 6 ||
            l.maxTimeoutSeconds > 300) &&
            r("deadline");
        let c = t.capabilities.actions.find(
            (e) => e.action === t.quote.action
          )?.payment,
          m = (function (e, t) {
            if (!fA.includes(e)) return 1;
            let n = t?.runs;
            return "number" == typeof n && Number.isSafeInteger(n) && n >= 1
              ? n
              : null;
          })(t.quote.action, t.input);
        return (
          (c &&
            null != m &&
            c.network === d.network &&
            c.asset.toLowerCase() === d.asset.toLowerCase() &&
            c.payTo.toLowerCase() === d.payTo.toLowerCase() &&
            (BigInt(c.amount) * BigInt(m)).toString() === d.amount) ||
            r("advertised price"),
          l
        );
      })(e, t);
      if (e.quote.payer && n.address.toLowerCase() !== e.quote.payer)
        throw Error(
          "Only the wallet that paid for this project can continue it. Nothing was signed."
        );
      let o = e.quote.expiresAt - i() - 2;
      if (o < 15)
        throw Error(
          "This quote is too close to expiry. Nothing was signed. Get a new quote."
        );
      let s = { ...a, maxTimeoutSeconds: Math.min(a.maxTimeoutSeconds, o) },
        u = fh.fromConfig({
          schemes: [{ network: a.network, client: new f_(n) }],
          spendControls: {
            allowedAssets: [
              {
                network: a.network,
                asset: a.asset,
                maxAmountPerPayment: a.amount,
              },
            ],
          },
        });
      r("Signature 1 of 2, the payment");
      let l = JSON.parse(
        JSON.stringify({
          ...(await u.createPaymentPayload({
            x402Version: 2,
            resource: e.resource,
            accepts: [s],
          })),
          accepted: a,
        })
      );
      r("Signature 2 of 2, the quote");
      let d = await n.signTypedData(
        (function (e, t) {
          let { quote: n, requesterScopeHash: i, resourceUrl: r } = e;
          return {
            domain: {
              name: "IdentityMD Paid Action",
              version: "1",
              chainId: Number(n.payment.network.slice(7)),
            },
            primaryType: "QuoteApproval",
            types: {
              QuoteApproval: [
                { name: "resource", type: "string" },
                { name: "requesterScopeHash", type: "bytes32" },
                { name: "quoteId", type: "string" },
                { name: "quoteHash", type: "bytes32" },
                { name: "paymentHash", type: "bytes32" },
                { name: "action", type: "string" },
                { name: "asset", type: "address" },
                { name: "amount", type: "uint256" },
                { name: "payTo", type: "address" },
                { name: "expiresAt", type: "uint256" },
              ],
            },
            message: {
              resource: r,
              requesterScopeHash: `0x${i}`,
              quoteId: n.id,
              quoteHash: `0x${n.quoteHash}`,
              paymentHash: `0x${pi(t)}`,
              action: n.action,
              asset: n.payment.asset,
              amount: BigInt(n.payment.amount),
              payTo: n.payment.payTo,
              expiresAt: BigInt(n.expiresAt),
            },
          };
        })(e, l)
      );
      if (e.quote.expiresAt - i() < 8)
        throw Error(
          "The quote expired while signing. Nothing was submitted. Get a new quote."
        );
      return { payment: l, quoteSignature: d };
    }
    var ps = e.i(759150),
      pu = e.i(741780);
    let pl = /^[0-9a-f-]{36}$/;
    function pd(e) {
      if ("string" == typeof e) return e;
      let {
          detail: t,
          message: n,
          code: i,
        } = e && "object" == typeof e ? e : {},
        r = [t, n, i].find((e) => "string" == typeof e && e.trim());
      return "string" == typeof r ? r : JSON.stringify(e);
    }
    function pc(e, t = null, n = Date.now()) {
      let i = { href: null, problems: [] };
      switch (e.status) {
        case "quoted":
          return {
            ...i,
            tone: "idle",
            title: "Quote ready",
            line: "Nothing is charged until you sign and pay.",
            charged: !1,
            final: !1,
          };
        case "payment_pending":
          return {
            ...i,
            tone: "working",
            title: "Settling on Ethereum",
            line: "Safe to close this page. It picks up where it left off.",
            charged: !1,
            final: !1,
          };
        case "payment_failed":
          return {
            ...i,
            tone: "rejected",
            title: "Payment failed, not charged",
            line: e.payment?.reason
              ? e.payment.reason.replace(/_/g, " ")
              : null,
            charged: !1,
            final: !0,
          };
        case "expired":
          return {
            ...i,
            tone: "idle",
            title: "Quote expired, not charged",
            line: null,
            charged: !1,
            final: !0,
          };
        case "admission_pending": {
          let e = null != t && n - t > 12e4;
          return {
            ...i,
            tone: "working",
            title: e ? "Paid, starting" : "Paid, opening the work",
            line: e
              ? "Payment is confirmed. The work has not opened yet and will without you."
              : null,
            charged: !0,
            final: !1,
          };
        }
        case "admitted": {
          let t = e.admission?.result;
          if (t?.kind === "refused") {
            var r;
            return {
              ...i,
              tone: "rejected",
              title: "Paid, not started",
              line: "The request was refused after payment cleared.",
              charged: !0,
              final: !0,
              problems: Array.isArray((r = t.problems))
                ? r.map(pd).slice(0, 8)
                : [],
            };
          }
          if (t?.kind === "schedule") {
            let e = t.scheduleId && pl.test(t.scheduleId) ? t.scheduleId : null,
              n = "number" == typeof t.runsAdded ? t.runsAdded : null;
            return {
              ...i,
              tone: "accepted",
              title:
                null != n
                  ? `${n} run${1 === n ? "" : "s"} added`
                  : "Heartbeat started",
              line: null,
              href: e ? `/heartbeats/${e}` : null,
              charged: !0,
              final: !0,
            };
          }
          if (t?.kind === "oracle-group") {
            let e = Array.isArray(t.requests) ? t.requests : [],
              n =
                "string" == typeof e[0]?.jobId && pl.test(e[0].jobId)
                  ? e[0].jobId
                  : null;
            return {
              ...i,
              tone: "accepted",
              title: `${e.length} questions asked`,
              line: null,
              href: n ? `/jobs/${n}` : null,
              charged: !0,
              final: !0,
            };
          }
          let n = t?.kind === "workflow" ? t.workflowId : t?.jobId,
            a = n && pl.test(n) ? n : null,
            o =
              t?.kind === "oracle"
                ? "Question asked"
                : t?.kind === "workflow"
                ? "Release opened"
                : t?.launch
                ? "Launch opened"
                : "Job opened";
          return {
            ...i,
            tone: "accepted",
            title: o,
            line: null,
            href: a ? `/jobs/${a}` : null,
            charged: !0,
            final: !0,
          };
        }
        default:
          return {
            ...i,
            tone: "idle",
            title: e.status.replace(/_/g, " "),
            line: null,
            charged: !!e.payment?.paid,
            final: !1,
          };
      }
    }
    let pm = "imd.explorer.paid.v1:",
      pf = (e) => `${pm}${e.toLowerCase()}`,
      pp = /^[0-9a-f]{64}$/;
    class ph extends Error {}
    function pv(e, t) {
      let n = e.getItem(pf(t));
      if (n) {
        let e = JSON.parse(n);
        if ("string" != typeof e.token || !pp.test(e.token))
          throw new ph(
            "The saved request credential for this wallet is damaged. Export it before resetting anything."
          );
        return { ...e, orders: Array.isArray(e.orders) ? e.orders : [] };
      }
      let i = {
        token: Array.from(crypto.getRandomValues(new Uint8Array(32)), (e) =>
          e.toString(16).padStart(2, "0")
        ).join(""),
        orders: [],
      };
      return pg(e, t, i), i;
    }
    function pg(e, t, n) {
      e.setItem(pf(t), JSON.stringify(n));
    }
    function p$(e) {
      return { token: e.token, orders: e.orders };
    }
    let py = {
        executing: "Working",
        completed: "Shipped",
        blocked: "Stopped",
        cancelled: "Cancelled",
      },
      pb = {
        "workflow.open": "Company",
        "oracle.request": "Oracle question",
        "launch.open": "Launch",
        "job.open": "Job",
        "job.continue": "Next job",
        "schedule.create": "Heartbeat",
        "schedule.topup": "Runs added",
      },
      p_ = { "build-contract-project": "Contracts" },
      px = "Read and follow imd.fun/skill.md",
      pw = {
        site: {
          title: "Add a website",
          lead: "Add a website to",
          line: "A new site for its live contracts. Nothing onchain changes.",
          ask: "What should the site show?",
          say: "Say what the site should show",
        },
        "build-website": {
          title: "Change the site",
          lead: "Change",
          line: "Built on the site as it is now.",
          ask: "What should change?",
          say: "Say what should change",
        },
        "build-contract-project": {
          title: "Change the contracts",
          lead: "Change",
          line: "Built on this code and merged into its repository.",
          ask: "What should change?",
          say: "Say what should change",
        },
        indexer: {
          title: "Add an indexer",
          lead: "Add an indexer to",
          line: "Its live contracts' events as GraphQL, for you to deploy. Nothing onchain changes.",
          ask: "What should it record and answer?",
          say: "Say what it should record",
        },
        "build-ponder-indexer": {
          title: "Change the indexer",
          lead: "Change",
          line: "Built on this indexer and merged into its repository.",
          ask: "What should change?",
          say: "Say what should change",
        },
        "research-report": {
          title: "Follow up",
          lead: "Follow up on",
          line: "A new report that starts from this one.",
          ask: "What should it answer next?",
          say: "Say what it should answer next",
        },
        "create-image": {
          title: "Make a new version",
          lead: "New version of",
          line: "A new image made from this one. This one stays as it is.",
          ask: "What should be different?",
          say: "Say what should be different",
        },
        "create-audio": {
          title: "Make a new version",
          lead: "New version of",
          line: "A new take made from this one. This one stays as it is.",
          ask: "What should be different?",
          say: "Say what should be different",
        },
        "create-video": {
          title: "Make a new version",
          lead: "New version of",
          line: "A new cut made from this one. This one stays as it is.",
          ask: "What should be different?",
          say: "Say what should be different",
        },
      },
      pk = {
        "build-website":
          "Add an opening-hours section under the menu, and make the phone number tappable.",
        "build-contract-project":
          "Add a pause the owner can switch on and off, with tests for it.",
        "build-ponder-indexer":
          "Also index the vault contract, and add each wallet's total deposits.",
        "research-report":
          "How have fees changed since then, and who pays the most?",
        "create-image": "The same scene at night, with the windows lit.",
        "create-audio": "Slower, in a warmer voice.",
        "create-video": "The same shot, five seconds longer.",
        site: "What it does, its live numbers, and buttons to use it from a wallet.",
        indexer:
          "Every trade and transfer, with volume per day and each wallet's history.",
      },
      pI = "audit",
      pS = [
        { id: 1, name: "Ethereum" },
        { id: 8453, name: "Base" },
        { id: 4663, name: "Robinhood" },
        { id: 0xaa36a7, name: "Sepolia" },
      ],
      pj = 5n * 10n ** 18n,
      pN = (e, t) => {
        let n = t - e.length;
        return n <= 300
          ? (0, o.jsx)("p", {
              className: `request-note request-room${n < 0 ? " is-bad" : ""}`,
              children:
                n < 0
                  ? `${(-n).toLocaleString("en-US")} characters too long`
                  : `${n.toLocaleString("en-US")} characters left`,
            })
          : null;
      },
      pz = "imd.hire.draft",
      pD = 5n * 10n ** 14n,
      pA = {
        company: "workflow.open",
        contracts: "launch.evm_project",
        hook: "launch.univ4_hook",
        token: "launch.token",
        report: "research-report",
        website: "build-website",
        indexer: "build-ponder-indexer",
        image: "create-image",
        audio: "create-audio",
        video: "create-video",
      },
      pU = new Set(["beyond_plan", "offline"]),
      pO = {
        autoComplete: "off",
        "data-1p-ignore": !0,
        "data-lpignore": "true",
        "data-bwignore": !0,
        "data-form-type": "other",
      },
      pP = [
        {
          name: "latestRoundData",
          type: "function",
          stateMutability: "view",
          inputs: [],
          outputs: [
            { name: "roundId", type: "uint80" },
            { name: "answer", type: "int256" },
            { name: "startedAt", type: "uint256" },
            { name: "updatedAt", type: "uint256" },
            { name: "answeredInRound", type: "uint80" },
          ],
        },
      ];
    function pC(e) {
      let t = e.replace(/^0+(?=\d)/, "") || "0";
      for (let [e, n] of [
        [12, " trillion"],
        [9, " billion"],
        [6, " million"],
      ]) {
        if (t.length <= e) continue;
        let i = t.slice(0, t.length - e),
          r = t.slice(t.length - e).replace(/0+$/, "");
        if (r.length <= 2 && i.length <= 3)
          return `${i}${r ? `.${r}` : ""}${n}`;
      }
      return (0, fI.b)(t);
    }
    let pE = (0, fj.F)($.f.id);
    async function pZ(e, t, n = {}) {
      let i = await fetch(`/api/requests/${e}`, {
          method: n.method ?? "GET",
          ...(n.signal ? { signal: n.signal } : {}),
          headers: {
            ...(t ? { authorization: `Bearer ${t}` } : {}),
            ...(void 0 !== n.body
              ? { "content-type": "application/json" }
              : {}),
            ...n.headers,
          },
          ...(void 0 !== n.body ? { body: JSON.stringify(n.body) } : {}),
        }),
        r = await i.text(),
        a = null;
      try {
        a = r ? JSON.parse(r) : null;
      } catch {
        a = null;
      }
      return {
        status: i.status,
        json: a,
        retryAfter: Number(i.headers.get("retry-after") ?? 0) || null,
      };
    }
    function pT(e, t) {
      let n = t ?? {};
      if (429 === e) return "Busy right now. Try again in a minute.";
      if (422 === e) {
        let e;
        return (
          (e = Array.isArray(n.problems)
            ? n.problems.map((e) => pd(e).replace(/\.$/, "")).join(". ")
            : n.detail),
          `The control plane will not quote this. ${e ?? ""}`.trim()
        );
      }
      return "insufficient_funds" === n.reason
        ? "Not enough IMD in this wallet. Nothing was charged."
        : 400 === e && n.detail
        ? `${(n.error ?? "invalid request").replace(/_/g, " ")}: ${n.detail}.`
        : `${(n.error ?? `error ${e}`).replace(/_/g, " ")}${
            n.reason ? `, ${n.reason.replace(/_/g, " ")}` : ""
          }.`;
    }
    function pL(e) {
      let t = e.trim();
      return t
        ? t.startsWith("0x")
          ? (0, fx.l)(t.toLowerCase())
          : `the ${t} contract`
        : "you";
    }
    e.s(
      [
        "PaidRequest",
        0,
        function ({
          skills: e = [],
          launchChain: t = { id: 1, name: "Ethereum" },
          topup: n,
          continuation: i,
          hireHead: r = !1,
        }) {
          let a,
            y,
            b,
            _ = (0, u.useRouter)(),
            x = (0, l.useRef)(!1),
            [w, k] = (0, l.useState)(null),
            I = i ?? w ?? void 0,
            [S, j] = (0, l.useState)(null),
            [N, z] = (0, l.useState)(null),
            [D, A] = (0, l.useState)(null),
            [U, O] = (0, l.useState)(null),
            [P, C] = (0, l.useState)(null),
            [E, Z] = (0, l.useState)(null),
            [T, L] = (0, l.useState)(null),
            [q, R] = (0, l.useState)(null),
            [F, M] = (0, l.useState)([]),
            [B, J] = (0, l.useState)(!1),
            [V, W] = (0, l.useState)(!1),
            [K, G] = (0, l.useState)(!1),
            H = (0, fN.I)(),
            [X, Y] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            K && H.open && Y(!0), K || Y(!1);
          }, [K, H.open]);
          let [Q, ee] = (0, l.useState)(!1),
            [et, en] = (0, l.useState)(null),
            [ei, er] = (0, l.useState)(null),
            [ea, eo] = (0, l.useState)(null),
            [es, eu] = (0, l.useState)(() => Math.floor(Date.now() / 1e3)),
            [el, ed] = (0, l.useState)(I ? "job.continue" : "launch.open"),
            [ec, em] = (0, l.useState)({}),
            [ef, ep] = (0, l.useState)(
              I?.skill ??
                e.find((e) => "research-report" === e.id)?.id ??
                e[0]?.id ??
                "research-report"
            ),
            [eh, ev] = (0, l.useState)("evm_project"),
            [eg, e$] = (0, l.useState)(!0),
            [ey, eb] = (0, l.useState)(!I),
            [e_, ex] = (0, l.useState)(!1),
            [ew, ek] = (0, l.useState)(!0),
            [eI, eS] = (0, l.useState)("standard"),
            [ej, eN] = (0, l.useState)(f6.supply),
            [ez, eD] = (0, l.useState)(""),
            [eA, eU] = (0, l.useState)(""),
            [eO, eP] = (0, l.useState)(null),
            [eC, eE] = (0, l.useState)(null),
            eZ = (0, l.useRef)(!1),
            eT = (0, l.useRef)(!1),
            [eL, eq] = (0, l.useState)(""),
            [eR, eF] = (0, l.useState)(88),
            [eM, eB] = (0, l.useState)(""),
            eJ = eg || ey,
            [eV, eW] = (0, l.useState)(t.id),
            eK = (0, l.useRef)(!1),
            [eG, eH] = (0, l.useState)("imd"),
            [eX, eY] = (0, l.useState)(20),
            [eQ, e0] = (0, l.useState)({}),
            [e1, e4] = (0, l.useState)(null),
            [e6, e2] = (0, l.useState)(!1),
            [e9, e3] = (0, l.useState)(f6),
            [e5, e8] = (0, l.useState)({}),
            [e7, te] = (0, l.useState)(null),
            [tt, tn] = (0, l.useState)("new"),
            [ti, tr] = (0, l.useState)("page"),
            [ta, to] = (0, l.useState)(""),
            [ts, tu] = (0, l.useState)(null),
            [tl, td] = (0, l.useState)(!1),
            [tc, tm] = (0, l.useState)(!1),
            [tf, tp] = (0, l.useState)(fC),
            [th, tv] = (0, l.useState)(n ? 10 : 30),
            [tg, t$] = (0, l.useState)(!1),
            [ty, tb] = (0, l.useState)(""),
            t_ = (e) => ec[e] ?? "",
            tx = (e) => (t) => em((n) => ({ ...n, [e]: t })),
            tw = "job.continue" === el ? "job.continue" : ef,
            tk = I ? I.parts ?? [I.skill] : [],
            tI = I?.adds ?? [],
            tS = tI.includes(ef)
              ? { "build-website": "site", "build-ponder-indexer": "indexer" }[
                  ef
                ]
              : void 0,
            tj = pw[tS ?? ef] ?? pw["build-website"],
            tN = t_(tw),
            tz = tx(tw),
            tD = t_(`launch.${eh}`),
            tA = tx(`launch.${eh}`),
            tU = "univ4_hook" === eh ? 5e3 : 5500,
            tO = t_("workflow.open"),
            tP = tx("workflow.open"),
            tC = tc ? "heartbeat" : "oracle.request",
            tE = t_(tC),
            tZ = tx(tC),
            tT = !!N?.requestKey,
            tL =
              I || n
                ? null
                : {
                    action: el,
                    launchKind: eh,
                    tokenOnly: ey,
                    withToken: e_,
                    companyToken: ew,
                    deploy: eg,
                    skill: ef,
                    texts: ec,
                    tokenName: ez,
                    tokenSymbol: eA,
                    repoInput: ta,
                    owner: eL,
                    source: tt,
                    poolPercent: eR,
                    restTo: eM,
                    tokenForm: e9,
                  },
            tq = tL ? JSON.stringify(tL) : null;
          (0, l.useEffect)(() => {
            if (!tq || !tB.current) return;
            let e = setTimeout(() => {
              try {
                localStorage.setItem(pz, tq);
              } catch {}
            }, 400);
            return () => clearTimeout(e);
          }, [tq]);
          let tR = (e) => !D || D.actions.some((t) => t.action === e),
            tF = "job.open" === el && ef === pI,
            tM = !!D?.actions.some((e) => e.action === fz),
            tB = (0, l.useRef)(!1);
          (0, l.useEffect)(() => {
            if (!I && !n) {
              try {
                let e = localStorage.getItem(pz),
                  t = e ? JSON.parse(e) : null;
                if (t && "object" == typeof t) {
                  let e = (e, t) => {
                      "string" == typeof e && t(e);
                    },
                    n = (e, t) => {
                      "boolean" == typeof e && t(e);
                    };
                  if (
                    (("launch.open" === t.action ||
                      "job.open" === t.action ||
                      "workflow.open" === t.action ||
                      "oracle.request" === t.action) &&
                      ed(t.action),
                    ("evm_project" === t.launchKind ||
                      "univ4_hook" === t.launchKind) &&
                      ev(t.launchKind),
                    n(t.tokenOnly, eb),
                    n(t.withToken, ex),
                    n(t.companyToken, ek),
                    n(t.deploy, e$),
                    e(t.skill, ep),
                    t.texts && "object" == typeof t.texts)
                  )
                    em(
                      Object.fromEntries(
                        Object.entries(t.texts).filter(
                          ([, e]) => "string" == typeof e
                        )
                      )
                    );
                  else {
                    let e = {};
                    "string" == typeof t.objective &&
                      "string" == typeof t.skill &&
                      (e[t.skill] = t.objective),
                      "string" == typeof t.launchObjective &&
                        (e[
                          `launch.${
                            "univ4_hook" === t.launchKind
                              ? "univ4_hook"
                              : "evm_project"
                          }`
                        ] = t.launchObjective),
                      "string" == typeof t.release &&
                        (e["workflow.open"] = t.release),
                      "string" == typeof t.question &&
                        (e["oracle.request"] = t.question),
                      em(e);
                  }
                  e(t.tokenName, eD),
                    e(t.tokenSymbol, eU),
                    e(t.repoInput, to),
                    e(t.owner, eq),
                    "github" === t.source &&
                      "string" == typeof t.repoInput &&
                      t.repoInput.trim() &&
                      tn("github"),
                    "number" == typeof t.poolPercent && eF(t.poolPercent),
                    e(t.restTo, eB),
                    t.tokenForm &&
                      "object" == typeof t.tokenForm &&
                      e3({ ...f6, ...t.tokenForm });
                }
              } catch {}
              tB.current = !0;
            }
          }, []);
          let [tJ, tV] = (0, l.useState)(I || n ? "form" : "menu"),
            [tW, tK] = (0, l.useState)(null),
            [tG, tH] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            if ((tH(!1), "form" !== tJ)) return;
            let e = setTimeout(() => tH(!0), 900);
            return () => clearTimeout(e);
          }, [tJ]);
          let tX = (0, l.useRef)(null),
            tY = () => {
              tX.current = window.location.search;
              let t = new URLSearchParams(window.location.search),
                n = t.get("make"),
                i = t.get("continue");
              i && /^[0-9a-f-]{36}$/i.test(i)
                ? i8(i)
                : (k(null),
                  tV(
                    n &&
                      ((t) => {
                        if ("company" === t) tm(!1), ed("workflow.open");
                        else if ("oracle" === t) tm(!1), ed("oracle.request");
                        else if ("heartbeat" === t)
                          tp({ mode: "daily", time: "09:00" }),
                            tm(!0),
                            ed("oracle.request");
                        else if ("token" === t)
                          tm(!1), ed("launch.open"), ev("evm_project"), eb(!0);
                        else if ("contracts" === t || "hook" === t)
                          tm(!1),
                            ed("launch.open"),
                            ev("hook" === t ? "univ4_hook" : "evm_project"),
                            eb(!1);
                        else {
                          if (!(t === pI || e.some((e) => e.id === t)))
                            return !1;
                          tm(!1), ep(t), ed("job.open");
                        }
                        return !0;
                      })(n)
                      ? "form"
                      : "menu"
                  ));
            },
            tQ = (e, t = !1) => {
              window.history[t ? "replaceState" : "pushState"](null, "", e),
                (tX.current = window.location.search);
            },
            t0 = (0, u.useSearchParams)().toString();
          (0, l.useEffect)(() => {
            I || n || tX.current === window.location.search || tY();
          }, [t0]),
            (0, l.useEffect)(() => {
              if (!I && !n)
                return (
                  window.addEventListener("popstate", tY),
                  () => window.removeEventListener("popstate", tY)
                );
            }, []);
          let t1 = D?.launches,
            t4 =
              t1?.chains
                .filter((e) => e.kinds.includes("evm_contracts"))
                .map((e) => e.chainId) ?? [],
            t6 =
              t4.length > 0 &&
              (("launch.open" === el &&
                "evm_project" === eh &&
                !ey &&
                (eg || "github" === tt) &&
                !e_) ||
                ("workflow.open" === el && !ew)),
            t2 = [...pS.filter((e) => e.id !== t.id), t]
              .map((e) => {
                let n;
                return {
                  ...e,
                  open:
                    ((n = e.id),
                    t1
                      ? t1.chains.some(
                          (e) =>
                            e.chainId === n &&
                            (t6
                              ? e.kinds.includes("evm_contracts")
                              : e.kinds.some((e) => "evm_contracts" !== e))
                        )
                      : n === t.id),
                };
              })
              .sort(
                (e, t) =>
                  Number(t.open) - Number(e.open) ||
                  pS.findIndex((t) => t.id === e.id) -
                    pS.findIndex((e) => e.id === t.id)
              );
          t2.find((e) => e.id === eV);
          let t9 = t1
            ? pS.find((e) =>
                t1.chains.some((t) => t.chainId === e.id && !t.testnet)
              )?.id ?? t1.defaultChainId
            : t.id;
          (0, l.useEffect)(() => {
            eK.current || eW(t9);
          }, [t9]);
          let t3 = t6
              ? "evm_contracts"
              : "workflow.open" === el
              ? "evm_project"
              : ey
              ? "custom_token"
              : eh,
            t5 = t1?.chains
              .find((e) => e.chainId === eV)
              ?.pairings.filter((e) => e.kinds.includes(t3)) ?? [
              { pairWith: "eth", symbol: "ETH", name: "Ether", decimals: 18 },
            ],
            t8 = t5.find((e) => e.pairWith === eG) ?? t5[0],
            t7 = t8?.pairWith ?? "eth",
            ne = t8?.customCap,
            nt = {
              pairWith: t7,
              symbol: t8?.symbol ?? "ETH",
              decimals: t8?.decimals ?? 18,
              ...(ne ? { customCap: ne } : {}),
            },
            nn = t5.map((e) => f9(e)).join("|");
          (0, l.useEffect)(() => {
            let e = new Set(nn.split("|")),
              t = f9(nt);
            e3((n) =>
              e.has(n.cap) && t && n.cap !== t ? { ...n, cap: t } : n
            );
          }, [t7, nn]);
          let ni =
              "oracle.request" !== el &&
              ("job.open" !== el ||
                tF ||
                "build-website" === ef ||
                "build-ponder-indexer" === ef)
                ? null
                : el,
            nr = !n && tc && null != ni && tM,
            na = fL(th, D?.limits?.[n ? fD : fz]?.maxRuns),
            no = nr
              ? (function (e, t) {
                  if ("daily" === t.mode && !fE.test(t.time))
                    return "A time of day, as HH:MM in UTC.";
                  let n = fZ(t);
                  return null == n
                    ? "How often: a whole number above zero."
                    : n < fO[e]
                    ? "job.open" === e
                      ? "A job runs at most every 30 minutes: each run holds its agent's lease that long."
                      : "A question runs at most every 10 minutes: a panel needs that long to answer."
                    : null;
                })(ni, tf) ?? na
              : n
              ? na
              : null,
            ns = n ? fD : nr ? fz : el,
            nu = D?.actions.find((e) => e.action === ns)?.payment ?? null,
            nl = ns === fz || ns === fD,
            nd = nu
              ? nl
                ? na
                  ? null
                  : (function (e, t) {
                      let n = fL(t);
                      if (n) throw Error(n);
                      return e * BigInt(t);
                    })(BigInt(nu.amount), th)
                : BigInt(nu.amount)
              : null,
            nc = D?.limits?.["oracle.request"]?.minPanelSize ?? 5,
            nm = D?.limits?.["oracle.request"]?.maxPanelSize ?? 100,
            nf = Math.max(
              nc,
              Math.min(nm, Number.isFinite(eX) ? Math.round(eX) : 20)
            ),
            np =
              Number.isFinite(eX) &&
              (!Number.isInteger(eX) || eX < nc || eX > nm)
                ? `A panel of ${nc} to ${nm} agents.`
                : null,
            nh = (() => {
              try {
                return fV({
                  question: tE,
                  panelSize: eX,
                  min: nc,
                  max: nm,
                  ...eQ,
                });
              } catch {
                return null;
              }
            })(),
            nv = e1 && nh && e1.key === JSON.stringify(nh) ? e1.result : null,
            ng = !!(nv && 0 === nv.blockers.length),
            n$ =
              tF ||
              ("job.open" === el && "build-website" === ef) ||
              ("launch.open" === el && "evm_project" === eh && !ey),
            ny = n$ && (tF || "github" === tt),
            nb = tF ? "code" : "launch.open" === el ? "contracts" : "site",
            n_ = `${nb}:${ta.trim()}`,
            nx =
              ny && ts?.key === n_ && ts.answer.ok && !pe(ts.answer).length
                ? ts.answer.source
                : null,
            nw = !!t1?.hookCustomToken,
            nk =
              nw &&
              "own" === eI &&
              "launch.open" === el &&
              "univ4_hook" === eh &&
              eJ &&
              !ny &&
              !ey,
            nI = `${el}:${eh}:${ey}:${t6}:${eJ}:${ef}:${eV}:${
              t8?.pairWith ?? "eth"
            }:${ny ? nx?.baseCommit ?? "unread" : "new"}:${nk}`,
            nS =
              ("workflow.open" === el && !t6) ||
              ("launch.open" === el && !ey && (eJ || ny) && !t6),
            nj = nS && "launch.open" === el && "evm_project" === eh && !ny,
            nN = [
              ...(nS
                ? [
                    { label: "Token name", value: ez },
                    { label: "Token symbol", value: eA },
                  ]
                : []),
              ...(nk
                ? [{ label: "Token supply", value: `${pC(ej || "0")} tokens` }]
                : []),
              ...Object.values(e5),
            ],
            nz = (() => {
              try {
                if ("oracle.request" === el) return null;
                if ("job.continue" === el && I) {
                  var e;
                  return {
                    sent: "job.continue",
                    input:
                      ((e = {
                        parentJobId: I.jobId,
                        objective: f0(tN, nN),
                        skill: ef,
                      }),
                      { ...fF(e), parentJobId: e.parentJobId }),
                  };
                }
                if (ny) {
                  if (!nx) return null;
                  return "launch.open" === el
                    ? {
                        sent: "launch.open",
                        input: (function (e) {
                          let t = e.objective.trim();
                          if (!t)
                            throw Error(
                              "Say what the contracts do and what to launch."
                            );
                          let n = !1 === e.withToken,
                            i = e.owner?.trim().toLowerCase();
                          if (i && fX(i)) throw Error(fX(i));
                          return {
                            objective: t,
                            repoUrl: e.source.repoUrl,
                            baseCommit: e.source.baseCommit,
                            shape: "chain",
                            references: ["solidity-security-review"],
                            steps: [
                              {
                                skill: "audit-imported-code",
                                references: [
                                  "pashov-skill",
                                  "pashov-xray",
                                  "tob-entry-point-analyzer",
                                ],
                              },
                              { skill: "adapt-contract-project" },
                              { skill: "adversarial-review" },
                            ],
                            onchain: n ? "evm_contracts" : "evm_project",
                            github: !0,
                            ...(void 0 !== e.chainId
                              ? { chainId: e.chainId }
                              : {}),
                            ...(e.pairWith && "eth" !== e.pairWith && !n
                              ? { pairWith: e.pairWith }
                              : {}),
                            ...(i ? { owner: i } : {}),
                          };
                        })({
                          objective: f0(tD, nN),
                          source: nx,
                          withToken: !t6,
                          owner: eL,
                          chainId: eV,
                          pairWith: t8?.pairWith ?? "eth",
                        }),
                      }
                    : tF
                    ? {
                        sent: "job.open",
                        input: (function (e) {
                          let {
                            repoUrl: t,
                            baseCommit: n,
                            owner: i,
                            repo: r,
                          } = e.source;
                          return {
                            objective:
                              e.objective.trim() ||
                              `Audit the contracts in ${i}/${r} as they are.`,
                            template: "audit",
                            repoUrl: t,
                            baseCommit: n,
                            references: ["solidity-security-review"],
                            github: !0 === e.github,
                          };
                        })({
                          objective: f0(tN, nN),
                          source: nx,
                          github: "github" === ti,
                        }),
                      }
                    : {
                        sent: "job.open",
                        input: (function (e) {
                          let {
                            repoUrl: t,
                            baseCommit: n,
                            owner: i,
                            repo: r,
                            site: a,
                          } = e.source;
                          return {
                            objective:
                              e.objective.trim() || `Host ${i}/${r} as it is.`,
                            repoUrl: t,
                            baseCommit: n,
                            ...(a?.build
                              ? {
                                  shape: "chain",
                                  steps: [
                                    { skill: "import-site" },
                                    { skill: "site-content-check" },
                                  ],
                                }
                              : { skill: "site-content-check" }),
                            ipfs: !0,
                            github: !1,
                          };
                        })({ objective: f0(tN, nN), source: nx }),
                      };
                }
                if ("launch.open" === el && !eJ)
                  return {
                    sent: "job.open",
                    input: fF({
                      objective: f0(
                        "univ4_hook" === eh ? `A Uniswap v4 hook: ${tD}` : tD,
                        nN
                      ),
                      skill: "build-contract-project",
                      references: fW[eh],
                    }),
                  };
                if ("job.open" === el)
                  return {
                    sent: "job.open",
                    input: fF({ objective: f0(tN, nN), skill: ef }),
                  };
                if ("launch.open" === el && ey) {
                  let e = (function (e) {
                    let { form: t } = e,
                      n = (function (e) {
                        let t = (function (e, t = "ETH") {
                          return f8(e, t).map((e) => e.text);
                        })(e);
                        if (t.length) throw Error(t[0]);
                        let n = e.name.trim(),
                          i = e.symbol.trim(),
                          r = BigInt(
                            e.supply.replace(/[,_\s]/g, "")
                          ).toLocaleString("en-US");
                        return [
                          `A custom token: ${n} (${i}).`,
                          `Token name: ${n}`,
                          `Token symbol: ${i}`,
                          `Token supply: ${r} with 18 decimals, all minted once to the deployer in the constructor.`,
                          ...(e.notes.trim()
                            ? [`What it does: ${e.notes.trim()}`]
                            : []),
                        ].join("\n");
                      })(t),
                      i = t.remainderTo.trim().toLowerCase();
                    return {
                      objective: n,
                      shape: "chain",
                      steps: [
                        { skill: "build-contract-project" },
                        { skill: "adversarial-review" },
                      ],
                      onchain: "custom_token",
                      github: !0,
                      ...(void 0 !== e.chainId ? { chainId: e.chainId } : {}),
                      ...(e.pairWith && "eth" !== e.pairWith
                        ? { pairWith: e.pairWith }
                        : {}),
                      economics: {
                        poolBps: fY(t.poolPercent),
                        initialMarketCapWei: f7(t.cap, e.decimals ?? 18),
                        ...(t.poolPercent < 90 ? { remainderTo: i } : {}),
                      },
                    };
                  })({
                    form: {
                      ...e9,
                      remainderTo: e9.remainderTo.trim() || S || "",
                    },
                    chainId: eV,
                    pairWith: t7,
                    decimals: nt.decimals,
                  });
                  return {
                    sent: "launch.open",
                    input: { ...e, objective: f0(e.objective, nN) },
                  };
                }
                if ("launch.open" === el)
                  return {
                    sent: "launch.open",
                    input: (function (e) {
                      let t = e.objective.trim();
                      if (!t) throw Error("Say what the contracts should do.");
                      let n = "evm_project" === e.kind && !1 === e.withToken,
                        i =
                          "evm_project" === e.kind
                            ? e.owner?.trim().toLowerCase()
                            : void 0;
                      if (i && fX(i)) throw Error(fX(i));
                      return {
                        objective: t,
                        shape: "chain",
                        references: fW[e.kind],
                        steps: [
                          { skill: "build-contract-project" },
                          { skill: "adversarial-review" },
                        ],
                        onchain: n ? "evm_contracts" : e.kind,
                        ...("univ4_hook" === e.kind && e.customToken
                          ? { customToken: !0 }
                          : {}),
                        github: !0,
                        ...(void 0 !== e.chainId ? { chainId: e.chainId } : {}),
                        ...(e.pairWith && "eth" !== e.pairWith && !n
                          ? { pairWith: e.pairWith }
                          : {}),
                        ...(void 0 !== e.poolPercent && !n
                          ? {
                              economics: {
                                poolBps: fY(e.poolPercent),
                                ...("evm_project" === e.kind &&
                                fG(e.restTo ?? "")
                                  ? { remainderTo: fG(e.restTo ?? "") }
                                  : {}),
                              },
                            }
                          : {}),
                        ...(i ? { owner: i } : {}),
                      };
                    })({
                      objective: f0(tD, nN),
                      kind: eh,
                      withToken: !t6,
                      customToken: nk,
                      owner: eL,
                      chainId: eV,
                      pairWith: t8?.pairWith ?? "eth",
                      poolPercent: eR,
                      restTo: eM,
                    }),
                  };
                return {
                  sent: "workflow.open",
                  input: (function (e) {
                    let t = e.request.trim();
                    if (!t)
                      throw Error("Describe the contracts and the website.");
                    let n =
                        !1 === e.withToken ? "evm_contracts" : "evm_project",
                      i = "evm_project" === n;
                    return {
                      request: t,
                      context:
                        "The requester chose this release: source code published to GitHub, website hosted on IPFS, contracts deployed on chain.",
                      draft: {
                        objective: t.slice(0, 8e3),
                        shape: "chain",
                        onchain: n,
                        github: !0,
                        ipfs: !0,
                        steps: [
                          { skill: "build-contract-project" },
                          { skill: "frontend-for-contract" },
                          { skill: "adversarial-review" },
                        ],
                        chainId: e.chainId,
                        ...(i && e.pairWith && "eth" !== e.pairWith
                          ? { pairWith: e.pairWith }
                          : {}),
                        ...(i && void 0 !== e.poolPercent
                          ? { economics: { poolBps: fY(e.poolPercent) } }
                          : {}),
                      },
                      permissions: {
                        github: !0,
                        ipfs: !0,
                        onchain: { kind: n, chainId: e.chainId },
                      },
                    };
                  })({
                    request: f0(tO, nN),
                    chainId: eV,
                    pairWith: t8?.pairWith ?? "eth",
                    poolPercent: eR,
                    withToken: !t6,
                  }),
                };
              } catch {
                return null;
              }
            })(),
            nD = !S && !e9.remainderTo.trim(),
            nA = f8(
              { ...e9, remainderTo: e9.remainderTo.trim() || S || "" },
              nt
            ).filter((e) => !(nD && "rest" === e.field)),
            nU = (...e) => nA.find((t) => e.includes(t.field))?.text ?? null,
            nO = {
              name: "Name your coin",
              symbol: "Give it a symbol",
              supply: "Fix the supply",
              pool: "Fix the pool share",
              cap: "Fix the opening market cap",
              rest: "Fix the wallet for the rest",
            },
            nP = {
              "build-website": "Describe the site",
              "research-report": "Say what the report answers",
              "create-image": "Describe the image",
              "create-audio": "Describe the audio",
              "create-video": "Describe the video",
              "build-contract-project": "Describe the contracts",
              "build-ponder-indexer": "Say what to index",
            },
            nC = (() => {
              if (n) return null;
              if (ny) {
                if (!ta.trim())
                  return { say: "Paste your repository", field: "repo" };
                if (tl) return { say: "Reading the repository", field: "repo" };
                if (!nx)
                  return { say: "Fix the repository link", field: "repo" };
              }
              if ("launch.open" === el && ey) {
                let e = nA[0];
                return e
                  ? { say: nO[e.field], field: `coin-${e.field}` }
                  : e9.notes.length > 2e3
                  ? { say: "Shorten the description", field: "coin-notes" }
                  : null;
              }
              let e = (
                "launch.open" === el
                  ? tD
                  : "workflow.open" === el
                  ? tO
                  : "oracle.request" === el
                  ? tE
                  : tN
              ).trim();
              if (!tF && !(ny && "launch.open" !== el) && e.length < 12)
                return {
                  field: "text",
                  say:
                    "workflow.open" === el
                      ? "Describe the company"
                      : "launch.open" === el
                      ? "univ4_hook" === eh
                        ? "Describe the hook"
                        : "Describe the contracts"
                      : "oracle.request" === el
                      ? "Ask a question"
                      : "job.continue" === el
                      ? tj.say
                      : nP[ef] ?? "Describe it",
                };
              let t =
                "launch.open" === el
                  ? tU
                  : "workflow.open" === el
                  ? 5500
                  : "oracle.request" === el
                  ? 2e3
                  : 7e3;
              return e.length > t
                ? { field: "text", say: "Shorten the description" }
                : nS && !ez.trim()
                ? { say: "Name the token", field: "token-name" }
                : nS && !/^[A-Z0-9]{2,11}$/.test(eA.trim())
                ? { say: "Give the token a symbol", field: "token-symbol" }
                : nk && !/^[1-9][0-9]{0,17}$/.test(ej)
                ? { say: "Fix the supply", field: "hook-supply" }
                : nS && !ny && fK(eR)
                ? { say: "Fix the pool share", field: "pool" }
                : nj && fH(eM)
                ? { say: "Fix where the rest goes", field: "rest" }
                : "launch.open" === el && eL.trim() && fX(eL)
                ? { say: "Fix the owner address", field: "owner" }
                : "oracle.request" === el && np
                ? { say: "Fix the panel", field: "panel" }
                : nr && no
                ? { say: "Fix the number of runs", field: "runs" }
                : null;
            })(),
            nE = nC?.say ?? null,
            nZ = e7 && e7.kindKey === nI ? e7 : null,
            nT = nZ && nz && nZ.key === JSON.stringify(nz) ? nZ.result : null,
            nL = !!(nT && 0 === nT.blockers.length),
            nq = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            if (
              !nT ||
              !nw ||
              nk ||
              "launch.open" !== el ||
              "univ4_hook" !== eh ||
              !nT.blockers.some((e) => e.customToken)
            )
              return;
            let e = tD.trim();
            nq.current !== e && ((nq.current = e), eS("own"));
          }, [nT, nw, nk, el, eh, tD]);
          let nR = (0, l.useCallback)(
              (e) => {
                S && pg(localStorage, S, e), z(e);
              },
              [S]
            ),
            [nF, nM] = (0, l.useState)(null);
          (0, l.useEffect)(() => {
            let e = !0;
            return (
              (async () => {
                try {
                  let [, t] = await pE.readContract({
                      address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                      abi: pP,
                      functionName: "latestRoundData",
                    }),
                    n = Number(t) / 1e8,
                    i = null;
                  try {
                    let [e] = await pE.readContract({
                      address: ps.A[1].quoter,
                      abi: pu.U,
                      functionName: "quoteExactInputSingle",
                      args: [
                        {
                          poolKey: ps.e,
                          zeroForOne: !1,
                          exactAmount: 10n ** 18n,
                          hookData: "0x",
                        },
                      ],
                    });
                    i = (Number(e) / 1e18 / 0.99) * n;
                  } catch {}
                  e && n > 0 && nM({ eth: n, imd: i });
                } catch {}
              })(),
              () => {
                e = !1;
              }
            );
          }, []);
          let nB = (e, t) => {
            let n;
            if (!nF || !Number.isFinite(e) || e <= 0) return null;
            let i = "ETH" === t ? nF.eth : "IMD" === t ? nF.imd : null;
            return i
              ? (n = e * i) < 10
                ? `$${n.toFixed(2)}`
                : n < 1e6
                ? `$${Math.round(n).toLocaleString("en-US")}`
                : `$${(n / 1e6).toFixed(1)}M`
              : null;
          };
          (0, l.useEffect)(() => {
            pZ("capabilities", null)
              .then((e) => {
                200 === e.status && A(e.json);
              })
              .catch(() => void 0);
            let e = setInterval(() => eu(Math.floor(Date.now() / 1e3)), 1e3);
            return () => clearInterval(e);
          }, []),
            (0, l.useEffect)(() => {
              let e = (e) => {
                S &&
                  e.key === `${pm}${S.toLowerCase()}` &&
                  (z(pv(localStorage, S)),
                  en({
                    text: "This request changed in another tab. Check it here before going on.",
                    bad: !0,
                  }));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [S]);
          let nJ = (0, l.useCallback)(
              async (e) => {
                if (!nu) return null;
                let t = nu.asset,
                  [n, i] = await Promise.all([
                    pE.readContract({
                      address: t,
                      abi: p.q,
                      functionName: "balanceOf",
                      args: [e],
                    }),
                    pE.readContract({
                      address: t,
                      abi: p.q,
                      functionName: "allowance",
                      args: [e, m0],
                    }),
                  ]);
                return O(n), C(i), { balance: n, allowance: i };
              },
              [nu]
            ),
            nV = (0, l.useCallback)(async (e, t) => {
              let n = await pZ(t, e.token);
              if (429 === n.status) return (n.retryAfter ?? 30) * 1e3;
              if (200 !== n.status) return 5e3;
              let i = n.json;
              return (
                L(i),
                i.order?.quote &&
                  Z((e) => ({
                    ...i.order,
                    inputJson: e?.inputJson ?? i.order.inputJson,
                  })),
                R((e) =>
                  "admission_pending" === i.status ? e ?? Date.now() : null
                ),
                pc(i).final ? null : 5e3
              );
            }, []),
            nW = N?.orderId ?? null,
            nK = N?.token ?? null,
            nG = N?.orders.length ?? 0;
          (0, l.useEffect)(() => {
            let e;
            if (!nW || !nK) return;
            let t = !1,
              n = async () => {
                if (t) return;
                let i = await nV({ token: nK }, nW).catch(() => 5e3);
                t ||
                  null == i ||
                  (e = setTimeout(
                    n,
                    "visible" === document.visibilityState ? i : 3 * i
                  ));
              };
            return (
              n(),
              () => {
                (t = !0), clearTimeout(e);
              }
            );
          }, [nW, nK, nV]);
          let nH = N?.orders;
          (0, l.useEffect)(() => {
            if (!nK || !nH || !S) return;
            let e = !0;
            return (
              Promise.all([
                Promise.all(
                  nH.slice(-20).map(async (e) => {
                    let t = await pZ(e, nK).catch(() => null),
                      n = t?.status === 200 ? t.json : null;
                    return {
                      id: e,
                      at: n?.order?.createdAt ?? null,
                      status: n,
                    };
                  })
                ),
                pZ(`paid-by/${S}`, null)
                  .then((e) => (200 === e.status ? e.json.orders : []))
                  .catch(() => []),
              ]).then(([t, n]) => {
                e &&
                  M(
                    (function (e, t) {
                      let n = new Map();
                      for (let e of t)
                        n.set(e.orderId, {
                          id: e.orderId,
                          at: e.createdAt,
                          action: e.action,
                          status: {
                            status: e.status,
                            payment: {
                              status: e.payment.status,
                              paid: "confirmed" === e.payment.status,
                              transactionHash: e.payment.transactionHash,
                              reason: e.payment.reason,
                            },
                            admission: e.result ? { result: e.result } : null,
                          },
                        });
                      for (let t of e)
                        n.set(t.id, {
                          ...t,
                          at: t.at ?? n.get(t.id)?.at ?? null,
                          action:
                            t.action ??
                            t.status?.order?.quote?.action ??
                            n.get(t.id)?.action ??
                            null,
                        });
                      return [...n.values()].sort((e, t) =>
                        (t.at ?? "").localeCompare(e.at ?? "")
                      );
                    })(t, n).slice(0, 30)
                  );
              }),
              () => {
                e = !1;
              }
            );
          }, [nK, nG, T?.status, S]),
            (0, l.useEffect)(() => {
              S && nJ(S).catch(() => void 0);
            }, [S, nJ]);
          let nX = async (e) => {
              if (!B) {
                J(!0), en(null);
                try {
                  await e();
                } catch (t) {
                  let e = t.code;
                  en({
                    text:
                      4001 === e
                        ? "Signing cancelled. Nothing was sent."
                        : t instanceof Error
                        ? t.message.slice(0, 300)
                        : "That did not finish. Nothing new was charged.",
                    bad: 4001 !== e,
                  });
                } finally {
                  J(!1), er(null);
                }
              }
            },
            nY = () =>
              (0, c.f)({ chain: $.f, transport: (0, m.f)((0, fN.J)()) }),
            nQ = (0, l.useCallback)(
              (e) =>
                n0(e).catch((e) => {
                  (i$.current = !1),
                    G(!1),
                    en({
                      text: `Could not read this wallet. ${
                        e instanceof Error ? e.message.split("\n")[0] : ""
                      }`.trim(),
                      bad: !0,
                    });
                }),
              []
            );
          async function n0(e) {
            let t = await pE.getCode({ address: e });
            if (t && "0x" !== t && !/^0xef0100[0-9a-f]{40}$/i.test(t)) {
              j(null),
                (i$.current = !1),
                G(!1),
                en({
                  text: "This account is a contract wallet. Paying here needs an ordinary wallet for now.",
                  bad: !0,
                });
              return;
            }
            let n = pv(localStorage, e);
            if ((z(n), j((0, g.A)(e)), en(null), n.approvalTx))
              if (
                await pE
                  .getTransactionReceipt({ hash: n.approvalTx })
                  .catch(() => null)
              ) {
                let { approvalTx: t, ...i } = n;
                pg(localStorage, e, i), z(i);
              } else
                en({ text: "Your approval is still waiting to be mined." });
          }
          (0, l.useEffect)(() => {
            let e = (e) => {
              let t = e.detail;
              Z(null),
                L(null),
                t ? nQ(t).catch(() => void 0) : (j(null), z(null));
            };
            window.addEventListener(fN._, e);
            let t = (0, fN.m)();
            return t && nQ(t), () => window.removeEventListener(fN._, e);
          }, [nQ]);
          let n1 = () => (0, fN.T)(),
            n4 = async () => {
              if (!S || !N || !nu) return;
              let e = nY();
              (await e.getChainId()) !== $.f.id &&
                (await e.switchChain({ id: $.f.id }));
              let t = await e.sendTransaction({
                account: S,
                chain: $.f,
                to: nu.asset,
                data: (0, f.f)({
                  abi: p.q,
                  functionName: "approve",
                  args: [m0, null != nd && nd > pj ? nd : pj],
                }),
              });
              nR({ ...N, approvalTx: t }),
                en({ text: "Approval sent. Waiting for it to be mined." }),
                await pE.waitForTransactionReceipt({ hash: t });
              let { approvalTx: n, ...i } = { ...N, approvalTx: t };
              nR(i), await nJ(S), en(null);
            },
            n6 = async (e) => {
              var t, i, r;
              if (!S || !N) return null;
              if (n && na) throw Error(na);
              let a = n
                ? null
                : e ??
                  ("oracle.request" === el
                    ? nv && ng
                      ? { sent: el, input: nv.request }
                      : null
                    : nT && nL && nZ
                    ? { sent: nZ.sent, input: nZ.input }
                    : null);
              if (!n && !a)
                throw Error(
                  "Check the request first: the check says what the swarm will do and what would stop it."
                );
              if (nr && no) throw Error(no);
              let o = n
                  ? {
                      sent: fD,
                      input: (function (e, t) {
                        if (
                          !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
                            e
                          )
                        )
                          throw Error("That is not a heartbeat.");
                        let n = fL(t);
                        if (n) throw Error(n);
                        return { scheduleId: e.toLowerCase(), runs: t };
                      })(n.scheduleId, th),
                    }
                  : nr && ("oracle.request" === a.sent || "job.open" === a.sent)
                  ? {
                      sent: fz,
                      input: (function (e) {
                        if (!fU.includes(e.action))
                          throw Error("Only a question or a job can repeat.");
                        let t = fL(e.runs);
                        if (t) throw Error(t);
                        let { submissionKey: n, ...i } = e.input ?? {},
                          r = e.label?.trim();
                        return {
                          ...(r ? { label: r.slice(0, 120) } : {}),
                          action: e.action,
                          input: i,
                          cadence: e.cadence,
                          runs: e.runs,
                          ...("job.open" === e.action && e.continue
                            ? { continue: !0 }
                            : {}),
                        };
                      })({
                        action: a.sent,
                        input: a.input,
                        cadence: (function (e) {
                          if ("daily" === e.mode) {
                            let t = fE.exec(e.time);
                            if (!t)
                              throw Error("A time of day, as HH:MM in UTC.");
                            return {
                              cron: `${Number(t[2])} ${Number(t[1])} * * *`,
                              tz: "UTC",
                            };
                          }
                          if (!Number.isInteger(e.amount) || e.amount < 1)
                            throw Error(
                              "How often: a whole number above zero."
                            );
                          return "days" === e.unit
                            ? { every: `P${e.amount}D` }
                            : {
                                every: `PT${e.amount}${
                                  "hours" === e.unit ? "H" : "M"
                                }`,
                              };
                        })(tf),
                        runs: th,
                        continue: tg,
                        label: ty,
                      }),
                    }
                  : a,
                s =
                  ((t = o.sent),
                  (i = o.input),
                  N.requestKey
                    ? N
                    : {
                        ...N,
                        action: t,
                        input: i,
                        requestKey: crypto.randomUUID(),
                        signer: S.toLowerCase(),
                      });
              nR(s);
              let u = await pZ("quote", s.token, {
                method: "POST",
                body: {
                  requestKey: s.requestKey,
                  action: s.action,
                  input: s.input,
                },
              });
              if (200 !== u.status && 201 !== u.status)
                throw (
                  ((422 === u.status || 400 === u.status) && nR(p$(s)),
                  Error(pT(u.status, u.json)))
                );
              let l = u.json.order,
                d = null;
              try {
                d = l.inputJson ? JSON.parse(l.inputJson) : null;
              } catch {
                d = null;
              }
              if (
                !(function e(t, n, i) {
                  var r, a, o;
                  if (t === fz) {
                    let t, s, u, l;
                    return (
                      (r = e),
                      (t = n ?? {}),
                      (s = i ?? {}),
                      "string" == typeof t.action &&
                        s.action === t.action &&
                        s.runs === t.runs &&
                        ((a = t.cadence),
                        (o = s.cadence),
                        (u = a ?? {}),
                        (l = o ?? {}),
                        "string" == typeof u.every || "string" == typeof l.every
                          ? u.every === l.every
                          : u.cron === l.cron &&
                            (u.tz ?? "UTC") === (l.tz ?? "UTC")) &&
                        !!s.continue == !!t.continue &&
                        r(t.action, t.input, s.input)
                    );
                  }
                  if (t === fD) {
                    let e, t;
                    return (
                      (e = n ?? {}),
                      (t = i ?? {}),
                      "string" == typeof e.scheduleId &&
                        String(t.scheduleId ?? "").toLowerCase() ===
                          e.scheduleId.toLowerCase() &&
                        t.runs === e.runs
                    );
                  }
                  let s = n ?? {},
                    u = i ?? {};
                  if ("oracle.request" === t) {
                    let e = u.request ?? u;
                    return (
                      e.question === s.question &&
                      e.answerType === s.answerType &&
                      e.evidence === s.evidence &&
                      e.panelSize === s.panelSize &&
                      e.quorum === s.quorum
                    );
                  }
                  if ("job.continue" === t)
                    return (
                      u.parentJobId === s.parentJobId &&
                      u.objective === s.objective &&
                      u.skill === s.skill &&
                      u.github === s.github &&
                      (u.ipfs === s.ipfs ||
                        (!0 === s.ipfs && "string" == typeof u.ipfs))
                    );
                  if ("workflow.open" === t)
                    return (u.request ?? {}).request === s.request;
                  let l = u.github === s.github && u.ipfs === s.ipfs,
                    d =
                      u.repoUrl === s.repoUrl && u.baseCommit === s.baseCommit,
                    c =
                      u.chainId === s.chainId &&
                      (u.pairWith ?? "eth") === (s.pairWith ?? "eth");
                  return "launch.open" === t
                    ? u.objective === s.objective &&
                        u.onchain === s.onchain &&
                        l &&
                        d &&
                        c
                    : u.objective === s.objective &&
                        u.skill === s.skill &&
                        l &&
                        d;
                })(s.action, s.input, d)
              )
                throw Error(
                  "The control plane saved different work from what you typed. Nothing was charged."
                );
              Z(l);
              let c =
                ((r = l.id),
                {
                  ...s,
                  orderId: r,
                  orders: s.orders.includes(r) ? s.orders : [...s.orders, r],
                });
              return nR(c), { session: c, order: l };
            },
            n2 = async (e, t) => {
              if (!S || !e.orderId || !D) return;
              if (e.signer && e.signer !== S.toLowerCase())
                throw Error(
                  "This quote was made with another wallet account. Switch back to it to pay."
                );
              let n = nY();
              (await n.getChainId()) !== $.f.id &&
                (await n.switchChain({ id: $.f.id }));
              let i = await pZ(`${e.orderId}/submit`, e.token, {
                method: "POST",
                body: {},
              });
              if (402 !== i.status || !i.json?.accepts) {
                if (200 === i.status || 202 === i.status) return;
                throw Error(pT(i.status, i.json));
              }
              let r = await po(
                  i.json,
                  {
                    quote: t.quote,
                    input: t.inputJson ? JSON.parse(t.inputJson) : e.input,
                    token: e.token,
                    capabilities: D,
                    controlPlane:
                      "https://api.imd.fun,https://api-imd.up.railway.app"
                        .split(",")[0]
                        .trim(),
                    site: window.location.origin,
                  },
                  {
                    address: S,
                    signTypedData: (e) => n.signTypedData({ ...e, account: S }),
                  },
                  void 0,
                  (e) => en({ text: e })
                ),
                a = { ...e, approval: r, submitted: !0 };
              nR(a), (x.current = !0);
              try {
                localStorage.removeItem(pz);
              } catch {}
              await n3(a);
            },
            n9 = () =>
              nX(async () => {
                N && E && (await n2(N, E));
              }),
            n3 = async (e) => {
              var t;
              if (!e.orderId || !e.approval) return;
              let n = await pZ(`${e.orderId}/submit`, e.token, {
                method: "POST",
                body: { quoteSignature: e.approval.quoteSignature },
                headers: {
                  "payment-signature":
                    ((t = JSON.stringify(e.approval.payment)),
                    "u" > typeof globalThis &&
                    "function" == typeof globalThis.btoa
                      ? globalThis.btoa(
                          Array.from(new TextEncoder().encode(t), (e) =>
                            String.fromCharCode(e)
                          ).join("")
                        )
                      : mT.Buffer.from(t, "utf8").toString("base64")),
                },
              });
              if (200 !== n.status && 202 !== n.status)
                throw Error(pT(n.status, n.json));
              en(null), await nV(e, e.orderId);
            },
            n5 = () =>
              nX(async () => {
                N && (await n3(N));
              }),
            n8 = () =>
              iX(() => {
                try {
                  localStorage.removeItem(pz);
                } catch {}
                W(!1),
                  ee(!1),
                  N &&
                    (nR(p$(N)),
                    Z(null),
                    L(null),
                    en(null),
                    e4(null),
                    e0({}),
                    te(null),
                    e8({}),
                    (n || I) && _.refresh());
              }),
            n7 = (0, l.useRef)(new Map()),
            ie = (0, l.useRef)(0),
            it = (0, l.useRef)(null),
            ii = (0, l.useRef)(null),
            ir = (0, l.useRef)(0),
            [ia, io] = (0, l.useState)(!1),
            is = (0, l.useRef)(!1),
            [iu, il] = (0, l.useState)(!1),
            id = async (e, t, n = !1) => {
              let i = n7.current.get(e);
              if (i) return { result: i };
              if (ii.current === e) return null;
              if (n) {
                if (ia || ir.current >= 6) return io(!0), null;
                ir.current++;
              }
              it.current?.abort();
              let r = new AbortController();
              it.current = r;
              let a = ++ie.current;
              (ii.current = e), e2(!0), eo(null);
              try {
                let n = await pZ("check", null, {
                  method: "POST",
                  body: t,
                  signal: r.signal,
                });
                if ((429 === n.status && io(!0), 200 !== n.status))
                  throw Error(pT(n.status, n.json));
                return (
                  n7.current.set(e, n.json),
                  a === ie.current ? { result: n.json } : null
                );
              } catch (e) {
                return (
                  r.signal.aborted ||
                    a !== ie.current ||
                    eo(
                      e instanceof TypeError
                        ? "Could not reach the check. Try it again in a moment."
                        : e instanceof Error
                        ? e.message.slice(0, 300)
                        : "Could not check this request."
                    ),
                  null
                );
              } finally {
                ii.current === e && (ii.current = null),
                  a === ie.current && e2(!1);
              }
            },
            ic = async (e = eQ, t = !1) => {
              let n;
              try {
                n = fV({ question: tE, panelSize: eX, min: nc, max: nm, ...e });
              } catch {
                return null;
              }
              let i = JSON.stringify(n),
                r = await id(i, { action: "oracle.request", input: n }, t);
              return r && e4({ key: i, result: r.result }), r?.result ?? null;
            },
            im = (e) => {
              let t = { ...eQ, ...e };
              e0(t), ic(t);
            },
            ip = async () => {
              let e = ta.trim();
              if (!e)
                return void en({
                  text: "Paste the repository's GitHub address.",
                  bad: !0,
                });
              td(!0), en(null);
              try {
                let t = await pZ("import", null, {
                  method: "POST",
                  body: { url: e, kind: nb },
                });
                if (200 !== t.status) throw Error(pT(t.status, t.json));
                let n = t.json;
                tu({ key: `${nb}:${e}`, answer: n });
                let i = pe(n);
                i.length &&
                  en({ text: i.map((e) => e.detail).join(" "), bad: !0 });
              } catch (e) {
                en({
                  text:
                    e instanceof Error
                      ? e.message.slice(0, 300)
                      : "Could not read that repository.",
                  bad: !0,
                });
              } finally {
                td(!1);
              }
            };
          (0, l.useEffect)(() => {
            if (!ny || tT) return;
            let e = ta.trim();
            if (
              !/^https:\/\/github\.com\/[^/\s]+\/[^/\s]+/.test(e) ||
              ts?.key === `${nb}:${e}`
            )
              return;
            let t = setTimeout(() => {
              ip();
            }, 600);
            return () => clearTimeout(t);
          }, [ta, ny, nb]);
          let ih = async (e = !1) => {
              if (!nz || nE) return null;
              let t = JSON.stringify(nz),
                { sent: n, input: i } = nz,
                r = await id(t, { action: n, input: i }, e);
              return r
                ? (te({
                    key: t,
                    kindKey: nI,
                    sent: n,
                    input: i,
                    result: r.result,
                  }),
                  { sent: n, input: i, result: r.result })
                : null;
            },
            iv =
              "oracle.request" !== el && nz && !nE ? JSON.stringify(nz) : null;
          (0, l.useEffect)(() => {
            if (
              n ||
              tT ||
              !iv ||
              (e7?.key === iv && e7.kindKey === nI) ||
              (ia && !n7.current.has(iv))
            )
              return;
            let e = setTimeout(() => {
              ih(!0);
            }, 2500 * !n7.current.has(iv));
            return () => clearTimeout(e);
          }, [iv, nI, n, tT, ia]);
          let ig =
            "oracle.request" === el && nh && !nE ? JSON.stringify(nh) : null;
          (0, l.useEffect)(() => {
            eo(null), (is.current = !1), il(!1);
          }, [iv, ig]),
            (0, l.useEffect)(() => {
              if (
                n ||
                tT ||
                !ig ||
                e1?.key === ig ||
                (ia && !n7.current.has(ig))
              )
                return;
              let e = setTimeout(() => {
                ic(eQ, !0);
              }, 2500 * !n7.current.has(ig));
              return () => clearTimeout(e);
            }, [ig, n, tT, ia]);
          let i$ = (0, l.useRef)(!1),
            iy = () =>
              nX(async () => {
                let e = null;
                if (
                  !n &&
                  !(e =
                    "oracle.request" === el
                      ? nv && ng
                        ? { sent: el, input: nv.request }
                        : null
                      : nT && nL && nZ
                      ? { sent: nZ.sent, input: nZ.input }
                      : null)
                )
                  return;
                if (!S) {
                  (i$.current = !0), G(!0);
                  let e = (0, fN.m)();
                  e ? nQ(e) : n1();
                  return;
                }
                er("Reading wallet");
                let t =
                  null != U && null != P
                    ? { balance: U, allowance: P }
                    : await nJ(S);
                if (null != nd && t && t.balance < nd)
                  throw Error(
                    "Not enough IMD in this wallet for this. Nothing was charged."
                  );
                null != nd &&
                  t &&
                  t.allowance < nd &&
                  (er("Approve in wallet"), await n4()),
                  er("Sign in wallet");
                let i = await n6(e);
                i && (await n2(i.session, i.order));
              });
          (0, l.useEffect)(() => {
            S && N && i$.current && ((i$.current = !1), G(!1), iy());
          }, [S, N]);
          let [ib, i_] = (0, l.useState)(null),
            ix = (0, l.useCallback)(async (e, t) => {
              let [[n], i] = await Promise.all([
                pE.readContract({
                  address: ps.A[1].quoter,
                  abi: pu.p,
                  functionName: "quoteExactOutputSingle",
                  args: [
                    {
                      poolKey: ps.e,
                      zeroForOne: !0,
                      exactAmount: t,
                      hookData: "0x",
                    },
                  ],
                }),
                pE.getBalance({ address: e }),
              ]);
              return { need: t, ethIn: n + n / 50n, ethBalance: i };
            }, []),
            iw = 10n ** BigInt(Math.max(0, (nu?.decimals ?? 18) - 2)),
            ik =
              null != U && null != nd && U < nd
                ? ((nd - U + iw - 1n) / iw) * iw
                : null,
            iI = nu?.asset.toLowerCase() === ps.e.currency1;
          (0, l.useEffect)(() => {
            if (!S || null == ik || !iI) return void i_(null);
            let e = !0;
            return (
              ix(S, ik)
                .then((t) => {
                  e && i_(t);
                })
                .catch(() => {
                  e && i_(null);
                }),
              () => {
                e = !1;
              }
            );
          }, [S, ik, iI, ix]);
          let iS = {
              report: "research-report",
              website: "build-website",
              indexer: "build-ponder-indexer",
              image: "create-image",
              audio: "create-audio",
              video: "create-video",
            },
            ij = T ? pc(T, q) : null,
            iN = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            T &&
              N?.orderId &&
              iN.current !== N.orderId &&
              (!T.order || T.order.id === N.orderId) &&
              ((iN.current = N.orderId),
              !x.current && pc(T).final && (nR(p$(N)), Z(null), L(null)));
          }, [T]);
          let iz =
              eL.trim() && !fX(eL) ? (0, fx.l)(eL.trim().toLowerCase()) : null,
            iD = E ? E.quote.expiresAt - es : null,
            iA = N
              ? N.submitted && N.approval && N.orderId
                ? "resend"
                : N.orderId
                ? "sign"
                : N.requestKey
                ? "quote"
                : "idle"
              : "idle",
            iU = null != nd && null != P && P < nd,
            iO = null != U && null != nd && U < nd,
            iP =
              n$ && !tF
                ? (0, o.jsx)("button", {
                    type: "button",
                    className: "request-switch request-start",
                    disabled: tT,
                    onClick: () => {
                      let e = "github" === tt ? "new" : "github";
                      tn(e), rn("github" === e ? "repo" : "text");
                    },
                    children:
                      "github" === tt
                        ? "launch.open" === el
                          ? "Describe new contracts instead"
                          : "Describe a new site instead"
                        : (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(fk.f, { size: 12 }),
                              (0, o.jsx)("span", {
                                children: "Start from GitHub instead",
                              }),
                            ],
                          }),
                  })
                : null,
            iC = ny
              ? (0, o.jsxs)("div", {
                  className: "request-field",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "request-field-head",
                      children: [
                        (0, o.jsx)("label", {
                          className: "request-guide",
                          htmlFor: "request-repo",
                          children: "Your repository",
                        }),
                        iP,
                      ],
                    }),
                    (0, o.jsx)("input", {
                      id: "request-repo",
                      "data-field": "repo",
                      ...pO,
                      value: ta,
                      disabled: tT,
                      spellCheck: !1,
                      placeholder:
                        "launch.open" === el || tF
                          ? "https://github.com/you/contracts"
                          : "https://github.com/you/site",
                      onChange: (e) => to(e.target.value),
                      onKeyDown: (e) => {
                        "Enter" === e.key && (e.preventDefault(), ip());
                      },
                    }),
                    (0, o.jsx)("p", {
                      className: "request-note",
                      children: tl
                        ? "Reading the repository."
                        : nx
                        ? ((a =
                            nx.sizeKb >= 1024
                              ? `${(nx.sizeKb / 1024).toFixed(1)} MB`
                              : `${nx.sizeKb} KB`),
                          (y = nx.site
                            ? nx.site.build
                              ? "built with its own build script"
                              : `serves ${
                                  "." === nx.site.exportDir
                                    ? "the root"
                                    : `${nx.site.exportDir}/`
                                } as committed`
                            : "contracts" === nx.kind
                            ? "a Foundry project"
                            : ""),
                          [
                            `${nx.owner}/${nx.repo} at ${nx.baseCommit.slice(
                              0,
                              7
                            )} (${nx.ref})`,
                            a,
                            y,
                          ]
                            .filter(Boolean)
                            .join(" · "))
                        : `A public ${
                            tF
                              ? "repository with Solidity in it"
                              : "launch.open" === el
                              ? "Foundry repository"
                              : "repository"
                          }. For a branch, paste its /tree/ address.`,
                    }),
                  ],
                })
              : null,
            iE = (0, l.useRef)(null);
          nl && null != nd && (iE.current = nd);
          let iZ = nd ?? (nl ? iE.current : null),
            iT =
              null != iZ
                ? `${((e) => {
                    let [t = "0", n] = e.split(".");
                    return `${(0, fI.b)(t)}${n ? `.${n}` : ""}`;
                  })((0, v.f)(iZ, nu?.decimals ?? 18))} IMD`
                : nu
                ? `${(0, v.f)(BigInt(nu.amount), nu.decimals ?? 18)} IMD`
                : "0.5 IMD",
            iL = nu
              ? `${(0, v.f)(BigInt(nu.amount), nu.decimals ?? 18)} IMD`
              : null,
            iq = [
              ["once", "Once", null],
              [
                "hourly",
                "Every hour",
                { mode: "every", amount: 1, unit: "hours" },
              ],
              ["daily", "Every day", { mode: "daily", time: "09:00" }],
              [
                "weekly",
                "Every week",
                { mode: "every", amount: 7, unit: "days" },
              ],
            ],
            iR = tc
              ? "daily" === tf.mode
                ? "daily"
                : "hours" === tf.unit && 1 === tf.amount
                ? "hourly"
                : "days" === tf.unit && 7 === tf.amount
                ? "weekly"
                : ""
              : "once",
            iF = (0, o.jsxs)("svg", {
              viewBox: "0 0 120 120",
              width: 20,
              height: 20,
              "aria-hidden": !0,
              children: [
                (0, o.jsx)("path", {
                  className: "tile-pulse-base",
                  d: "M10 64H40l6-14 8 34 8-48 8 40 6-12H110",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 1.2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  vectorEffect: "non-scaling-stroke",
                }),
                (0, o.jsx)("path", {
                  className: "tile-pulse-run",
                  pathLength: 1,
                  d: "M10 64H40l6-14 8 34 8-48 8 40 6-12H110",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 9,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
            iM =
              "launch.open" === el
                ? ey
                  ? "launch.token"
                  : `launch.${eh}`
                : "job.open" === el
                ? ef
                : "oracle.request" === el
                ? tc && tM
                  ? "heartbeat"
                  : el
                : "workflow.open" === el
                ? el
                : "",
            iB = {
              "launch.token":
                "Your own token, tested and launched in its own trading pool.",
              "launch.univ4_hook":
                "A new coin whose pool runs your own Uniswap v4 hook, your rules on every trade.",
              "launch.evm_project":
                "Smart contracts written, tested and audited by the swarm, then deployed onchain.",
              "workflow.open":
                "Contracts and a website, launched together, with a token if you want one.",
              "oracle.request":
                "A panel of agents answers one question and signs it, so a contract can check it.",
              heartbeat:
                "The oracle answers the same question again and again, on a schedule you set.",
              "build-website":
                "A website built from your brief and hosted on IPFS.",
              "build-ponder-indexer":
                "Your contracts' events as tables and GraphQL, in a repository you deploy on Railway.",
              [pI]: "Four agents audit your contracts as they are, and a judge ranks what they find.",
              "research-report":
                "A researched answer to your question, written up with its sources.",
              "create-image": "One image, generated from your description.",
              "create-audio":
                "Speech, narration or music, generated from your description.",
              "create-video":
                "One short video, generated from your description.",
            },
            iJ = {
              "launch.token": "Coin",
              "launch.univ4_hook": "v4 hook",
              "launch.evm_project": "Contracts",
              "workflow.open": "Company",
              "oracle.request": "Oracle",
              heartbeat: "Heartbeat",
              "build-website": "Website",
              "build-ponder-indexer": "Indexer",
              [pI]: "Audit",
              "research-report": "Report",
              "create-image": "Image",
              "create-audio": "Audio",
              "create-video": "Video",
            },
            iV = [
              "launch.token",
              "launch.univ4_hook",
              "launch.evm_project",
              "workflow.open",
              "oracle.request",
              "heartbeat",
              "build-website",
              pI,
              "research-report",
              "build-ponder-indexer",
              "create-image",
              "create-audio",
              "create-video",
            ]
              .filter((t) =>
                t.startsWith("launch.")
                  ? tR("launch.open")
                  : "workflow.open" === t
                  ? tR("workflow.open")
                  : "oracle.request" === t
                  ? tR("oracle.request")
                  : "heartbeat" === t
                  ? tR("oracle.request") && tM
                  : tR("job.open") && (t === pI || e.some((e) => e.id === t))
              )
              .map((e) => [e, iJ[e], iB[e]]),
            iW = {
              "launch.token": "token",
              "launch.evm_project": "contracts",
              "launch.univ4_hook": "hook",
              "workflow.open": "company",
              "oracle.request": "oracle",
              heartbeat: "heartbeat",
            },
            iK = iV.find(([e]) => e === iM),
            iG = (e, t, n, i) => {
              let r = document;
              if (
                !r.startViewTransition ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                (0, d.flushSync)(e), i?.();
                return;
              }
              let a = [],
                o = (e) => {
                  for (let [t, n] of [
                    [".part-figure", "chosen-figure"],
                    [".part-name", "chosen-name"],
                  ]) {
                    let i = e?.querySelector(t);
                    i && ((i.style.viewTransitionName = n), a.push(i));
                  }
                };
              o(t), document.documentElement.classList.add("is-morphing");
              let s = r.startViewTransition(() => {
                  (0, d.flushSync)(e), n && o(document.querySelector(n)), i?.();
                }),
                u = (e) => {
                  e.target === document.documentElement &&
                    (s.skipTransition(),
                    window.addEventListener(
                      "pointerup",
                      (e) => {
                        let t = document
                          .elementFromPoint(e.clientX, e.clientY)
                          ?.closest(
                            "button, a, input, textarea, select, [tabindex]"
                          );
                        t &&
                          (t.matches("input, textarea, select")
                            ? t.focus()
                            : t.click());
                      },
                      { once: !0, capture: !0 }
                    ));
                };
              document.addEventListener("pointerdown", u, !0),
                s.finished.finally(() => {
                  for (let e of (document.removeEventListener(
                    "pointerdown",
                    u,
                    !0
                  ),
                  a))
                    e.style.viewTransitionName = "";
                  document.documentElement.classList.remove("is-morphing");
                });
            },
            iH = (0, l.useRef)(0),
            iX = (e, t, n, i) => {
              let r = document;
              if (
                !r.startViewTransition ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                (0, d.flushSync)(e), i?.();
                return;
              }
              let a = ++iH.current,
                o = [],
                s = (e, t, n) => {
                  (e instanceof HTMLElement || e instanceof SVGElement) &&
                    ((e.style.viewTransitionName = t),
                    n && e.style.setProperty("view-transition-class", n),
                    o.push(e));
                },
                u = () => {
                  for (let e of o.splice(0))
                    (e.style.viewTransitionName = ""),
                      e.style.removeProperty("view-transition-class");
                },
                l = () => {
                  document
                    .querySelectorAll(".request-form .term")
                    .forEach((e) => s(e, `term-${e.dataset.term}`, "term-row")),
                    document
                      .querySelectorAll(".request [data-vt]")
                      .forEach((e) => s(e, `vt-${e.dataset.vt}`));
                };
              l(), s(t, "fold-pick");
              let c = document.querySelector(".request-form");
              c &&
                ((c.style.transition = ""),
                (c.style.minHeight = `${c.offsetHeight}px`)),
                document.documentElement.classList.add("is-folding");
              let m = r.startViewTransition(() => {
                u(), (0, d.flushSync)(e), l(), s(n?.(), "fold-pick"), i?.();
              });
              m.ready.catch(() => void 0),
                m.updateCallbackDone.catch(() => void 0),
                m.finished.finally(() => {
                  iH.current !== a ||
                    (u(),
                    document.documentElement.classList.remove("is-folding"),
                    c &&
                      ((c.style.transition =
                        "min-height 420ms cubic-bezier(0.4, 0, 0.2, 1)"),
                      (c.style.minHeight = "0px"),
                      setTimeout(() => {
                        iH.current === a &&
                          ((c.style.minHeight = ""), (c.style.transition = ""));
                      }, 460)));
                });
            },
            iY = (e, t) => {
              let n = e
                ? document.querySelector(`.term[data-term="${e}"]`)
                : null;
              return (
                n?.querySelector(
                  "value" === t
                    ? ".term-value"
                    : '.term-edit [aria-checked="true"], .term-edit input'
                ) ?? null
              );
            },
            iQ = (e) =>
              iX(
                () => eP(e),
                iY(e, "value"),
                () => iY(e, "pick")
              );
          (0, l.useEffect)(() => {
            if (
              "menu" !== tJ ||
              E ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
              !window.matchMedia("(hover: hover)").matches
            )
              return;
            let e = 0,
              t = 0,
              n = 0,
              i = () => {
                e = 0;
                let i = document.querySelector(
                  '.part-menu [data-id="oracle.request"] .part-figure'
                );
                if (!i) return;
                let r = i.getBoundingClientRect(),
                  a = t - (r.left + r.width / 2),
                  o = n - (r.top + 0.52 * r.height),
                  s = Math.hypot(a, o) || 1,
                  u = Math.min(1, s / 220);
                i.style.setProperty(
                  "--px",
                  `${((a / s) * 12 * u).toFixed(2)}px`
                ),
                  i.style.setProperty(
                    "--py",
                    `${((o / s) * 6 * u).toFixed(2)}px`
                  );
              },
              r = (r) => {
                (t = r.clientX),
                  (n = r.clientY),
                  e || (e = requestAnimationFrame(i));
              };
            return (
              window.addEventListener("pointermove", r, { passive: !0 }),
              () => {
                window.removeEventListener("pointermove", r),
                  cancelAnimationFrame(e);
              }
            );
          }, [tJ, E]);
          let i0 = () => {
              iG(
                () => {
                  k(null), tV("menu");
                },
                null,
                w
                  ? `.mine-work [data-job="${w.jobId}"]`
                  : `.part-menu [data-id="${iM}"]`
              ),
                tQ(window.location.pathname);
            },
            [i1, i4] = (0, l.useState)({}),
            i6 = (e) => {
              let t = e.status?.admission?.result,
                n = t?.kind === "workflow" ? t.workflowId : t?.jobId;
              return n && /^[0-9a-f-]{36}$/i.test(n) ? n : null;
            },
            i2 = [
              ...new Set(F.map(i6).filter((e) => null != e && !(e in i1))),
            ].join(",");
          (0, l.useEffect)(() => {
            if (!i2) return;
            let e = !0;
            return (
              fetch(`/api/projects?ids=${i2}`)
                .then((e) => (e.ok ? e.json() : {}))
                .then((t) => {
                  e && i4((e) => ({ ...e, ...t }));
                })
                .catch(() => void 0),
              () => {
                e = !1;
              }
            );
          }, [i2]);
          let i9 = F.filter(
              (e) => null != i6(e) || (!!e.status && pc(e.status).charged)
            ),
            i3 = i9.filter((e, t) => {
              let n = i1[i6(e) ?? ""]?.project;
              return (
                !n || i9.findIndex((e) => i1[i6(e) ?? ""]?.project === n) === t
              );
            }),
            i5 = (e) => {
              k({ ...e.continuation, title: e.title, figure: e.figure }),
                ed("job.continue"),
                ep(e.continuation.skill),
                eb(!1),
                tm(!1),
                eP(null),
                eE(null),
                tV("form");
            },
            i8 = async (e) => {
              for (let t of [0, 1500])
                try {
                  t && (await new Promise((e) => setTimeout(e, t)));
                  let n = await fetch(`/api/projects?ids=${e}`).then((e) =>
                      e.ok ? e.json() : {}
                    ),
                    i = n[e];
                  if (i?.continuation) {
                    i4((e) => ({ ...e, ...n })), i5(i);
                    return;
                  }
                  if (i) break;
                } catch {}
              tQ(window.location.pathname, !0), k(null), tV("menu");
            },
            i7 = (e) => {
              e.focus({ preventScroll: !0 }),
                e.scrollIntoView({ block: "center", behavior: "smooth" }),
                e.classList.remove("is-asked"),
                e.offsetWidth,
                e.classList.add("is-asked");
              let t = () => e.classList.remove("is-asked");
              e.addEventListener("animationend", t, { once: !0 }),
                setTimeout(t, 1e3);
            },
            re = {
              "coin-supply": "supply",
              "coin-pool": "pool",
              "coin-cap": "pool",
              "coin-rest": "split",
              pool: "pool",
              owner: "owner",
              runs: "runs",
              panel: "panel",
            },
            rt = (0, l.useRef)(null),
            rn = (e) => {
              let t = re[e];
              if (t && eO !== t) {
                (rt.current = e), iQ(t);
                return;
              }
              let n = () =>
                document.querySelector(`.request-form [data-field="${e}"]`);
              !n() && eO
                ? iX(
                    () => eP(null),
                    null,
                    null,
                    () =>
                      requestAnimationFrame(() => {
                        let e = n();
                        e && i7(e);
                      })
                  )
                : requestAnimationFrame(() => {
                    let e = n();
                    e && i7(e);
                  });
            },
            ri = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            let e = ri.current;
            if (((ri.current = eO), eO)) {
              let e = rt.current;
              (rt.current = null),
                requestAnimationFrame(() => {
                  let t = document.querySelector(`.term[data-term="${eO}"]`),
                    n = e ? t?.querySelector(`[data-field="${e}"]`) : null;
                  n
                    ? i7(n)
                    : (
                        t?.querySelector(".term-edit input") ??
                        t?.querySelector(
                          '.term-edit [aria-checked="true"]:not(:disabled)'
                        ) ??
                        t?.querySelector(".term-edit button:not(:disabled)")
                      )?.focus({ preventScroll: !0 });
                });
            } else
              e &&
                (!document.activeElement ||
                  document.activeElement === document.body) &&
                document
                  .querySelector(`.term[data-term="${e}"] .term-change`)
                  ?.focus({ preventScroll: !0 });
          }, [eO]);
          let rr = [],
            ra = () => {
              iX(
                () => eP(null),
                iY(eO, "pick"),
                () => iY(eO, "value")
              );
            },
            ro = "launch.open" === el && !ey;
          if ("job.continue" === el && I) {
            if (tk.length + tI.length > 1) {
              let e = (e) => [
                e,
                p_[e] ?? fS.WORK.find((t) => t.id === e)?.name ?? e,
              ];
              tk.length &&
                rr.push({
                  id: "change",
                  label: "Change",
                  value: (0, o.jsx)(fS.Inline, {
                    label: "change",
                    value: ef,
                    disabled: tT,
                    options: tk.map(e),
                    onChange: ep,
                  }),
                }),
                tI.length &&
                  rr.push({
                    id: "add",
                    label: "Add",
                    value: (0, o.jsx)(fS.Inline, {
                      label: "add",
                      value: ef,
                      disabled: tT,
                      options: tI.map(e),
                      onChange: ep,
                    }),
                  });
            }
            rr.push({
              id: "payer",
              label: "Paid by",
              value: `${(0, fx.l)(
                I.owner.toLowerCase()
              )}, the only wallet that can pay for this`,
            });
          }
          let rs =
            "workflow.open" === el || ("launch.open" === el && (eJ || ny));
          ro &&
            !ny &&
            e.some((e) => "build-contract-project" === e.id) &&
            tR("job.open") &&
            rr.push({
              id: "deploy",
              label: "Launch",
              value: (0, o.jsx)(fS.Inline, {
                label: "launch",
                value: eg ? "onchain" : "code",
                disabled: tT,
                options: [
                  ["onchain", "Onchain"],
                  ["code", "Code only"],
                ],
                onChange: (e) =>
                  iX(() => e$("onchain" === e), null, null, void 0),
              }),
            });
          let ru = "workflow.open" === el,
            rl =
              ((ro && "evm_project" === eh && (eg || ny)) || ru) &&
              t4.length > 0;
          rl &&
            rr.push({
              id: "token",
              label: "Token",
              value: (0, o.jsx)(fS.Inline, {
                label: "token",
                value: t6 ? "none" : "token",
                disabled: tT,
                options: [
                  ["none", "No token"],
                  ["token", "With a token"],
                ],
                onChange: (e) => {
                  let t = "token" === e;
                  iX(
                    () => {
                      ru ? ek(t) : ex(t),
                        t || t4.includes(eV) || eW(t4[0]),
                        t &&
                          !t1?.chains.some(
                            (e) =>
                              e.chainId === eV &&
                              e.kinds.some((e) => "evm_contracts" !== e)
                          ) &&
                          eW(t9);
                    },
                    null,
                    null,
                    () => {
                      t && rn("token-name");
                    }
                  );
                },
              }),
            });
          let rd = ro && "univ4_hook" === eh && eg && !ny && nw;
          if (
            (rd &&
              rr.push({
                id: "hook-token",
                label: "Token",
                value: (0, o.jsx)(fS.Inline, {
                  label: "token",
                  value: nk ? "own" : "standard",
                  disabled: tT,
                  options: [
                    ["standard", "Standard"],
                    ["own", "Your own"],
                  ],
                  onChange: (e) =>
                    iX(
                      () => eS("own" === e ? "own" : "standard"),
                      null,
                      null,
                      () => {
                        "own" === e && rn("token-name");
                      }
                    ),
                }),
              }),
            nS &&
              rr.push({
                id: "name",
                label: rl || rd ? "Name" : "Token",
                value: (0, o.jsxs)("span", {
                  className: "term-fields",
                  children: [
                    (0, o.jsx)("input", {
                      "data-field": "token-name",
                      ...pO,
                      value: ez,
                      maxLength: 40,
                      disabled: tT,
                      placeholder: "Name, e.g. Kite",
                      "aria-label": "token name",
                      onChange: (e) => {
                        eD(e.target.value),
                          eT.current || eU(f3(e.target.value));
                      },
                    }),
                    (0, o.jsx)("input", {
                      "data-field": "token-symbol",
                      ...pO,
                      className: "is-symbol",
                      value: eA,
                      maxLength: 11,
                      disabled: tT,
                      placeholder: "Symbol",
                      "aria-label": "token symbol",
                      onChange: (e) => {
                        (eT.current = "" !== e.target.value),
                          eU(
                            e.target.value
                              .toUpperCase()
                              .replace(/[^A-Z0-9]/g, "")
                          );
                      },
                    }),
                  ],
                }),
              }),
            nk &&
              rr.push({
                id: "hook-supply",
                label: "Supply",
                value: `${pC(ej || "0")} tokens`,
                problem: /^[1-9][0-9]{0,17}$/.test(ej)
                  ? null
                  : "A supply in whole tokens, from 1 to 18 digits.",
                ...(ej !== f6.supply ? { reset: () => eN(f6.supply) } : {}),
                edit: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(fI.$, {
                      "data-field": "hook-supply",
                      ...pO,
                      digits: ej,
                      maxLength: 24,
                      "aria-label": "supply",
                      placeholder: "1,000,000,000",
                      onDigits: (e) => eN(e.slice(0, 18)),
                    }),
                    (0, o.jsx)("span", { children: "tokens" }),
                  ],
                }),
              }),
            rs &&
              (rr.push({
                id: "chain",
                label: "Chain",
                value: (0, o.jsx)(fS.Inline, {
                  label: "chain",
                  value: String(eV),
                  disabled: tT,
                  options: t2.map((e) => [
                    String(e.id),
                    (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(fx.i, { id: e.id }),
                        e.open ? e.name : `${e.name} \xb7 soon`,
                      ],
                    }),
                    !e.open,
                  ]),
                  onChange: (e) =>
                    iX(
                      () => {
                        (eK.current = !0), eW(Number(e));
                      },
                      null,
                      null,
                      void 0
                    ),
                }),
              }),
              t5.length > 1 &&
                !t6 &&
                rr.push({
                  id: "pair",
                  label: "Paired",
                  value: (0, o.jsx)(fS.Inline, {
                    label: "pairs with",
                    value: t8?.pairWith ?? "eth",
                    disabled: tT,
                    options: t5.map((e) => [e.pairWith, e.symbol]),
                    onChange: eH,
                  }),
                })),
            "launch.open" === el && ey)
          ) {
            let e = 90 - e9.poolPercent,
              t = e9.remainderTo.trim()
                ? (0, fx.l)(e9.remainderTo.trim().toLowerCase())
                : "your wallet";
            rr.push({
              id: "supply",
              label: "Supply",
              value: `${pC(e9.supply || "0")} tokens`,
              problem: nU("supply"),
              ...(e9.supply !== f6.supply
                ? { reset: () => e3({ ...e9, supply: f6.supply }) }
                : {}),
              edit: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(fI.$, {
                    "data-field": "coin-supply",
                    ...pO,
                    digits: e9.supply,
                    maxLength: 31,
                    "aria-label": "supply",
                    placeholder: "1,000,000,000",
                    onDigits: (e) => e3({ ...e9, supply: e.slice(0, 24) }),
                  }),
                  (0, o.jsx)("span", { children: "tokens" }),
                ],
              }),
            });
            let [n = "", i] = e9.cap.split("."),
              r = `${(0, fI.b)(n)}${void 0 !== i ? `.${i}` : ""}`,
              a = nB(Number(e9.cap), nt.symbol);
            rr.push({
              id: "pool",
              label: "Pool",
              value: `${e9.poolPercent}% opens the pool at a ${r} ${nt.symbol}${
                a ? ` (${a})` : ""
              } market cap`,
              problem: nU("pool", "cap"),
              ...(88 !== e9.poolPercent || e9.cap !== f9(nt)
                ? { reset: () => e3({ ...e9, poolPercent: 88, cap: f9(nt) }) }
                : {}),
              edit: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("input", {
                    "data-field": "coin-pool",
                    ...pO,
                    className: "is-short",
                    type: "number",
                    inputMode: "numeric",
                    min: 10,
                    max: 90,
                    step: 1,
                    "aria-label": "percent of the supply in the pool",
                    value: Number.isFinite(e9.poolPercent)
                      ? e9.poolPercent
                      : "",
                    onChange: (e) =>
                      e3({
                        ...e9,
                        poolPercent:
                          "" === e.target.value
                            ? 0 / 0
                            : Number(e.target.value),
                      }),
                  }),
                  (0, o.jsx)("span", { children: "% opens the pool at" }),
                  (0, o.jsx)("input", {
                    "data-field": "coin-cap",
                    ...pO,
                    className: "is-mid",
                    value: e9.cap,
                    inputMode: "decimal",
                    maxLength: 19,
                    "aria-label": "opening market cap",
                    placeholder: f9(nt),
                    onChange: (e) =>
                      e3({
                        ...e9,
                        cap: e.target.value.replace(/[^0-9.]/g, ""),
                      }),
                  }),
                  (0, o.jsx)("span", {
                    children: (0, o.jsx)(fI.o, {
                      text: `${nt.symbol}${a ? ` (${a})` : ""} market cap`,
                    }),
                  }),
                ],
              }),
            }),
              rr.push({
                id: "split",
                label: "Split",
                value: `10% to the swarm${e > 0 ? `, ${e}% to ${t}` : ""}`,
                problem: nU("rest"),
                ...(e9.remainderTo.trim()
                  ? { reset: () => e3({ ...e9, remainderTo: "" }) }
                  : {}),
                ...(e > 0
                  ? {
                      edit: (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsxs)("span", {
                            children: [10, "% to the swarm, ", e, "% to"],
                          }),
                          (0, o.jsx)("input", {
                            "data-field": "coin-rest",
                            ...pO,
                            className: "is-address",
                            value: e9.remainderTo,
                            maxLength: 42,
                            spellCheck: !1,
                            "aria-label": "wallet the rest goes to",
                            placeholder: S ?? "your wallet, once connected",
                            onChange: (e) =>
                              e3({ ...e9, remainderTo: e.target.value.trim() }),
                          }),
                        ],
                      }),
                    }
                  : {}),
              });
          }
          if (nS && !ny && rs) {
            let e = 90 - eR,
              t = nj ? pL(eM) : "you";
            rr.push({
              id: "pool",
              label: "Pool",
              value: `${eR}% opens the pool${
                e > 0 ? `, ${e}% goes to ${t}` : ""
              }`,
              problem: fK(eR),
              ...(88 !== eR ? { reset: () => eF(88) } : {}),
              edit: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("input", {
                    "data-field": "pool",
                    ...pO,
                    type: "number",
                    inputMode: "numeric",
                    min: 10,
                    max: 90,
                    step: 1,
                    "aria-label": "percent of the supply in the pool",
                    value: Number.isFinite(eR) ? eR : "",
                    onChange: (e) =>
                      eF(
                        "" === e.target.value ? 0 / 0 : Number(e.target.value)
                      ),
                  }),
                  (0, o.jsx)("span", {
                    children: (0, o.jsx)(fI.o, {
                      text: `% opens the pool${
                        Number.isFinite(eR) && e > 0
                          ? `, ${e}% goes to ${t}`
                          : ""
                      } \xb7 10 to 90`,
                    }),
                  }),
                ],
              }),
            }),
              nj &&
                e > 0 &&
                rr.push({
                  id: "rest",
                  label: "Rest",
                  value: `${e}% to ${pL(eM)}`,
                  problem: fH(eM),
                  ...(eM.trim() ? { reset: () => eB("") } : {}),
                  edit: (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsxs)("span", { children: [e, "% to"] }),
                      (0, o.jsx)("input", {
                        "data-field": "rest",
                        ...pO,
                        className: "is-address",
                        value: eM,
                        maxLength: 42,
                        spellCheck: !1,
                        "aria-label":
                          "where the rest goes: a wallet, or one of your contracts by name",
                        placeholder:
                          "you · or a wallet · or a contract, e.g. CharterClaim",
                        onChange: (e) => eB(e.target.value.trim()),
                      }),
                    ],
                  }),
                });
            let n = "launch.open" === el && "univ4_hook" === eh;
            rr.push({
              id: "standard",
              label: "Fixed",
              value: `${
                nk ? `${pC(ej || "0")} tokens, minted once` : "1 billion tokens"
              } \xb7 10% to the swarm${n ? "" : " · 1% of every trade to you"}`,
            });
          }
          if (
            (ro &&
              "evm_project" === eh &&
              (eJ || ny) &&
              rr.push({
                id: "owner",
                label: "Owner",
                value: iz ?? "The wallet that pays",
                problem: eL.trim() ? fX(eL) : null,
                ...(eL.trim() ? { reset: () => eq("") } : {}),
                edit: (0, o.jsx)("input", {
                  "data-field": "owner",
                  ...pO,
                  className: "is-address",
                  type: "text",
                  "aria-label": "who owns the contracts",
                  spellCheck: !1,
                  value: eL,
                  placeholder: "0x… (empty: the wallet that pays)",
                  onChange: (e) => eq(e.target.value),
                }),
              }),
            tF &&
              rr.push({
                id: "report",
                label: "Report",
                value: (0, o.jsx)(fS.Inline, {
                  label: "report",
                  value: ti,
                  disabled: tT,
                  options: [
                    ["page", "On the job's page"],
                    ["github", "Also on GitHub"],
                  ],
                  onChange: tr,
                }),
              }),
            !n &&
              null != ni &&
              tM &&
              ("oracle.request" !== el || tc) &&
              (rr.push({
                id: "repeat",
                label: (0, o.jsxs)("span", {
                  className: `request-beat request-beat-label${
                    nr ? " is-on" : ""
                  }`,
                  children: [iF, "Repeat"],
                }),
                value: (0, o.jsx)(fS.Inline, {
                  label: "how often",
                  value: iR,
                  disabled: tT,
                  options: iq
                    .filter(([e]) => "once" !== e || "oracle.request" !== el)
                    .map(([e, t]) => [e, t]),
                  onChange: (e) =>
                    iX(
                      () => {
                        let t = iq.find(([t]) => t === e)?.[2];
                        t ? (tp(t), tm(!0)) : tm(!1);
                      },
                      null,
                      null,
                      void 0
                    ),
                }),
              }),
              nr))
          ) {
            let e =
                null != nd && iI
                  ? nB(Number((0, v.f)(nd, nu?.decimals ?? 18)), "IMD")
                  : null,
              t = `${iT}${e ? ` (${e})` : ""} in all`;
            rr.push({
              id: "runs",
              label: "Runs",
              value: `${Number.isFinite(th) ? (0, fI.b)(String(th)) : th} run${
                1 === th ? "" : "s"
              }, ${fT(th, tf)}, ${t}`,
              problem: no,
              ...(30 !== th ? { reset: () => tv(30) } : {}),
              edit: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("input", {
                    "data-field": "runs",
                    ...pO,
                    type: "number",
                    inputMode: "numeric",
                    "aria-label": "runs",
                    min: 1,
                    step: 1,
                    value: Number.isFinite(th) ? th : "",
                    onChange: (e) =>
                      tv(
                        "" === e.target.value ? 0 / 0 : Number(e.target.value)
                      ),
                  }),
                  (0, o.jsx)("span", {
                    children: (0, o.jsx)(fI.o, {
                      text: `run${1 === th ? "" : "s"}${
                        no ? "" : `, ${fT(th, tf)}, ${t}`
                      }`,
                    }),
                  }),
                ],
              }),
            }),
              "job.open" === ni &&
                rr.push({
                  id: "each",
                  label: "Each run",
                  value: (0, o.jsx)(fS.Inline, {
                    label: "each run",
                    value: tg ? "builds" : "fresh",
                    disabled: tT,
                    options: [
                      ["fresh", "Starts fresh"],
                      ["builds", "Builds on the last"],
                    ],
                    onChange: (e) => t$("builds" === e),
                  }),
                });
          }
          "oracle.request" === el &&
            rr.push({
              id: "panel",
              label: "Panel",
              value: `${nf} agents, ${fJ(nf)} must agree${
                nv?.online != null ? ` \xb7 ${nv.online} online` : ""
              }`,
              problem: np,
              ...(20 !== eX ? { reset: () => eY(20) } : {}),
              edit: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("input", {
                    "data-field": "panel",
                    ...pO,
                    type: "number",
                    inputMode: "numeric",
                    "aria-label": "agents on the panel",
                    min: nc,
                    max: nm,
                    step: 1,
                    value: Number.isFinite(eX) ? eX : "",
                    onChange: (e) =>
                      eY(
                        "" === e.target.value ? 0 / 0 : Number(e.target.value)
                      ),
                  }),
                  (0, o.jsx)("span", {
                    children: (0, o.jsx)(fI.o, {
                      text: `agents, ${fJ(
                        nf
                      )} must agree \xb7 more is safer, same price`,
                    }),
                  }),
                ],
              }),
            });
          let rc = D?.actions.find((e) => "job.continue" === e.action)?.payment,
            rm = `${
              rc ? (0, v.f)(BigInt(rc.amount), rc.decimals ?? 18) : "0.5"
            } IMD`,
            rf = `${rm} each`,
            rp =
              nr || "job.continue" === el
                ? null
                : "job.open" === el &&
                  ("build-website" === ef || "build-ponder-indexer" === ef)
                ? `Make changes anytime for ${rf}.`
                : "job.open" === el && "research-report" === ef
                ? `Ask follow-ups anytime for ${rf}.`
                : "job.open" === el &&
                  fS.WORK.some((e) => e.media && e.id === ef)
                ? `Make new versions anytime for ${rf}.`
                : "workflow.open" === el
                ? `Change the site anytime for ${rf}.`
                : !ro || eJ || ny
                ? "launch.open" === el
                  ? `Add a website anytime for ${rm}.`
                  : null
                : `Make changes anytime for ${rf}.`;
          if ("oracle.request" === el && nv) {
            let e = nv.request;
            if (
              (rr.push({
                id: "answer",
                label: "Answer",
                value: (0, o.jsx)(fS.Inline, {
                  label: "answer",
                  value: e.answerType,
                  disabled: tT || e6,
                  options: fM.map((e) => [e, fB[e]]),
                  onChange: (e) => im({ answerType: e }),
                }),
              }),
              rr.push({
                id: "from",
                label: "From",
                value: (0, o.jsx)(fS.Inline, {
                  label: "from",
                  value: e.evidence,
                  disabled: tT || e6,
                  options: [
                    ["panel", "Public sources"],
                    ["chain", "Chain data"],
                  ],
                  onChange: (e) => im({ evidence: e }),
                }),
              }),
              "chain" === e.evidence &&
                nv.chains.length > 1 &&
                rr.push({
                  id: "read-on",
                  label: "Read on",
                  value: (0, o.jsx)(fS.Inline, {
                    label: "chain read",
                    value: String(e.chainId),
                    disabled: tT || e6,
                    options: nv.chains.map((e) => [String(e.id), e.name]),
                    onChange: (e) => im({ chainId: Number(e) }),
                  }),
                }),
              "uint256" === e.answerType)
            ) {
              let t = String(e.toleranceBps ?? 0);
              rr.push({
                id: "match",
                label: "Match",
                value: (0, o.jsx)(fS.Inline, {
                  label: "match",
                  value: t,
                  disabled: tT || e6,
                  options: [
                    ["0", "Exactly"],
                    ["100", "Within 1%"],
                    ["500", "Within 5%"],
                  ],
                  onChange: (e) => im({ toleranceBps: Number(e) }),
                }),
              });
            }
            e.answerType.endsWith("[]") &&
              rr.push({
                id: "items",
                label: "Items",
                value: (0, o.jsx)(fS.Inline, {
                  label: "items",
                  value: String(e.head ?? 3),
                  disabled: tT || e6,
                  options: ["1", "2", "3", "5", "10"].map((e) => [e, e]),
                  onChange: (e) => im({ head: Number(e) }),
                }),
              });
          }
          let rh = rr.length
              ? (0, o.jsx)("div", {
                  className: "request-terms",
                  children: rr.map((e) =>
                    (0, o.jsx)(
                      fS.Term,
                      {
                        id: e.id,
                        label: e.label,
                        value: e.value,
                        problem: e.problem ?? null,
                        open: eO === e.id,
                        disabled: tT || e.disabled,
                        onOpen: iQ,
                        onClose: ra,
                        onReset: e.reset,
                        children: e.edit,
                      },
                      e.id
                    )
                  ),
                })
              : null,
            rv = nZ
              ? {
                  blockers: nZ.result.blockers,
                  kinds: nZ.result.suggestions.filter((e) => "kind" === e.code),
                }
              : null,
            rg =
              "oracle.request" !== el && nZ
                ? nZ.result.facts.filter(
                    (e) => "missing" === e.state && e.required
                  )
                : [],
            r$ =
              "oracle.request" === el
                ? nv?.blockers ?? []
                : rv?.blockers.filter((e) => "missing_fact" !== e.code) ?? [],
            ry =
              "oracle.request" === el
                ? nv?.suggestions ?? []
                : nZ?.result.suggestions.filter((e) => pU.has(e.code)) ?? [],
            rb = "oracle.request" === el ? [] : rv?.kinds ?? [],
            r_ = "oracle.request" === el ? nv : nT,
            rx =
              !S &&
              "launch.open" === el &&
              ey &&
              !e9.remainderTo.trim() &&
              e9.poolPercent < 90,
            rw = `Pay ${iT}`,
            rk = iI
              ? nB(
                  Number(
                    null != nd
                      ? (0, v.f)(nd, nu?.decimals ?? 18)
                      : nu
                      ? (0, v.f)(BigInt(nu.amount), nu.decimals ?? 18)
                      : "0.5"
                  ),
                  "IMD"
                )
              : null,
            rI = (() => {
              if (B) return { label: ei ?? "Waiting" };
              if (nC)
                return "repo" === nC.field && tl
                  ? { label: rw, hint: "Reading the repository." }
                  : {
                      label: rw,
                      press: () => rn(nC.field),
                      hint: `${nC.say} first.`,
                    };
              if (rx)
                return {
                  label: "Connect wallet",
                  press: n1,
                  hint: "The rest of the supply goes to it.",
                  ready: !0,
                };
              if (!r_) {
                let e = () => void ("oracle.request" === el ? ic() : ih());
                return ea
                  ? { label: "Check again", press: e }
                  : ia && !e6
                  ? { label: "Check", press: e }
                  : iu
                  ? {
                      label: "Checking",
                      hint: "It pays the moment the check passes.",
                      checking: !0,
                    }
                  : {
                      label: "Checking",
                      hint: "The swarm is reading it.",
                      checking: !0,
                      press: () => {
                        (is.current = !0), il(!0), e6 || e();
                      },
                    };
              }
              if (r_.blockers.length) {
                let e = r_.blockers.find(
                  (e) => "missing_fact" === e.code
                )?.fact;
                return e
                  ? {
                      label: rw,
                      press: () => rn(`fact-${e}`),
                      hint: "Fill in what's needed above first.",
                    }
                  : { label: rw, hint: "Change what's above first." };
              }
              if (S && null != ik) {
                if (!iI || !ib)
                  return { label: rw, hint: "Not enough IMD in this wallet." };
                let e = Number((0, h.f)(ib.ethIn)).toPrecision(2);
                return ib.ethBalance < ib.ethIn + pD
                  ? { label: rw, hint: "Not enough ETH here to buy the IMD." }
                  : {
                      label: `Get ${(0, v.f)(ib.need, nu?.decimals ?? 18)} IMD`,
                      press: () =>
                        rj(
                          () =>
                            void nX(async () => {
                              if (!S || null == ik) return;
                              let e = await ix(S, ik);
                              if (e.ethBalance < e.ethIn + pD)
                                throw Error(
                                  "Not enough ETH in this wallet to buy the IMD. Nothing was charged."
                                );
                              er("Confirm in wallet");
                              let t = nY();
                              (await t.getChainId()) !== $.f.id &&
                                (await t.switchChain({ id: $.f.id }));
                              let { commands: n, inputs: i } = (0, pu.D)(
                                  ps.e,
                                  !0,
                                  e.ethIn,
                                  e.need,
                                  !1
                                ),
                                r = await t.writeContract({
                                  account: S,
                                  chain: $.f,
                                  address: ps.A[1].router,
                                  abi: pu.g,
                                  functionName: "execute",
                                  args: [
                                    n,
                                    i,
                                    BigInt(Math.floor(Date.now() / 1e3) + 600),
                                  ],
                                  value: e.ethIn,
                                });
                              if (
                                (er("Buying IMD"),
                                "success" !==
                                  (
                                    await pE.waitForTransactionReceipt({
                                      hash: r,
                                    })
                                  ).status)
                              )
                                throw Error(
                                  "The swap did not go through. Nothing was charged for the request."
                                );
                              await nJ(S);
                            })
                        ),
                      hint: `About ${e} ETH${
                        nB(Number(e), "ETH") ? ` (${nB(Number(e), "ETH")})` : ""
                      }, from IMD's own pool.`,
                      ready: !0,
                    };
              }
              return {
                label: rw,
                ready: !0,
                ...(D || !S ? { press: () => rj(() => void iy()) } : {}),
                hint:
                  "oracle.request" === el
                    ? nv && !nv.judged
                      ? "The checker could not read it this time: check how it will be answered."
                      : "The panel answers it once it is paid for."
                    : nT
                    ? (function (e) {
                        let t = e.find((e) => "deploy" === e.short),
                          n = e.find((e) => "hosting" === e.short),
                          i = e.filter((e) => e !== t && e !== n);
                        if (!i.length) return "";
                        let r = 1 === i.length,
                          a = [];
                        for (let e of i) {
                          let t = f1.find(([t]) => t.test(e.short)),
                            n = t ? (r ? t[1] : t[2]) : null;
                          n && !a.includes(n) && a.push(n);
                        }
                        let o =
                          a.length > 1
                            ? `${a.slice(0, -1).join(", ")} and ${a.at(-1)}`
                            : a[0] ?? (r ? "works on" : "work on");
                        return `${
                          r ? "1 agent" : `${i.length} agents`
                        } ${o} it.`;
                      })(nT.plan)
                    : void 0,
              };
            })(),
            rS = (0, l.useRef)(null),
            rj = (e) => {
              try {
                let e = window.AudioContext ?? window.webkitAudioContext;
                !rS.current && e && (rS.current = new e()),
                  rS.current?.resume();
              } catch {}
              e(), iX(() => W(!0));
            },
            rN = () => {
              (i$.current = !1), G(!1);
            },
            rz = () =>
              iX(() => {
                N && nR(p$(N)), Z(null), L(null), en(null), W(!1);
              }),
            rD = E
              ? `${(0, v.f)(
                  BigInt(E.quote.payment.amount),
                  E.quote.payment.decimals
                )} IMD`
              : iT,
            rA = E
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    rD,
                    " to ",
                    (0, fx.l)(E.quote.payment.payTo.toLowerCase()),
                    T?.status === "quoted" && null != iD && iD > 0
                      ? ` \xb7 held ${Math.floor(iD / 60)}:${String(
                          iD % 60
                        ).padStart(2, "0")}`
                      : null,
                    T?.payment?.transactionHash
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            " · ",
                            (0, o.jsx)("a", {
                              className: "link",
                              href: `https://etherscan.io/tx/${T.payment.transactionHash}`,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "transaction",
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : null,
            rU = (e) => {
              let t = et && !et.bad ? et.text : null;
              return "Reading wallet" === e
                ? ["Reading your wallet", null]
                : "Approve in wallet" === e
                ? [
                    "Approve IMD",
                    t ??
                      "Once for this wallet, so it can pay. Confirm it in your wallet.",
                  ]
                : "Sign in wallet" === e
                ? [
                    `Sign to pay ${rD}`,
                    t ?? "Your wallet shows what you pay for.",
                  ]
                : "Confirm in wallet" === e
                ? [
                    ib
                      ? `Buy ${(0, v.f)(ib.need, nu?.decimals ?? 18)} IMD`
                      : "Buy IMD",
                    "Confirm the swap in your wallet.",
                  ]
                : "Buying IMD" === e
                ? ["Buying IMD", "Waiting for the swap to land."]
                : [e ?? "Working", t];
            },
            rO = (() => {
              if (E && ij) {
                if (B) {
                  let [e, t] = rU(ei);
                  return { title: e, line: t, facts: rA, tone: "working" };
                }
                if (T?.status === "quoted" && "sign" === iA) {
                  let e = null != iD && iD >= 15;
                  return {
                    title: e ? `Sign to pay ${rD}` : "The quote ran out",
                    line: e
                      ? et?.text ?? "Nothing moves until you sign."
                      : "Nothing was charged.",
                    facts: rA,
                    tone: et?.bad ? "bad" : "idle",
                    actions: e
                      ? [
                          { label: "Sign and pay", press: n9, main: !0 },
                          { label: "Change it", press: rz },
                        ]
                      : [{ label: "Start again", press: rz, main: !0 }],
                  };
                }
                if (T?.status === "quoted" && "resend" === iA)
                  return {
                    title: "Send the payment",
                    line: et?.text ?? "It is signed. Send it once more.",
                    facts: rA,
                    tone: "idle",
                    actions: [{ label: "Send", press: n5, main: !0 }],
                  };
                if (ij.final) {
                  let e = "accepted" === ij.tone;
                  return {
                    title: ij.title,
                    line:
                      `${
                        ij.problems.length
                          ? ij.problems.join(" ")
                          : e && ij.href
                          ? "Opening its page."
                          : ij.line ?? ""
                      }` || null,
                    facts: rA,
                    tone: e ? "done" : "rejected" === ij.tone ? "bad" : "idle",
                    actions:
                      e && ij.href
                        ? x.current
                          ? n
                            ? [{ label: "Add more", press: n8, main: !0 }]
                            : []
                          : [
                              {
                                label: "Open it",
                                press: () => _.push(ij.href),
                                main: !0,
                              },
                            ]
                        : [{ label: "New request", press: n8, main: !0 }],
                  };
                }
                return {
                  title: ij.title,
                  line: ij.line,
                  facts: rA,
                  tone: "working",
                };
              }
              if (B) {
                let [e, t] = rU(ei);
                return { title: e, line: t, tone: "working" };
              }
              return K && H.waiting
                ? {
                    title: `Unlock ${H.waiting}`,
                    line: "Open it from your browser's toolbar, unlock it, and approve.",
                    tone: "working",
                    actions: [{ label: "Cancel", press: rN }],
                  }
                : K && X && !H.open
                ? {
                    title: "No wallet connected",
                    line: "Nothing was charged.",
                    tone: "idle",
                    actions: [
                      { label: "Connect", press: n1, main: !0 },
                      { label: "Cancel", press: rN },
                    ],
                  }
                : K
                ? {
                    title: "Connect a wallet",
                    line: "Pick one in the window that opened.",
                    tone: "working",
                    actions: [{ label: "Cancel", press: rN }],
                  }
                : V && et?.bad
                ? {
                    title: "Not paid",
                    line: et.text,
                    tone: "bad",
                    actions: [
                      {
                        label: "Try again",
                        press: () => {
                          en(null), iy();
                        },
                        main: !0,
                      },
                      { label: "Back", press: () => en(null) },
                    ],
                  }
                : null;
            })(),
            rP = (0, l.useRef)(null);
          rO && (rP.current = rO);
          let rC = (V || !!E) && !!(rO ?? rP.current),
            rE = rO ?? rP.current,
            rZ = V && !rO && !B;
          (0, l.useEffect)(() => {
            rZ && iX(() => W(!1));
          }, [rZ]);
          let rT = (0, l.useRef)(null),
            rL = (0, l.useRef)(0),
            rq = rE
              ? `${rE.title}|${rE.line ?? ""}|${rE.actions?.length ?? 0}`
              : "";
          (0, l.useLayoutEffect)(() => {
            let e = rT.current;
            if (!e) {
              rL.current = 0;
              return;
            }
            let t = e.offsetHeight;
            rL.current &&
              t !== rL.current &&
              !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
              e.animate([{ height: `${rL.current}px` }, { height: `${t}px` }], {
                duration: 320,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              }),
              (rL.current = t);
          }, [rq]);
          let rR =
            ij?.final && "accepted" === ij.tone && ij.href ? ij.href : null;
          (0, l.useEffect)(() => {
            if (!x.current || !rR) return;
            let e = rR.startsWith("/jobs/")
              ? `${rR}?hired=${encodeURIComponent(iM || ef)}`
              : rR;
            _.prefetch(e),
              ee(!0),
              (() => {
                let e = rS.current;
                if (!e) return;
                let t = e.currentTime;
                for (let [n, i] of [
                  [1318.51, 0],
                  [1975.53, 0.09],
                ]) {
                  let r = e.createOscillator(),
                    a = e.createGain();
                  (r.type = "sine"),
                    (r.frequency.value = n),
                    a.gain.setValueAtTime(0, t + i),
                    a.gain.linearRampToValueAtTime(0.045, t + i + 0.012),
                    a.gain.exponentialRampToValueAtTime(1e-4, t + i + 0.55),
                    r.connect(a).connect(e.destination),
                    r.start(t + i),
                    r.stop(t + i + 0.6);
                }
              })();
            let t = setTimeout(
              () => (e === window.location.pathname ? _.refresh() : _.push(e)),
              1400
            );
            return () => clearTimeout(t);
          }, [rR]);
          let rF = n ? "heartbeat" : iM || ef,
            rM =
              rC && rE
                ? (0, o.jsxs)("div", {
                    ref: rT,
                    className: `pay-tray is-${rE.tone}`,
                    "data-vt": "go",
                    role: "status",
                    "aria-live": "polite",
                    children: [
                      (0, o.jsx)("span", {
                        className: "pay-tray-figure",
                        children: (0, o.jsx)(l.ViewTransition, {
                          name: "hired-figure",
                          share: "hired-flight",
                          default: "none",
                          children: (0, o.jsx)(fS.PartStage, {
                            id: rF,
                            size: 44,
                            live: "working" === rE.tone,
                            finale: Q,
                          }),
                        }),
                      }),
                      (0, o.jsxs)("span", {
                        className: "pay-tray-text",
                        children: [
                          (0, o.jsx)("b", {
                            children: (0, o.jsx)(fI.o, { text: rE.title }),
                          }),
                          rE.line
                            ? (0, o.jsx)(
                                "span",
                                {
                                  className: "pay-tray-line",
                                  children: rE.line,
                                },
                                rE.line
                              )
                            : null,
                          rE.facts
                            ? (0, o.jsx)("span", {
                                className: "pay-tray-facts",
                                children: rE.facts,
                              })
                            : null,
                        ],
                      }),
                      rE.actions?.length
                        ? (0, o.jsx)("span", {
                            className: "pay-tray-actions",
                            children: rE.actions.map((e) =>
                              e.main
                                ? (0, o.jsx)(
                                    "span",
                                    {
                                      className:
                                        "pill request-button request-pay is-ready",
                                      children: (0, o.jsx)("button", {
                                        type: "button",
                                        className: "pill-cell",
                                        onClick: e.press,
                                        disabled: B,
                                        children: e.label,
                                      }),
                                    },
                                    e.label
                                  )
                                : (0, o.jsx)(
                                    "button",
                                    {
                                      type: "button",
                                      className:
                                        "request-switch pay-tray-quiet",
                                      onClick: e.press,
                                      disabled: B,
                                      children: e.label,
                                    },
                                    e.label
                                  )
                            ),
                          })
                        : null,
                    ],
                  })
                : null,
            rB =
              et && !rC
                ? { text: et.text, tone: et.bad ? "bad" : void 0 }
                : ea && !r_
                ? { text: ea, tone: "bad" }
                : {
                    text: rI.hint ?? "",
                    tone:
                      rI.ready &&
                      r_ &&
                      !r_.blockers.length &&
                      !nE &&
                      rI.label === rw
                        ? "ready"
                        : void 0,
                  };
          return (
            (0, l.useEffect)(() => {
              if (!is.current) return;
              if (ea || nC) {
                (is.current = !1), il(!1);
                return;
              }
              if (!r_ || e6) return;
              (is.current = !1), il(!1);
              let e =
                "oracle.request" !== el &&
                !!nT?.suggestions.some((e) => "kind" === e.code);
              !r_.blockers.length && !e && rI.ready && rI.press && rI.press();
            }),
            (0, o.jsxs)(o.Fragment, {
              children: [
                r && !E && "menu" === tJ
                  ? (0, o.jsx)(fx.r, {
                      title: "Hire the swarm",
                      children: (0, o.jsx)("p", {
                        className: "request-lede",
                        children:
                          "Hundreds of agents build it, check each other's work, and record it all onchain.",
                      }),
                    })
                  : null,
                (0, o.jsx)("div", {
                  className: "request",
                  children: (0, o.jsxs)(o.Fragment, {
                    children: [
                      n
                        ? (0, o.jsx)("form", {
                            className: "request-form is-entered",
                            onSubmit: (e) => {
                              e.preventDefault(),
                                B ||
                                  rC ||
                                  !D ||
                                  !nu ||
                                  na ||
                                  rj(() => void iy());
                            },
                            children: D
                              ? nu
                                ? (0, o.jsxs)("div", {
                                    className: "request-checkout",
                                    children: [
                                      (0, o.jsx)("div", {
                                        className: "request-terms",
                                        children: (0, o.jsxs)(fS.Term, {
                                          id: "runs",
                                          label: "Runs",
                                          value: `${th} run${
                                            1 === th ? "" : "s"
                                          } at ${iL}, ${iT}${
                                            rk ? ` (${rk})` : ""
                                          } in all`,
                                          problem: na,
                                          open: "runs" === eO,
                                          disabled: tT,
                                          onOpen: iQ,
                                          onClose: ra,
                                          onReset:
                                            10 !== th ? () => tv(10) : void 0,
                                          children: [
                                            (0, o.jsx)("input", {
                                              "data-field": "runs",
                                              ...pO,
                                              type: "number",
                                              inputMode: "numeric",
                                              "aria-label": "runs to add",
                                              min: 1,
                                              step: 1,
                                              value: Number.isFinite(th)
                                                ? th
                                                : "",
                                              onChange: (e) =>
                                                tv(
                                                  "" === e.target.value
                                                    ? 0 / 0
                                                    : Number(e.target.value)
                                                ),
                                            }),
                                            (0, o.jsx)("span", {
                                              children: (0, o.jsx)(fI.o, {
                                                text: `run${
                                                  1 === th ? "" : "s"
                                                } at ${iL}`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, o.jsx)("p", {
                                        className: "request-note",
                                        "data-vt": "runs-note",
                                        children:
                                          "Anyone can add runs. Unused runs aren't refunded.",
                                      }),
                                      rM ??
                                        (0, o.jsxs)("div", {
                                          className: "request-go",
                                          "data-vt": "go",
                                          children: [
                                            (0, o.jsx)("div", {
                                              className:
                                                "pill request-button request-pay is-ready",
                                              children: (0, o.jsx)("button", {
                                                className: "pill-cell",
                                                type: "submit",
                                                disabled: B || !!na,
                                                "aria-label": `Pay ${iT}`,
                                                children: (0, o.jsx)(fI.o, {
                                                  text: `Pay ${iT}`,
                                                  glide: !0,
                                                }),
                                              }),
                                            }),
                                            (0, o.jsx)("span", {
                                              className: "request-hint",
                                              children: (0, o.jsx)(fI.o, {
                                                text: na
                                                  ? "Fix the number of runs first."
                                                  : "",
                                              }),
                                            }),
                                          ],
                                        }),
                                      rC
                                        ? null
                                        : (0, o.jsxs)("p", {
                                            className: `request-note${
                                              iO ? " is-short" : ""
                                            }`,
                                            "data-vt": "print",
                                            children: [
                                              rk
                                                ? `${iT} is about ${rk}. `
                                                : null,
                                              S
                                                ? null == U
                                                  ? "Reading your balance."
                                                  : `You hold ${Number(
                                                      (0, v.f)(U, 18)
                                                    ).toLocaleString("en-US", {
                                                      maximumFractionDigits: 2,
                                                    })} IMD${
                                                      iO ? ", not enough" : ""
                                                    }.`
                                                : "Nothing is charged until you sign.",
                                              " ",
                                              (0, o.jsx)("a", {
                                                className: "link",
                                                href: "https://imd.fun/token",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Get $IMD",
                                              }),
                                            ],
                                          }),
                                    ],
                                  })
                                : (0, o.jsx)("p", {
                                    className: "request-note",
                                    children:
                                      "Adding runs is not sold yet. It opens when the network sells it.",
                                  })
                              : (0, o.jsx)("p", {
                                  className: "request-note",
                                  children: "Reading the price.",
                                }),
                          })
                        : null,
                      E || n || I || "menu" !== tJ
                        ? null
                        : (0, o.jsxs)("div", {
                            className: "part-menu",
                            children: [
                              (0, o.jsx)(fS.PartTiles, {
                                label: "What to make",
                                value: "",
                                disabled: tT,
                                options: iV.map(([e, t]) => [e, t]),
                                onChange: (e, t) => {
                                  tK(null),
                                    tQ(
                                      `?make=${encodeURIComponent(iW[e] ?? e)}`
                                    ),
                                    iG(
                                      () => {
                                        var t;
                                        (t = e),
                                          eP(null),
                                          eE(null),
                                          t !== iM && tn("new"),
                                          "launch.token" === t
                                            ? (tm(!1),
                                              ed("launch.open"),
                                              ev("evm_project"),
                                              eb(!0))
                                            : t.startsWith("launch.")
                                            ? (tm(!1),
                                              ed("launch.open"),
                                              ev(t.slice(7)),
                                              eb(!1))
                                            : "workflow.open" === t
                                            ? (tm(!1), ed("workflow.open"))
                                            : "oracle.request" === t
                                            ? (tm(!1), ed("oracle.request"))
                                            : "heartbeat" === t
                                            ? (tp({
                                                mode: "daily",
                                                time: "09:00",
                                              }),
                                              tm(!0),
                                              ed("oracle.request"))
                                            : (ep(t), ed("job.open")),
                                          tV("form");
                                      },
                                      t ?? null,
                                      void 0,
                                      () =>
                                        document
                                          .querySelector(
                                            ".request-form [data-field]"
                                          )
                                          ?.focus({ preventScroll: !0 })
                                    );
                                },
                                onPoint: tK,
                              }),
                              (0, o.jsx)("p", {
                                className: "part-menu-says",
                                "aria-live": "polite",
                                children: tW
                                  ? (0, o.jsx)(
                                      "span",
                                      {
                                        children: iV.find(
                                          ([e]) => e === tW
                                        )?.[2],
                                      },
                                      tW
                                    )
                                  : null,
                              }),
                              (0, o.jsxs)("p", {
                                className: "part-menu-agent",
                                children: [
                                  "Using an agent? ",
                                  (0, o.jsx)("code", { children: px }),
                                  (0, o.jsx)(fw.Copy, {
                                    value: px,
                                    label: "copy the line for your agent",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      r && !E && "menu" === tJ && i9.length
                        ? (0, o.jsxs)("section", {
                            className: "mine-work",
                            children: [
                              (0, o.jsx)(fx.Q, {
                                title: "Your work",
                                count: String(i3.length),
                              }),
                              (0, o.jsx)("ul", {
                                children: i3.slice(0, 8).map((e) => {
                                  let t,
                                    n = e.status ? pc(e.status) : null,
                                    i = i6(e),
                                    r = i ? i1[i] : null,
                                    a = r
                                      ? "oracle.request" === r.figure &&
                                        "completed" === r.state
                                        ? "Answered"
                                        : py[r.state]
                                      : n?.title ?? "Could not read";
                                  return (0, o.jsxs)(
                                    "li",
                                    {
                                      className: "mine-row",
                                      "data-job":
                                        r?.continuation?.jobId ?? i ?? void 0,
                                      children: [
                                        (0, o.jsx)("span", {
                                          className: "mine-mark",
                                          children: r
                                            ? (0, o.jsx)(fS.PartFigure, {
                                                id: r.figure,
                                                size: 28,
                                              })
                                            : (0, o.jsx)("span", {
                                                className: `s-${
                                                  n?.tone ?? "idle"
                                                }`,
                                                children: (0, o.jsx)(fx.Z, {
                                                  tone: n?.tone ?? "idle",
                                                  size: 13,
                                                }),
                                              }),
                                        }),
                                        (0, o.jsx)("span", {
                                          className: "mine-what",
                                          children: r
                                            ? (0, o.jsx)(s.default, {
                                                className: "link",
                                                href: r.href,
                                                children: r.title,
                                              })
                                            : pb[e.action ?? ""] ?? "Request",
                                        }),
                                        (0, o.jsxs)("span", {
                                          className: "mine-state",
                                          children: [
                                            a,
                                            e.at
                                              ? (0, o.jsxs)(o.Fragment, {
                                                  children: [
                                                    " · ",
                                                    (0, o.jsx)(fx.d, {
                                                      at: e.at,
                                                    }),
                                                  ],
                                                })
                                              : null,
                                          ],
                                        }),
                                        r?.continuation
                                          ? (0, o.jsx)("button", {
                                              type: "button",
                                              className:
                                                "request-switch mine-act",
                                              onClick: (e) => {
                                                var t;
                                                return (
                                                  (t =
                                                    e.currentTarget.closest(
                                                      "li"
                                                    )),
                                                  void (
                                                    r.continuation &&
                                                    (tQ(
                                                      `?continue=${r.continuation.jobId}`
                                                    ),
                                                    iG(
                                                      () => i5(r),
                                                      t,
                                                      void 0,
                                                      () =>
                                                        document
                                                          .querySelector(
                                                            ".request-form [data-field]"
                                                          )
                                                          ?.focus({
                                                            preventScroll: !0,
                                                          })
                                                    ))
                                                  )
                                                );
                                              },
                                              children: (t =
                                                r.continuation).adds.includes(
                                                "build-website"
                                              )
                                                ? "Add a website"
                                                : t.adds.includes(t.skill)
                                                ? "Add an indexer"
                                                : t.skill.startsWith("create-")
                                                ? "New version"
                                                : "research-report" === t.skill
                                                ? "Follow up"
                                                : "Change it",
                                            })
                                          : (0, o.jsx)("span", {}),
                                      ],
                                    },
                                    e.id
                                  );
                                }),
                              }),
                              i3.length > 8 && S
                                ? (0, o.jsxs)(s.default, {
                                    className: "request-switch mine-all",
                                    href: `/wallet/${S.toLowerCase()}/ordered`,
                                    children: [
                                      "All ",
                                      i9.length,
                                      " you ordered",
                                    ],
                                  })
                                : null,
                            ],
                          })
                        : null,
                      !n && (I || "form" === tJ || E)
                        ? (0, o.jsxs)("form", {
                            className: `request-form${tG ? " is-entered" : ""}`,
                            style: {
                              "--beat":
                                "hourly" === iR
                                  ? "0.65s"
                                  : "weekly" === iR
                                  ? "2.6s"
                                  : "1.3s",
                            },
                            onSubmit: (e) => {
                              e.preventDefault(), rI.press?.();
                            },
                            onBlur: (e) => {
                              (e.target instanceof HTMLInputElement ||
                                e.target instanceof HTMLTextAreaElement) &&
                                (n ||
                                  tT ||
                                  (ig && e1?.key !== ig
                                    ? ic(eQ, !0)
                                    : iv &&
                                      (e7?.key !== iv || e7.kindKey !== nI) &&
                                      ih(!0)));
                            },
                            onKeyDown: (e) => {
                              "Enter" === e.key &&
                                (e.metaKey || e.ctrlKey) &&
                                (e.preventDefault(),
                                e.currentTarget.requestSubmit());
                            },
                            children: [
                              I && !(r && w)
                                ? (0, o.jsxs)("div", {
                                    className: "request-next",
                                    children: [
                                      (0, o.jsx)(fx.Q, {
                                        id: "continue",
                                        title: tj.title,
                                      }),
                                      (0, o.jsx)("p", {
                                        className: "request-hero-line",
                                        children: tj.line,
                                      }),
                                    ],
                                  })
                                : r && (iK || w)
                                ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      (0, o.jsx)("button", {
                                        type: "button",
                                        className:
                                          "request-back request-hero-back",
                                        onClick: i0,
                                        disabled: tT,
                                        children: "← Back",
                                      }),
                                      (0, o.jsxs)("div", {
                                        className:
                                          "request-hero request-chosen-head",
                                        children: [
                                          (0, o.jsx)("span", {
                                            className: "request-hero-square",
                                            children: rC
                                              ? null
                                              : (0, o.jsx)(fS.PartStage, {
                                                  id: w?.figure ?? iM,
                                                  size: 48,
                                                  live: e6,
                                                }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "request-hero-text",
                                            children: [
                                              (0, o.jsx)("h1", {
                                                className: "request-hero-title",
                                                children: (0, o.jsx)("span", {
                                                  className: "request-title",
                                                  children: w
                                                    ? (0, o.jsxs)(o.Fragment, {
                                                        children: [
                                                          tj.lead,
                                                          " ",
                                                          (0, o.jsx)(
                                                            s.default,
                                                            {
                                                              className:
                                                                "request-title-link",
                                                              href: `/jobs/${w.jobId}`,
                                                              children: w.title,
                                                            }
                                                          ),
                                                        ],
                                                      })
                                                    : iK[1],
                                                }),
                                              }),
                                              (0, o.jsx)("p", {
                                                className: "request-hero-line",
                                                children: w ? tj.line : iK[2],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, o.jsxs)("div", {
                                    className: "request-chosen",
                                    children: [
                                      (0, o.jsx)("button", {
                                        type: "button",
                                        className: "request-back",
                                        onClick: i0,
                                        disabled: tT,
                                        children: "← Back",
                                      }),
                                      iK
                                        ? (0, o.jsxs)("div", {
                                            className: "request-chosen-head",
                                            children: [
                                              rC
                                                ? (0, o.jsx)("span", {
                                                    className:
                                                      "request-chosen-slot",
                                                    "aria-hidden": !0,
                                                  })
                                                : (0, o.jsx)(fS.PartStage, {
                                                    id: iM,
                                                    size: 64,
                                                    live: e6,
                                                  }),
                                              (0, o.jsxs)("div", {
                                                children: [
                                                  (0, o.jsx)("b", {
                                                    children: iK[1],
                                                  }),
                                                  (0, o.jsx)("span", {
                                                    children: iK[2],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                              "job.continue" === el
                                ? (0, o.jsxs)("div", {
                                    className: "request-field",
                                    children: [
                                      (0, o.jsx)(
                                        "label",
                                        {
                                          className: "request-guide",
                                          htmlFor: "request-objective",
                                          children: tj.ask,
                                        },
                                        tj.ask
                                      ),
                                      (0, o.jsx)("textarea", {
                                        id: "request-objective",
                                        "data-field": "text",
                                        rows: 4,
                                        value: tN,
                                        onChange: (e) => tz(e.target.value),
                                        disabled: tT,
                                        placeholder:
                                          pk[tS ?? ef] ?? pk["build-website"],
                                      }),
                                      pN(tN, 7e3),
                                    ],
                                  })
                                : "job.open" === el
                                ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      iC,
                                      (tF || ny) &&
                                      "job-line" !== eC &&
                                      !tN.trim()
                                        ? ((b = tF
                                            ? "Anything to look at hardest?"
                                            : "What is the site, in a line?"),
                                          (0, o.jsxs)("button", {
                                            type: "button",
                                            className: "request-more",
                                            disabled: tT,
                                            onClick: (e) => {
                                              let t;
                                              return (
                                                (t = "job-line"),
                                                iX(
                                                  () => eE(t),
                                                  e.currentTarget.querySelector(
                                                    ".request-more-text"
                                                  ),
                                                  () =>
                                                    document.querySelector(
                                                      `[data-more="${t}"] .request-guide`
                                                    ),
                                                  () =>
                                                    document
                                                      .querySelector(
                                                        `[data-more="${t}"] textarea`
                                                      )
                                                      ?.focus({
                                                        preventScroll: !0,
                                                      })
                                                )
                                              );
                                            },
                                            children: [
                                              (0, o.jsx)("span", {
                                                className: "request-more-plus",
                                                "aria-hidden": !0,
                                                children: "+",
                                              }),
                                              (0, o.jsx)("span", {
                                                className: "request-more-text",
                                                children: b,
                                              }),
                                            ],
                                          }))
                                        : (0, o.jsxs)("div", {
                                            className: "request-field",
                                            "data-more": "job-line",
                                            children: [
                                              (0, o.jsxs)("div", {
                                                className: "request-field-head",
                                                children: [
                                                  (0, o.jsx)(
                                                    "label",
                                                    {
                                                      className:
                                                        "request-guide",
                                                      htmlFor:
                                                        "request-objective",
                                                      children: tF
                                                        ? "Anything to look at hardest? (optional)"
                                                        : ny
                                                        ? "What is the site, in a line? (optional)"
                                                        : fS.WORK.find(
                                                            (e) => e.id === ef
                                                          )?.ask ??
                                                          "What should it be?",
                                                    },
                                                    ef
                                                  ),
                                                  ny ? null : iP,
                                                ],
                                              }),
                                              (0, o.jsx)("textarea", {
                                                id: "request-objective",
                                                "data-field": "text",
                                                rows: 4,
                                                value: tN,
                                                onChange: (e) =>
                                                  tz(e.target.value),
                                                disabled: tT,
                                                placeholder: tF
                                                  ? "Reward accounting and withdrawals."
                                                  : ny
                                                  ? "A menu and opening hours for a bakery."
                                                  : fS.WORK.find(
                                                      (e) => e.id === ef
                                                    )?.placeholder,
                                              }),
                                              pN(tN, 7e3),
                                            ],
                                          }),
                                    ],
                                  })
                                : "launch.open" === el && ey
                                ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      (0, o.jsxs)("div", {
                                        className: "request-field",
                                        children: [
                                          (0, o.jsxs)("div", {
                                            className: "request-token",
                                            children: [
                                              (0, o.jsxs)("label", {
                                                children: [
                                                  "Name",
                                                  (0, o.jsx)("input", {
                                                    "data-field": "coin-name",
                                                    ...pO,
                                                    value: e9.name,
                                                    maxLength: 40,
                                                    disabled: tT,
                                                    placeholder: "e.g. Kite",
                                                    onChange: (e) =>
                                                      e3({
                                                        ...e9,
                                                        name: e.target.value,
                                                        ...(eZ.current
                                                          ? {}
                                                          : {
                                                              symbol: f3(
                                                                e.target.value
                                                              ),
                                                            }),
                                                      }),
                                                  }),
                                                ],
                                              }),
                                              (0, o.jsxs)("label", {
                                                children: [
                                                  "Symbol",
                                                  (0, o.jsx)("input", {
                                                    "data-field": "coin-symbol",
                                                    ...pO,
                                                    value: e9.symbol,
                                                    maxLength: 11,
                                                    disabled: tT,
                                                    placeholder: "e.g. KITE",
                                                    onChange: (e) => {
                                                      (eZ.current =
                                                        "" !== e.target.value),
                                                        e3({
                                                          ...e9,
                                                          symbol: e.target.value
                                                            .toUpperCase()
                                                            .replace(
                                                              /[^A-Z0-9]/g,
                                                              ""
                                                            ),
                                                        });
                                                    },
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e9.name &&
                                          e9.symbol &&
                                          nU("name", "symbol")
                                            ? (0, o.jsx)("p", {
                                                className: "request-note",
                                                children: nU("name", "symbol"),
                                              })
                                            : null,
                                        ],
                                      }),
                                      (0, o.jsxs)("div", {
                                        className: "request-field",
                                        children: [
                                          (0, o.jsx)("label", {
                                            className: "request-guide",
                                            htmlFor: "request-coin-notes",
                                            children:
                                              "Anything else it does? (optional)",
                                          }),
                                          (0, o.jsx)("textarea", {
                                            id: "request-coin-notes",
                                            "data-field": "coin-notes",
                                            rows: 2,
                                            value: e9.notes,
                                            disabled: tT,
                                            placeholder:
                                              "A 1% burn on every transfer.",
                                            onChange: (e) =>
                                              e3({
                                                ...e9,
                                                notes: e.target.value,
                                              }),
                                          }),
                                          pN(e9.notes, 2e3),
                                        ],
                                      }),
                                    ],
                                  })
                                : "launch.open" === el
                                ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      iC,
                                      (0, o.jsxs)("div", {
                                        className: "request-field",
                                        children: [
                                          (0, o.jsxs)("div", {
                                            className: "request-field-head",
                                            children: [
                                              (0, o.jsx)(
                                                "label",
                                                {
                                                  className: "request-guide",
                                                  htmlFor: "request-launch",
                                                  children: ny
                                                    ? "What do the contracts do, and what should launch?"
                                                    : "univ4_hook" === eh
                                                    ? "What should the hook do on each swap?"
                                                    : "What should the contracts do?",
                                                },
                                                `${eh}:${ny}`
                                              ),
                                              ny ? null : iP,
                                            ],
                                          }),
                                          (0, o.jsx)("textarea", {
                                            id: "request-launch",
                                            "data-field": "text",
                                            rows: 4,
                                            value: tD,
                                            onChange: (e) => tA(e.target.value),
                                            disabled: tT,
                                            placeholder: ny
                                              ? "A vault and its reward token. Launch both."
                                              : "univ4_hook" === eh
                                              ? "The fee, when it changes, where it goes. For example: a fee that rises with volatility, sending 1% of every swap to the pool creator's treasury."
                                              : "The numbers that matter, and who can call what. For example: a lending pool where you deposit USDC and borrow against ETH up to 75% of its value, liquidated below 80%.",
                                          }),
                                          pN(tD, tU),
                                        ],
                                      }),
                                    ],
                                  })
                                : "workflow.open" === el
                                ? (0, o.jsx)(o.Fragment, {
                                    children: (0, o.jsxs)("div", {
                                      className: "request-field",
                                      children: [
                                        (0, o.jsx)("label", {
                                          className: "request-guide",
                                          htmlFor: "request-release",
                                          children: "What does the company do?",
                                        }),
                                        (0, o.jsx)("textarea", {
                                          id: "request-release",
                                          "data-field": "text",
                                          rows: 5,
                                          value: tO,
                                          onChange: (e) => tP(e.target.value),
                                          disabled: tT,
                                          placeholder:
                                            "Its contracts, and what its website shows. For example: a vault for an ERC-20 that pays holders a share of fees, and a site showing the APR and a connected wallet's position.",
                                        }),
                                        pN(tO, 5500),
                                      ],
                                    }),
                                  })
                                : (0, o.jsxs)("div", {
                                    className: "request-field",
                                    children: [
                                      (0, o.jsx)("label", {
                                        className: "request-guide",
                                        htmlFor: "request-question",
                                        children: "What do you want to know?",
                                      }),
                                      (0, o.jsx)("textarea", {
                                        id: "request-question",
                                        "data-field": "text",
                                        rows: 3,
                                        value: tE,
                                        disabled: tT,
                                        onChange: (e) => {
                                          tZ(e.target.value),
                                            Object.keys(eQ).length && e0({});
                                        },
                                        placeholder:
                                          "Name the chain, contract or source, and the time it covers. For example: who was named the NBA Finals MVP in 2023?",
                                      }),
                                      pN(tE, 2e3),
                                    ],
                                  }),
                              rg.length
                                ? (0, o.jsxs)("div", {
                                    className: `request-needs${
                                      nT ? "" : " is-stale"
                                    }`,
                                    children: [
                                      (0, o.jsx)("p", {
                                        className: "request-needs-head",
                                        children: `${
                                          [
                                            "One",
                                            "Two",
                                            "Three",
                                            "Four",
                                            "Five",
                                            "Six",
                                            "Seven",
                                            "Eight",
                                            "Nine",
                                          ][rg.length - 1] ?? rg.length
                                        } more ${
                                          1 === rg.length ? "thing" : "things"
                                        } before you pay`,
                                      }),
                                      rg.map((e) => {
                                        let t = nZ?.result.blockers.find(
                                            (t) => t.fact === e.id
                                          )?.detail,
                                          n = t
                                            ?.toLowerCase()
                                            .startsWith(
                                              `${e.label.toLowerCase()}:`
                                            )
                                            ? t.slice(e.label.length + 1).trim()
                                            : t;
                                        return (0, o.jsxs)(
                                          "div",
                                          {
                                            className: "request-field",
                                            children: [
                                              (0, o.jsx)("label", {
                                                className: "request-guide",
                                                htmlFor: `request-fact-${e.id}`,
                                                children: e.label,
                                              }),
                                              (0, o.jsx)("input", {
                                                id: `request-fact-${e.id}`,
                                                "data-field": `fact-${e.id}`,
                                                ...pO,
                                                value: e5[e.id]?.value ?? "",
                                                disabled: tT,
                                                placeholder: e.example ?? "",
                                                onChange: (t) =>
                                                  e8({
                                                    ...e5,
                                                    [e.id]: {
                                                      label: e.label,
                                                      value: t.target.value,
                                                    },
                                                  }),
                                              }),
                                              n
                                                ? (0, o.jsx)("p", {
                                                    className: "request-note",
                                                    children:
                                                      n
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                      n.slice(1),
                                                  })
                                                : null,
                                            ],
                                          },
                                          e.id
                                        );
                                      }),
                                    ],
                                  })
                                : null,
                              r$.length || ry.length
                                ? (0, o.jsxs)("div", {
                                    className: "request-stops",
                                    children: [
                                      r$.map((e) =>
                                        (0, o.jsxs)(
                                          "p",
                                          {
                                            className: "alarm is-note",
                                            children: [
                                              e.detail,
                                              e.customToken &&
                                              nw &&
                                              !nk &&
                                              "univ4_hook" === eh
                                                ? (0, o.jsxs)(o.Fragment, {
                                                    children: [
                                                      " ",
                                                      (0, o.jsx)("button", {
                                                        type: "button",
                                                        className:
                                                          "request-switch",
                                                        onClick: () =>
                                                          iX(
                                                            () => eS("own"),
                                                            null,
                                                            null,
                                                            () =>
                                                              rn("hook-supply")
                                                          ),
                                                        disabled: tT,
                                                        children:
                                                          "Use your own token",
                                                      }),
                                                    ],
                                                  })
                                                : null,
                                            ],
                                          },
                                          `b:${e.code}:${e.detail}`
                                        )
                                      ),
                                      ry.map((e) =>
                                        (0, o.jsx)(
                                          "p",
                                          {
                                            className: "request-note",
                                            children: e.detail,
                                          },
                                          `s:${e.code}:${e.detail}`
                                        )
                                      ),
                                    ],
                                  })
                                : null,
                              rb.map((t) => {
                                let n =
                                  t.switchTo && "other" !== t.switchTo
                                    ? t.switchTo
                                    : null;
                                return (0, o.jsxs)(
                                  "div",
                                  {
                                    className: "request-suggest",
                                    children: [
                                      n
                                        ? (0, o.jsx)(fS.PartFigure, {
                                            id: pA[n],
                                            size: 32,
                                          })
                                        : (0, o.jsx)("span", {}),
                                      (0, o.jsx)("span", {
                                        children: t.detail,
                                      }),
                                      n &&
                                      ((t) => {
                                        let n = (e) =>
                                          !D ||
                                          D.actions.some((t) => t.action === e);
                                        if ("company" === t)
                                          return n("workflow.open");
                                        if (
                                          "token" === t ||
                                          "contracts" === t ||
                                          "hook" === t
                                        )
                                          return n("launch.open");
                                        let i = iS[t];
                                        return !!(
                                          i &&
                                          n("job.open") &&
                                          e.some((e) => e.id === i)
                                        );
                                      })(n)
                                        ? (0, o.jsxs)("button", {
                                            type: "button",
                                            className: "request-switch",
                                            onClick: () =>
                                              ((e) => {
                                                let t =
                                                  "launch.open" === el
                                                    ? tD
                                                    : "workflow.open" === el
                                                    ? tO
                                                    : "job.open" === el
                                                    ? tN
                                                    : "";
                                                e8({});
                                                let n = (e) =>
                                                  em((n) => ({ ...n, [e]: t }));
                                                if ("company" === e) {
                                                  ed("workflow.open"),
                                                    n("workflow.open");
                                                  return;
                                                }
                                                if ("token" === e) {
                                                  ed("launch.open"),
                                                    ev("evm_project"),
                                                    eb(!0),
                                                    e$(!0);
                                                  return;
                                                }
                                                if (
                                                  "contracts" === e ||
                                                  "hook" === e
                                                ) {
                                                  let t =
                                                    "hook" === e
                                                      ? "univ4_hook"
                                                      : "evm_project";
                                                  ed("launch.open"),
                                                    ev(t),
                                                    eb(!1),
                                                    n(`launch.${t}`);
                                                  return;
                                                }
                                                let i = iS[e];
                                                i &&
                                                  (ep(i), ed("job.open"), n(i));
                                              })(n),
                                            disabled: tT,
                                            children: [
                                              "Switch to ",
                                              iV.find(
                                                ([e]) => e === pA[n]
                                              )?.[1] ?? fQ[n],
                                            ],
                                          })
                                        : null,
                                    ],
                                  },
                                  `k:${t.detail}`
                                );
                              }),
                              (0, o.jsxs)("div", {
                                className: `request-checkout${
                                  rh ? "" : " is-bare"
                                }`,
                                children: [
                                  rh,
                                  nr
                                    ? (0, o.jsx)("p", {
                                        className: "request-note",
                                        "data-vt": "runs-note",
                                        children:
                                          "A run the swarm skips is not charged. Unused runs are not refunded, and anyone can add more later.",
                                      })
                                    : null,
                                  rM ??
                                    (0, o.jsxs)("div", {
                                      className: "request-go",
                                      "data-vt": "go",
                                      children: [
                                        (0, o.jsx)("div", {
                                          className: `pill request-button request-pay${
                                            rI.ready
                                              ? " is-ready"
                                              : rI.press
                                              ? ""
                                              : " is-waiting"
                                          }${
                                            rI.checking && e6
                                              ? " is-checking"
                                              : ""
                                          }`,
                                          children: (0, o.jsx)("button", {
                                            className: "pill-cell",
                                            type: "submit",
                                            disabled: !rI.press,
                                            "aria-label": rI.label,
                                            children: (0, o.jsx)(fI.o, {
                                              text: rI.label,
                                              glide: !0,
                                            }),
                                          }),
                                        }),
                                        (0, o.jsxs)("span", {
                                          className: `request-hint${
                                            "bad" === rB.tone ? " is-bad" : ""
                                          }`,
                                          "aria-live": "polite",
                                          children: [
                                            (0, o.jsx)("b", {
                                              className: `request-ready-word${
                                                "ready" === rB.tone
                                                  ? " is-on"
                                                  : ""
                                              }`,
                                              "aria-hidden":
                                                "ready" !== rB.tone,
                                              children: "Ready. ",
                                            }),
                                            (0, o.jsx)(fI.o, { text: rB.text }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  rC
                                    ? null
                                    : (0, o.jsxs)("p", {
                                        className: `request-note${
                                          iO && !(ib && iI) ? " is-short" : ""
                                        }`,
                                        "data-vt": "print",
                                        children: [
                                          rk ? `${iT} is about ${rk}. ` : null,
                                          S
                                            ? null == U
                                              ? "Reading your balance."
                                              : `You hold ${Number(
                                                  (0, v.f)(U, 18)
                                                ).toLocaleString("en-US", {
                                                  maximumFractionDigits: 2,
                                                })} IMD${
                                                  iO && !(ib && iI)
                                                    ? ", not enough"
                                                    : ""
                                                }.`
                                            : "Nothing is charged until you sign.",
                                          S && iU && !iO
                                            ? " The first payment from this wallet also asks for a one-time approval."
                                            : null,
                                          iO && ib && iI
                                            ? null
                                            : (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                  " ",
                                                  (0, o.jsx)("a", {
                                                    className: "link",
                                                    href: "https://imd.fun/token",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Get $IMD",
                                                  }),
                                                ],
                                              }),
                                          rp
                                            ? (0, o.jsx)("span", {
                                                className: "request-later",
                                                children: rp,
                                              })
                                            : null,
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                }),
              ],
            })
          );
        },
      ],
      609813
    );
  },
]);
