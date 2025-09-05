(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [26],
  {
    2504: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 531));
    },
    7818: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return l.a;
        },
      });
      var r = n(551),
        l = n.n(r);
    },
    551: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(9920);
      n(7437), n(2265);
      let l = r._(n(148));
      function u(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let u = { ...r, ...t };
        return (0, l.default)({
          ...u,
          modules: null == (n = u.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    912: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(5592);
      function l(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    148: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(7437),
        l = n(2265),
        u = n(912),
        o = n(1481);
      function i(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let a = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (e) {
          let t = { ...a, ...e },
            n = (0, l.lazy)(() => t.loader().then(i)),
            s = t.loading;
          function d(e) {
            let i = s
                ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(o.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(u.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(l.Suspense, { fallback: i, children: a });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    1481: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(7437),
        l = n(8512);
      function u(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, l.getExpectedRequestStore)("next/dynamic css"),
          u = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            u.push(...t);
          }
        }
        return 0 === u.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: u.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(7437),
        l = n(7818),
        u = n(1980),
        o = n(7776);
      let i = (0, l.default)(
        () =>
          Promise.all([n.e(370), n.e(648), n.e(793), n.e(228)]).then(
            n.bind(n, 8531)
          ),
        { loadableGenerated: { webpack: () => [8531] }, ssr: !1 }
      );
      function a() {
        let { navigate: e } = (0, u.H)();
        return (0, r.jsx)(i, {
          riveFile: "/rive/petrok_beach.riv",
          sceneWidth: 3800,
          handleElementClicked: (t) => {
            let n = t.data;
            switch (n.name) {
              case "clickOutside":
                e("/beach");
                break;
              case "clickBar":
                e("/");
                break;
              case "clickBall":
                (0, o.A)("coming soon!");
                break;
              case "clickCabin":
                e("/generator");
                break;
              default:
                console.log("Unhandled event", n);
            }
          },
        });
      }
    },
    2811: function (e, t, n) {
      "use strict";
      n.d(t, {
        LoadingProvider: function () {
          return o;
        },
        r: function () {
          return i;
        },
      });
      var r = n(7437),
        l = n(2265);
      let u = (0, l.createContext)(void 0),
        o = (e) => {
          let { children: t } = e,
            [n, o] = (0, l.useState)(!0),
            [i, a] = (0, l.useState)(!1),
            s = (0, l.useMemo)(
              () => ({
                isLoading: n,
                isExiting: i,
                setIsLoading: o,
                setIsExiting: a,
              }),
              [n, i]
            );
          return (0, r.jsx)(u.Provider, { value: s, children: t });
        },
        i = () => {
          let e = (0, l.useContext)(u);
          if (!e)
            throw Error("useLoading must be used within a LoadingProvider");
          return e;
        };
    },
    1980: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r = n(6463),
        l = n(2811);
      function u() {
        let e = (0, r.useRouter)(),
          { setIsLoading: t, setIsExiting: n } = (0, l.r)();
        return {
          navigate: async (r) => {
            n(!0),
              setTimeout(async () => {
                try {
                  await e.push(r);
                } catch (e) {
                } finally {
                  n(!1), t(!0);
                }
              }, 1500);
          },
        };
      }
    },
  },
  function (e) {
    e.O(0, [592, 971, 23, 744], function () {
      return e((e.s = 2504));
    }),
      (_N_E = e.O());
  },
]);
