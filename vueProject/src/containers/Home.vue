<template>
    <div class="home">
      <ul class="home-list">
        <li>
          <p class="product">价钱</p>
          <img src="">
        </li>
      </ul>
    </div>
</template>

<script>
    import {getList} from '../api/api'
    export default {
        name: 'hello',
        data() {
            return {
                imgAry : ''
            }
        },
        methods : {

        },
        mounted(){
          getList().then(res =>{
            console.log(res);
          })
        }
    }
</script>

<style scoped>
  .home{
    background-color: #999;
  }
  .product{
    width: 170px;
    height: 40px;
  }
  .home-list img{
    width: 170px;
    height: 170px;
    background-color: black;
  }
</style>
