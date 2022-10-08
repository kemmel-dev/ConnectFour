import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/components/Welcome'
import Overview31 from '@/components/games/Overview31'
import Overview32 from '@/components/games/Overview32'
import UnknownRoute from '@/components/UnknownRoute'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Welcome },
  { path: '/games/Overview31', component: Overview31 },
  { path: '/games/Overview32', component: Overview32 },
  { path: '/games/Overview32', component: Overview32 },
  { path: '/:pathMatch(.*)*', component: UnknownRoute }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
