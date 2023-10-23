<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h2>{{ firstName }}</h2>
  <h2>{{ car }}</h2>

  <input type="text" v-model="searchText" />

  <ul>
    <li v-for="(item, index) in nameFilter" :key="index">{{ item }}</li>
  </ul>

  <!-- <button @click="funcAbc">Click me</button> -->
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue';
export default {
  props: {
    theme: {
      type: String,
      default: 'light',
    },
  },

  setup(props, context) {
    console.log('props', props);
    console.log('context', context);
    // const firstName = 'asc';
    const firstName = ref('1st');
    const car = reactive({
      price: 2000,
      name: 'toyota',
    });

    const searchText = ref('');

    let nameArr = reactive(['tulen', 'zata', 'lauriel', 'lorion', 'raz']);

    const nameFilter = computed(() =>
      nameArr.filter((text) => text.includes(searchText.value))
    );

    const funcAbc = () => {
      console.log(' function abcd nezz');
      console.log(firstName);
      console.log('car', car.price);
      firstName.value = '2nd';
    };

    watch(searchText, (pa, pb) => {
      console.log(pa, pb);
    });

    watchEffect(() => {
      if (searchText.value) {
        console.log('run........');
      }
    });

    return { firstName, funcAbc, car, nameFilter, searchText };
  },
};
</script>

<style scoped></style>
