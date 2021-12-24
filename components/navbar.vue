<template>
  <nav class="flex space-x-auto justify-between px-10 py-10">
    <div class="flex align-middle">
      <nuxt-link to="/">
        <h1 class="text-2xl main-text-color font-bold">Seankiepprien.dev</h1>
      </nuxt-link>
    </div>
    <div class="flex space-x-10 main-text-color nav-links nav-links-family">
      <nuxt-link class="fromleft" to="about"> About me </nuxt-link>
      <nuxt-link class="fromleft" to="projects"> Projects </nuxt-link>
      <a class="fromleft" href="mailto:kieppriensean@gmail.com">
        <span class="sec-text-color">Contact me</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
h1 {
  font-family: var(--nav-header-family), sans-serif;
}
.nav-links-family {
  font-family: var(--nav-links-family), sans-serif;
}
.fromleft:after {
  display: block;
  content: '';
  margin-top: 5px;
  border-bottom: 2px solid var(--sec-text-color);
  border-radius: 5px;
  transform: scaleX(0);
  transition: transform 300ms ease-in-out;
}
.fromleft:hover:after {
  transform: scaleX(1);
}
.fromleft:after {
  transform-origin: 0 50%;
}
</style>
