import Vue from 'vue';

import VueRouter from 'vue-router';
import signin from '../view/signin.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/auth/',
  routes: [
    {
      path: '/',
      component: signin
    },
    {
      path: '/detail/:id',
      component: () => import('../view/detail.vue')
    },
    {
      path: '*', component: () => import('../../../middle/notfound.vue')
    }
  ]
});
