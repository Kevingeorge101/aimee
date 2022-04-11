import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


//Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA_e2kmZdiG_8ncLUswb8ict39YpJcqtF8",
  authDomain: "aimee2.firebaseapp.com",
  projectId: "aimee2",
  storageBucket: "aimee2.appspot.com",
  messagingSenderId: "144642265498",
  appId: "1:144642265498:web:0d771769170091392fea23",
  measurementId: "G-MKXNW3SE0Y"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) // get all info of the authenticated user, we can export and use this in other files too


//Databse connectivity
export const db = getFirestore(app) // db var getting populated with all of our app's firestore info

export var userData={};

export var signedInUserEmail = ""

//Sign-In Code
const provider = new GoogleAuthProvider(); 

export const SignInWithG = () => {

    signInWithPopup(auth, provider)
    .then((result) => {
      userData = result
      signedInUserEmail = result.user.email
      console.log("Email is", signedInUserEmail)
      console.log("FP userData", userData)
      console.log(result) //this result object contains the user details after sign in 
      //check the object in the console
      //perhaps use it to navigate to user profile after login

      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL

      //We can store these in the local storage in browser to remember logged in user

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic);

    })
    .catch((error) => {
      console.log(error)
    })

    

}

export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
    localStorage.clear()
    console.log("testing", test)

  }).catch((error) => {
    console.log(error.message)
    
  })
}

export const checkUser = () =>{
  auth.onAuthStateChanged(function(user){
    if(user){
      console.log("User is signed in")
    }else{
      console.log("User is not logged in")
    }
  })
}




