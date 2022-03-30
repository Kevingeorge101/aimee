
import { Redirect, useHistory } from 'react-router-dom';
import { checkUser, logOut, SignInWithG } from '../FireBase.js'
import './Frontpage.css'



const Frontpage = () => {

    
    let history = useHistory()
      
    const redi = () =>{
        history.push('home')
    }

    //<button onClick={SignInWithG} type={"button"} className="login-with-google-btn">Sign-In with Google</button>

    return(
        <div>
            <h2>Hello! Welcome to Aimee!</h2>
            <h3>An ARTIFICIAL MEDICAL INTELLIGENCE AND DIAGNOSTIC SYSTEM</h3>

            <h3>Please Sign-In to continue and figure out what's wrong with you :)</h3>
            <button onClick={() =>{
                SignInWithG();
                redi()
            }} type={"button"} className="login-with-google-btn">Sign-In with Google</button>
            
            <button onClick={redi}>Re</button>
            <button onClick={logOut} >
                Sign-Out
            </button>

            <button onClick={checkUser} >
                Check-User
            </button>

            <h1>{localStorage.getItem("email")}</h1>

        </div>
    )
}

export default Frontpage;