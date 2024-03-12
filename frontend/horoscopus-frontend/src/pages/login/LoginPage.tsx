import LoginForm from "./LoginForm.tsx";
import {LoginUser} from "../../types/types.ts";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()

    async function loginUser(user: LoginUser) {
        const response = await fetch("api/user/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const authorizationHeader = response.headers.get('Authorization');
        if (response.ok && authorizationHeader !== null) {
            localStorage.setItem("jwt-token", authorizationHeader)
            navigate("/home")
        } else {
            console.log("Unauthorized!")
        }
    }

    return (
        <LoginForm onSave={loginUser}/>
    )
}

export default LoginPage