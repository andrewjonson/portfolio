require('./bootstrap');

const token = localStorage.getItem('appToken')

if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

window.Vue = require('vue');

import router from './router'
import store from './store'
import swal from './plugins/swal'
import loading from './plugins/loading'
import vuetify from './plugins/vuetify'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMM DD, YYYY H:m:s')
  }
});

const app = new Vue({
    router,
    store,
    swal,
    loading,
    vuetify,
    el: '#app',
});
