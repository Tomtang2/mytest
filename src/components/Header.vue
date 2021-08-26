<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-24 15:15:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 18:08:39
-->
<template>
    <div class="hello">
    <div class="app-header" @mouseover="enter" @mouseleave="leave">
      <img class="image" src="../assets/logo-public.png" alt="">
      <a href="#" class="leftLabel">亲爱的召唤师，欢迎登陆</a>
      <div class="navBar">
        <ul class="f1" >
        <li>
          <span class="title" >游戏资料</span>
          <span class="subtitle">GAME INFO</span>
        </li>
        <li>
          <span class="title">商城/合作</span>
          <span class="subtitle">STORE</span>
        </li>
        <li>
          <span class="title">社区互动</span>
          <span class="subtitle">COMMUNITY</span>
        </li>
        <li>
          <span class="title" @mouseover="onSub()">赛事官网</span>
          <span class="subtitle">ESPORTS</span>
        </li>
        <li>
          <span class="title">{{fdata}}</span>
          <span class="subtitle">{{fmessage}}</span>
        </li>
      </ul>
      </div>
      
    </div>
    <div v-bind:class="{'cc':isActive}">
    </div>
     
  </div>
</template>
<script>
export default {
    name:"Header",
    props:{fdata:String,fmessage:Number},
    data(){
    return{
      isActive:false,
      outone:'我是子组件的数据1',
      outtwo:'我是子组件的数据2',
    }

  },
  methods: {
     enter:function(){
     this.isActive=true;
   },
    leave:function(){
     this.isActive=false;
   },
   mytest:function(){
     alert('我是头部组件');
   },
   onSub(){
     this.$emit('mymo',this.outone,this.outtwo);
   }
  },
  computed:{

  },
  components:{
    
  }
    
}
</script>
<style scoped>
.cc{
  position: absolute;
  width: 100%;
  height: 200px;
  top:70px;
  margin: 0;
  padding: 0%;
  background-color:black;
  opacity: 0.7;
  animation-name: mymove;
  animation-duration: 1.5s;
}
button{
  position: relative;
}
.hello{
  overflow: hidden;
}
.f1{
  overflow: hidden;
}

.image{
  position: relative;
  display: block;
  left: 100px;
  top: 8px;
  float: left;
}
.head_left{
  color: white;
  position:relative;
  left: 30%;
  top: 30px;
}
.leftLabel{
  position: absolute;
  text-decoration: none;
  color: white;
  top:10px;
  right: 20px;
  font-family: 'Courier New', Courier, monospace;
  
}
.app-header{
  position: absolute;
  background-color: black;
  color: white;
  width: 100%;
  height: 70px;
}
.navBar:hover >>> #xiala{
  display: none;
}
.navBar{
  position: relative;
  left: 20%;
}
.navBar ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.navBar li{
  float: left;
  margin-right: 30px;
  letter-spacing: 1px;
  margin-top: 15px;
  
}
.title{
  display: block;
  font: 12px/1.5 "Microsoft YaHei",Tahoma,"simsun",sans-serif;
  line-height: 10px;
}
.subtitle{
  text-align: center;
  font: 12px/1.5 "Microsoft YaHei",Tahoma,"simsun",sans-serif; 
  font: 10px;
  line-height: 10px;
}
@keyframes mymove {
  from {
    opacity: 0;
  }
  to{
    opacity: 0.7;
  }
}
</style>