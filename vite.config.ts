import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3000,
    proxy:{
      '/api':{
         // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target:'http://47.99.134.126:28019/api/v1',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/,'') // 将api重写为空
      }
    }
  },
  plugins: [reactRefresh(),
    legacy({
      targets:['ie >= 11'],
      additionalLegacyPolyfills:['regenerator-runtime/runtime']
    })
  ],
  esbuild:{
    jsxInject:`import React from 'react'`
  }
})
