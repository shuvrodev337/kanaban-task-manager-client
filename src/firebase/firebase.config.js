// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDj6lahprJKjusUbbIeZTC124MvPl0OBo",
  authDomain: "kanban-task-manager-e373c.firebaseapp.com",
  projectId: "kanban-task-manager-e373c",
  storageBucket: "kanban-task-manager-e373c.appspot.com",
  messagingSenderId: "1011678139258",
  appId: "1:1011678139258:web:ee00fdcad170fec4c5bcc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app