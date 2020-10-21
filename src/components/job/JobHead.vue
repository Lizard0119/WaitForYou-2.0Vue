<template>
  <div class="jobhead">
    <van-tabs v-model="activeName" background="#f2f2f2" class="JobHead">
      <van-tab title="职位" name="a" replace to="/allJob"></van-tab>
      <van-tab title="公司" name="b" replace to="/AllCompany"></van-tab>
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
