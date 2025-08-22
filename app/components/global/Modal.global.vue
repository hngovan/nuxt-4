<script setup lang="ts">
import type { ModalProps } from '@nuxt/ui'
import type { ModalBaseEmits, ModalBaseProps } from '~/types/components/modal'

const props = withDefaults(defineProps<ModalBaseProps>(), {
  footer: true
})

const emit = defineEmits<ModalBaseEmits>()

const forwarded = computed<ModalProps>(() => props)

const handleOk = (e: MouseEvent) => {
  emit('ok', e)
  emit('close', true)
}

const handleCancel = (e: MouseEvent) => {
  emit('cancel', e)
  emit('close', false)
}
</script>

<template>
  <UModal v-bind="forwarded" :close="{ onClick: handleCancel }">
    <template #body>
      <slot />
    </template>
    <template v-if="props.footer" #footer>
      <UButton
        label="Cancel"
        color="neutral"
        variant="outline"
        @click="handleOk"
      />
      <UButton label="Submit" color="neutral" @click="handleCancel" />
    </template>
  </UModal>
</template>
