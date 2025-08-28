<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t('seo.articles.title'),
  description: t('seo.articles.description')
})
</script>

<template>
  <h1>Articles page</h1>
</template>
