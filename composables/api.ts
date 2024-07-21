export const api = (url: string, options?: any) => {
  const toasterStore = useToasterStore();

  const accessToken = useCookie('5d_access_token');

  const BASE_URL = 'http://localhost:8000/api';

  return $fetch(BASE_URL + url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  }).catch((error) => {

    console.log(error.status);
    switch (error.status) {
      case 401:
        toasterStore.showErrorMsg('Unauthorized!');
        break;
      case 500:
        // accessToken.value = null
        // navigateTo('/login');
        toasterStore.showErrorMsg('Something Went Wrong, Please Try Again');
        break;
      default:
        toasterStore.showErrorMsg(error.message);
        break
    }
  });
};
