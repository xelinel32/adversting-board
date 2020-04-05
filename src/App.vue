<template>
  <v-app>
    <v-navigation-drawer app dark temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="link of links" :key="link.title" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="orange">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><router-link to="/" tag="span" class="pointer"
          >Adversting board</router-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          text
          color="normal"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          title: "Login",
          icon: "mdi-lock",
          url: "/login"
        },
        {
          title: "Register",
          icon: "mdi-face",
          url: "/register"
        },
        {
          title: "Orders",
          icon: "mdi-bookmark",
          url: "/orders"
        },
        {
          title: "New ad",
          icon: "mdi-note",
          url: "/new"
        },
        {
          title: "My ads",
          icon: "mdi-format-list-text",
          url: "/list"
        }
      ]
    };
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
