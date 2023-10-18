<template>
  <div class="screen">
    <h1>Poke Memories</h1>
    <p>Select mode to start game</p>
    <div class="modes">
      <button @click="onStart(Difficulty.EASY)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(Difficulty.NORMAL)">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button @click="onStart(Difficulty.HARD)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button @click="onStart(Difficulty.SUPER_HARD)">
        <span>10x10</span>
        <span>Super Hard</span>
      </button>
    </div>
  </div>
 </template>
 
 <script>
 
 import'../utils/difficulty';

 export default {
   name: 'MainScreen',
   data() {
    return {
      
    }
   },
   methods: {
    onStart(level){
      console.log("<<<<<<<<<<<<<<<User chose level: ", level );
      this.$emit("onStart", level);
    }
   },
 }
 </script>
 
 <style>
 
 </style>
 