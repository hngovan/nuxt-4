export default defineNuxtPlugin(() => {
  useHead({
    titleTemplate: (titleChunk?: string) => {
      return titleChunk ? `${titleChunk} | D-Soft` : 'D-Soft'
    }
  })
})
