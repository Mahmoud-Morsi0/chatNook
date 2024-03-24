import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABQ_eW_OMLvySgW8eO3_1c2QxwFa8SUb0",
  authDomain: "test-for-img-uploading.firebaseapp.com",
  projectId: "test-for-img-uploading",
  storageBucket: "test-for-img-uploading.appspot.com",
  messagingSenderId: "375722451189",
  appId: "1:375722451189:web:6a98b808ded14773df25bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
