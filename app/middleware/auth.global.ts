export default defineNuxtRouteMiddleware((to) => {
  const token = useAuthToken().getToken()

  if (token && to.path === '/login') {
    return navigateTo('/')
  }

  if (!token && to.path !== '/login') {
    return navigateTo('/login')
  }
})
