<template>
  <div class="default-box">
    <Row  type="flex" class="default-lay-row ">
      <Col span="18">
        <Header />
        <nuxt />
        <Footer />
      </Col>
      <Col span="6">
        <HomeWidget />
      </Col>
    </Row>
   
       <!-- -->
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import HomeWidget from '~/components/HomeWidget.vue'
export default {
  components: {
    Footer,
    Header,
    HomeWidget
  }
}
</script>
<style lang="less">
 @ss :rgba(0, 0, 0, 0.1);
  .shadow{
    box-shadow: inset 1px 0px 2px 0px @ss;
  }
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
