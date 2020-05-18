<template>
  <div class="home">
    
    index
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