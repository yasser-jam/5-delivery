// // static/firebase-messaging-sw.js
// importScripts(
//   'https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js'
// );
// importScripts(
//   'https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js'
// );
// console.log('regisetr');
// // Initialize the Firebase app in the service worker by passing in the messagingSenderId.
// firebase.initializeApp({
//   apiKey: 'AIzaSyBwXHl16oTlQM4JETamUkPO6SJwA51uxUM',
//   authDomain: 'deliveryapp-16e35.firebaseapp.com',
//   projectId: 'deliveryapp-16e35',
//   storageBucket: 'deliveryapp-16e35.appspot.com',
//   messagingSenderId: '445752029618',
//   appId: '1:445752029618:web:c764f00308cbf3e297b4ab',
//   measurementId: 'G-JRJS412TKG',
// });

// self.registration.showNotification('test', {});

// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage((payload) => {
//   console.log('Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);

// firebase.initializeApp({

//     apiKey: "AIzaSyDCU5MWXvC9HSpGjNgzTL6gUtZeMqFGpRI",

//     authDomain: "nazik-72341.firebaseapp.com",

//     projectId: "nazik-72341",

//     storageBucket: "nazik-72341.appspot.com",

//     messagingSenderId: "1029355112654",

//     appId: "1:1029355112654:web:62e9151f965d30cf40289f",

//     measurementId: "G-3H9S3FB9TH"

// });

// firebase.initializeApp(  {
//     apiKey: "AIzaSyBwXHl16oTlQM4JETamUkPO6SJwA51uxUM",
//     authDomain: "deliveryapp-16e35.firebaseapp.com",
//     projectId: "deliveryapp-16e35",
//     storageBucket: "deliveryapp-16e35.appspot.com",
//     messagingSenderId: "445752029618",
//     appId: "1:445752029618:web:c764f00308cbf3e297b4ab",
//     measurementId: "G-JRJS412TKG"
//   });

firebase.initializeApp({
  apiKey: 'AIzaSyBwXHl16oTlQM4JETamUkPO6SJwA51uxUM',
  authDomain: 'deliveryapp-16e35.firebaseapp.com',
  projectId: 'deliveryapp-16e35',
  storageBucket: 'deliveryapp-16e35.appspot.com',
  messagingSenderId: '445752029618',
  appId: '1:445752029618:web:c764f00308cbf3e297b4ab',
  measurementId: 'G-JRJS412TKG',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;

  const notificationOptions = {
    body: payload.notification.body,
    // icon: window.location.origin + '/assets/images/NAZIK_SVG.svg',
  };


  self.registration.showNotification(notificationTitle, notificationOptions);
});
