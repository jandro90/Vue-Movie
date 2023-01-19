import { createRouter, createWebHashHistory } from 'vue-router'
import loginGuard from './guards/loginGuard'
import homeGuard from './guards/homeGuard'
import detailsGuard from './guards/detailsGuard'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
    beforeEnter: [loginGuard]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    beforeEnter: [homeGuard],
    children: [
      {
        path: '',
        name: 'show-list',
        component: () => import(/* webpackChunkName: "show-list" */'@/views/nested/ShowListView.vue'),
      },
      {
        path: '/show-detail',
        name: 'show-detail',
        beforeEnter: [detailsGuard],
        component: () => import(/* webpackChunkName: "show-detail" */'@/views/nested/ShowDetailView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */'@/views/nested/AboutProject.vue'),
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () =>  import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
