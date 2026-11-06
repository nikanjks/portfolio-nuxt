<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  title: string
}>()

const titleWords = computed(() => props.title.split(/\s+/))
</script>

<template>
  <header class="mb-10 motion-safe:animate-fade-up">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{{ label }}</p>
    <h1 class="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      <span>{{ titleWords[0] }}</span>
      <span v-if="titleWords.length > 1" class="text-primary">{{ ' ' + titleWords[1] }}</span>
      <span v-if="titleWords.length > 2">{{ ' ' + titleWords.slice(2).join(' ') }}</span>
    </h1>
    <div class="mt-3 h-1 w-16 rounded-full bg-primary"></div>
  </header>
</template>