import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/Header.vue'),
    children: [{ path: 'product-list', component: () => import('pages/ProductList.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/Header.vue'),
  },
];

export default routes;
