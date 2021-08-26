/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-24 14:53:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 16:26:39
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router.js'
Vue.prototype.$bus=new Vue()

Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
