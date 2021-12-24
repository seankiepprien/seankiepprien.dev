<template>
  <section class="flex justify-between px-16 py-10">
    <div class="flex flex-col relative w-1/3">
      <h2 class="main-text-color main-text-family text-6xl mt-4">
        About <span class="sec-text-color">me</span>
      </h2>
      <p
        class="main-text-color main-text-family text-2xl p-2 text-left leading-relaxed mr-8 mt-20"
      >
        My coding journey started in <span class="sec-text-color">2016</span>,
        creating modifications for an old video game called Diablo 2. After some
        time, i decided to learn programming using the Game Maker language (GML)
        and created two video games mockups of Asteroids and Tetris. <br />
        In <span class="sec-text-color">2020</span>, i started learning how the
        Web works and began making simple websites using plain
        <span class="sec-text-color">HTML</span> and over time, expanding my
        knowledge by adding <span class="sec-text-color">CSS</span> and
        <span class="sec-text-color">Javascript</span> and it was at that time
        that i completely fell in love with web developpement. To this day, i
        helped creating many web applications with the help of
        <span class="sec-text-color">Vue</span>
      </p>
    </div>
    <aside class="flex justify-between flex-wrap mt-64 w-2/3">
      <div class="flex flex-col w-1/3 items-center">
        <font-awesome-icon
          :icon="['fab', 'html5']"
          class="main-text-color text-8xl"
        />
        <h3
          class="sec-text-color main-text-family text-5xl text-center font-bold"
        >
          HTML5
        </h3>
        <p class="main-text-color main-text-family text-left text-xl mt-1">
          Learned to build websites using clean, semantic HTML. Semantic HTML is
          very important for communicating with coworkers through code.
        </p>
      </div>
      <div class="flex flex-col w-1/3 items-center">
        <font-awesome-icon
          :icon="['fab', 'css3-alt']"
          class="main-text-color text-8xl"
        />
        <h3 class="sec-text-color main-text-family text-5xl font-bold">CSS3</h3>
        <p class="main-text-color main-text-family text-xl mt-1 mr-2">
          Learning CSS3 is a core part of web design. Knowing how to use
          keyframes, flexboxes and making a website responsive is essential for
          building a modern and good looking website.
        </p>
      </div>
      <div class="flex flex-col w-1/3 items-center">
        <font-awesome-icon
          :icon="['fab', 'js-square']"
          class="main-text-color text-8xl"
        />
        <h3 class="sec-text-color main-text-family text-5xl font-bold">
          Javascript
        </h3>
        <p class="main-text-color main-text-family text-xl mt-1 ml-2">
          Having Javascript in my toolbox enables me to add logic to any
          websites to make them dynamic without the need for any heavy
          frameworks.
        </p>
      </div>
      <div class="flex flex-col w-1/3 items-center">
        <font-awesome-icon
          :icon="['fab', 'node']"
          class="main-text-color text-8xl mt-3"
        />
        <h3 class="sec-text-color main-text-family text-5xl font-bold">
          NodeJs
        </h3>
        <p class="main-text-color main-text-family text-left text-xl mt-1 mr-2">
          Being familliar with NodeJs makes for a very versatile developper. For
          example, being able to create a simple CRUD API to test data handling
          on an ongoing app <br />
          is a very valuable skill.
        </p>
      </div>
      <div class="flex flex-col w-1/3 items-center">
        <font-awesome-icon
          :icon="['fab', 'vuejs']"
          class="main-text-color text-8xl mt-3"
        />
        <h3 class="sec-text-color main-text-family text-5xl font-bold">Vue</h3>
        <p class="main-text-color main-text-family text-left text-xl mt-1">
          I started learning Vue in late 2019/early 2020 and i fell in love with
          the framework. Vue is easily maintainable and makes for a very clean
          code.
        </p>
      </div>
      <div class="flex flex-col w-1/3 items-center">
        <img src="../assets/img/nuxt.png" class="w-24 logo mt-3" />
        <h3 class="sec-text-color main-text-family text-5xl font-bold">Nuxt</h3>
        <p class="main-text-color main-text-family text-left text-xl mt-1 ml-2">
          Nuxt is just like Vue but on steroid. It is very good for creating
          quick and rock solid websites. Having multiples frameworks in my
          toolbox makes for a developper ready for any projects.
        </p>
      </div>
      <div class="w-full flex flex-col items-center mt-5">
        <h3
          class="sec-text-color main-text-family text-center text-5xl font-bold"
        >
          And More.
        </h3>
        <div class="flex">
          <font-awesome-icon
            :icon="['fab', 'git']"
            class="main-text-color text-xl mt-3"
          />
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="main-text-color text-xl mt-3 ml-2"
          />
          <font-awesome-icon
            :icon="['fab', 'laravel']"
            class="main-text-color text-xl mt-3 ml-2"
          />
          <font-awesome-icon
            :icon="['fab', 'php']"
            class="main-text-color text-xl mt-3 ml-2"
          />
          <img src="../assets/img/kotlin.png" class="w-10 logo mt-3 p-1 ml-2" />
          <img src="../assets/img/vscode.png" class="w-10 logo mt-3 p-1" />
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  filter: brightness(0) invert(1);
  -webkit-filter: brightness(0) invert(1);
}
</style>
