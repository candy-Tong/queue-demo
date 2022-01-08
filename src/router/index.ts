import { createRouter, createWebHashHistory } from 'vue-router'
import Demo1 from '../pages/demo1/index.vue'
import Demo2 from '../pages/demo2/index.vue'

const routes = [
  { path: '/', component: Demo1 },
  { path: '/demo1', component: Demo1 },
  { path: '/demo2', component: Demo2 },
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
