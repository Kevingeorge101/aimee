//import { async } from "@firebase/util";
import { collection, getDocs, addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db, signedInUserEmail, userData } from "../FireBase";
import ProfileFields from "./ProfileFields";
import './UserProfile.css'


var currFirstName ="", currLastname ="", currAge = "", currEmail ="", currHeight = 0, currWeight = 0, currAllergies = "", currChronic = "";

const UserProfile = () =>{

     const [users, setUsers] = useState([])
     const usersCollectionRef = collection(db, "userprofile")

     
    //we need to query the firestore now, as soon as the component renders and hence, we'll use useEffect
    useEffect(() => {

        const getUsers = async () => {
            //creating a reference to the collection we want
            try{
            const data = await getDocs(usersCollectionRef)//returns all document from a collection
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            setTimeout(5000)
            console.log("inside try")
            }
            finally{
                console.log("inside finally")
                console.log(users.firstname)

            }
        }

        getUsers()

        //setTimeout(()=>{console.log("SetTime out ->", users.firstname)}, 8000)
    }, []);

    

    //State for the user variables
    const [newName, setNewName] = useState("")
    const [newLast, setLastName] = useState("")
    const [newAge, setNewAge] = useState(0)

    const createUser = async () => {//we gotta reference our collection from db
        await addDoc(usersCollectionRef, {firstname: newName, lastname: newLast, age: newAge } ) 
    }

    

    

    return(
        <div>
            <h2>This is user's profile</h2>
            
            {users.map((user) => 
            {
                return <div>
                            <h2>FirstName: {user.firstname}</h2>
                            <h2>LastName : {user.lastname}</h2>
                        </div> 
            })
            }
                    

            <label>First Name</label>
            <input placeholder="First Name" value={currFirstName} onChange={(event) => { setNewName(event.target.value) }} /><br/>
            <label>Last Name</label>
            <input placeholder="Last Name" value={currLastname} onChange={(event) => { setLastName(event.target.value) }} /><br />
            <label>Age</label>
            <input placeholder="Age" type="number" value={currAge} onChange={(event) => { setNewAge(event.target.value) }} /><br />

            <label>Email</label>
            <input placeholder="Email" type="email" value={currEmail} /><br />

            <label>Height</label>
            <input placeholder="Height" value={currHeight} /><br />

            <label>Weight</label>
            <input placeholder="Weight" value={currWeight} /><br />

            <label>Allergies</label>
            <input placeholder="Allergies" value={currAllergies} /><br />

            <label>Chronic Diseases</label>
            <input placeholder="Chronic Diseases" value={currChronic} /><br />

            <button onClick={createUser}>Create</button>
            
            
            

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