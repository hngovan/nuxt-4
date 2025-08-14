<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

type LocaleKeys = keyof typeof locales

const { locale } = useI18n()

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
    <UApp :locale="locales[locale as LocaleKeys]">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
