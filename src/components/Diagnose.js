import React, { useRef, useState } from 'react';
import './Diagnose.css'
import 'firebase/firestore';
import 'firebase/analytics';
import { firebaseConfig } from '../FireBase';

import Home from './Home';

import { auth } from '../FireBase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from 'firebase/compat/app';
import { useHistory } from 'react-router-dom';
firebase.initializeApp(firebaseConfig)

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



function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
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