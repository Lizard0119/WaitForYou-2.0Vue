<template>
  <div class="jobhead">
    <van-tabs v-model="activeName" background="#f2f2f2" class="JobHead">
      <van-tab title="推荐" name="a">内容 1</van-tab>
      <van-tab title="附近" name="b">内容 2</van-tab>
      <van-tab title="最新" name="c">内容 3</van-tab>
      <van-tab title="西安" name="d">内容 4</van-tab>
      <van-tab title="筛选" name="e">内容 5</van-tab>
      <van-tab title="关键词" name="f">内容 6</van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  name: "JobHead",
  data() {
    return {
      activeName: '',
    };
  },
}
</script>

<style scoped>
.jobhead {
  background-color: white;
  width: 100%;
  position: absolute;
  top: 45px;
}
</style>
