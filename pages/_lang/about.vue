<template>
  <div class="about">
    about
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  
  computed: mapState([
    'locale'
  ]),
  methods: {
    
  },
  created(){
    // console.log(this.$store)
  }
}
</script>
<style lang="less" scoped>
  .about{
    flex-grow: 1;
  }
</style>