<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      number: 1,
    };
  },
  created() {
    console.log(this.$store.state.count);
    this.number = this.$store.state.count;
  },
};
</script>

<style scoped></style>
