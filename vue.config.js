const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭 ESLint 代码检查功能
  lintOnSave: false,

  //置代理解决跨域
  // 配置代理解决跨域只在开发环境中有效果，生产环境该方法无效
  devServer: {
    proxy: {
      //以 /api 开头的请求路径走代理
      '/api': {
        //代理目标基础路径
        target: 'http://apis.juhe.cn',
        // 修改 host 字段
        changeOrigin: true,
        //把路径中的 /api 替换为空串
        pathRewrite: { '^/api': '' },
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
})
