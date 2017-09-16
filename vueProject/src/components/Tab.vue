<template>
    <div class="tab">
      <router-link class="nav" to="/">首页</router-link>
      <router-link class="nav" to="/infoPage">信息</router-link>
      <router-link class="nav" to="/circle">朋友圈</router-link>
      <router-link class="nav" to="/myPage">我的</router-link>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Weex App'
            }
        }
    }
</script>

<style scoped>
  .tab{
    display: flex;
    flex-direction: row;
  }
  .nav{
    height: 45px;
    line-height: 45px;
    justify-content: center;
    display: flex;
    flex-grow: 1;
    background-color: #00c277;
  }
</style>
