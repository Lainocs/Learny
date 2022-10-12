import { createRouter, createWebHashHistory } from 'vue-router'
import GettingStartedView from '@/views/GettingStartedView'
import Exo1 from '@/views/Exo1View'
import Exo2 from '@/views/Exo2View'
import Exo3 from '@/views/Exo3View'

const routes = [
  {
    path: '/',
    name: 'getting-started',
    component: GettingStartedView
  },
  {
    path: '/exo1',
    name: 'exo1',
    component: Exo1,
  },
  {
    path: '/exo2',
    name: 'exo2',
    component: Exo2,
  },
  {
    path: '/exo3',
    name: 'exo3',
    component: Exo3,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
