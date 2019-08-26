<template>
  <div id="app">
    <van-nav-bar title="周晖" left-text="返回" left-arrow @click-left="onClickLeft" />
    <transition name="fly">
      <router-view></router-view>
    </transition>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" info="5" to="/friend1">朋友</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friend2">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {},
    onClickRight () {}
  }
}
</script>
<style lang="less" scoped>
.fly-enter{
  transform: translateX(100%)
}
.fly-leave-to{
  transform: translateX(-100%);
    position: absolute;
  left: -300%;
}
.fly-enter-active,.fly-leave-active{
  transition: all 1s ease;
}
#app{
  overflow:hidden;

}
</style>
