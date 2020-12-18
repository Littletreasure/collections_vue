import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Books from '../components/Books.vue'
import Films from '../components/Films.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  }
]

const router = new VueRouter({
  routes
})

export default router
