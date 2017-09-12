function shuzhi(){
// console.log("shuzih")

var dom = document.getElementById("shuzhi");
// console.log(dom)
var myChart = echarts.init(dom);
var option = {
    title: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2ec7c9'
        },
        text: '近期学习量'
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
        textStyle:{
            color:'#2ec7c9',
            fontSize:26
        },
        data: ['上海学习网', '学在数字长宁网','徐汇终身学习网']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
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
        type: 'value'
    },
    xAxis: {
        axisLine:{
            lineStyle:{
                color:'#2ec7c9'
            }
        },
        splitLine: {show: false},
        splitArea: {show: false},
        type: 'category',
        data: ['3月1','3月2','3月3','3月4','3月5','3月6','3月7','3月8','3月9','3月10','3月11','3月12','3月13','3月14','3月15']
    },
    series: [
        {
            name: '上海学习网',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [200,420,145,175,200,424,250,275,101,326,352,377,103,428,454]
        },
        {
            name: '学在数字长宁网',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [130,36,144,56,70,177,87,97,107,117,227,67,147,77,167]
        },
        {
            name: '徐汇终身学习网',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [246,256,89,300,221,141,60,80,199,219,238,258,177,97,116]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
}
shuzhi();
