<template>
  <div id="app">
    <router-view class="routerBox"></router-view>
    <tab class="tab-nav"></tab>
  </div>
</template>

<script>
import Tab from './components/tab.vue'
export default {
  components : {
    Tab,
  }
}
</script>

<style scoped>
  .tab-nav{
    position: fixed;
    top: 0;
    left: 0;
    height: 200px;
    width: 250px;
  }
  .routerBox{
    margin-left: 250px;
  }
</style>
