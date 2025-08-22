<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'This is page Home'
})

const open = ref(false)
</script>

<template>
  <div class="flex flex-col justify-center gap-5">
    <UButton icon="i-lucide-rocket" color="neutral" variant="link">
      <NuxtLink to="/about">{{ $t('common.about') }}</NuxtLink>
    </UButton>
    <BaseButton />
    <p>{{ formatNumber(1234) }}</p>
    <UButton
      label="Open Modal"
      color="neutral"
      variant="subtle"
      @click="open = !open"
    />
    <Modal
      v-model:open="open"
      title="Custom Modal"
      description="Hello from props"
      :ui="{ footer: 'justify-end' }"
      :header="false"
      @ok="open = false"
      @close="open = false"
    >
      Modal
    </Modal>
  </div>
</template>
