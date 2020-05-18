<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
  components: {
    Footer,
    Header
  }
}
</script>
<style lang="less" >
  @import url('@/assets/reset.less');
</style>
<style lang="less" scoped>

</style>
