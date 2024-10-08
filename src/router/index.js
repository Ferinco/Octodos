import Home from '../pages/home.vue';
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/about.vue';
import Services from '@/pages/services.vue';
import Clients from '@/pages/clients.vue';
import ContactPage from '@/pages/contactUs.vue';


const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/about', name:"About",component: About },
  { path: '/services', name:"Services", component: Services },
  { path: '/clients', name:"Clients", component: Clients },
  { path: '/contact', name:"Contact", component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; 
    }else {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', 
          });
          resolve({ top: 0 });
        }, );
      });
    }
  },
})

export default router;