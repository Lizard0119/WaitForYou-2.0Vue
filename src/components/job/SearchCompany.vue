<template>
  <div>
    <div class="searchdiv">
      <van-nav-bar
        title="查公司"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />

      <van-search

        v-model="value"
        show-action
        label="搜公司"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
<!--        <template #action>-->
<!--          <div @click="onSearch">搜索</div>-->
<!--        </template>-->
      </van-search>
    </div>

    <div class="job-list">

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          offset="300"
          @load="onload(value)"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          class="list"
        >
          <div>
            <van-card v-for="item in list"
                      :key="item.companyid"
                      :desc="item.companyshortname"
                      :thumb="item.companyimg"
                      @click="Companypage(item.companyid)"
                      >

              <template #tags>
                <div align="left">
                  <van-tag plain type="danger" size="20">{{ item.businessname }}</van-tag>
                </div>
                <div align="left" class="a">
                  <van-tag plain>{{ item.companyname }}</van-tag>
                </div>
                <div align="left" class="a">
                  <van-tag plain>{{ item.province }}</van-tag>
                  <van-tag plain>{{ item.city }}</van-tag>
                </div>
              </template>

            </van-card>

          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import {Search} from 'vant';
import {NavBar} from 'vant';
import {Toast} from 'vant';
import {Card} from 'vant';
import {List} from 'vant';
import axios from 'axios'
import Vue from "vue";

Vue.use(List);
Vue.use(Card);
Vue.use(NavBar);
Vue.use(Search);

export default {
  name: "SearchCompany",
  data() {
    return {
      loading: false, // 是否处于加载状态
      finished: true, // 是否已加载完成
      error: false, //是否加载失败
      refreshing: false, // 是否处于加载中状态
      list: [], //列表数据
      value: '',
      page: 1,
      size: 10
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.push("/")
    },
    onClickRight() {
      Toast('按钮');
    },
    onSearch(val) {
      Toast(val);
      console.log(val);
      this.onload(val);
    },
    onload(val) {
      console.log(val);
      // onload() {
      //设置加载延时为2s
      setTimeout(() => {
        this.finished = false;
        //请求后端数据
        //初始page=1，size=10
        var a = val;
        axios.get("http://localhost/wfy-search/search/searchCompanyByname/" + a + "/" + this.page + "/" + this.size)
          .then(res => {
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
            if (res.data.total <= this.page * this.size || res.data.total === "0") {
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
      this.onload();
    },
    Companypage(companyid) {
      alert(companyid)
      //带参数跳转
      this.$router.push({
        path:'/CompanyDesc',
        query:{
          companyid
        }
      })
    }
  },
}
</script>

<style scoped>
.searchdiv {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
}

.job-list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}

/*.a{*/
/*  right: 100px;*/
/*  bottom: 500px;*/
/*  top: 90px;*/
/*}*/
</style>
