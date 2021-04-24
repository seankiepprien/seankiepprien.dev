<template>
  <div class="min-h-screen">
    <div class="flex justify-between px-16 py-10">
      <div class="flex flex-col relative">
        <h2 class="main-text-color main-text-family text-6xl font-extrabold headerarea">
          Welcome!
        </h2>
        <p class="main-text-color main-text-family text-5xl px-5 mt-10 w-4/6 textarea">
          I <span class="sec-text-color">build</span> custom web solutions,
          <span class="sec-text-color">write</span> about DEV and<br/> <span class="sec-text-color">produce</span> music.
        </p>
      </div>
      <!-- <svg-think class="svgbox"/> -->
      <svg-landing class="absolute right-14 mt-10 svgbox" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'text'
})
</script>

<style scoped>
  .headerarea {
    animation: slideIn 2s;
    @keyframes slideIn {
      0% {
        transform: translateX(-500px);
      }
      60% {
        transform: translateX(100px)
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  .textarea {
    animation: bounceIn 2s;
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.1);
      }
      60% {
        opacity: 1;
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .svgbox {
    animation: slideUp 3s;
    @keyframes slideUp {
      0% {
        opacity: 0;
      }
      60% {
        opacity: 0;
      }
      100% {
        opacity: 1
      }
    }
  }
</style>
