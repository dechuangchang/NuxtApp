<template>
  <div class="footer">
    <span class="a-color copyright">Copyright © 2020-2020 bbcy.club All rights reserved</span>
    <a class="a-color beian" href="http://www.beian.miit.gov.cn/" target="_blank">鲁ICP备20018342号</a>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
  }
</script>
<style lang="less" scoped>
  .footer{
    text-align: center;
    height: 30px;
    line-height: 30px;
    .beian,.copyright{
      font-size: 12px;
    }
    .copyright{
      padding-right: 20px;
    }
  }
</style>

