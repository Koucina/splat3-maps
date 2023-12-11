! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(i, o, function(n) {
                return e[n]
            }.bind(null, o));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = "U2Ih")
}({
    U2Ih: function(e, n) {
        function t(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        new(function() {
            function e() {
                var n = this;
                ! function(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.isLogin, this._waitLoginSession().then((function() {
                    n.isLogin ? n._waitTD().then((function(e) {
                        n._setData(e)
                    })) : localStorage.removeItem("td/userTitle")
                }))
            }
            var n, i, o;
            return n = e, (i = [{
                key: "_waitLoginSession",
                value: function() {
                    var e = this;
                    return new Promise((function(n, t) {
                        window.NC3.alpsAccountReady ? window.Alps.Api.ensureInitialized().then((function(t) {
                            e.isLogin = window.Alps.Api.retrieveUserData(), n()
                        }), (function(e) {})) : document.addEventListener("alpsAccountReady", (function() {
                            window.Alps.Api.ensureInitialized().then((function(t) {
                                e.isLogin = window.Alps.Api.retrieveUserData(), n()
                            }), (function(e) {}))
                        }), !1)
                    }))
                }
            }, {
                key: "_waitTD",
                value: function() {
                    var e = this;
                    return new Promise((function(n, t) {
                        e.timeoutId = setTimeout((function() {
                            console.info("[UserTitle] td.js is not found, and timeout."), n(null)
                        }), 1e4), window.NCOMMON = window.NCOMMON || {}, window.NCOMMON.tdCallbacks = window.NCOMMON.tdCallbacks || [], window.NCOMMON.tdCallbacks.push((function(t) {
                            clearTimeout(e.timeoutId), t.fetchUserTitle((function(e) {
                                n(e)
                            }))
                        }))
                    }))
                }
            }, {
                key: "_setData",
                value: function(e) {
                    var n = "";
                    e && (n = Array.isArray(e) ? e.join(",") : e), localStorage.setItem("td/userTitle", n)
                }
            }]) && t(n.prototype, i), o && t(n, o), e
        }())
    }
});