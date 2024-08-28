export const api = (url: string, options?: any) => {
  const toasterStore = useToasterStore();

  const accessToken = useCookie('5d_access_token');

  // const BASE_URL = 'http://localhost:8000/api';
  const BASE_URL = 'https://5delivery.store/DeliveryApp/public/api'

  return $fetch(BASE_URL + url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  }).catch((error) => {

    switch (error.status) {
      case 404:
        // toasterStore.showErrorMsg('Not Found!');
        break;
      case 401:
        toasterStore.showErrorMsg('Unauthorized!');
        accessToken.value = null
        // navigateTo('/login');
        break;
      case 500:
        toasterStore.showErrorMsg('Something Went Wrong, Please Try Again');
        break;
      default:
        toasterStore.showErrorMsg(error.message);
        break
    }

    console.log(error);
    throw error
  });
};
