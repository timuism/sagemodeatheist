<script setup lang="ts">
import { AsyncData } from 'nuxt/app'
import { EpisodeData } from '~/types'

const route = useRoute()
const query = groq`*[slug.current == "${route.params.slug}"][0]`
const { data, refresh } = await useLazySanityQuery(query)
data.value as EpisodeData
</script>

<template>
  <div v-if="data" class="w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
    <Breadcrumbs :previous-pages="[
        { to: '/' },
        { to: '/episodes', text: 'Episodes' }
      ]" :current-page-title="`${(data as EpisodeData).epNum} - ${(data as EpisodeData).title}`" />

    <article class="group outline-none rounded-lg bg-transparent duration-700 mt-6 mb:mt-0 mb:p-12 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-20">
      <div v-if="(data as EpisodeData).epImage" class="col-span-1">
        <div class="rounded-md overflow-hidden shadow-flat">
          <SanityImage :asset-id="(data as EpisodeData).epImage.asset._ref" alt="" class="object-cover object-top w-full h-full" />
        </div>

        <div class="mt-8 md:hidden lg:block lg:pt-6 space-y-4">
          <PrimaryButton class="w-full">Listen Now</PrimaryButton>
          <SecondaryButton class="w-full">Read Transcript</SecondaryButton>
        </div>
      </div>

      <div class="col-span-1 md:col-span-3 flex flex-col bg-secondary-900 p-6 md:p-12 rounded-xl">
        <div class="hidden md:flex md:mb-12 lg:hidden space-x-4" aria-hidden>
          <PrimaryButton class="w-full">Listen Now</PrimaryButton>
          <SecondaryButton class="w-full">Read Transcript</SecondaryButton>
        </div>

        <Header level="h2">
          {{ (data as EpisodeData).title }}
        </Header>

        <Header level="h3" display="h6" class="mt-6">Description</Header>
        <p class="md:text-xl mt-1 border-b-2 border-secondary-900/25 pb-8">
          {{ (data as EpisodeData).description }}
        </p>

        <Header level="h3" display="h6" class="mt-6">Notes</Header>
        <div v-html="(data as EpisodeData).epNotes"
          class="text-lg font-mono mt-1 whitespace-pre-wrap border-2 border-primary-500/20 p-2 rounded-md" />
      </div>
    </article>
  </div>
</template>