<script setup lang="ts">
import { PhMagnifyingGlassPlus, PhSealCheck, PhX } from '@phosphor-icons/vue'
import type { Certification } from '~/data/portfolio'

defineProps<{ cert: Certification }>()

// A template ref gives us the real <dialog> element so we can call showModal()
const modal = useTemplateRef<HTMLDialogElement>('modal')
</script>

<template>
  <article class="card overflow-hidden border border-base-content/10 bg-base-200 shadow-md motion-safe:animate-fade-up">
    <button
      type="button"
      class="group relative cursor-zoom-in"
      :aria-label="`View ${cert.title} certificate in full`"
      @click="modal?.showModal()"
    >
      <img :src="cert.image" :alt="`${cert.title} certificate`" class="w-full" loading="lazy" />
      <span
        class="absolute inset-0 flex items-center justify-center gap-2 bg-base-100/70 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <PhMagnifyingGlassPlus :size="22" /> View full
      </span>
    </button>

    <div class="card-body flex-row items-center justify-between gap-3 p-4">
      <div>
        <h3 class="font-semibold leading-snug">{{ cert.title }}</h3>
        <p class="text-sm text-base-content/70">{{ cert.issuer }}</p>
      </div>
      <a
        v-if="cert.verifyUrl"
        :href="cert.verifyUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline btn-primary btn-sm"
      >
        <PhSealCheck :size="18" /> Verify
      </a>
    </div>

    <!-- DaisyUI modal built on the native <dialog> element -->
    <dialog ref="modal" class="modal">
      <div class="modal-box max-w-4xl p-2">
        <form method="dialog">
          <button type="submit"class="btn btn-circle btn-sm absolute right-3 top-3" aria-label="Close">
            <PhX :size="18" />
          </button>
        </form>
        <img :src="cert.image" :alt="`${cert.title} certificate`" class="w-full rounded-lg" />
      </div>
      <!-- Clicking the backdrop closes the dialog -->
      <form method="dialog" class="modal-backdrop">
        <button type="submit" aria-label="Close">close</button>
      </form>
    </dialog>
  </article>
</template>