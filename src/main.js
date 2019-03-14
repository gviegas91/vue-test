import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMedium, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


// Import necessary resources
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { store } from './vuex/store';
import { routes } from './router-config.js';

//Root Component
import App from './App.vue';

// Use resources
Vue.use(VueRouter);
Vue.use(VueResource);

//Vue.config.productionTip = false;

library.add(faMedium, faFacebook, faTwitter, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);


// Configs
global.router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
