import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'; // modulo de roteamento da aplicação
import VeeValidate, { Validator } from 'vee-validate'
import pt_BR from 'vee-validate/dist/locale/pt_BR'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SweetModal from 'sweet-modal-vue/src/plugin.js'

import {routes} from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/css/global.css';

Vue.config.productionTip = false

Vue.use(VeeValidate);
Validator.localize('pt_BR', pt_BR);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(faBoxes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(SweetModal)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
