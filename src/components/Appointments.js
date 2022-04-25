import { useHistory } from "react-router-dom"
import { collection, getDocs, addDoc } from "firebase/firestore";
import App from "../App"
import React, { useState, useEffect } from "react";
import {auth, db} from "../FireBase";

var symptom1 ="", symptom2="", intensity1="", intensity2="", addInfo="", days=""
var user = ""
var picURL = ""

const Appointments = () => {
    let history = useHistory()


    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "appointments")

    if(auth.currentUser)
     {
         user = auth.currentUser.uid
         //console.log("appoitnemnts", user)
         //console.log("to check url for appointments",auth.currentUser)
         picURL = auth.currentUser.photoURL
     }



     useEffect(() => {

        const getUsers = async () => {
            //creating a reference to the collection we want
        
        const data = await getDocs(usersCollectionRef)//returns all document from a collection
        if(data){
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            //console.log("inside try")
            //console.log("users console", users)
        }    
        }
        getUsers()
    }, []);

    users.map( (u) =>{
        if(u.userid == user)
        {
            //console.log("inside the map",u)
            symptom1 = u.symptom1 
            symptom2= u.symptom2 
            intensity1= u.intensity1 
            intensity2= u.intensity2 
            addInfo= u.addinfo
            days= u.days
            //console.log(symptom1)
        }
    } )


    return(
        <div>
            
            <button style={{float: "left"}} onClick={() => { history.push('home') }}>Back</button>

            <div>
                <img src={picURL} style={{"borderRadius": "50%", "width":"15%", "height":"15%"}}></img><br/>
            </div>
            <label>Symptom 1</label>
            <input placeholder="symptom1" value={symptom1} style={{width:"500px", "display":"inline-block"}} /><br/><br />
            
            <label>Intensity</label>
            <input placeholder="intensity"  value={intensity1} style={{width:"500px",  "display":"inline-block"}} /><br /><br />

            <label>Symptom 2</label>
            <input placeholder="symptom2" value={symptom2} style={{width:"500px", "display":"inline-block"}} /><br /><br />
            

            <label>Intensity 2</label>
            <input placeholder="intensity2" type="email" value={intensity2} style={{width:"500px", "display":"inline-block"}} /><br /><br />

            <label>Days</label>
            <input placeholder="Days" value={days} style={{width:"500px", "display":"inline-block"}}  /><br /><br />

            <label>Additional Info</label>
            <input placeholder="addinfo" value={addInfo} style={{width:"500px", "display":"inline-block"}} /><br /><br />

            

        </div>
    )
}

export default Appointments