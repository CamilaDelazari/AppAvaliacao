import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import ReviewScreen from './ReviewScreen';

// Verifique se o Firebase foi configurado corretamente
if (!firebase.apps.length) {
  firebase.initializeApp();
} else {
  firebase.app(); // Se já estiver inicializado
}

// O componente principal do seu aplicativo
const App = () => {
  return <ReviewScreen />;
};

export default App;