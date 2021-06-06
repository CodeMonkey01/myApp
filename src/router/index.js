import { createRouter, createWebHistory } from '@ionic/vue-router';
import ProduktUebersicht from "../pages/ProduktUebersicht.vue"
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Produkte',
    component: ProduktUebersicht
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
