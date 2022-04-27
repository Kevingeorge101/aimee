import Navbar from "./Navbar";
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
            
            <div className="sticky">
            <ButtonAppBar className="Navz" />
            </div>
            <div>
     
            <img className="Diag" src='./assets/diagnosis.png' />
            <img className="profile" src='./assets/profile.png' />
            <button className="Diagnose" 
                onClick={()=>{ history.push('diagnose') }}>Diagnose Now</button>
            <button className="prof" 
                onClick={()=>{ history.push('UserProfile') }}>User Profile</button>

            </div>
        </div>
    )
}

export default Home;