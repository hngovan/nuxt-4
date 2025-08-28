<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import type { ToasterProps } from '@nuxt/ui' // Add this import

type LocaleKeys = keyof typeof locales

const { locale } = useI18n()

const toaster = { position: 'top-right' as ToasterProps['position'] }

const lang = computed(() => locales[locale.value as LocaleKeys].code)

const dir = computed(() => locales[locale.value as LocaleKeys].dir)

useHead({
  htmlAttrs: {
    lang,
    dir
  }
})
</script>

<template>
  <NuxtLayout>
    <UApp :locale="locales[locale as LocaleKeys]" :toaster="toaster">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
