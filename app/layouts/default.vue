<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <LayoutsSider />
    <div class="lg:not-last:border-default relative flex min-h-svh min-w-0 flex-1 flex-col lg:not-last:border-r">
      <LayoutsHeader />
      <div class="flex flex-1 flex-col gap-4 overflow-y-auto p-4 sm:gap-6 sm:p-6">
        <slot />
      </div>
      <LayoutsFooter />
    </div>
  </div>
</template>
