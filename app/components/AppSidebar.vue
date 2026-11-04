<script setup lang="ts">
import { owner, navLinks } from '~/data/portfolio'
</script>

<template>
  <div class="drawer-side z-40">
    <!-- Clicking the dark overlay closes the drawer on mobile -->
    <label for="app-drawer" aria-label="Close menu" class="drawer-overlay"></label>

    <aside class="flex min-h-full w-72 flex-col gap-8 border-r border-base-content/10 bg-base-200 p-6">
      <NuxtLink to="/" class="flex flex-col items-center gap-3 text-center">
        <div class="avatar">
          <div class="w-28 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-200">
            <img src="/portrait/profile-picture.jpeg.jpeg" :alt="`Portrait of ${owner.name}`" />
          </div>
        </div>
        <span class="text-lg font-bold leading-tight">{{ owner.name }}</span>
      </NuxtLink>

      <nav aria-label="Main navigation">
        <ul class="menu w-full gap-1 p-0">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" exact-active-class="menu-active">
              <component :is="link.icon" :size="20" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>