import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/todo-app', component: () => import('./views/ToDoApp.vue') },
    { path: '/about', component: () => import('./views/About.vue') }
  ]
})