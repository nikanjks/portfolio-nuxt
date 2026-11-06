<script setup lang="ts">
import { PhChartPieSlice } from '@phosphor-icons/vue'
import { certification, completions } from '~/data/portfolio'

useHead({ title: 'Certifications' })
useSeoMeta({
  description: 'Certifications and certificates of completion earned by Danica Louisse Talusik.',
  ogTitle: 'Certifications | Danica Louisse Talusik',
  ogDescription: 'Certifications and certificates of completion I have earned.',
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="flex flex-col gap-14">
    <section>
      <PageHeader label="Credentials" title="My Certifications" />
      <div class="grid gap-6 sm:grid-cols-2">
        <CertificationCard :cert="certification" />
      </div>
    </section>

    <section>
      <PageHeader label="Credentials" title="My Certificates of Completion" />
      <div class="grid gap-6 sm:grid-cols-2">
        <CertificationCard
          v-for="(cert, i) in completions"
          :key="cert.title"
          :cert="cert"
          :style="{ animationDelay: `${i * 120}ms` }"
        />
      </div>
    </section>

    <section>
      <ContentCard>
        <h2 class="card-title">
          <PhChartPieSlice :size="24" class="text-primary" /> Certificates by issuer
        </h2>
        <CertChart />
      </ContentCard>
    </section>
  </div>
</template>