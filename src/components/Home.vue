<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex md12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex md12 v-for="ad in ads" :key="ad.id">
          <v-card>
            <v-img :src="ad.imageSrc" height="200px ">
              <v-card-title primary-title
                ><div>
                  <h3 class="headline md-0">{{ ad.title }}</h3>
                  <div>{{ ad.description }}</div>
                </div></v-card-title
              >
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat text>
                Open
              </v-btn>

              <v-btn raised dark class="primary" text>
                Buy
              </v-btn>
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

<style></style>
