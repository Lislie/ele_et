<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab_item">
        <a v-link="{ path: '/goods' }">商品</a>
      </div>
      <div class="tab_item">
        <a v-link="{ path: '/ratings' }">评价</a>
      </div>
      <div class="tab_item">
        <a v-link="{ path: '/seller' }">商家</a>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header'

  const OK = 0
  export default{
    data() {
      return {
        seller: {}
      }
    },

    created () {
      this.$http.get('/api2/seller').then((response) => {
        const result = response.body
        console.log(result)
        if(result.errno === OK) {
          this.seller = result.data
        }
      })
    },

    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"

  .tab
    display: flex
    border-1px(rgba(7, 17, 27, 0.1))
    .tab_item
      flex: 1
      text-align: center
      height: 40px
      line-height: 40px
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
