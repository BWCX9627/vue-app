<template>
<div>
<div class="lunbo">
  <van-swipe :autoplay="1000" indicator-color="white">
  <van-swipe-item class="item" v-for="num in list" :key="num.img" >
<img :src="num.img">
  </van-swipe-item>
</van-swipe>
</div>
<van-grid :column-num="3">
  <van-grid-item
    v-for="value in last"
    :key="value.id"
    :to="value.to"
  >
<img :src="value.src" class="img">
<p class="p">{{value.title}}</p>
  </van-grid-item>
</van-grid>
</div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      last: []
    }
  },
  created () {
    this.getgools()
    this.getsomes()
  },
  methods: {
    async getgools () {
      var {data: {message}} = await this.$http('/api/getlunbo')
      this.list = message
    },
    async getsomes () {
      var {data: {message}} = await this.$http('/api/girds')
      console.log(message)
      this.last = message
    }
  }
}
</script>
<style scoped lang="less">
.lunbo{
  height: 180px;
  img{
width:100%;
height: 180px;
  }
}
.img{
  height:50px;
  width:50px
}
.p{
  font-size: 12px;
  line-height: 16px;
}
</style>
