//import { async } from "@firebase/util";
import { collection, getDocs, addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, db, signedInUserEmail, userData } from "../FireBase";
import ProfileFields from "./ProfileFields";
import './UserProfile.css'



var currFirstName ="", currLastname ="", currAge = "", currEmail ="", currHeight = 0, currWeight = 0, currAllergies = "", currChronic = "";
var user = ""
var picURL = ""

const UserProfile = () =>{
    let history = useHistory()
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")
     
     if(auth.currentUser)
     {
         user = auth.currentUser.uid
         //console.log(user)
         //console.log("to check url",auth.currentUser)
         picURL = auth.currentUser.photoURL
     }
     
    //we need to query the firestore now, as soon as the component renders and hence, we'll use useEffect
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
            console.log("inside the map",u)
            currFirstName = u.firstname
            currLastname = u.lastname
            currAge = u.age
            currEmail = u.email
            currHeight = u.height
            currWeight = u.weight
            currAllergies = u.allergies
            currChronic = u.chronic
        }
    } )

    

    

    return(
        <div>
            <button style={{float: "left"}} onClick={() => { history.push('home') }}>Back</button><br /><br /><br /><br />
            <div>
                <img src={picURL} style={{"borderRadius": "50%", "width":"15%", "height":"15%"}}></img><br/>
            </div>
            <label>First Name</label>
            <input placeholder="First Name" value={currFirstName} style={{width:"500px"}} /><br/><br />
            <label>Last Name</label>
            <input placeholder="Last Name" value={currLastname} style={{width:"500px"}} /><br /><br />
            <label>Age</label>
            <input placeholder="Age" type="number" value={currAge} style={{width:"500px"}} /><br /><br />

            <label>Email</label>
            <input placeholder="Email" type="email" value={currEmail} style={{width:"500px"}} /><br /><br />

            <label>Height</label>
            <input placeholder="Height" value={currHeight} style={{width:"500px"}}  /><br /><br />

            <label>Weight</label>
            <input placeholder="Weight" value={currWeight} style={{width:"500px"}} /><br /><br />

            <label>Allergies</label>
            <input placeholder="Allergies" value={currAllergies} style={{width:"500px"}} /><br /><br />

            <label>Chronic Diseases</label>
            <input placeholder="Chronic Diseases" value={currChronic} style={{width:"500px"}} /><br />

            

        </div>
    )
}

export default UserProfile;







// {users.map((user) => 
//     {
//         return <div>
//                     <h2>FirstName: {user.firstname}</h2>
//                     <h2>LastName : {user.lastname}</h2>
//                 </div> 
//     })
// }

// const afterUsersFetched = () =>{
//     var emailArray = []
//     console.log("inside usefffect", users)
//     if(users)
//     {
//         users.map( (user) =>{ emailArray.push(user.email)  } )
//     }
//     console.log(emailArray)
//     console.log("Current user email", signedInUserEmail)

//     var index;

//     if(emailArray.indexOf(signedInUserEmail))
//     {
//         index = emailArray.indexOf(signedInUserEmail) // if not found we get -1
//         console.log("found", index )
//     }else{
//         console.log("Not found")
//     }

//     currFirstName = users[index].firstname
//     currLastname = users[index].lastname
//     currAge = users[index].age
//     currEmail = users[index].email
//     currHeight = users[index].height
//     currWeight = users[index].weight
//     currAllergies = users[index].allergies
//     currChronic = users[index].chronic

// }

//{afterUsersFetched()}