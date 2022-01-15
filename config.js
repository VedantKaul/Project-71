import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDfj5Q0k8w4gxc28Ir_d0GA6t_49dus1XM",
    authDomain: "e-ride-dbc44.firebaseapp.com",
    projectId: "e-ride-dbc44",
    storageBucket: "e-ride-dbc44.appspot.com",
    messagingSenderId: "325896023308",
    appId: "1:325896023308:web:23ab7bff0c2861f1166d29"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


