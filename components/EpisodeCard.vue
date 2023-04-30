<script setup lang="ts">
import type { EpisodeData } from '~/types';
const props = defineProps<{
  episode: EpisodeData
}>()
const imageAssetRef = computed(() => {
  return props.episode.epImage.asset._ref
}) 

console.log(props.episode.slug.current)
</script>

<template>
  <li class="before:text-5xl before:absolute before:z-10 before:p-4 before:-ml-10 before:-mt-10">
    <NuxtLink :to="`/episode/${episode.slug.current}`"
      class="block outline-none group focus:scale-105 min-w-[295px] w-[295px] h-[350px] hover:scale-105 duration-300 cursor-pointer">
      <div class="relative w-full h-full ">
        <div class="absolute z-20 top-0 right-0 h-full flex items-center rounded-md">
          <Header level="h3" class="ml-10 -mr-10 my-8 py-4">
            {{ episode.title }}
          </Header>
        </div>

        <div class="w-full h-full overflow-hidden">

          <!-- @todo: add alt to image in sanity cms -->
          <SanityImage 
            :asset-id="imageAssetRef"
            class="object-cover opacity-10 group-focus:opacity-25 group-hover:opacity-25 duration-200"
            auto="format"
          />
        </div>

        <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-secondary-500 from-25% to-transparent" />
        <div class="absolute top-0 left-0 h-full w-full border-2 border-primary-500 rounded-md duration-300"
          style="clip-path: polygon(16% 0%, 16% 10%, 0% 10%, 0% 100%, 100% 100%, 100% 80%, 80% 80%, 80% 16%, 100% 16%, 100% 0%);" />
      </div>
    </NuxtLink>
  </li>
</template>

