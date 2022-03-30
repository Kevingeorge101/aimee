import Navbar from "./Navbar";
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";
import { auth } from "../FireBase";
import { useState } from "react";


const Home = () => {

    let history = useHistory()
    

    return(
        <div>
            
            <div className="sticky">
                <Navbar />
            </div>
            <div>
                <h1>This is user's home page</h1>
                <h3>Hi, Welcome </h3>

                <Button variant="contained" color="primary" sx={{m : 4}} onClick={ () => history.push('appointments')} >
                    Appointments
                </Button>
                
                <Button variant="contained" color="primary" sx={{m : 4}} 
                onClick={()=>{ history.push('diagnose') }}>
                    Diagnose  
                </Button>
            </div>
        </div>
    )
}

export default Home;