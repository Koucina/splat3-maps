/******/
(function() { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        296:
            /***/
            (function(module) {

                /**
                 * Returns a function, that, as long as it continues to be invoked, will not
                 * be triggered. The function will be called after it stops being called for
                 * N milliseconds. If `immediate` is passed, trigger the function on the
                 * leading edge, instead of the trailing. The function also has a property 'clear' 
                 * that is a function which will clear the timer to prevent previously scheduled executions. 
                 *
                 * @source underscore.js
                 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
                 * @param {Function} function to wrap
                 * @param {Number} timeout in ms (`100`)
                 * @param {Boolean} whether to execute at the beginning (`false`)
                 * @api public
                 */
                function debounce(func, wait, immediate) {
                    var timeout, args, context, timestamp, result;
                    if (null == wait) wait = 100;

                    function later() {
                        var last = Date.now() - timestamp;

                        if (last < wait && last >= 0) {
                            timeout = setTimeout(later, wait - last);
                        } else {
                            timeout = null;
                            if (!immediate) {
                                result = func.apply(context, args);
                                context = args = null;
                            }
                        }
                    };

                    var debounced = function() {
                        context = this;
                        args = arguments;
                        timestamp = Date.now();
                        var callNow = immediate && !timeout;
                        if (!timeout) timeout = setTimeout(later, wait);
                        if (callNow) {
                            result = func.apply(context, args);
                            context = args = null;
                        }

                        return result;
                    };

                    debounced.clear = function() {
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                    };

                    debounced.flush = function() {
                        if (timeout) {
                            result = func.apply(context, args);
                            context = args = null;

                            clearTimeout(timeout);
                            timeout = null;
                        }
                    };

                    return debounced;
                };

                // Adds compatibility for ES modules
                debounce.debounce = debounce;

                module.exports = debounce;


                /***/
            }),

        /***/
        187:
            /***/
            (function(module) {

                "use strict";
                // Copyright Joyent, Inc. and other Node contributors.
                //
                // Permission is hereby granted, free of charge, to any person obtaining a
                // copy of this software and associated documentation files (the
                // "Software"), to deal in the Software without restriction, including
                // without limitation the rights to use, copy, modify, merge, publish,
                // distribute, sublicense, and/or sell copies of the Software, and to permit
                // persons to whom the Software is furnished to do so, subject to the
                // following conditions:
                //
                // The above copyright notice and this permission notice shall be included
                // in all copies or substantial portions of the Software.
                //
                // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
                // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
                // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
                // USE OR OTHER DEALINGS IN THE SOFTWARE.



                var R = typeof Reflect === 'object' ? Reflect : null
                var ReflectApply = R && typeof R.apply === 'function' ?
                    R.apply :
                    function ReflectApply(target, receiver, args) {
                        return Function.prototype.apply.call(target, receiver, args);
                    }

                var ReflectOwnKeys
                if (R && typeof R.ownKeys === 'function') {
                    ReflectOwnKeys = R.ownKeys
                } else if (Object.getOwnPropertySymbols) {
                    ReflectOwnKeys = function ReflectOwnKeys(target) {
                        return Object.getOwnPropertyNames(target)
                            .concat(Object.getOwnPropertySymbols(target));
                    };
                } else {
                    ReflectOwnKeys = function ReflectOwnKeys(target) {
                        return Object.getOwnPropertyNames(target);
                    };
                }

                function ProcessEmitWarning(warning) {
                    if (console && console.warn) console.warn(warning);
                }

                var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
                    return value !== value;
                }

                function EventEmitter() {
                    EventEmitter.init.call(this);
                }
                module.exports = EventEmitter;
                module.exports.once = once;

                // Backwards-compat with node 0.10.x
                EventEmitter.EventEmitter = EventEmitter;

                EventEmitter.prototype._events = undefined;
                EventEmitter.prototype._eventsCount = 0;
                EventEmitter.prototype._maxListeners = undefined;

                // By default EventEmitters will print a warning if more than 10 listeners are
                // added to it. This is a useful default which helps finding memory leaks.
                var defaultMaxListeners = 10;

                function checkListener(listener) {
                    if (typeof listener !== 'function') {
                        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
                    }
                }

                Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
                    enumerable: true,
                    get: function() {
                        return defaultMaxListeners;
                    },
                    set: function(arg) {
                        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
                            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
                        }
                        defaultMaxListeners = arg;
                    }
                });

                EventEmitter.init = function() {

                    if (this._events === undefined ||
                        this._events === Object.getPrototypeOf(this)._events) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    }

                    this._maxListeners = this._maxListeners || undefined;
                };

                // Obviously not all Emitters should be limited to 10. This function allows
                // that to be increased. Set to zero for unlimited.
                EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
                        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
                    }
                    this._maxListeners = n;
                    return this;
                };

                function _getMaxListeners(that) {
                    if (that._maxListeners === undefined)
                        return EventEmitter.defaultMaxListeners;
                    return that._maxListeners;
                }

                EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                    return _getMaxListeners(this);
                };

                EventEmitter.prototype.emit = function emit(type) {
                    var args = [];
                    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
                    var doError = (type === 'error');

                    var events = this._events;
                    if (events !== undefined)
                        doError = (doError && events.error === undefined);
                    else if (!doError)
                        return false;

                    // If there is no 'error' event listener then throw.
                    if (doError) {
                        var er;
                        if (args.length > 0)
                            er = args[0];
                        if (er instanceof Error) {
                            // Note: The comments on the `throw` lines are intentional, they show
                            // up in Node's output if this results in an unhandled exception.
                            throw er; // Unhandled 'error' event
                        }
                        // At least give some kind of context to the user
                        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
                        err.context = er;
                        throw err; // Unhandled 'error' event
                    }

                    var handler = events[type];

                    if (handler === undefined)
                        return false;

                    if (typeof handler === 'function') {
                        ReflectApply(handler, this, args);
                    } else {
                        var len = handler.length;
                        var listeners = arrayClone(handler, len);
                        for (var i = 0; i < len; ++i)
                            ReflectApply(listeners[i], this, args);
                    }

                    return true;
                };

                function _addListener(target, type, listener, prepend) {
                    var m;
                    var events;
                    var existing;

                    checkListener(listener);

                    events = target._events;
                    if (events === undefined) {
                        events = target._events = Object.create(null);
                        target._eventsCount = 0;
                    } else {
                        // To avoid recursion in the case that type === "newListener"! Before
                        // adding it to the listeners, first emit "newListener".
                        if (events.newListener !== undefined) {
                            target.emit('newListener', type,
                                listener.listener ? listener.listener : listener);

                            // Re-assign `events` because a newListener handler could have caused the
                            // this._events to be assigned to a new object
                            events = target._events;
                        }
                        existing = events[type];
                    }

                    if (existing === undefined) {
                        // Optimize the case of one listener. Don't need the extra array object.
                        existing = events[type] = listener;
                        ++target._eventsCount;
                    } else {
                        if (typeof existing === 'function') {
                            // Adding the second element, need to change to array.
                            existing = events[type] =
                                prepend ? [listener, existing] : [existing, listener];
                            // If we've already got an array, just append.
                        } else if (prepend) {
                            existing.unshift(listener);
                        } else {
                            existing.push(listener);
                        }

                        // Check for listener leak
                        m = _getMaxListeners(target);
                        if (m > 0 && existing.length > m && !existing.warned) {
                            existing.warned = true;
                            // No error code for this since it is a Warning
                            // eslint-disable-next-line no-restricted-syntax
                            var w = new Error('Possible EventEmitter memory leak detected. ' +
                                existing.length + ' ' + String(type) + ' listeners ' +
                                'added. Use emitter.setMaxListeners() to ' +
                                'increase limit');
                            w.name = 'MaxListenersExceededWarning';
                            w.emitter = target;
                            w.type = type;
                            w.count = existing.length;
                            ProcessEmitWarning(w);
                        }
                    }

                    return target;
                }

                EventEmitter.prototype.addListener = function addListener(type, listener) {
                    return _addListener(this, type, listener, false);
                };

                EventEmitter.prototype.on = EventEmitter.prototype.addListener;

                EventEmitter.prototype.prependListener =
                    function prependListener(type, listener) {
                        return _addListener(this, type, listener, true);
                    };

                function onceWrapper() {
                    if (!this.fired) {
                        this.target.removeListener(this.type, this.wrapFn);
                        this.fired = true;
                        if (arguments.length === 0)
                            return this.listener.call(this.target);
                        return this.listener.apply(this.target, arguments);
                    }
                }

                function _onceWrap(target, type, listener) {
                    var state = {
                        fired: false,
                        wrapFn: undefined,
                        target: target,
                        type: type,
                        listener: listener
                    };
                    var wrapped = onceWrapper.bind(state);
                    wrapped.listener = listener;
                    state.wrapFn = wrapped;
                    return wrapped;
                }

                EventEmitter.prototype.once = function once(type, listener) {
                    checkListener(listener);
                    this.on(type, _onceWrap(this, type, listener));
                    return this;
                };

                EventEmitter.prototype.prependOnceListener =
                    function prependOnceListener(type, listener) {
                        checkListener(listener);
                        this.prependListener(type, _onceWrap(this, type, listener));
                        return this;
                    };

                // Emits a 'removeListener' event if and only if the listener was removed.
                EventEmitter.prototype.removeListener =
                    function removeListener(type, listener) {
                        var list, events, position, i, originalListener;

                        checkListener(listener);

                        events = this._events;
                        if (events === undefined)
                            return this;

                        list = events[type];
                        if (list === undefined)
                            return this;

                        if (list === listener || list.listener === listener) {
                            if (--this._eventsCount === 0)
                                this._events = Object.create(null);
                            else {
                                delete events[type];
                                if (events.removeListener)
                                    this.emit('removeListener', type, list.listener || listener);
                            }
                        } else if (typeof list !== 'function') {
                            position = -1;

                            for (i = list.length - 1; i >= 0; i--) {
                                if (list[i] === listener || list[i].listener === listener) {
                                    originalListener = list[i].listener;
                                    position = i;
                                    break;
                                }
                            }

                            if (position < 0)
                                return this;

                            if (position === 0)
                                list.shift();
                            else {
                                spliceOne(list, position);
                            }

                            if (list.length === 1)
                                events[type] = list[0];

                            if (events.removeListener !== undefined)
                                this.emit('removeListener', type, originalListener || listener);
                        }

                        return this;
                    };

                EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

                EventEmitter.prototype.removeAllListeners =
                    function removeAllListeners(type) {
                        var listeners, events, i;

                        events = this._events;
                        if (events === undefined)
                            return this;

                        // not listening for removeListener, no need to emit
                        if (events.removeListener === undefined) {
                            if (arguments.length === 0) {
                                this._events = Object.create(null);
                                this._eventsCount = 0;
                            } else if (events[type] !== undefined) {
                                if (--this._eventsCount === 0)
                                    this._events = Object.create(null);
                                else
                                    delete events[type];
                            }
                            return this;
                        }

                        // emit removeListener for all listeners on all events
                        if (arguments.length === 0) {
                            var keys = Object.keys(events);
                            var key;
                            for (i = 0; i < keys.length; ++i) {
                                key = keys[i];
                                if (key === 'removeListener') continue;
                                this.removeAllListeners(key);
                            }
                            this.removeAllListeners('removeListener');
                            this._events = Object.create(null);
                            this._eventsCount = 0;
                            return this;
                        }

                        listeners = events[type];

                        if (typeof listeners === 'function') {
                            this.removeListener(type, listeners);
                        } else if (listeners !== undefined) {
                            // LIFO order
                            for (i = listeners.length - 1; i >= 0; i--) {
                                this.removeListener(type, listeners[i]);
                            }
                        }

                        return this;
                    };

                function _listeners(target, type, unwrap) {
                    var events = target._events;

                    if (events === undefined)
                        return [];

                    var evlistener = events[type];
                    if (evlistener === undefined)
                        return [];

                    if (typeof evlistener === 'function')
                        return unwrap ? [evlistener.listener || evlistener] : [evlistener];

                    return unwrap ?
                        unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
                }

                EventEmitter.prototype.listeners = function listeners(type) {
                    return _listeners(this, type, true);
                };

                EventEmitter.prototype.rawListeners = function rawListeners(type) {
                    return _listeners(this, type, false);
                };

                EventEmitter.listenerCount = function(emitter, type) {
                    if (typeof emitter.listenerCount === 'function') {
                        return emitter.listenerCount(type);
                    } else {
                        return listenerCount.call(emitter, type);
                    }
                };

                EventEmitter.prototype.listenerCount = listenerCount;

                function listenerCount(type) {
                    var events = this._events;

                    if (events !== undefined) {
                        var evlistener = events[type];

                        if (typeof evlistener === 'function') {
                            return 1;
                        } else if (evlistener !== undefined) {
                            return evlistener.length;
                        }
                    }

                    return 0;
                }

                EventEmitter.prototype.eventNames = function eventNames() {
                    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
                };

                function arrayClone(arr, n) {
                    var copy = new Array(n);
                    for (var i = 0; i < n; ++i)
                        copy[i] = arr[i];
                    return copy;
                }

                function spliceOne(list, index) {
                    for (; index + 1 < list.length; index++)
                        list[index] = list[index + 1];
                    list.pop();
                }

                function unwrapListeners(arr) {
                    var ret = new Array(arr.length);
                    for (var i = 0; i < ret.length; ++i) {
                        ret[i] = arr[i].listener || arr[i];
                    }
                    return ret;
                }

                function once(emitter, name) {
                    return new Promise(function(resolve, reject) {
                        function errorListener(err) {
                            emitter.removeListener(name, resolver);
                            reject(err);
                        }

                        function resolver() {
                            if (typeof emitter.removeListener === 'function') {
                                emitter.removeListener('error', errorListener);
                            }
                            resolve([].slice.call(arguments));
                        };

                        eventTargetAgnosticAddListener(emitter, name, resolver, {
                            once: true
                        });
                        if (name !== 'error') {
                            addErrorHandlerIfEventEmitter(emitter, errorListener, {
                                once: true
                            });
                        }
                    });
                }

                function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
                    if (typeof emitter.on === 'function') {
                        eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
                    }
                }

                function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
                    if (typeof emitter.on === 'function') {
                        if (flags.once) {
                            emitter.once(name, listener);
                        } else {
                            emitter.on(name, listener);
                        }
                    } else if (typeof emitter.addEventListener === 'function') {
                        // EventTarget does not have `error` event semantics like Node
                        // EventEmitters, we do not listen for `error` events here.
                        emitter.addEventListener(name, function wrapListener(arg) {
                            // IE does not have builtin `{ once: true }` support so we
                            // have to do it manually.
                            if (flags.once) {
                                emitter.removeEventListener(name, wrapListener);
                            }
                            listener(arg);
                        });
                    } else {
                        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
                    }
                }


                /***/
            })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/compat get default export */
    /******/
    ! function() {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function() {
                    return module['default'];
                } :
                /******/
                function() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, {
                a: getter
            });
            /******/
            return getter;
            /******/
        };
        /******/
    }();
    /******/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    ! function() {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = function(exports, definition) {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    }();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    ! function() {
        /******/
        __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        /******/
    }();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    ! function() {
        "use strict";

        // EXTERNAL MODULE: ./node_modules/events/events.js
        var events = __webpack_require__(187);
        var events_default = /*#__PURE__*/ __webpack_require__.n(events);
        // EXTERNAL MODULE: ./node_modules/debounce/index.js
        var debounce = __webpack_require__(296);
        var debounce_default = /*#__PURE__*/ __webpack_require__.n(debounce);; // CONCATENATED MODULE: ./src/js/modules/ua.js
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Ua = _createClass(function Ua() {
            _classCallCheck(this, Ua);

            var ua = UAParser();
            this.isMobile = isMobile.any === true;
            this.isChrome = ua.browser.name === 'Chrome';
            this.isSafari = ua.browser.name === 'Safari';
            this.isMobileSafari = ua.browser.name === 'Mobile Safari';
            this.isFirefox = ua.browser.name === 'Firefox';
            this.isIE = ua.browser.name === 'IE';
        });

        var ua = new Ua();
        /* harmony default export */
        var modules_ua = (ua);; // CONCATENATED MODULE: ./src/js/modules/mediaQuery.js
        function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }

        function mediaQuery_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function mediaQuery_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function mediaQuery_createClass(Constructor, protoProps, staticProps) {
            if (protoProps) mediaQuery_defineProperties(Constructor.prototype, protoProps);
            if (staticProps) mediaQuery_defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true
                }
            });
            Object.defineProperty(subClass, "prototype", {
                writable: false
            });
            if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
            };
            return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                    result;
                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                    result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
            };
        }

        function _possibleConstructorReturn(self, call) {
            if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
            } else if (call !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined");
            }
            return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
            if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self;
        }

        function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        }

        function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
        }





        var MediaQuery = function(_EventEmitter) {
            _inherits(MediaQuery, _EventEmitter);

            var _super = _createSuper(MediaQuery);

            function MediaQuery() {
                var _this;

                mediaQuery_classCallCheck(this, MediaQuery);

                _this = _super.call(this);

                _this.setMaxListeners(100);

                _this.breakpoinList = [{
                    type: 'sp',
                    min: undefined,
                    max: 759
                }, {
                    type: 'tab',
                    min: 760,
                    max: 979
                }, {
                    type: 'pc',
                    min: 980,
                    max: undefined
                }];
                _this.breakpoinLength = _this.breakpoinList.length;
                _this.prevType = null;
                _this.currentType = null;
                _this.width = 0;
                _this.height = 0;
                _this.aspect = 0;
                _this.devicePixelRatio = window.devicePixelRatio || 1;
                _this.orientation = 'landscape';

                _this.setup();

                return _this;
            }

            mediaQuery_createClass(MediaQuery, [{
                key: "setup",
                value: function setup() {
                    var wait = modules_ua.isMobile ? 200 : 50;
                    this.debounceResize = debounce_default()(this.resize.bind(this), wait);
                    window.addEventListener('resize', this.debounceResize);
                    this.checkMediaType();
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    window.removeEventListener('resize', this.debounceResize);
                    this.debounceResize.clear();
                    this.removeAllListeners();
                }
            }, {
                key: "resize",
                value: function resize() {
                    this.checkMediaType();
                    this.emit('resize', this);
                }
            }, {
                key: "checkMediaType",
                value: function checkMediaType() {
                    var width = window.innerWidth;
                    var height = window.innerHeight;
                    this.width = width;
                    this.height = height;
                    this.aspect = width / height;
                    this.orientation = height >= width ? 'portrait' : 'landscape';
                    var type = null;

                    for (var i = 0, l = this.breakpoinLength; i < l; i += 1) {
                        var b = this.breakpoinList[i];

                        if (b.min !== undefined || b.max !== undefined) {
                            if (b.min === undefined && width <= b.max) {
                                type = b.type;
                                break;
                            }

                            if (b.max === undefined && width >= b.min) {
                                type = b.type;
                                break;
                            }

                            if (width >= b.min && width <= b.max) {
                                type = b.type;
                                break;
                            }
                        }
                    }

                    if (type !== null && type !== this.currentType) {
                        this.prevType = this.currentType;
                        this.currentType = type;
                        this.emit('change', this.currentType);
                    }
                }
            }]);

            return MediaQuery;
        }((events_default()));

        var mediaQuery = new MediaQuery();
        /* harmony default export */
        var modules_mediaQuery = (mediaQuery);; // CONCATENATED MODULE: ./src/js/modules/common/reload.js

        var setupReload = function setupReload() {
            var reload = function reload() {
                window.location = window.location.href;
            };

            var currentMediaType = modules_mediaQuery.currentType;
            modules_mediaQuery.on('change', function(type) {
                if (currentMediaType === 'sp') {
                    if (type !== currentMediaType) reload();
                } else {
                    if (type === 'sp') reload();
                }
            });
        };; // CONCATENATED MODULE: ./src/js/config.js
        var config = {
            "env": "production"
        };
        config.lazyLoadOptions = {
            threshold: 600
        };
        /* harmony default export */
        var js_config = (config);; // CONCATENATED MODULE: ./src/js/modules/common/lazyLoad.js
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }

        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }




        var setupImageLazyLoad = function setupImageLazyLoad() {
            new LazyLoad(_objectSpread(_objectSpread({}, js_config.lazyLoadOptions), {}, {
                elements_selector: '.js-lazy'
            }));
        };

        var setupVideoLazyLoad = function setupVideoLazyLoad() {
            var type = modules_mediaQuery.currentType === 'sp' ? 'sp' : 'pc';
            new LazyLoad(_objectSpread(_objectSpread({}, js_config.lazyLoadOptions), {}, {
                elements_selector: ".js-videoLazy-".concat(type),
                callback_loaded: function callback_loaded($video) {
                    $video.pause();
                    ScrollTrigger.batch($video, {
                        start: '-80px bottom',
                        end: 'bottom top-=80px',
                        onEnter: function onEnter() {
                            $video.play();
                            $video.classList.add('is-play');
                        },
                        onLeave: function onLeave() {
                            $video.pause();
                            $video.classList.remove('is-play');
                        },
                        onEnterBack: function onEnterBack() {
                            $video.play();
                            $video.classList.add('is-play');
                        },
                        onLeaveBack: function onLeaveBack() {
                            $video.pause();
                            $video.classList.remove('is-play');
                        }
                    });
                }
            }));
        };

        var setupLazyLoad = function setupLazyLoad() {
            setupImageLazyLoad();
            setupVideoLazyLoad();
        };; // CONCATENATED MODULE: ./src/js/modules/common/enterScrenn.js
        var setupEnterScreen = function setupEnterScreen() {
            gsap.utils.toArray(document.querySelectorAll('.js-enter')).forEach(function($el) {
                var animationType = $el.getAttribute('data-enter-animation');
                var animationStart = $el.getAttribute('data-enter-start') || 'top 85%';
                var animationDuration = $el.getAttribute('data-enter-duration') || 0.35;

                if (animationType === null || animationType === '') {
                    ScrollTrigger.create({
                        trigger: $el,
                        start: animationStart,
                        toggleClass: {
                            targets: [$el],
                            className: 'on-enter'
                        },
                        once: true
                    });
                    return;
                }

                switch (animationType) {
                    case 'upFade':
                        gsap.set($el, {
                            y: 15,
                            opacity: 0
                        });
                        break;

                    case 'downFade':
                        gsap.set($el, {
                            y: -15,
                            opacity: 0
                        });
                        break;

                    case 'upScale':
                    case 'upScaleOutBack':
                        gsap.set($el, {
                            scale: 0
                        });
                        break;

                    case 'upScaleFade':
                        gsap.set($el, {
                            scale: 0.5,
                            opacity: 0
                        });
                        break;

                    case 'downScaleFade':
                        gsap.set($el, {
                            scale: 1.3,
                            opacity: 0
                        });
                        break;

                    case 'upScaleFadeOutBack':
                        gsap.set($el, {
                            scale: 0.5,
                            opacity: 0
                        });
                        break;

                    case 'rotateSlideIn':
                        gsap.set($el, {
                            rotate: 6,
                            x: 15,
                            y: 15,
                            opacity: 0
                        });
                        break;

                    case 'fadeRightToLeft':
                        gsap.set($el, {
                            x: 35,
                            opacity: 0
                        });
                        break;

                    case 'fadeLeftToRight':
                        gsap.set($el, {
                            x: -35,
                            opacity: 0
                        });
                        break;

                    case 'ink':
                        gsap.set($el, {
                            scale: 1.15,
                            opacity: 0
                        });
                        break;

                    case 'battleBandRightToLeft':
                        gsap.set($el, {
                            xPercent: 100,
                            scaleY: 0.5
                        });
                        break;

                    case 'battleBandLeftToRight':
                        gsap.set($el, {
                            xPercent: -100,
                            scaleY: 0.5
                        });
                        break;

                    case 'fade':
                    default:
                        gsap.set($el, {
                            opacity: 0
                        });
                        break;
                }

                ScrollTrigger.create({
                    trigger: $el,
                    start: animationStart,
                    once: true,
                    onEnter: function onEnter() {
                        switch (animationType) {
                            case 'upFade':
                                gsap.to($el, {
                                    y: 0,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'downFade':
                                gsap.to($el, {
                                    y: 0,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'upScale':
                                gsap.to($el, {
                                    scale: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'upScaleOutBack':
                                gsap.to($el, {
                                    scale: 1,
                                    duration: animationDuration,
                                    ease: Back.easeOut.config(1.4)
                                });
                                break;

                            case 'upScaleFade':
                                gsap.to($el, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'downScaleFade':
                                gsap.to($el, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'upScaleFadeOutBack':
                                gsap.to($el, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Back.easeOut.config(1.4)
                                });
                                break;

                            case 'rotateSlideIn':
                                gsap.to($el, {
                                    rotate: 0,
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'fadeRightToLeft':
                                gsap.to($el, {
                                    x: 0,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'fadeLeftToRight':
                                gsap.to($el, {
                                    x: 0,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'ink':
                                gsap.to($el, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: animationDuration,
                                    ease: Back.easeOut.config(4)
                                });
                                break;

                            case 'battleBandRightToLeft':
                                gsap.to($el, {
                                    xPercent: 0,
                                    scaleY: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'battleBandLeftToRight':
                                gsap.to($el, {
                                    xPercent: 0,
                                    scaleY: 1,
                                    duration: animationDuration,
                                    ease: Power2.easeOut
                                });
                                break;

                            case 'fade':
                            default:
                                gsap.to($el, {
                                    opacity: 1,
                                    duration: animationDuration
                                });
                                break;
                        }
                    }
                });
            });
        };; // CONCATENATED MODULE: ./src/js/pages/common.js




        setupReload();
        setupLazyLoad();
        setupEnterScreen();
        setupPageTop();

        function setupPageTop() {
            if ({
                    "env": "production"
                }.env != "development") {
                if ((modules_ua.isSafari || modules_ua.isMobileSafari) && location.hash) {
                    return;
                }

                if (history.scrollRestoration) {
                    history.scrollRestoration = 'manual';
                } else if (!location.hash) {
                    scrollTo(0, 0);
                }
            }
        }
    }();
    /******/
})();