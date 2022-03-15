import Vue from 'vue'
import Router from 'vue-router'
import accueil from "../pages/accueil";
import about_me from "../pages/about_me";
import casa_mila from "../pages/casa_mila";
import zerules from "../pages/zerules";
import axone from "../pages/axone";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: accueil
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: about_me
    },
    {
      path:'/casa_mila',
      name:'casa_mila',
      component: casa_mila
    },
    {
      path:'/axone',
      name:'axone',
      component: axone
    },
    {
      path:'/zerules',
      name:'zerules',
      component: zerules
    }
  ],
  scrollBehavior(to, from, savedPosition){
    return {x: 0, y: 0}
  }
})
