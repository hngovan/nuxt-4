<script setup lang="ts">
const { collapsed } = useSider()
</script>

<template>
  <div
    :class="[
      'border-default bg-elevated/25 relative hidden min-h-svh min-w-16 shrink-0 flex-col border-r lg:flex',
      collapsed ? 'w-0' : 'w-[10rem]',
    ]"
  >
    <div :class="['flex h-(--ui-header-height) shrink-0 items-center gap-1.5 px-4', collapsed ? 'justify-center' : '']">
      <img src="/favicon.ico" alt="Logo" class="h-5 w-5 rounded-[inherit] object-cover">
      <span v-if="!collapsed" class="text-default truncate text-sm font-medium">Nuxt</span>
    </div>
    <div class="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-2 transition-all duration-300">
      <LayoutsMenu />
    </div>
  </div>
</template>
