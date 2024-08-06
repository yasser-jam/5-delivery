import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = useCookie('5d_access_token');

  const firebaseConfig = {
    apiKey: 'AIzaSyBwXHl16oTlQM4JETamUkPO6SJwA51uxUM',
    authDomain: 'deliveryapp-16e35.firebaseapp.com',
    projectId: 'deliveryapp-16e35',
    storageBucket: 'deliveryapp-16e35.appspot.com',
    messagingSenderId: '445752029618',
    appId: '1:445752029618:web:c764f00308cbf3e297b4ab',
    measurementId: 'G-JRJS412TKG',
  };

  const login = async (user: {
    email: string;
    password: string;
  }): Promise<any> => {
    const res: any = await api('/auth/login', {
      method: 'POST',
      body: user,
    });

    // set cookie
    accessToken.value = res?.token;

    navigateTo('/');

    // ask permission for sending notification
    const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);

    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get FCM token
        getToken(messaging, {
          vapidKey:
            'BClQZ5zAvTfR3YazGM4JP4AMj1NW_4_hZIYsSrb7L0QCtwJA4UeZatBNY_sYmxG-yXlWCVYybDzAYNmbisxgMmU',
        })
          .then((currentToken) => {
            if (currentToken) {
              // Send the token to server
              api('/auth/saveFcmToken', {
                method: 'POST',
                body: {
                  fcm_token: currentToken
                }
              })

            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
      } else {
        console.log('Unable to get permission to notify.');
      }
    });

    return res;
  };

  return {
    login,
  };
});
