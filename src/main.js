import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
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
  template: "<App/>"
});
