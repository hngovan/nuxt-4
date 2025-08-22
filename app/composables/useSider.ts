export const useSider = () => {
  const collapsed = useState('sider-collapsed', () => false)

  function toggleCollapsed() {
    collapsed.value = !collapsed.value
  }

  function setCollapsed(value: boolean) {
    collapsed.value = value
  }

  return { collapsed, toggleCollapsed, setCollapsed }
}
