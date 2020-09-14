<template>
  <div>
    <van-tabbar v-model="active" class="bottom">
      <van-tabbar-item name="home" icon="home-o">职位</van-tabbar-item>
      <van-tabbar-item name="search" icon="eye-o" dot>发现</van-tabbar-item>
      <van-tabbar-item name="friends" icon="chat-o" badge="5">消息</van-tabbar-item>
      <van-tabbar-item name="setting" icon="manager-o" dot>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          active: 0,
        };
      },
      methods: {

      }
    }
</script>

<style scoped>
  .bottom {
    background-color: #f2f2f2;
  }
</style>
