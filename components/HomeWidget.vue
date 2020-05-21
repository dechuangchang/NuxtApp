<template>
  <div class="home-widget">
    HomeWidget
    {{theme}}
    <RadioGroup @on-change="setTheme" :value="theme">
      <Radio label="light" border>{{ $t('common.light') }}</Radio>
      <Radio label="dark" border>{{ $t('common.dark') }}</Radio>
    </RadioGroup>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from "vuex";
  export default {
    name: 'HomeWidget',
    computed: mapGetters({
      theme: 'theme'
    }),
    methods: {
      
      ...mapMutations({
        setTheme: 'SET_THEME'
      })
    }
  }
</script>
<style lang="less" scoped>
  .home-widget{
    background: rgba(255,255,255,0.1);
  }
</style>

