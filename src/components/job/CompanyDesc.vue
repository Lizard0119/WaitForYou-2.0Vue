<template>
  <div>
    <div class="companyhead">
      <van-nav-bar
        title="公司详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-image v-for="item in company"
                 :key="item.companyId"
                 round
                 width="10rem"
                 height="10rem"
                 :src="item.img"
      />

      <!--      <div v-for="item in company">-->
      <!--        <img :src="item.img" width="100%">-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {NavBar} from 'vant';
import {Toast} from 'vant';
import Vue from 'vue';
import {Image as VanImage} from 'vant';

Vue.use(VanImage);
Vue.use(NavBar);
export default {
  name: "CompanyDesc",
  data() {
    return {
      company: [], //列表数据
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.push("/SearchCompany")
    },
    findCompany(id) {
      axios.get("http://localhost/wfy-search/search/findCompanyById/" + id).then(res => {
        // alert(res.data.companyName)
        this.company = res.data;
        this.company.img = res.data.companyImg;
        this.company.companyId = res.data.companyId;
        alert(this.company.img)
      })
    }
  },
  mounted() {
    //获取上个页面出啊过来的ID
    let id = this.$route.query.companyid
    this.findCompany(id)
  }
}
</script>

<style scoped>
.companyhead {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
}
</style>
