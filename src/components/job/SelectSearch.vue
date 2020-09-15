<template>
  <div>
    <my-JobTop></my-JobTop>
    <my-JobHead></my-JobHead>

    <div class="button">
      <van-button type="primary" to="/SearchCompany">搜公司</van-button>
      <van-button type="primary" to="index">搜职位</van-button>
    </div>

    <my-bottom></my-bottom>
  </div>
</template>

<script>
import Vue from 'vue';
import {Button} from 'vant';

Vue.use(Button);
export default {
  name: "SelectSearch"
}
</script>

<style scoped>
.button{
  width: 100%;
  position: absolute;
  top: 180px;
}
</style>
