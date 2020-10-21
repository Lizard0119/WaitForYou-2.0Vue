<template>
  <div>
    <my-JobTop></my-JobTop>
    <my-JobHead></my-JobHead>

    <div class="button1">
      <van-divider content-position="left">按公司/职位搜索</van-divider>
      <van-button type="primary" to="/SearchCompany">搜公司</van-button>
      <van-button type="primary" to="/SearchJob">搜职位</van-button>
    </div>

    <!--    <div class="line1">-->
    <!--      <van-divider content-position="left">按省份搜索</van-divider>-->
    <!--      <van-area title="选择城市" :area-list="areaList" :columns-num="2"/>-->
    <!--    </div>-->
    <div class="imgdiv">
      <van-swipe :autoplay="1200" class="imgs">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <my-bottom></my-bottom>
  </div>
</template>

<script>
import Vue from 'vue';
import {Button} from 'vant';
import {Divider} from 'vant';
import {Area} from 'vant';
import {Swipe, SwipeItem} from 'vant';
import {Lazyload} from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Area);
Vue.use(Divider);
Vue.use(Button);
export default {
  name: "SelectSearch",
  data() {
    return {
      images: [
        'http://qgbx4cuhn.hn-bkt.clouddn.com/java.png',
        'http://qgbx4cuhn.hn-bkt.clouddn.com/c%2B%2B.png',
        'http://qgbx4cuhn.hn-bkt.clouddn.com/python.png',
        'http://qgbx4cuhn.hn-bkt.clouddn.com/%E8%87%AA%E5%8A%A8%E5%8C%96.png',
      ],
    };
  },
}
</script>

<style scoped>
.button1 {
  width: 100%;
  position: absolute;
  top: 85px;
}

.imgs {
  width: 85%;
  top: 185px;
}

.imgdiv {
  display: flex;
  justify-content: center;
}
</style>
