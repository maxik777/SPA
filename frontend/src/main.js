import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/tailwind.css'
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: "{attribute} is required!",
    minLength: "{attribute} must have at least 6 letters!",
    // isJoe: "{attribute} must be Joe",
    notGmail: "{attribute} must not be gmail",
    email: "{attribute} is not a valid Email address.",
    sameAsPassword:"Passwords must be identical",
    isEmailAvailable:
        "{attribute} is not available. Must be at least 10 characters long."
  }
});
Vue.component("form-group", templates.singleErrorExtractor.foundation6);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
