export function useAppToast() {
  const toast = useToast()

  const success = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })
  }

  const error = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      color: 'error',
      icon: 'i-heroicons-x-circle'
    })
  }

  const info = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      color: 'info',
      icon: 'i-heroicons-information-circle'
    })
  }

  return { success, error, info }
}
