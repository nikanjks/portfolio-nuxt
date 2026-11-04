<script setup lang="ts">
defineProps<{
  label?: string
  title?: string
}>()
</script>

<template>
  <article class="card border border-base-content/10 bg-base-200 shadow-md motion-safe:animate-fade-up">
    <div class="card-body">
      <p v-if="label" class="text-xs font-semibold uppercase tracking-widest text-primary">{{ label }}</p>
      <h2 v-if="title" class="card-title">{{ title }}</h2>
      <slot />
    </div>
  </article>
</template>