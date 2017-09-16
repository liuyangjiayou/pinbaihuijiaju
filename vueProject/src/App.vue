<template>
  <div id="app">
    <router-view></router-view>
    <tab class="tab-nav"></tab>
  </div>
</template>

<script>
  import Tab from './components/Tab.vue';
export default {
  components : {
    Tab,
  }
}
</script>

<style scoped>
  .tab-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
