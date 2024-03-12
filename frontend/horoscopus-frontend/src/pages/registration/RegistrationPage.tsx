import RegistrationForm from "./RegistrationForm.tsx";
import {RegistrationUser} from "../../types/types.ts";
import {useNavigate} from "react-router-dom";

function RegistrationPage () {
const navigate = useNavigate()
   async function registerUser (user : RegistrationUser) {
      const response = await fetch("api/user/register", {
          method : "POST",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify(user)
      })
       if (response.status === 201) {
           console.log("User successfully created! ")
           navigate("/login")
       } else {
           console.log("This email or username is used!")
       }

    }

    return (
        <RegistrationForm onSave={registerUser}/>
    )
}

export default RegistrationPage