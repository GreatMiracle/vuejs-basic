<template>
  <div class="screen">
    <h1>Interact</h1>
    <card-component
      v-for="(card, index) in cardsContext"
      :key="index"
      :imgBackFaceUrl="`images/${card}.png`"
      :card="{ index: index, value: card }"
      :ref="`card-${index}`"
      :rules="rules"
      @onFlip="checkRule($event)"
    ></card-component>
  </div>
</template>

 <script>
import CardComponent from "./Card.vue";

export default {
  name: "InteractScreen",
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardComponent,
  },

  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("Right...");
        this.$refs[`card-${this.rules[0].index}`][0].onEnabledDisabledMode();
        this.$refs[`card-${this.rules[1].index}`][0].onEnabledDisabledMode();
        this.rules = [];
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          this.rules = [];
          console.log("aaaaaa");
        }, 800);
      } else {
        return false;
      }
    },
  },
};
</script>
 
<style scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: var(--light);
}

/* .screen__inner {
  width: calc(424px);
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
} */
</style>

 