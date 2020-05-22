<template>
  <div class="home-widget">
    
    
    <p>{{ theme }}</p>
    <p>{{ locale }}</p>
    
    <NuxtLink
        :to="locale == 'en-us' ?'': `/en-us` + $route.fullPath"
        class="Header__Link"
        active-class="ggg"
        exact
      >English</NuxtLink>
      <NuxtLink
        :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
        class="Header__Link"
        active-class="ggg"
        exact
      >简体中文</NuxtLink>
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
      theme: 'theme',
      locale: 'locale'
    }),
    mounted(){
     
    },
    created(){
     console.log(this.$route.fullPath.replace(/^\/[^\/]+/, ''))
    },
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
    .Header__Link {
      color: #fff;
    }
    .nuxt-link-exact-active,
    .nuxt-link-active {
      color: aqua;
    }
  }
</style>

