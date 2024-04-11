import {User} from "../../types/types.ts";
import React from "react";
import "./LoginForm.css"

interface onSaveProp {
    onSave : (user : User) => void
}


function LoginForm ({onSave} :onSaveProp) {


    function handleSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const user : User = {
            userName : String(data.get("userName")),
            password : String(data.get("password"))
        }
        onSave(user)
    }

    return (
        <div className="wrapper">
            <div className="title">
                Login Form
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input name="userName" type="text" required/>
                        <label>Username</label>
                </div>
                <div className="field">
                    <input name="password" type="password" required/>
                        <label>Password</label>
                </div>
                <div className="content">
                    <div className="checkbox">
                        <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div className="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div className="field">
                    <input type="submit" value="Login"/>
                </div>
                <div className="signup-link">
                    Not a member? <a href="#">Signup now</a>
                </div>
            </form>
        </div>
    )
}

export default LoginForm