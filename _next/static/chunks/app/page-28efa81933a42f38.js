(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    8350: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 7857));
    },
    7818: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return n.a;
        },
      });
      var s = a(551),
        n = a.n(s);
    },
    551: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let s = a(9920);
      a(7437), a(2265);
      let n = s._(a(148));
      function r(e, t) {
        var a;
        let s = {
          loading: (e) => {
            let { error: t, isLoading: a, pastDelay: s } = e;
            return null;
          },
        };
        "function" == typeof e && (s.loader = e);
        let r = { ...s, ...t };
        return (0, n.default)({
          ...r,
          modules: null == (a = r.loadableGenerated) ? void 0 : a.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    912: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let s = a(5592);
      function n(e) {
        let { reason: t, children: a } = e;
        if ("undefined" == typeof window) throw new s.BailoutToCSRError(t);
        return a;
      }
    },
    148: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let s = a(7437),
        n = a(2265),
        r = a(912),
        l = a(1481);
      function i(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let o = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0,
        },
        d = function (e) {
          let t = { ...o, ...e },
            a = (0, n.lazy)(() => t.loader().then(i)),
            d = t.loading;
          function c(e) {
            let i = d
                ? (0, s.jsx)(d, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              o = t.ssr
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, s.jsx)(l.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, s.jsx)(a, { ...e }),
                    ],
                  })
                : (0, s.jsx)(r.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, s.jsx)(a, { ...e }),
                  });
            return (0, s.jsx)(n.Suspense, { fallback: i, children: o });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    1481: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let s = a(7437),
        n = a(8512);
      function r(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let a = (0, n.getExpectedRequestStore)("next/dynamic css"),
          r = [];
        if (a.reactLoadableManifest && t) {
          let e = a.reactLoadableManifest;
          for (let a of t) {
            if (!e[a]) continue;
            let t = e[a].files.filter((e) => e.endsWith(".css"));
            r.push(...t);
          }
        }
        return 0 === r.length
          ? null
          : (0, s.jsx)(s.Fragment, {
              children: r.map((e) =>
                (0, s.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: a.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    7857: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var s = a(7437),
        n = a(7818),
        r = a(1980),
        l = a(2265),
        i = a(5127),
        o = a(8094),
        d = a(6648),
        c = a(7138),
        u = a(572),
        h = a(7776);
      function x(e) {
        let { imageSrc: t, description: a, value: n } = e;
        return (0, s.jsxs)("div", {
          className: "flex flex-col text-center items-center",
          children: [
            (0, s.jsx)("div", {
              className:
                "w-full aspect-square flex items-center justify-center h-full border-4 bg-gradient-to-t from-black/50 to-black/40 border-black",
              children: (0, s.jsx)(d.default, {
                className: " w-3/4 ",
                src: t,
                width: 500,
                height: 500,
                alt: "",
              }),
            }),
            (0, s.jsxs)("p", {
              className: "mt-2",
              children: [
                a,
                " ",
                (0, s.jsx)("span", {
                  className: "font-bold text-xl underline",
                  children: n,
                }),
              ],
            }),
          ],
        });
      }
      function m(e) {
        let { isOpen: t, onClose: a } = e;
        return (0, s.jsx)(i.M, {
          children:
            t &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(o.E.button, {
                  className:
                    "fixed top-6 left-6 border-black rounded-md border-4 bg-black/50 text-white z-[45] p-2 transition-transform duration-200 hover:scale-105 active:scale-100",
                  onClick: a,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  children: (0, s.jsx)(d.default, {
                    src: "/icons/close.svg",
                    className: "w-12 h-12",
                    width: 50,
                    height: 50,
                    alt: "",
                  }),
                }),
                (0, s.jsx)(o.E.div, {
                  className: "fixed inset-0 bg-black z-40",
                  style: { opacity: 0.5 },
                  initial: { opacity: 0 },
                  animate: { opacity: 0.5 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  onClick: a,
                }),
                (0, s.jsx)(o.E.div, {
                  className:
                    "fixed bottom-0 left-1/2  transform -translate-x-1/2 h-[110vh] w-[90%] max-w-[900px] z-40 no-scrollbar overflow-y-visible overflow-auto",
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: {
                    open: {
                      y: "5%",
                      x: "-50%",
                      opacity: "100%",
                      rotate: "2deg",
                      transition: { duration: 1, ease: [0.6, 0.6, 0, 1] },
                    },
                    closed: {
                      y: "100%",
                      opacity: "0%",
                      x: "-50%",
                      rotate: "-4deg",
                      transition: { duration: 0.5, ease: [0.6, 0.6, 0, 1] },
                    },
                  },
                  children: (0, s.jsxs)("div", {
                    className:
                      "w-full relative font-serif mb-48 border-4  mt-[60%] md:mt-[30%] p-4 md:p-8 bg-[#d0d0d0] border-black text-black font-semibold",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "text-center border-b-4 border-black pb-4 mb-4",
                        children: [
                          (0, s.jsx)(d.default, {
                            src: "/brand/logo.svg",
                            className: "w-12 h-12 mx-auto",
                            width: 40,
                            height: 40,
                            alt: "",
                          }),
                          (0, s.jsxs)("div", {
                            className: "text-black text-md",
                            children: [
                              "[",
                              new Date().toLocaleDateString("en-US", {
                                month: "numeric",
                                day: "numeric",
                                year: "numeric",
                              }),
                              "]",
                            ],
                          }),
                          (0, s.jsx)("h1", {
                            className: "text-3xl md:text-6xl",
                            children: "The Daily Stone",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-md md:text-lg",
                            children:
                              "Your solid source for all things PetRok!",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, s.jsx)(d.default, {
                            priority: !0,
                            className: "w-full mb-4 border-4 border-black",
                            src: "_next/image/about/newspaper.png",
                            width: 500,
                            height: 500,
                            alt: "",
                          }),
                          (0, s.jsx)("div", {
                            className: "mt-8",
                            children: (0, s.jsxs)("div", {
                              className: "mt-8",
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-3xl md:text-4xl mb-4 text-center border-b-4 border-black pb-2",
                                  children:
                                    "An Unusually Leisurely Tale of PetRok",
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "text-md md:text-lg leading-relaxed",
                                  children: [
                                    "In the year ",
                                    (0, s.jsx)("strong", { children: "3021" }),
                                    ", the ever-adventurous (and perhaps slightly bored)",
                                    " ",
                                    (0, s.jsx)("strong", {
                                      children: "Sir PetRok the Third",
                                    }),
                                    " decided to drag his steadfast companions, ",
                                    (0, s.jsx)("strong", {
                                      children: "Lady Granitea",
                                    }),
                                    " and",
                                    " ",
                                    (0, s.jsx)("strong", {
                                      children: "Lord Pebblestone",
                                    }),
                                    ", on a whimsical voyage across the uncharted seas. Because why enjoy peace and quiet when you can risk everything for no apparent reason?",
                                  ],
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "mt-4 text-md md:text-lg leading-relaxed",
                                  children: [
                                    "Miraculously surviving tempestuous storms and questionable navigation choices, they “discovered” the mystical ",
                                    (0, s.jsx)("strong", {
                                      children: "PetRok Islands",
                                    }),
                                    "—as if stumbling upon paradise was part of the plan all along. This archipelago, conveniently filled with pristine beaches and lush landscapes, became their new home. Naturally, they marveled at the island's beauty, acting as if they'd never seen sand before.",
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "mt-4 text-md md:text-lg leading-relaxed",
                                  children:
                                    "Fast forward to now, and the PetRok islands are filled with PetRoks all across the land living extraordinarily interesting lives, doing absolutely nothing productive. They spend their days lounging on the beach, sipping mysterious tropical drinks, and regaling anyone who will listen with exaggerated tales of their “heroic” adventures. Under the “wise” constitution of Sir PetRok the Third, the “grace” of Lady Granitea, and the “charm” of Lord Pebblestone, they've established a society that values leisure over labor and storytelling over actual work. The PetRok Islands have become a sanctuary where time is irrelevant, work is optional, and every sunset is just another excuse for a celebration.",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              " flex mt-4 p-4 border-4 border-black bg-black/20",
                            children: [
                              (0, s.jsx)("input", {
                                type: "text",
                                value: u.t.contractAddress,
                                readOnly: !0,
                                className:
                                  "w-full text-center border-4 border-black p-2",
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => {
                                  navigator.clipboard
                                    .writeText(u.t.contractAddress)
                                    .then(() => {
                                      (0, h.A)("Address copied to clipboard!");
                                    });
                                },
                                className: "bg-black text-white px-4 py-2 ml-2",
                                children: "Copy",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col md:flex-col gap-4",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-1 md:flex-none ",
                            children: (0, s.jsxs)("div", {
                              className: "mb-4",
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-3xl md:text-4xl mb-4 text-center border-b-4 border-black pb-2",
                                  children: "Follow us!",
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "grid mb-4 grid-cols-2 gap-2 *:text-center",
                                  children: [
                                    (0, s.jsx)(c.default, {
                                      className:
                                        "bg-black ease-in-out   transition-all  hover:scale-95 text-white px-4 py-2",
                                      target: "_blank",
                                      href: u.t.urls.telegram,
                                      children: "Telegram",
                                    }),
                                    (0, s.jsx)(c.default, {
                                      className:
                                        "bg-black ease-in-out transition-all hover:scale-95 text-white px-4 py-2",
                                      target: "_blank",
                                      href: u.t.urls.x,
                                      children: "X (Twitter)",
                                    }),
                                    (0, s.jsx)(c.default, {
                                      className:
                                        "bg-black ease-in-out transition-all hover:scale-95 text-white px-4 py-2",
                                      target: "_blank",
                                      href: u.t.urls.dextools,
                                      children: "Dextools",
                                    }),
                                    (0, s.jsx)(c.default, {
                                      className:
                                        "bg-black ease-in-out transition-all hover:scale-95 text-white px-4 py-2",
                                      target: "_blank",
                                      href: u.t.urls.dexscreener,
                                      children: "Dexscreener",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 *:bg-black/50 *:border-4 *:text-white *:border-black *:p-4",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("h3", {
                                          className: "text-xl mb-2",
                                          children: "Rok Fact 1",
                                        }),
                                        (0, s.jsx)("p", {
                                          children:
                                            "Did you know? PetRoks are the easiest pets to care for. No feeding, no walking, just pure companionship.",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("h3", {
                                          className: "text-xl mb-2",
                                          children: "Rok Fact 2",
                                        }),
                                        (0, s.jsx)("p", {
                                          children:
                                            "PetRoks were a huge fad in the 1970s. They were sold as the perfect pet that doesn't need any care.",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("h3", {
                                          className: "text-xl mb-2",
                                          children: "Rok Fact 3",
                                        }),
                                        (0, s.jsx)("p", {
                                          children:
                                            "Each PetRok is unique, just like a snowflake. No two roks are exactly the same!",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("h3", {
                                          className: "text-xl mb-2",
                                          children: "Rok Fact 4",
                                        }),
                                        (0, s.jsx)("p", {
                                          children:
                                            "PetRoks can be great stress relievers. Just holding a smooth Rok can be very calming.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "flex-1 ",
                            children: (0, s.jsxs)("div", {
                              className: "mb-4 pt-2",
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-3xl md:text-4xl mb-4 text-center border-b-4 border-black pb-2",
                                  children: "PetRok Financials",
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "grid grid-cols-2 md:grid-cols-2 gap-4",
                                  children: [
                                    (0, s.jsx)(x, {
                                      imageSrc: "_next/image/about/tax.png",
                                      description: "PetRok Taxes",
                                      value: "0/0",
                                    }),
                                    (0, s.jsx)(x, {
                                      imageSrc: "_next/image/about/supply.png",
                                      description: "Total supply set at",
                                      value: "1B",
                                    }),
                                    (0, s.jsx)(x, {
                                      imageSrc: "_next/image//about/revoked.png",
                                      description: "Mint and freeze",
                                      value: "REVOKED",
                                    }),
                                    (0, s.jsx)(x, {
                                      imageSrc: "_next/image//about/fireplace.png",
                                      description: "Liquidity",
                                      value: "BURNED",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className: "mt-4",
                                  children:
                                    'Ah, the age-old wisdom of the internet: "Invest wisely, and you shall reap the rewards!" But let\'s be real—this project is literally about a pet Rok. Remember, this is not financial advice, and you might end up losing your investment. The only guarantee here is a good time and a roking community!',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
        });
      }
      function p(e) {
        let { isOpen: t, onClose: a } = e;
        return (0, s.jsx)(i.M, {
          children:
            t &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(o.E.div, {
                  className: "fixed inset-0 bg-black z-[40]",
                  initial: { opacity: 0 },
                  animate: { opacity: 0.5 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  onClick: a,
                }),
                (0, s.jsx)(o.E.div, {
                  className:
                    "fixed inset-0 flex items-center justify-center z-[41]",
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: {
                    open: {
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.5, ease: [0.6, 0.6, 0, 1] },
                    },
                    closed: {
                      scale: 0.8,
                      opacity: 0,
                      transition: { duration: 0.5, ease: [0.6, 0.6, 0, 1] },
                    },
                  },
                  onClick: a,
                  children: (0, s.jsx)("div", {
                    className:
                      "bg-[#d0d0d0] border-black border-8 rounded-lg p-4 shadow-lg w-[90%] max-w-[800px]",
                    onClick: (e) => e.stopPropagation(),
                    children: (0, s.jsx)("div", {
                      className: "aspect-video",
                      children: (0, s.jsxs)("video", {
                        className: "w-full h-full",
                        controls: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        children: [
                          (0, s.jsx)("source", {
                            src: "https://player.vimeo.com/progressive_redirect/download/1033982419/rendition/720p/img_8417%20(720p).mp4?loc=external&signature=36ae3eb8f969806f4d307d5efe369d8a43804f9306d8dfa36fd16d7145a7e485",
                            type: "video/mp4",
                          }),
                          "Your browser does not support the video tag.",
                        ],
                      }),
                    }),
                  }),
                }),
                (0, s.jsx)(o.E.button, {
                  className:
                    "fixed top-6 left-6 border-black rounded-md border-4 bg-black/50 text-white z-[45] p-2 transition-transform duration-200 hover:scale-105 active:scale-100",
                  onClick: a,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  children: (0, s.jsx)(d.default, {
                    src: "/icons/close.svg",
                    className: "w-12 h-12",
                    width: 50,
                    height: 50,
                    alt: "Close",
                  }),
                }),
              ],
            }),
        });
      }
      let f = (0, n.default)(
        () => Promise.all([a.e(370), a.e(793), a.e(531)]).then(a.bind(a, 8531)),
        { loadableGenerated: { webpack: () => [8531] }, ssr: !1 }
      );
      function b() {
        let { navigate: e } = (0, r.H)(),
          [t, a] = (0, l.useState)(!1),
          [n, i] = (0, l.useState)(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(m, { isOpen: t, onClose: () => a(!1) }),
            (0, s.jsx)(p, { isOpen: n, onClose: () => i(!1) }),
            (0, s.jsx)(f, {
              riveFile: "/rive/petrok_bar.riv",
              sceneWidth: 4177,
              handleElementClicked: (t) => {
                let s = t.data;
                switch (s.name) {
                  case "clickOutside":
                    e("/beach");
                    break;
                  case "clickBar":
                  case "clickBar":
                    a(!0);
                    break;
                  case "clickTv":
                    i(!0);
                    break;
                  default:
                    console.log("Unhandled event", s);
                }
              },
            }),
          ],
        });
      }
    },
    572: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return s;
        },
      });
      let s = {
        urls: {
          x: "https://x.com/PetrokonBase",
          telegram: "https://t.me/PetrokonBase",
          dextools:
            "https://www.dextools.io/app/en/base/pair-explorer/0x461ded3B409EFEf768837Ca4f1A27615901B69c9",
          dexscreener:
            "https://dexscreener.com/base/0x461ded3B409EFEf768837Ca4f1A27615901B69c9",
        },
        contractAddress: "0x461ded3B409EFEf768837Ca4f1A27615901B69c9",
      };
    },
    2811: function (e, t, a) {
      "use strict";
      a.d(t, {
        LoadingProvider: function () {
          return l;
        },
        r: function () {
          return i;
        },
      });
      var s = a(7437),
        n = a(2265);
      let r = (0, n.createContext)(void 0),
        l = (e) => {
          let { children: t } = e,
            [a, l] = (0, n.useState)(!0),
            [i, o] = (0, n.useState)(!1),
            d = (0, n.useMemo)(
              () => ({
                isLoading: a,
                isExiting: i,
                setIsLoading: l,
                setIsExiting: o,
              }),
              [a, i]
            );
          return (0, s.jsx)(r.Provider, { value: d, children: t });
        },
        i = () => {
          let e = (0, n.useContext)(r);
          if (!e)
            throw Error("useLoading must be used within a LoadingProvider");
          return e;
        };
    },
    1980: function (e, t, a) {
      "use strict";
      a.d(t, {
        H: function () {
          return r;
        },
      });
      var s = a(6463),
        n = a(2811);
      function r() {
        let e = (0, s.useRouter)(),
          { setIsLoading: t, setIsExiting: a } = (0, n.r)();
        return {
          navigate: async (s) => {
            a(!0),
              setTimeout(async () => {
                try {
                  await e.push(s);
                } catch (e) {
                } finally {
                  a(!1), t(!0);
                }
              }, 1500);
          },
        };
      }
    },
  },
  function (e) {
    e.O(0, [648, 592, 578, 971, 23, 744], function () {
      return e((e.s = 8350));
    }),
      (_N_E = e.O());
  },
]);
