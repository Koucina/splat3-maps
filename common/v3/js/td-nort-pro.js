! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = "SKjD")
}({
    "5tEY": function(e, t, n) {
        "use strict";
        t.a = {
            constructorProps: {
                host: "tokyo.in.treasuredata.com",
                writeKey: "89/4a021ade2647ee61e82a10168aa72873a79d5bf3",
                database: "wt_ncl_prod_web",
                cdpHost: "cdp-tokyo.in.treasuredata.com",
                startInSignedMode: !0
            },
            tableName: "www_prod",
            tokenBanner: "3350ef0d-19ee-4e1e-84df-009c6bfe2f4b"
        }
    },
    SKjD: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("5tEY"),
            i = n("xJNa");
        Object(i.a)(r.a, !1)
    },
    YVX0: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (!(location.hostname.indexOf(".nintendo.co.jp") >= 0)) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                console.log.apply(console, t)
            }
        }
    },
    b2Lp: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = {},
                t = document.cookie;
            if ("" !== t)
                for (var n = t.split(";"), r = 0; r < n.length; r++) {
                    var i = n[r].split("="),
                        a = i[0].split(" ").join(""),
                        o = i[1];
                    e[a] = decodeURIComponent(o)
                }
            return e
        }
    },
    xJNa: function(e, t, n) {
        "use strict";
        var r = n("b2Lp"),
            i = n("YVX0");

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var o = "df6dd232-b2af-4414-958d-37e7d4769e1a",
            s = "fdd0cceb-e54e-4fbb-839d-1d0e9c9b143b",
            c = {
                fetchUserOwnTitles: ["/index.html", "/software/switch/index.html", "/software/3ds/index.html"],
                dontInitialTrackRT: ["/software/feature/recommend.html"]
            },
            u = location.pathname.split("-tdtest").join("");
        u.indexOf(".html") <= 0 && (u += "index.html");
        var l = function() {
                for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.forEach((function(t) {
                    for (var n in t) e[n] = t[n]
                })), e
            },
            d = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._config = t, this._td = new window.Treasure(this._config.constructorProps), this._rtEnabled = n, this._waitAlps(this._ready.bind(this))
                }
                var t, n, d;
                return t = e, (n = [{
                    key: "_waitAlps",
                    value: function(e) {
                        window.NC3.alpsAccountReady ? window.Alps.Api.ensureInitialized().then((function(t) {
                            e()
                        }), (function(e) {})) : document.addEventListener("alpsAccountReady", (function() {
                            window.Alps.Api.ensureInitialized().then((function(t) {
                                e()
                            }), (function(e) {}))
                        }), !1)
                    }
                }, {
                    key: "_ready",
                    value: function() {
                        var e = this;
                        this._makeBaseSendData((function() {
                            e._trackInitialPage((function() {
                                e._executeCallbacks()
                            }))
                        }))
                    }
                }, {
                    key: "_makeBaseSendData",
                    value: function(e) {
                        var t = this;
                        this._baseSendData = {
                            td_ip: "xxx",
                            rt_uid: Object(r.a)()["_rt.uid"]
                        }, this._td.set("$global", "td_global_id", "td_global_id"), this._isLoggedIn = window.Alps.Api.isLoggedIn(), window.Alps.Api.retrieveUserData().then((function(n) {
                            t._userData = n.userData._data, t._naid = t._userData.id, "JP" === t._userData.country && (t._baseSendData = l(t._baseSendData, {
                                gender: t._userData.gender,
                                country: t._userData.country,
                                language: t._userData.language,
                                emailoptin: t._userData.emailOptedIn,
                                is_child: t._userData.isChild,
                                naid: t._userData.id
                            })), e()
                        }), (function() {
                            e()
                        }))
                    }
                }, {
                    key: "_executeCallbacks",
                    value: function() {
                        var e = this;
                        window.NCOMMON = window.NCOMMON || {}, window.NCOMMON.tdCallbacks && window.NCOMMON.tdCallbacks.forEach && window.NCOMMON.tdCallbacks.forEach((function(t) {
                            return t(e)
                        })), window.NCOMMON.tdCallbacks = {
                            push: function(t) {
                                t(e)
                            }
                        }
                    }
                }, {
                    key: "_needFetchUserOwnTitles",
                    value: function() {
                        if (c.fetchUserOwnTitles.indexOf(u) < 0) return Object(i.a)("[TDHelper] fetch user titles: skip - not target url"), !1;
                        try {
                            var e = "td-fetch-user-own-titles";
                            if (1 === parseInt(window.sessionStorage.getItem(e))) return Object(i.a)("[TDHelper] fetch user titles: skip - fetched once"), !1;
                            window.sessionStorage.setItem(e, 1)
                        } catch (e) {
                            return console.error("[TDHelper] fetch user titles: sessionStorage error", e), !1
                        }
                        return !0
                    }
                }, {
                    key: "_trackInitialPage",
                    value: function(e) {
                        var t = this;
                        if (this._rtEnabled)
                            if (this._isLoggedIn)
                                if (this._userData) {
                                    if (this._naid) {
                                        var n = [this._config.tokenBanner];
                                        this._needFetchUserOwnTitles() && (n.push(s), Object(i.a)("[TDHelper] fetch user own titles: do")), this._fetchUserSegments(n, (function(n) {
                                            if (n && n.length > 0) {
                                                Object(i.a)("[TDHelper] Target segment", n);
                                                var r = (n[0].values || []).join(",");
                                                if (c.dontInitialTrackRT.indexOf(u) >= 0 ? Object(i.a)("[TDHelper] skip initial TD tracking") : t._trackTD({
                                                        segment_ids: r
                                                    }), n[1]) {
                                                    var a = (n[1].attributes.title_nsuids || []).concat(n[1].attributes.aoc_nsuids || []),
                                                        o = {};
                                                    a.forEach((function(e, t) {
                                                        o["item".concat(t + 1, "_code")] = e
                                                    }))
                                                }
                                                e()
                                            } else Object(i.a)("[TDHelper] No target segment"), t._trackTD(), e()
                                        }), (function() {
                                            t._trackTD(), e()
                                        }))
                                    }
                                } else this._trackTD(), e();
                        else this._trackTD(), e();
                        else this._trackTD(), e()
                    }
                }, {
                    key: "_trackRT",
                    value: function(e) {}
                }, {
                    key: "_trackTD",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = l(this._baseSendData, e);
                        Object(i.a)("[TDHelper] _trackTD", t), this._td.trackEvent(this._config.tableName, t)
                    }
                }, {
                    key: "_fetchUserSegments",
                    value: function(e, t, n) {
                        this._td.fetchUserSegments({
                            audienceToken: e,
                            keys: {
                                naid: this._naid
                            }
                        }, (function(e) {
                            Object(i.a)("[TDHelper] _fetchUserSegments: Success", e), t && t(e)
                        }), (function(e) {
                            console.error("[TDHelper] _fetchUserSegments: Error", e), n && n()
                        }))
                    }
                }, {
                    key: "trackClick",
                    value: function(e) {
                        e && ("" + e != "" + (e = parseInt(e)) && (e = ""), Object(i.a)("[TDHelper] trackClick", e), this._trackTD({
                            event: "click",
                            productnsuid: e
                        }), window.Rtoaster.init(window.RT_INIT_ID), window.Rtoaster.item(e))
                    }
                }, {
                    key: "fetchRecomended",
                    value: function(e) {
                        var t = this,
                            n = [o];
                        this._fetchUserSegments(n, (function(n) {
                            try {
                                var r = n[0].attributes.dt5_ns_uids;
                                if (!r) return e(null);
                                t._trackTD({
                                    recommended_nsuid: r.join(",")
                                }), e(r)
                            } catch (t) {
                                console.error("[TDHelper] segments parse error", t), e(null)
                            }
                        }), (function() {
                            e(null)
                        }))
                    }
                }, {
                    key: "fetchUserTitle",
                    value: function(e) {
                        var t = this,
                            n = [s];
                        this._fetchUserSegments(n, (function(n) {
                            try {
                                var r = (n[0].attributes.title_nsuids || []).concat(n[0].attributes.aoc_nsuids || []);
                                if (!r) return e(null);
                                t._trackTD({
                                    usertitles_nsuid: r.join(",")
                                }), e(r)
                            } catch (t) {
                                console.error("[TDHelper] segments parse error", t), e(null)
                            }
                        }), (function() {
                            e(null)
                        }))
                    }
                }]) && a(t.prototype, n), d && a(t, d), e
            }();
        t.a = function(e, t) {
            (function() {
                ! function(e, t) {
                    if (void 0 === t[e]) {
                        t[e] = function() {
                            t[e].clients.push(this), this._init = [Array.prototype.slice.call(arguments)]
                        }, t[e].clients = [];
                        for (var n = function(e) {
                                return function() {
                                    return this["_" + e] = this["_" + e] || [], this["_" + e].push(Array.prototype.slice.call(arguments)), this
                                }
                            }, r = ["addRecord", "fetchGlobalID", "set", "trackEvent", "trackPageview", "trackClicks", "ready", "fetchUserSegments"], i = 0; i < r.length; i++) {
                            var a = r[i];
                            t[e].prototype[a] = n(a)
                        }
                        var o = document.createElement("script");
                        o.type = "text/javascript", o.async = !0, o.src = ("https:" === document.location.protocol ? "https:" : "http:") + "//cdn.treasuredata.com/sdk/2.1.0/td.min.js";
                        var s = document.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(o, s)
                    }
                }("Treasure", this)
            }).apply(window);
            ! function n() {
                if (window.Treasure) return new d(e, t);
                setTimeout(n, 300)
            }()
        }
    }
});