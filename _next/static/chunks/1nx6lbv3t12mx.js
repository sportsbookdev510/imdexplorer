(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    712371,
    472083,
    (t) => {
      let e = new Map(),
        a = new Map();
      async function n(t, { cacheKey: r, cacheTime: i = 1 / 0 }) {
        let o,
          s,
          c,
          l =
            ((s = (o = (t, e) => ({
              clear: () => e.delete(t),
              get: () => e.get(t),
              set: (a) => e.set(t, a),
            }))(r, e)),
            {
              clear: () => {
                s.clear(), c.clear();
              },
              promise: s,
              response: (c = o(r, a)),
            }),
          u = l.response.get();
        if (u && i > 0 && Date.now() - u.created.getTime() < i) return u.data;
        let f = l.promise.get();
        f || ((f = t()), l.promise.set(f));
        try {
          let t = await f;
          return l.response.set({ created: new Date(), data: t }), t;
        } finally {
          l.promise.clear();
        }
      }
      async function r(t, { cacheTime: e = t.cacheTime } = {}) {
        let a;
        return BigInt(
          await n(() => t.request({ method: "eth_blockNumber" }), {
            cacheKey: ((a = t.uid), `blockNumber.${a}`),
            cacheTime: e,
          })
        );
      }
      t.s(["f", 0, n], 472083), t.s(["f", 0, r], 712371);
    },
    568307,
    (t) => {
      var e = t.i(393702),
        a = t.i(839080);
      async function n(t, { hash: r }) {
        let i = await t.request(
          { method: "eth_getTransactionReceipt", params: [r] },
          { dedupe: !0 }
        );
        if (!i) throw new e.r({ hash: r });
        return (t.chain?.formatters?.transactionReceipt?.format || a.L)(
          i,
          "getTransactionReceipt"
        );
      }
      t.s(["f", 0, n]);
    },
    948789,
    127465,
    738977,
    (t) => {
      var e = t.i(57351),
        a = t.i(383856),
        n = t.i(393702),
        r = t.i(806685),
        i = t.i(467125),
        o = t.i(20101),
        s = t.i(509486),
        c = t.i(204202),
        l = t.i(34888),
        u = t.i(915588),
        f = t.i(579917),
        d = t.i(568307),
        p = t.i(450323),
        h = t.i(976215),
        m = t.i(712371);
      function w(
        t,
        {
          emitOnBegin: e = !1,
          emitMissed: a,
          onBlockNumber: n,
          onError: r,
          poll: s,
          pollingInterval: c = t.pollingInterval,
        }
      ) {
        let u,
          f,
          d,
          y =
            void 0 !== s
              ? s
              : "webSocket" !== t.transport.type &&
                "ipc" !== t.transport.type &&
                ("fallback" !== t.transport.type ||
                  ("webSocket" !== t.transport.transports[0].config.type &&
                    "ipc" !== t.transport.transports[0].config.type)),
          g = t.chain?.blockTime,
          v = a ?? (void 0 !== g && c > g / 2);
        return y
          ? ((f = (0, l.f)(["watchBlockNumber", t.uid, e, v, c])),
            (0, o.f)(f, { onBlockNumber: n, onError: r }, (a) =>
              (0, h.f)(
                async () => {
                  try {
                    let e = await (0, i.f)(
                      t,
                      m.f,
                      "getBlockNumber"
                    )({ cacheTime: 0 });
                    if (void 0 !== u) {
                      if (e === u) return;
                      if (e - u > 1 && v)
                        for (let t = u + 1n; t < e; t++)
                          a.onBlockNumber(t, u), (u = t);
                    }
                    (void 0 === u || e > u) && (a.onBlockNumber(e, u), (u = e));
                  } catch (t) {
                    a.onError?.(t);
                  }
                },
                { emitOnBegin: e, interval: c }
              )
            ))
          : ((d = (0, l.f)(["watchBlockNumber", t.uid, e, v])),
            (0, o.f)(d, { onBlockNumber: n, onError: r }, (e) => {
              let a = !0,
                n = () => (a = !1);
              return (
                (async () => {
                  try {
                    let r = (() => {
                        if ("fallback" === t.transport.type) {
                          let e = t.transport.transports.find(
                            (t) =>
                              "webSocket" === t.config.type ||
                              "ipc" === t.config.type
                          );
                          return e ? e.value : t.transport;
                        }
                        return t.transport;
                      })(),
                      { unsubscribe: i } = await r.subscribe({
                        params: ["newHeads"],
                        onData(t) {
                          if (!a) return;
                          let n = (0, p.K)(t.result?.number);
                          e.onBlockNumber(n, u), (u = n);
                        },
                        onError(t) {
                          e.onError?.(t);
                        },
                      });
                    (n = i), a || n();
                  } catch (t) {
                    r?.(t);
                  }
                })(),
                () => n()
              );
            }));
      }
      async function y(t, p) {
        let h,
          m,
          y,
          v,
          b,
          {
            checkReplacement: T = t.chain
              ?.supportsTransactionReplacementDetection ?? !0,
            confirmations: C = 1,
            hash: R,
            onReplaced: x,
            retryCount: N = 6,
            retryDelay: q = ({ count: t }) => 200 * ~~(1 << t),
            timeout: k = 18e4,
          } = p,
          S = t.chain?.transactionReplacement?.getKey ? void 0 : p.replacement,
          M = (e) =>
            t.chain?.transactionReplacement?.getKey?.(e) ?? String(e.nonce),
          E = p.pollingInterval
            ? p.pollingInterval
            : t.chain?.experimental_preconfirmationTime
            ? t.chain.experimental_preconfirmationTime
            : t.pollingInterval,
          A = (0, l.f)([
            "waitForTransactionReceipt",
            t.uid,
            R,
            {
              checkReplacement: T,
              confirmations: C,
              pollingInterval: E,
              replacement: S,
              retryCount: N,
              timeout: k,
            },
          ]),
          P = !1,
          { promise: I, resolve: _, reject: L } = (0, s.f)(),
          z = k
            ? setTimeout(() => {
                b?.(), v?.(), L(new n.K({ hash: R }));
              }, k)
            : void 0;
        return (
          (v = (0, o.f)(
            A,
            { onReplaced: x, resolve: _, reject: L },
            async (o) => {
              if (
                (m = await (0, i.f)(
                  t,
                  d.f,
                  "getTransactionReceipt"
                )({ hash: R }).catch(() => void 0)) &&
                C <= 1
              ) {
                clearTimeout(z), o.resolve(m), v?.();
                return;
              }
              b = (0, i.f)(
                t,
                w,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: E,
                async onBlockNumber(s) {
                  let l = (t) => {
                      clearTimeout(z), b?.(), t(), v?.();
                    },
                    p = s;
                  if (!P)
                    try {
                      if (m) {
                        if (
                          C > 1 &&
                          (!m.blockNumber || p - m.blockNumber + 1n < C)
                        )
                          return;
                        l(() => {
                          y && o.onReplaced?.(y), o.resolve(m);
                        });
                        return;
                      }
                      if (
                        (T &&
                          !h &&
                          ((P = !0),
                          await (0, c.f)(
                            async () => {
                              (h = await (0, i.f)(
                                t,
                                f.f,
                                "getTransaction"
                              )({ hash: R })).blockNumber &&
                                (p = h.blockNumber);
                            },
                            {
                              delay: q,
                              retryCount: N,
                              shouldRetry: ({ error: t }) =>
                                !(S && t instanceof n.z),
                            }
                          ),
                          (P = !1)),
                        (m = await (0, i.f)(
                          t,
                          d.f,
                          "getTransactionReceipt"
                        )({ hash: R })),
                        C > 1 && (!m.blockNumber || p - m.blockNumber + 1n < C))
                      )
                        return;
                      l(() => o.resolve(m));
                    } catch (s) {
                      if (s instanceof n.z || s instanceof n.r) {
                        P = !1;
                        let s =
                          h ??
                          (T && S ? { ...S, hash: R.toLowerCase() } : void 0);
                        if (!s || s.blockNumber) return;
                        try {
                          if (!h) {
                            P = !0;
                            let e = await (0, i.f)(
                              t,
                              f.f,
                              "getTransaction"
                            )({ nonce: s.nonce, sender: s.from }).catch((t) => {
                              (t instanceof a.X || t instanceof a.b) && (h = s);
                            });
                            if (((P = !1), e?.hash.toLowerCase() === s.hash)) {
                              h = e;
                              return;
                            }
                            if (e) {
                              let a = await (0, i.f)(
                                t,
                                d.f,
                                "getTransactionReceipt"
                              )({ hash: e.hash }).catch((t) => {
                                if (!(t instanceof n.r)) throw t;
                              });
                              if (
                                !a ||
                                ((m = a),
                                (y = {
                                  reason:
                                    t.chain?.transactionReplacement?.getReason?.(
                                      { replaced: s, replacement: e }
                                    ) ?? g(s, e),
                                  replacedTransaction: s,
                                  transaction: e,
                                  transactionReceipt: m,
                                }),
                                C > 1 &&
                                  (!m.blockNumber ||
                                    p - m.blockNumber + 1n < C))
                              )
                                return;
                              l(() => {
                                o.onReplaced?.(y), o.resolve(m);
                              });
                              return;
                            }
                          }
                          P = !0;
                          let w = await (0, c.f)(
                            () =>
                              (0, i.f)(
                                t,
                                u.f,
                                "getBlock"
                              )({ blockNumber: p, includeTransactions: !0 }),
                            {
                              delay: q,
                              retryCount: N,
                              shouldRetry: ({ error: t }) => t instanceof e.f,
                            }
                          );
                          P = !1;
                          let v = M(s),
                            b = w.transactions.find(
                              (t) =>
                                (0, r.f)(t.from, s.from) &&
                                t.hash !== s.hash &&
                                M(t) === v
                            );
                          if (
                            !b ||
                            ((m = await (0, i.f)(
                              t,
                              d.f,
                              "getTransactionReceipt"
                            )({ hash: b.hash })),
                            (y = {
                              reason:
                                t.chain?.transactionReplacement?.getReason?.({
                                  replaced: s,
                                  replacement: b,
                                }) ?? g(s, b),
                              replacedTransaction: s,
                              transaction: b,
                              transactionReceipt: m,
                            }),
                            C > 1 &&
                              (!m.blockNumber || p - m.blockNumber + 1n < C))
                          )
                            return;
                          l(() => {
                            o.onReplaced?.(y), o.resolve(m);
                          });
                        } catch (t) {
                          l(() => o.reject(t));
                        }
                      } else l(() => o.reject(s));
                    }
                },
              });
            }
          )),
          I.finally(() => {
            clearTimeout(z), v?.();
          })
        );
      }
      function g(t, e) {
        return (e.to && t.to ? (0, r.f)(e.to, t.to) : e.to === t.to) &&
          e.value === t.value &&
          e.input === t.input
          ? "repriced"
          : e.from === e.to && 0n === e.value
          ? "cancelled"
          : "replaced";
      }
      t.s(["f", 0, w], 127465), t.s(["f", 0, y], 948789);
      var v = t.i(839080);
      async function b(
        t,
        { serializedTransaction: e, throwOnReceiptRevert: a, timeout: r }
      ) {
        let i = await t.request(
            { method: "eth_sendRawTransactionSync", params: r ? [e, r] : [e] },
            { retryCount: 0 }
          ),
          o = (t.chain?.formatters?.transactionReceipt?.format || v.L)(i);
        if ("reverted" === o.status && a) throw new n.E({ receipt: o });
        return o;
      }
      t.s(["f", 0, b], 738977);
    },
    509916,
    460841,
    (t) => {
      var e = t.i(790063),
        a = t.i(8406),
        n = t.i(450323),
        r = t.i(839080),
        i = t.i(189991),
        o = t.i(569934),
        s = t.i(383856),
        c = t.i(656679),
        l = t.i(147526),
        u = t.i(675107),
        f = t.i(10725),
        d = t.i(888794);
      let p =
          "0x5792579257925792579257925792579257925792579257925792579257925792",
        h = (0, u.N)(0, { size: 32 });
      async function m(t, e) {
        let {
            account: a = t.account,
            chain: r = t.chain,
            experimental_fallback: m,
            experimental_fallbackDelay: w = 32,
            forceAtomic: y = !1,
            id: g,
            version: v = "2.0.0",
          } = e,
          b = a ? (0, i.f)(a) : null,
          T = e.capabilities;
        t.dataSuffix &&
          !e.capabilities?.dataSuffix &&
          (T =
            "string" == typeof t.dataSuffix
              ? {
                  ...e.capabilities,
                  dataSuffix: { value: t.dataSuffix, optional: !0 },
                }
              : {
                  ...e.capabilities,
                  dataSuffix: {
                    value: t.dataSuffix.value,
                    ...(t.dataSuffix.required ? {} : { optional: !0 }),
                  },
                });
        let C = e.calls.map((t) => {
          let e = t.abi
            ? (0, c.f)({
                abi: t.abi,
                functionName: t.functionName,
                args: t.args,
              })
            : t.data;
          return {
            data: t.dataSuffix ? (0, l.w)([e ?? "0x", t.dataSuffix]) : e,
            to: t.to,
            value: t.value ? (0, u.N)(t.value) : void 0,
          };
        });
        try {
          let e = await t.request(
            {
              method: "wallet_sendCalls",
              params: [
                {
                  atomicRequired: y,
                  calls: C,
                  capabilities: T,
                  chainId: (0, u.N)(r.id),
                  from: b?.address,
                  id: g,
                  version: v,
                },
              ],
            },
            { retryCount: 0 }
          );
          if ("string" == typeof e) return { id: e };
          return e;
        } catch (a) {
          if (
            m &&
            ("MethodNotFoundRpcError" === a.name ||
              "MethodNotSupportedRpcError" === a.name ||
              "UnknownRpcError" === a.name ||
              "this request method is not supported" ===
                a.details.toLowerCase() ||
              a.details
                .toLowerCase()
                .includes("does not exist / is not available") ||
              a.details
                .toLowerCase()
                .includes("missing or invalid. request()") ||
              a.details
                .toLowerCase()
                .includes("did not match any variant of untagged enum") ||
              a.details
                .toLowerCase()
                .includes("account upgraded to unsupported contract") ||
              a.details.toLowerCase().includes("eip-7702 not supported") ||
              a.details.toLowerCase().includes("unsupported wc_ method") ||
              a.details
                .toLowerCase()
                .includes("feature toggled misconfigured") ||
              a.details
                .toLowerCase()
                .includes(
                  "jsonrpcengine: response has no error or result for request"
                ))
          ) {
            if (T && Object.values(T).some((t) => !t.optional)) {
              let t =
                "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
              throw new s.E(new o.L(t, { details: t }));
            }
            if (y && C.length > 1) {
              let t =
                "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
              throw new s.T(new o.L(t, { details: t }));
            }
            let e = [];
            for (let a of C) {
              try {
                let i = await (0, d.f)(t, {
                  account: b,
                  chain: r,
                  data: a.data,
                  to: a.to,
                  value: a.value ? (0, n.K)(a.value) : void 0,
                });
                e.push({ status: "fulfilled", value: i });
              } catch (t) {
                e.push({ reason: t, status: "rejected" });
              }
              w > 0 && (await new Promise((t) => setTimeout(t, w)));
            }
            if (e.every((t) => "rejected" === t.status)) throw e[0].reason;
            let a = e.map((t) => ("fulfilled" === t.status ? t.value : h));
            return { id: (0, l.w)([...a, (0, u.N)(r.id, { size: 32 }), p]) };
          }
          throw (0, f.f)(a, { ...e, account: b, chain: e.chain });
        }
      }
      async function w(t, i) {
        let o;
        async function s(r) {
          if (r.endsWith(p.slice(2))) {
            let i = (0, a.f)((0, e.n)(r, -64, -32)),
              o = (0, e.n)(r, 0, -64)
                .slice(2)
                .match(/.{1,64}/g),
              s = await Promise.all(
                o.map((e) =>
                  h.slice(2) !== e
                    ? t.request(
                        {
                          method: "eth_getTransactionReceipt",
                          params: [`0x${e}`],
                        },
                        { dedupe: !0 }
                      )
                    : void 0
                )
              ),
              c = s.some((t) => null === t)
                ? 100
                : s.every((t) => t?.status === "0x1")
                ? 200
                : s.every((t) => t?.status === "0x0")
                ? 500
                : 600;
            return {
              atomic: !1,
              chainId: (0, n.T)(i),
              receipts: s.filter(Boolean),
              status: c,
              version: "2.0.0",
            };
          }
          return t.request({ method: "wallet_getCallsStatus", params: [r] });
        }
        let {
            atomic: c = !1,
            chainId: l,
            receipts: u,
            version: f = "2.0.0",
            ...d
          } = await s(i.id),
          [m, w] =
            (o = d.status) >= 100 && o < 200
              ? ["pending", o]
              : o >= 200 && o < 300
              ? ["success", o]
              : o >= 300 && o < 700
              ? ["failure", o]
              : "CONFIRMED" === o
              ? ["success", 200]
              : "PENDING" === o
              ? ["pending", 100]
              : [void 0, o];
        return {
          ...d,
          atomic: c,
          chainId: l ? (0, n.T)(l) : void 0,
          receipts:
            u?.map((t) => ({
              ...t,
              blockNumber: (0, n.K)(t.blockNumber),
              gasUsed: (0, n.K)(t.gasUsed),
              status: r.b[t.status],
            })) ?? [],
          statusCode: w,
          status: m,
          version: f,
        };
      }
      t.s(["b", 0, p, "B", 0, h, "d", 0, m], 460841), t.s(["f", 0, w], 509916);
    },
    829897,
    (t) => {
      var e = t.i(189991),
        a = t.i(611573),
        n = t.i(806685),
        r = t.i(467125),
        i = t.i(975948),
        o = t.i(937445);
      async function s(t, s) {
        let { account: c = t.account, chainId: l, nonce: u } = s;
        if (!c)
          throw new a.A({ docsPath: "/docs/eip7702/prepareAuthorization" });
        let f = (0, e.f)(c),
          d = (() => {
            if (s.executor)
              return "self" === s.executor ? s.executor : (0, e.f)(s.executor);
          })(),
          p = { address: s.contractAddress ?? s.address, chainId: l, nonce: u };
        return (
          void 0 === p.chainId &&
            (p.chainId =
              t.chain?.id ?? (await (0, r.f)(t, i.f, "getChainId")({}))),
          void 0 === p.nonce &&
            ((p.nonce = await (0, r.f)(
              t,
              o.f,
              "getTransactionCount"
            )({ address: f.address, blockTag: "pending" })),
            ("self" === d || (d?.address && (0, n.f)(d.address, f.address))) &&
              (p.nonce += 1)),
          p
        );
      }
      t.s(["f", 0, s]);
    },
    888794,
    942305,
    (t) => {
      var e = t.i(189991),
        a = t.i(611573),
        n = t.i(569934),
        r = t.i(89788),
        i = t.i(505880);
      function o({ chain: t, currentChainId: e }) {
        if (!t) throw new i.r();
        if (e !== t.id) throw new i.F({ chain: t, currentChainId: e });
      }
      t.s(["f", 0, o], 942305);
      var s = t.i(147526),
        c = t.i(10725),
        l = t.i(264404),
        u = t.i(190521),
        f = t.i(467125),
        d = t.i(976677),
        p = t.i(353464),
        h = t.i(975948),
        m = t.i(368941),
        w = t.i(638291);
      let y = new d.f(128);
      async function g(t, i) {
        let d,
          {
            account: g = t.account,
            assertChainId: v = !0,
            chain: b = t.chain,
            accessList: T,
            authorizationList: C,
            blobs: R,
            data: x,
            dataSuffix: N = "string" == typeof t.dataSuffix
              ? t.dataSuffix
              : t.dataSuffix?.value,
            gas: q,
            gasPrice: k,
            maxFeePerBlobGas: S,
            maxFeePerGas: M,
            maxPriorityFeePerGas: E,
            nonce: A,
            type: P,
            value: I,
            ..._
          } = i;
        if (void 0 === g)
          throw new a.A({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let L = g ? (0, e.f)(g) : null;
        try {
          (0, p.f)(i);
          let e = await (async () =>
            i.to
              ? i.to
              : null !== i.to && C && C.length > 0
              ? await (0, r.f)({ authorization: C[0] }).catch(() => {
                  throw new n.L(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (L?.type === "json-rpc" || null === L) {
            let a;
            null !== b &&
              ((a = await (0, f.f)(t, h.f, "getChainId")({})),
              v && o({ currentChainId: a, chain: b }));
            let n = t.chain?.formatters?.transactionRequest?.format,
              r = (n || u.F)(
                {
                  ...(0, l.f)(_, { format: n }),
                  accessList: T,
                  account: L,
                  authorizationList: C,
                  blobs: R,
                  chainId: a,
                  data: N ? (0, s.w)([x ?? "0x", N]) : x,
                  gas: q,
                  gasPrice: k,
                  maxFeePerBlobGas: S,
                  maxFeePerGas: M,
                  maxPriorityFeePerGas: E,
                  nonce: A,
                  to: e,
                  type: P,
                  value: I,
                },
                "sendTransaction"
              ),
              i = y.get(t.uid);
            try {
              return await t.request(
                {
                  method: i ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [r],
                },
                { retryCount: 0 }
              );
            } catch (e) {
              if (!1 === i) throw e;
              if (
                "InvalidInputRpcError" === e.name ||
                "InvalidParamsRpcError" === e.name ||
                "MethodNotFoundRpcError" === e.name ||
                "MethodNotSupportedRpcError" === e.name
              )
                return await t
                  .request(
                    { method: "wallet_sendTransaction", params: [r] },
                    { retryCount: 0 }
                  )
                  .then((e) => (y.set(t.uid, !0), e))
                  .catch((a) => {
                    if (
                      "MethodNotFoundRpcError" === a.name ||
                      "MethodNotSupportedRpcError" === a.name
                    )
                      throw (y.set(t.uid, !1), e);
                    throw a;
                  });
              throw e;
            }
          }
          if (L?.type === "local") {
            let a = (() => {
                if (!L.nonceManager || void 0 !== A) return L.nonceManager;
                let t = L.nonceManager;
                return {
                  async consume(e) {
                    d = { address: e.address, chainId: e.chainId };
                    let a = await t.consume(e);
                    return (d = { ...d, nonce: a }), a;
                  },
                  get: (e) => t.get(e),
                  increment: (e) => t.increment(e),
                  reset: (e) => t.reset(e),
                };
              })(),
              n = await (0, f.f)(
                t,
                m.i,
                "prepareTransactionRequest"
              )({
                account: L,
                accessList: T,
                authorizationList: C,
                blobs: R,
                chain: b,
                data: N ? (0, s.w)([x ?? "0x", N]) : x,
                gas: q,
                gasPrice: k,
                maxFeePerBlobGas: S,
                maxFeePerGas: M,
                maxPriorityFeePerGas: E,
                nonce: A,
                nonceManager: a,
                parameters: [...m.v, "sidecars"],
                type: P,
                value: I,
                ..._,
                to: e,
              }),
              r = b?.serializers?.transaction,
              i = await L.signTransaction(n, { serializer: r }),
              o = (b ?? t.chain)?.serializers?.transactionEnvelope,
              c = o ? await o({ serializedTransaction: i, transaction: n }) : i;
            return await (0, f.f)(
              t,
              w.f,
              "sendRawTransaction"
            )({ serializedTransaction: c });
          }
          if (L?.type === "smart")
            throw new a.c({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new a.c({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: L?.type,
          });
        } catch (t) {
          if (t instanceof a.c) throw t;
          throw (
            (d && L?.nonceManager?.reset(d),
            (0, c.f)(t, { ...i, account: L, chain: i.chain || void 0 }))
          );
        }
      }
      t.s(["f", 0, g], 888794);
    },
    599976,
    911347,
    (t) => {
      var e = t.i(189991),
        a = t.i(611573),
        n = t.i(675107);
      async function r(t, { account: i = t.account, message: o }) {
        if (!i) throw new a.A({ docsPath: "/docs/actions/wallet/signMessage" });
        let s = (0, e.f)(i);
        if (s.signMessage) return s.signMessage({ message: o });
        let c =
          "string" == typeof o
            ? (0, n.B)(o)
            : o.raw instanceof Uint8Array
            ? (0, n.g)(o.raw)
            : o.raw;
        return t.request(
          { method: "personal_sign", params: [c, s.address] },
          { retryCount: 0 }
        );
      }
      t.s(["f", 0, r], 599976);
      var i = t.i(695331);
      t.s(
        [
          "f",
          0,
          function (t, e = {}) {
            let {
              key: a = "custom",
              methods: n,
              name: r = "Custom Provider",
              retryDelay: o,
            } = e;
            return ({ retryCount: s }) =>
              (0, i.f)({
                key: a,
                methods: n,
                name: r,
                request: t.request.bind(t),
                retryCount: e.retryCount ?? s,
                retryDelay: o,
                type: "custom",
              });
          },
        ],
        911347
      );
    },
    763448,
    (t) => {
      var e = t.i(569934),
        a = t.i(403058),
        n = t.i(467125),
        r = t.i(20101),
        i = t.i(976215),
        o = t.i(509486),
        s = t.i(204202),
        c = t.i(34888),
        l = t.i(509916);
      let u = new WeakMap(),
        f = 0;
      function d(t) {
        let e = u.get(t);
        return void 0 === e && ((e = ++f), u.set(t, e)), e;
      }
      async function p(t, e) {
        let u,
          {
            id: f,
            pollingInterval: p = t.pollingInterval,
            status: m = ({ statusCode: t }) => 200 === t || t >= 300,
            retryCount: w = 4,
            retryDelay: y = ({ count: t }) => 200 * ~~(1 << t),
            timeout: g = 6e4,
            throwOnFailure: v = !1,
          } = e,
          b = (0, c.f)([
            "waitForCallsStatus",
            t.uid,
            f,
            {
              pollingInterval: p,
              retryCount: w,
              retryDelay:
                "function" == typeof e.retryDelay
                  ? ["function", d(e.retryDelay)]
                  : e.retryDelay,
              status: e.status ? d(e.status) : void 0,
              throwOnFailure: v,
            },
          ]),
          { promise: T, resolve: C, reject: R } = (0, o.f)(),
          x = (0, r.f)(b, { resolve: C, reject: R }, (e) => {
            let r = (0, i.f)(
              async () => {
                let i = (t) => {
                  clearTimeout(u), r(), t(), x();
                };
                try {
                  let r = await (0, s.f)(
                    async () => {
                      let e = await (0, n.f)(
                        t,
                        l.f,
                        "getCallsStatus"
                      )({ id: f });
                      if (v && "failure" === e.status) throw new a.f(e);
                      return e;
                    },
                    { retryCount: w, delay: y }
                  );
                  if (!m(r)) return;
                  i(() => e.resolve(r));
                } catch (t) {
                  i(() => e.reject(t));
                }
              },
              { interval: p, emitOnBegin: !0 }
            );
            return r;
          });
        return (
          (u = g
            ? setTimeout(() => {
                x(), clearTimeout(u), R(new h({ id: f }));
              }, g)
            : void 0),
          await T.finally(() => x())
        );
      }
      class h extends e.L {
        constructor({ id: t }) {
          super(
            `Timed out while waiting for call bundle with id "${t}" to be confirmed.`,
            { name: "WaitForCallsStatusTimeoutError" }
          );
        }
      }
      t.s(["W", 0, h, "i", 0, p]);
    },
    938630,
    544919,
    545913,
    (t) => {
      var e = t.i(189991),
        a = t.i(611573),
        n = t.i(656679),
        r = t.i(807749),
        i = t.i(467125),
        o = t.i(888794);
      async function s(t, e) {
        return s.internal(t, o.f, "sendTransaction", e);
      }
      ((s || (s = {})).internal = async function (t, o, s, c) {
        let {
          abi: l,
          account: u = t.account,
          address: f,
          args: d,
          functionName: p,
          ...h
        } = c;
        if (void 0 === u)
          throw new a.A({ docsPath: "/docs/contract/writeContract" });
        let m = u ? (0, e.f)(u) : null,
          w = (0, n.f)({ abi: l, args: d, functionName: p });
        try {
          return await (0, i.f)(t, o, s)({ data: w, to: f, account: m, ...h });
        } catch (t) {
          throw (0, r.f)(t, {
            abi: l,
            address: f,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: p,
            sender: m?.address,
          });
        }
      }),
        t.s(["f", 0, s], 938630);
      var c = t.i(569934),
        l = t.i(400564),
        u = t.i(795),
        f = t.i(769936),
        d = t.i(675107);
      function p(t, e, a) {
        if (128 === a && e < 128) return 1;
        if (e <= a + 55) return e - a;
        if (e === a + 55 + 1) return t.readUint8();
        if (e === a + 55 + 2) return t.readUint16();
        if (e === a + 55 + 3) return t.readUint24();
        if (e === a + 55 + 4) return t.readUint32();
        throw new c.L("Invalid RLP prefix");
      }
      t.s(
        [
          "f",
          0,
          function (t, e = "hex") {
            let a = (() => {
                if ("string" == typeof t) {
                  if (t.length > 3 && t.length % 2 != 0) throw new l.t(t);
                  return (0, f.X)(t);
                }
                return t;
              })(),
              n = (0, u.f)(a, { recursiveReadLimit: 1 / 0 }),
              r = (function t(e, a = "hex", n = 0) {
                if (n >= 1024) throw new l.q({ limit: 1024 });
                if (0 === e.bytes.length)
                  return "hex" === a ? (0, d.v)(e.bytes) : e.bytes;
                let r = e.readByte();
                if ((r < 128 && e.decrementPosition(1), r < 192)) {
                  let t = p(e, r, 128),
                    n = e.readBytes(t);
                  return "hex" === a ? (0, d.v)(n) : n;
                }
                let i = p(e, r, 192);
                var o = e,
                  s = i,
                  c = a,
                  u = n + 1;
                let f = o.position,
                  h = [];
                for (; o.position - f < s; ) h.push(t(o, c, u));
                if (o.position - f !== s)
                  throw new l.U({ consumed: o.position - f, declared: s });
                return h;
              })(n, e);
            if (n.position < n.bytes.length)
              throw new l.i({ count: n.bytes.length - n.position });
            return r;
          },
        ],
        544919
      );
      var h = t.i(880841);
      t.s(
        [
          "f",
          0,
          function (t) {
            return (0, h.f)(t) && 66 === t.length;
          },
        ],
        545913
      );
    },
    363625,
    (t) => {
      var e = t.i(189991),
        a = t.i(606624);
      let n = new WeakSet(),
        r = 0;
      function i(t) {
        if ("object" != typeof t || null === t) return !1;
        let e = Object.getPrototypeOf(t);
        return e === Object.prototype || null === e;
      }
      t.s([
        "y",
        0,
        function (t, e) {
          let a = (a = {}) => e(t, a);
          for (let n of [
            "call",
            "calls",
            "callWithPeriod",
            "estimateGas",
            "prepare",
            "prepareRecipient",
            "predict",
            "simulate",
          ])
            if (Object.hasOwn(e, n)) {
              let r = e[n];
              a[n] = (e = {}) => (1 === r.length ? r(e) : r(t, e));
            }
          for (let t of ["extractEvent", "extractEvents"])
            Object.hasOwn(e, t) && (a[t] = e[t]);
          return a;
        },
        "g",
        0,
        function (t) {
          let {
              batch: o,
              chain: s,
              ccipRead: c,
              dataSuffix: l,
              key: u = "base",
              name: f = "Base Client",
              tokens: d,
              type: p = "base",
            } = t,
            h =
              t.experimental_blockTag ??
              ("number" == typeof s?.experimental_preconfirmationTime
                ? "pending"
                : void 0),
            m = s?.blockTime ?? 12e3,
            w = Math.min(Math.max(Math.floor(m / 2), 500), 4e3),
            y = t.pollingInterval ?? w,
            g = t.cacheTime ?? Math.min(y, Math.floor(m / 2)),
            v = t.account ? (0, e.f)(t.account) : void 0,
            {
              config: b,
              request: T,
              value: C,
            } = t.transport({ account: v, chain: s, pollingInterval: y });
          return (function t(e) {
            function a(a) {
              let i = new WeakMap(),
                o = (n = {}) => {
                  let o = n.signal && i.get(n.signal);
                  if (o) return o;
                  let s = `scope.${r++}`,
                    c = new AbortController(),
                    { signal: l } = n;
                  l?.aborted
                    ? c.abort(l.reason)
                    : l?.addEventListener("abort", () => c.abort(l.reason), {
                        once: !0,
                      });
                  let u = a.reduce(
                    (t, e) => t.extend(e),
                    t({
                      ...e,
                      request: (t, a) =>
                        e.request(t, {
                          ...a,
                          signal: a?.signal ?? c.signal,
                          uid: a?.uid ?? s,
                        }),
                      uid: s,
                    })
                  );
                  return l && i.set(l, u), u;
                };
              return n.add(o), o;
            }
            return Object.assign(e, {
              extend: (function t(r, o) {
                return (s) => {
                  let c = s(r);
                  for (let t in e) "scope" !== t && delete c[t];
                  let l = { ...r, ...c };
                  for (let t in c) {
                    let e = r[t],
                      a = c[t];
                    i(e) && i(a) && (l[t] = { ...e, ...a });
                  }
                  let u = [...o, s],
                    { scope: f } = l;
                  return Object.assign(l, {
                    extend: t(l, u),
                    scope: "function" == typeof f && n.has(f) ? a(u) : f,
                  });
                };
              })(e, []),
              scope: a([]),
            });
          })({
            account: v,
            batch: o,
            cacheTime: g,
            ccipRead: c,
            chain: s,
            dataSuffix: l,
            key: u,
            name: f,
            pollingInterval: y,
            request: T,
            tokens: d,
            transport: { ...b, ...C },
            type: p,
            uid: (0, a.f)(),
            ...(h ? { experimental_blockTag: h } : {}),
          });
        },
        "z",
        0,
        function () {
          return null;
        },
      ]);
    },
    309682,
    (t) => {
      var e = t.i(363625),
        a = t.i(24335);
      t.s([
        "f",
        0,
        function (t) {
          let { key: n = "public", name: r = "Public Client" } = t;
          return (0, e.g)({
            ...t,
            key: n,
            name: r,
            type: "publicClient",
          }).extend(a.f);
        },
      ]);
    },
    57159,
    414639,
    (t) => {
      var e = t.i(363625),
        a = t.i(818249),
        n = t.i(975948),
        r = t.i(752012),
        i = t.i(897282),
        o = t.i(369121),
        s = t.i(106145),
        c = t.i(938630),
        l = t.i(868750);
      async function u(t, e) {
        return u.inner(c.f, t, e);
      }
      !(function (t) {
        async function e(e, a, n) {
          return await e(a, { ...n, ...t.call(a, n) });
        }
        async function a(e, a) {
          return (0, o.f)(e, { ...(0, l.N)(a), ...t.call(e, a) });
        }
        async function n(e, a) {
          return (0, s.f)(e, { ...(0, l.N)(a), ...t.call(e, a) });
        }
        (t.inner = e),
          Object.defineProperty(t, "call", {
            configurable: !0,
            enumerable: !0,
            value: function (t, e) {
              return (0, l.V)(
                (function (t, e) {
                  let { amount: a, spender: n, token: i } = e,
                    { address: o, decimals: s } = (0, l.M)(t, { token: i });
                  return {
                    abi: r.q,
                    address: o,
                    args: [n, (0, l.Z)(a, s)],
                    functionName: "approve",
                  };
                })(t, e)
              );
            },
            writable: !0,
          }),
          (t.estimateGas = a),
          (t.simulate = n),
          (t.extractEvent = function (t) {
            let [e] = (0, i.f)({
              abi: r.q,
              logs: t,
              eventName: "Approval",
              strict: !0,
            });
            if (!e) throw Error("`Approval` event not found.");
            return e;
          });
      })(u || (u = {}));
      var f = t.i(644616),
        d = t.i(189991),
        p = t.i(611573),
        h = t.i(569934),
        m = t.i(393702),
        w = t.i(89788),
        y = t.i(942305),
        g = t.i(147526),
        v = t.i(790063),
        b = t.i(544919),
        T = t.i(70326),
        C = t.i(10725),
        R = t.i(264404),
        x = t.i(190521),
        N = t.i(467125),
        q = t.i(545913),
        k = t.i(831095),
        S = t.i(976677),
        M = t.i(353464),
        E = t.i(948789),
        A = t.i(368941),
        P = t.i(738977);
      let I = new S.f(128);
      async function _(t, e) {
        let a,
          {
            account: r = t.account,
            assertChainId: i = !0,
            chain: o = t.chain,
            accessList: s,
            authorizationList: c,
            blobs: l,
            data: u,
            dataSuffix: f = "string" == typeof t.dataSuffix
              ? t.dataSuffix
              : t.dataSuffix?.value,
            gas: S,
            gasPrice: _,
            maxFeePerBlobGas: L,
            maxFeePerGas: z,
            maxPriorityFeePerGas: O,
            nonce: j,
            pollingInterval: B,
            throwOnReceiptRevert: D,
            type: F,
            value: U,
            ...K
          } = e,
          W = e.timeout ?? Math.max((o?.blockTime ?? 0) * 3, 5e3);
        if (void 0 === r)
          throw new p.A({
            docsPath: "/docs/actions/wallet/sendTransactionSync",
          });
        let $ = r ? (0, d.f)(r) : null;
        try {
          (0, M.f)(e);
          let r = await (async () =>
            e.to
              ? e.to
              : null !== e.to && c && c.length > 0
              ? await (0, w.f)({ authorization: c[0] }).catch(() => {
                  throw new h.L(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if ($?.type === "json-rpc" || null === $) {
            let e;
            null !== o &&
              ((e = await (0, N.f)(t, n.f, "getChainId")({})),
              i && (0, y.f)({ currentChainId: e, chain: o }));
            let a = t.chain?.formatters?.transactionRequest?.format,
              d = (a || x.F)(
                {
                  ...(0, R.f)(K, { format: a }),
                  accessList: s,
                  account: $,
                  authorizationList: c,
                  blobs: l,
                  chainId: e,
                  data: f ? (0, g.w)([u ?? "0x", f]) : u,
                  gas: S,
                  gasPrice: _,
                  maxFeePerBlobGas: L,
                  maxFeePerGas: z,
                  maxPriorityFeePerGas: O,
                  nonce: j,
                  to: r,
                  type: F,
                  value: U,
                },
                "sendTransaction"
              ),
              p = I.get(t.uid),
              h = p ? "wallet_sendTransaction" : "eth_sendTransaction",
              w = await (async () => {
                try {
                  return await t.request(
                    { method: h, params: [d] },
                    { retryCount: 0 }
                  );
                } catch (e) {
                  if (!1 === p) throw e;
                  if (
                    "InvalidInputRpcError" === e.name ||
                    "InvalidParamsRpcError" === e.name ||
                    "MethodNotFoundRpcError" === e.name ||
                    "MethodNotSupportedRpcError" === e.name
                  )
                    return await t
                      .request(
                        { method: "wallet_sendTransaction", params: [d] },
                        { retryCount: 0 }
                      )
                      .then((e) => (I.set(t.uid, !0), e))
                      .catch((a) => {
                        if (
                          "MethodNotFoundRpcError" === a.name ||
                          "MethodNotSupportedRpcError" === a.name
                        )
                          throw (I.set(t.uid, !1), e);
                        throw a;
                      });
                  throw e;
                }
              })(),
              v = await (0, N.f)(
                t,
                E.f,
                "waitForTransactionReceipt"
              )({
                checkReplacement: !1,
                hash: w,
                pollingInterval: B,
                timeout: W,
              });
            if (D && "reverted" === v.status) throw new m.E({ receipt: v });
            return v;
          }
          if ($?.type === "local") {
            let n = (() => {
                if (!$.nonceManager || void 0 !== j) return $.nonceManager;
                let t = $.nonceManager;
                return {
                  async consume(e) {
                    a = { address: e.address, chainId: e.chainId };
                    let n = await t.consume(e);
                    return (a = { ...a, nonce: n }), n;
                  },
                  get: (e) => t.get(e),
                  increment: (e) => t.increment(e),
                  reset: (e) => t.reset(e),
                };
              })(),
              i = await (0, N.f)(
                t,
                A.i,
                "prepareTransactionRequest"
              )({
                account: $,
                accessList: s,
                authorizationList: c,
                blobs: l,
                chain: o,
                data: f ? (0, g.w)([u ?? "0x", f]) : u,
                gas: S,
                gasPrice: _,
                maxFeePerBlobGas: L,
                maxFeePerGas: z,
                maxPriorityFeePerGas: O,
                nonce: j,
                nonceManager: n,
                parameters: [...A.v, "sidecars"],
                type: F,
                value: U,
                ...K,
                to: r,
              }),
              d = o?.serializers?.transaction,
              p = await $.signTransaction(i, { serializer: d }),
              w = (o ?? t.chain)?.serializers?.transactionEnvelope,
              y = w ? await w({ serializedTransaction: p, transaction: i }) : p,
              C = Date.now();
            try {
              return await (0, N.f)(
                t,
                P.f,
                "sendRawTransactionSync"
              )({
                serializedTransaction: y,
                throwOnReceiptRevert: D,
                timeout: e.timeout,
              });
            } catch (o) {
              let e = o instanceof h.L ? o.walk((t) => t?.code === 4) : null;
              if (!e) throw o;
              a = void 0;
              let n = (() => {
                  let { data: t } = e;
                  if ("string" == typeof t && (0, q.f)(t)) return t;
                  if ("0x03" === (0, v.n)(y, 0, 1)) {
                    let t = (0, b.f)((0, v.n)(y, 1));
                    if (4 === t.length && Array.isArray(t[0]))
                      return (0, k.f)((0, g.w)(["0x03", (0, T.C)(t[0])]));
                  }
                  return (0, k.f)(y);
                })(),
                r = W - (Date.now() - C);
              if (r <= 0) throw new m.K({ hash: n });
              let i = await (0, N.f)(
                t,
                E.f,
                "waitForTransactionReceipt"
              )({
                checkReplacement: !1,
                hash: n,
                pollingInterval: B,
                timeout: r,
              });
              if (D && "reverted" === i.status) throw new m.E({ receipt: i });
              return i;
            }
          }
          if ($?.type === "smart")
            throw new p.c({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new p.c({
            docsPath: "/docs/actions/wallet/sendTransactionSync",
            type: $?.type,
          });
        } catch (t) {
          if (t instanceof p.c) throw t;
          throw (
            (!a || t instanceof m.E || $?.nonceManager?.reset(a),
            (0, C.f)(t, { ...e, account: $, chain: e.chain || void 0 }))
          );
        }
      }
      async function L(t, e) {
        return c.f.internal(t, _, "sendTransactionSync", e);
      }
      async function z(t, e) {
        let { amount: a, token: n, throwOnReceiptRevert: r = !0 } = e,
          { decimals: i } = (0, l.M)(t, { token: n }),
          o = (0, l.Y)(a, i),
          s = await u.inner(L, t, { ...e, throwOnReceiptRevert: r }),
          { args: c } = u.extractEvent(s.logs);
        return {
          ...c,
          ...(void 0 === o
            ? {}
            : { decimals: o, formatted: (0, f.f)(c.value, o) }),
          receipt: s,
        };
      }
      async function O(t, e) {
        return O.inner(c.f, t, e);
      }
      async function j(t, e) {
        let { amount: a, token: n, throwOnReceiptRevert: r = !0 } = e,
          { decimals: i } = (0, l.M)(t, { token: n }),
          o = (0, l.Y)(a, i),
          s = await O.inner(L, t, { ...e, throwOnReceiptRevert: r }),
          { args: c } = O.extractEvent(s.logs);
        return {
          ...c,
          ...(void 0 === o
            ? {}
            : { decimals: o, formatted: (0, f.f)(c.value, o) }),
          receipt: s,
        };
      }
      !(function (t) {
        async function e(e, a, n) {
          return await e(a, { ...n, ...t.call(a, n) });
        }
        async function a(e, a) {
          return (0, o.f)(e, { ...(0, l.N)(a), ...t.call(e, a) });
        }
        async function n(e, a) {
          return (0, s.f)(e, { ...(0, l.N)(a), ...t.call(e, a) });
        }
        (t.inner = e),
          Object.defineProperty(t, "call", {
            configurable: !0,
            enumerable: !0,
            value: function (t, e) {
              return (0, l.V)(
                (function (t, e) {
                  let { amount: a, from: n, to: i, token: o } = e,
                    { address: s, decimals: c } = (0, l.M)(t, { token: o }),
                    u = (0, l.Z)(a, c);
                  return n
                    ? {
                        abi: r.q,
                        address: s,
                        args: [n, i, u],
                        functionName: "transferFrom",
                      }
                    : {
                        abi: r.q,
                        address: s,
                        args: [i, u],
                        functionName: "transfer",
                      };
                })(t, e)
              );
            },
            writable: !0,
          }),
          (t.estimateGas = a),
          (t.simulate = n),
          (t.extractEvent = function (t) {
            let [e] = (0, i.f)({
              abi: r.q,
              logs: t,
              eventName: "Transfer",
              strict: !0,
            });
            if (!e) throw Error("`Transfer` event not found.");
            return e;
          });
      })(O || (O = {}));
      var B = t.i(675107);
      async function D(t, { chain: e }) {
        let {
          id: a,
          name: n,
          nativeCurrency: r,
          rpcUrls: i,
          blockExplorers: o,
        } = e;
        await t.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, B.N)(a),
                chainName: n,
                nativeCurrency: r,
                rpcUrls: i.default.http,
                blockExplorerUrls: o
                  ? Object.values(o).map(({ url: t }) => t)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      var F = t.i(289169),
        U = t.i(888794),
        K = t.i(823838);
      async function W(t) {
        return t.account?.type === "local"
          ? [t.account.address]
          : (await t.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (t) => (0, K.b)(t)
            );
      }
      var $ = t.i(509916);
      async function G(t, e = {}) {
        let { account: a = t.account, chainId: n } = e,
          r = a ? (0, d.f)(a) : void 0,
          i = n ? [r?.address, [(0, B.N)(n)]] : [r?.address],
          o = await t.request({ method: "wallet_getCapabilities", params: i }),
          s = {};
        for (let [t, e] of Object.entries(o))
          for (let [a, n] of ((s[Number(t)] = {}), Object.entries(e)))
            "addSubAccount" === a && (a = "unstable_addSubAccount"),
              (s[Number(t)][a] = n);
        return "number" == typeof n ? s[n] : s;
      }
      async function V(t) {
        return await t.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      var X = t.i(829897);
      async function Y(t) {
        return (
          await t.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((t) => (0, K.A)(t));
      }
      async function Z(t, e) {
        return t.request(
          { method: "wallet_requestPermissions", params: [e] },
          { retryCount: 0 }
        );
      }
      var H = t.i(460841),
        J = t.i(763448);
      async function Q(t, e) {
        let { chain: a = t.chain } = e,
          n = e.timeout ?? Math.max((a?.blockTime ?? 0) * 3, 5e3),
          r = await (0, N.f)(t, H.d, "sendCalls")(e);
        return await (0, N.f)(
          t,
          J.i,
          "waitForCallsStatus"
        )({ ...e, id: r.id, timeout: n });
      }
      var tt = t.i(638291);
      async function te(t, e) {
        let { id: a } = e;
        await t.request({ method: "wallet_showCallsStatus", params: [a] });
      }
      async function ta(t, e) {
        let { account: a = t.account } = e;
        if (!a) throw new p.A({ docsPath: "/docs/eip7702/signAuthorization" });
        let n = (0, d.f)(a);
        if (!n.signAuthorization)
          throw new p.c({
            docsPath: "/docs/eip7702/signAuthorization",
            metaMessages: [
              "The `signAuthorization` Action does not support JSON-RPC Accounts.",
            ],
            type: n.type,
          });
        let r = await (0, X.f)(t, e);
        return n.signAuthorization(r);
      }
      var tn = t.i(599976);
      async function tr(t, e) {
        let { account: a = t.account, chain: r = t.chain, ...i } = e;
        if (!a)
          throw new p.A({ docsPath: "/docs/actions/wallet/signTransaction" });
        let o = (0, d.f)(a);
        (0, M.f)({ account: o, ...e });
        let s = await (0, N.f)(t, n.f, "getChainId")({});
        null !== r && (0, y.f)({ currentChainId: s, chain: r });
        let c = r?.formatters || t.chain?.formatters,
          l = c?.transactionRequest?.format || x.F;
        return o.signTransaction
          ? o.signTransaction(
              { ...i, account: o, chainId: s },
              { serializer: t.chain?.serializers?.transaction }
            )
          : await t.request(
              {
                method: "eth_signTransaction",
                params: [
                  {
                    ...l({ ...i, account: o }, "signTransaction"),
                    chainId: (0, B.N)(s),
                    from: o.address,
                  },
                ],
              },
              { retryCount: 0 }
            );
      }
      var ti = t.i(643506);
      async function to(t, e) {
        let {
          account: a = t.account,
          domain: n,
          message: r,
          primaryType: i,
        } = e;
        if (!a)
          throw new p.A({ docsPath: "/docs/actions/wallet/signTypedData" });
        let o = (0, d.f)(a),
          s = { EIP712Domain: (0, ti.m)({ domain: n }), ...e.types };
        if (
          ((0, ti.N)({ domain: n, message: r, primaryType: i, types: s }),
          o.signTypedData)
        )
          return o.signTypedData({
            domain: n,
            message: r,
            primaryType: i,
            types: s,
          });
        let c = (0, ti.f)({ domain: n, message: r, primaryType: i, types: s });
        return t.request(
          { method: "eth_signTypedData_v4", params: [o.address, c] },
          { retryCount: 0 }
        );
      }
      async function ts(t, { id: e }) {
        await t.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, B.N)(e) }],
          },
          { retryCount: 0 }
        );
      }
      async function tc(t, e) {
        return await t.request(
          { method: "wallet_watchAsset", params: e },
          { retryCount: 0 }
        );
      }
      function tl(t) {
        return {
          addChain: (e) => D(t, e),
          deployContract: (e) =>
            (function (t, e) {
              let { abi: a, args: n, bytecode: r, ...i } = e,
                o = (0, F.f)({ abi: a, args: n, bytecode: r });
              return (0, U.f)(t, {
                ...i,
                ...(i.authorizationList ? { to: null } : {}),
                data: o,
              });
            })(t, e),
          fillTransaction: (e) => (0, a.f)(t, e),
          getAddresses: () => W(t),
          getCallsStatus: (e) => (0, $.f)(t, e),
          getCapabilities: (e) => G(t, e),
          getChainId: () => (0, n.f)(t),
          getPermissions: () => V(t),
          prepareAuthorization: (e) => (0, X.f)(t, e),
          prepareTransactionRequest: (e) => (0, A.i)(t, e),
          requestAddresses: () => Y(t),
          requestPermissions: (e) => Z(t, e),
          sendCalls: (e) => (0, H.d)(t, e),
          sendCallsSync: (e) => Q(t, e),
          sendRawTransaction: (e) => (0, tt.f)(t, e),
          sendRawTransactionSync: (e) => (0, P.f)(t, e),
          sendTransaction: (e) => (0, U.f)(t, e),
          sendTransactionSync: (e) => _(t, e),
          showCallsStatus: (e) => te(t, e),
          signAuthorization: (e) => ta(t, e),
          signMessage: (e) => (0, tn.f)(t, e),
          signTransaction: (e) => tr(t, e),
          signTypedData: (e) => to(t, e),
          switchChain: (e) => ts(t, e),
          waitForCallsStatus: (e) => (0, J.i)(t, e),
          watchAsset: (e) => tc(t, e),
          writeContract: (e) => (0, c.f)(t, e),
          writeContractSync: (e) => L(t, e),
          token: {
            approve: (0, e.y)(t, u),
            approveSync: (0, e.y)(t, z),
            transfer: (0, e.y)(t, O),
            transferSync: (0, e.y)(t, j),
          },
        };
      }
      t.s(["f", 0, tl], 414639),
        t.s(
          [
            "f",
            0,
            function (t) {
              let {
                key: a = "wallet",
                name: n = "Wallet Client",
                transport: r,
              } = t;
              return (0, e.g)({
                ...t,
                key: a,
                name: n,
                transport: r,
                type: "walletClient",
              }).extend(tl);
            },
          ],
          57159
        );
    },
    307075,
    (t) => {
      var e = t.i(569934),
        a = t.i(853532),
        n = t.i(383856),
        r = t.i(588233),
        i = t.i(695331);
      function o(t) {
        return !!(
          "code" in t &&
          "number" == typeof t.code &&
          (t.code === n.g.code ||
            t.code === n.k.code ||
            t.code === n.B.code ||
            a.s.nodeMessage.test(t.message) ||
            5e3 === t.code)
        );
      }
      t.s([
        "b",
        0,
        function (t, a = {}) {
          let {
            key: n = "fallback",
            name: s = "Fallback",
            rank: c = !1,
            shouldThrow: l = o,
            retryCount: u,
            retryDelay: f,
          } = a;
          return ({ chain: a, pollingInterval: o = 4e3, timeout: d, ...p }) => {
            let h = t,
              m = () => {},
              w = (0, i.f)(
                {
                  key: n,
                  name: s,
                  async request({ method: t, params: n }, r) {
                    let i,
                      o = async (s = 0) => {
                        let c = h[s]({
                          ...p,
                          chain: a,
                          retryCount: 0,
                          timeout: d,
                        });
                        try {
                          let e = await c.request({ method: t, params: n }, r);
                          return (
                            m({
                              method: t,
                              params: n,
                              response: e,
                              transport: c,
                              status: "success",
                            }),
                            e
                          );
                        } catch (r) {
                          if (
                            (m({
                              error: r,
                              method: t,
                              params: n,
                              transport: c,
                              status: "error",
                            }),
                            l(r) ||
                              ("eth_sendRawTransactionSync" === t &&
                                r instanceof e.L &&
                                r.walk((t) => t?.code === 4)) ||
                              s === h.length - 1 ||
                              !(i ??= h.slice(s + 1).some((e) => {
                                let { include: n, exclude: r } =
                                  e({ chain: a }).config.methods || {};
                                return n ? n.includes(t) : !r || !r.includes(t);
                              })))
                          )
                            throw r;
                          return o(s + 1);
                        }
                      };
                    return o();
                  },
                  retryCount: u,
                  retryDelay: f,
                  type: "fallback",
                },
                {
                  onResponse: (t) => (m = t),
                  transports: h.map((t) => t({ chain: a, retryCount: 0 })),
                }
              );
            if (c) {
              let t = "object" == typeof c ? c : {};
              !(function ({
                chain: t,
                interval: e = 4e3,
                onTransports: a,
                ping: n,
                sampleCount: i = 10,
                timeout: o = 1e3,
                transports: s,
                weights: c = {},
              }) {
                let { stability: l = 0.7, latency: u = 0.3 } = c,
                  f = [],
                  d = async () => {
                    let c = await Promise.all(
                      s.map(async (e) => {
                        let a,
                          r,
                          i = e({ chain: t, retryCount: 0, timeout: o }),
                          s = Date.now();
                        try {
                          await (n
                            ? n({ transport: i })
                            : i.request({ method: "net_listening" })),
                            (r = 1);
                        } catch {
                          r = 0;
                        } finally {
                          a = Date.now();
                        }
                        return { latency: a - s, success: r };
                      })
                    );
                    f.push(c), f.length > i && f.shift();
                    let p = Math.max(
                      ...f.map((t) => Math.max(...t.map(({ latency: t }) => t)))
                    );
                    a(
                      s
                        .map((t, e) => {
                          let a = f.map((t) => t[e].latency),
                            n = a.reduce((t, e) => t + e, 0) / a.length,
                            r = f.map((t) => t[e].success),
                            i = r.reduce((t, e) => t + e, 0) / r.length;
                          return 0 === i
                            ? [0, e]
                            : [u * (1 - n / p) + l * i, e];
                        })
                        .sort((t, e) => e[0] - t[0])
                        .map(([, t]) => s[t])
                    ),
                      await (0, r.f)(e),
                      d();
                  };
                d();
              })({
                chain: a,
                interval: t.interval ?? o,
                onTransports: (t) => (h = t),
                ping: t.ping,
                sampleCount: t.sampleCount,
                timeout: t.timeout,
                transports: h,
                weights: t.weights,
              });
            }
            return w;
          };
        },
        "n",
        0,
        o,
      ]);
    },
    403058,
    (t) => {
      var e = t.i(569934);
      class a extends e.L {
        constructor(t) {
          super(`Call bundle failed with status: ${t.statusCode}`, {
            name: "BundleFailedError",
          }),
            Object.defineProperty(this, "result", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.result = t);
        }
      }
      t.s(["f", 0, a]);
    },
    20101,
    (t) => {
      let e = new Map(),
        a = new Map(),
        n = 0;
      t.s([
        "f",
        0,
        function (t, r, i) {
          let o = ++n,
            s = () => e.get(t) || [],
            c = () => {
              let n = s();
              if (!n.some((t) => t.id === o)) return;
              let r = a.get(t);
              if (1 === n.length && r) {
                let t = r();
                t instanceof Promise && t.catch(() => {});
              }
              (() => {
                let n = s().filter((t) => t.id !== o);
                if (0 === n.length) {
                  e.delete(t), a.delete(t);
                  return;
                }
                e.set(t, n);
              })();
            },
            l = s();
          if ((e.set(t, [...l, { id: o, fns: r }]), l && l.length > 0))
            return c;
          let u = {};
          for (let t in r)
            u[t] = (...e) => {
              let a = s();
              if (0 !== a.length) for (let n of a) n.fns[t]?.(...e);
            };
          let f = i(u);
          return "function" == typeof f && a.set(t, f), c;
        },
      ]);
    },
    976215,
    (t) => {
      var e = t.i(588233);
      t.s([
        "f",
        0,
        function (t, { emitOnBegin: a, initialWaitTime: n, interval: r }) {
          let i = !0,
            o = () => (i = !1);
          return (
            (async () => {
              let s;
              a && (s = await t({ unpoll: o }));
              let c = (await n?.(s)) ?? r;
              await (0, e.f)(c);
              let l = async () => {
                i && (await t({ unpoll: o }), await (0, e.f)(r), l());
              };
              l();
            })(),
            o
          );
        },
      ]);
    },
  ]);
})();
