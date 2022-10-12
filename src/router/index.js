import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/components/Welcome'
import Overview31 from '@/components/games/Overview31'
import Overview32 from '@/components/games/Overview32'
import Overview33 from '@/components/games/Overview33'
import Overview34 from '@/components/games/Overview34'
import UnknownRoute from '@/components/UnknownRoute'
import Detail34 from '@/components/games/Detail34'
import Detail32 from '@/components/games/Detail32'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Welcome },
  { path: '/games/overview31', component: Overview31 },
  { path: '/games/overview32', component: Overview32 },
  {
    path: '/games/overview33',
    component: Overview33,
    // notice how only the child route has a name
    children: [{ path: ':id', name: 'gameName', component: Detail32 }]
  },
  {
    path: '/games/overview34',
    component: Overview34,
    // notice how only the child route has a name
    children: [{ path: ':id', name: 'gameName', component: Detail34 }]
  },
  { path: '/:pathMatch(.*)*', component: UnknownRoute }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
