<template>
  <div class="post">
    <h2 class="text-primary text-6xl main-text-family font-bold mt-10">
      {{ post.title }}
    </h2>
    <v-tags :tags="post.tags" class="mb-10 mt-1" />
    <v-img class="img" :src="post.image" alt="Featured Image"></v-img>
    <nuxt-content
      :document="post"
      class="text-primary post-text-family font-medium text-lg mt-10"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const postPath = `/posts/${params.slug}`
      const [post] = await $content('posts', { deep: true })
        .where({ dir: postPath })
        .fetch()
      return { post }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
      ],
    }
  },
  computed: {
    postInfo() {
      const post = this.post || {}
      const { body, ...rest } = post
      return rest
    },
  },
}
</script>

<style scoped>
.post {
  margin: auto;
  max-width: 40%;
  padding-bottom: 4rem;
}
</style>
