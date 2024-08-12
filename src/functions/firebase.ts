import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAZjf55suU9IzpFvfetjB7TO8Hs0dwZ1WU",
  authDomain: "all-in-one-test-78946.firebaseapp.com",
  projectId: "all-in-one-test-78946",
  storageBucket: "all-in-one-test-78946.appspot.com",
  messagingSenderId: "1010738405326",
  appId: "1:1010738405326:web:263096b169112761ea159f",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)