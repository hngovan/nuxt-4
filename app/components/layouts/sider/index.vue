<script setup lang="ts">
const { collapsed } = useSider()
const { removeToken } = useAuthToken()

const handleLogout = () => {
  removeToken()
  navigateTo('/login')
}

const open = ref(false)
</script>

<template>
  <div
    :class="[
      'border-default bg-elevated/25 relative hidden min-h-svh min-w-16 shrink-0 flex-col border-r lg:flex',
      collapsed ? 'w-0' : 'w-[15rem]',
    ]"
  >
    <div
      :class="[
        'flex h-(--ui-header-height) w-full shrink-0 items-center gap-1.5 px-4',
        collapsed ? 'justify-center' : '',
      ]"
    >
      <UButton color="neutral" variant="ghost" :class="['w-full', collapsed ? 'p-1.5' : '']">
        <img src="/favicon.ico" alt="Logo" class="h-5 w-5 rounded-[inherit] object-cover">
        <span v-if="!collapsed" class="text-default truncate text-sm font-medium">Nuxt</span>
      </UButton>
    </div>
    <div class="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-2 transition-all duration-300">
      <LayoutsMenu />
    </div>
    <div class="px-4 py-2">
      <UButton
        icon="i-lucide-log-out"
        size="lg"
        color="neutral"
        variant="link"
        :class="{ 'p-1.5 w-[31px] h-8': collapsed }"
        :label="!collapsed ? $t('menu.logout') : ''"
        @click="open = true"
      />
    </div>
    <LayoutsFooter />
  </div>

  <Modal
    v-model:open="open"
    :title="$t('modal.logout.title')"
    :ui="{ footer: 'justify-end' }"
    :header="false"
    @ok="handleLogout"
    @close="open = false"
  >
    <div class="flex justify-center">
      {{ $t('modal.logout.description') }}
    </div>
  </Modal>
</template>
