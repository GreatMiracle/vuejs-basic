<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/transaction">404</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link :to="{ name: 'todo-composition' }"
      >Todo Composition</router-link
    >
    |
    <router-link :to="{ name: 'transaction-detail', params: { idKien: 1 } }"
      >tesstNAme</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",

  created() {
    console.log(document.querySelector("h1"));
  },

  mounted() {
    console.log(document.querySelector("h1"));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
