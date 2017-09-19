<template>
    <div class="home">
      <router-link to="/">首页</router-link>
      <router-link to="/activity">正在活动</router-link>
      <router-link to="/discounts">优惠套餐</router-link>
      <router-link to="/feature">特色</router-link>
      <router-link to="/boutique">精品小菜</router-link>
      <router-link to="/wine">酒</router-link>
      <router-link to="/drinks">饮料</router-link>
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
  .home{
    display: flex;
    flex-direction: column;
  }
  a{
    height: 60px;
    line-height: 60px;
    background-color: #eee;
    opacity: .3;
    text-align: center;
    cursor: pointer;
  }
</style>
