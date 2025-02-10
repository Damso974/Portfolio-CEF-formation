import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/MyHome.vue';  // On importe depuis "components"
import Error404 from '../components/Error404.vue';  // Idem

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'MyError404',
    component: Error404,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
