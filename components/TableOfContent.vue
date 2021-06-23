<template>
  <section class="flex flex-col">
    <ul v-for="article in articles" :key="article.slug">
      <li>{{ article.title }}</li>
      <li>{{ article.desc }}</li>
      <li>{{ article.datePosted }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
