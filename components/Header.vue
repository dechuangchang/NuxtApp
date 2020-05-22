<template>
  <div class="header">
    <div class="content">
      <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>{{ $t('header.home') }}</NuxtLink>
      <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>{{ $t('header.about') }}</NuxtLink>

      
      
    </div>

    <!-- {{ $t('header.home') }}
    {{ $t('header.about') }}-->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: mapState(["locale"])
};
</script>
<style lang="less" scoped>
.header {
  height: 72px;
  background-color: rgba(15, 65, 108, 0.16);
  color: #fff;
  .content {
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .Header__Link {
      color: #fff;
    }
    .nuxt-link-exact-active,
    .nuxt-link-active {
      color: aqua;
    }
  }
}
</style>
