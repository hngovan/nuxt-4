<script setup lang="ts">
import type { ModalProps } from '@nuxt/ui'
import type { ModalBaseEmits, ModalBaseProps } from '~/types/components/modal'

const props = withDefaults(defineProps<ModalBaseProps>(), {
  footer: true
})

const emits = defineEmits<ModalBaseEmits>()

const forwarded = computed<ModalProps>(() => props)

const handleOk = (e: MouseEvent) => {
  emits('ok', e)
  emits('close', true)
}

const handleCancel = (e: MouseEvent) => {
  emits('cancel', e)
  emits('close', false)
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
        @click="handleCancel"
      />
      <UButton label="Submit" color="neutral" @click="handleOk" />
    </template>
  </UModal>
</template>
