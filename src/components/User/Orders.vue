<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 class="text-center mt-5" v-if="loading">
        <h1 class="text--primary mb-5">You not have ads</h1>
        <v-progress-circular
          :size="50"
          :width="4"
          color="orange"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary" mb-5>Orders</h1>
        <v-list subheader two-line elevation="6">
          <v-list-item v-for="order in orders" :key="order.id">
            <v-list-item-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn :to="'/ad/' + order.adId" dark color="orange"> Open</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-center" v-else>
        <h1 class="text--primary mb-5">You not have orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading() {
      this.$store.getters.loading;
    },
    orders() {
      return this.$store.getters.orders;
    }
  },
  methods: {
    markDone() {
      this.$store
        .dispatch("markOrderDone", order.id)
        .then(() => {
          order.done = true;
        })
        .catch(() => {});
    }
  },
  created() {
    this.$store.dispatch("fetchOrders");
  }
};
</script>

<style scoped></style>
