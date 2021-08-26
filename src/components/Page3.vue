<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-25 17:06:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 09:24:37
-->
<template>
    <div>
        <ul>
            <li v-for="(value,key) in arr">{{value|filter1|filter2}}:{{key}}
            </li>
        </ul>
        <button @click.ctrl.exact="megBox()">点我</button>
         <el-dialog title="登陆" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="30%">

         </el-dialog>
    </div>
</template>
<script>
 
 export default {
    name:"Page3",
    data(){
        return{
            arr:[1,4,3,6,7,2,8],
            dialogTableVisible:false
        }  
    },
    methods:{
        even:function(val){
            return this.arr.filter(function(a){
                return (a+2);
            })

        },
        megBox(){
            this.dialogTableVisible=true; 
        }

    },
    filters:{
        filter1(arr){
            return arr+3;

        },
        filter2(arr){
            return '#'+arr

        }
    },

    computed:{
        arrNumber:function(){
            return this.arr.filter(function(val){
                return val%2===0;
            })
        }
    }
}
</script>