import Vue from 'vue';
import App from './App.vue';

import vueUiDemo from 'vue-ui-demo';
Vue.use(vueUiDemo);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
