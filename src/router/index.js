import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../components/Table.vue'
import SaberMas from '../views/SaberMas.vue'

Vue.use(VueRouter)

// crear 3 rutas distintas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/top',
    name: 'Table',
    component: Table
  },
  {
    path: '/info',
    name: 'SaberMas',
    component: SaberMas
  },
]

const router = new VueRouter({
  routes
})

export default router
