function guanxi(){
var color_box=[{
        normal:{color:'#007FFF'}
    },{
        normal:{color:'#4f93d8'}
    },{
        normal:{color:'#2f6589'}
    },{
        normal:{color:'#258e97'}
    },{
        normal:{color:'#11646b'}
    },{
        normal:{color:'#9a4545'}
    },{
        normal:{color:'#b75a5a'}
    },{
        normal:{color:'#c0962a'}
    },{
        normal:{color:'#b08108'}
    }]
var dom = document.getElementById("guanxi");


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
        left:"center",
        text: '远程教育研究关系分析'
    },
    tooltip: {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
        }
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',            
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 10
                    },
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
    name:'现代远程教育',
    itemStyle:color_box[1],
    x:100,
    y:100
},{
    name:'开放教育',
    itemStyle:color_box[2],
    x:100,
    y:140
},{
    name:'远程开放教育',
    itemStyle:color_box[2],
    x:65,
    y:135
},{
    name:'网络教育',
    itemStyle:color_box[2],
    x:50,
    y:100
},{
    name:'教学模式',
    itemStyle:color_box[2],
    x:70,
    y:70
},{
    name:'网络',
    itemStyle:color_box[2],
    x:100,
    y:60
},{
    name:'网络课程',
    itemStyle:color_box[2],
    x:130,
    y:80
},{
    name:'对策',
    itemStyle:color_box[3],
    x:300,
    y:100
},{
    name:'开放大学',
    itemStyle:color_box[4],
    x:330,
    y:120
},{
    name:'远程教学',
    itemStyle:color_box[4],
    x:300,
    y:135
},{
    name:'网络教学',
    itemStyle:color_box[4],
    x:260,
    y:100
},{
    name:'信息技术',
    itemStyle:color_box[4],
    x:270,
    y:70
},{
    name:'自主学习',
    itemStyle:color_box[4],
    x:300,
    y:60
},{
    name:'多媒体',
    itemStyle:color_box[4],
    x:330,
    y:80
},{
    name:'应用',
    itemStyle:color_box[5],
    x:300,
    y:300
},{
    name:'电大',
    itemStyle:color_box[6],
    x:300,
    y:340
},{
    name:'继续教育',
    itemStyle:color_box[6],
    x:265,
    y:335
},{
    name:'流媒体',
    itemStyle:color_box[6],
    x:250,
    y:300
},{
    name:'问题',
    itemStyle:color_box[6],
    x:330,
    y:320
},{
    name:'教学设计',
    itemStyle:color_box[6],
    x:300,
    y:260
},{
    name:'移动学习',
    itemStyle:color_box[6],
    x:330,
    y:280
},{
    name:'发展',
    itemStyle:color_box[7],
    x:100,
    y:300
},{
    name:'学习支持服务',
    itemStyle:color_box[8],
    x:100,
    y:340
},{
    name:'教育信息化',
    itemStyle:color_box[8],
    x:65,
    y:335
},{
    name:'高等教育',
    itemStyle:color_box[8],
    x:50,
    y:300
},{
    name:'教育技术',
    itemStyle:color_box[8],
    x:70,
    y:270
},{
    name:'终身教育',
    itemStyle:color_box[8],
    x:100,
    y:260
},{
    name:'教学',
    itemStyle:color_box[8],
    x:140,
    y:310
},{
                name: '远程教育',
                symbolSize:100,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 30
                        }
                    }
                },
                itemStyle:color_box[0],
                x: 200,
                y: 200
            }],
            // links: [],
            links: [{
                source: '远程教育',
                target: '现代远程教育'
            }, {
                source: '远程教育',
                target: '对策'
            }, {
                source: '远程教育',
                target: '应用'
            }, {
                source: '远程教育',
                target: '发展'
            },{
    source: '现代远程教育',
    target: '开放教育'
},{
    source: '现代远程教育',
    target: '远程开放教育'
},{
    source: '现代远程教育',
    target: '网络教育'
},{
    source: '现代远程教育',
    target: '教学模式'
},{
    source: '现代远程教育',
    target: '网络'
},{
    source: '现代远程教育',
    target: '网络课程'
},{
    source: '对策',
    target: '开放大学'
},{
    source: '对策',
    target: '远程教学'
},{
    source: '对策',
    target: '网络教学'
},{
    source: '对策',
    target: '信息技术'
},{
    source: '对策',
    target: '自主学习'
},{
    source: '对策',
    target: '多媒体'
},{
    source: '应用',
    target: '电大'
},{
    source: '应用',
    target: '继续教育'
},{
    source: '应用',
    target: '流媒体'
},{
    source: '应用',
    target: '问题'
},{
    source: '应用',
    target: '教学设计'
},{
    source: '应用',
    target: '移动学习'
},{
    source: '发展',
    target: '学习支持服务'
},{
    source: '发展',
    target: '教育信息化'
},{
    source: '发展',
    target: '高等教育'
},{
    source: '发展',
    target: '教育技术'
},{
    source: '发展',
    target: '节点4_5'
},{
    source: '发展',
    target: '教学'
}],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


}

guanxi();