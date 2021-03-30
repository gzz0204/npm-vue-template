import Vue from 'vue';
import App from './App.vue';

import olympic2021Components from '@ne-web/olympic2021-components';
Vue.use(olympic2021Components);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
