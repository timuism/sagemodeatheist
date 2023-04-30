<script setup lang="ts">
import { EpisodeData } from '~/types'

const route = useRoute()
const query = groq`*[_id == "${route.params.id[0]}"][0]`
const { data, refresh } = useLazySanityQuery(query)
const episode = data.value as EpisodeData
console.log({ episode })
</script>
<template>
  <div v-if="episode" class="w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
    <Breadcrumbs :previous-pages="[
        { to: '/' },
        { to: '/episodes', text: 'Episodes' }
      ]" current-page-title="01 - This is a test episode" />

    <article class="group outline-none rounded-lg bg-transparent duration-700 mt-6 lg:mt-0 lg:p-12 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-20">
      <div v-if="episode.epImage" class="col-span-1">
        <div class="rounded-md overflow-hidden shadow-flat h-[200px]">
          <SanityImage :asset-id="episode.epImage.asset._ref" alt="" class="object-cover object-top w-full h-full" />
        </div>

        <div class="mt-8 lg:pt-6 space-y-4">
          <PrimaryButton class="w-full">Listen Now</PrimaryButton>
          <SecondaryButton class="w-full">Read Transcript</SecondaryButton>
        </div>
      </div>

      <div class="col-span-1 lg:col-span-3 flex flex-col bg-secondary-900 p-6 lg:p-12 rounded-xl">
        <Header level="h2">
          {{ episode.title }}
        </Header>

        <Header level="h3" display="h6" class="mt-6">Description</Header>
        <p class="lg:text-xl mt-1 border-b-2 border-secondary-900/25 pb-8">
          {{ episode.description }}
        </p>

        <Header level="h3" display="h6" class="mt-6">Notes</Header>
        <div v-html="episode.epNotes"
          class="text-lg font-mono mt-1 whitespace-pre-wrap border-2 border-primary-500/20 p-2 rounded-md" />


      </div>
    </article>
  </div>
</template>