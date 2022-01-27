
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBMkndWlHa0bpnvfO0db8AYSwLGK1gCFZw",
  authDomain: "lupetto-uthurralt.firebaseapp.com",
  projectId: "lupetto-uthurralt",
  storageBucket: "lupetto-uthurralt.appspot.com",
  messagingSenderId: "250869466559",
  appId: "1:250869466559:web:3f28e5ff1da0487ee24d0a"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
   return app
}

