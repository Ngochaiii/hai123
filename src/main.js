'use strict';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import store from './components/store/index.js';



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({el: '#app',
    router, 
    components: { App }, 
    template: '<App/>',
    store : store
});
