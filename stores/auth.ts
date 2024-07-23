export const useAuthStore = defineStore('auth', () => {
  
  const accessToken = useCookie('5d_access_token')
  
  const login = async (user: { email: string, password: string }): Promise<any> => {
    const res : any = await api('/auth/login', {
      method: 'POST',
      body: user
    });

    // set cookie
    accessToken.value = res?.token

    navigateTo('/')

    return res;
  };

  return {
    login,
  };
});
