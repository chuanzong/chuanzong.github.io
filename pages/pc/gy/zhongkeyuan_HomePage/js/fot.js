$(function(){
	function l() {
		var e = $("#partners_banner"),
		n = $(".partners-li").width() * $(".partners-li").length;
		e.width(n);
		for (var r = 0,
		i = $(".partners-li").length - 5, o = ""; i > r; r++) o = o + '<li class="partners-car-point" data-th="' + r + '"></li> ';
		$("#partners_car_point").html(o)
	}
	function u() {
		var e = $("#partners_wc").find(".car-points-ul li"),
		n = $(".partners-car-point").length,
		r = 0;
		e.eq(r).addClass("active").siblings().removeClass("active"),
		$(".partners-car-point").on("click",
		function() {
			$(this).addClass("active").siblings().removeClass("active");
			var e = $(this).index(),
			n = $(".partners-li").width() * e * 2;
			$(".partners-pic").animate({
				left: -n
			},
			1500)
		});
		var i = function() {
			r++,
			r > n - 1 && (r = 0),
			e.eq(r).trigger("click")
		},
		o = setInterval(i, 3e3);
		$(".partners-pic").mouseenter(function() {
			clearInterval(o)
		}).mouseleave(function() {
			o = setInterval(i, 3e3)
		})
	}
	$(window).ready(function() {
		l(),
		u()
	})
})