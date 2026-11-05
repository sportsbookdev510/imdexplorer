(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    369121,
    106145,
    668375,
    868750,
    (e) => {
      var t = e.i(189991),
        r = e.i(656679),
        a = e.i(807749),
        n = e.i(467125),
        i = e.i(484734);
      async function o(e, o) {
        let {
            abi: s,
            address: c,
            args: u,
            functionName: l,
            dataSuffix: f = "string" == typeof e.dataSuffix
              ? e.dataSuffix
              : e.dataSuffix?.value,
            ...d
          } = o,
          h = (0, r.f)({ abi: s, args: u, functionName: l });
        try {
          return await (0, n.f)(
            e,
            i.f,
            "estimateGas"
          )({ data: `${h}${f ? f.replace("0x", "") : ""}`, to: c, ...d });
        } catch (r) {
          let e = d.account ? (0, t.f)(d.account) : void 0;
          throw (0, a.f)(r, {
            abi: s,
            address: c,
            args: u,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: l,
            sender: e?.address,
          });
        }
      }
      e.s(["f", 0, o], 369121);
      var s = e.i(600547),
        c = e.i(989509);
      async function u(e, i) {
        let {
            abi: o,
            address: u,
            args: l,
            functionName: f,
            dataSuffix: d = "string" == typeof e.dataSuffix
              ? e.dataSuffix
              : e.dataSuffix?.value,
            ...h
          } = i,
          w = h.account ? (0, t.f)(h.account) : e.account,
          m = (0, r.f)({ abi: o, args: l, functionName: f });
        try {
          let { data: t } = await (0, n.f)(
              e,
              c.g,
              "call"
            )({
              batch: !1,
              data: `${m}${d ? d.replace("0x", "") : ""}`,
              to: u,
              ...h,
              account: w,
            }),
            r = (0, s.f)({ abi: o, args: l, functionName: f, data: t || "0x" }),
            a = o.filter((e) => "name" in e && e.name === i.functionName);
          return {
            result: r,
            request: {
              abi: a,
              address: u,
              args: l,
              dataSuffix: d,
              functionName: f,
              ...h,
              account: w,
            },
          };
        } catch (e) {
          throw (0, a.f)(e, {
            abi: o,
            address: u,
            args: l,
            docsPath: "/docs/contract/simulateContract",
            functionName: f,
            sender: w?.address,
          });
        }
      }
      e.s(["f", 0, u], 106145);
      var l = e.i(752012),
        f = e.i(796516),
        d = e.i(806685),
        h = e.i(644616),
        w = e.i(657256);
      function m(e, t) {
        return w.f(e, t);
      }
      e.s(["f", 0, m], 668375);
      var y = e.i(388750);
      function g(e, t) {
        let { decimals: r, token: a } = t,
          n = p(e, a);
        if (n) return { address: n.address, decimals: r ?? n.decimals };
        if ((0, f.f)(a, { strict: !1 }))
          return {
            address: a,
            decimals:
              r ??
              (function (e, t) {
                let r = e.tokens,
                  a = e.chain?.id;
                if (r && void 0 !== a)
                  for (let e of r) {
                    let r = b(e, a);
                    if (r && (0, d.f)(r.address, t)) return r.decimals;
                  }
              })(e, a),
          };
        throw Error(
          `Token "${a}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`
        );
      }
      function p(e, t) {
        let r = e.tokens,
          a = e.chain?.id;
        if (!r || void 0 === a) return;
        let n = (function (e, t) {
          let r = t.toLowerCase();
          for (let t of e) if (t.symbol?.toLowerCase() === r) return t;
        })(r, t);
        if (n) return b(n, a);
        if ((0, f.f)(t, { strict: !1 }))
          for (let e of r) {
            let r = b(e, a);
            if (r && (0, d.f)(r.address, t)) return r;
          }
      }
      function b(e, t) {
        let r = e.addresses[t];
        if (r)
          return {
            address: r,
            currency: e.currency,
            decimals: e.decimals,
            name: e.name,
            popular: e.popular,
            symbol: e.symbol,
          };
      }
      async function v(e, t) {
        let { address: r, decimals: a } = g(e, t);
        return void 0 !== a
          ? { address: r, decimals: a }
          : {
              address: r,
              decimals: await (0, y.f)(e, {
                abi: l.q,
                address: r,
                functionName: "decimals",
              }),
            };
      }
      e.s(
        [
          "V",
          0,
          function (e) {
            return { ...e, data: (0, r.f)(e), to: e.address };
          },
          "F",
          0,
          p,
          "N",
          0,
          function (e) {
            let {
              account: t,
              chain: r,
              gas: a,
              maxFeePerGas: n,
              maxPriorityFeePerGas: i,
              nonce: o,
            } = e;
            return {
              account: t,
              chain: r,
              gas: a,
              maxFeePerGas: n,
              maxPriorityFeePerGas: i,
              nonce: o,
            };
          },
          "Y",
          0,
          function (e, t) {
            return "bigint" == typeof e ? t : e.decimals ?? t;
          },
          "M",
          0,
          g,
          "u",
          0,
          v,
          "i",
          0,
          function (e, t) {
            return { amount: e, decimals: t, formatted: (0, h.f)(e, t) };
          },
          "Z",
          0,
          function (e, t) {
            if ("bigint" == typeof e) return e;
            let r = e.decimals ?? t;
            return m(
              e.formatted,
              (function (e) {
                if (void 0 === e)
                  throw Error(
                    "Token decimals are required. Pass `amount.decimals` or select a declared token."
                  );
                return e;
              })(r)
            );
          },
        ],
        868750
      );
    },
    528804,
    287556,
    102278,
    755736,
    464834,
    913091,
    493617,
    (e) => {
      var t = e.i(606580);
      async function r(
        e,
        {
          address: a,
          blockHash: n,
          blockNumber: i,
          blockTag: o = "latest",
          requireCanonical: s,
        }
      ) {
        let c = (0, t.f)({
            blockHash: n,
            blockNumber: i,
            blockTag: o,
            requireCanonical: s,
          }),
          u = await e.request(
            { method: "eth_getCode", params: [a, c] },
            { dedupe: "bigint" == typeof i || void 0 !== n }
          );
        if ("0x" !== u) return u;
      }
      e.s(["f", 0, r], 528804);
      var a = e.i(506570),
        n = e.i(602376),
        i = e.i(284251);
      let o =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      class s extends n.f {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc6492.InvalidWrappedSignatureError",
            });
        }
      }
      e.s(
        [
          "validate",
          0,
          function (e) {
            try {
              if (i.N(e, -32) !== o) throw new s(e);
              return !0;
            } catch {
              return !1;
            }
          },
          "wrap",
          0,
          function (e) {
            let { data: t, signature: r, to: n } = e;
            return i.w(a.q(a.f("address, bytes, bytes"), [n, t, r]), o);
          },
        ],
        540258
      );
      var c = e.i(540258),
        c = c,
        u = c,
        l = e.i(364336),
        f = e.i(566335),
        d = e.i(779591);
      function h(e, t = {}) {
        return "string" == typeof e.chainId ? w(e) : { ...e, ...t.signature };
      }
      function w(e) {
        let { address: t, chainId: r, nonce: a } = e,
          n = d.M(e);
        return (
          d.n({ r: n.r, s: n.s }),
          g(n.yParity),
          { address: t, chainId: Number(r), nonce: BigInt(a), ...n }
        );
      }
      function m(e) {
        return (function (e, t = {}) {
          let { presign: r } = t;
          return l.y(
            i.w(
              "0x05",
              f.E(
                (function (e) {
                  let {
                      address: t,
                      chainId: r,
                      nonce: a,
                      r: n,
                      s: o,
                      yParity: s,
                    } = e,
                    c = d.X({ r: n, s: o });
                  return (
                    c && void 0 !== s && g(s),
                    [
                      r ? i.u(r) : "0x",
                      t,
                      a ? i.u(a) : "0x",
                      ...(c
                        ? [
                            s ? i.u(s, { size: 1 }) : "0x",
                            0n === c.r ? "0x" : i.q(i.u(c.r)),
                            0n === c.s ? "0x" : i.q(i.u(c.s)),
                          ]
                        : []),
                    ]
                  );
                })(
                  r
                    ? { address: e.address, chainId: e.chainId, nonce: e.nonce }
                    : e
                )
              )
            )
          );
        })(e, { presign: !0 });
      }
      function y(e) {
        let { address: t, chainId: r, nonce: a, ...n } = e;
        return (
          g(n.yParity),
          {
            address: t,
            chainId: i.u(r),
            nonce: i.u(a),
            ...d.F(n),
            yParity: i.u(n.yParity),
          }
        );
      }
      function g(e) {
        if (!Number.isInteger(e) || !(e >= 0) || !(e < 256))
          throw new i.d({
            max: "255",
            min: "0",
            signed: !1,
            size: 1,
            value: `${e}`,
          });
      }
      e.s(
        [
          "f",
          0,
          h,
          "o",
          0,
          function (e) {
            return e.map(w);
          },
          "k",
          0,
          m,
          "J",
          0,
          function (e) {
            return e.map(y);
          },
        ],
        287556
      );
      var p = n,
        b = e.i(11517);
      let v =
          "0x8010801080108010801080108010801080108010801080108010801080108010",
        x = a.f(
          "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
        );
      function N(e) {
        if ("string" == typeof e) {
          if (i.N(e, -32) !== v) throw new P(e);
        } else d.n(e.authorization);
      }
      class P extends p.f {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc8010.InvalidWrappedSignatureError",
            });
        }
      }
      e.s(
        [
          "unwrap",
          0,
          function (e) {
            N(e);
            let t = i.L(i.N(e, -64, -32)),
              r = i.N(e, -t - 64, -64),
              n = i.N(e, 0, -t - 64),
              [o, s, c] = a.G(x, r);
            return {
              authorization: h({
                address: o.delegation,
                chainId: Number(o.chainId),
                nonce: o.nonce,
                yParity: o.yParity,
                r: o.r,
                s: o.s,
              }),
              signature: n,
              ...(c && "0x" !== c ? { data: c, to: s } : {}),
            };
          },
          "validate",
          0,
          function (e) {
            try {
              return N(e), !0;
            } catch {
              return !1;
            }
          },
          "wrap",
          0,
          function (e) {
            let { data: t, signature: r } = e;
            N(e);
            let n = b.R({
                payload: m(e.authorization),
                signature: d.f(e.authorization),
              }),
              o = a.q(x, [
                {
                  ...e.authorization,
                  delegation: e.authorization.address,
                  chainId: BigInt(e.authorization.chainId),
                },
                e.to ?? n,
                t ?? "0x",
              ]),
              s = i.u(i.o(o), { size: 32 });
            return i.w(r, o, s, v);
          },
        ],
        102278
      );
      var S = e.i(102278);
      e.s(["f", 0, S], 755736);
      var S = S,
        q = S;
      e.s(["f", 0, q], 464834);
      var q = S,
        A = e.i(752012),
        I = e.i(472503),
        E = e.i(878023),
        k = e.i(289169),
        C = e.i(656679),
        T = e.i(823838),
        R = e.i(806685),
        $ = e.i(393702),
        B = e.i(89788);
      async function z({ address: e, authorization: t, signature: r }) {
        let a = await (async () => {
          try {
            return await (0, B.f)({ authorization: t, signature: r });
          } catch (e) {
            if (e instanceof $.n) return;
            throw e;
          }
        })();
        return !!a && (0, R.f)((0, T.A)(e), a);
      }
      var L = e.i(147526),
        M = e.i(880841),
        U = e.i(450323),
        V = e.i(675107),
        j = e.i(467125),
        G = e.i(418217),
        H = e.i(776267),
        O = e.i(769936);
      function D({ r: e, s: t, to: r = "hex", v: a, yParity: n }) {
        let i = (() => {
            if (0 === n || 1 === n) return n;
            if (a && (27n === a || 28n === a || a >= 35n))
              return +(a % 2n === 0n);
            throw Error("Invalid `v` or `yParity` value");
          })(),
          o = `0x${new H.secp256k1.Signature(
            (0, U.K)(e),
            (0, U.K)(t)
          ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
        return "hex" === r ? o : (0, O.X)(o);
      }
      e.s(["f", 0, D], 913091);
      var F = e.i(989509),
        W = e.i(388750);
      async function J(e, t) {
        let r,
          {
            address: a,
            chain: n = e.chain,
            hash: i,
            erc6492VerifierAddress: o = t.universalSignatureVerifierAddress ??
              n?.contracts?.erc6492Verifier?.address,
            multicallAddress: s = t.multicallAddress ??
              n?.contracts?.multicall3?.address,
            mode: c = "auto",
          } = t;
        if (n?.verifyHash) return await n.verifyHash(e, t);
        let u =
          ((r = t.signature),
          (0, M.f)(r)
            ? r
            : "object" == typeof r && "r" in r && "s" in r
            ? D(r)
            : (0, V.v)(r));
        try {
          if ("eoa" === c)
            try {
              if (
                (0, R.f)((0, T.A)(a), await (0, G.f)({ hash: i, signature: u }))
              )
                return !0;
            } catch {}
          if (S.validate(u))
            return await _(e, { ...t, multicallAddress: s, signature: u });
          return await X(e, { ...t, verifierAddress: o, signature: u });
        } catch (e) {
          if ("eoa" !== c)
            try {
              if (
                (0, R.f)((0, T.A)(a), await (0, G.f)({ hash: i, signature: u }))
              )
                return !0;
            } catch {}
          if (e instanceof Y) return !1;
          throw e;
        }
      }
      async function _(e, t) {
        let {
            address: a,
            blockHash: n,
            blockNumber: i,
            blockTag: o,
            hash: s,
            multicallAddress: c,
            requireCanonical: u,
          } = t,
          {
            authorization: l,
            data: f,
            signature: d,
            to: h,
          } = q.unwrap(t.signature);
        if (
          (await r(e, {
            address: a,
            blockHash: n,
            blockNumber: i,
            blockTag: o,
            requireCanonical: u,
          })) === (0, L.s)(["0xef0100", l.address])
        )
          return await K(e, { ...t, signature: d });
        let w = {
          address: l.address,
          chainId: Number(l.chainId),
          nonce: Number(l.nonce),
          r: (0, V.N)(l.r, { size: 32 }),
          s: (0, V.N)(l.s, { size: 32 }),
          yParity: l.yParity,
        };
        if (!(await z({ address: a, authorization: w }))) throw new Y();
        let m = await (0, j.f)(
            e,
            W.f,
            "readContract"
          )({
            ...(c ? { address: c } : { code: I.c }),
            authorizationList: [w],
            abi: A.v,
            blockHash: n,
            blockNumber: i,
            blockTag: "pending",
            functionName: "aggregate3",
            requireCanonical: u,
            args: [
              [
                ...(f
                  ? [{ allowFailure: !0, target: h ?? a, callData: f }]
                  : []),
                {
                  allowFailure: !0,
                  target: a,
                  callData: (0, C.f)({
                    abi: A.w,
                    functionName: "isValidSignature",
                    args: [s, d],
                  }),
                },
              ],
            ],
          }),
          y = m[m.length - 1]?.returnData;
        if (y?.startsWith("0x1626ba7e")) return !0;
        throw new Y();
      }
      async function X(e, t) {
        let {
            address: r,
            factory: a,
            factoryData: n,
            hash: i,
            signature: o,
            verifierAddress: s,
            ...l
          } = t,
          f = await (async () =>
            (!a && !n) || c.validate(o)
              ? o
              : u.wrap({ data: n, signature: o, to: a }))(),
          d = s
            ? {
                to: s,
                data: (0, C.f)({
                  abi: A.m,
                  functionName: "isValidSig",
                  args: [r, i, f],
                }),
                ...l,
              }
            : {
                data: (0, k.f)({ abi: A.m, args: [r, i, f], bytecode: I.$ }),
                ...l,
              },
          { data: h } = await (0, j.f)(
            e,
            F.g,
            "call"
          )(d).catch((e) => {
            if (e instanceof E.o) throw new Y();
            throw e;
          });
        if ((0, U.d)(h ?? "0x0")) return !0;
        throw new Y();
      }
      async function K(e, t) {
        let {
          address: r,
          blockHash: a,
          blockNumber: n,
          blockTag: i,
          hash: o,
          requireCanonical: s,
          signature: c,
        } = t;
        if (
          (
            await (0, j.f)(
              e,
              W.f,
              "readContract"
            )({
              address: r,
              abi: A.w,
              args: [o, c],
              blockHash: a,
              blockNumber: n,
              blockTag: i,
              functionName: "isValidSignature",
              requireCanonical: s,
            }).catch((e) => {
              if (e instanceof E.h) throw new Y();
              throw e;
            })
          ).startsWith("0x1626ba7e")
        )
          return !0;
        throw new Y();
      }
      class Y extends Error {}
      e.s(["f", 0, J], 493617);
    },
    579917,
    (e) => {
      var t = e.i(393702),
        r = e.i(675107),
        a = e.i(982191);
      async function n(
        e,
        {
          blockHash: i,
          blockNumber: o,
          blockTag: s,
          hash: c,
          index: u,
          sender: l,
          nonce: f,
        }
      ) {
        let d = s || "latest",
          h = void 0 !== o ? (0, r.N)(o) : void 0,
          w = null;
        if (
          (c
            ? (w = await e.request(
                { method: "eth_getTransactionByHash", params: [c] },
                { dedupe: !0 }
              ))
            : i
            ? (w = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [i, (0, r.N)(u)],
                },
                { dedupe: !0 }
              ))
            : (h || d) && "number" == typeof u
            ? (w = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [h || d, (0, r.N)(u)],
                },
                { dedupe: !!h }
              ))
            : l &&
              "number" == typeof f &&
              (w = await e.request(
                {
                  method: "eth_getTransactionBySenderAndNonce",
                  params: [l, (0, r.N)(f)],
                },
                { dedupe: !0 }
              )),
          !w)
        )
          throw new t.z({
            blockHash: i,
            blockNumber: o,
            blockTag: d,
            hash: c,
            index: u,
          });
        return (e.chain?.formatters?.transaction?.format || a.F)(
          w,
          "getTransaction"
        );
      }
      e.s(["f", 0, n]);
    },
    804558,
    (e) => {
      var t = e.i(752012),
        r = e.i(472503),
        a = e.i(70204),
        n = e.i(569934),
        i = e.i(878023),
        o = e.i(600547),
        s = e.i(656679),
        c = e.i(404195),
        u = e.i(807749),
        l = e.i(467125),
        f = e.i(871706),
        d = e.i(34888),
        h = e.i(388750);
      async function w(e, f) {
        let {
            account: d,
            authorizationList: w,
            allowFailure: y = !0,
            blockHash: g,
            blockNumber: p,
            blockOverrides: b,
            blockTag: v,
            requireCanonical: x,
            stateOverride: N,
          } = f,
          P = f.contracts,
          S = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          q = f.batchSize ?? S.batchSize ?? 1024,
          A = f.deployless ?? S.deployless ?? !1,
          I = (() => {
            if (f.multicallAddress) return f.multicallAddress;
            if (A) return null;
            if (e.chain)
              return (0, c.f)({
                blockNumber: p,
                chain: e.chain,
                contract: "multicall3",
              });
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          })(),
          E = [[]],
          k = 0,
          C = 0;
        for (let e = 0; e < P.length; e++) {
          let { abi: t, address: r, args: a, functionName: n } = P[e];
          try {
            let e = (0, s.f)({ abi: t, args: a, functionName: n });
            (C += (e.length - 2) / 2),
              q > 0 &&
                C > q &&
                E[k].length > 0 &&
                (k++, (C = (e.length - 2) / 2), (E[k] = [])),
              (E[k] = [...E[k], { allowFailure: !0, callData: e, target: r }]);
          } catch (i) {
            let e = (0, u.f)(i, {
              abi: t,
              address: r,
              args: a,
              docsPath: "/docs/contract/multicall",
              functionName: n,
              sender: d,
            });
            if (!y) throw e;
            E[k] = [...E[k], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let T = !!e.batch?.multicall,
          R = T ? E.flatMap((e) => e.map((e) => [e])) : E,
          $ = await Promise.allSettled(
            R.map((a) =>
              T
                ? m(e, {
                    account: d,
                    authorizationList: w,
                    batchSize: q,
                    blockHash: g,
                    blockNumber: p,
                    blockOverrides: b,
                    blockTag: v,
                    call: a[0],
                    multicallAddress: I,
                    requireCanonical: x,
                    stateOverride: N,
                  }).then((e) => [e])
                : (0, l.f)(
                    e,
                    h.f,
                    "readContract"
                  )({
                    ...(null === I ? { code: r.c } : { address: I }),
                    abi: t.v,
                    account: d,
                    args: [a],
                    authorizationList: w,
                    blockHash: g,
                    blockNumber: p,
                    blockOverrides: b,
                    blockTag: v,
                    functionName: "aggregate3",
                    requireCanonical: x,
                    stateOverride: N,
                  })
            )
          ),
          B = [];
        for (let e = 0; e < $.length; e++) {
          let t = $[e];
          if ("rejected" === t.status) {
            if (!y) throw t.reason;
            for (let r = 0; r < R[e].length; r++)
              B.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: n, success: s } = r[t],
              { callData: c } = R[e][t],
              { abi: l, address: f, functionName: d, args: h } = P[B.length];
            try {
              if ("0x" === c) throw new a.g();
              if (!s) throw new i.w({ data: n });
              let e = (0, o.f)({ abi: l, args: h, data: n, functionName: d });
              B.push(y ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, u.f)(t, {
                abi: l,
                address: f,
                args: h,
                docsPath: "/docs/contract/multicall",
                functionName: d,
              });
              if (!y) throw e;
              B.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (B.length !== P.length) throw new n.L("multicall results mismatch");
        return B;
      }
      async function m(e, a) {
        let { batchSize: n, call: i, multicallAddress: o, ...s } = a,
          { wait: c = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          { schedule: u } = (0, f.f)({
            id: (0, d.f)(["multicall", e.uid, n, o, s]),
            wait: c,
            shouldSplitBatch: (e) =>
              0 !== n &&
              e.reduce((e, { callData: t }) => e + (t.length - 2) / 2, 0) > n,
            fn: (a) =>
              (0, l.f)(
                e,
                h.f,
                "readContract"
              )({
                ...(null === o ? { code: r.c } : { address: o }),
                ...s,
                abi: t.v,
                args: [a],
                functionName: "aggregate3",
              }),
          }),
          [w] = await u(i);
        return w;
      }
      e.s(["f", 0, w]);
    },
    695331,
    (e) => {
      var t = e.i(557265),
        r = e.i(606624);
      e.s([
        "f",
        0,
        function (
          {
            key: e,
            methods: a,
            name: n,
            request: i,
            retryCount: o = 3,
            retryDelay: s = 150,
            timeout: c,
            type: u,
          },
          l
        ) {
          let f = (0, r.f)();
          return {
            config: {
              key: e,
              methods: a,
              name: n,
              request: i,
              retryCount: o,
              retryDelay: s,
              timeout: c,
              type: u,
            },
            request: (0, t.f)(i, {
              methods: a,
              retryCount: o,
              retryDelay: s,
              uid: f,
            }),
            value: l,
          };
        },
      ]);
    },
    110163,
    588134,
    522662,
    468368,
    (e) => {
      var t = e.i(1299),
        r = e.i(569934);
      class a extends r.L {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      e.s(["f", 0, a], 588134);
      var n = e.i(871706),
        i = e.i(363710),
        o = e.i(863020),
        s = e.i(984534),
        c = e.i(34888);
      let u = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      e.s(["f", 0, u], 522662);
      let l = Error("timed out");
      function f(e, r = {}) {
        let { url: a, headers: n } = (function (e) {
          try {
            let t = new URL(e),
              r = (() => {
                if (t.username) {
                  let e = `${decodeURIComponent(
                    t.username
                  )}:${decodeURIComponent(t.password)}`;
                  return (
                    (t.username = ""),
                    (t.password = ""),
                    {
                      url: t.toString(),
                      headers: { Authorization: `Basic ${btoa(e)}` },
                    }
                  );
                }
              })();
            return { url: t.toString(), ...r };
          } catch {
            return { url: e };
          }
        })(e);
        return {
          async request(e) {
            let {
                body: f,
                fetchFn: h = r.fetchFn ?? fetch,
                maxResponseBodySize: w = r.maxResponseBodySize ?? 0xa00000,
                onRequest: m = r.onRequest,
                onResponse: y = r.onResponse,
                timeout: g = r.timeout ?? 1e4,
              } = e,
              p = { ...(r.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
              { headers: b, method: v, signal: x } = p;
            try {
              let e,
                { response: r, responseBody: i } = await (0, s.f)(
                  async ({ signal: e }) => {
                    let { signal: t, cleanup: r } = (0, o.q)([
                      x,
                      g > 0 ? e : null,
                    ]);
                    try {
                      let e = {
                          ...p,
                          body: Array.isArray(f)
                            ? (0, c.f)(
                                f.map((e) => ({
                                  jsonrpc: "2.0",
                                  id: e.id ?? u.take(),
                                  ...e,
                                }))
                              )
                            : (0, c.f)({
                                jsonrpc: "2.0",
                                id: f.id ?? u.take(),
                                ...f,
                              }),
                          headers: {
                            ...n,
                            "Content-Type": "application/json",
                            ...b,
                          },
                          method: v || "POST",
                          signal: t,
                        },
                        r = (m && (await m(new Request(a, e), e))) ?? {
                          ...e,
                          url: a,
                        },
                        i = await h(r.url ?? a, r);
                      y && (await y(i));
                      let s = await (0, o.t)(i, { maxResponseBodySize: w });
                      return { response: i, responseBody: s };
                    } finally {
                      r();
                    }
                  },
                  { errorInstance: l, timeout: g, signal: !0 }
                );
              if (r.headers.get("Content-Type")?.startsWith("application/json"))
                e = JSON.parse(i);
              else {
                e = i;
                try {
                  e = JSON.parse(e || "{}");
                } catch (t) {
                  if (r.ok) throw t;
                  e = { error: e };
                }
              }
              let N =
                Array.isArray(f) && Array.isArray(e) && 1 === e.length
                  ? e[0]
                  : e;
              if (!r.ok) {
                if (d(N))
                  throw new t.V({
                    body: f,
                    error: N.error,
                    headers: r.headers,
                    status: r.status,
                    url: a,
                  });
                throw new t.y({
                  body: f,
                  details: (0, c.f)(e.error) || r.statusText,
                  headers: r.headers,
                  status: r.status,
                  url: a,
                });
              }
              if (
                !Array.isArray(f) ||
                !f.length ||
                (Array.isArray(e) && e.length >= f.length)
              )
                return e;
              if (!d(N))
                throw Error(`Expected ${f.length} responses to batch request.`);
              return f.map(() => N);
            } catch (e) {
              if (x?.aborted) throw (0, i.l)(x);
              if (e === l) throw new t.t({ body: f, url: a });
              if (
                (0, i.c)(e) ||
                e instanceof t.y ||
                e instanceof t.S ||
                e instanceof t.V ||
                e instanceof t.t
              )
                throw e;
              throw new t.y({ body: f, cause: e, url: a });
            }
          },
        };
      }
      function d(e) {
        return (
          "number" == typeof e?.error?.code &&
          "string" == typeof e?.error?.message
        );
      }
      e.s(["f", 0, f], 468368);
      var h = e.i(695331);
      let w = 0,
        m = new WeakMap();
      e.s(
        [
          "f",
          0,
          function (e, r = {}) {
            let {
              batch: i,
              fetchFn: o,
              fetchOptions: s,
              key: c = "http",
              maxResponseBodySize: u,
              methods: l,
              name: d = "HTTP JSON-RPC",
              onFetchRequest: y,
              onFetchResponse: g,
              retryDelay: p,
              raw: b,
            } = r;
            return ({ chain: v, retryCount: x, timeout: N }) => {
              let { batchSize: P = 1e3, wait: S = 0 } =
                  "object" == typeof i ? i : {},
                q = r.retryCount ?? x,
                A = N ?? r.timeout ?? 1e4,
                I = e || v?.rpcUrls.default.http[0];
              if (!I) throw new a();
              let E = f(I, {
                fetchFn: o,
                fetchOptions: s,
                maxResponseBodySize: u,
                onRequest: y,
                onResponse: g,
                timeout: A,
              });
              return (0, h.f)(
                {
                  key: c,
                  methods: l,
                  name: d,
                  async request({ method: e, params: r }, a) {
                    let o = { method: e, params: r },
                      s = a?.signal ? { signal: a.signal } : void 0,
                      { schedule: c } = (0, n.f)({
                        id: `${I}.${(function (e) {
                          if (!e) return "default";
                          let t = m.get(e);
                          if (void 0 !== t) return t;
                          let r = w++;
                          return m.set(e, r), r;
                        })(a?.signal)}`,
                        wait: S,
                        shouldSplitBatch: (e) => e.length > P,
                        fn: (e) => E.request({ body: e, fetchOptions: s }),
                        sort: (e, t) => e.id - t.id,
                      }),
                      u = async (e) =>
                        i
                          ? c(e)
                          : [await E.request({ body: e, fetchOptions: s })],
                      [{ error: l, result: f }] = await u(o).catch((e) => {
                        if (b && e instanceof t.V)
                          return [{ error: e.cause, result: void 0 }];
                        throw e;
                      });
                    if (b) return { error: l, result: f };
                    if (l) throw new t.V({ body: o, error: l, url: I });
                    return f;
                  },
                  retryCount: q,
                  retryDelay: p,
                  timeout: A,
                  type: "http",
                },
                { fetchOptions: s, url: I }
              );
            };
          },
        ],
        110163
      );
    },
    914146,
    (e) => {
      e.s([
        "l",
        0,
        "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "B",
        0,
        "0x0000000000000000000000000000000000000000",
      ]);
    },
    557265,
    (e) => {
      var t = e.i(569934),
        r = e.i(1299),
        a = e.i(383856),
        n = e.i(363710),
        i = e.i(533580),
        o = e.i(204202),
        s = e.i(34888);
      function c(e) {
        if (e instanceof t.L)
          return e.walk((e) => e instanceof r.y || e instanceof r.V);
      }
      e.s([
        "f",
        0,
        function (e, r = {}) {
          return async (u, l = {}) => {
            let {
                dedupe: f = !1,
                methods: d,
                retryDelay: h = 150,
                retryCount: w = 3,
                signal: m,
                uid: y,
              } = { ...r, ...l },
              { method: g } = u;
            if (
              d?.exclude?.includes(g) ||
              (d?.include && !d.include.includes(g))
            )
              throw new a.b(Error("method not supported"), { method: g });
            if (m?.aborted) throw (0, n.l)(m);
            let p = f
              ? (function (e, t = 0) {
                  let r = 0xdeadbeef ^ t,
                    a = 0x41c6ce57 ^ t;
                  for (let t = 0; t < e.length; t++) {
                    let n = e.charCodeAt(t);
                    (r = Math.imul(r ^ n, 0x9e3779b1)),
                      (a = Math.imul(a ^ n, 0x5f356495));
                  }
                  return (
                    (r =
                      Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^
                      Math.imul(a ^ (a >>> 16), 0xc2b2ae35)),
                    (
                      0x100000000 *
                        (2097151 &
                          (a =
                            Math.imul(a ^ (a >>> 16), 0x85ebca6b) ^
                            Math.imul(r ^ (r >>> 16), 0xc2b2ae35))) +
                      (r >>> 0)
                    ).toString(36)
                  );
                })(`${y}.${(0, s.f)(u)}`)
              : void 0;
            return (0, i.f)(
              () =>
                (0, o.f)(
                  async () => {
                    try {
                      return await e(u, m ? { signal: m } : void 0);
                    } catch (e) {
                      if (m?.aborted) throw (0, n.l)(m);
                      if ((0, n.c)(e)) throw e;
                      switch (e.code) {
                        case a.Q.code:
                          throw new a.Q(e);
                        case a.P.code:
                          throw new a.P(e);
                        case a.X.code:
                          throw new a.X(e, { method: u.method });
                        case a.u.code:
                          throw new a.u(e);
                        case a.D.code:
                          throw new a.D(e);
                        case a.L.code:
                          throw new a.L(e);
                        case a.V.code:
                          throw new a.V(e);
                        case a.j.code:
                          throw new a.j(e);
                        case a.g.code:
                          throw new a.g(e);
                        case a.b.code:
                          throw new a.b(e, { method: u.method });
                        case a.H.code:
                          throw new a.H(e);
                        case a.J.code:
                          throw new a.J(e);
                        case a.k.code:
                          throw new a.k(e);
                        case a.$.code:
                          throw new a.$(e);
                        case a.q.code:
                          throw new a.q(e);
                        case a.p.code:
                          throw new a.p(e);
                        case a.r.code:
                          throw new a.r(e);
                        case a.S.code:
                          throw new a.S(e);
                        case a.E.code:
                          throw new a.E(e);
                        case a.d.code:
                          throw new a.d(e);
                        case a.a.code:
                          throw new a.a(e);
                        case a.s.code:
                          throw new a.s(e);
                        case a.Y.code:
                          throw new a.Y(e);
                        case a.Z.code:
                          throw new a.Z(e);
                        case a.T.code:
                          throw new a.T(e);
                        case 5e3:
                          throw new a.k(e);
                        case a.B.code:
                          throw new a.B(e);
                        default:
                          if (e instanceof t.L) throw e;
                          throw new a.W(e);
                      }
                    }
                  },
                  {
                    delay: ({ count: e, error: t }) => {
                      let r = c(t)?.headers?.get("Retry-After");
                      if (r) {
                        let e = Number.parseInt(r, 10);
                        if (!Number.isNaN(e)) return 1e3 * e;
                        let t = Date.parse(r) - Date.now();
                        if (t > 0) return t;
                      }
                      return ~~(1 << e) * h;
                    },
                    retryCount: w,
                    signal: m,
                    shouldRetry: ({ error: e }) =>
                      (function (e) {
                        if ((0, n.c)(e)) return !1;
                        let t = c(e)?.status;
                        if ("code" in e && "number" == typeof e.code) {
                          if (
                            -1 === e.code ||
                            e.code === a.H.code ||
                            e.code === a.D.code ||
                            429 === e.code ||
                            -32007 === e.code
                          )
                            return !0;
                          if (e.code === a.X.code || e.code === a.b.code || !t)
                            return !1;
                        }
                        return (
                          !t ||
                          403 === t ||
                          408 === t ||
                          413 === t ||
                          429 === t ||
                          500 === t ||
                          502 === t ||
                          503 === t ||
                          504 === t ||
                          !1
                        );
                      })(e),
                  }
                ),
              { enabled: f, id: p }
            );
          };
        },
      ]);
    },
    538463,
    (e) => {
      e.s([
        "l",
        0,
        function (e) {
          let t = {
            formatters: void 0,
            fees: void 0,
            serializers: void 0,
            ...e,
          };
          return Object.assign(t, {
            extend: (function e(t) {
              return (r) => {
                let a = "function" == typeof r ? r(t) : r,
                  n = { ...t, ...a };
                return Object.assign(n, { extend: e(n) });
              };
            })(t),
          });
        },
        "S",
        0,
        function () {
          return {};
        },
      ]);
    },
    461147,
    316819,
    848302,
    155933,
    (e) => {
      var t = e.i(752012),
        r = e.i(727343),
        a = e.i(1299),
        n = e.i(70204),
        i = e.i(790063),
        o = e.i(879617),
        s = e.i(249311),
        c = e.i(332881);
      function u(e) {
        let { abi: t, data: r } = e,
          a = (0, i.M)(r, 0, 4),
          u = t.find(
            (e) => "function" === e.type && a === (0, o.f)((0, c.r)(e))
          );
        if (!u)
          throw new n.N(a, { docsPath: "/docs/contract/decodeFunctionData" });
        return {
          functionName: u.name,
          args:
            "inputs" in u && u.inputs && u.inputs.length > 0
              ? (0, s.f)(u.inputs, (0, i.M)(r, 4))
              : void 0,
        };
      }
      e.s(["f", 0, u], 316819);
      var l = e.i(147526),
        f = e.i(704434),
        d = e.i(627173);
      let h = "/docs/contract/encodeErrorResult";
      function w(e) {
        let { abi: t, errorName: r, args: a } = e,
          i = t[0];
        if (r) {
          let e = (0, d.f)({ abi: t, args: a, name: r });
          if (!e) throw new n.k(r, { docsPath: h });
          i = e;
        }
        if ("error" !== i.type) throw new n.k(void 0, { docsPath: h });
        let s = (0, c.r)(i),
          u = (0, o.f)(s),
          w = "0x";
        if (a && a.length > 0) {
          if (!i.inputs) throw new n.A(i.name, { docsPath: h });
          w = (0, f.N)(i.inputs, a);
        }
        return (0, l.s)([u, w]);
      }
      e.s(["f", 0, w], 848302);
      let m = "/docs/contract/encodeFunctionResult";
      function y(e) {
        let { abi: t, functionName: r, result: a } = e,
          i = t[0];
        if (r) {
          let e = (0, d.f)({ abi: t, name: r });
          if (!e) throw new n.$(r, { docsPath: m });
          i = e;
        }
        if ("function" !== i.type) throw new n.$(void 0, { docsPath: m });
        if (!i.outputs) throw new n.Y(i.name, { docsPath: m });
        let o = (() => {
          if (0 === i.outputs.length) return [];
          if (1 === i.outputs.length) return [a];
          if (Array.isArray(a)) return a;
          throw new n.w(a);
        })();
        return (0, f.N)(i.outputs, o);
      }
      e.s(["f", 0, y], 155933);
      let g = "x-batch-gateway:true",
        p = { concurrency: 16, depth: 4, queries: 256 };
      function b() {
        let e = 0,
          t = [];
        return {
          queries: p.queries,
          async run(r) {
            e >= p.concurrency ? await new Promise((e) => t.push(e)) : e++;
            try {
              return await r();
            } finally {
              let r = t.shift();
              r ? r() : e--;
            }
          },
        };
      }
      async function v(e) {
        let { data: n, ccipRequest: i, budget: o = b(), depth: s = 0 } = e,
          {
            args: [c],
          } = u({ abi: t.p, data: n }),
          l = [],
          f = [];
        return (
          await Promise.all(
            c.map(async (e, n) => {
              try {
                let t = e.urls.includes(g);
                if (t && s + 1 >= p.depth)
                  throw new a.y({
                    details: `CCIP Read exceeded the maximum batch depth (${p.depth}).`,
                    url: g,
                  });
                if (t)
                  f[n] = await v({
                    data: e.data,
                    ccipRequest: i,
                    budget: o,
                    depth: s + 1,
                  });
                else {
                  if (o.queries <= 0)
                    throw new a.y({
                      details: `CCIP Read exceeded the maximum number of queries (${p.queries}).`,
                      url: e.urls[0] ?? "",
                    });
                  let t = e.urls.slice(0, o.queries);
                  (o.queries -= Math.max(1, t.length)),
                    (f[n] = await o.run(() => i({ ...e, urls: t })));
                }
                l[n] = !1;
              } catch (e) {
                var c;
                (l[n] = !0),
                  (f[n] =
                    "HttpRequestError" === (c = e).name && c.status
                      ? w({
                          abi: t.p,
                          errorName: "HttpError",
                          args: [c.status, c.shortMessage],
                        })
                      : w({
                          abi: [r.T],
                          errorName: "Error",
                          args: [
                            "shortMessage" in c ? c.shortMessage : c.message,
                          ],
                        }));
              }
            })
          ),
          y({ abi: t.p, functionName: "query", result: [l, f] })
        );
      }
      e.s(["u", 0, p, "H", 0, b, "V", 0, v, "o", 0, g], 461147);
    },
    839080,
    (e) => {
      var t = e.i(450323),
        r = e.i(445024),
        a = e.i(856324),
        n = e.i(982191);
      let i = { "0x0": "reverted", "0x1": "success" };
      function o(e, r) {
        let o = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, a.f)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, t.T)(e.transactionIndex)
            : null,
          status: e.status ? i[e.status] : null,
          type: e.type ? n.g[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (o.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (o.blobGasUsed = BigInt(e.blobGasUsed)),
          o
        );
      }
      let s = (0, r.f)("transactionReceipt", o);
      e.s(["l", 0, s, "L", 0, o, "b", 0, i]);
    },
    863020,
    (e) => {
      var t = e.i(1299);
      async function r(e, { maxResponseBodySize: a }) {
        if (!1 === a) return e.text();
        let n = e.headers.get("Content-Length");
        if (n) {
          let r = Number(n);
          if (r > a)
            throw (await e.body?.cancel(), new t.S({ maxSize: a, size: r }));
        }
        if (!e.body) {
          let r = await e.text(),
            n = new TextEncoder().encode(r).length;
          if (n > a) throw new t.S({ maxSize: a, size: n });
          return r;
        }
        let i = e.body.getReader(),
          o = new TextDecoder(),
          s = "",
          c = 0;
        try {
          for (;;) {
            let { done: e, value: r } = await i.read();
            if (e) break;
            if ((c += r.byteLength) > a)
              throw (await i.cancel(), new t.S({ maxSize: a, size: c }));
            s += o.decode(r, { stream: !0 });
          }
          return (s += o.decode());
        } finally {
          i.releaseLock();
        }
      }
      e.s([
        "q",
        0,
        function (e) {
          let t = e.filter((e) => !!e);
          if (t.length < 2) return { signal: t[0] ?? null, cleanup: () => {} };
          let r = new AbortController(),
            a = () => {
              n(), r.abort(t.find((e) => e.aborted)?.reason);
            },
            n = () => {
              for (let e of t) e.removeEventListener("abort", a);
            };
          for (let e of t) {
            if (e.aborted) {
              n(), r.abort(e.reason);
              break;
            }
            e.addEventListener("abort", a);
          }
          return { signal: r.signal, cleanup: n };
        },
        "t",
        0,
        r,
      ]);
    },
    533580,
    (e) => {
      let t = new (e.i(976677).f)(8192);
      e.s([
        "f",
        0,
        function (e, { enabled: r = !0, id: a }) {
          if (!r || !a) return e();
          if (t.get(a)) return t.get(a);
          let n = e().finally(() => t.delete(a));
          return t.set(a, n), n;
        },
      ]);
    },
    204202,
    (e) => {
      var t = e.i(363710),
        r = e.i(588233);
      e.s([
        "f",
        0,
        function (
          e,
          {
            delay: a = 100,
            retryCount: n = 2,
            shouldRetry: i = () => !0,
            signal: o,
          } = {}
        ) {
          return new Promise((s, c) => {
            let u = () => c((0, t.l)(o));
            o?.addEventListener("abort", u, { once: !0 });
            let l = async ({ count: u = 0 } = {}) => {
              if (o?.aborted) return void c((0, t.l)(o));
              let f = async ({ error: e }) => {
                let t = "function" == typeof a ? a({ count: u, error: e }) : a;
                if (t)
                  try {
                    await (0, r.f)(t, { signal: o });
                  } catch (e) {
                    c(e);
                    return;
                  }
                return l({ count: u + 1 });
              };
              try {
                let t = await e();
                s(t);
              } catch (e) {
                if (o?.aborted) return void c((0, t.l)(o));
                if ((0, t.c)(e)) return void c(e);
                if (u < n && (await i({ count: u, error: e })))
                  return f({ error: e });
                c(e);
              }
            };
            l()
              .catch(c)
              .finally(() => o?.removeEventListener("abort", u));
          });
        },
      ]);
    },
    984534,
    (e) => {
      var t = e.i(363710);
      e.s([
        "f",
        0,
        function (
          e,
          { errorInstance: r = Error("timed out"), timeout: a, signal: n }
        ) {
          return new Promise((i, o) => {
            (async () => {
              let s,
                c = new AbortController();
              try {
                a > 0 &&
                  (s = setTimeout(() => {
                    n ? c.abort() : o(r);
                  }, a)),
                  i(await e({ signal: c?.signal || null }));
              } catch (e) {
                if (c?.signal.aborted && (0, t.c)(e)) return void o(r);
                o(e);
              } finally {
                clearTimeout(s);
              }
            })();
          });
        },
      ]);
    },
    658765,
    378746,
    309579,
    (e) => {
      var t = e.i(831095);
      let r = "\x19Ethereum Signed Message:\n";
      e.s(["f", 0, r], 378746);
      var a = e.i(147526),
        n = e.i(401319),
        i = e.i(675107);
      function o(e) {
        let t =
            "string" == typeof e
              ? (0, i.B)(e)
              : "string" == typeof e.raw
              ? e.raw
              : (0, i.v)(e.raw),
          o = (0, i.B)(`${r}${(0, n.f)(t)}`);
        return (0, a.w)([o, t]);
      }
      e.s(["f", 0, o], 309579),
        e.s(
          [
            "f",
            0,
            function (e, r) {
              return (0, t.f)(o(e), r);
            },
          ],
          658765
        );
    },
    606624,
    (e) => {
      let t,
        r = 256;
      e.s([
        "f",
        0,
        function (e = 11) {
          if (!t || r + e > 512) {
            (t = ""), (r = 0);
            for (let e = 0; e < 256; e++)
              t += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
          }
          return t.substring(r, r++ + e);
        },
      ]);
    },
    588233,
    (e) => {
      var t = e.i(363710);
      async function r(e, { signal: a } = {}) {
        return new Promise((r, n) => {
          if (a?.aborted) return void n((0, t.l)(a));
          let i = () => a?.removeEventListener("abort", s),
            o = setTimeout(() => {
              i(), r();
            }, Math.min(e, 0x7fffffff)),
            s = () => {
              clearTimeout(o), i(), n((0, t.l)(a));
            };
          a?.addEventListener("abort", s, { once: !0 });
        });
      }
      e.s(["f", 0, r]);
    },
  ]);
})();
