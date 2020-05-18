<template>
  <div class="header">
    <div class="content">
      <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>{{ $t('header.home') }}</NuxtLink>
      <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>{{ $t('header.about') }}</NuxtLink>
      
      
      <span>{{ locale }}</span>
       <NuxtLink
        :to="locale == 'zh-tw' ?'': `/zh-tw` + $route.fullPath"
        class="Header__Link"
        active-class="ggg"
        exact
      >中文</NuxtLink>
      <NuxtLink
        :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
        class="Header__Link"
        active-class="ggg"
        exact
      >英文</NuxtLink>
    </div>
   
    <!-- {{ $t('header.home') }}
    {{ $t('header.about') }} -->
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Header',
    computed: mapState([
      'locale'
    ]),
  }
</script>
<style lang="less" scoped>
  .header{
    height: 72px;
    background-color:#0F416C;
    color: #fff;
    .content{
      width: 1380px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .Header__Link{
        color: #fff;
      }
      .nuxt-link-exact-active,.nuxt-link-active{
        color: aqua;
      }
    }
  }
</style>
