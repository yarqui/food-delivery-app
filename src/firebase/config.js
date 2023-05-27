import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeEXBFT-ITQSOlxJesAKjFe_8A8xtyioY',
  authDomain: 'fetchfood-delivery-app.firebaseapp.com',
  projectId: 'fetchfood-delivery-app',
  storageBucket: 'fetchfood-delivery-app.appspot.com',
  messagingSenderId: '750067332849',
  appId: '1:750067332849:web:6c444fe7d5aea869815b50',
};

// Creates and initializes a @firebase/app#FirebaseApp instance.
const app = initializeApp(firebaseConfig);

// Returns the Firestore instance of the provided app.
export const db = getFirestore(app);

// Gets a FirebaseStorage instance for the given Firebase app.
export const storage = getStorage(app);
export default app;
