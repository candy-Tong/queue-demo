import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { path: '/', component: ()=>import('../pages/demo1/index.vue')  },
  { path: '/demo1', component: ()=>import('../pages/demo1/index.vue')  },
  { path: '/demo2', component: ()=>import('../pages/demo2/index.vue')  },
  { path: '/demo3', component: ()=>import('../pages/demo3/index.vue')  },
  { path: '/demo4', component: ()=>import('../pages/demo4/index.vue') },
  { path: '/demo5', component: ()=>import('../pages/demo5/index.vue') },
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
