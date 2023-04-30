<script setup lang="ts">
interface breadcrumbLink {
  to: string
  text?: string
}

const props = defineProps<{
  previousPages: breadcrumbLink[]
  currentPageTitle: string
}>()

function getPrevPageTitle(link: breadcrumbLink) {
  const title = link.text ?? link.to

  if (title === '/' || title === 'index') {
    return 'Home'
  }

  return title
}
</script>
<template>
  <nav class="group lg:px-12 mx-auto w-full max-w-screen-xl duration-500">
    <div
      class="flex flex-col lg:flex-row justify-start items-start lg:items-center bg-secondary-900/25 rounded-lg p-2 lg:p-6 lg:my-12 text-base font-medium font-mono">
      <div>
        <span v-for="page in previousPages">
          <NuxtLink :to="page.to"
            class="inline-block mx-2 px-2 py-1 rounded-md bg-transparent hover:bg-secondary-900 focus:bg-secondary-900 duration-300 outline-none">
            {{ getPrevPageTitle(page) }}
          </NuxtLink>
          <span>/</span>
        </span>
      </div>

      <div class="w-full lg:ml-2 lg:w-auto">
        <p class="bg-secondary-900 px-2 py-1 rounded-md">{{ currentPageTitle }}</p>
      </div>
    </div>
  </nav>
</template>