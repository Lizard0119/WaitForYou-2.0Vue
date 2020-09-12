<template>
  <div>
    <div class="heard">
      <van-nav-bar
        title="我的面试"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <!-- 懒加载 -->
    <lazy-component>
      <!--<img v-for="img in imageList" v-lazy="img"/>-->
      <!--<van-cell v-for="mes in interviewMessage" :title="mes.companyName" value="内容" label="描述信息"/>-->
      <van-skeleton v-for="mes in interviewMessage" :key="mes.jobId" title :row="6" :loading="false">
        <div class="interview-message">
          <h5>{{mes.companyName}}</h5>
          <p>公司地址：{{mes.companyAddress}}</p>
          <p>面试职位：{{mes.jobName}}</p>
          <p>薪资：{{mes.jobPay}}</p>
          <p>面试时间：{{mes.interviewData.substring(0, 10) + " " + mes.interviewData.substring(11, 19)}}</p>
          <p>面试地点：{{mes.interviewSite}}</p>
          <p>联系人：{{mes.interviewContactName}}</p>
          <p>联系方式：{{mes.interviewTelephone}}</p>
        </div>
      </van-skeleton>
    </lazy-component>

    <my-bottom></my-bottom>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue';
  import {Lazyload} from 'vant';

  Vue.use(Lazyload, {
    lazyComponent: true,
  });
  export default {
    data() {
      return {
        interviewMessage: [],
      };
    },
    methods: {
      onClickLeft() {

      },
    },
    created() {
      axios.get("http://localhost/findAllUserInterviewCompany/1").then(res => {
        this.interviewMessage = res.data;
      })
    }
  }
</script>

<style scoped>
  .heard {
    background-color: white;
    width: 100%;
    position: absolute;
    top: 0px;
  }
  .interview-message {
    width: 90%;
    text-align: left;
    position: absolute;
    left: 20px;
    background-color: #F2F3F5
  }
</style>
