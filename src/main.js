import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'; 

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
