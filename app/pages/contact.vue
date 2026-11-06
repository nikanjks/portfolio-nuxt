<script setup lang="ts">
import { PhGithubLogo, PhLinkedinLogo, PhArrowUpRight } from '@phosphor-icons/vue'
import { owner } from '~/data/portfolio'

useHead({ title: 'Contact' })
useSeoMeta({
  description: 'Get in touch with Danica Louisse Talusik through LinkedIn or GitHub.',
  ogTitle: 'Contact | Danica Louisse Talusik',
  ogDescription: 'Get in touch with me through LinkedIn or GitHub.',
  ogType: 'website',
  twitterCard: 'summary',
})

const contacts = [
  { name: 'LinkedIn', href: owner.linkedin, icon: PhLinkedinLogo },
  { name: 'GitHub', href: owner.github, icon: PhGithubLogo },
]
</script>

<template>
  <div>
    <PageHeader label="Let's connect" title="Get in Touch" />

    <div class="grid gap-4 sm:grid-cols-2">
      <a
        v-for="(c, i) in contacts"
        :key="c.name"
        :href="c.href"
        target="_blank"
        rel="noopener noreferrer"
        class="card flex-row items-center gap-4 border border-base-content/10 bg-base-200 p-5 shadow-md transition hover:-translate-y-1 hover:border-primary/40 motion-safe:animate-fade-up"
        :style="{ animationDelay: `${i * 150}ms` }"
      >
        <span class="flex size-14 items-center justify-center rounded-full bg-base-300">
          <component :is="c.icon" :size="30" />
        </span>
        <span class="flex-1 text-lg font-semibold">{{ c.name }}</span>
        <PhArrowUpRight :size="22" class="text-primary" />
      </a>
    </div>
  </div>
</template>