import Vue from 'vue'
import App from './App.vue'

import Button from './components/shared/ui-components/Button.vue'
import Footer from './components/shared/ui-components/Footer.vue'
import Navbar from './components/shared/ui-components/Navbar.vue'

import VueRouter from 'vue-router'; // modulo de roteamento da aplicação
import VeeValidate, { Validator } from 'vee-validate';
import pt_BR from 'vee-validate/dist/locale/pt_BR';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBoxes, faArrowUp, faArrowDown, faDolly } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SweetModal from 'sweet-modal-vue/src/plugin.js';
import moment from 'moment';

import router from './router/router.config'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/css/global.css';

Vue.config.productionTip = false

Vue.component('custom-button', Button);
Vue.component('custom-footer', Footer);
Vue.component('navbar', Navbar);

Vue.use(VeeValidate, { fieldsBagName: 'veeFields' });
Validator.localize('pt_BR', pt_BR);

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(faBoxes, faArrowUp, faArrowDown, faDolly);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(SweetModal);

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value), ['DD/MM/YYYY', 'YYYY-MM-DDTh:mm:s']).format('DD/MM/YYYY H:mm:s')
  }
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
