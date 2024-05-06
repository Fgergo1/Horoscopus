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
        console.log(data.get("password"))
        const user : User = {
            userName : String(data.get("userName")),
            password : String(data.get("password"))
        }
        onSave(user)
    }

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <h2 className="title">
                    Login Form
                </h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="input-label">Username</label>
                        <input className="login-input" name="userName" type="text" required/>

                    </div>
                    <div className="field">
                        <label className="input-label">Password</label>
                        <input className="login-input" name="password" type="password" required/>
                    </div>
                    <div className="pass-link-content">

                        <div className="pass-link">
                            <a className="link-text" href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div className="button-field">
                        <input className="login-button" type="submit" value="Login"/>
                    </div>
                    <div className="signup-link">
                        Not a member? <a className="link-text" href="#">Signup now</a>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginForm