import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/nivel',
    name: 'nivel',
    component: () => import(/* webpackChunkName: "nivel" */ '../components/Nivel/Nivel.vue')
  },
  {
    path: '/nuevo-nivel',
    name: 'nuevonivel',
    component: () => import(/* webpackChunkName: "nuevonivel" */ '../components/Nivel/NuevoNivel.vue')
  },
  {
    path: '/configuracion',
    name: 'configuracion',
    component: () => import(/* webpackChunkName: "ConfiguracionComponente" */ '../components/Configuracion/ConfiguracionComponente.vue')
  },
  {
    path: '/mesas',
    name: 'mesas',
    component: () => import(/* webpackChunkName: "MesaComponente" */ '../components/Mesas/MesasComponent.vue')
  },{
    path: '/nueva-mesa',
    name: 'NuevaMesa',
    component: () => import(/* webpackChunkName: "MesaComponente" */ '../components/Mesas/FormMesa.vue')
  },
  {
    path: '/sillas',
    name: 'sillas',
    component: () => import(/* webpackChunkName: "SillaComponente" */ '../components/Sillas/SillasComponent.vue')
  },
  {
    path: '/nueva-silla',
    name: 'NuevaSilla',
    component: () => import(/* webpackChunkName: "SillaComponente" */ '../components/Sillas/FormSilla.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
