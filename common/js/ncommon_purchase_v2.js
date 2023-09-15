!(function() {
    var isIOS = /iP(hone|(o|a)d)/.test(navigator.userAgent);
    var isSupportTouch = "ontouchend" in document;

    function getWindowSize() {
        var w = 0;
        var h = 0;
        if (typeof window.innerWidth === "number") {
            w = Math.min(window.innerWidth, document.documentElement.clientWidth);
            h = window.innerHeight;
        } else {
            w = document.documentElement.clientWidth;
            h = document.documentElement.clientHeight;
        }
        return {
            w: w,
            h: h
        };
    }

    function getScrollTop() {
        var st = 0;
        if ("scrollingElement" in document) {
            if (document.scrollingElement) {
                st = document.scrollingElement.scrollTop;
            }
        } else {
            st = document.body.scrollTop || document.documentElement.scrollTop;
        }
        return st;
    }

    function getDocumentHeight() {
        return Math.max(
            window.document.body.scrollHeight,
            window.document.documentElement.scrollHeight,
            window.document.body.offsetHeight,
            window.document.documentElement.offsetHeight,
            window.document.body.clientHeight,
            window.document.documentElement.clientHeight
        );
    }

    function getDocumentOffset(elm) {
        var rect = elm.getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var top = rect.top + scrollTop;
        return top;
    }

    var _browser = (function() {
        var _passiveSupported = false;
        var _passiveOption;
        try {
            global.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", {
                    get: function() {
                        _passiveSupported = true;
                    }
                })
            );
        } catch (err) {}
        _passiveOption = _passiveSupported ? {
            passive: false
        } : false;

        return {
            passiveSupported: _passiveSupported,
            passiveOption: _passiveOption
        };
    })();

    var Scroll = (function() {
        var Scroll = function() {
            if (!(this instanceof Scroll)) {
                return new Scroll();
            }
            this._listeners = {};
            this._t = 0;
            this._b = 0;
            this._dh = getDocumentHeight();
            this._tick = false;

            this._handler = function() {
                var self = this;
                if (!self._tick) {
                    requestAnimationFrame(function() {
                        self._tick = false;
                        for (var id in self._listeners) {
                            self._size = getWindowSize();
                            self._t = getScrollTop();
                            self._b = self._t + self._size.h;
                            self._dh = getDocumentHeight();
                            self._listeners[id].callback.call(self._listeners[id], self._t, self._b, self._dh);
                        }
                    });
                    self._tick = true;
                }
            }.bind(this);
            if (isIOS) {
                window.addEventListener(
                    "orientationchange",
                    function() {
                        setTimeout(this._handler, 400);
                    },
                    _browser.passiveOption
                );
                window.addEventListener("scroll", this._handler, _browser.passiveOption);
            } else {
                window.addEventListener("resize", this._handler, _browser.passiveOption);
                window.addEventListener("scroll", this._handler, _browser.passiveOption);
            }
            if (isSupportTouch) {
                window.addEventListener("touchmovie", this._handler, _browser.passiveOption);
            }
        };
        Scroll.prototype.add = function(func, init) {
            if (typeof func === "function") {
                this._id = "ncpscroll";
                this._size = getWindowSize();
                this._t = getScrollTop();
                this._b = this._t + this._size.h;
                this._dh = getDocumentHeight();
                this._listeners[this._id] = {
                    callback: func
                };
                if (init === undefined || init) {
                    func.call(this._listeners[this._id], this._t, this._b, this._dh);
                }
            }
            return this._id;
        };

        Scroll.prototype.trigger = function() {
            if (this._listeners !== null) {
                this._size = getWindowSize();
                this._t = getScrollTop();
                this._b = this._t + this._size.h;
                this._dh = getDocumentHeight();
                for (var id in this._listeners) {
                    this._listeners[id].callback.call(this._listeners[id], this._t, this._b, this._dh);
                }
            }
        };

        return Scroll;
    })();

    var Purchase = function() {};

    Purchase.prototype.init = function() {
        this.target = document.getElementById("ncommon-purchase-v2");
        if (!this.target) return;
        this.btn = this.target.querySelector(".ncommon-purchase-v2__btn");
        this.a = this.btn.getElementsByTagName("div")[0];
        this.isFullScreen = this.target.getAttribute("data-ncp-full") === "true" ? true : false;
        this.isVisibleFixed = this.target.getAttribute("data-ncp-visible") === "true" ? true : false;
        this.isVisible = false;
        this.isInit = false;
        this.hideTragetName = this.target.getAttribute("data-ncp-target");
        this.isloadedShown = this.target.getAttribute("data-ncp-show") === "false" ? false : true;
        if (typeof this.target.getAttribute("data-ncp-show") === "undefined") {
            this.isloadedShown = true;
        } else if (this.target.getAttribute("data-ncp-show") == null) {
            this.isloadedShown = true;
        }
        if (typeof this.target.getAttribute("data-ncp-visible") === "undefined") {
            this.isVisibleFixed = false;
        } else if (this.target.getAttribute("data-ncp-visible") == null) {
            this.isVisibleFixed = false;
        }

        if (this.hideTragetName !== null) {
            this.hideTraget = document.querySelector(this.hideTragetName);
        }

        var self = this;

        this.scroll = new Scroll();

        var offset = 100;
        this.scroll.add(function(t, b, dh) {
            if (!self.isInit) return;
            if (self.isVisibleFixed) {} else {
                if (b - t === dh) {
                    self.target.classList.add("is-visible");
                    self.target.classList.add("is-shown");
                }

                if (b - dh === 0) {} else {
                    if (self.hideTragetName !== null) {
                        offset = getDocumentOffset(self.hideTraget);
                        if (b > offset) {
                            if (!self.isVisibleFixed) {
                                self.target.classList.remove("is-shown");
                            }
                        } else {
                            self.target.classList.add("is-visible");
                            self.target.classList.add("is-shown");
                        }
                    } else {
                        if (b > dh - offset) {
                            if (!self.isVisibleFixed) {
                                self.target.classList.remove("is-shown");
                            }
                        } else {
                            self.target.classList.add("is-visible");
                            self.target.classList.add("is-shown");
                        }
                        if (t === 0) {
                            self.target.classList.add("is-visible");
                            self.target.classList.add("is-shown");
                        }
                    }
                }
            }
        });

        this.btn.addEventListener("transitionend", this.onTransitionEnd.bind(this), false);
    };

    Purchase.prototype.getLoadedShown = function() {
        return this.isloadedShown;
    };

    Purchase.prototype.show = function() {
        //this.scroll.trigger();
        this.isInit = true;

        var size = getWindowSize();
        var t = getScrollTop();
        var b = t + size.h;
        var dh = getDocumentHeight();

        if (this.hideTragetName !== null) {
            var off = getDocumentOffset(this.hideTraget);
            if (b <= off) {
                this.target.classList.add("is-visible");
                this.target.classList.add("is-shown");
            }
        } else if (this.isFullScreen) {
            this.target.classList.add("is-visible");
            this.target.classList.add("is-shown");
        } else {
            if (b <= dh - 100) {
                this.target.classList.add("is-visible");
                this.target.classList.add("is-shown");
            } else if (b = dh) {
                this.target.classList.add("is-visible");
                this.target.classList.add("is-shown");
                this.target.classList.add("is-show");
            }
        }
    };

    Purchase.prototype.forcedDisplay = function() {
        if (this.target.classList.contains("is-visible")) return;
        if (this.target.classList.contains("is-shown")) return;
        this.target.classList.add("is-visible");
        this.target.classList.add("is-shown");
    };

    Purchase.prototype.onTransitionEnd = function(e) {
        if (
            (e.target === this.btn && e.propertyName === "transform") ||
            (e.target === this.a && e.propertyName === "transform")
        ) {
            if (this.isVisible === true) {
                if (!this.target.classList.contains("is-shown")) {
                    this.target.classList.remove("is-visible");
                    this.isVisible = false;
                } else {
                    this.isVisible = true;
                }
            } else {
                this.isVisible = true;
            }
        }
    };

    Purchase.prototype.hide = function() {
        if (!this.isVisibleFixed) return;
        if (this.target.classList.contains("is-shown")) {
            this.target.classList.remove("is-shown");
            this.btn.addEventListener("transitionend", this.onTransitionEnd.bind(this), false);
        }
    };

    Purchase.prototype.checkWindow = function() {
        var ua = navigator.userAgent.toLowerCase();
        var android = ua.match(/android/);
        var androidMobile = android && ua.match(/mobile/);
        var androidTablet = android && !ua.match(/mobile/);
        var ipad = ua.match(/ipad/);
        var ipod = ua.match(/ipod/);
        var iphone = ua.match(/iphone/);
        var mac = ua.match(/macintosh/);
        var n_switch = ua.match(/nintendo switch/);
        var n_tablet = ua.match(/wiiu/) || n_switch;
        var n_sp = ua.match(/3ds|2ds/);
        var game = n_tablet || n_sp;
        var mobile = androidMobile || iphone || ipod || game;
        var tablet = androidTablet || ipad;
        var vwFlag = this.target.dataset.ncpVw ? this.target.dataset.ncpVw : "";
        // var vwFlag = vwData.split(",");
        var modeFlag = this.target.dataset.ncpMode;
        // console.log(vwFlag)

        function btnResize(deviceWidth) {
            var target = document.getElementById("ncommon-purchase-v2");
            var windowSize = window.outerWidth;
            target.style.transform = "scale(" + deviceWidth / windowSize + ")";
        };
        if (tablet || (mac && 'ontouchend' in document)) {
            document.getElementsByTagName("html")[0].classList.add("ncommon-purchase-v3-tab");
            if ((modeFlag === undefined || modeFlag === "responsive") && /tb-fixed/.test(vwFlag) === true) {
                // console.log("responsive")
                btnResize(1194);
                window.addEventListener("orientationchange", function() {
                    setTimeout(function() {
                        btnResize(1194);
                    }, 200);
                });
            } else if ((modeFlag === "pc" || modeFlag === "sp")) {
                // console.log("not responsive")
                if (/tb-none-fixed/.test(vwFlag) === true) return;
                btnResize(1194);
                window.addEventListener("orientationchange", function() {
                    setTimeout(function() {
                        btnResize(1194);
                    }, 200);
                });
            }
        } else if (mobile) {
            if (/sp-fixed/.test(vwFlag) === true) {
                btnResize(390);
                window.addEventListener("orientationchange", function() {
                    setTimeout(function() {
                        btnResize(390);
                    }, 200);
                });
            }
        }
    };

    window.ncPurchase = new Purchase();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function() {
            window.ncPurchase.init();
            window.ncPurchase.checkWindow();
        });
    } else {
        window.ncPurchase.init();
        window.ncPurchase.checkWindow();
    }

    window.addEventListener("load", function() {
        if (window.ncPurchase.getLoadedShown()) {
            window.ncPurchase.show();
        }
    });
})();