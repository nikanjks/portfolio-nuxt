<script setup lang="ts">
import type { NuxtError } from '#app'
import { PhWarning, PhHouse } from '@phosphor-icons/vue'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

useHead({ title: is404.value ? '404 Page Not Found' : 'Something went wrong' })
useSeoMeta({
  description: is404.value
    ? "The page you're looking for doesn't exist."
    : 'An unexpected error occurred.',
  robots: 'noindex',
})

// clearError wipes the error state, then redirects home
const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <PhWarning :size="64" class="text-warning" />
      <p class="text-7xl font-bold text-primary">{{ error.statusCode }}</p>
      <h1 class="text-2xl font-bold">
        {{ is404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="max-w-md text-base-content/70">
        {{
          is404
            ? "Looks like this page doesn't exist, or it may have been moved. Let's get you back on track."
            : 'An unexpected error occurred. Please try again.'
        }}
      </p>
      <button class="btn btn-primary mt-2" @click="goHome">
        <PhHouse :size="20" /> Back to Home
      </button>
    </section>
  </NuxtLayout>
</template>