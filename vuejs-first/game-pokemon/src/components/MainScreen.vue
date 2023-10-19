<template>
  <div class="screen">
    <h1>Poke Memories</h1>
    <p>Select mode to start game</p>
    <div class="modes">
      
      <button @click="onStart(EASY)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(NORMAL)">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button @click="onStart(HARD)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button @click="onStart(SUPER_HARD)">
        <span>10x10</span>
        <span>Super Hard</span>
      </button>
    </div>
  </div>
 </template>
 
 <script>
 
 import {Difficulty} from '../utils/constant';

 export default {
   name: 'MainScreen',
   data() {
    return {
      EASY: Difficulty.EASY,
      HARD: Difficulty.HARD,
      NORMAL: Difficulty.NORMAL,
      SUPER_HARD: Difficulty.SUPER_HARD,
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
 