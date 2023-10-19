<template>
  <div class="card" :class="{ disabled: isDisabled }">
    <div
      class="card__inner"
      :class="{ 'is-flipped': isFipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div class="card__content"></div>
      </div>

      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url('${require('@/assets/' + imgBackFaceUrl)}')`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "CardComponent",
  props: {
    card: {
      type: [Array, String, Number, Object], //phục vụ cho sau nếu muốn mở rộng còn ko chỉ cần number hoặc string là đc
    },
    imgBackFaceUrl: {
      type: String,
      require: true,
    },
    rules: {
      type: Array,
    },
  },
  data() {
    return {
      isFipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.rules.length >= 2) return;
      if (this.isDisabled) return;
      this.isFipped = !this.isFipped;
      if (this.isFipped) {
        console.log(this.card);
        this.$emit("onFlip", this.card);
      }
    },
    onFlipBackCard() {
      this.isFipped = false;
    },
    onEnabledDisabledMode() {
      this.isDisabled = true;
    },
  },
};
</script>
 
 <style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 120px;
  height: 90px;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card.disabled .card__inner {
  cursor: default;
}

.card__inner.is-flipped {
  transform: rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front .card__content {
  background: url("../assets/images/icon_back.png") no-repeat center center;
  height: 100%;
  width: 100%;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}

.card__face--back .card__content {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
}
</style>
 