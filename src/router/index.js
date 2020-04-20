import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Category from '../components/Category.vue';
import Article from '../components/Article.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { 
            path: '/', 
            name: 'Home', 
            component: Home
        }, 
        {
            path: '/Category/:id', 
            name: 'Category', 
            component: Category
        }, 
        {
            path: '/Article/:id', 
            name: 'Article', 
            component: Article
        }
    ]
});