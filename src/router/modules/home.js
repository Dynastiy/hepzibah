import Home from '@/pages/index.vue'
import About from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      layout: 'Default'
    }
  }
]

export default routes
