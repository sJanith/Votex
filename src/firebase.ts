
import firebase from 'firebase/compat/app'
import {ref, onUnmounted} from 'vue'
import 'firebase/compat/database'


const firebaseConfig = {
    apiKey: "AIzaSyCScPYzlAa_A3CUqPWQck7BNX7Qm4e6rdM",
    authDomain: "vortex-hrms.firebaseapp.com",
    databaseURL: "https://vortex-hrms-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vortex-hrms",
    storageBucket: "vortex-hrms.appspot.com",
    messagingSenderId: "576831057184",
    appId: "1:576831057184:web:57181b38155a0665b3bb45",
    measurementId: "G-WNPCYR6D0F"
  };


 


  firebase.initializeApp(firebaseConfig);
    
  export default firebase.database();