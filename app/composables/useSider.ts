export const useSider = () => {
  const collapsed = useState('sider-collapsed', () => false)

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  const setCollapsed = (value: boolean) => {
    collapsed.value = value
  }

  return { collapsed, toggleCollapsed, setCollapsed }
}
