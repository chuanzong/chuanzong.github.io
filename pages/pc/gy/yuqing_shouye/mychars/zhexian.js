function zhexian(){
var myChart = echarts.init(document.getElementById('zhexian'));


var option = {
    color:['rgba(1,173,160,.8)','rgba(171,143,30,.8)','rgba(71,143,190,.8)'],
    title: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2ec7c9'
        },
        x:'center',
        top:20,
        text: '论坛版块热度'
    },
    tooltip : {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
        },
        trigger: 'axis'
    },
    legend: {
    },
    toolbox: {
       
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            splitArea: {show: false},
            splitLine: {
                show:true,
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            boundaryGap : false,
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            data : ['一月','三月','五月','七月','九月','十一月','一月']
        }
    ],
    yAxis : [
        {
            splitLine: {show: false},
            splitArea: {show: false},
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            type : 'value'
        }
    ],
    series : [

        {
            name:'社区管理',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            markPoint:{
               symbol:'circle',
               symbolSize:200

            },
            data:[200, 300, 180,240, 150, 230, 100]
        },
        {
            name:'图书馆',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[110, 214, 115, 141, 114, 130, 130]
        },
        {
            name:'就业',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 90, 120, 120, 50, 120, 210]
        }
    ]
};


                    


// myChart.setOption(option);


function animate() {
    setTimeout(animate,2000)
    var demodata1 = [120, 90, 120, 120, 50, 120, 210]
    var demodata2=[],demodata3=[];
    for(var i in demodata1){
        demodata1[i]=Math.floor(Math.random()*200)
        demodata2[i]=Math.floor(Math.random()*200)
        demodata3[i]=Math.floor(Math.random()*200)
    }

    option.series[0].data = demodata1;
    option.series[1].data = demodata2;
    option.series[2].data = demodata3;
    // console.log(option.series)
    myChart.setOption(option);
}

animate()

}

zhexian()