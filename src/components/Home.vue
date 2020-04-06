<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex md12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
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
</template>

<script>
export default {
  data() {
    return {
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
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "12123"
        },
        {
          title: "Thirt ad",
          description: "Hello i'm description",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "746"
        }
      ]
    };
  }
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
