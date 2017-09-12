function juxing(){

var dom = document.getElementById("juxing");
var myChart = echarts.init(dom);
var app = {};
option = null;
var uploadedDataURL = "./mychars/juxing.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (rawData) {

    myChart.hideLoading();

    function convert(source, target, basePath) {
        for (var key in source) {
            var path = basePath ? (basePath + '.' + key) : key;
            if (key.match(/^\$/)) {

            }
            else {
                target.children = target.children || [];
                var child = {
                    name: path
                };
                target.children.push(child);
                convert(source[key], child, path);
            }
        }

        if (!target.children) {
            target.value = source.$count || 1;
        }
        else {
            target.children.push({
                name: basePath,
                value: source.$count
            });
        }
    }

    var data = [];

    convert(rawData, data, '');

    myChart.setOption(option = {
        // color:'#ff0000',
        color:['#055289'],
        title: {
            text: '近期热门课程',
            x:'center',
            top:10,            
            textStyle:{
                fontSize:26,
                fontWeight:'normal',
                color:'#2ec7c9'
            }
        },
        tooltip: {
            textStyle:{
                fontSize:26,
                fontWeight:'normal',
            }
        },
        series: [{
            name: 'option',
            roam: 'flase',
            type: 'treemap',
            top:70,
            height:"80%",
            visibleMin: 300,
            data: data.children,
            leafDepth: 2,
            label:{
                normal:{
                    textStyle:{
                        fontSize:20
                    }
                }
            },
            levels: [
                {
                    itemStyle: {
                        normal: {
                            borderColor: '#555',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    }
                },
                {
                    // colorSaturation: [0.6, 0.8],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.7,
                            gapWidth: 2,
                            borderWidth: 2
                        }
                    }
                },
                {
                    // colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.6,
                            gapWidth: 2
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5]
                }
            ]
        }]
    })
});;
// if (option && typeof option === "object") {
//     myChart.setOption(option, true);
// }

}
juxing();