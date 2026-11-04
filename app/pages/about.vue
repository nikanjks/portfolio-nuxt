<script setup lang="ts">
import { PhIdentificationCard, PhRocketLaunch } from '@phosphor-icons/vue'

useHead({ title: 'About' })
useSeoMeta({
  description: 'Learn more about Danica Louisse Talusik: who I am and my professional aspirations in information technology.',
  ogTitle: 'About | Danica Louisse Talusik',
  ogDescription: 'Who I am and my professional aspirations in information technology.',
  ogType: 'profile',
  twitterCard: 'summary',
})
</script>

<template>
  <div>
    <PageHeader label="Get to know me" title="About" highlight="Me" />

    <div class="flex flex-col gap-6">
      <ContentCard>
        <h2 class="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <PhIdentificationCard :size="20" /> Who I am
        </h2>
        <p>
          I am Danica Louisse Talusik, a junior BSIT student who is still discovering more about myself in the field
          of technology. I enjoy learning new things that allow me to solve problems while being creative. I consider
          myself a self-starter who can work independently, but I also recognize the value of working with others. Aside
          from being a student, I also enjoy watching series and exploring creative interests such as arts.
        </p>
      </ContentCard>

      <ContentCard style="animation-delay: 150ms">
        <h2 class="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <PhRocketLaunch :size="20" /> Professional aspirations
        </h2>
        <p>
          As I continue my journey in information technology, my goal is to further improve my skills and create outputs
          that are both functional and visually appealing. I am still exploring which path suits me best, but I am open to
          learning and growing along the way. I hope to gain more practical experience in the future to help me develop
          both my skills and direction.
        </p>
      </ContentCard>
    </div>
  </div>
</template>