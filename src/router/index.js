import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WahanaView from '../views/WahanaView.vue'
import AktivitasView from '../views/AktivitasView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import TiketView from '../views/TiketView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/wahana', name: 'Wahana', component: WahanaView },
    { path: '/aktivitas', name: 'Aktivitas', component: AktivitasView },
    { path: '/fasilitas', name: 'Fasilitas', component: FasilitasView },
    { path: '/tiket', name: 'Tiket', component: TiketView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
