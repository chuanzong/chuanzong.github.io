function hunhe(){
var myChart = echarts.init(document.getElementById('hunhe'));
var option = {
    color:['#5a95f0','#2ec7c9'],
    title: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2ec7c9'
        },
        x:'center',
        text: '舆情分析'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show:false,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        show:false,
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            splitLine: {
                show: 1,
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            splitLine: {
                show: 1,
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);

function animate() {
    setTimeout(animate,2000)
    var demodata1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    var demodata2=[],demodata3=[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 16.3, 20, 15.0, 16.5, 12.0, 6.2];
    for(var i in demodata1){
        var bh = Math.random() 
        demodata1[i] += (10-Math.floor(bh*20))
        demodata2[i]=demodata1[i] + (10-Math.floor(Math.random()*20))
        demodata3[i]+= (3-Math.floor(bh*6))
    }

    option.series[0].data = demodata1;
    option.series[1].data = demodata2;
    option.series[2].data = demodata3;
    // console.log(option.series)
    myChart.setOption(option);
}

animate()
}
hunhe()