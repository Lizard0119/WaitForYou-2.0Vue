<template>
  <div>
    <van-tabs v-model="activeName">
      <van-tab title="推荐" name="a">内容 1</van-tab>
      <van-tab title="附近" name="b">内容 2</van-tab>
      <van-tab title="最新" name="c">内容 3</van-tab>
      <van-tab title="西安" name="d">内容 4</van-tab>
      <van-tab title="筛选" name="e">内容 5</van-tab>
      <van-tab title="关键词" name="f">内容 6</van-tab>
    </van-tabs>

    <van-tree-select
      :items="items"
      :active-id.sync="activeIds"
      :main-active-index.sync="activeIndex"
    />
    <my-bottom></my-bottom>
  </div>
</template>

<script>
export default {
  name: "JobIndex",
  data() {
    return {
      activeName: '',
      items: [
        {
          // 导航名称
          text: '所有城市',
          // 导航名称右上角徽标，2.5.6 版本开始支持
          badge: 3,
          // 是否在导航名称右上角显示小红点
          dot: true,
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '温州',
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true,
            },
            {
              text: '杭州',
              id: 2,
            },
          ],
        },
        {
          // 导航名称
          text: '地铁',
          // 导航名称右上角徽标，2.5.6 版本开始支持
          badge: 3,
          // 是否在导航名称右上角显示小红点
          dot: true,
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '一号线',
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              // disabled: true,
            },
            {
              text: '二号线',
              id: 2,
            },
          ],
        },
      ],
      activeIds: [1, 2],
      activeIndex: 0,
    };
  },
}
</script>

<style scoped>

</style>
