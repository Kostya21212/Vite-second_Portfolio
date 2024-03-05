import { defineConfig } from 'vite'
import {resolve} from 'path'
export default defineConfig({
  base: "/Vite-second_Portfolio/",
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname,'index.html'),
       about:resolve(__dirname,'./src/about.js'),
       todo:resolve(__dirname,'./pages/todo.html')
      }
    }
  }
})