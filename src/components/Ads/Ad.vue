<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-img :src="ad.imageSrc" height="300px"> </v-img>
          <v-card-text>
            <h1 class="text--primary mb-5">{{ ad.title }}</h1>
            <p>
              {{ ad.description }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="orange"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModalVue from "./EditAdModal.vue";
export default {
  props: ["id"],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    isOwner() {
      return this.ad.ownerId === this.$store.getters.user.id;
    }
  },
  components: {
    addEditAdModal: EditAdModalVue
  }
};
</script>

<style></style>
