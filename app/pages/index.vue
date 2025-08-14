<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

useSeoMeta({
  title: 'Home',
  description: 'This is page Home'
})

const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])
</script>

<template>
  <div class="flex w-1/2 flex-col justify-center">
    <div>{{ $t('common.hello') }}</div>
    <UAccordion :items="items" />
  </div>
</template>
