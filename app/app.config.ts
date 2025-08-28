export default defineAppConfig({
  ui: {
    input: {
      slots: {
        root: 'w-full'
      }
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    },
    formField: {
      slots: {
        container: 'mt-2'
      }
    }
  }
})
