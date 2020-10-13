import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: '',
        dataTable: {}
    },
    mutations: {
        addToken: (state, token) => state.authToken = token,
        addDataTable: (state, dataTable) => state.dataTable = dataTable
    },
    actions: {
        getAuthToken(ctx, data) {
            axios.post('http://localhost:8081/auth/login',
                {
                    "login": data.login,
                    "password": data.password
                }
            ).then((response) => {
                if (response.status === 200) {
                    ctx.commit('addToken', response.data.token)
                    router.push({path: '/table'});
                }
            }, (error) => {
                console.log(error);
            });
        },

        getDataTable(ctx) {
            if (ctx.getters.authToken==='') {
                router.push({path: '/auth/login'});
            }
            console.log(ctx.getters.authToken)
            let headers = {
                'authorization': ctx.getters.authToken
            }
            axios.get('http://localhost:8081/table',
                {headers}
            ).then((response) => {
                console.log(response);
                ctx.commit('addDataTable', response.data)
            }, (error) => {
                console.log(error);
            });
        }
    },
    getters: {
        authToken: state => state.authToken,
        dataTable: state => state.dataTable
    },
});
