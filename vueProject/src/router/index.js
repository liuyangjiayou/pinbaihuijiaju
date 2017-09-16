import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home.vue'
import Circle from '../containers/Circle.vue'
import InfoPage from '../containers/InfoPage.vue'
import MyPage from '../containers/MyPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/circle',
      component: Circle
    },
    {
      path: '/infoPage',
      component: InfoPage
    },
    {
      path: '/myPage',
      component: MyPage
    },
  ]
})
