(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [793],
  {
    3333: function (e, t, r) {
      "use strict";
      r.d(t, {
        iP: function () {
          return f;
        },
      });
      var n = r(2265),
        o = (e) => {
          let t = n.useRef(e);
          return (
            n.useEffect(() => {
              t.current = e;
            }),
            t
          );
        };
      let i = (e, t = 100, r = !1) => {
          let i = o(e),
            a = n.useRef(),
            l = [t, r, i];
          function s() {
            a.current && clearTimeout(a.current), (a.current = void 0);
          }
          function c() {
            a.current = void 0;
          }
          return (
            n.useEffect(() => s, l),
            n.useCallback(function () {
              let e = arguments,
                { current: n } = a;
              if (void 0 === n && r)
                return (a.current = setTimeout(c, t)), i.current.apply(null, e);
              n && clearTimeout(n),
                (a.current = setTimeout(() => {
                  (a.current = void 0), i.current.apply(null, e);
                }, t));
            }, l)
          );
        },
        a = (e, t, r) => {
          let o = n.useState(e);
          return [o[0], i(o[1], t, r)];
        };
      var l = function (e, t, r, o) {
        let i = n.useRef(r),
          a = n.useRef(o);
        n.useEffect(() => {
          (i.current = r), (a.current = o);
        }),
          n.useEffect(() => {
            let r = e && "current" in e ? e.current : e;
            if (!r) return;
            let n = 0;
            function o(...e) {
              n || i.current.apply(this, e);
            }
            r.addEventListener(t, o);
            let l = a.current;
            return () => {
              (n = 1), r.removeEventListener(t, o), l && l();
            };
          }, [e, t]);
      };
      let s = {},
        c = "undefined" == typeof window ? null : window,
        u = c && void 0 !== c.visualViewport ? c.visualViewport : null,
        d = () => [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
        ],
        f = function (e) {
          void 0 === e && (e = s);
          let {
              wait: t,
              leading: r,
              initialWidth: n = 0,
              initialHeight: o = 0,
            } = e,
            [i, f] = a("undefined" == typeof document ? [n, o] : d, t, r),
            p = () => f(d);
          return (
            l(c, "resize", p),
            l(u, "resize", p),
            l(c, "orientationchange", p),
            i
          );
        };
    },
    7544: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(2265),
        o = r(7715),
        i = n && "object" == typeof n && "default" in n ? n : { default: n },
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function l(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        }
        return r;
      }
      function s() {
        return Math.min(
          Math.max(
            1,
            "undefined" != typeof window &&
              "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1
          ),
          3
        );
      }
      "function" == typeof SuppressedError && SuppressedError;
      var c = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        u = globalThis.ResizeObserver || c,
        d = void 0 !== globalThis.ResizeObserver,
        f = !d,
        p = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function b(e) {
        return Object.assign({}, p, e);
      }
      function h(e) {
        var t,
          r,
          o,
          i,
          a,
          l,
          c,
          p,
          h,
          v,
          m,
          g = e.riveLoaded,
          y = void 0 !== g && g,
          w = e.canvasElem,
          x = e.containerRef,
          k = e.options,
          C = e.onCanvasHasResized,
          R = e.artboardBounds,
          z = b(void 0 === k ? {} : k),
          E = n.useState({ height: 0, width: 0 }),
          j = E[0],
          O = j.height,
          S = j.width,
          T = E[1],
          P = n.useState({ height: 0, width: 0 }),
          M = P[0],
          L = M.height,
          I = M.width,
          N = P[1],
          H = n.useState(!0),
          G = H[0],
          W = H[1],
          $ = z.fitCanvasToArtboardHeight,
          _ = z.shouldResizeCanvasToContainer,
          A = z.useDevicePixelRatio,
          D = z.customDevicePixelRatio,
          F =
            (void 0 === (t = _) && (t = !0),
            (o = (r = n.useState({ width: 0, height: 0 }))[0]),
            (i = r[1]),
            n.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  i({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  f && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (c = n.useRef(
              new u(
                ((a = function (e) {
                  d &&
                    i({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (l = 0),
                function () {
                  for (var e = this, t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  clearTimeout(l),
                    (l = window.setTimeout(function () {
                      return a.apply(e, t);
                    }, 0));
                })
              )
            )),
            n.useEffect(
              function () {
                var e = c.current;
                if (t) {
                  var r = x.current;
                  return (
                    x.current && d && e.observe(x.current),
                    function () {
                      e.disconnect(), r && d && e.unobserve(r);
                    }
                  );
                }
                e.disconnect();
              },
              [x, c]
            ),
            o),
          B =
            ((p = D || s()),
            (v = (h = n.useState(p))[0]),
            (m = h[1]),
            n.useEffect(
              function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                  var e = function () {
                      m(D || s());
                    },
                    t = window.matchMedia(
                      "screen and (resolution: ".concat(v, "dppx)")
                    );
                  return (
                    t.hasOwnProperty("addEventListener")
                      ? t.addEventListener("change", e)
                      : t.addListener(e),
                    function () {
                      t.hasOwnProperty("removeEventListener")
                        ? t.removeEventListener("change", e)
                        : t.removeListener(e);
                    }
                  );
                }
              },
              [v, D]
            ),
            v),
          U = null != R ? R : {},
          q = U.maxX,
          V = U.maxY,
          X = n.useCallback(
            function () {
              var e,
                t,
                r,
                n,
                o =
                  null !==
                    (t =
                      null === (e = x.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                i =
                  null !==
                    (n =
                      null === (r = x.current) || void 0 === r
                        ? void 0
                        : r.clientHeight) && void 0 !== n
                    ? n
                    : 0;
              return $ && R
                ? { width: o, height: (R.maxY / R.maxX) * o }
                : { width: o, height: i };
            },
            [x, $, q, V]
          );
        n.useEffect(
          function () {
            if (_ && x.current && y) {
              var e = X(),
                t = e.width,
                r = e.height,
                n = !1;
              if (w) {
                var o = t !== S || r !== O;
                if (
                  (z.fitCanvasToArtboardHeight &&
                    o &&
                    ((x.current.style.height = r + "px"), (n = !0)),
                  z.useDevicePixelRatio)
                ) {
                  if (o || t * B !== I || r * B !== L) {
                    var i = B * t,
                      a = B * r;
                    (w.width = i),
                      (w.height = a),
                      (w.style.width = t + "px"),
                      (w.style.height = r + "px"),
                      N({ width: i, height: a }),
                      (n = !0);
                  }
                } else
                  o &&
                    ((w.width = t),
                    (w.height = r),
                    N({ width: t, height: r }),
                    (n = !0));
                T({ width: t, height: r });
              }
              C && (G || n) && C && C(), G && W(!1);
            }
          },
          [w, x, F, B, X, G, W, L, I, O, S, C, _, $, A, y]
        ),
          n.useEffect(
            function () {
              N({ width: 0, height: 0 });
            },
            [w]
          );
      }
      var v,
        m = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        g = globalThis.IntersectionObserver || m,
        y = (function () {
          function e() {
            var e = this;
            (this.elementsMap = new Map()),
              (this.onObserved = function (t) {
                t.forEach(function (t) {
                  var r = e.elementsMap.get(t.target);
                  r && r(t);
                });
              }),
              (this.observer = new g(this.onObserved));
          }
          return (
            (e.prototype.registerCallback = function (e, t) {
              this.observer.observe(e), this.elementsMap.set(e, t);
            }),
            (e.prototype.removeCallback = function (e) {
              this.observer.unobserve(e), this.elementsMap.delete(e);
            }),
            e
          );
        })(),
        w = function () {
          return v || (v = new y()), v;
        };
      function x(e) {
        var t = e.setContainerRef,
          r = e.setCanvasRef,
          n = e.className,
          o = void 0 === n ? "" : n,
          s = e.style,
          c = e.children,
          u = l(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          d = a({ width: "100%", height: "100%" }, s);
        return i.default.createElement(
          "div",
          a({ ref: t, className: o }, !o && { style: d }),
          i.default.createElement(
            "canvas",
            a(
              { ref: r, style: { verticalAlign: "top", width: 0, height: 0 } },
              u
            ),
            c
          )
        );
      }
      function k(e, t) {
        void 0 === t && (t = {});
        var r = n.useState(null),
          l = r[0],
          s = r[1],
          c = n.useRef(null),
          u = n.useState(null),
          d = u[0],
          f = u[1],
          p = b(t),
          v = n.useCallback(
            function () {
              d && (d.startRendering(), d.resizeToCanvas());
            },
            [d]
          );
        h({
          riveLoaded: !!d,
          canvasElem: l,
          containerRef: c,
          options: p,
          onCanvasHasResized: v,
          artboardBounds: null == d ? void 0 : d.bounds,
        });
        var m = n.useCallback(function (e) {
          null === e && l && ((l.height = 0), (l.width = 0)), s(e);
        }, []);
        n.useEffect(
          function () {
            if (l && e && null == d) {
              var t = p.useOffscreenRenderer,
                r = new o.Rive(
                  a(a({ useOffscreenRenderer: t }, e), { canvas: l })
                );
              r.on(o.EventType.Load, function () {
                l ? f(r) : r.cleanup();
              });
            }
          },
          [l, !!e, d]
        );
        var g = n.useCallback(function (e) {
            c.current = e;
          }, []),
          y = {
            observe: n.useCallback(function (e, t) {
              w().registerCallback(e, t);
            }, []),
            unobserve: n.useCallback(function (e) {
              w().removeCallback(e);
            }, []),
          },
          k = y.observe,
          C = y.unobserve;
        n.useEffect(
          function () {
            var e,
              t = !1,
              r = function () {
                if (l && t) {
                  var e = l.getBoundingClientRect();
                  e.width > 0 &&
                    e.height > 0 &&
                    e.top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    e.bottom > 0 &&
                    e.left <
                      (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                    e.right > 0 &&
                    (null == d || d.startRendering(), (t = !1));
                }
              };
            return (
              l &&
                !1 !== p.shouldUseIntersectionObserver &&
                k(l, function (n) {
                  n.isIntersecting
                    ? d && d.startRendering()
                    : d && d.stopRendering(),
                    (t = !n.isIntersecting),
                    clearTimeout(e),
                    n.isIntersecting ||
                      0 !== n.boundingClientRect.width ||
                      (e = setTimeout(r, 10));
                }),
              function () {
                l && C(l);
              }
            );
          },
          [k, C, d, l, p.shouldUseIntersectionObserver]
        ),
          n.useEffect(
            function () {
              return function () {
                d && (d.cleanup(), f(null));
              };
            },
            [d, l]
          );
        var R = null == e ? void 0 : e.animations;
        n.useEffect(
          function () {
            d &&
              R &&
              (d.isPlaying
                ? (d.stop(d.animationNames), d.play(R))
                : d.isPaused && (d.stop(d.animationNames), d.pause(R)));
          },
          [R, d]
        );
        var z = n.useCallback(
          function (e) {
            return i.default.createElement(
              x,
              a({ setContainerRef: g, setCanvasRef: m }, e)
            );
          },
          [m, g]
        );
        return {
          canvas: l,
          container: c.current,
          setCanvasRef: m,
          setContainerRef: g,
          rive: d,
          RiveComponent: z,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          r = e.artboard,
          n = e.animations,
          o = e.stateMachines,
          s = e.layout,
          c = e.useOffscreenRenderer,
          u = e.shouldDisableRiveListeners,
          d = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          p = e.children,
          b = l(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
          ]),
          h = k(
            {
              src: t,
              artboard: r,
              animations: n,
              layout: s,
              stateMachines: o,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== u && u,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === c || c,
              shouldResizeCanvasToContainer: void 0 === d || d,
            }
          ).RiveComponent;
        return i.default.createElement(h, a({}, b), p);
      }),
        (t.useResizeCanvas = h),
        (t.useRive = k),
        (t.useRiveFile = function (e) {
          var t = this,
            r = n.useState(null),
            i = r[0],
            a = r[1],
            l = n.useState("idle"),
            s = l[0],
            c = l[1];
          return (
            n.useEffect(
              function () {
                var r,
                  n,
                  i,
                  l = null;
                return (
                  (r = void 0),
                  (n = void 0),
                  (i = function () {
                    return (function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        a = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (i = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function l(l) {
                        return function (s) {
                          return (function (l) {
                            if (r)
                              throw TypeError(
                                "Generator is already executing."
                              );
                            for (; i && ((i = 0), l[0] && (a = 0)), a; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o =
                                      2 & l[0]
                                        ? n.return
                                        : l[0]
                                        ? n.throw ||
                                          ((o = n.return) && o.call(n), 0)
                                        : n.next) &&
                                    !(o = o.call(n, l[1])).done)
                                )
                                  return o;
                                switch (
                                  ((n = 0),
                                  o && (l = [2 & l[0], o.value]),
                                  l[0])
                                ) {
                                  case 0:
                                  case 1:
                                    o = l;
                                    break;
                                  case 4:
                                    return a.label++, { value: l[1], done: !1 };
                                  case 5:
                                    a.label++, (n = l[1]), (l = [0]);
                                    continue;
                                  case 7:
                                    (l = a.ops.pop()), a.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(o =
                                        (o = a.trys).length > 0 &&
                                        o[o.length - 1]) &&
                                      (6 === l[0] || 2 === l[0])
                                    ) {
                                      a = 0;
                                      continue;
                                    }
                                    if (
                                      3 === l[0] &&
                                      (!o || (l[1] > o[0] && l[1] < o[3]))
                                    ) {
                                      a.label = l[1];
                                      break;
                                    }
                                    if (6 === l[0] && a.label < o[1]) {
                                      (a.label = o[1]), (o = l);
                                      break;
                                    }
                                    if (o && a.label < o[2]) {
                                      (a.label = o[2]), a.ops.push(l);
                                      break;
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue;
                                }
                                l = t.call(e, a);
                              } catch (e) {
                                (l = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                          })([l, s]);
                        };
                      }
                    })(this, function (t) {
                      try {
                        c("loading"),
                          (l = new o.RiveFile(e)).init(),
                          l.on(o.EventType.Load, function () {
                            null == l || l.getInstance(), a(l), c("success");
                          }),
                          l.on(o.EventType.LoadError, function () {
                            c("failed");
                          }),
                          a(l);
                      } catch (e) {
                        console.error(e), c("failed");
                      }
                      return [2];
                    });
                  }),
                  new (n || (n = Promise))(function (e, o) {
                    function a(e) {
                      try {
                        s(i.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function l(e) {
                      try {
                        s(i.throw(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function s(t) {
                      var r;
                      t.done
                        ? e(t.value)
                        : ((r = t.value) instanceof n
                            ? r
                            : new n(function (e) {
                                e(r);
                              })
                          ).then(a, l);
                    }
                    s((i = i.apply(t, r || [])).next());
                  }),
                  function () {
                    null == l || l.cleanup();
                  }
                );
              },
              [e.src, e.buffer]
            ),
            { riveFile: i, status: s }
          );
        }),
        (t.useStateMachineInput = function (e, t, r, i) {
          var a = n.useState(null),
            l = a[0],
            s = a[1];
          return (
            n.useEffect(
              function () {
                function n() {
                  if (((e && t && r) || s(null), e && t && r)) {
                    var n = e.stateMachineInputs(t);
                    if (n) {
                      var o = n.find(function (e) {
                        return e.name === r;
                      });
                      void 0 !== i && o && (o.value = i), s(o || null);
                    }
                  } else s(null);
                }
                n(),
                  e &&
                    e.on(o.EventType.Load, function () {
                      n();
                    });
              },
              [e]
            ),
            l
          );
        }),
        Object.keys(o).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
    },
    3414: function (e, t, r) {
      var n = r(2381).Symbol;
      e.exports = n;
    },
    1560: function (e) {
      e.exports = function (e, t, r) {
        return (
          e == e &&
            (void 0 !== r && (e = e <= r ? e : r),
            void 0 !== t && (e = e >= t ? e : t)),
          e
        );
      };
    },
    2731: function (e, t, r) {
      var n = r(3414),
        o = r(7363),
        i = r(9220),
        a = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(e)
          ? o(e)
          : i(e);
      };
    },
    9334: function (e, t, r) {
      var n = r(5788),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e;
      };
    },
    1240: function (e, t, r) {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n;
    },
    7363: function (e, t, r) {
      var n = r(3414),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        l = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, l),
          r = e[l];
        try {
          e[l] = void 0;
          var n = !0;
        } catch (e) {}
        var o = a.call(e);
        return n && (t ? (e[l] = r) : delete e[l]), o;
      };
    },
    9220: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    2381: function (e, t, r) {
      var n = r(1240),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      e.exports = i;
    },
    5788: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    4091: function (e, t, r) {
      var n = r(1560),
        o = r(9666);
      e.exports = function (e, t, r) {
        return (
          void 0 === r && ((r = t), (t = void 0)),
          void 0 !== r && (r = (r = o(r)) == r ? r : 0),
          void 0 !== t && (t = (t = o(t)) == t ? t : 0),
          n(o(e), t, r)
        );
      };
    },
    3117: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    561: function (e) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    4918: function (e, t, r) {
      var n = r(2731),
        o = r(561);
      e.exports = function (e) {
        return "symbol" == typeof e || (o(e) && "[object Symbol]" == n(e));
      };
    },
    9666: function (e, t, r) {
      var n = r(9334),
        o = r(3117),
        i = r(4918),
        a = 0 / 0,
        l = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return a;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = s.test(e);
        return r || c.test(e) ? u(e.slice(2), r ? 2 : 8) : l.test(e) ? a : +e;
      };
    },
    4839: function (e, t, r) {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, {
        W: function () {
          return n;
        },
      });
    },
    6164: function (e, t, r) {
      "use strict";
      r.d(t, {
        m6: function () {
          return H;
        },
      });
      let n = /^\[(.+)\]$/;
      function o(e, t) {
        let r = e;
        return (
          t.split("-").forEach((e) => {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      let i = /\s+/;
      function a() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r;
              if ("string" == typeof t) return t;
              let n = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function l(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        u = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        h =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function v(e) {
        return g(e) || u.has(e) || c.test(e);
      }
      function m(e) {
        return P(e, "length", M);
      }
      function g(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function y(e) {
        return P(e, "number", g);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && g(e.slice(0, -1));
      }
      function k(e) {
        return s.test(e);
      }
      function C(e) {
        return d.test(e);
      }
      let R = new Set(["length", "size", "percentage"]);
      function z(e) {
        return P(e, R, L);
      }
      function E(e) {
        return P(e, "position", L);
      }
      let j = new Set(["image", "url"]);
      function O(e) {
        return P(e, j, N);
      }
      function S(e) {
        return P(e, "", I);
      }
      function T() {
        return !0;
      }
      function P(e, t, r) {
        let n = s.exec(e);
        return (
          !!n &&
          (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
        );
      }
      function M(e) {
        return f.test(e) && !p.test(e);
      }
      function L() {
        return !1;
      }
      function I(e) {
        return b.test(e);
      }
      function N(e) {
        return h.test(e);
      }
      let H = (function (e, ...t) {
        let r, l, s;
        let c = function (i) {
          var a;
          return (
            (l = (r = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = new Map(),
                  n = new Map();
                function o(o, i) {
                  r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
                }
                return {
                  get(e) {
                    let t = r.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = n.get(e))
                      ? (o(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t);
                  },
                };
              })((a = t.reduce((e, t) => t(e), e())).cacheSize),
              parseClassName: (function (e) {
                let { separator: t, experimentalParseClassName: r } = e,
                  n = 1 === t.length,
                  o = t[0],
                  i = t.length;
                function a(e) {
                  let r;
                  let a = [],
                    l = 0,
                    s = 0;
                  for (let c = 0; c < e.length; c++) {
                    let u = e[c];
                    if (0 === l) {
                      if (u === o && (n || e.slice(c, c + i) === t)) {
                        a.push(e.slice(s, c)), (s = c + i);
                        continue;
                      }
                      if ("/" === u) {
                        r = c;
                        continue;
                      }
                    }
                    "[" === u ? l++ : "]" === u && l--;
                  }
                  let c = 0 === a.length ? e : e.substring(s),
                    u = c.startsWith("!"),
                    d = u ? c.substring(1) : c;
                  return {
                    modifiers: a,
                    hasImportantModifier: u,
                    baseClassName: d,
                    maybePostfixModifierPosition: r && r > s ? r - s : void 0,
                  };
                }
                return r
                  ? function (e) {
                      return r({ className: e, parseClassName: a });
                    }
                  : a;
              })(a),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: r, prefix: n } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      n
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? n + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, t]) => [
                                      n + e,
                                      t,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, r, n, i) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? r : o(r, t)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(i), r, n, i);
                                return;
                              }
                              r.validators.push({
                                validator: t,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, a]) => {
                              e(a, o(r, t), n, i);
                            });
                          });
                        })(t, i, e, r);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let r = e.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        let n = t[0],
                          o = r.nextPart.get(n),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 === r.validators.length) return;
                        let a = t.join("-");
                        return r.validators.find(({ validator: e }) => e(a))
                          ?.classGroupId;
                      })(r, t) ||
                        (function (e) {
                          if (n.test(e)) {
                            let t = n.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let n = r[e] || [];
                    return t && i[e] ? [...n, ...i[e]] : n;
                  },
                };
              })(a),
            }).cache.get),
            (s = r.cache.set),
            (c = u),
            u(i)
          );
        };
        function u(e) {
          let t = l(e);
          if (t) return t;
          let n = (function (e, t) {
            let {
                parseClassName: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: o,
              } = t,
              a = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: i,
                    maybePostfixModifierPosition: a,
                  } = r(e),
                  l = !!a,
                  s = n(l ? i.substring(0, a) : i);
                if (!s) {
                  if (!l || !(s = n(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  l = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...r.sort(), e), (r = []))
                        : r.push(e);
                    }),
                    t.push(...r.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? c + "!" : c,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = e,
                  i = t + r;
                return (
                  !a.has(i) &&
                  (a.add(i), o(r, n).forEach((e) => a.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, r);
          return s(e, n), n;
        }
        return function () {
          return c(a.apply(null, arguments));
        };
      })(function () {
        let e = l("colors"),
          t = l("spacing"),
          r = l("blur"),
          n = l("brightness"),
          o = l("borderColor"),
          i = l("borderRadius"),
          a = l("borderSpacing"),
          s = l("borderWidth"),
          c = l("contrast"),
          u = l("grayscale"),
          d = l("hueRotate"),
          f = l("invert"),
          p = l("gap"),
          b = l("gradientColorStops"),
          h = l("gradientColorStopPositions"),
          R = l("inset"),
          j = l("margin"),
          P = l("opacity"),
          M = l("padding"),
          L = l("saturate"),
          I = l("scale"),
          N = l("sepia"),
          H = l("skew"),
          G = l("space"),
          W = l("translate"),
          $ = () => ["auto", "contain", "none"],
          _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
          A = () => ["auto", k, t],
          D = () => [k, t],
          F = () => ["", v, m],
          B = () => ["auto", g, k],
          U = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          q = () => ["solid", "dashed", "dotted", "double", "none"],
          V = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          X = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", k],
          J = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          K = () => [g, y],
          Q = () => [g, k];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [T],
            spacing: [v, m],
            blur: ["none", "", C, k],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", C, k],
            borderSpacing: D(),
            borderWidth: F(),
            contrast: K(),
            grayscale: Y(),
            hueRotate: Q(),
            invert: Y(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, m],
            inset: A(),
            margin: A(),
            opacity: K(),
            padding: D(),
            saturate: K(),
            scale: K(),
            sepia: Y(),
            skew: Q(),
            space: D(),
            translate: D(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", k] }],
            container: ["container"],
            columns: [{ columns: [C] }],
            "break-after": [{ "break-after": J() }],
            "break-before": [{ "break-before": J() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...U(), k] }],
            overflow: [{ overflow: _() }],
            "overflow-x": [{ "overflow-x": _() }],
            "overflow-y": [{ "overflow-y": _() }],
            overscroll: [{ overscroll: $() }],
            "overscroll-x": [{ "overscroll-x": $() }],
            "overscroll-y": [{ "overscroll-y": $() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [R] }],
            "inset-x": [{ "inset-x": [R] }],
            "inset-y": [{ "inset-y": [R] }],
            start: [{ start: [R] }],
            end: [{ end: [R] }],
            top: [{ top: [R] }],
            right: [{ right: [R] }],
            bottom: [{ bottom: [R] }],
            left: [{ left: [R] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, k] }],
            basis: [{ basis: A() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", k] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", w, k] }],
            "grid-cols": [{ "grid-cols": [T] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, k] }, k] }],
            "col-start": [{ "col-start": B() }],
            "col-end": [{ "col-end": B() }],
            "grid-rows": [{ "grid-rows": [T] }],
            "row-start-end": [{ row: ["auto", { span: [w, k] }, k] }],
            "row-start": [{ "row-start": B() }],
            "row-end": [{ "row-end": B() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", k] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", k] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...X()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...X(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...X(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [M] }],
            px: [{ px: [M] }],
            py: [{ py: [M] }],
            ps: [{ ps: [M] }],
            pe: [{ pe: [M] }],
            pt: [{ pt: [M] }],
            pr: [{ pr: [M] }],
            pb: [{ pb: [M] }],
            pl: [{ pl: [M] }],
            m: [{ m: [j] }],
            mx: [{ mx: [j] }],
            my: [{ my: [j] }],
            ms: [{ ms: [j] }],
            me: [{ me: [j] }],
            mt: [{ mt: [j] }],
            mr: [{ mr: [j] }],
            mb: [{ mb: [j] }],
            ml: [{ ml: [j] }],
            "space-x": [{ "space-x": [G] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [G] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t] },
            ],
            "min-w": [{ "min-w": [k, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  k,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [C] },
                  C,
                ],
              },
            ],
            h: [
              { h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [k, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", C, m] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  y,
                ],
              },
            ],
            "font-family": [{ font: [T] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  k,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", g, y] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  v,
                  k,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", k] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", k] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [P] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [P] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", v, m] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", v, k] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: D() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  k,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", k] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [P] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...U(), E] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", z] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  O,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [h] }],
            "gradient-via-pos": [{ via: [h] }],
            "gradient-to-pos": [{ to: [h] }],
            "gradient-from": [{ from: [b] }],
            "gradient-via": [{ via: [b] }],
            "gradient-to": [{ to: [b] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [P] }],
            "border-style": [{ border: [...q(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [P] }],
            "divide-style": [{ divide: q() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...q()] }],
            "outline-offset": [{ "outline-offset": [v, k] }],
            "outline-w": [{ outline: [v, m] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: F() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [P] }],
            "ring-offset-w": [{ "ring-offset": [v, m] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", C, S] }],
            "shadow-color": [{ shadow: [T] }],
            opacity: [{ opacity: [P] }],
            "mix-blend": [
              { "mix-blend": [...V(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": V() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", C, k] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [L] }],
            sepia: [{ sepia: [N] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [P] }],
            "backdrop-saturate": [{ "backdrop-saturate": [L] }],
            "backdrop-sepia": [{ "backdrop-sepia": [N] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  k,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", k] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", k] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [I] }],
            "scale-x": [{ "scale-x": [I] }],
            "scale-y": [{ "scale-y": [I] }],
            rotate: [{ rotate: [w, k] }],
            "translate-x": [{ "translate-x": [W] }],
            "translate-y": [{ "translate-y": [W] }],
            "skew-x": [{ "skew-x": [H] }],
            "skew-y": [{ "skew-y": [H] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  k,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  k,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": D() }],
            "scroll-mx": [{ "scroll-mx": D() }],
            "scroll-my": [{ "scroll-my": D() }],
            "scroll-ms": [{ "scroll-ms": D() }],
            "scroll-me": [{ "scroll-me": D() }],
            "scroll-mt": [{ "scroll-mt": D() }],
            "scroll-mr": [{ "scroll-mr": D() }],
            "scroll-mb": [{ "scroll-mb": D() }],
            "scroll-ml": [{ "scroll-ml": D() }],
            "scroll-p": [{ "scroll-p": D() }],
            "scroll-px": [{ "scroll-px": D() }],
            "scroll-py": [{ "scroll-py": D() }],
            "scroll-ps": [{ "scroll-ps": D() }],
            "scroll-pe": [{ "scroll-pe": D() }],
            "scroll-pt": [{ "scroll-pt": D() }],
            "scroll-pr": [{ "scroll-pr": D() }],
            "scroll-pb": [{ "scroll-pb": D() }],
            "scroll-pl": [{ "scroll-pl": D() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", k] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [v, m, y] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
