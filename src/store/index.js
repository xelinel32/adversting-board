import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import shared from "./shared";
import * as fb from "firebase";

class Ad {
  constructor(
    title,
    description,
    ownerId = null,
    imageSrc = '',
    promo = false,
    id = null
  ) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id;
  }
}

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
    async createAd({ commit, getters }, payload) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        );
        const ad = await fb
          .database()
          .ref("ads")
          .push(newAd);
        commit("setLoading", false);
        commit("createAd", {
          ...newAd,
          id: ad.key
        });
      } catch (error) {
        commit("setError", error.message);
        commit("setLoading", false);
        throw error;
      }
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
