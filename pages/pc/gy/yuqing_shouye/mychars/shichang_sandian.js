function shichang_sandian(){

var dom = document.getElementById("shichang_sandian");
var myChart = echarts.init(dom);
var app = {};
var option = null;
myChart.showLoading();

$.get('./mychars/shichang_sandian.json', function (json) {
    myChart.hideLoading();

    var data = json[0].x.map(function (x, idx) {
        return [+json[0].y[idx],+x,json[0].text[idx]];
    });

    myChart.setOption(option = {
        title: {
            text: '课程时长分析',
            left: 'left',
            textStyle:{
                fontSize:26,
                fontWeight:'normal',
                color:'#2ec7c9'
            }
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross'
        //     }

        // },
        tooltip: {
            textStyle:{
                fontSize:26,
                fontWeight:'normal',
            },
            trigger: 'item',
            formatter: function (params) {
                return params.data[2] + '<br>'
                +"点击次数 : "+ params.data[1]+ '<br>'
                +"课程时长 : "+ params.data[0]+ '<br>';
                // console.log(11,params)
            }
        },
        xAxis: {
            type: 'value',
            name: '课程时长',
            splitLine: {
                show: false
            },
            scale: true,
            splitNumber: 5,
            max: 'dataMax',
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            axisLabel: {
                formatter: function (val) {
                    return val + '分钟';
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 1000,
            max: 2000,
            interval: 200,
            name: '点击次数',
            axisLine:{
                lineStyle:{
                    color:'#2ec7c9'
                }
            },
            splitLine: {
                show: false
            }
        },
        grid:[{
            top:100
           }],
        series: [{
            name: 'scatter',
            type: 'scatter',
            symbolSize: function (val, param) {
                return json[0].marker.size[param.dataIndex] / json[0].marker.sizeref;
            },
            itemStyle: {
                normal: {
                    color: function (param) {
                        return json[0].marker.color[param.dataIndex];
                    }
                }
            },
            data: data
        }]
    });
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


}
shichang_sandian();