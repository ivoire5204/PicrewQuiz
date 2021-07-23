import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import CreateGame from '../views/CreateGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create-game',
    component: CreateGame,
  },
  {
    path: '/',
    component: Index,
  },
  //임시
  {
    path: '/000000000000',
    component: () => import('../views/GameDetails.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

/*
서버에서 게임 데이터 가져오기, 모든 path를 GameDetails로 연결
routes.push(
  {
    path: '/000000000000',
    component: () => import('../views/GameDetails.vue')
  }
)
*/

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
