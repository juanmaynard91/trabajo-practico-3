import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../components/Table.vue'




Vue.use(VueRouter)

// declaro todas las rutas de navegacion
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


]

const router = new VueRouter({
  routes
})

export default router
