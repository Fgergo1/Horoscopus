import RegistrationForm from "./RegistrationForm.tsx";
import {RegistrationUser} from "../../types/types.ts";

function RegistrationPage () {


   async function registerUser (user : RegistrationUser) {
      const response = await  fetch("api/user/register", {
          method : "POST",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify(user)
      })
       if (response.status === 200) {
           console.log("nice")
       } else {
           console.log("need to handle")
       }

    }

    return (
        <RegistrationForm onSave={registerUser}/>
    )
}

export default RegistrationPage