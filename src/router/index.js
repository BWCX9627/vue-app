import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home/home.vue'
import friend1 from '../view/friend1/friend1.vue'
import friend2 from '../view/friend2/friend2.vue'
import search from '../view/search/search.vue'
import newslist from '../view/home/good/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/friend1',
      component: friend1
    },
    {
      path: '/friend2',
      component: friend2
    },
    {
      path: '/search',
      component: search

    },
    {
      path: '/home/newslist',
      component: newslist
    }
  ]
})
