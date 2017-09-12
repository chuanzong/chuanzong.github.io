function shuzhi(){


var myChart = echarts.init(document.getElementById('shuzhi'));
// 指定图表的配置项和数据
var option = {
    title: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2ec7c9'
        },
        text: '消费产品行为分析'
    },
    tooltip: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
        },
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	show:!1,
        data:['销量']
    },
    xAxis: {
    	axisLine:{
    		lineStyle:{
    			color:'#2ec7c9'
    		}
    	},
    	splitLine: {show: false},
    	splitArea: {show: false},
        data: ["产品1","产品2","产品3","产品4","产品5","产品6"]
    },
    yAxis: {
    	axisLine:{
    		lineStyle:{
    			color:'#2ec7c9'
    		}
    	},
    	splitLine: {
    		show: 1,
    		lineStyle:{
    			color:'#2ec7c9'
    		}
    	},
    	splitArea: {show: false}
    },
    series: [{
        name: '销量',
        type: 'bar',
        barWidth:60,
        itemStyle:{
            normal:{
                color:'#2ec7c9'
            }
        },
        label: {
            normal: {                        
                show: false,
                position: 'top'
            }
        },
        // data: [5, 20, 36, 10, 10, 20]
        data: []
    }]
};

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);


function animate() {

    setTimeout(animate,2000)
    var demodata = [5, 20, 36, 10, 10, 20];
    for(var i in demodata){
        demodata[i]=Math.floor(Math.random()*40)
    }

    option.series[0].data = demodata;
    myChart.setOption(option);
}

animate()

}
shuzhi();
