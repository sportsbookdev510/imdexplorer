(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  [
    748233,
    (t) => {
      var e = t.i(843476),
        r = t.i(271645);
      t.s([
        "Copy",
        0,
        function ({ value: t, label: n }) {
          let [i, a] = (0, r.useState)(!1),
            o = async () => {
              try {
                await navigator.clipboard.writeText(t),
                  a(!0),
                  window.setTimeout(() => a(!1), 1400);
              } catch {}
            };
          return (0, e.jsx)("button", {
            type: "button",
            className: i ? "copy is-done" : "copy",
            onClick: o,
            "aria-label": i ? "copied" : n ?? `copy ${t}`,
            title: i ? "copied" : n ?? "copy",
            children: i
              ? (0, e.jsx)("svg", {
                  viewBox: "0 0 16 16",
                  width: 13,
                  height: 13,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "aria-hidden": !0,
                  children: (0, e.jsx)("path", { d: "M3.5 8.5l3 3 6-7" }),
                })
              : (0, e.jsxs)("svg", {
                  viewBox: "0 0 16 16",
                  width: 13,
                  height: 13,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 1.3,
                  strokeLinejoin: "round",
                  "aria-hidden": !0,
                  children: [
                    (0, e.jsx)("rect", {
                      x: "5.5",
                      y: "5.5",
                      width: "8",
                      height: "8",
                      rx: "1",
                    }),
                    (0, e.jsx)("path", {
                      d: "M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2",
                    }),
                  ],
                }),
          });
        },
        "CopyText",
        0,
        function ({ value: t, label: n, className: i, children: a }) {
          let [o, s] = (0, r.useState)(!1),
            u = async () => {
              try {
                await navigator.clipboard.writeText(t),
                  s(!0),
                  window.setTimeout(() => s(!1), 1400);
              } catch {}
            };
          return (0, e.jsx)("button", {
            type: "button",
            className: `copy-text${o ? " is-done" : ""}${i ? ` ${i}` : ""}`,
            onClick: u,
            "aria-label": o ? "copied" : n,
            title: o ? "copied" : n,
            children: o ? "copied" : a,
          });
        },
      ]);
    },
    767837,
    (t) => {
      var e = t.i(843476),
        r = t.i(271645);
      t.s([
        "LocalDate",
        0,
        function ({ at: t, after: n, className: i, short: a }) {
          let [o, s] = (0, r.useState)(null);
          return ((0, r.useEffect)(() => {
            if (!t) return;
            let e = new Date(t);
            if (Number.isNaN(e.getTime())) return;
            let r = n ? new Date(n) : null,
              i =
                r &&
                !Number.isNaN(r.getTime()) &&
                r.toDateString() === e.toDateString();
            s(
              new Intl.DateTimeFormat(
                void 0,
                i
                  ? { hour: "numeric", minute: "2-digit" }
                  : a
                  ? {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    }
                  : { dateStyle: "medium", timeStyle: "short" }
              ).format(e)
            );
          }, [t, n, a]),
          t && o)
            ? (0, e.jsx)("span", {
                className: i ?? "local-date",
                title: t,
                suppressHydrationWarning: !0,
                children: o,
              })
            : null;
        },
        "LocalRange",
        0,
        function ({ from: t, until: n, after: i }) {
          let [a, o] = (0, r.useState)(null);
          return ((0, r.useEffect)(() => {
            let e = new Date(t),
              r = new Date(n);
            if (Number.isNaN(e.getTime()) || Number.isNaN(r.getTime())) return;
            let a = i ? new Date(i) : null,
              s =
                a &&
                !Number.isNaN(a.getTime()) &&
                a.toDateString() === e.toDateString();
            o(
              new Intl.DateTimeFormat(
                void 0,
                s
                  ? { hour: "numeric", minute: "2-digit" }
                  : {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    }
              ).formatRange(e, r)
            );
          }, [t, n, i]),
          a)
            ? (0, e.jsx)("span", {
                className: "local-date",
                title: `${t} – ${n}`,
                suppressHydrationWarning: !0,
                children: a,
              })
            : null;
        },
      ]);
    },
    321014,
    173329,
    (t) => {
      var e = t.i(843476),
        r = t.i(271645);
      let n = "cubic-bezier(0.22, 1, 0.36, 1)",
        i = (t) => t >= "0" && t <= "9",
        a = 0,
        o = () => `m${++a}`;
      function s({ text: t, className: a, glide: u = !1, mode: l = "align" }) {
        let [f, h] = (0, r.useState)(() => ({
            text: t,
            units: [...t].map((t) => ({ ch: t, digit: i(t), key: o() })),
          })),
          c = f.units;
        f.text !== t &&
          ((c = (function (t, e, r) {
            let n = [...e];
            if ("index" === r) {
              let e = t.filter((t) => t.digit),
                r = t.filter((t) => !t.digit),
                a = 0,
                s = 0;
              return n.map((t) => {
                let n = i(t),
                  u = n ? e[a++] : r[s++];
                return {
                  ch: t,
                  digit: n,
                  key: u && (n || u.ch === t) ? u.key : o(),
                };
              });
            }
            let a = t.length,
              s = n.length,
              u = (e, r) => t[e].ch === n[r] || (t[e].digit && i(n[r])),
              l = Array.from({ length: a + 1 }, () => Array(s + 1).fill(0));
            for (let t = 1; t <= a; t++)
              for (let e = 1; e <= s; e++)
                l[t][e] = u(t - 1, e - 1)
                  ? l[t - 1][e - 1] + 1
                  : Math.max(l[t - 1][e], l[t][e - 1]);
            let f = Array(s);
            for (let e = a, r = s; e > 0 && r > 0; )
              u(e - 1, r - 1) && l[e][r] === l[e - 1][r - 1] + 1
                ? ((f[r - 1] = t[e - 1].key), e--, r--)
                : l[e - 1][r] >= l[e][r - 1]
                ? e--
                : r--;
            return n.map((t, e) => ({ ch: t, digit: i(t), key: f[e] ?? o() }));
          })(f.units, t, l)),
          h({ text: t, units: c }));
        let p = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          y = (0, r.useRef)(null),
          m = (0, r.useRef)(0);
        (0, r.useLayoutEffect)(() => {
          let t = p.current;
          if (!t) return;
          let e = new Map();
          t.querySelectorAll(":scope > .morph-chars [data-k]").forEach((t) => {
            e.set(t.dataset.k, {
              x: t.offsetLeft,
              y: t.offsetTop,
              ch: t.dataset.c,
              digit: t.classList.contains("morph-digit"),
              el: t,
            });
          });
          let r = y.current,
            i = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (r && !i) {
            let i = 0;
            for (let [t, a] of e) {
              let e = r.get(t);
              if (e) {
                let t = e.x - a.x,
                  r = e.y - a.y;
                (t || r) &&
                  a.el.animate(
                    [
                      { transform: `translate(${t}px, ${r}px)` },
                      { transform: "none" },
                    ],
                    { duration: 340, easing: n }
                  );
              } else
                a.el.animate(
                  [
                    {
                      opacity: 0,
                      transform: "translateY(0.35em)",
                      filter: "blur(2px)",
                    },
                    { opacity: 1, transform: "none", filter: "none" },
                  ],
                  {
                    duration: 280,
                    delay: 60 + 14 * Math.min(i++, 12),
                    easing: n,
                    fill: "backwards",
                  }
                );
            }
            for (let [t, n] of r) {
              if (e.has(t) || !d.current) continue;
              let r = document.createElement("span");
              (r.className = `morph-ghost${n.digit ? " morph-digit" : ""}`),
                (r.textContent = n.ch),
                n.digit && r.style.setProperty("--d", n.ch),
                (r.style.left = `${n.x}px`),
                (r.style.top = `${n.y}px`),
                d.current.appendChild(r);
              let i = () => r.remove();
              r.animate(
                [
                  { opacity: 1 },
                  {
                    opacity: 0,
                    transform: "translateY(-0.35em)",
                    filter: "blur(2px)",
                  },
                ],
                { duration: 200, easing: "ease-out", fill: "forwards" }
              ).finished.then(i, i);
            }
            u &&
              m.current &&
              t.offsetWidth !== m.current &&
              t.animate(
                [{ width: `${m.current}px` }, { width: `${t.offsetWidth}px` }],
                { duration: 340, easing: n }
              );
          }
          (y.current = new Map([...e].map(([t, { el: e, ...r }]) => [t, r]))),
            (m.current = t.offsetWidth);
        }, [c, u]);
        let g = [];
        for (let t of c) {
          let e = g[g.length - 1];
          " " !== t.ch && e && " " !== e[0].ch ? e.push(t) : g.push([t]);
        }
        let x = (t) =>
          (0, e.jsx)(
            "span",
            {
              "data-k": t.key,
              "data-c": t.ch,
              className: t.digit ? "morph-digit" : void 0,
              style: t.digit ? { "--d": t.ch } : void 0,
              children: t.ch,
            },
            t.key
          );
        return (0, e.jsxs)("span", {
          ref: p,
          className: `morph${a ? ` ${a}` : ""}`,
          children: [
            (0, e.jsx)("span", {
              className: "morph-chars",
              children: g.map((t) =>
                " " === t[0].ch
                  ? (0, e.jsx)(
                      "span",
                      {
                        "data-k": t[0].key,
                        "data-c": " ",
                        className: "morph-space",
                        children: " ",
                      },
                      t[0].key
                    )
                  : (0, e.jsx)(
                      "span",
                      { className: "morph-word", children: t.map(x) },
                      `w${t[0].key}`
                    )
              ),
            }),
            (0, e.jsx)("span", {
              ref: d,
              className: "morph-ghosts",
              "aria-hidden": !0,
            }),
          ],
        });
      }
      let u = (t) => t.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      t.s(
        [
          "$",
          0,
          function ({ digits: t, onDigits: n, className: a, ...o }) {
            let l = (0, r.useRef)(null),
              f = (0, r.useRef)(null),
              h = u(t);
            return (
              (0, r.useLayoutEffect)(() => {
                let t = l.current;
                if (null == f.current || !t) return;
                let e = 0,
                  r = 0;
                for (; r < t.value.length && e < f.current; )
                  i(t.value[r]) && e++, r++;
                t.setSelectionRange(r, r), (f.current = null);
              }),
              (0, e.jsxs)("span", {
                className: `grouped-input${a ? ` ${a}` : ""}`,
                children: [
                  (0, e.jsx)("input", {
                    ref: l,
                    ...o,
                    value: h,
                    inputMode: "numeric",
                    spellCheck: !1,
                    style: {
                      width: `calc(${Math.max(h.length, 13) + 1}ch + 18px)`,
                    },
                    onChange: (t) => {
                      let e = t.target;
                      (f.current = e.value
                        .slice(0, e.selectionStart ?? e.value.length)
                        .replace(/\D/g, "").length),
                        n(e.value.replace(/\D/g, ""));
                    },
                  }),
                  (0, e.jsx)("span", {
                    className: "grouped-face",
                    "aria-hidden": !0,
                    children: (0, e.jsx)(s, { text: h, mode: "index" }),
                  }),
                ],
              })
            );
          },
          "o",
          0,
          s,
          "b",
          0,
          u,
        ],
        173329
      );
      let l = { fill: "currentColor", stroke: "none" },
        f = {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke",
        },
        h = {
          "launch.evm_project": (0, e.jsxs)("g", {
            transform: "translate(60 61) scale(1.32) translate(-60 -61)",
            children: [
              (0, e.jsx)("path", {
                className: "part-brace-l",
                d: "M44 32c-8 0-8 4-8 12v9c0 5-3 7-8 7 5 0 8 2 8 7v9c0 8 0 12 8 12",
                ...f,
              }),
              (0, e.jsx)("path", {
                className: "part-brace-r",
                d: "M76 32c8 0 8 4 8 12v9c0 5 3 7 8 7-5 0-8 2-8 7v9c0 8 0 12-8 12",
                ...f,
              }),
              (0, e.jsx)("rect", {
                className: "part-brace-core",
                x: "49",
                y: "49",
                width: "22",
                height: "22",
                rx: "1.5",
                ...l,
              }),
            ],
          }),
          "launch.univ4_hook": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("defs", {
                children: [
                  (0, e.jsx)("clipPath", {
                    id: "part-lens-clip",
                    children: (0, e.jsx)("circle", {
                      cx: "48",
                      cy: "76",
                      r: "24",
                    }),
                  }),
                  (0, e.jsx)("clipPath", {
                    id: "part-lens-front",
                    children: (0, e.jsx)("path", {
                      clipRule: "evenodd",
                      d: "M-20-20H140V140H-20ZM44 16H57V34H44Z",
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("g", {
                className: "part-lens-hook",
                children: (0, e.jsx)("path", {
                  d: "M64 4v30a7 7 0 1 1-7-7",
                  ...f,
                }),
              }),
              (0, e.jsxs)("g", {
                className: "part-lens-pool",
                children: [
                  (0, e.jsx)("circle", {
                    cx: "48",
                    cy: "76",
                    r: "24",
                    ...f,
                    stroke: "var(--paper)",
                    strokeWidth: 3,
                  }),
                  (0, e.jsx)("circle", {
                    cx: "72",
                    cy: "76",
                    r: "24",
                    ...f,
                    stroke: "var(--paper)",
                    strokeWidth: 3,
                  }),
                  (0, e.jsx)("circle", {
                    className: "part-lens-fill",
                    cx: "72",
                    cy: "76",
                    r: "24",
                    clipPath: "url(#part-lens-clip)",
                    ...l,
                  }),
                  (0, e.jsx)("circle", { cx: "48", cy: "76", r: "24", ...f }),
                  (0, e.jsx)("circle", { cx: "72", cy: "76", r: "24", ...f }),
                ],
              }),
              (0, e.jsx)("g", {
                className: "part-lens-hook",
                children: (0, e.jsxs)("g", {
                  clipPath: "url(#part-lens-front)",
                  children: [
                    (0, e.jsx)("path", {
                      d: "M64 4v30a7 7 0 1 1-7-7",
                      ...f,
                      stroke: "var(--paper)",
                      strokeWidth: 3,
                    }),
                    (0, e.jsx)("path", { d: "M64 4v30a7 7 0 1 1-7-7", ...f }),
                  ],
                }),
              }),
            ],
          }),
          "research-report": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("path", { d: "M34 14h38l20 20v72H34z", ...f }),
              (0, e.jsx)("path", { d: "M72 14v20h20", ...f }),
              [52, 66, 80].map((t, r) =>
                (0, e.jsx)(
                  "path",
                  {
                    className: `part-line part-line-${r}`,
                    pathLength: 1,
                    d: `M46 ${t}h${2 === r ? 22 : 34}`,
                    ...f,
                  },
                  t
                )
              ),
            ],
          }),
          "build-website": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("rect", {
                x: "14",
                y: "24",
                width: "92",
                height: "72",
                rx: "3",
                ...f,
              }),
              (0, e.jsx)("path", { d: "M14 40h92", ...f }),
              [24, 33, 42].map((t, r) =>
                (0, e.jsx)(
                  "circle",
                  {
                    className: `part-light part-light-${r}`,
                    cx: t,
                    cy: "32",
                    r: "3",
                    ...l,
                  },
                  t
                )
              ),
            ],
          }),
          "build-ponder-indexer": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("rect", {
                x: "14",
                y: "24",
                width: "92",
                height: "72",
                rx: "3",
                ...f,
              }),
              (0, e.jsx)("path", { d: "M14 40h92M44 40v56", ...f }),
              [54, 68, 82].map((t, r) =>
                (0, e.jsxs)(
                  "g",
                  {
                    children: [
                      (0, e.jsx)("path", { d: `M22 ${t}h14`, ...f }),
                      (0, e.jsx)("path", {
                        className: `part-line part-line-${r}`,
                        pathLength: 1,
                        d: `M52 ${t}h${1 === r ? 44 : 32}`,
                        ...f,
                      }),
                    ],
                  },
                  t
                )
              ),
            ],
          }),
          "create-image": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("defs", {
                children: (0, e.jsx)("clipPath", {
                  id: "part-image-frame",
                  children: (0, e.jsx)("rect", {
                    x: "14",
                    y: "24",
                    width: "92",
                    height: "72",
                    rx: "3",
                  }),
                }),
              }),
              (0, e.jsx)("g", {
                clipPath: "url(#part-image-frame)",
                children: (0, e.jsx)("circle", {
                  className: "part-sun",
                  cx: "78",
                  cy: "48",
                  r: "8",
                  ...l,
                }),
              }),
              (0, e.jsx)("rect", {
                x: "14",
                y: "24",
                width: "92",
                height: "72",
                rx: "3",
                ...f,
              }),
              (0, e.jsx)("path", { d: "M14 84l28-26 20 18 14-12 30 22", ...f }),
            ],
          }),
          "create-audio": (0, e.jsx)(e.Fragment, {
            children: [
              [24, 44, 76],
              [42, 30, 90],
              [60, 18, 102],
              [78, 36, 84],
              [96, 48, 72],
            ].map(([t, r, n], i) =>
              (0, e.jsx)(
                "path",
                {
                  className: `part-bar part-bar-${i}`,
                  d: `M${t} ${r}V${n}`,
                  ...f,
                },
                t
              )
            ),
          }),
          "create-video": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("rect", {
                x: "14",
                y: "30",
                width: "72",
                height: "60",
                rx: "3",
                ...f,
              }),
              (0, e.jsx)("path", { d: "M86 50l20-12v44l-20-12", ...f }),
              (0, e.jsx)("path", {
                className: "part-play",
                d: "M42 48v24l20-12z",
                ...l,
              }),
            ],
          }),
          "workflow.open": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("path", {
                d: "M20 100V60l18 12V60l18 12V60l18 12V44h12v56z",
                ...f,
              }),
              (0, e.jsx)("path", { d: "M16 100h88", ...f }),
              [30, 48, 66].map((t) =>
                (0, e.jsx)(
                  "rect",
                  { x: t, y: "82", width: "8", height: "8", rx: "0.5", ...f },
                  t
                )
              ),
              (0, e.jsxs)("g", {
                className: "tile-out tile-out-0",
                children: [
                  (0, e.jsx)("path", {
                    d: "M80 28 86 31.46v6L80 40l-6-2.54v-6z",
                    ...f,
                  }),
                  (0, e.jsx)("path", {
                    d: "M74 31.46 80 34l6-2.54M80 34v6",
                    ...f,
                  }),
                ],
              }),
              (0, e.jsxs)("g", {
                className: "tile-out tile-out-1",
                children: [
                  (0, e.jsx)("rect", {
                    x: "74",
                    y: "29",
                    width: "12",
                    height: "10",
                    rx: "1",
                    ...f,
                  }),
                  (0, e.jsx)("path", { d: "M74 32h12", ...f }),
                ],
              }),
              (0, e.jsx)("circle", {
                className: "tile-out tile-out-2",
                cx: "80",
                cy: "34",
                r: "5.5",
                ...l,
              }),
            ],
          }),
          heartbeat: (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("path", {
                className: "tile-pulse-base",
                d: "M10 64H40l6-14 8 34 8-48 8 40 6-12H110",
                ...f,
              }),
              (0, e.jsx)("path", {
                className: "tile-pulse-run",
                pathLength: 1,
                d: "M10 64H40l6-14 8 34 8-48 8 40 6-12H110",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
          "oracle.request": (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("g", {
                className: "tile-blink-eye",
                children: [
                  (0, e.jsx)("path", {
                    d: "M8 62Q60 14 112 62 60 110 8 62z",
                    ...f,
                  }),
                  (0, e.jsx)("g", {
                    className: "part-pupil",
                    children: (0, e.jsx)("circle", {
                      cx: "60",
                      cy: "62",
                      r: "15",
                      ...l,
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("circle", {
                className: "tile-blink-ring",
                cx: "60",
                cy: "62",
                r: "21",
                ...f,
              }),
            ],
          }),
          audit: (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("path", { d: "M24 14h50l18 18v74H24z", ...f }),
              (0, e.jsx)("path", { d: "M74 14v18h18", ...f }),
              [44, 56, 68, 80].map((t, r) =>
                (0, e.jsx)(
                  "path",
                  { d: `M36 ${t}h${[30, 40, 22, 34][r]}`, ...f },
                  t
                )
              ),
              (0, e.jsxs)("g", {
                className: "part-glass",
                children: [
                  (0, e.jsx)("circle", {
                    cx: "52",
                    cy: "58",
                    r: "14",
                    ...f,
                    stroke: "var(--paper)",
                    strokeWidth: 3,
                  }),
                  (0, e.jsx)("circle", { cx: "52", cy: "58", r: "14", ...f }),
                  (0, e.jsx)("path", { d: "M62 68l14 14", ...f }),
                ],
              }),
            ],
          }),
        };
      function c({ size: t = 48 }) {
        let r = Math.round((2 * t) / 3),
          n = Math.max(3, Math.round(t / 12)),
          i = (t) =>
            (0, e.jsxs)("svg", {
              className: "part-coin-face",
              viewBox: "-1 -1 2 2",
              style: {
                transform: `${t ? "rotateY(180deg) " : ""}translateZ(${
                  n / 2 + 0.05
                }px)`,
              },
              "aria-hidden": !0,
              children: [
                (0, e.jsx)("circle", { r: "1", fill: "currentColor" }),
                (0, e.jsx)("circle", {
                  r: "0.8",
                  fill: "none",
                  stroke: "var(--paper)",
                  strokeWidth: 0.09,
                }),
              ],
            });
        return (0, e.jsx)("span", {
          className: "part-figure part-coin",
          style: { width: t, height: t },
          children: (0, e.jsx)("span", {
            className: "part-coin-disc",
            style: { width: r, height: r, perspective: 5 * r },
            children: (0, e.jsxs)("span", {
              className: "part-coin-body",
              children: [
                Array.from({ length: 7 }, (t, r) =>
                  (0, e.jsx)(
                    "span",
                    {
                      className: "part-coin-layer",
                      style: {
                        transform: `translateZ(${-n / 2 + (r * n) / 6}px)`,
                      },
                    },
                    r
                  )
                ),
                i(!1),
                i(!0),
              ],
            }),
          }),
        });
      }
      function p({ id: t, size: r = 48 }) {
        return "launch.token" === t
          ? (0, e.jsx)(c, { size: r })
          : (0, e.jsx)("svg", {
              className: "part-figure",
              viewBox: "0 0 120 120",
              width: r,
              height: r,
              "aria-hidden": !0,
              children: h[t],
            });
      }
      function d({ id: t, size: n = 48, live: i = !1, finale: a = !1 }) {
        let [o, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (
              !i ||
              a ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            )
              return void s(!1);
            s(!0);
            let t = setInterval(() => s((t) => !t), 1800);
            return () => clearInterval(t);
          }, [i, a]),
          (0, e.jsx)("span", {
            className: `part-stage${o || a ? " is-playing" : ""}${
              a ? " is-finale" : ""
            }`,
            children: (0, e.jsx)(p, { id: t, size: n }),
          })
        );
      }
      t.s(
        [
          "HiredFigure",
          0,
          function ({ id: t, live: n }) {
            return (0, e.jsx)(r.ViewTransition, {
              name: "hired-figure",
              share: "hired-flight",
              default: "none",
              children: (0, e.jsx)(d, { id: t, size: 52, live: n }),
            });
          },
          "Inline",
          0,
          function ({
            label: t,
            value: n,
            options: i,
            onChange: a,
            disabled: o,
          }) {
            let s = (0, r.useRef)(null),
              [u, l] = (0, r.useState)(null),
              f = i.map(([t]) => t).join("|");
            return (
              (0, r.useLayoutEffect)(() => {
                let t = () => {
                  let t = s.current?.querySelector('[aria-checked="true"]');
                  l(
                    t
                      ? {
                          x: t.offsetLeft,
                          y: t.offsetTop,
                          w: t.offsetWidth,
                          h: t.offsetHeight,
                        }
                      : null
                  );
                };
                t();
                let e = new ResizeObserver(t);
                return s.current && e.observe(s.current), () => e.disconnect();
              }, [n, f]),
              (0, e.jsxs)("span", {
                ref: s,
                className: "inline-choices",
                role: "radiogroup",
                "aria-label": t,
                children: [
                  u
                    ? (0, e.jsx)("span", {
                        className: "inline-mark",
                        "aria-hidden": !0,
                        style: {
                          transform: `translate(${u.x}px, ${u.y}px)`,
                          width: u.w,
                          height: u.h,
                        },
                      })
                    : null,
                  i.map(([t, r, i]) =>
                    (0, e.jsx)(
                      "button",
                      {
                        type: "button",
                        role: "radio",
                        "aria-checked": n === t,
                        disabled: o || i,
                        onClick: () => {
                          t !== n && a(t);
                        },
                        children: r,
                      },
                      t
                    )
                  ),
                ],
              })
            );
          },
          "PartFigure",
          0,
          p,
          "PartStage",
          0,
          d,
          "PartTiles",
          0,
          function ({
            value: t,
            options: r,
            onChange: n,
            disabled: i,
            label: a,
            onPoint: o,
          }) {
            return (0, e.jsx)("div", {
              className: "part-tiles",
              role: "radiogroup",
              "aria-label": a,
              onPointerLeave: () => o?.(null),
              onBlur: (t) => {
                t.currentTarget.contains(t.relatedTarget) || o?.(null);
              },
              children: r.map(([r, a, s], u) =>
                (0, e.jsxs)(
                  "button",
                  {
                    type: "button",
                    role: "radio",
                    "aria-checked": t === r,
                    className: "part-tile",
                    "data-id": r,
                    style: { "--n": u },
                    onClick: (t) => n(r, t.currentTarget),
                    onPointerEnter: () => o?.(r),
                    onFocus: () => o?.(r),
                    disabled: i,
                    children: [
                      (0, e.jsx)(p, { id: r }),
                      (0, e.jsx)("span", {
                        className: "part-name",
                        children: a,
                      }),
                      s
                        ? (0, e.jsx)("small", {
                            className: "part-sub",
                            children: s,
                          })
                        : null,
                    ],
                  },
                  r
                )
              ),
            });
          },
          "Term",
          0,
          function ({
            id: t,
            label: r,
            value: n,
            open: i,
            onOpen: a,
            onClose: o,
            children: u,
            bad: l,
            problem: f,
            disabled: h,
            onReset: c,
          }) {
            let p = null != u && !h,
              d = i && p;
            return (0, e.jsxs)("div", {
              className: `term${d ? " is-open" : ""}${
                p ? " is-changeable" : ""
              }`,
              "data-term": t,
              onClick: (e) => {
                !p ||
                  d ||
                  e.target.closest(
                    ".term-change, input, textarea, select, button, a"
                  ) ||
                  a(t);
              },
              children: [
                (0, e.jsx)("span", { className: "term-label", children: r }),
                d
                  ? (0, e.jsxs)("div", {
                      className: "term-edit",
                      onKeyDown: (t) => {
                        ("Escape" === t.key ||
                          ("Enter" === t.key &&
                            t.target instanceof HTMLInputElement)) &&
                          (t.preventDefault(), t.stopPropagation(), o());
                      },
                      children: [
                        u,
                        f
                          ? (0, e.jsx)("span", {
                              className: "term-problem",
                              children: f,
                            })
                          : null,
                      ],
                    })
                  : (0, e.jsx)("span", {
                      className: `term-value${l || f ? " is-bad" : ""}`,
                      children:
                        "string" == typeof (f ?? n)
                          ? (0, e.jsx)(s, { text: f ?? n })
                          : n,
                    }),
                p || (c && !h)
                  ? (0, e.jsxs)("span", {
                      className: "term-actions",
                      children: [
                        c && !h
                          ? (0, e.jsx)("button", {
                              type: "button",
                              className: "term-change term-reset",
                              onClick: c,
                              children: "Reset",
                            })
                          : null,
                        p
                          ? (0, e.jsx)("button", {
                              type: "button",
                              className: "term-change",
                              "aria-expanded": d,
                              onClick: () => (d ? o() : a(t)),
                              children: (0, e.jsx)(s, {
                                text: d ? "Done" : "Change",
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            });
          },
          "WORK",
          0,
          [
            {
              id: "build-contract-project",
              name: "Draft contracts",
              line: "A Foundry project with tests. Nothing is deployed.",
              placeholder:
                "An ERC-4626 vault with a mock token and invariant tests for share accounting.",
              ask: "What should the contracts do?",
            },
            {
              id: "research-report",
              name: "Report",
              line: "A researched answer with its sources, as a document.",
              placeholder:
                "Compare the three largest protocol designs and their slashing conditions.",
              ask: "What should the report answer?",
            },
            {
              id: "build-website",
              name: "Website",
              line: "A React site, hosted on IPFS.",
              placeholder:
                "A dashboard for an ERC-4626 vault: its TVL, share price and a connected wallet's position.",
              ask: "What is the site for, and what does each page show?",
            },
            {
              id: "build-ponder-indexer",
              name: "Indexer",
              line: "Your contracts' events as GraphQL, ready to run on your server or Railway.",
              placeholder:
                "Every swap and liquidity change in the IMD/ETH pool on Ethereum, with volume per day and each wallet's trades.",
              ask: "Which contracts, and what should it answer?",
            },
            {
              id: "create-image",
              name: "Image",
              line: "One generated image.",
              placeholder:
                "A warm illustration of a bakery storefront at dawn, for a website hero.",
              ask: "What should it show, in what style and shape?",
              media: !0,
            },
            {
              id: "create-audio",
              name: "Audio",
              line: "Narration, speech or music.",
              placeholder:
                "Thirty seconds of calm narration introducing a podcast about cities.",
              ask: "What should it say or play, and for how long?",
              media: !0,
            },
            {
              id: "create-video",
              name: "Video",
              line: "One generated video.",
              placeholder:
                "A ten-second loop of waves at sunset, for a background.",
              ask: "What happens in it, and for how long?",
              media: !0,
            },
          ],
        ],
        321014
      );
    },
    741780,
    (t) => {
      var e = t.i(147526),
        r = t.i(704434);
      let n = [
          { name: "currency0", type: "address" },
          { name: "currency1", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "tickSpacing", type: "int24" },
          { name: "hooks", type: "address" },
        ],
        i = [
          {
            name: "quoteExactInputSingle",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                name: "params",
                type: "tuple",
                components: [
                  { name: "poolKey", type: "tuple", components: n },
                  { name: "zeroForOne", type: "bool" },
                  { name: "exactAmount", type: "uint128" },
                  { name: "hookData", type: "bytes" },
                ],
              },
            ],
            outputs: [
              { name: "amountOut", type: "uint256" },
              { name: "gasEstimate", type: "uint256" },
            ],
          },
        ],
        a = [
          {
            name: "quoteExactOutputSingle",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                name: "params",
                type: "tuple",
                components: [
                  { name: "poolKey", type: "tuple", components: n },
                  { name: "zeroForOne", type: "bool" },
                  { name: "exactAmount", type: "uint128" },
                  { name: "hookData", type: "bytes" },
                ],
              },
            ],
            outputs: [
              { name: "amountIn", type: "uint256" },
              { name: "gasEstimate", type: "uint256" },
            ],
          },
        ],
        o = [
          { name: "poolKey", type: "tuple", components: n },
          { name: "zeroForOne", type: "bool" },
          { name: "amountIn", type: "uint128" },
          { name: "amountOutMinimum", type: "uint128" },
        ],
        s = [
          { name: "intermediateCurrency", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "tickSpacing", type: "int24" },
          { name: "hooks", type: "address" },
          { name: "hookData", type: "bytes" },
        ],
        u = [
          {
            name: "quoteExactInput",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                name: "params",
                type: "tuple",
                components: [
                  { name: "exactCurrency", type: "address" },
                  { name: "path", type: "tuple[]", components: s },
                  { name: "exactAmount", type: "uint128" },
                ],
              },
            ],
            outputs: [
              { name: "amountOut", type: "uint256" },
              { name: "gasEstimate", type: "uint256" },
            ],
          },
        ];
      t.s([
        "U",
        0,
        i,
        "p",
        0,
        a,
        "J",
        0,
        u,
        "g",
        0,
        [
          {
            name: "execute",
            type: "function",
            stateMutability: "payable",
            inputs: [
              { name: "commands", type: "bytes" },
              { name: "inputs", type: "bytes[]" },
              { name: "deadline", type: "uint256" },
            ],
            outputs: [],
          },
        ],
        "z",
        0,
        function (t, n, i, a, o) {
          let u = n[n.length - 1].intermediateCurrency,
            l = o
              ? (0, r.N)(
                  [
                    {
                      type: "tuple",
                      components: [
                        { name: "currencyIn", type: "address" },
                        { name: "path", type: "tuple[]", components: s },
                        { name: "minHopPriceX36", type: "uint256[]" },
                        { name: "amountIn", type: "uint128" },
                        { name: "amountOutMinimum", type: "uint128" },
                      ],
                    },
                  ],
                  [
                    {
                      currencyIn: t,
                      path: n,
                      minHopPriceX36: [],
                      amountIn: i,
                      amountOutMinimum: a,
                    },
                  ]
                )
              : (0, r.N)(
                  [
                    {
                      type: "tuple",
                      components: [
                        { name: "currencyIn", type: "address" },
                        { name: "path", type: "tuple[]", components: s },
                        { name: "amountIn", type: "uint128" },
                        { name: "amountOutMinimum", type: "uint128" },
                      ],
                    },
                  ],
                  [{ currencyIn: t, path: n, amountIn: i, amountOutMinimum: a }]
                ),
            f = (0, r.N)([{ type: "address" }, { type: "uint256" }], [t, i]),
            h = (0, r.N)([{ type: "address" }, { type: "uint256" }], [u, a]),
            c = (0, e.s)(["0x07", "0x0c", "0x0f"]);
          return {
            commands: "0x10",
            inputs: [
              (0, r.N)(
                [{ type: "bytes" }, { type: "bytes[]" }],
                [c, [l, f, h]]
              ),
            ],
          };
        },
        "D",
        0,
        function (t, n, i, a, s) {
          let u = {
              poolKey: t,
              zeroForOne: n,
              amountIn: i,
              amountOutMinimum: a,
              hookData: "0x",
            },
            l = s
              ? (0, r.N)(
                  [
                    {
                      type: "tuple",
                      components: [
                        ...o,
                        { name: "extra", type: "uint256" },
                        { name: "hookData", type: "bytes" },
                      ],
                    },
                  ],
                  [{ ...u, extra: 0n }]
                )
              : (0, r.N)(
                  [
                    {
                      type: "tuple",
                      components: [...o, { name: "hookData", type: "bytes" }],
                    },
                  ],
                  [u]
                ),
            [f, h] = n
              ? [t.currency0, t.currency1]
              : [t.currency1, t.currency0],
            c = (0, r.N)([{ type: "address" }, { type: "uint256" }], [f, i]),
            p = (0, r.N)([{ type: "address" }, { type: "uint256" }], [h, a]),
            d = (0, e.s)(["0x06", "0x0c", "0x0f"]);
          return {
            commands: "0x10",
            inputs: [
              (0, r.N)(
                [{ type: "bytes" }, { type: "bytes[]" }],
                [d, [l, c, p]]
              ),
            ],
          };
        },
        "Z",
        0,
        (t, e) => ({
          intermediateCurrency: e,
          fee: t.fee,
          tickSpacing: t.tickSpacing,
          hooks: t.hooks,
          hookData: "0x",
        }),
      ]);
    },
    785904,
    (t) => {
      t.s([
        "K",
        0,
        "0x6492649264926492649264926492649264926492649264926492649264926492",
        "x",
        0,
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      ]);
    },
    647734,
    111200,
    694382,
    (t) => {
      var e = t.i(249311),
        r = t.i(785904),
        n = t.i(790063);
      function i(t) {
        return (0, n.n)(t, -32) === r.K;
      }
      t.s(["f", 0, i], 111200),
        t.s(
          [
            "f",
            0,
            function (t) {
              if (!i(t)) return { signature: t };
              let [r, n, a] = (0, e.f)(
                [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
                t
              );
              return { address: r, data: n, signature: a };
            },
          ],
          647734
        );
      var a = t.i(831095),
        o = t.i(123847),
        s = t.i(766816),
        u = t.i(418217);
      async function l(t) {
        let { serializedTransaction: e, signature: r } = t,
          n = (0, o.f)(e),
          i = r ?? { r: n.r, s: n.s, v: n.v, yParity: n.yParity },
          l = (0, s.k)({
            ...n,
            r: void 0,
            s: void 0,
            v: void 0,
            yParity: void 0,
            sidecars: void 0,
          });
        return await (0, u.f)({ hash: (0, a.f)(l), signature: i });
      }
      t.s(["f", 0, l], 694382);
    },
    189643,
    (t) => {
      var e = t.i(776267),
        r = t.i(675107);
      t.s([
        "f",
        0,
        function (t) {
          let { r: n, s: i } = e.secp256k1.Signature.fromCompact(
              t.slice(2, 130)
            ),
            a = Number(`0x${t.slice(130)}`),
            [o, s] = (() => {
              if (0 === a || 1 === a) return [void 0, a];
              if (27 === a) return [BigInt(a), 0];
              if (28 === a) return [BigInt(a), 1];
              throw Error("Invalid yParityOrV value");
            })();
          return void 0 !== o
            ? {
                r: (0, r.N)(n, { size: 32 }),
                s: (0, r.N)(i, { size: 32 }),
                v: o,
                yParity: s,
              }
            : {
                r: (0, r.N)(n, { size: 32 }),
                s: (0, r.N)(i, { size: 32 }),
                yParity: s,
              };
        },
      ]);
    },
    393653,
    (t) => {
      var e = t.i(995062),
        r = t.i(418217);
      async function n(t) {
        let {
          domain: n,
          message: i,
          primaryType: a,
          signature: o,
          types: s,
        } = t;
        return (0, r.f)({
          hash: (0, e.c)({ domain: n, message: i, primaryType: a, types: s }),
          signature: o,
        });
      }
      t.s(["f", 0, n]);
    },
    123847,
    310624,
    (t) => {
      var e = t.i(608861),
        r = t.i(393702),
        n = t.i(796516),
        i = t.i(310538),
        a = t.i(880841),
        o = t.i(22411),
        s = t.i(8406),
        u = t.i(450323),
        l = t.i(544919),
        f = t.i(545913),
        h = t.i(647314),
        c = t.i(790063);
      function p(t) {
        let e = (0, c.n)(t, 0, 1);
        if ("0x04" === e) return "eip7702";
        if ("0x03" === e) return "eip4844";
        if ("0x02" === e) return "eip1559";
        if ("0x01" === e) return "eip2930";
        if ("0x" !== e && (0, u.T)(e) >= 192) return "legacy";
        throw new r.Q({ serializedType: e });
      }
      function d(t) {
        return (0, l.f)(`0x${t.slice(4)}`, "hex");
      }
      function y(t) {
        let r = [];
        for (let i = 0; i < t.length; i++) {
          let [a, o] = t[i];
          if (!(0, n.f)(a, { strict: !1 })) throw new e.f({ address: a });
          r.push({
            address: a,
            storageKeys: o.map((t) => ((0, f.f)(t) ? t : (0, s.f)(t))),
          });
        }
        return r;
      }
      function m(t) {
        let e = t.slice(-3),
          n = "0x" === e[0] ? 0n : (0, u.K)(e[0]);
        if (0n !== n && 1n !== n) throw new r.n({ yParity: n });
        let i = 0n === n ? 27n : 28n;
        return {
          r: (0, o.n)(e[1], { size: 32 }),
          s: (0, o.n)(e[2], { size: 32 }),
          v: i,
          yParity: +(27n !== i),
        };
      }
      t.s(["f", 0, p], 310624),
        t.s(
          [
            "f",
            0,
            function (t) {
              let e = p(t);
              return "eip1559" === e
                ? (function (t) {
                    let e = d(t),
                      [n, i, o, s, l, f, c, p, g, x, v, b] = e;
                    if (9 !== e.length && 12 !== e.length)
                      throw new r.M({
                        attributes: {
                          chainId: n,
                          nonce: i,
                          maxPriorityFeePerGas: o,
                          maxFeePerGas: s,
                          gas: l,
                          to: f,
                          value: c,
                          data: p,
                          accessList: g,
                          ...(e.length > 9 ? { v: x, r: v, s: b } : {}),
                        },
                        serializedTransaction: t,
                        type: "eip1559",
                      });
                    let w = { chainId: (0, u.T)(n), type: "eip1559" };
                    return (
                      (0, a.f)(f) && "0x" !== f && (w.to = f),
                      (0, a.f)(l) && "0x" !== l && (w.gas = (0, u.K)(l)),
                      (0, a.f)(p) && "0x" !== p && (w.data = p),
                      (0, a.f)(i) && (w.nonce = "0x" === i ? 0 : (0, u.T)(i)),
                      (0, a.f)(c) && "0x" !== c && (w.value = (0, u.K)(c)),
                      (0, a.f)(o) &&
                        "0x" !== o &&
                        (w.maxPriorityFeePerGas = (0, u.K)(o)),
                      (0, a.f)(s) &&
                        ("0x" !== s || w.maxPriorityFeePerGas) &&
                        (w.maxFeePerGas = "0x" === s ? 0n : (0, u.K)(s)),
                      0 !== g.length && "0x" !== g && (w.accessList = y(g)),
                      (0, h.m)(w),
                      { ...(12 === e.length ? m(e) : void 0), ...w }
                    );
                  })(t)
                : "eip2930" === e
                ? (function (t) {
                    let e = d(t),
                      [n, i, o, s, l, f, c, p, g, x, v] = e;
                    if (8 !== e.length && 11 !== e.length)
                      throw new r.M({
                        attributes: {
                          chainId: n,
                          nonce: i,
                          gasPrice: o,
                          gas: s,
                          to: l,
                          value: f,
                          data: c,
                          accessList: p,
                          ...(e.length > 8 ? { v: g, r: x, s: v } : {}),
                        },
                        serializedTransaction: t,
                        type: "eip2930",
                      });
                    let b = { chainId: (0, u.T)(n), type: "eip2930" };
                    return (
                      (0, a.f)(l) && "0x" !== l && (b.to = l),
                      (0, a.f)(s) && "0x" !== s && (b.gas = (0, u.K)(s)),
                      (0, a.f)(c) && "0x" !== c && (b.data = c),
                      (0, a.f)(i) && (b.nonce = "0x" === i ? 0 : (0, u.T)(i)),
                      (0, a.f)(f) && "0x" !== f && (b.value = (0, u.K)(f)),
                      (0, a.f)(o) && "0x" !== o && (b.gasPrice = (0, u.K)(o)),
                      0 !== p.length && "0x" !== p && (b.accessList = y(p)),
                      (0, h.$)(b),
                      { ...(11 === e.length ? m(e) : void 0), ...b }
                    );
                  })(t)
                : "eip4844" === e
                ? (function (t) {
                    let e = d(t),
                      n = 4 === e.length,
                      o = n ? e[0] : e,
                      s = n ? e.slice(1) : [],
                      [l, f, c, p, g, x, v, b, w, j, k, E, N, A] = o,
                      [M, B, T] = s;
                    if (11 !== o.length && 14 !== o.length)
                      throw new r.M({
                        attributes: {
                          chainId: l,
                          nonce: f,
                          maxPriorityFeePerGas: c,
                          maxFeePerGas: p,
                          gas: g,
                          to: x,
                          value: v,
                          data: b,
                          accessList: w,
                          ...(o.length > 9 ? { v: E, r: N, s: A } : {}),
                        },
                        serializedTransaction: t,
                        type: "eip4844",
                      });
                    let I = {
                      blobVersionedHashes: k,
                      chainId: (0, u.T)(l),
                      to: x,
                      type: "eip4844",
                    };
                    return (
                      (0, a.f)(g) && "0x" !== g && (I.gas = (0, u.K)(g)),
                      (0, a.f)(b) && "0x" !== b && (I.data = b),
                      (0, a.f)(f) && (I.nonce = "0x" === f ? 0 : (0, u.T)(f)),
                      (0, a.f)(v) && "0x" !== v && (I.value = (0, u.K)(v)),
                      (0, a.f)(j) &&
                        "0x" !== j &&
                        (I.maxFeePerBlobGas = (0, u.K)(j)),
                      (0, a.f)(c) &&
                        "0x" !== c &&
                        (I.maxPriorityFeePerGas = (0, u.K)(c)),
                      (0, a.f)(p) &&
                        ("0x" !== p || I.maxPriorityFeePerGas) &&
                        (I.maxFeePerGas = "0x" === p ? 0n : (0, u.K)(p)),
                      0 !== w.length && "0x" !== w && (I.accessList = y(w)),
                      M &&
                        B &&
                        T &&
                        (I.sidecars = (0, i.f)({
                          blobs: M,
                          commitments: B,
                          proofs: T,
                        })),
                      (0, h.C)(I),
                      { ...(14 === o.length ? m(o) : void 0), ...I }
                    );
                  })(t)
                : "eip7702" === e
                ? (function (t) {
                    let e = d(t),
                      [n, i, s, l, f, c, p, g, x, v, b, w, j] = e;
                    if (10 !== e.length && 13 !== e.length)
                      throw new r.M({
                        attributes: {
                          chainId: n,
                          nonce: i,
                          maxPriorityFeePerGas: s,
                          maxFeePerGas: l,
                          gas: f,
                          to: c,
                          value: p,
                          data: g,
                          accessList: x,
                          authorizationList: v,
                          ...(e.length > 9 ? { v: b, r: w, s: j } : {}),
                        },
                        serializedTransaction: t,
                        type: "eip7702",
                      });
                    let k = { chainId: (0, u.T)(n), type: "eip7702" };
                    return (
                      (0, a.f)(c) && "0x" !== c && (k.to = c),
                      (0, a.f)(f) && "0x" !== f && (k.gas = (0, u.K)(f)),
                      (0, a.f)(g) && "0x" !== g && (k.data = g),
                      (0, a.f)(i) && (k.nonce = "0x" === i ? 0 : (0, u.T)(i)),
                      (0, a.f)(p) && "0x" !== p && (k.value = (0, u.K)(p)),
                      (0, a.f)(s) &&
                        "0x" !== s &&
                        (k.maxPriorityFeePerGas = (0, u.K)(s)),
                      (0, a.f)(l) &&
                        ("0x" !== l || k.maxPriorityFeePerGas) &&
                        (k.maxFeePerGas = "0x" === l ? 0n : (0, u.K)(l)),
                      0 !== x.length && "0x" !== x && (k.accessList = y(x)),
                      0 !== v.length &&
                        "0x" !== v &&
                        (k.authorizationList = (function (t) {
                          let e = [];
                          for (let r = 0; r < t.length; r++) {
                            let [n, i, a, s, l, f] = t[r],
                              h = "0x" === s ? 0n : (0, u.K)(s),
                              c =
                                h > 1n && h < 256n
                                  ? {
                                      r: (0, o.n)(l, { size: 32 }),
                                      s: (0, o.n)(f, { size: 32 }),
                                      yParity: Number(h),
                                    }
                                  : m([s, l, f]);
                            e.push({
                              address: i,
                              chainId: "0x" === n ? 0 : (0, u.T)(n),
                              nonce: "0x" === a ? 0 : (0, u.T)(a),
                              ...c,
                            });
                          }
                          return e;
                        })(v)),
                      (0, h.X)(k),
                      { ...(13 === e.length ? m(e) : void 0), ...k }
                    );
                  })(t)
                : (function (t) {
                    let e = (0, l.f)(t, "hex"),
                      [n, i, o, s, f, c, p, d, y] = e;
                    if (6 !== e.length && 9 !== e.length)
                      throw new r.M({
                        attributes: {
                          nonce: n,
                          gasPrice: i,
                          gas: o,
                          to: s,
                          value: f,
                          data: c,
                          ...(e.length > 6 ? { v: p, r: d, s: y } : {}),
                        },
                        serializedTransaction: t,
                        type: "legacy",
                      });
                    let m = { type: "legacy" };
                    if (
                      ((0, a.f)(s) && "0x" !== s && (m.to = s),
                      (0, a.f)(o) && "0x" !== o && (m.gas = (0, u.K)(o)),
                      (0, a.f)(c) && "0x" !== c && (m.data = c),
                      (0, a.f)(n) && (m.nonce = "0x" === n ? 0 : (0, u.T)(n)),
                      (0, a.f)(f) && "0x" !== f && (m.value = (0, u.K)(f)),
                      (0, a.f)(i) && "0x" !== i && (m.gasPrice = (0, u.K)(i)),
                      (0, h.e)(m),
                      6 === e.length)
                    )
                      return m;
                    let g = (0, a.f)(p) && "0x" !== p ? (0, u.K)(p) : 0n;
                    if ("0x" === y && "0x" === d)
                      return g > 0 && (m.chainId = Number(g)), m;
                    let x = Number((g - 35n) / 2n);
                    if (x > 0) m.chainId = x;
                    else if (27n !== g && 28n !== g) throw new r.t({ v: g });
                    return (
                      (m.v = g),
                      (m.s = y),
                      (m.r = d),
                      (m.yParity = +(g % 2n === 0n)),
                      m
                    );
                  })(t);
            },
          ],
          123847
        );
    },
  ],
  467034,
  (t, e, r) => {
    var n = {
        872: function (t, e) {
          "use strict";
          (e.byteLength = function (t) {
            var e = u(t),
              r = e[0],
              n = e[1];
            return ((r + n) * 3) / 4 - n;
          }),
            (e.toByteArray = function (t) {
              var e,
                r,
                a = u(t),
                o = a[0],
                s = a[1],
                l = new i(((o + s) * 3) / 4 - s),
                f = 0,
                h = s > 0 ? o - 4 : o;
              for (r = 0; r < h; r += 4)
                (e =
                  (n[t.charCodeAt(r)] << 18) |
                  (n[t.charCodeAt(r + 1)] << 12) |
                  (n[t.charCodeAt(r + 2)] << 6) |
                  n[t.charCodeAt(r + 3)]),
                  (l[f++] = (e >> 16) & 255),
                  (l[f++] = (e >> 8) & 255),
                  (l[f++] = 255 & e);
              return (
                2 === s &&
                  ((e =
                    (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
                  (l[f++] = 255 & e)),
                1 === s &&
                  ((e =
                    (n[t.charCodeAt(r)] << 10) |
                    (n[t.charCodeAt(r + 1)] << 4) |
                    (n[t.charCodeAt(r + 2)] >> 2)),
                  (l[f++] = (e >> 8) & 255),
                  (l[f++] = 255 & e)),
                l
              );
            }),
            (e.fromByteArray = function (t) {
              for (
                var e, n = t.length, i = n % 3, a = [], o = 0, s = n - i;
                o < s;
                o += 16383
              )
                a.push(
                  (function (t, e, n) {
                    for (var i, a = [], o = e; o < n; o += 3)
                      (i =
                        ((t[o] << 16) & 0xff0000) +
                        ((t[o + 1] << 8) & 65280) +
                        (255 & t[o + 2])),
                        a.push(
                          r[(i >> 18) & 63] +
                            r[(i >> 12) & 63] +
                            r[(i >> 6) & 63] +
                            r[63 & i]
                        );
                    return a.join("");
                  })(t, o, o + 16383 > s ? s : o + 16383)
                );
              return (
                1 === i
                  ? a.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
                  : 2 === i &&
                    a.push(
                      r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                        r[(e >> 4) & 63] +
                        r[(e << 2) & 63] +
                        "="
                    ),
                a.join("")
              );
            });
          for (
            var r = [],
              n = [],
              i = "u" > typeof Uint8Array ? Uint8Array : Array,
              a =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              o = 0,
              s = a.length;
            o < s;
            ++o
          )
            (r[o] = a[o]), (n[a.charCodeAt(o)] = o);
          function u(t) {
            var e = t.length;
            if (e % 4 > 0)
              throw Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            -1 === r && (r = e);
            var n = r === e ? 0 : 4 - (r % 4);
            return [r, n];
          }
          (n[45] = 62), (n[95] = 63);
        },
        230: function (t, e, r) {
          "use strict";
          var n = r(872),
            i = r(321),
            a =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          function o(t) {
            if (t > 0x7fffffff)
              throw RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
            var e = new Uint8Array(t);
            return Object.setPrototypeOf(e, s.prototype), e;
          }
          function s(t, e, r) {
            if ("number" == typeof t) {
              if ("string" == typeof e)
                throw TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return f(t);
            }
            return u(t, e, r);
          }
          function u(t, e, r) {
            if ("string" == typeof t) {
              var n = t,
                i = e;
              if (
                (("string" != typeof i || "" === i) && (i = "utf8"),
                !s.isEncoding(i))
              )
                throw TypeError("Unknown encoding: " + i);
              var a = 0 | p(n, i),
                u = o(a),
                l = u.write(n, i);
              return l !== a && (u = u.slice(0, l)), u;
            }
            if (ArrayBuffer.isView(t)) return h(t);
            if (null == t)
              throw TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            if (
              T(t, ArrayBuffer) ||
              (t && T(t.buffer, ArrayBuffer)) ||
              ("u" > typeof SharedArrayBuffer &&
                (T(t, SharedArrayBuffer) ||
                  (t && T(t.buffer, SharedArrayBuffer))))
            )
              return (function (t, e, r) {
                var n;
                if (e < 0 || t.byteLength < e)
                  throw RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0))
                  throw RangeError('"length" is outside of buffer bounds');
                return (
                  Object.setPrototypeOf(
                    (n =
                      void 0 === e && void 0 === r
                        ? new Uint8Array(t)
                        : void 0 === r
                        ? new Uint8Array(t, e)
                        : new Uint8Array(t, e, r)),
                    s.prototype
                  ),
                  n
                );
              })(t, e, r);
            if ("number" == typeof t)
              throw TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            var f = t.valueOf && t.valueOf();
            if (null != f && f !== t) return s.from(f, e, r);
            var d = (function (t) {
              if (s.isBuffer(t)) {
                var e = 0 | c(t.length),
                  r = o(e);
                return 0 === r.length || t.copy(r, 0, 0, e), r;
              }
              return void 0 !== t.length
                ? "number" != typeof t.length ||
                  (function (t) {
                    return t != t;
                  })(t.length)
                  ? o(0)
                  : h(t)
                : "Buffer" === t.type && Array.isArray(t.data)
                ? h(t.data)
                : void 0;
            })(t);
            if (d) return d;
            if (
              "u" > typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof t[Symbol.toPrimitive]
            )
              return s.from(t[Symbol.toPrimitive]("string"), e, r);
            throw TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          }
          function l(t) {
            if ("number" != typeof t)
              throw TypeError('"size" argument must be of type number');
            if (t < 0)
              throw RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
          }
          function f(t) {
            return l(t), o(t < 0 ? 0 : 0 | c(t));
          }
          function h(t) {
            for (
              var e = t.length < 0 ? 0 : 0 | c(t.length), r = o(e), n = 0;
              n < e;
              n += 1
            )
              r[n] = 255 & t[n];
            return r;
          }
          (e.Buffer = s),
            (e.SlowBuffer = function (t) {
              return +t != t && (t = 0), s.alloc(+t);
            }),
            (e.INSPECT_MAX_BYTES = 50),
            (e.kMaxLength = 0x7fffffff),
            (s.TYPED_ARRAY_SUPPORT = (function () {
              try {
                var t = new Uint8Array(1),
                  e = {
                    foo: function () {
                      return 42;
                    },
                  };
                return (
                  Object.setPrototypeOf(e, Uint8Array.prototype),
                  Object.setPrototypeOf(t, e),
                  42 === t.foo()
                );
              } catch (t) {
                return !1;
              }
            })()),
            !s.TYPED_ARRAY_SUPPORT &&
              "u" > typeof console &&
              "function" == typeof console.error &&
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(s.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (s.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(s.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (s.isBuffer(this)) return this.byteOffset;
              },
            }),
            (s.poolSize = 8192),
            (s.from = function (t, e, r) {
              return u(t, e, r);
            }),
            Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(s, Uint8Array),
            (s.alloc = function (t, e, r) {
              return (l(t), t <= 0)
                ? o(t)
                : void 0 !== e
                ? "string" == typeof r
                  ? o(t).fill(e, r)
                  : o(t).fill(e)
                : o(t);
            }),
            (s.allocUnsafe = function (t) {
              return f(t);
            }),
            (s.allocUnsafeSlow = function (t) {
              return f(t);
            });
          function c(t) {
            if (t >= 0x7fffffff)
              throw RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
              );
            return 0 | t;
          }
          function p(t, e) {
            if (s.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || T(t, ArrayBuffer)) return t.byteLength;
            if ("string" != typeof t)
              throw TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof t
              );
            var r = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var i = !1; ; )
              switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return N(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return M(t).length;
                default:
                  if (i) return n ? -1 : N(t).length;
                  (e = ("" + e).toLowerCase()), (i = !0);
              }
          }
          function d(t, e, r) {
            var i,
              a,
              o,
              s = !1;
            if (
              ((void 0 === e || e < 0) && (e = 0),
              e > this.length ||
                ((void 0 === r || r > this.length) && (r = this.length),
                r <= 0 || (r >>>= 0) <= (e >>>= 0)))
            )
              return "";
            for (t || (t = "utf8"); ; )
              switch (t) {
                case "hex":
                  return (function (t, e, r) {
                    var n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    for (var i = "", a = e; a < r; ++a) i += I[t[a]];
                    return i;
                  })(this, e, r);
                case "utf8":
                case "utf-8":
                  return x(this, e, r);
                case "ascii":
                  return (function (t, e, r) {
                    var n = "";
                    r = Math.min(t.length, r);
                    for (var i = e; i < r; ++i)
                      n += String.fromCharCode(127 & t[i]);
                    return n;
                  })(this, e, r);
                case "latin1":
                case "binary":
                  return (function (t, e, r) {
                    var n = "";
                    r = Math.min(t.length, r);
                    for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                    return n;
                  })(this, e, r);
                case "base64":
                  return (
                    (i = this),
                    (a = e),
                    (o = r),
                    0 === a && o === i.length
                      ? n.fromByteArray(i)
                      : n.fromByteArray(i.slice(a, o))
                  );
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (function (t, e, r) {
                    for (
                      var n = t.slice(e, r), i = "", a = 0;
                      a < n.length;
                      a += 2
                    )
                      i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                    return i;
                  })(this, e, r);
                default:
                  if (s) throw TypeError("Unknown encoding: " + t);
                  (t = (t + "").toLowerCase()), (s = !0);
              }
          }
          function y(t, e, r) {
            var n = t[e];
            (t[e] = t[r]), (t[r] = n);
          }
          function m(t, e, r, n, i) {
            var a;
            if (0 === t.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 0x7fffffff
                ? (r = 0x7fffffff)
                : r < -0x80000000 && (r = -0x80000000),
              (a = r *= 1) != a && (r = i ? 0 : t.length - 1),
              r < 0 && (r = t.length + r),
              r >= t.length)
            )
              if (i) return -1;
              else r = t.length - 1;
            else if (r < 0)
              if (!i) return -1;
              else r = 0;
            if (("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)))
              return 0 === e.length ? -1 : g(t, e, r, n, i);
            if ("number" == typeof e) {
              if (
                ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
              )
                if (i) return Uint8Array.prototype.indexOf.call(t, e, r);
                else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
              return g(t, [e], r, n, i);
            }
            throw TypeError("val must be string, number or Buffer");
          }
          function g(t, e, r, n, i) {
            var a,
              o = 1,
              s = t.length,
              u = e.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              (o = 2), (s /= 2), (u /= 2), (r /= 2);
            }
            function l(t, e) {
              return 1 === o ? t[e] : t.readUInt16BE(e * o);
            }
            if (i) {
              var f = -1;
              for (a = r; a < s; a++)
                if (l(t, a) === l(e, -1 === f ? 0 : a - f)) {
                  if ((-1 === f && (f = a), a - f + 1 === u)) return f * o;
                } else -1 !== f && (a -= a - f), (f = -1);
            } else
              for (r + u > s && (r = s - u), a = r; a >= 0; a--) {
                for (var h = !0, c = 0; c < u; c++)
                  if (l(t, a + c) !== l(e, c)) {
                    h = !1;
                    break;
                  }
                if (h) return a;
              }
            return -1;
          }
          (s.isBuffer = function (t) {
            return null != t && !0 === t._isBuffer && t !== s.prototype;
          }),
            (s.compare = function (t, e) {
              if (
                (T(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                T(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
                !s.isBuffer(t) || !s.isBuffer(e))
              )
                throw TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (t === e) return 0;
              for (
                var r = t.length, n = e.length, i = 0, a = Math.min(r, n);
                i < a;
                ++i
              )
                if (t[i] !== e[i]) {
                  (r = t[i]), (n = e[i]);
                  break;
                }
              return r < n ? -1 : +(n < r);
            }),
            (s.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (s.concat = function (t, e) {
              if (!Array.isArray(t))
                throw TypeError('"list" argument must be an Array of Buffers');
              if (0 === t.length) return s.alloc(0);
              if (void 0 === e)
                for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
              var r,
                n = s.allocUnsafe(e),
                i = 0;
              for (r = 0; r < t.length; ++r) {
                var a = t[r];
                if ((T(a, Uint8Array) && (a = s.from(a)), !s.isBuffer(a)))
                  throw TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                a.copy(n, i), (i += a.length);
              }
              return n;
            }),
            (s.byteLength = p),
            (s.prototype._isBuffer = !0),
            (s.prototype.swap16 = function () {
              var t = this.length;
              if (t % 2 != 0)
                throw RangeError("Buffer size must be a multiple of 16-bits");
              for (var e = 0; e < t; e += 2) y(this, e, e + 1);
              return this;
            }),
            (s.prototype.swap32 = function () {
              var t = this.length;
              if (t % 4 != 0)
                throw RangeError("Buffer size must be a multiple of 32-bits");
              for (var e = 0; e < t; e += 4)
                y(this, e, e + 3), y(this, e + 1, e + 2);
              return this;
            }),
            (s.prototype.swap64 = function () {
              var t = this.length;
              if (t % 8 != 0)
                throw RangeError("Buffer size must be a multiple of 64-bits");
              for (var e = 0; e < t; e += 8)
                y(this, e, e + 7),
                  y(this, e + 1, e + 6),
                  y(this, e + 2, e + 5),
                  y(this, e + 3, e + 4);
              return this;
            }),
            (s.prototype.toString = function () {
              var t = this.length;
              return 0 === t
                ? ""
                : 0 == arguments.length
                ? x(this, 0, t)
                : d.apply(this, arguments);
            }),
            (s.prototype.toLocaleString = s.prototype.toString),
            (s.prototype.equals = function (t) {
              if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
              return this === t || 0 === s.compare(this, t);
            }),
            (s.prototype.inspect = function () {
              var t = "",
                r = e.INSPECT_MAX_BYTES;
              return (
                (t = this.toString("hex", 0, r)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > r && (t += " ... "),
                "<Buffer " + t + ">"
              );
            }),
            a && (s.prototype[a] = s.prototype.inspect),
            (s.prototype.compare = function (t, e, r, n, i) {
              if (
                (T(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                !s.isBuffer(t))
              )
                throw TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof t
                );
              if (
                (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                e < 0 || r > t.length || n < 0 || i > this.length)
              )
                throw RangeError("out of range index");
              if (n >= i && e >= r) return 0;
              if (n >= i) return -1;
              if (e >= r) return 1;
              if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
                return 0;
              for (
                var a = i - n,
                  o = r - e,
                  u = Math.min(a, o),
                  l = this.slice(n, i),
                  f = t.slice(e, r),
                  h = 0;
                h < u;
                ++h
              )
                if (l[h] !== f[h]) {
                  (a = l[h]), (o = f[h]);
                  break;
                }
              return a < o ? -1 : +(o < a);
            }),
            (s.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (s.prototype.indexOf = function (t, e, r) {
              return m(this, t, e, r, !0);
            }),
            (s.prototype.lastIndexOf = function (t, e, r) {
              return m(this, t, e, r, !1);
            });
          function x(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r; ) {
              var a,
                o,
                s,
                u,
                l = t[i],
                f = null,
                h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
              if (i + h <= r)
                switch (h) {
                  case 1:
                    l < 128 && (f = l);
                    break;
                  case 2:
                    (192 & (a = t[i + 1])) == 128 &&
                      (u = ((31 & l) << 6) | (63 & a)) > 127 &&
                      (f = u);
                    break;
                  case 3:
                    (a = t[i + 1]),
                      (o = t[i + 2]),
                      (192 & a) == 128 &&
                        (192 & o) == 128 &&
                        (u = ((15 & l) << 12) | ((63 & a) << 6) | (63 & o)) >
                          2047 &&
                        (u < 55296 || u > 57343) &&
                        (f = u);
                    break;
                  case 4:
                    (a = t[i + 1]),
                      (o = t[i + 2]),
                      (s = t[i + 3]),
                      (192 & a) == 128 &&
                        (192 & o) == 128 &&
                        (192 & s) == 128 &&
                        (u =
                          ((15 & l) << 18) |
                          ((63 & a) << 12) |
                          ((63 & o) << 6) |
                          (63 & s)) > 65535 &&
                        u < 1114112 &&
                        (f = u);
                }
              null === f
                ? ((f = 65533), (h = 1))
                : f > 65535 &&
                  ((f -= 65536),
                  n.push(((f >>> 10) & 1023) | 55296),
                  (f = 56320 | (1023 & f))),
                n.push(f),
                (i += h);
            }
            var c = n,
              p = c.length;
            if (p <= 4096) return String.fromCharCode.apply(String, c);
            for (var d = "", y = 0; y < p; )
              d += String.fromCharCode.apply(String, c.slice(y, (y += 4096)));
            return d;
          }
          function v(t, e, r) {
            if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
            if (t + e > r)
              throw RangeError("Trying to access beyond buffer length");
          }
          function b(t, e, r, n, i, a) {
            if (!s.isBuffer(t))
              throw TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < a)
              throw RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw RangeError("Index out of range");
          }
          function w(t, e, r, n, i, a) {
            if (r + n > t.length || r < 0)
              throw RangeError("Index out of range");
          }
          function j(t, e, r, n, a) {
            return (
              (e *= 1),
              (r >>>= 0),
              a || w(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
              i.write(t, e, r, n, 23, 4),
              r + 4
            );
          }
          function k(t, e, r, n, a) {
            return (
              (e *= 1),
              (r >>>= 0),
              a || w(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
              i.write(t, e, r, n, 52, 8),
              r + 8
            );
          }
          (s.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else if (isFinite(e))
              (e >>>= 0),
                isFinite(r)
                  ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            else
              throw Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            var i,
              a,
              o,
              s,
              u,
              l,
              f,
              h,
              c = this.length - e;
            if (
              ((void 0 === r || r > c) && (r = c),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var p = !1; ; )
              switch (n) {
                case "hex":
                  return (function (t, e, r, n) {
                    r = Number(r) || 0;
                    var i = t.length - r;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    var a = e.length;
                    n > a / 2 && (n = a / 2);
                    for (var o = 0; o < n; ++o) {
                      var s,
                        u = parseInt(e.substr(2 * o, 2), 16);
                      if ((s = u) != s) break;
                      t[r + o] = u;
                    }
                    return o;
                  })(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return (i = e), (a = r), B(N(t, this.length - i), this, i, a);
                case "ascii":
                  return (o = e), (s = r), B(A(t), this, o, s);
                case "latin1":
                case "binary":
                  return (function (t, e, r, n) {
                    return B(A(e), t, r, n);
                  })(this, t, e, r);
                case "base64":
                  return (u = e), (l = r), B(M(t), this, u, l);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (
                    (f = e),
                    (h = r),
                    B(
                      (function (t, e) {
                        for (
                          var r, n, i = [], a = 0;
                          a < t.length && !((e -= 2) < 0);
                          ++a
                        )
                          (n = (r = t.charCodeAt(a)) >> 8),
                            i.push(r % 256),
                            i.push(n);
                        return i;
                      })(t, this.length - f),
                      this,
                      f,
                      h
                    )
                  );
                default:
                  if (p) throw TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (p = !0);
              }
          }),
            (s.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            }),
            (s.prototype.slice = function (t, e) {
              var r = this.length;
              (t = ~~t),
                (e = void 0 === e ? r : ~~e),
                t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                e < t && (e = t);
              var n = this.subarray(t, e);
              return Object.setPrototypeOf(n, s.prototype), n;
            }),
            (s.prototype.readUIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
              for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                n += this[t + a] * i;
              return n;
            }),
            (s.prototype.readUIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
              for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                n += this[t + --e] * i;
              return n;
            }),
            (s.prototype.readUInt8 = function (t, e) {
              return (t >>>= 0), e || v(t, 1, this.length), this[t];
            }),
            (s.prototype.readUInt16LE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
            (s.prototype.readUInt16BE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
            (s.prototype.readUInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  0x1000000 * this[t + 3]
              );
            }),
            (s.prototype.readUInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 4, this.length),
                0x1000000 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
            (s.prototype.readIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
              for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                n += this[t + a] * i;
              return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
            }),
            (s.prototype.readIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || v(t, e, this.length);
              for (var n = e, i = 1, a = this[t + --n]; n > 0 && (i *= 256); )
                a += this[t + --n] * i;
              return a >= (i *= 128) && (a -= Math.pow(2, 8 * e)), a;
            }),
            (s.prototype.readInt8 = function (t, e) {
              return ((t >>>= 0), e || v(t, 1, this.length), 128 & this[t])
                ? -((255 - this[t] + 1) * 1)
                : this[t];
            }),
            (s.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || v(t, 2, this.length);
              var r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 0xffff0000 | r : r;
            }),
            (s.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || v(t, 2, this.length);
              var r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 0xffff0000 | r : r;
            }),
            (s.prototype.readInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (s.prototype.readInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (s.prototype.readFloatLE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 4, this.length),
                i.read(this, t, !0, 23, 4)
              );
            }),
            (s.prototype.readFloatBE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 4, this.length),
                i.read(this, t, !1, 23, 4)
              );
            }),
            (s.prototype.readDoubleLE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 8, this.length),
                i.read(this, t, !0, 52, 8)
              );
            }),
            (s.prototype.readDoubleBE = function (t, e) {
              return (
                (t >>>= 0),
                e || v(t, 8, this.length),
                i.read(this, t, !1, 52, 8)
              );
            }),
            (s.prototype.writeUIntLE = function (t, e, r, n) {
              if (((t *= 1), (e >>>= 0), (r >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r) - 1;
                b(this, t, e, r, i, 0);
              }
              var a = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < r && (a *= 256); )
                this[e + o] = (t / a) & 255;
              return e + r;
            }),
            (s.prototype.writeUIntBE = function (t, e, r, n) {
              if (((t *= 1), (e >>>= 0), (r >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r) - 1;
                b(this, t, e, r, i, 0);
              }
              var a = r - 1,
                o = 1;
              for (this[e + a] = 255 & t; --a >= 0 && (o *= 256); )
                this[e + a] = (t / o) & 255;
              return e + r;
            }),
            (s.prototype.writeUInt8 = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 1, 255, 0),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (s.prototype.writeUInt16LE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 2, 65535, 0),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (s.prototype.writeUInt16BE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 2, 65535, 0),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (s.prototype.writeUInt32LE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 4, 0xffffffff, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
            (s.prototype.writeUInt32BE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 4, 0xffffffff, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (s.prototype.writeIntLE = function (t, e, r, n) {
              if (((t *= 1), (e >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                b(this, t, e, r, i - 1, -i);
              }
              var a = 0,
                o = 1,
                s = 0;
              for (this[e] = 255 & t; ++a < r && (o *= 256); )
                t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1),
                  (this[e + a] = (((t / o) | 0) - s) & 255);
              return e + r;
            }),
            (s.prototype.writeIntBE = function (t, e, r, n) {
              if (((t *= 1), (e >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                b(this, t, e, r, i - 1, -i);
              }
              var a = r - 1,
                o = 1,
                s = 0;
              for (this[e + a] = 255 & t; --a >= 0 && (o *= 256); )
                t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1),
                  (this[e + a] = (((t / o) | 0) - s) & 255);
              return e + r;
            }),
            (s.prototype.writeInt8 = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (s.prototype.writeInt16LE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 2, 32767, -32768),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (s.prototype.writeInt16BE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 2, 32767, -32768),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (s.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 4, 0x7fffffff, -0x80000000),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (s.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t *= 1),
                (e >>>= 0),
                r || b(this, t, e, 4, 0x7fffffff, -0x80000000),
                t < 0 && (t = 0xffffffff + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (s.prototype.writeFloatLE = function (t, e, r) {
              return j(this, t, e, !0, r);
            }),
            (s.prototype.writeFloatBE = function (t, e, r) {
              return j(this, t, e, !1, r);
            }),
            (s.prototype.writeDoubleLE = function (t, e, r) {
              return k(this, t, e, !0, r);
            }),
            (s.prototype.writeDoubleBE = function (t, e, r) {
              return k(this, t, e, !1, r);
            }),
            (s.prototype.copy = function (t, e, r, n) {
              if (!s.isBuffer(t))
                throw TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r || 0 === t.length || 0 === this.length)
              )
                return 0;
              if (e < 0) throw RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw RangeError("Index out of range");
              if (n < 0) throw RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
              var i = n - r;
              if (
                this === t &&
                "function" == typeof Uint8Array.prototype.copyWithin
              )
                this.copyWithin(e, r, n);
              else if (this === t && r < e && e < n)
                for (var a = i - 1; a >= 0; --a) t[a + e] = this[a + r];
              else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
              return i;
            }),
            (s.prototype.fill = function (t, e, r, n) {
              if ("string" == typeof t) {
                if (
                  ("string" == typeof e
                    ? ((n = e), (e = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw TypeError("encoding must be a string");
                if ("string" == typeof n && !s.isEncoding(n))
                  throw TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                  var i,
                    a = t.charCodeAt(0);
                  (("utf8" === n && a < 128) || "latin1" === n) && (t = a);
                }
              } else
                "number" == typeof t
                  ? (t &= 255)
                  : "boolean" == typeof t && (t = Number(t));
              if (e < 0 || this.length < e || this.length < r)
                throw RangeError("Out of range index");
              if (r <= e) return this;
              if (
                ((e >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                t || (t = 0),
                "number" == typeof t)
              )
                for (i = e; i < r; ++i) this[i] = t;
              else {
                var o = s.isBuffer(t) ? t : s.from(t, n),
                  u = o.length;
                if (0 === u)
                  throw TypeError(
                    'The value "' + t + '" is invalid for argument "value"'
                  );
                for (i = 0; i < r - e; ++i) this[i + e] = o[i % u];
              }
              return this;
            });
          var E = /[^+/0-9A-Za-z-_]/g;
          function N(t, e) {
            e = e || 1 / 0;
            for (var r, n = t.length, i = null, a = [], o = 0; o < n; ++o) {
              if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                if (!i) {
                  if (r > 56319 || o + 1 === n) {
                    (e -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  (e -= 3) > -1 && a.push(239, 191, 189), (i = r);
                  continue;
                }
                r = (((i - 55296) << 10) | (r - 56320)) + 65536;
              } else i && (e -= 3) > -1 && a.push(239, 191, 189);
              if (((i = null), r < 128)) {
                if ((e -= 1) < 0) break;
                a.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                a.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else if (r < 1114112) {
                if ((e -= 4) < 0) break;
                a.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128
                );
              } else throw Error("Invalid code point");
            }
            return a;
          }
          function A(t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r));
            return e;
          }
          function M(t) {
            return n.toByteArray(
              (function (t) {
                if (
                  (t = (t = t.split("=")[0]).trim().replace(E, "")).length < 2
                )
                  return "";
                for (; t.length % 4 != 0; ) t += "=";
                return t;
              })(t)
            );
          }
          function B(t, e, r, n) {
            for (
              var i = 0;
              i < n && !(i + r >= e.length) && !(i >= t.length);
              ++i
            )
              e[i + r] = t[i];
            return i;
          }
          function T(t, e) {
            return (
              t instanceof e ||
              (null != t &&
                null != t.constructor &&
                null != t.constructor.name &&
                t.constructor.name === e.name)
            );
          }
          var I = (function () {
            for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
              for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
            return e;
          })();
        },
        321: function (t, e) {
          (e.read = function (t, e, r, n, i) {
            var a,
              o,
              s = 8 * i - n - 1,
              u = (1 << s) - 1,
              l = u >> 1,
              f = -7,
              h = r ? i - 1 : 0,
              c = r ? -1 : 1,
              p = t[e + h];
            for (
              h += c, a = p & ((1 << -f) - 1), p >>= -f, f += s;
              f > 0;
              a = 256 * a + t[e + h], h += c, f -= 8
            );
            for (
              o = a & ((1 << -f) - 1), a >>= -f, f += n;
              f > 0;
              o = 256 * o + t[e + h], h += c, f -= 8
            );
            if (0 === a) a = 1 - l;
            else {
              if (a === u) return o ? 0 / 0 : (p ? -1 : 1) * 2e308;
              (o += Math.pow(2, n)), (a -= l);
            }
            return (p ? -1 : 1) * o * Math.pow(2, a - n);
          }),
            (e.write = function (t, e, r, n, i, a) {
              var o,
                s,
                u,
                l = 8 * a - i - 1,
                f = (1 << l) - 1,
                h = f >> 1,
                c = 5960464477539062e-23 * (23 === i),
                p = n ? 0 : a - 1,
                d = n ? 1 : -1,
                y = +(e < 0 || (0 === e && 1 / e < 0));
              for (
                isNaN((e = Math.abs(e))) || 1 / 0 === e
                  ? ((s = +!!isNaN(e)), (o = f))
                  : ((o = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
                    o + h >= 1 ? (e += c / u) : (e += c * Math.pow(2, 1 - h)),
                    e * u >= 2 && (o++, (u /= 2)),
                    o + h >= f
                      ? ((s = 0), (o = f))
                      : o + h >= 1
                      ? ((s = (e * u - 1) * Math.pow(2, i)), (o += h))
                      : ((s = e * Math.pow(2, h - 1) * Math.pow(2, i)),
                        (o = 0)));
                i >= 8;
                t[r + p] = 255 & s, p += d, s /= 256, i -= 8
              );
              for (
                o = (o << i) | s, l += i;
                l > 0;
                t[r + p] = 255 & o, p += d, o /= 256, l -= 8
              );
              t[r + p - d] |= 128 * y;
            });
        },
      },
      i = {};
    function a(t) {
      var e = i[t];
      if (void 0 !== e) return e.exports;
      var r = (i[t] = { exports: {} }),
        o = !0;
      try {
        n[t](r, r.exports, a), (o = !1);
      } finally {
        o && delete i[t];
      }
      return r.exports;
    }
    (a.ab = "/ROOT/node_modules/next/dist/compiled/buffer/"),
      (e.exports = a(230));
  },
]);
