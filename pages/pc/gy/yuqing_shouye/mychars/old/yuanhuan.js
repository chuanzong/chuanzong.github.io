function yuanhuan(){

var myChart = echarts.init(document.getElementById('yuanhuan'));


var labelTop = {
    normal : {
        color: '#2cfbfe'
    }
};


var labelBottom = {
    normal : {
        color: '#033431'
    }
};

var unshow = {
    normal:{
        show : false
    }
}
var show = {
    normal:{
        textStyle:{
            fontSize:20
        },
        position: 'center'
    }
}

var radius = [40, 55];
var option = {
    title : {
        text: '采购及库存监控',
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2cfbfe'
        },
        left:'10%'
    },
    
    series : [
        {
            type : 'pie',
            center : ['10%', '50%'],
            hoverAnimation: false,
            radius : radius,
            // label:unshow,
            labelLine :unshow,
            data : [
                {name:'other', value:20, itemStyle : labelBottom},
                {name:'A', value:80,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['35%', '50%'],
            hoverAnimation: false,
            radius : radius,
            // label:unshow,
            labelLine :unshow,
            data : [
                {name:'other', value:10, itemStyle : labelBottom},
                {name:'B', value:90,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['60%', '50%'],
            hoverAnimation: false,
            radius : radius,
            // label:unshow,
            labelLine :unshow,
            data : [
                {name:'other', value:20, itemStyle : labelBottom},
                {name:'C', value:80,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['85%', '50%'],
            hoverAnimation: false,
            radius : radius,
            // label:unshow,
            labelLine :unshow,
            data : [
                {name:'other', value:10, itemStyle : labelBottom},
                {name:'D', value:90,itemStyle : labelTop}
            ]
        }
        
    ]
};

// myChart.setOption(option);

function animate() {
    setTimeout(animate,2000)
        var rad = Math.floor(Math.random()*100)
        var demodata1 = [
            {name:'other', value:(100-rad),label:unshow, itemStyle : labelBottom },
            {name:rad, value:rad,label:show, itemStyle : labelTop}
        ]
        var rad = Math.floor(Math.random()*100)
        var demodata2 = [
            {name:'other', value:(100-rad),label:unshow, itemStyle : labelBottom},
            {name:rad, value:rad,label:show, itemStyle : labelTop}
        ]
        var rad = Math.floor(Math.random()*100)
        var demodata3 = [
            {name:'other', value:(100-rad),label:unshow, itemStyle : labelBottom},
            {name:rad, value:rad,label:show, itemStyle : labelTop}
        ]
        var rad = Math.floor(Math.random()*100)
        var demodata4 = [
            {name:'other', value:(100-rad),label:unshow, itemStyle : labelBottom},
            {name:rad, value:rad,label:show, itemStyle : labelTop}
        ]
    // }

    option.series[0].data = demodata1;
    option.series[1].data = demodata2;
    option.series[2].data = demodata3;
    option.series[3].data = demodata4;
    myChart.setOption(option);
}

animate()


}
yuanhuan()