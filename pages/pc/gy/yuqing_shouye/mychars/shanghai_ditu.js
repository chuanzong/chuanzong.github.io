function shanghai(){
var dom = document.getElementById("shanghai");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = [
        {name: "coord1", value: 9},
        {name: "coord2", value: 12},
        {name: "coord3", value: 12},
        {name: "coord4", value: 12},
        {name: "coord5", value: 14},
        {name: "coord6", value: 40},
        {name: "coord7", value: 40},
        {name: "coord8", value: 40},
        {name: "coord9", value: 40},
        {name: "coord10", value: 40},
        {name: "coord11", value: 80},
        {name: "coord12", value: 80},
        {name: "coord13", value: 80},
        {name: "coord14", value: 80},
        {name: "coord15", value: 80},
        {name: "coord16", value: 80},
        {name: "coord17", value: 150},
        {name: "coord18", value: 150},
        {name: "coord19", value: 150},
        {name: "coord20", value: 150},
        {name: "coord21", value: 150},
        {name: "coord22", value: 150},
        {name: "coord23", value: 110},
        {name: "coord24", value: 110},
        {name: "coord25", value: 110},
        {name: "coord26", value: 110},
        {name: "coord27", value: 110},
        {name: "coord28", value: 110},
        {name: "coord29", value: 110},
        {name: "coord30", value: 200},
        {name: "coord31", value: 200},
        {name: "coord32", value: 200},
        {name: "coord33", value: 200},
        {name: "coord34", value: 9},
        {name: "coord35", value: 14},
        {name: "coord36", value: 40},
        {name: "coord37", value: 40},
        {name: "coord38", value: 40},
        {name: "coord39", value: 40},
        {name: "coord40", value: 9},
        {name: "coord41", value: 9},
        {name: "coord42", value: 12},
        {name: "coord43", value: 12},
        {name: "coord44", value: 12},
        {name: "coord45", value: 14},
        {name: "coord46", value: 40},
        {name: "coord47", value: 40},
        {name: "coord48", value: 40},
        {name: "coord49", value: 40},
        {name: "coord50", value: 40}
     
];
var geoCoordMap = {
    "coord1":[121.6935983,31.20717572],
    "coord2":[121.4836681,31.34151724],
    "coord3":[121.4202062,31.24242887],
    "coord4":[121.0989078,31.15559619],
    "coord5":[121.4592214,31.2472098],
    "coord6":[121.3815194,31.21206205],
    "coord7":[121.633273,30.98264492],
    "coord8":[121.4309802,31.20512117],
    "coord9":[121.8158548,31.05891072],
    "coord10":[121.7410584,31.05845401],
    "coord11":[121.2229234,31.39647006],
    "coord12":[121.0552338,31.13598189],
    "coord13":[121.7473929,31.04881489],
    "coord14":[121.3473852,31.18670502],
    "coord15":[121.3698259,31.35931437],
    "coord16":[121.1123534,31.18776379],
    "coord17":[121.4592214,31.2472098],
    "coord18":[121.0796821,31.261264],
    "coord19":[121.2451185,31.08658587],
    "coord20":[121.496077,31.21486124],
    "coord21":[121.4610175,30.84199913],
    "coord22":[121.4870665,30.91997338],
    "coord23":[120.9165126,31.03952054],
    "coord24":[121.3791336,31.25229279],
    "coord25":[121.4592214,31.2472098],
    "coord26":[121.0796821,31.261264],
    "coord27":[121.180808,31.1959363],
    "coord28":[121.0642739,30.86054575],
    "coord29":[121.4133191,31.23856479],
    "coord30":[121.4592214,31.2472098],
    "coord31":[121.4395226,31.27420311],
    "coord32":[121.3841218,31.21727407],
    "coord33":[121.748599,30.98670407],
    "coord34":[121.4329869,31.19481514],
    "coord35":[121.4278796,31.23022071],
    "coord36":[121.6062378,31.09367445],
    "coord37":[121.291035,31.20782501],
    "coord38":[121.5626828,31.14020318],
    "coord39":[121.3201453,31.0859695],
    "coord40":[121.7159733,31.10205784],
    "coord41":[121.4447979,31.2965448],
    "coord42":[121.1293432,31.30952811],
    "coord43":[121.4262446,31.24317346],
    "coord44":[121.2455046,31.38480031],
    "coord45":[121.4027256,31.17248723],
    "coord46":[121.1967399,31.26217993],
    "coord47":[121.3328257,31.29700234],
    "coord48":[121.2987138,31.07084616],
    "coord49":[121.3619846,31.2612778],
    "coord50":[121.651098,30.90446433]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#040404',
    title: {
        text: '上海校区',
        left: 'center',
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
            color:'#2ec7c9'
        }
    },
    tooltip : {
        textStyle:{
            fontSize:26,
            fontWeight:'normal',
        },
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '上海',
        label: {
            emphasis: {
                show: false
            }
        },
        zoom:1.8,
        center:[121.4201453,31.0859695],
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            // name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                //return val[2] / 10;
                return 20;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                // return val[2] / 10;
                return 50
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

}
shanghai();