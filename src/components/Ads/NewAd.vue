<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-5">Create new adversting</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
            required
          />
          <v-textarea
            label="Ad description"
            name="description"
            type="text"
            :rules="[v => !!v || 'Description is required']"
            v-model="description"
            no-resize
          />
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row mb-3 mt-3>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn color="warning">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <img src="" alt="" height="100" />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-switch color="orange" v-model="promo" label="Add to promo"></v-switch>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" class="success" @click="createAd"
          >Create Ad</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        };
        console.log(ad);
      }
    }
  }
};
</script>

<style></style>
