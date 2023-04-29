<script setup lang="ts">
defineProps<{
  to: string
  label: string
  desc: string
}>()
</script>

<template>
  <NuxtLink 
    :to="to"
    class="flex flex-col bg-transparent hover:bg-secondary-500 rounded-xl px-6 py-4 duration-300 outline-none focus:bg-secondary-500"
  >
    <div class="font-display text-xl md:text-3xl">{{label}}</div>
    <div class="">{{desc}}</div>
  </NuxtLink>
</template>