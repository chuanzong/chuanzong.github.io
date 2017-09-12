function shuiping(){
var myChart = echarts.init(document.getElementById('shuiping'));


        // 第二个参数可以指定前面引入的主题
		// var myChart = echarts.init(document.getElementById('main'), 'macarons');

var labelRight = {
    normal: {
        position: 'right'
    }
};
var labelInsideRight = {
    normal: {
        position: 'insideLeft'
    }
};



        // 指定图表的配置项和数据
var option = {
    title: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2ec7c9'
        },
        text: '交错正负轴标签'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type : 'value',
        position: 'top',
        axisLine:{
            lineStyle:{
                color:'#2ec7c9'
            }
        },
        // axisLabel: {show: false},
        splitLine: {
            lineStyle:{
                color:'#2ec7c9'
            }
        },
        splitArea: {show: false}

    },
    yAxis: {
        type : 'category',
        axisLine: {show: false},
        
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data : ['six', 'five', 'four', 'three', 'two', 'one']
    },
    series : [
        {
            name:'生活费',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{
                    color:'#2ec7c9'
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                }
            },
            data:[
                // {value: -7, label: labelRight},
                // {value: 44, label: labelInsideRight},           
                // {value: -23, label: labelRight},
                // {value: 58, label: labelInsideRight},
                // {value: 47, label: labelInsideRight},
                // {value: -36, label: labelRight},
            ]
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);

function animate() {
    setTimeout(animate,2500)
    var demodata = [
                {value: -7, label: labelRight},
                {value: 44, label: labelInsideRight},           
                {value: -23, label: labelRight},
                {value: 58, label: labelInsideRight},
                {value: 47, label: labelInsideRight},
                {value: -36, label: labelRight},
    ];
    for(var i in demodata){
        demodata[i].value=(60-Math.floor(Math.random()*120))
        demodata[i].label=demodata[i].value>0?labelInsideRight:labelRight;
    }

    option.series[0].data = demodata;
    myChart.setOption(option);
}

animate()

}
shuiping();