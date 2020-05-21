<template>
  <div :class="`default-box ${theme}`">
    <Row  type="flex" class="default-lay-row ">
      <Col span="19">
        <Header />
        <nuxt />
        <Footer />
      </Col>
      <Col class="shadow" span="5">
        <HomeWidget />
      </Col>
    </Row>
   
       <!-- -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import HomeWidget from '~/components/HomeWidget.vue'
export default {
  computed: mapState(["theme"]),
  components: {
    Footer,
    Header,
    HomeWidget
  }
}
</script>
<style lang="less">
  @import '@/assets/theme/light.less';
  @import '@/assets/theme/dark.less';
</style>
<style lang="less" scoped>

  .default-box{
    height: 100vh;
    background: url(/background.jpg) no-repeat center center fixed;
    background-size: cover;
    .default-lay-row{
      height: 100%;
    }
    
  }
  
  .frosted-glass{
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
  }
</style>
