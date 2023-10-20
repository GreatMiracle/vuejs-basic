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

    <result-screen
      v-if="statusPlay === FINISH"
      :timer="timer"
      @onStartAgain="onStartAgain"
    >
    </result-screen>

    <p class="copyright">
      This game modified by David Kambomoi in Vue 3 course for begginers -
      <a href="#">view here</a>
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
      this.setting.startedAt = new Date().getTime();
      // console.log("start", this.setting.startedAt);

      this.statusPlay = StatusGame.PLAYING;
    },

    onResult() {
      this.timer = new Date().getTime() - this.setting.startedAt;
      console.log("now", new Date().getTime());
      console.log("start", this.setting.startedAt);
      console.log("timer", this.timer);
      this.statusPlay = StatusGame.FINISH;
    },

    onStartAgain() {
      this.statusPlay = StatusGame.READY;
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
