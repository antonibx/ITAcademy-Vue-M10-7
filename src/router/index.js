import { createRouter, createWebHistory } from 'vue-router';
import Inici from '../views/Inici.vue';

const routes = [
  {
    path: '/',
    name: 'Inici',
    component: Inici
  },
  {
    path: '/clients/:id',
    name: 'Clients',
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: () => import('../views/Proveidors.vue')
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: () => import('../views/Magatzem.vue')
  },
  {
    path: '/botiga',
    name: 'Botiga',
    component: () => import('../views/Botiga.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
