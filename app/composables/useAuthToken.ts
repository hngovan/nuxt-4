export const useAuthToken = () => {
  const tokenCookie = useCookie('access_token', {
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30
  })

  const saveToken = (token: string, remember: boolean = false): void => {
    tokenCookie.value = token

    if (!remember) {
      useCookie('access_token', {
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production'
      }).value = token
    }
  }

  const getToken = () => tokenCookie.value

  const removeToken = (): void => {
    tokenCookie.value = null
  }

  return {
    saveToken,
    getToken,
    removeToken
  }
}
