import Vue from 'vue';
import Vuex from 'vuex';
import loginState from '@/stores/modules/login';
import articleState from '@/stores/modules/article';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login: loginState,
        article: articleState,
    },
});
