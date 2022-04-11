import React, { useRef, useState } from 'react';
import './Diagnose.css'
import 'firebase/analytics';
import { firebaseConfig } from '../FireBase';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { collection, query, where } from 'firebase/compat/firestore';


import Home from './Home';

import { auth } from '../FireBase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useHistory } from 'react-router-dom';

const apiLink = "http://127.0.0.1:5000/";
const aimee = "Zuk57jsYXvSOFoRq79nGAkUJ5w33"
const aimee_photo = "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/9/2/512992_shutterstock_715962319converted_749269.png"

firebase.initializeApp(firebaseConfig)
//const auth = firebase.auth()

const firestore = firebase.firestore();


const Diagnose = () => {
    let history = useHistory()
    const [user] = useAuthState(auth);
    
    return(
        <div className="App1">
            <header>
                <h1>⚛️🔥💬</h1>
                <button onClick={() => { history.push('home') }}>Back</button>
            </header>

            <section>
                {<ChatRoom />}
            </section>
        </div>
    )
}

const getUserId = () => {
  const { uid, photoURL } = auth.currentUser;
  return uid;
}

function ChatRoom() {
    const dummy = useRef();
    
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.where("to","==",getUserId()).orderBy('createdAt');
  
    const [messages,loading,error,snapshot] = useCollectionData(query, { idField: 'id' });

    console.log(error);

    const [formValue, setFormValue] = useState('');

    // Custom-made API Call to ChatBot

    const callAPI = (event) => {
      event.preventDefault();

      const { uid, photoURL } = auth.currentUser;
      const formData = new FormData(document.getElementById("myForm"));
      const userMessage = formData.get("message");

      sendMessage(event,userMessage,uid,photoURL,uid);

      fetch(apiLink,{
        method:"POST",
        body:formData,
    }).then(response => {
      return response.json();
    }).then(result => {
      const answers = result;
      console.log(answers['disease'])


      // Pushing AIMEE'S Response(s) onto firestore database
      sendMessage(event,answers['disease'], aimee, aimee_photo,uid);

      if(answers['disease_descr']) {
        sendMessage(event,answers['disease_descr'], aimee, aimee_photo,uid);
      }

      if(answers['disease_prec']) {
        sendMessage(event,answers['disease_prec'], aimee, aimee_photo,uid);
    }
    })
    }



    const sendMessage = async (e,message,uid,photoURL,to) => {
      e.preventDefault();
  
      await messagesRef.add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        to: to
      })
      
      //sending data to a text file - 'fs' does not work in react, try sending directly to the API
      console.log(formValue)

      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form id="myForm">
  
        <input value={formValue} name="message" onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button onClick={callAPI} type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
  

export default Diagnose