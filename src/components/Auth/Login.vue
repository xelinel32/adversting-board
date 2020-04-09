<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-6">
          <v-toolbar color="orange" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                label="email"
                name="Email"
                prepend-icon="mdi-human"
                type="email"
                :rules="emailRules"
                v-model="email"
              />
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :counter="8"
                :rules="passwordRules"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="orange"
              dark
              large
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid || loading"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password must be less then 8 characters"
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("loginUser", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => {});
      }
    },
    created() {
      if (this.$route.query["loginError"]) {
        this.$store.dispatch("setError", "Please log in to access this page!");
      }
    }
  }
};
</script>

<style></style>
