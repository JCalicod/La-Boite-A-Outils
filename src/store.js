import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: []
    },
    getters: {
        getCategories: state => state.categories
    },
    mutations: {
        setCategories(state, payload) {
            if (payload) {
                state.categories = payload;
            }
        }
    }
})