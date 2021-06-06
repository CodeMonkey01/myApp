import { createRouter, createWebHistory } from '@ionic/vue-router';
import ProduktUebersicht from "../pages/ProduktUebersicht.vue";
const routes = [
  {
    path: '/',
    redirect: '/produkte'
  },
  {
    path: '/produkte',
    component: ProduktUebersicht
  },
  {
    path: '/produkte/:id',
    component: () => import("../pages/ProduktDetails.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
