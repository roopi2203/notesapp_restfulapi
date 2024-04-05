;(() => {
  var t = {
      267: (t) => {
        'use strict'
        t.exports = function (t) {
          var n = []
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = '',
                  r = void 0 !== n[5]
                return (
                  n[4] && (e += '@supports ('.concat(n[4], ') {')),
                  n[2] && (e += '@media '.concat(n[2], ' {')),
                  r &&
                    (e += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {',
                    )),
                  (e += t(n)),
                  r && (e += '}'),
                  n[2] && (e += '}'),
                  n[4] && (e += '}'),
                  e   
                )
              }).join('')
            }),
            (n.i = function (t, e, r, o, i) {
              'string' == typeof t && (t = [[null, t, void 0]])
              var u = {}
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var a = this[c][0]
                  null != a && (u[a] = !0)
                }
              for (var l = 0; l < t.length; l++) {
                var p = [].concat(t[l])
                ;(r && u[p[0]]) ||
                  (void 0 !== i &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'
                        .concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {')
                        .concat(p[1], '}')),
                    (p[5] = i)),
                  e &&
                    (p[2]
                      ? ((p[1] = '@media '
                          .concat(p[2], ' {')
                          .concat(p[1], '}')),
                        (p[2] = e))
                      : (p[2] = e)),
                  o &&
                    (p[4]
                      ? ((p[1] = '@supports ('
                          .concat(p[4], ') {')
                          .concat(p[1], '}')),
                        (p[4] = o))
                      : (p[4] = ''.concat(o))),
                  n.push(p))
              }
            }),
            n
          )
        }
      },
      978: (t) => {
        'use strict'
        t.exports = function (t) {
          return t[1]
        }
      },
      0: () => {
        function t(n) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(n)
          )
        }
        function n(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r]
            ;(o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, e(o.key), o)
          }
        }
        function e(n) {
          var e = (function (n, e) {
            if ('object' != t(n) || !n) return n
            var r = n[Symbol.toPrimitive]
            if (void 0 !== r) {
              var o = r.call(n, 'string')
              if ('object' != t(o)) return o
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return String(n)
          })(n)
          return 'symbol' == t(e) ? e : e + ''
        }
        function r(t) {
          var n = 'function' == typeof Map ? new Map() : void 0
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (n) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t)
                n.set(t, e)
              }
              function e() {
                return (function (t, n, e) {
                  if (o()) return Reflect.construct.apply(null, arguments)
                  var r = [null]
                  r.push.apply(r, n)
                  var u = new (t.bind.apply(t, r))()
                  return e && i(u, e.prototype), u
                })(t, arguments, u(this).constructor)
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, t)
              )
            }),
            r(t)
          )
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (o = function () {
            return !!t
          })()
        }
        function i(t, n) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t
                }),
            i(t, n)
          )
        }
        function u(t) {
          return (
            (u = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            u(t)
          )
        }
        var c = (function (e) {
          function r() {
            var n, e, i, c
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
              (((e = this),
              (i = r),
              (i = u(i)),
              (n = (function (n, e) {
                if (e && ('object' === t(e) || 'function' == typeof e)) return e
                if (void 0 !== e)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(n)
              })(
                e,
                o()
                  ? Reflect.construct(i, c || [], u(e).constructor)
                  : i.apply(e, c),
              )))._style = document.createElement('style')),
              n
            )
          }
          return (
            (function (t, n) {
              if ('function' != typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                n && i(t, n)
            })(r, e),
            (c = r),
            (a = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render()
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        .input_section {\n            border-radius: 5px;\n            background: white;\n            width: calc(100% - 15px);\n            box-shadow: 0 0 15px black;\n            top: 50%;\n            left: 50%;\n            z-index: 3;\n            width: 100%;\n            max-width: 1000px;\n            justify-content: center;\n        \n            max-width: 800px;\n            width: 80%;\n            margin: 50px auto;\n            padding: 16px;\n        }\n        \n        .input_section h2 {\n            padding: 15px 25px;\n            border-bottom: 1px solid #ccc;\n        }\n        \n        .input_section form {\n            margin: 15px 25px 35px;\n        }\n        \n        .input_section form .input {\n            margin-bottom: 20px;\n        }\n        \n        form .input label {\n            font-size: 18px;\n            display: block;\n            margin-bottom: 6px;\n        }\n        \n        form :where(input, textarea) {\n            height: 50px;\n            width: 100%;\n            outline: none;\n            font-size: 17px;\n            padding: 0 15px;\n            border-radius: 4px;\n            border: 1px solid #999;\n        }\n        \n        form :where(input, textarea):focus {\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);\n        }\n        \n        form .input textarea {\n            height: 150px;\n            resize: none;\n            padding: 8px 15px;\n        }\n        \n        form button {\n            width: 100%;\n            height: 50px;\n            color: #fff;\n            outline: none;\n            border: none;\n            cursor: pointer;\n            font-size: 17px;\n            border-radius: 4px;\n            background: #2d3e50;\n        }\n        '
                },
              },
              {
                key: 'render',
                value: function () {
                  this.updateStyle(),
                    (this.innerHTML = '\n        '.concat(
                      this._style.outerHTML,
                      '\n        <section class="input_section">\n        <h2>Tambahkan Catatan Baru</h2>\n        <form id="inputNote">\n            <div class="input">\n                <label for="inputNoteTitle">Judul Catatan</label>\n                <input id="inputNoteTitle" type="text"\n                name="title"\n                required\n                autocomplete="off">\n            </div>\n            <div class="input">\n                <label for="inputNoteDescription">Isi Catatan</label>\n                <textarea rows="5" id="inputNoteDescription" type="text"\n                name="body"\n                required\n                autocomplete="off"></textarea>\n            </div>\n            <button id="noteSubmit" type="submit">Simpan</button>\n        </form>\n    </section>\n      ',
                    ))
                },
              },
            ]) && n(c.prototype, a),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          )
          var c, a
        })(r(HTMLElement))
        customElements.define('input-note', c)
      },
      782: () => {
        function t(n) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(n)
          )
        }
        function n(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r]
            ;(o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, e(o.key), o)
          }
        }
        function e(n) {
          var e = (function (n, e) {
            if ('object' != t(n) || !n) return n
            var r = n[Symbol.toPrimitive]
            if (void 0 !== r) {
              var o = r.call(n, 'string')
              if ('object' != t(o)) return o
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return String(n)
          })(n)
          return 'symbol' == t(e) ? e : e + ''
        }
        function r(t) {
          var n = 'function' == typeof Map ? new Map() : void 0
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (n) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t)
                n.set(t, e)
              }
              function e() {
                return (function (t, n, e) {
                  if (o()) return Reflect.construct.apply(null, arguments)
                  var r = [null]
                  r.push.apply(r, n)
                  var u = new (t.bind.apply(t, r))()
                  return e && i(u, e.prototype), u
                })(t, arguments, u(this).constructor)
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, t)
              )
            }),
            r(t)
          )
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (o = function () {
            return !!t
          })()
        }
        function i(t, n) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t
                }),
            i(t, n)
          )
        }
        function u(t) {
          return (
            (u = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            u(t)
          )
        }
        var c = (function (e) {
          function r() {
            var n, e, i, c
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
              (((e = this),
              (i = r),
              (i = u(i)),
              (n = (function (n, e) {
                if (e && ('object' === t(e) || 'function' == typeof e)) return e
                if (void 0 !== e)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(n)
              })(
                e,
                o()
                  ? Reflect.construct(i, c || [], u(e).constructor)
                  : i.apply(e, c),
              )))._style = document.createElement('style')),
              n
            )
          }
          return (
            (function (t, n) {
              if ('function' != typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                n && i(t, n)
            })(r, e),
            (c = r),
            (a = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render()
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        .wrapper {\n            padding-block: 32px;\n            padding-inline: 24px;\n            background-color: #333;\n            color: white;\n        }\n        \n        .brand-name {\n            font-size: 2rem;\n            text-decoration: inherit;\n            color: inherit;\n        }\n        \n        \n        '
                },
              },
              {
                key: 'render',
                value: function () {
                  this.updateStyle(),
                    (this.innerHTML = '\n        '.concat(
                      this._style.outerHTML,
                      '\n                <div class="wrapper">\n                    <a href="#" class="brand-name">Notes App</a>\n                   \n                </div>\n      ',
                    ))
                },
              },
            ]) && n(c.prototype, a),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          )
          var c, a
        })(r(HTMLElement))
        customElements.define('nav-bar', c)
      },
      923: () => {
        function t(n) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(n)
          )
        }
        function n(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r]
            ;(o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, e(o.key), o)
          }
        }
        function e(n) {
          var e = (function (n, e) {
            if ('object' != t(n) || !n) return n
            var r = n[Symbol.toPrimitive]
            if (void 0 !== r) {
              var o = r.call(n, 'string')
              if ('object' != t(o)) return o
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return String(n)
          })(n)
          return 'symbol' == t(e) ? e : e + ''
        }
        function r(t) {
          var n = 'function' == typeof Map ? new Map() : void 0
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (n) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t)
                n.set(t, e)
              }
              function e() {
                return (function (t, n, e) {
                  if (o()) return Reflect.construct.apply(null, arguments)
                  var r = [null]
                  r.push.apply(r, n)
                  var u = new (t.bind.apply(t, r))()
                  return e && i(u, e.prototype), u
                })(t, arguments, u(this).constructor)
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, t)
              )
            }),
            r(t)
          )
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (o = function () {
            return !!t
          })()
        }
        function i(t, n) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t
                }),
            i(t, n)
          )
        }
        function u(t) {
          return (
            (u = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            u(t)
          )
        }
        var c = (function (e) {
          function r() {
            var n, e, i, c
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
              (((e = this),
              (i = r),
              (i = u(i)),
              (n = (function (n, e) {
                if (e && ('object' === t(e) || 'function' == typeof e)) return e
                if (void 0 !== e)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(n)
              })(
                e,
                o()
                  ? Reflect.construct(i, c || [], u(e).constructor)
                  : i.apply(e, c),
              )))._note = {
                id: 0,
                title: 'NEED_TITLE',
                body: 'NEED_BODY',
                createdAt: '',
              }),
              (n._style = document.createElement('style')),
              n
            )
          }
          return (
            (function (t, n) {
              if ('function' != typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                n && i(t, n)
            })(r, e),
            (c = r),
            (a = [
              {
                key: 'setNote',
                value: function (t) {
                  ;(this._note.id = t.id),
                    (this._note.title = t.title),
                    (this._note.body = t.body),
                    (this._note.createdAt = t.createdAt),
                    this.render()
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render()
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        li {\n            height: 250px;\n            list-style: none;\n            border-radius: 5px;\n            padding: 15px 20px 20px;\n            background: #333;\n            box-shadow: 0 4px 8px black;\n        }\n\n        .note {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        \n        .details {\n            max-height: 165px;\n            overflow-y: auto;\n        }\n        \n        .details::-webkit-scrollbar {\n            width: 0;\n        }\n        \n        .details:hover::-webkit-scrollbar {\n            width: 5px;\n        }\n        \n        .details:hover::-webkit-scrollbar-track {\n            background: #f1f1f1;\n            border-radius: 25px;\n        }\n        \n        .details:hover::-webkit-scrollbar-thumb {\n            background: #e6e6e6;\n            border-radius: 25px;\n        }\n        \n        .note p {\n            font-size: 20px;\n            font-weight: 500;\n            color: #f1f1f1;\n        }\n        \n        .note span {\n            display: block;\n            color: #ccc;\n            font-size: 14px;\n            margin-top: 5px;\n        }\n        \n        .bottom-content {\n            padding-top: 10px;\n            border-top: 1px solid #ccc;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .bottom-content span {\n            color: #ccc;\n            font-size: 14px;\n        }\n        \n        .menu {\n            display: flex;\n            justify-content: space-between;\n        }\n        \n        .menu li {\n            height: 25px;\n            font-size: 16px;\n            margin-bottom: 2px;\n            padding: 0px 2px;\n            cursor: pointer;\n            box-shadow: none;\n            border-radius: 0;\n            justify-content: flex-start;\n            align-items: center;\n        }\n        \n        .menu li:hover {\n            background: #222831;\n        }\n        \n        .menu li i {\n            padding: 5px;\n        }\n        \n        .menu i {\n            font-size: 1.2rem;\n            color: #f1f1f1;\n            // color: #333;\n            cursor: pointer;\n        }\n      '
                },
              },
              {
                key: 'render',
                value: function () {
                  this.updateStyle(),
                    this.setAttribute('data-id', this._note.id),
                    (this.innerHTML = '\n        '
                      .concat(
                        this._style.outerHTML,
                        '\n        <section class="note-list" id="noteList">\n            <li class="note" id="noted">\n                <div class="details">\n                    <p>',
                      )
                      .concat(
                        this._note.title,
                        '</p>\n                    <span>',
                      )
                      .concat(
                        this._note.body,
                        '</span>\n                </div>\n                <div class="bottom-content">\n                    <span>',
                      )
                      .concat(
                        this._note.createdAt,
                        '</span>\n                    <ul class="menu">\n                        <li><i class="uil uil-pen"></i></li>\n                        <li><i class="uil uil-trash"></i></li>\n                    </ul>\n                </div>\n            </li>\n        </section>\n      ',
                      ))
                },
              },
            ]) && n(c.prototype, a),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          )
          var c, a
        })(r(HTMLElement))
        customElements.define('note-item', c)
      },
      968: () => {
        function t(n) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(n)
          )
        }
        function n(t, n) {
          ;(null == n || n > t.length) && (n = t.length)
          for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e]
          return r
        }
        function e(t, n) {
          for (var e = 0; e < n.length; e++) {
            var o = n[e]
            ;(o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, r(o.key), o)
          }
        }
        function r(n) {
          var e = (function (n, e) {
            if ('object' != t(n) || !n) return n
            var r = n[Symbol.toPrimitive]
            if (void 0 !== r) {
              var o = r.call(n, 'string')
              if ('object' != t(o)) return o
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return String(n)
          })(n)
          return 'symbol' == t(e) ? e : e + ''
        }
        function o(t) {
          var n = 'function' == typeof Map ? new Map() : void 0
          return (
            (o = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (n) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t)
                n.set(t, e)
              }
              function e() {
                return (function (t, n, e) {
                  if (i()) return Reflect.construct.apply(null, arguments)
                  var r = [null]
                  r.push.apply(r, n)
                  var o = new (t.bind.apply(t, r))()
                  return e && u(o, e.prototype), o
                })(t, arguments, c(this).constructor)
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                u(e, t)
              )
            }),
            o(t)
          )
        }
        function i() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (i = function () {
            return !!t
          })()
        }
        function u(t, n) {
          return (
            (u = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t
                }),
            u(t, n)
          )
        }
        function c(t) {
          return (
            (c = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            c(t)
          )
        }
        var a = (function (r) {
          function o() {
            var n, e, r, u
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function')
              })(this, o),
              (((e = this),
              (r = o),
              (r = c(r)),
              (n = (function (n, e) {
                if (e && ('object' === t(e) || 'function' == typeof e)) return e
                if (void 0 !== e)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(n)
              })(
                e,
                i()
                  ? Reflect.construct(r, u || [], c(e).constructor)
                  : r.apply(e, u),
              )))._noteList = []),
              (n._style = document.createElement('style')),
              n
            )
          }
          return (
            (function (t, n) {
              if ('function' != typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                n && u(t, n)
            })(o, r),
            (a = o),
            (l = [
              {
                key: 'setNoteList',
                value: function (t) {
                  ;(this._noteList = t), this.render()
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render()
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        note-list {\n            margin: 50px;\n            display: grid;\n            gap: 25px;\n            grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));\n        }\n        \n      '
                },
              },
              {
                key: 'render',
                value: function () {
                  this.updateStyle()
                  var t,
                    e = this._noteList.map(function (t) {
                      var n = document.createElement('note-item')
                      return n.setNote(t), n
                    })
                  ;(this.innerHTML = ''),
                    this.append.apply(
                      this,
                      [this._style].concat(
                        (function (t) {
                          if (Array.isArray(t)) return n(t)
                        })((t = e)) ||
                          (function (t) {
                            if (
                              ('undefined' != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                              null != t['@@iterator']
                            )
                              return Array.from(t)
                          })(t) ||
                          (function (t, e) {
                            if (t) {
                              if ('string' == typeof t) return n(t, e)
                              var r = Object.prototype.toString
                                .call(t)
                                .slice(8, -1)
                              return (
                                'Object' === r &&
                                  t.constructor &&
                                  (r = t.constructor.name),
                                'Map' === r || 'Set' === r
                                  ? Array.from(t)
                                  : 'Arguments' === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        r,
                                      )
                                    ? n(t, e)
                                    : void 0
                              )
                            }
                          })(t) ||
                          (function () {
                            throw new TypeError(
                              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                            )
                          })(),
                      ),
                    )
                },
              },
            ]) && e(a.prototype, l),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            a
          )
          var a, l
        })(o(HTMLElement))
        customElements.define('note-list', a)
      },
      919: (t, n, e) => {
        'use strict'
        e.d(n, { A: () => c })
        var r = e(978),
          o = e.n(r),
          i = e(267),
          u = e.n(i)()(o())
        u.push([
          t.id,
          '@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);',
        ]),
          u.push([
            t.id,
            "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    background: white;\n}\n\n\n@media screen and (max-width: 1200px) {\n    .note-list {\n        grid-template-columns: repeat(5, 1fr);\n    }\n}\n\n@media screen and (max-width: 992px) {\n    .note-list {\n        grid-template-columns: repeat(4, 1fr);\n    }\n\n    .wrapper {\n        padding: 20px;\n    }\n\n    header .brand-name {\n        font-size: 1.5rem;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .input_section {\n        width: 95%;\n    }\n\n    .note-list {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .input_section {\n        width: 100%;\n        padding: 10px;\n    }\n\n    .input_section h2 {\n        font-size: 20px;\n    }\n\n    form :where(input, textarea) {\n        height: 35px;\n        font-size: 14px;\n    }\n\n    form .input textarea {\n        height: 100px;\n    }\n\n    form button {\n        height: 35px;\n        font-size: 14px;\n    }\n\n    .note-list {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media screen and (max-width: 320px) {\n    .note-list {\n        grid-template-columns: repeat(1, 1fr);\n    }\n}",
            '',
          ])
        const c = u
      },
      72: (t) => {
        'use strict'
        var n = []
        function e(t) {
          for (var e = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === t) {
              e = r
              break
            }
          return e
        }
        function r(t, r) {
          for (var i = {}, u = [], c = 0; c < t.length; c++) {
            var a = t[c],
              l = r.base ? a[0] + r.base : a[0],
              p = i[l] || 0,
              s = ''.concat(l, ' ').concat(p)
            i[l] = p + 1
            var f = e(s),
              d = {
                css: a[1],
                media: a[2],
                sourceMap: a[3],
                supports: a[4],
                layer: a[5],
              }
            if (-1 !== f) n[f].references++, n[f].updater(d)
            else {
              var y = o(d, r)
              ;(r.byIndex = c),
                n.splice(c, 0, { identifier: s, updater: y, references: 1 })
            }
            u.push(s)
          }
          return u
        }
        function o(t, n) {
          var e = n.domAPI(n)
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return
                e.update((t = n))
              } else e.remove()
            }
          )
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}))
          return function (t) {
            t = t || []
            for (var u = 0; u < i.length; u++) {
              var c = e(i[u])
              n[c].references--
            }
            for (var a = r(t, o), l = 0; l < i.length; l++) {
              var p = e(i[l])
              0 === n[p].references && (n[p].updater(), n.splice(p, 1))
            }
            i = a
          }
        }
      },
      659: (t) => {
        'use strict'
        var n = {}
        t.exports = function (t, e) {
          var r = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t)
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head
                } catch (t) {
                  e = null
                }
              n[t] = e
            }
            return n[t]
          })(t)
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          r.appendChild(e)
        }
      },
      540: (t) => {
        'use strict'
        t.exports = function (t) {
          var n = document.createElement('style')
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n
        }
      },
      56: (t, n, e) => {
        'use strict'
        t.exports = function (t) {
          var n = e.nc
          n && t.setAttribute('nonce', n)
        }
      },
      825: (t) => {
        'use strict'
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} }
          var n = t.insertStyleElement(t)
          return {
            update: function (e) {
              !(function (t, n, e) {
                var r = ''
                e.supports && (r += '@supports ('.concat(e.supports, ') {')),
                  e.media && (r += '@media '.concat(e.media, ' {'))
                var o = void 0 !== e.layer
                o &&
                  (r += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {',
                  )),
                  (r += e.css),
                  o && (r += '}'),
                  e.media && (r += '}'),
                  e.supports && (r += '}')
                var i = e.sourceMap
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */',
                    )),
                  n.styleTagTransform(r, t, n.options)
              })(n, t, e)
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(n)
            },
          }
        }
      },
      113: (t) => {
        'use strict'
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild)
            n.appendChild(document.createTextNode(t))
          }
        }
      },
    },
    n = {}
  function e(r) {
    var o = n[r]
    if (void 0 !== o) return o.exports
    var i = (n[r] = { id: r, exports: {} })
    return t[r](i, i.exports, e), i.exports
  }
  ;(e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t
    return e.d(n, { a: n }), n
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] })
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nc = void 0),
    (() => {
      'use strict'
      var t = e(72),
        n = e.n(t),
        r = e(825),
        o = e.n(r),
        i = e(659),
        u = e.n(i),
        c = e(56),
        a = e.n(c),
        l = e(540),
        p = e.n(l),
        s = e(113),
        f = e.n(s),
        d = e(919),
        y = {}
      ;(y.styleTagTransform = f()),
        (y.setAttributes = a()),
        (y.insert = u().bind(null, 'head')),
        (y.domAPI = o()),
        (y.insertStyleElement = p()),
        n()(d.A, y),
        d.A && d.A.locals && d.A.locals,
        e(782),
        e(0),
        e(968),
        e(923)
      document.addEventListener('DOMContentLoaded', function () {
        var t
        ;(t = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'Unknown error'
          console.error(t)
        }),
          (function () {
            var n = new XMLHttpRequest()
            ;(n.onload = function () {
              var n,
                e,
                r = JSON.parse(this.responseText)
              r.error
                ? t(r.message)
                : ((n = r.data),
                  (e = document.querySelector('note-list'))
                    ? e.setNoteList(n)
                    : console.error('note-list element not found'))
            }),
              (n.onerror = function () {
                t()
              }),
              n.open('GET', 'https://notes-api.dicoding.dev/v2/notes'),
              n.send()
          })()
      })
    })()
})()
