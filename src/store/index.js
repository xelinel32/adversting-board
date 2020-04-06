import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    ads: [
      {
        title: "First",
        description: "Hello i'm description",
        promo: false,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "1223"
      },
      {
        title: "Second ad",
        description: "Hello i'm description",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "12123"
      },
      {
        title: "Thirt ad",
        description: "Hello i'm description",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "746"
      }
    ]
  },
  mutation: {},
  actions: {},
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo;
      });
    },
    myAds(state) {
      return state.ads;
    }
  } // get access to state
});
