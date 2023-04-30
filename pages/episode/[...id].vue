<script setup lang="ts">
import { EpisodeData } from '~/types'

const route = useRoute()
const query = groq`*[_id == "${route.params.id[0]}"][0]`
const { data, refresh } = useSanityQuery(query)
const episodes = data.value as EpisodeData[]
console.log({ episodes })
</script>
<template>
  <div class="w-full max-w-screen-2xl mx-auto p-24">
    <article v-for="episode in episodes"
      class="group outline-none rounded-lg bg-transparent duration-700 p-12 grid grid-cols-4 gap-20">
      <div class="col-span-1">
        <div class="rounded-md overflow-hidden shadow-flat h-[200px]">
          <!-- <img src="/stockphoto1.jpg" alt="" class="object-cover object-top w-full h-full" /> -->
          <SanityImage :asset-id="episode.epImage.asset._ref" alt="" class="object-cover object-top w-full h-full" />
        </div>

        <div class="mt-auto pt-6">
          <button class="text-2xl font-display">
            Listen Now
          </button>
        </div>
      </div>

      <div class="col-span-3 flex flex-col">
        <Header level="h2">
          {{ episode.title }}
        </Header>

        <Header level="h3" display="h5" class="mt-6">Description</Header>
        <p class="text-xl mt-1">
          {{ episode.description }}
        </p>

        <Header level="h3" display="h5" class="mt-6">Notes</Header>
        <div v-html="episode.epNotes" class="text-base font-mono mt-1 whitespace-pre-wrap" />


      </div>
    </article>
  </div>
</template>