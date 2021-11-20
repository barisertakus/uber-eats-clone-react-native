// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCQIL4fJWN31ABM-9yanQOoz1JrwpBv05M",
  authDomain: "uber-eats-clone-rn-62f44.firebaseapp.com",
  projectId: "uber-eats-clone-rn-62f44",
  storageBucket: "uber-eats-clone-rn-62f44.appspot.com",
  messagingSenderId: "552918760393",
  appId: "1:552918760393:web:7544ffdd4a81f9e5154618"
};

  let app;

  if(getApps().length === 0){
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }

  const db = getFirestore(app);
  const auth = getAuth(app);

export {db, auth}