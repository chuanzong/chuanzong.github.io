function WordCloud(container, words, click_callback, extraClass, radius_ratio, min_words_num, enlarge_ratio, font_size_ratio)
{
	this.opt={};
	this.opt.container=container;
	var w=$(container).css({
		'position':'relative'
	}).width();
	var h=$(container).height();
	if(w>h)
	{
		this.opt.radius=h/2;
	}
	else
	{
		this.opt.radius=w/2;
	}

	if(radius_ratio)
	{
		this.opt.radius*=radius_ratio;
	}

	this.opt.force_stop=false;

	this.stop=function(){
		this.opt.force_stop=true;
	}

	this.resume=function(){
		this.opt.force_stop=false;
	}

	this.opt.dtr=Math.PI/180;
	this.opt.d=360;
	this.opt.mcList = [];
	this.opt.active = false;
	this.opt.lasta = 1;
	this.opt.lastb = 1;
	this.opt.distr = true;
	this.opt.tspeed=5;
	this.opt.size=250;

	this.opt.mouseX=0;
	this.opt.mouseY=0;

	this.opt.howElliptical=1;

	this.opt.container.empty();



	if(words.length==0)
		return;


	var i=0;

	if(min_words_num!==0)
	{
		var min_length=0;
		var i=parseInt('0'+min_words_num);
		if(i>0)
		{
			min_length=i;
		}
		else
		{
			min_length=15;
		}

		var ori_length=words.length;

		if(words.length>min_length)
			min_length=words.length;

		while(words.length<min_length)
		{
			words.push(words[(i++) % ori_length]);
		}

	}


	for(var i= 0; i<words.length; ++i)
	{
		var _extraClass="";
        var dataType = 1;
		if(extraClass && extraClass[i]){
			_extraClass=extraClass[i];
            switch(_extraClass){
                case 'lt_fmPlWNeg':
                    dataType = -1;
                    break;
                case 'lt_fmPlWPos':
                    dataType = 1;
                    break;
            }
		}

		var padding_t=1;
		var padding_l=1;

		if(enlarge_ratio && enlarge_ratio[i]){
			padding_t=enlarge_ratio[i];
			padding_l=enlarge_ratio[i]*2;
		}

		this.opt.container.append($('<a></a>').attr('data-t',dataType).addClass(_extraClass).css({
			color:_extraClass,
			position: 'absolute',
			padding: padding_t+'px '+padding_l+'px',
			'font-weight': 'bold',
			'text-decoration': 'none',
			'white-space': 'nowrap'
		}).html(words[i]).click((function(opt, word){
			return function(){
				opt.force_stop=true;
				click_callback && click_callback(this, word);
			};
		})(this.opt, words[i])));

	}

	this.opt.aA=container.find('a');
	this.opt.oDiv=container;
	this.opt.sinecosine={
		sa:0,
		ca:0,
		sb:0,
		cb:0,
		sc:0,
		cc:0
	}

	for(var i=0;i<this.opt.aA.length;i++)
	{
		var oTag={};

		oTag.offsetWidth=$(this.opt.aA[i]).width();
		oTag.offsetHeight=$(this.opt.aA[i]).height();

		this.opt.mcList.push(oTag);
	}

	sineCosine(this.opt.sinecosine, 0, 0, 0);

	positionAll(this.opt);

	var opt=this.opt;

	$(opt.oDiv).mouseover(function(){
		opt.active=true;
	}).mouseout(function(){
		opt.active=false;
	}).mousemove(function(e){
		opt.mouseX= e.pageX-(opt.oDiv.offset().left+opt.oDiv.width()/2);
		opt.mouseY= e.pageY-(opt.oDiv.offset().top+opt.oDiv.height()/2);
		opt.mouseX/=5;
		opt.mouseY/=5;
	});

	this.refresh=setInterval(function(){
		update(opt)}, 30
	);


	function sineCosine(opt, a, b, c)
	{
		var dtr=Math.PI/180;
		opt.sa = Math.sin(a * dtr);
		opt.ca = Math.cos(a * dtr);
		opt.sb = Math.sin(b * dtr);
		opt.cb = Math.cos(b * dtr);
		opt.sc = Math.sin(c * dtr);
		opt.cc = Math.cos(c * dtr);
	}

	function positionAll(opt)
	{
		var phi=0;
		var theta=0;
		var max=opt.mcList.length;
		var i=0;

		var aTmp=[];
		var oFragment=document.createDocumentFragment();

		//�������
		for(i=0;i<opt.aA.length;i++)
		{
			aTmp.push(opt.aA[i]);
		}

		aTmp.sort
		(
			function ()
			{
				return Math.random()<0.5?1:-1;
			}
		);

		for(i=0;i<aTmp.length;i++)
		{
			oFragment.appendChild(aTmp[i]);
		}

		opt.oDiv.append($(oFragment));

		for( var i=1; i<max+1; i++){
			if( opt.distr )
			{
				phi = Math.acos(-1+(2*i-1)/max);
				theta = Math.sqrt(max*Math.PI)*phi;
			}
			else
			{
				phi = Math.random()*(Math.PI);
				theta = Math.random()*(2*Math.PI);
			}
			//���任
			opt.mcList[i-1].cx = opt.radius * Math.cos(theta)*Math.sin(phi);
			opt.mcList[i-1].cy = opt.radius * Math.sin(theta)*Math.sin(phi);
			opt.mcList[i-1].cz = opt.radius * Math.cos(phi);

			opt.aA[i-1].style.left=opt.mcList[i-1].cx+opt.oDiv.width()/2-opt.mcList[i-1].offsetWidth/2+'px';
			opt.aA[i-1].style.top=opt.mcList[i-1].cy+opt.oDiv.height()/2-opt.mcList[i-1].offsetHeight/2+'px';
		}
	}

	function update(opt)
	{
		if(opt.force_stop)
		{
			return;
		}

		var a;
		var b;

		if(opt.active)
		{
			a = (-Math.min( Math.max( -opt.mouseY, -opt.size ), opt.size ) / opt.radius ) * opt.tspeed;
			b = (Math.min( Math.max( -opt.mouseX, -opt.size ), opt.size ) / opt.radius ) * opt.tspeed;
		}
		else
		{
			a = opt.lasta * 0.98;
			b = opt.lastb * 0.98;
		}

		opt.lasta=a;
		opt.lastb=b;

		if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
		{
			return;
		}

		var c=0;
		sineCosine(opt.sinecosine, a,b,c);
		for(var j=0;j<opt.mcList.length;j++)
		{
			var rx1=opt.mcList[j].cx;
			var ry1=opt.mcList[j].cy*opt.sinecosine.ca+opt.mcList[j].cz*(-opt.sinecosine.sa);
			var rz1=opt.mcList[j].cy*opt.sinecosine.sa+opt.mcList[j].cz*opt.sinecosine.ca;

			var rx2=rx1*opt.sinecosine.cb+rz1*opt.sinecosine.sb;
			var ry2=ry1;
			var rz2=rx1*(-opt.sinecosine.sb)+rz1*opt.sinecosine.cb;

			var rx3=rx2*opt.sinecosine.cc+ry2*(-opt.sinecosine.sc);
			var ry3=rx2*opt.sinecosine.sc+ry2*opt.sinecosine.cc;
			var rz3=rz2;

			opt.mcList[j].cx=rx3;
			opt.mcList[j].cy=ry3;
			opt.mcList[j].cz=rz3;

			var per=opt.d/(opt.d+rz3);

			opt.mcList[j].x=(opt.howElliptical*rx3*per)-(opt.howElliptical*2);
			opt.mcList[j].y=ry3*per;
			opt.mcList[j].scale=per;
			opt.mcList[j].alpha=per;

			opt.mcList[j].alpha=(opt.mcList[j].alpha-0.5)*(10/5);
		}

		doPosition(opt);
		depthSort(opt);
	}


	function depthSort(opt)
	{
		var aTmp=[];

		for(var i=0;i<opt.aA.length;i++)
		{
			aTmp.push(opt.aA[i]);
		}

		aTmp.sort
		(
			function (vItem1, vItem2)
			{
				if(vItem1.cz>vItem2.cz)
				{
					return -1;
				}
				else if(vItem1.cz<vItem2.cz)
				{
					return 1;
				}
				else
				{
					return 0;
				}
			}
		);
/*
		for(i=0;i<aTmp.length;i++)
		{
			aTmp[i].style.zIndex=i;
		}*/
	}

	function doPosition(opt)
	{
		var l=opt.oDiv.width()/2;
		var t=opt.oDiv.height()/2;
		for(var i=0;i<opt.mcList.length;i++)
		{
			opt.aA[i].style.left=opt.mcList[i].cx+l-opt.mcList[i].offsetWidth/2+'px';
			opt.aA[i].style.top=opt.mcList[i].cy+t-opt.mcList[i].offsetHeight/2+'px';

			var fs=Math.ceil(8*opt.mcList[i].scale/2)+12;

			if(font_size_ratio && font_size_ratio[i])
			{
				fs*=font_size_ratio[i];
			}

            if(fs<12)
                fs=12;

            fs*=1.2;

			opt.aA[i].style.fontSize=fs+'px';

			opt.aA[i].style.filter="alpha(opacity="+100*opt.mcList[i].alpha+")";
			opt.aA[i].style.zIndex=Math.floor(100*opt.mcList[i].alpha);
			opt.aA[i].style.opacity=opt.mcList[i].alpha;
		}
	}

}