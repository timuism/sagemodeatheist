<script setup lang="ts">
  defineProps<{
    to: string
  }>()
</script>

<template>
  <a :href="to" class="absolute top-0 left-0 rounded-md bg-secondary-500 p-4 mt-2 text-lg text-primary-500 -translate-x-full focus:ml-2 focus:translate-x-0 outline-none duration-100">
    <slot />
  </a>
</template>