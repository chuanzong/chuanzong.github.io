!function t(e, n, i) {
	function o(a, s) {
		if (!n[a]) {
			if (!e[a]) {
				var l = "function" == typeof require && require;
				if (!s && l) return l(a, !0);
				if (r) return r(a, !0);
				throw new Error("Cannot find module '" + a + "'")
			}
			var c = n[a] = {
				exports: {}
			};
			e[a][0].call(c.exports,
			function(t) {
				var n = e[a][1][t];
				return o(n ? n: t)
			},
			c, c.exports, t, e, n, i)
		}
		return n[a].exports
	}
	for (var r = "function" == typeof require && require,a = 0; a < i.length; a++) o(i[a]);
	return o
} ({
	1 : [function(t, e, n) {
		"use strict";
		function i(t, e) {
			if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		function o(t, e) {
			return t + Math.floor(Math.random() * (e - t + 1))
		}
		var r = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1,
					i.configurable = !0,
					"value" in i && (i.writable = !0),
					Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n),
				i && t(e, i),
				e
			}
		} (),
		a = (console.log,
		function() {
			function t(e) {
				i(this, t);
				var n = e.selector,
				o = e.index,
				r = void 0 === o ? 0 : o,
				a = e.autoplay,
				s = void 0 === a || a,
				l = e.delay,
				c = void 0 === l ? 8e3: l,
				u = e.controlSelector,
				f = this;
				if (this.$banners = $(n), this.length = this.$banners.length, this.length) {
					this.timer = null,
					this.$control = $(u);
					for (var h = "",
					d = 0; d < this.length; d++) h += "<a></a>";
					this.$control.html(h),
					this.$control.children().on("click",
					function() {
						f.go($(this).index())
					}),
					this.go(r),
					this.autoplay = s,
					s && (this.delay = c, this.play())
				}
			}
			return r(t, [{
				key: "play",
				value: function() {
					this.timer = setTimeout(this.interval.bind(this), this.delay)
				}
			},
			{
				key: "interval",
				value: function() {
					this.next()
				}
			},
			{
				key: "pause",
				value: function() {
					clearTimeout(this.timer)
				}
			},
			{
				key: "next",
				value: function() {
					this.go((this.index + 1) % this.length)
				}
			},
			{
				key: "go",
				value: function(t) {
					clearTimeout(this.timer),
					this.index = t,
					this.$banners.removeClass("active"),
					this.$banners.eq(t).addClass("active"),
					this.$control.children().removeClass("control-active"),
					this.$control.children().eq(t).addClass("control-active"),
					this.autoplay && this.play()
				}
			}]),
			t
		} ()),
		s = new a({
			selector: ".index-banner-text-wrap",
			autoplay: 1,
			index: 0,
			controlSelector: ".index-banner-tabs"
		});
		$(".index-banner-text-wrap").hover(function() {
			s.pause()
		},
		function() {
			s.play()
		}),
		$(".bd-intro-list>li").hover(function() {
			$(this).addClass("active").siblings().removeClass("active")
		},
		function() {}),
		$("ul.bd-customer-list>li").each(function() {
			var t = 0,
			e = null,
			n = $(this),
			i = n.find("span.logo-wrap"),
			r = i.length,
			a = function n() {
				e = setTimeout(function() {
					i.eq(t).fadeOut(1e3),
					t = (t + 1) % r,
					i.eq(t).fadeIn(1e3),
					n()
				},
				o(1e3, 2e4))
			};
			n.find(">span").hide().eq(0).show(),
			a()
		});
		var l = $(".index-monitor-left"),
		c = $(".index-monitor-handle");
		$(".index-monitor").on("mousemove",
		function(t) {
			var e = t.clientX - $(this).offset().left - 41;
			e < 0 && (e = 0),
			e > 868 && (e = 868),
			l.css("width", e),
			c.css("left", e)
		}).on("mouseleave",
		function(t) {
			var e, n = t.clientX - $(this).offset().left;
			n < 0 && (e = 0),
			n > 868 && (e = 868),
			l.css("width", e),
			c.css("left", e)
		}),
		$(".index-article-wrap").each(function() {
			var t = $(this),
			e = t.find(".index-tabs-link>a"),
			n = t.find(".index-article-list");
			e.on("click",
			function() {
				var t = $(this);
				t.addClass("active").siblings().removeClass(),
				n.eq(t.index()).fadeIn().siblings("ul").fadeOut()
			})
		})
	},
	{}]
},
{},
[1]);