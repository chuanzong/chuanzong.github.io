console.log(123)


var de_js = {

_pGif: function(t) {
    var e = t.target;
    if (e.classList.contains("js-gif") && (e.classList.contains("js-gif-root") || (e = e.parentNode), !e.getAttribute("data-loaded"))) {
        var i = e.querySelector(".js-img"),
        a = e.querySelector(".gifBtn"),
        n = e.querySelector(".spin-box"),
        s = i.getAttribute("data-gif");
        a.classList.add("hide"),
        n.style.display = "block",
        i.addEventListener("load",
        function o() {
            n.style.display = "none",
            i.removeEventListener("load", o)
        }),
        i.setAttribute("src", s),
        e.setAttribute("data-loaded", 1)
    }
},
_viewAll: function(t) {
    var e = t.target;
    if (e.classList.contains("js-viewall")) {
        e.classList.contains("js-viewall-root") || (e = e.parentNode),
        e.setAttribute("style", "");
        var i = e.querySelector(".js-viewLongImg"),
        a = e.querySelector(".js-longImg");
        i.innerHTML = "正在加载中...",
        a.addEventListener("load",
        function n() {
            i.classList.add("hide"),
            a.removeEventListener("load", n)
        }),
        a.setAttribute("src", a.getAttribute("data-long"))
    }
}	









}

document.onclick = function (event){
	event=event||window.event;
	// console.log(event)
	de_js._pGif(event),
    de_js._viewAll(event)
}