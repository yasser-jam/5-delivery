export default defineNuxtRouteMiddleware((from, to) => {
    const accessToken = useCookie('5d_access_token')

    if (to.path == '/login') return true

    if (accessToken.value) return true

    else return navigateTo('/login')
})