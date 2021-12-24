<template>
  <section class="flex flex-wrap items-center justify-between px-20 mt-20">
    <div
      v-for="project in projects"
      :key="project.key"
      class="border-2 rounded card main-text-color p-4 m-2 text-center w-80"
    >
      <h3 class="text-2xl main-text-family font-bold mt-2 mb-2 pb-5">
        {{ project.name }}
      </h3>
      <img :src="project.image" class="h-40 mb-4" />
      <a :href="project.url" class="main-text-family text-xl sec-text-color"
        >Link to project</a
      >
      <br />
      <a
        v-if="project.source"
        :href="project.source"
        class="main-text-family text-xl sec-text-color"
        >Link to source code</a
      >
      <p v-else class="main-text-family text-xl sec-text-color">
        Source code not available
      </p>
      <p class="main-text-family text-lg h-48">{{ project.desc }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'seankiepprien.dev',
          image: require('assets/img/seankiepprien.png'),
          url: 'seankiepprien.dev',
          source:
            'https://github.com/seankiepprien/seankiepprien.dev/tree/gh-pages',
          desc:
            'My own portfolio - Made with Nuxt and Tailwind CSS, a Vuejs framework. This website is made entirely by me. From design to code, with continuous integration.',
          date: 'december 2021',
        },
        {
          id: 4,
          name: 'SmartVPN',
          image: require('assets/img/smartvpn.PNG'),
          url: 'https://seankiepprien.github.io/SmartVPN/',
          source: 'https://github.com/seankiepprien/SmartVPN',
          desc:
            'My first project ever made. A very simple landing page with very limited functionality, fully responsive made with plain HTML, Bootstrap 4, and JQuery.',
          date: 'October 2020',
        },
        {
          id: 2,
          name: 'Dynamic survey',
          image: require('assets/img/ramo.PNG'),
          url: 'https://estimation.ramo.eco/',
          desc:
            'A dynamic survey made with Vue. This project required to store the entries from one page to another and at the end produce a price estimate based on the entries',
          date: 'June 2021',
        },
        {
          id: 3,
          name: 'StopMtl',
          image: require('../assets/img/stopmtl.png'),
          url: 'https://stopmtl.ca',
          desc:
            'This one is my favorite, made with Vue, this one is a map showing police stops reported by the citizens in the city of Montreal. I helped adapt the app for mobile and finished some functionalities',
          date: 'May 2021',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  border-color: #fff;
}
</style>
