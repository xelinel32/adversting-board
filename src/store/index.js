import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    shared
  },
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
      },
      {
        title: "Fourty ad",
        description: "Hello i'm description",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "721"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = toString(Math.random());
      commit("createAd", payload);
    }
  },
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
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId);
      };
    }
  } // get access to state
});
