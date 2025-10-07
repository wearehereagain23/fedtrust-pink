import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, doc,  getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyAY2KSo69GzjyjuIVR2qG30b4sKHZ6J3YY",
  authDomain: "fedtrustbank.firebaseapp.com",
  projectId: "fedtrustbank",
  storageBucket: "fedtrustbank.appspot.com",
  messagingSenderId: "474695390824",
  appId: "1:474695390824:web:1f4efbcf9404c4b93bcddd"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  getDoc(doc(db, "users", "os@gmail.com")).then(docSnap => {
    if (docSnap.exists()) {
     

  
    } else {
   
    }
  });

alert('we are here')