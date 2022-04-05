import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "pedido" */ '../views/Pedidos.vue')
  },
  {
    path: '/concluido',
    name: 'Concluido',
    component: () => import(/* webpackChunkName: "concluido" */ '../views/Concluido.vue')
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "carrinho" */ '../views/Carrinho.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
