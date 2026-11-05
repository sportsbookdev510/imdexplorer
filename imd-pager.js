(function () {
  function isPagerLink(a) {
    var rel = (a.getAttribute("rel") || "").toLowerCase();
    if (rel === "next" || rel === "prev") return true;
    var href = a.getAttribute("href") || "";
    return /[?&]page=\d+/.test(href) || /\/page\/\d+\/?$/.test(href);
  }

  function localArtifactUrl(url) {
    if (!url) return url;
    var hash = null;
    var m = url.match(/artifacts(?:\/|%2F)([a-f0-9]{64})/i);
    if (m) hash = m[1];
    if (!hash) return url;
    if (/\/artifacts\/[a-f0-9]{64}\.[a-z0-9]+$/i.test(url)) return url;
    return "/artifacts/" + hash + ".jpg";
  }

  function fixImg(img) {
    if (!img || img.tagName !== "IMG") return;
    var src = img.getAttribute("src") || "";
    var next = localArtifactUrl(src);
    if (next !== src) img.setAttribute("src", next);
    var srcset = img.getAttribute("srcset") || img.getAttribute("srcSet") || "";
    if (srcset) {
      var fixed = srcset
        .split(",")
        .map(function (part) {
          var bits = part.trim().split(/\s+/);
          bits[0] = localArtifactUrl(bits[0]);
          return bits.join(" ");
        })
        .join(", ");
      img.setAttribute("srcset", fixed);
    }
  }

  document.addEventListener(
    "click",
    function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a || !isPagerLink(a)) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      window.location.href = a.href;
    },
    true
  );

  document.addEventListener(
    "error",
    function (e) {
      var img = e.target;
      if (!img || img.tagName !== "IMG" || img.dataset.imdTried) return;
      var src = img.getAttribute("src") || "";
      var m = src.match(/\/artifacts\/([a-f0-9]{64})(?:\.([a-z0-9]+))?$/i);
      if (!m) return;
      img.dataset.imdTried = "1";
      var hash = m[1];
      var ext = (m[2] || "").toLowerCase();
      var nextExt = ext === "jpg" ? "png" : "jpg";
      img.src = "/artifacts/" + hash + "." + nextExt;
    },
    true
  );

  var STAKE_RE = /(?:un)?stak(?:e|ed|es|ing|er|ers)/i;
  var SKIP_STAKE = /script|style|noscript|textarea|input/i;
  var HIDE_SEL =
    ".feed-row, .finding, .findings, .step, .launch-row, .md, .feed-line, .viewer-bar, .feed-team-card, .attempt-body, .node-body, .brief-full, .request, .fold, .facts, .field, .step-says, p, li, h1, h2, h3, h4, pre, figcaption, .feed-coin, .feed-title, .viewer-name";

  function hasStake(s) {
    if (!s) return false;
    return STAKE_RE.test(String(s).replace(/mistake/gi, ""));
  }

  function scrub(s) {
    return String(s)
      .replace(/mistake/gi, "\0MISTAKE\0")
      .replace(/\brestaking\b/gi, "")
      .replace(/\bstaking\b/gi, "")
      .replace(/\bstakers\b/gi, "holders")
      .replace(/\bstaker\b/gi, "holder")
      .replace(/\bstaked\b/gi, "")
      .replace(/\bstakes\b/gi, "")
      .replace(/\bunstake\b/gi, "")
      .replace(/\bstake\b/gi, "")
      .replace(/([A-Za-z]+)?Stak(?:e|ed|es|ing|er|ers)([A-Za-z]+)?/g, "")
      .replace(/\0MISTAKE\0/g, "mistake")
      .replace(/[ \t]{2,}/g, " ")
      .replace(/\s+([.,;:])/g, "$1")
      .replace(/\s+\n/g, "\n")
      .trim();
  }

  function hide(el) {
    if (!el || el.dataset.imdNoStake === "1") return;
    if (el.closest && el.closest("nav, .xtabs, .xnav, header")) return;
    el.dataset.imdNoStake = "1";
    el.setAttribute("hidden", "");
    el.style.setProperty("display", "none", "important");
  }

  function stripStake() {
    if (!document.body) return;
    var main = document.querySelector("main");
    if (main && /\/jobs\//.test(location.pathname) && hasStake(main.textContent)) {
      var hits = main.textContent.match(/stak(?:e|ed|es|ing|er|ers)/gi);
      if (hits && hits.length >= 8) {
        document.documentElement.setAttribute("data-imd-stake-job", "1");
        Array.prototype.forEach.call(main.children, hide);
      }
    }
    document.querySelectorAll(HIDE_SEL).forEach(function (el) {
      if (el.dataset.imdNoStake === "1") return;
      if (el.closest("nav, .xtabs, .xnav, script, style")) return;
      if (hasStake(el.textContent)) hide(el);
    });
    document.querySelectorAll("textarea[placeholder], input[placeholder]").forEach(function (el) {
      var ph = el.getAttribute("placeholder") || "";
      if (hasStake(ph)) el.setAttribute("placeholder", scrub(ph) || "Describe what to launch.");
    });
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !hasStake(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = node.parentElement;
        if (!p || SKIP_STAKE.test(p.tagName) || p.closest("script,style,noscript,nav,.xtabs")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var el = node.parentElement;
      if (!el) return;
      var block = el.closest(
        ".feed-row, .finding, .step, .launch-row, .md, p, li, h1, h2, h3, h4, .feed-line, .viewer-bar, .attempt-body"
      );
      if (block && !block.closest("nav, .xtabs, header")) {
        hide(block);
        return;
      }
      var next = scrub(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
  }

  function scan() {
    document.querySelectorAll("img").forEach(fixImg);
    stripStake();
  }

  if (!document.getElementById("imd-no-stake")) {
    var style = document.createElement("style");
    style.id = "imd-no-stake";
    style.textContent =
      '[data-imd-no-stake="1"], [data-imd-no-stake="1"] *, html[data-imd-stake-job] main { display: none !important; }';
    (document.head || document.documentElement).appendChild(style);
  }

  var scheduled = 0;
  function scanSoon() {
    if (scheduled) return;
    scheduled = requestAnimationFrame(function () {
      scheduled = 0;
      scan();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }
  new MutationObserver(scanSoon).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["placeholder"],
  });
})();
