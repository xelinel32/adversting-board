import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import * as fb from "firebase";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  vuetify: new Vuetify(),
  components: { App },
  template: "<App/>",
  created() {
    // Initialize Firebase
    fb.initializeApp({
      apiKey: "AIzaSyCgDOoKKoM9ZF7bsb47VeaTb8-v3ZzBbRg",
      authDomain: "ad-board-5c691.firebaseapp.com",
      databaseURL: "https://ad-board-5c691.firebaseio.com",
      projectId: "ad-board-5c691",
      storageBucket: "ad-board-5c691.appspot.com",
      messagingSenderId: "654246470341"
    });
  }
});
