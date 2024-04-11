import LoginForm from "./LoginForm.tsx";
import {JwtResponse, User} from "../../types/types.ts";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()

    async function loginUser(user: User) {
        const response = await fetch("api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data : JwtResponse = await response.json()
        const authorizationHeader = response.headers.get('Authorization');
        if (response.ok && authorizationHeader !== null) {
            localStorage.setItem("jwt-token", authorizationHeader)
            localStorage.setItem("role", data.roles[0])
            sessionStorage.setItem("user-name", String(user.userName))
            sessionStorage.setItem("user-email", String(user.email))
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