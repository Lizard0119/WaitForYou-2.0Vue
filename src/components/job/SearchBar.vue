<template>
  <div class="search">
    <van-search class="searchinside"
                v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="查公司/职位"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import {Search} from 'vant';

Vue.use(Search);
export default {
  name: "SearchBar"
}
</script>

<style scoped>
.search {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
}

.searchinside {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
}
</style>
