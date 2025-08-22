<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { collapsed } = useSider()

const menuItems = ref<NavigationMenuItem[]>([
  { label: 'Home', icon: 'i-lucide-house', to: '/' },
  { label: 'About', icon: 'i-lucide-info', to: '/about' }
])
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :collapsed="collapsed"
    :items="menuItems"
  />
</template>
