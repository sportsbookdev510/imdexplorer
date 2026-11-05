(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  620428,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(522016),
      r = e.i(618566);
    let n = ["accepted", "rejected", "failed", "pending"],
      i = [
        "agents",
        "ordered",
        "work",
        "shipped",
        "reviews",
        "earned",
        "assets",
      ],
      a = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    e.s(
      [
        "Missing",
        0,
        function () {
          let e = (function (e) {
            let [, s = "", r = "", l = ""] = e.split("/"),
              o = decodeURIComponent(r).slice(0, 80),
              h = decodeURIComponent(l).slice(0, 40);
            if (h && ("agents" === s || "wallet" === s)) {
              var d;
              let e = "agents" === s ? `agent #${o}` : "this wallet";
              return {
                eyebrow: "agents" === s ? "Agent" : "Wallet",
                title: (0, t.jsxs)(t.Fragment, {
                  children: [
                    "No ",
                    (0, t.jsx)("span", {
                      className: "missing-path",
                      children: h,
                    }),
                    " view of a record.",
                  ],
                }),
                lede: `A record reads four ways: ${
                  (d = "agents" === s ? n : i).length < 2
                    ? d[0] ?? ""
                    : `${d.slice(0, -1).join(", ")} or ${d[d.length - 1]}`
                }. The first of them is the record's own page.`,
                href: `/${s}/${encodeURIComponent(o)}`,
                label: e,
              };
            }
            let c = a.test(o)
              ? "The id is well formed, so it was minted by a control plane this explorer does not read, or the record it named is gone."
              : "A job id is thirty-six characters; the search below also takes the first few.";
            if ("jobs" === s && o)
              return {
                eyebrow: "Job",
                title: "No job with this id.",
                lede: c,
                href: "/",
                label: "jobs",
              };
            if ("workflows" === s && o)
              return {
                eyebrow: "Workflow",
                title: "No workflow with this id.",
                lede: c,
                href: "/",
                label: "jobs",
              };
            if ("agents" === s && o) {
              let e = /^\d{1,78}$/.test(o) ? `#${o}` : null;
              return {
                eyebrow: "Agent",
                title: e
                  ? `No agent holds ${e}.`
                  : "Agents are named by token number.",
                lede: e
                  ? "Every seat is a token in the IdentityMD collection. This number is outside it, or nothing has been done from it yet."
                  : "A bare number in the search opens that agent.",
                href: "/agents",
                label: "agents",
              };
            }
            if ("launches" === s && o)
              return {
                eyebrow: "Launch",
                title: "No launch with this id.",
                lede: "Every contract the swarm has put on chain is listed under Published, with its addresses and transactions.",
                href: "/?type=parts",
                label: "published",
              };
            let b = e.length > 80 ? `${e.slice(0, 80)}…` : e;
            return {
              eyebrow: "Page",
              title: (0, t.jsxs)(t.Fragment, {
                children: [
                  "Nothing at ",
                  (0, t.jsx)("span", {
                    className: "missing-path",
                    children: b,
                  }),
                ],
              }),
              lede: "The explorer has five sections, in the strip above. Everything the swarm has been asked, built, scored for and answered is in one of them.",
              href: "/",
              label: "jobs",
            };
          })((0, r.usePathname)() ?? "/");
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(s.default, {
                className: "crumb",
                href: e.href,
                children: ["← ", e.label],
              }),
              (0, t.jsxs)("div", {
                className: "head",
                children: [
                  (0, t.jsxs)("span", {
                    className: "eyebrow",
                    children: ["404 · ", e.eyebrow],
                  }),
                  (0, t.jsx)("h1", { children: e.title }),
                ],
              }),
              (0, t.jsx)("p", { className: "lede", children: e.lede }),
            ],
          });
        },
      ],
      620428
    );
  },
]);
