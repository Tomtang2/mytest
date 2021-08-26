<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-25 09:37:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 16:31:05
-->
<template>
    <div>
        <p>英雄联盟是一个</p>
        name：
        <el-input
             placeholder="请输入姓名"
             suffix-icon="el-icon-user"
             v-model="input_msg">
        </el-input>
        <p>{{input_msg}}</p>
        <button @click="mybutton()">点我传输数据</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"我是第一个组件",
            input_msg:'',
        }
    },
    methods:{
        mybutton:function(){
            this.$bus.$emit('toPage2',{firstdata:'我是英雄联盟的数据',seconddata:'我是剑圣',thirddata:'我是盖伦'});
        }
    },
    beforeDestroy(){
        
    }

}
</script>