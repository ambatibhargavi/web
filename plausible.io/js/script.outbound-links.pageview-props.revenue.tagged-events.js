! function() {
    var i = window.location,
        o = window.document,
        u = o.currentScript,
        l = u.getAttribute("data-api") || new URL(u.src).origin + "/api/event",
        s = u.getAttribute("data-domain");

    function p(e, t, n) {
        t && console.warn("Ignoring Event: " + t), n && n.callback && n.callback()
    }

    function t(e, t) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname) || "file:" === i.protocol) return p(0, "localhost", t);
        if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) return p(0, null, t);
        try {
            if ("true" === window.localStorage.plausible_ignore) return p(0, "localStorage flag", t)
        } catch (e) {}
        var n, r = {},
            e = (r.n = e, r.u = i.href, r.d = s, r.r = o.referrer || null, t && t.meta && (r.m = JSON.stringify(t.meta)), t && t.props && (r.p = t.props), t && t.revenue && (r.$ = t.revenue), u.getAttributeNames().filter(function(e) {
                return "event-" === e.substring(0, 6)
            })),
            a = r.p || {};
        e.forEach(function(e) {
            var t = e.replace("event-", ""),
                e = u.getAttribute(e);
            a[t] = a[t] || e
        }), r.p = a, e = l, r = r, n = t, window.fetch && fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            keepalive: !0,
            body: JSON.stringify(r)
        }).then(function(e) {
            n && n.callback && n.callback({
                status: e.status
            })
        })
    }
    var e = window.plausible && window.plausible.q || [];
    window.plausible = t;
    for (var n, r = 0; r < e.length; r++) t.apply(this, e[r]);

    function a(e) {
        e && n === i.pathname || (n = i.pathname, t("pageview"))
    }

    function c() {
        a(!0)
    }
    var f, v = window.history;

    function d(e) {
        return e && e.tagName && "a" === e.tagName.toLowerCase()
    }
    v.pushState && (f = v.pushState, v.pushState = function() {
        f.apply(this, arguments), c()
    }, window.addEventListener("popstate", c)), "prerender" === o.visibilityState ? o.addEventListener("visibilitychange", function() {
        n || "visible" !== o.visibilityState || a()
    }) : a();
    var h = 1;

    function m(e) {
        var t, n;
        if ("auxclick" !== e.type || e.button === h) return (t = (e => {
            for (; e && (void 0 === e.tagName || !d(e) || !e.href);) e = e.parentNode;
            return e
        })(e.target)) && t.href && t.href.split("?")[0], ! function e(t, n) {
            if (!t || g < n) return !1;
            if (k(t)) return !0;
            return e(t.parentNode, n + 1)
        }(t, 0) && (n = t) && n.href && n.host && n.host !== i.host ? w(e, t, {
            name: "Outbound Link: Click",
            props: {
                url: t.href
            }
        }) : void 0
    }

    function w(e, t, n) {
        var r, a = !1;

        function i() {
            a || (a = !0, window.location = t.href)
        }((e, t) => !e.defaultPrevented && (t = !t.target || t.target.match(/^_(self|parent|top)$/i), e = !(e.ctrlKey || e.metaKey || e.shiftKey) && "click" === e.type, t) && e)(e, t) ? ((r = {
            props: n.props,
            callback: i
        }).revenue = n.revenue, plausible(n.name, r), setTimeout(i, 5e3), e.preventDefault()) : ((r = {
            props: n.props
        }).revenue = n.revenue, plausible(n.name, r))
    }

    function b(e) {
        var e = k(e) ? e : e && e.parentNode,
            t = {
                name: null,
                props: {},
                revenue: {}
            },
            n = e && e.classList;
        if (n)
            for (var r = 0; r < n.length; r++) {
                var a, i, o = n.item(r),
                    u = o.match(/plausible-event-(.+)(=|--)(.+)/),
                    u = (u && (a = u[1], i = u[3].replace(/\+/g, " "), "name" == a.toLowerCase() ? t.name = i : t.props[a] = i), o.match(/plausible-revenue-(.+)(=|--)(.+)/));
                u && (a = u[1], i = u[3], t.revenue[a] = i)
            }
        return t
    }
    o.addEventListener("click", m), o.addEventListener("auxclick", m);
    var g = 3;

    function y(e) {
        if ("auxclick" !== e.type || e.button === h) {
            for (var t, n, r, a, i = e.target, o = 0; o <= g && i; o++) {
                if ((r = i) && r.tagName && "form" === r.tagName.toLowerCase()) return;
                d(i) && (t = i), k(i) && (n = i), i = i.parentNode
            }
            n && (a = b(n), t ? (a.props.url = t.href, w(e, t, a)) : ((e = {}).props = a.props, e.revenue = a.revenue, plausible(a.name, e)))
        }
    }

    function k(e) {
        var t = e && e.classList;
        if (t)
            for (var n = 0; n < t.length; n++)
                if (t.item(n).match(/plausible-event-name(=|--)(.+)/)) return !0;
        return !1
    }
    o.addEventListener("submit", function(e) {
        var t, n = e.target,
            r = b(n);

        function a() {
            t || (t = !0, n.submit())
        }
        r.name && (e.preventDefault(), t = !1, setTimeout(a, 5e3), (e = {
            props: r.props,
            callback: a
        }).revenue = r.revenue, plausible(r.name, e))
    }), o.addEventListener("click", y), o.addEventListener("auxclick", y)
}();