<template>
  <section>
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link to="#">{{ article.title }}</nuxt-link>
    </div>
  </section>
</template>

<script>
import TableOfContent from '~/components/TableOfContent.vue'
export default {
  methods: {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'desc'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return articles
    },
  },
}
</script>

<style></style>
