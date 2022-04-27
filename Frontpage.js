
import { Redirect, useHistory } from 'react-router-dom';
import { checkUser, logOut, SignInWithG } from '../FireBase.js'
import './Frontpage.css'
import Container from '@mui/material/Container';


const Frontpage = () => {

    
    let history = useHistory()
      
    const redi = () =>{
        history.push('home')
    }

    //<button onClick={SignInWithG} type={"button"} className="login-with-google-btn">Sign-In with Google</button>

    return(
        <div>
           
           <img className="logo" src={"./Logo.png"} />
            <h1>AIMEE</h1>
            <h2>Arificially Intelligent Medical Expert Entity</h2>
            <h3>Answers to your medical queries at your fingertips!</h3>
            
            <button onClick={() =>{
                SignInWithG();
                redi()
            }} type={"button"} className="login-with-google-btn">Sign-In with Google</button>
            
            <button className = "signout" onClick={logOut} >
                Sign-Out
            </button>
            
            
        </div>
    )
}

export default Frontpage;