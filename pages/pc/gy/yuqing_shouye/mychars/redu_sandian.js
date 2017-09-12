function redu_sandian(){

var dom = document.getElementById("redu_sandian");
var myChart = echarts.init(dom);
var app = {};
var option = null;
myChart.showLoading();

$.get('./mychars/redu_sandian.json', function (json) {
    myChart.hideLoading();

    var data = json[0].x.map(function (x, idx) {
        return [+x, +json[0].y[idx],json[0].text[idx]];
    });

    myChart.setOption(option = {
        title: {
            text: '课程热度',
            left: 80,
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
                +"课程学习量 : "+ params.data[1]+ '<br>'
                +"课程评论数 : "+ params.data[0]+ '<br>';
                // console.log(11,params)
            }
        },
        xAxis: {
            type: 'value',
            name: '课程评论数',
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
                    return val + '条';
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            name: '课程学习量',
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
            left:100,
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
redu_sandian();