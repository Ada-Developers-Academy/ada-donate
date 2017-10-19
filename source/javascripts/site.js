! function(t) {
  function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } var n = {};
  e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 0) }([function(t, e, n) { "use strict";

  function r(t) { return t && t.__esModule ? t : { default: t } } n(1), n(2), n(3); var o = r(n(4)),
    i = r(n(5)),
    s = r(n(7)),
    a = r(n(9));
  n(10); var u = function() {
    (new i.default).process(), (new o.default).process(), (new s.default).process(), (new s.default).process(), a.default.process() }; "loading" !== document.readyState ? u() : document.addEventListener ? document.addEventListener("DOMContentLoaded", u) : document.attachEvent("onreadystatechange", function() { "loading" !== document.readyState && u() }) }, function(t, e, n) { "use strict";! function(t, e) {
    function n(t) { this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }, this.isIntersecting = !!t.intersectionRect; var e = this.boundingClientRect,
        n = e.width * e.height,
        r = this.intersectionRect,
        o = r.width * r.height;
      this.intersectionRatio = n ? o / n : 0 }

    function r(t, e) { var n = e || {}; if ("function" != typeof t) throw new Error("callback must be a function"); if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
      this._checkForIntersections = i(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(t) { return t.value + t.unit }).join(" ") }

    function o() { return t.performance && performance.now && performance.now() }

    function i(t, e) { var n = null; return function() { n || (n = setTimeout(function() { t(), n = null }, e)) } }

    function s(t, e, n, r) { "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n) }

    function a(t, e, n, r) { "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n) }

    function u(t, e) { var n = Math.max(t.top, e.top),
        r = Math.min(t.bottom, e.bottom),
        o = Math.max(t.left, e.left),
        i = Math.min(t.right, e.right),
        s = i - o,
        a = r - n; return s >= 0 && a >= 0 && { top: n, bottom: r, left: o, right: i, width: s, height: a } }

    function c(t) { var e = t.getBoundingClientRect(); if (e) return e.width && e.height || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e } if (!("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype)) { var l = e.documentElement,
        h = [];
      r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.observe = function(t) { if (!this._observationTargets.some(function(e) { return e.element == t })) { if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
          this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections() } }, r.prototype.unobserve = function(t) { this._observationTargets = this._observationTargets.filter(function(e) { return e.element != t }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance()) }, r.prototype.disconnect = function() { this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance() }, r.prototype.takeRecords = function() { var t = this._queuedEntries.slice(); return this._queuedEntries = [], t }, r.prototype._initThresholds = function(t) { var e = t || [0]; return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) { if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively"); return t !== n[e - 1] }) }, r.prototype._parseRootMargin = function(t) { var e = (t || "0px").split(/\s+/).map(function(t) { var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t); if (!e) throw new Error("rootMargin must be specified in pixels or percent"); return { value: parseFloat(e[1]), unit: e[2] } }); return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e }, r.prototype._monitorIntersections = function() { this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })))) }, r.prototype._unmonitorIntersections = function() { this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(t, "resize", this._checkForIntersections, !0), a(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null)) }, r.prototype._checkForIntersections = function() { var t = this._rootIsInDom(),
          e = t ? this._getRootRect() : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        this._observationTargets.forEach(function(r) { var i = r.element,
            s = c(i),
            a = this._rootContainsTarget(i),
            u = r.entry,
            l = t && a && this._computeTargetAndRootIntersection(i, e),
            h = r.entry = new n({ time: o(), target: i, boundingClientRect: s, rootBounds: e, intersectionRect: l });
          t && a ? this._hasCrossedThreshold(u, h) && this._queuedEntries.push(h) : u && u.isIntersecting && this._queuedEntries.push(h) }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this) }, r.prototype._computeTargetAndRootIntersection = function(e, n) { if ("none" != t.getComputedStyle(e).display) { for (var r = c(e), o = e.parentNode, i = !1; !i;) { var s = null; if (o == this.root || 1 != o.nodeType ? (i = !0, s = n) : "visible" != t.getComputedStyle(o).overflow && (s = c(o)), s && !(r = u(s, r))) break;
            o = o.parentNode } return r } }, r.prototype._getRootRect = function() { var t; if (this.root) t = c(this.root);
        else { var n = e.documentElement,
            r = e.body;
          t = { top: 0, left: 0, right: n.clientWidth || r.clientWidth, width: n.clientWidth || r.clientWidth, bottom: n.clientHeight || r.clientHeight, height: n.clientHeight || r.clientHeight } } return this._expandRectByRootMargin(t) }, r.prototype._expandRectByRootMargin = function(t) { var e = this._rootMarginValues.map(function(e, n) { return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100 }),
          n = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] }; return n.width = n.right - n.left, n.height = n.bottom - n.top, n }, r.prototype._hasCrossedThreshold = function(t, e) { var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
          r = e.isIntersecting ? e.intersectionRatio || 0 : -1; if (n !== r)
          for (var o = 0; o < this.thresholds.length; o++) { var i = this.thresholds[o]; if (i == n || i == r || i < n != i < r) return !0 } }, r.prototype._rootIsInDom = function() { return !this.root || l.contains(this.root) }, r.prototype._rootContainsTarget = function(t) { return (this.root || l).contains(t) }, r.prototype._registerInstance = function() { h.indexOf(this) < 0 && h.push(this) }, r.prototype._unregisterInstance = function() { var t = h.indexOf(this); - 1 != t && h.splice(t, 1) }, t.IntersectionObserver = r, t.IntersectionObserverEntry = n } }(window, document) }, function(t, e, n) { "use strict"; var r, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };! function(i, s) { void 0 !== (o = "function" == typeof(r = s) ? r.call(e, n, e, t) : r) && (t.exports = o) }(0, function() { if ("object" === ("undefined" == typeof window ? "undefined" : i(window)) && void 0 !== document.querySelectorAll && void 0 !== window.pageYOffset && void 0 !== history.pushState) { var t = function(t, e) { return "HTML" === t.nodeName ? -e : t.getBoundingClientRect().top + e },
        e = function(t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
        n = function(t, n, r, o) { return r > o ? n : t + (n - t) * e(r / o) },
        r = function(e, r, o, i) { r = r || 500; var s = (i = i || window).scrollTop || window.pageYOffset; if ("number" == typeof e) a = parseInt(e);
          else var a = t(e, s); var u = Date.now(),
            c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 15) };! function t() { var l = Date.now() - u;
            i !== window ? i.scrollTop = n(s, a, l, r) : window.scroll(0, n(s, a, l, r)), l > r ? "function" == typeof o && o(e) : c(t) }() },
        o = function(t) { t.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash); var e = document.getElementById(this.hash.substring(1));
          e && r(e, 500, function(t) { location.replace("#" + t.id) }) },
        s = function() { for (var t, e = document.querySelectorAll('a[href^="#"]:not([href="#"])'), n = e.length; t = e[--n];) t.addEventListener("click", o, !1) }; return "loading" !== document.readyState ? s() : document.addEventListener ? document.addEventListener("DOMContentLoaded", s) : document.attachEvent("onreadystatechange", function() { "loading" !== document.readyState && s() }), document.addEventListener("DOMContentLoaded", function() {}), r } }) }, function(t, e, n) { "use strict";! function(t) {
    function e(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() }

    function n(t) { return "string" != typeof t && (t = String(t)), t }

    function r(t) { var e = { next: function() { var e = t.shift(); return { done: void 0 === e, value: e } } }; return v.iterable && (e[Symbol.iterator] = function() { return e }), e }

    function o(t) { this.map = {}, t instanceof o ? t.forEach(function(t, e) { this.append(e, t) }, this) : Array.isArray(t) ? t.forEach(function(t) { this.append(t[0], t[1]) }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) { this.append(e, t[e]) }, this) }

    function i(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
      t.bodyUsed = !0 }

    function s(t) { return new Promise(function(e, n) { t.onload = function() { e(t.result) }, t.onerror = function() { n(t.error) } }) }

    function a(t) { var e = new FileReader,
        n = s(e); return e.readAsArrayBuffer(t), n }

    function u(t) { var e = new FileReader,
        n = s(e); return e.readAsText(t), n }

    function c(t) { for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]); return n.join("") }

    function l(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer }

    function h() { return this.bodyUsed = !1, this._initBody = function(t) { if (this._bodyInit = t, t)
          if ("string" == typeof t) this._bodyText = t;
          else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
        else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
        else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
        else if (v.arrayBuffer && v.blob && g(t)) this._bodyArrayBuffer = l(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
        else { if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !w(t)) throw new Error("unsupported BodyInit type");
          this._bodyArrayBuffer = l(t) } else this._bodyText = "";
        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, v.blob && (this.blob = function() { var t = i(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a) }), this.text = function() { var t = i(this); if (t) return t; if (this._bodyBlob) return u(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, v.formData && (this.formData = function() { return this.text().then(m) }), this.json = function() { return this.text().then(JSON.parse) }, this }

    function f(t) { var e = t.toUpperCase(); return _.indexOf(e) > -1 ? e : t }

    function d(t, e) { var n = (e = e || {}).body; if (t instanceof d) { if (t.bodyUsed) throw new TypeError("Already read");
        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new o(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new o(e.headers)), this.method = f(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
      this._initBody(n) }

    function m(t) { var e = new FormData; return t.trim().split("&").forEach(function(t) { if (t) { var n = t.split("="),
            r = n.shift().replace(/\+/g, " "),
            o = n.join("=").replace(/\+/g, " ");
          e.append(decodeURIComponent(r), decodeURIComponent(o)) } }), e }

    function p(t) { var e = new o; return t.split(/\r?\n/).forEach(function(t) { var n = t.split(":"),
          r = n.shift().trim(); if (r) { var o = n.join(":").trim();
          e.append(r, o) } }), e }

    function y(t, e) { e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new o(e.headers), this.url = e.url || "", this._initBody(t) } if (!t.fetch) { var v = { searchParams: "URLSearchParams" in t, iterable: "Symbol" in t && "iterator" in Symbol, blob: "FileReader" in t && "Blob" in t && function() { try { return new Blob, !0 } catch (t) { return !1 } }(), formData: "FormData" in t, arrayBuffer: "ArrayBuffer" in t }; if (v.arrayBuffer) var b = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        g = function(t) { return t && DataView.prototype.isPrototypeOf(t) },
        w = ArrayBuffer.isView || function(t) { return t && b.indexOf(Object.prototype.toString.call(t)) > -1 };
      o.prototype.append = function(t, r) { t = e(t), r = n(r); var o = this.map[t];
        this.map[t] = o ? o + "," + r : r }, o.prototype.delete = function(t) { delete this.map[e(t)] }, o.prototype.get = function(t) { return t = e(t), this.has(t) ? this.map[t] : null }, o.prototype.has = function(t) { return this.map.hasOwnProperty(e(t)) }, o.prototype.set = function(t, r) { this.map[e(t)] = n(r) }, o.prototype.forEach = function(t, e) { for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this) }, o.prototype.keys = function() { var t = []; return this.forEach(function(e, n) { t.push(n) }), r(t) }, o.prototype.values = function() { var t = []; return this.forEach(function(e) { t.push(e) }), r(t) }, o.prototype.entries = function() { var t = []; return this.forEach(function(e, n) { t.push([n, e]) }), r(t) }, v.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries); var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      d.prototype.clone = function() { return new d(this, { body: this._bodyInit }) }, h.call(d.prototype), h.call(y.prototype), y.prototype.clone = function() { return new y(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new o(this.headers), url: this.url }) }, y.error = function() { var t = new y(null, { status: 0, statusText: "" }); return t.type = "error", t }; var E = [301, 302, 303, 307, 308];
      y.redirect = function(t, e) { if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code"); return new y(null, { status: e, headers: { location: t } }) }, t.Headers = o, t.Request = d, t.Response = y, t.fetch = function(t, e) { return new Promise(function(n, r) { var o = new d(t, e),
            i = new XMLHttpRequest;
          i.onload = function() { var t = { status: i.status, statusText: i.statusText, headers: p(i.getAllResponseHeaders() || "") };
            t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL"); var e = "response" in i ? i.response : i.responseText;
            n(new y(e, t)) }, i.onerror = function() { r(new TypeError("Network request failed")) }, i.ontimeout = function() { r(new TypeError("Network request failed")) }, i.open(o.method, o.url, !0), "include" === o.credentials && (i.withCredentials = !0), "responseType" in i && v.blob && (i.responseType = "blob"), o.headers.forEach(function(t, e) { i.setRequestHeader(e, t) }), i.send(void 0 === o._bodyInit ? null : o._bodyInit) }) }, t.fetch.polyfill = !0 } }("undefined" != typeof self ? self : void 0) }, function(t, e, n) { "use strict";

  function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
      function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
    i = function() {
      function t() { r(this, t) } return o(t, [{ key: "process", value: function() { this.elements = document.querySelectorAll(".twitter-intent, .facebook-share"); for (var t = 0; t < this.elements.length; t++) this.elements[t].addEventListener("click", function(t) { t.preventDefault(), window.open(t.target.href, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=420") }) } }]), t }();
  e.default = i }, function(t, e, n) { "use strict";

  function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
      function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
    i = function(t) { return t && t.__esModule ? t : { default: t } }(n(6)),
    s = function() {
      function t() { r(this, t); var e = new i.default; return this.enable = !e.isMicrosoftBrowser() && !e.isIos() && window.innerWidth >= 728, this.className = "jarallax", this } return o(t, [{ key: "observerCallback", value: function(t, e) { t.forEach(function(t) { var e = t.target.getElementsByClassName("jarallax-img")[0];
            t.intersectionRatio > 0 || t.isIntersecting ? e.style.zIndex = -40 : e.style.zIndex = -100 }) } }, { key: "process", value: function() { if (this.enable) { this.allElements = document.getElementsByClassName(this.className), document.documentElement.className += " " + this.className + "-enabled"; for (var t = new IntersectionObserver(this.observerCallback, { rootMargin: "20px 0px 10px 0px" }), e = 0; e < this.allElements.length; e++) t.observe(this.allElements[e]) } } }]), t }();
  e.default = s }, function(t, e, n) { "use strict";

  function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
      function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
    i = function() {
      function t(e) { return r(this, t), this.navigator = e || window.navigator, this } return o(t, [{ key: "isIE", value: function() { if (!this.navigator.userAgent) return !1; var t = Boolean(this.navigator.userAgent.match(/(MSIE)/i)),
            e = Boolean(this.navigator.userAgent.match(/(Trident)/i)); return t || e } }, { key: "isEdge", value: function() { return !!this.navigator.userAgent && this.navigator.userAgent.indexOf("Edge") > -1 } }, { key: "isMicrosoftBrowser", value: function() { return this.isEdge() || this.isIE() } }, { key: "isIos", value: function() { return /iPad|iPhone|iPod/.test(this.navigator.userAgent) && !window.MSStream } }]), t }();
  e.default = i }, function(t, e, n) { "use strict";

  function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
      function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
    i = function(t) { return t && t.__esModule ? t : { default: t } }(n(8)),
    s = StripeCheckout.configure({ key: OneAmericaSettngs.stripe_api_pub_key, image: "/images/stripe/stripe-checkout.jpg", locale: "en" }),
    a = function() {
      function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "donation-form"; return r(this, t), this.formId = e, this.coverFee = !0, this.designation = "", this.companyMatch = "", this.donationAmount = 0, this.donationAmountWithFee = 0, this } return o(t, [{ key: "process", value: function() { var t = this;
          this.form = document.getElementById(this.formId), this.formElements = { donationAmount: document.getElementById(this.formId + "__donation"), coverFee: document.getElementById(this.formId + "__cover-costs"), designation: document.getElementById(this.formId + "__designation"), companyMatch: document.getElementById(this.formId + "__match"), submit: document.getElementById(this.formId + "__submit"), fee: document.getElementById(this.formId + "__fee") }, this.formElements.donationAmount.onchange = function() { t.donationChange() }, window.addEventListener("popstate", function() { s.close() }), this.form.addEventListener("keypress", function(e) { e && 13 == e.keyCode && (t.runCheckout(), e.preventDefault()) }), this.formElements.submit.addEventListener("click", function(e) { t.runCheckout(), e.preventDefault() }); for (var e = this.form.getElementsByClassName("donation-submit"), n = 0; n < e.length; n++) e[n].addEventListener("click", function(e) { t.formElements.donationAmount.value = e.target.getAttribute("data-donation-amount"), t.donationChange(), e.preventDefault() });
          window.location.pathname.indexOf("mastercard") >= 0 && (this.formElements.companyMatch.value = "MasterCard", this.formElements.companyMatch.disabled = !0), window.location.pathname.indexOf("bigmouth") >= 0 && (this.formElements.companyMatch.value = "Nick Kroll - Big Mouth", this.formElements.designation.value = "maria-pr", this.formElements.companyMatch.disabled = !0), window.location.pathname.indexOf("vogue") >= 0 && (this.formElements.companyMatch.value = "Vogue", this.formElements.companyMatch.disabled = !0) } }, { key: "donationChange", value: function() { if (this.getFormValues(), this.donationAmount > 0) { var t = ((this.donationAmountWithFee - this.donationAmount) / 100).toFixed(2);
            this.formElements.fee.innerText = "$" + t, this.formElements.donationAmount.value = (this.donationAmount / 100).toFixed(2) } else this.formElements.fee.innerText = "2.2% + $0.30" } }, { key: "getFormValues", value: function() { var t = this.formElements.donationAmount.value.replace("$", ""); return parseInt(t) || (t = 0), this.donationAmount = 100 * parseInt(t), this.coverFee = this.formElements.coverFee.checked, this.designation = this.formElements.designation.value, this.companyMatch = this.formElements.companyMatch.value, this.donationAmountWithFee = Math.ceil((this.donationAmount + 30) / .978), this.coverFee ? this.chargeAmount = this.donationAmountWithFee : this.chargeAmount = this.donationAmount, this } }, { key: "runCheckout", value: function() { var t = this;
          this.getFormValues(), s.open({ name: "One America Appeal", description: "Donation to GBPLF - One America Appeal", amount: this.chargeAmount, billingAddress: !0, allowRememberMe: !1, panelLabel: "Donate", token: function(e) { var n = JSON.stringify({ token: e.id, email: e.email, amount: t.chargeAmount, designation: t.designation, companyMatch: t.companyMatch, coverFee: t.coverFee, originalDonationAmount: t.donationAmount });
              fetch(OneAmericaSettngs.stripe_api_url, { method: "POST", headers: { "Content-Type": "application/json" }, body: n }).then(function(t) { return t.json() }).then(function(e) { if (!e.success) throw Error(e.error);
                i.default.openModal(!0), t.resetForm(), ga("send", "event", "donation", "donated", "success", t.chargeAmount) }).catch(function(t) { i.default.openModal(!1) }) } }) } }, { key: "resetForm", value: function() { this.formElements.donationAmount.value = "", this.formElements.designation.value = "", this.formElements.companyMatch.value = "", this.formElements.coverFee.checked = !0, this.donationChange() } }]), t }();
  e.default = a }, function(t, e, n) { "use strict";

  function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
      function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
    i = !1,
    s = function() {
      function t() { r(this, t) } return o(t, null, [{ key: "process", value: function() { for (var t = document.getElementsByClassName("close-modal"), e = 0; e < t.length; e++) t[e].addEventListener("click", function(t) { document.getElementById("modal-window").style.display = "none"; var e = document.body.className;
            e = (e = e.replace("modal-active", "")).replace("modal-open", ""), document.body.className = e, setTimeout(function() { document.getElementById("modal-window").style.display = "block" }, 500) }) } }, { key: "openModal", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          i || (this.process(), i = !0); var e = document.getElementById("modal_success"),
            n = document.getElementById("modal_error");
          t ? (e.style.display = "block", n.style.display = "none") : (e.style.display = "none", n.style.display = "block"), document.body.className += " modal-active modal-open" } }]), t }();
  e.default = s }, function(t, e, n) { "use strict";

  function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
      function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
    i = function() {
      function t() { r(this, t) } return o(t, null, [{ key: "process", value: function() { for (var t = this, e = document.getElementById("nav").getElementsByClassName("menu-mobile"), n = 0; n < e.length; n++) e[n].addEventListener("click", function(e) { t.toggleNav() }); for (var r, o = document.querySelectorAll('a[href^="#"]:not([href="#"])'), n = o.length; r = o[--n];) r.addEventListener("click", function(e) { t.toggleNav(!0) }) } }, { key: "toggleNav", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = document.getElementById("nav");
          e.className.indexOf("active") >= 1 || t ? e.className = e.className.replace("active", "").trim() : e.className += " active" } }]), t }();
  e.default = i }, function(t, e, n) { "use strict";
  t.exports = n(11).polyfill() }, function(t, e, n) {
  (function(e, r) {! function(e, n) { t.exports = n() }(0, function() { "use strict";

      function t(t) { var e = typeof t; return null !== t && ("object" === e || "function" === e) }

      function o(t) { return "function" == typeof t }

      function i() { return void 0 !== N ? function() { N(a) } : s() }

      function s() { var t = setTimeout; return function() { return t(a, 1) } }

      function a() { for (var t = 0; t < j; t += 2)(0, G[t])(G[t + 1]), G[t] = void 0, G[t + 1] = void 0;
        j = 0 }

      function u(t, e) { var n = arguments,
          r = this,
          o = new this.constructor(l);
        void 0 === o[$] && x(o); var i = r._state; return i ? function() { var t = n[i - 1];
          U(function() { return O(i, o, t, r._result) }) }() : E(r, o, t, e), o }

      function c(t) { var e = this; if (t && "object" == typeof t && t.constructor === e) return t; var n = new e(l); return b(n, t), n }

      function l() {}

      function h() { return new TypeError("You cannot resolve a promise with itself") }

      function f() { return new TypeError("A promises callback cannot return that same promise.") }

      function d(t) { try { return t.then } catch (t) { return Q.error = t, Q } }

      function m(t, e, n, r) { try { t.call(e, n, r) } catch (t) { return t } }

      function p(t, e, n) { U(function(t) { var r = !1,
            o = m(n, e, function(n) { r || (r = !0, e !== n ? b(t, n) : w(t, n)) }, function(e) { r || (r = !0, _(t, e)) }, "Settle: " + (t._label || " unknown promise"));!r && o && (r = !0, _(t, o)) }, t) }

      function y(t, e) { e._state === J ? w(t, e._result) : e._state === X ? _(t, e._result) : E(e, void 0, function(e) { return b(t, e) }, function(e) { return _(t, e) }) }

      function v(t, e, n) { e.constructor === t.constructor && n === u && e.constructor.resolve === c ? y(t, e) : n === Q ? (_(t, Q.error), Q.error = null) : void 0 === n ? w(t, e) : o(n) ? p(t, e, n) : w(t, e) }

      function b(e, n) { e === n ? _(e, h()) : t(n) ? v(e, n, d(n)) : w(e, n) }

      function g(t) { t._onerror && t._onerror(t._result), A(t) }

      function w(t, e) { t._state === K && (t._result = e, t._state = J, 0 !== t._subscribers.length && U(A, t)) }

      function _(t, e) { t._state === K && (t._state = X, t._result = e, U(g, t)) }

      function E(t, e, n, r) { var o = t._subscribers,
          i = o.length;
        t._onerror = null, o[i] = e, o[i + J] = n, o[i + X] = r, 0 === i && t._state && U(A, t) }

      function A(t) { var e = t._subscribers,
          n = t._state; if (0 !== e.length) { for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? O(n, r, o, i) : o(i);
          t._subscribers.length = 0 } }

      function T() { this.error = null }

      function I(t, e) { try { return t(e) } catch (t) { return Z.error = t, Z } }

      function O(t, e, n, r) { var i = o(n),
          s = void 0,
          a = void 0,
          u = void 0,
          c = void 0; if (i) { if ((s = I(n, r)) === Z ? (c = !0, a = s.error, s.error = null) : u = !0, e === s) return void _(e, f()) } else s = r, u = !0;
        e._state !== K || (i && u ? b(e, s) : c ? _(e, a) : t === J ? w(e, s) : t === X && _(e, s)) }

      function k(t, e) { try { e(function(e) { b(t, e) }, function(e) { _(t, e) }) } catch (e) { _(t, e) } }

      function B() { return tt++ }

      function x(t) { t[$] = tt++, t._state = void 0, t._result = void 0, t._subscribers = [] }

      function M(t, e) { this._instanceConstructor = t, this.promise = new t(l), this.promise[$] || x(this.promise), S(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : _(this.promise, R()) }

      function R() { return new Error("Array Methods must be provided an Array") }

      function P() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

      function C() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

      function F(t) { this[$] = B(), this._result = this._state = void 0, this._subscribers = [], l !== t && ("function" != typeof t && P(), this instanceof F ? k(this, t) : C()) } var L = void 0,
        S = L = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) },
        j = 0,
        N = void 0,
        D = void 0,
        U = function(t, e) { G[j] = t, G[j + 1] = e, 2 === (j += 2) && (D ? D(a) : Y()) },
        q = "undefined" != typeof window ? window : void 0,
        H = q || {},
        V = H.MutationObserver || H.WebKitMutationObserver,
        W = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
        z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        G = new Array(1e3),
        Y = void 0;
      Y = W ? function() { return e.nextTick(a) } : V ? function() { var t = 0,
          e = new V(a),
          n = document.createTextNode(""); return e.observe(n, { characterData: !0 }),
          function() { n.data = t = ++t % 2 } }() : z ? function() { var t = new MessageChannel; return t.port1.onmessage = a,
          function() { return t.port2.postMessage(0) } }() : void 0 === q ? function() { try { var t = n(14); return N = t.runOnLoop || t.runOnContext, i() } catch (t) { return s() } }() : s(); var $ = Math.random().toString(36).substring(16),
        K = void 0,
        J = 1,
        X = 2,
        Q = new T,
        Z = new T,
        tt = 0; return M.prototype._enumerate = function(t) { for (var e = 0; this._state === K && e < t.length; e++) this._eachEntry(t[e], e) }, M.prototype._eachEntry = function(t, e) { var n = this._instanceConstructor,
          r = n.resolve; if (r === c) { var o = d(t); if (o === u && t._state !== K) this._settledAt(t._state, e, t._result);
          else if ("function" != typeof o) this._remaining--, this._result[e] = t;
          else if (n === F) { var i = new n(l);
            v(i, t, o), this._willSettleAt(i, e) } else this._willSettleAt(new n(function(e) { return e(t) }), e) } else this._willSettleAt(r(t), e) }, M.prototype._settledAt = function(t, e, n) { var r = this.promise;
        r._state === K && (this._remaining--, t === X ? _(r, n) : this._result[e] = n), 0 === this._remaining && w(r, this._result) }, M.prototype._willSettleAt = function(t, e) { var n = this;
        E(t, void 0, function(t) { return n._settledAt(J, e, t) }, function(t) { return n._settledAt(X, e, t) }) }, F.all = function(t) { return new M(this, t).promise }, F.race = function(t) { var e = this; return new e(S(t) ? function(n, r) { for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r) } : function(t, e) { return e(new TypeError("You must pass an array to race.")) }) }, F.resolve = c, F.reject = function(t) { var e = new this(l); return _(e, t), e }, F._setScheduler = function(t) { D = t }, F._setAsap = function(t) { U = t }, F._asap = U, F.prototype = { constructor: F, then: u, catch: function(t) { return this.then(null, t) } }, F.polyfill = function() { var t = void 0; if (void 0 !== r) t = r;
        else if ("undefined" != typeof self) t = self;
        else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
        var e = t.Promise; if (e) { var n = null; try { n = Object.prototype.toString.call(e.resolve()) } catch (t) {} if ("[object Promise]" === n && !e.cast) return } t.Promise = F }, F.Promise = F, F }) }).call(e, n(12), n(13)) }, function(t, e) {
  function n() { throw new Error("setTimeout has not been defined") }

  function r() { throw new Error("clearTimeout has not been defined") }

  function o(t) { if (l === setTimeout) return setTimeout(t, 0); if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0); try { return l(t, 0) } catch (e) { try { return l.call(null, t, 0) } catch (e) { return l.call(this, t, 0) } } }

  function i(t) { if (h === clearTimeout) return clearTimeout(t); if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t); try { return h(t) } catch (e) { try { return h.call(null, t) } catch (e) { return h.call(this, t) } } }

  function s() { p && d && (p = !1, d.length ? m = d.concat(m) : y = -1, m.length && a()) }

  function a() { if (!p) { var t = o(s);
      p = !0; for (var e = m.length; e;) { for (d = m, m = []; ++y < e;) d && d[y].run();
        y = -1, e = m.length } d = null, p = !1, i(t) } }

  function u(t, e) { this.fun = t, this.array = e }

  function c() {} var l, h, f = t.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch (t) { l = n } try { h = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { h = r } }(); var d, m = [],
    p = !1,
    y = -1;
  f.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    m.push(new u(t, e)), 1 !== m.length || p || o(a) }, u.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(t) { return [] }, f.binding = function(t) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(t) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 } }, function(t, e) { var n;
  n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) } t.exports = n }, function(t, e) {}]);
