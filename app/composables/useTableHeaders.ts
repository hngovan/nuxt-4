import { h, type DefineComponent } from 'vue'
import type { Column } from '@tanstack/vue-table'
import type { DropdownMenuProps, ButtonProps, InputProps } from '@nuxt/ui'

export interface FilterOption {
  value: string
  label: string
}

export function useTableHeaders<T extends Record<string, unknown> = Record<string, unknown>>(
  UButton: DefineComponent<ButtonProps>,
  UDropdownMenu: DefineComponent<DropdownMenuProps>,
  UInput: DefineComponent<InputProps>
) {
  const { t } = useI18n()

  const createSortHeader = (column: Column<T, unknown>, label: string) => {
    if (!UButton || !UDropdownMenu) return null

    const isSorted = column.getIsSorted()

    const items: DropdownMenuProps['items'] = [
      {
        label: 'Asc',
        type: 'checkbox',
        icon: 'i-lucide-arrow-up-narrow-wide',
        checked: isSorted === 'asc',
        onSelect: () => {
          if (isSorted === 'asc') {
            column.clearSorting()
          } else {
            column.toggleSorting(false)
          }
        }
      },
      {
        label: 'Desc',
        icon: 'i-lucide-arrow-down-wide-narrow',
        type: 'checkbox',
        checked: isSorted === 'desc',
        onSelect: () => {
          if (isSorted === 'desc') {
            column.clearSorting()
          } else {
            column.toggleSorting(true)
          }
        }
      }
    ]

    return h(
      UDropdownMenu,
      {
        content: { align: 'start' },
        'aria-label': 'Actions dropdown',
        items
      } as DropdownMenuProps,
      () =>
        h(UButton, {
          color: 'neutral',
          variant: 'ghost',
          label,
          icon: isSorted
            ? isSorted === 'asc'
              ? 'i-lucide-arrow-up-narrow-wide'
              : 'i-lucide-arrow-down-wide-narrow'
            : 'i-lucide-arrow-up-down',
          class: '-mx-2.5 data-[state=open]:bg-elevated',
          'aria-label': `Sort by ${isSorted === 'asc' ? 'descending' : 'ascending'}`
        } as ButtonProps)
    )
  }

  const createFilterHeader = (column: Column<T, unknown>, label: string, options: FilterOption[]) => {
    if (!UButton || !UDropdownMenu) return null

    const currentFilter = (column.getFilterValue() as string[]) || []

    const items: DropdownMenuProps['items'] = [
      ...options.map(option => ({
        label: option.label,
        type: 'checkbox' as const,
        checked: currentFilter.includes(option.value),
        onSelect: () => {
          const newFilter = currentFilter.includes(option.value)
            ? currentFilter.filter(v => v !== option.value)
            : [...currentFilter, option.value]

          column.setFilterValue(newFilter.length > 0 ? newFilter : undefined)
        }
      })),
      {
        label: t('common.table.filters.clear'),
        icon: 'i-lucide-filter-x',
        onSelect: () => column.setFilterValue(undefined)
      }
    ]

    return h(
      UDropdownMenu,
      {
        content: { align: 'start' },
        'aria-label': `${label} filter dropdown`,
        items
      } as DropdownMenuProps,
      () =>
        h(UButton, {
          color: currentFilter.length > 0 ? 'primary' : 'neutral',
          variant: 'ghost',
          label,
          icon: 'i-lucide-filter',
          class: '-mx-2.5 data-[state=open]:bg-elevated',
          'aria-label': `Filter by ${label.toLowerCase()}`
        } as ButtonProps)
    )
  }

  const createInputFilterHeader = <TData>(column: Column<TData, unknown>, placeholder: string) => {
    if (!UInput) {
      return null
    }

    return h(UInput, {
      value: (column.getFilterValue() as string) ?? '',
      placeholder,
      class: 'h-8 w-[150px] lg:w-[250px]',
      onInput: (e: Event) => column.setFilterValue((e.target as HTMLInputElement).value)
    } as InputProps)
  }

  return {
    createSortHeader,
    createFilterHeader,
    createInputFilterHeader
  }
}
