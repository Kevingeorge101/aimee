import {initializeApp} from "firebase/app";
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

import { Redirect } from 'react-router-dom'


var test = {}

const firebaseConfig = {
    apiKey: "AIzaSyCfF4fj6zvNOdv7NEO_-3P6bcKLyAnPTiY",
    authDomain: "aimee-major.firebaseapp.com",
    projectId: "aimee-major",
    storageBucket: "aimee-major.appspot.com",
    messagingSenderId: "872442042766",
    appId: "1:872442042766:web:4a3bff296fcdc0c0fcacdf",
    measurementId: "G-YKHVM5YWXY"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) //get all info of the authenticated user, we can export and use this in other files too
//above 

const provider = new GoogleAuthProvider(); 



export const SignInWithG = () => {

    signInWithPopup(auth, provider)
    .then((result) => {
      
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




