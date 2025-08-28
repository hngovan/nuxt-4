<script setup lang="ts">
const { collapsed } = useSider()
</script>

<template>
  <div class="border-default border-t py-2 text-center text-sm min-h-[57px]">
    <template v-if="!collapsed">
      <p>{{ $t('footer.company') }}</p>
      <p>{{ $t('footer.all_rights_reserved') }}</p>
    </template>
  </div>
</template>
