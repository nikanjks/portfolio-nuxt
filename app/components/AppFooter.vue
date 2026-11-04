<script setup lang="ts">
import { owner } from '~/data/portfolio'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer footer-center border-t border-base-content/10 p-6 text-sm text-base-content/70">
    <p>&copy; {{ year }} {{ owner.name }}. Designed &amp; developed by {{ owner.name }}.</p>
  </footer>
</template>