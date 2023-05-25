import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBovJmOSQQdEhpQtPfBOnH_0cet_3R8ElQ',
  authDomain: 'react-native-post-app-360b4.firebaseapp.com',
  databaseURL:
    'https://react-native-post-app-360b4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-post-app-360b4',
  storageBucket: 'react-native-post-app-360b4.appspot.com',
  messagingSenderId: '830821631519',
  appId: '1:830821631519:web:5723d52f8a4c3b33a2372a',
};

// Creates and initializes a @firebase/app#FirebaseApp instance.
const app = initializeApp(firebaseConfig);

// Returns the Firestore instance of the provided app.
export const db = getFirestore(app);

// Gets a FirebaseStorage instance for the given Firebase app.
export const storage = getStorage(app);
export default app;
