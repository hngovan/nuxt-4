<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { t } = useI18n()
const { saveToken } = useAuthToken()
const toast = useAppToast()
useSeoMeta({
  title: t('seo.login.title'),
  description: t('seo.login.description')
})

const schema = z.object({
  email: z.email(t('validate.login.email')),
  password: z.string().min(8, t('validate.login.password')),
  remember: z.boolean()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  remember: false
})

const onSubmit = async (_event: FormSubmitEvent<Schema>) => {
  toast.success(t('toast.login.description'))
  saveToken('test token', state.remember)
  navigateTo('/')
}

definePageMeta({
  layout: false
})
</script>

<template>
  <NuxtLayout name="auth-base">
    <div class="mx-auto flex flex-col items-center justify-center">
      <img src="/favicon.ico" alt="Logo" class="object-cover">
      <h2 class="text-highlighted mt-2 text-2xl font-bold">
        Sign in to your account
      </h2>
    </div>
    <div class="mx-auto mt-10 w-full md:max-w-[480px]">
      <div class="border-default bg-elevated/55 rounded-lg border p-12 shadow">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-6"
          @submit="onSubmit"
        >
          <UFormField :label="$t('login.email')" name="email">
            <UInput v-model="state.email" :placeholder="$t('login.placeholder.email')" />
          </UFormField>

          <UFormField :label="$t('login.password')" name="password">
            <UInput v-model="state.password" type="password" :placeholder="$t('login.placeholder.password')" />
          </UFormField>

          <UFormField>
            <div class="flex items-center justify-between">
              <UCheckbox v-model="state.remember" label="Remember me" />
              <UButton color="info" variant="link">
                <NuxtLink to="/forgot" target="_blank">{{ $t('login.forgot_password') }}</NuxtLink>
              </UButton>
            </div>
          </UFormField>

          <UButton type="submit" class="text-highlighted w-full justify-center">
            {{ $t('login.sign_in') }}
          </UButton>
        </UForm>
      </div>
    </div>
  </NuxtLayout>
</template>
