<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()
const { collapsed } = useSider()
const route = useRoute()

const baseMenu: Omit<NavigationMenuItem, 'active'>[] = [
  { label: t('menu.home'), icon: 'i-lucide-house', to: '/' },
  { label: t('menu.articles'), icon: 'i-lucide-info', to: '/articles' }
]

// format active menu
const menuItems = computed<NavigationMenuItem[]>(() =>
  baseMenu.map(item => ({
    ...item,
    active: route.path === item.to || route.path.startsWith(item.to + '/')
  }))
)
</script>

<template>
  <UNavigationMenu orientation="vertical" :collapsed="collapsed" :items="menuItems" />
</template>
