import Vue from 'vue'
import router from '@/router/index.js'
import VeeValidate from 'vee-validate'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'

import VueMoment from 'vue-moment'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLayerGroup, faEye, faThumbsUp as fasThumbsUp, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import { faClock, faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VeeValidate, config);
Vue.use(VueMoment);

library.add(faUser, faWeixin, faClock, faLayerGroup, faEye, fasThumbsUp, farThumbsUp, faChevronRight, faChevronLeft)
Vue.component('fa-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')