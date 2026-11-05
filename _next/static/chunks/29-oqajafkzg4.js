(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    5450,
    (e) => {
      let t = BigInt(0),
        r = BigInt(1);
      function n(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function a(e) {
        if (!n(e)) throw Error("Uint8Array expected");
      }
      function i(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? t : BigInt("0x" + e);
      }
      let o =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        s = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c(e) {
        if ((a(e), o)) return e.toHex();
        let t = "";
        for (let r = 0; r < e.length; r++) t += s[e[r]];
        return t;
      }
      function l(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : void 0;
      }
      function u(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (o) return Uint8Array.fromHex(e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let t = 0, a = 0; t < r; t++, a += 2) {
          let r = l(e.charCodeAt(a)),
            i = l(e.charCodeAt(a + 1));
          if (void 0 === r || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          n[t] = 16 * r + i;
        }
        return n;
      }
      function f(e, t) {
        return u(e.toString(16).padStart(2 * t, "0"));
      }
      function d(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          a(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let a = e[t];
          r.set(a, n), (n += a.length);
        }
        return r;
      }
      let p = (e) => "bigint" == typeof e && t <= e;
      function b(e, t, r) {
        return p(e) && p(t) && p(r) && t <= e && e < r;
      }
      let h = (e) => new Uint8Array(e),
        g = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || n(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      e.s([
        "_",
        0,
        function (e, t, r, n) {
          if (!b(t, r, n))
            throw Error(
              "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
            );
        },
        "e",
        0,
        function (e, t) {
          if ("boolean" != typeof t)
            throw Error(e + " boolean expected, got " + t);
        },
        "B",
        0,
        a,
        "y",
        0,
        function (e) {
          let n;
          for (n = 0; e > t; e >>= r, n += 1);
          return n;
        },
        "r",
        0,
        (e) => (r << BigInt(e)) - r,
        "v",
        0,
        c,
        "s",
        0,
        function (e) {
          return i(c(e));
        },
        "F",
        0,
        function (e) {
          return a(e), i(c(Uint8Array.from(e).reverse()));
        },
        "t",
        0,
        d,
        "u",
        0,
        function (e, t, r) {
          if ("number" != typeof e || e < 2)
            throw Error("hashLen must be a number");
          if ("number" != typeof t || t < 2)
            throw Error("qByteLen must be a number");
          if ("function" != typeof r) throw Error("hmacFn must be a function");
          let n = h(e),
            a = h(e),
            i = 0,
            o = () => {
              n.fill(1), a.fill(0), (i = 0);
            },
            s = (...e) => r(a, n, ...e),
            c = (e = h(0)) => {
              let t;
              if (
                ((a = s(((t = [0]), Uint8Array.from(t)), e)),
                (n = s()),
                0 !== e.length)
              ) {
                let t;
                (a = s(((t = [1]), Uint8Array.from(t)), e)), (n = s());
              }
            },
            l = () => {
              if (i++ >= 1e3) throw Error("drbg: tried 1000 values");
              let e = 0,
                r = [];
              for (; e < t; ) {
                let t = (n = s()).slice();
                r.push(t), (e += n.length);
              }
              return d(...r);
            };
          return (e, t) => {
            let r;
            for (o(), c(e); !(r = t(l())); ) c();
            return o(), r;
          };
        },
        "z",
        0,
        function (e, t, r) {
          let a;
          if ("string" == typeof t)
            try {
              a = u(t);
            } catch (t) {
              throw Error(e + " must be hex string or Uint8Array, cause: " + t);
            }
          else if (n(t)) a = Uint8Array.from(t);
          else throw Error(e + " must be hex string or Uint8Array");
          let i = a.length;
          if ("number" == typeof r && i !== r)
            throw Error(e + " of length " + r + " expected, got " + i);
          return a;
        },
        "w",
        0,
        function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
          return 0 === r;
        },
        "X",
        0,
        u,
        "q",
        0,
        b,
        "g",
        0,
        n,
        "W",
        0,
        function (e) {
          let t = new WeakMap();
          return (r, ...n) => {
            let a = t.get(r);
            if (void 0 !== a) return a;
            let i = e(r, ...n);
            return t.set(r, i), i;
          };
        },
        "m",
        0,
        f,
        "N",
        0,
        function (e, t) {
          return f(e, t).reverse();
        },
        "Z",
        0,
        function (e) {
          let t = e.toString(16);
          return 1 & t.length ? "0" + t : t;
        },
        "k",
        0,
        function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        },
        "Q",
        0,
        function (e, t, r = {}) {
          let n = (t, r, n) => {
            let a = g[r];
            if ("function" != typeof a)
              throw Error("invalid validator function");
            let i = e[t];
            if ((!n || void 0 !== i) && !a(i, e))
              throw Error(
                "param " +
                  String(t) +
                  " is invalid. Expected " +
                  r +
                  ", got " +
                  i
              );
          };
          for (let [e, r] of Object.entries(t)) n(e, r, !1);
          for (let [e, t] of Object.entries(r)) n(e, t, !0);
          return e;
        },
      ]);
    },
    972960,
    111047,
    194720,
    (e) => {
      var t = e.i(170222),
        r = e.i(467125),
        n = e.i(450323),
        a = e.i(915588);
      async function i(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      async function o(e, t) {
        return s(e, t);
      }
      async function s(e, o) {
        let { block: s, chain: c = e.chain, request: l } = o || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let n = s || (await (0, r.f)(e, a.f, "getBlock")({})),
              i = await t({ block: n, client: e, request: l });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== t) return t;
          let i = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, n.K)(i);
        } catch {
          let [n, o] = await Promise.all([
            s ? Promise.resolve(s) : (0, r.f)(e, a.f, "getBlock")({}),
            (0, r.f)(e, i, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof n.baseFeePerGas) throw new t.D();
          let c = o - n.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, n) {
        let {
            block: o,
            chain: c = e.chain,
            request: l,
            type: u = "eip1559",
          } = n || {},
          f = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: o, client: e, request: l })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (f < 1) throw new t.W();
        let d = f.toString().split(".")[1]?.length ?? 0,
          p = 10 ** d,
          b = (e) => (e * BigInt(Math.round(f * p))) / BigInt(p),
          h = o || (await (0, r.f)(e, a.f, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: o,
            client: e,
            multiply: b,
            request: l,
            type: u,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === u) {
          if ("bigint" != typeof h.baseFeePerGas) throw new t.D();
          let r =
              "bigint" == typeof l?.maxPriorityFeePerGas
                ? l.maxPriorityFeePerGas
                : await s(e, { block: h, chain: c, request: l }),
            n = b(h.baseFeePerGas);
          return {
            maxFeePerGas: l?.maxFeePerGas ?? n + r,
            maxPriorityFeePerGas: r,
          };
        }
        return {
          gasPrice: l?.gasPrice ?? b(await (0, r.f)(e, i, "getGasPrice")({})),
        };
      }
      e.s(["f", 0, i], 111047),
        e.s(["D", 0, o, "o", 0, s], 194720),
        e.s(["w", 0, c, "p", 0, l], 972960);
    },
    484734,
    (e) => {
      e.s(["f", () => f]);
      var t = e.i(189991),
        r = e.i(569934),
        n = e.i(89788),
        a = e.i(675107),
        i = e.i(205789),
        o = e.i(264404),
        s = e.i(190521),
        c = e.i(826051),
        l = e.i(353464),
        u = e.i(368941);
      async function f(e, f) {
        let { account: d = e.account, prepare: p = !0 } = f,
          b = d ? (0, t.f)(d) : void 0,
          h =
            void 0 !== f.stateOverride ||
            "bigint" == typeof f.blockNumber ||
            void 0 !== f.blockTag,
          g = Array.isArray(p)
            ? p
            : b?.type !== "local" || h
            ? ["blobVersionedHashes"]
            : void 0;
        try {
          let t = await (async () =>
              f.to
                ? f.to
                : f.authorizationList && f.authorizationList.length > 0
                ? await (0, n.f)({
                    authorization: f.authorizationList[0],
                  }).catch(() => {
                    throw new r.L(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)(),
            {
              accessList: i,
              authorizationList: d,
              blobs: m,
              blobVersionedHashes: y,
              blockNumber: v,
              blockTag: w,
              data: P,
              gas: x,
              gasPrice: E,
              maxFeePerBlobGas: A,
              maxFeePerGas: $,
              maxPriorityFeePerGas: T,
              nonce: M,
              value: F,
              stateOverride: j,
              ...O
            } = p ? await (0, u.i)(e, { ...f, parameters: g, to: t }) : f;
          if (x && f.gas !== x && !h) return x;
          let k = ("bigint" == typeof v ? (0, a.N)(v) : void 0) || w,
            R = (0, c.f)(j);
          (0, l.f)(f);
          let G = e.chain?.formatters?.transactionRequest?.format,
            I = (G || s.F)(
              {
                ...(0, o.f)(O, { format: G }),
                account: b,
                accessList: i,
                authorizationList: d,
                blobs: m,
                blobVersionedHashes: y,
                data: P,
                gasPrice: E,
                maxFeePerBlobGas: A,
                maxFeePerGas: $,
                maxPriorityFeePerGas: T,
                nonce: M,
                to: t,
                value: F,
              },
              "estimateGas"
            );
          return BigInt(
            await e.request({
              method: "eth_estimateGas",
              params: R
                ? [I, k ?? e.experimental_blockTag ?? "latest", R]
                : k
                ? [I, k]
                : [I],
            })
          );
        } catch (t) {
          throw (0, i.f)(t, { ...f, account: b, chain: e.chain });
        }
      }
    },
    818249,
    (e) => {
      var t = e.i(189991),
        r = e.i(170222),
        n = e.i(393702),
        a = e.i(10725),
        i = e.i(264404),
        o = e.i(982191),
        s = e.i(190521),
        c = e.i(467125),
        l = e.i(353464),
        u = e.i(915588),
        f = e.i(975948);
      async function d(e, d) {
        let {
            account: p = e.account,
            accessList: b,
            authorizationList: h,
            chain: g = e.chain,
            blobVersionedHashes: m,
            blobs: y,
            data: v,
            gas: w,
            gasPrice: P,
            maxFeePerBlobGas: x,
            maxFeePerGas: E,
            maxPriorityFeePerGas: A,
            nonce: $,
            nonceManager: T,
            to: M,
            type: F,
            value: j,
            ...O
          } = d,
          k = await (async () => {
            if (!p || !T || void 0 !== $) return $;
            let r = (0, t.f)(p),
              n = g ? g.id : await (0, c.f)(e, f.f, "getChainId")({});
            return await T.consume({
              address: r.address,
              chainId: n,
              client: e,
            });
          })();
        (0, l.f)(d);
        let R = g?.formatters?.transactionRequest?.format,
          G = (R || s.F)(
            {
              ...(0, i.f)(O, { format: R }),
              account: p ? (0, t.f)(p) : void 0,
              accessList: b,
              authorizationList: h,
              blobs: y,
              blobVersionedHashes: m,
              data: v,
              gas: w,
              gasPrice: P,
              maxFeePerBlobGas: x,
              maxFeePerGas: E,
              maxPriorityFeePerGas: A,
              nonce: k,
              to: M,
              type: F,
              value: j,
            },
            "fillTransaction"
          );
        try {
          let t = await e.request({
              method: "eth_fillTransaction",
              params: [G],
            }),
            a = (g?.formatters?.transaction?.format || o.F)(t.tx);
          delete a.blockHash,
            delete a.blockNumber,
            delete a.r,
            delete a.s,
            delete a.transactionIndex,
            delete a.v,
            delete a.yParity,
            void 0 !== a.maxFeePerGas && delete a.gasPrice,
            (a.data = a.input);
          let i =
            void 0 !== a.feePayerSignature && null !== a.feePayerSignature;
          if (i && void 0 !== k && BigInt(a.nonce) !== BigInt(k))
            throw new n.b({ filledNonce: a.nonce, requestedNonce: k });
          if (!i) {
            a.gas && (a.gas = d.gas ?? a.gas),
              a.gasPrice && (a.gasPrice = d.gasPrice ?? a.gasPrice),
              a.maxFeePerBlobGas &&
                (a.maxFeePerBlobGas = d.maxFeePerBlobGas ?? a.maxFeePerBlobGas),
              a.maxFeePerGas &&
                (a.maxFeePerGas = d.maxFeePerGas ?? a.maxFeePerGas),
              a.maxPriorityFeePerGas &&
                (a.maxPriorityFeePerGas =
                  d.maxPriorityFeePerGas ?? a.maxPriorityFeePerGas),
              void 0 !== a.nonce &&
                void 0 !== d.nonce &&
                (a.nonce =
                  "bigint" == typeof a.nonce ? BigInt(d.nonce) : d.nonce);
            let t = await (async () => {
              if ("function" == typeof g?.fees?.baseFeeMultiplier) {
                let t = await (0, c.f)(e, u.f, "getBlock")({});
                return g.fees.baseFeeMultiplier({
                  block: t,
                  client: e,
                  request: d,
                });
              }
              return g?.fees?.baseFeeMultiplier ?? 1.2;
            })();
            if (t < 1) throw new r.W();
            let n = t.toString().split(".")[1]?.length ?? 0,
              i = 10 ** n,
              o = (e) => (e * BigInt(Math.round(t * i))) / BigInt(i);
            a.maxFeePerGas &&
              !d.maxFeePerGas &&
              (a.maxFeePerGas = o(a.maxFeePerGas)),
              a.gasPrice && !d.gasPrice && (a.gasPrice = o(a.gasPrice));
          }
          return {
            raw: t.raw,
            transaction: { from: G.from, ...a },
            ...(t.capabilities ? { capabilities: t.capabilities } : {}),
          };
        } catch (t) {
          throw (0, a.f)(t, { ...d, chain: e.chain });
        }
      }
      e.s(["f", 0, d]);
    },
    915588,
    57351,
    (e) => {
      var t = e.i(569934);
      class r extends t.L {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = "Block";
          e && (r = `Block at hash "${e}"`),
            t && (r = `Block at number "${t}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
      e.s(["f", 0, r], 57351);
      var n = e.i(675107),
        a = e.i(557874);
      async function i(
        e,
        {
          blockHash: t,
          blockNumber: o,
          blockTag: s = e.experimental_blockTag ?? "latest",
          includeTransactions: c,
        } = {}
      ) {
        let l = c ?? !1,
          u = void 0 !== o ? (0, n.N)(o) : void 0,
          f = null;
        if (
          !(f = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, l] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: "eth_getBlockByNumber", params: [u || s, l] },
                { dedupe: !!u }
              ))
        )
          throw new r({ blockHash: t, blockNumber: o });
        return (e.chain?.formatters?.block?.format || a.K)(f, "getBlock");
      }
      e.s(["f", 0, i], 915588);
    },
    975948,
    (e) => {
      var t = e.i(450323);
      async function r(e) {
        let r = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, t.T)(r);
      }
      e.s(["f", 0, r]);
    },
    937445,
    (e) => {
      var t = e.i(606580),
        r = e.i(450323);
      async function n(
        e,
        {
          address: a,
          blockHash: i,
          blockNumber: o,
          blockTag: s = "latest",
          requireCanonical: c,
        }
      ) {
        let l = (0, t.f)({
            blockHash: i,
            blockNumber: o,
            blockTag: s,
            requireCanonical: c,
          }),
          u = await e.request(
            { method: "eth_getTransactionCount", params: [a, l] },
            { dedupe: "bigint" == typeof o || void 0 !== i }
          );
        return (0, r.T)(u);
      }
      e.s(["f", 0, n]);
    },
    388750,
    (e) => {
      var t = e.i(600547),
        r = e.i(656679),
        n = e.i(807749),
        a = e.i(467125),
        i = e.i(989509);
      async function o(e, o) {
        let { abi: s, address: c, args: l, functionName: u, ...f } = o,
          d = (0, r.f)({ abi: s, args: l, functionName: u });
        try {
          let { data: r } = await (0, a.f)(
            e,
            i.g,
            "call"
          )({ ...f, data: d, to: c });
          return (0, t.f)({
            abi: s,
            args: l,
            functionName: u,
            data: r || "0x",
          });
        } catch (e) {
          throw (0, n.f)(e, {
            abi: s,
            address: c,
            args: l,
            docsPath: "/docs/contract/readContract",
            functionName: u,
          });
        }
      }
      e.s(["f", 0, o]);
    },
    368941,
    (e) => {
      e.s(["v", () => y, "i", () => P]);
      var t = e.i(189991),
        r = e.i(972960),
        n = e.i(484734),
        a = e.i(915588),
        i = e.i(937445),
        o = e.i(170222),
        s = e.i(393702),
        c = e.i(94371),
        l = e.i(49810),
        u = e.i(883031),
        f = e.i(310538),
        d = e.i(467125),
        p = e.i(976677),
        b = e.i(353464),
        h = e.i(576213),
        g = e.i(818249),
        m = e.i(975948);
      let y = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        v = new Map(),
        w = new p.f(128);
      async function P(e, p) {
        let P,
          x,
          E = p;
        (E.account ??= e.account), (E.parameters ??= y);
        let {
            account: A,
            chain: $ = e.chain,
            nonceManager: T,
            parameters: M,
          } = E,
          F =
            "function" == typeof $?.prepareTransactionRequest
              ? {
                  fn: $.prepareTransactionRequest,
                  runAt: ["beforeFillTransaction"],
                }
              : Array.isArray($?.prepareTransactionRequest)
              ? {
                  fn: $.prepareTransactionRequest[0],
                  runAt: $.prepareTransactionRequest[1].runAt,
                }
              : void 0;
        async function j() {
          return (
            P ||
            (void 0 !== E.chainId
              ? E.chainId
              : $
              ? $.id
              : (P = await (0, d.f)(e, m.f, "getChainId")({})))
          );
        }
        let O = A ? (0, t.f)(A) : A,
          k = E.nonce;
        if (F?.fn && F.runAt?.includes("beforeFillTransaction")) {
          (E = await F.fn(
            { ...E, chain: $ },
            { client: e, phase: "beforeFillTransaction" }
          )),
            (k ??= E.nonce);
          let r = E.account ?? E.from;
          O = r ? (0, t.f)(r) : void 0;
        }
        if (M.includes("nonce") && void 0 === k && O && T) {
          let t = await j();
          k = await T.consume({ address: O.address, chainId: t, client: e });
        }
        let R =
          (!(M.includes("blobVersionedHashes") || M.includes("sidecars")) ||
            !E.kzg ||
            !E.blobs) &&
          ((M.length > 0 &&
            "feePayer" in E &&
            E.feePayer &&
            (!("feePayerSignature" in E) || !E.feePayerSignature)) ||
            (!1 !== w.get(e.uid) &&
              ["fees", "gas"].some((e) => M.includes(e)) &&
              ((M.includes("chainId") && "number" != typeof E.chainId) ||
                (M.includes("nonce") && "number" != typeof k) ||
                (M.includes("fees") &&
                  "bigint" != typeof E.gasPrice &&
                  ("bigint" != typeof E.maxFeePerGas ||
                    "bigint" != typeof E.maxPriorityFeePerGas)) ||
                (M.includes("gas") && "bigint" != typeof E.gas))))
            ? await (0, d.f)(
                e,
                g.f,
                "fillTransaction"
              )({ ...E, nonce: k })
                .then((t) => {
                  let {
                      chainId: r,
                      from: n,
                      gas: a,
                      gasPrice: i,
                      nonce: o,
                      maxFeePerBlobGas: s,
                      maxFeePerGas: c,
                      maxPriorityFeePerGas: l,
                      type: u,
                      ...f
                    } = t.transaction,
                    d = "feeToken" in f ? f.feeToken : void 0,
                    p =
                      "feePayerSignature" in f &&
                      null !== f.feePayerSignature &&
                      void 0 !== f.feePayerSignature,
                    b = null != d && (!("feeToken" in E) || p);
                  w.set(e.uid, !0);
                  let { feeToken: h, ...g } = E;
                  return {
                    ...(p ? g : E),
                    ...(n ? { from: n } : {}),
                    ...(u && !E.type ? { type: u } : {}),
                    ...(void 0 !== r ? { chainId: r } : {}),
                    ...(void 0 !== a ? { gas: a } : {}),
                    ...(void 0 !== i ? { gasPrice: i } : {}),
                    ...(void 0 !== o ? { nonce: o } : {}),
                    ...(void 0 !== s &&
                    "legacy" !== E.type &&
                    "eip2930" !== E.type
                      ? { maxFeePerBlobGas: s }
                      : {}),
                    ...(void 0 !== c &&
                    "legacy" !== E.type &&
                    "eip2930" !== E.type
                      ? { maxFeePerGas: c }
                      : {}),
                    ...(void 0 !== l &&
                    "legacy" !== E.type &&
                    "eip2930" !== E.type
                      ? { maxPriorityFeePerGas: l }
                      : {}),
                    ...("nonceKey" in f && void 0 !== f.nonceKey
                      ? { nonceKey: f.nonceKey }
                      : {}),
                    ...("validBefore" in f &&
                    null !== f.validBefore &&
                    void 0 !== f.validBefore
                      ? { validBefore: f.validBefore }
                      : {}),
                    ...("validAfter" in f &&
                    null !== f.validAfter &&
                    void 0 !== f.validAfter
                      ? { validAfter: f.validAfter }
                      : {}),
                    ...("keyAuthorization" in f &&
                    void 0 !== f.keyAuthorization &&
                    null !== f.keyAuthorization &&
                    !("keyAuthorization" in E)
                      ? { keyAuthorization: f.keyAuthorization }
                      : {}),
                    ...("feePayerSignature" in f &&
                    void 0 !== f.feePayerSignature &&
                    null !== f.feePayerSignature
                      ? { feePayerSignature: f.feePayerSignature }
                      : {}),
                    ...(b ? { feeToken: d } : {}),
                    ...(t.capabilities
                      ? { _capabilities: t.capabilities }
                      : {}),
                  };
                })
                .catch((t) => {
                  if ("TransactionExecutionError" !== t.name) return E;
                  if (
                    t.walk?.((e) => e instanceof s.b) ||
                    t.walk?.((e) => "ExecutionRevertedError" === e.name)
                  )
                    throw t;
                  return (
                    t.walk?.(
                      (e) =>
                        "MethodNotFoundRpcError" === e.name ||
                        "MethodNotSupportedRpcError" === e.name ||
                        e.message?.includes(
                          "eth_fillTransaction is not available"
                        )
                    ) && w.set(e.uid, !1),
                    E
                  );
                })
            : E;
        k ??= R.nonce;
        let {
          blobs: G,
          gas: I,
          kzg: N,
          type: B,
        } = (E = {
          ...R,
          ...(O ? { from: O?.address } : {}),
          ...(void 0 !== k ? { nonce: k } : {}),
        });
        async function L() {
          return (
            x ||
            (x = await (0, d.f)(e, a.f, "getBlock")({ blockTag: "latest" }))
          );
        }
        if (
          (F?.fn &&
            F.runAt?.includes("beforeFillParameters") &&
            (E = await F.fn(
              { ...E, chain: $ },
              { client: e, phase: "beforeFillParameters" }
            )),
          M.includes("nonce") &&
            void 0 === k &&
            O &&
            !T &&
            (E.nonce = await (0, d.f)(
              e,
              i.f,
              "getTransactionCount"
            )({ address: O.address, blockTag: "pending" })),
          (M.includes("blobVersionedHashes") || M.includes("sidecars")) &&
            G &&
            N)
        ) {
          let e = (0, c.f)({ blobs: G, kzg: N });
          if (M.includes("blobVersionedHashes")) {
            let t = (0, u.f)({ commitments: e, to: "hex" });
            E.blobVersionedHashes = t;
          }
          if (M.includes("sidecars")) {
            let t = (0, l.f)({ blobs: G, commitments: e, kzg: N }),
              r = (0, f.f)({ blobs: G, commitments: e, proofs: t, to: "hex" });
            E.sidecars = r;
          }
        }
        if (
          (M.includes("chainId") && (E.chainId = await j()),
          (M.includes("fees") || M.includes("type")) && void 0 === B)
        )
          try {
            E.type = (0, h.f)(E);
          } catch {
            let t = v.get(e.uid);
            if (void 0 === t) {
              let r = await L();
              (t = "bigint" == typeof r?.baseFeePerGas), v.set(e.uid, t);
            }
            E.type = t ? "eip1559" : "legacy";
          }
        if (M.includes("fees"))
          if ("legacy" !== E.type && "eip2930" !== E.type) {
            if (
              void 0 === E.maxFeePerGas ||
              void 0 === E.maxPriorityFeePerGas
            ) {
              let t = await L(),
                { maxFeePerGas: n, maxPriorityFeePerGas: a } = await (0, r.p)(
                  e,
                  { block: t, chain: $, request: E }
                );
              if (
                void 0 === E.maxPriorityFeePerGas &&
                "bigint" == typeof E.maxFeePerGas &&
                E.maxFeePerGas < a
              )
                throw new o.C({ maxPriorityFeePerGas: a });
              (E.maxPriorityFeePerGas = a), (E.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== E.maxFeePerGas || void 0 !== E.maxPriorityFeePerGas)
              throw new o.D();
            if (void 0 === E.gasPrice) {
              let t = await L(),
                { gasPrice: n } = await (0, r.p)(e, {
                  block: t,
                  chain: $,
                  request: E,
                  type: "legacy",
                });
              E.gasPrice = n;
            }
          }
        return (
          M.includes("gas") &&
            void 0 === I &&
            (E.gas = await (0, d.f)(
              e,
              n.f,
              "estimateGas"
            )({
              ...E,
              account: O,
              prepare: O?.type === "local" ? [] : ["blobVersionedHashes"],
            })),
          F?.fn &&
            F.runAt?.includes("afterFillParameters") &&
            (E = await F.fn(
              { ...E, chain: $ },
              { client: e, phase: "afterFillParameters" }
            )),
          (0, b.f)(E),
          delete E.parameters,
          E
        );
      }
    },
    638291,
    (e) => {
      async function t(e, { serializedTransaction: r }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [r] },
          { retryCount: 0 }
        );
      }
      e.s(["f", 0, t]);
    },
    611573,
    (e) => {
      var t = e.i(569934);
      class r extends t.L {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class n extends t.L {
        constructor({ docsPath: e, metaMessages: t, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
      e.s(["A", 0, r, "c", 0, n]);
    },
    170222,
    (e) => {
      var t = e.i(976486),
        r = e.i(569934);
      class n extends r.L {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class a extends r.L {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class i extends r.L {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            t.f)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
      e.s(["W", 0, n, "D", 0, a, "C", 0, i]);
    },
    853532,
    976486,
    (e) => {
      var t = e.i(657256);
      function r(e, n = "wei") {
        return t.C(e, n);
      }
      e.s(["f", 0, r], 976486);
      var n = e.i(569934);
      class a extends n.L {
        constructor({ cause: e, message: t } = {}) {
          let r = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(a, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(a, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted|gas required exceeds allowance/,
        });
      class i extends n.L {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              "bigint" == typeof t ? ` = ${r(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(i, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class o extends n.L {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              "bigint" == typeof t ? ` = ${r(t)} gwei` : ""
            }) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class s extends n.L {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class c extends n.L {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends n.L {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class u extends n.L {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /insufficient funds|exceeds transaction sender account balance|outoffunds/,
      });
      class f extends n.L {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class d extends n.L {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends n.L {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends n.L {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              "bigint" == typeof t ? ` = ${r(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              "bigint" == typeof n ? ` = ${r(n)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class h extends n.L {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
      e.s(
        [
          "s",
          0,
          a,
          "k",
          0,
          i,
          "L",
          0,
          o,
          "y",
          0,
          u,
          "D",
          0,
          f,
          "m",
          0,
          d,
          "G",
          0,
          l,
          "e",
          0,
          s,
          "q",
          0,
          c,
          "M",
          0,
          b,
          "N",
          0,
          p,
          "b",
          0,
          h,
        ],
        853532
      );
    },
    1299,
    (e) => {
      var t = e.i(34888),
        r = e.i(569934),
        n = e.i(363710);
      class a extends r.L {
        constructor({
          body: e,
          cause: r,
          details: a,
          headers: i,
          status: o,
          url: s,
        }) {
          super("HTTP request failed.", {
            cause: r,
            details: a,
            metaMessages: [
              o && `Status: ${o}`,
              `URL: ${(0, n.p)(s)}`,
              e && `Request body: ${(0, t.f)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = i),
            (this.status = o),
            (this.url = s);
        }
      }
      class i extends r.L {
        constructor({ maxSize: e, size: t }) {
          super("HTTP response body exceeded the size limit.", {
            metaMessages: [`Max: ${e} bytes`, `Received: ${t} bytes`],
            name: "ResponseBodyTooLargeError",
          }),
            Object.defineProperty(this, "maxSize", {
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
            (this.maxSize = e),
            (this.size = t);
        }
      }
      class o extends r.L {
        constructor({ body: e, cause: r, details: a, url: i }) {
          super("WebSocket request failed.", {
            cause: r,
            details: a,
            metaMessages: [
              `URL: ${(0, n.p)(i)}`,
              e && `Request body: ${(0, t.f)(e)}`,
            ].filter(Boolean),
            name: "WebSocketRequestError",
          }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.url = i);
        }
      }
      class s extends r.L {
        constructor({ body: e, error: r, headers: a, status: i, url: o }) {
          super("RPC Request failed.", {
            cause: r,
            details: r.message,
            metaMessages: [
              i && `Status: ${i}`,
              `URL: ${(0, n.p)(o)}`,
              `Request body: ${(0, t.f)(e)}`,
            ].filter(Boolean),
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
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
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = r.code),
            (this.data = r.data),
            (this.headers = a),
            (this.status = i),
            (this.url = o);
        }
      }
      class c extends r.L {
        constructor({ url: e } = {}) {
          super("The socket has been closed.", {
            metaMessages: [e && `URL: ${(0, n.p)(e)}`].filter(Boolean),
            name: "SocketClosedError",
          }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.url = e);
        }
      }
      class l extends r.L {
        constructor({ body: e, url: r }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, n.p)(r)}`,
              `Request body: ${(0, t.f)(e)}`,
            ],
            name: "TimeoutError",
          }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.url = r);
        }
      }
      e.s(["y", 0, a, "S", 0, i, "V", 0, s, "A", 0, c, "t", 0, l, "n", 0, o]);
    },
    383856,
    (e) => {
      var t = e.i(569934),
        r = e.i(1299);
      class n extends t.L {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: a, name: i, shortMessage: o }
        ) {
          super(o, {
            cause: e,
            docsPath: n,
            metaMessages: a || e?.metaMessages,
            name: i || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = i || e.name),
            (this.code = e instanceof r.V ? e.code : t ?? -1);
        }
      }
      class a extends n {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class i extends n {
        constructor(e) {
          super(e, {
            code: i.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(i, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class o extends n {
        constructor(e) {
          super(e, {
            code: o.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class s extends n {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: s.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class c extends n {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class l extends n {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class u extends n {
        constructor(e) {
          super(e, {
            code: u.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends n {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class d extends n {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class p extends n {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class b extends n {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: b.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class h extends n {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends n {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class m extends a {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class y extends a {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class v extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: v.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class x extends a {
        constructor(e) {
          super(e, {
            code: x.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class A extends a {
        constructor(e) {
          super(e, {
            code: A.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class $ extends a {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class T extends a {
        constructor(e) {
          super(e, {
            code: T.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(T, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class M extends a {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class F extends a {
        constructor(e) {
          super(e, {
            code: F.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(F, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class j extends a {
        constructor(e) {
          super(e, {
            code: j.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(j, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class O extends a {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "WalletConnectSessionSettlementError",
            shortMessage: "WalletConnect session settlement failed.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 7e3,
      }),
        e.s([
          "Z",
          0,
          F,
          "T",
          0,
          j,
          "Y",
          0,
          M,
          "r",
          0,
          P,
          "a",
          0,
          $,
          "D",
          0,
          l,
          "L",
          0,
          u,
          "u",
          0,
          c,
          "P",
          0,
          o,
          "J",
          0,
          g,
          "H",
          0,
          h,
          "X",
          0,
          s,
          "b",
          0,
          b,
          "Q",
          0,
          i,
          "p",
          0,
          w,
          "R",
          0,
          a,
          "V",
          0,
          f,
          "j",
          0,
          d,
          "U",
          0,
          n,
          "S",
          0,
          x,
          "g",
          0,
          p,
          "$",
          0,
          y,
          "s",
          0,
          T,
          "W",
          0,
          class extends n {
            constructor(e) {
              super(e, {
                name: "UnknownRpcError",
                shortMessage: "An unknown RPC error occurred.",
              });
            }
          },
          "d",
          0,
          A,
          "E",
          0,
          E,
          "q",
          0,
          v,
          "k",
          0,
          m,
          "B",
          0,
          O,
        ]);
    },
    363710,
    (e) => {
      e.s([
        "l",
        0,
        function (e) {
          if (e?.reason) return e.reason;
          if ("function" == typeof DOMException)
            return new DOMException("This operation was aborted", "AbortError");
          let t = Error("This operation was aborted");
          return (t.name = "AbortError"), t;
        },
        "m",
        0,
        (e) => e,
        "p",
        0,
        (e) => {
          try {
            let t = new URL(e);
            if (!t.username && !t.password) return e;
            return (t.username = ""), (t.password = ""), t.toString();
          } catch {
            return e;
          }
        },
        "c",
        0,
        function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "name" in e &&
            "AbortError" === e.name
          );
        },
      ]);
    },
    656679,
    627173,
    237497,
    (e) => {
      var t = e.i(147526),
        r = e.i(704434),
        n = e.i(70204),
        a = e.i(879617),
        i = e.i(332881),
        o = e.i(880841),
        s = e.i(796516),
        c = e.i(401319),
        l = e.i(774620);
      function u(e) {
        let t,
          { abi: i, args: u = [], name: d } = e,
          p = (0, o.f)(d, { strict: !1 }),
          b = i.filter((e) =>
            p
              ? "function" === e.type
                ? (0, a.f)(e) === d
                : "event" === e.type && (0, l.f)(e) === d
              : "name" in e && e.name === d
          );
        if (0 !== b.length) {
          if (1 === b.length) return b[0];
          for (let e of b) {
            if ("inputs" in e) {
              if (!u || 0 === u.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === u.length &&
                u.every((t, n) => {
                  let a = "inputs" in e && e.inputs[n];
                  return (
                    !!a &&
                    (function e(t, n) {
                      let a = typeof t,
                        i = n.type;
                      switch (i) {
                        case "address":
                          return (0, s.f)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === a;
                        case "function":
                        case "string":
                          return "string" === a;
                        default: {
                          if ("tuple" === i && "components" in n)
                            return Object.values(n.components).every(
                              (r, n) => "object" === a && e(f(t, r, n), r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          ) {
                            if (
                              ("bigint" != typeof t && "number" != typeof t) ||
                              ("number" == typeof t && !Number.isInteger(t))
                            )
                              return !1;
                            let e = i.startsWith("int"),
                              r = Number.parseInt(
                                i.replace(/^u?int/, "") || "256",
                                10
                              ),
                              n = 2n ** (BigInt(r) - (e ? 1n : 0n)) - 1n;
                            return t >= (e ? -n - 1n : 0n) && t <= n;
                          }
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)) {
                            if (
                              "string" != typeof t &&
                              !(t instanceof Uint8Array)
                            )
                              return !1;
                            let e = i.slice(5);
                            if (!e) return !0;
                            if ("string" == typeof t && !(0, o.f)(t)) return !1;
                            return (0, c.f)(t) === Number.parseInt(e, 10);
                          }
                          let s = (0, r.t)(i);
                          if (s) {
                            let [r, a] = s;
                            return (
                              Array.isArray(t) &&
                              (null === r || t.length === r) &&
                              t.every((t) => e(t, { ...n, type: a }))
                            );
                          }
                          return !1;
                        }
                      }
                    })(t, a)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let a = (function e(t, n, a) {
                    for (let i in t) {
                      let o = t[i],
                        c = n[i];
                      if (!c) continue;
                      if (
                        "tuple" === o.type &&
                        "tuple" === c.type &&
                        "components" in o &&
                        "components" in c
                      ) {
                        let t = a[i],
                          r = e(
                            o.components,
                            c.components,
                            o.components.map((e, r) => f(t, e, r))
                          );
                        if (r) return r;
                        continue;
                      }
                      let l = (0, r.t)(o.type),
                        u = (0, r.t)(c.type);
                      if (l && u) {
                        let t = e(
                          [{ ...o, type: l[1] }],
                          [{ ...c, type: u[1] }],
                          [a[i]?.[0]]
                        );
                        if (t) return t;
                        if (l[1] === u[1] && o.type !== c.type)
                          return [o.type, c.type];
                        continue;
                      }
                      let d = [o.type, c.type],
                        p = a[i];
                      if (
                        d.includes("address") &&
                        (d.includes("string") || d.includes("bytes"))
                          ? void 0 === p || (0, s.f)(p, { strict: !1 })
                          : o.type !== c.type
                      )
                        return d;
                    }
                  })(e.inputs, t.inputs, u);
                  if (a)
                    throw new n.r(
                      { abiItem: e, type: a[0] },
                      { abiItem: t, type: a[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || b[0];
        }
      }
      function f(e, t, r) {
        return Array.isArray(e) ? e[r] : e?.[t.name];
      }
      e.s(["f", 0, u], 627173);
      let d = "/docs/contract/encodeFunctionData";
      function p(e) {
        let { abi: t, args: r, functionName: o } = e,
          s = t[0];
        if (o) {
          let e = u({ abi: t, args: r, name: o });
          if (!e) throw new n.$(o, { docsPath: d });
          s = e;
        }
        if ("function" !== s.type) throw new n.$(void 0, { docsPath: d });
        return { abi: [s], functionName: (0, a.f)((0, i.r)(s)) };
      }
      e.s(["f", 0, p], 237497),
        e.s(
          [
            "f",
            0,
            function (e) {
              let { args: n } = e,
                { abi: a, functionName: i } =
                  1 === e.abi.length && e.functionName?.startsWith("0x")
                    ? e
                    : p(e),
                o = a[0],
                s =
                  "inputs" in o && o.inputs
                    ? (0, r.N)(o.inputs, n ?? [])
                    : void 0;
              return (0, t.s)([i, s ?? "0x"]);
            },
          ],
          656679
        );
    },
    897282,
    222427,
    (e) => {
      var t = e.i(806685),
        r = e.i(769936),
        n = e.i(856324),
        a = e.i(831095),
        i = e.i(774620),
        o = e.i(342692),
        s = e.i(70204),
        c = e.i(569934),
        l = e.i(493429),
        u = e.i(401319),
        f = e.i(249311),
        d = e.i(332881);
      let p = "/docs/contract/decodeEventLog";
      function b(e) {
        var t, r, n;
        let { abi: a, data: o, eventName: c, strict: b, topics: g } = e,
          m = a.filter((e) => "event" === e.type && "name" in e),
          y = g[0],
          v = y
            ? m.find((e) => !e.anonymous && y === (0, i.f)((0, d.r)(e)))
            : void 0,
          w = v
            ? [v]
            : ((t = m),
              (r = g.length),
              ((n = c)
                ? t.filter((e) => e.name === n)
                : t.every((e) => e.anonymous)
                ? t
                : []
              ).filter((e) => {
                var t;
                return (
                  e.anonymous &&
                  ((t = e),
                  (t.inputs?.filter((e) => e.indexed).length ?? 0) === r)
                );
              }));
        if (w.length > 1) throw new h(w.map((e) => e.name));
        let P = w[0];
        if (!P) {
          if (!y) throw new s.R({ docsPath: p });
          throw new s.u(y, { docsPath: p });
        }
        return (function ({ abiItem: e, argTopics: t, data: r, strict: n }) {
          let { name: a, inputs: i } = e,
            o = i?.some((e) => !("name" in e && e.name)),
            c = o ? [] : {},
            d = i
              .map((e, t) => [e, t])
              .filter(([e]) => "indexed" in e && e.indexed),
            p = [];
          for (let r = 0; r < d.length; r++) {
            let [a, i] = d[r],
              l = t[r];
            if (!l) {
              if (n) throw new s.s({ abiItem: e, param: a });
              p.push([a, i]);
              continue;
            }
            c[o ? i : a.name || i] = (function ({ param: e, value: t }) {
              return "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.type ||
                e.type.match(/^(.*)\[(\d+)?\]$/)
                ? t
                : ((0, f.f)([e], t) || [])[0];
            })({ param: a, value: l });
          }
          let b = i.filter((e) => !("indexed" in e && e.indexed)),
            h = n ? b : [...p.map(([e]) => e), ...b];
          if (h.length > 0) {
            if (r && "0x" !== r)
              try {
                let e = (0, f.f)(h, r);
                if (e) {
                  let t = 0;
                  if (!n) for (let [r, n] of p) c[o ? n : r.name || n] = e[t++];
                  if (o)
                    for (let r = 0; r < i.length; r++)
                      void 0 === c[r] && t < e.length && (c[r] = e[t++]);
                  else for (let r = 0; r < b.length; r++) c[b[r].name] = e[t++];
                }
              } catch (t) {
                if (n) {
                  if (t instanceof s.D || t instanceof l.n)
                    throw new s.t({
                      abiItem: e,
                      data: r,
                      params: h,
                      size: (0, u.f)(r),
                    });
                  throw t;
                }
              }
            else if (n)
              throw new s.t({ abiItem: e, data: "0x", params: h, size: 0 });
          }
          return {
            eventName: a,
            args: Object.values(c).length > 0 ? c : void 0,
          };
        })({
          abiItem: P,
          argTopics: P.anonymous ? g : g.slice(1),
          data: o,
          strict: b ?? !0,
        });
      }
      class h extends c.L {
        constructor(e) {
          let t = new Set(e).size === e.length;
          super("Ambiguous anonymous event log.", {
            docsPath: p,
            metaMessages: [
              `Matched ${e.map((e) => `\`${e}\``).join(", ")}.`,
              "These events take the same number of indexed topics.",
              t
                ? "Pass `eventName` to choose one."
                : "Pass an `abi` that holds only the event to decode.",
            ],
            name: "AbiEventAmbiguityError",
          });
        }
      }
      e.s(["N", 0, h, "O", 0, b], 222427),
        e.s(
          [
            "f",
            0,
            function (e) {
              let { abi: s, args: c, logs: l, strict: u = !0 } = e,
                f = (() => {
                  if (e.eventName)
                    return Array.isArray(e.eventName)
                      ? e.eventName
                      : [e.eventName];
                })(),
                d = s
                  .filter((e) => "event" === e.type)
                  .map((e) => ({ abi: e, selector: (0, i.f)(e) })),
                p = f
                  ? d.filter((e) => e.abi.anonymous && f.includes(e.abi.name))
                  : d.every((e) => e.abi.anonymous)
                  ? d
                  : [];
              return l
                .map((e) => {
                  let i,
                    s,
                    l = "string" == typeof e.blockNumber ? (0, n.f)(e) : e,
                    h = d.filter(
                      (e) => !e.abi.anonymous && l.topics[0] === e.selector
                    ),
                    g = (() => {
                      if (h.length > 0)
                        return f ? h.filter((e) => f.includes(e.abi.name)) : h;
                      let e = p.filter(
                        (e) =>
                          (e.abi.inputs?.filter((e) => e.indexed).length ??
                            0) === l.topics.length
                      );
                      return 1 === e.length ? e : [];
                    })();
                  if (0 === g.length) return null;
                  for (let e of g)
                    try {
                      (i = b({ ...l, abi: [e.abi], strict: !0 })), (s = e);
                      break;
                    } catch {}
                  if (!i && !u) {
                    let e = g[0];
                    if (!e || e.abi.anonymous) return null;
                    s = e;
                    try {
                      i = b({
                        data: l.data,
                        topics: l.topics,
                        abi: [s.abi],
                        strict: !1,
                      });
                    } catch {
                      let e = s.abi.inputs?.some(
                        (e) => !("name" in e && e.name)
                      );
                      i = { eventName: s.abi.name, args: e ? [] : {} };
                    }
                  }
                  return i &&
                    s &&
                    (!f || f.includes(i.eventName)) &&
                    (function (e) {
                      let {
                        anonymous: n,
                        args: i,
                        inputs: s,
                        matchArgs: c,
                        topics: l,
                      } = e;
                      if (!c) return !0;
                      if (!i) return !1;
                      let u = s
                        .filter((e) => e.indexed)
                        .slice(0, n ? l.length : l.length - 1);
                      function f(e, n, i) {
                        try {
                          if ("address" === e.type) return (0, t.f)(n, i);
                          if (
                            u.includes(e) &&
                            ("string" === e.type || "bytes" === e.type)
                          ) {
                            let t =
                              "string" === e.type ? (0, r.T)(n) : (0, r.D)(n);
                            return (0, a.f)(t) === i;
                          }
                          if (
                            "string" == typeof n &&
                            "string" == typeof i &&
                            o.h.test(e.type)
                          )
                            return n.toLowerCase() === i.toLowerCase();
                          return n === i;
                        } catch {
                          return !1;
                        }
                      }
                      return Array.isArray(i) && Array.isArray(c)
                        ? c.every((e, t) => {
                            if (null == e) return !0;
                            let r = s[t];
                            return (
                              !!r &&
                              (Array.isArray(e) ? e : [e]).some((e) =>
                                f(r, e, i[t])
                              )
                            );
                          })
                        : !(
                            "object" != typeof i ||
                            Array.isArray(i) ||
                            "object" != typeof c ||
                            Array.isArray(c)
                          ) &&
                            Object.entries(c).every(([e, t]) => {
                              if (null == t) return !0;
                              let r = s.find((t) => t.name === e);
                              return (
                                !!r &&
                                (Array.isArray(t) ? t : [t]).some((t) =>
                                  f(r, t, i[e])
                                )
                              );
                            });
                    })({
                      anonymous: s.abi.anonymous,
                      args: i.args,
                      inputs: s.abi.inputs,
                      matchArgs: c,
                      topics: l.topics,
                    })
                    ? { ...i, ...l }
                    : null;
                })
                .filter(Boolean);
            },
          ],
          897282
        );
    },
    89788,
    (e) => {
      var t = e.i(393702),
        r = e.i(418217),
        n = e.i(147526),
        a = e.i(769936),
        i = e.i(675107),
        o = e.i(70326),
        s = e.i(831095);
      async function c(e) {
        let { authorization: c } = e,
          l = e.signature ?? c;
        if (
          "object" == typeof l &&
          "number" == typeof l.yParity &&
          0 !== l.yParity &&
          1 !== l.yParity
        )
          throw new t.n({ yParity: BigInt(l.yParity) });
        return (0, r.f)({
          hash: (function (e) {
            let { chainId: t, nonce: r, to: c } = e,
              l = e.contractAddress ?? e.address,
              u = (0, s.f)(
                (0, n.s)([
                  "0x05",
                  (0, o.C)([t ? (0, i.N)(t) : "0x", l, r ? (0, i.N)(r) : "0x"]),
                ])
              );
            return "bytes" === c ? (0, a.X)(u) : u;
          })(c),
          signature: l,
        });
      }
      e.s(["f", 0, c], 89788);
    },
    807749,
    (e) => {
      var t = e.i(70204),
        r = e.i(569934),
        n = e.i(878023),
        a = e.i(1299),
        i = e.i(383856);
      e.s([
        "f",
        0,
        function (
          e,
          {
            abi: o,
            address: s,
            args: c,
            docsPath: l,
            functionName: u,
            sender: f,
          }
        ) {
          let d =
              e instanceof n.w
                ? e
                : e instanceof r.L
                ? e.walk(
                    (e) => "object" == typeof e && null !== e && "data" in e
                  ) || e.walk()
                : {},
            { code: p, data: b, details: h, message: g, shortMessage: m } = d,
            y =
              e instanceof t.g
                ? new n.v({ functionName: u, cause: e })
                : ([3, i.D.code].includes(p) && (b || h || g || m)) ||
                  (p === i.L.code && "execution reverted" === h && b)
                ? new n.P({
                    abi: o,
                    data: "object" == typeof b ? b.data : b,
                    functionName: u,
                    message: d instanceof a.V ? h : m ?? g,
                    cause: e,
                  })
                : e;
          return new n.h(y, {
            abi: o,
            args: c,
            contractAddress: s,
            docsPath: l,
            functionName: u,
            sender: f,
          });
        },
      ]);
    },
    205789,
    368698,
    (e) => {
      var t = e.i(285973),
        r = e.i(976486),
        n = e.i(569934),
        a = e.i(393702);
      class i extends n.L {
        constructor(
          e,
          {
            account: n,
            docsPath: i,
            chain: o,
            data: s,
            gas: c,
            gasPrice: l,
            maxFeePerGas: u,
            maxPriorityFeePerGas: f,
            nonce: d,
            to: p,
            value: b,
          }
        ) {
          let h = (0, a.P)({
            from: n?.address,
            to: p,
            value:
              void 0 !== b &&
              `${(0, t.f)(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
            data: s,
            gas: c,
            gasPrice: void 0 !== l && `${(0, r.f)(l)} gwei`,
            maxFeePerGas: void 0 !== u && `${(0, r.f)(u)} gwei`,
            maxPriorityFeePerGas: void 0 !== f && `${(0, r.f)(f)} gwei`,
            nonce: d,
          });
          super(e.shortMessage, {
            cause: e,
            docsPath: i,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              h,
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      e.s(["f", 0, i], 368698);
      var o = e.i(853532),
        s = e.i(467078);
      e.s(
        [
          "f",
          0,
          function (e, { docsPath: t, ...r }) {
            let n;
            return new i((n = (0, s.f)(e, r)) instanceof o.b ? e : n, {
              docsPath: t,
              ...r,
            });
          },
        ],
        205789
      );
    },
    10725,
    (e) => {
      var t = e.i(853532),
        r = e.i(393702),
        n = e.i(467078);
      e.s([
        "f",
        0,
        function (e, { docsPath: a, ...i }) {
          let o,
            s = (o = (0, n.f)(e, i)) instanceof t.b ? e : o;
          return new r.U(s, { docsPath: a, ...i });
        },
      ]);
    },
    467125,
    (e) => {
      e.s([
        "f",
        0,
        function (e, t, r) {
          let n = e[t.name];
          if ("function" == typeof n) return n;
          let a = e[r];
          return "function" == typeof a ? a : (r) => t(e, r);
        },
      ]);
    },
    774620,
    (e) => {
      let t = e.i(926336).f;
      e.s(["f", 0, t]);
    },
    879617,
    (e) => {
      var t = e.i(790063),
        r = e.i(926336);
      e.s(["f", 0, (e) => (0, t.M)((0, r.f)(e), 0, 4)]);
    },
    926336,
    788035,
    525908,
    766564,
    685185,
    (e) => {
      function t(e, t) {
        let r = e.exec(t);
        return r?.groups;
      }
      e.s(
        [
          "h",
          0,
          /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
          "q",
          0,
          t,
          "x",
          0,
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
          "S",
          0,
          /^\(.+?\).*?$/,
        ],
        788035
      );
      let r = /^tuple(?<array>(\[(\d*)\])*)$/;
      function n(e) {
        let n = "",
          a = e.length;
        for (let i = 0; i < a; i++)
          (n += (function e(n) {
            let a = n.type;
            if (r.test(n.type) && "components" in n) {
              a = "(";
              let i = n.components.length;
              for (let t = 0; t < i; t++)
                (a += e(n.components[t])), t < i - 1 && (a += ", ");
              let o = t(r, n.type);
              return (a += `)${o?.array || ""}`), e({ ...n, type: a });
            }
            return ("indexed" in n && n.indexed && (a = `${a} indexed`), n.name)
              ? `${a} ${n.name}`
              : a;
          })(e[i])),
            i !== a - 1 && (n += ", ");
        return n;
      }
      function a(e) {
        return "function" === e.type
          ? `function ${e.name}(${n(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${n(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${n(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${n(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${n(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
      e.s(["f", 0, n], 525908), e.s(["f", 0, a], 766564);
      var i = e.i(976677),
        o = e.i(769936),
        s = e.i(831095),
        c = e.i(569934);
      let l = (e) =>
        (function (e) {
          let t = !0,
            r = "",
            n = 0,
            a = "",
            i = !1;
          for (let o = 0; o < e.length; o++) {
            let s = e[o];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && n++,
              ")" === s && n--,
              t)
            ) {
              if (0 === n) {
                if (" " === s && ["event", "function", "error", ""].includes(a))
                  a = "";
                else if (((a += s), ")" === s)) {
                  i = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                r.endsWith(",") || r.endsWith("(") || ((r = ""), (t = !1));
                continue;
              }
              (a += s), (r += s);
            }
          }
          if (!i) throw new c.L("Unable to normalize signature.");
          return a;
        })("string" == typeof e ? e : a(e));
      e.s(["f", 0, l], 685185);
      let u = new i.f(8192);
      e.s(
        [
          "f",
          0,
          function (e) {
            var t;
            let r = "string" == typeof e ? e : a(e),
              n = u.get(r);
            if (n) return n;
            let i = ((t = l(r)), (0, s.f)((0, o.D)(t)));
            return u.set(r, i), i;
          },
        ],
        926336
      );
    },
    871706,
    509486,
    (e) => {
      function t() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((r, n) => {
            (e = r), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
      e.s(["f", 0, t], 509486);
      let r = new Map();
      e.s(
        [
          "f",
          0,
          function ({
            fn: e,
            id: n,
            shouldSplitBatch: a,
            wait: i = 0,
            sort: o,
          }) {
            let s = async () => {
                let t = l();
                c();
                let r = t.map(({ args: e }) => e);
                0 !== r.length &&
                  e(r)
                    .then((e) => {
                      o && Array.isArray(e) && e.sort(o);
                      for (let r = 0; r < t.length; r++) {
                        let { resolve: n } = t[r];
                        n?.([e[r], e]);
                      }
                    })
                    .catch((e) => {
                      for (let r = 0; r < t.length; r++) {
                        let { reject: n } = t[r];
                        n?.(e);
                      }
                    });
              },
              c = () => r.delete(n),
              l = () => r.get(n) || [],
              u = (e) => r.set(n, [...l(), e]);
            return {
              flush: c,
              async schedule(e) {
                let { promise: r, resolve: n, reject: o } = t();
                return (
                  (a?.([...l().map(({ args: e }) => e), e]) && s(),
                  l().length > 0)
                    ? u({ args: e, resolve: n, reject: o })
                    : (u({ args: e, resolve: n, reject: o }), setTimeout(s, i)),
                  r
                );
              },
            };
          },
        ],
        871706
      );
    },
    657256,
    (e) => {
      let t = { wei: 0, gwei: 9, szabo: 12, finney: 15, ether: 18 };
      function r(e, t = 0) {
        if (!Number.isInteger(t) || t < 0) throw new i({ decimals: t });
        let n = e.toString(),
          a = n.startsWith("-");
        a && (n = n.slice(1));
        let [o, s] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${a ? "-" : ""}${o || "0"}${s ? `.${s}` : ""}`
        );
      }
      function n(e, t = 0) {
        if (!Number.isInteger(t) || t < 0) throw new i({ decimals: t });
        if (!/^-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/.test(e))
          throw new a({ value: e });
        let [r = "", o = "0"] = e.split("."),
          s = r.startsWith("-");
        if (
          (s && (r = r.slice(1)),
          "" === r && (r = "0"),
          (o = o.replace(/(0+)$/, "")),
          0 === t)
        )
          o.length > 0 &&
            Number.parseInt(o[0], 10) >= 5 &&
            (r = `${BigInt(r) + 1n}`),
            (o = "");
        else if (o.length > t) {
          let e = o.slice(0, t);
          if (Number.parseInt(o.slice(t, t + 1), 10) >= 5) {
            let n = (function (e) {
              let t = e.split(""),
                r = t.length - 1;
              for (; r >= 0; ) {
                let e = Number.parseInt(t[r], 10) + 1;
                if (e < 10) return (t[r] = String(e)), t.join("");
                (t[r] = "0"), r--;
              }
              return `1${t.join("")}`;
            })(e);
            n.length > t
              ? ((o = n.slice(1)), (r = `${BigInt(r) + 1n}`))
              : (o = n);
          } else o = e;
        } else o = o.padEnd(t, "0");
        return BigInt(`${s ? "-" : ""}${r}${o}`);
      }
      class a extends Error {
        constructor({ value: e }) {
          super(`Value \`${e}\` is not a valid decimal number.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Value.InvalidDecimalNumberError",
            });
        }
      }
      class i extends Error {
        constructor({ decimals: e }) {
          super(`\`decimals\` must be a non-negative integer. Got \`${e}\`.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Value.InvalidDecimalsError",
            });
        }
      }
      e.s([
        "R",
        0,
        r,
        "i",
        0,
        function (e, n = "wei") {
          return r(e, t.ether - t[n]);
        },
        "C",
        0,
        function (e, n = "wei") {
          return r(e, t.gwei - t[n]);
        },
        "f",
        0,
        n,
        "L",
        0,
        function (e, r = "wei") {
          return n(e, t.ether - t[r]);
        },
        "M",
        0,
        function (e, r = "wei") {
          return n(e, t.gwei - t[r]);
        },
      ]);
    },
    644616,
    (e) => {
      var t = e.i(657256);
      e.s([
        "f",
        0,
        function (e, r) {
          return t.R(e, r);
        },
      ]);
    },
  ]);
})();
