export const api = (url: string, options?: any) => {
    
    const accessToken = useCookie('5d_access_token')

    const BASE_URL = 'http://localhost:8000/api'
   
    try {
        return $fetch(BASE_URL + url, {
            ...options,
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjEyMDE0ODgsImV4cCI6MTcyMTIwNTA4OCwibmJmIjoxNzIxMjAxNDg4LCJqdGkiOiIzQmd2WHZZY0FZNWxyZ3VPIiwic3ViIjoiNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.jZDK3XR1E9Jv8NMiU_fih8YJ2M7x1B0VwspSLKt34bo'           
            },
        })
    } catch (error) {
        console.log(error);
    }
}