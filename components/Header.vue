<script setup lang="ts">
import {h, useSlots, useAttrs} from 'vue'
import type {Component} from 'vue'

type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
interface HeaderProps {
  level: HeaderLevel,
  display?: HeaderLevel
}

const props = defineProps<HeaderProps>()
const slots = useSlots()
const attrs = useAttrs()

const d = computed(() => {
  const classMap = {
    h1: 'font-display text-4xl capitalize md:text-6xl',
    h2: 'font-display font-semibold text-2xl capitalize md:text-4xl',
    h3: 'font-display font-normal text-xl md:text-3xl',
    h4: 'font-display font-semibold text-lg',
    h5: 'font-body font-semibold uppercase tracking-widest text-sm',
    h6: 'font-body font-bold uppercase tracking-widest text-xs',
  }

  return classMap[props.display ?? props.level]
})

const component: Component = () => {
  return h(props.level, attrs, slots)
}
</script>

<template>
  <component :class="d">
    <slot />
  </component>
</template>