function leida(){

var dom = document.getElementById("leida");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',           
            color:'#2ec7c9'
        },
        text: '课程类别热度雷达图'
    },
    tooltip: {
        textStyle:{
            fontSize:20,
            fontWeight:'normal',
        },
        trigger: 'item',
    },
    legend: {
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                fontSize:16,
                color:"#2ec7c9"
            }
        },
        indicator: [
           { name: '终身教育', max: 10},
           { name: '就业指导', max: 10},
           { name: '生活保健', max: 10},
           { name: '文化涵养', max: 10},
           { name: '休闲技艺 ', max: 10},
           { name: '基础教育', max: 10}
        ]
    },
    series: [{
        type: 'radar',        
        lineStyle:{
            normal:{
                color:"#2ec7c9"
            }
        },
        itemStyle:{
            normal:{
                color:"#2ec7c9"
            }
        },
        areaStyle: {
            normal: {
                color:"#2ec7c9"
            }
        },
        data : [
             {
                value : [7, 9, 9, 6, 5, 4],
                name : '课程类别热度雷达图'
            }
        ]
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

}
leida();