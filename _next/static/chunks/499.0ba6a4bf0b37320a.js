"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [499],
  {
    6463: function (e, t, a) {
      var r = a(1169);
      a.o(r, "useRouter") &&
        a.d(t, {
          useRouter: function () {
            return r.useRouter;
          },
        });
    },
    8499: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var r = a(7437),
        o = a(2265),
        n = a(6648);
      let l = {
        background: {
          path: "/traits/background",
          options: Array.from({ length: 16 }, (e, t) =>
            "".concat(t + 1, ".png")
          ),
          priority: 1,
        },
        base: { path: "/traits/base", options: ["1.png"], priority: 2 },
        mouth: {
          path: "/traits/mouth",
          options: Array.from({ length: 17 }, (e, t) =>
            "".concat(t + 1, ".png")
          ),
          priority: 3,
        },
        clothes: {
          path: "/traits/clothes",
          options: Array.from({ length: 18 }, (e, t) =>
            "".concat(t + 1, ".png")
          ),
          priority: 4,
        },
        eyes: {
          path: "/traits/eyes",
          options: Array.from({ length: 15 }, (e, t) =>
            "".concat(t + 1, ".png")
          ),
          priority: 5,
        },
        hat: {
          path: "/traits/hat",
          options: Array.from({ length: 26 }, (e, t) =>
            "".concat(t + 1, ".png")
          ),
          priority: 6,
        },
        hands: {
          path: "/traits/hands",
          options: Array.from({ length: 17 }, (e, t) =>
            "".concat(t + 1, ".png")
          ),
          priority: 7,
        },
      };
      function s(e) {
        let {
            category: t,
            selectedTrait: a,
            onSelect: n,
            isLoading: s = !1,
          } = e,
          i = l[t].options,
          [c, d] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          if (a) {
            let e = i.indexOf(a);
            -1 !== e && d(e);
          } else d(0);
        }, [a, i]);
        let u = (e) => {
          let a = (c + e + i.length) % i.length;
          console.log(
            "TraitSelector: Changing index from ".concat(c, " to ").concat(a)
          ),
            d(a),
            n(t, i[a]);
        };
        return (0, r.jsxs)("div", {
          className:
            "flex w-full transition-all ease-in-out mb-2 justify-between text-white items-center font-[Starlight] text-2xl",
          children: [
            (0, r.jsx)("button", {
              onClick: () => u(-1),
              disabled: s,
              "aria-label": "Previous ".concat(t),
              className:
                "flex items-center justify-center bg-black/50 hover:bg-yellow-500 border-[5px] border-black rounded-[15px] w-[65px] h-[65px] transition-all duration-200 hover:scale-105 disabled:opacity-50",
              children: "<",
            }),
            (0, r.jsx)("span", {
              className: "mx-4 text-white capitalize",
              children: t,
            }),
            (0, r.jsx)("button", {
              onClick: () => u(1),
              disabled: s,
              "aria-label": "Next ".concat(t),
              className:
                "flex items-center justify-center bg-black/50 hover:bg-yellow-500 border-[5px] border-black rounded-[15px] w-[65px] h-[65px] transition-all duration-200 hover:scale-105 disabled:opacity-50",
              children: ">",
            }),
          ],
        });
      }
      var i = a(4088),
        c = a(2811),
        d = a(1980);
      function u() {
        let { navigate: e } = (0, d.H)(),
          { setIsLoading: t } = (0, c.r)(),
          [a, u] = (0, o.useState)(!1),
          [h, g] = (0, o.useState)(!1),
          [C, x] = (0, o.useState)(null),
          f = {
            background: "15.png",
            base: "1.png",
            eyes: "1.png",
            hands: null,
            clothes: null,
            hat: null,
            mouth: null,
          };
        (0, o.useEffect)(() => {
          let e = setTimeout(() => {
            t(!1);
          }, 500);
          return () => clearTimeout(e);
        }, [t]);
        let p = (t) => {
            u(!1), e(t);
          },
          [m, w] = (0, o.useState)(f),
          b = (0, o.useRef)(f),
          k = (0, o.useRef)(null),
          v = (0, o.useRef)(document.createElement("canvas")),
          y = async (e, t) => {
            console.log("selectTrait: Changing ".concat(e, " to ").concat(t)),
              x(e),
              w((a) => ({ ...a, [e]: t })),
              await N({ ...m, [e]: t }),
              x(null);
          },
          j = async () => {
            if (h) {
              console.log(
                "randomizeTraits: Already generating, returning early"
              );
              return;
            }
            console.log("randomizeTraits: Starting"), g(!0);
            let e = {
              background: null,
              base: null,
              eyes: null,
              hands: null,
              clothes: null,
              hat: null,
              mouth: null,
            };
            Object.keys(l).forEach((t) => {
              let a = l[t].options;
              e[t] = a[Math.floor(Math.random() * a.length)];
            }),
              w(e),
              await N(e),
              g(!1),
              console.log("randomizeTraits: Finished");
          },
          L = (0, o.useCallback)(async (e, t) => {
            console.log("drawTraitImages: Starting");
            let a = Object.keys(l);
            for (let r of (a.sort((e, t) => l[e].priority - l[t].priority),
            a)) {
              let a = t[r];
              if (a) {
                console.log(
                  "drawTraitImages: Loading image for category ".concat(r)
                );
                let t = await S("".concat(l[r].path, "/").concat(a));
                e.drawImage(t, 0, 0, e.canvas.width, e.canvas.height);
              }
            }
            console.log("drawTraitImages: Finished");
          }, []),
          N = (0, o.useCallback)(
            async (e) => {
              console.log("drawImage: Starting");
              let t = v.current,
                a = k.current;
              if (t && a) {
                (t.width = 1500), (t.height = 1500);
                let r = t.getContext("2d");
                if (r) {
                  r.clearRect(0, 0, t.width, t.height), await L(r, e);
                  let o = a.getContext("2d");
                  o &&
                    (o.clearRect(0, 0, a.width, a.height),
                    o.drawImage(t, 0, 0, 1e3, 1e3));
                }
              }
              console.log("drawImage: Finished");
            },
            [L]
          ),
          S = (e) => (
            console.log("loadImage: Loading image from ".concat(e)),
            new Promise((t, a) => {
              let r = new window.Image();
              (r.src = e),
                (r.onload = () => {
                  console.log("loadImage: Loaded image from ".concat(e)), t(r);
                }),
                (r.onerror = (t) => {
                  console.error(
                    "loadImage: Failed to load image from ".concat(e),
                    t
                  ),
                    a(t);
                });
            })
          );
        return (
          (0, o.useEffect)(() => {
            N(b.current);
          }, [N]),
          (0, o.useEffect)(() => {
            N(m);
          }, [m, N]),
          (0, r.jsxs)("div", {
            className:
              "h-[100dvh] w-full font-[Starlight] text-2xl p-4 pt-20 overflow-y-scroll flex items-center justify-start md:justify-center flex-col bg-[url('/generator/background.png')] bg-left bg-cover",
            children: [
              (0, r.jsx)("button", {
                onClick: () => p("/beach"),
                className:
                  "fixed top-6 left-6 *:transition-all *:ease-in-out duration-200 hover:scale-105 active:scale-100 border-black border-4 rounded-lg bg-black/50 z-40 p-2",
                children: (0, r.jsx)(n.default, {
                  src: "/icons/back.svg",
                  className: "w-12 h-12",
                  width: 50,
                  height: 50,
                  alt: "",
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col p-8 max-w-[500px] md:max-w-max w-full",
                children: (0, r.jsxs)("div", {
                  className: "flex flex-col md:flex-row",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "border-black drop-shadow-[-8px_8px_0_rgba(0,0,0,0.25)] relative flex justify-between items-center gap-6 md:gap-8 flex-col border-8 p-4 md:p-8 w-full bg-[#d0d0d0]",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "border-8 -rotate-1 w-full border-black relative",
                          children: [
                            h &&
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 flex w-full h-full z-[100] items-center justify-center bg-black/50",
                                children: (0, r.jsx)("div", {
                                  className: "text-white animate-spin",
                                  children: (0, r.jsx)(i.X5, {
                                    className: "w-10 h-10",
                                  }),
                                }),
                              }),
                            (0, r.jsx)("canvas", {
                              ref: k,
                              width: 1e3,
                              height: 1e3,
                              className:
                                "w-full h-full max-w-[600px] max-h-[600px] -mr-[1px]",
                            }),
                          ],
                        }),
                        (0, r.jsx)(n.default, {
                          className: "w-full md:max-w-[200px] max-w-[170px]",
                          width: 100,
                          height: 30,
                          src: "/icons/rok.svg",
                          alt: "",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex transition-all ease-in-out flex-col w-full md:w-fit p-4",
                      children: [
                        (0, r.jsx)(s, {
                          category: "background",
                          selectedTrait: m.background,
                          onSelect: y,
                          isLoading: "background" === C,
                        }),
                        (0, r.jsx)(s, {
                          category: "eyes",
                          selectedTrait: m.eyes,
                          onSelect: y,
                          isLoading: "eyes" === C,
                        }),
                        (0, r.jsx)(s, {
                          category: "clothes",
                          selectedTrait: m.clothes,
                          onSelect: y,
                          isLoading: "clothes" === C,
                        }),
                        (0, r.jsx)(s, {
                          category: "hat",
                          selectedTrait: m.hat,
                          onSelect: y,
                          isLoading: "hat" === C,
                        }),
                        (0, r.jsx)(s, {
                          category: "hands",
                          selectedTrait: m.hands,
                          onSelect: y,
                          isLoading: "hands" === C,
                        }),
                        (0, r.jsx)(s, {
                          category: "mouth",
                          selectedTrait: m.mouth,
                          onSelect: y,
                          isLoading: "mouth" === C,
                        }),
                        (0, r.jsxs)("button", {
                          onClick: j,
                          disabled: h,
                          className:
                            "mt-4 p-3 items-center rounded-xl transition-all ease-in-out duration-200 hover:scale-105 active:scale-100 gap-4 justify-center bg-black flex text-white",
                          children: [
                            (0, r.jsx)(i.kB, { className: "w-8 h-8" }),
                            "Randomize",
                          ],
                        }),
                        (0, r.jsxs)("button", {
                          onClick: () => {
                            w(f), N(f);
                          },
                          className:
                            "mt-4 p-3 items-center rounded-xl transition-all ease-in-out duration-200 hover:scale-105 active:scale-100 gap-4 justify-center bg-black flex text-white",
                          children: [
                            (0, r.jsx)(i.X5, { className: "w-8 h-8" }),
                            "Reset Traits",
                          ],
                        }),
                        (0, r.jsxs)("button", {
                          onClick: () => {
                            let e = v.current;
                            if (e) {
                              let t = e.width,
                                a = e.height;
                              (e.width = 1e3), (e.height = 1e3);
                              let r = e.getContext("2d");
                              r &&
                                L(r, m).then(() => {
                                  let o = document.createElement("a");
                                  (o.href = e.toDataURL("image/png")),
                                    (o.download = "generated_image.png"),
                                    o.click(),
                                    (e.width = t),
                                    (e.height = a),
                                    L(r, m);
                                });
                            }
                          },
                          className:
                            "mt-4 overflow-visible justify-center text-nowrap rounded-xl border-[5px] border-black bg-[#FDC500] px-8 py-4 font-bold text-black drop-shadow-[0_8px_0_rgba(0,0,0,0.25)] transition duration-300 hover:rotate-2 hover:scale-105 hover:bg-[#e3b100] flex items-center gap-4",
                          children: [
                            (0, r.jsx)(i._8, { className: "w-8 h-8" }),
                            "Download",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    4088: function (e, t, a) {
      a.d(t, {
        S9: function () {
          return n;
        },
        X5: function () {
          return o;
        },
        _8: function () {
          return s;
        },
        kB: function () {
          return l;
        },
      });
      var r = a(7437);
      function o(e) {
        return (0, r.jsx)("svg", {
          ...e,
          width: "28",
          height: "25",
          viewBox: "0 0 28 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M21.5297 17.9407C17.8352 21.2657 12.7857 23.0679 7.93321 21.636C5.69695 20.9761 4.33069 18.7029 3.58094 16.6678C2.95893 14.9796 2.84187 13.0137 2.84187 11.2304C2.84187 9.79272 2.82469 8.3864 3.31698 7.01893C3.68324 6.00156 4.15891 4.97954 4.84791 4.13305C5.4972 3.33535 6.8701 2.92515 7.78071 2.54934C8.74579 2.15105 9.83687 2.10355 10.866 2.10355C11.7153 2.10355 12.7888 1.92792 13.6111 2.15634C14.2748 2.34069 15.0903 2.20284 15.7227 2.50241C16.4433 2.84372 17.1831 3.31176 17.8344 3.76938C19.4166 4.88127 21.2914 5.55454 22.6676 6.98374C23.0495 7.38028 23.3725 7.90939 23.6413 8.37975C23.84 8.72751 24.0636 8.99614 24.0636 8.39148C24.0636 7.48119 24.1155 6.59309 24.2513 5.6933C24.3943 4.74577 24.0276 3.62698 24.2983 2.71358C24.3993 2.37254 24.3804 2.5053 24.3804 2.7605C24.3804 3.33533 24.3804 3.91016 24.3804 4.48499C24.3804 5.87318 24.3804 7.26137 24.3804 8.64957C24.3804 9.22362 24.3993 9.56214 23.7352 9.48835C22.0939 9.30598 20.3527 9.17716 18.7435 8.8138C17.8674 8.61597 16.9347 8.64957 16.0395 8.64957C15.9869 8.64957 15.2598 8.66151 15.4705 8.75515C16.2634 9.10754 17.4373 9.09856 18.2801 9.15401C20.3106 9.28759 22.3662 9.47571 24.3804 9.69951C24.4722 9.70971 25.0229 9.77322 25.096 9.68191C25.1676 9.5924 24.7979 8.96162 24.7499 8.85486C23.9808 7.14579 24.0636 5.19618 24.0636 3.37052C24.0636 3.30249 24.0587 2.84603 24.0108 2.91301C23.7331 3.30185 23.8231 4.40276 23.7234 4.87212C23.4501 6.15922 23.3246 7.54285 23.3246 8.86073",
            stroke: "white",
            strokeWidth: "3",
            strokeLinecap: "round",
          }),
        });
      }
      function n(e) {
        return (0, r.jsx)("svg", {
          ...e,
          width: "123",
          height: "86",
          viewBox: "-10 0 140 86",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeWidth: 6,
            d: "M93.5612 4.87542C93.2876 4.41091 92.9203 4.00836 92.4828 3.69336C92.0453 3.37835 91.5471 3.15777 91.0198 3.04562L82.7094 1.1904C80.901 0.73633 78.9977 0.837786 77.2479 1.48153C75.498 2.12528 73.9827 3.28142 72.8997 4.79917L70.155 8.89082C69.72 9.56788 69.5472 10.3804 69.6688 11.1759C69.7905 11.9713 70.1983 12.6951 70.8157 13.2112L80.9813 22.284C81.2239 22.5853 81.5161 22.8432 81.8454 23.0464L91.0198 27.3922C91.8324 27.8247 92.7833 27.9177 93.6643 27.651C94.5454 27.3843 95.285 26.7796 95.7214 25.969L99.6351 17.9636C99.8574 17.484 99.9575 16.9568 99.9264 16.4291C99.8954 15.9014 99.7342 15.3896 99.4572 14.9393L93.5612 4.87542ZM86.5726 37.6599L58.3886 16.4647C57.1042 15.5011 55.6207 14.8367 54.0466 14.5201C52.4725 14.2035 50.8475 14.2427 49.2904 14.6349L24.5627 20.8105C18.9356 22.2193 13.8579 25.2778 9.98166 29.5933C6.10538 33.9088 3.60738 39.2844 2.80836 45.0299L0.521103 60.8882C0.181042 63.4022 0.738846 65.9555 2.0963 68.0986C3.45375 70.2417 5.52381 71.8372 7.94197 72.604L46.5457 85.311C47.6374 85.6653 48.7781 85.8454 49.9258 85.8447H80.0921C81.5081 85.848 82.9108 85.5716 84.2197 85.0313C85.5285 84.4909 86.7177 83.6973 87.719 82.6961C88.7203 81.6948 89.5139 80.5056 90.0542 79.1967C90.5945 77.8879 90.871 76.4852 90.8676 75.0692V46.2752C90.8725 44.6038 90.4868 42.9544 89.7411 41.4586C88.9954 39.9628 87.9104 38.6619 86.5726 37.6599ZM119.127 33.491L122.228 38.7771C122.531 39.3742 122.586 40.0669 122.382 40.7046C122.177 41.3423 121.729 41.8734 121.135 42.1826L115.036 46.1725C114.809 46.3263 114.56 46.4462 114.299 46.5283L105.099 49.3239C104.575 49.5114 104 49.4922 103.49 49.2703C102.98 49.0483 102.574 48.6404 102.354 48.1294L101.109 44.9273C100.672 43.6632 100.61 42.2998 100.93 41.0012C101.25 39.7027 101.939 38.5243 102.913 37.6081L107.259 33.2115C107.527 32.9306 107.851 32.7086 108.21 32.5599C108.569 32.4111 108.955 32.3387 109.343 32.3474L117.323 32.4999C117.684 32.4921 118.041 32.5797 118.358 32.7537C118.675 32.9277 118.94 33.182 119.127 33.491Z",
            className: "animate-draw ",
          }),
        });
      }
      function l(e) {
        return (0, r.jsxs)("svg", {
          ...e,
          width: "26",
          height: "26",
          viewBox: "0 0 26 26",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M6.37782 15.9015C6.13199 15.4099 5.51683 14.9986 5.12821 14.61C4.69734 14.1791 4.28379 13.7384 3.82829 13.3352C3.41449 12.9689 3.13497 12.5125 2.79254 12.094C2.02095 11.1509 2 10.2347 2 9.04963C2 8.32438 2.51657 7.93217 2.88898 7.35553C3.26436 6.7743 3.74869 6.23246 4.1931 5.69917C5.01439 4.71363 5.92834 3.82136 6.83489 2.91481C7.15584 2.59386 7.4553 2.3546 7.82032 2.12647C8.14864 1.92127 9.09351 2.11029 9.40539 2.22291C10.315 2.55138 11.18 2.94712 11.9298 3.56058C12.4569 3.99185 13.5312 4.27688 13.8671 4.88147C14.0421 5.19655 14.6031 5.40785 14.8693 5.67401C15.1083 5.91303 15.3473 6.15205 15.5863 6.39107",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M8.79297 9.78837C8.94753 9.7712 9.14522 9.76318 9.17037 9.71289",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M11.3593 13.7133C11.3593 15.953 11.2116 18.264 11.5061 20.473C11.7146 22.0369 13.4874 22.8354 14.9069 22.9931C15.8152 23.0941 16.7845 22.9973 17.6996 22.9973C18.6214 22.9973 19.5351 22.9488 20.4504 22.9218C21.1455 22.9014 22.1528 22.792 22.719 22.3516C23.366 21.8483 23.8135 20.7848 23.8135 19.9781C23.8135 19.0668 23.8135 18.1554 23.8135 17.2441C23.8135 16.3959 23.889 15.5506 23.889 14.7071C23.889 14.1504 24.0247 13.4649 23.7715 12.9585C23.5956 12.6067 23.1289 12.368 22.849 12.1115C22.4451 11.7413 21.8488 11.7545 21.3562 11.5999C20.8473 11.4402 20.3832 11.4489 19.8508 11.4489C19.3635 11.4489 18.896 11.3735 18.4083 11.3735C16.7658 11.3735 14.9695 11.1367 13.4728 11.885C12.555 12.3439 11.7258 13.401 11.3593 14.3172",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M14.9824 15.5996C15.052 15.6083 15.0324 15.6241 15.0579 15.6751",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M19.209 19.4505C19.2177 19.3809 19.2335 19.4005 19.2845 19.375",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        });
      }
      function s(e) {
        return (0, r.jsxs)("svg", {
          ...e,
          width: "26",
          height: "27",
          viewBox: "0 0 26 27",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M13.0604 2.22852C13.0604 4.13996 13.0604 6.05141 13.0604 7.96285C13.0604 8.84376 12.9601 9.71179 12.9601 10.5876C12.9601 11.3853 13.0066 12.28 12.8375 13.0619C12.4418 14.892 12.6592 16.75 12.6592 18.5789",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M12.6597 18.5788C12.2906 18.5378 11.8363 17.9947 11.5451 17.7707C11.0589 17.3967 10.5702 17.0811 10.1297 16.6506C9.68083 16.212 9.19381 15.8151 8.74764 15.3689C8.47104 15.0923 7.93482 14.5619 8.62504 15.1237C9.91798 16.1761 11.3075 17.0592 12.5594 18.172C12.9681 18.5353 13.4497 18.8694 13.7575 19.3311C14.0592 19.7835 14.1867 18.9437 14.3817 18.7682C15.6174 17.6561 16.887 16.5663 18.2213 15.5751C18.5648 15.3199 19.0455 14.7339 19.3804 14.5664",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M2.42896 16.4727C2.42896 18.3276 2.32865 20.162 2.32865 22.0119C2.32865 22.5014 2.30196 22.583 2.62958 22.8924C3.06367 23.3024 3.71476 23.4441 4.2791 23.5946C5.81956 24.0054 7.55609 24.0961 9.14409 24.0961C10.8201 24.0961 12.538 24.1965 14.232 24.1965C15.6475 24.1965 17.0523 23.9958 18.4784 23.9958C19.8534 23.9958 21.0307 23.7119 22.3793 23.4497C23.299 23.2709 23.5942 23.2148 23.5942 22.246C23.5942 21.5865 23.4939 20.932 23.4939 20.2844C23.4939 19.2813 23.4939 18.2782 23.4939 17.2751",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        });
      }
    },
    2811: function (e, t, a) {
      a.d(t, {
        LoadingProvider: function () {
          return l;
        },
        r: function () {
          return s;
        },
      });
      var r = a(7437),
        o = a(2265);
      let n = (0, o.createContext)(void 0),
        l = (e) => {
          let { children: t } = e,
            [a, l] = (0, o.useState)(!0),
            [s, i] = (0, o.useState)(!1),
            c = (0, o.useMemo)(
              () => ({
                isLoading: a,
                isExiting: s,
                setIsLoading: l,
                setIsExiting: i,
              }),
              [a, s]
            );
          return (0, r.jsx)(n.Provider, { value: c, children: t });
        },
        s = () => {
          let e = (0, o.useContext)(n);
          if (!e)
            throw Error("useLoading must be used within a LoadingProvider");
          return e;
        };
    },
    1980: function (e, t, a) {
      a.d(t, {
        H: function () {
          return n;
        },
      });
      var r = a(6463),
        o = a(2811);
      function n() {
        let e = (0, r.useRouter)(),
          { setIsLoading: t, setIsExiting: a } = (0, o.r)();
        return {
          navigate: async (r) => {
            a(!0),
              setTimeout(async () => {
                try {
                  await e.push(r);
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
]);
