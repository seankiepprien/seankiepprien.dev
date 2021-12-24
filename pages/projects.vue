<template>
  <section class="flex flex-col p-10">
    <header>
      <h2
        class="text-5xl main-text-family main-text-color font-bold text-center mt-5 mb-5"
      >
        My <span class="sec-text-color">completed</span> projects
      </h2>
    </header>
    <aside>
      <projectCards></projectCards>
    </aside>
  </section>
</template>

<script>
import projectCards from '@/components/projectCards.vue'
export default {
  components: { projectCards },
}
</script>

<style></style>
