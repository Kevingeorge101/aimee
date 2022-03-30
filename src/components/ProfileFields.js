import { signedInUserEmail } from "../FireBase";


var currFirstName ="", currLastname ="", currAge = "", currEmail ="", currHeight = 0, currWeight = 0, currAllergies = "", currChronic = "";


const ProfileFields = (users) =>{



    var emailArray = []
    console.log("inside usefffect", users)
    if(users)
    {
        users.map( (user) =>{ emailArray.push(user.email)  } )
    }
    console.log(emailArray)
    console.log("Current user email", signedInUserEmail)

    var index;

    if(emailArray.indexOf(signedInUserEmail))
    {
        index = emailArray.indexOf(signedInUserEmail) // if not found we get -1
        console.log("found", index )
    }else{
        console.log("Not found")
    }

    currFirstName = users[index].firstname
    currLastname = users[index].lastname
    currAge = users[index].age
    currEmail = users[index].email
    currHeight = users[index].height
    currWeight = users[index].weight
    currAllergies = users[index].allergies
    currChronic = users[index].chronic       
    
    return(
        <div>
            <label>First Name</label>
            <input placeholder="First Name" value={currFirstName}  /><br/>
            <label>Last Name</label>
            <input placeholder="Last Name" value={currLastname}  /><br />
            <label>Age</label>
            <input placeholder="Age" type="number" value={currAge} /><br />

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

            <button >Create</button>
        </div>
    )
    
}

export default ProfileFields;