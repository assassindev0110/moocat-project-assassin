(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[898], {
		5064: function(e, t, l) {
			Promise.resolve().then(l.bind(l, 3274))
		},
		4930: function(e, t, l) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "default", {
				enumerable: !0,
				get: function() {
					return u
				}
			});
			let n = l(1024);
			l(2265);
			let a = n._(l(4795));

			function r(e) {
				return {
					default: (null == e ? void 0 : e.default) || e
				}
			}

			function u(e, t) {
				let l = a.default,
					n = {
						loading: e => {
							let {
								error: t,
								isLoading: l,
								pastDelay: n
							} = e;
							return null
						}
					};
				"function" == typeof e && (n.loader = e), Object.assign(n, t);
				let u = n.loader;
				return l({
					...n,
					loader: () => null != u ? u().then(r) : Promise.resolve(r(() => null))
				})
			}("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
				value: !0
			}), Object.assign(t.default, t), e.exports = t.default)
		},
		6005: function(e, t, l) {
			"use strict";

			function n(e) {
				let {
					children: t
				} = e;
				return t
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "NoSSR", {
				enumerable: !0,
				get: function() {
					return n
				}
			}), l(6491)
		},
		4795: function(e, t, l) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "default", {
				enumerable: !0,
				get: function() {
					return r
				}
			});
			let n = l(1024)._(l(2265)),
				a = l(6005),
				r = function(e) {
					let t = Object.assign({
						loader: null,
						loading: null,
						ssr: !0
					}, e);

					function l(e) {
						let l = t.loading,
							r = n.default.createElement(l, {
								isLoading: !0,
								pastDelay: !0,
								error: null
							}),
							u = t.ssr ? n.default.Fragment : a.NoSSR,
							i = t.lazy;
						return n.default.createElement(n.default.Suspense, {
							fallback: r
						}, n.default.createElement(u, null, n.default.createElement(i, e)))
					}
					return t.lazy = n.default.lazy(t.loader), l.displayName = "LoadableComponent", l
				}
		},
		3274: function(e, t, l) {
			"use strict";
			l.r(t), l.d(t, {
				default: function() {
					return c
				}
			});
			var n = l(7437),
				a = l(536),
				r = l(4930),
				u = l.n(r),
				i = l(6691),
				d = l.n(i);
			l(2265);
			let s = u()(() => Promise.all([l.e(769), l.e(685), l.e(991)]).then(l.bind(l, 3991)), {
				loadableGenerated: {
					webpack: () => [3991]
				},
				ssr: !1
			});

			function c() {
				return (0, n.jsx)("div", {
					className: "p-10 md:h-screen",
					children: (0, n.jsxs)("div", {
						className: "w-full flex flex-col items-center md:justify-center h-full cstm_okokok ",
						children: [(0, n.jsx)(o, {}), (0, n.jsx)(a.Z, {
							delay: .8,
							children: (0, n.jsx)("div", {
								className: "relative md:w-[300px] md:h-[60px] w-[200px] h-[70px] z-20 mb-10 mt-2 text-white",
							})
						}), (0, n.jsx)(a.Z, {
							delay: 1,
							children: (0, n.jsx)(s, {})
						})]
					})
				})
			}

			function o() {
				return (0, n.jsxs)("div", {
					className: "flex gap-4 md:text-5xl text-3xl items-end",
					children: [(0, n.jsx)(a.Z, {
						children: "Put"
					}), (0, n.jsx)(a.Z, {
						delay: .2,
						children: "on"
					}), (0, n.jsx)(a.Z, {
						delay: .4,
						children: "a"
					}), (0, n.jsx)(a.Z, {
						delay: .6,
						children: "MooCat Hat"
					})]
				})
			}
		},
		536: function(e, t, l) {
			"use strict";
			var n = l(7437),
				a = l(347);
			t.Z = e => {
				let {
					children: t,
					delay: l,
					className: r
				} = e;
				return (0, n.jsx)(a.E.div, {
					initial: {
						opacity: 0,
						scale: .5
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						delay: l,
						damping: 10
					},
					className: "z-[300]",
					children: t
				})
			}
		}
	},
	function(e) {
		e.O(0, [591, 971, 938, 744], function() {
			return e(e.s = 5064)
		}), _N_E = e.O()
	}
]);