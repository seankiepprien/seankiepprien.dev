<template>
  <div>
    <div class="flex justify-between px-16 py-10">
      <div class="flex flex-col relative">
        <h2
          class="main-text-color main-text-family text-6xl font-extrabold headerarea"
        >
          Welcome!
        </h2>
        <p
          class="main-text-color main-text-family text-5xl px-5 mt-10 w-4/6 textarea"
        >
          I <span class="sec-text-color">build</span> custom web solutions,
          <span class="sec-text-color">write</span> about DEV and<br />
          <span class="sec-text-color">produce</span> music.
        </p>
      </div>
      <!-- <svg-think class="svgbox"/> -->
      <svg-landing class="absolute right-14 mt-10 svgbox" />
    </div>
    <div class="ml-36 mt-10 headerarea">
      <a href="mailto: kieppriensean@gmail.com" class="flex">
        <p class="text-primary main-text-family text-4xl">Contact me</p>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="envelope-open"
          class="sec-text-color w-10 ml-4 mailanim"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'text',
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
      transform: translateX(100px);
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
      opacity: 1;
    }
  }
}
.mailanim {
  animation: colorShift 3s infinite;
  opacity: 0;
  animation-delay: 2s;
  @keyframes colorShift {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
