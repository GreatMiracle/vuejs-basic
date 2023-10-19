<template>
  <div>
    <main-screen
      v-if="statusPlay === READY"
      @onStart="onHandleBeforeStart($event)"
    >
    </main-screen>
    <interact-screen
      v-if="statusPlay === PLAYING"
      :cardsContext="setting.cardsContext"
      @onFinish="onResult"
    ></interact-screen>

    <result-screen v-if="statusPlay === FINISH"></result-screen>

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
import { StatusGame } from "./utils/constant";
import { shuffled } from "./utils/array";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      READY: StatusGame.READY,
      PLAYING: StatusGame.PLAYING,
      FINISH: StatusGame.FINISH,

      statusPlay: StatusGame.READY,

      setting: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      timer: 0,
    };
  },

  methods: {
    onHandleBeforeStart(event) {
      console.log("<<<<<<<<<<<<<<<Start game:", event);
      this.setting.totalOfBlocks = event;
      const firstCards = Array.from(
        {
          length: this.setting.totalOfBlocks / 2,
        },
        (_, i) => i + 1
      );
      // console.log(firstCards);
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];

      console.log("cards", cards);
      //liệu rằng shuffled lồng ở đây có gây khó hơn shuffled 1 lần ko?
      this.setting.cardsContext = shuffled(shuffled(shuffled(cards)));
      this.startedAt = new Date().getTime();

      this.statusPlay = StatusGame.PLAYING;
    },

    onResult() {
      this.timer = new Date().getTime() - this.settings.startedAt;
      this.statusPlay = StatusGame.FINISH;
    },
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
