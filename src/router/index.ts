import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { path: '/', component: ()=>import('../pages/demo1/index.vue')  },
  { path: '/demo1', component: ()=>import('../pages/demo1/index.vue')  },
  { path: '/demo2', component: ()=>import('../pages/demo2/index.vue') },
  { path: '/demo3', component: ()=>import('../pages/demo3/index.vue') },
  { path: '/demo4', component: ()=>import('../pages/demo4/index.vue') },
  { path: '/demo5', component: ()=>import('../pages/demo5/index.vue')  },
  { path: '/demo6', component: ()=>import('../pages/demo6/index.vue')  },
  { path: '/demo7', component: ()=>import('../pages/demo7/index.vue')  },
  { path: '/demo8', component: ()=>import('../pages/demo8/index.vue')  },
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
