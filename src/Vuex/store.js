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

        getDataTable: function (ctx) {
            // if (ctx.getters.authToken === '') {              // это имеет смысл, если мы случайно зашли на вторую вкладку не залогинившись
            //     router.push({path: '/auth/login'});
            // }
            console.log(ctx.getters.authToken)

            let headers = {'authorization': ctx.getters.authToken}
            axios.get('http://localhost:8081/table',
                {headers}
                //{headers: {'Authorization': ctx.getters.authToken}}
            ).then(function (response) {
                console.log(JSON.stringify(response.data));
            }).catch(function (error) {
                console.log(error);
            });


            /*            let config = {
                            method: 'get',
                            url: 'http://localhost:8081/table',
                            headers: {
                                // 'Access-Control-Allow-Origin': '*',
                                // 'Access-Control-Allow-Headers': 'Authorization',
                                'Authorization': ctx.getters.authToken,
                            },
                        };
                        axios(config)
                            .then(function (response) {
                                console.log(JSON.stringify(response.data));
                            })
                            .catch(function (error) {
                                console.log(error);
                            });*/

        }
    },
    getters: {
        authToken: state => state.authToken,
        dataTable: state => state.dataTable
    },
});
