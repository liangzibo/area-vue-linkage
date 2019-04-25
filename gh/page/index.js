import './reset.css';

import Vue from 'vue';
import { pcaa } from 'area-data-vue';
import AreaLinkageVue from '../../src/index.js';
Vue.prototype.$pcaa = pcaa;

Vue.use(AreaLinkageVue);

const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

import App from '../general/app/index';

new Vue({
    el: '#app',
    render: (h) => h(App)
});
