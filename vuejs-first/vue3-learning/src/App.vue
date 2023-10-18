<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" @click="onChangeLog"> -->
  <!-- <HelloWorld ref="hello" msg="Welcome to Your Vue.js App"/> -->
  <teleport to="body">
    <header-component />
    <button @click="onToggleModel">Toggle Model</button>
    <hr />
    <base-model
      v-if="isShowModel"
      title="this is Title from App"
      theme="example"
      @closeModel="onToggleModel"
    >
      <template v-slot:header>
        <h2>Hét đơ</h2>
      </template>

      <label for=""> Name</label>
      <input type="password" />

      <template v-slot:footer>
        <h2>phút tơ</h2>
      </template>
    </base-model>
  </teleport>

  <hr />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from "./components/Header.vue";
import ModelComponent from "./components/Model.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HeaderComponent,
    BaseModel: ModelComponent,
  },
  methods: {
    // onChangeLog(){
    //   console.log("ban da click vao logo anh Vue.",  this.$refs.hello);
    //   this.$refs.hello.onClg();
    // },

    onToggleModel() {
      console.log("toggle model =>");
      this.isShowModel = !this.isShowModel;
    },
  },
  data() {
    return {
      isShowModel: false,
    };
  },
};
</script>

<style></style>
