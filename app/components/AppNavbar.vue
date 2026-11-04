<script setup lang="ts">
import { PhList, PhGithubLogo, PhLinkedinLogo } from '@phosphor-icons/vue'
import { owner } from '~/data/portfolio'
</script>

<template>
  <header class="navbar sticky top-0 z-30 border-b border-base-content/10 bg-base-100/90 backdrop-blur">
    <div class="navbar-start gap-1">
      <!-- Hamburger: only visible below the lg breakpoint -->
      <label for="app-drawer" class="btn btn-ghost btn-square lg:hidden" aria-label="Open menu">
        <PhList :size="24" />
      </label>
      <NuxtLink to="/" class="btn btn-ghost text-lg font-bold tracking-tight">
        {{ owner.name }}
      </NuxtLink>
    </div>

    <div class="navbar-end gap-1">
      <a
        :href="owner.github"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost btn-square"
        aria-label="GitHub"
      >
        <PhGithubLogo :size="24" />
      </a>
      <a
        :href="owner.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost btn-square"
        aria-label="LinkedIn"
      >
        <PhLinkedinLogo :size="24" />
      </a>
    </div>
  </header>
</template>