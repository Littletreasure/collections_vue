import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Collection from '../components/Collection.vue'

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
    component: Collection,
    props: {collection: 'books'}
  },
  {
    path: '/films',
    name: 'Films',
    component: Collection,
    props: {collection: 'films'}
  }
]

const router = new VueRouter({
  routes
})

export default router
