<template>
  <div class="all">
    <div class="companyhead">
      <van-nav-bar
        class="top"
        title="公司详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft">
        <template #right>
          <van-icon name="share" size="18" @click="shareClick"/>
        </template>
      </van-nav-bar>
    </div>

    <div class="com11">
      <div>
        <van-image
          class="img"
          round
          width="10rem"
          height="10rem"
          :src="company.img"
        />
      </div>

      <div class="a12">
        <van-cell-group>
          <van-cell class="a13" title="公司名称" :value="company.companyShortName"/>
          <van-cell title="公司地址" :value="company.companyAddress"/>
        </van-cell-group>
      </div>

      <div class="map">
        <!--      <baidu-map class="bm-view" :center="{lng: 108.84627, lat: 34.217259}" :zoom="15" :scroll-wheel-zoom="true">-->
        <!--        <bm-marker :position="{lng: 108.84627, lat: 34.217259}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"/>-->
        <!--      </baidu-map>-->
        <baidu-map class="bm-view" :center="center" :zoom="15" :scroll-wheel-zoom="true">
          <bm-marker :position="position" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"/>
        </baidu-map>
      </div>

      <van-collapse v-model="activeNames">
        <van-collapse-item title="工商信息" name="1">
          <table>
            <th>
              <p>公司全称 </p>
              <p>企业法人 </p>
              <p>注册资本 </p>
              <p>成立时间 </p>
              <p>统一信用代码 </p>
            </th>
            <td>
              <p>{{ company.companyAddress }}</p>
              <p>{{ company.companyBoss }}</p>
              <p>{{ company.companyRegisteredCapital }}</p>
              <p>{{ company.companyDate }}</p>
              <p>{{ company.companyCode }}</p>
            </td>
          </table>

          <van-collapse v-model="activeNames">
            <van-collapse-item title="经营范围" name="2">
              {{ company.companyBusinessScope }}
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
      </van-collapse>

      <div>
        <van-cell is-link @click="showPopup" class="jops">{{ company.companyShortName }} 的相关职位</van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">

          <div>
            <van-card v-for="item in list"
                      :key="item.jobTableSid"
                      :thumb="item.jobimg">
              <template #tags>
                <div align="left">
                  <van-tag plain type="danger">{{ item.jobTabelSecondType }}</van-tag>
                </div>
              </template>
            </van-card>
          </div>
        </van-popup>
      </div>

      <div>
        <van-divider content-position="left"></van-divider>
      </div>
      <div>
        <div v-show="num==3">
          {{ company.companyProfile }}
        </div>
        <span @click="showMore">{{ txt }}</span>
      </div>
      <div>
        <van-divider content-position="left"></van-divider>
      </div>
    </div>
    <div>
      <van-share-sheet
        v-model="showShare"
        :options="options"
        title="立即分享给好友"
        :description="company.companyShortName"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {NavBar} from 'vant';
import {Toast} from 'vant';
import {Image as VanImage} from 'vant';
import {Divider} from 'vant';
import Vue from 'vue';
import {Collapse, CollapseItem} from 'vant';
import {Cell, CellGroup} from 'vant';
import {ActionSheet} from 'vant';
import {Popup} from 'vant';
import BaiduMap from 'vue-baidu-map';
import {ShareSheet} from 'vant';

Vue.use(ShareSheet);
Vue.use(BaiduMap, {
  ak: '1GH3AwrGWeoshqAvvmVn61y9xFHKV7LH'
});
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Divider);
Vue.use(VanImage);
Vue.use(NavBar);
export default {
  name: "CompanyDesc",
  data() {
    return {
      company: {}, //列表数据
      center: {lang: 0, lat: 0},
      position: {lang: 0, lat: 0},
      activeNames: [],
      list: [],
      isShow: false,
      txt: '查看更多',
      num: 2,
      show: false,
      showShare: false,
      options: [
        {name: '微信', icon: 'wechat'},
        {name: '微博', icon: 'weibo'},
        {name: '复制链接', icon: 'link', description: '假装有链接'},
        {name: '分享海报', icon: 'poster'},
        {name: '二维码', icon: 'qrcode'},
      ],
    }
  },
  methods: {
    shareClick() {
      this.showShare = true;
    },
    showMore() {
      console.log('1', this.isShow);
      this.isShow = !this.isShow;
      console.log('2', this.isShow);
      this.num = this.isShow ? 3 : this.company.length;
      this.txt = this.isShow ? '收起' : '查看更多'
    },
    onClickLeft() {
      Toast('返回');
      this.$router.push("/SearchCompany")
    },
    //查询公司详细信息
    findCompany(id) {
      axios.get("http://localhost/wfy-search/search/findCompanyById/" + id).then(res => {
        // alert(res.data.companyName)
        this.company = res.data;
        this.company.img = res.data.companyImg;
        this.company.companyId = res.data.companyId;
        // alert("查询成功")
      })
    },
    //弹出层
    showPopup() {
      this.show = true;
    },
    //按照公司查职位
    findJob(id) {
      axios.get("http://localhost/wfy-search/job/findJobByCompanyId/" + id).then(res => {
        this.list = res.data.list
      })
    },
    findMapByCompanyId(id) {
      axios.get("http://localhost/wfy-search/search/findMapByCompanyId/" + id).then(res => {
        this.center.lng = res.data.lng;
        this.center.lat = res.data.lat;
        this.position.lng = res.data.lng;
        this.position.lat = res.data.lat;
      })
    }
  },
  mounted() {
    //获取上个页面传过来的ID
    let id = this.$route.query.companyid;
    this.findCompany(id);
    this.findJob(id);
    this.findMapByCompanyId(id)
  }
}
</script>

<style scoped>
.all {
  background: url("../../assets/imgs/backgroundimg.jpg") no-repeat;
}

.a13 {
  background-color: #eaeeeb;
}

.jops {
  background-color: #eaeeeb;
}

.top {
  background-color: #eceaea;
}

.com11 {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 45px;
  overflow-y: auto;
}

.companyhead {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
}

.companyhead2 {
  background-color: #eceaea;
}

.map {
  display: flex;
  justify-content: center;
}

.bm-view {
  width: 80%;
  height: 200px;
}
</style>
