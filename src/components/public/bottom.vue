<template>
  <div>
    <van-tabbar v-model="active" class="bottom">
      <van-tabbar-item icon="coupon-o">职位</van-tabbar-item>
      <van-tabbar-item icon="browsing-history-o">发现</van-tabbar-item>
      <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
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
