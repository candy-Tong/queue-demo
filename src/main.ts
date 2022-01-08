import { createApp } from 'vue'
import App from './App.vue'
import { ref } from 'vue'
import { router } from './router'

const app = createApp(App)
app.config.globalProperties.$loading = {
  fatherLoading: ref(false),
  childLoading: ref(false),
}
app.use(router)
console.log(router)
app.mount('#app')
