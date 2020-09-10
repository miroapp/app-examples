!(function () {
	'use strict'
	var t = (function (t, r) {
		return t((r = {exports: {}}), r.exports), r.exports
	})(function (t) {
		var r = (function (t) {
			var r,
				e = Object.prototype,
				n = e.hasOwnProperty,
				o = 'function' == typeof Symbol ? Symbol : {},
				i = o.iterator || '@@iterator',
				a = o.asyncIterator || '@@asyncIterator',
				c = o.toStringTag || '@@toStringTag'
			function u(t, r, e, n) {
				var o = r && r.prototype instanceof v ? r : v,
					i = Object.create(o.prototype),
					a = new k(n || [])
				return (
					(i._invoke = (function (t, r, e) {
						var n = f
						return function (o, i) {
							if (n === l) throw new Error('Generator is already running')
							if (n === p) {
								if ('throw' === o) throw i
								return S()
							}
							for (e.method = o, e.arg = i; ; ) {
								var a = e.delegate
								if (a) {
									var c = _(a, e)
									if (c) {
										if (c === d) continue
										return c
									}
								}
								if ('next' === e.method) e.sent = e._sent = e.arg
								else if ('throw' === e.method) {
									if (n === f) throw ((n = p), e.arg)
									e.dispatchException(e.arg)
								} else 'return' === e.method && e.abrupt('return', e.arg)
								n = l
								var u = s(t, r, e)
								if ('normal' === u.type) {
									if (((n = e.done ? p : h), u.arg === d)) continue
									return {value: u.arg, done: e.done}
								}
								'throw' === u.type && ((n = p), (e.method = 'throw'), (e.arg = u.arg))
							}
						}
					})(t, e, a)),
					i
				)
			}
			function s(t, r, e) {
				try {
					return {type: 'normal', arg: t.call(r, e)}
				} catch (t) {
					return {type: 'throw', arg: t}
				}
			}
			t.wrap = u
			var f = 'suspendedStart',
				h = 'suspendedYield',
				l = 'executing',
				p = 'completed',
				d = {}
			function v() {}
			function y() {}
			function g() {}
			var m = {}
			m[i] = function () {
				return this
			}
			var w = Object.getPrototypeOf,
				x = w && w(w(P([])))
			x && x !== e && n.call(x, i) && (m = x)
			var b = (g.prototype = v.prototype = Object.create(m))
			function L(t) {
				;['next', 'throw', 'return'].forEach(function (r) {
					t[r] = function (t) {
						return this._invoke(r, t)
					}
				})
			}
			function E(t) {
				var r
				this._invoke = function (e, o) {
					function i() {
						return new Promise(function (r, i) {
							!(function r(e, o, i, a) {
								var c = s(t[e], t, o)
								if ('throw' !== c.type) {
									var u = c.arg,
										f = u.value
									return f && 'object' == typeof f && n.call(f, '__await')
										? Promise.resolve(f.__await).then(
												function (t) {
													r('next', t, i, a)
												},
												function (t) {
													r('throw', t, i, a)
												}
										  )
										: Promise.resolve(f).then(
												function (t) {
													;(u.value = t), i(u)
												},
												function (t) {
													return r('throw', t, i, a)
												}
										  )
								}
								a(c.arg)
							})(e, o, r, i)
						})
					}
					return (r = r ? r.then(i, i) : i())
				}
			}
			function _(t, e) {
				var n = t.iterator[e.method]
				if (n === r) {
					if (((e.delegate = null), 'throw' === e.method)) {
						if (t.iterator.return && ((e.method = 'return'), (e.arg = r), _(t, e), 'throw' === e.method)) return d
						;(e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
					}
					return d
				}
				var o = s(n, t.iterator, e.arg)
				if ('throw' === o.type) return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), d
				var i = o.arg
				return i
					? i.done
						? ((e[t.resultName] = i.value),
						  (e.next = t.nextLoc),
						  'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
						  (e.delegate = null),
						  d)
						: i
					: ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), d)
			}
			function j(t) {
				var r = {tryLoc: t[0]}
				1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r)
			}
			function O(t) {
				var r = t.completion || {}
				;(r.type = 'normal'), delete r.arg, (t.completion = r)
			}
			function k(t) {
				;(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(j, this), this.reset(!0)
			}
			function P(t) {
				if (t) {
					var e = t[i]
					if (e) return e.call(t)
					if ('function' == typeof t.next) return t
					if (!isNaN(t.length)) {
						var o = -1,
							a = function e() {
								for (; ++o < t.length; ) if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e
								return (e.value = r), (e.done = !0), e
							}
						return (a.next = a)
					}
				}
				return {next: S}
			}
			function S() {
				return {value: r, done: !0}
			}
			return (
				(y.prototype = b.constructor = g),
				(g.constructor = y),
				(g[c] = y.displayName = 'GeneratorFunction'),
				(t.isGeneratorFunction = function (t) {
					var r = 'function' == typeof t && t.constructor
					return !!r && (r === y || 'GeneratorFunction' === (r.displayName || r.name))
				}),
				(t.mark = function (t) {
					return (
						Object.setPrototypeOf
							? Object.setPrototypeOf(t, g)
							: ((t.__proto__ = g), c in t || (t[c] = 'GeneratorFunction')),
						(t.prototype = Object.create(b)),
						t
					)
				}),
				(t.awrap = function (t) {
					return {__await: t}
				}),
				L(E.prototype),
				(E.prototype[a] = function () {
					return this
				}),
				(t.AsyncIterator = E),
				(t.async = function (r, e, n, o) {
					var i = new E(u(r, e, n, o))
					return t.isGeneratorFunction(e)
						? i
						: i.next().then(function (t) {
								return t.done ? t.value : i.next()
						  })
				}),
				L(b),
				(b[c] = 'Generator'),
				(b[i] = function () {
					return this
				}),
				(b.toString = function () {
					return '[object Generator]'
				}),
				(t.keys = function (t) {
					var r = []
					for (var e in t) r.push(e)
					return (
						r.reverse(),
						function e() {
							for (; r.length; ) {
								var n = r.pop()
								if (n in t) return (e.value = n), (e.done = !1), e
							}
							return (e.done = !0), e
						}
					)
				}),
				(t.values = P),
				(k.prototype = {
					constructor: k,
					reset: function (t) {
						if (
							((this.prev = 0),
							(this.next = 0),
							(this.sent = this._sent = r),
							(this.done = !1),
							(this.delegate = null),
							(this.method = 'next'),
							(this.arg = r),
							this.tryEntries.forEach(O),
							!t)
						)
							for (var e in this) 't' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
					},
					stop: function () {
						this.done = !0
						var t = this.tryEntries[0].completion
						if ('throw' === t.type) throw t.arg
						return this.rval
					},
					dispatchException: function (t) {
						if (this.done) throw t
						var e = this
						function o(n, o) {
							return (c.type = 'throw'), (c.arg = t), (e.next = n), o && ((e.method = 'next'), (e.arg = r)), !!o
						}
						for (var i = this.tryEntries.length - 1; i >= 0; --i) {
							var a = this.tryEntries[i],
								c = a.completion
							if ('root' === a.tryLoc) return o('end')
							if (a.tryLoc <= this.prev) {
								var u = n.call(a, 'catchLoc'),
									s = n.call(a, 'finallyLoc')
								if (u && s) {
									if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
									if (this.prev < a.finallyLoc) return o(a.finallyLoc)
								} else if (u) {
									if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
								} else {
									if (!s) throw new Error('try statement without catch or finally')
									if (this.prev < a.finallyLoc) return o(a.finallyLoc)
								}
							}
						}
					},
					abrupt: function (t, r) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var o = this.tryEntries[e]
							if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
								var i = o
								break
							}
						}
						i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null)
						var a = i ? i.completion : {}
						return (
							(a.type = t), (a.arg = r), i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
						)
					},
					complete: function (t, r) {
						if ('throw' === t.type) throw t.arg
						return (
							'break' === t.type || 'continue' === t.type
								? (this.next = t.arg)
								: 'return' === t.type
								? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
								: 'normal' === t.type && r && (this.next = r),
							d
						)
					},
					finish: function (t) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var e = this.tryEntries[r]
							if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), d
						}
					},
					catch: function (t) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var e = this.tryEntries[r]
							if (e.tryLoc === t) {
								var n = e.completion
								if ('throw' === n.type) {
									var o = n.arg
									O(e)
								}
								return o
							}
						}
						throw new Error('illegal catch attempt')
					},
					delegateYield: function (t, e, n) {
						return (
							(this.delegate = {iterator: P(t), resultName: e, nextLoc: n}), 'next' === this.method && (this.arg = r), d
						)
					},
				}),
				t
			)
		})(t.exports)
		try {
			regeneratorRuntime = r
		} catch (t) {
			Function('r', 'regeneratorRuntime = r')(r)
		}
	})
	var r = function (t, r, e) {
		return (
			r in t ? Object.defineProperty(t, r, {value: e, enumerable: !0, configurable: !0, writable: !0}) : (t[r] = e), t
		)
	}
	var e = function (t) {
		if (Array.isArray(t)) {
			for (var r = 0, e = new Array(t.length); r < t.length; r++) e[r] = t[r]
			return e
		}
	}
	var n = function (t) {
		if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t)
	}
	var o = function () {
		throw new TypeError('Invalid attempt to spread non-iterable instance')
	}
	var i = function (t) {
		return e(t) || n(t) || o()
	}
	function a(t, r, e, n, o, i, a) {
		try {
			var c = t[i](a),
				u = c.value
		} catch (t) {
			return void e(t)
		}
		c.done ? r(u) : Promise.resolve(u).then(n, o)
	}
	var c = function (t) {
			return function () {
				var r = this,
					e = arguments
				return new Promise(function (n, o) {
					var i = t.apply(r, e)
					function c(t) {
						a(i, n, o, c, u, 'next', t)
					}
					function u(t) {
						a(i, n, o, c, u, 'throw', t)
					}
					c(void 0)
				})
			}
		},
		u = 30,
		s = 10,
		f = 'https://docs.google.com/spreadsheets/d/121-56BwZe8Cws0A8xE_cSGXc64YD_bBPfQM8o2YVnaM/edit?usp=sharing'
	function h() {
		return l.apply(this, arguments)
	}
	function l() {
		return (l = c(
			t.mark(function e() {
				var n, o, a, h
				return t.wrap(function (e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								return (e.next = 2), miro.getClientId()
							case 2:
								return (n = e.sent), (e.next = 5), Tabletop.init({key: f, simpleSheet: !0})
							case 5:
								return (o = e.sent), (e.next = 8), miro.board.viewport.get()
							case 8:
								;(a = e.sent),
									(h =
										2 *
										Math.max.apply(
											Math,
											i(
												o.map(function (t) {
													return t.rate
												})
											)
										)),
									o.forEach(
										(function () {
											var e = c(
												t.mark(function e(o, i) {
													var c, f, l, p, d, v, y, g
													return t.wrap(function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(c = o.role),
																		(f = o.rate),
																		(f = parseFloat(f)),
																		(t.next = 4),
																		miro.board.widgets.get({type: 'shape'})
																	)
																case 4:
																	;(t.t0 = function (t) {
																		return !!t.metadata[n]
																	}),
																		(l = t.sent.filter(t.t0)),
																		(p = l.find(function (t) {
																			return t.metadata[n].role === c
																		})),
																		(d = 2 * f),
																		p
																			? ((v = p.x - (p.width - d) / 2),
																			  miro.board.widgets.update([
																					{id: p.id, text: ''.concat(f, '%'), width: d, x: v},
																			  ]))
																			: ((y = a.x + a.width / 2 - (h - d) / 2),
																			  (g = a.y + u / 2 + (u + s) * i),
																			  miro.board.widgets.create({
																					type: 'shape',
																					text: ''.concat(f, '%'),
																					width: d,
																					height: u,
																					x: y,
																					y: g,
																					style: {
																						borderWidth: 0,
																						backgroundColor: '#4262ff',
																						fontSize: 8,
																						textAlign: 'c',
																						textAlignVertical: 'm',
																						textColor: '#ffffff',
																					},
																					metadata: r({}, n, {role: c}),
																			  }),
																			  miro.board.widgets.create({
																					type: 'text',
																					x: a.x + a.width / 2 - h - 110,
																					y: g,
																					width: 400,
																					style: {textAlign: 'r', fontSize: 12},
																					text: c,
																					metadata: r({}, n, {role: c}),
																			  }))
																case 9:
																case 'end':
																	return t.stop()
															}
													}, e)
												})
											)
											return function (t, r) {
												return e.apply(this, arguments)
											}
										})()
									)
							case 11:
							case 'end':
								return e.stop()
						}
				}, e)
			})
		)).apply(this, arguments)
	}
	miro.onReady(function () {
		miro.initialize({
			extensionPoints: {
				bottomBar: {
					title: 'Import data from spreadsheet',
					svgIcon:
						'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-import" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path></svg>',
					onClick: h,
				},
			},
		})
	})
})()
