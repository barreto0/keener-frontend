import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'; // modulo de consumo de api
import VueRouter from 'vue-router'; // modulo de roteamento da aplicação
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import api from './environment'; 
import {routes} from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/css/global.css';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = api.devURL;

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(faBoxes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
