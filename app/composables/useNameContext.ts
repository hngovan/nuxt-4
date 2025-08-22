import type { InjectionKey } from 'vue'

type Data = {
  name: Ref<string>
}

const nameContextKey: InjectionKey<Data> = Symbol('nameContextKey')

export const useNameContextProvider = (data: Data) => {
  provide(nameContextKey, data)
}

export const useNameContext = () => {
  const context = inject(nameContextKey)

  if (context) return context

  if (context === null) return context

  throw new Error('Context with key nameContextKey not found')
}
