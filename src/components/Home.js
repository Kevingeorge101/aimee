import Navbar from "./Navbar";
import { AppBar } from "./Appbar"
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
     
            <img className="Diag" src="https://cdn-icons.flaticon.com/png/512/4320/premium/4320491.png?token=exp=1651149089~hmac=a1b4cbf660b244c7db87009d7613e77e" />
            <img className="profile" src="https://cdn-icons-png.flaticon.com/512/2972/2972063.png" />
            <button className="Diagnose" 
                onClick={()=>{ history.push('diagnose') }}>Diagnose Now</button>
            <button className="prof" 
                onClick={()=>{ history.push('UserProfile') }}>User Profile</button>

            </div>
        </div>
    )
}

export default Home;