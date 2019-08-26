import Vue from 'vue'
import { NavBar, Tabbar, TabbarItem, Swipe,
  SwipeItem, Grid, GridItem, Card } from 'vant'

Vue.use(Card)
Vue.use(Grid).use(GridItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(NavBar)
