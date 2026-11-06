<script setup lang="ts">
import { stack, categories } from '~/data/portfolio'

useHead({ title: 'Tech Stack' })
useSeoMeta({
  description: 'The languages, databases, and developer tools Danica Louisse Talusik works with.',
  ogTitle: 'Tech Stack | Danica Louisse Talusik',
  ogDescription: 'The languages, databases, and developer tools I work with.',
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <div>
    <PageHeader label="What I work with" title="Tech Stack" />

    <!-- Legend -->
    <ul class="mx-auto mb-10 flex w-fit flex-wrap justify-center gap-x-6 gap-y-2 pb-10 text-sm">
      <li v-for="(cat, key) in categories" :key="key" class="flex items-center gap-2">
        <span class="size-2.5 rounded-sm" :class="cat.dot"></span>
        {{ cat.label }}
      </li>
    </ul>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <StackCard
        v-for="(item, i) in stack"
        :key="item.name"
        :item="item"
        :style="{ animationDelay: `${i * 70}ms` }"
      />
    </div>
  </div>
</template>