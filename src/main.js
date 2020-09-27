import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDPpJXEU2v48GVcZT2cPBFabL4HSnWF5zs",
  authDomain: "json-login.firebaseapp.com",
  databaseURL: "https://json-login.firebaseio.com",
  projectId: "json-login",
  storageBucket: "json-login.appspot.com",
  messagingSenderId: "152510190681",
  appId: "1:152510190681:web:879cfa1bf1e86124abcd48",
  measurementId: "G-XXJQ01CCP9"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }

})

Vue.config.productionTip = false

