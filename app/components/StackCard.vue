<script setup lang="ts">
import { categories, type StackItem } from '~/data/portfolio'

defineProps<{ item: StackItem }>()
</script>

<template>
  <div
    class="card items-center gap-3 border border-base-content/10 bg-base-200 p-5 shadow-md transition hover:-translate-y-1 hover:border-primary/40 motion-safe:animate-fade-up"
  >
    <div class="flex size-16 items-center justify-center rounded-full border border-base-content/10 bg-base-300">
      <img :src="item.logo" :alt="item.name" class="size-9" />
    </div>
    <span class="font-semibold">{{ item.name }}</span>
    <span class="size-2 rounded-sm" :class="categories[item.category].dot" :title="categories[item.category].label"></span>
  </div>
</template>