import type { ModalProps, ModalEmits } from '@nuxt/ui'

export interface ModalBaseProps extends /* @vue-ignore */ ModalProps {
  footer?: boolean
}

export interface ModalBaseEmits extends /* @vue-ignore */ ModalEmits {
  close: [boolean]
  ok: [MouseEvent]
  cancel: [MouseEvent]
}
