<template>
  <div class="screen">
    <h1>Poke Memories</h1>
    <p>Select mode to start game</p>
    <div class="modes">
      <button @click="onStart(CHICKEN)">
        <span>2x2</span>
        <span>Gà</span>
      </button>
      <button @click="onStart(EASY)">
        <span>4x4</span>
        <span>Đồng đoàn</span>
      </button>
      <button @click="onStart(NORMAL)">
        <span>6x6</span>
        <span>Tinh anh</span>
      </button>
      <button @click="onStart(HARD)">
        <span>8x8</span>
        <span>Cao thủ</span>
      </button>
      <button @click="onStart(SUPER_HARD)">
        <span>10x10</span>
        <span>Thách đấu</span>
      </button>
    </div>
  </div>
</template>
 
 <script>
import { Difficulty } from "../utils/constant";

export default {
  name: "MainScreen",
  data() {
    return {
      CHICKEN: Difficulty.CHICKEN,
      EASY: Difficulty.EASY,
      HARD: Difficulty.HARD,
      NORMAL: Difficulty.NORMAL,
      SUPER_HARD: Difficulty.SUPER_HARD,
    };
  },

  methods: {
    onStart(level) {
      console.log("<<<<<<<<<<<<<<<User chose level: ", level);
      this.$emit("onStart", level);
    },
  },
};
</script>
 
 
<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
}

.screen p {
  font-size: 2rem;
}

.modes {
  display: flex;
  margin-top: 2rem;
}

.modes button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.modes button:hover {
  background-color: var(--light);
  color: var(--dark);
}

.modes button span:first-child {
  font-size: 2rem;
}

.modes button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
