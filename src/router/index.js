import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue'
import Proyectos from '../views/Proyectos.vue'
import Contacto from '../views/Contacto.vue'
import AvisoPrivacidad from '../views/AvisoPrivacidad.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/nosotros', component: Nosotros },
  { path: '/proyectos', component: Proyectos },
  { path: '/contacto', component: Contacto },
  { path: '/aviso-de-privacidad', component: AvisoPrivacidad },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
