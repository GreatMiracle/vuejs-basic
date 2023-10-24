<template>
  <h1>Transaction Detail {{ $route.params.idKien }}</h1>
</template>

<script>
// @ is an alias to /src ✨

export default {
  name: "TransactionDetailView",
  components: {},
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.idKien)
      .then((res) => res.json())
      .then((data) => (this.transaction = data));

    this.$store.dispatch("fetchTransaction", { id: this.$route.params.idKien });
  },
};
</script>
