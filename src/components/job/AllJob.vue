<template>
  <div>
    <my-searchBar></my-searchBar>
    <my-JobHead></my-JobHead>
    <div class="job-list">

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          offset="300"
          @load="onLoad"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          class="list"
        >
          <div>
            <van-card v-for="item in list" :key="item.jobTableSid">

              <template #tags>
                <div align="left">
                  <van-tag plain type="danger">{{ item.jobTabelSecondType }}</van-tag>
                </div>
              </template>

            </van-card>

          </div>

        </van-list>
      </van-pull-refresh>
    </div>
    <my-bottom></my-bottom>
  </div>
</template>

<script>
import {Card} from 'vant';
import {List} from 'vant';
import axios from 'axios'
import Vue from "vue";

Vue.use(List);
Vue.use(Card);

export default {
  name: "AllJob",
  data() {
    return {
      loading: false, // 是否处于加载状态
      finished: false, // 是否已加载完成
      error: false, //是否加载失败
      refreshing: false, // 是否处于加载中状态
      list: [], //列表数据
      page: 1,
      size: 10
    }
  },
  methods: {
    //拉到底部触发加载方法
    onLoad() {
      //设置加载延时为2s
      setTimeout(() => {
        //请求后端数据
        //初始page=1，size=10
        axios.get("http://localhost/wfy-search/job/findAllSecondJob/" + this.page + "/" + this.size).then(res => {
          //将后端请求到的数据加入到前端已有的list中
          this.list.push(...res.data.list);
          //page++
          this.page++;
          //如果无数据，不加载
          if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
          }
          //关闭加载状态
          this.loading = false;
          //设置加载完成的条件
          if (res.data.total <= this.page * this.size) {
            //关闭加载
            this.finished = true;
          }
        });
        //设置加载延时
      }, 2000)
    },
    //上拉刷新方法
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
}
</script>

<style scoped>
.job-list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>
