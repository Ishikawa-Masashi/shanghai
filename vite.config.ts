import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  /**
   * [plugin:vite:css] '~antd/dist/antd.less' wasn't found.
   * less import no support webpack alias '~'
   *
   * Ref: https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
   */
  plugins: [react({})],
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  // https://vitejs.bootcss.com/config/#build-options
  build: {
    // https://vitejs.bootcss.com/config/#build-lib
    // lib: {
    //   entry: "./src/index.tsx",
    //   formats: ["es"],
    //   fileName: "index",
    // },

    /**
     * index.es.js:250 Uncaught Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
     *
     * Ref:
     *   https://github.com/styled-components/styled-components/issues/2690
     *   https://vitejs.bootcss.com/config/#build-rollupoptions
     */
    rollupOptions: {
      // external: ["react", "react-dom"],
    },
  },
});
