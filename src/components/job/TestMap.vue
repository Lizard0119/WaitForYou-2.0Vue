<template>
  <div>
    aa
    <van-uploader v-model="fileList" multiple />
  </div>
</template>

<script>
import Vue from 'vue'
import { Uploader } from 'vant';

Vue.use(Uploader);
export default {
  name: "TestMap",
  data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true },
      ],
    };
  },
}

</script>

<style scoped>

</style>
