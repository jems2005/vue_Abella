import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BooksView from '../views/BooksView.vue'
import AboutPage from '../views/AboutPage.vue'
import SearchResults from '../components/SearchResults.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/books', name: 'Books', component: BooksView },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/search', name: 'SearchResults', component: SearchResults }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
