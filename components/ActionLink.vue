<script setup lang="ts">
withDefaults(defineProps<{
 to: string
 isExternal: boolean 
}>(), {
  isExternal: false
})
</script>

<template>
  <NuxtLink 
    :to="to"
    class="inline-block font-medium text-lg uppercase tracking-widest border-b-2 border-transparent outline-none hover:border-primary-500 focus:border-primary-500 duration-300 py-4 -mb-4"
    :target="isExternal ? '_new' : '_self'"
  >
    <slot />
  </NuxtLink>
</template>