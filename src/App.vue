<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-24 14:53:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 11:40:33
-->
<template>
  <div id="app">
    <el-container>
      <el-header style="height:70px;padding:0;z-index:3">
        <he
          ref="header_component"
          :fdata="'时间'"
          :fmessage="1"
          @mymo="onSubmit"
        ></he>
      </el-header>
      <el-container>
        <el-aside width="200px" style="text-align:left;line-height:20px">
          <router-link to="/page1" >首页</router-link>
          <router-link to="/page2" >人物介绍</router-link>
          <router-link to="/page3" >列表渲染</router-link>
            <router-view></router-view>
        </el-aside>
        <el-container>
          <el-main>
            <el-button >第一页</el-button>
            <el-button >第二页</el-button>
            <el-button >第三页</el-button>
            <el-button >第一页</el-button>
            <el-button >第二页</el-button>
            <el-button >第三页</el-button>
            <el-button >第一页</el-button>
            <el-button >第二页</el-button>
            <el-button >第三页</el-button>
            
          </el-main>
          <el-footer>
            <el-button>调用</el-button>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import * as echarts from "echarts";
export default {
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000,
      });
    },
    getA() {
      this.fdata = "设计";
      this.fmessage = "design";
      this.$refs.header_component.mytest();
    },
    bianse() {
      this.isActive = true;
      this.isNotActive = false;
    },
    setRed(val){
      this.isSelect=val;
    },
    onSubmit(a, b) {
      (this.fdata = "加法"), (this.fmessage = "add");
    },
    play() {
      let mychart = echarts.init(this.$refs.myChart);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            interval: 6,
            rotate: 35,
          },
        },
        series: [
          {
            data: [1, 3, 5, 4, 2, 6, 3],
            type: "line",
          },
        ],
      };
      mychart.setOption(option);
    },
  },
  data() {
    return {
      isActive: false,
      isNotActive: true,
      fdata: "时间",
      fmessage: "Time",
      isSelect:1
    };
  },
  components: {
    he: Header,
  },
  mounted() {
    this.play();
  },
  computed:{
    
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  float: left;
}
.page {
  margin-left: 10px;
  text-decoration: none;
  color: black;
}
.active{
  background: red;
}
</style>
