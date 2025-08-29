<script setup lang="ts">
import { h, resolveComponent, type DefineComponent } from 'vue'
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn, BadgeProps, ButtonProps, DropdownMenuProps, InputProps } from '@nuxt/ui'
import type { Article } from '~/types/article'

const { t } = useI18n()

useSeoMeta({
  title: t('seo.articles.title'),
  description: t('seo.articles.description')
})

const UBadge = resolveComponent('UBadge') as DefineComponent<BadgeProps>
const UButton = resolveComponent('UButton') as DefineComponent<ButtonProps>
const UDropdownMenu = resolveComponent('UDropdownMenu') as DefineComponent<DropdownMenuProps>
const UInput = resolveComponent('UInput') as DefineComponent<InputProps>

const { createSortHeader, createFilterHeader, createInputFilterHeader } = useTableHeaders<Article>(
  UButton,
  UDropdownMenu,
  UInput
)

const loading = ref(false)

const data = ref<Article[]>([
  {
    id: '1',
    title: 'Getting Started with Vue 3',
    status: 'public',
    author: 'admin',
    date: '2024-03-11T15:30:00',
    locale: 'en'
  },
  {
    id: '2',
    title: 'Vue 3 の新機能まとめ',
    status: 'public',
    author: 'admin',
    date: '2024-04-05T10:00:00',
    locale: 'ja'
  },
  {
    id: '3',
    title: 'Giới thiệu Nuxt 3 cho người mới bắt đầu',
    status: 'draft',
    author: 'admin',
    date: '2024-05-21T08:45:00',
    locale: 'vn'
  },
  {
    id: '4',
    title: 'Best Practices for TypeScript in Vue',
    status: 'public',
    author: 'admin',
    date: '2024-06-10T14:20:00',
    locale: 'en'
  },
  {
    id: '5',
    title: 'Cách triển khai i18n trong Vue 3',
    status: 'draft',
    author: 'admin',
    date: '2024-07-01T09:15:00',
    locale: 'vn'
  },
  {
    id: '6',
    title: 'Vue Router の高度な使い方',
    status: 'public',
    author: 'admin',
    date: '2024-07-22T16:00:00',
    locale: 'ja'
  }
])

const statusOptions = [
  { value: 'public', label: t('table.articles.filters.status.public') },
  { value: 'draft', label: t('table.articles.filters.status.draft') }
]

const localeOptions = [
  { value: 'en', label: t('table.articles.filters.locale.en') },
  { value: 'ja', label: t('table.articles.filters.locale.ja') },
  { value: 'vn', label: t('table.articles.filters.locale.vn') }
]

const columns: TableColumn<Article>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => createSortHeader(column, t('table.articles.headers.id')),
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'title',
    header: ({ column }) => createInputFilterHeader(column, t('table.articles.headers.title'))
  },
  {
    accessorKey: 'status',
    header: ({ column }) => createFilterHeader(column, t('table.articles.headers.status'), statusOptions),
    cell: ({ row }) => {
      const color = {
        public: 'success' as const,
        draft: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () => row.getValue('status'))
    },
    filterFn: (row, columnId, filterValue: string[]) => {
      if (!filterValue || filterValue.length === 0) return true
      return filterValue.includes(row.getValue(columnId))
    }
  },
  {
    accessorKey: 'author',
    header: ({ column }) => createSortHeader(column, t('table.articles.headers.author'))
  },
  {
    accessorKey: 'date',
    header: ({ column }) => createSortHeader(column, t('table.articles.headers.author')),
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  },
  {
    accessorKey: 'locale',
    header: ({ column }) => createFilterHeader(column, t('table.articles.headers.locale'), localeOptions),
    filterFn: (row, columnId, filterValue: string[]) => {
      if (!filterValue || filterValue.length === 0) return true
      return filterValue.includes(row.getValue(columnId))
    }
  }
]

const table = useTemplateRef('table')

const sorting = ref([
  {
    id: 'id',
    desc: false
  }
])

const columnFilters = ref([
  {
    id: 'title',
    value: ''
  }
])

const pagination = ref({
  pageIndex: 0,
  pageSize: 10
})
</script>

<template>
  <div class="border-muted relative z-[1] rounded-md border">
    <div class="border-accented flex border-b px-4 py-3.5">
      <UInput
        :model-value="table?.tableApi?.getColumn('title')?.getFilterValue() as string"
        class="max-w-sm"
        placeholder="Filter title..."
        @update:model-value="table?.tableApi?.getColumn('title')?.setFilterValue($event)"
      />
    </div>
    <UTable
      ref="table"
      v-model:sorting="sorting"
      v-model:column-filters="columnFilters"
      v-model:pagination="pagination"
      :data="data"
      :columns="columns"
      :loading="loading"
      :pagination-options="{
        getPaginationRowModel: getPaginationRowModel(),
      }"
      class="flex-1"
    />
  </div>
  <div class="flex justify-center pt-4">
    <UPagination
      :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
      :items-per-page="table?.tableApi?.getState().pagination.pageSize"
      :total="table?.tableApi?.getFilteredRowModel().rows.length"
      @update:page="p => table?.tableApi?.setPageIndex(p - 1)"
    />
  </div>
</template>
