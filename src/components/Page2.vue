<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-25 09:38:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 16:40:11
-->
<template>
    <div>
        <p>{{msg}}</p>
        <el-button @click="ChangeA('我改变了')">点我</el-button>
    </div>
</template>
<script>
export default {
    name:"Page2",
    data(){
        return{
            msg:'我是第二个组件'
        }
    },
    methods:{
        ChangeA:function(a){
           this.msg=a;
        }

    },
    created(){
        console.log("created");
        let that=this;
        that.$bus.$on('toPage2',data=>{
        that.msg=data.firstdata;
        console.log(that.msg,that);
        }); 
    }
}
</script>