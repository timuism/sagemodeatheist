<script setup lang="ts">
import type { EpisodeData } from '~/types'

const query = groq`*[_type == "episode"]`
const {data, refresh} = useLazySanityQuery(query)
</script>
<template>
  <div>
    <article class="w-full max-w-screen-xl mx-auto p-6 lg:px-12 lg:py-24">
      <Header level="h2">
        All Episodes
      </Header>

      <section class="mt-24">
        <ol class="space-y-32 pb-12 lg:pb-24 mb-12 border-b-2 border-secondary-900">
          <li v-for="episode in data as EpisodeData[]">
            <NuxtLink :to="`/episode/${episode._id}`" class="group outline-none rounded-lg bg-transparent focus:bg-secondary-900 hover:bg-secondary-900 duration-700 items-stretch p-4 lg:p-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <div class="col-span-1 rounded-md overflow-hidden shadow-flat w-full">
                <SanityImage 
                  :asset-id="episode.epImage.asset._ref"
                  alt="" 
                  class="object-cover object-top w-full h-full"
                />
              </div>
              <div class="col-span-1 md:col-span-3 flex flex-col">
                <div class="flex flex-col-reverse">
                  <Header level="h3">
                    {{ episode.title }}
                  </Header>
                  <p class="mb-2 font-mono tracking-wider uppercase"><span hidden>Released on</span> {{ episode.releaseDate }}</p>
                </div>

                <Header level="h4" display="h5" class="mt-6">Description</Header>
                <p class="text-xl mt-1 line-clamp-2">
                  {{ episode.description }}
                </p>

                <div class="mt-auto pt-6">
                  <ActionLink :to="episode._id">
                    View Episode Details
                  </ActionLink>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ol>


      </section>

      <JoinMailingList />
    </article>

  </div>
</template>