import RegistrationForm from "./RegistrationForm.tsx";
import {User} from "../../types/types.ts";
import {useNavigate} from "react-router-dom";
import {Dispatch, SetStateAction} from "react";

function RegistrationPage () {
const navigate = useNavigate()
   async function registerUser (user : User, errorState : Dispatch<SetStateAction<string | null>>) {
      const response = await fetch("api/user/register" , {
          method : "POST",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify(user)
      })
       if (response.status === 201) {
           navigate("/login")
       } else {
           errorState("This email or username is used!")
       }

    }

    return (
        <RegistrationForm onSave={registerUser}/>
    )
}

export default RegistrationPage