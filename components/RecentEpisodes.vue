<script setup lang="ts">
import type { EpisodeData } from '~/types'

const query = groq`*[_type == "episode"][0...5]`
const { data, refresh } = await useLazySanityQuery(query)
</script>

<template>
  <EpisodeCard 
    v-for="(episode) in (data as EpisodeData[])" 
    :episode="episode" 
    key="episode.uuid" 
  />
</template>

<style scoped>
ol {
  counter-reset: count;
}

li {
  counter-increment: count;
}

li::before {
  content: counter(count, decimal-leading-zero)
}
</style>