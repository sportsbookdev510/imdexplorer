(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    789268,
    (t) => {
      var e = t.i(752012),
        a = t.i(600547),
        r = t.i(656679),
        n = t.i(823838),
        i = t.i(404195),
        s = t.i(401319),
        o = t.i(8406),
        f = t.i(675107),
        c = t.i(31384),
        l = t.i(461147),
        u = t.i(515056),
        d = t.i(438642),
        p = t.i(467125),
        m = t.i(388750);
      async function b(t, b) {
        let {
            blockNumber: g,
            blockTag: y,
            coinType: h,
            name: v,
            gatewayUrls: w,
            strict: N,
          } = b,
          { chain: k } = t,
          B = (() => {
            if (b.universalResolverAddress) return b.universalResolverAddress;
            if (!k)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, i.f)({
              blockNumber: g,
              chain: k,
              contract: "ensUniversalResolver",
            });
          })(),
          T = k?.ensTlds;
        if (T && !T.some((t) => v.endsWith(t))) return null;
        let E = null != h ? [(0, u.f)(v), BigInt(h)] : [(0, u.f)(v)];
        try {
          let i = (0, r.f)({ abi: e._, functionName: "addr", args: E }),
            c = {
              address: B,
              abi: e.i,
              functionName: "resolveWithGateways",
              args: [(0, f.g)((0, d.f)(v)), i, w ?? [l.o]],
              blockNumber: g,
              blockTag: y,
            },
            u = (0, p.f)(t, m.f, "readContract"),
            b = await u(c);
          if ("0x" === b[0]) return null;
          let N = (function ({ coinType: t, data: r, args: i }) {
            try {
              return (0, a.f)({
                abi: e._,
                args: i,
                functionName: "addr",
                data: r,
              });
            } catch (a) {
              if (null == t) throw a;
              let e = (0, o.f)(r);
              if (20 === (0, s.f)(e)) return (0, n.A)(e);
              throw a;
            }
          })({ coinType: h, data: b[0], args: E });
          if ("0x" === N || "0x00" === (0, o.f)(N)) return null;
          return N;
        } catch (t) {
          if (N) throw t;
          if ((0, c.f)(t)) return null;
          throw t;
        }
      }
      t.s(["f", 0, b]);
    },
    964348,
    57770,
    710959,
    (t) => {
      var e = t.i(690501),
        a = t.i(467125),
        r = t.i(752012),
        n = t.i(600547),
        i = t.i(656679),
        s = t.i(404195),
        o = t.i(675107),
        f = t.i(31384),
        c = t.i(461147),
        l = t.i(515056),
        u = t.i(438642),
        d = t.i(388750);
      async function p(t, e) {
        let {
            blockNumber: p,
            blockTag: m,
            key: b,
            name: g,
            gatewayUrls: y,
            strict: h,
          } = e,
          { chain: v } = t,
          w = (() => {
            if (e.universalResolverAddress) return e.universalResolverAddress;
            if (!v)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, s.f)({
              blockNumber: p,
              chain: v,
              contract: "ensUniversalResolver",
            });
          })(),
          N = v?.ensTlds;
        if (N && !N.some((t) => g.endsWith(t))) return null;
        try {
          let e = {
              address: w,
              abi: r.i,
              args: [
                (0, o.g)((0, u.f)(g)),
                (0, i.f)({
                  abi: r.N,
                  functionName: "text",
                  args: [(0, l.f)(g), b],
                }),
                y ?? [c.o],
              ],
              functionName: "resolveWithGateways",
              blockNumber: p,
              blockTag: m,
            },
            s = (0, a.f)(t, d.f, "readContract"),
            f = await s(e);
          if ("0x" === f[0]) return null;
          let h = (0, n.f)({ abi: r.N, functionName: "text", data: f[0] });
          return "" === h ? null : h;
        } catch (t) {
          if (h) throw t;
          if ((0, f.f)(t)) return null;
          throw t;
        }
      }
      async function m(
        t,
        {
          blockNumber: r,
          blockTag: n,
          assetGatewayUrls: i,
          name: s,
          gatewayUrls: o,
          strict: f,
          universalResolverAddress: c,
        }
      ) {
        let l = await (0, a.f)(
          t,
          p,
          "getEnsText"
        )({
          blockNumber: r,
          blockTag: n,
          key: "avatar",
          name: s,
          universalResolverAddress: c,
          gatewayUrls: o,
          strict: f,
        });
        if (!l) return null;
        try {
          return await (0, e.f)(t, { record: l, gatewayUrls: i });
        } catch {
          return null;
        }
      }
      async function b(t, e) {
        let {
            address: n,
            blockNumber: i,
            blockTag: o,
            coinType: l = 60n,
            gatewayUrls: u,
            strict: p,
          } = e,
          { chain: m } = t,
          b = (() => {
            if (e.universalResolverAddress) return e.universalResolverAddress;
            if (!m)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, s.f)({
              blockNumber: i,
              chain: m,
              contract: "ensUniversalResolver",
            });
          })();
        try {
          let e = {
              address: b,
              abi: r.$,
              args: [n, l, u ?? [c.o]],
              functionName: "reverseWithGateways",
              blockNumber: i,
              blockTag: o,
            },
            s = (0, a.f)(t, d.f, "readContract"),
            [f] = await s(e);
          return f || null;
        } catch (t) {
          if (p) throw t;
          if ((0, f.f)(t)) return null;
          throw t;
        }
      }
      t.s(["f", 0, p], 57770),
        t.s(["f", 0, m], 964348),
        t.s(["f", 0, b], 710959);
    },
    356317,
    112039,
    (t) => {
      var e = t.i(404195),
        a = t.i(675107),
        r = t.i(438642),
        n = t.i(467125),
        i = t.i(388750);
      async function s(t, s) {
        let { blockNumber: o, blockTag: f, name: c } = s,
          { chain: l } = t,
          u = (() => {
            if (s.universalResolverAddress) return s.universalResolverAddress;
            if (!l)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, e.f)({
              blockNumber: o,
              chain: l,
              contract: "ensUniversalResolver",
            });
          })(),
          d = l?.ensTlds;
        if (d && !d.some((t) => c.endsWith(t)))
          throw Error(
            `${c} is not a valid ENS TLD (${d?.join(", ")}) for chain "${
              l.name
            }" (id: ${l.id}).`
          );
        let [p] = await (0, n.f)(
          t,
          i.f,
          "readContract"
        )({
          address: u,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [
                { type: "address" },
                { type: "bytes32" },
                { type: "uint256" },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, a.g)((0, r.f)(c))],
          blockNumber: o,
          blockTag: f,
        });
        return p;
      }
      t.s(["f", 0, s], 356317);
      var o = t.i(189991),
        f = t.i(569934),
        c = t.i(779690),
        l = t.i(264404),
        u = t.i(190521),
        d = t.i(353464);
      async function p(t, e) {
        let {
            account: r = t.account,
            blockNumber: n,
            blockTag: i = "latest",
            blobs: s,
            data: p,
            gas: m,
            gasPrice: b,
            maxFeePerBlobGas: g,
            maxFeePerGas: y,
            maxPriorityFeePerGas: h,
            to: v,
            value: w,
            ...N
          } = e,
          k = r ? (0, o.f)(r) : void 0;
        try {
          (0, d.f)(e);
          let r = "bigint" == typeof n ? (0, a.N)(n) : void 0,
            o = t.chain?.formatters?.transactionRequest?.format,
            c = (o || u.F)(
              {
                ...(0, l.f)(N, { format: o }),
                account: k,
                blobs: s,
                data: p,
                gas: m,
                gasPrice: b,
                maxFeePerBlobGas: g,
                maxFeePerGas: y,
                maxPriorityFeePerGas: h,
                to: v,
                value: w,
              },
              "createAccessList"
            ),
            B = await t.request({
              method: "eth_createAccessList",
              params: [c, r || i],
            });
          if (B.error) throw new f.L(B.error, { details: B.error });
          return { accessList: B.accessList, gasUsed: BigInt(B.gasUsed) };
        } catch (a) {
          throw (0, c.f)(a, { ...e, account: k, chain: t.chain });
        }
      }
      t.s(["f", 0, p], 112039);
    },
    606662,
    (t) => {
      var e = t.i(537096);
      async function a(t) {
        let a = (0, e.f)(t, { method: "eth_newBlockFilter" }),
          r = await t.request({ method: "eth_newBlockFilter" });
        return { id: r, request: a(r), type: "block" };
      }
      t.s(["f", 0, a]);
    },
    722192,
    (t) => {
      var e = t.i(251666),
        a = t.i(675107),
        r = t.i(537096);
      async function n(t, n) {
        let {
            address: i,
            abi: s,
            args: o,
            eventName: f,
            fromBlock: c,
            strict: l,
            toBlock: u,
          } = n,
          d = (0, r.f)(t, { method: "eth_newFilter" }),
          p = f ? (0, e.f)({ abi: s, args: o, eventName: f }) : void 0,
          m = await t.request({
            method: "eth_newFilter",
            params: [
              {
                address: i,
                fromBlock: "bigint" == typeof c ? (0, a.N)(c) : c,
                toBlock: "bigint" == typeof u ? (0, a.N)(u) : u,
                topics: p,
              },
            ],
          });
        return {
          abi: s,
          args: o,
          eventName: f,
          id: m,
          request: d(m),
          strict: !!l,
          type: "event",
        };
      }
      t.s(["f", 0, n]);
    },
    340577,
    81740,
    (t) => {
      var e = t.i(251666),
        a = t.i(675107),
        r = t.i(537096);
      async function n(
        t,
        {
          address: i,
          args: s,
          event: o,
          events: f,
          fromBlock: c,
          strict: l,
          toBlock: u,
        } = {}
      ) {
        let d = f ?? (o ? [o] : void 0),
          p = (0, r.f)(t, { method: "eth_newFilter" }),
          m = [];
        d &&
          ((m = [
            d.flatMap((t) =>
              (0, e.f)({ abi: [t], eventName: t.name, args: s })
            ),
          ]),
          o && (m = m[0]));
        let b = await t.request({
          method: "eth_newFilter",
          params: [
            {
              address: i,
              fromBlock: "bigint" == typeof c ? (0, a.N)(c) : c,
              toBlock: "bigint" == typeof u ? (0, a.N)(u) : u,
              ...(m.length ? { topics: m } : {}),
            },
          ],
        });
        return {
          abi: d,
          args: s,
          eventName: o ? o.name : void 0,
          fromBlock: c,
          id: b,
          request: p(b),
          strict: !!l,
          toBlock: u,
          type: "event",
        };
      }
      async function i(t) {
        let e = (0, r.f)(t, { method: "eth_newPendingTransactionFilter" }),
          a = await t.request({ method: "eth_newPendingTransactionFilter" });
        return { id: a, request: e(a), type: "transaction" };
      }
      t.s(["f", 0, n], 340577), t.s(["f", 0, i], 81740);
    },
    153077,
    (t) => {
      var e = t.i(752012),
        a = t.i(600547),
        r = t.i(656679),
        n = t.i(606580),
        i = t.i(467125),
        s = t.i(989509);
      async function o(
        t,
        {
          address: f,
          blockHash: c,
          blockNumber: l,
          blockTag: u = t.experimental_blockTag ?? "latest",
          requireCanonical: d,
        }
      ) {
        let p = (0, n.f)({
          blockHash: c,
          blockNumber: l,
          blockTag: u,
          requireCanonical: d,
        });
        if (t.batch?.multicall && t.chain?.contracts?.multicall3) {
          let n = t.chain.contracts.multicall3.address,
            o = (0, r.f)({
              abi: e.v,
              functionName: "getEthBalance",
              args: [f],
            }),
            { data: p } = await (0, i.f)(
              t,
              s.g,
              "call"
            )({
              to: n,
              data: o,
              blockHash: c,
              blockNumber: l,
              blockTag: u,
              requireCanonical: d,
            });
          return (0, a.f)({
            abi: e.v,
            functionName: "getEthBalance",
            args: [f],
            data: p || "0x",
          });
        }
        return BigInt(
          await t.request({ method: "eth_getBalance", params: [f, p] })
        );
      }
      t.s(["f", 0, o]);
    },
    867901,
    912477,
    928843,
    (t) => {
      async function e(t) {
        return BigInt(await t.request({ method: "eth_blobBaseFee" }));
      }
      t.s(["f", 0, e], 867901);
      var a = t.i(57351),
        r = t.i(675107),
        n = t.i(839080);
      async function i(
        t,
        {
          blockHash: e,
          blockNumber: s,
          blockTag: o = t.experimental_blockTag ?? "latest",
        } = {}
      ) {
        let f = void 0 !== s ? (0, r.N)(s) : void 0,
          c = await t.request(
            { method: "eth_getBlockReceipts", params: [e || f || o] },
            { dedupe: !!(e || f) }
          );
        if (!c) throw new a.f({ blockHash: e, blockNumber: s });
        let l = t.chain?.formatters?.transactionReceipt?.format || n.L;
        return c.map((t) => l(t, "getBlockReceipts"));
      }
      t.s(["f", 0, i], 912477);
      var s = t.i(450323);
      async function o(
        t,
        { blockHash: e, blockNumber: a, blockTag: n = "latest" } = {}
      ) {
        let i,
          f = void 0 !== a ? (0, r.N)(a) : void 0;
        return (
          (i = e
            ? await t.request(
                { method: "eth_getBlockTransactionCountByHash", params: [e] },
                { dedupe: !0 }
              )
            : await t.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [f || n],
                },
                { dedupe: !!f }
              )),
          (0, s.T)(i)
        );
      }
      t.s(["f", 0, o], 928843);
    },
    563700,
    402676,
    (t) => {
      var e = t.i(627173),
        a = t.i(467125),
        r = t.i(251666),
        n = t.i(897282),
        i = t.i(675107),
        s = t.i(856324);
      async function o(
        t,
        {
          address: e,
          blockHash: a,
          fromBlock: f,
          toBlock: c,
          event: l,
          events: u,
          args: d,
          strict: p,
        } = {}
      ) {
        let m = u ?? (l ? [l] : void 0),
          b = [];
        m &&
          ((b = [
            m.flatMap((t) =>
              (0, r.f)({ abi: [t], eventName: t.name, args: u ? void 0 : d })
            ),
          ]),
          l && (b = b[0]));
        let g = (
          a
            ? await t.request({
                method: "eth_getLogs",
                params: [{ address: e, topics: b, blockHash: a }],
              })
            : await t.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: e,
                    topics: b,
                    fromBlock: "bigint" == typeof f ? (0, i.N)(f) : f,
                    toBlock: "bigint" == typeof c ? (0, i.N)(c) : c,
                  },
                ],
              })
        ).map((t) => (0, s.f)(t));
        return m ? (0, n.f)({ abi: m, args: d, logs: g, strict: p ?? !1 }) : g;
      }
      async function f(t, r) {
        let {
            abi: n,
            address: i,
            args: s,
            blockHash: f,
            eventName: c,
            fromBlock: l,
            toBlock: u,
            strict: d,
          } = r,
          p = c ? (0, e.f)({ abi: n, name: c }) : void 0,
          m = p ? void 0 : n.filter((t) => "event" === t.type);
        return (0, a.f)(
          t,
          o,
          "getLogs"
        )({
          address: i,
          args: s,
          blockHash: f,
          event: p,
          events: m,
          fromBlock: l,
          toBlock: u,
          strict: d,
        });
      }
      t.s(["f", 0, o], 402676), t.s(["f", 0, f], 563700);
    },
    705158,
    697178,
    666416,
    (t) => {
      var e = t.i(823838),
        a = t.i(401319),
        r = t.i(790063),
        n = t.i(528804);
      async function i(
        t,
        { address: s, blockNumber: o, blockTag: f = "latest" }
      ) {
        let c = await (0, n.f)(t, {
          address: s,
          ...(void 0 !== o ? { blockNumber: o } : { blockTag: f }),
        });
        if (c && 23 === (0, a.f)(c) && c.startsWith("0xef0100"))
          return (0, e.A)((0, r.M)(c, 3, 23));
      }
      t.s(["f", 0, i], 705158);
      var s = t.i(569934);
      class o extends s.L {
        constructor({ address: t }) {
          super(`No EIP-712 domain found on contract "${t}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${t}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      var f = t.i(467125),
        c = t.i(388750);
      async function l(t, e) {
        let { address: a, factory: r, factoryData: n } = e;
        try {
          let [e, i, s, o, l, d, p] = await (0, f.f)(
            t,
            c.f,
            "readContract"
          )({
            abi: u,
            address: a,
            functionName: "eip712Domain",
            factory: r,
            factoryData: n,
          });
          return {
            domain: {
              name: i,
              version: s,
              chainId: Number(o),
              verifyingContract: l,
              salt: d,
            },
            extensions: p,
            fields: e,
          };
        } catch (t) {
          if (
            "ContractFunctionExecutionError" === t.name &&
            "ContractFunctionZeroDataError" === t.cause.name
          )
            throw new o({ address: a });
          throw t;
        }
      }
      let u = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      t.s(["f", 0, l], 697178);
      var d = t.i(675107);
      async function p(
        t,
        {
          blockCount: e,
          blockNumber: a,
          blockTag: r = "latest",
          rewardPercentiles: n,
        }
      ) {
        var i;
        let s = "bigint" == typeof a ? (0, d.N)(a) : void 0;
        return {
          baseFeePerGas: (i = await t.request(
            { method: "eth_feeHistory", params: [(0, d.N)(e), s || r, n] },
            { dedupe: !!s }
          )).baseFeePerGas.map((t) => BigInt(t)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((t) => t.map((t) => BigInt(t))),
        };
      }
      t.s(["f", 0, p], 666416);
    },
    209050,
    (t) => {
      var e = t.i(897282),
        a = t.i(856324);
      async function r(t, { filter: n }) {
        let i = "strict" in n && n.strict,
          s = await n.request({
            method: "eth_getFilterChanges",
            params: [n.id],
          });
        if ("string" == typeof s[0]) return s;
        let o = s.map((t) => (0, a.f)(t));
        return "abi" in n && n.abi
          ? (0, e.f)({ abi: n.abi, eventName: n.eventName, logs: o, strict: i })
          : o;
      }
      t.s(["f", 0, r]);
    },
    937463,
    379578,
    444993,
    974148,
    435213,
    489228,
    948331,
    671293,
    (t) => {
      var e,
        a = t.i(897282),
        r = t.i(856324);
      async function n(t, { filter: e }) {
        let i = e.strict ?? !1,
          s = (
            await e.request({ method: "eth_getFilterLogs", params: [e.id] })
          ).map((t) => (0, r.f)(t));
        return e.abi
          ? (0, a.f)({ abi: e.abi, eventName: e.eventName, logs: s, strict: i })
          : s;
      }
      t.s(["f", 0, n], 937463);
      var i = t.i(606580),
        s = t.i(450323);
      async function o(
        t,
        {
          address: e,
          blockHash: a,
          blockNumber: r,
          blockTag: n = "latest",
          requireCanonical: f,
          storageKeys: c,
        }
      ) {
        let l = (0, i.f)({
          blockHash: a,
          blockNumber: r,
          blockTag: n,
          requireCanonical: f,
        });
        var u = await t.request({ method: "eth_getProof", params: [e, c, l] });
        return {
          ...u,
          balance: u.balance ? BigInt(u.balance) : void 0,
          nonce: u.nonce ? (0, s.T)(u.nonce) : void 0,
          storageProof: u.storageProof
            ? u.storageProof.map((t) => ({ ...t, value: BigInt(t.value) }))
            : void 0,
        };
      }
      t.s(["f", 0, o], 379578);
      var f = t.i(393702);
      async function c(t, { hash: e }) {
        let a = await t.request(
          { method: "eth_getRawTransactionByHash", params: [e] },
          { dedupe: !0 }
        );
        if (!a) throw new f.z({ hash: e });
        return a;
      }
      async function l(
        t,
        {
          address: e,
          blockHash: a,
          blockNumber: r,
          blockTag: n = "latest",
          requireCanonical: s,
          slot: o,
        }
      ) {
        let f = (0, i.f)({
          blockHash: a,
          blockNumber: r,
          blockTag: n,
          requireCanonical: s,
        });
        return await t.request({
          method: "eth_getStorageAt",
          params: [e, o, f],
        });
      }
      async function u(
        t,
        {
          blockHash: e,
          blockNumber: a,
          blockTag: r = "latest",
          requireCanonical: n,
          requests: s,
        }
      ) {
        let o = (0, i.f)({
          blockHash: e,
          blockNumber: a,
          blockTag: r,
          requireCanonical: n,
        });
        return t.request({ method: "eth_getStorageValues", params: [s, o] });
      }
      t.s(["f", 0, c], 444993),
        t.s(["f", 0, l], 974148),
        t.s(["f", 0, u], 435213);
      var d = t.i(467125),
        p = t.i(712371),
        m = t.i(579917);
      async function b(t, { hash: e, transactionReceipt: a }) {
        let [r, n] = await Promise.all([
            (0, d.f)(t, p.f, "getBlockNumber")({}),
            e ? (0, d.f)(t, m.f, "getTransaction")({ hash: e }) : void 0,
          ]),
          i = a?.blockNumber || n?.blockNumber;
        if (!i) return 0n;
        let s =
          r < i
            ? await (0, d.f)(t, p.f, "getBlockNumber")({ cacheTime: 0 })
            : r;
        return s < i ? 1n : s - i + 1n;
      }
      t.s(["f", 0, b], 489228);
      var g = t.i(944318),
        y = t.i(189991),
        h = t.i(70204),
        v = t.i(878023),
        w = t.i(853532),
        N = t.i(600547),
        k = t.i(656679),
        B = t.i(147526),
        T = t.i(675107),
        E = t.i(807749),
        A = t.i(467078),
        x = t.i(557874),
        I = t.i(190521),
        C = t.i(826051),
        R = t.i(353464);
      async function F(t, e) {
        let {
          blockNumber: a,
          blockTag: n = t.experimental_blockTag ?? "latest",
          blocks: i,
          returnFullTransactions: s,
          traceTransfers: o,
          validation: f,
        } = e;
        try {
          let e = [];
          for (let t of i) {
            let a = t.blockOverrides ? g.f(t.blockOverrides) : void 0,
              r = t.calls.map((t) => {
                let e = t.account ? (0, y.f)(t.account) : void 0,
                  a = t.abi ? (0, k.f)(t) : t.data,
                  r = {
                    ...t,
                    account: e,
                    data: t.dataSuffix
                      ? (0, B.w)([a || "0x", t.dataSuffix])
                      : a,
                    from: t.from ?? e?.address,
                  };
                return (0, R.f)(r), (0, I.F)(r);
              }),
              n = t.stateOverrides ? (0, C.f)(t.stateOverrides) : void 0;
            e.push({ blockOverrides: a, calls: r, stateOverrides: n });
          }
          let c = "bigint" == typeof a ? (0, T.N)(a) : void 0;
          return (
            await t.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: e,
                  returnFullTransactions: s,
                  traceTransfers: o,
                  validation: f,
                },
                c || n,
              ],
            })
          ).map((t, e) => ({
            ...(0, x.K)(t),
            calls: t.calls.map((t, a) => {
              let { abi: n, args: s, functionName: o, to: f } = i[e].calls[a],
                c = t.error?.data ?? t.returnData,
                l = BigInt(t.gasUsed),
                u = void 0 === t.maxUsedGas ? void 0 : BigInt(t.maxUsedGas),
                d = t.logs?.map((t) => (0, r.f)(t)),
                p = "0x1" === t.status ? "success" : "failure",
                m =
                  n && "success" === p && "0x" !== c
                    ? (0, N.f)({ abi: n, data: c, functionName: o })
                    : null,
                b = (() => {
                  let t;
                  if (
                    "success" !== p &&
                    ("0x" === c
                      ? (t = new h.g())
                      : c && (t = new v.w({ data: c })),
                    t)
                  )
                    return (0, E.f)(t, {
                      abi: n ?? [],
                      address: f ?? "0x",
                      args: s,
                      functionName: o ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: l,
                logs: d,
                ...(void 0 === u ? {} : { maxUsedGas: u }),
                status: p,
                ...("success" === p ? { result: m } : { error: b }),
              };
            }),
          }));
        } catch (e) {
          let t = (0, A.f)(e, {});
          if (t instanceof w.b) throw e;
          throw t;
        }
      }
      t.s(["f", 0, F], 948331);
      var L = t.i(663771),
        q = t.i(506570),
        P = t.i(284251),
        O = t.i(766564),
        _ = t.i(602376);
      t.i(618697);
      function S(...t) {
        var e;
        let [a, r = []] = (() => {
            if (Array.isArray(t[0])) {
              let [e, a, r] = t;
              return [U(e, a, { args: r }), r];
            }
            let [e, a] = t;
            return [e, a];
          })(),
          { overloads: n } = a,
          i = n ? U([a, ...n], a.name, { args: r }) : a,
          s = ((e = i), L.e(e)),
          o = r.length > 0 ? q.q(i.inputs, r) : void 0;
        return o ? P.w(s, o) : s;
      }
      function D(t, e = {}) {
        return L.f(t, e);
      }
      function U(t, e, a) {
        let r = L.M(t, e, a);
        if ("function" !== r.type) throw new L.i({ name: e, type: "function" });
        return r;
      }
      _.f, _.f, _.f, _.f, _.f, _.f;
      var $ = t.i(914146),
        M = t.i(472503),
        H = t.i(569934),
        j = t.i(22411),
        W = t.i(989509),
        z = t.i(915588);
      let G =
          "0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033",
        V =
          ((e = (function (t, e = {}) {
            return L.f(t, e);
          })(
            "event Transfer(address indexed from, address indexed to, uint256 value)"
          )),
          L.p(e)),
        Z = D("function balanceOf(address) returns (uint256)"),
        K = D("function decimals() returns (uint256)"),
        J = D("function tokenURI(uint256) returns (string)"),
        Q = D("function symbol() returns (string)"),
        X = D("function query(address target, bytes data)");
      async function Y(t, e) {
        var a, r;
        let n,
          {
            blockNumber: i,
            blockTag: o,
            calls: f,
            stateOverrides: c,
            traceAssetChanges: l,
            traceTransfers: u,
            validation: d,
          } = e,
          m = e.account ? (0, y.f)(e.account) : void 0;
        if (l && !m)
          throw new H.L(
            "`account` is required when `traceAssetChanges` is true"
          );
        let b = m
            ? (function (...t) {
                let [e, a] = (() => {
                    if (Array.isArray(t[0])) {
                      let [e, a] = t;
                      return [
                        (function (t) {
                          let e = t.find((t) => "constructor" === t.type);
                          if (!e) throw new L.i({ name: "constructor" });
                          return e;
                        })(e),
                        a,
                      ];
                    }
                    return t;
                  })(),
                  { bytecode: r, args: n } = a;
                return P.w(
                  r,
                  e.inputs?.length && n?.length ? q.q(e.inputs, n) : "0x"
                );
              })(L.f("constructor(bytes, bytes)"), {
                bytecode: M.I,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  S(D("function getBalance(address)"), [m.address]),
                ],
              })
            : void 0,
          g = o ?? t.experimental_blockTag ?? "latest",
          h = i;
        if (l && "bigint" != typeof h && "earliest" !== g && "pending" !== g)
          if ("latest" === g) h = await (0, p.f)(t, { cacheTime: 0 });
          else {
            let e = await (0, z.f)(t, { blockTag: g });
            if ("bigint" != typeof e.number)
              throw new H.L(`Block tag \`${g}\` did not resolve to a number.`);
            h = e.number;
          }
        let v = "bigint" == typeof h ? { blockNumber: h } : { blockTag: g },
          w = l
            ? await F(t, {
                ...v,
                blocks: [
                  {
                    calls: f.map((t) => ({ ...t, from: m.address })),
                    stateOverrides: c,
                  },
                ],
                traceTransfers: u,
                validation: d,
              })
            : void 0,
          N = w
            ? [
                ...new Set([
                  ...((a = w[0].calls.flatMap((t) => t.logs ?? [])),
                  (r = m.address),
                  (n = (0, j.g)(r.toLowerCase(), { size: 32 })),
                  a
                    .filter(
                      (t) =>
                        t.topics[0]?.toLowerCase() === V &&
                        t.address.toLowerCase() !== $.l &&
                        (t.topics[1]?.toLowerCase() === n ||
                          t.topics[2]?.toLowerCase() === n)
                    )
                    .map((t) => t.address.toLowerCase())),
                  ...e.calls.map((t) => t.to?.toLowerCase()),
                ]),
              ].filter((t) => !!t && t !== $.l && t !== $.B)
            : [],
          k = (function (t) {
            let e = new Set(t.map((t) => t.toLowerCase())),
              a = 3735928559n;
            for (; e.has(`0x${a.toString(16).padStart(40, "0")}`); ) a++;
            return `0x${a.toString(16).padStart(40, "0")}`;
          })([
            ...(m ? [m.address] : []),
            ...N,
            ...(c?.map(({ address: t }) => t) ?? []),
          ]),
          B = [{ address: k, code: G }],
          [T, E] = await Promise.all([
            l
              ? Promise.all([
                  tr(t, {
                    account: m.address,
                    ...v,
                    data: b,
                    stateOverride: c,
                  }),
                  ...N.map((e) =>
                    tr(t, {
                      account: m.address,
                      address: e,
                      ...v,
                      data: S(Z, [m.address]),
                      staticCallAddress: k,
                      stateOverride: c,
                    })
                  ),
                ])
              : [],
            F(t, {
              ...v,
              blocks: [
                {
                  calls: [...f, { to: $.B }].map((t) => ({
                    ...t,
                    from: m?.address,
                  })),
                  stateOverrides: c,
                },
                ...(l
                  ? [
                      { calls: [{ data: b }] },
                      {
                        calls: N.map((t) => ({
                          to: k,
                          gas: 1000000n,
                          data: tt(t, S(Z, [m.address])),
                        })),
                        stateOverrides: B,
                      },
                      {
                        calls: N.map((t) => ({
                          to: k,
                          gas: 1000000n,
                          data: tt(t, S(K)),
                        })),
                        stateOverrides: B,
                      },
                      {
                        calls: N.map((t) => ({
                          to: k,
                          gas: 1000000n,
                          data: tt(t, S(J, [0n])),
                        })),
                        stateOverrides: B,
                      },
                      {
                        calls: N.map((t) => ({
                          to: k,
                          gas: 1000000n,
                          data: tt(t, S(Q)),
                        })),
                        stateOverrides: B,
                      },
                    ]
                  : []),
              ],
              traceTransfers: u,
              validation: d,
            }),
          ]),
          A = E[0],
          [x, I, C, R, O] = l ? E.slice(1) : [],
          { calls: _, ...U } = A,
          W = _.slice(0, -1),
          X = T.map((t) => (te(t) ? (0, s.K)(t.data) : null)),
          Y = [...(x?.calls ?? []), ...(I?.calls ?? [])].map((t) =>
            te(t) ? (0, s.K)(t.data) : null
          ),
          tn = (C?.calls ?? []).map((t) => ta(t, K)),
          ti = (O?.calls ?? []).map((t) => ta(t, Q)),
          ts = (R?.calls ?? []).map((t) => ta(t, J)),
          to = [];
        for (let [t, e] of Y.entries()) {
          let a = X[t],
            r = T[t],
            n =
              "bigint" == typeof a
                ? a
                : t > 0 && r?.status === "success" && "0x" === r.data
                ? 0n
                : null;
          if ("bigint" != typeof e || "bigint" != typeof n) continue;
          let i = tn[t - 1],
            s = ti[t - 1],
            o = ts[t - 1],
            f =
              0 === t
                ? { address: $.l, decimals: 18, symbol: "ETH" }
                : {
                    address: N[t - 1],
                    decimals: o || i ? Number(i ?? 1) : void 0,
                    symbol: s ?? void 0,
                  };
          to.push({ token: f, value: { pre: n, post: e, diff: e - n } });
        }
        return { assetChanges: to, block: U, results: W };
      }
      function tt(t, e) {
        return S(X, [t, e]);
      }
      function te(t) {
        return "success" === t.status && /^0x[\da-f]{64}$/i.test(t.data);
      }
      function ta(t, e) {
        if ("failure" === t.status || "0x" === t.data) return null;
        try {
          return (function (...t) {
            let [e, a, r = {}] = (() => {
                if (Array.isArray(t[0])) {
                  let [e, a, r, n] = t;
                  return [U(e, a), r, n];
                }
                return t;
              })(),
              n = q.G(e.outputs, a, r);
            if (!n || 0 !== Object.keys(n).length)
              return n && 1 === Object.keys(n).length
                ? Array.isArray(n)
                  ? n[0]
                  : Object.values(n)[0]
                : n;
          })(e, t.data);
        } catch {
          return null;
        }
      }
      async function tr(t, e) {
        let {
          account: a,
          address: r,
          blockNumber: n,
          blockTag: i,
          data: s,
          staticCallAddress: o,
          stateOverride: f,
        } = e;
        try {
          return {
            data:
              (
                await (0, W.g)(
                  { ...t, ccipRead: !1 },
                  {
                    account: r ? $.B : a,
                    data: r ? tt(r, s) : s,
                    stateOverride:
                      r && o ? [...(f ?? []), { address: o, code: G }] : f,
                    ...(r ? { gas: 1000000n, to: o } : {}),
                    ...("bigint" == typeof n
                      ? { blockNumber: n }
                      : { blockTag: i }),
                  }
                )
              ).data ?? "0x",
            status: "success",
          };
        } catch (t) {
          if (!(t instanceof v.o) || !(t.cause instanceof w.s)) throw t;
          return { data: "0x", status: "failure" };
        }
      }
      t.s(["f", 0, Y], 671293);
    },
    708412,
    (t) => {
      async function e(t, { filter: a }) {
        return a.request({ method: "eth_uninstallFilter", params: [a.id] });
      }
      t.s(["f", 0, e]);
    },
    733570,
    877528,
    658167,
    438081,
    (t) => {
      var e = t.i(467125),
        a = t.i(658765),
        r = t.i(493617);
      async function n(
        t,
        {
          address: i,
          message: s,
          factory: o,
          factoryData: f,
          signature: c,
          ...l
        }
      ) {
        let u = (0, a.f)(s);
        return (0, e.f)(
          t,
          r.f,
          "verifyHash"
        )({
          address: i,
          factory: o,
          factoryData: f,
          hash: u,
          signature: c,
          ...l,
        });
      }
      t.s(["f", 0, n], 733570);
      var i = t.i(995062);
      async function s(t, a) {
        let {
            address: n,
            factory: s,
            factoryData: o,
            signature: f,
            message: c,
            primaryType: l,
            types: u,
            domain: d,
            ...p
          } = a,
          m = (0, i.c)({ message: c, primaryType: l, types: u, domain: d });
        return (0, e.f)(
          t,
          r.f,
          "verifyHash"
        )({
          address: n,
          factory: s,
          factoryData: o,
          hash: m,
          signature: f,
          ...p,
        });
      }
      t.s(["f", 0, s], 877528);
      var o = t.i(557874),
        f = t.i(20101),
        c = t.i(34888);
      let l = [
        "size",
        "totalDifficulty",
        "transactions",
        "uncles",
        "withdrawals",
      ];
      t.s(
        [
          "f",
          0,
          function (t, { onBlockHeader: e, onError: a }) {
            let r,
              n = (0, c.f)(["watchBlockHeaders", t.uid]);
            return (0, f.f)(n, { onBlockHeader: e, onError: a }, (e) => {
              let a = !0,
                n = !1,
                i = () => (a = !1);
              return (
                (async () => {
                  try {
                    let s = (() => {
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
                      { unsubscribe: f } = await s.subscribe({
                        params: ["newHeads"],
                        onData(n) {
                          if (!a) return;
                          let i = (t.chain?.formatters?.block?.format || o.K)(
                            n.result,
                            "watchBlockHeaders"
                          );
                          for (let t of l) delete i[t];
                          e.onBlockHeader(i, r), (r = i);
                        },
                        onError(t) {
                          n && e.onError?.(t);
                        },
                      });
                    (n = !0), (i = f), a || i();
                  } catch (t) {
                    e.onError?.(t);
                  }
                })(),
                () => i()
              );
            });
          },
        ],
        658167
      );
      var u = t.i(976215),
        d = t.i(915588);
      t.s(
        [
          "f",
          0,
          function (
            t,
            {
              blockTag: a = t.experimental_blockTag ?? "latest",
              emitMissed: r,
              emitOnBegin: n = !1,
              onBlock: i,
              onError: s,
              includeTransactions: o,
              poll: l,
              pollingInterval: p = t.pollingInterval,
            }
          ) {
            let m,
              b,
              g,
              y,
              h,
              v =
                void 0 !== l
                  ? l
                  : "webSocket" !== t.transport.type &&
                    "ipc" !== t.transport.type &&
                    ("fallback" !== t.transport.type ||
                      ("webSocket" !== t.transport.transports[0].config.type &&
                        "ipc" !== t.transport.transports[0].config.type)),
              w = o ?? !1,
              N = t.chain?.blockTime,
              k =
                r ??
                (("latest" === a || "pending" === a) &&
                  void 0 !== N &&
                  p > N / 2),
              B = void 0 === r ? 100 : 1 / 0;
            return v
              ? ((b = (0, c.f)(["watchBlocks", t.uid, a, k, n, w, B, p])),
                (0, f.f)(b, { onBlock: i, onError: s }, (r) =>
                  (0, u.f)(
                    async () => {
                      try {
                        let n = await (0, e.f)(
                          t,
                          d.f,
                          "getBlock"
                        )({ blockTag: a, includeTransactions: w });
                        if (null !== n.number && m?.number != null) {
                          if (n.number === m.number) return;
                          let a = Number(n.number - m.number) - 1;
                          if (a > 0 && a <= B && k) {
                            let n = m.number + 1n;
                            for (let i = 0; i < a; i += 10)
                              for (let s of await Promise.all(
                                Array.from(
                                  { length: Math.min(10, a - i) },
                                  (a, r) =>
                                    (0, e.f)(
                                      t,
                                      d.f,
                                      "getBlock"
                                    )({
                                      blockNumber: n + BigInt(i + r),
                                      includeTransactions: w,
                                    })
                                )
                              ))
                                r.onBlock(s, m), (m = s);
                          }
                        }
                        (m?.number == null ||
                          ("pending" === a && n?.number == null) ||
                          (null !== n.number && n.number > m.number)) &&
                          (r.onBlock(n, m), (m = n));
                      } catch (t) {
                        r.onError?.(t);
                      }
                    },
                    { emitOnBegin: n, interval: p }
                  )
                ))
              : ((g = !0),
                (y = !0),
                (h = () => (g = !1)),
                (async () => {
                  try {
                    n &&
                      (0, e.f)(
                        t,
                        d.f,
                        "getBlock"
                      )({ blockTag: a, includeTransactions: w })
                        .then((t) => {
                          !g || (y && (i(t, void 0), (y = !1)));
                        })
                        .catch(s);
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
                      { unsubscribe: o } = await r.subscribe({
                        params: ["newHeads"],
                        async onData(a) {
                          if (!g) return;
                          let r = await (0, e.f)(
                            t,
                            d.f,
                            "getBlock"
                          )({
                            blockNumber: a.result?.number,
                            includeTransactions: w,
                          }).catch(() => {});
                          g && (i(r, m), (y = !1), (m = r));
                        },
                        onError(t) {
                          s?.(t);
                        },
                      });
                    (h = o), g || h();
                  } catch (t) {
                    s?.(t);
                  }
                })(),
                () => h());
          },
        ],
        438081
      );
    },
    121821,
    (t) => {
      var e = t.i(70204),
        a = t.i(569934),
        r = t.i(1299),
        n = t.i(383856),
        i = t.i(222427),
        s = t.i(251666),
        o = t.i(856324),
        f = t.i(467125),
        c = t.i(20101),
        l = t.i(976215),
        u = t.i(34888),
        d = t.i(722192),
        p = t.i(712371),
        m = t.i(563700),
        b = t.i(209050),
        g = t.i(708412);
      t.s([
        "f",
        0,
        function (t, y) {
          let h,
            v,
            w,
            N,
            k,
            {
              abi: B,
              address: T,
              args: E,
              batch: A = !0,
              eventName: x,
              fromBlock: I,
              onError: C,
              onLogs: R,
              poll: F,
              pollingInterval: L = t.pollingInterval,
              strict: q,
            } = y;
          return (
            void 0 !== F
              ? F
              : "bigint" == typeof I ||
                ("webSocket" !== t.transport.type &&
                  "ipc" !== t.transport.type &&
                  ("fallback" !== t.transport.type ||
                    ("webSocket" !== t.transport.transports[0].config.type &&
                      "ipc" !== t.transport.transports[0].config.type)))
          )
            ? ((h = q ?? !1),
              (v = (0, u.f)([
                "watchContractEvent",
                T,
                E,
                A,
                t.uid,
                x,
                L,
                h,
                I,
              ])),
              (0, c.f)(v, { onLogs: R, onError: C }, (e) => {
                let i,
                  s = !0,
                  o = void 0 === I ? void 0 : I - 1n,
                  c = !1,
                  u = (t) => {
                    if (0 !== t.length)
                      if (A) e.onLogs(t);
                      else for (let a of t) e.onLogs([a]);
                  },
                  y = (e, a) =>
                    (0, f.f)(
                      t,
                      m.f,
                      "getContractEvents"
                    )({
                      abi: B,
                      address: T,
                      args: E,
                      eventName: x,
                      fromBlock: e,
                      toBlock: a,
                      strict: h,
                    }),
                  v = (0, l.f)(
                    async () => {
                      if (!c) {
                        try {
                          i = await (0, f.f)(
                            t,
                            d.f,
                            "createContractEventFilter"
                          )({
                            abi: B,
                            address: T,
                            args: E,
                            eventName: x,
                            strict: h,
                            fromBlock: I,
                          });
                        } catch {}
                        if (((c = !0), i)) return;
                      }
                      try {
                        if (i) {
                          let e = await (0, f.f)(
                            t,
                            b.f,
                            "getFilterChanges"
                          )({ filter: i });
                          u(e);
                          return;
                        }
                        let e = await (0, f.f)(t, p.f, "getBlockNumber")({});
                        o ??= e;
                        let n = e - o;
                        for (; o < e; ) {
                          let t = o + 1n,
                            i = o + n,
                            f = i < e ? i : e,
                            c = await y(t, f).catch((e) => {
                              if (
                                t === f ||
                                !(function (t) {
                                  if (!(t instanceof a.L)) return !0;
                                  let e = t.walk(
                                    (t) => t instanceof r.y || t instanceof r.V
                                  );
                                  return (
                                    !e ||
                                    ((!(e instanceof r.V) || 429 !== e.code) &&
                                      (!(e instanceof r.y) ||
                                        void 0 !== e.status) &&
                                      401 !== e.status &&
                                      403 !== e.status &&
                                      429 !== e.status)
                                  );
                                })(e)
                              )
                                throw e;
                            });
                          if (!s) return;
                          if (!c) {
                            n = (f - t + 1n) / 2n;
                            continue;
                          }
                          (o = f), u(c);
                        }
                      } catch (t) {
                        i && t instanceof n.L && (c = !1), e.onError?.(t);
                      }
                    },
                    { emitOnBegin: !0, interval: L }
                  );
                return async () => {
                  (s = !1),
                    i &&
                      (await (0, f.f)(
                        t,
                        g.f,
                        "uninstallFilter"
                      )({ filter: i })),
                    v();
                };
              }))
            : ((w = (0, u.f)([
                "watchContractEvent",
                T,
                E,
                A,
                t.uid,
                x,
                L,
                q ?? !1,
              ])),
              (N = !0),
              (k = () => (N = !1)),
              (0, c.f)(
                w,
                { onLogs: R, onError: C },
                (a) => (
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
                        n = !!(x || q),
                        f = x
                          ? (0, s.f)({ abi: B, eventName: x, args: E })
                          : [],
                        { unsubscribe: c } = await r.subscribe({
                          params: ["logs", { address: T, topics: f }],
                          onData(t) {
                            if (!N) return;
                            let r = t.result;
                            try {
                              let t = (0, i.O)({
                                  abi: B,
                                  data: r.data,
                                  eventName: x,
                                  topics: r.topics,
                                  strict: q,
                                }),
                                e = (0, o.f)(r, {
                                  args: t.args,
                                  eventName: t.eventName,
                                });
                              a.onLogs([e]);
                            } catch (c) {
                              let t, s;
                              if (
                                n &&
                                (c instanceof i.N ||
                                  c instanceof e.R ||
                                  c instanceof e.u)
                              )
                                return;
                              if (c instanceof e.t || c instanceof e.s) {
                                if (q) return;
                                (t = c.abiItem.name),
                                  (s = c.abiItem.inputs?.some(
                                    (t) => !("name" in t && t.name)
                                  ));
                              }
                              let f = (0, o.f)(r, {
                                args: s ? [] : {},
                                eventName: t,
                              });
                              a.onLogs([f]);
                            }
                          },
                          onError(t) {
                            a.onError?.(t);
                          },
                        });
                      (k = c), N || k();
                    } catch (t) {
                      C?.(t);
                    }
                  })(),
                  () => k()
                )
              ));
        },
      ]);
    },
    24335,
    (t) => {
      var e = t.i(789268),
        a = t.i(964348),
        r = t.i(710959),
        n = t.i(356317),
        i = t.i(57770),
        s = t.i(989509),
        o = t.i(112039),
        f = t.i(606662),
        c = t.i(722192),
        l = t.i(340577),
        u = t.i(81740),
        d = t.i(369121),
        p = t.i(972960),
        m = t.i(484734),
        b = t.i(194720),
        g = t.i(818249),
        y = t.i(153077),
        h = t.i(867901),
        v = t.i(915588),
        w = t.i(712371),
        N = t.i(912477),
        k = t.i(928843),
        B = t.i(975948),
        T = t.i(528804),
        E = t.i(563700),
        A = t.i(705158),
        x = t.i(697178),
        I = t.i(666416),
        C = t.i(209050),
        R = t.i(937463),
        F = t.i(111047),
        L = t.i(402676),
        q = t.i(379578),
        P = t.i(444993),
        O = t.i(974148),
        _ = t.i(435213),
        S = t.i(579917),
        D = t.i(489228),
        U = t.i(937445),
        $ = t.i(568307),
        M = t.i(804558),
        H = t.i(388750),
        j = t.i(948331),
        W = t.i(671293),
        z = t.i(106145),
        G = t.i(708412),
        V = t.i(493617),
        Z = t.i(733570),
        K = t.i(877528),
        J = t.i(948789),
        Q = t.i(658167),
        X = t.i(127465),
        Y = t.i(438081),
        tt = t.i(121821),
        te = t.i(70204),
        ta = t.i(569934),
        tr = t.i(1299),
        tn = t.i(383856),
        ti = t.i(222427),
        ts = t.i(251666),
        to = t.i(856324),
        tf = t.i(467125),
        tc = t.i(20101),
        tl = t.i(976215),
        tu = t.i(34888),
        td = t.i(658765);
      let tp =
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
      function tm(t) {
        return new Date(
          !tp.test(t) || Number.isNaN(new Date(t).getTime()) ? 0 / 0 : t
        );
      }
      let tb =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tg =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.*))?(?:\nResources:(?<resources>(?:\n- .+)*))?/;
      var ty = t.i(796516),
        th = t.i(806685);
      async function tv(t, e) {
        let {
            address: a,
            domain: r,
            message: n,
            nonce: i,
            scheme: s,
            signature: o,
            time: f = new Date(),
            ...c
          } = e,
          l = (function (t) {
            let { scheme: e, statement: a, ...r } = t.match(tb)?.groups ?? {},
              {
                chainId: n,
                expirationTime: i,
                issuedAt: s,
                notBefore: o,
                requestId: f,
                resources: c,
                ...l
              } = t.match(tg)?.groups ?? {},
              u = c?.split("\n- ").slice(1);
            return {
              ...r,
              ...l,
              ...(n ? { chainId: Number(n) } : {}),
              ...(i ? { expirationTime: tm(i) } : {}),
              ...(s ? { issuedAt: tm(s) } : {}),
              ...(o ? { notBefore: tm(o) } : {}),
              ...(f ? { requestId: f } : {}),
              ...(u ? { resources: u } : {}),
              ...(e ? { scheme: e } : {}),
              ...(a ? { statement: a } : {}),
            };
          })(n);
        if (
          !l.address ||
          !(function (t) {
            let {
              address: e,
              domain: a,
              message: r,
              nonce: n,
              scheme: i,
              time: s = new Date(),
            } = t;
            if (
              (a && r.domain !== a) ||
              (n && r.nonce !== n) ||
              (i && r.scheme !== i) ||
              Number.isNaN(s.getTime()) ||
              (r.expirationTime &&
                (Number.isNaN(r.expirationTime.getTime()) ||
                  s >= r.expirationTime)) ||
              (r.notBefore &&
                (Number.isNaN(r.notBefore.getTime()) || s < r.notBefore))
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, ty.f)(r.address, { strict: !1 }) ||
                (e && !(0, th.f)(r.address, e))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: a,
            domain: r,
            message: l,
            nonce: i,
            scheme: s,
            time: f,
          })
        )
          return !1;
        let u = (0, td.f)(n);
        return (0, V.f)(t, { address: l.address, hash: u, signature: o, ...c });
      }
      var tw = t.i(752012),
        tN = t.i(868750);
      async function tk(t, e) {
        let { account: a, decimals: r, spender: n, token: i, ...s } = e,
          [o, { decimals: f }] = await Promise.all([
            (0, H.f)(t, {
              ...s,
              ...tk.call(t, { account: a, spender: n, token: i }),
            }),
            (0, tN.u)(t, { decimals: r, token: i }),
          ]);
        return (0, tN.i)(o, f);
      }
      async function tB(t, e) {
        let { token: a, ...r } = e,
          { address: n } = (0, tN.M)(t, { token: a }),
          i = (0, tN.F)(t, a),
          [s, o, f] = await Promise.all([
            i?.decimals ??
              (0, H.f)(t, {
                ...r,
                abi: tw.q,
                address: n,
                functionName: "decimals",
              }),
            i?.name ??
              (0, H.f)(t, {
                ...r,
                abi: tw.q,
                address: n,
                functionName: "name",
              }),
            i?.symbol ??
              (0, H.f)(t, {
                ...r,
                abi: tw.q,
                address: n,
                functionName: "symbol",
              }),
          ]);
        return { decimals: s, name: o, symbol: f };
      }
      Object.defineProperty(tk || (tk = {}), "call", {
        configurable: !0,
        enumerable: !0,
        value: function (t, e) {
          return (0, tN.V)({
            address: (0, tN.M)(t, e).address,
            abi: tw.q,
            functionName: "allowance",
            args: [e.account, e.spender],
          });
        },
        writable: !0,
      });
      var tT = t.i(189991),
        tE = t.i(611573);
      async function tA(t, e) {
        let { account: a = t.account, decimals: r, token: n, ...i } = e;
        if (!a) throw new tE.A();
        let s = (0, tT.f)(a).address,
          [o, { decimals: f }] = await Promise.all([
            (0, H.f)(t, { ...i, ...tA.call(t, { account: s, token: n }) }),
            (0, tN.u)(t, { decimals: r, token: n }),
          ]);
        return (0, tN.i)(o, f);
      }
      async function tx(t, e) {
        let { decimals: a, token: r, ...n } = e,
          [i, { decimals: s }] = await Promise.all([
            (0, H.f)(t, { ...n, ...tx.call(t, { token: r }) }),
            (0, tN.u)(t, { decimals: a, token: r }),
          ]);
        return (0, tN.i)(i, s);
      }
      Object.defineProperty(tA || (tA = {}), "call", {
        configurable: !0,
        enumerable: !0,
        value: function (t, e) {
          let a = e.account ?? t.account;
          if (!a) throw new tE.A();
          let r = (0, tT.f)(a).address;
          return (0, tN.V)({
            address: (0, tN.M)(t, e).address,
            abi: tw.q,
            functionName: "balanceOf",
            args: [r],
          });
        },
        writable: !0,
      }),
        Object.defineProperty(tx || (tx = {}), "call", {
          configurable: !0,
          enumerable: !0,
          value: function (t, e) {
            return (0, tN.V)({
              address: (0, tN.M)(t, e).address,
              abi: tw.q,
              args: [],
              functionName: "totalSupply",
            });
          },
          writable: !0,
        });
      var tI = t.i(368941),
        tC = t.i(638291),
        tR = t.i(738977),
        tF = t.i(363625);
      t.s(
        [
          "f",
          0,
          function (t) {
            var td;
            return {
              call: (e) => (0, s.g)(t, e),
              createAccessList: (e) => (0, o.f)(t, e),
              createBlockFilter: () => (0, f.f)(t),
              createContractEventFilter: (e) => (0, c.f)(t, e),
              createEventFilter: (e) => (0, l.f)(t, e),
              createPendingTransactionFilter: () => (0, u.f)(t),
              estimateContractGas: (e) => (0, d.f)(t, e),
              estimateGas: (e) => (0, m.f)(t, e),
              getBalance: (e) => (0, y.f)(t, e),
              getBlobBaseFee: () => (0, h.f)(t),
              getBlock: (e) => (0, v.f)(t, e),
              getBlockNumber: (e) => (0, w.f)(t, e),
              getBlockReceipts: (e) => (0, N.f)(t, e),
              getBlockTransactionCount: (e) => (0, k.f)(t, e),
              getBytecode: (e) => (0, T.f)(t, e),
              getChainId: () => (0, B.f)(t),
              getCode: (e) => (0, T.f)(t, e),
              getContractEvents: (e) => (0, E.f)(t, e),
              getDelegation: (e) => (0, A.f)(t, e),
              getEip712Domain: (e) => (0, x.f)(t, e),
              getEnsAddress: (a) => (0, e.f)(t, a),
              getEnsAvatar: (e) => (0, a.f)(t, e),
              getEnsName: (e) => (0, r.f)(t, e),
              getEnsResolver: (e) => (0, n.f)(t, e),
              getEnsText: (e) => (0, i.f)(t, e),
              getFeeHistory: (e) => (0, I.f)(t, e),
              estimateFeesPerGas: (e) => (0, p.w)(t, e),
              getFilterChanges: (e) => (0, C.f)(t, e),
              getFilterLogs: (e) => (0, R.f)(t, e),
              getGasPrice: () => (0, F.f)(t),
              getLogs: (e) => (0, L.f)(t, e),
              getProof: (e) => (0, q.f)(t, e),
              estimateMaxPriorityFeePerGas: (e) => (0, b.D)(t, e),
              fillTransaction: (e) => (0, g.f)(t, e),
              getRawTransaction: (e) => (0, P.f)(t, e),
              getStorageAt: (e) => (0, O.f)(t, e),
              getStorageValues: (e) => (0, _.f)(t, e),
              getTransaction: (e) => (0, S.f)(t, e),
              getTransactionConfirmations: (e) => (0, D.f)(t, e),
              getTransactionCount: (e) => (0, U.f)(t, e),
              getTransactionReceipt: (e) => (0, $.f)(t, e),
              multicall: (e) => (0, M.f)(t, e),
              prepareTransactionRequest: (e) => (0, tI.i)(t, e),
              readContract: (e) => (0, H.f)(t, e),
              sendRawTransaction: (e) => (0, tC.f)(t, e),
              sendRawTransactionSync: (e) => (0, tR.f)(t, e),
              simulate: (e) => (0, j.f)(t, e),
              simulateBlocks: (e) => (0, j.f)(t, e),
              simulateCalls: (e) => (0, W.f)(t, e),
              simulateContract: (e) => (0, z.f)(t, e),
              verifyHash: (e) => (0, V.f)(t, e),
              verifyMessage: (e) => (0, Z.f)(t, e),
              verifySiweMessage: (e) => tv(t, e),
              verifyTypedData: (e) => (0, K.f)(t, e),
              uninstallFilter: (e) => (0, G.f)(t, e),
              waitForTransactionReceipt: (e) => (0, J.f)(t, e),
              watchBlockHeaders: (e) => (0, Q.f)(t, e),
              watchBlocks: (e) => (0, Y.f)(t, e),
              watchBlockNumber: (e) => (0, X.f)(t, e),
              watchContractEvent: (e) => (0, tt.f)(t, e),
              watchEvent: (e) =>
                (function (
                  t,
                  {
                    address: e,
                    args: a,
                    batch: r = !0,
                    event: n,
                    events: i,
                    fromBlock: s,
                    onError: o,
                    onLogs: f,
                    poll: c,
                    pollingInterval: u = t.pollingInterval,
                    strict: d,
                  }
                ) {
                  let p,
                    m,
                    b,
                    g =
                      void 0 !== c
                        ? c
                        : "bigint" == typeof s ||
                          ("webSocket" !== t.transport.type &&
                            "ipc" !== t.transport.type &&
                            ("fallback" !== t.transport.type ||
                              ("webSocket" !==
                                t.transport.transports[0].config.type &&
                                "ipc" !==
                                  t.transport.transports[0].config.type))),
                    y = d ?? !1;
                  return g
                    ? ((p = (0, tu.f)([
                        "watchEvent",
                        e,
                        a,
                        r,
                        t.uid,
                        n,
                        i,
                        u,
                        y,
                        s,
                      ])),
                      (0, tc.f)(p, { onLogs: f, onError: o }, (o) => {
                        let f,
                          c = !0,
                          d = void 0 === s ? void 0 : s - 1n,
                          p = !1,
                          m = (t) => {
                            if (0 !== t.length)
                              if (r) o.onLogs(t);
                              else for (let e of t) o.onLogs([e]);
                          },
                          b = (r, s) =>
                            (0, tf.f)(
                              t,
                              L.f,
                              "getLogs"
                            )({
                              address: e,
                              args: a,
                              event: n,
                              events: i,
                              fromBlock: r,
                              strict: y,
                              toBlock: s,
                            }),
                          g = (0, tl.f)(
                            async () => {
                              if (!p) {
                                try {
                                  f = await (0, tf.f)(
                                    t,
                                    l.f,
                                    "createEventFilter"
                                  )({
                                    address: e,
                                    args: a,
                                    event: n,
                                    events: i,
                                    strict: y,
                                    fromBlock: s,
                                  });
                                } catch {}
                                if (((p = !0), f)) return;
                              }
                              try {
                                if (f) {
                                  let e = await (0, tf.f)(
                                    t,
                                    C.f,
                                    "getFilterChanges"
                                  )({ filter: f });
                                  m(e);
                                  return;
                                }
                                let e = await (0, tf.f)(
                                  t,
                                  w.f,
                                  "getBlockNumber"
                                )({});
                                d ??= e;
                                let a = e - d;
                                for (; d < e; ) {
                                  let t = d + 1n,
                                    r = d + a,
                                    n = r < e ? r : e,
                                    i = await b(t, n).catch((e) => {
                                      if (
                                        t === n ||
                                        !(function (t) {
                                          if (!(t instanceof ta.L)) return !0;
                                          let e = t.walk(
                                            (t) =>
                                              t instanceof tr.y ||
                                              t instanceof tr.V
                                          );
                                          return (
                                            !e ||
                                            ((!(e instanceof tr.V) ||
                                              429 !== e.code) &&
                                              (!(e instanceof tr.y) ||
                                                void 0 !== e.status) &&
                                              401 !== e.status &&
                                              403 !== e.status &&
                                              429 !== e.status)
                                          );
                                        })(e)
                                      )
                                        throw e;
                                    });
                                  if (!c) return;
                                  if (!i) {
                                    a = (n - t + 1n) / 2n;
                                    continue;
                                  }
                                  (d = n), m(i);
                                }
                              } catch (t) {
                                f && t instanceof tn.L && (p = !1),
                                  o.onError?.(t);
                              }
                            },
                            { emitOnBegin: !0, interval: u }
                          );
                        return async () => {
                          (c = !1),
                            f &&
                              (await (0, tf.f)(
                                t,
                                G.f,
                                "uninstallFilter"
                              )({ filter: f })),
                            g();
                        };
                      }))
                    : ((m = !0),
                      (b = () => (m = !1)),
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
                            s = i ?? (n ? [n] : void 0),
                            c = [];
                          s &&
                            ((c = [
                              s.flatMap((t) =>
                                (0, ts.f)({
                                  abi: [t],
                                  eventName: t.name,
                                  args: a,
                                })
                              ),
                            ]),
                            n && (c = c[0]));
                          let { unsubscribe: l } = await r.subscribe({
                            params: ["logs", { address: e, topics: c }],
                            onData(t) {
                              if (!m) return;
                              let e = t.result;
                              try {
                                let { eventName: t, args: a } = (0, ti.O)({
                                    abi: s ?? [],
                                    data: e.data,
                                    topics: e.topics,
                                    strict: y,
                                  }),
                                  r = (0, to.f)(e, { args: a, eventName: t });
                                f([r]);
                              } catch (r) {
                                let t, a;
                                if (
                                  (s || d) &&
                                  (r instanceof ti.N ||
                                    r instanceof te.R ||
                                    r instanceof te.u)
                                )
                                  return;
                                if (r instanceof te.t || r instanceof te.s) {
                                  if (d) return;
                                  (t = r.abiItem.name),
                                    (a = r.abiItem.inputs?.some(
                                      (t) => !("name" in t && t.name)
                                    ));
                                }
                                f([
                                  (0, to.f)(e, {
                                    args: a ? [] : {},
                                    eventName: t,
                                  }),
                                ]);
                              }
                            },
                            onError(t) {
                              o?.(t);
                            },
                          });
                          (b = l), m || b();
                        } catch (t) {
                          o?.(t);
                        }
                      })(),
                      () => b());
                })(t, e),
              watchPendingTransactions: (e) =>
                (function (
                  t,
                  {
                    batch: e = !0,
                    onError: a,
                    onTransactions: r,
                    poll: n,
                    pollingInterval: i = t.pollingInterval,
                  }
                ) {
                  let s, o, f;
                  return (
                    void 0 !== n
                      ? n
                      : "webSocket" !== t.transport.type &&
                        "ipc" !== t.transport.type
                  )
                    ? ((s = (0, tu.f)([
                        "watchPendingTransactions",
                        t.uid,
                        e,
                        i,
                      ])),
                      (0, tc.f)(s, { onTransactions: r, onError: a }, (a) => {
                        let r,
                          n = (0, tl.f)(
                            async () => {
                              try {
                                if (!r)
                                  try {
                                    r = await (0, tf.f)(
                                      t,
                                      u.f,
                                      "createPendingTransactionFilter"
                                    )({});
                                    return;
                                  } catch (t) {
                                    throw (n(), t);
                                  }
                                let i = await (0, tf.f)(
                                  t,
                                  C.f,
                                  "getFilterChanges"
                                )({ filter: r });
                                if (0 === i.length) return;
                                if (e) a.onTransactions(i);
                                else for (let t of i) a.onTransactions([t]);
                              } catch (t) {
                                a.onError?.(t);
                              }
                            },
                            { emitOnBegin: !0, interval: i }
                          );
                        return async () => {
                          r &&
                            (await (0, tf.f)(
                              t,
                              G.f,
                              "uninstallFilter"
                            )({ filter: r })),
                            n();
                        };
                      }))
                    : ((o = !0),
                      (f = () => (o = !1)),
                      (async () => {
                        try {
                          let { unsubscribe: e } = await t.transport.subscribe({
                            params: ["newPendingTransactions"],
                            onData(t) {
                              o && r([t.result]);
                            },
                            onError(t) {
                              a?.(t);
                            },
                          });
                          (f = e), o || f();
                        } catch (t) {
                          a?.(t);
                        }
                      })(),
                      () => f());
                })(t, e),
              token:
                ((td = t),
                {
                  getAllowance: (0, tF.y)(td, tk),
                  getBalance: (0, tF.y)(td, tA),
                  getMetadata: (0, tF.y)(td, tB),
                  getTotalSupply: (0, tF.y)(td, tx),
                }),
            };
          },
        ],
        24335
      );
    },
    251666,
    824820,
    (t) => {
      var e = t.i(70204),
        a = t.i(569934);
      class r extends a.L {
        constructor(t) {
          super(`Filter type "${t}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      t.s(["f", 0, r], 824820);
      var n = t.i(769936),
        i = t.i(831095),
        s = t.i(774620),
        o = t.i(704434),
        f = t.i(332881),
        c = t.i(627173);
      let l = "/docs/contract/encodeEventTopics";
      function u({ param: t, value: e }) {
        if ("string" === t.type) return (0, i.f)((0, n.T)(e));
        if ("bytes" === t.type) return (0, i.f)((0, n.D)(e));
        if ("tuple" === t.type || t.type.match(/^(.*)\[(\d+)?\]$/))
          throw new r(t.type);
        return (0, o.N)([t], [e]);
      }
      t.s(
        [
          "f",
          0,
          function (t) {
            let { abi: a, eventName: r, args: n } = t,
              i = a[0];
            if (r) {
              let t = (0, c.f)({ abi: a, name: r });
              if (!t) throw new e.V(r, { docsPath: l });
              i = t;
            }
            if ("event" !== i.type) throw new e.V(void 0, { docsPath: l });
            let o = [];
            if (n && "inputs" in i) {
              let t = i.inputs?.filter((t) => "indexed" in t && t.indexed),
                e = Array.isArray(n)
                  ? n
                  : Object.values(n).length > 0
                  ? t?.map((t) => n[t.name]) ?? []
                  : [];
              e.length > 0 &&
                (o =
                  t?.map((t, a) =>
                    Array.isArray(e[a])
                      ? e[a].map((r, n) => u({ param: t, value: e[a][n] }))
                      : void 0 !== e[a] && null !== e[a]
                      ? u({ param: t, value: e[a] })
                      : null
                  ) ?? []);
            }
            if (i.anonymous) return o;
            let d = (0, f.r)(i);
            return [(0, s.f)(d), ...o];
          },
        ],
        251666
      );
    },
    690501,
    155224,
    (t) => {
      var e = t.i(826999),
        a = t.i(388750),
        r = t.i(569934);
      class n extends r.L {
        constructor({ data: t }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(t)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class i extends r.L {
        constructor({ reason: t }) {
          super(`ENS NFT avatar URI is invalid. ${t}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class s extends r.L {
        constructor({ uri: t }) {
          super(
            `Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class o extends r.L {
        constructor({ namespace: t }) {
          super(
            `ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      class f extends r.L {
        constructor({ chainId: t }) {
          super(
            `Invalid ENSIP-11 chainId: ${t}. Must be between 0 and 0x7fffffff, or 1.`,
            { name: "EnsInvalidChainIdError" }
          );
        }
      }
      t.s(["u", 0, n, "O", 0, i, "l", 0, o, "W", 0, s, "P", 0, f], 155224);
      var c = t.i(675107);
      let l =
          /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        u =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        p = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function m(t) {
        try {
          let e = await fetch(t, { method: "HEAD" });
          if (200 === e.status) {
            let t = e.headers.get("content-type");
            return t?.startsWith("image/");
          }
          return !1;
        } catch (e) {
          if (
            ("object" == typeof e && void 0 !== e.response) ||
            !Object.hasOwn(globalThis, "Image")
          )
            return !1;
          return new Promise((e) => {
            let a = new Image();
            (a.onload = () => {
              e(!0);
            }),
              (a.onerror = () => {
                e(!1);
              }),
              (a.src = t);
          });
        }
      }
      function b(t, e) {
        return t ? (t.endsWith("/") ? t.slice(0, -1) : t) : e;
      }
      function g({ uri: t, gatewayUrls: a }) {
        let r = d.test(t);
        if (r) return { uri: t, isOnChain: !0, isEncoded: r };
        let n = b(a?.ipfs, "https://ipfs.io"),
          i = b(a?.arweave, "https://arweave.net"),
          o = t.match(l),
          {
            protocol: f,
            subpath: c,
            target: m,
            subtarget: y = "",
          } = o?.groups || {},
          h = "ipns:/" === f || "ipns/" === c,
          v = "ipfs:/" === f || "ipfs/" === c || u.test(t);
        if (t.startsWith("http") && !h && !v) {
          let e = t;
          return (
            a?.arweave && (e = t.replace(/https:\/\/arweave.net/g, a?.arweave)),
            { uri: e, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((h || v) && m)
          return {
            uri: `${n}/${h ? "ipns" : "ipfs"}/${m}${y}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === f && m)
          return { uri: `${i}/${m}${y || ""}`, isOnChain: !1, isEncoded: !1 };
        let w = t.replace(p, "");
        if (
          (w.startsWith("<svg") && (w = `data:image/svg+xml;base64,${e.A(w)}`),
          w.startsWith("data:") || w.startsWith("{"))
        )
          return { uri: w, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: t });
      }
      function y(t) {
        if (
          "object" != typeof t ||
          (!("image" in t) && !("image_url" in t) && !("image_data" in t))
        )
          throw new n({ data: t });
        return t.image || t.image_url || t.image_data;
      }
      async function h({ gatewayUrls: t, uri: e }) {
        try {
          let a = await fetch(e).then((t) => t.json());
          return await v({ gatewayUrls: t, uri: y(a) });
        } catch {
          throw new s({ uri: e });
        }
      }
      async function v({ gatewayUrls: t, uri: e }) {
        let { uri: a, isOnChain: r } = g({ uri: e, gatewayUrls: t });
        if (r || (await m(a))) return a;
        throw new s({ uri: e });
      }
      async function w(t, { nft: e }) {
        if ("erc721" === e.namespace)
          return (0, a.f)(t, {
            address: e.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(e.tokenID)],
          });
        if ("erc1155" === e.namespace)
          return (0, a.f)(t, {
            address: e.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(e.tokenID)],
          });
        throw new o({ namespace: e.namespace });
      }
      async function N(t, { gatewayUrls: e, record: a }) {
        return /eip155:/i.test(a)
          ? k(t, { gatewayUrls: e, record: a })
          : v({ uri: a, gatewayUrls: e });
      }
      async function k(t, { gatewayUrls: a, record: r }) {
        let n = (function (t) {
            let e = t;
            e.startsWith("did:nft:") &&
              (e = e.replace("did:nft:", "").replace(/_/g, "/"));
            let [a, r, n] = e.split("/"),
              [s, o] = a.split(":"),
              [f, c] = r.split(":");
            if (!s || "eip155" !== s.toLowerCase())
              throw new i({ reason: "Only EIP-155 supported" });
            if (!o) throw new i({ reason: "Chain ID not found" });
            if (!c) throw new i({ reason: "Contract address not found" });
            if (!n) throw new i({ reason: "Token ID not found" });
            if (!f) throw new i({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(o, 10),
              namespace: f.toLowerCase(),
              contractAddress: c,
              tokenID: n,
            };
          })(r),
          {
            uri: s,
            isOnChain: o,
            isEncoded: f,
          } = g({ uri: await w(t, { nft: n }), gatewayUrls: a });
        return o &&
          (s.includes("data:application/json;base64,") || s.startsWith("{"))
          ? v({
              uri: y(
                JSON.parse(
                  f
                    ? e.e(
                        s
                          .replace("data:application/json;base64,", "")
                          .replace(/\s/g, "")
                      )
                    : s
                )
              ),
              gatewayUrls: a,
            })
          : h({
              gatewayUrls: a,
              uri: (function ({ nft: t, uri: e }) {
                let a =
                  "erc1155" === t.namespace
                    ? (0, c.N)(BigInt(t.tokenID), { size: 32 }).slice(2)
                    : t.tokenID;
                return e.replace(/(?:0x)?{id}/, a);
              })({ nft: n, uri: s }),
            });
      }
      t.s(["f", 0, N], 690501);
    },
    31384,
    515056,
    898443,
    438642,
    (t) => {
      var e = t.i(569934),
        a = t.i(878023);
      t.s(
        [
          "f",
          0,
          function (t) {
            if (!(t instanceof e.L)) return !1;
            let r = t.walk((t) => t instanceof a.P);
            return (
              r instanceof a.P &&
              (r.data?.errorName === "HttpError" ||
                r.data?.errorName === "ResolverError" ||
                r.data?.errorName === "ResolverNotContract" ||
                r.data?.errorName === "ResolverNotFound" ||
                r.data?.errorName === "ReverseAddressMismatch" ||
                r.data?.errorName === "UnsupportedResolverProfile")
            );
          },
        ],
        31384
      );
      var r = t.i(147526),
        n = t.i(769936),
        i = t.i(675107),
        s = t.i(831095),
        o = t.i(880841);
      function f(t) {
        if (66 !== t.length || 0 !== t.indexOf("[") || 65 !== t.indexOf("]"))
          return null;
        let e = `0x${t.slice(1, 65)}`;
        return (0, o.f)(e) ? e : null;
      }
      function c(t) {
        let e = new Uint8Array(32).fill(0);
        return t ? f(t) || (0, s.f)((0, n.T)(t)) : (0, i.v)(e);
      }
      t.s(
        [
          "f",
          0,
          function (t) {
            let e = new Uint8Array(32).fill(0);
            if (!t) return (0, i.v)(e);
            let a = t.split(".");
            for (let t = a.length - 1; t >= 0; t -= 1) {
              let i = f(a[t]),
                o = i ? (0, n.D)(i) : (0, s.f)((0, n.T)(a[t]), "bytes");
              e = (0, s.f)((0, r.w)([e, o]), "bytes");
            }
            return (0, i.v)(e);
          },
        ],
        515056
      ),
        t.s(["f", 0, c], 898443),
        t.s(
          [
            "f",
            0,
            function (t) {
              let e = t.replace(/^\.|\.$/gm, "");
              if (0 === e.length) return new Uint8Array(1);
              let a = new Uint8Array((0, n.T)(e).byteLength + 2),
                r = 0,
                i = e.split(".");
              for (let t = 0; t < i.length; t++) {
                var s;
                let e = (0, n.T)(i[t]);
                e.byteLength > 255 &&
                  (e = (0, n.T)(((s = c(i[t])), `[${s.slice(2)}]`))),
                  (a[r] = e.length),
                  a.set(e, r + 1),
                  (r += e.length + 1);
              }
              return a.byteLength !== r + 1 ? a.slice(0, r + 1) : a;
            },
          ],
          438642
        );
    },
    537096,
    (t) => {
      t.s([
        "f",
        0,
        function (t, { method: e }) {
          let a = {};
          return (
            "fallback" === t.transport.type &&
              t.transport.onResponse?.(
                ({ method: t, response: r, status: n, transport: i }) => {
                  "success" === n && e === t && (a[r] = i.request);
                }
              ),
            (e) => a[e] || t.request
          );
        },
      ]);
    },
  ]);
})();
