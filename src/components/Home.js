import { useHistory } from "react-router-dom";
import { auth } from "../FireBase";
import { useState } from "react";
import ButtonAppBar from './Appbar';
import Button from '@mui/material/Button';
import './Home.css';

const Home = () => {

    let history = useHistory()
    

    return(
        <div>
            
            <ButtonAppBar />

            <div>
     
            <img className="Diag" src={process.env.PUBLIC_URL+"/assets/diagnosis.png"} />
            <img className="profile" src={process.env.PUBLIC_URL+"/assets/profile.png"} /> 
            <button className="Diagnose" 
                onClick={()=>{ history.push('diagnose') }}>Diagnose Now</button>
            <button className="prof" 
                onClick={()=>{ history.push('UserProfile') }}>User Profile</button>

            </div>
        </div>
    )
}

export default Home;