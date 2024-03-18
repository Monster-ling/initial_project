import Legacy from '@vitejs/plugin-legacy';
import Vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import postcssPxtorem from 'postcss-pxtorem';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/h5/',
  server: {
    host: '127.0.0.1',
    port: 5500,
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      input: {
        index: new URL('index.html', import.meta.url).pathname,
      },
    },
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxtorem({
          rootValue: 37.5,
          propList: ['*', '!letter-spacing'],
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/var.scss";
          @import "src/styles/mixin.scss";
        `,
      },
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Legacy({
      modernPolyfills: ['es.global-this'],
    }),
    VueDevTools(),
  ],
});
