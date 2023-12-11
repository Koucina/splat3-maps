/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function o(t) {
        return "string" == typeof t
    }

    function p(t) {
        return "function" == typeof t
    }

    function q(t) {
        return "number" == typeof t
    }

    function r(t) {
        return void 0 === t
    }

    function s(t) {
        return "object" == typeof t
    }

    function t(t) {
        return !1 !== t
    }

    function u() {
        return "undefined" != typeof window
    }

    function v(t) {
        return p(t) || o(t)
    }

    function M(t) {
        return (h = mt(t, ot)) && he
    }

    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function O(t, e) {
        return !e && console.warn(t)
    }

    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }

    function Q() {
        return 0
    }

    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i););
            e = pt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function _(t) {
        return t._gsap || $(xt(t))[0]._gsap
    }

    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function da(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ea(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function fa(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ga() {
        var t, e, r = ht.length,
            i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ha(t, e, r, i) {
        ht.length && ga(), t.render(e, r, i), ht.length && ga()
    }

    function ia(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }

    function ja(t) {
        return t
    }

    function ka(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function na(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? na(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function oa(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function pa(e) {
        var r = e.parent || I,
            i = e.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }(J(e.keyframes)) : ka;
        if (t(e.inherit))
            for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    }

    function ra(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function sa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function ta(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function ua(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function xa(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function za(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Aa(t) {
        return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0))
    }

    function Ba(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Aa(t), r._dirty || ua(r, t)), t
    }

    function Ca(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = za(t.rawTime(), e), (!e._dur || bt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), ua(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -V
        }
    }

    function Da(t, e, r, i) {
        return e.parent && ta(e), e._start = da((q(r) ? r : r || t !== I ? Tt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ra(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ca(t, e), t
    }

    function Ea(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Fa(t, e, r, i) {
        return Xt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Dt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Ka(t, e, r, i) {
        var n = t._repeat,
            a = da(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ba(t, t._tTime = t._tDur * s) : t.parent && Aa(t), r || ua(t.parent, t), t
    }

    function La(t) {
        return t instanceof Ut ? ua(t) : Ka(t, t._dur)
    }

    function Oa(e, r, i) {
        var n, a, s = q(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new $t(r[0], u, r[1 + o])
    }

    function Pa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Ra(t, e) {
        return o(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function Ua(t, e) {
        return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }

    function Ya(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function Za(t) {
        if (p(t)) return t;
        var c = s(t) ? t : {
                each: t
            },
            m = Bt(c.ease),
            g = c.from || 0,
            v = parseFloat(c.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            T = isNaN(g) || e,
            b = c.axis,
            w = g,
            x = g;
        return o(g) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[g] || 0 : !e && T && (w = g[0], x = g[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || c).length,
                    _ = y[d];
                if (!_) {
                    if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, Y])[1])) {
                        for (h = -Y; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f--
                    }
                    for (_ = y[d] = [], i = T ? Math.min(f, d) * w - .5 : g % f, n = f === Y ? 0 : T ? d * x / f - .5 : g / f | 0, l = Y, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), _[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === g && Ya(_), _.max = h - l, _.min = l, _.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), _.b = d < 0 ? v - d : v, _.u = Ra(c.amount || c.each) || 0, m = m && d < 0 ? Ft(m) : m
                }
                return d = (_[t] - _.min) / _.max || 0, da(_.b + (m ? m(d) : d) * _.v) + _.u
            }
    }

    function $a(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Ra(t))
        }
    }

    function _a(u, t) {
        var h, l, e = J(u);
        return !e && s(u) && (h = e = u.radius || Y, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = $a(u.increment)), Pa(t, e ? p(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t
        } : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = Y, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Ra(t)
        } : $a(u))
    }

    function ab(t, e, r, i) {
        return Pa(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return J(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function eb(e, r, t) {
        return Pa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function hb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + ab(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function kb(t, e, r) {
        var i, n, a, s = t.labels,
            o = Y;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function mb(t) {
        return ta(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ot(t, "onInterrupt"), t
    }

    function rb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Pt + .5 | 0
    }

    function sb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, _ = t ? q(t) ? [t >> 16, t >> 8 & Pt, t & Pt] : 0 : Mt.black;
        if (!_) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) _ = Mt[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(_ = parseInt(t.substr(1, 6), 16)) >> 16, _ >> 8 & Pt, _ & Pt, parseInt(t.substr(7), 16) / 255];
                _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Pt, t & Pt]
            } else if ("hsl" === t.substr(0, 3))
                if (_ = d = t.match(tt), e) {
                    if (~t.indexOf("=")) return _ = t.match(et), r && _.length < 4 && (_[3] = 1), _
                } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = rb(s + 1 / 3, i, n), _[1] = rb(s, i, n), _[2] = rb(s - 1 / 3, i, n);
            else _ = t.match(tt) || Mt.transparent;
            _ = _.map(Number)
        }
        return e && !d && (i = _[0] / Pt, n = _[1] / Pt, a = _[2] / Pt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _
    }

    function tb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Ct).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function ub(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Ct),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = sb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = tb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Ct, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Ct)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function xb(t) {
        var e, r = t.join(" ");
        if (Ct.lastIndex = 0, Ct.test(r)) return e = At.test(r), t[1] = ub(t[1], e), t[0] = ub(t[0], e, tb(t[1])), !0
    }

    function Gb(t) {
        var e = (t + "").split("("),
            r = zt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ia)) : zt._CE && Rt.test(t) ? zt._CE("", t) : r
    }

    function Ib(t, e) {
        for (var r, i = t._first; i;) i instanceof Ut ? Ib(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ib(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Kb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e]
        }), a
    }

    function Lb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Mb(r, t, e) {
        function em(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Z((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / X * (Math.asin(1 / i) || 0),
            s = "out" === r ? em : "in" === r ? function(t) {
                return 1 - em(1 - t)
            } : Lb(em);
        return n = X / n, s.config = function(t, e) {
            return Mb(r, t, e)
        }, s
    }

    function Nb(e, r) {
        function mm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? mm : "in" === e ? function(t) {
            return 1 - mm(1 - t)
        } : Lb(mm);
        return t.config = function(t) {
            return Nb(e, t)
        }, t
    }
    var B, I, i, n, a, h, l, f, d, c, m, g, y, T, b, w, x, k, C, A, D, S, z, R, E, F, U = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        L = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Y = 1e8,
        V = 1 / Y,
        X = 2 * Math.PI,
        j = X / 4,
        K = 0,
        G = Math.sqrt,
        W = Math.cos,
        Z = Math.sin,
        H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        J = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        _t = 30,
        pt = [],
        ct = "",
        mt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        gt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        vt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        yt = {
            _start: 0,
            endTime: Q,
            totalDuration: Q
        },
        Tt = function _parsePosition(t, e, r) {
            var i, n, a, s = t.labels,
                u = t._recent || yt,
                h = t.duration() >= Y ? u.endTime(!1) : t._dur;
            return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (J(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e
        },
        bt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        wt = [].slice,
        xt = function toArray(t, e, r) {
            return !o(t) || r || !n && St() ? J(t) ? function _flatten(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    return o(t) && !e || Ua(t, 1) ? r.push.apply(r, xt(t)) : r.push(t)
                }) || r
            }(t, r) : Ua(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0)
        },
        kt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Pa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Ot = function _callback(t, e, r) {
            var i, n, a = t.vars,
                s = a[e];
            if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && ga(), i ? s.apply(n, i) : s.call(n)
        },
        Pt = 255,
        Mt = {
            aqua: [0, Pt, Pt],
            lime: [0, Pt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Pt],
            navy: [0, 0, 128],
            white: [Pt, Pt, Pt],
            olive: [128, 128, 0],
            yellow: [Pt, Pt, 0],
            orange: [Pt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Pt, 0, 0],
            pink: [Pt, 192, 203],
            cyan: [0, Pt, Pt],
            transparent: [Pt, Pt, Pt, 0]
        },
        Ct = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Mt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        At = /hsl[a]?\(/,
        Dt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, T = {
            time: 0,
            frame: 0,
            tick: function tick() {
                Vk(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = he, (i.gsapVersions || (i.gsapVersions = [])).push(he.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && T.sleep(), g = y || function(t) {
                    return setTimeout(t, z - 1e3 * T.time + 1 | 0)
                }, c = 1, Vk(2))
            },
            sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8, C = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                S = 1e3 / (t || 240), z = 1e3 * T.time + S
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), T.remove(a)
                } : n;
                return T.remove(n), R[e ? "unshift" : "push"](a), St(), a
            },
            remove: function remove(t, e) {
                ~(e = R.indexOf(t)) && R.splice(e, 1) && e <= w && w--
            },
            _listeners: R = []
        }),
        St = function _wake() {
            return !c && Dt.wake()
        },
        zt = {},
        Rt = /^[\d.\-M][\d.\-,\s]/,
        Et = /["']/g,
        Ft = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Bt = function _parseEase(t, e) {
            return t && (p(t) ? t : zt[t] || Gb(t)) || e
        };

    function Vk(t) {
        var e, r, i, n, a = x() - D,
            s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(Vk)), r)
            for (w = 0; w < R.length; w++) R[w](i, b, n, t)
    }

    function Dm(t) {
        return t < F ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Kb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Kb("Elastic", Mb("in"), Mb("out"), Mb()), E = 7.5625, F = 1 / 2.75, Kb("Bounce", function(t) {
        return 1 - Dm(1 - t)
    }, Dm), Kb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Kb("Circ", function(t) {
        return -(G(1 - t * t) - 1)
    }), Kb("Sine", function(t) {
        return 1 === t ? 1 : 1 - W(t * j)
    }), Kb("Back", Nb("in"), Nb("out"), Nb()), zt.SteppedEase = zt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * bt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,"
    });
    var It, Lt = function GSCache(t, e) {
            this.id = K++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Ht
        },
        Nt = ((It = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, It.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, It.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Ka(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, It.totalTime = function totalTime(t, e) {
            if (St(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ba(this, t), !r._dp || r.parent || Ca(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Da(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ha(this, t, e)), this
        }, It.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + xa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, It.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, It.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + xa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, It.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
        }, It.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -V ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? za(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(bt(-this._delay, this._tDur, e), !0), Aa(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, It.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (St(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps
        }, It.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Da(e, this, t - this._delay), this
            }
            return this._start
        }, It.endTime = function endTime(e) {
            return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, It.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? za(e.rawTime(t), this) : this._tTime : this._tTime
        }, It.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, It.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, La(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, It.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, La(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, It.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, It.seek = function seek(e, r) {
            return this.totalTime(Tt(this, e), t(r))
        }, It.restart = function restart(e, r) {
            return this.play().totalTime(e ? -this._delay : 0, t(r))
        }, It.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, It.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, It.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, It.resume = function resume() {
            return this.paused(!1)
        }, It.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0
        }, It.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -V, this
        }, It.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V))
        }, It.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, It.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function Un() {
                    var t = i.then;
                    i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = p(t) ? t : ja;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Un() : i._prom = Un
            })
        }, It.kill = function kill() {
            mb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ka(this, +t.duration, 1, 1), this.data = t.data, c || Dt.wake()
    }
    ka(Nt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -V,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ut = function(n) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Da(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Ea(_assertThisInitialized(i), e.scrollTrigger), i
        }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Oa(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Oa(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Oa(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, pa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, Tt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Da(this, $t.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, Tt(this, n)), this
        }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
            return i.runBackwards = 1, pa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o)
        }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
            return n.startAt = i, pa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, _, p, c = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : da(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (_ = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), _ && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
                        var T = _ && 1 & d,
                            b = T === (_ && 1 & s);
                        if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (p ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ot(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), c && c !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Ib(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, da(c), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, c = 0), !c && i && !e && (Ot(this, "onStart"), this._tTime !== v)) return this;
                if (c <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -V);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -V : V);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(c <= i ? 0 : -V)._zTime = c <= i ? 1 : -1, this._ts)) return this._start = f, Aa(this), this.render(t, e, r);
                this._onUpdate && !e && Ot(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ta(this, 1), e || t < 0 && !c || !v && !c && m || (Ot(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(t, e) {
            var r = this;
            if (q(e) || (e = Tt(this, e, t)), !(t instanceof Nt)) {
                if (J(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (o(t)) return this.addLabel(t, e);
                if (!p(t)) return this;
                t = $t.delayedCall(0, t)
            }
            return this !== t ? Da(this, t, e) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -Y);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (sa(this, t), t === this._recent && (this._recent = this._last), ua(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(Dt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = Tt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = $t.delayedCall(0, e || Q, r);
            return i.data = "isPause", this._hasPause = 1, Da(this, i, Tt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = Tt(this, t); e;) e._start === t && "isPause" === e.data && ta(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Yt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) a instanceof $t ? fa(a._targets, n) && (s ? (!Yt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = Tt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = $t.to(i, ka({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ka(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ka({
                startAt: {
                    time: Tt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), kb(this, Tt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), kb(this, Tt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return ua(this)
        }, e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return n.prototype.invalidate.call(this)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ua(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = Y;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Da(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ka(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (ha(I, za(t, I)), f = Dt.frame), Dt.frame >= _t) {
                _t += U.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && U.autoSleep && Dt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Dt.sleep()
                }
            }
        }, Timeline
    }(Nt);
    ka(Ut.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Ub(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
                if (p(t) && (t = Qt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || J(t) || H(t)) return o(t) ? Qt(t, n, e, r, i) : t;
                var a, u = {};
                for (a in t) u[a] = Qt(t[a], n, e, r, i);
                return u
            }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new oe(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function $b(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if (J(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Yt, qt, Vt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
            p(i) && (i = i(n || 0, t, a));
            var l, f = t[e],
                d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
                _ = p(f) ? h ? Zt : Wt : Gt;
            if (o(i) && (~i.indexOf("random(") && (i = hb(i)), "=" === i.charAt(1) && (!(l = ea(d, i) + (Ra(d) || 0)) && 0 !== l || (i = l))), d !== i || qt) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, _, p, c = new oe(this._pt, t, e, 0, 1, ee, null, n),
                    m = 0,
                    g = 0;
                for (c.b = r, c.e = i, r += "", (_ = ~(i += "").indexOf("random(")) && (i = hb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
                    _next: c._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? ea(d, l) - d : parseFloat(l) - d,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (nt.test(i) || _) && (c.e = 0), this._pt = c
            }.call(this, t, e, d, i, _, u || U.stringFilter, h)) : (l = new oe(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? te : Jt, 0, _), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l)
        },
        Xt = function _initTween(e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, c, m, g = e.vars,
                v = g.ease,
                y = g.startAt,
                T = g.immediateRender,
                b = g.lazy,
                w = g.onUpdate,
                x = g.onUpdateParams,
                k = g.callbackScope,
                O = g.runBackwards,
                P = g.yoyoEase,
                M = g.keyframes,
                C = g.autoRevert,
                A = e._dur,
                D = e._startAt,
                S = e._targets,
                z = e.parent,
                R = z && "nested" === z.data ? z.parent._targets : S,
                E = "auto" === e._overwrite && !B,
                F = e.timeline;
            if (!F || M && v || (v = "none"), e._ease = Bt(v, L.ease), e._yEase = P ? Ft(Bt(!0 === P ? v : P, L.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !F && !!g.runBackwards, !F || M && !g.stagger) {
                if (c = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = oa(g, ut), D && (ta(D.render(-1, !0)), D._lazy = 0), y)
                    if (ta(e._startAt = $t.set(S, ka({
                            data: "isStart",
                            overwrite: !1,
                            parent: z,
                            immediateRender: !0,
                            lazy: t(b),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: x,
                            callbackScope: k,
                            stagger: 0
                        }, y))), r < 0 && !T && !C && e._startAt.render(-1, !0), T) {
                        if (0 < r && !C && (e._startAt = 0), A && r <= 0) return void(r && (e._zTime = r))
                    } else !1 === C && (e._startAt = 0);
                else if (O && A)
                    if (D) C || (e._startAt = 0);
                    else if (r && (T = !1), a = ka({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: T && t(b),
                        immediateRender: T,
                        stagger: 0,
                        parent: z
                    }, i), c && (a[l.prop] = c), ta(e._startAt = $t.set(S, a)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, T) {
                    if (!r) return
                } else _initTween(e._startAt, V);
                for (e._pt = e._ptCache = 0, b = A && t(b) || b && !A, n = 0; n < S.length; n++) {
                    if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && ga(), p = R === S ? n : R.indexOf(o), l && !1 !== (f = new l).init(o, c || i, e, p, R) && (e._pt = s = new oe(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = s
                        }), f.priority && (u = 1)), !l || c)
                        for (a in i) ft[a] && (f = Ub(a, i, e, p, o, R)) ? f.priority && (u = 1) : d[a] = s = Vt.call(e, o, a, "get", i[a], p, R, 0, g.stringFilter);
                    e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (Yt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Yt = 0), e._pt && b && (lt[h.id] = 1)
                }
                u && se(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, M && r <= 0 && F.render(Y, !0, !0)
        },
        Qt = function _parseFuncOrString(t, e, r, i, n) {
            return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? hb(t) : t
        },
        jt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Kt = {};
    ba(jt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Kt[t] = 1
    });
    var $t = function(R) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var o, u, h, l, f, d, _, p, c = (a = R.call(this, n ? r : pa(r)) || this).vars,
                m = c.duration,
                g = c.delay,
                y = c.immediateRender,
                T = c.stagger,
                b = c.overwrite,
                w = c.keyframes,
                x = c.defaults,
                k = c.scrollTrigger,
                P = c.yoyoEase,
                M = r.parent || I,
                C = (J(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);
            if (a._targets = C.length ? $(C) : O("GSAP target " + e + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, w || T || v(m) || v(g)) {
                if (r = a.vars, (o = a.timeline = new Ut({
                        data: "nested",
                        defaults: x || {}
                    })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, T || v(m) || v(g)) {
                    if (l = C.length, _ = T && Za(T), s(T))
                        for (f in T) ~jt.indexOf(f) && ((p = p || {})[f] = T[f]);
                    for (u = 0; u < l; u++)(h = oa(r, Kt)).stagger = 0, P && (h.yoyoEase = P), p && mt(h, p), d = C[u], h.duration = +Qt(m, _assertThisInitialized(a), u, d, C), h.delay = (+Qt(g, _assertThisInitialized(a), u, d, C) || 0) - a._delay, !T && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, _ ? _(u, d, C) : 0), o._ease = zt.none;
                    o.duration() ? m = g = 0 : a.timeline = 0
                } else if (w) {
                    pa(ka(o.vars.defaults, {
                        ease: "none"
                    })), o._ease = Bt(w.ease || r.ease || "none");
                    var A, D, S, z = 0;
                    if (J(w)) w.forEach(function(t) {
                        return o.to(C, t, ">")
                    });
                    else {
                        for (f in h = {}, w) "ease" === f || "easeEach" === f || $b(f, w[f], h, w.easeEach);
                        for (f in h)
                            for (A = h[f].sort(function(t, e) {
                                    return t.t - e.t
                                }), u = z = 0; u < A.length; u++)(S = {
                                ease: (D = A[u]).e,
                                duration: (D.t - (u ? A[u - 1].t : 0)) / 100 * m
                            })[f] = D.v, o.to(C, S, z), z += S.duration;
                        o.duration() < m && o.to({}, {
                            duration: m - o.duration()
                        })
                    }
                }
                m || a.duration(m = o.duration())
            } else a.timeline = 0;
            return !0 !== b || B || (Yt = _assertThisInitialized(a), I.killTweensOf(C), Yt = 0), Da(M, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(M._time) && t(y) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== M.data) && (a._tTime = -V, a.render(Math.max(0, -g))), k && Ea(_assertThisInitialized(a), k), a
        }
        _inheritsLoose(Tween, R);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time,
                _ = this._tDur,
                p = this._dur,
                c = _ - V < t && 0 <= t ? _ : t < V ? 0 : t;
            if (p) {
                if (c !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = c, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
                        if (i = da(c % s), c === _ ? (a = this._repeat, i = p) : ((a = ~~(c / s)) && a === c / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this._tTime = c, this;
                        a !== o && (l && this._yEase && Ib(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Fa(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                        if (d !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Ot(this, "onStart"), this._tTime !== c)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Ot(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ot(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || ta(this, 1), e || t < 0 && !d || !c && !d || (Ot(this, c === _ ? "onComplete" : "onReverseComplete", !0), !this._prom || c < _ && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = bt(0, t._tDur, e), a = gt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== gt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === V || !e && t._zTime) {
                    if (!t._initted && Fa(t, e, i, r)) return;
                    for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Ot(t, "onUpdate"), l && t._repeat && !r && t.parent && Ot(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ta(t, 1), r || (Ot(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), R.prototype.invalidate.call(this)
        }, e.resetTo = function resetTo(t, e, r, i) {
            c || Dt.wake(), this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Xt(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) {
                    var o, u, h, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!l)
                        for (l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) {
                            if ((o = u[h][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e;) o = o._next;
                            if (!o) return qt = 1, t.vars[e] = "+=0", Xt(t, s), qt = 0, 1;
                            l.push(o)
                        }
                    for (h = l.length; h--;)(o = l[h]).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, o.e && (o.e = ca(r) + Ra(o.e)), o.b && (o.b = o.s + Ra(o.b))
                }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ba(this, 0), this.parent || ra(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? mb(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Yt && !0 !== Yt.vars.overwrite)._first || mb(this), this.parent && r !== this.timeline.totalDuration() && Ka(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var i, n, a, s, u, h, l, f = this._targets,
                d = t ? xt(t) : f,
                p = this._ptLookup,
                c = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, d)) return "all" === e && (this._pt = 0), mb(this);
            for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? _(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = mt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~d.indexOf(f[l]))
                    for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s)(h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || sa(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
            return this._initted && !this._pt && c && mb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Oa(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Oa(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return I.killTweensOf(t, e, r)
        }, Tween
    }(Nt);
    ka($t.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        $t[r] = function() {
            var t = new Ut,
                e = wt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function gc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function oc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Gt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        Wt = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        Zt = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        Ht = function _getSetter(t, e) {
            return p(t[e]) ? Wt : r(t[e]) && t.setAttribute ? gc : Gt
        },
        Jt = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        te = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        ee = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        re = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        ie = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        ne = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? sa(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        se = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        oe = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = oc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Jt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ba(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Ut, I = new Ut({
        sortChildren: !1,
        defaults: L,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), U.stringFilter = xb;
    var ue = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = p(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: Q,
                            render: re,
                            add: Vt,
                            kill: ne,
                            modifier: ie,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Ht,
                            aliases: {},
                            register: 0
                        };
                    if (St(), t !== i) {
                        if (ft[e]) return;
                        ka(i, ka(oa(t, n), a)), mt(i.prototype, mt(n, oa(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i), t.register && t.register(he, i, oe)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Ut(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = xt(i)[0]);
            var n = _(i || {}).get,
                a = e ? ja : ia;
            return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return a((ft[t] && ft[t].get || n)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = xt(r)).length) {
                var n = r.map(function(t) {
                        return he.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e],
                o = _(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && re(1, d)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function iw(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = he.to(t, mt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return iw.tween = n, iw
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Bt(t.ease, L.ease)), na(L, t || {})
        },
        config: function config(t) {
            return na(U, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
            }), dt[i] = function(t, e, r) {
                return n(xt(t), ka(e || {}, a), r)
            }, r && (Ut.prototype[i] = function(t, e, r) {
                return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            zt[t] = Bt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Bt(t, e) : zt
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new Ut(e);
            for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) n = i._next, !r && !i._dur && i instanceof $t && i.vars.onComplete === i._targets[0] || Da(a, i, i._start - i._delay), i = n;
            return Da(I, a, 0), a
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return J(e) ? eb(e, wrap(0, e.length), t) : Pa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return J(e) ? eb(e, wrapYoyo(0, e.length - 1), t) : Pa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Za,
            random: ab,
            snap: _a,
            normalize: function normalize(t, e, r) {
                return kt(t, e, 0, 1, r)
            },
            getUnit: Ra,
            clamp: function clamp(e, r, t) {
                return Pa(t, function(t) {
                    return bt(e, r, t)
                })
            },
            splitColor: sb,
            toArray: xt,
            selector: function selector(r) {
                return r = xt(r)[0] || O("Invalid scope") || {},
                    function(t) {
                        var e = r.current || r.nativeElement || r;
                        return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r)
                    }
            },
            mapRange: kt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Ra(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!n) {
                    var a, s, u, h, l, f = o(e),
                        d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (J(e) && !J(r)) {
                        for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));
                        h--, n = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = r
                    } else i || (e = mt(J(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r) Vt.call(d, e, a, "get", r[a]);
                        n = function func(t) {
                            return re(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Pa(t, n)
            },
            shuffle: Ya
        },
        install: M,
        effects: dt,
        ticker: Dt,
        updateRoot: Ut.updateRoot,
        plugins: ft,
        globalTimeline: I,
        core: {
            PropTween: oe,
            globals: P,
            Tween: $t,
            Timeline: Ut,
            Animation: Nt,
            getCache: _,
            _removeLinkedListItem: sa,
            suppressOverwrites: function suppressOverwrites(t) {
                return B = t
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ue[t] = $t[t]
    }), Dt.add(Ut.updateRoot), d = ue.to({}, {
        duration: 0
    });

    function sc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function uc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {}, ba(i, function(t) {
                            return e[t] = 1
                        }), i = e), n) {
                        for (r in e = {}, i) e[r] = n(i[r]);
                        i = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = sc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var he = ue.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, uc("roundProps", $a), uc("modifiers"), uc("snap", _a)) || ue;
    $t.version = Ut.version = he.version = "3.10.4", l = 1, u() && St();

    function dd(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ed(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function fd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function gd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function hd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function id(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function jd(t, e, r) {
        return t.style[e] = r
    }

    function kd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function ld(t, e, r) {
        return t._gsap[e] = r
    }

    function md(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function nd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function od(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function sd(t, e) {
        var r = fe.createElementNS ? fe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fe.createElement(t);
        return r.style ? r : fe.createElement(t)
    }

    function td(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ne, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && td(t, je(e) || e, 1) || ""
    }

    function wd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (le = window, fe = le.document, de = fe.documentElement, pe = sd("div") || {
            style: {}
        }, sd("div"), Ve = je(Ve), Xe = Ve + "Origin", pe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", me = !!je("perspective"), _e = 1)
    }

    function xd(t) {
        var e, r = sd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (de.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = xd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), de.removeChild(r), this.style.cssText = a, e
    }

    function yd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function zd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = xd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === xd || (r = xd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +yd(e, ["x", "cx", "x1"]) || 0,
            y: +yd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Ad(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !zd(t))
    }

    function Bd(t, e) {
        if (e) {
            var r = t.style;
            e in Fe && e !== Xe && (e = Ve), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ne, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Cd(t, e, r, i, n, a) {
        var s = new oe(t._pt, e, r, 0, 1, a ? id : hd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function Ed(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = pe.style,
            f = Ue.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            c = "px" === i,
            m = "%" === i;
        return i === h || !u || Ke[i] || Ke[h] ? u : ("px" === h || c || (u = Ed(t, e, r, "px")), o = t.getCTM && Ad(t), !m && "%" !== h || !Fe[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== fe && a.appendChild || (a = fe.body), (s = a._gsap) && m && s.width && f && s.time === Dt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = td(t, "position")), a === t && (l.position = "static"), a.appendChild(pe), n = pe[p], a.removeChild(pe), l.position = "absolute", f && m && ((s = _(a)).time = Dt.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n)))
    }

    function Fd(t, e, r, i) {
        var n;
        return _e || wd(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), Fe[e] && "transform" !== e ? (n = He(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Je(td(t, Xe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || td(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ed(t, e, n, r) + r : n
    }

    function Gd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = je(e, t, 1),
                a = n && td(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = td(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, _, p, c, m, g = new oe(this._pt, t.style, e, 0, 1, ee),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = td(t, e) || i, t.style[e] = r), xb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ea(h, d) + m), _ = parseFloat(d), c = d.substr((_ + "").length), v = rt.lastIndex - c.length, c || (c = c || U.units[e] || m, v === i.length && (i += c, g.e += c)), m !== c && (h = Ed(t, e, f, c) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: _ - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? id : hd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function Id(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = $e[r] || r, e[1] = $e[i] || i, e.join(" ")
    }

    function Jd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], Fe[r] && (i = 1, r = "transformOrigin" === r ? Xe : Ve), Bd(a, r);
            i && (Bd(a, Ve), u && (u.svg && a.removeAttribute("transform"), He(a, 1), u.uncache = 1))
        }
    }

    function Nd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Od(t) {
        var e = td(t, Ve);
        return Nd(e) ? We : e.substr(7).match(et).map(ca)
    }

    function Pd(t, e) {
        var r, i, n, a, s = t._gsap || _(t),
            o = t.style,
            u = Od(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? We : u : (u !== We || t.offsetParent || t === de || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, de.appendChild(t)), u = Od(t), n ? o.display = n : Bd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : de.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Qd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || Pd(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            _ = h.xOffset || 0,
            p = h.yOffset || 0,
            c = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== We && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = zd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = _ + (y * c + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Xe] = "0px 0px", a && (Cd(a, h, "xOrigin", f, w), Cd(a, h, "yOrigin", d, x), Cd(a, h, "xOffset", _, h.xOffset), Cd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function Td(t, e, r) {
        var i = Ra(e);
        return ca(parseFloat(e) + parseFloat(Ed(t, "x", r + "px", i))) + i
    }

    function $d(t, e, r, i, n) {
        var a, s, u = 360,
            h = o(n),
            l = parseFloat(n) * (h && ~n.indexOf("rad") ? Be : 1) - i,
            f = i + l + "deg";
        return h && ("short" === (a = n.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === a && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === a && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = s = new oe(t._pt, e, r, i, l, ed), s.e = f, s.u = "deg", t._props.push(r), s
    }

    function _d(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ae(t, e, r) {
        var i, n, a, s, o, u, h, l = _d({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Ve] = e, i = He(r, 1), Bd(r, Ve), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ve], f[Ve] = e, i = He(r, 1), f[Ve] = a), Fe)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ra(a) !== (h = Ra(s)) ? Ed(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new oe(t._pt, i, n, o, u - o, dd), t._pt.u = h || 0, t._props.push(n));
        _d(i, l)
    }
    var le, fe, de, _e, pe, ce, me, ge = zt.Power0,
        ve = zt.Power1,
        ye = zt.Power2,
        Te = zt.Power3,
        be = zt.Power4,
        we = zt.Linear,
        xe = zt.Quad,
        ke = zt.Cubic,
        Oe = zt.Quart,
        Pe = zt.Quint,
        Me = zt.Strong,
        Ce = zt.Elastic,
        Ae = zt.Back,
        De = zt.SteppedEase,
        Se = zt.Bounce,
        ze = zt.Sine,
        Re = zt.Expo,
        Ee = zt.Circ,
        Fe = {},
        Be = 180 / Math.PI,
        Ie = Math.PI / 180,
        Le = Math.atan2,
        Ne = /([A-Z])/g,
        Ue = /(left|right|width|margin|padding|x)/i,
        Ye = /[\s,\(]\S/,
        qe = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Ve = "transform",
        Xe = Ve + "Origin",
        Qe = "O,Moz,ms,Ms,Webkit".split(","),
        je = function _checkPropPrefix(t, e, r) {
            var i = (e || pe).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Qe[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Qe[n] : "") + t
        },
        Ke = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        $e = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Ge = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new oe(t._pt, e, r, 0, 0, Jd);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        We = [1, 0, 0, 1, 0, 0],
        Ze = {},
        He = function _parseTransform(t, e) {
            var r = t._gsap || new Lt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, _, p, c, m, g, v, y, T, b, w, x, k, O, P, M, C, A, D, S, z, R, E, F = t.style,
                B = r.scaleX < 0,
                I = "deg",
                L = td(t, Xe) || "0";
            return i = n = a = u = h = l = f = d = _ = 0, s = o = 1, r.svg = !(!t.getCTM || !Ad(t)), m = Pd(t, r.svg), r.svg && (P = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Qd(t, P || L, !!P || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, c = r.yOrigin || 0, m !== We && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Le(b, T) * Be : 0, (f = w || x ? Le(w, x) * Be + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * T + c * w), n -= c - (p * b + c * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = Le(E, S)) * Be, g && (P = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), M = O * v + D * y, C = E * v + S * y, A = k * -y + A * v, D = O * -y + D * v, S = E * -y + S * v, R = z * -y + R * v, k = P, O = M, E = C), l = (g = Le(-w, S)) * Be, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = P = T * v - A * y, b = M = b * v - D * y, w = C = w * v - S * y), u = (g = Le(b, T)) * Be, g && (P = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), M = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = P, k = M), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(T * T + b * b + w * w)), o = ca(Math.sqrt(O * O + E * E)), g = Le(k, O), f = 2e-4 < Math.abs(g) ? g * Be : 0, _ = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (P = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Nd(td(t, Ve)), P && t.setAttribute("transform", P))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = _ + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (F[Xe] = Je(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? ar : me ? nr : tr, r.uncache = 0, r
        },
        Je = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        tr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nr(t, e)
        },
        er = "0deg",
        rr = "0px",
        ir = ") ",
        nr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                _ = r.scaleX,
                p = r.scaleY,
                c = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== er || h !== er)) {
                var b, w = parseFloat(h) * Ie,
                    x = Math.sin(w),
                    k = Math.cos(w);
                w = parseFloat(l) * Ie, b = Math.cos(w), a = Td(g, a, x * b * -v), s = Td(g, s, -Math.sin(w) * -v), o = Td(g, o, k * b * -v + v)
            }
            c !== rr && (y += "perspective(" + c + ir), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === rr && s === rr && o === rr || (y += o !== rr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + ir), u !== er && (y += "rotate(" + u + ir), h !== er && (y += "rotateY(" + h + ir), l !== er && (y += "rotateX(" + l + ir), f === er && d === er || (y += "skew(" + f + ", " + d + ir), 1 === _ && 1 === p || (y += "scale(" + _ + ", " + p + ir), g.style[Ve] = y || "translate(0, 0)"
        },
        ar = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                _ = o.skewX,
                p = o.skewY,
                c = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                k = parseFloat(f);
            d = parseFloat(d), _ = parseFloat(_), (p = parseFloat(p)) && (_ += p = parseFloat(p), d += p), d || _ ? (d *= Ie, _ *= Ie, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - _) * -m, a = Math.cos(d - _) * m, _ && (p *= Ie, s = Math.tan(_ - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Ed(g, "x", l, "px"), k = Ed(g, "y", f, "px")), (v || y || T || b) && (x = ca(x + v - (v * r + y * n) + T), k = ca(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), k = ca(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ve] = s)
        };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Ge[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return Fd(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var sr, or, ur, hr = {
        name: "css",
        register: wd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, u, h, l, f, d, _, p, c, m, g, v, y, T, b = this._props,
                w = t.style,
                x = r.vars.startAt;
            for (d in _e || wd(), e)
                if ("autoRound" !== d && (s = e[d], !ft[d] || !Ub(d, e, r, i, t, n)))
                    if (l = typeof s, f = Ge[d], "function" === l && (l = typeof(s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = hb(s)), f) f(this, t, d, s, r) && (T = 1);
                    else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Ct.lastIndex = 0, Ct.test(a) || (_ = Ra(a), p = Ra(s)), p ? _ !== p && (a = Ed(t, d, a, p) + p) : _ && (s += _), this.add(w, "setProperty", a, s, i, n, 0, 0, d), b.push(d);
            else if ("undefined" !== l) {
                if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], o(a) && ~a.indexOf("random(") && (a = hb(a)), Ra(a + "") || (a += U.units[d] || Ra(Fd(t, d)) || ""), "=" === (a + "").charAt(1) && (a = Fd(t, d))) : a = Fd(t, d), h = parseFloat(a), (c = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), u = parseFloat(s), d in qe && ("autoAlpha" === d && (1 === h && "hidden" === Fd(t, "visibility") && u && (h = 0), Cd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = qe[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fe)
                    if (g || ((v = t._gsap).renderTransform && !e.parseTransform || He(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new oe(this._pt, w, Ve, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new oe(this._pt, v, "scaleY", v.scaleY, (c ? ea(v.scaleY, c + u) : u) - v.scaleY || 0), b.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            s = Id(s), v.svg ? Qd(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && Cd(this, v, "zOrigin", v.zOrigin, p), Cd(this, w, d, Je(a), Je(s)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            Qd(t, s, 1, y, 0, this);
                            continue
                        }
                        if (d in Ze) {
                            $d(this, v, d, h, c ? ea(h, c + s) : s);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            Cd(this, v, "smooth", v.smooth, s);
                            continue
                        }
                        if ("force3D" === d) {
                            v[d] = s;
                            continue
                        }
                        if ("transform" === d) {
                            ae(this, s, t);
                            continue
                        }
                    }
                else d in w || (d = je(d) || d);
                if (m || (u || 0 === u) && (h || 0 === h) && !Ye.test(s) && d in w) u = u || 0, (_ = (a + "").substr((h + "").length)) !== (p = Ra(s) || (d in U.units ? U.units[d] : _)) && (h = Ed(t, d, a, p)), this._pt = new oe(this._pt, m ? v : w, d, h, (c ? ea(h, c + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? dd : gd), this._pt.u = p || 0, _ !== p && "%" !== p && (this._pt.b = a, this._pt.r = fd);
                else if (d in w) Gd.call(this, t, d, a, c ? c + s : s);
                else {
                    if (!(d in t)) {
                        N(d, s);
                        continue
                    }
                    this.add(t, d, a || t[d], c ? c + s : s, i, n)
                }
                b.push(d)
            }
            T && se(this)
        },
        get: Fd,
        aliases: qe,
        getSetter: function getSetter(t, e, i) {
            var n = qe[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Fe && e !== Xe && (t._gsap.x || Fd(t, "x")) ? i && ce === i ? "scale" === e ? md : ld : (ce = i || {}) && ("scale" === e ? nd : od) : t.style && !r(t.style[e]) ? jd : ~e.indexOf("-") ? kd : Ht(t, e)
        },
        core: {
            _removeProperty: Bd,
            _getMatrix: Pd
        }
    };
    he.utils.checkPrefix = je, ur = ba((sr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (or = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Fe[t] = 1
    }), ba(or, function(t) {
        U.units[t] = "deg", Ze[t] = 1
    }), qe[ur[13]] = sr + "," + or, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        qe[e[1]] = ur[e[0]]
    }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        U.units[t] = "px"
    }), he.registerPlugin(hr);
    var lr = he.registerPlugin(hr) || he,
        fr = lr.core.Tween;
    e.Back = Ae, e.Bounce = Se, e.CSSPlugin = hr, e.Circ = Ee, e.Cubic = ke, e.Elastic = Ce, e.Expo = Re, e.Linear = we, e.Power0 = ge, e.Power1 = ve, e.Power2 = ye, e.Power3 = Te, e.Power4 = be, e.Quad = xe, e.Quart = Oe, e.Quint = Pe, e.Sine = ze, e.SteppedEase = De, e.Strong = Me, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = $t, e.TweenMax = fr, e.default = lr, e.gsap = lr;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * ScrollToPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function k() {
        return "undefined" != typeof window
    }

    function l() {
        return u || k() && (u = window.gsap) && u.registerPlugin && u
    }

    function m(e) {
        return "string" == typeof e
    }

    function n(e) {
        return "function" == typeof e
    }

    function o(e, t) {
        var o = "x" === t ? "Width" : "Height",
            n = "scroll" + o,
            r = "client" + o;
        return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o]
    }

    function p(e, t) {
        var o = "scroll" + ("x" === t ? "Left" : "Top");
        return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c),
            function() {
                return e[o]
            }
    }

    function r(e, t) {
        if (!(e = f(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o = e.getBoundingClientRect(),
            n = !t || t === T || t === c,
            r = n ? {
                top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
                left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            l = {
                x: o.left - r.left,
                y: o.top - r.top
            };
        return !n && t && (l.x += p(t, "x")(), l.y += p(t, "y")()), l
    }

    function s(e, t, n, l, i) {
        return isNaN(e) || "object" == typeof e ? m(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - i : "max" === e ? o(t, n) - i : Math.min(o(t, n), r(e, t)[n] - i) : parseFloat(e) - i
    }

    function t() {
        u = l(), k() && u && document.body && (T = window, c = document.body, i = document.documentElement, f = u.utils.toArray, u.config({
            autoKillThreshold: 7
        }), v = u.config(), a = 1)
    }
    var u, a, T, i, c, f, v, y = {
        version: "3.10.4",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e) {
            u = e, t()
        },
        init: function init(e, o, r, l, i) {
            a || t();
            var c = this,
                f = u.getProperty(e, "scrollSnapType");
            c.isWin = e === T, c.target = e, c.tween = r, o = function _clean(e, t, o, r) {
                if (n(e) && (e = e(t, o, r)), "object" != typeof e) return m(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {
                    y: e
                };
                if (e.nodeType) return {
                    y: e,
                    x: e
                };
                var l, i = {};
                for (l in e) i[l] = "onAutoKill" !== l && n(e[l]) ? e[l](t, o, r) : e[l];
                return i
            }(o, l, e, i), c.vars = o, c.autoKill = !!o.autoKill, c.getX = p(e, "x"), c.getY = p(e, "y"), c.x = c.xPrev = c.getX(), c.y = c.yPrev = c.getY(), f && "none" !== f && (c.snap = 1, c.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != o.x ? (c.add(c, "x", c.x, s(o.x, e, "x", c.x, o.offsetX || 0), l, i), c._props.push("scrollTo_x")) : c.skipX = 1, null != o.y ? (c.add(c, "y", c.y, s(o.y, e, "y", c.y, o.offsetY || 0), l, i), c._props.push("scrollTo_y")) : c.skipY = 1
        },
        render: function render(e, t) {
            for (var n, r, l, i, s, p = t._pt, c = t.target, f = t.tween, u = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, x = t.snap, g = t.snapInline; p;) p.r(e, p.d), p = p._next;
            n = d || !t.skipX ? t.getX() : a, l = (r = d || !t.skipY ? t.getY() : y) - y, i = n - a, s = v.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), u && (!t.skipX && (s < i || i < -s) && n < o(c, "x") && (t.skipX = 1), !t.skipY && (s < l || l < -s) && r < o(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (f.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(f, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !x || 1 !== e && 0 !== e || (r = c.scrollTop, n = c.scrollLeft, g ? c.style.scrollSnapType = g : c.style.removeProperty("scroll-snap-type"), c.scrollTop = r + 1, c.scrollLeft = n + 1, c.scrollTop = r, c.scrollLeft = n), t.xPrev = t.x, t.yPrev = t.y
        },
        kill: function kill(e) {
            var t = "scrollTo" === e;
            !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1)
        }
    };
    y.max = o, y.getOffset = r, y.buildGetter = p, l() && u.registerPlugin(y), e.ScrollToPlugin = y, e.default = y;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function q() {
        return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we
    }

    function y(e, t) {
        return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t]
    }

    function z(e) {
        return !!~t.indexOf(e)
    }

    function A(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }

    function B(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function E() {
        return De && De.isPressed || T.cache++
    }

    function F(r, n) {
        function Uc(e) {
            if (e || 0 === e) {
                i && (Me.history.scrollRestoration = "manual");
                var t = De && De.isPressed;
                e = Uc.v = Math.round(e) || (De && De.iOS ? 1 : 0), r(e), Uc.cacheID = T.cache, t && o("ss", e)
            } else(n || T.cache !== Uc.cacheID || o("ref")) && (Uc.cacheID = T.cache, Uc.v = r());
            return Uc.v + Uc.offset
        }
        return Uc.offset = 0, r && Uc
    }

    function I(e) {
        return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function J(t, e) {
        var r = e.s,
            n = e.sc,
            i = T.indexOf(t),
            o = n === Ne.sc ? 1 : 2;
        return ~i || (i = T.push(t) - 1), T[i + o] || (T[i + o] = F(y(t, r), !0) || (z(t) ? n : F(function(e) {
            return arguments.length ? t[r] = e : t[r]
        })))
    }

    function K(e, t, i) {
        function od(e, t) {
            var r = He();
            t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
        }
        var o = e,
            a = e,
            s = He(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: od,
            reset: function reset() {
                a = o = i ? 0 : o, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = He();
                return !e && 0 !== e || e === o || od(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
            }
        }
    }

    function L(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function M(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function N() {
        (Be = we.core.globals().ScrollTrigger) && Be.core && function _integrate() {
            var e = Be.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, T), n.push.apply(n, Le), T = t, Le = n, o = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function O(e) {
        return (we = e || q()) && "undefined" != typeof document && document.body && (Me = window, Ce = (Ae = document).documentElement, Oe = Ae.body, t = [Me, Ae, Ce, Oe], we.utils.clamp, Ie = "onpointerenter" in Oe ? "pointer" : "mouse", Ee = k.isTouch = Me.matchMedia && Me.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Me || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, ze = k.eventTypes = ("ontouchstart" in Ce ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ce ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return i = 0
        }, 500), N(), ke = 1), ke
    }
    var we, ke, Me, Ae, Ce, Oe, Ee, Ie, Be, t, De, ze, i = 1,
        Fe = [],
        T = [],
        Le = [],
        He = Date.now,
        o = function _bridge(e, t) {
            return t
        },
        r = "scrollLeft",
        n = "scrollTop",
        Re = {
            s: r,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: F(function(e) {
                return arguments.length ? Me.scrollTo(e, Ne.sc()) : Me.pageXOffset || Ae[r] || Ce[r] || Oe[r] || 0
            })
        },
        Ne = {
            s: n,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Re,
            sc: F(function(e) {
                return arguments.length ? Me.scrollTo(Re.sc(), e) : Me.pageYOffset || Ae[n] || Ce[n] || Oe[n] || 0
            })
        };
    Re.op = Ne, T.cache = 0;
    var k = (Observer.prototype.init = function init(e) {
        ke || O(we) || console.warn("Please gsap.registerPlugin(Observer)"), Be || N();
        var i = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            n = e.target,
            r = e.lineHeight,
            o = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            d = e.event,
            p = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            v = e.onPress,
            b = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            w = e.onDown,
            S = e.onChangeX,
            _ = e.onChangeY,
            T = e.onChange,
            k = e.onToggleX,
            C = e.onToggleY,
            P = e.onHover,
            D = e.onHoverEnd,
            Y = e.onMove,
            X = e.ignoreCheck,
            F = e.isNormalizer,
            H = e.onGestureStart,
            R = e.onGestureEnd,
            U = e.onWheel,
            V = e.onEnable,
            W = e.onDisable,
            j = e.onClick,
            Q = e.scrollSpeed,
            q = e.capture,
            G = e.allowClicks,
            Z = e.lockAxis,
            $ = e.onLockAxis;

        function Pe() {
            return ye = He()
        }

        function Qe(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || X && X(e, t)
        }

        function Se() {
            var e = se.deltaX = M(be),
                t = se.deltaY = M(me),
                r = Math.abs(e) >= i,
                n = Math.abs(t) >= i;
            T && (r || n) && T(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), S && S(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), _ && _(se), C && se.deltaY < 0 != ce < 0 && C(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (Y && Y(se), $ && oe && $(se), re && (h(se), re = !1), ne = oe = !1), ie && (U(se), ie = !1), ee = 0
        }

        function Te(e, t, r) {
            be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), o ? ee = ee || requestAnimationFrame(Se) : Se()
        }

        function Ue(e, t) {
            "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), o ? ee = ee || requestAnimationFrame(Se) : Se()
        }

        function Ve(e) {
            if (!Qe(e, 1)) {
                var t = (e = L(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y,
                    o = se.isDragging;
                se.x = t, se.y = r, (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), o || (se.isDragging = !0), Ue(n, i), o || p && p(se))
            }
        }

        function Xe(t) {
            if (!Qe(t, 1)) {
                B(F ? n : ve, ze[1], Ve, !0);
                var e = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                    r = L(t);
                e || (se._vx.reset(), se._vy.reset(), s && G && we.delayedCall(.08, function() {
                    if (300 < He() - ye && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (ve.createEvent) {
                        var e = ve.createEvent("MouseEvents");
                        e.initMouseEvent("click", !0, !0, Me, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                    }
                })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !F && te.restart(!0), g && e && g(se), b && b(se, e)
            }
        }

        function Ye(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging)
        }

        function Ze() {
            return (se.isGesturing = !1) || R(se)
        }

        function $e(e) {
            if (!Qe(e)) {
                var t = ue(),
                    r = fe();
                Te((t - de) * Q, (r - pe) * Q, 1), de = t, pe = r, l && te.restart(!0)
            }
        }

        function _e(e) {
            if (!Qe(e)) {
                e = L(e, s), U && (ie = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Me.innerHeight : 1) * f;
                Te(e.deltaX * t, e.deltaY * t, 0), l && !F && te.restart(!0)
            }
        }

        function af(e) {
            if (!Qe(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y;
                se.x = t, se.y = r, ne = !0, (n || i) && Ue(n, i)
            }
        }

        function bf(e) {
            se.event = e, P(se)
        }

        function cf(e) {
            se.event = e, D(se)
        }

        function df(e) {
            return Qe(e) || L(e, s) && j(se)
        }
        this.target = n = I(n) || Ce, this.vars = e, u = u && we.utils.toArray(u), i = i || 0, a = a || 0, f = f || 1, Q = Q || 1, t = t || "wheel,touch,pointer", o = !1 !== o, r = r || parseFloat(Me.getComputedStyle(Oe).lineHeight) || 22;
        var ee, te, re, ne, ie, oe, ae, se = this,
            le = 0,
            ce = 0,
            ue = J(n, Re),
            fe = J(n, Ne),
            de = ue(),
            pe = fe(),
            ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === ze[0],
            he = z(n),
            ve = n.ownerDocument || Ae,
            be = [0, 0, 0],
            me = [0, 0, 0],
            ye = 0,
            xe = se.onPress = function(e) {
                Qe(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = L(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), A(F ? n : ve, ze[1], Ve, s, !0), se.deltaX = se.deltaY = 0, v && v(se))
            };
        te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = K(0, 50, !0), se._vy = K(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function(e) {
            return se.isEnabled || (A(he ? ve : n, "scroll", E), 0 <= t.indexOf("scroll") && A(he ? ve : n, "scroll", $e, s, q), 0 <= t.indexOf("wheel") && A(n, "wheel", _e, s, q), (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (A(n, ze[0], xe, s, q), A(ve, ze[2], Xe), A(ve, ze[3], Xe), G && A(n, "click", Pe, !1, !0), j && A(n, "click", df), H && A(ve, "gesturestart", Ye), R && A(ve, "gestureend", Ze), P && A(n, Ie + "enter", bf), D && A(n, Ie + "leave", cf), Y && A(n, Ie + "move", af)), se.isEnabled = !0, e && e.type && xe(e), V && V(se)), se
        }, se.disable = function() {
            se.isEnabled && (Fe.filter(function(e) {
                return e !== se && z(e.target)
            }).length || B(he ? ve : n, "scroll", E), se.isPressed && (se._vx.reset(), se._vy.reset(), B(F ? n : ve, ze[1], Ve, !0)), B(he ? ve : n, "scroll", $e, q), B(n, "wheel", _e, q), B(n, ze[0], xe, q), B(ve, ze[2], Xe), B(ve, ze[3], Xe), B(n, "click", Pe, !0), B(n, "click", df), B(ve, "gesturestart", Ye), B(ve, "gestureend", Ze), B(n, Ie + "enter", bf), B(n, Ie + "leave", cf), B(n, Ie + "move", af), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se))
        }, se.kill = function() {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), De === se && (De = 0)
        }, Fe.push(se), F && z(n) && (De = se), se.enable(d)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    k.version = "3.10.4", k.create = function(e) {
        return new k(e)
    }, k.register = O, k.getAll = function() {
        return Fe.slice()
    }, k.getById = function(t) {
        return Fe.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, q() && we.registerPlugin(k);

    function va() {
        return nt = 1
    }

    function wa() {
        return nt = 0
    }

    function xa(e) {
        return e
    }

    function ya(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function za() {
        return "undefined" != typeof window
    }

    function Aa() {
        return We || za() && (We = window.gsap) && We.registerPlugin && We
    }

    function Ba(e) {
        return !!~s.indexOf(e)
    }

    function Ca(e) {
        return y(e, "getBoundingClientRect") || (Ba(e) ? function() {
            return Bt.width = je.innerWidth, Bt.height = je.innerHeight, Bt
        } : function() {
            return Mt(e)
        })
    }

    function Fa(e, t) {
        var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
        return (r = "scroll" + n) && (o = y(e, r)) ? o() - Ca(e)()[i] : Ba(e) ? (qe[r] || Ge[r]) - (je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n]
    }

    function Ga(e, t) {
        for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2])
    }

    function Ha(e) {
        return "string" == typeof e
    }

    function Ia(e) {
        return "function" == typeof e
    }

    function Ja(e) {
        return "number" == typeof e
    }

    function Ka(e) {
        return "object" == typeof e
    }

    function La(e) {
        return Ia(e) && e()
    }

    function Ma(r, n) {
        return function() {
            var e = La(r),
                t = La(n);
            return function() {
                La(e), La(t)
            }
        }
    }

    function Na(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Oa(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function db(e) {
        return je.getComputedStyle(e)
    }

    function fb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function hb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function ib(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function kb(i) {
        var o = We.utils.snap(i),
            a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }

    function mb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function nb(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }

    function ob(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function pb(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r)
    }

    function tb(e, t) {
        if (Ha(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in Y ? Y[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function ub(e, t, r, n, i, o, a, s) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = Je.createElement("div"),
            g = Ba(r) || "fixed" === y(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? Ge : r,
            b = -1 !== e.indexOf("start"),
            m = b ? l : c,
            x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === Ne ? _ : P) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, b), p
    }

    function zb() {
        return 34 < dt() - pt && ee()
    }

    function Ab() {
        h && h.isPressed && !(h.startX > Ge.clientWidth) || (T.cache++, x = x || requestAnimationFrame(ee), pt || V("scrollStart"), pt = dt())
    }

    function Bb() {
        m = je.innerWidth, b = je.innerHeight
    }

    function Cb() {
        T.cache++, rt || g || Je.fullscreenElement || Je.webkitFullscreenElement || v && m === je.innerWidth && !(Math.abs(je.innerHeight - b) > .25 * je.innerHeight) || l.restart(!0)
    }

    function Ib(e) {
        var t, r = We.ticker.frame,
            n = [],
            i = 0;
        if (w !== r || ft) {
            for (Q(); i < U.length; i += 4)(t = je.matchMedia(U[i]).matches) !== U[i + 3] && ((U[i + 3] = t) ? n.push(i) : Q(1, U[i]) || Ia(U[i + 2]) && U[i + 2]());
            for (j(), i = 0; i < n.length; i++) t = n[i], lt = U[t], U[t + 2] = U[t + 1](e);
            lt = 0, a && Z(0, 1), w = r, V("matchMedia")
        }
    }

    function Jb() {
        return ob(oe, "scrollEnd", Jb) || Z(!0)
    }

    function Ob() {
        return T.cache++ && T.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }

    function Zb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var i, o = te.length, a = t.style, s = e.style; o--;) a[i = te[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[P] = s[_] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[vt] = hb(e, Re) + kt, a[bt] = hb(e, Ne) + kt, a[St] = s[_t] = s.top = s.left = "0", It(n), s[vt] = s.maxWidth = r[vt], s[bt] = s.maxHeight = r[bt], s[St] = r[St], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function ac(e) {
        for (var t = re.length, r = e.style, n = [], i = 0; i < t; i++) n.push(re[i], r[re[i]]);
        return n.t = e, n
    }

    function dc(e, t, r, n, i, o, a, s, l, c, u, f, d) {
        Ia(e) && (e = e(s)), Ha(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? tb("0" + e.substr(3), r) : 0));
        var p, g, h, v = d ? d.time() : 0;
        if (d && d.seek(0), Ja(e)) a && X(a, r, n, !0);
        else {
            Ia(t) && (t = t(s));
            var b, m, y, x, w = e.split(" ");
            h = I(t) || Ge, (b = Mt(h) || {}) && (b.left || b.top) || "none" !== db(h).display || (x = h.style.display, h.style.display = "block", b = Mt(h), x ? h.style.display = x : h.style.removeProperty("display")), m = tb(w[0], b[n.d]), y = tb(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + i - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
        }
        if (o) {
            var S = e + r,
                _ = o._isStart;
            p = "scroll" + n.d2, X(o, S, n, _ && 20 < S || !_ && (u ? Math.max(Ge[p], qe[p]) : o.parentNode[p]) <= S + 1), u && (l = Mt(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + kt))
        }
        return d && h && (p = Mt(h), d.seek(f), g = Mt(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(v), d ? e : Math.round(e)
    }

    function fc(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === Ge) {
                for (i in e._stOrig = a.cssText, o = db(e)) + i || ie.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            We.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function gc(l, e) {
        function Qj(e, t, r, n, i) {
            var o = Qj.tween,
                a = t.onComplete,
                s = {};
            return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function(e) {
                return (e = ya(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), Qj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = ya(e)
            }, t.onComplete = function() {
                Qj.tween = 0, a && a.call(o)
            }, o = Qj.tween = We.to(l, t)
        }
        var c, u, f = J(l, e),
            d = "_scroll" + e.p2;
        return (l[d] = f).wheelHandler = function() {
            return Qj.tween && Qj.tween.kill() && (Qj.tween = 0)
        }, nb(l, "wheel", f.wheelHandler), Qj
    }
    var We, a, je, Je, qe, Ge, s, l, Ke, et, tt, c, rt, nt, u, it, f, d, p, ot, at, g, h, v, b, m, C, st, x, lt, w, ct, ut, ft = 1,
        dt = Date.now,
        S = dt(),
        pt = 0,
        gt = 0,
        ht = Math.abs,
        _ = "right",
        P = "bottom",
        vt = "width",
        bt = "height",
        mt = "Right",
        yt = "Left",
        xt = "Top",
        wt = "Bottom",
        St = "padding",
        _t = "margin",
        Tt = "Width",
        D = "Height",
        kt = "px",
        Mt = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== db(e)[u] && We.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        At = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Ct = {
            toggleActions: "play",
            anticipatePin: 0
        },
        Y = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        X = function _positionMarker(e, t, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Tt] = 1, i["border" + a + Tt] = 0, i[r.p] = t + "px", We.set(e, i)
        },
        Ot = [],
        Pt = {},
        H = {},
        R = [],
        U = [],
        V = function _dispatch(e) {
            return H[e] && H[e].map(function(e) {
                return e()
            }) || R
        },
        W = [],
        j = function _revertRecorded(e) {
            for (var t = 0; t < W.length; t += 5) e && W[t + 4] !== e || (W[t].style.cssText = W[t + 1], W[t].getBBox && W[t].setAttribute("transform", W[t + 2] || ""), W[t + 3].uncache = 1)
        },
        Q = function _revertAll(e, t) {
            var r;
            for (it = 0; it < Ot.length; it++) r = Ot[it], t && r.media !== t || (e ? r.kill(1) : r.revert());
            t && j(t), t || V("revert")
        },
        G = 0,
        Z = function _refreshAll(e, t) {
            if (!pt || e) {
                ct = !0;
                var r = V("refreshInit");
                ot && oe.sort(), t || Q(), Ot.slice(0).forEach(function(e) {
                    return e.refresh()
                }), Ot.forEach(function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Fa(e.scroller, e._dir))
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), Ob(), l.pause(), G++, ct = !1, V("refresh")
            } else nb(oe, "scrollEnd", Jb)
        },
        $ = 0,
        Et = 1,
        ee = function _updateAll() {
            if (!ct) {
                oe.isUpdating = !0, ut && ut.update(0);
                var e = Ot.length,
                    t = dt(),
                    r = 50 <= t - S,
                    n = e && Ot[0].scroll();
                if (Et = n < $ ? -1 : 1, $ = n, r && (pt && !nt && 200 < t - pt && (pt = 0, V("scrollEnd")), tt = S, S = t), Et < 0) {
                    for (it = e; 0 < it--;) Ot[it] && Ot[it].update(0, r);
                    Et = 1
                } else
                    for (it = 0; it < e; it++) Ot[it] && Ot[it].update(0, r);
                oe.isUpdating = !1
            }
            x = 0
        },
        te = ["left", "top", P, _, _t + wt, _t + mt, _t + xt, _t + yt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        re = te.concat([vt, bt, "boxSizing", "max" + Tt, "max" + D, "position", _t, St, St + xt, St + mt, St + wt, St + yt]),
        ne = /([A-Z])/g,
        It = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    i = e.length,
                    o = 0;
                for ((e.t._gsap || We.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(ne, "-$1").toLowerCase())
            }
        },
        Bt = {
            left: 0,
            top: 0
        },
        ie = /(webkit|moz|length|cssText|inset)/i,
        oe = (ScrollTrigger.prototype.init = function init(_, T) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), gt) {
                var k, n, p, M, A, C, O, P, E, B, D, e, z, Y, X, F, L, t, H, b, R, N, m, U, x, w, r, S, V, W, i, g, j, Q, q, G, K, o, Z = (_ = fb(Ha(_) || Ja(_) || _.nodeType ? {
                        trigger: _
                    } : _, Ct)).onUpdate,
                    $ = _.toggleClass,
                    a = _.id,
                    ee = _.onToggle,
                    te = _.onRefresh,
                    re = _.scrub,
                    ne = _.trigger,
                    ie = _.pin,
                    oe = _.pinSpacing,
                    ae = _.invalidateOnRefresh,
                    se = _.anticipatePin,
                    s = _.onScrubComplete,
                    h = _.onSnapComplete,
                    le = _.once,
                    ce = _.snap,
                    ue = _.pinReparent,
                    l = _.pinSpacer,
                    fe = _.containerAnimation,
                    de = _.fastScrollEnd,
                    pe = _.preventOverlaps,
                    ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Re : Ne,
                    he = !re && 0 !== re,
                    ve = I(_.scroller || je),
                    c = We.core.getCache(ve),
                    be = Ba(ve),
                    me = "fixed" === ("pinType" in _ ? _.pinType : y(ve, "pinType") || be && "fixed"),
                    ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
                    xe = he && _.toggleActions.split(" "),
                    u = "markers" in _ ? _.markers : Ct.markers,
                    we = be ? 0 : parseFloat(db(ve)["border" + ge.p2 + Tt]) || 0,
                    Se = this,
                    _e = _.onRefreshInit && function() {
                        return _.onRefreshInit(Se)
                    },
                    Te = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = y(e, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (t ? je["inner" + i] : e["client" + i]) || 0
                        }
                    }(ve, be, ge),
                    ke = function _getOffsetsFunc(e, t) {
                        return !t || ~Le.indexOf(e) ? Ca(e) : function() {
                            return Bt
                        }
                    }(ve, be),
                    Me = 0,
                    Ae = 0,
                    Ce = J(ve, ge);
                if (Se.media = lt, Se._dir = ge, se *= 45, Se.scroller = ve, Se.scroll = fe ? fe.time.bind(fe) : Ce, M = Ce(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (ot = 1, -9999 === _.refreshPriority && (ut = Se)), c.tweenScroll = c.tweenScroll || {
                        top: gc(ve, Ne),
                        left: gc(ve, Re)
                    }, Se.tweenTo = k = c.tweenScroll[ge.p], Se.scrubDuration = function(e) {
                        (i = Ja(e) && e) ? W ? W.duration(e) : W = We.to(T, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: i,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(Se)
                            }
                        }): (W && W.progress(1).kill(), W = 0)
                    }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), S = 0, a = a || T.vars.id), Ot.push(Se), ce && (Ka(ce) && !ce.push || (ce = {
                        snapTo: ce
                    }), "scrollBehavior" in Ge.style && We.set(be ? [Ge, qe] : ve, {
                        scrollBehavior: "auto"
                    }), p = Ia(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return We.utils.snap(ib(t), e)
                        }
                    }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return kb(ib(r))(e, t.direction)
                        }
                    }(T) : !1 !== ce.directional ? function(e, t) {
                        return kb(ce.snapTo)(e, dt() - Ae < 500 ? 0 : t.direction)
                    } : We.utils.snap(ce.snapTo), g = ce.duration || {
                        min: .1,
                        max: 2
                    }, g = Ka(g) ? et(g.min, g.max) : et(g, g), j = We.delayedCall(ce.delay || i / 2 || .1, function() {
                        var e = Ce(),
                            t = dt() - Ae < 500,
                            r = k.tween;
                        if (!(t || Math.abs(Se.getVelocity()) < 10) || r || nt || Me === e) Se.isActive && Me !== e && j.restart(!0);
                        else {
                            var n = (e - C) / z,
                                i = T && !he ? T.totalProgress() : n,
                                o = t ? 0 : (i - V) / (dt() - tt) * 1e3 || 0,
                                a = We.utils.clamp(-n, 1 - n, ht(o / 2) * o / .185),
                                s = n + (!1 === ce.inertia ? 0 : a),
                                l = et(0, 1, p(s, Se)),
                                c = Math.round(C + l * z),
                                u = ce.onStart,
                                f = ce.onInterrupt,
                                d = ce.onComplete;
                            if (e <= O && C <= e && c !== e) {
                                if (r && !r._initted && r.data <= ht(c - e)) return;
                                !1 === ce.inertia && (a = l - n), k(c, {
                                    duration: g(ht(.185 * Math.max(ht(s - i), ht(l - i)) / o / .05 || 0)),
                                    ease: ce.ease || "power3",
                                    data: ht(c - e),
                                    onInterrupt: function onInterrupt() {
                                        return j.restart(!0) && f && f(Se)
                                    },
                                    onComplete: function onComplete() {
                                        Se.update(), Me = Ce(), S = V = T && !he ? T.totalProgress() : Se.progress, h && h(Se), d && d(Se)
                                    }
                                }, e, a * z, c - e - a * z), u && u(Se, k.tween)
                            }
                        }
                    }).pause()), a && (Pt[a] = Se), o = (o = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : I(ie), Ha($) && ($ = {
                        targets: ne,
                        className: $
                    }), ie && (!1 === oe || oe === _t || (oe = !(!oe && "flex" === db(ie.parentNode).display) && St), Se.pin = ie, !1 !== _.force3D && We.set(ie, {
                        force3D: !0
                    }), (n = We.core.getCache(ie)).spacer ? Y = n.pinState : (l && ((l = I(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = ac(l))), n.spacer = L = l || Je.createElement("div"), L.classList.add("pin-spacer"), a && L.classList.add("pin-spacer-" + a), n.pinState = Y = ac(ie)), Se.spacer = L = n.spacer, r = db(ie), m = r[oe + ge.os2], H = We.getProperty(ie), b = We.quickSetter(ie, ge.a, kt), Zb(ie, L, r), F = ac(ie)), u) {
                    e = Ka(u) ? fb(u, At) : At, B = ub("scroller-start", a, ve, ge, e, 0), D = ub("scroller-end", a, ve, ge, e, 0, B), t = B["offset" + ge.op.d2];
                    var f = I(y(ve, "content") || ve);
                    P = this.markerStart = ub("start", a, f, ge, e, t, 0, fe), E = this.markerEnd = ub("end", a, f, ge, e, t, 0, fe), fe && (K = We.quickSetter([P, E], ge.a, kt)), me || Le.length && !0 === y(ve, "fixedMarkers") || (function _makePositionable(e) {
                        var t = db(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(be ? Ge : ve), We.set([B, D], {
                        force3D: !0
                    }), x = We.quickSetter(B, ge.a, kt), w = We.quickSetter(D, ge.a, kt))
                }
                if (fe) {
                    var d = fe.vars.onUpdate,
                        v = fe.vars.onUpdateParams;
                    fe.eventCallback("onUpdate", function() {
                        Se.update(0, 0, 1), d && d.apply(v || [])
                    })
                }
                Se.previous = function() {
                    return Ot[Ot.indexOf(Se) - 1]
                }, Se.next = function() {
                    return Ot[Ot.indexOf(Se) + 1]
                }, Se.revert = function(e) {
                    var t = !1 !== e || !Se.enabled,
                        r = rt;
                    t !== Se.isReverted && (t && (!Se.scroll.rec && rt && ct && (Se.scroll.rec = Ce()), q = Math.max(Ce(), Se.scroll.rec || 0), Q = Se.progress, G = T && T.progress()), P && [P, E, B, D].forEach(function(e) {
                        return e.style.display = t ? "none" : "block"
                    }), t && (rt = 1), Se.update(t), rt = r, ie && (t ? function _swapPinOut(e, t, r) {
                        It(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) It(n.spacerState);
                        else if (e.parentNode === t) {
                            var i = t.parentNode;
                            i && (i.insertBefore(e, t), i.removeChild(t))
                        }
                    }(ie, L, Y) : ue && Se.isActive || Zb(ie, L, db(ie), U)), Se.isReverted = t)
                }, Se.refresh = function(e, t) {
                    if (!rt && Se.enabled || t)
                        if (ie && e && pt) nb(ScrollTrigger, "scrollEnd", Jb);
                        else {
                            !ct && _e && _e(Se), rt = 1, Ae = dt(), k.tween && (k.tween.kill(), k.tween = 0), W && W.pause(), ae && T && T.time(-.01, !0).invalidate(), Se.isReverted || Se.revert();
                            for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Fa(ve, ge), h = 0, v = 0, b = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Ot.indexOf(Se)) || 0, S = w; S--;)(s = Ot[S]).end || s.refresh(0, 1) || (rt = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert()), s !== Ot[S] && (w--, S--);
                            for (Ia(y) && (y = y(Se)), C = dc(y, ne, d, ge, Ce(), P, B, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Ia(b) && (b = b(Se)), Ha(b) && !b.indexOf("+=") && (~b.indexOf(" ") ? b = (Ha(y) ? y.split(" ")[0] : "") + b : (h = tb(b.substr(2), d), b = Ha(y) ? y : C + h, m = ne)), O = Math.max(C, dc(b || (m ? "100% 0" : g), m, d, ge, Ce() + h, E, D, Se, p, we, me, g, fe)) || -.001, z = O - C || (C -= .01) && .001, h = 0, S = w; S--;)(l = (s = Ot[S]).pin) && s.start - s._pinPush < C && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ja(y) || (h += r * (1 - s.progress)), l === ie && (v += r));
                            if (C += h, O += h, Se._pinPush = v, P && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Ce()), We.set([P, E], r)), ie) r = db(ie), o = ge === Ne, i = Ce(), R = parseFloat(H(ge.a)) + v, !g && 1 < O && ((be ? Ge : ve).style["overflow-" + ge.a] = "scroll"), Zb(ie, L, r), F = ac(ie), n = Mt(ie, !0), c = me && J(ve, o ? Re : Ne)(), oe && ((U = [oe + ge.os2, z + v + kt]).t = L, (S = oe === St ? hb(ie, ge) + z + v : 0) && U.push(ge.d, S + kt), It(U), me && Ce(q)), me && ((a = {
                                top: n.top + (o ? i - C : c) + kt,
                                left: n.left + (o ? c : i - C) + kt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[vt] = a.maxWidth = Math.ceil(n.width) + kt, a[bt] = a.maxHeight = Math.ceil(n.height) + kt, a[_t] = a[_t + xt] = a[_t + mt] = a[_t + wt] = a[_t + yt] = "0", a[St] = r[St], a[St + xt] = r[St + xt], a[St + mt] = r[St + mt], a[St + wt] = r[St + wt], a[St + yt] = r[St + yt], X = function _copyState(e, t, r) {
                                for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                                return i.t = e.t, i
                            }(Y, a, ue)), T ? (u = T._initted, at(1), T.render(T.duration(), !0, !0), N = H(ge.a) - R + z + v, z !== N && me && X.splice(X.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), at(0)) : N = z;
                            else if (ne && Ce() && !fe)
                                for (n = ne.parentNode; n && n !== Ge;) n._pinOffset && (C -= n._pinOffset, O -= n._pinOffset), n = n.parentNode;
                            f && f.forEach(function(e) {
                                return e.revert(!1)
                            }), Se.start = C, Se.end = O, M = A = Ce(), fe || (M < q && Ce(q), Se.scroll.rec = 0), Se.revert(!1), j && (Me = -1, Se.isActive && Ce(C + z * Q), j.restart(!0)), rt = 0, T && he && (T._initted || G) && T.progress() !== G && T.progress(G, !0).render(T.time(), !0, !0), Q === Se.progress && !fe || (T && !he && T.totalProgress(Q, !0), Se.progress = Q, Se.update(0, 0, 1)), ie && oe && (L._pinOffset = Math.round(Se.progress * N)), te && te(Se)
                        }
                }, Se.getVelocity = function() {
                    return (Ce() - A) / (dt() - tt) * 1e3 || 0
                }, Se.endAnimation = function() {
                    Na(Se.callbackAnimation), T && (W ? W.progress(1) : T.paused() ? he || Na(T, Se.direction < 0, 1) : Na(T, T.reversed()))
                }, Se.labelToScroll = function(e) {
                    return T && T.labels && (C || Se.refresh() || C) + T.labels[e] / T.duration() * z || 0
                }, Se.getTrailing = function(t) {
                    var e = Ot.indexOf(Se),
                        r = 0 < Se.direction ? Ot.slice(0, e).reverse() : Ot.slice(e + 1);
                    return (Ha(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < Se.direction ? e.end <= C : e.start >= O
                    })
                }, Se.update = function(e, t, r) {
                    if (!fe || r || e) {
                        var n, i, o, a, s, l, c, u = Se.scroll(),
                            f = e ? 0 : (u - C) / z,
                            d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                            p = Se.progress;
                        if (t && (A = M, M = fe ? Ce() : u, ce && (V = S, S = T && !he ? T.totalProgress() : d)), se && !d && ie && !rt && !ft && pt && C < u + (u - A) / (dt() - tt) * se && (d = 1e-4), d !== p && Se.enabled) {
                            if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !rt && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Ia(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function(e) {
                                    return e.endAnimation()
                                })), he || (!W || rt || ft ? T && T.totalProgress(d, !!rt) : ((fe || ut && ut !== Se) && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", d, T._tTime / T._tDur) : (W.vars.totalProgress = d, W.invalidate().restart()))), ie)
                                if (e && oe && (L.style[oe + ge.os2] = m), me) {
                                    if (a) {
                                        if (l = !e && p < d && u < O + 1 && u + 1 >= Fa(ve, ge), ue)
                                            if (e || !n && !l) fc(ie, L);
                                            else {
                                                var g = Mt(ie, !0),
                                                    h = u - C;
                                                fc(ie, Ge, g.top + (ge === Ne ? h : 0) + kt, g.left + (ge === Ne ? 0 : h) + kt)
                                            }
                                        It(n || l ? X : F), N !== z && d < 1 && n || b(R + (1 !== d || l ? 0 : N))
                                    }
                                } else b(ya(R + N * d));
                            !ce || k.tween || rt || ft || j.restart(!0), $ && (s || le && d && (d < 1 || !st)) && Ke($.targets).forEach(function(e) {
                                return e.classList[n || le ? "add" : "remove"]($.className)
                            }), !Z || he || e || Z(Se), a && !rt ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), Z && Z(Se)), !s && st || (ee && s && Oa(Se, ee), ye[i] && Oa(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && Oa(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ja(de) ? de : 2500) && (Na(Se.callbackAnimation), W ? W.progress(1) : Na(T, !d, 1))) : he && Z && !rt && Z(Se)
                        }
                        if (w) {
                            var v = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
                            x(v + (B._isFlipped ? 1 : 0)), w(v)
                        }
                        K && K(-u / fe.duration() * (fe._caScrollDist || 0))
                    }
                }, Se.enable = function(e, t) {
                    Se.enabled || (Se.enabled = !0, nb(ve, "resize", Cb), nb(be ? Je : ve, "scroll", Ab), _e && nb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = Q = 0, M = A = Me = Ce()), !1 !== t && Se.refresh())
                }, Se.getTween = function(e) {
                    return e && k ? k.tween : W
                }, Se.setPositions = function(e, t) {
                    ie && (R += e - C, N += t - e - z), Se.start = C = e, Se.end = O = t, z = t - e, Se.update()
                }, Se.disable = function(e, t) {
                    if (Se.enabled && (!1 !== e && Se.revert(), Se.enabled = Se.isActive = !1, t || W && W.pause(), q = 0, n && (n.uncache = 1), _e && ob(ScrollTrigger, "refreshInit", _e), j && (j.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !be)) {
                        for (var r = Ot.length; r--;)
                            if (Ot[r].scroller === ve && Ot[r] !== Se) return;
                        ob(ve, "resize", Cb), ob(ve, "scroll", Ab)
                    }
                }, Se.kill = function(e, t) {
                    Se.disable(e, t), W && !t && W.kill(), a && delete Pt[a];
                    var r = Ot.indexOf(Se);
                    0 <= r && Ot.splice(r, 1), r === it && 0 < Et && it--, r = 0, Ot.forEach(function(e) {
                        return e.scroller === Se.scroller && (r = 1)
                    }), r || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), P && [P, E, B, D].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), ut === Se && (ut = 0), ie && (n && (n.uncache = 1), r = 0, Ot.forEach(function(e) {
                        return e.pin === ie && r++
                    }), r || (n.spacer = 0)), _.onKill && _.onKill(Se)
                }, Se.enable(!1, !1), o && o(Se), T && T.add && !z ? We.delayedCall(.01, function() {
                    return C || O || Se.refresh()
                }) && (z = .01) && (C = O = 0) : Se.refresh()
            } else this.update = this.refresh = this.kill = xa
        }, ScrollTrigger.register = function register(e) {
            return a || (We = e || Aa(), za() && window.document && ScrollTrigger.enable(), a = gt), a
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) Ct[t] = e[t];
            return Ct
        }, ScrollTrigger.disable = function disable(t, r) {
            gt = 0, Ot.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), ob(je, "wheel", Ab), ob(Je, "scroll", Ab), clearInterval(c), ob(Je, "touchcancel", xa), ob(Ge, "touchstart", xa), mb(ob, Je, "pointerdown,touchstart,mousedown", va), mb(ob, Je, "pointerup,touchend,mouseup", wa), l.kill(), Ga(ob);
            for (var e = 0; e < T.length; e += 3) pb(ob, T[e], T[e + 1]), pb(ob, T[e], T[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (je = window, Je = document, qe = Je.documentElement, Ge = Je.body, We && (Ke = We.utils.toArray, et = We.utils.clamp, at = We.core.suppressOverwrites || xa, We.core.globals("ScrollTrigger", ScrollTrigger), Ge)) {
                gt = 1, k.register(We), ScrollTrigger.isTouch = k.isTouch, C = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), nb(je, "wheel", Ab), s = [je, Je, qe, Ge], ScrollTrigger.matchMedia({
                    "(orientation: portrait)": function orientationPortrait() {
                        return Bb(), Bb
                    }
                }), nb(Je, "scroll", Ab);
                var e, t, r = Ge.style,
                    n = r.borderTopStyle;
                for (r.borderTopStyle = "solid", e = Mt(Ge), Ne.m = Math.round(e.top + Ne.sc()) || 0, Re.m = Math.round(e.left + Re.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), c = setInterval(zb, 250), We.delayedCall(.5, function() {
                        return ft = 0
                    }), nb(Je, "touchcancel", xa), nb(Ge, "touchstart", xa), mb(nb, Je, "pointerdown,touchstart,mousedown", va), mb(nb, Je, "pointerup,touchend,mouseup", wa), u = We.utils.checkPrefix("transform"), re.push(u), a = dt(), l = We.delayedCall(.2, Z).pause(), p = [Je, "visibilitychange", function() {
                        var e = je.innerWidth,
                            t = je.innerHeight;
                        Je.hidden ? (f = e, d = t) : f === e && d === t || Cb()
                    }, Je, "DOMContentLoaded", Z, je, "load", Z, je, "resize", Cb], Ga(nb), Ot.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < T.length; t += 3) pb(ob, T[t], T[t + 1]), pb(ob, T[t], T[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (st = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(c) || (c = t) && setInterval(zb, t), "ignoreMobileResize" in e && (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ga(ob) || Ga(nb, e.autoRefreshEvents || "none"), g = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = I(e),
                n = T.indexOf(r),
                i = Ba(r);
            ~n && T.splice(n, i ? 6 : 2), t && (i ? Le.unshift(je, t, Ge, t, qe, t) : Le.unshift(r, t))
        }, ScrollTrigger.matchMedia = function matchMedia(e) {
            var t, r, n, i, o;
            for (r in e) n = U.indexOf(r), i = e[r], "all" === (lt = r) ? i() : (t = je.matchMedia(r)) && (t.matches && (o = i()), ~n ? (U[n + 1] = Ma(U[n + 1], i), U[n + 2] = Ma(U[n + 2], o)) : (n = U.length, U.push(r, i, o), t.addListener ? t.addListener(Ib) : t.addEventListener("change", Ib)), U[n + 3] = t.matches), lt = 0;
            return U
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
            e || (U.length = 0), 0 <= (e = U.indexOf(e)) && U.splice(e, 4)
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (Ha(e) ? I(e) : e).getBoundingClientRect(),
                i = n[r ? vt : bt] * t || 0;
            return r ? 0 < n.right - i && n.left + i < je.innerWidth : 0 < n.bottom - i && n.top + i < je.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            Ha(e) && (e = I(e));
            var n = e.getBoundingClientRect(),
                i = n[r ? vt : bt],
                o = null == t ? i / 2 : t in Y ? Y[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / je.innerWidth : (n.top + o) / je.innerHeight
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        a || ScrollTrigger.register(We) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    oe.version = "3.10.4", oe.saveStyles = function(e) {
        return e ? Ke(e).forEach(function(e) {
            if (e && e.style) {
                var t = W.indexOf(e);
                0 <= t && W.splice(t, 5), W.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), We.core.getCache(e), lt)
            }
        }) : W
    }, oe.revert = function(e, t) {
        return Q(!e, t)
    }, oe.create = function(e, t) {
        return new oe(e, t)
    }, oe.refresh = function(e) {
        return e ? Cb() : (a || oe.register()) && Z(!0)
    }, oe.update = ee, oe.clearScrollMemory = Ob, oe.maxScroll = function(e, t) {
        return Fa(e, t ? Re : Ne)
    }, oe.getScrollFunc = function(e, t) {
        return J(I(e), t ? Re : Ne)
    }, oe.getById = function(e) {
        return Pt[e]
    }, oe.getAll = function() {
        return Ot.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, oe.isScrolling = function() {
        return !!pt
    }, oe.snapDirectional = kb, oe.addEventListener = function(e, t) {
        var r = H[e] || (H[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, oe.removeEventListener = function(e, t) {
        var r = H[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, oe.batch = function(e, t) {
        function to(e, t) {
            var r = [],
                n = [],
                i = We.delayedCall(o, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
        }
        var r, n = [],
            i = {},
            o = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && Ia(t[r]) && "onRefreshInit" !== r ? to(0, t[r]) : t[r];
        return Ia(a) && (a = a(), nb(oe, "refresh", function() {
            return a = t.batchMax()
        })), Ke(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(oe.create(t))
        }), n
    };

    function ic(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function jc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none", e === qe && jc(Ge, t)
    }

    function lc(e) {
        var t, r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || We.core.getCache(o),
            s = dt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
            a._isScroll = o && !Ba(o) && o !== n && (se[(t = db(o)).overflowY] || se[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== i || (r._gsapAllow = !0)
    }

    function mc(e, t, r, n) {
        return k.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && lc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && nb(Je, k.eventTypes[0], ce, !1, !0)
            },
            onDisable: function onDisable() {
                return ob(Je, k.eventTypes[0], ce, !0)
            }
        })
    }

    function qc(e) {
        function op() {
            return n = !1
        }

        function rp() {
            o = Fa(d, Ne), _ = et(C ? 1 : 0, o), f && (S = et(0, Fa(d, Re))), a = G
        }

        function xp() {
            rp(), s.isActive() && s.vars.scrollY > o && (h() > o ? s.progress(1) && h(o) : s.resetTo("scrollY", o))
        }
        Ka(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var r, o, n, a, s, l, c, u, f = e.normalizeScrollX,
            t = e.momentum,
            i = e.allowNestedScroll,
            d = I(e.target) || qe,
            p = We.core.globals().ScrollSmoother,
            g = C && (e.content && I(e.content) || p && p.get() && p.get().content()),
            h = J(d, Ne),
            v = J(d, Re),
            b = 1,
            m = (k.isTouch && je.visualViewport ? je.visualViewport.scale * je.visualViewport.width : je.outerWidth) / je.innerWidth,
            y = 0,
            x = Ia(t) ? function() {
                return t(r)
            } : function() {
                return t || 2.8
            },
            w = mc(d, e.type, !0, i),
            S = xa,
            _ = xa;
        return e.ignoreCheck = function(e) {
            return C && "touchmove" === e.type && function ignoreDrag() {
                if (n) {
                    requestAnimationFrame(op);
                    var e = ya(r.deltaY / 2),
                        t = _(h.v - e);
                    return g && t !== h.v + h.offset && (h.offset = t - h.v, g.style.transform = "translateY(" + -h.offset + "px)", g._gsap && (g._gsap.y = -h.offset + "px"), h.cacheID = T.cache, ee()), !0
                }
                g && (g.style.transform = "translateY(0px)", h.offset = h.cacheID = 0, g._gsap && (g._gsap.y = "0px")), n = !0
            }() || 1.05 < b && "touchstart" !== e.type || r.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            var e = b;
            b = ya((je.visualViewport && je.visualViewport.scale || 1) / m), s.pause(), e !== b && jc(d, 1.01 < b || !f && "x"), n = !1, l = v(), c = h(), rp(), a = G
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (g && (g.style.transform = "translateY(0px)", h.offset = h.cacheID = 0, g._gsap && (g._gsap.y = "0px")), t) {
                T.cache++;
                var r, n, i = x();
                f && (n = (r = v()) + .05 * i * -e.velocityX / .227, i *= ic(v, r, n, Fa(d, Re)), s.vars.scrollX = S(n)), n = (r = h()) + .05 * i * -e.velocityY / .227, i *= ic(h, r, n, Fa(d, Ne)), s.vars.scrollY = _(n), s.invalidate().duration(i).play(.01), (C && s.vars.scrollY >= o || o - 1 <= r) && We.to({}, {
                    onUpdate: xp,
                    duration: i
                })
            } else u.restart(!0)
        }, e.onWheel = function() {
            s._ts && s.pause(), 1e3 < dt() - y && (a = 0, y = dt())
        }, e.onChange = function(e, t, r, n, i) {
            G !== a && rp(), t && f && v(S(n[2] === t ? l + (e.startX - e.x) : v() + t - n[1])), r && h(_(i[2] === r ? c + (e.startY - e.y) : h() + r - i[1])), ee()
        }, e.onEnable = function() {
            jc(d, !f && "x"), nb(je, "resize", xp), w.enable()
        }, e.onDisable = function() {
            jc(d, !0), ob(je, "resize", xp), w.kill()
        }, ((r = new k(e)).iOS = C) && !h() && h(1), u = r._dc, s = We.to(r, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: u.vars.onComplete
        }), r
    }
    var ae, se = {
            auto: 1,
            scroll: 1
        },
        le = /(input|label|select|textarea)/i,
        ce = function _captureInputs(e) {
            var t = le.test(e.target.tagName);
            (t || ae) && (e._gsapAllow = !0, ae = t)
        };
    oe.sort = function(e) {
        return Ot.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, oe.observe = function(e) {
        return new k(e)
    }, oe.normalizeScroll = function(e) {
        if (void 0 === e) return h;
        if (!0 === e && h) return h.enable();
        if (!1 === e) return h && h.kill();
        var t = e instanceof k ? e : qc(e);
        return h && h.target === t.target && h.kill(), Ba(t.target) && (h = t), t
    }, oe.core = {
        _getVelocityProp: K,
        _inputObserver: mc,
        _scrollers: T,
        _proxies: Le,
        bridge: {
            ss: function ss() {
                pt || V("scrollStart"), pt = dt()
            },
            ref: function ref() {
                return rt
            }
        }
    }, Aa() && We.registerPlugin(oe), e.ScrollTrigger = oe, e.default = oe;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/* UAParser.js v0.7.31
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */
(function(window, undefined) {
    "use strict";
    var LIBVERSION = "0.7.31",
        EMPTY = "",
        UNKNOWN = "?",
        FUNC_TYPE = "function",
        UNDEF_TYPE = "undefined",
        OBJ_TYPE = "object",
        STR_TYPE = "string",
        MAJOR = "major",
        MODEL = "model",
        NAME = "name",
        TYPE = "type",
        VENDOR = "vendor",
        VERSION = "version",
        ARCHITECTURE = "architecture",
        CONSOLE = "console",
        MOBILE = "mobile",
        TABLET = "tablet",
        SMARTTV = "smarttv",
        WEARABLE = "wearable",
        EMBEDDED = "embedded",
        UA_MAX_LENGTH = 255;
    var AMAZON = "Amazon",
        APPLE = "Apple",
        ASUS = "ASUS",
        BLACKBERRY = "BlackBerry",
        BROWSER = "Browser",
        CHROME = "Chrome",
        EDGE = "Edge",
        FIREFOX = "Firefox",
        GOOGLE = "Google",
        HUAWEI = "Huawei",
        LG = "LG",
        MICROSOFT = "Microsoft",
        MOTOROLA = "Motorola",
        OPERA = "Opera",
        SAMSUNG = "Samsung",
        SONY = "Sony",
        XIAOMI = "Xiaomi",
        ZEBRA = "Zebra",
        FACEBOOK = "Facebook";
    var extend = function(regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i])
                } else {
                    mergedRegexes[i] = regexes[i]
                }
            }
            return mergedRegexes
        },
        enumerize = function(arr) {
            var enums = {};
            for (var i = 0; i < arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i]
            }
            return enums
        },
        has = function(str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false
        },
        lowerize = function(str) {
            return str.toLowerCase()
        },
        majorize = function(version) {
            return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined
        },
        trim = function(str, len) {
            if (typeof str === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
                return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH)
            }
        };
    var rgxMapper = function(ua, arrays) {
            var i = 0,
                j, k, p, q, matches, match;
            while (i < arrays.length && !matches) {
                var regex = arrays[i],
                    props = arrays[i + 1];
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(ua);
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        this[q[0]] = q[1].call(this, match)
                                    } else {
                                        this[q[0]] = q[1]
                                    }
                                } else if (q.length === 3) {
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined
                                    } else {
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined
                                    }
                                } else if (q.length === 4) {
                                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined
                                }
                            } else {
                                this[q] = match ? match : undefined
                            }
                        }
                    }
                }
                i += 2
            }
        },
        strMapper = function(str, map) {
            for (var i in map) {
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return i === UNKNOWN ? undefined : i
                        }
                    }
                } else if (has(map[i], str)) {
                    return i === UNKNOWN ? undefined : i
                }
            }
            return str
        };
    var oldSafariMap = {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
        },
        windowsVersionMap = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        };
    var regexes = {
        browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [VERSION, [NAME, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [VERSION, [NAME, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [NAME, VERSION],
            [/opios[\/ ]+([\w\.]+)/i],
            [VERSION, [NAME, OPERA + " Mini"]],
            [/\bopr\/([\w\.]+)/i],
            [VERSION, [NAME, OPERA]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
            [NAME, VERSION],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [VERSION, [NAME, "UC" + BROWSER]],
            [/\bqbcore\/([\w\.]+)/i],
            [VERSION, [NAME, "WeChat(Win) Desktop"]],
            [/micromessenger\/([\w\.]+)/i],
            [VERSION, [NAME, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [VERSION, [NAME, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [VERSION, [NAME, "IE"]],
            [/yabrowser\/([\w\.]+)/i],
            [VERSION, [NAME, "Yandex"]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
                [NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION
            ],
            [/\bfocus\/([\w\.]+)/i],
            [VERSION, [NAME, FIREFOX + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [VERSION, [NAME, OPERA + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [VERSION, [NAME, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [VERSION, [NAME, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [VERSION, [NAME, OPERA + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [VERSION, [NAME, "MIUI " + BROWSER]],
            [/fxios\/([-\w\.]+)/i],
            [VERSION, [NAME, FIREFOX]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [
                [NAME, "360 " + BROWSER]
            ],
            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
            [
                [NAME, /(.+)/, "$1 " + BROWSER], VERSION
            ],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [
                [NAME, /_/g, " "], VERSION
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
            [NAME, VERSION],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
            [NAME],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
                [NAME, FACEBOOK], VERSION
            ],
            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
            [NAME, VERSION],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [VERSION, [NAME, "GSA"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [VERSION, [NAME, CHROME + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
                [NAME, CHROME + " WebView"], VERSION
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [VERSION, [NAME, "Android " + BROWSER]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [NAME, VERSION],
            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
            [VERSION, [NAME, "Mobile Safari"]],
            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
            [VERSION, NAME],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [NAME, [VERSION, strMapper, oldSafariMap]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [NAME, VERSION],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
                [NAME, "Netscape"], VERSION
            ],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [VERSION, [NAME, FIREFOX + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
            [NAME, VERSION]
        ],
        cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [
                [ARCHITECTURE, "amd64"]
            ],
            [/(ia32(?=;))/i],
            [
                [ARCHITECTURE, lowerize]
            ],
            [/((?:i[346]|x)86)[;\)]/i],
            [
                [ARCHITECTURE, "ia32"]
            ],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [
                [ARCHITECTURE, "arm64"]
            ],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [
                [ARCHITECTURE, "armhf"]
            ],
            [/windows (ce|mobile); ppc;/i],
            [
                [ARCHITECTURE, "arm"]
            ],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [
                [ARCHITECTURE, /ower/, EMPTY, lowerize]
            ],
            [/(sun4\w)[;\)]/i],
            [
                [ARCHITECTURE, "sparc"]
            ],
            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
            [
                [ARCHITECTURE, lowerize]
            ]
        ],
        device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [MODEL, [VENDOR, SAMSUNG],
                [TYPE, TABLET]
            ],
            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
            [MODEL, [VENDOR, SAMSUNG],
                [TYPE, MOBILE]
            ],
            [/\((ip(?:hone|od)[\w ]*);/i],
            [MODEL, [VENDOR, APPLE],
                [TYPE, MOBILE]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [MODEL, [VENDOR, APPLE],
                [TYPE, TABLET]
            ],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [MODEL, [VENDOR, HUAWEI],
                [TYPE, TABLET]
            ],
            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
            [MODEL, [VENDOR, HUAWEI],
                [TYPE, MOBILE]
            ],
            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
            [
                [MODEL, /_/g, " "],
                [VENDOR, XIAOMI],
                [TYPE, MOBILE]
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
                [MODEL, /_/g, " "],
                [VENDOR, XIAOMI],
                [TYPE, TABLET]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [MODEL, [VENDOR, "OPPO"],
                [TYPE, MOBILE]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [MODEL, [VENDOR, "Vivo"],
                [TYPE, MOBILE]
            ],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [MODEL, [VENDOR, "Realme"],
                [TYPE, MOBILE]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [MODEL, [VENDOR, MOTOROLA],
                [TYPE, MOBILE]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [MODEL, [VENDOR, MOTOROLA],
                [TYPE, TABLET]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [MODEL, [VENDOR, LG],
                [TYPE, TABLET]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [MODEL, [VENDOR, LG],
                [TYPE, MOBILE]
            ],
            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
            [MODEL, [VENDOR, "Lenovo"],
                [TYPE, TABLET]
            ],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
                [MODEL, /_/g, " "],
                [VENDOR, "Nokia"],
                [TYPE, MOBILE]
            ],
            [/(pixel c)\b/i],
            [MODEL, [VENDOR, GOOGLE],
                [TYPE, TABLET]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [MODEL, [VENDOR, GOOGLE],
                [TYPE, MOBILE]
            ],
            [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [MODEL, [VENDOR, SONY],
                [TYPE, MOBILE]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
                [MODEL, "Xperia Tablet"],
                [VENDOR, SONY],
                [TYPE, TABLET]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [MODEL, [VENDOR, "OnePlus"],
                [TYPE, MOBILE]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [MODEL, [VENDOR, AMAZON],
                [TYPE, TABLET]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
                [MODEL, /(.+)/g, "Fire Phone $1"],
                [VENDOR, AMAZON],
                [TYPE, MOBILE]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [MODEL, VENDOR, [TYPE, TABLET]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [MODEL, [VENDOR, BLACKBERRY],
                [TYPE, MOBILE]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [MODEL, [VENDOR, ASUS],
                [TYPE, TABLET]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [MODEL, [VENDOR, ASUS],
                [TYPE, MOBILE]
            ],
            [/(nexus 9)/i],
            [MODEL, [VENDOR, "HTC"],
                [TYPE, TABLET]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
            [VENDOR, [MODEL, /_/g, " "],
                [TYPE, MOBILE]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [MODEL, [VENDOR, "Acer"],
                [TYPE, TABLET]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [MODEL, [VENDOR, "Meizu"],
                [TYPE, MOBILE]
            ],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [MODEL, [VENDOR, "Sharp"],
                [TYPE, MOBILE]
            ],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/(surface duo)/i],
            [MODEL, [VENDOR, MICROSOFT],
                [TYPE, TABLET]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [MODEL, [VENDOR, "Fairphone"],
                [TYPE, MOBILE]
            ],
            [/(u304aa)/i],
            [MODEL, [VENDOR, "AT&T"],
                [TYPE, MOBILE]
            ],
            [/\bsie-(\w*)/i],
            [MODEL, [VENDOR, "Siemens"],
                [TYPE, MOBILE]
            ],
            [/\b(rct\w+) b/i],
            [MODEL, [VENDOR, "RCA"],
                [TYPE, TABLET]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [MODEL, [VENDOR, "Dell"],
                [TYPE, TABLET]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [MODEL, [VENDOR, "Verizon"],
                [TYPE, TABLET]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [MODEL, [VENDOR, "Barnes & Noble"],
                [TYPE, TABLET]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [MODEL, [VENDOR, "NuVision"],
                [TYPE, TABLET]
            ],
            [/\b(k88) b/i],
            [MODEL, [VENDOR, "ZTE"],
                [TYPE, TABLET]
            ],
            [/\b(nx\d{3}j) b/i],
            [MODEL, [VENDOR, "ZTE"],
                [TYPE, MOBILE]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [MODEL, [VENDOR, "Swiss"],
                [TYPE, MOBILE]
            ],
            [/\b(zur\d{3}) b/i],
            [MODEL, [VENDOR, "Swiss"],
                [TYPE, TABLET]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [MODEL, [VENDOR, "Zeki"],
                [TYPE, TABLET]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
                [VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [MODEL, [VENDOR, "Insignia"],
                [TYPE, TABLET]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [MODEL, [VENDOR, "NextBook"],
                [TYPE, TABLET]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
                [VENDOR, "Voice"], MODEL, [TYPE, MOBILE]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
                [VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]
            ],
            [/\b(ph-1) /i],
            [MODEL, [VENDOR, "Essential"],
                [TYPE, MOBILE]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [MODEL, [VENDOR, "Envizen"],
                [TYPE, TABLET]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [MODEL, [VENDOR, "MachSpeed"],
                [TYPE, TABLET]
            ],
            [/\btu_(1491) b/i],
            [MODEL, [VENDOR, "Rotor"],
                [TYPE, TABLET]
            ],
            [/(shield[\w ]+) b/i],
            [MODEL, [VENDOR, "Nvidia"],
                [TYPE, TABLET]
            ],
            [/(sprint) (\w+)/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/(kin\.[onetw]{3})/i],
            [
                [MODEL, /\./g, " "],
                [VENDOR, MICROSOFT],
                [TYPE, MOBILE]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [MODEL, [VENDOR, ZEBRA],
                [TYPE, TABLET]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [MODEL, [VENDOR, ZEBRA],
                [TYPE, MOBILE]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [VENDOR, MODEL, [TYPE, CONSOLE]],
            [/droid.+; (shield) bui/i],
            [MODEL, [VENDOR, "Nvidia"],
                [TYPE, CONSOLE]
            ],
            [/(playstation [345portablevi]+)/i],
            [MODEL, [VENDOR, SONY],
                [TYPE, CONSOLE]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [MODEL, [VENDOR, MICROSOFT],
                [TYPE, CONSOLE]
            ],
            [/smart-tv.+(samsung)/i],
            [VENDOR, [TYPE, SMARTTV]],
            [/hbbtv.+maple;(\d+)/i],
            [
                [MODEL, /^/, "SmartTV"],
                [VENDOR, SAMSUNG],
                [TYPE, SMARTTV]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
                [VENDOR, LG],
                [TYPE, SMARTTV]
            ],
            [/(apple) ?tv/i],
            [VENDOR, [MODEL, APPLE + " TV"],
                [TYPE, SMARTTV]
            ],
            [/crkey/i],
            [
                [MODEL, CHROME + "cast"],
                [VENDOR, GOOGLE],
                [TYPE, SMARTTV]
            ],
            [/droid.+aft(\w)( bui|\))/i],
            [MODEL, [VENDOR, AMAZON],
                [TYPE, SMARTTV]
            ],
            [/\(dtv[\);].+(aquos)/i],
            [MODEL, [VENDOR, "Sharp"],
                [TYPE, SMARTTV]
            ],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
            [
                [VENDOR, trim],
                [MODEL, trim],
                [TYPE, SMARTTV]
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
                [TYPE, SMARTTV]
            ],
            [/((pebble))app/i],
            [VENDOR, MODEL, [TYPE, WEARABLE]],
            [/droid.+; (glass) \d/i],
            [MODEL, [VENDOR, GOOGLE],
                [TYPE, WEARABLE]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [MODEL, [VENDOR, ZEBRA],
                [TYPE, WEARABLE]
            ],
            [/(quest( 2)?)/i],
            [MODEL, [VENDOR, FACEBOOK],
                [TYPE, WEARABLE]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [VENDOR, [TYPE, EMBEDDED]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [MODEL, [TYPE, MOBILE]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [MODEL, [TYPE, TABLET]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
                [TYPE, TABLET]
            ],
            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
            [
                [TYPE, MOBILE]
            ],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [VERSION, [NAME, EDGE + "HTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [VERSION, [NAME, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
            [NAME, VERSION],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [VERSION, NAME]
        ],
        os: [
            [/microsoft (windows) (vista|xp)/i],
            [NAME, VERSION],
            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
            [NAME, [VERSION, strMapper, windowsVersionMap]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
                [NAME, "Windows"],
                [VERSION, strMapper, windowsVersionMap]
            ],
            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
            [
                [VERSION, /_/g, "."],
                [NAME, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
                [NAME, "Mac OS"],
                [VERSION, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [VERSION, NAME],
            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
            [NAME, VERSION],
            [/\(bb(10);/i],
            [VERSION, [NAME, BLACKBERRY]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [VERSION, [NAME, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [VERSION, [NAME, FIREFOX + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [VERSION, [NAME, "webOS"]],
            [/crkey\/([\d\.]+)/i],
            [VERSION, [NAME, CHROME + "cast"]],
            [/(cros) [\w]+ ([\w\.]+\w)/i],
            [
                [NAME, "Chromium OS"], VERSION
            ],
            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [NAME, VERSION],
            [/(sunos) ?([\w\.\d]*)/i],
            [
                [NAME, "Solaris"], VERSION
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
            [NAME, VERSION]
        ]
    };
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined
        }
        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult()
        }
        var _ua = ua || (typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        };
        this.getUA = function() {
            return _ua
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this
        };
        this.setUA(_ua);
        return this
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
    if (typeof exports !== UNDEF_TYPE) {
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser
        }
        exports.UAParser = UAParser
    } else {
        if (typeof define === FUNC_TYPE && define.amd) {
            define(function() {
                return UAParser
            })
        } else if (typeof window !== UNDEF_TYPE) {
            window.UAParser = UAParser
        }
    }
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser;
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA()
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop]
            }
        }
    }
})(typeof window === "object" ? window : this);

/* isMobile */
(function() {
    var f = {};
    var g = /iPhone/i,
        i = /iPod/i,
        j = /iPad/i,
        k = /\biOS-universal(?:.+)Mac\b/i,
        h = /\bAndroid(?:.+)Mobile\b/i,
        m = /Android/i,
        c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        d = /Silk/i,
        b = /Windows Phone/i,
        n = /\bWindows(?:.+)ARM\b/i,
        p = /BlackBerry/i,
        q = /BB10/i,
        s = /Opera Mini/i,
        t = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        u = /Mobile(?:.+)Firefox\b/i,
        v = function(l) {
            return void 0 !== l && "MacIntel" === l.platform && "number" == typeof l.maxTouchPoints && l.maxTouchPoints > 1 && "undefined" == typeof MSStream
        };

    function w(l) {
        return function($) {
            return $.test(l)
        }
    }

    function x(l) {
        var $ = {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
        };
        l || "undefined" == typeof navigator ? "string" == typeof l ? $.userAgent = l : l && l.userAgent && ($ = {
            userAgent: l.userAgent,
            platform: l.platform,
            maxTouchPoints: l.maxTouchPoints || 0
        }) : $ = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
        var a = $.userAgent,
            e = a.split("[FBAN");
        void 0 !== e[1] && (a = e[0]), void 0 !== (e = a.split("Twitter"))[1] && (a = e[0]);
        var r = w(a),
            o = {
                apple: {
                    phone: r(g) && !r(b),
                    ipod: r(i),
                    tablet: !r(g) && (r(j) || v($)) && !r(b),
                    universal: r(k),
                    device: (r(g) || r(i) || r(j) || r(k) || v($)) && !r(b)
                },
                amazon: {
                    phone: r(c),
                    tablet: !r(c) && r(d),
                    device: r(c) || r(d)
                },
                android: {
                    phone: !r(b) && r(c) || !r(b) && r(h),
                    tablet: !r(b) && !r(c) && !r(h) && (r(d) || r(m)),
                    device: !r(b) && (r(c) || r(d) || r(h) || r(m)) || r(/\bokhttp\b/i)
                },
                windows: {
                    phone: r(b),
                    tablet: r(n),
                    device: r(b) || r(n)
                },
                other: {
                    blackberry: r(p),
                    blackberry10: r(q),
                    opera: r(s),
                    firefox: r(u),
                    chrome: r(t),
                    device: r(p) || r(q) || r(s) || r(u) || r(t)
                },
                any: !1,
                phone: !1,
                tablet: !1
            };
        return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o
    }
    f = x();
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f
    } else if (typeof define === "function" && define.amd) {
        define(function() {
            return f
        })
    } else {
        this["isMobile"] = f
    }
})();

/* vanilla-lazyload */
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t()
}(this, (function() {
    "use strict";

    function n() {
        return n = Object.assign || function(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
            }
            return n
        }, n.apply(this, arguments)
    }
    var t = "undefined" != typeof window,
        e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        i = t && "IntersectionObserver" in window,
        o = t && "classList" in document.createElement("p"),
        a = t && window.devicePixelRatio > 1,
        r = {
            elements_selector: ".lazy",
            container: e || t ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_bg_set: "bg-set",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1,
            restore_on_error: !1
        },
        c = function(t) {
            return n({}, r, t)
        },
        l = function(n, t) {
            var e, i = "LazyLoad::Initialized",
                o = new n(t);
            try {
                e = new CustomEvent(i, {
                    detail: {
                        instance: o
                    }
                })
            } catch (n) {
                (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                    instance: o
                })
            }
            window.dispatchEvent(e)
        },
        u = "src",
        s = "srcset",
        d = "sizes",
        f = "poster",
        _ = "llOriginalAttrs",
        g = "data",
        v = "loading",
        b = "loaded",
        m = "applied",
        p = "error",
        h = "native",
        E = "data-",
        I = "ll-status",
        y = function(n, t) {
            return n.getAttribute(E + t)
        },
        k = function(n) {
            return y(n, I)
        },
        w = function(n, t) {
            return function(n, t, e) {
                var i = "data-ll-status";
                null !== e ? n.setAttribute(i, e) : n.removeAttribute(i)
            }(n, 0, t)
        },
        A = function(n) {
            return w(n, null)
        },
        L = function(n) {
            return null === k(n)
        },
        O = function(n) {
            return k(n) === h
        },
        x = [v, b, m, p],
        C = function(n, t, e, i) {
            n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i))
        },
        N = function(n, t) {
            o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
        },
        M = function(n, t) {
            o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        },
        z = function(n) {
            return n.llTempImage
        },
        T = function(n, t) {
            if (t) {
                var e = t._observer;
                e && e.unobserve(n)
            }
        },
        R = function(n, t) {
            n && (n.loadingCount += t)
        },
        G = function(n, t) {
            n && (n.toLoadCount = t)
        },
        j = function(n) {
            for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
            return e
        },
        D = function(n, t) {
            var e = n.parentNode;
            e && "PICTURE" === e.tagName && j(e).forEach(t)
        },
        H = function(n, t) {
            j(n).forEach(t)
        },
        V = [u],
        F = [u, f],
        B = [u, s, d],
        J = [g],
        P = function(n) {
            return !!n[_]
        },
        S = function(n) {
            return n[_]
        },
        U = function(n) {
            return delete n[_]
        },
        $ = function(n, t) {
            if (!P(n)) {
                var e = {};
                t.forEach((function(t) {
                    e[t] = n.getAttribute(t)
                })), n[_] = e
            }
        },
        q = function(n, t) {
            if (P(n)) {
                var e = S(n);
                t.forEach((function(t) {
                    ! function(n, t, e) {
                        e ? n.setAttribute(t, e) : n.removeAttribute(t)
                    }(n, t, e[t])
                }))
            }
        },
        K = function(n, t, e) {
            N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e))
        },
        Q = function(n, t, e) {
            N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e))
        },
        W = function(n, t, e) {
            e && n.setAttribute(t, e)
        },
        X = function(n, t) {
            W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src))
        },
        Y = {
            IMG: function(n, t) {
                D(n, (function(n) {
                    $(n, B), X(n, t)
                })), $(n, B), X(n, t)
            },
            IFRAME: function(n, t) {
                $(n, V), W(n, u, y(n, t.data_src))
            },
            VIDEO: function(n, t) {
                H(n, (function(n) {
                    $(n, V), W(n, u, y(n, t.data_src))
                })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load()
            },
            OBJECT: function(n, t) {
                $(n, J), W(n, g, y(n, t.data_src))
            }
        },
        Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
        nn = function(n, t) {
            !t || function(n) {
                return n.loadingCount > 0
            }(t) || function(n) {
                return n.toLoadCount > 0
            }(t) || C(n.callback_finish, t)
        },
        tn = function(n, t, e) {
            n.addEventListener(t, e), n.llEvLisnrs[t] = e
        },
        en = function(n, t, e) {
            n.removeEventListener(t, e)
        },
        on = function(n) {
            return !!n.llEvLisnrs
        },
        an = function(n) {
            if (on(n)) {
                var t = n.llEvLisnrs;
                for (var e in t) {
                    var i = t[e];
                    en(n, e, i)
                }
                delete n.llEvLisnrs
            }
        },
        rn = function(n, t, e) {
            ! function(n) {
                delete n.llTempImage
            }(n), R(e, -1),
                function(n) {
                    n && (n.toLoadCount -= 1)
                }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e)
        },
        cn = function(n, t, e) {
            var i = z(n) || n;
            on(i) || function(n, t, e) {
                on(n) || (n.llEvLisnrs = {});
                var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                tn(n, i, t), tn(n, "error", e)
            }(i, (function(o) {
                ! function(n, t, e, i) {
                    var o = O(t);
                    rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i)
                }(0, n, t, e), an(i)
            }), (function(o) {
                ! function(n, t, e, i) {
                    var o = O(t);
                    rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), o || nn(e, i)
                }(0, n, t, e), an(i)
            }))
        },
        ln = function(n, t, e) {
            ! function(n) {
                return Z.indexOf(n.tagName) > -1
            }(n) ? function(n, t, e) {
                ! function(n) {
                    n.llTempImage = document.createElement("IMG")
                }(n), cn(n, t, e),
                    function(n) {
                        P(n) || (n[_] = {
                            backgroundImage: n.style.backgroundImage
                        })
                    }(n),
                    function(n, t, e) {
                        var i = y(n, t.data_bg),
                            o = y(n, t.data_bg_hidpi),
                            r = a && o ? o : i;
                        r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), Q(n, t, e))
                    }(n, t, e),
                    function(n, t, e) {
                        var i = y(n, t.data_bg_multi),
                            o = y(n, t.data_bg_multi_hidpi),
                            r = a && o ? o : i;
                        r && (n.style.backgroundImage = r, K(n, t, e))
                    }(n, t, e),
                    function(n, t, e) {
                        var i = y(n, t.data_bg_set);
                        if (i) {
                            var o = i.split("|"),
                                a = o.map((function(n) {
                                    return "image-set(".concat(n, ")")
                                }));
                            n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                return "-webkit-image-set(".concat(n, ")")
                            })), n.style.backgroundImage = a.join()), K(n, t, e)
                        }
                    }(n, t, e)
            }(n, t, e) : function(n, t, e) {
                cn(n, t, e),
                    function(n, t, e) {
                        var i = Y[n.tagName];
                        i && (i(n, t), Q(n, t, e))
                    }(n, t, e)
            }(n, t, e)
        },
        un = function(n) {
            n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d)
        },
        sn = function(n) {
            D(n, (function(n) {
                q(n, B)
            })), q(n, B)
        },
        dn = {
            IMG: sn,
            IFRAME: function(n) {
                q(n, V)
            },
            VIDEO: function(n) {
                H(n, (function(n) {
                    q(n, V)
                })), q(n, F), n.load()
            },
            OBJECT: function(n) {
                q(n, J)
            }
        },
        fn = function(n, t) {
            (function(n) {
                var t = dn[n.tagName];
                t ? t(n) : function(n) {
                    if (P(n)) {
                        var t = S(n);
                        n.style.backgroundImage = t.backgroundImage
                    }
                }(n)
            })(n),
            function(n, t) {
                L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error))
            }(n, t), A(n), U(n)
        },
        _n = ["IMG", "IFRAME", "VIDEO"],
        gn = function(n) {
            return n.use_native && "loading" in HTMLImageElement.prototype
        },
        vn = function(n, t, e) {
            n.forEach((function(n) {
                return function(n) {
                    return n.isIntersecting || n.intersectionRatio > 0
                }(n) ? function(n, t, e, i) {
                    var o = function(n) {
                        return x.indexOf(k(n)) >= 0
                    }(n);
                    w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited),
                        function(n, t, e) {
                            t.unobserve_entered && T(n, e)
                        }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i)
                }(n.target, n, t, e) : function(n, t, e, i) {
                    L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                        e.cancel_on_exit && function(n) {
                            return k(n) === v
                        }(n) && "IMG" === n.tagName && (an(n), function(n) {
                            D(n, (function(n) {
                                un(n)
                            })), un(n)
                        }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i))
                    }(n, t, e, i), C(e.callback_exit, n, t, i))
                }(n.target, n, t, e)
            }))
        },
        bn = function(n) {
            return Array.prototype.slice.call(n)
        },
        mn = function(n) {
            return n.container.querySelectorAll(n.elements_selector)
        },
        pn = function(n) {
            return function(n) {
                return k(n) === p
            }(n)
        },
        hn = function(n, t) {
            return function(n) {
                return bn(n).filter(L)
            }(n || mn(t))
        },
        En = function(n, e) {
            var o = c(n);
            this._settings = o, this.loadingCount = 0,
                function(n, t) {
                    i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                        vn(e, n, t)
                    }), function(n) {
                        return {
                            root: n.container === document ? null : n.container,
                            rootMargin: n.thresholds || n.threshold + "px"
                        }
                    }(n)))
                }(o, this),
                function(n, e) {
                    t && (e._onlineHandler = function() {
                        ! function(n, t) {
                            var e;
                            (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                M(t, n.class_error), A(t)
                            })), t.update()
                        }(n, e)
                    }, window.addEventListener("online", e._onlineHandler))
                }(o, this), this.update(e)
        };
    return En.prototype = {
        update: function(n) {
            var t, o, a = this._settings,
                r = hn(n, a);
            G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                n.forEach((function(n) {
                    -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                        n.setAttribute("loading", "lazy"), cn(n, t, e),
                            function(n, t) {
                                var e = Y[n.tagName];
                                e && e(n, t)
                            }(n, t), w(n, h)
                    }(n, t, e)
                })), G(e, 0)
            }(r, a, this) : (o = r, function(n) {
                n.disconnect()
            }(t = this._observer), function(n, t) {
                t.forEach((function(t) {
                    n.observe(t)
                }))
            }(t, o)) : this.loadAll(r)
        },
        destroy: function() {
            this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), mn(this._settings).forEach((function(n) {
                U(n)
            })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount
        },
        loadAll: function(n) {
            var t = this,
                e = this._settings;
            hn(n, e).forEach((function(n) {
                T(n, t), ln(n, e, t)
            }))
        },
        restoreAll: function() {
            var n = this._settings;
            mn(n).forEach((function(t) {
                fn(t, n)
            }))
        }
    }, En.load = function(n, t) {
        var e = c(t);
        ln(n, e)
    }, En.resetStatus = function(n) {
        A(n)
    }, t && function(n, t) {
        if (t)
            if (t.length)
                for (var e, i = 0; e = t[i]; i += 1) l(n, e);
            else l(n, t)
    }(En, window.lazyLoadOptions), En
}));

/**
 * Swiper 8.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 29, 2022
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function(e, t) {
                if ("string" != typeof e) return [e];
                const s = [],
                    a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: l
                        }), t.addEventListener(e, l, n)
                    } else
                        for (p = 0; p < c.length; p += 1) {
                            const e = c[p];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: r,
                                proxyListener: o
                            }), t.addEventListener(e, o, n)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "),
                n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    n = t.body,
                    l = s.clientTop || n.clientTop || 0,
                    o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof n)
                    for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t],
                        r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }

    function v(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const i = r(),
            n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
            p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                l = (new Date).getTime(), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    r = .5 - Math.cos(e * Math.PI) / 2;
                let c = n + r * (s - n);
                if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                        [a]: c
                    }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: c
                    })
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(u)
            };
        u()
    }
    let b, x, y;

    function E() {
        return b || (b = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function C(e) {
        return void 0 === e && (e = {}), x || (x = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = E(),
                a = r(),
                i = a.navigator.platform,
                n = t || a.navigator.userAgent,
                l = {
                    ios: !1,
                    android: !1
                },
                o = a.screen.width,
                d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
        }(e)), x
    }

    function T() {
        return y || (y = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), y
    }
    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    var S = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;

            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const a = e.params,
                {
                    $wrapperEl: i,
                    size: r,
                    rtlTranslate: n,
                    wrongRTL: l
                } = e,
                o = e.virtual && a.virtual.enabled,
                d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`),
                p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [],
                m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
                b = e.slidesGrid.length;
            let x = a.spaceBetween,
                y = -f,
                E = 0,
                C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]),
                            l = n[0].style.transform,
                            o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s(r, "width"),
                                t = s(r, "padding-left"),
                                a = s(r, "padding-right"),
                                i = s(r, "margin-left"),
                                l = s(r, "margin-right"),
                                o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l;
                            else {
                                const {
                                    clientWidth: s,
                                    offsetWidth: r
                                } = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                    width: `${e.virtualSize+a.spaceBetween}px`
                }), a.setWrapperSize && i.css({
                    [t("width")]: `${e.virtualSize+a.spaceBetween}px`
                }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({
                    [s]: `${x}px`
                })
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0)
                    })), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e, s) => {
                        u[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`,
                    s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [],
                a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)(t.visibleSlides || d([])).each((e => {
                    s.push(e)
                }));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a) break;
                        s.push(n(e))
                    } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this,
                s = t.params,
                {
                    slides: a,
                    rtlTranslate: i,
                    snapGrid: r
                } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o),
                    u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
                a = t.maxTranslate() - t.minTranslate();
            let {
                progress: i,
                isBeginning: r,
                isEnd: n
            } = t;
            const l = r,
                o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    $wrapperEl: a,
                    activeIndex: i,
                    realIndex: r
                } = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: a,
                    snapGrid: i,
                    params: r,
                    activeIndex: n,
                    realIndex: l,
                    snapIndex: o
                } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this,
                s = t.params,
                a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        r = !0, i = e;
                        break
                    }
            if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
                params: t,
                rtlTranslate: s,
                translate: a,
                $wrapperEl: i
            } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: a,
                    params: i,
                    $wrapperEl: r,
                    wrapperEl: n,
                    progress: l
                } = s;
            let o, d = 0,
                c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this,
                {
                    params: n,
                    wrapperEl: l
                } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
                d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: i
        } = e;
        const {
            activeIndex: r,
            previousIndex: n
        } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var k = {
        slideTo: function(e, t, s, a, i) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m
            } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
            const v = -o[g];
            if (r.updateProgress(v), l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v),
                        s = Math.floor(100 * d[e]),
                        a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(),
                    s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    animating: i,
                    enabled: r,
                    params: n
                } = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    params: i,
                    animating: r,
                    snapGrid: n,
                    slidesGrid: l,
                    rtlTranslate: o,
                    enabled: d
                } = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = c(o ? a.translate : -a.translate),
                u = n.map((e => c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t, s) => {
                    p >= t && (e = s)
                })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: s
                } = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    $wrapperEl: i
                } = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
            const l = [],
                o = [];
            n.each(((t, s) => {
                const a = d(t);
                s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s)
            }));
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l
            } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: s
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };

    function L(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
                params: l,
                touches: o,
                enabled: c
            } = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === a() || s === r()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                    }(t)
            }(m, h[0]) : h.closest(m)[0])) return void(t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX,
            v = o.currentY,
            w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
    }

    function O(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: o
            } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX,
            m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function I(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: i,
                rtlTranslate: r,
                slidesGrid: n,
                enabled: l
            } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(),
            c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), p((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null,
            v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f,
            b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function A() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function G() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let N = !1;

    function B() {}
    const H = (e, t) => {
        const s = a(),
            {
                params: i,
                touchEvents: r,
                el: n,
                wrapperEl: l,
                device: o,
                support: d
            } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    };
    var X = {
        attachEvents: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    support: i
                } = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
        },
        detachEvents: function() {
            H(this, "off")
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function() {
            const e = this,
                {
                    classNames: t,
                    params: s,
                    rtl: a,
                    $el: i,
                    device: r,
                    support: n
                } = e,
                l = function(e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        })) : "string" == typeof e && s.push(t + e)
                    })), s
                }(["initialized", s.direction, {
                    "pointer-events": !n.touch
                }, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: r.android
                }, {
                    ios: r.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
        },
        removeClasses: function() {
            const {
                $el: e,
                classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
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
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
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
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function j(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), g(t, s)) : g(t, s)) : g(t, s)
        }
    }
    const _ = {
            eventsEmitter: $,
            update: S,
            translate: M,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: k,
            loop: z,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: X,
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: a = 0,
                            params: i,
                            $el: r
                        } = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams,
                        d = Y(e, i),
                        c = Y(e, o),
                        p = i.enabled;
                    d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = i[t] && i[t].enabled,
                            a = o[t] && o[t].enabled;
                        s && !a && e[t].disable(), !s && a && e[t].enable()
                    }));
                    const u = o.direction && o.direction !== i.direction,
                        h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), g(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: R,
            images: {
                loadImage: function(e, t, s, a, i, n) {
                    const l = r();
                    let o;

                    function c() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        q = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s => {
                    const a = g({}, t, {
                        el: s
                    });
                    e.push(new V(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = C({
                userAgent: t.userAgent
            }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: j(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = g({}, W, n);
            return r.params = g({}, l, q, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                } else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    $el: i,
                    $wrapperEl: r,
                    slides: n
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            g(q, e)
        }
        static get extendedDefaults() {
            return q
        }
        static get defaults() {
            return W
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function K(e) {
        const t = this,
            {
                $wrapperEl: s,
                params: a
            } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function Q(e, t) {
        const s = this,
            {
                $wrapperEl: a,
                params: i,
                activeIndex: r
            } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function J(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function ee() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {
            swiper: t,
            duration: s,
            transformEl: a,
            allSlides: i
        } = e;
        const {
            slides: r,
            activeIndex: n,
            $wrapperEl: l
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
            }))
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), i.append(r)), r
    }
    Object.keys(_).forEach((e => {
        Object.keys(_[e]).forEach((t => {
            V.prototype[t] = _[e][t]
        }))
    })), V.use([function(e) {
        let {
            swiper: t,
            on: s,
            emit: a
        } = e;
        const i = r();
        let n = null,
            l = null;
        const o = () => {
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
            },
            d = () => {
                t && !t.destroyed && t.initialized && a("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: a
                    } = t;
                    let i = s,
                        r = a;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: a,
                            target: n
                        } = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = [],
            l = r(),
            o = function(e, t) {
                void 0 === t && (t = {});
                const s = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function() {
                        i("observerUpdate", e[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.push(s)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {
                    childList: t.params.observeSlideChildren
                }), o(t.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const re = [function(e) {
        let t, {
            swiper: s,
            extendParams: a,
            on: i,
            emit: r
        } = e;

        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
        }

        function l(e) {
            const {
                slidesPerView: t,
                slidesPerGroup: a,
                centeredSlides: i
            } = s.params, {
                addSlidesBefore: l,
                addSlidesAfter: o
            } = s.params.virtual, {
                from: d,
                to: c,
                slides: p,
                slidesGrid: u,
                offset: h
            } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0),
                b = Math.min((m || 0) + g, p.length - 1),
                x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }
            if (Object.assign(s.virtual, {
                    from: w,
                    to: b,
                    offset: x,
                    slidesGrid: s.slidesGrid
                }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: function() {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e
                }()
            }), void(s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [],
                C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
            else
                for (let e = d; e <= c; e += 1)(e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach((e => {
                s.$wrapperEl.append(n(p[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(n(p[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
        }
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
        })), i("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                l()
            }), 100)) : l())
        })), i("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                else s.virtual.slides.push(e);
                l(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1,
                    i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache,
                        t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s],
                            r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                l(!0), s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);
                else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(!0), s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
            },
            update: l
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: n
        } = e;
        const l = a(),
            o = r();

        function c(e) {
            if (!t.enabled) return;
            const {
                rtlTranslate: s
            } = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode,
                r = t.params.keyboard.pageUpDown,
                d = r && 33 === i,
                c = r && 34 === i,
                p = 37 === i,
                u = 39 === i,
                h = 38 === i,
                m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el,
                        i = a[0].clientWidth,
                        r = a[0].clientHeight,
                        n = o.innerWidth,
                        l = o.innerHeight,
                        d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [
                        [d.left, d.top],
                        [d.left + i, d.top],
                        [d.left, d.top + r],
                        [d.left + i, d.top + r]
                    ];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
            }
        }

        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
        }

        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        }, s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), i("init", (() => {
            t.params.keyboard.enabled && p()
        })), i("destroy", (() => {
            t.keyboard.enabled && u()
        })), Object.assign(t.keyboard, {
            enable: p,
            disable: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {
            enabled: !1
        };
        let o, c = u();
        const h = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function f() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
        }

        function v(e) {
            let s = e,
                a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1,
                f = function(e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    }
                }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                    c = -f.pixelX * m
                } else {
                    if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                    c = -f.pixelY
                }
            else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                        time: u(),
                        delta: Math.abs(c),
                        direction: Math.sign(c)
                    },
                    a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning,
                        u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0,
                            a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0);
                        else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e, h.splice(0), l = p((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        l || (l = p((() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c),
                    raw: e
                };
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function(e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
        }

        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
        }
        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && x()
        })), Object.assign(t.mousewheel, {
            enable: b,
            disable: x
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;

        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function l() {
            if (t.params.loop) return;
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl),
                a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function u() {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, a("init", (() => {
            !1 === t.params.navigation.enabled ? h() : (p(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            u()
        })), a("enable disable", (() => {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {
                $nextEl: a,
                $prevEl: r
            } = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l()
            },
            disable: h,
            update: l,
            init: p,
            destroy: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const r = "swiper-pagination";
        let n;
        s({
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
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function c(e, s) {
            const {
                bulletActiveClass: a
            } = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function p() {
            const e = t.rtl,
                s = t.params.pagination;
            if (o()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = d(e),
                        a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
                }));
                else {
                    const e = a.eq(p),
                        r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i),
                            n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else c(e, "prev"), c(n, "next");
                        else c(e, "prev"), c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        r = (n * i - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1,
                    n = 1;
                "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function(e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {
                $el: s,
                el: s[0]
            }), t.enabled || s.addClass(e.lockClass))
        }

        function m() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
        }
        a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (h(), u(), p())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && p()
        })), a("snapIndexChange", (() => {
            t.params.loop || p()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (u(), p())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (u(), p())
        })), a("destroy", (() => {
            m()
        })), a("enable disable", (() => {
            const {
                $el: e
            } = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target,
                {
                    $el: r
                } = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p()
            },
            disable: f,
            render: u,
            update: p,
            init: h,
            destroy: m
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: r
        } = e;
        const n = a();
        let l, o, c, u, h = !1,
            m = null,
            f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e,
                rtlTranslate: s,
                progress: a
            } = t, {
                $dragEl: i,
                $el: r
            } = e, n = t.params.scrollbar;
            let l = o,
                d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e
            } = t, {
                $dragEl: s,
                $el: a
            } = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {
                scrollbar: s,
                rtlTranslate: a
            } = t, {
                $el: i
            } = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: i
                } = t,
                {
                    $el: n,
                    $dragEl: o
                } = a;
            h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function y(e) {
            const {
                scrollbar: s,
                $wrapperEl: a
            } = t, {
                $el: i,
                $dragEl: n
            } = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: i
                } = t,
                {
                    $el: n
                } = a;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {
                scrollbar: s,
                touchEventsTouch: a,
                touchEventsDesktop: i,
                params: r,
                support: l
            } = t, o = s.$el;
            if (!o) return;
            const d = o[0],
                c = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                },
                p = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p))
        }

        function T() {
            const {
                scrollbar: e,
                $el: s
            } = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function $() {
            const e = t.params.scrollbar,
                s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }
        s({
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
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            ! function(e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), i("enable disable", (() => {
            const {
                $el: e
            } = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            $()
        }));
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            },
            disable: S,
            updateSize: v,
            setTranslate: g,
            init: T,
            destroy: $
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = (e, s) => {
                const {
                    rtl: a
                } = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"),
                    p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                }
            },
            r = () => {
                const {
                    $el: e,
                    slides: s,
                    progress: a,
                    snapGrid: r
                } = t;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, a)
                })), s.each(((e, s) => {
                    let n = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        i(e, n)
                    }))
                }))
            };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {
                    $el: s
                } = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {
            enabled: !1
        };
        let l, o, c, p = 1,
            u = !1;
        const m = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            f = {
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
                touchesCurrent: {}
            },
            g = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let v = 1;

        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function b(e) {
            const s = t.support,
                a = t.params.zoom;
            if (o = !1, c = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = !0, m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
        }

        function x(e) {
            const s = t.support,
                a = t.params.zoom,
                i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = !0, m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function y(e) {
            const s = t.device,
                a = t.support,
                i = t.params.zoom,
                r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = !1, c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale,
                i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void(f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void(f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
        }

        function T(e) {
            const s = t.zoom,
                a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function $() {
            const e = t.zoom,
                s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
        }

        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function P() {
            return `.${t.params.slideClass}`
        }

        function k(e) {
            const {
                passiveListener: s
            } = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
        }

        function z() {
            l || (l = !0, k("on"))
        }

        function L() {
            l && (l = !1, k("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support,
                {
                    passiveListener: a,
                    activeListenerWithCapture: i
                } = M(),
                r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {
                passiveListener: a,
                activeListenerWithCapture: i
            } = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => v,
            set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0,
                        s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void(f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let s = 300,
                    a = 300;
                const i = g.x * s,
                    r = f.currentX + i,
                    n = g.y * a,
                    l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale,
                    c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        })), Object.assign(t.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: $,
            toggle: S
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let n = !1,
            l = !1;

        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"),
                    c = n.attr("data-src"),
                    p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"),
                    h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = d(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), i("lazyImageLoad", r[0], n[0])
            }))
        }

        function c() {
            const {
                $wrapperEl: e,
                params: s,
                slides: a,
                activeIndex: i
            } = t, r = t.virtual && s.virtual.enabled, n = s.lazy;
            let c = s.slidesPerView;

            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            }));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1) p(e) && o(e);
            else o(i);
            if (n.loadPrevNext)
                if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    const e = n.loadPrevNextAmount,
                        t = Math.ceil(c),
                        s = Math.min(i + t + Math.max(e, t), a.length),
                        r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + t; e < s; e += 1) p(e) && o(e);
                    for (let e = r; e < i; e += 1) p(e) && o(e)
                } else {
                    const t = e.children(`.${s.slideNextClass}`);
                    t.length > 0 && o(u(t));
                    const a = e.children(`.${s.slidePrevClass}`);
                    a.length > 0 && o(u(a))
                }
        }

        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                a = s[0] === e,
                i = a ? e.innerWidth : s[0].offsetWidth,
                l = a ? e.innerHeight : s[0].offsetHeight,
                o = t.$el.offset(),
                {
                    rtlTranslate: u
                } = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [
                [o.left, o.top],
                [o.left + t.width, o.top],
                [o.left, o.top + t.height],
                [o.left + t.width, o.top + t.height]
            ];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
        }
        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        })), a("slideChange", (() => {
            const {
                lazy: e,
                cssMode: s,
                watchSlidesProgress: a,
                touchReleaseOnEdges: i,
                resistanceRatio: r
            } = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {
            load: c,
            loadInSlide: o
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;

        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {
            control: void 0
        }, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (! function(e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
                else a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor,
                    i = t.controller.control;
                let r;

                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
                else i instanceof a && s !== i && n(i)
            }
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
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
                id: null
            }
        });
        let i = null;

        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function n(e) {
            e.attr("tabIndex", "0")
        }

        function l(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function c(e, t) {
            e.attr("aria-roledescription", t)
        }

        function p(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y,
                a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }

        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return f() && t.params.pagination.clickable
        }
        const v = (e, t, s) => {
                n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s),
                    function(e, t) {
                        e.attr("aria-controls", t)
                    }(e, t)
            },
            w = e => {
                const s = e.target.closest(`.${t.params.slideClass}`);
                if (!s || !t.slides.includes(s)) return;
                const a = t.slides.indexOf(s) === t.activeIndex,
                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || t.slideTo(t.slides.indexOf(s), 0)
            },
            b = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), o(d(t.slides), e.slideRole);
                const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                e.slideLabelMessage && t.slides.each(((a, i) => {
                    const r = d(a),
                        n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                    p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            },
            x = () => {
                const e = t.params.a11y;
                t.$el.append(i);
                const s = t.$el;
                e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
                const a = t.$wrapperEl,
                    r = e.id || a.attr("id") || `swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var n;
                const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var o;
                let d, u;
                o = r, a.attr("id", o),
                    function(e, t) {
                        e.attr("aria-live", t)
                    }(a, l), b(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", w, !0)
            };
        a("beforeInit", (() => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && x()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && b()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    $nextEl: e,
                    $prevEl: s
                } = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function() {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", w, !0)
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1,
            n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d))
            },
            c = (e, s, a) => {
                if (s)
                    for (let i = 0, r = t.slides.length; i < r; i += 1) {
                        const r = t.slides.eq(i);
                        if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                            const s = r.index();
                            t.slideTo(s, e, a)
                        }
                    } else t.slideTo(0, e, a)
            },
            p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: i,
            on: n
        } = e, l = !1;
        const o = a(),
            c = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = () => {
                i("hashChange");
                const e = o.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                    if (void 0 === s) return;
                    t.slideTo(s)
                }
            },
            u = () => {
                if (l && t.params.hashNavigation.enabled)
                    if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet");
                    else {
                        const e = t.slides.eq(t.activeIndex),
                            s = e.attr("data-hash") || e.attr("data-history");
                        o.location.hash = s || "", i("hashSet")
                    }
            };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && u()
        })), n("slideChange", (() => {
            l && t.params.cssMode && u()
        }))
    }, function(e) {
        let t, {
            swiper: s,
            extendParams: i,
            on: r,
            emit: n
        } = e;

        function l() {
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }), a)
        }

        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
        }

        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
        }

        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, h)
            })) : (s.autoplay.paused = !1, l())))
        }

        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
        }

        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
        }

        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            }))
        }

        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
        }
        s.autoplay = {
            running: !1,
            paused: !1
        }, i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
            }
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        })), Object.assign(s.autoplay, {
            pause: c,
            run: l,
            start: o,
            stop: d
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1,
            r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex,
                a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }

        function l() {
            const {
                thumbs: e
            } = t.params;
            if (i) return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);
            else
                for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset,
                l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, a("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            e && e.swiper && (l(), o(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            o()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {
            init: l,
            update: o
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: a,
            once: i
        } = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    const {
                        touchEventsData: e,
                        touches: s
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: s
                    } = e;
                    const {
                        params: r,
                        $wrapperEl: n,
                        rtlTranslate: l,
                        snapGrid: o,
                        touchEventsData: d
                    } = t, c = u() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(),
                                    s = d.velocities.pop(),
                                    a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1)
                                    if (o[t] > -c) {
                                        e = t;
                                        break
                                    }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                            }
                            if (f && i("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(p), n.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, s, a, {
            swiper: i,
            extendParams: r
        } = e;
        r({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), i.grid = {
            initSlides: e => {
                const {
                    slidesPerView: r
                } = i.params, {
                    rows: n,
                    fill: l
                } = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            },
            updateSlide: (e, r, n, l) => {
                const {
                    slidesPerGroup: o,
                    spaceBetween: d
                } = i.params, {
                    rows: c,
                    fill: p
                } = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)),
                        a = e - c * o * s,
                        i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            },
            updateWrapperSize: (e, s, a) => {
                const {
                    spaceBetween: r,
                    centeredSlides: n,
                    roundLengths: l
                } = i.params, {
                    rows: o
                } = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({
                        [a("width")]: `${i.virtualSize+r}px`
                    }), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e
                } = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    $el: e,
                    $wrapperEl: s,
                    slides: a,
                    width: r,
                    height: n,
                    rtlTranslate: l,
                    size: o,
                    browser: c
                } = t, p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
                    height: `${r}px`
                })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s,
                        n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0,
                        m = 0,
                        g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u)
                }
                if (s.css({
                        "-webkit-transform-origin": `50% 50% -${o/2}px`,
                        "transform-origin": `50% 50% -${o/2}px`
                    }), p.shadow)
                    if (u) m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                    else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = p.shadowScale,
                            a = p.shadowScale / t,
                            i = p.shadowOffset;
                        m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)
                    }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {
                    $el: s,
                    slides: a
                } = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        });
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: s
                } = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l,
                        c = 0,
                        p = t.params.cssMode ? -o - t.translate : -o,
                        u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    width: e,
                    height: s,
                    slides: a,
                    slidesSizesGrid: i
                } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e),
                        s = i[e],
                        l = (o - t[0].swiperSlideOffset - s / 2) / s,
                        p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0,
                        h = n ? 0 : d * p,
                        m = -c * Math.abs(p),
                        f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p,
                        v = n ? f * p : 0,
                        w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    $wrapperEl: s,
                    slidesSizesGrid: a
                } = t, r = t.params.creativeEffect, {
                    progressMultiplier: n
                } = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s),
                        o = a[0].progress,
                        d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset,
                        u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "),
                        v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1+(1-f.scale)*c*n})` : `scale(${1-(1-f.scale)*c*n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({
                        opacity: b
                    }), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0
            }
        }), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    activeIndex: s
                } = t, a = t.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l),
                        d = o[0].progress,
                        c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p,
                        h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1,
                        g = -2 * c,
                        v = 8 - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                        x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v*Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                        E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }];
    return V.use(re), V
}));

/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    let e = t.prototype;
    return e.on = function(t, e) {
        if (!t || !e) return this;
        let i = this._events = this._events || {},
            s = i[t] = i[t] || [];
        return s.includes(e) || s.push(e), this
    }, e.once = function(t, e) {
        if (!t || !e) return this;
        this.on(t, e);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0, this
    }, e.off = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        let s = i.indexOf(e);
        return -1 != s && i.splice(s, 1), this
    }, e.emitEvent = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        i = i.slice(0), e = e || [];
        let s = this._onceEvents && this._onceEvents[t];
        for (let n of i) {
            s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e)
        }
        return this
    }, e.allOff = function() {
        return delete this._events, delete this._onceEvents, this
    }, t
})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
    let i = t.jQuery,
        s = t.console;

    function n(t, e, o) {
        if (!(this instanceof n)) return new n(t, e, o);
        let r = t;
        var h;
        ("string" == typeof t && (r = document.querySelectorAll(t)), r) ? (this.elements = (h = r, Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? [...h] : [h]), this.options = {}, "function" == typeof e ? o = e : Object.assign(this.options, e), o && this.on("always", o), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : s.error(`Bad element for imagesLoaded ${r||t}`)
    }
    n.prototype = Object.create(e.prototype), n.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    };
    const o = [1, 9, 11];
    n.prototype.addElementImages = function(t) {
        "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        let {
            nodeType: e
        } = t;
        if (!e || !o.includes(e)) return;
        let i = t.querySelectorAll("img");
        for (let t of i) this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e) this.addElementBackgroundImages(t)
        }
    };
    const r = /url\((['"])?(.*?)\1\)/gi;

    function h(t) {
        this.img = t
    }

    function d(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    return n.prototype.addElementBackgroundImages = function(t) {
        let e = getComputedStyle(t);
        if (!e) return;
        let i = r.exec(e.backgroundImage);
        for (; null !== i;) {
            let s = i && i[2];
            s && this.addBackground(s, t), i = r.exec(e.backgroundImage)
        }
    }, n.prototype.addImage = function(t) {
        let e = new h(t);
        this.images.push(e)
    }, n.prototype.addBackground = function(t, e) {
        let i = new d(t, e);
        this.images.push(i)
    }, n.prototype.check = function() {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        let t = (t, e, i) => {
            setTimeout((() => {
                this.progress(t, e, i)
            }))
        };
        this.images.forEach((function(e) {
            e.once("progress", t), e.check()
        }))
    }, n.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && s && s.log(`progress: ${i}`, t, e)
    }, n.prototype.complete = function() {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, h.prototype = Object.create(e.prototype), h.prototype.check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
    }, h.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, h.prototype.confirm = function(t, e) {
        this.isLoaded = t;
        let {
            parentNode: i
        } = this.img, s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e])
    }, h.prototype.handleEvent = function(t) {
        let e = "on" + t.type;
        this[e] && this[e](t)
    }, h.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, d.prototype = Object.create(h.prototype), d.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, d.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, d.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (i = e, i.fn.imagesLoaded = function(t, e) {
            return new n(this, t, e).jqDeferred.promise(i(this))
        })
    }, n.makeJQueryPlugin(), n
}));


/**
 * SimpleBar.js - v5.3.9
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, (function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r, n, i = function(t) {
            return t && t.Math == Math && t
        },
        o = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")(),
        s = Object.defineProperty,
        a = function(t, e) {
            try {
                s(o, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                o[t] = e
            }
            return e
        },
        c = o["__core-js_shared__"] || a("__core-js_shared__", {}),
        l = e((function(t) {
            (t.exports = function(t, e) {
                return c[t] || (c[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.22.6",
                mode: "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        })),
        u = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        f = !u((function() {
            var t = function() {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        })),
        h = Function.prototype,
        d = h.bind,
        p = h.call,
        v = f && d.bind(p, p),
        g = f ? function(t) {
            return t && v(t)
        } : function(t) {
            return t && function() {
                return p.apply(t, arguments)
            }
        },
        b = o.TypeError,
        y = function(t) {
            if (null == t) throw b("Can't call method on " + t);
            return t
        },
        m = o.Object,
        x = function(t) {
            return m(y(t))
        },
        E = g({}.hasOwnProperty),
        w = Object.hasOwn || function(t, e) {
            return E(x(t), e)
        },
        O = 0,
        S = Math.random(),
        A = g(1..toString),
        k = function(t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + A(++O + S, 36)
        },
        T = function(t) {
            return "function" == typeof t
        },
        L = function(t) {
            return T(t) ? t : void 0
        },
        R = function(t, e) {
            return arguments.length < 2 ? L(o[t]) : o[t] && o[t][e]
        },
        _ = R("navigator", "userAgent") || "",
        j = o.process,
        z = o.Deno,
        M = j && j.versions || z && z.version,
        C = M && M.v8;
    C && (n = (r = C.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/)) && (n = +r[1]);
    var N = n,
        W = !!Object.getOwnPropertySymbols && !u((function() {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && N && N < 41
        })),
        I = W && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        P = l("wks"),
        B = o.Symbol,
        D = B && B.for,
        F = I ? B : B && B.withoutSetter || k,
        V = function(t) {
            if (!w(P, t) || !W && "string" != typeof P[t]) {
                var e = "Symbol." + t;
                W && w(B, t) ? P[t] = B[t] : P[t] = I && D ? D(e) : F(e)
            }
            return P[t]
        },
        $ = {};
    $[V("toStringTag")] = "z";
    var X = "[object z]" === String($),
        H = !u((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        q = function(t) {
            return "object" == typeof t ? null !== t : T(t)
        },
        Y = o.document,
        G = q(Y) && q(Y.createElement),
        U = function(t) {
            return G ? Y.createElement(t) : {}
        },
        K = !H && !u((function() {
            return 7 != Object.defineProperty(U("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        J = H && u((function() {
            return 42 != Object.defineProperty((function() {}), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        })),
        Q = o.String,
        Z = o.TypeError,
        tt = function(t) {
            if (q(t)) return t;
            throw Z(Q(t) + " is not an object")
        },
        et = Function.prototype.call,
        rt = f ? et.bind(et) : function() {
            return et.apply(et, arguments)
        },
        nt = g({}.isPrototypeOf),
        it = o.Object,
        ot = I ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            var e = R("Symbol");
            return T(e) && nt(e.prototype, it(t))
        },
        st = o.String,
        at = function(t) {
            try {
                return st(t)
            } catch (t) {
                return "Object"
            }
        },
        ct = o.TypeError,
        lt = function(t) {
            if (T(t)) return t;
            throw ct(at(t) + " is not a function")
        },
        ut = function(t, e) {
            var r = t[e];
            return null == r ? void 0 : lt(r)
        },
        ft = o.TypeError,
        ht = o.TypeError,
        dt = V("toPrimitive"),
        pt = function(t, e) {
            if (!q(t) || ot(t)) return t;
            var r, n = ut(t, dt);
            if (n) {
                if (void 0 === e && (e = "default"), r = rt(n, t, e), !q(r) || ot(r)) return r;
                throw ht("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"),
                function(t, e) {
                    var r, n;
                    if ("string" === e && T(r = t.toString) && !q(n = rt(r, t))) return n;
                    if (T(r = t.valueOf) && !q(n = rt(r, t))) return n;
                    if ("string" !== e && T(r = t.toString) && !q(n = rt(r, t))) return n;
                    throw ft("Can't convert object to primitive value")
                }(t, e)
        },
        vt = function(t) {
            var e = pt(t, "string");
            return ot(e) ? e : e + ""
        },
        gt = o.TypeError,
        bt = Object.defineProperty,
        yt = Object.getOwnPropertyDescriptor,
        mt = {
            f: H ? J ? function(t, e, r) {
                if (tt(t), e = vt(e), tt(r), "function" == typeof t && "prototype" === e && "value" in r && "writable" in r && !r.writable) {
                    var n = yt(t, e);
                    n && n.writable && (t[e] = r.value, r = {
                        configurable: "configurable" in r ? r.configurable : n.configurable,
                        enumerable: "enumerable" in r ? r.enumerable : n.enumerable,
                        writable: !1
                    })
                }
                return bt(t, e, r)
            } : bt : function(t, e, r) {
                if (tt(t), e = vt(e), tt(r), K) try {
                    return bt(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw gt("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        xt = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        Et = H ? function(t, e, r) {
            return mt.f(t, e, xt(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        wt = Function.prototype,
        Ot = H && Object.getOwnPropertyDescriptor,
        St = w(wt, "name"),
        At = {
            EXISTS: St,
            PROPER: St && "something" === function() {}.name,
            CONFIGURABLE: St && (!H || H && Ot(wt, "name").configurable)
        },
        kt = g(Function.toString);
    T(c.inspectSource) || (c.inspectSource = function(t) {
        return kt(t)
    });
    var Tt, Lt, Rt, _t = c.inspectSource,
        jt = o.WeakMap,
        zt = T(jt) && /native code/.test(_t(jt)),
        Mt = l("keys"),
        Ct = function(t) {
            return Mt[t] || (Mt[t] = k(t))
        },
        Nt = {},
        Wt = o.TypeError,
        It = o.WeakMap;
    if (zt || c.state) {
        var Pt = c.state || (c.state = new It),
            Bt = g(Pt.get),
            Dt = g(Pt.has),
            Ft = g(Pt.set);
        Tt = function(t, e) {
            if (Dt(Pt, t)) throw new Wt("Object already initialized");
            return e.facade = t, Ft(Pt, t, e), e
        }, Lt = function(t) {
            return Bt(Pt, t) || {}
        }, Rt = function(t) {
            return Dt(Pt, t)
        }
    } else {
        var Vt = Ct("state");
        Nt[Vt] = !0, Tt = function(t, e) {
            if (w(t, Vt)) throw new Wt("Object already initialized");
            return e.facade = t, Et(t, Vt, e), e
        }, Lt = function(t) {
            return w(t, Vt) ? t[Vt] : {}
        }, Rt = function(t) {
            return w(t, Vt)
        }
    }
    var $t = {
            set: Tt,
            get: Lt,
            has: Rt,
            enforce: function(t) {
                return Rt(t) ? Lt(t) : Tt(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!q(e) || (r = Lt(e)).type !== t) throw Wt("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        },
        Xt = e((function(t) {
            var e = At.CONFIGURABLE,
                r = $t.enforce,
                n = $t.get,
                i = Object.defineProperty,
                o = H && !u((function() {
                    return 8 !== i((function() {}), "length", {
                        value: 8
                    }).length
                })),
                s = String(String).split("String"),
                a = t.exports = function(t, n, a) {
                    if ("Symbol(" === String(n).slice(0, 7) && (n = "[" + String(n).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), a && a.getter && (n = "get " + n), a && a.setter && (n = "set " + n), (!w(t, "name") || e && t.name !== n) && i(t, "name", {
                            value: n,
                            configurable: !0
                        }), o && a && w(a, "arity") && t.length !== a.arity && i(t, "length", {
                            value: a.arity
                        }), a && w(a, "constructor") && a.constructor) {
                        if (H) try {
                            i(t, "prototype", {
                                writable: !1
                            })
                        } catch (t) {}
                    } else t.prototype = void 0;
                    var c = r(t);
                    return w(c, "source") || (c.source = s.join("string" == typeof n ? n : "")), t
                };
            Function.prototype.toString = a((function() {
                return T(this) && n(this).source || _t(this)
            }), "toString")
        })),
        Ht = function(t, e, r, n) {
            n || (n = {});
            var i = n.enumerable,
                o = void 0 !== n.name ? n.name : e;
            return T(r) && Xt(r, o, n), n.global ? i ? t[e] = r : a(e, r) : (n.unsafe ? t[e] && (i = !0) : delete t[e], i ? t[e] = r : Et(t, e, r)), t
        },
        qt = g({}.toString),
        Yt = g("".slice),
        Gt = function(t) {
            return Yt(qt(t), 8, -1)
        },
        Ut = V("toStringTag"),
        Kt = o.Object,
        Jt = "Arguments" == Gt(function() {
            return arguments
        }()),
        Qt = X ? Gt : function(t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Kt(t), Ut)) ? r : Jt ? Gt(e) : "Object" == (n = Gt(e)) && T(e.callee) ? "Arguments" : n
        },
        Zt = X ? {}.toString : function() {
            return "[object " + Qt(this) + "]"
        };
    X || Ht(Object.prototype, "toString", Zt, {
        unsafe: !0
    });
    var te = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        ee = U("span").classList,
        re = ee && ee.constructor && ee.constructor.prototype,
        ne = re === Object.prototype ? void 0 : re,
        ie = g(g.bind),
        oe = function(t, e) {
            return lt(t), void 0 === e ? t : f ? ie(t, e) : function() {
                return t.apply(e, arguments)
            }
        },
        se = o.Object,
        ae = g("".split),
        ce = u((function() {
            return !se("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == Gt(t) ? ae(t, "") : se(t)
        } : se,
        le = Math.ceil,
        ue = Math.floor,
        fe = Math.trunc || function(t) {
            var e = +t;
            return (e > 0 ? ue : le)(e)
        },
        he = function(t) {
            var e = +t;
            return e != e || 0 === e ? 0 : fe(e)
        },
        de = Math.min,
        pe = function(t) {
            return t > 0 ? de(he(t), 9007199254740991) : 0
        },
        ve = function(t) {
            return pe(t.length)
        },
        ge = Array.isArray || function(t) {
            return "Array" == Gt(t)
        },
        be = function() {},
        ye = [],
        me = R("Reflect", "construct"),
        xe = /^\s*(?:class|function)\b/,
        Ee = g(xe.exec),
        we = !xe.exec(be),
        Oe = function(t) {
            if (!T(t)) return !1;
            try {
                return me(be, ye, t), !0
            } catch (t) {
                return !1
            }
        },
        Se = function(t) {
            if (!T(t)) return !1;
            switch (Qt(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return we || !!Ee(xe, _t(t))
            } catch (t) {
                return !0
            }
        };
    Se.sham = !0;
    var Ae = !me || u((function() {
            var t;
            return Oe(Oe.call) || !Oe(Object) || !Oe((function() {
                t = !0
            })) || t
        })) ? Se : Oe,
        ke = V("species"),
        Te = o.Array,
        Le = function(t, e) {
            return new(function(t) {
                var e;
                return ge(t) && (e = t.constructor, (Ae(e) && (e === Te || ge(e.prototype)) || q(e) && null === (e = e[ke])) && (e = void 0)), void 0 === e ? Te : e
            }(t))(0 === e ? 0 : e)
        },
        Re = g([].push),
        _e = function(t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                i = 4 == t,
                o = 6 == t,
                s = 7 == t,
                a = 5 == t || o;
            return function(c, l, u, f) {
                for (var h, d, p = x(c), v = ce(p), g = oe(l, u), b = ve(v), y = 0, m = f || Le, E = e ? m(c, b) : r || s ? m(c, 0) : void 0; b > y; y++)
                    if ((a || y in v) && (d = g(h = v[y], y, p), t))
                        if (e) E[y] = d;
                        else if (d) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return y;
                    case 2:
                        Re(E, h)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        Re(E, h)
                }
                return o ? -1 : n || i ? i : E
            }
        },
        je = {
            forEach: _e(0),
            map: _e(1),
            filter: _e(2),
            some: _e(3),
            every: _e(4),
            find: _e(5),
            findIndex: _e(6),
            filterReject: _e(7)
        },
        ze = function(t, e) {
            var r = [][t];
            return !!r && u((function() {
                r.call(null, e || function() {
                    return 1
                }, 1)
            }))
        },
        Me = je.forEach,
        Ce = ze("forEach") ? [].forEach : function(t) {
            return Me(this, t, arguments.length > 1 ? arguments[1] : void 0)
        },
        Ne = function(t) {
            if (t && t.forEach !== Ce) try {
                Et(t, "forEach", Ce)
            } catch (e) {
                t.forEach = Ce
            }
        };
    for (var We in te) te[We] && Ne(o[We] && o[We].prototype);
    Ne(ne);
    var Ie = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Pe = {}.propertyIsEnumerable,
        Be = Object.getOwnPropertyDescriptor,
        De = {
            f: Be && !Pe.call({
                1: 2
            }, 1) ? function(t) {
                var e = Be(this, t);
                return !!e && e.enumerable
            } : Pe
        },
        Fe = function(t) {
            return ce(y(t))
        },
        Ve = Object.getOwnPropertyDescriptor,
        $e = {
            f: H ? Ve : function(t, e) {
                if (t = Fe(t), e = vt(e), K) try {
                    return Ve(t, e)
                } catch (t) {}
                if (w(t, e)) return xt(!rt(De.f, t, e), t[e])
            }
        },
        Xe = Math.max,
        He = Math.min,
        qe = function(t, e) {
            var r = he(t);
            return r < 0 ? Xe(r + e, 0) : He(r, e)
        },
        Ye = function(t) {
            return function(e, r, n) {
                var i, o = Fe(e),
                    s = ve(o),
                    a = qe(n, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((i = o[a++]) != i) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        },
        Ge = {
            includes: Ye(!0),
            indexOf: Ye(!1)
        }.indexOf,
        Ue = g([].push),
        Ke = function(t, e) {
            var r, n = Fe(t),
                i = 0,
                o = [];
            for (r in n) !w(Nt, r) && w(n, r) && Ue(o, r);
            for (; e.length > i;) w(n, r = e[i++]) && (~Ge(o, r) || Ue(o, r));
            return o
        },
        Je = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Qe = Je.concat("length", "prototype"),
        Ze = {
            f: Object.getOwnPropertyNames || function(t) {
                return Ke(t, Qe)
            }
        },
        tr = {
            f: Object.getOwnPropertySymbols
        },
        er = g([].concat),
        rr = R("Reflect", "ownKeys") || function(t) {
            var e = Ze.f(tt(t)),
                r = tr.f;
            return r ? er(e, r(t)) : e
        },
        nr = function(t, e, r) {
            for (var n = rr(e), i = mt.f, o = $e.f, s = 0; s < n.length; s++) {
                var a = n[s];
                w(t, a) || r && w(r, a) || i(t, a, o(e, a))
            }
        },
        ir = /#|\.prototype\./,
        or = function(t, e) {
            var r = ar[sr(t)];
            return r == lr || r != cr && (T(e) ? u(e) : !!e)
        },
        sr = or.normalize = function(t) {
            return String(t).replace(ir, ".").toLowerCase()
        },
        ar = or.data = {},
        cr = or.NATIVE = "N",
        lr = or.POLYFILL = "P",
        ur = or,
        fr = $e.f,
        hr = function(t, e) {
            var r, n, i, s, c, l = t.target,
                u = t.global,
                f = t.stat;
            if (r = u ? o : f ? o[l] || a(l, {}) : (o[l] || {}).prototype)
                for (n in e) {
                    if (s = e[n], i = t.dontCallGetSet ? (c = fr(r, n)) && c.value : r[n], !ur(u ? n : l + (f ? "." : "#") + n, t.forced) && void 0 !== i) {
                        if (typeof s == typeof i) continue;
                        nr(s, i)
                    }(t.sham || i && i.sham) && Et(s, "sham", !0), Ht(r, n, s, t)
                }
        },
        dr = o.String,
        pr = function(t) {
            if ("Symbol" === Qt(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return dr(t)
        },
        vr = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        gr = g("".replace),
        br = "[" + vr + "]",
        yr = RegExp("^" + br + br + "*"),
        mr = RegExp(br + br + "*$"),
        xr = function(t) {
            return function(e) {
                var r = pr(y(e));
                return 1 & t && (r = gr(r, yr, "")), 2 & t && (r = gr(r, mr, "")), r
            }
        },
        Er = {
            start: xr(1),
            end: xr(2),
            trim: xr(3)
        }.trim,
        wr = o.parseInt,
        Or = o.Symbol,
        Sr = Or && Or.iterator,
        Ar = /^[+-]?0x/i,
        kr = g(Ar.exec),
        Tr = 8 !== wr(vr + "08") || 22 !== wr(vr + "0x16") || Sr && !u((function() {
            wr(Object(Sr))
        })) ? function(t, e) {
            var r = Er(pr(t));
            return wr(r, e >>> 0 || (kr(Ar, r) ? 16 : 10))
        } : wr;
    hr({
        global: !0,
        forced: parseInt != Tr
    }, {
        parseInt: Tr
    });
    var Lr = Object.keys || function(t) {
            return Ke(t, Je)
        },
        Rr = Object.assign,
        _r = Object.defineProperty,
        jr = g([].concat),
        zr = !Rr || u((function() {
            if (H && 1 !== Rr({
                    b: 1
                }, Rr(_r({}, "a", {
                    enumerable: !0,
                    get: function() {
                        _r(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                r = Symbol();
            return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
                e[t] = t
            })), 7 != Rr({}, t)[r] || "abcdefghijklmnopqrst" != Lr(Rr({}, e)).join("")
        })) ? function(t, e) {
            for (var r = x(t), n = arguments.length, i = 1, o = tr.f, s = De.f; n > i;)
                for (var a, c = ce(arguments[i++]), l = o ? jr(Lr(c), o(c)) : Lr(c), u = l.length, f = 0; u > f;) a = l[f++], H && !rt(s, c, a) || (r[a] = c[a]);
            return r
        } : Rr;
    hr({
        target: "Object",
        stat: !0,
        arity: 2,
        forced: Object.assign !== zr
    }, {
        assign: zr
    });
    var Mr, Cr = V("species"),
        Nr = je.filter,
        Wr = (Mr = "filter", N >= 51 || !u((function() {
            var t = [];
            return (t.constructor = {})[Cr] = function() {
                return {
                    foo: 1
                }
            }, 1 !== t[Mr](Boolean).foo
        })));
    hr({
        target: "Array",
        proto: !0,
        forced: !Wr
    }, {
        filter: function(t) {
            return Nr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ir, Pr = {
            f: H && !J ? Object.defineProperties : function(t, e) {
                tt(t);
                for (var r, n = Fe(e), i = Lr(e), o = i.length, s = 0; o > s;) mt.f(t, r = i[s++], n[r]);
                return t
            }
        },
        Br = R("document", "documentElement"),
        Dr = Ct("IE_PROTO"),
        Fr = function() {},
        Vr = function(t) {
            return "<script>" + t + "<\/script>"
        },
        $r = function(t) {
            t.write(Vr("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        Xr = function() {
            try {
                Ir = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            Xr = "undefined" != typeof document ? document.domain && Ir ? $r(Ir) : ((e = U("iframe")).style.display = "none", Br.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Vr("document.F=Object")), t.close(), t.F) : $r(Ir);
            for (var r = Je.length; r--;) delete Xr.prototype[Je[r]];
            return Xr()
        };
    Nt[Dr] = !0;
    var Hr = Object.create || function(t, e) {
            var r;
            return null !== t ? (Fr.prototype = tt(t), r = new Fr, Fr.prototype = null, r[Dr] = t) : r = Xr(), void 0 === e ? r : Pr.f(r, e)
        },
        qr = mt.f,
        Yr = V("unscopables"),
        Gr = Array.prototype;
    null == Gr[Yr] && qr(Gr, Yr, {
        configurable: !0,
        value: Hr(null)
    });
    var Ur, Kr, Jr, Qr = function(t) {
            Gr[Yr][t] = !0
        },
        Zr = {},
        tn = !u((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        en = Ct("IE_PROTO"),
        rn = o.Object,
        nn = rn.prototype,
        on = tn ? rn.getPrototypeOf : function(t) {
            var e = x(t);
            if (w(e, en)) return e[en];
            var r = e.constructor;
            return T(r) && e instanceof r ? r.prototype : e instanceof rn ? nn : null
        },
        sn = V("iterator"),
        an = !1;
    [].keys && ("next" in (Jr = [].keys()) ? (Kr = on(on(Jr))) !== Object.prototype && (Ur = Kr) : an = !0), (null == Ur || u((function() {
        var t = {};
        return Ur[sn].call(t) !== t
    }))) && (Ur = {}), T(Ur[sn]) || Ht(Ur, sn, (function() {
        return this
    }));
    var cn = {
            IteratorPrototype: Ur,
            BUGGY_SAFARI_ITERATORS: an
        },
        ln = mt.f,
        un = V("toStringTag"),
        fn = function(t, e, r) {
            t && !r && (t = t.prototype), t && !w(t, un) && ln(t, un, {
                configurable: !0,
                value: e
            })
        },
        hn = cn.IteratorPrototype,
        dn = function() {
            return this
        },
        pn = o.String,
        vn = o.TypeError,
        gn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                r = {};
            try {
                (t = g(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array
            } catch (t) {}
            return function(r, n) {
                return tt(r),
                    function(t) {
                        if ("object" == typeof t || T(t)) return t;
                        throw vn("Can't set " + pn(t) + " as a prototype")
                    }(n), e ? t(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        bn = At.PROPER,
        yn = At.CONFIGURABLE,
        mn = cn.IteratorPrototype,
        xn = cn.BUGGY_SAFARI_ITERATORS,
        En = V("iterator"),
        wn = function() {
            return this
        },
        On = function(t, e, r, n, i, o, s) {
            ! function(t, e, r, n) {
                var i = e + " Iterator";
                t.prototype = Hr(hn, {
                    next: xt(+!n, r)
                }), fn(t, i, !1), Zr[i] = dn
            }(r, e, n);
            var a, c, l, u = function(t) {
                    if (t === i && v) return v;
                    if (!xn && t in d) return d[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                d = t.prototype,
                p = d[En] || d["@@iterator"] || i && d[i],
                v = !xn && p || u(i),
                g = "Array" == e && d.entries || p;
            if (g && (a = on(g.call(new t))) !== Object.prototype && a.next && (on(a) !== mn && (gn ? gn(a, mn) : T(a[En]) || Ht(a, En, wn)), fn(a, f, !0)), bn && "values" == i && p && "values" !== p.name && (yn ? Et(d, "name", "values") : (h = !0, v = function() {
                    return rt(p, this)
                })), i)
                if (c = {
                        values: u("values"),
                        keys: o ? v : u("keys"),
                        entries: u("entries")
                    }, s)
                    for (l in c)(xn || h || !(l in d)) && Ht(d, l, c[l]);
                else hr({
                    target: e,
                    proto: !0,
                    forced: xn || h
                }, c);
            return d[En] !== v && Ht(d, En, v, {
                name: i
            }), Zr[e] = v, c
        },
        Sn = mt.f,
        An = $t.set,
        kn = $t.getterFor("Array Iterator"),
        Tn = On(Array, "Array", (function(t, e) {
            An(this, {
                type: "Array Iterator",
                target: Fe(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = kn(this),
                e = t.target,
                r = t.kind,
                n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: e[n],
                done: !1
            } : {
                value: [n, e[n]],
                done: !1
            }
        }), "values"),
        Ln = Zr.Arguments = Zr.Array;
    if (Qr("keys"), Qr("values"), Qr("entries"), H && "values" !== Ln.name) try {
        Sn(Ln, "name", {
            value: "values"
        })
    } catch (t) {}
    var Rn = g("".charAt),
        _n = g("".charCodeAt),
        jn = g("".slice),
        zn = function(t) {
            return function(e, r) {
                var n, i, o = pr(y(e)),
                    s = he(r),
                    a = o.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (n = _n(o, s)) < 55296 || n > 56319 || s + 1 === a || (i = _n(o, s + 1)) < 56320 || i > 57343 ? t ? Rn(o, s) : n : t ? jn(o, s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
        },
        Mn = {
            codeAt: zn(!1),
            charAt: zn(!0)
        },
        Cn = Mn.charAt,
        Nn = $t.set,
        Wn = $t.getterFor("String Iterator");
    On(String, "String", (function(t) {
        Nn(this, {
            type: "String Iterator",
            string: pr(t),
            index: 0
        })
    }), (function() {
        var t, e = Wn(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = Cn(r, n), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var In = function(t, e, r) {
            for (var n in e) Ht(t, n, e[n], r);
            return t
        },
        Pn = o.Array,
        Bn = Math.max,
        Dn = Ze.f,
        Fn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Vn = function(t) {
            try {
                return Dn(t)
            } catch (t) {
                return function(t, e, r) {
                    for (var n, i, o, s, a = ve(t), c = qe(e, a), l = qe(void 0 === r ? a : r, a), u = Pn(Bn(l - c, 0)), f = 0; c < l; c++, f++) n = u, i = f, o = t[c], s = void 0, (s = vt(i)) in n ? mt.f(n, s, xt(0, o)) : n[s] = o;
                    return u.length = f, u
                }(Fn)
            }
        },
        $n = {
            f: function(t) {
                return Fn && "Window" == Gt(t) ? Vn(t) : Dn(Fe(t))
            }
        },
        Xn = u((function() {
            if ("function" == typeof ArrayBuffer) {
                var t = new ArrayBuffer(8);
                Object.isExtensible(t) && Object.defineProperty(t, "a", {
                    value: 8
                })
            }
        })),
        Hn = Object.isExtensible,
        qn = u((function() {
            Hn(1)
        })) || Xn ? function(t) {
            return !!q(t) && ((!Xn || "ArrayBuffer" != Gt(t)) && (!Hn || Hn(t)))
        } : Hn,
        Yn = !u((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        Gn = e((function(t) {
            var e = mt.f,
                r = !1,
                n = k("meta"),
                i = 0,
                o = function(t) {
                    e(t, n, {
                        value: {
                            objectID: "O" + i++,
                            weakData: {}
                        }
                    })
                },
                s = t.exports = {
                    enable: function() {
                        s.enable = function() {}, r = !0;
                        var t = Ze.f,
                            e = g([].splice),
                            i = {};
                        i[n] = 1, t(i).length && (Ze.f = function(r) {
                            for (var i = t(r), o = 0, s = i.length; o < s; o++)
                                if (i[o] === n) {
                                    e(i, o, 1);
                                    break
                                }
                            return i
                        }, hr({
                            target: "Object",
                            stat: !0,
                            forced: !0
                        }, {
                            getOwnPropertyNames: $n.f
                        }))
                    },
                    fastKey: function(t, e) {
                        if (!q(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!w(t, n)) {
                            if (!qn(t)) return "F";
                            if (!e) return "E";
                            o(t)
                        }
                        return t[n].objectID
                    },
                    getWeakData: function(t, e) {
                        if (!w(t, n)) {
                            if (!qn(t)) return !0;
                            if (!e) return !1;
                            o(t)
                        }
                        return t[n].weakData
                    },
                    onFreeze: function(t) {
                        return Yn && r && qn(t) && !w(t, n) && o(t), t
                    }
                };
            Nt[n] = !0
        })),
        Un = (Gn.enable, Gn.fastKey, Gn.getWeakData, Gn.onFreeze, V("iterator")),
        Kn = Array.prototype,
        Jn = V("iterator"),
        Qn = function(t) {
            if (null != t) return ut(t, Jn) || ut(t, "@@iterator") || Zr[Qt(t)]
        },
        Zn = o.TypeError,
        ti = function(t, e, r) {
            var n, i;
            tt(t);
            try {
                if (!(n = ut(t, "return"))) {
                    if ("throw" === e) throw r;
                    return r
                }
                n = rt(n, t)
            } catch (t) {
                i = !0, n = t
            }
            if ("throw" === e) throw r;
            if (i) throw n;
            return tt(n), r
        },
        ei = o.TypeError,
        ri = function(t, e) {
            this.stopped = t, this.result = e
        },
        ni = ri.prototype,
        ii = function(t, e, r) {
            var n, i, o, s, a, c, l, u, f = r && r.that,
                h = !(!r || !r.AS_ENTRIES),
                d = !(!r || !r.IS_ITERATOR),
                p = !(!r || !r.INTERRUPTED),
                v = oe(e, f),
                g = function(t) {
                    return n && ti(n, "normal", t), new ri(!0, t)
                },
                b = function(t) {
                    return h ? (tt(t), p ? v(t[0], t[1], g) : v(t[0], t[1])) : p ? v(t, g) : v(t)
                };
            if (d) n = t;
            else {
                if (!(i = Qn(t))) throw ei(at(t) + " is not iterable");
                if (void 0 !== (u = i) && (Zr.Array === u || Kn[Un] === u)) {
                    for (o = 0, s = ve(t); s > o; o++)
                        if ((a = b(t[o])) && nt(ni, a)) return a;
                    return new ri(!1)
                }
                n = function(t, e) {
                    var r = arguments.length < 2 ? Qn(t) : e;
                    if (lt(r)) return tt(rt(r, t));
                    throw Zn(at(t) + " is not iterable")
                }(t, i)
            }
            for (c = n.next; !(l = rt(c, n)).done;) {
                try {
                    a = b(l.value)
                } catch (t) {
                    ti(n, "throw", t)
                }
                if ("object" == typeof a && a && nt(ni, a)) return a
            }
            return new ri(!1)
        },
        oi = o.TypeError,
        si = function(t, e) {
            if (nt(e, t)) return t;
            throw oi("Incorrect invocation")
        },
        ai = V("iterator"),
        ci = !1;
    try {
        var li = 0,
            ui = {
                next: function() {
                    return {
                        done: !!li++
                    }
                },
                return: function() {
                    ci = !0
                }
            };
        ui[ai] = function() {
            return this
        }, Array.from(ui, (function() {
            throw 2
        }))
    } catch (t) {}
    var fi = Gn.getWeakData,
        hi = $t.set,
        di = $t.getterFor,
        pi = je.find,
        vi = je.findIndex,
        gi = g([].splice),
        bi = 0,
        yi = function(t) {
            return t.frozen || (t.frozen = new mi)
        },
        mi = function() {
            this.entries = []
        },
        xi = function(t, e) {
            return pi(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    mi.prototype = {
        get: function(t) {
            var e = xi(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!xi(this, t)
        },
        set: function(t, e) {
            var r = xi(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = vi(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && gi(this.entries, e, 1), !!~e
        }
    };
    var Ei, wi = {
            getConstructor: function(t, e, r, n) {
                var i = t((function(t, i) {
                        si(t, o), hi(t, {
                            type: e,
                            id: bi++,
                            frozen: void 0
                        }), null != i && ii(i, t[n], {
                            that: t,
                            AS_ENTRIES: r
                        })
                    })),
                    o = i.prototype,
                    s = di(e),
                    a = function(t, e, r) {
                        var n = s(t),
                            i = fi(tt(e), !0);
                        return !0 === i ? yi(n).set(e, r) : i[n.id] = r, t
                    };
                return In(o, {
                    delete: function(t) {
                        var e = s(this);
                        if (!q(t)) return !1;
                        var r = fi(t);
                        return !0 === r ? yi(e).delete(t) : r && w(r, e.id) && delete r[e.id]
                    },
                    has: function(t) {
                        var e = s(this);
                        if (!q(t)) return !1;
                        var r = fi(t);
                        return !0 === r ? yi(e).has(t) : r && w(r, e.id)
                    }
                }), In(o, r ? {
                    get: function(t) {
                        var e = s(this);
                        if (q(t)) {
                            var r = fi(t);
                            return !0 === r ? yi(e).get(t) : r ? r[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return a(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return a(this, t, !0)
                    }
                }), i
            }
        },
        Oi = $t.enforce,
        Si = !o.ActiveXObject && "ActiveXObject" in o,
        Ai = function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        },
        ki = function(t, e, r) {
            var n = -1 !== t.indexOf("Map"),
                i = -1 !== t.indexOf("Weak"),
                s = n ? "set" : "add",
                a = o[t],
                c = a && a.prototype,
                l = a,
                f = {},
                h = function(t) {
                    var e = g(c[t]);
                    Ht(c, t, "add" == t ? function(t) {
                        return e(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function(t) {
                        return !(i && !q(t)) && e(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return i && !q(t) ? void 0 : e(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(i && !q(t)) && e(this, 0 === t ? 0 : t)
                    } : function(t, r) {
                        return e(this, 0 === t ? 0 : t, r), this
                    })
                };
            if (ur(t, !T(a) || !(i || c.forEach && !u((function() {
                    (new a).entries().next()
                }))))) l = r.getConstructor(e, t, n, s), Gn.enable();
            else if (ur(t, !0)) {
                var d = new l,
                    p = d[s](i ? {} : -0, 1) != d,
                    v = u((function() {
                        d.has(1)
                    })),
                    b = function(t, e) {
                        if (!e && !ci) return !1;
                        var r = !1;
                        try {
                            var n = {};
                            n[ai] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }, t(n)
                        } catch (t) {}
                        return r
                    }((function(t) {
                        new a(t)
                    })),
                    y = !i && u((function() {
                        for (var t = new a, e = 5; e--;) t[s](e, e);
                        return !t.has(-0)
                    }));
                b || ((l = e((function(t, e) {
                    si(t, c);
                    var r = function(t, e, r) {
                        var n, i;
                        return gn && T(n = e.constructor) && n !== r && q(i = n.prototype) && i !== r.prototype && gn(t, i), t
                    }(new a, t, l);
                    return null != e && ii(e, r[s], {
                        that: r,
                        AS_ENTRIES: n
                    }), r
                }))).prototype = c, c.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(s), i && c.clear && delete c.clear
            }
            return f[t] = l, hr({
                global: !0,
                constructor: !0,
                forced: l != a
            }, f), fn(l, t), i || r.setStrong(l, t, n), l
        }("WeakMap", Ai, wi);
    if (zt && Si) {
        Ei = wi.getConstructor(Ai, "WeakMap", !0), Gn.enable();
        var Ti = ki.prototype,
            Li = g(Ti.delete),
            Ri = g(Ti.has),
            _i = g(Ti.get),
            ji = g(Ti.set);
        In(Ti, {
            delete: function(t) {
                if (q(t) && !qn(t)) {
                    var e = Oi(this);
                    return e.frozen || (e.frozen = new Ei), Li(this, t) || e.frozen.delete(t)
                }
                return Li(this, t)
            },
            has: function(t) {
                if (q(t) && !qn(t)) {
                    var e = Oi(this);
                    return e.frozen || (e.frozen = new Ei), Ri(this, t) || e.frozen.has(t)
                }
                return Ri(this, t)
            },
            get: function(t) {
                if (q(t) && !qn(t)) {
                    var e = Oi(this);
                    return e.frozen || (e.frozen = new Ei), Ri(this, t) ? _i(this, t) : e.frozen.get(t)
                }
                return _i(this, t)
            },
            set: function(t, e) {
                if (q(t) && !qn(t)) {
                    var r = Oi(this);
                    r.frozen || (r.frozen = new Ei), Ri(this, t) ? ji(this, t, e) : r.frozen.set(t, e)
                } else ji(this, t, e);
                return this
            }
        })
    }
    var zi = V("iterator"),
        Mi = V("toStringTag"),
        Ci = Tn.values,
        Ni = function(t, e) {
            if (t) {
                if (t[zi] !== Ci) try {
                    Et(t, zi, Ci)
                } catch (e) {
                    t[zi] = Ci
                }
                if (t[Mi] || Et(t, Mi, e), te[e])
                    for (var r in Tn)
                        if (t[r] !== Tn[r]) try {
                            Et(t, r, Tn[r])
                        } catch (e) {
                            t[r] = Tn[r]
                        }
            }
        };
    for (var Wi in te) Ni(o[Wi] && o[Wi].prototype, Wi);
    Ni(ne, "DOMTokenList");
    var Ii = /^\s+|\s+$/g,
        Pi = /^[-+]0x[0-9a-f]+$/i,
        Bi = /^0b[01]+$/i,
        Di = /^0o[0-7]+$/i,
        Fi = parseInt,
        Vi = "object" == typeof t && t && t.Object === Object && t,
        $i = "object" == typeof self && self && self.Object === Object && self,
        Xi = Vi || $i || Function("return this")(),
        Hi = Object.prototype.toString,
        qi = Math.max,
        Yi = Math.min,
        Gi = function() {
            return Xi.Date.now()
        };

    function Ui(t, e, r) {
        var n, i, o, s, a, c, l = 0,
            u = !1,
            f = !1,
            h = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function d(e) {
            var r = n,
                o = i;
            return n = i = void 0, l = e, s = t.apply(o, r)
        }

        function p(t) {
            return l = t, a = setTimeout(g, e), u ? d(t) : s
        }

        function v(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || f && t - l >= o
        }

        function g() {
            var t = Gi();
            if (v(t)) return b(t);
            a = setTimeout(g, function(t) {
                var r = e - (t - c);
                return f ? Yi(r, o - (t - l)) : r
            }(t))
        }

        function b(t) {
            return a = void 0, h && n ? d(t) : (n = i = void 0, s)
        }

        function y() {
            var t = Gi(),
                r = v(t);
            if (n = arguments, i = this, c = t, r) {
                if (void 0 === a) return p(c);
                if (f) return a = setTimeout(g, e), d(c)
            }
            return void 0 === a && (a = setTimeout(g, e)), s
        }
        return e = Ji(e) || 0, Ki(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? qi(Ji(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
            void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
        }, y.flush = function() {
            return void 0 === a ? s : b(Gi())
        }, y
    }

    function Ki(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function Ji(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && "[object Symbol]" == Hi.call(t)
            }(t)) return NaN;
        if (Ki(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Ki(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Ii, "");
        var r = Bi.test(t);
        return r || Di.test(t) ? Fi(t.slice(2), r ? 2 : 8) : Pi.test(t) ? NaN : +t
    }
    var Qi = function(t, e, r) {
            var n = !0,
                i = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return Ki(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ui(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        },
        Zi = /^\s+|\s+$/g,
        to = /^[-+]0x[0-9a-f]+$/i,
        eo = /^0b[01]+$/i,
        ro = /^0o[0-7]+$/i,
        no = parseInt,
        io = "object" == typeof t && t && t.Object === Object && t,
        oo = "object" == typeof self && self && self.Object === Object && self,
        so = io || oo || Function("return this")(),
        ao = Object.prototype.toString,
        co = Math.max,
        lo = Math.min,
        uo = function() {
            return so.Date.now()
        };

    function fo(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function ho(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && "[object Symbol]" == ao.call(t)
            }(t)) return NaN;
        if (fo(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = fo(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Zi, "");
        var r = eo.test(t);
        return r || ro.test(t) ? no(t.slice(2), r ? 2 : 8) : to.test(t) ? NaN : +t
    }
    var po = function(t, e, r) {
            var n, i, o, s, a, c, l = 0,
                u = !1,
                f = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function d(e) {
                var r = n,
                    o = i;
                return n = i = void 0, l = e, s = t.apply(o, r)
            }

            function p(t) {
                return l = t, a = setTimeout(g, e), u ? d(t) : s
            }

            function v(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - l >= o
            }

            function g() {
                var t = uo();
                if (v(t)) return b(t);
                a = setTimeout(g, function(t) {
                    var r = e - (t - c);
                    return f ? lo(r, o - (t - l)) : r
                }(t))
            }

            function b(t) {
                return a = void 0, h && n ? d(t) : (n = i = void 0, s)
            }

            function y() {
                var t = uo(),
                    r = v(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === a) return p(c);
                    if (f) return a = setTimeout(g, e), d(c)
                }
                return void 0 === a && (a = setTimeout(g, e)), s
            }
            return e = ho(e) || 0, fo(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? co(ho(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
            }, y.flush = function() {
                return void 0 === a ? s : b(uo())
            }, y
        },
        vo = /^\[object .+?Constructor\]$/,
        go = "object" == typeof t && t && t.Object === Object && t,
        bo = "object" == typeof self && self && self.Object === Object && self,
        yo = go || bo || Function("return this")();
    var mo = Array.prototype,
        xo = Function.prototype,
        Eo = Object.prototype,
        wo = yo["__core-js_shared__"],
        Oo = function() {
            var t = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        So = xo.toString,
        Ao = Eo.hasOwnProperty,
        ko = Eo.toString,
        To = RegExp("^" + So.call(Ao).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Lo = mo.splice,
        Ro = Io(yo, "Map"),
        _o = Io(Object, "create");

    function jo(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function zo(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Mo(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Co(t, e) {
        for (var r, n, i = t.length; i--;)
            if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
        return -1
    }

    function No(t) {
        return !(!Bo(t) || (e = t, Oo && Oo in e)) && (function(t) {
            var e = Bo(t) ? ko.call(t) : "";
            return "[object Function]" == e || "[object GeneratorFunction]" == e
        }(t) || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {}
            return e
        }(t) ? To : vo).test(function(t) {
            if (null != t) {
                try {
                    return So.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e
    }

    function Wo(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function Io(t, e) {
        var r = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return No(r) ? r : void 0
    }

    function Po(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(Po.Cache || Mo), r
    }

    function Bo(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    jo.prototype.clear = function() {
        this.__data__ = _o ? _o(null) : {}
    }, jo.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, jo.prototype.get = function(t) {
        var e = this.__data__;
        if (_o) {
            var r = e[t];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return Ao.call(e, t) ? e[t] : void 0
    }, jo.prototype.has = function(t) {
        var e = this.__data__;
        return _o ? void 0 !== e[t] : Ao.call(e, t)
    }, jo.prototype.set = function(t, e) {
        return this.__data__[t] = _o && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }, zo.prototype.clear = function() {
        this.__data__ = []
    }, zo.prototype.delete = function(t) {
        var e = this.__data__,
            r = Co(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : Lo.call(e, r, 1), !0)
    }, zo.prototype.get = function(t) {
        var e = this.__data__,
            r = Co(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, zo.prototype.has = function(t) {
        return Co(this.__data__, t) > -1
    }, zo.prototype.set = function(t, e) {
        var r = this.__data__,
            n = Co(r, t);
        return n < 0 ? r.push([t, e]) : r[n][1] = e, this
    }, Mo.prototype.clear = function() {
        this.__data__ = {
            hash: new jo,
            map: new(Ro || zo),
            string: new jo
        }
    }, Mo.prototype.delete = function(t) {
        return Wo(this, t).delete(t)
    }, Mo.prototype.get = function(t) {
        return Wo(this, t).get(t)
    }, Mo.prototype.has = function(t) {
        return Wo(this, t).has(t)
    }, Mo.prototype.set = function(t, e) {
        return Wo(this, t).set(t, e), this
    }, Po.Cache = Mo;
    var Do, Fo = Po,
        Vo = [],
        $o = "ResizeObserver loop completed with undelivered notifications.";
    ! function(t) {
        t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
    }(Do || (Do = {}));
    var Xo, Ho = function(t) {
            return Object.freeze(t)
        },
        qo = function(t, e) {
            this.inlineSize = t, this.blockSize = e, Ho(this)
        },
        Yo = function() {
            function t(t, e, r, n) {
                return this.x = t, this.y = e, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ho(this)
            }
            return t.prototype.toJSON = function() {
                var t = this;
                return {
                    x: t.x,
                    y: t.y,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }, t.fromRect = function(e) {
                return new t(e.x, e.y, e.width, e.height)
            }, t
        }(),
        Go = function(t) {
            return t instanceof SVGElement && "getBBox" in t
        },
        Uo = function(t) {
            if (Go(t)) {
                var e = t.getBBox(),
                    r = e.width,
                    n = e.height;
                return !r && !n
            }
            var i = t,
                o = i.offsetWidth,
                s = i.offsetHeight;
            return !(o || s || t.getClientRects().length)
        },
        Ko = function(t) {
            var e, r;
            if (t instanceof Element) return !0;
            var n = null === (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
            return !!(n && t instanceof n.Element)
        },
        Jo = "undefined" != typeof window ? window : {},
        Qo = new WeakMap,
        Zo = /auto|scroll/,
        ts = /^tb|vertical/,
        es = /msie|trident/i.test(Jo.navigator && Jo.navigator.userAgent),
        rs = function(t) {
            return parseFloat(t || "0")
        },
        ns = function(t, e, r) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = !1), new qo((r ? e : t) || 0, (r ? t : e) || 0)
        },
        is = Ho({
            devicePixelContentBoxSize: ns(),
            borderBoxSize: ns(),
            contentBoxSize: ns(),
            contentRect: new Yo(0, 0, 0, 0)
        }),
        os = function(t, e) {
            if (void 0 === e && (e = !1), Qo.has(t) && !e) return Qo.get(t);
            if (Uo(t)) return Qo.set(t, is), is;
            var r = getComputedStyle(t),
                n = Go(t) && t.ownerSVGElement && t.getBBox(),
                i = !es && "border-box" === r.boxSizing,
                o = ts.test(r.writingMode || ""),
                s = !n && Zo.test(r.overflowY || ""),
                a = !n && Zo.test(r.overflowX || ""),
                c = n ? 0 : rs(r.paddingTop),
                l = n ? 0 : rs(r.paddingRight),
                u = n ? 0 : rs(r.paddingBottom),
                f = n ? 0 : rs(r.paddingLeft),
                h = n ? 0 : rs(r.borderTopWidth),
                d = n ? 0 : rs(r.borderRightWidth),
                p = n ? 0 : rs(r.borderBottomWidth),
                v = f + l,
                g = c + u,
                b = (n ? 0 : rs(r.borderLeftWidth)) + d,
                y = h + p,
                m = a ? t.offsetHeight - y - t.clientHeight : 0,
                x = s ? t.offsetWidth - b - t.clientWidth : 0,
                E = i ? v + b : 0,
                w = i ? g + y : 0,
                O = n ? n.width : rs(r.width) - E - x,
                S = n ? n.height : rs(r.height) - w - m,
                A = O + v + x + b,
                k = S + g + m + y,
                T = Ho({
                    devicePixelContentBoxSize: ns(Math.round(O * devicePixelRatio), Math.round(S * devicePixelRatio), o),
                    borderBoxSize: ns(A, k, o),
                    contentBoxSize: ns(O, S, o),
                    contentRect: new Yo(f, c, O, S)
                });
            return Qo.set(t, T), T
        },
        ss = function(t, e, r) {
            var n = os(t, r),
                i = n.borderBoxSize,
                o = n.contentBoxSize,
                s = n.devicePixelContentBoxSize;
            switch (e) {
                case Do.DEVICE_PIXEL_CONTENT_BOX:
                    return s;
                case Do.BORDER_BOX:
                    return i;
                default:
                    return o
            }
        },
        as = function(t) {
            var e = os(t);
            this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = Ho([e.borderBoxSize]), this.contentBoxSize = Ho([e.contentBoxSize]), this.devicePixelContentBoxSize = Ho([e.devicePixelContentBoxSize])
        },
        cs = function(t) {
            if (Uo(t)) return 1 / 0;
            for (var e = 0, r = t.parentNode; r;) e += 1, r = r.parentNode;
            return e
        },
        ls = function() {
            var t = 1 / 0,
                e = [];
            Vo.forEach((function(r) {
                if (0 !== r.activeTargets.length) {
                    var n = [];
                    r.activeTargets.forEach((function(e) {
                        var r = new as(e.target),
                            i = cs(e.target);
                        n.push(r), e.lastReportedSize = ss(e.target, e.observedBox), i < t && (t = i)
                    })), e.push((function() {
                        r.callback.call(r.observer, n, r.observer)
                    })), r.activeTargets.splice(0, r.activeTargets.length)
                }
            }));
            for (var r = 0, n = e; r < n.length; r++) {
                (0, n[r])()
            }
            return t
        },
        us = function(t) {
            Vo.forEach((function(e) {
                e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach((function(r) {
                    r.isActive() && (cs(r.target) > t ? e.activeTargets.push(r) : e.skippedTargets.push(r))
                }))
            }))
        },
        fs = function() {
            var t, e = 0;
            for (us(e); Vo.some((function(t) {
                    return t.activeTargets.length > 0
                }));) e = ls(), us(e);
            return Vo.some((function(t) {
                return t.skippedTargets.length > 0
            })) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
                message: $o
            }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = $o), window.dispatchEvent(t)), e > 0
        },
        hs = [],
        ds = function(t) {
            if (!Xo) {
                var e = 0,
                    r = document.createTextNode("");
                new MutationObserver((function() {
                    return hs.splice(0).forEach((function(t) {
                        return t()
                    }))
                })).observe(r, {
                    characterData: !0
                }), Xo = function() {
                    r.textContent = "" + (e ? e-- : e++)
                }
            }
            hs.push(t), Xo()
        },
        ps = 0,
        vs = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        },
        gs = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
        bs = function(t) {
            return void 0 === t && (t = 0), Date.now() + t
        },
        ys = !1,
        ms = new(function() {
            function t() {
                var t = this;
                this.stopped = !0, this.listener = function() {
                    return t.schedule()
                }
            }
            return t.prototype.run = function(t) {
                var e = this;
                if (void 0 === t && (t = 250), !ys) {
                    ys = !0;
                    var r, n = bs(t);
                    r = function() {
                        var r = !1;
                        try {
                            r = fs()
                        } finally {
                            if (ys = !1, t = n - bs(), !ps) return;
                            r ? e.run(1e3) : t > 0 ? e.run(t) : e.start()
                        }
                    }, ds((function() {
                        requestAnimationFrame(r)
                    }))
                }
            }, t.prototype.schedule = function() {
                this.stop(), this.run()
            }, t.prototype.observe = function() {
                var t = this,
                    e = function() {
                        return t.observer && t.observer.observe(document.body, vs)
                    };
                document.body ? e() : Jo.addEventListener("DOMContentLoaded", e)
            }, t.prototype.start = function() {
                var t = this;
                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), gs.forEach((function(e) {
                    return Jo.addEventListener(e, t.listener, !0)
                })))
            }, t.prototype.stop = function() {
                var t = this;
                this.stopped || (this.observer && this.observer.disconnect(), gs.forEach((function(e) {
                    return Jo.removeEventListener(e, t.listener, !0)
                })), this.stopped = !0)
            }, t
        }()),
        xs = function(t) {
            !ps && t > 0 && ms.start(), !(ps += t) && ms.stop()
        },
        Es = function() {
            function t(t, e) {
                this.target = t, this.observedBox = e || Do.CONTENT_BOX, this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            return t.prototype.isActive = function() {
                var t, e = ss(this.target, this.observedBox, !0);
                return t = this.target, Go(t) || function(t) {
                    switch (t.tagName) {
                        case "INPUT":
                            if ("image" !== t.type) break;
                        case "VIDEO":
                        case "AUDIO":
                        case "EMBED":
                        case "OBJECT":
                        case "CANVAS":
                        case "IFRAME":
                        case "IMG":
                            return !0
                    }
                    return !1
                }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
            }, t
        }(),
        ws = function(t, e) {
            this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e
        },
        Os = new WeakMap,
        Ss = function(t, e) {
            for (var r = 0; r < t.length; r += 1)
                if (t[r].target === e) return r;
            return -1
        },
        As = function() {
            function t() {}
            return t.connect = function(t, e) {
                var r = new ws(t, e);
                Os.set(t, r)
            }, t.observe = function(t, e, r) {
                var n = Os.get(t),
                    i = 0 === n.observationTargets.length;
                Ss(n.observationTargets, e) < 0 && (i && Vo.push(n), n.observationTargets.push(new Es(e, r && r.box)), xs(1), ms.schedule())
            }, t.unobserve = function(t, e) {
                var r = Os.get(t),
                    n = Ss(r.observationTargets, e),
                    i = 1 === r.observationTargets.length;
                n >= 0 && (i && Vo.splice(Vo.indexOf(r), 1), r.observationTargets.splice(n, 1), xs(-1))
            }, t.disconnect = function(t) {
                var e = this,
                    r = Os.get(t);
                r.observationTargets.slice().forEach((function(r) {
                    return e.unobserve(t, r.target)
                })), r.activeTargets.splice(0, r.activeTargets.length)
            }, t
        }(),
        ks = function() {
            function t(t) {
                if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof t) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                As.connect(this, t)
            }
            return t.prototype.observe = function(t, e) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!Ko(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                As.observe(this, t, e)
            }, t.prototype.unobserve = function(t) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!Ko(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                As.unobserve(this, t)
            }, t.prototype.disconnect = function() {
                As.disconnect(this)
            }, t.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            }, t
        }(),
        Ts = o.TypeError,
        Ls = function(t) {
            return function(e, r, n, i) {
                lt(r);
                var o = x(e),
                    s = ce(o),
                    a = ve(o),
                    c = t ? a - 1 : 0,
                    l = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (c in s) {
                            i = s[c], c += l;
                            break
                        }
                        if (c += l, t ? c < 0 : a <= c) throw Ts("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
                return i
            }
        },
        Rs = {
            left: Ls(!1),
            right: Ls(!0)
        },
        _s = "process" == Gt(o.process),
        js = Rs.left,
        zs = ze("reduce");
    hr({
        target: "Array",
        proto: !0,
        forced: !zs || !_s && N > 79 && N < 83
    }, {
        reduce: function(t) {
            var e = arguments.length;
            return js(this, t, e, e > 1 ? arguments[1] : void 0)
        }
    });
    var Ms, Cs, Ns = function() {
            var t = tt(this),
                e = "";
            return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        Ws = o.RegExp,
        Is = u((function() {
            var t = Ws("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })),
        Ps = Is || u((function() {
            return !Ws("a", "y").sticky
        })),
        Bs = {
            BROKEN_CARET: Is || u((function() {
                var t = Ws("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str")
            })),
            MISSED_STICKY: Ps,
            UNSUPPORTED_Y: Is
        },
        Ds = o.RegExp,
        Fs = u((function() {
            var t = Ds(".", "s");
            return !(t.dotAll && t.exec("\n") && "s" === t.flags)
        })),
        Vs = o.RegExp,
        $s = u((function() {
            var t = Vs("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        })),
        Xs = $t.get,
        Hs = l("native-string-replace", String.prototype.replace),
        qs = RegExp.prototype.exec,
        Ys = qs,
        Gs = g("".charAt),
        Us = g("".indexOf),
        Ks = g("".replace),
        Js = g("".slice),
        Qs = (Cs = /b*/g, rt(qs, Ms = /a/, "a"), rt(qs, Cs, "a"), 0 !== Ms.lastIndex || 0 !== Cs.lastIndex),
        Zs = Bs.BROKEN_CARET,
        ta = void 0 !== /()??/.exec("")[1];
    (Qs || ta || Zs || Fs || $s) && (Ys = function(t) {
        var e, r, n, i, o, s, a, c = this,
            l = Xs(c),
            u = pr(t),
            f = l.raw;
        if (f) return f.lastIndex = c.lastIndex, e = rt(Ys, f, u), c.lastIndex = f.lastIndex, e;
        var h = l.groups,
            d = Zs && c.sticky,
            p = rt(Ns, c),
            v = c.source,
            g = 0,
            b = u;
        if (d && (p = Ks(p, "y", ""), -1 === Us(p, "g") && (p += "g"), b = Js(u, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Gs(u, c.lastIndex - 1)) && (v = "(?: " + v + ")", b = " " + b, g++), r = new RegExp("^(?:" + v + ")", p)), ta && (r = new RegExp("^" + v + "$(?!\\s)", p)), Qs && (n = c.lastIndex), i = rt(qs, d ? r : c, b), d ? i ? (i.input = Js(i.input, g), i[0] = Js(i[0], g), i.index = c.lastIndex, c.lastIndex += i[0].length) : c.lastIndex = 0 : Qs && i && (c.lastIndex = c.global ? i.index + i[0].length : n), ta && i && i.length > 1 && rt(Hs, i[0], r, (function() {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
            })), i && h)
            for (i.groups = s = Hr(null), o = 0; o < h.length; o++) s[(a = h[o])[0]] = i[a[1]];
        return i
    });
    var ea = Ys;
    hr({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== ea
    }, {
        exec: ea
    });
    var ra = V("species"),
        na = RegExp.prototype,
        ia = function(t, e, r, n) {
            var i = V(t),
                o = !u((function() {
                    var e = {};
                    return e[i] = function() {
                        return 7
                    }, 7 != "" [t](e)
                })),
                s = o && !u((function() {
                    var e = !1,
                        r = /a/;
                    return "split" === t && ((r = {}).constructor = {}, r.constructor[ra] = function() {
                        return r
                    }, r.flags = "", r[i] = /./ [i]), r.exec = function() {
                        return e = !0, null
                    }, r[i](""), !e
                }));
            if (!o || !s || r) {
                var a = g(/./ [i]),
                    c = e(i, "" [t], (function(t, e, r, n, i) {
                        var s = g(t),
                            c = e.exec;
                        return c === ea || c === na.exec ? o && !i ? {
                            done: !0,
                            value: a(e, r, n)
                        } : {
                            done: !0,
                            value: s(r, e, n)
                        } : {
                            done: !1
                        }
                    }));
                Ht(String.prototype, t, c[0]), Ht(na, i, c[1])
            }
            n && Et(na[i], "sham", !0)
        },
        oa = Mn.charAt,
        sa = function(t, e, r) {
            return e + (r ? oa(t, e).length : 1)
        },
        aa = o.TypeError,
        ca = function(t, e) {
            var r = t.exec;
            if (T(r)) {
                var n = rt(r, t, e);
                return null !== n && tt(n), n
            }
            if ("RegExp" === Gt(t)) return rt(ea, t, e);
            throw aa("RegExp#exec called on incompatible receiver")
        };
    ia("match", (function(t, e, r) {
        return [function(e) {
            var r = y(this),
                n = null == e ? void 0 : ut(e, t);
            return n ? rt(n, e, r) : new RegExp(e)[t](pr(r))
        }, function(t) {
            var n = tt(this),
                i = pr(t),
                o = r(e, n, i);
            if (o.done) return o.value;
            if (!n.global) return ca(n, i);
            var s = n.unicode;
            n.lastIndex = 0;
            for (var a, c = [], l = 0; null !== (a = ca(n, i));) {
                var u = pr(a[0]);
                c[l] = u, "" === u && (n.lastIndex = sa(i, pe(n.lastIndex), s)), l++
            }
            return 0 === l ? null : c
        }]
    }));
    var la = At.EXISTS,
        ua = mt.f,
        fa = Function.prototype,
        ha = g(fa.toString),
        da = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        pa = g(da.exec);
    H && !la && ua(fa, "name", {
        configurable: !0,
        get: function() {
            try {
                return pa(da, ha(this))[1]
            } catch (t) {
                return ""
            }
        }
    });
    var va = Function.prototype,
        ga = va.apply,
        ba = va.call,
        ya = "object" == typeof Reflect && Reflect.apply || (f ? ba.bind(ga) : function() {
            return ba.apply(ga, arguments)
        }),
        ma = Math.floor,
        xa = g("".charAt),
        Ea = g("".replace),
        wa = g("".slice),
        Oa = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        Sa = /\$([$&'`]|\d{1,2})/g,
        Aa = function(t, e, r, n, i, o) {
            var s = r + t.length,
                a = n.length,
                c = Sa;
            return void 0 !== i && (i = x(i), c = Oa), Ea(o, c, (function(o, c) {
                var l;
                switch (xa(c, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return wa(e, 0, r);
                    case "'":
                        return wa(e, s);
                    case "<":
                        l = i[wa(c, 1, -1)];
                        break;
                    default:
                        var u = +c;
                        if (0 === u) return o;
                        if (u > a) {
                            var f = ma(u / 10);
                            return 0 === f ? o : f <= a ? void 0 === n[f - 1] ? xa(c, 1) : n[f - 1] + xa(c, 1) : o
                        }
                        l = n[u - 1]
                }
                return void 0 === l ? "" : l
            }))
        },
        ka = V("replace"),
        Ta = Math.max,
        La = Math.min,
        Ra = g([].concat),
        _a = g([].push),
        ja = g("".indexOf),
        za = g("".slice),
        Ma = "$0" === "a".replace(/./, "$0"),
        Ca = !!/./ [ka] && "" === /./ [ka]("a", "$0");
    ia("replace", (function(t, e, r) {
        var n = Ca ? "$" : "$0";
        return [function(t, r) {
            var n = y(this),
                i = null == t ? void 0 : ut(t, ka);
            return i ? rt(i, t, n, r) : rt(e, pr(n), t, r)
        }, function(t, i) {
            var o = tt(this),
                s = pr(t);
            if ("string" == typeof i && -1 === ja(i, n) && -1 === ja(i, "$<")) {
                var a = r(e, o, s, i);
                if (a.done) return a.value
            }
            var c = T(i);
            c || (i = pr(i));
            var l = o.global;
            if (l) {
                var u = o.unicode;
                o.lastIndex = 0
            }
            for (var f = [];;) {
                var h = ca(o, s);
                if (null === h) break;
                if (_a(f, h), !l) break;
                "" === pr(h[0]) && (o.lastIndex = sa(s, pe(o.lastIndex), u))
            }
            for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
                for (var b = pr((h = f[g])[0]), y = Ta(La(he(h.index), s.length), 0), m = [], x = 1; x < h.length; x++) _a(m, void 0 === (d = h[x]) ? d : String(d));
                var E = h.groups;
                if (c) {
                    var w = Ra([b], m, y, s);
                    void 0 !== E && _a(w, E);
                    var O = pr(ya(i, void 0, w))
                } else O = Aa(b, s, y, m, E, i);
                y >= v && (p += za(s, v, y) + O, v = y + b.length)
            }
            return p + za(s, v)
        }]
    }), !!u((function() {
        var t = /./;
        return t.exec = function() {
            var t = [];
            return t.groups = {
                a: "7"
            }, t
        }, "7" !== "".replace(t, "$<a>")
    })) || !Ma || Ca);
    var Na = function(t) {
        return Array.prototype.reduce.call(t, (function(t, e) {
            var r = e.name.match(/data-simplebar-(.+)/);
            if (r) {
                var n = r[1].replace(/\W+(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }));
                switch (e.value) {
                    case "true":
                        t[n] = !0;
                        break;
                    case "false":
                        t[n] = !1;
                        break;
                    case void 0:
                        t[n] = !0;
                        break;
                    default:
                        t[n] = e.value
                }
            }
            return t
        }), {})
    };

    function Wa(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }

    function Ia(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
    var Pa = null,
        Ba = null;

    function Da(t) {
        if (null === Pa) {
            var e = Ia(t);
            if (void 0 === e) return Pa = 0;
            var r = e.body,
                n = e.createElement("div");
            n.classList.add("simplebar-hide-scrollbar"), r.appendChild(n);
            var i = n.getBoundingClientRect().right;
            r.removeChild(n), Pa = i
        }
        return Pa
    }
    Ie && window.addEventListener("resize", (function() {
        Ba !== window.devicePixelRatio && (Ba = window.devicePixelRatio, Pa = null)
    }));
    var Fa = function() {
        function t(e, r) {
            var n = this;
            this.onScroll = function() {
                var t = Wa(n.el);
                n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0)
            }, this.scrollX = function() {
                n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1
            }, this.scrollY = function() {
                n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1
            }, this.onMouseEnter = function() {
                n.showScrollbar("x"), n.showScrollbar("y")
            }, this.onMouseMove = function(t) {
                n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function() {
                n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1
            }, this.onWindowResize = function() {
                n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar()
            }, this.hideScrollbars = function() {
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1)
            }, this.onPointerEvent = function(t) {
                var e, r;
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))))
            }, this.drag = function(e) {
                var r = n.axis[n.draggedAxis].track,
                    i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                    o = n.axis[n.draggedAxis].scrollbar,
                    s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                    a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                e.preventDefault(), e.stopPropagation();
                var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
                "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c
            }, this.onEndDrag = function(t) {
                var e = Ia(n.el),
                    r = Wa(n.el);
                t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function() {
                    e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null
                }))
            }, this.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Qi(this.recalculate.bind(this), 64), this.onMouseMove = Qi(this.onMouseMove.bind(this), 64), this.hideScrollbars = po(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = po(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), t.getRtlHelpers = Fo(t.getRtlHelpers), this.init())
        }
        t.getRtlHelpers = function() {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var r = e.firstElementChild;
            document.body.appendChild(r);
            var n = r.firstElementChild;
            r.scrollLeft = 0;
            var i = t.getOffset(r),
                o = t.getOffset(n);
            r.scrollLeft = 999;
            var s = t.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
                isRtlScrollbarInverted: i.left !== o.left
            }
        }, t.getOffset = function(t) {
            var e = t.getBoundingClientRect(),
                r = Ia(t),
                n = Wa(t);
            return {
                top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
                left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function() {
            t.instances.set(this.el, this), Ie && (this.initDOM(), this.setAccessibilityAttributes(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, e.initDOM = function() {
            var t = this;
            if (Array.prototype.filter.call(this.el.children, (function(e) {
                    return e.classList.contains(t.classNames.wrapper)
                })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"),
                    r = document.createElement("div");
                e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.setAccessibilityAttributes = function() {
            var t = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"), this.contentWrapperEl.setAttribute("role", "region"), this.contentWrapperEl.setAttribute("aria-label", t)
        }, e.initListeners = function() {
            var t = this,
                e = Wa(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
            var r = !1,
                n = null,
                i = e.ResizeObserver || ks;
            this.resizeObserver = new i((function() {
                r && null === n && (n = e.requestAnimationFrame((function() {
                    t.recalculate(), n = null
                })))
            })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function() {
                r = !0
            })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }, e.recalculate = function() {
            var t = Wa(this.el);
            this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.heightAutoObserverEl.offsetHeight <= 1,
                r = this.heightAutoObserverEl.offsetWidth <= 1,
                n = this.contentEl.offsetWidth,
                i = this.contentWrapperEl.offsetWidth,
                o = this.elStyles.overflowX,
                s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight,
                c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function(t) {
            if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
            var e, r = this.contentEl[this.axis[t].scrollSizeAttr],
                n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                i = n / r;
            return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
        }, e.positionScrollbar = function(e) {
            if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
                var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                    n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                    i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    o = this.axis[e].scrollbar,
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
                    c = ~~((n - o.size) * a);
                c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
            }
        }, e.toggleTrackVisibility = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el,
                r = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none"
        }, e.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }, e.onMouseMoveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function(t, e) {
            void 0 === e && (e = "y");
            var r = Ia(this.el),
                n = Wa(this.el),
                i = this.axis[e].scrollbar,
                o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.onTrackClick = function(t, e) {
            var r = this;
            if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
                var n = Wa(this.el);
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                    o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                    c = -1 === a ? s - o : s + o;
                ! function t() {
                    var i, o; - 1 === a ? s > c && (s -= r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t))
                }()
            }
        }, e.getContentElement = function() {
            return this.contentEl
        }, e.getScrollElement = function() {
            return this.contentWrapperEl
        }, e.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Da(this.el)
            } catch (t) {
                return Da(this.el)
            }
        }, e.removeListeners = function() {
            var t = this,
                e = Wa(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function() {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isWithinBounds = function(t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }, e.findChild = function(t, e) {
            var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, (function(t) {
                return r.call(t, e)
            }))[0]
        }, t
    }();
    return Fa.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, Fa.instances = new WeakMap, Fa.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(t) {
            "init" === t.getAttribute("data-simplebar") || Fa.instances.has(t) || new Fa(t, Na(t.attributes))
        }))
    }, Fa.removeObserver = function() {
        this.globalObserver.disconnect()
    }, Fa.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Fa.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
    }, Fa.handleMutations = function(t) {
        t.forEach((function(t) {
            Array.prototype.forEach.call(t.addedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), (function(t) {
                    "init" !== t.getAttribute("data-simplebar") && !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes))
                })))
            })), Array.prototype.forEach.call(t.removedNodes, (function(t) {
                1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function(t) {
                    Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t).unMount()
                })))
            }))
        }))
    }, Fa.getOptions = Na, Ie && Fa.initHtmlApi(), Fa
}));