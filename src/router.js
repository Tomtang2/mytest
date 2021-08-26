/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-25 09:40:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 17:10:02
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import page1 from "./components/Page1.vue"
import page2 from "./components/Page2.vue"
import page3 from "./components/Page3.vue"
const routes=[
    {
        path:'/page1',
        component: page1
    },
    {
        path:'/page2',
        component: page2
    },
    {
        path:'/page3',
        component: page3
    },
    {
        path:'/',
        redirect:"page1"
    },
   
]

const router =new VueRouter({
    routes
});
export default router
