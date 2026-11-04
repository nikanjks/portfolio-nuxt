<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'
import { owner } from '~/data/portfolio'

useHead({ title: 'Home' })
useSeoMeta({
  description: 'Portfolio of Danica Louisse Talusik, a BSIT student and aspiring data analyst.',
  ogTitle: 'Danica Louisse Talusik | Portfolio',
  ogDescription: 'Portfolio of Danica Louisse Talusik, a BSIT student and aspiring data analyst.',
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <section class="flex min-h-[60vh] items-center justify-center">
    <ContentCard class="w-full max-w-lg">
      <div class="flex flex-col items-center gap-4 py-4 text-center">
        <div class="avatar">
          <div class="w-40 rounded-full ring-2 ring-primary ring-offset-4 ring-offset-base-200">
            <img src="/portrait/profile-picture.jpeg.jpeg" :alt="`Portrait of ${owner.name}`" />
          </div>
        </div>
        <h1 class="text-3xl font-bold tracking-tight">{{ owner.name }}</h1>
        <p class="text-base-content/80">{{ owner.tagline }}</p>
        <NuxtLink to="/about" class="btn btn-primary mt-2">
          <PhArrowRight :size="18" /> Get to know me
        </NuxtLink>
      </div>
    </ContentCard>
  </section>
</template>