<template>
  <div class="posts">
    <h2>Tags: {{ $route.params.slug }}</h2>
    <PostCard v-for="post in posts" :key="post.dir" :post="post" />
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard,
  },
  async asyncData({ params, error, $content }) {
    try {
      const posts = await $content('posts', { deep: true })
        .where({ tags: { $contains: params.slug } })
        .fetch()
      return { posts }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  head() {
    return {
      title: 'Tags',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My nuxt blog tags',
        },
      ],
    }
  },
}
</script>

<style></style>
