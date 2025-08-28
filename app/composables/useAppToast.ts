export function useAppToast() {
  const toast = useToast()

  const success = (description?: string) => {
    toast.add({
      description,
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })
  }

  const error = (description?: string) => {
    toast.add({
      description,
      color: 'error',
      icon: 'i-heroicons-x-circle'
    })
  }

  const info = (description?: string) => {
    toast.add({
      description,
      color: 'info',
      icon: 'i-heroicons-information-circle'
    })
  }

  return { success, error, info }
}
