<template>
  <div class="jobtop">
    <van-nav-bar class="bar" title="麻豆直聘" left-text="Java">
      <template #right>
        <van-icon name="search" size="18" @click="onClickRight"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import {NavBar} from 'vant';

Vue.use(NavBar);
export default {
  name: "JobTop",
  methods:{
    onClickRight(){
      this.$router.push("/SelectSearch")
    }
  }
}
</script>

<style scoped>
.jobtop {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
}.bar {
  /*background-color: #69bf9d;*/
}
</style>
