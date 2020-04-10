<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex md12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="carousel__link">
                <v-btn large color="error" :to="'/ad/' + ad.id"
                  >{{ ad.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card>
            <v-img :src="ad.imageSrc" height="200px"> </v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>
                  {{ ad.description }}
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn dark color="orange">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="orange"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
    loading() {
      return this.$store.getters.loading;
    }
  } // when dependece by getters
};
</script>

<style scoped>
.carousel__link {
  position: absolute;
  bottom: 100px;
  left: 50%;
  background: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 0);
  padding: 10px 15px;
  border-radius: 5px;
}
</style>
