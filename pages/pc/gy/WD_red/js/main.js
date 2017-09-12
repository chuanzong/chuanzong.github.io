$(function(){
	console.log('123')
	$(".gongwei").clone(true).prop("class","gongwei gw-qt").prependTo(".gw-group")

	$(".gw-group").on("click",'.gw-z1,.gw-y1',function(){
		var theNum = $(this).index()
		var lenNum = $(".gongwei").length
		$(".gongwei").removeClass('gw-dq gw-y1 gw-y2 gw-z1 gw-z2').addClass('gw-qt')
		$(this).removeClass('gw-qt').addClass('gw-dq')
		$(".gongwei").eq((theNum+1) % lenNum).removeClass('gw-qt').addClass('gw-y1')
		$(".gongwei").eq((theNum+2) % lenNum).removeClass('gw-qt').addClass('gw-y2')
		$(".gongwei").eq(theNum-1).removeClass('gw-qt').addClass('gw-z1')
		$(".gongwei").eq(theNum-2).removeClass('gw-qt').addClass('gw-z2')
	})
	$(".gw-group").on("click",'.gw-y2',function(){
		var theNum = $(this).index()
		var lenNum = $(".gongwei").length
		var theT = $(this)
		$(".gongwei").css('transition','all .4s linear').removeClass('gw-dq gw-y1 gw-y2 gw-z1 gw-z2').addClass('gw-qt')

		$(this).removeClass('gw-qt').addClass('gw-y1')
		$(".gongwei").eq((theNum+1) % lenNum).removeClass('gw-qt').addClass('gw-y2')
		$(".gongwei").eq(theNum-1).removeClass('gw-qt').addClass('gw-dq')
		$(".gongwei").eq(theNum-2).removeClass('gw-qt').addClass('gw-z1')		
		$(".gongwei").eq(theNum-3).removeClass('gw-qt').addClass('gw-z2')
		function stepT(){
			$(".gongwei").removeClass('gw-dq gw-y1 gw-y2 gw-z1 gw-z2').addClass('gw-qt')
			theT.removeClass('gw-qt').addClass('gw-dq')
			$(".gongwei").eq((theNum+1) % lenNum).removeClass('gw-qt').addClass('gw-y1')
			$(".gongwei").eq((theNum+2) % lenNum).removeClass('gw-qt').addClass('gw-y2')
			$(".gongwei").eq(theNum-1).removeClass('gw-qt').addClass('gw-z1')
			$(".gongwei").eq(theNum-2).removeClass('gw-qt').addClass('gw-z2')
			// console.log(theNum,lenNum)
		}
		setTimeout(stepT,400)
		setTimeout(function(){
			$(".gongwei").css('transition','all .6s linear')
		},1000)
	})
	$(".gw-group").on("click",'.gw-z2',function(){
		var theNum = $(this).index()
		var lenNum = $(".gongwei").length
		var theT = $(this)
		$(".gongwei").css('transition','all .4s linear').removeClass('gw-dq gw-y1 gw-y2 gw-z1 gw-z2').addClass('gw-qt')

		$(this).removeClass('gw-qt').addClass('gw-z1')
		$(".gongwei").eq((theNum+1) % lenNum).removeClass('gw-qt').addClass('gw-dq')
		$(".gongwei").eq((theNum+2) % lenNum).removeClass('gw-qt').addClass('gw-y1')
		$(".gongwei").eq((theNum+3) % lenNum).removeClass('gw-qt').addClass('gw-y2')
		$(".gongwei").eq(theNum-1).removeClass('gw-qt').addClass('gw-z2')
		function stepT(){
			$(".gongwei").removeClass('gw-dq gw-y1 gw-y2 gw-z1 gw-z2').addClass('gw-qt')
			theT.removeClass('gw-qt').addClass('gw-dq')
			$(".gongwei").eq((theNum+1) % lenNum).removeClass('gw-qt').addClass('gw-y1')
			$(".gongwei").eq((theNum+2) % lenNum).removeClass('gw-qt').addClass('gw-y2')
			$(".gongwei").eq(theNum-1).removeClass('gw-qt').addClass('gw-z1')
			$(".gongwei").eq(theNum-2).removeClass('gw-qt').addClass('gw-z2')
			// console.log(theNum,lenNum)
		}
		setTimeout(stepT,400)
		setTimeout(function(){
			$(".gongwei").css('transition','all .6s linear')
		},1000)
	})




	var cans ={};
	cans.winWidth = $(window).width();
	cans.winHeight = $(window).height();
	cans.conWidth = $(".contain").width();
	cans.conHeight = $(".contain").height();
	cans.winBilv = $(window).width()/$(window).height();
	cans.conBilv = $(".contain").width()/$(".contain").height();
	// console.log(cans)

	// console.log('宽：'+$(window).width(),'高：'+$(window).height())
	// console.log('宽：'+$(".contain").width(),'高：'+$(".contain").height())

	// console.log($('.copyright').outerHeight()+parseInt($('.copyright').css('margin-top')))
	// 饼干模型 停止运动
	$(".yq-stop").siblings(".binggan-con").hide()

	// 字体滚动
	function txtrun(){
		$(".s-r-td").each(function(){
			if($(this).children("span").width()>$(this).width()){
				var spanstr = $(this).children("span").html();
				$(this).children("span").html(spanstr+='\t\t')
			}
		})
		setInterval(function(){
			$(".s-r-td").each(function(){
				if($(this).children("span").width()>$(this).width()){
					var spanstr = $(this).children("span").html();
					spanstr =spanstr.slice(1)+spanstr[0];
					$(this).children("span").html(spanstr)
				}
			})
		},1000)
	}

	txtrun();

	// 下拉列表框
	$('.wx-tool img').click(function(){
		$('.dropdown-menu').slideToggle(150);
	})

	// 左边框 收回
	$(".side-left-show").click(function(){
		// $(".side-left-show").parent().toggleClass("side-left-hide")
		$(this).toggle(500)
		$("."+$(this).attr("show")).toggleClass("side-left-hide")
	})
	// 右边框 收回
	$(".side-right-show").click(function(){
		$(this).toggle(500)
		$("."+$(this).attr("show")).toggleClass("side-right-hide")
	})

	$(".hide-box").click(function(){
		var showEl = $(this).parent().attr("name")
		$("div[show='"+showEl+"']").toggle(500);
		$(this).parent().toggleClass("side-left-hide").toggleClass("side-right-hide")
	})

	// 下方按钮

	function btnFun(){
		var xmbtnS = 0;
		var btnNum = 0;
		if(btnNum == Math.floor(($(".contain").width()-$(".wx-bj-box").width()*2-300)/108)){
			return;
		}else{
			btnNum = Math.floor(($(".contain").width()-$(".wx-bj-box").width()*2-300)/108)
		}

		$(".xmbtn-prev,.xmbtn-next,.xmbtn-b").off()
		if($(".xmbtn").length>btnNum){
			$(".xmbtn-b").hover(function(){
				// console.log("进入")
				$(".xmbtn-next,.xmbtn-prev").css("display","inline-block")
				if(xmbtnS<1){$(".xmbtn-next").addClass("bhui")}
				if((xmbtnS+btnNum+1)>$(".xmbtn").length){$(".xmbtn-prev").addClass("bhui")}
			},function(){
				$(".xmbtn-next,.xmbtn-prev").css("display","none").removeClass("bhui")
			})
			$(".xmbtn").each(function(ind){
				if(ind+1>btnNum){
					$(this).hide();
				}else{
					$(this).show();					
				}
			})
			$(".xmbtn-prev").click(function(){
				$(".xmbtn-next,.xmbtn-prev").removeClass("bhui")
				if((xmbtnS+btnNum+1)>$(".xmbtn").length){
					$(this).addClass("bhui")
					return;
				}
				$(".xmbtn").eq(xmbtnS).hide();
				$(".xmbtn").eq(xmbtnS+btnNum).show();
				xmbtnS+=1;
			})
			$(".xmbtn-next").click(function(){
				$(".xmbtn-next,.xmbtn-prev").removeClass("bhui")
				if(xmbtnS<1){
					$(this).addClass("bhui")
					return;
				}
				xmbtnS-=1;
				$(".xmbtn").eq(xmbtnS).show();
				$(".xmbtn").eq(xmbtnS+btnNum).hide();
			})

		}
	}

	$(".xmbtn-next,.xmbtn-prev").hide();
	btnFun()

	$(window).resize(function(){
		btnFun()
	});

	// 保养时间：
	var byDate1 = "20271231"; 
	var byDate2 = "20270526"; 
	var byDate3 = "20270101"; 
	$('.EightycloudsFlipTimer').eq(0).find(".block_").each(function(ind){
		$(this).children().children("._count").html(byDate1[ind]);
	})
	$('.EightycloudsFlipTimer').eq(1).find(".block_").each(function(ind){
		$(this).children().children("._count").html(byDate2[ind]);
	})
	$('.EightycloudsFlipTimer').eq(2).find(".block_").each(function(ind){
		$(this).children().children("._count").html(byDate3[ind]);
	})
})