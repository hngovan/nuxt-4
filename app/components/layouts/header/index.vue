<script setup lang="ts">
const { collapsed, toggleCollapsed } = useSider()
</script>

<template>
  <div
    class="border-default flex h-(--ui-header-height) shrink-0 items-center justify-between gap-1.5 border-b px-4 sm:px-6"
  >
    <div class="flex min-w-0 items-center gap-1.5">
      <!-- menu mobile -->
      <UButton
        class="inline-flex lg:hidden"
        :icon="'i-lucide-menu'"
        size="lg"
        color="neutral"
        variant="ghost"
        @click="toggleCollapsed"
      />

      <!-- toggle desktop -->
      <UButton
        class="hidden lg:inline-flex"
        :icon="collapsed ? 'i-lucide-panel-right-close' : 'i-lucide-panel-right-open'"
        size="lg"
        color="neutral"
        variant="ghost"
        @click="toggleCollapsed"
      />
      <h1 class="text-highlighted flex items-center gap-1.5 truncate font-semibold">
        {{ $t('dashboard.header.title') }}
      </h1>
    </div>
    <div>
      <ThemePicker />
    </div>
  </div>
</template>
