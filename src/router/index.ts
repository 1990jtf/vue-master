import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from '../home/index.vue'
import LearnComponent from '../learn-component/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/learn-component', component: LearnComponent },
]

const router = createRouter({
//   history: createMemoryHistory(),//
  history: createWebHistory(), 
  routes,
})

export default router