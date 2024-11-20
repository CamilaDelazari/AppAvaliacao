// firebase.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'sua-api-key',
  authDomain: 'seu-auth-domain',
  projectId: 'seu-project-id',
  storageBucket: 'seu-storage-bucket',
  messagingSenderId: 'seu-sender-id',
  appId: 'seu-app-id',
};

// Verifique se o Firebase foi configurado corretamente
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Se já estiver inicializado
}

export default firebase;
