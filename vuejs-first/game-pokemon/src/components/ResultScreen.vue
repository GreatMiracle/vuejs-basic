<template>
  <div class="screen">
    <h1>✨ Congratulations ✨</h1>
    <h3>{{ formattedTime }}</h3>

    <button @click="onStartAgain">Start Again</button>
  </div>
</template>

<script>
export default {
  name: "ResultScreen",
  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      formattedTime: "",
    };
  },
  methods: {
    onStartAgain() {
      this.$emit("onStartAgain");
    },

    convertTime() {
      // Chuyển đổi thành đối tượng Date
      const milliseconds = this.timer; // Giá trị timer tính bằng mili giây

      // Chuyển đổi mili giây thành giây, phút và giờ
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      // Trích xuất phần dư để có giá trị phút và giây còn lại
      const remainingSeconds = seconds % 60;
      const remainingMinutes = minutes % 60;

      // Hiển thị dạng giờ:phút:giây
      const formattedTime = `${hours}hh:${remainingMinutes}mm:${remainingSeconds}ss`;
      console.log(formattedTime);
      return formattedTime;
    },
  },
  mounted() {
    this.formattedTime = this.convertTime(); // Gọi hàm convertTime khi màn hình đã được hiển thị
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.screen h1 {
  font-size: 5rem;
}

.screen h3 {
  margin-top: 1.5rem;
  font-size: 3rem;
}

.screen button {
  font: var(--font);
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  margin: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.screen button:hover {
  background-color: var(--light);
  color: var(--dark);
}
</style>
