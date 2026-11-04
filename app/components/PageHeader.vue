<script setup lang="ts">
defineProps<{
  label: string
  title: string
  highlight?: string
}>()
</script>

<template>
  <header class="mb-10 motion-safe:animate-fade-up">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{{ label }}</p>
    <h1 class="mt-1 text-4xl font-bold tracking-tight">
      {{ title }}
      <span v-if="highlight" class="text-primary">{{ highlight }}</span>
    </h1>
    <div class="mt-3 h-1 w-16 rounded-full bg-primary"></div>
  </header>
</template>