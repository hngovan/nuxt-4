<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()

useSeoMeta({
  title: t('error.meta.title'),
  description: t('error.meta.description')
})
</script>

<template>
  <UApp>
    <div class="flex justify-center">
      <div class="flex min-h-screen flex-col items-center justify-center text-center">
        <p class="text-primary text-3xl font-semibold">
          404
        </p>
        <h1 class="text-highlighted mt-2 text-4xl font-bold text-balance sm:text-5xl">
          {{ $t('error.meta.title') }}
        </h1>
        <p class="text-muted mt-4 text-lg text-balance">
          {{ $t('error.meta.message') }}
        </p>
        <div class="mt-8 flex items-center justify-center gap-6">
          <UButton
            to="/"
            variant="subtle"
            trailing-icon="i-lucide-arrow-right"
            :label="$t('error.meta.back_to_home')"
          />
        </div>
      </div>
    </div>
  </UApp>
</template>
