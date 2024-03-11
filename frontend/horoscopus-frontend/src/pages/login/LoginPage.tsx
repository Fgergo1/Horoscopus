import LoginForm from "./LoginForm.tsx";
import {LoginUser} from "../../types/types.ts";

function LoginPage (){


 async function loginUser (user : LoginUser) {
        const response = await fetch("api/user/login", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
        })
     if (response.status === 200) {
         console.log("handle")
     } else {
         console.log("handle somehow")
     }
    }

    return (
        <LoginForm onSave={loginUser}/>
    )
}

export default LoginPage