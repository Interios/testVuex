import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export 
const store = new Vuex.Store({
    state: {
        results: []
    },
    getters: {
        list: state => {
            return state.results;
        }
    },
    mutations: {
        set(state, { type, items }){
            state[type] = items;
        }
    },
    actions: {
        getData({ state, commit }){
            axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")
                .then(response => {
                    commit('set', {type: 'results', items: response.data.Data});
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
})