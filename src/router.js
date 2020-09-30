import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('./views/HomePage/HomePage.vue')
const ToDoApp = () => import('./views/ToDoApp/ToDoApp.vue')
const About = () => import('./views/About/About.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/todo-app', component: ToDoApp },
    { path: '/about', component: About  }
  ]
})