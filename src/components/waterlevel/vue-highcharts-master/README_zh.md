[![Travis](https://img.shields.io/travis/superman66/vue-highcharts.svg)](https://travis-ci.org/superman66/vue-highcharts) [![npm](https://img.shields.io/npm/v/vue2-highcharts.svg?style=plastic)](https://www.npmjs.com/package/vue2-highcharts) [![npm](https://img.shields.io/npm/dt/vue2-highcharts.svg?style=plastic)](https://www.npmjs.com/package/vue2-highcharts) [![npm](https://img.shields.io/npm/l/vue2-highcharts.svg)](https://www.npmjs.com/package/vue2-highcharts)
# vue-highcharts

> The component of Vue 2.0 for highcharts

查看 [Demo](http://chenhuichao.com/vue-highcharts/demo/)
或
[Demo On CodeSanbox](https://codesandbox.io/s/jjyqvv0k13)

## 安装
#### npm
```
npm install vue2-highcharts --save
```
## 用法

## 使用 ES6 Module引入，异步加载数据（推荐使用 ES6 `import`）
```es6
<template>
  <div>
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
    <button @click="load">load</button>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
const asyncData = {
  name: 'Tokyo',
  marker: {
    symbol: 'square'
  },
  data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
    y: 26.5,
    marker: {
      symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
    }
  }, 23.3, 18.3, 13.9, 9.6]
}
export default{
    components: {
        VueHighcharts
    },
    data(){
      return{
        options: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Monthly Average Temperature'
          },
          subtitle: {
            text: 'Source: WorldClimate.com'
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
              text: 'Temperature'
            },
            labels: {
              formatter: function () {
                return this.value + '°';
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: []
        }
      }
    },
    methods: {
      load(){
          let lineCharts = this.$refs.lineCharts;
          lineCharts.delegateMethod('showLoading', 'Loading...');
          setTimeout(() => {
              lineCharts.addSeries(asyncData);
              lineCharts.hideLoading();
          }, 2000)
      }
    }
}
</script>
```
可以通过 `this.$refs.lineCharts` 来获取到highcharts的实例。然后通过 `delegateMethod()` 这个代理方法，就可以调用所有 highcharts 的 方法。比如调用 `showLoading` 的方法。

如果你想添加功能模块的话，比如 Highstock、Highmaps 或者其他模块，需要额外引入。
在 demo 中的例子使用了 `Drilldown` 的功能，
首先你需要引入所需的文件:

```javascript
import Drilldown from 'highcharts/modules/Drilldown.js'
```
接着引入 `Highcharts`，加载模块：

```javascript
import Drilldown from 'highcharts/modules/Drilldown.js'
import Highcharts from 'highcharts'
Drilldown(Highcharts);
```
最后需要将 `Highcharts` 作为 props 传入到组件当中：

```javascript
<vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
```
同理，如果需要其他模块如 `Exporting（图像导出）`等，方式同上面的用法一样。 
**如果不需要使用其他功能模块的话，不需要上面这些步骤，也无需将 `Highcharts` 作为 props 传递给组件**
关于 Load module 可以看：[Highchart - 通过 npm 安装](https://www.hcharts.cn/docs/install-from-npm)

## 在 Nuxt.js 中使用
在 Nuxt.js 中使用 `vue2-highcharts`，你需要在 `~/plugins` 中先定义一个全局 Component `vue-highcharts.js`:
```js
import Vue from 'vue'
import VueHighcharts from 'vue2-highcharts'

Vue.component('VueHighcharts', VueHighcharts)
```

然后在 `nuxt.config.js` 中添加刚刚创建的 plugin：

```json
plugins: [{ src: '~plugins/vue-highcharts.js', ssr: false }],
```

这样就就可以在你的项目中使用 `vue2-highcharts`。
关于更多如何在 Nuxt.js 中使用 vue-highcharts，你可以查看: [vue-nuxt-demo for vue-highcharts](https://github.com/superman66/vue-nuxt-demo)
## Props
|Name                | Type          | Description(Default Value)   |
|-------------------- | ---------------- | -------------------|
|classname              | string            | 组件 classname  (default: `vue-highcharts`)| 
|style               | object  | 组件 styles(default: `{}`)|
|options            | object(require) | options 数据|
|highcharts | object | Highcharts 实例  |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080/demo
npm run dev

# build for production with minification
npm run build
```

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, [superman66](github.com/superman66)
