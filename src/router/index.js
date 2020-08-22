import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Quiz from '@/components/Quiz.vue'
import Game from '@/components/Game.vue'
import NotFound from '@/components/NotFound.vue'
Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: Home,
      name: 'home',
      props: true,
      meta: {
        requiresAuth: true
      }
    },
      
    {
      path: '/login', 
      component: Login,
      name: 'login',
      props: true,
    },

    {
      path: '/register', 
      component: Register,
      name: 'register',
      props: true,
    },

    {
      path: '/quiz', 
      component: Quiz,
      name: 'quiz',
      props: true,
    },
    
    {
      path: '/game', 
      component: Game,
      name: 'game',
      props: true,
    },
      
    {
      path: '*', 
      component: NotFound,
    }
  ]
})

router.beforeEach((to, from, next) => {

  let currentUser = firebase.auth().currentUser;
  
  if (to.meta.requiresAuth && currentUser == null) {
    next('/login')
  } else {
    next()
  }
})

export default router;