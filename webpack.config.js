'use strict';
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page'],
    exclude: [/app\/web\/page\/admin\/home\/(component|view|router|store)/],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    theme: 'app/web/theme',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {
    scss: true,
    vue: {
      exclude: []
    }
  },
  plugins: {
    skeleton: {
      env: ['dev'], // 开发环境启用
      name: ''
    }
  },
  node: {
    console: true
  },
  done() {
    console.log('如果启动成功后, Chrome控制台浏览器脚本报错, 可以尝试执行 npm run clean 清除缓存解决');
  }
};
