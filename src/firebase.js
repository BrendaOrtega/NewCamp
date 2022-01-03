import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBZDyszETqtSG9dSiiFAYTEkXzrYPqkOMk",
    authDomain: "fixter-67253.firebaseapp.com",
    databaseURL: "https://fixter-67253.firebaseio.com",
    projectId: "fixter-67253",
    storageBucket: "fixter-67253.appspot.com",
    messagingSenderId: "590084716663",
    appId: "1:590084716663:web:3c3c704a3f37078c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = app.storage();

export default app