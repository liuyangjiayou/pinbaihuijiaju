import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home.vue'
import Activity from '../containers/Activity.vue'
import Discounts from '../containers/Discounts.vue'
import Feature from '../containers/Feature.vue'
import Boutique from '../containers/Boutique.vue'
import Wine from '../containers/Wine.vue'
import Drinks from '../containers/Drinks.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/discounts',
      component: Discounts
    },
    {
      path: '/feature',
      component: Feature
    },
    {
      path: '/boutique',
      component: Boutique
    },
    {
      path: '/wine',
      component: Wine
    },
    {
      path: '/drinks',
      component: Drinks
    },
    {
      path: '*',
      component: Home
    },
  ]
})
