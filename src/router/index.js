import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
// import Contact from './components/Contact.vue';
import Contact from '../views/ContactPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
