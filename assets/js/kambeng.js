import { i as Te, l as ot } from "./tiny-invariant.D7mCzvTN.js";
import "./BackgroundImage.astro_astro_type_script_index_0_lang.CWa2MAiD.js";
const Fe = "menu-modal",
  _e = document.querySelector("#page-header"),
  Je = document.documentElement,
  dt = document.querySelector(`#${Fe} ul`),
  ct = document.querySelector("#open-nav-button"),
  pt = document.querySelector("#close-nav-button");
Te(_e);
Te(dt);
Te(ct);
Te(pt);
const xt = () => {
    ot.show(Fe, { disableScroll: !0 });
  },
  ft = () => {
    ot.close(Fe);
  };

ct.addEventListener("click", xt);
pt.addEventListener("click", ft);
document.addEventListener("scroll", () => {
  const i = Je.clientHeight - Je.scrollTop - _e.offsetHeight;
  _e.classList.toggle("fixed-header", i < 0);
});
dt.addEventListener("click", (i) => {
  i.target.tagName === "A" && ft();
});
document.addEventListener("DOMContentLoaded", function () {
  const i = document.querySelectorAll(".animate-fade-in"),
    e = new IntersectionObserver(
      (t, s) => {
        t.forEach((r) => {
          r.isIntersecting &&
            (r.target.classList.add("opacity-100"), s.unobserve(r.target));
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );
  i.forEach((t) => {
    e.observe(t);
  });
});
function et(i) {
  return (
    i !== null &&
    typeof i == "object" &&
    "constructor" in i &&
    i.constructor === Object
  );
}
function qe(i, e) {
  i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((t) => {
      typeof i[t] > "u"
        ? (i[t] = e[t])
        : et(e[t]) &&
          et(i[t]) &&
          Object.keys(e[t]).length > 0 &&
          qe(i[t], e[t]);
    });
}
const ut = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function W() {
  const i = typeof document < "u" ? document : {};
  return qe(i, ut), i;
}
const Et = {
  document: ut,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  },
};
function Y() {
  const i = typeof window < "u" ? window : {};
  return qe(i, Et), i;
}
function ee(i) {
  return (
    i === void 0 && (i = ""),
    i
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function Tt(i) {
  const e = i;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function re(i, e) {
  return e === void 0 && (e = 0), setTimeout(i, e);
}
function Z() {
  return Date.now();
}
function Mt(i) {
  const e = Y();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
  );
}
function Re(i, e) {
  e === void 0 && (e = "x");
  const t = Y();
  let s, r, a;
  const c = Mt(i);
  return (
    t.WebKitCSSMatrix
      ? ((r = c.transform || c.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((d) => d.replace(",", "."))
            .join(", ")),
        (a = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((a =
          c.MozTransform ||
          c.OTransform ||
          c.MsTransform ||
          c.msTransform ||
          c.transform ||
          c
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = a.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (r = a.m41)
        : s.length === 16
        ? (r = parseFloat(s[12]))
        : (r = parseFloat(s[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (r = a.m42)
        : s.length === 16
        ? (r = parseFloat(s[13]))
        : (r = parseFloat(s[5]))),
    r || 0
  );
}
function fe(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object"
  );
}
function Ct(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? i instanceof HTMLElement
    : i && (i.nodeType === 1 || i.nodeType === 11);
}
function U() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (s != null && !Ct(s)) {
      const r = Object.keys(Object(s)).filter((a) => e.indexOf(a) < 0);
      for (let a = 0, c = r.length; a < c; a += 1) {
        const d = r[a],
          n = Object.getOwnPropertyDescriptor(s, d);
        n !== void 0 &&
          n.enumerable &&
          (fe(i[d]) && fe(s[d])
            ? s[d].__swiper__
              ? (i[d] = s[d])
              : U(i[d], s[d])
            : !fe(i[d]) && fe(s[d])
            ? ((i[d] = {}), s[d].__swiper__ ? (i[d] = s[d]) : U(i[d], s[d]))
            : (i[d] = s[d]));
      }
    }
  }
  return i;
}
function ue(i, e, t) {
  i.style.setProperty(e, t);
}
function mt(i) {
  let { swiper: e, targetPosition: t, side: s } = i;
  const r = Y(),
    a = -e.translate;
  let c = null,
    d;
  const n = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const f = t > a ? "next" : "prev",
    o = (p, m) => (f === "next" && p >= m) || (f === "prev" && p <= m),
    l = () => {
      (d = new Date().getTime()), c === null && (c = d);
      const p = Math.max(Math.min((d - c) / n, 1), 0),
        m = 0.5 - Math.cos(p * Math.PI) / 2;
      let h = a + m * (t - a);
      if ((o(h, t) && (h = t), e.wrapperEl.scrollTo({ [s]: h }), o(h, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [s]: h });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(l);
    };
  l();
}
function ae(i) {
  return (
    i.querySelector(".swiper-slide-transform") ||
    (i.shadowRoot && i.shadowRoot.querySelector(".swiper-slide-transform")) ||
    i
  );
}
function q(i, e) {
  return e === void 0 && (e = ""), [...i.children].filter((t) => t.matches(e));
}
function xe(i) {
  try {
    console.warn(i);
    return;
  } catch {}
}
function K(i, e) {
  e === void 0 && (e = []);
  const t = document.createElement(i);
  return t.classList.add(...(Array.isArray(e) ? e : ee(e))), t;
}
function Ee(i) {
  const e = Y(),
    t = W(),
    s = i.getBoundingClientRect(),
    r = t.body,
    a = i.clientTop || r.clientTop || 0,
    c = i.clientLeft || r.clientLeft || 0,
    d = i === e ? e.scrollY : i.scrollTop,
    n = i === e ? e.scrollX : i.scrollLeft;
  return { top: s.top + d - a, left: s.left + n - c };
}
function Pt(i, e) {
  const t = [];
  for (; i.previousElementSibling; ) {
    const s = i.previousElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), (i = s);
  }
  return t;
}
function Lt(i, e) {
  const t = [];
  for (; i.nextElementSibling; ) {
    const s = i.nextElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), (i = s);
  }
  return t;
}
function te(i, e) {
  return Y().getComputedStyle(i, null).getPropertyValue(e);
}
function he(i) {
  let e = i,
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function se(i, e) {
  const t = [];
  let s = i.parentElement;
  for (; s; ) e ? s.matches(e) && t.push(s) : t.push(s), (s = s.parentElement);
  return t;
}
function me(i, e) {
  function t(s) {
    s.target === i && (e.call(i, s), i.removeEventListener("transitionend", t));
  }
  e && i.addEventListener("transitionend", t);
}
function Ve(i, e, t) {
  const s = Y();
  return (
    i[e === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      s
        .getComputedStyle(i, null)
        .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      s
        .getComputedStyle(i, null)
        .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function V(i) {
  return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
}
let $e;
function zt() {
  const i = Y(),
    e = W();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in i ||
      (i.DocumentTouch && e instanceof i.DocumentTouch)
    ),
  };
}
function ht() {
  return $e || ($e = zt()), $e;
}
let Oe;
function It(i) {
  let { userAgent: e } = i === void 0 ? {} : i;
  const t = ht(),
    s = Y(),
    r = s.navigator.platform,
    a = e || s.navigator.userAgent,
    c = { ios: !1, android: !1 },
    d = s.screen.width,
    n = s.screen.height,
    f = a.match(/(Android);?[\s\/]+([\d.]+)?/);
  let o = a.match(/(iPad).*OS\s([\d_]+)/);
  const l = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !o && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = r === "Win32";
  let h = r === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !o &&
      h &&
      t.touch &&
      v.indexOf(`${d}x${n}`) >= 0 &&
      ((o = a.match(/(Version)\/([\d.]+)/)),
      o || (o = [0, 1, "13_0_0"]),
      (h = !1)),
    f && !m && ((c.os = "android"), (c.android = !0)),
    (o || p || l) && ((c.os = "ios"), (c.ios = !0)),
    c
  );
}
function gt(i) {
  return i === void 0 && (i = {}), Oe || (Oe = It(i)), Oe;
}
let De;
function At() {
  const i = Y(),
    e = gt();
  let t = !1;
  function s() {
    const d = i.navigator.userAgent.toLowerCase();
    return (
      d.indexOf("safari") >= 0 &&
      d.indexOf("chrome") < 0 &&
      d.indexOf("android") < 0
    );
  }
  if (s()) {
    const d = String(i.navigator.userAgent);
    if (d.includes("Version/")) {
      const [n, f] = d
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      t = n < 16 || (n === 16 && f < 2);
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      i.navigator.userAgent
    ),
    a = s(),
    c = a || (r && e.ios);
  return {
    isSafari: t || a,
    needPerspectiveFix: t,
    need3dFix: c,
    isWebView: r,
  };
}
function $t() {
  return De || (De = At()), De;
}
function Ot(i) {
  let { swiper: e, on: t, emit: s } = i;
  const r = Y();
  let a = null,
    c = null;
  const d = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    },
    n = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((a = new ResizeObserver((l) => {
          c = r.requestAnimationFrame(() => {
            const { width: p, height: m } = e;
            let h = p,
              v = m;
            l.forEach((w) => {
              let { contentBoxSize: u, contentRect: b, target: g } = w;
              (g && g !== e.el) ||
                ((h = b ? b.width : (u[0] || u).inlineSize),
                (v = b ? b.height : (u[0] || u).blockSize));
            }),
              (h !== p || v !== m) && d();
          });
        })),
        a.observe(e.el));
    },
    f = () => {
      c && r.cancelAnimationFrame(c),
        a && a.unobserve && e.el && (a.unobserve(e.el), (a = null));
    },
    o = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      n();
      return;
    }
    r.addEventListener("resize", d), r.addEventListener("orientationchange", o);
  }),
    t("destroy", () => {
      f(),
        r.removeEventListener("resize", d),
        r.removeEventListener("orientationchange", o);
    });
}
function Dt(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const a = [],
    c = Y(),
    d = function (o, l) {
      l === void 0 && (l = {});
      const p = c.MutationObserver || c.WebkitMutationObserver,
        m = new p((h) => {
          if (e.__preventObserver__) return;
          if (h.length === 1) {
            r("observerUpdate", h[0]);
            return;
          }
          const v = function () {
            r("observerUpdate", h[0]);
          };
          c.requestAnimationFrame
            ? c.requestAnimationFrame(v)
            : c.setTimeout(v, 0);
        });
      m.observe(o, {
        attributes: typeof l.attributes > "u" ? !0 : l.attributes,
        childList: typeof l.childList > "u" ? !0 : l.childList,
        characterData: typeof l.characterData > "u" ? !0 : l.characterData,
      }),
        a.push(m);
    },
    n = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const o = se(e.hostEl);
          for (let l = 0; l < o.length; l += 1) d(o[l]);
        }
        d(e.hostEl, { childList: e.params.observeSlideChildren }),
          d(e.wrapperEl, { attributes: !1 });
      }
    },
    f = () => {
      a.forEach((o) => {
        o.disconnect();
      }),
        a.splice(0, a.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", n),
    s("destroy", f);
}
var kt = {
  on(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const r = t ? "unshift" : "push";
    return (
      i.split(" ").forEach((a) => {
        s.eventsListeners[a] || (s.eventsListeners[a] = []),
          s.eventsListeners[a][r](e);
      }),
      s
    );
  },
  once(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function r() {
      s.off(i, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
        c[d] = arguments[d];
      e.apply(s, c);
    }
    return (r.__emitterProxy = e), s.on(i, r, t);
  },
  onAny(i, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
    const s = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t;
  },
  offAny(i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(i, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        i.split(" ").forEach((s) => {
          typeof e > "u"
            ? (t.eventsListeners[s] = [])
            : t.eventsListeners[s] &&
              t.eventsListeners[s].forEach((r, a) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  t.eventsListeners[s].splice(a, 1);
              });
        }),
      t
    );
  },
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
    let e, t, s;
    for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
      a[c] = arguments[c];
    return (
      typeof a[0] == "string" || Array.isArray(a[0])
        ? ((e = a[0]), (t = a.slice(1, a.length)), (s = i))
        : ((e = a[0].events), (t = a[0].data), (s = a[0].context || i)),
      t.unshift(s),
      (Array.isArray(e) ? e : e.split(" ")).forEach((n) => {
        i.eventsAnyListeners &&
          i.eventsAnyListeners.length &&
          i.eventsAnyListeners.forEach((f) => {
            f.apply(s, [n, ...t]);
          }),
          i.eventsListeners &&
            i.eventsListeners[n] &&
            i.eventsListeners[n].forEach((f) => {
              f.apply(s, t);
            });
      }),
      i
    );
  },
};
function Ht() {
  const i = this;
  let e, t;
  const s = i.el;
  typeof i.params.width < "u" && i.params.width !== null
    ? (e = i.params.width)
    : (e = s.clientWidth),
    typeof i.params.height < "u" && i.params.height !== null
      ? (t = i.params.height)
      : (t = s.clientHeight),
    !((e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical())) &&
      ((e =
        e -
        parseInt(te(s, "padding-left") || 0, 10) -
        parseInt(te(s, "padding-right") || 0, 10)),
      (t =
        t -
        parseInt(te(s, "padding-top") || 0, 10) -
        parseInt(te(s, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t,
      }));
}
function Bt() {
  const i = this;
  function e(T, A) {
    return parseFloat(T.getPropertyValue(i.getDirectionLabel(A)) || 0);
  }
  const t = i.params,
    { wrapperEl: s, slidesEl: r, size: a, rtlTranslate: c, wrongRTL: d } = i,
    n = i.virtual && t.virtual.enabled,
    f = n ? i.virtual.slides.length : i.slides.length,
    o = q(r, `.${i.params.slideClass}, swiper-slide`),
    l = n ? i.virtual.slides.length : o.length;
  let p = [];
  const m = [],
    h = [];
  let v = t.slidesOffsetBefore;
  typeof v == "function" && (v = t.slidesOffsetBefore.call(i));
  let w = t.slidesOffsetAfter;
  typeof w == "function" && (w = t.slidesOffsetAfter.call(i));
  const u = i.snapGrid.length,
    b = i.slidesGrid.length;
  let g = t.spaceBetween,
    y = -v,
    L = 0,
    z = 0;
  if (typeof a > "u") return;
  typeof g == "string" && g.indexOf("%") >= 0
    ? (g = (parseFloat(g.replace("%", "")) / 100) * a)
    : typeof g == "string" && (g = parseFloat(g)),
    (i.virtualSize = -g),
    o.forEach((T) => {
      c ? (T.style.marginLeft = "") : (T.style.marginRight = ""),
        (T.style.marginBottom = ""),
        (T.style.marginTop = "");
    }),
    t.centeredSlides &&
      t.cssMode &&
      (ue(s, "--swiper-centered-offset-before", ""),
      ue(s, "--swiper-centered-offset-after", ""));
  const D = t.grid && t.grid.rows > 1 && i.grid;
  D ? i.grid.initSlides(o) : i.grid && i.grid.unsetSlides();
  let M;
  const S =
    t.slidesPerView === "auto" &&
    t.breakpoints &&
    Object.keys(t.breakpoints).filter(
      (T) => typeof t.breakpoints[T].slidesPerView < "u"
    ).length > 0;
  for (let T = 0; T < l; T += 1) {
    M = 0;
    let A;
    if (
      (o[T] && (A = o[T]),
      D && i.grid.updateSlide(T, A, o),
      !(o[T] && te(A, "display") === "none"))
    ) {
      if (t.slidesPerView === "auto") {
        S && (o[T].style[i.getDirectionLabel("width")] = "");
        const E = getComputedStyle(A),
          x = A.style.transform,
          C = A.style.webkitTransform;
        if (
          (x && (A.style.transform = "none"),
          C && (A.style.webkitTransform = "none"),
          t.roundLengths)
        )
          M = i.isHorizontal() ? Ve(A, "width") : Ve(A, "height");
        else {
          const O = e(E, "width"),
            G = e(E, "padding-left"),
            P = e(E, "padding-right"),
            I = e(E, "margin-left"),
            H = e(E, "margin-right"),
            R = E.getPropertyValue("box-sizing");
          if (R && R === "border-box") M = O + I + H;
          else {
            const { clientWidth: $, offsetWidth: k } = A;
            M = O + G + P + I + H + (k - $);
          }
        }
        x && (A.style.transform = x),
          C && (A.style.webkitTransform = C),
          t.roundLengths && (M = Math.floor(M));
      } else
        (M = (a - (t.slidesPerView - 1) * g) / t.slidesPerView),
          t.roundLengths && (M = Math.floor(M)),
          o[T] && (o[T].style[i.getDirectionLabel("width")] = `${M}px`);
      o[T] && (o[T].swiperSlideSize = M),
        h.push(M),
        t.centeredSlides
          ? ((y = y + M / 2 + L / 2 + g),
            L === 0 && T !== 0 && (y = y - a / 2 - g),
            T === 0 && (y = y - a / 2 - g),
            Math.abs(y) < 1 / 1e3 && (y = 0),
            t.roundLengths && (y = Math.floor(y)),
            z % t.slidesPerGroup === 0 && p.push(y),
            m.push(y))
          : (t.roundLengths && (y = Math.floor(y)),
            (z - Math.min(i.params.slidesPerGroupSkip, z)) %
              i.params.slidesPerGroup ===
              0 && p.push(y),
            m.push(y),
            (y = y + M + g)),
        (i.virtualSize += M + g),
        (L = M),
        (z += 1);
    }
  }
  if (
    ((i.virtualSize = Math.max(i.virtualSize, a) + w),
    c &&
      d &&
      (t.effect === "slide" || t.effect === "coverflow") &&
      (s.style.width = `${i.virtualSize + g}px`),
    t.setWrapperSize &&
      (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + g}px`),
    D && i.grid.updateWrapperSize(M, p),
    !t.centeredSlides)
  ) {
    const T = [];
    for (let A = 0; A < p.length; A += 1) {
      let E = p[A];
      t.roundLengths && (E = Math.floor(E)),
        p[A] <= i.virtualSize - a && T.push(E);
    }
    (p = T),
      Math.floor(i.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(i.virtualSize - a);
  }
  if (n && t.loop) {
    const T = h[0] + g;
    if (t.slidesPerGroup > 1) {
      const A = Math.ceil(
          (i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup
        ),
        E = T * t.slidesPerGroup;
      for (let x = 0; x < A; x += 1) p.push(p[p.length - 1] + E);
    }
    for (let A = 0; A < i.virtual.slidesBefore + i.virtual.slidesAfter; A += 1)
      t.slidesPerGroup === 1 && p.push(p[p.length - 1] + T),
        m.push(m[m.length - 1] + T),
        (i.virtualSize += T);
  }
  if ((p.length === 0 && (p = [0]), g !== 0)) {
    const T =
      i.isHorizontal() && c ? "marginLeft" : i.getDirectionLabel("marginRight");
    o.filter((A, E) =>
      !t.cssMode || t.loop ? !0 : E !== o.length - 1
    ).forEach((A) => {
      A.style[T] = `${g}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let T = 0;
    h.forEach((E) => {
      T += E + (g || 0);
    }),
      (T -= g);
    const A = T - a;
    p = p.map((E) => (E <= 0 ? -v : E > A ? A + w : E));
  }
  if (t.centerInsufficientSlides) {
    let T = 0;
    if (
      (h.forEach((A) => {
        T += A + (g || 0);
      }),
      (T -= g),
      T < a)
    ) {
      const A = (a - T) / 2;
      p.forEach((E, x) => {
        p[x] = E - A;
      }),
        m.forEach((E, x) => {
          m[x] = E + A;
        });
    }
  }
  if (
    (Object.assign(i, {
      slides: o,
      snapGrid: p,
      slidesGrid: m,
      slidesSizesGrid: h,
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
  ) {
    ue(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      ue(
        s,
        "--swiper-centered-offset-after",
        `${i.size / 2 - h[h.length - 1] / 2}px`
      );
    const T = -i.snapGrid[0],
      A = -i.slidesGrid[0];
    (i.snapGrid = i.snapGrid.map((E) => E + T)),
      (i.slidesGrid = i.slidesGrid.map((E) => E + A));
  }
  if (
    (l !== f && i.emit("slidesLengthChange"),
    p.length !== u &&
      (i.params.watchOverflow && i.checkOverflow(),
      i.emit("snapGridLengthChange")),
    m.length !== b && i.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && i.updateSlidesOffset(),
    i.emit("slidesUpdated"),
    !n && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
  ) {
    const T = `${t.containerModifierClass}backface-hidden`,
      A = i.el.classList.contains(T);
    l <= t.maxBackfaceHiddenSlides
      ? A || i.el.classList.add(T)
      : A && i.el.classList.remove(T);
  }
}
function Gt(i) {
  const e = this,
    t = [],
    s = e.virtual && e.params.virtual.enabled;
  let r = 0,
    a;
  typeof i == "number"
    ? e.setTransition(i)
    : i === !0 && e.setTransition(e.params.speed);
  const c = (d) => (s ? e.slides[e.getSlideIndexByData(d)] : e.slides[d]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((d) => {
        t.push(d);
      });
    else
      for (a = 0; a < Math.ceil(e.params.slidesPerView); a += 1) {
        const d = e.activeIndex + a;
        if (d > e.slides.length && !s) break;
        t.push(c(d));
      }
  else t.push(c(e.activeIndex));
  for (a = 0; a < t.length; a += 1)
    if (typeof t[a] < "u") {
      const d = t[a].offsetHeight;
      r = d > r ? d : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function _t() {
  const i = this,
    e = i.slides,
    t = i.isElement
      ? i.isHorizontal()
        ? i.wrapperEl.offsetLeft
        : i.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
      t -
      i.cssOverflowAdjustment();
}
function Rt(i) {
  i === void 0 && (i = (this && this.translate) || 0);
  const e = this,
    t = e.params,
    { slides: s, rtlTranslate: r, snapGrid: a } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let c = -i;
  r && (c = i),
    s.forEach((n) => {
      n.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let d = t.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0
    ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
    : typeof d == "string" && (d = parseFloat(d));
  for (let n = 0; n < s.length; n += 1) {
    const f = s[n];
    let o = f.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (o -= s[0].swiperSlideOffset);
    const l =
        (c + (t.centeredSlides ? e.minTranslate() : 0) - o) /
        (f.swiperSlideSize + d),
      p =
        (c - a[0] + (t.centeredSlides ? e.minTranslate() : 0) - o) /
        (f.swiperSlideSize + d),
      m = -(c - o),
      h = m + e.slidesSizesGrid[n],
      v = m >= 0 && m <= e.size - e.slidesSizesGrid[n];
    ((m >= 0 && m < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (m <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(f),
      e.visibleSlidesIndexes.push(n),
      s[n].classList.add(t.slideVisibleClass)),
      v && s[n].classList.add(t.slideFullyVisibleClass),
      (f.progress = r ? -l : l),
      (f.originalProgress = r ? -p : p);
  }
}
function Vt(i) {
  const e = this;
  if (typeof i > "u") {
    const o = e.rtlTranslate ? -1 : 1;
    i = (e && e.translate && e.translate * o) || 0;
  }
  const t = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: a, isEnd: c, progressLoop: d } = e;
  const n = a,
    f = c;
  if (s === 0) (r = 0), (a = !0), (c = !0);
  else {
    r = (i - e.minTranslate()) / s;
    const o = Math.abs(i - e.minTranslate()) < 1,
      l = Math.abs(i - e.maxTranslate()) < 1;
    (a = o || r <= 0), (c = l || r >= 1), o && (r = 0), l && (r = 1);
  }
  if (t.loop) {
    const o = e.getSlideIndexByData(0),
      l = e.getSlideIndexByData(e.slides.length - 1),
      p = e.slidesGrid[o],
      m = e.slidesGrid[l],
      h = e.slidesGrid[e.slidesGrid.length - 1],
      v = Math.abs(i);
    v >= p ? (d = (v - p) / h) : (d = (v + h - m) / h), d > 1 && (d -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: d, isBeginning: a, isEnd: c }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(i),
    a && !n && e.emit("reachBeginning toEdge"),
    c && !f && e.emit("reachEnd toEdge"),
    ((n && !a) || (f && !c)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
const ke = (i, e, t) => {
  e && !i.classList.contains(t)
    ? i.classList.add(t)
    : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Xt() {
  const i = this,
    { slides: e, params: t, slidesEl: s, activeIndex: r } = i,
    a = i.virtual && t.virtual.enabled,
    c = i.grid && t.grid && t.grid.rows > 1,
    d = (l) => q(s, `.${t.slideClass}${l}, swiper-slide${l}`)[0];
  let n, f, o;
  if (a)
    if (t.loop) {
      let l = r - i.virtual.slidesBefore;
      l < 0 && (l = i.virtual.slides.length + l),
        l >= i.virtual.slides.length && (l -= i.virtual.slides.length),
        (n = d(`[data-swiper-slide-index="${l}"]`));
    } else n = d(`[data-swiper-slide-index="${r}"]`);
  else
    c
      ? ((n = e.filter((l) => l.column === r)[0]),
        (o = e.filter((l) => l.column === r + 1)[0]),
        (f = e.filter((l) => l.column === r - 1)[0]))
      : (n = e[r]);
  n &&
    (c ||
      ((o = Lt(n, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !o && (o = e[0]),
      (f = Pt(n, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !f === 0 && (f = e[e.length - 1]))),
    e.forEach((l) => {
      ke(l, l === n, t.slideActiveClass),
        ke(l, l === o, t.slideNextClass),
        ke(l, l === f, t.slidePrevClass);
    }),
    i.emitSlidesClasses();
}
const ye = (i, e) => {
    if (!i || i.destroyed || !i.params) return;
    const t = () => (i.isElement ? "swiper-slide" : `.${i.params.slideClass}`),
      s = e.closest(t());
    if (s) {
      let r = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !r &&
        i.isElement &&
        (s.shadowRoot
          ? (r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((r = s.shadowRoot.querySelector(
                  `.${i.params.lazyPreloaderClass}`
                )),
                r && r.remove());
            })),
        r && r.remove();
    }
  },
  He = (i, e) => {
    if (!i.slides[e]) return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  Xe = (i) => {
    if (!i || i.destroyed || !i.params) return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const s =
        i.params.slidesPerView === "auto"
          ? i.slidesPerViewDynamic()
          : Math.ceil(i.params.slidesPerView),
      r = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const c = r,
        d = [c - e];
      d.push(...Array.from({ length: e }).map((n, f) => c + s + f)),
        i.slides.forEach((n, f) => {
          d.includes(n.column) && He(i, f);
        });
      return;
    }
    const a = r + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let c = r - e; c <= a + e; c += 1) {
        const d = ((c % t) + t) % t;
        (d < r || d > a) && He(i, d);
      }
    else
      for (let c = Math.max(r - e, 0); c <= Math.min(a + e, t - 1); c += 1)
        c !== r && (c > a || c < r) && He(i, c);
  };
function Nt(i) {
  const { slidesGrid: e, params: t } = i,
    s = i.rtlTranslate ? i.translate : -i.translate;
  let r;
  for (let a = 0; a < e.length; a += 1)
    typeof e[a + 1] < "u"
      ? s >= e[a] && s < e[a + 1] - (e[a + 1] - e[a]) / 2
        ? (r = a)
        : s >= e[a] && s < e[a + 1] && (r = a + 1)
      : s >= e[a] && (r = a);
  return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function Yt(i) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: r, activeIndex: a, realIndex: c, snapIndex: d } = e;
  let n = i,
    f;
  const o = (m) => {
    let h = m - e.virtual.slidesBefore;
    return (
      h < 0 && (h = e.virtual.slides.length + h),
      h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
      h
    );
  };
  if ((typeof n > "u" && (n = Nt(e)), s.indexOf(t) >= 0)) f = s.indexOf(t);
  else {
    const m = Math.min(r.slidesPerGroupSkip, n);
    f = m + Math.floor((n - m) / r.slidesPerGroup);
  }
  if ((f >= s.length && (f = s.length - 1), n === a && !e.params.loop)) {
    f !== d && ((e.snapIndex = f), e.emit("snapIndexChange"));
    return;
  }
  if (n === a && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = o(n);
    return;
  }
  const l = e.grid && r.grid && r.grid.rows > 1;
  let p;
  if (e.virtual && r.virtual.enabled && r.loop) p = o(n);
  else if (l) {
    const m = e.slides.filter((v) => v.column === n)[0];
    let h = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(h) && (h = Math.max(e.slides.indexOf(m), 0)),
      (p = Math.floor(h / r.grid.rows));
  } else if (e.slides[n]) {
    const m = e.slides[n].getAttribute("data-swiper-slide-index");
    m ? (p = parseInt(m, 10)) : (p = n);
  } else p = n;
  Object.assign(e, {
    previousSnapIndex: d,
    snapIndex: f,
    previousRealIndex: c,
    realIndex: p,
    previousIndex: a,
    activeIndex: n,
  }),
    e.initialized && Xe(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (c !== p && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Ft(i, e) {
  const t = this,
    s = t.params;
  let r = i.closest(`.${s.slideClass}, swiper-slide`);
  !r &&
    t.isElement &&
    e &&
    e.length > 1 &&
    e.includes(i) &&
    [...e.slice(e.indexOf(i) + 1, e.length)].forEach((d) => {
      !r && d.matches && d.matches(`.${s.slideClass}, swiper-slide`) && (r = d);
    });
  let a = !1,
    c;
  if (r) {
    for (let d = 0; d < t.slides.length; d += 1)
      if (t.slides[d] === r) {
        (a = !0), (c = d);
        break;
      }
  }
  if (r && a)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = c);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var qt = {
  updateSize: Ht,
  updateSlides: Bt,
  updateAutoHeight: Gt,
  updateSlidesOffset: _t,
  updateSlidesProgress: Rt,
  updateProgress: Vt,
  updateSlidesClasses: Xt,
  updateActiveIndex: Yt,
  updateClickedSlide: Ft,
};
function Wt(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: t, rtlTranslate: s, translate: r, wrapperEl: a } = e;
  if (t.virtualTranslate) return s ? -r : r;
  if (t.cssMode) return r;
  let c = Re(a, i);
  return (c += e.cssOverflowAdjustment()), s && (c = -c), c || 0;
}
function jt(i, e) {
  const t = this,
    { rtlTranslate: s, params: r, wrapperEl: a, progress: c } = t;
  let d = 0,
    n = 0;
  const f = 0;
  t.isHorizontal() ? (d = s ? -i : i) : (n = i),
    r.roundLengths && ((d = Math.floor(d)), (n = Math.floor(n))),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? d : n),
    r.cssMode
      ? (a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -d
          : -n)
      : r.virtualTranslate ||
        (t.isHorizontal()
          ? (d -= t.cssOverflowAdjustment())
          : (n -= t.cssOverflowAdjustment()),
        (a.style.transform = `translate3d(${d}px, ${n}px, ${f}px)`));
  let o;
  const l = t.maxTranslate() - t.minTranslate();
  l === 0 ? (o = 0) : (o = (i - t.minTranslate()) / l),
    o !== c && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e);
}
function Ut() {
  return -this.snapGrid[0];
}
function Kt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Zt(i, e, t, s, r) {
  i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = !0);
  const a = this,
    { params: c, wrapperEl: d } = a;
  if (a.animating && c.preventInteractionOnTransition) return !1;
  const n = a.minTranslate(),
    f = a.maxTranslate();
  let o;
  if (
    (s && i > n ? (o = n) : s && i < f ? (o = f) : (o = i),
    a.updateProgress(o),
    c.cssMode)
  ) {
    const l = a.isHorizontal();
    if (e === 0) d[l ? "scrollLeft" : "scrollTop"] = -o;
    else {
      if (!a.support.smoothScroll)
        return (
          mt({ swiper: a, targetPosition: -o, side: l ? "left" : "top" }), !0
        );
      d.scrollTo({ [l ? "left" : "top"]: -o, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (a.setTransition(0),
        a.setTranslate(o),
        t && (a.emit("beforeTransitionStart", e, r), a.emit("transitionEnd")))
      : (a.setTransition(e),
        a.setTranslate(o),
        t && (a.emit("beforeTransitionStart", e, r), a.emit("transitionStart")),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (p) {
              !a ||
                a.destroyed ||
                (p.target === this &&
                  (a.wrapperEl.removeEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  (a.animating = !1),
                  t && a.emit("transitionEnd")));
            }),
          a.wrapperEl.addEventListener(
            "transitionend",
            a.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Qt = {
  getTranslate: Wt,
  setTranslate: jt,
  minTranslate: Ut,
  maxTranslate: Kt,
  translateTo: Zt,
};
function Jt(i, e) {
  const t = this;
  t.params.cssMode ||
    ((t.wrapperEl.style.transitionDuration = `${i}ms`),
    (t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : "")),
    t.emit("setTransition", i, e);
}
function wt(i) {
  let { swiper: e, runCallbacks: t, direction: s, step: r } = i;
  const { activeIndex: a, previousIndex: c } = e;
  let d = s;
  if (
    (d || (a > c ? (d = "next") : a < c ? (d = "prev") : (d = "reset")),
    e.emit(`transition${r}`),
    t && a !== c)
  ) {
    if (d === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      d === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function ei(i, e) {
  i === void 0 && (i = !0);
  const t = this,
    { params: s } = t;
  s.cssMode ||
    (s.autoHeight && t.updateAutoHeight(),
    wt({ swiper: t, runCallbacks: i, direction: e, step: "Start" }));
}
function ti(i, e) {
  i === void 0 && (i = !0);
  const t = this,
    { params: s } = t;
  (t.animating = !1),
    !s.cssMode &&
      (t.setTransition(0),
      wt({ swiper: t, runCallbacks: i, direction: e, step: "End" }));
}
var ii = { setTransition: Jt, transitionStart: ei, transitionEnd: ti };
function si(i, e, t, s, r) {
  i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
  const a = this;
  let c = i;
  c < 0 && (c = 0);
  const {
    params: d,
    snapGrid: n,
    slidesGrid: f,
    previousIndex: o,
    activeIndex: l,
    rtlTranslate: p,
    wrapperEl: m,
    enabled: h,
  } = a;
  if (
    (!h && !s && !r) ||
    a.destroyed ||
    (a.animating && d.preventInteractionOnTransition)
  )
    return !1;
  typeof e > "u" && (e = a.params.speed);
  const v = Math.min(a.params.slidesPerGroupSkip, c);
  let w = v + Math.floor((c - v) / a.params.slidesPerGroup);
  w >= n.length && (w = n.length - 1);
  const u = -n[w];
  if (d.normalizeSlideIndex)
    for (let g = 0; g < f.length; g += 1) {
      const y = -Math.floor(u * 100),
        L = Math.floor(f[g] * 100),
        z = Math.floor(f[g + 1] * 100);
      typeof f[g + 1] < "u"
        ? y >= L && y < z - (z - L) / 2
          ? (c = g)
          : y >= L && y < z && (c = g + 1)
        : y >= L && (c = g);
    }
  if (
    a.initialized &&
    c !== l &&
    ((!a.allowSlideNext &&
      (p
        ? u > a.translate && u > a.minTranslate()
        : u < a.translate && u < a.minTranslate())) ||
      (!a.allowSlidePrev &&
        u > a.translate &&
        u > a.maxTranslate() &&
        (l || 0) !== c))
  )
    return !1;
  c !== (o || 0) && t && a.emit("beforeSlideChangeStart"), a.updateProgress(u);
  let b;
  if (
    (c > l ? (b = "next") : c < l ? (b = "prev") : (b = "reset"),
    (p && -u === a.translate) || (!p && u === a.translate))
  )
    return (
      a.updateActiveIndex(c),
      d.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      d.effect !== "slide" && a.setTranslate(u),
      b !== "reset" && (a.transitionStart(t, b), a.transitionEnd(t, b)),
      !1
    );
  if (d.cssMode) {
    const g = a.isHorizontal(),
      y = p ? u : -u;
    if (e === 0) {
      const L = a.virtual && a.params.virtual.enabled;
      L &&
        ((a.wrapperEl.style.scrollSnapType = "none"),
        (a._immediateVirtual = !0)),
        L && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[g ? "scrollLeft" : "scrollTop"] = y;
            }))
          : (m[g ? "scrollLeft" : "scrollTop"] = y),
        L &&
          requestAnimationFrame(() => {
            (a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1);
          });
    } else {
      if (!a.support.smoothScroll)
        return (
          mt({ swiper: a, targetPosition: y, side: g ? "left" : "top" }), !0
        );
      m.scrollTo({ [g ? "left" : "top"]: y, behavior: "smooth" });
    }
    return !0;
  }
  return (
    a.setTransition(e),
    a.setTranslate(u),
    a.updateActiveIndex(c),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", e, s),
    a.transitionStart(t, b),
    e === 0
      ? a.transitionEnd(t, b)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (y) {
            !a ||
              a.destroyed ||
              (y.target === this &&
                (a.wrapperEl.removeEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(t, b)));
          }),
        a.wrapperEl.addEventListener(
          "transitionend",
          a.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function ri(i, e, t, s) {
  i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
  const r = this;
  if (r.destroyed) return;
  typeof e > "u" && (e = r.params.speed);
  const a = r.grid && r.params.grid && r.params.grid.rows > 1;
  let c = i;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) c = c + r.virtual.slidesBefore;
    else {
      let d;
      if (a) {
        const p = c * r.params.grid.rows;
        d = r.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === p
        )[0].column;
      } else d = r.getSlideIndexByData(c);
      const n = a
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: f } = r.params;
      let o = r.params.slidesPerView;
      o === "auto"
        ? (o = r.slidesPerViewDynamic())
        : ((o = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          f && o % 2 === 0 && (o = o + 1));
      let l = n - d < o;
      if (
        (f && (l = l || d < Math.ceil(o / 2)),
        s && f && r.params.slidesPerView !== "auto" && !a && (l = !1),
        l)
      ) {
        const p = f
          ? d < r.activeIndex
            ? "prev"
            : "next"
          : d - r.activeIndex - 1 < r.params.slidesPerView
          ? "next"
          : "prev";
        r.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? d + 1 : d - n + 1,
          slideRealIndex: p === "next" ? r.realIndex : void 0,
        });
      }
      if (a) {
        const p = c * r.params.grid.rows;
        c = r.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === p
        )[0].column;
      } else c = r.getSlideIndexByData(c);
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(c, e, t, s);
    }),
    r
  );
}
function ai(i, e, t) {
  e === void 0 && (e = !0);
  const s = this,
    { enabled: r, params: a, animating: c } = s;
  if (!r || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  let d = a.slidesPerGroup;
  a.slidesPerView === "auto" &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (d = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const n = s.activeIndex < a.slidesPerGroupSkip ? 1 : d,
    f = s.virtual && a.virtual.enabled;
  if (a.loop) {
    if (c && !f && a.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + n, i, e, t);
        }),
        !0
      );
  }
  return a.rewind && s.isEnd
    ? s.slideTo(0, i, e, t)
    : s.slideTo(s.activeIndex + n, i, e, t);
}
function ni(i, e, t) {
  e === void 0 && (e = !0);
  const s = this,
    {
      params: r,
      snapGrid: a,
      slidesGrid: c,
      rtlTranslate: d,
      enabled: n,
      animating: f,
    } = s;
  if (!n || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  const o = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (f && !o && r.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const l = d ? s.translate : -s.translate;
  function p(u) {
    return u < 0 ? -Math.floor(Math.abs(u)) : Math.floor(u);
  }
  const m = p(l),
    h = a.map((u) => p(u));
  let v = a[h.indexOf(m) - 1];
  if (typeof v > "u" && r.cssMode) {
    let u;
    a.forEach((b, g) => {
      m >= b && (u = g);
    }),
      typeof u < "u" && (v = a[u > 0 ? u - 1 : u]);
  }
  let w = 0;
  if (
    (typeof v < "u" &&
      ((w = c.indexOf(v)),
      w < 0 && (w = s.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((w = w - s.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const u =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(u, i, e, t);
  } else if (r.loop && s.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(w, i, e, t);
      }),
      !0
    );
  return s.slideTo(w, i, e, t);
}
function li(i, e, t) {
  e === void 0 && (e = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof i > "u" && (i = s.params.speed), s.slideTo(s.activeIndex, i, e, t)
    );
}
function oi(i, e, t, s) {
  e === void 0 && (e = !0), s === void 0 && (s = 0.5);
  const r = this;
  if (r.destroyed) return;
  typeof i > "u" && (i = r.params.speed);
  let a = r.activeIndex;
  const c = Math.min(r.params.slidesPerGroupSkip, a),
    d = c + Math.floor((a - c) / r.params.slidesPerGroup),
    n = r.rtlTranslate ? r.translate : -r.translate;
  if (n >= r.snapGrid[d]) {
    const f = r.snapGrid[d],
      o = r.snapGrid[d + 1];
    n - f > (o - f) * s && (a += r.params.slidesPerGroup);
  } else {
    const f = r.snapGrid[d - 1],
      o = r.snapGrid[d];
    n - f <= (o - f) * s && (a -= r.params.slidesPerGroup);
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, r.slidesGrid.length - 1)),
    r.slideTo(a, i, e, t)
  );
}
function di() {
  const i = this;
  if (i.destroyed) return;
  const { params: e, slidesEl: t } = i,
    s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let r = i.clickedIndex,
    a;
  const c = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (i.animating) return;
    (a = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < i.loopedSlides - s / 2 ||
          r > i.slides.length - i.loopedSlides + s / 2
          ? (i.loopFix(),
            (r = i.getSlideIndex(
              q(t, `${c}[data-swiper-slide-index="${a}"]`)[0]
            )),
            re(() => {
              i.slideTo(r);
            }))
          : i.slideTo(r)
        : r > i.slides.length - s
        ? (i.loopFix(),
          (r = i.getSlideIndex(
            q(t, `${c}[data-swiper-slide-index="${a}"]`)[0]
          )),
          re(() => {
            i.slideTo(r);
          }))
        : i.slideTo(r);
  } else i.slideTo(r);
}
var ci = {
  slideTo: si,
  slideToLoop: ri,
  slideNext: ai,
  slidePrev: ni,
  slideReset: li,
  slideToClosest: oi,
  slideToClickedSlide: di,
};
function pi(i) {
  const e = this,
    { params: t, slidesEl: s } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  const r = () => {
      q(s, `.${t.slideClass}, swiper-slide`).forEach((l, p) => {
        l.setAttribute("data-swiper-slide-index", p);
      });
    },
    a = e.grid && t.grid && t.grid.rows > 1,
    c = t.slidesPerGroup * (a ? t.grid.rows : 1),
    d = e.slides.length % c !== 0,
    n = a && e.slides.length % t.grid.rows !== 0,
    f = (o) => {
      for (let l = 0; l < o; l += 1) {
        const p = e.isElement
          ? K("swiper-slide", [t.slideBlankClass])
          : K("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(p);
      }
    };
  if (d) {
    if (t.loopAddBlankSlides) {
      const o = c - (e.slides.length % c);
      f(o), e.recalcSlides(), e.updateSlides();
    } else
      xe(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    r();
  } else if (n) {
    if (t.loopAddBlankSlides) {
      const o = t.grid.rows - (e.slides.length % t.grid.rows);
      f(o), e.recalcSlides(), e.updateSlides();
    } else
      xe(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    r();
  } else r();
  e.loopFix({
    slideRealIndex: i,
    direction: t.centeredSlides ? void 0 : "next",
  });
}
function fi(i) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: s,
    setTranslate: r,
    activeSlideIndex: a,
    byController: c,
    byMousewheel: d,
  } = i === void 0 ? {} : i;
  const n = this;
  if (!n.params.loop) return;
  n.emit("beforeLoopFix");
  const {
      slides: f,
      allowSlidePrev: o,
      allowSlideNext: l,
      slidesEl: p,
      params: m,
    } = n,
    { centeredSlides: h } = m;
  if (
    ((n.allowSlidePrev = !0),
    (n.allowSlideNext = !0),
    n.virtual && m.virtual.enabled)
  ) {
    t &&
      (!m.centeredSlides && n.snapIndex === 0
        ? n.slideTo(n.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && n.snapIndex < m.slidesPerView
        ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0)
        : n.snapIndex === n.snapGrid.length - 1 &&
          n.slideTo(n.virtual.slidesBefore, 0, !1, !0)),
      (n.allowSlidePrev = o),
      (n.allowSlideNext = l),
      n.emit("loopFix");
    return;
  }
  let v = m.slidesPerView;
  v === "auto"
    ? (v = n.slidesPerViewDynamic())
    : ((v = Math.ceil(parseFloat(m.slidesPerView, 10))),
      h && v % 2 === 0 && (v = v + 1));
  const w = m.slidesPerGroupAuto ? v : m.slidesPerGroup;
  let u = w;
  u % w !== 0 && (u += w - (u % w)),
    (u += m.loopAdditionalSlides),
    (n.loopedSlides = u);
  const b = n.grid && m.grid && m.grid.rows > 1;
  f.length < v + u
    ? xe(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : b &&
      m.grid.fill === "row" &&
      xe(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const g = [],
    y = [];
  let L = n.activeIndex;
  typeof a > "u"
    ? (a = n.getSlideIndex(
        f.filter((x) => x.classList.contains(m.slideActiveClass))[0]
      ))
    : (L = a);
  const z = s === "next" || !s,
    D = s === "prev" || !s;
  let M = 0,
    S = 0;
  const T = b ? Math.ceil(f.length / m.grid.rows) : f.length,
    E = (b ? f[a].column : a) + (h && typeof r > "u" ? -v / 2 + 0.5 : 0);
  if (E < u) {
    M = Math.max(u - E, w);
    for (let x = 0; x < u - E; x += 1) {
      const C = x - Math.floor(x / T) * T;
      if (b) {
        const O = T - C - 1;
        for (let G = f.length - 1; G >= 0; G -= 1)
          f[G].column === O && g.push(G);
      } else g.push(T - C - 1);
    }
  } else if (E + v > T - u) {
    S = Math.max(E - (T - u * 2), w);
    for (let x = 0; x < S; x += 1) {
      const C = x - Math.floor(x / T) * T;
      b
        ? f.forEach((O, G) => {
            O.column === C && y.push(G);
          })
        : y.push(C);
    }
  }
  if (
    ((n.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      n.__preventObserver__ = !1;
    }),
    D &&
      g.forEach((x) => {
        (f[x].swiperLoopMoveDOM = !0),
          p.prepend(f[x]),
          (f[x].swiperLoopMoveDOM = !1);
      }),
    z &&
      y.forEach((x) => {
        (f[x].swiperLoopMoveDOM = !0),
          p.append(f[x]),
          (f[x].swiperLoopMoveDOM = !1);
      }),
    n.recalcSlides(),
    m.slidesPerView === "auto"
      ? n.updateSlides()
      : b &&
        ((g.length > 0 && D) || (y.length > 0 && z)) &&
        n.slides.forEach((x, C) => {
          n.grid.updateSlide(C, x, n.slides);
        }),
    m.watchSlidesProgress && n.updateSlidesOffset(),
    t)
  ) {
    if (g.length > 0 && D) {
      if (typeof e > "u") {
        const x = n.slidesGrid[L],
          O = n.slidesGrid[L + M] - x;
        d
          ? n.setTranslate(n.translate - O)
          : (n.slideTo(L + Math.ceil(M), 0, !1, !0),
            r &&
              ((n.touchEventsData.startTranslate =
                n.touchEventsData.startTranslate - O),
              (n.touchEventsData.currentTranslate =
                n.touchEventsData.currentTranslate - O)));
      } else if (r) {
        const x = b ? g.length / m.grid.rows : g.length;
        n.slideTo(n.activeIndex + x, 0, !1, !0),
          (n.touchEventsData.currentTranslate = n.translate);
      }
    } else if (y.length > 0 && z)
      if (typeof e > "u") {
        const x = n.slidesGrid[L],
          O = n.slidesGrid[L - S] - x;
        d
          ? n.setTranslate(n.translate - O)
          : (n.slideTo(L - S, 0, !1, !0),
            r &&
              ((n.touchEventsData.startTranslate =
                n.touchEventsData.startTranslate - O),
              (n.touchEventsData.currentTranslate =
                n.touchEventsData.currentTranslate - O)));
      } else {
        const x = b ? y.length / m.grid.rows : y.length;
        n.slideTo(n.activeIndex - x, 0, !1, !0);
      }
  }
  if (
    ((n.allowSlidePrev = o),
    (n.allowSlideNext = l),
    n.controller && n.controller.control && !c)
  ) {
    const x = {
      slideRealIndex: e,
      direction: s,
      setTranslate: r,
      activeSlideIndex: a,
      byController: !0,
    };
    Array.isArray(n.controller.control)
      ? n.controller.control.forEach((C) => {
          !C.destroyed &&
            C.params.loop &&
            C.loopFix({
              ...x,
              slideTo: C.params.slidesPerView === m.slidesPerView ? t : !1,
            });
        })
      : n.controller.control instanceof n.constructor &&
        n.controller.control.params.loop &&
        n.controller.control.loopFix({
          ...x,
          slideTo:
            n.controller.control.params.slidesPerView === m.slidesPerView
              ? t
              : !1,
        });
  }
  n.emit("loopFix");
}
function ui() {
  const i = this,
    { params: e, slidesEl: t } = i;
  if (!e.loop || (i.virtual && i.params.virtual.enabled)) return;
  i.recalcSlides();
  const s = [];
  i.slides.forEach((r) => {
    const a =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    s[a] = r;
  }),
    i.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((r) => {
      t.append(r);
    }),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0);
}
var mi = { loopCreate: pi, loopFix: fi, loopDestroy: ui };
function hi(i) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (t.style.cursor = "move"),
    (t.style.cursor = i ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function gi() {
  const i = this;
  (i.params.watchOverflow && i.isLocked) ||
    i.params.cssMode ||
    (i.isElement && (i.__preventObserver__ = !0),
    (i[
      i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    i.isElement &&
      requestAnimationFrame(() => {
        i.__preventObserver__ = !1;
      }));
}
var wi = { setGrabCursor: hi, unsetGrabCursor: gi };
function vi(i, e) {
  e === void 0 && (e = this);
  function t(s) {
    if (!s || s === W() || s === Y()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const r = s.closest(i);
    return !r && !s.getRootNode ? null : r || t(s.getRootNode().host);
  }
  return t(e);
}
function tt(i, e, t) {
  const s = Y(),
    { params: r } = i,
    a = r.edgeSwipeDetection,
    c = r.edgeSwipeThreshold;
  return a && (t <= c || t >= s.innerWidth - c)
    ? a === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function bi(i) {
  const e = this,
    t = W();
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  const r = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== s.pointerId) return;
    r.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (r.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    tt(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: a, touches: c, enabled: d } = e;
  if (
    !d ||
    (!a.simulateTouch && s.pointerType === "mouse") ||
    (e.animating && a.preventInteractionOnTransition)
  )
    return;
  !e.animating && a.cssMode && a.loop && e.loopFix();
  let n = s.target;
  if (
    (a.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(n)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const f = !!a.noSwipingClass && a.noSwipingClass !== "",
    o = s.composedPath ? s.composedPath() : s.path;
  f && s.target && s.target.shadowRoot && o && (n = o[0]);
  const l = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    p = !!(s.target && s.target.shadowRoot);
  if (a.noSwiping && (p ? vi(l, n) : n.closest(l))) {
    e.allowClick = !0;
    return;
  }
  if (a.swipeHandler && !n.closest(a.swipeHandler)) return;
  (c.currentX = s.pageX), (c.currentY = s.pageY);
  const m = c.currentX,
    h = c.currentY;
  if (!tt(e, s, m)) return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (c.startX = m),
    (c.startY = h),
    (r.touchStartTime = Z()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    a.threshold > 0 && (r.allowThresholdMove = !1);
  let v = !0;
  n.matches(r.focusableElements) &&
    ((v = !1), n.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== n &&
      t.activeElement.blur();
  const w = v && e.allowTouchMove && a.touchStartPreventDefault;
  (a.touchStartForcePreventDefault || w) &&
    !n.isContentEditable &&
    s.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !a.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", s);
}
function yi(i) {
  const e = W(),
    t = this,
    s = t.touchEventsData,
    { params: r, touches: a, rtlTranslate: c, enabled: d } = t;
  if (!d || (!r.simulateTouch && i.pointerType === "mouse")) return;
  let n = i;
  if (
    (n.originalEvent && (n = n.originalEvent),
    n.type === "pointermove" &&
      (s.touchId !== null || n.pointerId !== s.pointerId))
  )
    return;
  let f;
  if (n.type === "touchmove") {
    if (
      ((f = [...n.changedTouches].filter((z) => z.identifier === s.touchId)[0]),
      !f || f.identifier !== s.touchId)
    )
      return;
  } else f = n;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", n);
    return;
  }
  const o = f.pageX,
    l = f.pageY;
  if (n.preventedByNestedSwiper) {
    (a.startX = o), (a.startY = l);
    return;
  }
  if (!t.allowTouchMove) {
    n.target.matches(s.focusableElements) || (t.allowClick = !1),
      s.isTouched &&
        (Object.assign(a, { startX: o, startY: l, currentX: o, currentY: l }),
        (s.touchStartTime = Z()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (
        (l < a.startY && t.translate <= t.maxTranslate()) ||
        (l > a.startY && t.translate >= t.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (o < a.startX && t.translate <= t.maxTranslate()) ||
      (o > a.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    n.target === e.activeElement &&
    n.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (t.allowClick = !1);
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", n),
    (a.previousX = a.currentX),
    (a.previousY = a.currentY),
    (a.currentX = o),
    (a.currentY = l);
  const p = a.currentX - a.startX,
    m = a.currentY - a.startY;
  if (t.params.threshold && Math.sqrt(p ** 2 + m ** 2) < t.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let z;
    (t.isHorizontal() && a.currentY === a.startY) ||
    (t.isVertical() && a.currentX === a.startX)
      ? (s.isScrolling = !1)
      : p * p + m * m >= 25 &&
        ((z = (Math.atan2(Math.abs(m), Math.abs(p)) * 180) / Math.PI),
        (s.isScrolling = t.isHorizontal()
          ? z > r.touchAngle
          : 90 - z > r.touchAngle));
  }
  if (
    (s.isScrolling && t.emit("touchMoveOpposite", n),
    typeof s.startMoving > "u" &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (n.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (t.allowClick = !1),
    !r.cssMode && n.cancelable && n.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && n.stopPropagation();
  let h = t.isHorizontal() ? p : m,
    v = t.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
  r.oneWayMovement &&
    ((h = Math.abs(h) * (c ? 1 : -1)), (v = Math.abs(v) * (c ? 1 : -1))),
    (a.diff = h),
    (h *= r.touchRatio),
    c && ((h = -h), (v = -v));
  const w = t.touchesDirection;
  (t.swipeDirection = h > 0 ? "prev" : "next"),
    (t.touchesDirection = v > 0 ? "prev" : "next");
  const u = t.params.loop && !r.cssMode,
    b =
      (t.touchesDirection === "next" && t.allowSlideNext) ||
      (t.touchesDirection === "prev" && t.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (u && b && t.loopFix({ direction: t.swipeDirection }),
      (s.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const z = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      t.wrapperEl.dispatchEvent(z);
    }
    (s.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", n);
  }
  let g;
  if (
    (new Date().getTime(),
    s.isMoved &&
      s.allowThresholdMove &&
      w !== t.touchesDirection &&
      u &&
      b &&
      Math.abs(h) >= 1)
  ) {
    Object.assign(a, {
      startX: o,
      startY: l,
      currentX: o,
      currentY: l,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate);
    return;
  }
  t.emit("sliderMove", n),
    (s.isMoved = !0),
    (s.currentTranslate = h + s.startTranslate);
  let y = !0,
    L = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (L = 0),
    h > 0
      ? (u &&
          b &&
          !g &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (r.centeredSlides
              ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1]
              : t.minTranslate()) &&
          t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > t.minTranslate() &&
          ((y = !1),
          r.resistance &&
            (s.currentTranslate =
              t.minTranslate() -
              1 +
              (-t.minTranslate() + s.startTranslate + h) ** L)))
      : h < 0 &&
        (u &&
          b &&
          !g &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (r.centeredSlides
              ? t.maxTranslate() +
                t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
              : t.maxTranslate()) &&
          t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              t.slides.length -
              (r.slidesPerView === "auto"
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        s.currentTranslate < t.maxTranslate() &&
          ((y = !1),
          r.resistance &&
            (s.currentTranslate =
              t.maxTranslate() +
              1 -
              (t.maxTranslate() - s.startTranslate - h) ** L))),
    y && (n.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(h) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (s.currentTranslate = s.startTranslate),
          (a.diff = t.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
      r.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate));
}
function Si(i) {
  const e = this,
    t = e.touchEventsData;
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  let r;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((r = [...s.changedTouches].filter((L) => L.identifier === t.touchId)[0]),
      !r || r.identifier !== t.touchId)
    )
      return;
  } else {
    if (t.touchId !== null || s.pointerId !== t.pointerId) return;
    r = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (t.pointerId = null), (t.touchId = null);
  const {
    params: c,
    touches: d,
    rtlTranslate: n,
    slidesGrid: f,
    enabled: o,
  } = e;
  if (!o || (!c.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (t.allowTouchCallbacks && e.emit("touchEnd", s),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && c.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  c.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const l = Z(),
    p = l - t.touchStartTime;
  if (e.allowClick) {
    const L = s.path || (s.composedPath && s.composedPath());
    e.updateClickedSlide((L && L[0]) || s.target, L),
      e.emit("tap click", s),
      p < 300 &&
        l - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", s);
  }
  if (
    ((t.lastClickTime = Z()),
    re(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      (d.diff === 0 && !t.loopSwapReset) ||
      (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let m;
  if (
    (c.followFinger
      ? (m = n ? e.translate : -e.translate)
      : (m = -t.currentTranslate),
    c.cssMode)
  )
    return;
  if (c.freeMode && c.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  const h = m >= -e.maxTranslate() && !e.params.loop;
  let v = 0,
    w = e.slidesSizesGrid[0];
  for (
    let L = 0;
    L < f.length;
    L += L < c.slidesPerGroupSkip ? 1 : c.slidesPerGroup
  ) {
    const z = L < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup;
    typeof f[L + z] < "u"
      ? (h || (m >= f[L] && m < f[L + z])) && ((v = L), (w = f[L + z] - f[L]))
      : (h || m >= f[L]) && ((v = L), (w = f[f.length - 1] - f[f.length - 2]));
  }
  let u = null,
    b = null;
  c.rewind &&
    (e.isBeginning
      ? (b =
          c.virtual && c.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (u = 0));
  const g = (m - f[v]) / w,
    y = v < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup;
  if (p > c.longSwipesMs) {
    if (!c.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (g >= c.longSwipesRatio
        ? e.slideTo(c.rewind && e.isEnd ? u : v + y)
        : e.slideTo(v)),
      e.swipeDirection === "prev" &&
        (g > 1 - c.longSwipesRatio
          ? e.slideTo(v + y)
          : b !== null && g < 0 && Math.abs(g) > c.longSwipesRatio
          ? e.slideTo(b)
          : e.slideTo(v));
  } else {
    if (!c.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
      ? s.target === e.navigation.nextEl
        ? e.slideTo(v + y)
        : e.slideTo(v)
      : (e.swipeDirection === "next" && e.slideTo(u !== null ? u : v + y),
        e.swipeDirection === "prev" && e.slideTo(b !== null ? b : v));
  }
}
function it() {
  const i = this,
    { params: e, el: t } = i;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && i.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: a } = i,
    c = i.virtual && i.params.virtual.enabled;
  (i.allowSlideNext = !0),
    (i.allowSlidePrev = !0),
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
  const d = c && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  i.isEnd &&
  !i.isBeginning &&
  !i.params.centeredSlides &&
  !d
    ? i.slideTo(i.slides.length - 1, 0, !1, !0)
    : i.params.loop && !c
    ? i.slideToLoop(i.realIndex, 0, !1, !0)
    : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay &&
      i.autoplay.running &&
      i.autoplay.paused &&
      (clearTimeout(i.autoplay.resizeTimeout),
      (i.autoplay.resizeTimeout = setTimeout(() => {
        i.autoplay &&
          i.autoplay.running &&
          i.autoplay.paused &&
          i.autoplay.resume();
      }, 500))),
    (i.allowSlidePrev = r),
    (i.allowSlideNext = s),
    i.params.watchOverflow && a !== i.snapGrid && i.checkOverflow();
}
function xi(i) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && i.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (i.stopPropagation(), i.stopImmediatePropagation())));
}
function Ei() {
  const i = this,
    { wrapperEl: e, rtlTranslate: t, enabled: s } = i;
  if (!s) return;
  (i.previousTranslate = i.translate),
    i.isHorizontal()
      ? (i.translate = -e.scrollLeft)
      : (i.translate = -e.scrollTop),
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
  let r;
  const a = i.maxTranslate() - i.minTranslate();
  a === 0 ? (r = 0) : (r = (i.translate - i.minTranslate()) / a),
    r !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1);
}
function Ti(i) {
  const e = this;
  ye(e, i.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function Mi() {
  const i = this;
  i.documentTouchHandlerProceeded ||
    ((i.documentTouchHandlerProceeded = !0),
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const vt = (i, e) => {
  const t = W(),
    { params: s, el: r, wrapperEl: a, device: c } = i,
    d = !!s.nested,
    n = e === "on" ? "addEventListener" : "removeEventListener",
    f = e;
  t[n]("touchstart", i.onDocumentTouchStart, { passive: !1, capture: d }),
    r[n]("touchstart", i.onTouchStart, { passive: !1 }),
    r[n]("pointerdown", i.onTouchStart, { passive: !1 }),
    t[n]("touchmove", i.onTouchMove, { passive: !1, capture: d }),
    t[n]("pointermove", i.onTouchMove, { passive: !1, capture: d }),
    t[n]("touchend", i.onTouchEnd, { passive: !0 }),
    t[n]("pointerup", i.onTouchEnd, { passive: !0 }),
    t[n]("pointercancel", i.onTouchEnd, { passive: !0 }),
    t[n]("touchcancel", i.onTouchEnd, { passive: !0 }),
    t[n]("pointerout", i.onTouchEnd, { passive: !0 }),
    t[n]("pointerleave", i.onTouchEnd, { passive: !0 }),
    t[n]("contextmenu", i.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      r[n]("click", i.onClick, !0),
    s.cssMode && a[n]("scroll", i.onScroll),
    s.updateOnWindowResize
      ? i[f](
          c.ios || c.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          it,
          !0
        )
      : i[f]("observerUpdate", it, !0),
    r[n]("load", i.onLoad, { capture: !0 });
};
function Ci() {
  const i = this,
    { params: e } = i;
  (i.onTouchStart = bi.bind(i)),
    (i.onTouchMove = yi.bind(i)),
    (i.onTouchEnd = Si.bind(i)),
    (i.onDocumentTouchStart = Mi.bind(i)),
    e.cssMode && (i.onScroll = Ei.bind(i)),
    (i.onClick = xi.bind(i)),
    (i.onLoad = Ti.bind(i)),
    vt(i, "on");
}
function Pi() {
  vt(this, "off");
}
var Li = { attachEvents: Ci, detachEvents: Pi };
const st = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function zi() {
  const i = this,
    { realIndex: e, initialized: t, params: s, el: r } = i,
    a = s.breakpoints;
  if (!a || (a && Object.keys(a).length === 0)) return;
  const c = i.getBreakpoint(a, i.params.breakpointsBase, i.el);
  if (!c || i.currentBreakpoint === c) return;
  const n = (c in a ? a[c] : void 0) || i.originalParams,
    f = st(i, s),
    o = st(i, n),
    l = i.params.grabCursor,
    p = n.grabCursor,
    m = s.enabled;
  f && !o
    ? (r.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      i.emitContainerClasses())
    : !f &&
      o &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((n.grid.fill && n.grid.fill === "column") ||
        (!n.grid.fill && s.grid.fill === "column")) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      i.emitContainerClasses()),
    l && !p ? i.unsetGrabCursor() : !l && p && i.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      if (typeof n[g] > "u") return;
      const y = s[g] && s[g].enabled,
        L = n[g] && n[g].enabled;
      y && !L && i[g].disable(), !y && L && i[g].enable();
    });
  const h = n.direction && n.direction !== s.direction,
    v = s.loop && (n.slidesPerView !== s.slidesPerView || h),
    w = s.loop;
  h && t && i.changeDirection(), U(i.params, n);
  const u = i.params.enabled,
    b = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev,
  }),
    m && !u ? i.disable() : !m && u && i.enable(),
    (i.currentBreakpoint = c),
    i.emit("_beforeBreakpoint", n),
    t &&
      (v
        ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides())
        : !w && b
        ? (i.loopCreate(e), i.updateSlides())
        : w && !b && i.loopDestroy()),
    i.emit("breakpoint", n);
}
function Ii(i, e, t) {
  if ((e === void 0 && (e = "window"), !i || (e === "container" && !t))) return;
  let s = !1;
  const r = Y(),
    a = e === "window" ? r.innerHeight : t.clientHeight,
    c = Object.keys(i).map((d) => {
      if (typeof d == "string" && d.indexOf("@") === 0) {
        const n = parseFloat(d.substr(1));
        return { value: a * n, point: d };
      }
      return { value: d, point: d };
    });
  c.sort((d, n) => parseInt(d.value, 10) - parseInt(n.value, 10));
  for (let d = 0; d < c.length; d += 1) {
    const { point: n, value: f } = c[d];
    e === "window"
      ? r.matchMedia(`(min-width: ${f}px)`).matches && (s = n)
      : f <= t.clientWidth && (s = n);
  }
  return s || "max";
}
var Ai = { setBreakpoint: zi, getBreakpoint: Ii };
function $i(i, e) {
  const t = [];
  return (
    i.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((r) => {
            s[r] && t.push(e + r);
          })
        : typeof s == "string" && t.push(e + s);
    }),
    t
  );
}
function Oi() {
  const i = this,
    { classNames: e, params: t, rtl: s, el: r, device: a } = i,
    c = $i(
      [
        "initialized",
        t.direction,
        { "free-mode": i.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: s },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: a.android },
        { ios: a.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  e.push(...c), r.classList.add(...e), i.emitContainerClasses();
}
function Di() {
  const i = this,
    { el: e, classNames: t } = i;
  e.classList.remove(...t), i.emitContainerClasses();
}
var ki = { addClasses: Oi, removeClasses: Di };
function Hi() {
  const i = this,
    { isLocked: e, params: t } = i,
    { slidesOffsetBefore: s } = t;
  if (s) {
    const r = i.slides.length - 1,
      a = i.slidesGrid[r] + i.slidesSizesGrid[r] + s * 2;
    i.isLocked = i.size > a;
  } else i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
var Bi = { checkOverflow: Hi },
  Ne = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Gi(i, e) {
  return function (s) {
    s === void 0 && (s = {});
    const r = Object.keys(s)[0],
      a = s[r];
    if (typeof a != "object" || a === null) {
      U(e, s);
      return;
    }
    if (
      (i[r] === !0 && (i[r] = { enabled: !0 }),
      r === "navigation" &&
        i[r] &&
        i[r].enabled &&
        !i[r].prevEl &&
        !i[r].nextEl &&
        (i[r].auto = !0),
      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
        i[r] &&
        i[r].enabled &&
        !i[r].el &&
        (i[r].auto = !0),
      !(r in i && "enabled" in a))
    ) {
      U(e, s);
      return;
    }
    typeof i[r] == "object" && !("enabled" in i[r]) && (i[r].enabled = !0),
      i[r] || (i[r] = { enabled: !1 }),
      U(e, s);
  };
}
const Be = {
    eventsEmitter: kt,
    update: qt,
    translate: Qt,
    transition: ii,
    slide: ci,
    loop: mi,
    grabCursor: wi,
    events: Li,
    breakpoints: Ai,
    checkOverflow: Bi,
    classes: ki,
  },
  Ge = {};
class F {
  constructor() {
    let e, t;
    for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
      r[a] = arguments[a];
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (t = r[0])
      : ([e, t] = r),
      t || (t = {}),
      (t = U({}, t)),
      e && !t.el && (t.el = e);
    const c = W();
    if (
      t.el &&
      typeof t.el == "string" &&
      c.querySelectorAll(t.el).length > 1
    ) {
      const o = [];
      return (
        c.querySelectorAll(t.el).forEach((l) => {
          const p = U({}, t, { el: l });
          o.push(new F(p));
        }),
        o
      );
    }
    const d = this;
    (d.__swiper__ = !0),
      (d.support = ht()),
      (d.device = gt({ userAgent: t.userAgent })),
      (d.browser = $t()),
      (d.eventsListeners = {}),
      (d.eventsAnyListeners = []),
      (d.modules = [...d.__modules__]),
      t.modules && Array.isArray(t.modules) && d.modules.push(...t.modules);
    const n = {};
    d.modules.forEach((o) => {
      o({
        params: t,
        swiper: d,
        extendParams: Gi(t, n),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d),
      });
    });
    const f = U({}, Ne, n);
    return (
      (d.params = U({}, f, Ge, t)),
      (d.originalParams = U({}, d.params)),
      (d.passedParams = U({}, t)),
      d.params &&
        d.params.on &&
        Object.keys(d.params.on).forEach((o) => {
          d.on(o, d.params.on[o]);
        }),
      d.params && d.params.onAny && d.onAny(d.params.onAny),
      Object.assign(d, {
        enabled: d.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return d.params.direction === "horizontal";
        },
        isVertical() {
          return d.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: d.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: d.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      d.emit("_swiper"),
      d.params.init && d.init(),
      d
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: t, params: s } = this,
      r = q(t, `.${s.slideClass}, swiper-slide`),
      a = he(r[0]);
    return he(e) - a;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: t, params: s } = e;
    e.slides = q(t, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = s.minTranslate(),
      c = (s.maxTranslate() - r) * e + r;
    s.translateTo(c, typeof t > "u" ? 0 : t),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(t.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((s) => {
      const r = e.getSlideClasses(s);
      t.push({ slideEl: s, classNames: r }), e.emit("_slideClass", s, r);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const s = this,
      {
        params: r,
        slides: a,
        slidesGrid: c,
        slidesSizesGrid: d,
        size: n,
        activeIndex: f,
      } = s;
    let o = 1;
    if (typeof r.slidesPerView == "number") return r.slidesPerView;
    if (r.centeredSlides) {
      let l = a[f] ? Math.ceil(a[f].swiperSlideSize) : 0,
        p;
      for (let m = f + 1; m < a.length; m += 1)
        a[m] &&
          !p &&
          ((l += Math.ceil(a[m].swiperSlideSize)), (o += 1), l > n && (p = !0));
      for (let m = f - 1; m >= 0; m -= 1)
        a[m] &&
          !p &&
          ((l += a[m].swiperSlideSize), (o += 1), l > n && (p = !0));
    } else if (e === "current")
      for (let l = f + 1; l < a.length; l += 1)
        (t ? c[l] + d[l] - c[f] < n : c[l] - c[f] < n) && (o += 1);
    else for (let l = f - 1; l >= 0; l -= 1) c[f] - c[l] < n && (o += 1);
    return o;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: s } = e;
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((c) => {
        c.complete && ye(e, c);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const c = e.rtlTranslate ? e.translate * -1 : e.translate,
        d = Math.min(Math.max(c, e.maxTranslate()), e.minTranslate());
      e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let a;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      r(), s.autoHeight && e.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        e.isEnd &&
        !s.centeredSlides
      ) {
        const c = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        a = e.slideTo(c.length - 1, 0, !1, !0);
      } else a = e.slideTo(e.activeIndex, 0, !1, !0);
      a || r();
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const s = this,
      r = s.params.direction;
    return (
      e || (e = r === "horizontal" ? "vertical" : "horizontal"),
      e === r ||
        (e !== "horizontal" && e !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((a) => {
          e === "vertical" ? (a.style.width = "") : (a.style.height = "");
        }),
        s.emit("changeDirection"),
        t && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const t = this;
    (t.rtl && e === "rtl") ||
      (!t.rtl && e === "ltr") ||
      ((t.rtl = e === "rtl"),
      (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "rtl"))
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "ltr")),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = t),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          t.params.swiperElementNodeName.toUpperCase() &&
        (t.isElement = !0);
    const r = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let c =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(r())
        : q(s, r())[0];
    return (
      !c &&
        t.params.createElements &&
        ((c = K("div", t.params.wrapperClass)),
        s.append(c),
        q(s, `.${t.params.slideClass}`).forEach((d) => {
          c.append(d);
        })),
      Object.assign(t, {
        el: s,
        wrapperEl: c,
        slidesEl:
          t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : c,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || te(s, "direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || te(s, "direction") === "rtl"),
        wrongRTL: te(c, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"),
      t.params.breakpoints && t.setBreakpoint(),
      t.addClasses(),
      t.updateSize(),
      t.updateSlides(),
      t.params.watchOverflow && t.checkOverflow(),
      t.params.grabCursor && t.enabled && t.setGrabCursor(),
      t.params.loop && t.virtual && t.params.virtual.enabled
        ? t.slideTo(
            t.params.initialSlide + t.virtual.slidesBefore,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0
          )
        : t.slideTo(
            t.params.initialSlide,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0
          ),
      t.params.loop && t.loopCreate(),
      t.attachEvents();
    const r = [...t.el.querySelectorAll('[loading="lazy"]')];
    return (
      t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((a) => {
        a.complete
          ? ye(t, a)
          : a.addEventListener("load", (c) => {
              ye(t, c.target);
            });
      }),
      Xe(t),
      (t.initialized = !0),
      Xe(t),
      t.emit("init"),
      t.emit("afterInit"),
      t
    );
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const s = this,
      { params: r, el: a, wrapperEl: c, slides: d } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        t &&
          (s.removeClasses(),
          a.removeAttribute("style"),
          c.removeAttribute("style"),
          d &&
            d.length &&
            d.forEach((n) => {
              n.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                n.removeAttribute("style"),
                n.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((n) => {
          s.off(n);
        }),
        e !== !1 && ((s.el.swiper = null), Tt(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    U(Ge, e);
  }
  static get extendedDefaults() {
    return Ge;
  }
  static get defaults() {
    return Ne;
  }
  static installModule(e) {
    F.prototype.__modules__ || (F.prototype.__modules__ = []);
    const t = F.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => F.installModule(t)), F)
      : (F.installModule(e), F);
  }
}
Object.keys(Be).forEach((i) => {
  Object.keys(Be[i]).forEach((e) => {
    F.prototype[e] = Be[i][e];
  });
});
F.use([Ot, Dt]);
function _i(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  t({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  });
  let a;
  const c = W();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: [],
  };
  const d = c.createElement("div");
  function n(h, v) {
    const w = e.params.virtual;
    if (w.cache && e.virtual.cache[v]) return e.virtual.cache[v];
    let u;
    return (
      w.renderSlide
        ? ((u = w.renderSlide.call(e, h, v)),
          typeof u == "string" && ((d.innerHTML = u), (u = d.children[0])))
        : e.isElement
        ? (u = K("swiper-slide"))
        : (u = K("div", e.params.slideClass)),
      u.setAttribute("data-swiper-slide-index", v),
      w.renderSlide || (u.innerHTML = h),
      w.cache && (e.virtual.cache[v] = u),
      u
    );
  }
  function f(h, v) {
    const {
      slidesPerView: w,
      slidesPerGroup: u,
      centeredSlides: b,
      loop: g,
      initialSlide: y,
    } = e.params;
    if (v && !g && y > 0) return;
    const { addSlidesBefore: L, addSlidesAfter: z } = e.params.virtual,
      { from: D, to: M, slides: S, slidesGrid: T, offset: A } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const E = e.activeIndex || 0;
    let x;
    e.rtlTranslate ? (x = "right") : (x = e.isHorizontal() ? "left" : "top");
    let C, O;
    b
      ? ((C = Math.floor(w / 2) + u + z), (O = Math.floor(w / 2) + u + L))
      : ((C = w + (u - 1) + z), (O = (g ? w : u) + L));
    let G = E - O,
      P = E + C;
    g || ((G = Math.max(G, 0)), (P = Math.min(P, S.length - 1)));
    let I = (e.slidesGrid[G] || 0) - (e.slidesGrid[0] || 0);
    g && E >= O
      ? ((G -= O), b || (I += e.slidesGrid[0]))
      : g && E < O && ((G = -O), b && (I += e.slidesGrid[0])),
      Object.assign(e.virtual, {
        from: G,
        to: P,
        offset: I,
        slidesGrid: e.slidesGrid,
        slidesBefore: O,
        slidesAfter: C,
      });
    function H() {
      e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        r("virtualUpdate");
    }
    if (D === G && M === P && !h) {
      e.slidesGrid !== T &&
        I !== A &&
        e.slides.forEach((_) => {
          _.style[x] = `${I - Math.abs(e.cssOverflowAdjustment())}px`;
        }),
        e.updateProgress(),
        r("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: I,
        from: G,
        to: P,
        slides: (function () {
          const X = [];
          for (let j = G; j <= P; j += 1) X.push(S[j]);
          return X;
        })(),
      }),
        e.params.virtual.renderExternalUpdate ? H() : r("virtualUpdate");
      return;
    }
    const R = [],
      $ = [],
      k = (_) => {
        let X = _;
        return (
          _ < 0 ? (X = S.length + _) : X >= S.length && (X = X - S.length), X
        );
      };
    if (h)
      e.slides
        .filter((_) => _.matches(`.${e.params.slideClass}, swiper-slide`))
        .forEach((_) => {
          _.remove();
        });
    else
      for (let _ = D; _ <= M; _ += 1)
        if (_ < G || _ > P) {
          const X = k(_);
          e.slides
            .filter((j) =>
              j.matches(
                `.${e.params.slideClass}[data-swiper-slide-index="${X}"], swiper-slide[data-swiper-slide-index="${X}"]`
              )
            )
            .forEach((j) => {
              j.remove();
            });
        }
    const B = g ? -S.length : 0,
      N = g ? S.length * 2 : S.length;
    for (let _ = B; _ < N; _ += 1)
      if (_ >= G && _ <= P) {
        const X = k(_);
        typeof M > "u" || h
          ? $.push(X)
          : (_ > M && $.push(X), _ < D && R.push(X));
      }
    if (
      ($.forEach((_) => {
        e.slidesEl.append(n(S[_], _));
      }),
      g)
    )
      for (let _ = R.length - 1; _ >= 0; _ -= 1) {
        const X = R[_];
        e.slidesEl.prepend(n(S[X], X));
      }
    else
      R.sort((_, X) => X - _),
        R.forEach((_) => {
          e.slidesEl.prepend(n(S[_], _));
        });
    q(e.slidesEl, ".swiper-slide, swiper-slide").forEach((_) => {
      _.style[x] = `${I - Math.abs(e.cssOverflowAdjustment())}px`;
    }),
      H();
  }
  function o(h) {
    if (typeof h == "object" && "length" in h)
      for (let v = 0; v < h.length; v += 1) h[v] && e.virtual.slides.push(h[v]);
    else e.virtual.slides.push(h);
    f(!0);
  }
  function l(h) {
    const v = e.activeIndex;
    let w = v + 1,
      u = 1;
    if (Array.isArray(h)) {
      for (let b = 0; b < h.length; b += 1)
        h[b] && e.virtual.slides.unshift(h[b]);
      (w = v + h.length), (u = h.length);
    } else e.virtual.slides.unshift(h);
    if (e.params.virtual.cache) {
      const b = e.virtual.cache,
        g = {};
      Object.keys(b).forEach((y) => {
        const L = b[y],
          z = L.getAttribute("data-swiper-slide-index");
        z && L.setAttribute("data-swiper-slide-index", parseInt(z, 10) + u),
          (g[parseInt(y, 10) + u] = L);
      }),
        (e.virtual.cache = g);
    }
    f(!0), e.slideTo(w, 0);
  }
  function p(h) {
    if (typeof h > "u" || h === null) return;
    let v = e.activeIndex;
    if (Array.isArray(h))
      for (let w = h.length - 1; w >= 0; w -= 1)
        e.params.virtual.cache &&
          (delete e.virtual.cache[h[w]],
          Object.keys(e.virtual.cache).forEach((u) => {
            u > h &&
              ((e.virtual.cache[u - 1] = e.virtual.cache[u]),
              e.virtual.cache[u - 1].setAttribute(
                "data-swiper-slide-index",
                u - 1
              ),
              delete e.virtual.cache[u]);
          })),
          e.virtual.slides.splice(h[w], 1),
          h[w] < v && (v -= 1),
          (v = Math.max(v, 0));
    else
      e.params.virtual.cache &&
        (delete e.virtual.cache[h],
        Object.keys(e.virtual.cache).forEach((w) => {
          w > h &&
            ((e.virtual.cache[w - 1] = e.virtual.cache[w]),
            e.virtual.cache[w - 1].setAttribute(
              "data-swiper-slide-index",
              w - 1
            ),
            delete e.virtual.cache[w]);
        })),
        e.virtual.slides.splice(h, 1),
        h < v && (v -= 1),
        (v = Math.max(v, 0));
    f(!0), e.slideTo(v, 0);
  }
  function m() {
    (e.virtual.slides = []),
      e.params.virtual.cache && (e.virtual.cache = {}),
      f(!0),
      e.slideTo(0, 0);
  }
  s("beforeInit", () => {
    if (!e.params.virtual.enabled) return;
    let h;
    if (typeof e.passedParams.virtual.slides > "u") {
      const v = [...e.slidesEl.children].filter((w) =>
        w.matches(`.${e.params.slideClass}, swiper-slide`)
      );
      v &&
        v.length &&
        ((e.virtual.slides = [...v]),
        (h = !0),
        v.forEach((w, u) => {
          w.setAttribute("data-swiper-slide-index", u),
            (e.virtual.cache[u] = w),
            w.remove();
        }));
    }
    h || (e.virtual.slides = e.params.virtual.slides),
      e.classNames.push(`${e.params.containerModifierClass}virtual`),
      (e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0),
      f(!1, !0);
  }),
    s("setTranslate", () => {
      e.params.virtual.enabled &&
        (e.params.cssMode && !e._immediateVirtual
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              f();
            }, 100)))
          : f());
    }),
    s("init update resize", () => {
      e.params.virtual.enabled &&
        e.params.cssMode &&
        ue(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
    }),
    Object.assign(e.virtual, {
      appendSlide: o,
      prependSlide: l,
      removeSlide: p,
      removeAllSlides: m,
      update: f,
    });
}
function Ri(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const a = W(),
    c = Y();
  (e.keyboard = { enabled: !1 }),
    t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function d(o) {
    if (!e.enabled) return;
    const { rtlTranslate: l } = e;
    let p = o;
    p.originalEvent && (p = p.originalEvent);
    const m = p.keyCode || p.charCode,
      h = e.params.keyboard.pageUpDown,
      v = h && m === 33,
      w = h && m === 34,
      u = m === 37,
      b = m === 39,
      g = m === 38,
      y = m === 40;
    if (
      (!e.allowSlideNext &&
        ((e.isHorizontal() && b) || (e.isVertical() && y) || w)) ||
      (!e.allowSlidePrev &&
        ((e.isHorizontal() && u) || (e.isVertical() && g) || v))
    )
      return !1;
    if (
      !(p.shiftKey || p.altKey || p.ctrlKey || p.metaKey) &&
      !(
        a.activeElement &&
        a.activeElement.nodeName &&
        (a.activeElement.nodeName.toLowerCase() === "input" ||
          a.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (e.params.keyboard.onlyInViewport && (v || w || u || b || g || y)) {
        let L = !1;
        if (
          se(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
          se(e.el, `.${e.params.slideActiveClass}`).length === 0
        )
          return;
        const z = e.el,
          D = z.clientWidth,
          M = z.clientHeight,
          S = c.innerWidth,
          T = c.innerHeight,
          A = Ee(z);
        l && (A.left -= z.scrollLeft);
        const E = [
          [A.left, A.top],
          [A.left + D, A.top],
          [A.left, A.top + M],
          [A.left + D, A.top + M],
        ];
        for (let x = 0; x < E.length; x += 1) {
          const C = E[x];
          if (C[0] >= 0 && C[0] <= S && C[1] >= 0 && C[1] <= T) {
            if (C[0] === 0 && C[1] === 0) continue;
            L = !0;
          }
        }
        if (!L) return;
      }
      e.isHorizontal()
        ? ((v || w || u || b) &&
            (p.preventDefault ? p.preventDefault() : (p.returnValue = !1)),
          (((w || b) && !l) || ((v || u) && l)) && e.slideNext(),
          (((v || u) && !l) || ((w || b) && l)) && e.slidePrev())
        : ((v || w || g || y) &&
            (p.preventDefault ? p.preventDefault() : (p.returnValue = !1)),
          (w || y) && e.slideNext(),
          (v || g) && e.slidePrev()),
        r("keyPress", m);
    }
  }
  function n() {
    e.keyboard.enabled ||
      (a.addEventListener("keydown", d), (e.keyboard.enabled = !0));
  }
  function f() {
    e.keyboard.enabled &&
      (a.removeEventListener("keydown", d), (e.keyboard.enabled = !1));
  }
  s("init", () => {
    e.params.keyboard.enabled && n();
  }),
    s("destroy", () => {
      e.keyboard.enabled && f();
    }),
    Object.assign(e.keyboard, { enable: n, disable: f });
}
function Vi(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const a = Y();
  t({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let c,
    d = Z(),
    n;
  const f = [];
  function o(g) {
    let D = 0,
      M = 0,
      S = 0,
      T = 0;
    return (
      "detail" in g && (M = g.detail),
      "wheelDelta" in g && (M = -g.wheelDelta / 120),
      "wheelDeltaY" in g && (M = -g.wheelDeltaY / 120),
      "wheelDeltaX" in g && (D = -g.wheelDeltaX / 120),
      "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((D = M), (M = 0)),
      (S = D * 10),
      (T = M * 10),
      "deltaY" in g && (T = g.deltaY),
      "deltaX" in g && (S = g.deltaX),
      g.shiftKey && !S && ((S = T), (T = 0)),
      (S || T) &&
        g.deltaMode &&
        (g.deltaMode === 1 ? ((S *= 40), (T *= 40)) : ((S *= 800), (T *= 800))),
      S && !D && (D = S < 1 ? -1 : 1),
      T && !M && (M = T < 1 ? -1 : 1),
      { spinX: D, spinY: M, pixelX: S, pixelY: T }
    );
  }
  function l() {
    e.enabled && (e.mouseEntered = !0);
  }
  function p() {
    e.enabled && (e.mouseEntered = !1);
  }
  function m(g) {
    return (e.params.mousewheel.thresholdDelta &&
      g.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        Z() - d < e.params.mousewheel.thresholdTime)
      ? !1
      : g.delta >= 6 && Z() - d < 60
      ? !0
      : (g.direction < 0
          ? (!e.isEnd || e.params.loop) &&
            !e.animating &&
            (e.slideNext(), r("scroll", g.raw))
          : (!e.isBeginning || e.params.loop) &&
            !e.animating &&
            (e.slidePrev(), r("scroll", g.raw)),
        (d = new a.Date().getTime()),
        !1);
  }
  function h(g) {
    const y = e.params.mousewheel;
    if (g.direction < 0) {
      if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
    return !1;
  }
  function v(g) {
    let y = g,
      L = !0;
    if (
      !e.enabled ||
      g.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const z = e.params.mousewheel;
    e.params.cssMode && y.preventDefault();
    let D = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (D = document.querySelector(e.params.mousewheel.eventsTarget));
    const M = D && D.contains(y.target);
    if (!e.mouseEntered && !M && !z.releaseOnEdges) return !0;
    y.originalEvent && (y = y.originalEvent);
    let S = 0;
    const T = e.rtlTranslate ? -1 : 1,
      A = o(y);
    if (z.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) S = -A.pixelX * T;
        else return !0;
      else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) S = -A.pixelY;
      else return !0;
    else
      S = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * T : -A.pixelY;
    if (S === 0) return !0;
    z.invert && (S = -S);
    let E = e.getTranslate() + S * z.sensitivity;
    if (
      (E >= e.minTranslate() && (E = e.minTranslate()),
      E <= e.maxTranslate() && (E = e.maxTranslate()),
      (L = e.params.loop
        ? !0
        : !(E === e.minTranslate() || E === e.maxTranslate())),
      L && e.params.nested && y.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const x = {
        time: Z(),
        delta: Math.abs(S),
        direction: Math.sign(S),
        raw: g,
      };
      f.length >= 2 && f.shift();
      const C = f.length ? f[f.length - 1] : void 0;
      if (
        (f.push(x),
        C
          ? (x.direction !== C.direction ||
              x.delta > C.delta ||
              x.time > C.time + 150) &&
            m(x)
          : m(x),
        h(x))
      )
        return !0;
    } else {
      const x = { time: Z(), delta: Math.abs(S), direction: Math.sign(S) },
        C =
          n &&
          x.time < n.time + 500 &&
          x.delta <= n.delta &&
          x.direction === n.direction;
      if (!C) {
        n = void 0;
        let O = e.getTranslate() + S * z.sensitivity;
        const G = e.isBeginning,
          P = e.isEnd;
        if (
          (O >= e.minTranslate() && (O = e.minTranslate()),
          O <= e.maxTranslate() && (O = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(O),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!G && e.isBeginning) || (!P && e.isEnd)) && e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: x.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(c), (c = void 0), f.length >= 15 && f.shift();
          const I = f.length ? f[f.length - 1] : void 0,
            H = f[0];
          if (
            (f.push(x), I && (x.delta > I.delta || x.direction !== I.direction))
          )
            f.splice(0);
          else if (
            f.length >= 15 &&
            x.time - H.time < 500 &&
            H.delta - x.delta >= 1 &&
            x.delta <= 6
          ) {
            const R = S > 0 ? 0.8 : 0.2;
            (n = x),
              f.splice(0),
              (c = re(() => {
                e.slideToClosest(e.params.speed, !0, void 0, R);
              }, 0));
          }
          c ||
            (c = re(() => {
              (n = x),
                f.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (C || r("scroll", y),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          z.releaseOnEdges &&
            (O === e.minTranslate() || O === e.maxTranslate()))
        )
          return !0;
      }
    }
    return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
  }
  function w(g) {
    let y = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (y = document.querySelector(e.params.mousewheel.eventsTarget)),
      y[g]("mouseenter", l),
      y[g]("mouseleave", p),
      y[g]("wheel", v);
  }
  function u() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", v), !0)
      : e.mousewheel.enabled
      ? !1
      : (w("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  function b() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, v), !0)
      : e.mousewheel.enabled
      ? (w("removeEventListener"), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  s("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && b(),
      e.params.mousewheel.enabled && u();
  }),
    s("destroy", () => {
      e.params.cssMode && u(), e.mousewheel.enabled && b();
    }),
    Object.assign(e.mousewheel, { enable: u, disable: b });
}
function We(i, e, t, s) {
  return (
    i.params.createElements &&
      Object.keys(s).forEach((r) => {
        if (!t[r] && t.auto === !0) {
          let a = q(i.el, `.${s[r]}`)[0];
          a || ((a = K("div", s[r])), (a.className = s[r]), i.el.append(a)),
            (t[r] = a),
            (e[r] = a);
        }
      }),
    t
  );
}
function Xi(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function a(h) {
    let v;
    return h &&
      typeof h == "string" &&
      e.isElement &&
      ((v = e.el.querySelector(h)), v)
      ? v
      : (h &&
          (typeof h == "string" && (v = [...document.querySelectorAll(h)]),
          e.params.uniqueNavElements &&
          typeof h == "string" &&
          v &&
          v.length > 1 &&
          e.el.querySelectorAll(h).length === 1
            ? (v = e.el.querySelector(h))
            : v && v.length === 1 && (v = v[0])),
        h && !v ? h : v);
  }
  function c(h, v) {
    const w = e.params.navigation;
    (h = V(h)),
      h.forEach((u) => {
        u &&
          (u.classList[v ? "add" : "remove"](...w.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = v),
          e.params.watchOverflow &&
            e.enabled &&
            u.classList[e.isLocked ? "add" : "remove"](w.lockClass));
      });
  }
  function d() {
    const { nextEl: h, prevEl: v } = e.navigation;
    if (e.params.loop) {
      c(v, !1), c(h, !1);
      return;
    }
    c(v, e.isBeginning && !e.params.rewind), c(h, e.isEnd && !e.params.rewind);
  }
  function n(h) {
    h.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function f(h) {
    h.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function o() {
    const h = e.params.navigation;
    if (
      ((e.params.navigation = We(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(h.nextEl || h.prevEl))
    )
      return;
    let v = a(h.nextEl),
      w = a(h.prevEl);
    Object.assign(e.navigation, { nextEl: v, prevEl: w }),
      (v = V(v)),
      (w = V(w));
    const u = (b, g) => {
      b && b.addEventListener("click", g === "next" ? f : n),
        !e.enabled && b && b.classList.add(...h.lockClass.split(" "));
    };
    v.forEach((b) => u(b, "next")), w.forEach((b) => u(b, "prev"));
  }
  function l() {
    let { nextEl: h, prevEl: v } = e.navigation;
    (h = V(h)), (v = V(v));
    const w = (u, b) => {
      u.removeEventListener("click", b === "next" ? f : n),
        u.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    h.forEach((u) => w(u, "next")), v.forEach((u) => w(u, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? m() : (o(), d());
  }),
    s("toEdge fromEdge lock unlock", () => {
      d();
    }),
    s("destroy", () => {
      l();
    }),
    s("enable disable", () => {
      let { nextEl: h, prevEl: v } = e.navigation;
      if (((h = V(h)), (v = V(v)), e.enabled)) {
        d();
        return;
      }
      [...h, ...v]
        .filter((w) => !!w)
        .forEach((w) => w.classList.add(e.params.navigation.lockClass));
    }),
    s("click", (h, v) => {
      let { nextEl: w, prevEl: u } = e.navigation;
      (w = V(w)), (u = V(u));
      const b = v.target;
      if (e.params.navigation.hideOnClick && !u.includes(b) && !w.includes(b)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === b || e.pagination.el.contains(b))
        )
          return;
        let g;
        w.length
          ? (g = w[0].classList.contains(e.params.navigation.hiddenClass))
          : u.length &&
            (g = u[0].classList.contains(e.params.navigation.hiddenClass)),
          r(g === !0 ? "navigationShow" : "navigationHide"),
          [...w, ...u]
            .filter((y) => !!y)
            .forEach((y) =>
              y.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const p = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        o(),
        d();
    },
    m = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        l();
    };
  Object.assign(e.navigation, {
    enable: p,
    disable: m,
    update: d,
    init: o,
    destroy: l,
  });
}
function J(i) {
  return (
    i === void 0 && (i = ""),
    `.${i
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Ni(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const a = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${a}-bullet`,
      bulletActiveClass: `${a}-bullet-active`,
      modifierClass: `${a}-`,
      currentClass: `${a}-current`,
      totalClass: `${a}-total`,
      hiddenClass: `${a}-hidden`,
      progressbarFillClass: `${a}-progressbar-fill`,
      progressbarOppositeClass: `${a}-progressbar-opposite`,
      clickableClass: `${a}-clickable`,
      lockClass: `${a}-lock`,
      horizontalClass: `${a}-horizontal`,
      verticalClass: `${a}-vertical`,
      paginationDisabledClass: `${a}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let c,
    d = 0;
  function n() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function f(u, b) {
    const { bulletActiveClass: g } = e.params.pagination;
    u &&
      ((u = u[`${b === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${g}-${b}`),
        (u = u[`${b === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${g}-${b}-${b}`)));
  }
  function o(u) {
    const b = u.target.closest(J(e.params.pagination.bulletClass));
    if (!b) return;
    u.preventDefault();
    const g = he(b) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === g) return;
      e.slideToLoop(g);
    } else e.slideTo(g);
  }
  function l() {
    const u = e.rtl,
      b = e.params.pagination;
    if (n()) return;
    let g = e.pagination.el;
    g = V(g);
    let y, L;
    const z =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      D = e.params.loop
        ? Math.ceil(z / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((L = e.previousRealIndex || 0),
          (y =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((y = e.snapIndex), (L = e.previousSnapIndex))
        : ((L = e.previousIndex || 0), (y = e.activeIndex || 0)),
      b.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const M = e.pagination.bullets;
      let S, T, A;
      if (
        (b.dynamicBullets &&
          ((c = Ve(M[0], e.isHorizontal() ? "width" : "height")),
          g.forEach((E) => {
            E.style[e.isHorizontal() ? "width" : "height"] = `${
              c * (b.dynamicMainBullets + 4)
            }px`;
          }),
          b.dynamicMainBullets > 1 &&
            L !== void 0 &&
            ((d += y - (L || 0)),
            d > b.dynamicMainBullets - 1
              ? (d = b.dynamicMainBullets - 1)
              : d < 0 && (d = 0)),
          (S = Math.max(y - d, 0)),
          (T = S + (Math.min(M.length, b.dynamicMainBullets) - 1)),
          (A = (T + S) / 2)),
        M.forEach((E) => {
          const x = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (C) => `${b.bulletActiveClass}${C}`
            ),
          ]
            .map((C) =>
              typeof C == "string" && C.includes(" ") ? C.split(" ") : C
            )
            .flat();
          E.classList.remove(...x);
        }),
        g.length > 1)
      )
        M.forEach((E) => {
          const x = he(E);
          x === y
            ? E.classList.add(...b.bulletActiveClass.split(" "))
            : e.isElement && E.setAttribute("part", "bullet"),
            b.dynamicBullets &&
              (x >= S &&
                x <= T &&
                E.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),
              x === S && f(E, "prev"),
              x === T && f(E, "next"));
        });
      else {
        const E = M[y];
        if (
          (E && E.classList.add(...b.bulletActiveClass.split(" ")),
          e.isElement &&
            M.forEach((x, C) => {
              x.setAttribute("part", C === y ? "bullet-active" : "bullet");
            }),
          b.dynamicBullets)
        ) {
          const x = M[S],
            C = M[T];
          for (let O = S; O <= T; O += 1)
            M[O] &&
              M[O].classList.add(...`${b.bulletActiveClass}-main`.split(" "));
          f(x, "prev"), f(C, "next");
        }
      }
      if (b.dynamicBullets) {
        const E = Math.min(M.length, b.dynamicMainBullets + 4),
          x = (c * E - c) / 2 - A * c,
          C = u ? "right" : "left";
        M.forEach((O) => {
          O.style[e.isHorizontal() ? C : "top"] = `${x}px`;
        });
      }
    }
    g.forEach((M, S) => {
      if (
        (b.type === "fraction" &&
          (M.querySelectorAll(J(b.currentClass)).forEach((T) => {
            T.textContent = b.formatFractionCurrent(y + 1);
          }),
          M.querySelectorAll(J(b.totalClass)).forEach((T) => {
            T.textContent = b.formatFractionTotal(D);
          })),
        b.type === "progressbar")
      ) {
        let T;
        b.progressbarOpposite
          ? (T = e.isHorizontal() ? "vertical" : "horizontal")
          : (T = e.isHorizontal() ? "horizontal" : "vertical");
        const A = (y + 1) / D;
        let E = 1,
          x = 1;
        T === "horizontal" ? (E = A) : (x = A),
          M.querySelectorAll(J(b.progressbarFillClass)).forEach((C) => {
            (C.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${x})`),
              (C.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      b.type === "custom" && b.renderCustom
        ? ((M.innerHTML = b.renderCustom(e, y + 1, D)),
          S === 0 && r("paginationRender", M))
        : (S === 0 && r("paginationRender", M), r("paginationUpdate", M)),
        e.params.watchOverflow &&
          e.enabled &&
          M.classList[e.isLocked ? "add" : "remove"](b.lockClass);
    });
  }
  function p() {
    const u = e.params.pagination;
    if (n()) return;
    const b =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
        ? e.slides.length / Math.ceil(e.params.grid.rows)
        : e.slides.length;
    let g = e.pagination.el;
    g = V(g);
    let y = "";
    if (u.type === "bullets") {
      let L = e.params.loop
        ? Math.ceil(b / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && L > b && (L = b);
      for (let z = 0; z < L; z += 1)
        u.renderBullet
          ? (y += u.renderBullet.call(e, z, u.bulletClass))
          : (y += `<${u.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (y = u.renderFraction.call(e, u.currentClass, u.totalClass))
        : (y = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (y = u.renderProgressbar.call(e, u.progressbarFillClass))
          : (y = `<span class="${u.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      g.forEach((L) => {
        u.type !== "custom" && (L.innerHTML = y || ""),
          u.type === "bullets" &&
            e.pagination.bullets.push(...L.querySelectorAll(J(u.bulletClass)));
      }),
      u.type !== "custom" && r("paginationRender", g[0]);
  }
  function m() {
    e.params.pagination = We(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const u = e.params.pagination;
    if (!u.el) return;
    let b;
    typeof u.el == "string" && e.isElement && (b = e.el.querySelector(u.el)),
      !b &&
        typeof u.el == "string" &&
        (b = [...document.querySelectorAll(u.el)]),
      b || (b = u.el),
      !(!b || b.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(b) &&
          b.length > 1 &&
          ((b = [...e.el.querySelectorAll(u.el)]),
          b.length > 1 &&
            (b = b.filter((g) => se(g, ".swiper")[0] === e.el)[0])),
        Array.isArray(b) && b.length === 1 && (b = b[0]),
        Object.assign(e.pagination, { el: b }),
        (b = V(b)),
        b.forEach((g) => {
          u.type === "bullets" &&
            u.clickable &&
            g.classList.add(...(u.clickableClass || "").split(" ")),
            g.classList.add(u.modifierClass + u.type),
            g.classList.add(
              e.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (g.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (d = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              g.classList.add(u.progressbarOppositeClass),
            u.clickable && g.addEventListener("click", o),
            e.enabled || g.classList.add(u.lockClass);
        }));
  }
  function h() {
    const u = e.params.pagination;
    if (n()) return;
    let b = e.pagination.el;
    b &&
      ((b = V(b)),
      b.forEach((g) => {
        g.classList.remove(u.hiddenClass),
          g.classList.remove(u.modifierClass + u.type),
          g.classList.remove(
            e.isHorizontal() ? u.horizontalClass : u.verticalClass
          ),
          u.clickable &&
            (g.classList.remove(...(u.clickableClass || "").split(" ")),
            g.removeEventListener("click", o));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((g) =>
          g.classList.remove(...u.bulletActiveClass.split(" "))
        );
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const u = e.params.pagination;
    let { el: b } = e.pagination;
    (b = V(b)),
      b.forEach((g) => {
        g.classList.remove(u.horizontalClass, u.verticalClass),
          g.classList.add(
            e.isHorizontal() ? u.horizontalClass : u.verticalClass
          );
      });
  }),
    s("init", () => {
      e.params.pagination.enabled === !1 ? w() : (m(), p(), l());
    }),
    s("activeIndexChange", () => {
      typeof e.snapIndex > "u" && l();
    }),
    s("snapIndexChange", () => {
      l();
    }),
    s("snapGridLengthChange", () => {
      p(), l();
    }),
    s("destroy", () => {
      h();
    }),
    s("enable disable", () => {
      let { el: u } = e.pagination;
      u &&
        ((u = V(u)),
        u.forEach((b) =>
          b.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    s("lock unlock", () => {
      l();
    }),
    s("click", (u, b) => {
      const g = b.target,
        y = V(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        y &&
        y.length > 0 &&
        !g.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && g === e.navigation.nextEl) ||
            (e.navigation.prevEl && g === e.navigation.prevEl))
        )
          return;
        const L = y[0].classList.contains(e.params.pagination.hiddenClass);
        r(L === !0 ? "paginationShow" : "paginationHide"),
          y.forEach((z) => z.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const v = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: u } = e.pagination;
      u &&
        ((u = V(u)),
        u.forEach((b) =>
          b.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        m(),
        p(),
        l();
    },
    w = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: u } = e.pagination;
      u &&
        ((u = V(u)),
        u.forEach((b) =>
          b.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        h();
    };
  Object.assign(e.pagination, {
    enable: v,
    disable: w,
    render: p,
    update: l,
    init: m,
    destroy: h,
  });
}
function Yi(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const a = W();
  let c = !1,
    d = null,
    n = null,
    f,
    o,
    l,
    p;
  t({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function m() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: E, rtlTranslate: x } = e,
      { dragEl: C, el: O } = E,
      G = e.params.scrollbar,
      P = e.params.loop ? e.progressLoop : e.progress;
    let I = o,
      H = (l - o) * P;
    x
      ? ((H = -H), H > 0 ? ((I = o - H), (H = 0)) : -H + o > l && (I = l + H))
      : H < 0
      ? ((I = o + H), (H = 0))
      : H + o > l && (I = l - H),
      e.isHorizontal()
        ? ((C.style.transform = `translate3d(${H}px, 0, 0)`),
          (C.style.width = `${I}px`))
        : ((C.style.transform = `translate3d(0px, ${H}px, 0)`),
          (C.style.height = `${I}px`)),
      G.hide &&
        (clearTimeout(d),
        (O.style.opacity = 1),
        (d = setTimeout(() => {
          (O.style.opacity = 0), (O.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function h(E) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${E}ms`);
  }
  function v() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: E } = e,
      { dragEl: x, el: C } = E;
    (x.style.width = ""),
      (x.style.height = ""),
      (l = e.isHorizontal() ? C.offsetWidth : C.offsetHeight),
      (p =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (o = l * p)
        : (o = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (x.style.width = `${o}px`)
        : (x.style.height = `${o}px`),
      p >= 1 ? (C.style.display = "none") : (C.style.display = ""),
      e.params.scrollbar.hide && (C.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        E.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function w(E) {
    return e.isHorizontal() ? E.clientX : E.clientY;
  }
  function u(E) {
    const { scrollbar: x, rtlTranslate: C } = e,
      { el: O } = x;
    let G;
    (G =
      (w(E) -
        Ee(O)[e.isHorizontal() ? "left" : "top"] -
        (f !== null ? f : o / 2)) /
      (l - o)),
      (G = Math.max(Math.min(G, 1), 0)),
      C && (G = 1 - G);
    const P = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * G;
    e.updateProgress(P),
      e.setTranslate(P),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function b(E) {
    const x = e.params.scrollbar,
      { scrollbar: C, wrapperEl: O } = e,
      { el: G, dragEl: P } = C;
    (c = !0),
      (f =
        E.target === P
          ? w(E) -
            E.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      E.preventDefault(),
      E.stopPropagation(),
      (O.style.transitionDuration = "100ms"),
      (P.style.transitionDuration = "100ms"),
      u(E),
      clearTimeout(n),
      (G.style.transitionDuration = "0ms"),
      x.hide && (G.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      r("scrollbarDragStart", E);
  }
  function g(E) {
    const { scrollbar: x, wrapperEl: C } = e,
      { el: O, dragEl: G } = x;
    c &&
      (E.preventDefault && E.cancelable
        ? E.preventDefault()
        : (E.returnValue = !1),
      u(E),
      (C.style.transitionDuration = "0ms"),
      (O.style.transitionDuration = "0ms"),
      (G.style.transitionDuration = "0ms"),
      r("scrollbarDragMove", E));
  }
  function y(E) {
    const x = e.params.scrollbar,
      { scrollbar: C, wrapperEl: O } = e,
      { el: G } = C;
    c &&
      ((c = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (O.style.transitionDuration = "")),
      x.hide &&
        (clearTimeout(n),
        (n = re(() => {
          (G.style.opacity = 0), (G.style.transitionDuration = "400ms");
        }, 1e3))),
      r("scrollbarDragEnd", E),
      x.snapOnRelease && e.slideToClosest());
  }
  function L(E) {
    const { scrollbar: x, params: C } = e,
      O = x.el;
    if (!O) return;
    const G = O,
      P = C.passiveListeners ? { passive: !1, capture: !1 } : !1,
      I = C.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!G) return;
    const H = E === "on" ? "addEventListener" : "removeEventListener";
    G[H]("pointerdown", b, P),
      a[H]("pointermove", g, P),
      a[H]("pointerup", y, I);
  }
  function z() {
    !e.params.scrollbar.el || !e.scrollbar.el || L("on");
  }
  function D() {
    !e.params.scrollbar.el || !e.scrollbar.el || L("off");
  }
  function M() {
    const { scrollbar: E, el: x } = e;
    e.params.scrollbar = We(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const C = e.params.scrollbar;
    if (!C.el) return;
    let O;
    if (
      (typeof C.el == "string" && e.isElement && (O = e.el.querySelector(C.el)),
      !O && typeof C.el == "string")
    ) {
      if (((O = a.querySelectorAll(C.el)), !O.length)) return;
    } else O || (O = C.el);
    e.params.uniqueNavElements &&
      typeof C.el == "string" &&
      O.length > 1 &&
      x.querySelectorAll(C.el).length === 1 &&
      (O = x.querySelector(C.el)),
      O.length > 0 && (O = O[0]),
      O.classList.add(e.isHorizontal() ? C.horizontalClass : C.verticalClass);
    let G;
    O &&
      ((G = O.querySelector(J(e.params.scrollbar.dragClass))),
      G || ((G = K("div", e.params.scrollbar.dragClass)), O.append(G))),
      Object.assign(E, { el: O, dragEl: G }),
      C.draggable && z(),
      O &&
        O.classList[e.enabled ? "remove" : "add"](
          ...ee(e.params.scrollbar.lockClass)
        );
  }
  function S() {
    const E = e.params.scrollbar,
      x = e.scrollbar.el;
    x &&
      x.classList.remove(
        ...ee(e.isHorizontal() ? E.horizontalClass : E.verticalClass)
      ),
      D();
  }
  s("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const E = e.params.scrollbar;
    let { el: x } = e.scrollbar;
    (x = V(x)),
      x.forEach((C) => {
        C.classList.remove(E.horizontalClass, E.verticalClass),
          C.classList.add(
            e.isHorizontal() ? E.horizontalClass : E.verticalClass
          );
      });
  }),
    s("init", () => {
      e.params.scrollbar.enabled === !1 ? A() : (M(), v(), m());
    }),
    s("update resize observerUpdate lock unlock changeDirection", () => {
      v();
    }),
    s("setTranslate", () => {
      m();
    }),
    s("setTransition", (E, x) => {
      h(x);
    }),
    s("enable disable", () => {
      const { el: E } = e.scrollbar;
      E &&
        E.classList[e.enabled ? "remove" : "add"](
          ...ee(e.params.scrollbar.lockClass)
        );
    }),
    s("destroy", () => {
      S();
    });
  const T = () => {
      e.el.classList.remove(...ee(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...ee(e.params.scrollbar.scrollbarDisabledClass)
          ),
        M(),
        v(),
        m();
    },
    A = () => {
      e.el.classList.add(...ee(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...ee(e.params.scrollbar.scrollbarDisabledClass)
          ),
        S();
    };
  Object.assign(e.scrollbar, {
    enable: T,
    disable: A,
    updateSize: v,
    setTranslate: m,
    init: M,
    destroy: S,
  });
}
function Fi(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({ parallax: { enabled: !1 } });
  const r =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    a = (n, f) => {
      const { rtl: o } = e,
        l = o ? -1 : 1,
        p = n.getAttribute("data-swiper-parallax") || "0";
      let m = n.getAttribute("data-swiper-parallax-x"),
        h = n.getAttribute("data-swiper-parallax-y");
      const v = n.getAttribute("data-swiper-parallax-scale"),
        w = n.getAttribute("data-swiper-parallax-opacity"),
        u = n.getAttribute("data-swiper-parallax-rotate");
      if (
        (m || h
          ? ((m = m || "0"), (h = h || "0"))
          : e.isHorizontal()
          ? ((m = p), (h = "0"))
          : ((h = p), (m = "0")),
        m.indexOf("%") >= 0
          ? (m = `${parseInt(m, 10) * f * l}%`)
          : (m = `${m * f * l}px`),
        h.indexOf("%") >= 0
          ? (h = `${parseInt(h, 10) * f}%`)
          : (h = `${h * f}px`),
        typeof w < "u" && w !== null)
      ) {
        const g = w - (w - 1) * (1 - Math.abs(f));
        n.style.opacity = g;
      }
      let b = `translate3d(${m}, ${h}, 0px)`;
      if (typeof v < "u" && v !== null) {
        const g = v - (v - 1) * (1 - Math.abs(f));
        b += ` scale(${g})`;
      }
      if (u && typeof u < "u" && u !== null) {
        const g = u * f * -1;
        b += ` rotate(${g}deg)`;
      }
      n.style.transform = b;
    },
    c = () => {
      const { el: n, slides: f, progress: o, snapGrid: l, isElement: p } = e,
        m = q(n, r);
      e.isElement && m.push(...q(e.hostEl, r)),
        m.forEach((h) => {
          a(h, o);
        }),
        f.forEach((h, v) => {
          let w = h.progress;
          e.params.slidesPerGroup > 1 &&
            e.params.slidesPerView !== "auto" &&
            (w += Math.ceil(v / 2) - o * (l.length - 1)),
            (w = Math.min(Math.max(w, -1), 1)),
            h
              .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
              .forEach((u) => {
                a(u, w);
              });
        });
    },
    d = function (n) {
      n === void 0 && (n = e.params.speed);
      const { el: f, hostEl: o } = e,
        l = [...f.querySelectorAll(r)];
      e.isElement && l.push(...o.querySelectorAll(r)),
        l.forEach((p) => {
          let m =
            parseInt(p.getAttribute("data-swiper-parallax-duration"), 10) || n;
          n === 0 && (m = 0), (p.style.transitionDuration = `${m}ms`);
        });
    };
  s("beforeInit", () => {
    e.params.parallax.enabled &&
      ((e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0));
  }),
    s("init", () => {
      e.params.parallax.enabled && c();
    }),
    s("setTranslate", () => {
      e.params.parallax.enabled && c();
    }),
    s("setTransition", (n, f) => {
      e.params.parallax.enabled && d(f);
    });
}
function qi(i) {
  let { swiper: e, extendParams: t, on: s, emit: r } = i;
  const a = Y();
  t({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed",
    },
  }),
    (e.zoom = { enabled: !1 });
  let c = 1,
    d = !1,
    n,
    f;
  const o = [],
    l = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3,
    },
    p = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {},
    },
    m = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let h = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return h;
    },
    set($) {
      if (h !== $) {
        const k = l.imageEl,
          B = l.slideEl;
        r("zoomChange", $, k, B);
      }
      h = $;
    },
  });
  function v() {
    if (o.length < 2) return 1;
    const $ = o[0].pageX,
      k = o[0].pageY,
      B = o[1].pageX,
      N = o[1].pageY;
    return Math.sqrt((B - $) ** 2 + (N - k) ** 2);
  }
  function w() {
    const $ = e.params.zoom,
      k = l.imageWrapEl.getAttribute("data-swiper-zoom") || $.maxRatio;
    if ($.limitToOriginalSize && l.imageEl && l.imageEl.naturalWidth) {
      const B = l.imageEl.naturalWidth / l.imageEl.offsetWidth;
      return Math.min(B, k);
    }
    return k;
  }
  function u() {
    if (o.length < 2) return { x: null, y: null };
    const $ = l.imageEl.getBoundingClientRect();
    return [
      (o[0].pageX + (o[1].pageX - o[0].pageX) / 2 - $.x - a.scrollX) / c,
      (o[0].pageY + (o[1].pageY - o[0].pageY) / 2 - $.y - a.scrollY) / c,
    ];
  }
  function b() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function g($) {
    const k = b();
    return !!(
      $.target.matches(k) ||
      e.slides.filter((B) => B.contains($.target)).length > 0
    );
  }
  function y($) {
    const k = `.${e.params.zoom.containerClass}`;
    return !!(
      $.target.matches(k) ||
      [...e.hostEl.querySelectorAll(k)].filter((B) => B.contains($.target))
        .length > 0
    );
  }
  function L($) {
    if (($.pointerType === "mouse" && o.splice(0, o.length), !g($))) return;
    const k = e.params.zoom;
    if (((n = !1), (f = !1), o.push($), !(o.length < 2))) {
      if (((n = !0), (l.scaleStart = v()), !l.slideEl)) {
        (l.slideEl = $.target.closest(`.${e.params.slideClass}, swiper-slide`)),
          l.slideEl || (l.slideEl = e.slides[e.activeIndex]);
        let B = l.slideEl.querySelector(`.${k.containerClass}`);
        if (
          (B &&
            (B = B.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
          (l.imageEl = B),
          B
            ? (l.imageWrapEl = se(l.imageEl, `.${k.containerClass}`)[0])
            : (l.imageWrapEl = void 0),
          !l.imageWrapEl)
        ) {
          l.imageEl = void 0;
          return;
        }
        l.maxRatio = w();
      }
      if (l.imageEl) {
        const [B, N] = u();
        (l.originX = B),
          (l.originY = N),
          (l.imageEl.style.transitionDuration = "0ms");
      }
      d = !0;
    }
  }
  function z($) {
    if (!g($)) return;
    const k = e.params.zoom,
      B = e.zoom,
      N = o.findIndex((_) => _.pointerId === $.pointerId);
    N >= 0 && (o[N] = $),
      !(o.length < 2) &&
        ((f = !0),
        (l.scaleMove = v()),
        l.imageEl &&
          ((B.scale = (l.scaleMove / l.scaleStart) * c),
          B.scale > l.maxRatio &&
            (B.scale = l.maxRatio - 1 + (B.scale - l.maxRatio + 1) ** 0.5),
          B.scale < k.minRatio &&
            (B.scale = k.minRatio + 1 - (k.minRatio - B.scale + 1) ** 0.5),
          (l.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`)));
  }
  function D($) {
    if (!g($) || ($.pointerType === "mouse" && $.type === "pointerout")) return;
    const k = e.params.zoom,
      B = e.zoom,
      N = o.findIndex((_) => _.pointerId === $.pointerId);
    N >= 0 && o.splice(N, 1),
      !(!n || !f) &&
        ((n = !1),
        (f = !1),
        l.imageEl &&
          ((B.scale = Math.max(Math.min(B.scale, l.maxRatio), k.minRatio)),
          (l.imageEl.style.transitionDuration = `${e.params.speed}ms`),
          (l.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`),
          (c = B.scale),
          (d = !1),
          B.scale > 1 && l.slideEl
            ? l.slideEl.classList.add(`${k.zoomedSlideClass}`)
            : B.scale <= 1 &&
              l.slideEl &&
              l.slideEl.classList.remove(`${k.zoomedSlideClass}`),
          B.scale === 1 &&
            ((l.originX = 0), (l.originY = 0), (l.slideEl = void 0))));
  }
  let M;
  function S() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function T() {
    clearTimeout(M),
      (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
      (M = setTimeout(() => {
        S();
      }));
  }
  function A($) {
    const k = e.device;
    if (!l.imageEl || p.isTouched) return;
    k.android && $.cancelable && $.preventDefault(), (p.isTouched = !0);
    const B = o.length > 0 ? o[0] : $;
    (p.touchesStart.x = B.pageX), (p.touchesStart.y = B.pageY);
  }
  function E($) {
    if (!g($) || !y($)) return;
    const k = e.zoom;
    if (!l.imageEl || !p.isTouched || !l.slideEl) return;
    p.isMoved ||
      ((p.width = l.imageEl.offsetWidth || l.imageEl.clientWidth),
      (p.height = l.imageEl.offsetHeight || l.imageEl.clientHeight),
      (p.startX = Re(l.imageWrapEl, "x") || 0),
      (p.startY = Re(l.imageWrapEl, "y") || 0),
      (l.slideWidth = l.slideEl.offsetWidth),
      (l.slideHeight = l.slideEl.offsetHeight),
      (l.imageWrapEl.style.transitionDuration = "0ms"));
    const B = p.width * k.scale,
      N = p.height * k.scale;
    if (B < l.slideWidth && N < l.slideHeight) {
      S();
      return;
    }
    if (
      ((p.minX = Math.min(l.slideWidth / 2 - B / 2, 0)),
      (p.maxX = -p.minX),
      (p.minY = Math.min(l.slideHeight / 2 - N / 2, 0)),
      (p.maxY = -p.minY),
      (p.touchesCurrent.x = o.length > 0 ? o[0].pageX : $.pageX),
      (p.touchesCurrent.y = o.length > 0 ? o[0].pageY : $.pageY),
      Math.max(
        Math.abs(p.touchesCurrent.x - p.touchesStart.x),
        Math.abs(p.touchesCurrent.y - p.touchesStart.y)
      ) > 5 && (e.allowClick = !1),
      !p.isMoved && !d)
    ) {
      if (
        e.isHorizontal() &&
        ((Math.floor(p.minX) === Math.floor(p.startX) &&
          p.touchesCurrent.x < p.touchesStart.x) ||
          (Math.floor(p.maxX) === Math.floor(p.startX) &&
            p.touchesCurrent.x > p.touchesStart.x))
      ) {
        (p.isTouched = !1), S();
        return;
      }
      if (
        !e.isHorizontal() &&
        ((Math.floor(p.minY) === Math.floor(p.startY) &&
          p.touchesCurrent.y < p.touchesStart.y) ||
          (Math.floor(p.maxY) === Math.floor(p.startY) &&
            p.touchesCurrent.y > p.touchesStart.y))
      ) {
        (p.isTouched = !1), S();
        return;
      }
    }
    $.cancelable && $.preventDefault(),
      $.stopPropagation(),
      T(),
      (p.isMoved = !0);
    const X = (k.scale - c) / (l.maxRatio - e.params.zoom.minRatio),
      { originX: j, originY: ne } = l;
    (p.currentX =
      p.touchesCurrent.x - p.touchesStart.x + p.startX + X * (p.width - j * 2)),
      (p.currentY =
        p.touchesCurrent.y -
        p.touchesStart.y +
        p.startY +
        X * (p.height - ne * 2)),
      p.currentX < p.minX &&
        (p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** 0.8),
      p.currentX > p.maxX &&
        (p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** 0.8),
      p.currentY < p.minY &&
        (p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** 0.8),
      p.currentY > p.maxY &&
        (p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** 0.8),
      m.prevPositionX || (m.prevPositionX = p.touchesCurrent.x),
      m.prevPositionY || (m.prevPositionY = p.touchesCurrent.y),
      m.prevTime || (m.prevTime = Date.now()),
      (m.x =
        (p.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2),
      (m.y =
        (p.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2),
      Math.abs(p.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
      Math.abs(p.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
      (m.prevPositionX = p.touchesCurrent.x),
      (m.prevPositionY = p.touchesCurrent.y),
      (m.prevTime = Date.now()),
      (l.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
  }
  function x() {
    const $ = e.zoom;
    if (!l.imageEl) return;
    if (!p.isTouched || !p.isMoved) {
      (p.isTouched = !1), (p.isMoved = !1);
      return;
    }
    (p.isTouched = !1), (p.isMoved = !1);
    let k = 300,
      B = 300;
    const N = m.x * k,
      _ = p.currentX + N,
      X = m.y * B,
      j = p.currentY + X;
    m.x !== 0 && (k = Math.abs((_ - p.currentX) / m.x)),
      m.y !== 0 && (B = Math.abs((j - p.currentY) / m.y));
    const ne = Math.max(k, B);
    (p.currentX = _), (p.currentY = j);
    const we = p.width * $.scale,
      Q = p.height * $.scale;
    (p.minX = Math.min(l.slideWidth / 2 - we / 2, 0)),
      (p.maxX = -p.minX),
      (p.minY = Math.min(l.slideHeight / 2 - Q / 2, 0)),
      (p.maxY = -p.minY),
      (p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX)),
      (p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY)),
      (l.imageWrapEl.style.transitionDuration = `${ne}ms`),
      (l.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
  }
  function C() {
    const $ = e.zoom;
    l.slideEl &&
      e.activeIndex !== e.slides.indexOf(l.slideEl) &&
      (l.imageEl && (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      l.imageWrapEl && (l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
      ($.scale = 1),
      (c = 1),
      (l.slideEl = void 0),
      (l.imageEl = void 0),
      (l.imageWrapEl = void 0),
      (l.originX = 0),
      (l.originY = 0));
  }
  function O($) {
    const k = e.zoom,
      B = e.params.zoom;
    if (!l.slideEl) {
      $ &&
        $.target &&
        (l.slideEl = $.target.closest(`.${e.params.slideClass}, swiper-slide`)),
        l.slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (l.slideEl = q(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (l.slideEl = e.slides[e.activeIndex]));
      let pe = l.slideEl.querySelector(`.${B.containerClass}`);
      pe &&
        (pe = pe.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (l.imageEl = pe),
        pe
          ? (l.imageWrapEl = se(l.imageEl, `.${B.containerClass}`)[0])
          : (l.imageWrapEl = void 0);
    }
    if (!l.imageEl || !l.imageWrapEl) return;
    e.params.cssMode &&
      ((e.wrapperEl.style.overflow = "hidden"),
      (e.wrapperEl.style.touchAction = "none")),
      l.slideEl.classList.add(`${B.zoomedSlideClass}`);
    let N, _, X, j, ne, we, Q, ie, je, Ue, Ke, Ze, ve, be, Le, ze, Ie, Ae;
    typeof p.touchesStart.x > "u" && $
      ? ((N = $.pageX), (_ = $.pageY))
      : ((N = p.touchesStart.x), (_ = p.touchesStart.y));
    const ce = typeof $ == "number" ? $ : null;
    c === 1 && ce && ((N = void 0), (_ = void 0));
    const Qe = w();
    (k.scale = ce || Qe),
      (c = ce || Qe),
      $ && !(c === 1 && ce)
        ? ((Ie = l.slideEl.offsetWidth),
          (Ae = l.slideEl.offsetHeight),
          (X = Ee(l.slideEl).left + a.scrollX),
          (j = Ee(l.slideEl).top + a.scrollY),
          (ne = X + Ie / 2 - N),
          (we = j + Ae / 2 - _),
          (je = l.imageEl.offsetWidth || l.imageEl.clientWidth),
          (Ue = l.imageEl.offsetHeight || l.imageEl.clientHeight),
          (Ke = je * k.scale),
          (Ze = Ue * k.scale),
          (ve = Math.min(Ie / 2 - Ke / 2, 0)),
          (be = Math.min(Ae / 2 - Ze / 2, 0)),
          (Le = -ve),
          (ze = -be),
          (Q = ne * k.scale),
          (ie = we * k.scale),
          Q < ve && (Q = ve),
          Q > Le && (Q = Le),
          ie < be && (ie = be),
          ie > ze && (ie = ze))
        : ((Q = 0), (ie = 0)),
      ce && k.scale === 1 && ((l.originX = 0), (l.originY = 0)),
      (l.imageWrapEl.style.transitionDuration = "300ms"),
      (l.imageWrapEl.style.transform = `translate3d(${Q}px, ${ie}px,0)`),
      (l.imageEl.style.transitionDuration = "300ms"),
      (l.imageEl.style.transform = `translate3d(0,0,0) scale(${k.scale})`);
  }
  function G() {
    const $ = e.zoom,
      k = e.params.zoom;
    if (!l.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual
        ? (l.slideEl = q(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
        : (l.slideEl = e.slides[e.activeIndex]);
      let B = l.slideEl.querySelector(`.${k.containerClass}`);
      B &&
        (B = B.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (l.imageEl = B),
        B
          ? (l.imageWrapEl = se(l.imageEl, `.${k.containerClass}`)[0])
          : (l.imageWrapEl = void 0);
    }
    !l.imageEl ||
      !l.imageWrapEl ||
      (e.params.cssMode &&
        ((e.wrapperEl.style.overflow = ""),
        (e.wrapperEl.style.touchAction = "")),
      ($.scale = 1),
      (c = 1),
      (l.imageWrapEl.style.transitionDuration = "300ms"),
      (l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      (l.imageEl.style.transitionDuration = "300ms"),
      (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      l.slideEl.classList.remove(`${k.zoomedSlideClass}`),
      (l.slideEl = void 0),
      (l.originX = 0),
      (l.originY = 0));
  }
  function P($) {
    const k = e.zoom;
    k.scale && k.scale !== 1 ? G() : O($);
  }
  function I() {
    const $ = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
      k = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: $, activeListenerWithCapture: k };
  }
  function H() {
    const $ = e.zoom;
    if ($.enabled) return;
    $.enabled = !0;
    const { passiveListener: k, activeListenerWithCapture: B } = I();
    e.wrapperEl.addEventListener("pointerdown", L, k),
      e.wrapperEl.addEventListener("pointermove", z, B),
      ["pointerup", "pointercancel", "pointerout"].forEach((N) => {
        e.wrapperEl.addEventListener(N, D, k);
      }),
      e.wrapperEl.addEventListener("pointermove", E, B);
  }
  function R() {
    const $ = e.zoom;
    if (!$.enabled) return;
    $.enabled = !1;
    const { passiveListener: k, activeListenerWithCapture: B } = I();
    e.wrapperEl.removeEventListener("pointerdown", L, k),
      e.wrapperEl.removeEventListener("pointermove", z, B),
      ["pointerup", "pointercancel", "pointerout"].forEach((N) => {
        e.wrapperEl.removeEventListener(N, D, k);
      }),
      e.wrapperEl.removeEventListener("pointermove", E, B);
  }
  s("init", () => {
    e.params.zoom.enabled && H();
  }),
    s("destroy", () => {
      R();
    }),
    s("touchStart", ($, k) => {
      e.zoom.enabled && A(k);
    }),
    s("touchEnd", ($, k) => {
      e.zoom.enabled && x();
    }),
    s("doubleTap", ($, k) => {
      !e.animating &&
        e.params.zoom.enabled &&
        e.zoom.enabled &&
        e.params.zoom.toggle &&
        P(k);
    }),
    s("transitionEnd", () => {
      e.zoom.enabled && e.params.zoom.enabled && C();
    }),
    s("slideChange", () => {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && C();
    }),
    Object.assign(e.zoom, { enable: H, disable: R, in: O, out: G, toggle: P });
}
function Wi(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (e.controller = { control: void 0 });
  function r(f, o) {
    const l = (function () {
      let v, w, u;
      return (b, g) => {
        for (w = -1, v = b.length; v - w > 1; )
          (u = (v + w) >> 1), b[u] <= g ? (w = u) : (v = u);
        return v;
      };
    })();
    (this.x = f), (this.y = o), (this.lastIndex = f.length - 1);
    let p, m;
    return (
      (this.interpolate = function (v) {
        return v
          ? ((m = l(this.x, v)),
            (p = m - 1),
            ((v - this.x[p]) * (this.y[m] - this.y[p])) /
              (this.x[m] - this.x[p]) +
              this.y[p])
          : 0;
      }),
      this
    );
  }
  function a(f) {
    e.controller.spline = e.params.loop
      ? new r(e.slidesGrid, f.slidesGrid)
      : new r(e.snapGrid, f.snapGrid);
  }
  function c(f, o) {
    const l = e.controller.control;
    let p, m;
    const h = e.constructor;
    function v(w) {
      if (w.destroyed) return;
      const u = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" &&
        (a(w), (m = -e.controller.spline.interpolate(-u))),
        (!m || e.params.controller.by === "container") &&
          ((p =
            (w.maxTranslate() - w.minTranslate()) /
            (e.maxTranslate() - e.minTranslate())),
          (Number.isNaN(p) || !Number.isFinite(p)) && (p = 1),
          (m = (u - e.minTranslate()) * p + w.minTranslate())),
        e.params.controller.inverse && (m = w.maxTranslate() - m),
        w.updateProgress(m),
        w.setTranslate(m, e),
        w.updateActiveIndex(),
        w.updateSlidesClasses();
    }
    if (Array.isArray(l))
      for (let w = 0; w < l.length; w += 1)
        l[w] !== o && l[w] instanceof h && v(l[w]);
    else l instanceof h && o !== l && v(l);
  }
  function d(f, o) {
    const l = e.constructor,
      p = e.controller.control;
    let m;
    function h(v) {
      v.destroyed ||
        (v.setTransition(f, e),
        f !== 0 &&
          (v.transitionStart(),
          v.params.autoHeight &&
            re(() => {
              v.updateAutoHeight();
            }),
          me(v.wrapperEl, () => {
            p && v.transitionEnd();
          })));
    }
    if (Array.isArray(p))
      for (m = 0; m < p.length; m += 1)
        p[m] !== o && p[m] instanceof l && h(p[m]);
    else p instanceof l && o !== p && h(p);
  }
  function n() {
    e.controller.control &&
      e.controller.spline &&
      ((e.controller.spline = void 0), delete e.controller.spline);
  }
  s("beforeInit", () => {
    if (
      typeof window < "u" &&
      (typeof e.params.controller.control == "string" ||
        e.params.controller.control instanceof HTMLElement)
    ) {
      const f = document.querySelector(e.params.controller.control);
      if (f && f.swiper) e.controller.control = f.swiper;
      else if (f) {
        const o = (l) => {
          (e.controller.control = l.detail[0]),
            e.update(),
            f.removeEventListener("init", o);
        };
        f.addEventListener("init", o);
      }
      return;
    }
    e.controller.control = e.params.controller.control;
  }),
    s("update", () => {
      n();
    }),
    s("resize", () => {
      n();
    }),
    s("observerUpdate", () => {
      n();
    }),
    s("setTranslate", (f, o, l) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTranslate(o, l);
    }),
    s("setTransition", (f, o, l) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTransition(o, l);
    }),
    Object.assign(e.controller, { setTranslate: c, setTransition: d });
}
function ji(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
    },
  }),
    (e.a11y = { clicked: !1 });
  let r = null,
    a,
    c,
    d = new Date().getTime();
  function n(P) {
    const I = r;
    I.length !== 0 && ((I.innerHTML = ""), (I.innerHTML = P));
  }
  function f(P) {
    const I = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(P).replace(/x/g, I);
  }
  function o(P) {
    (P = V(P)),
      P.forEach((I) => {
        I.setAttribute("tabIndex", "0");
      });
  }
  function l(P) {
    (P = V(P)),
      P.forEach((I) => {
        I.setAttribute("tabIndex", "-1");
      });
  }
  function p(P, I) {
    (P = V(P)),
      P.forEach((H) => {
        H.setAttribute("role", I);
      });
  }
  function m(P, I) {
    (P = V(P)),
      P.forEach((H) => {
        H.setAttribute("aria-roledescription", I);
      });
  }
  function h(P, I) {
    (P = V(P)),
      P.forEach((H) => {
        H.setAttribute("aria-controls", I);
      });
  }
  function v(P, I) {
    (P = V(P)),
      P.forEach((H) => {
        H.setAttribute("aria-label", I);
      });
  }
  function w(P, I) {
    (P = V(P)),
      P.forEach((H) => {
        H.setAttribute("id", I);
      });
  }
  function u(P, I) {
    (P = V(P)),
      P.forEach((H) => {
        H.setAttribute("aria-live", I);
      });
  }
  function b(P) {
    (P = V(P)),
      P.forEach((I) => {
        I.setAttribute("aria-disabled", !0);
      });
  }
  function g(P) {
    (P = V(P)),
      P.forEach((I) => {
        I.setAttribute("aria-disabled", !1);
      });
  }
  function y(P) {
    if (P.keyCode !== 13 && P.keyCode !== 32) return;
    const I = e.params.a11y,
      H = P.target;
    if (
      !(
        e.pagination &&
        e.pagination.el &&
        (H === e.pagination.el || e.pagination.el.contains(P.target)) &&
        !P.target.matches(J(e.params.pagination.bulletClass))
      )
    ) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const R = V(e.navigation.prevEl);
        V(e.navigation.nextEl).includes(H) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? n(I.lastSlideMessage) : n(I.nextSlideMessage)),
          R.includes(H) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? n(I.firstSlideMessage) : n(I.prevSlideMessage));
      }
      e.pagination &&
        H.matches(J(e.params.pagination.bulletClass)) &&
        H.click();
    }
  }
  function L() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const { nextEl: P, prevEl: I } = e.navigation;
    I && (e.isBeginning ? (b(I), l(I)) : (g(I), o(I))),
      P && (e.isEnd ? (b(P), l(P)) : (g(P), o(P)));
  }
  function z() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function D() {
    return z() && e.params.pagination.clickable;
  }
  function M() {
    const P = e.params.a11y;
    z() &&
      e.pagination.bullets.forEach((I) => {
        e.params.pagination.clickable &&
          (o(I),
          e.params.pagination.renderBullet ||
            (p(I, "button"),
            v(
              I,
              P.paginationBulletMessage.replace(/\{\{index\}\}/, he(I) + 1)
            ))),
          I.matches(J(e.params.pagination.bulletActiveClass))
            ? I.setAttribute("aria-current", "true")
            : I.removeAttribute("aria-current");
      });
  }
  const S = (P, I, H) => {
      o(P),
        P.tagName !== "BUTTON" &&
          (p(P, "button"), P.addEventListener("keydown", y)),
        v(P, H),
        h(P, I);
    },
    T = (P) => {
      c && c !== P.target && !c.contains(P.target) && (a = !0),
        (e.a11y.clicked = !0);
    },
    A = () => {
      (a = !1),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            e.destroyed || (e.a11y.clicked = !1);
          });
        });
    },
    E = (P) => {
      d = new Date().getTime();
    },
    x = (P) => {
      if (e.a11y.clicked || new Date().getTime() - d < 100) return;
      const I = P.target.closest(`.${e.params.slideClass}, swiper-slide`);
      if (!I || !e.slides.includes(I)) return;
      c = I;
      const H = e.slides.indexOf(I) === e.activeIndex,
        R =
          e.params.watchSlidesProgress &&
          e.visibleSlides &&
          e.visibleSlides.includes(I);
      H ||
        R ||
        (P.sourceCapabilities && P.sourceCapabilities.firesTouchEvents) ||
        (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
        requestAnimationFrame(() => {
          a || (e.slideTo(e.slides.indexOf(I), 0), (a = !1));
        }));
    },
    C = () => {
      const P = e.params.a11y;
      P.itemRoleDescriptionMessage && m(e.slides, P.itemRoleDescriptionMessage),
        P.slideRole && p(e.slides, P.slideRole);
      const I = e.slides.length;
      P.slideLabelMessage &&
        e.slides.forEach((H, R) => {
          const $ = e.params.loop
              ? parseInt(H.getAttribute("data-swiper-slide-index"), 10)
              : R,
            k = P.slideLabelMessage
              .replace(/\{\{index\}\}/, $ + 1)
              .replace(/\{\{slidesLength\}\}/, I);
          v(H, k);
        });
    },
    O = () => {
      const P = e.params.a11y;
      e.el.append(r);
      const I = e.el;
      P.containerRoleDescriptionMessage &&
        m(I, P.containerRoleDescriptionMessage),
        P.containerMessage && v(I, P.containerMessage);
      const H = e.wrapperEl,
        R = P.id || H.getAttribute("id") || `swiper-wrapper-${f(16)}`,
        $ = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      w(H, R), u(H, $), C();
      let { nextEl: k, prevEl: B } = e.navigation ? e.navigation : {};
      (k = V(k)),
        (B = V(B)),
        k && k.forEach((_) => S(_, R, P.nextSlideMessage)),
        B && B.forEach((_) => S(_, R, P.prevSlideMessage)),
        D() &&
          V(e.pagination.el).forEach((X) => {
            X.addEventListener("keydown", y);
          }),
        W().addEventListener("visibilitychange", E),
        e.el.addEventListener("focus", x, !0),
        e.el.addEventListener("focus", x, !0),
        e.el.addEventListener("pointerdown", T, !0),
        e.el.addEventListener("pointerup", A, !0);
    };
  function G() {
    r && r.remove();
    let { nextEl: P, prevEl: I } = e.navigation ? e.navigation : {};
    (P = V(P)),
      (I = V(I)),
      P && P.forEach((R) => R.removeEventListener("keydown", y)),
      I && I.forEach((R) => R.removeEventListener("keydown", y)),
      D() &&
        V(e.pagination.el).forEach(($) => {
          $.removeEventListener("keydown", y);
        }),
      W().removeEventListener("visibilitychange", E),
      e.el.removeEventListener("focus", x, !0),
      e.el.removeEventListener("pointerdown", T, !0),
      e.el.removeEventListener("pointerup", A, !0);
  }
  s("beforeInit", () => {
    (r = K("span", e.params.a11y.notificationClass)),
      r.setAttribute("aria-live", "assertive"),
      r.setAttribute("aria-atomic", "true");
  }),
    s("afterInit", () => {
      e.params.a11y.enabled && O();
    }),
    s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e.params.a11y.enabled && C();
    }),
    s("fromEdge toEdge afterInit lock unlock", () => {
      e.params.a11y.enabled && L();
    }),
    s("paginationUpdate", () => {
      e.params.a11y.enabled && M();
    }),
    s("destroy", () => {
      e.params.a11y.enabled && G();
    });
}
function Ui(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1,
    },
  });
  let r = !1,
    a = {};
  const c = (m) =>
      m
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, ""),
    d = (m) => {
      const h = Y();
      let v;
      m ? (v = new URL(m)) : (v = h.location);
      const w = v.pathname
          .slice(1)
          .split("/")
          .filter((y) => y !== ""),
        u = w.length,
        b = w[u - 2],
        g = w[u - 1];
      return { key: b, value: g };
    },
    n = (m, h) => {
      const v = Y();
      if (!r || !e.params.history.enabled) return;
      let w;
      e.params.url ? (w = new URL(e.params.url)) : (w = v.location);
      const u =
        e.virtual && e.params.virtual.enabled
          ? e.slidesEl.querySelector(`[data-swiper-slide-index="${h}"]`)
          : e.slides[h];
      let b = c(u.getAttribute("data-history"));
      if (e.params.history.root.length > 0) {
        let y = e.params.history.root;
        y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
          (b = `${y}/${m ? `${m}/` : ""}${b}`);
      } else w.pathname.includes(m) || (b = `${m ? `${m}/` : ""}${b}`);
      e.params.history.keepQuery && (b += w.search);
      const g = v.history.state;
      (g && g.value === b) ||
        (e.params.history.replaceState
          ? v.history.replaceState({ value: b }, null, b)
          : v.history.pushState({ value: b }, null, b));
    },
    f = (m, h, v) => {
      if (h)
        for (let w = 0, u = e.slides.length; w < u; w += 1) {
          const b = e.slides[w];
          if (c(b.getAttribute("data-history")) === h) {
            const y = e.getSlideIndex(b);
            e.slideTo(y, m, v);
          }
        }
      else e.slideTo(0, m, v);
    },
    o = () => {
      (a = d(e.params.url)), f(e.params.speed, a.value, !1);
    },
    l = () => {
      const m = Y();
      if (e.params.history) {
        if (!m.history || !m.history.pushState) {
          (e.params.history.enabled = !1),
            (e.params.hashNavigation.enabled = !0);
          return;
        }
        if (((r = !0), (a = d(e.params.url)), !a.key && !a.value)) {
          e.params.history.replaceState || m.addEventListener("popstate", o);
          return;
        }
        f(0, a.value, e.params.runCallbacksOnInit),
          e.params.history.replaceState || m.addEventListener("popstate", o);
      }
    },
    p = () => {
      const m = Y();
      e.params.history.replaceState || m.removeEventListener("popstate", o);
    };
  s("init", () => {
    e.params.history.enabled && l();
  }),
    s("destroy", () => {
      e.params.history.enabled && p();
    }),
    s("transitionEnd _freeModeNoMomentumRelease", () => {
      r && n(e.params.history.key, e.activeIndex);
    }),
    s("slideChange", () => {
      r && e.params.cssMode && n(e.params.history.key, e.activeIndex);
    });
}
function Ki(i) {
  let { swiper: e, extendParams: t, emit: s, on: r } = i,
    a = !1;
  const c = W(),
    d = Y();
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(p, m) {
        if (e.virtual && e.params.virtual.enabled) {
          const h = e.slides.filter(
            (w) => w.getAttribute("data-hash") === m
          )[0];
          return h
            ? parseInt(h.getAttribute("data-swiper-slide-index"), 10)
            : 0;
        }
        return e.getSlideIndex(
          q(
            e.slidesEl,
            `.${e.params.slideClass}[data-hash="${m}"], swiper-slide[data-hash="${m}"]`
          )[0]
        );
      },
    },
  });
  const n = () => {
      s("hashChange");
      const p = c.location.hash.replace("#", ""),
        m =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        h = m ? m.getAttribute("data-hash") : "";
      if (p !== h) {
        const v = e.params.hashNavigation.getSlideIndex(e, p);
        if (typeof v > "u" || Number.isNaN(v)) return;
        e.slideTo(v);
      }
    },
    f = () => {
      if (!a || !e.params.hashNavigation.enabled) return;
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        m = p
          ? p.getAttribute("data-hash") || p.getAttribute("data-history")
          : "";
      e.params.hashNavigation.replaceState &&
      d.history &&
      d.history.replaceState
        ? (d.history.replaceState(null, null, `#${m}` || ""), s("hashSet"))
        : ((c.location.hash = m || ""), s("hashSet"));
    },
    o = () => {
      if (
        !e.params.hashNavigation.enabled ||
        (e.params.history && e.params.history.enabled)
      )
        return;
      a = !0;
      const p = c.location.hash.replace("#", "");
      if (p) {
        const h = e.params.hashNavigation.getSlideIndex(e, p);
        e.slideTo(h || 0, 0, e.params.runCallbacksOnInit, !0);
      }
      e.params.hashNavigation.watchState && d.addEventListener("hashchange", n);
    },
    l = () => {
      e.params.hashNavigation.watchState &&
        d.removeEventListener("hashchange", n);
    };
  r("init", () => {
    e.params.hashNavigation.enabled && o();
  }),
    r("destroy", () => {
      e.params.hashNavigation.enabled && l();
    }),
    r("transitionEnd _freeModeNoMomentumRelease", () => {
      a && f();
    }),
    r("slideChange", () => {
      a && e.params.cssMode && f();
    });
}
function Zi(i) {
  let { swiper: e, extendParams: t, on: s, emit: r, params: a } = i;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let c,
    d,
    n = a && a.autoplay ? a.autoplay.delay : 3e3,
    f = a && a.autoplay ? a.autoplay.delay : 3e3,
    o,
    l = new Date().getTime(),
    p,
    m,
    h,
    v,
    w,
    u,
    b;
  function g(I) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (I.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", g), !b && T()));
  }
  const y = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (p = !0) : p && ((f = o), (p = !1));
      const I = e.autoplay.paused ? o : l + f - new Date().getTime();
      (e.autoplay.timeLeft = I),
        r("autoplayTimeLeft", I, I / n),
        (d = requestAnimationFrame(() => {
          y();
        }));
    },
    L = () => {
      let I;
      return (
        e.virtual && e.params.virtual.enabled
          ? (I = e.slides.filter((R) =>
              R.classList.contains("swiper-slide-active")
            )[0])
          : (I = e.slides[e.activeIndex]),
        I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    z = (I) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(d), y();
      let H = typeof I > "u" ? e.params.autoplay.delay : I;
      (n = e.params.autoplay.delay), (f = e.params.autoplay.delay);
      const R = L();
      !Number.isNaN(R) &&
        R > 0 &&
        typeof I > "u" &&
        ((H = R), (n = R), (f = R)),
        (o = H);
      const $ = e.params.speed,
        k = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev($, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, $, !0, !0), r("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext($, !0, !0), r("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, $, !0, !0), r("autoplay")),
            e.params.cssMode &&
              ((l = new Date().getTime()),
              requestAnimationFrame(() => {
                z();
              })));
        };
      return (
        H > 0
          ? (clearTimeout(c),
            (c = setTimeout(() => {
              k();
            }, H)))
          : requestAnimationFrame(() => {
              k();
            }),
        H
      );
    },
    D = () => {
      (l = new Date().getTime()),
        (e.autoplay.running = !0),
        z(),
        r("autoplayStart");
    },
    M = () => {
      (e.autoplay.running = !1),
        clearTimeout(c),
        cancelAnimationFrame(d),
        r("autoplayStop");
    },
    S = (I, H) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(c), I || (u = !0);
      const R = () => {
        r("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", g)
            : T();
      };
      if (((e.autoplay.paused = !0), H)) {
        w && (o = e.params.autoplay.delay), (w = !1), R();
        return;
      }
      (o = (o || e.params.autoplay.delay) - (new Date().getTime() - l)),
        !(e.isEnd && o < 0 && !e.params.loop) && (o < 0 && (o = 0), R());
    },
    T = () => {
      (e.isEnd && o < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((l = new Date().getTime()),
        u ? ((u = !1), z(o)) : z(),
        (e.autoplay.paused = !1),
        r("autoplayResume"));
    },
    A = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const I = W();
      I.visibilityState === "hidden" && ((u = !0), S(!0)),
        I.visibilityState === "visible" && T();
    },
    E = (I) => {
      I.pointerType === "mouse" &&
        ((u = !0), (b = !0), !(e.animating || e.autoplay.paused) && S(!0));
    },
    x = (I) => {
      I.pointerType === "mouse" && ((b = !1), e.autoplay.paused && T());
    },
    C = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", E),
        e.el.addEventListener("pointerleave", x));
    },
    O = () => {
      e.el.removeEventListener("pointerenter", E),
        e.el.removeEventListener("pointerleave", x);
    },
    G = () => {
      W().addEventListener("visibilitychange", A);
    },
    P = () => {
      W().removeEventListener("visibilitychange", A);
    };
  s("init", () => {
    e.params.autoplay.enabled && (C(), G(), D());
  }),
    s("destroy", () => {
      O(), P(), e.autoplay.running && M();
    }),
    s("_freeModeStaticRelease", () => {
      (h || u) && T();
    }),
    s("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? M() : S(!0, !0);
    }),
    s("beforeTransitionStart", (I, H, R) => {
      e.destroyed ||
        !e.autoplay.running ||
        (R || !e.params.autoplay.disableOnInteraction ? S(!0, !0) : M());
    }),
    s("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          M();
          return;
        }
        (m = !0),
          (h = !1),
          (u = !1),
          (v = setTimeout(() => {
            (u = !0), (h = !0), S(!0);
          }, 200));
      }
    }),
    s("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !m)) {
        if (
          (clearTimeout(v),
          clearTimeout(c),
          e.params.autoplay.disableOnInteraction)
        ) {
          (h = !1), (m = !1);
          return;
        }
        h && e.params.cssMode && T(), (h = !1), (m = !1);
      }
    }),
    s("slideChange", () => {
      e.destroyed || !e.autoplay.running || (w = !0);
    }),
    Object.assign(e.autoplay, { start: D, stop: M, pause: S, resume: T });
}
function Qi(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let r = !1,
    a = !1;
  e.thumbs = { swiper: null };
  function c() {
    const f = e.thumbs.swiper;
    if (!f || f.destroyed) return;
    const o = f.clickedIndex,
      l = f.clickedSlide;
    if (
      (l && l.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof o > "u" ||
      o === null
    )
      return;
    let p;
    f.params.loop
      ? (p = parseInt(
          f.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (p = o),
      e.params.loop ? e.slideToLoop(p) : e.slideTo(p);
  }
  function d() {
    const { thumbs: f } = e.params;
    if (r) return !1;
    r = !0;
    const o = e.constructor;
    if (f.swiper instanceof o)
      (e.thumbs.swiper = f.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    else if (fe(f.swiper)) {
      const l = Object.assign({}, f.swiper);
      Object.assign(l, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new o(l)),
        (a = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", c),
      !0
    );
  }
  function n(f) {
    const o = e.thumbs.swiper;
    if (!o || o.destroyed) return;
    const l =
      o.params.slidesPerView === "auto"
        ? o.slidesPerViewDynamic()
        : o.params.slidesPerView;
    let p = 1;
    const m = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (p = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (p = 1),
      (p = Math.floor(p)),
      o.slides.forEach((w) => w.classList.remove(m)),
      o.params.loop || (o.params.virtual && o.params.virtual.enabled))
    )
      for (let w = 0; w < p; w += 1)
        q(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + w}"]`).forEach(
          (u) => {
            u.classList.add(m);
          }
        );
    else
      for (let w = 0; w < p; w += 1)
        o.slides[e.realIndex + w] && o.slides[e.realIndex + w].classList.add(m);
    const h = e.params.thumbs.autoScrollOffset,
      v = h && !o.params.loop;
    if (e.realIndex !== o.realIndex || v) {
      const w = o.activeIndex;
      let u, b;
      if (o.params.loop) {
        const g = o.slides.filter(
          (y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        )[0];
        (u = o.slides.indexOf(g)),
          (b = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (u = e.realIndex), (b = u > e.previousIndex ? "next" : "prev");
      v && (u += b === "next" ? h : -1 * h),
        o.visibleSlidesIndexes &&
          o.visibleSlidesIndexes.indexOf(u) < 0 &&
          (o.params.centeredSlides
            ? u > w
              ? (u = u - Math.floor(l / 2) + 1)
              : (u = u + Math.floor(l / 2) - 1)
            : u > w && o.params.slidesPerGroup,
          o.slideTo(u, f ? 0 : void 0));
    }
  }
  s("beforeInit", () => {
    const { thumbs: f } = e.params;
    if (!(!f || !f.swiper))
      if (typeof f.swiper == "string" || f.swiper instanceof HTMLElement) {
        const o = W(),
          l = () => {
            const m =
              typeof f.swiper == "string"
                ? o.querySelector(f.swiper)
                : f.swiper;
            if (m && m.swiper) (f.swiper = m.swiper), d(), n(!0);
            else if (m) {
              const h = (v) => {
                (f.swiper = v.detail[0]),
                  m.removeEventListener("init", h),
                  d(),
                  n(!0),
                  f.swiper.update(),
                  e.update();
              };
              m.addEventListener("init", h);
            }
            return m;
          },
          p = () => {
            if (e.destroyed) return;
            l() || requestAnimationFrame(p);
          };
        requestAnimationFrame(p);
      } else d(), n(!0);
  }),
    s("slideChange update resize observerUpdate", () => {
      n();
    }),
    s("setTransition", (f, o) => {
      const l = e.thumbs.swiper;
      !l || l.destroyed || l.setTransition(o);
    }),
    s("beforeDestroy", () => {
      const f = e.thumbs.swiper;
      !f || f.destroyed || (a && f.destroy());
    }),
    Object.assign(e.thumbs, { init: d, update: n });
}
function Ji(i) {
  let { swiper: e, extendParams: t, emit: s, once: r } = i;
  t({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function a() {
    if (e.params.cssMode) return;
    const n = e.getTranslate();
    e.setTranslate(n),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function c() {
    if (e.params.cssMode) return;
    const { touchEventsData: n, touches: f } = e;
    n.velocities.length === 0 &&
      n.velocities.push({
        position: f[e.isHorizontal() ? "startX" : "startY"],
        time: n.touchStartTime,
      }),
      n.velocities.push({
        position: f[e.isHorizontal() ? "currentX" : "currentY"],
        time: Z(),
      });
  }
  function d(n) {
    let { currentPos: f } = n;
    if (e.params.cssMode) return;
    const {
        params: o,
        wrapperEl: l,
        rtlTranslate: p,
        snapGrid: m,
        touchEventsData: h,
      } = e,
      w = Z() - h.touchStartTime;
    if (f < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (f > -e.maxTranslate()) {
      e.slides.length < m.length
        ? e.slideTo(m.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (o.freeMode.momentum) {
      if (h.velocities.length > 1) {
        const M = h.velocities.pop(),
          S = h.velocities.pop(),
          T = M.position - S.position,
          A = M.time - S.time;
        (e.velocity = T / A),
          (e.velocity /= 2),
          Math.abs(e.velocity) < o.freeMode.minimumVelocity && (e.velocity = 0),
          (A > 150 || Z() - M.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= o.freeMode.momentumVelocityRatio),
        (h.velocities.length = 0);
      let u = 1e3 * o.freeMode.momentumRatio;
      const b = e.velocity * u;
      let g = e.translate + b;
      p && (g = -g);
      let y = !1,
        L;
      const z = Math.abs(e.velocity) * 20 * o.freeMode.momentumBounceRatio;
      let D;
      if (g < e.maxTranslate())
        o.freeMode.momentumBounce
          ? (g + e.maxTranslate() < -z && (g = e.maxTranslate() - z),
            (L = e.maxTranslate()),
            (y = !0),
            (h.allowMomentumBounce = !0))
          : (g = e.maxTranslate()),
          o.loop && o.centeredSlides && (D = !0);
      else if (g > e.minTranslate())
        o.freeMode.momentumBounce
          ? (g - e.minTranslate() > z && (g = e.minTranslate() + z),
            (L = e.minTranslate()),
            (y = !0),
            (h.allowMomentumBounce = !0))
          : (g = e.minTranslate()),
          o.loop && o.centeredSlides && (D = !0);
      else if (o.freeMode.sticky) {
        let M;
        for (let S = 0; S < m.length; S += 1)
          if (m[S] > -g) {
            M = S;
            break;
          }
        Math.abs(m[M] - g) < Math.abs(m[M - 1] - g) ||
        e.swipeDirection === "next"
          ? (g = m[M])
          : (g = m[M - 1]),
          (g = -g);
      }
      if (
        (D &&
          r("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (p
            ? (u = Math.abs((-g - e.translate) / e.velocity))
            : (u = Math.abs((g - e.translate) / e.velocity)),
          o.freeMode.sticky)
        ) {
          const M = Math.abs((p ? -g : g) - e.translate),
            S = e.slidesSizesGrid[e.activeIndex];
          M < S
            ? (u = o.speed)
            : M < 2 * S
            ? (u = o.speed * 1.5)
            : (u = o.speed * 2.5);
        }
      } else if (o.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      o.freeMode.momentumBounce && y
        ? (e.updateProgress(L),
          e.setTransition(u),
          e.setTranslate(g),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          me(l, () => {
            !e ||
              e.destroyed ||
              !h.allowMomentumBounce ||
              (s("momentumBounce"),
              e.setTransition(o.speed),
              setTimeout(() => {
                e.setTranslate(L),
                  me(l, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (s("_freeModeNoMomentumRelease"),
          e.updateProgress(g),
          e.setTransition(u),
          e.setTranslate(g),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            me(l, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(g),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (o.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else o.freeMode && s("_freeModeNoMomentumRelease");
    (!o.freeMode.momentum || w >= o.longSwipesMs) &&
      (s("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: a, onTouchMove: c, onTouchEnd: d },
  });
}
function es(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({ grid: { rows: 1, fill: "column" } });
  let r, a, c, d;
  const n = () => {
      let v = e.params.spaceBetween;
      return (
        typeof v == "string" && v.indexOf("%") >= 0
          ? (v = (parseFloat(v.replace("%", "")) / 100) * e.size)
          : typeof v == "string" && (v = parseFloat(v)),
        v
      );
    },
    f = (v) => {
      const { slidesPerView: w } = e.params,
        { rows: u, fill: b } = e.params.grid,
        g =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : v.length;
      (c = Math.floor(g / u)),
        Math.floor(g / u) === g / u ? (r = g) : (r = Math.ceil(g / u) * u),
        w !== "auto" && b === "row" && (r = Math.max(r, w * u)),
        (a = r / u);
    },
    o = () => {
      e.slides &&
        e.slides.forEach((v) => {
          v.swiperSlideGridSet &&
            ((v.style.height = ""),
            (v.style[e.getDirectionLabel("margin-top")] = ""));
        });
    },
    l = (v, w, u) => {
      const { slidesPerGroup: b } = e.params,
        g = n(),
        { rows: y, fill: L } = e.params.grid,
        z =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : u.length;
      let D, M, S;
      if (L === "row" && b > 1) {
        const T = Math.floor(v / (b * y)),
          A = v - y * b * T,
          E = T === 0 ? b : Math.min(Math.ceil((z - T * y * b) / y), b);
        (S = Math.floor(A / E)),
          (M = A - S * E + T * b),
          (D = M + (S * r) / y),
          (w.style.order = D);
      } else
        L === "column"
          ? ((M = Math.floor(v / y)),
            (S = v - M * y),
            (M > c || (M === c && S === y - 1)) &&
              ((S += 1), S >= y && ((S = 0), (M += 1))))
          : ((S = Math.floor(v / a)), (M = v - S * a));
      (w.row = S),
        (w.column = M),
        (w.style.height = `calc((100% - ${(y - 1) * g}px) / ${y})`),
        (w.style[e.getDirectionLabel("margin-top")] =
          S !== 0 ? g && `${g}px` : ""),
        (w.swiperSlideGridSet = !0);
    },
    p = (v, w) => {
      const { centeredSlides: u, roundLengths: b } = e.params,
        g = n(),
        { rows: y } = e.params.grid;
      if (
        ((e.virtualSize = (v + g) * r),
        (e.virtualSize = Math.ceil(e.virtualSize / y) - g),
        e.params.cssMode ||
          (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
            e.virtualSize + g
          }px`),
        u)
      ) {
        const L = [];
        for (let z = 0; z < w.length; z += 1) {
          let D = w[z];
          b && (D = Math.floor(D)), w[z] < e.virtualSize + w[0] && L.push(D);
        }
        w.splice(0, w.length), w.push(...L);
      }
    },
    m = () => {
      d = e.params.grid && e.params.grid.rows > 1;
    },
    h = () => {
      const { params: v, el: w } = e,
        u = v.grid && v.grid.rows > 1;
      d && !u
        ? (w.classList.remove(
            `${v.containerModifierClass}grid`,
            `${v.containerModifierClass}grid-column`
          ),
          (c = 1),
          e.emitContainerClasses())
        : !d &&
          u &&
          (w.classList.add(`${v.containerModifierClass}grid`),
          v.grid.fill === "column" &&
            w.classList.add(`${v.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        (d = u);
    };
  s("init", m),
    s("update", h),
    (e.grid = {
      initSlides: f,
      unsetSlides: o,
      updateSlide: l,
      updateWrapperSize: p,
    });
}
function ts(i) {
  const e = this,
    { params: t, slidesEl: s } = e;
  t.loop && e.loopDestroy();
  const r = (a) => {
    if (typeof a == "string") {
      const c = document.createElement("div");
      (c.innerHTML = a), s.append(c.children[0]), (c.innerHTML = "");
    } else s.append(a);
  };
  if (typeof i == "object" && "length" in i)
    for (let a = 0; a < i.length; a += 1) i[a] && r(i[a]);
  else r(i);
  e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update();
}
function is(i) {
  const e = this,
    { params: t, activeIndex: s, slidesEl: r } = e;
  t.loop && e.loopDestroy();
  let a = s + 1;
  const c = (d) => {
    if (typeof d == "string") {
      const n = document.createElement("div");
      (n.innerHTML = d), r.prepend(n.children[0]), (n.innerHTML = "");
    } else r.prepend(d);
  };
  if (typeof i == "object" && "length" in i) {
    for (let d = 0; d < i.length; d += 1) i[d] && c(i[d]);
    a = s + i.length;
  } else c(i);
  e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update(),
    e.slideTo(a, 0, !1);
}
function ss(i, e) {
  const t = this,
    { params: s, activeIndex: r, slidesEl: a } = t;
  let c = r;
  s.loop && ((c -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
  const d = t.slides.length;
  if (i <= 0) {
    t.prependSlide(e);
    return;
  }
  if (i >= d) {
    t.appendSlide(e);
    return;
  }
  let n = c > i ? c + 1 : c;
  const f = [];
  for (let o = d - 1; o >= i; o -= 1) {
    const l = t.slides[o];
    l.remove(), f.unshift(l);
  }
  if (typeof e == "object" && "length" in e) {
    for (let o = 0; o < e.length; o += 1) e[o] && a.append(e[o]);
    n = c > i ? c + e.length : c;
  } else a.append(e);
  for (let o = 0; o < f.length; o += 1) a.append(f[o]);
  t.recalcSlides(),
    s.loop && t.loopCreate(),
    (!s.observer || t.isElement) && t.update(),
    s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
}
function rs(i) {
  const e = this,
    { params: t, activeIndex: s } = e;
  let r = s;
  t.loop && ((r -= e.loopedSlides), e.loopDestroy());
  let a = r,
    c;
  if (typeof i == "object" && "length" in i) {
    for (let d = 0; d < i.length; d += 1)
      (c = i[d]), e.slides[c] && e.slides[c].remove(), c < a && (a -= 1);
    a = Math.max(a, 0);
  } else
    (c = i),
      e.slides[c] && e.slides[c].remove(),
      c < a && (a -= 1),
      (a = Math.max(a, 0));
  e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update(),
    t.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1);
}
function as() {
  const i = this,
    e = [];
  for (let t = 0; t < i.slides.length; t += 1) e.push(t);
  i.removeSlide(e);
}
function ns(i) {
  let { swiper: e } = i;
  Object.assign(e, {
    appendSlide: ts.bind(e),
    prependSlide: is.bind(e),
    addSlide: ss.bind(e),
    removeSlide: rs.bind(e),
    removeAllSlides: as.bind(e),
  });
}
function de(i) {
  const {
    effect: e,
    swiper: t,
    on: s,
    setTranslate: r,
    setTransition: a,
    overwriteParams: c,
    perspective: d,
    recreateShadows: n,
    getEffectParams: f,
  } = i;
  s("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`),
      d && d() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const l = c ? c() : {};
    Object.assign(t.params, l), Object.assign(t.originalParams, l);
  }),
    s("setTranslate", () => {
      t.params.effect === e && r();
    }),
    s("setTransition", (l, p) => {
      t.params.effect === e && a(p);
    }),
    s("transitionEnd", () => {
      if (t.params.effect === e && n) {
        if (!f || !f().slideShadows) return;
        t.slides.forEach((l) => {
          l.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((p) => p.remove());
        }),
          n();
      }
    });
  let o;
  s("virtualUpdate", () => {
    t.params.effect === e &&
      (t.slides.length || (o = !0),
      requestAnimationFrame(() => {
        o && t.slides && t.slides.length && (r(), (o = !1));
      }));
  });
}
function ge(i, e) {
  const t = ae(e);
  return (
    t !== e &&
      ((t.style.backfaceVisibility = "hidden"),
      (t.style["-webkit-backface-visibility"] = "hidden")),
    t
  );
}
function Me(i) {
  let { swiper: e, duration: t, transformElements: s, allSlides: r } = i;
  const { activeIndex: a } = e,
    c = (d) =>
      d.parentElement
        ? d.parentElement
        : e.slides.filter(
            (f) => f.shadowRoot && f.shadowRoot === d.parentNode
          )[0];
  if (e.params.virtualTranslate && t !== 0) {
    let d = !1,
      n;
    r
      ? (n = s)
      : (n = s.filter((f) => {
          const o = f.classList.contains("swiper-slide-transform") ? c(f) : f;
          return e.getSlideIndex(o) === a;
        })),
      n.forEach((f) => {
        me(f, () => {
          if (d || !e || e.destroyed) return;
          (d = !0), (e.animating = !1);
          const o = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          e.wrapperEl.dispatchEvent(o);
        });
      });
  }
}
function ls(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({ fadeEffect: { crossFade: !1 } }),
    de({
      effect: "fade",
      swiper: e,
      on: s,
      setTranslate: () => {
        const { slides: c } = e,
          d = e.params.fadeEffect;
        for (let n = 0; n < c.length; n += 1) {
          const f = e.slides[n];
          let l = -f.swiperSlideOffset;
          e.params.virtualTranslate || (l -= e.translate);
          let p = 0;
          e.isHorizontal() || ((p = l), (l = 0));
          const m = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(f.progress), 0)
              : 1 + Math.min(Math.max(f.progress, -1), 0),
            h = ge(d, f);
          (h.style.opacity = m),
            (h.style.transform = `translate3d(${l}px, ${p}px, 0px)`);
        }
      },
      setTransition: (c) => {
        const d = e.slides.map((n) => ae(n));
        d.forEach((n) => {
          n.style.transitionDuration = `${c}ms`;
        }),
          Me({ swiper: e, duration: c, transformElements: d, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
function os(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  const r = (n, f, o) => {
    let l = o
        ? n.querySelector(".swiper-slide-shadow-left")
        : n.querySelector(".swiper-slide-shadow-top"),
      p = o
        ? n.querySelector(".swiper-slide-shadow-right")
        : n.querySelector(".swiper-slide-shadow-bottom");
    l ||
      ((l = K(
        "div",
        `swiper-slide-shadow-cube swiper-slide-shadow-${
          o ? "left" : "top"
        }`.split(" ")
      )),
      n.append(l)),
      p ||
        ((p = K(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            o ? "right" : "bottom"
          }`.split(" ")
        )),
        n.append(p)),
      l && (l.style.opacity = Math.max(-f, 0)),
      p && (p.style.opacity = Math.max(f, 0));
  };
  de({
    effect: "cube",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
          el: n,
          wrapperEl: f,
          slides: o,
          width: l,
          height: p,
          rtlTranslate: m,
          size: h,
          browser: v,
        } = e,
        w = e.params.cubeEffect,
        u = e.isHorizontal(),
        b = e.virtual && e.params.virtual.enabled;
      let g = 0,
        y;
      w.shadow &&
        (u
          ? ((y = e.wrapperEl.querySelector(".swiper-cube-shadow")),
            y || ((y = K("div", "swiper-cube-shadow")), e.wrapperEl.append(y)),
            (y.style.height = `${l}px`))
          : ((y = n.querySelector(".swiper-cube-shadow")),
            y || ((y = K("div", "swiper-cube-shadow")), n.append(y))));
      for (let z = 0; z < o.length; z += 1) {
        const D = o[z];
        let M = z;
        b && (M = parseInt(D.getAttribute("data-swiper-slide-index"), 10));
        let S = M * 90,
          T = Math.floor(S / 360);
        m && ((S = -S), (T = Math.floor(-S / 360)));
        const A = Math.max(Math.min(D.progress, 1), -1);
        let E = 0,
          x = 0,
          C = 0;
        M % 4 === 0
          ? ((E = -T * 4 * h), (C = 0))
          : (M - 1) % 4 === 0
          ? ((E = 0), (C = -T * 4 * h))
          : (M - 2) % 4 === 0
          ? ((E = h + T * 4 * h), (C = h))
          : (M - 3) % 4 === 0 && ((E = -h), (C = 3 * h + h * 4 * T)),
          m && (E = -E),
          u || ((x = E), (E = 0));
        const O = `rotateX(${u ? 0 : -S}deg) rotateY(${
          u ? S : 0
        }deg) translate3d(${E}px, ${x}px, ${C}px)`;
        A <= 1 &&
          A > -1 &&
          ((g = M * 90 + A * 90),
          m && (g = -M * 90 - A * 90),
          e.browser &&
            e.browser.need3dFix &&
            (Math.abs(g) / 90) % 2 === 1 &&
            (g += 0.001)),
          (D.style.transform = O),
          w.slideShadows && r(D, A, u);
      }
      if (
        ((f.style.transformOrigin = `50% 50% -${h / 2}px`),
        (f.style["-webkit-transform-origin"] = `50% 50% -${h / 2}px`),
        w.shadow)
      )
        if (u)
          y.style.transform = `translate3d(0px, ${l / 2 + w.shadowOffset}px, ${
            -l / 2
          }px) rotateX(89.99deg) rotateZ(0deg) scale(${w.shadowScale})`;
        else {
          const z = Math.abs(g) - Math.floor(Math.abs(g) / 90) * 90,
            D =
              1.5 -
              (Math.sin((z * 2 * Math.PI) / 360) / 2 +
                Math.cos((z * 2 * Math.PI) / 360) / 2),
            M = w.shadowScale,
            S = w.shadowScale / D,
            T = w.shadowOffset;
          y.style.transform = `scale3d(${M}, 1, ${S}) translate3d(0px, ${
            p / 2 + T
          }px, ${-p / 2 / S}px) rotateX(-89.99deg)`;
        }
      const L =
        (v.isSafari || v.isWebView) && v.needPerspectiveFix ? -h / 2 : 0;
      (f.style.transform = `translate3d(0px,0,${L}px) rotateX(${
        e.isHorizontal() ? 0 : g
      }deg) rotateY(${e.isHorizontal() ? -g : 0}deg)`),
        f.style.setProperty("--swiper-cube-translate-z", `${L}px`);
    },
    setTransition: (n) => {
      const { el: f, slides: o } = e;
      if (
        (o.forEach((l) => {
          (l.style.transitionDuration = `${n}ms`),
            l
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((p) => {
                p.style.transitionDuration = `${n}ms`;
              });
        }),
        e.params.cubeEffect.shadow && !e.isHorizontal())
      ) {
        const l = f.querySelector(".swiper-cube-shadow");
        l && (l.style.transitionDuration = `${n}ms`);
      }
    },
    recreateShadows: () => {
      const n = e.isHorizontal();
      e.slides.forEach((f) => {
        const o = Math.max(Math.min(f.progress, 1), -1);
        r(f, o, n);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0,
    }),
  });
}
function le(i, e, t) {
  const s = `swiper-slide-shadow${t ? `-${t}` : ""}${
      i ? ` swiper-slide-shadow-${i}` : ""
    }`,
    r = ae(e);
  let a = r.querySelector(`.${s.split(" ").join(".")}`);
  return a || ((a = K("div", s.split(" "))), r.append(a)), a;
}
function ds(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
  const r = (n, f) => {
    let o = e.isHorizontal()
        ? n.querySelector(".swiper-slide-shadow-left")
        : n.querySelector(".swiper-slide-shadow-top"),
      l = e.isHorizontal()
        ? n.querySelector(".swiper-slide-shadow-right")
        : n.querySelector(".swiper-slide-shadow-bottom");
    o || (o = le("flip", n, e.isHorizontal() ? "left" : "top")),
      l || (l = le("flip", n, e.isHorizontal() ? "right" : "bottom")),
      o && (o.style.opacity = Math.max(-f, 0)),
      l && (l.style.opacity = Math.max(f, 0));
  };
  de({
    effect: "flip",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: n, rtlTranslate: f } = e,
        o = e.params.flipEffect;
      for (let l = 0; l < n.length; l += 1) {
        const p = n[l];
        let m = p.progress;
        e.params.flipEffect.limitRotation &&
          (m = Math.max(Math.min(p.progress, 1), -1));
        const h = p.swiperSlideOffset;
        let w = -180 * m,
          u = 0,
          b = e.params.cssMode ? -h - e.translate : -h,
          g = 0;
        e.isHorizontal()
          ? f && (w = -w)
          : ((g = b), (b = 0), (u = -w), (w = 0)),
          e.browser &&
            e.browser.need3dFix &&
            ((Math.abs(w) / 90) % 2 === 1 && (w += 0.001),
            (Math.abs(u) / 90) % 2 === 1 && (u += 0.001)),
          (p.style.zIndex = -Math.abs(Math.round(m)) + n.length),
          o.slideShadows && r(p, m);
        const y = `translate3d(${b}px, ${g}px, 0px) rotateX(${u}deg) rotateY(${w}deg)`,
          L = ge(o, p);
        L.style.transform = y;
      }
    },
    setTransition: (n) => {
      const f = e.slides.map((o) => ae(o));
      f.forEach((o) => {
        (o.style.transitionDuration = `${n}ms`),
          o
            .querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .forEach((l) => {
              l.style.transitionDuration = `${n}ms`;
            });
      }),
        Me({ swiper: e, duration: n, transformElements: f });
    },
    recreateShadows: () => {
      e.params.flipEffect,
        e.slides.forEach((n) => {
          let f = n.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(n.progress, 1), -1)),
            r(n, f);
        });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function cs(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    de({
      effect: "coverflow",
      swiper: e,
      on: s,
      setTranslate: () => {
        const { width: c, height: d, slides: n, slidesSizesGrid: f } = e,
          o = e.params.coverflowEffect,
          l = e.isHorizontal(),
          p = e.translate,
          m = l ? -p + c / 2 : -p + d / 2,
          h = l ? o.rotate : -o.rotate,
          v = o.depth;
        for (let w = 0, u = n.length; w < u; w += 1) {
          const b = n[w],
            g = f[w],
            y = b.swiperSlideOffset,
            L = (m - y - g / 2) / g,
            z =
              typeof o.modifier == "function" ? o.modifier(L) : L * o.modifier;
          let D = l ? h * z : 0,
            M = l ? 0 : h * z,
            S = -v * Math.abs(z),
            T = o.stretch;
          typeof T == "string" &&
            T.indexOf("%") !== -1 &&
            (T = (parseFloat(o.stretch) / 100) * g);
          let A = l ? 0 : T * z,
            E = l ? T * z : 0,
            x = 1 - (1 - o.scale) * Math.abs(z);
          Math.abs(E) < 0.001 && (E = 0),
            Math.abs(A) < 0.001 && (A = 0),
            Math.abs(S) < 0.001 && (S = 0),
            Math.abs(D) < 0.001 && (D = 0),
            Math.abs(M) < 0.001 && (M = 0),
            Math.abs(x) < 0.001 && (x = 0),
            e.browser &&
              e.browser.need3dFix &&
              ((Math.abs(D) / 90) % 2 === 1 && (D += 0.001),
              (Math.abs(M) / 90) % 2 === 1 && (M += 0.001));
          const C = `translate3d(${E}px,${A}px,${S}px)  rotateX(${M}deg) rotateY(${D}deg) scale(${x})`,
            O = ge(o, b);
          if (
            ((O.style.transform = C),
            (b.style.zIndex = -Math.abs(Math.round(z)) + 1),
            o.slideShadows)
          ) {
            let G = l
                ? b.querySelector(".swiper-slide-shadow-left")
                : b.querySelector(".swiper-slide-shadow-top"),
              P = l
                ? b.querySelector(".swiper-slide-shadow-right")
                : b.querySelector(".swiper-slide-shadow-bottom");
            G || (G = le("coverflow", b, l ? "left" : "top")),
              P || (P = le("coverflow", b, l ? "right" : "bottom")),
              G && (G.style.opacity = z > 0 ? z : 0),
              P && (P.style.opacity = -z > 0 ? -z : 0);
          }
        }
      },
      setTransition: (c) => {
        e.slides
          .map((n) => ae(n))
          .forEach((n) => {
            (n.style.transitionDuration = `${c}ms`),
              n
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((f) => {
                  f.style.transitionDuration = `${c}ms`;
                });
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
function ps(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
    },
  });
  const r = (d) => (typeof d == "string" ? d : `${d}px`);
  de({
    effect: "creative",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: d, wrapperEl: n, slidesSizesGrid: f } = e,
        o = e.params.creativeEffect,
        { progressMultiplier: l } = o,
        p = e.params.centeredSlides;
      if (p) {
        const m = f[0] / 2 - e.params.slidesOffsetBefore || 0;
        n.style.transform = `translateX(calc(50% - ${m}px))`;
      }
      for (let m = 0; m < d.length; m += 1) {
        const h = d[m],
          v = h.progress,
          w = Math.min(Math.max(h.progress, -o.limitProgress), o.limitProgress);
        let u = w;
        p ||
          (u = Math.min(
            Math.max(h.originalProgress, -o.limitProgress),
            o.limitProgress
          ));
        const b = h.swiperSlideOffset,
          g = [e.params.cssMode ? -b - e.translate : -b, 0, 0],
          y = [0, 0, 0];
        let L = !1;
        e.isHorizontal() || ((g[1] = g[0]), (g[0] = 0));
        let z = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        w < 0 ? ((z = o.next), (L = !0)) : w > 0 && ((z = o.prev), (L = !0)),
          g.forEach((x, C) => {
            g[C] = `calc(${x}px + (${r(z.translate[C])} * ${Math.abs(w * l)}))`;
          }),
          y.forEach((x, C) => {
            let O = z.rotate[C] * Math.abs(w * l);
            e.browser &&
              e.browser.need3dFix &&
              (Math.abs(O) / 90) % 2 === 1 &&
              (O += 0.001),
              (y[C] = O);
          }),
          (h.style.zIndex = -Math.abs(Math.round(v)) + d.length);
        const D = g.join(", "),
          M = `rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,
          S =
            u < 0
              ? `scale(${1 + (1 - z.scale) * u * l})`
              : `scale(${1 - (1 - z.scale) * u * l})`,
          T = u < 0 ? 1 + (1 - z.opacity) * u * l : 1 - (1 - z.opacity) * u * l,
          A = `translate3d(${D}) ${M} ${S}`;
        if ((L && z.shadow) || !L) {
          let x = h.querySelector(".swiper-slide-shadow");
          if ((!x && z.shadow && (x = le("creative", h)), x)) {
            const C = o.shadowPerProgress ? w * (1 / o.limitProgress) : w;
            x.style.opacity = Math.min(Math.max(Math.abs(C), 0), 1);
          }
        }
        const E = ge(o, h);
        (E.style.transform = A),
          (E.style.opacity = T),
          z.origin && (E.style.transformOrigin = z.origin);
      }
    },
    setTransition: (d) => {
      const n = e.slides.map((f) => ae(f));
      n.forEach((f) => {
        (f.style.transitionDuration = `${d}ms`),
          f.querySelectorAll(".swiper-slide-shadow").forEach((o) => {
            o.style.transitionDuration = `${d}ms`;
          });
      }),
        Me({ swiper: e, duration: d, transformElements: n, allSlides: !0 });
    },
    perspective: () => e.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function fs(i) {
  let { swiper: e, extendParams: t, on: s } = i;
  t({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    de({
      effect: "cards",
      swiper: e,
      on: s,
      setTranslate: () => {
        const { slides: c, activeIndex: d, rtlTranslate: n } = e,
          f = e.params.cardsEffect,
          { startTranslate: o, isTouched: l } = e.touchEventsData,
          p = n ? -e.translate : e.translate;
        for (let m = 0; m < c.length; m += 1) {
          const h = c[m],
            v = h.progress,
            w = Math.min(Math.max(v, -4), 4);
          let u = h.swiperSlideOffset;
          e.params.centeredSlides &&
            !e.params.cssMode &&
            (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
            e.params.centeredSlides &&
              e.params.cssMode &&
              (u -= c[0].swiperSlideOffset);
          let b = e.params.cssMode ? -u - e.translate : -u,
            g = 0;
          const y = -100 * Math.abs(w);
          let L = 1,
            z = -f.perSlideRotate * w,
            D = f.perSlideOffset - Math.abs(w) * 0.75;
          const M =
              e.virtual && e.params.virtual.enabled ? e.virtual.from + m : m,
            S =
              (M === d || M === d - 1) &&
              w > 0 &&
              w < 1 &&
              (l || e.params.cssMode) &&
              p < o,
            T =
              (M === d || M === d + 1) &&
              w < 0 &&
              w > -1 &&
              (l || e.params.cssMode) &&
              p > o;
          if (S || T) {
            const C = (1 - Math.abs((Math.abs(w) - 0.5) / 0.5)) ** 0.5;
            (z += -28 * w * C),
              (L += -0.5 * C),
              (D += 96 * C),
              (g = `${-25 * C * Math.abs(w)}%`);
          }
          if (
            (w < 0
              ? (b = `calc(${b}px ${n ? "-" : "+"} (${D * Math.abs(w)}%))`)
              : w > 0
              ? (b = `calc(${b}px ${n ? "-" : "+"} (-${D * Math.abs(w)}%))`)
              : (b = `${b}px`),
            !e.isHorizontal())
          ) {
            const C = g;
            (g = b), (b = C);
          }
          const A = w < 0 ? `${1 + (1 - L) * w}` : `${1 - (1 - L) * w}`,
            E = `
        translate3d(${b}, ${g}, ${y}px)
        rotateZ(${f.rotate ? (n ? -z : z) : 0}deg)
        scale(${A})
      `;
          if (f.slideShadows) {
            let C = h.querySelector(".swiper-slide-shadow");
            C || (C = le("cards", h)),
              C &&
                (C.style.opacity = Math.min(
                  Math.max((Math.abs(w) - 0.5) / 0.5, 0),
                  1
                ));
          }
          h.style.zIndex = -Math.abs(Math.round(v)) + c.length;
          const x = ge(f, h);
          x.style.transform = E;
        }
      },
      setTransition: (c) => {
        const d = e.slides.map((n) => ae(n));
        d.forEach((n) => {
          (n.style.transitionDuration = `${c}ms`),
            n.querySelectorAll(".swiper-slide-shadow").forEach((f) => {
              f.style.transitionDuration = `${c}ms`;
            });
        }),
          Me({ swiper: e, duration: c, transformElements: d });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
const us = [
  _i,
  Ri,
  Vi,
  Xi,
  Ni,
  Yi,
  Fi,
  qi,
  Wi,
  ji,
  Ui,
  Ki,
  Zi,
  Qi,
  Ji,
  es,
  ns,
  ls,
  os,
  ds,
  cs,
  ps,
  fs,
];
F.use(us);
const Ce = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function oe(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object" &&
    !i.__swiper__
  );
}
function Ye(i, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((s) => t.indexOf(s) < 0)
    .forEach((s) => {
      typeof i[s] > "u"
        ? (i[s] = e[s])
        : oe(e[s]) && oe(i[s]) && Object.keys(e[s]).length > 0
        ? e[s].__swiper__
          ? (i[s] = e[s])
          : Ye(i[s], e[s])
        : (i[s] = e[s]);
    });
}
function ms(i) {
  return (
    i === void 0 && (i = {}),
    i.navigation &&
      typeof i.navigation.nextEl > "u" &&
      typeof i.navigation.prevEl > "u"
  );
}
function hs(i) {
  return i === void 0 && (i = {}), i.pagination && typeof i.pagination.el > "u";
}
function gs(i) {
  return i === void 0 && (i = {}), i.scrollbar && typeof i.scrollbar.el > "u";
}
function Se(i) {
  return (
    i === void 0 && (i = ""),
    i.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""))
  );
}
function ws(i) {
  let {
    swiper: e,
    slides: t,
    passedParams: s,
    changedParams: r,
    nextEl: a,
    prevEl: c,
    scrollbarEl: d,
    paginationEl: n,
  } = i;
  const f = r.filter(
      (S) => S !== "children" && S !== "direction" && S !== "wrapperClass"
    ),
    {
      params: o,
      pagination: l,
      navigation: p,
      scrollbar: m,
      virtual: h,
      thumbs: v,
    } = e;
  let w, u, b, g, y, L, z, D;
  r.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    o.thumbs &&
    !o.thumbs.swiper &&
    (w = !0),
    r.includes("controller") &&
      s.controller &&
      s.controller.control &&
      o.controller &&
      !o.controller.control &&
      (u = !0),
    r.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || n) &&
      (o.pagination || o.pagination === !1) &&
      l &&
      !l.el &&
      (b = !0),
    r.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || d) &&
      (o.scrollbar || o.scrollbar === !1) &&
      m &&
      !m.el &&
      (g = !0),
    r.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || c) &&
      (s.navigation.nextEl || a) &&
      (o.navigation || o.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (y = !0);
  const M = (S) => {
    e[S] &&
      (e[S].destroy(),
      S === "navigation"
        ? (e.isElement && (e[S].prevEl.remove(), e[S].nextEl.remove()),
          (o[S].prevEl = void 0),
          (o[S].nextEl = void 0),
          (e[S].prevEl = void 0),
          (e[S].nextEl = void 0))
        : (e.isElement && e[S].el.remove(),
          (o[S].el = void 0),
          (e[S].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (o.loop && !s.loop ? (L = !0) : !o.loop && s.loop ? (z = !0) : (D = !0)),
    f.forEach((S) => {
      if (oe(o[S]) && oe(s[S]))
        Object.assign(o[S], s[S]),
          (S === "navigation" || S === "pagination" || S === "scrollbar") &&
            "enabled" in s[S] &&
            !s[S].enabled &&
            M(S);
      else {
        const T = s[S];
        (T === !0 || T === !1) &&
        (S === "navigation" || S === "pagination" || S === "scrollbar")
          ? T === !1 && M(S)
          : (o[S] = s[S]);
      }
    }),
    f.includes("controller") &&
      !u &&
      e.controller &&
      e.controller.control &&
      o.controller &&
      o.controller.control &&
      (e.controller.control = o.controller.control),
    r.includes("children") && t && h && o.virtual.enabled
      ? ((h.slides = t), h.update(!0))
      : r.includes("virtual") &&
        h &&
        o.virtual.enabled &&
        (t && (h.slides = t), h.update(!0)),
    r.includes("children") && t && o.loop && (D = !0),
    w && v.init() && v.update(!0),
    u && (e.controller.control = o.controller.control),
    b &&
      (e.isElement &&
        (!n || typeof n == "string") &&
        ((n = document.createElement("div")),
        n.classList.add("swiper-pagination"),
        n.part.add("pagination"),
        e.el.appendChild(n)),
      n && (o.pagination.el = n),
      l.init(),
      l.render(),
      l.update()),
    g &&
      (e.isElement &&
        (!d || typeof d == "string") &&
        ((d = document.createElement("div")),
        d.classList.add("swiper-scrollbar"),
        d.part.add("scrollbar"),
        e.el.appendChild(d)),
      d && (o.scrollbar.el = d),
      m.init(),
      m.updateSize(),
      m.setTranslate()),
    y &&
      (e.isElement &&
        ((!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-next"),
          (a.innerHTML = e.hostEl.constructor.nextButtonSvg),
          a.part.add("button-next"),
          e.el.appendChild(a)),
        (!c || typeof c == "string") &&
          ((c = document.createElement("div")),
          c.classList.add("swiper-button-prev"),
          (c.innerHTML = e.hostEl.constructor.prevButtonSvg),
          c.part.add("button-prev"),
          e.el.appendChild(c))),
      a && (o.navigation.nextEl = a),
      c && (o.navigation.prevEl = c),
      p.init(),
      p.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
    r.includes("direction") && e.changeDirection(s.direction, !1),
    (L || D) && e.loopDestroy(),
    (z || D) && e.loopCreate(),
    e.update();
}
const rt = (i) => {
    if (parseFloat(i) === Number(i)) return Number(i);
    if (i === "true" || i === "") return !0;
    if (i === "false") return !1;
    if (i === "null") return null;
    if (i !== "undefined") {
      if (
        typeof i == "string" &&
        i.includes("{") &&
        i.includes("}") &&
        i.includes('"')
      ) {
        let e;
        try {
          e = JSON.parse(i);
        } catch {
          e = i;
        }
        return e;
      }
      return i;
    }
  },
  at = [
    "a11y",
    "autoplay",
    "controller",
    "cards-effect",
    "coverflow-effect",
    "creative-effect",
    "cube-effect",
    "fade-effect",
    "flip-effect",
    "free-mode",
    "grid",
    "hash-navigation",
    "history",
    "keyboard",
    "mousewheel",
    "navigation",
    "pagination",
    "parallax",
    "scrollbar",
    "thumbs",
    "virtual",
    "zoom",
  ];
function nt(i, e, t) {
  const s = {},
    r = {};
  Ye(s, Ne);
  const a = [...Ce, "on"],
    c = a.map((n) => n.replace(/_/, ""));
  a.forEach((n) => {
    (n = n.replace("_", "")), typeof i[n] < "u" && (r[n] = i[n]);
  });
  const d = [...i.attributes];
  return (
    typeof e == "string" &&
      typeof t < "u" &&
      d.push({ name: e, value: oe(t) ? { ...t } : t }),
    d.forEach((n) => {
      const f = at.filter((o) => n.name.indexOf(`${o}-`) === 0)[0];
      if (f) {
        const o = Se(f),
          l = Se(n.name.split(`${f}-`)[1]);
        typeof r[o] > "u" && (r[o] = {}),
          r[o] === !0 && (r[o] = { enabled: !0 }),
          (r[o][l] = rt(n.value));
      } else {
        const o = Se(n.name);
        if (!c.includes(o)) return;
        const l = rt(n.value);
        r[o] && at.includes(n.name) && !oe(l)
          ? (r[o].constructor !== Object && (r[o] = {}), (r[o].enabled = !!l))
          : (r[o] = l);
      }
    }),
    Ye(s, r),
    s.navigation
      ? (s.navigation = {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          ...(s.navigation !== !0 ? s.navigation : {}),
        })
      : s.navigation === !1 && delete s.navigation,
    s.scrollbar
      ? (s.scrollbar = {
          el: ".swiper-scrollbar",
          ...(s.scrollbar !== !0 ? s.scrollbar : {}),
        })
      : s.scrollbar === !1 && delete s.scrollbar,
    s.pagination
      ? (s.pagination = {
          el: ".swiper-pagination",
          ...(s.pagination !== !0 ? s.pagination : {}),
        })
      : s.pagination === !1 && delete s.pagination,
    { params: s, passedParams: r }
  );
}
const vs =
    ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",
  bs =
    "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class ys {}
const bt = typeof window > "u" || typeof HTMLElement > "u" ? ys : HTMLElement,
  lt = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,
  yt = (i, e) => {
    if (typeof CSSStyleSheet < "u" && i.adoptedStyleSheets) {
      const t = new CSSStyleSheet();
      t.replaceSync(e), (i.adoptedStyleSheets = [t]);
    } else {
      const t = document.createElement("style");
      (t.rel = "stylesheet"), (t.textContent = e), i.appendChild(t);
    }
  };
class St extends bt {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get nextButtonSvg() {
    return lt;
  }
  static get prevButtonSvg() {
    return lt.replace(
      "/></svg>",
      ' transform-origin="center" transform="rotate(180)"/></svg>'
    );
  }
  cssStyles() {
    return [
      vs,
      ...(this.injectStyles && Array.isArray(this.injectStyles)
        ? this.injectStyles
        : []),
    ].join(`
`);
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    const e = this.slideSlots || 0,
      t = [...this.querySelectorAll("[slot^=slide-]")].map((s) =>
        parseInt(s.getAttribute("slot").split("slide-")[1], 10)
      );
    if (
      ((this.slideSlots = t.length ? Math.max(...t) + 1 : 0), !!this.rendered)
    ) {
      if (this.slideSlots > e)
        for (let s = e; s < this.slideSlots; s += 1) {
          const r = document.createElement("swiper-slide");
          r.setAttribute("part", `slide slide-${s + 1}`);
          const a = document.createElement("slot");
          a.setAttribute("name", `slide-${s + 1}`),
            r.appendChild(a),
            this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r);
        }
      else if (this.slideSlots < e) {
        const s = this.swiper.slides;
        for (let r = s.length - 1; r >= 0; r -= 1)
          r > this.slideSlots && s[r].remove();
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let e = this.cssStyles();
    this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")),
      e.length && yt(this.shadowRoot, e),
      this.cssLinks().forEach((s) => {
        if (this.shadowRoot.querySelector(`link[href="${s}"]`)) return;
        const a = document.createElement("link");
        (a.rel = "stylesheet"), (a.href = s), this.shadowRoot.appendChild(a);
      });
    const t = document.createElement("div");
    t.classList.add("swiper"),
      (t.part = "container"),
      (t.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({ length: this.slideSlots })
          .map(
            (s, r) => `
        <swiper-slide part="slide slide-${r}">
          <slot name="slide-${r}"></slot>
        </swiper-slide>
        `
          )
          .join("")}
      </div>
      <slot name="container-end"></slot>
      ${
        ms(this.passedParams)
          ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `
          : ""
      }
      ${
        hs(this.passedParams)
          ? `
        <div part="pagination" class="swiper-pagination"></div>
      `
          : ""
      }
      ${
        gs(this.passedParams)
          ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `
          : ""
      }
    `),
      this.shadowRoot.appendChild(t),
      (this.rendered = !0);
  }
  initialize() {
    var e = this;
    if (this.initialized) return;
    this.initialized = !0;
    const { params: t, passedParams: s } = nt(this);
    (this.swiperParams = t),
      (this.passedParams = s),
      delete this.swiperParams.init,
      this.render(),
      (this.swiper = new F(this.shadowRoot.querySelector(".swiper"), {
        ...(t.virtual
          ? {}
          : { observer: !0, observeSlideChildren: this.slideSlots > 0 }),
        ...t,
        touchEventsTarget: "container",
        onAny: function (r) {
          r === "observerUpdate" && e.calcSlideSlots();
          const a = t.eventsPrefix
            ? `${t.eventsPrefix}${r.toLowerCase()}`
            : r.toLowerCase();
          for (
            var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), n = 1;
            n < c;
            n++
          )
            d[n - 1] = arguments[n];
          const f = new CustomEvent(a, {
            detail: d,
            bubbles: r !== "hashChange",
            cancelable: !0,
          });
          e.dispatchEvent(f);
        },
      }));
  }
  connectedCallback() {
    (this.initialized &&
      this.nested &&
      this.closest("swiper-slide") &&
      this.closest("swiper-slide").swiperLoopMoveDOM) ||
      this.init === !1 ||
      this.getAttribute("init") === "false" ||
      this.initialize();
  }
  disconnectedCallback() {
    (this.nested &&
      this.closest("swiper-slide") &&
      this.closest("swiper-slide").swiperLoopMoveDOM) ||
      (this.swiper && this.swiper.destroy && this.swiper.destroy(),
      (this.initialized = !1));
  }
  updateSwiperOnPropChange(e, t) {
    const { params: s, passedParams: r } = nt(this, e, t);
    (this.passedParams = r),
      (this.swiperParams = s),
      !(this.swiper && this.swiper.params[e] === t) &&
        ws({
          swiper: this.swiper,
          passedParams: this.passedParams,
          changedParams: [Se(e)],
          ...(e === "navigation" && r[e]
            ? { prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }
            : {}),
          ...(e === "pagination" && r[e]
            ? { paginationEl: ".swiper-pagination" }
            : {}),
          ...(e === "scrollbar" && r[e]
            ? { scrollbarEl: ".swiper-scrollbar" }
            : {}),
        });
  }
  attributeChangedCallback(e, t, s) {
    this.initialized &&
      (t === "true" && s === null && (s = !1),
      this.updateSwiperOnPropChange(e, s));
  }
  static get observedAttributes() {
    return Ce.filter((t) => t.includes("_")).map((t) =>
      t
        .replace(/[A-Z]/g, (s) => `-${s}`)
        .replace("_", "")
        .toLowerCase()
    );
  }
}
Ce.forEach((i) => {
  i !== "init" &&
    ((i = i.replace("_", "")),
    Object.defineProperty(St.prototype, i, {
      configurable: !0,
      get() {
        return (this.passedParams || {})[i];
      },
      set(e) {
        this.passedParams || (this.passedParams = {}),
          (this.passedParams[i] = e),
          this.initialized && this.updateSwiperOnPropChange(i, e);
      },
    }));
});
class Ss extends bt {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  render() {
    const e =
      this.lazy ||
      this.getAttribute("lazy") === "" ||
      this.getAttribute("lazy") === "true";
    if (
      (yt(this.shadowRoot, bs),
      this.shadowRoot.appendChild(document.createElement("slot")),
      e)
    ) {
      const t = document.createElement("div");
      t.classList.add("swiper-lazy-preloader"),
        t.part.add("preloader"),
        this.shadowRoot.appendChild(t);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    this.initialize();
  }
}
const Pe = () => {
  typeof window > "u" ||
    (window.customElements.get("swiper-container") ||
      window.customElements.define("swiper-container", St),
    window.customElements.get("swiper-slide") ||
      window.customElements.define("swiper-slide", Ss));
};
typeof window < "u" &&
  (window.SwiperElementRegisterParams = (i) => {
    Ce.push(...i);
  });
Pe();
new F("#KataSlider", {
  loop: !0,
  autoplay: { delay: 5e3 },
  slidesPerView: 1,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 20 },
  },
});
Pe();
new F("#Harga", {
  loop: !1,
  autoplay: !1,
  slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  },
});
Pe();
new F("#KatalogSlider", {
  grid: { rows: 2, fill: "row" },
  loop: !0,
  autoplay: { delay: 5e3 },
  slidesPerView: 1,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: { rows: 2, fill: "row" },
    },
  },
});
Pe();
new F("#ProjectSlider", {
  loop: !0,
  autoplay: { delay: 1e3, disableOnInteraction: !1 },
});
