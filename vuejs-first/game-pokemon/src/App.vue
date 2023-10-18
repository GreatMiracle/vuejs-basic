<template>
  <div>
    <main-screen v-if="statusPlay === 'ready'" @onStart="onHandleBeforeStart($event)"> </main-screen>
    <interact-screen v-if="statusPlay === 'playing'"></interact-screen>
    <result-screen v-if="statusPlay === 'finish'"></result-screen>

    <p class="copyright">
      This game modified by David Kambomoi in Vue 3 course for begginers -
      <a
        href="https://www.youtube.com/watch?v=CHM75-NqOmk&list=PLU4OBh9yHE94sZ3TPGt0QG_PIwrZ1QF6i"
        >view here</a
      >
    </p>
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      statusPlay: "ready",
    };
  },

  methods: {

    onHandleBeforeStart(ev){
      console.log("event::::", ev);
    }

  },
};
</script>

<style>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 1.5rem;
}

.copyright a {
  color: #f4dc26;
}
</style>
