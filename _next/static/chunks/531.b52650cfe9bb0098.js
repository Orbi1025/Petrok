"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [531, 228],
  {
    8531: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n(7437),
        i = n(2265),
        l = n(3333),
        o = n(7544),
        s = n(4091),
        u = n.n(s),
        r = n(6648),
        c = n(2811),
        v = n(4839),
        h = n(6164);
      function d() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, h.m6)((0, v.W)(t));
      }
      let f = "State Machine 1";
      function p(e) {
        let { sceneWidth: t, riveFile: n, handleElementClicked: s } = e,
          { setIsLoading: v } = (0, c.r)(),
          [h, p] = (0, i.useState)(!1),
          [g, x] = (0, i.useState)(0),
          [m, S] = (0, i.useState)(0),
          [y, w] = (0, i.useState)(0),
          [E, T] = (0, i.useState)(!0),
          [b, M] = (0, i.useState)(0),
          [j, C] = (0, l.iP)(),
          F = (2160 / t) * j < C,
          { rive: k, RiveComponent: I } = (0, o.useRive)({
            src: n,
            stateMachines: f,
            layout: new o.Layout({
              fit: F ? o.Fit.FitHeight : o.Fit.FitWidth,
              alignment: o.Alignment.CenterLeft,
            }),
            autoplay: !0,
            onLoad: () => {
              v(!1);
            },
          }),
          L = (0, o.useStateMachineInput)(k, f, "sceneX"),
          N = (0, o.useStateMachineInput)(k, f, "pointerX"),
          H = (0, o.useStateMachineInput)(k, f, "tvHover"),
          R = (0, o.useStateMachineInput)(k, f, "outsideHover"),
          X = (0, o.useStateMachineInput)(k, f, "bar.hovering");
        (0, i.useEffect)(() => {
          if (!k) return;
          let e = () => {
            let e = null == H ? void 0 : H.value,
              t = null == R ? void 0 : R.value,
              n = null == X ? void 0 : X.value,
              a = document.body;
            e || t || n
              ? a.classList.add("hover-active")
              : a.classList.remove("hover-active"),
              console.log("Hover States:", { tv: e, outside: t, hovering: n });
          };
          return (
            e(),
            k.on(o.EventType.StateChange, e),
            () => {
              k.off(o.EventType.StateChange, e);
            }
          );
        }, [k, H, R, X]),
          (0, i.useEffect)(() => {
            j && x(1 - j / ((C / 2160) * t));
          }, [j, C, t]),
          (0, i.useEffect)(() => {
            k &&
              (k.layout = new o.Layout({
                fit: F ? o.Fit.FitHeight : o.Fit.FitWidth,
                alignment: o.Alignment.CenterLeft,
              }));
          }, [k, F]);
        let _ = (0, i.useCallback)(
            (e) => {
              if (!E) return;
              let t = (e.pageX / j) * 100;
              L && N && ((L.value = t * g), (N.value = t));
            },
            [j, g, L, N, E]
          ),
          A = (0, i.useCallback)(
            (e) => {
              T(!1), S(e.targetTouches[0].clientX), p(!0), L && w(L.value);
            },
            [L]
          ),
          D = (0, i.useCallback)(
            (e) => {
              let t = -(((e.targetTouches[0].clientX - m) / j) * 100),
                n = u()(t * g + y, 0, 100 * g);
              L && N && ((N.value = n / g), (L.value = n));
            },
            [m, j, g, y, L, N]
          );
        return (
          (0, i.useEffect)(() => {
            if (!k) return;
            let e = (e) => {
              console.log("Rive Event:", e), s(e);
            };
            k.on(o.EventType.RiveEvent, e);
            let t = () => {
              let e = new Date(),
                t = e.getHours(),
                n = e.getMinutes(),
                a = t < 10 ? "0".concat(t) : t.toString(),
                i = n < 10 ? "0".concat(n) : n.toString();
              k.setTextRunValue("hoursText", a),
                k.setTextRunValue("minutesText", i);
            };
            t();
            let n = setInterval(t, 6e4);
            return () => {
              k.off(o.EventType.RiveEvent, e), clearInterval(n);
            };
          }, [s, k]),
          (0, a.jsxs)("div", {
            style: { width: "100vw", height: "100vh", position: "relative" },
            children: [
              (0, a.jsx)("div", {
                style: { width: "100%", height: "100%" },
                onMouseMove: _,
                onTouchStart: A,
                onTouchMove: D,
                children: (0, a.jsx)(I, {}, b),
              }),
              (0, a.jsx)("div", {
                className:
                  " select-none bottom-0 left-0 w-full h-[100px] md:hidden z-10 fixed",
              }),
              (0, a.jsx)("div", {
                className:
                  " w-full flex items-center justify-center flex-col p-2  h-[100px] bottom-0 md:hidden z-10 fixed",
                onTouchStart: (e) => {
                  e.preventDefault(), e.stopPropagation(), A(e);
                },
                onTouchMove: (e) => {
                  e.preventDefault(), e.stopPropagation(), D(e);
                },
                children: (0, a.jsx)("div", {
                  className: d(
                    "w-full h-full flex items-center justify-center border-4 border-dashed duration-1000 border-white/20",
                    { "opacity-0 animate-none": h }
                  ),
                  children: (0, a.jsxs)("div", {
                    className: d(
                      "transition-opacity animate-pulse flex items-center gap-1 duration-1000",
                      { "opacity-0 animate-none": h }
                    ),
                    children: [
                      (0, a.jsx)(r.default, {
                        src: "/icons/swipe.svg",
                        height: 60,
                        width: 60,
                        alt: "",
                      }),
                      (0, a.jsx)("div", {
                        className: "text-white font-[Starlight] text-2xl",
                        children: "Swipe to Explore",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
