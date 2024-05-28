var myChart = echarts.init(document.getElementById('main'));
var options = {
    series: [{
        type: 'map3D',
        map: '北京',
        name: '北京',
        /*  
            shading三维图形的着色效果,值：
                'color'只显示颜色，不受光照等因素影响。
                'lambert'通过景点的lambert着色表现光照的明暗
                'realistic'真是感渲染
        */
        shading: 'realistic',
        // 真实感材质相关配置 shading: 'realistic'时有效
        realisticMaterial: {
            // detailTexture: 'imgs/19.jpeg',
            textureTiling: 1,
            roughness: 1,
            metalness: 0,
            roughnessAdjust: 0
        },
        // environment: 'imgs/19.jpeg',
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#09C7F7' // 天空颜色
        }, {
            offset: 0.7, color: '#fff' // 地面颜色
        }, {
            offset: 1, color: '#A2875E' // 地面颜色
        }], false),
        boxDepth: 100,//地图倾斜度
        regionHeight: 5,//地图高度
        // 标签设置
        label: {
            show: true,//是否显示市
            textStyle: {
                color: "#000",//文字颜色
                fontSize: 16,//文字大小
                fontFamily: '微软雅黑',
                backgroundColor: "rgba(0,0,0,0)",//透明度0清空文字背景
            }
        },
        //三维视觉属性
        itemStyle: {
            color: '#4575b4',//地图颜色
            borderWidth: 1.5,//分界线宽度  
            borderColor: "#459bca",//分界线颜色  
        },
        // 鼠标hover高亮
        emphasis: {
            label: {
                show: true,//是否显示标签
                textStyle: {
                    color: '#fff',//高亮文字颜色
                    fontFamily: '微软雅黑'
                }
            },
        },
        selectedMode: "single",// 地图高亮单选
        // environment:'imgs/19.jpeg',
        viewControl: {
            distance: 150,// 地图视角 控制初始大小
            rotateSensitivity: 1,// 旋转
            zoomSensitivity: 1,// 缩放
        },
    }]
}
myChart.setOption(options);