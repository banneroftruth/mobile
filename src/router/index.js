import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Library from '../views/Library.vue'
import Audio from '../views/Audio.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/library', name: 'Library', component: Library },
    { path: '/audio', name: 'Audio', component: Audio },
]

const router = createRouter({
    history: createWebHistory('/mobile/'),
    routes,
})

export default router
