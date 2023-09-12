import Vue from 'vue';
import App from './App.vue';

// Vuesax Component Framework
import Vuesax from 'vuesax';
import 'material-icons/iconfont/material-icons.css'; //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
import IconCrypto from 'vue-cryptocurrency-icons'; //IconCrypto
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import locale from 'element-ui/lib/locale/lang/vi';
Vue.use(ElementUI, { locale });

Vue.use(IconCrypto);

Vue.use(Vuesax);

// axios
import axios from './axios.js';

Vue.prototype.$http = axios;

// API Calls
import './http/requests';

// mock
// import "./fake-db/index.js"

// Theme Configurations
import '../themeConfig.js';

// Firebase
import '@/firebase/firebaseConfig';

// Auth0 Plugin
import AuthPlugin from './plugins/auth';

Vue.use(AuthPlugin);

// ACL
import acl from './acl/acl';

// Globally Registered Components
import './globalComponents.js';

// Styles: SCSS
import './assets/scss/main.scss';

// Tailwind
import '@/assets/css/main.css';

// Vue Router
import router from '@/router';

// Vuex Store
import store from './store/store';

// i18n
import i18n from './i18n/i18n';

// Vuexy Admin Filters
import './filters/filters';

// Clipboard
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

// Tour
import VueTour from 'vue-tour';

Vue.use(VueTour);
require('vue-tour/dist/vue-tour.css');

// VeeValidate
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'YOUR_API_KEY',
    libraries: 'places' // This is required if you use the Auto complete plug-in
  }
});

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer';

Vue.use(VueHammer);

// PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Feather font icon
require('./assets/css/iconfont.css');

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

if (process.env.NODE_ENV !== 'development') {
  // eslint-disable-next-line no-console
  console.log(` %c trading-admin  %c LastBuildTime: ${__APP_INFO__['build_time']},commit:${__APP_INFO__['commit']} `, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  acl,
  render: (h) => h(App)
}).$mount('#app');
