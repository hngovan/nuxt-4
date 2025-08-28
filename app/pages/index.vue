<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.home.title'),
  description: t('seo.home.description')
})
</script>

<template>
  <div class="flex flex-col justify-center gap-5">
    <p>{{ formatNumber(1234) }}</p>
  </div>
</template>
