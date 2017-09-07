;(function($){

	var fnName = 'fragmentImg';

	var _default = {
		width : 1200,
		line : 5,
		column : 12,
		img : 'images/1.jpg',
		animeTime : 3000
	};

	window[fnName] = function(changeConfig){

		//改变属性值
		if(typeof(changeConfig) == "object"){

			for( var n in changeConfig){

				_default[n] = changeConfig[n];
			}
		}

		if(!_default.container){

			alert('未选择显示容器(div.class or div#id)的类');
			return false;
		}

		var container = $(_default.container);
			container.append("<ul class='clearfix'></ul>");

		container.css({
			width : _default.width
		});

		var containerUl = container.find(" > ul");
		for(var i = 0;i < (_default.line*_default.column);i++){

			containerUl.append("<li></li>");
		}	
		var	containerItem = containerUl.find("li");

		//加载图片
		var Img = new Image();
			Img.src = _default.img;
		//图片加载完成时
		Img.onload = function(){

			var multiple = container.width() / Img.width,
				width = Img.width * multiple,
				height = Img.height * multiple,
				findWidth = width/_default.column,
				findHeight = height/_default.line;
			
			var windowWidth = screen.width,
				windowHeight = screen.height;

			containerItem.css({
				width : findWidth,
				height : findHeight,
				'background-image' : 'url('+Img.src+')',
				'background-size' : width+'px '+height+'px',
				opacity : 0
			});

			container.css({
				left : '50%',
				top : '50%',
				'margin-top' : -height/2,
				'margin-left' : -width/2
			});

			var x,y;
			for(i = 0; i < containerItem.length; i++){

				x = i%_default.column;
				y = Math.floor(i/_default.column);
				containerItem.eq(i).css({

					'background-position' : -x*findWidth+'px '+(-y*findHeight)+'px',
					left :  Math.ceil(Math.random()*windowWidth*2) - windowWidth,
					top : Math.ceil(Math.random()*windowHeight*2) - windowHeight
				}).animate({

					left : 0,
					top : 0,
					opacity : 1
				},Math.ceil(Math.random()*(0.66*_default.animeTime))+(0.33*_default.animeTime));
			}

		}
	}
})(jQuery)