<script setup lang="ts">
const route = useRoute()
const drawerToggle = useTemplateRef<HTMLInputElement>('drawerToggle')

// Close the mobile drawer whenever the user navigates to another page
watch(
  () => route.path,
  () => {
    if (drawerToggle.value) drawerToggle.value.checked = false
  },
)
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="app-drawer" ref="drawerToggle" type="checkbox" class="drawer-toggle" aria-label="Toggle sidebar menu" />

    <div class="drawer-content flex min-h-screen flex-col">
      <AppNavbar />
      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8">
        <slot />
      </main>
      <AppFooter />
    </div>

    <AppSidebar />
  </div>
</template>