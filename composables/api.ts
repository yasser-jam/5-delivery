export const api = (url: string, options?: any) => {
    
    const accessToken = useCookie('5d_access_token')

    const BASE_URL = 'http://localhost:8000/api'
   
    try {
        return $fetch(BASE_URL + url, {
            ...options,
            headers: {
                Authorization: `Bearer ${accessToken.value}`           
            },
        })
    } catch (error: any) {
        console.log(error);

        // switch (error.status) {
        //     case '500'
        //     navigateTo('/login')
        // }
    }
}