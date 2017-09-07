//链接跳转问题
mui('body').on('tap', 'a', function() {
	document.location.href = this.href;
});
