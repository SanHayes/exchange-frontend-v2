const dayjs = require('dayjs');
const { short } = require('git-rev-sync');
const Webpack = require('webpack');

// 适配spug获取commit id的方式
const SPUG_GIT_COMMIT_ID = process.env.SPUG_GIT_COMMIT_ID;

const info = {
  commit: `${SPUG_GIT_COMMIT_ID ?? short()}`,
  build_time: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

process.env.VUE_APP_INFO = JSON.stringify(info);

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.entry('app').clear().add('./src/pages/index/main.js');
  },
  productionSourceMap: true,

  configureWebpack: {
    plugins: [
      new Webpack.DefinePlugin({
        __APP_INFO__: process.env.VUE_APP_INFO
      })
    ],
    cache: {
      type: 'filesystem'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.ceshi01.vip',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  transpileDependencies: true
};
