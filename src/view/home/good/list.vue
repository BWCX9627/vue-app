<template>
  <div>
    <van-card v-for="item in list" :title="item.title" :thumb="item.img_url" :key="item.id">
      <div slot="price">
        <span>{{item.add_time}}</span>
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getgools()
  },
  methods: {
    async getgools () {
      var {
        data: { message }
      } = await this.$http('/api/getnewslist')
      this.list = message
      console.log(message)
    }
  }
}
</script>
<style lang="less">
.van-card__thumb{
  height:55px
}
.van-card__content{
  min-height: 55px;
}
.van-card__price{
  margin-top: 20px
}
</style>
