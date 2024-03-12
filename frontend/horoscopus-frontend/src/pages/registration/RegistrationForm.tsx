import {RegistrationUser} from "../../types/types.ts";
import React from "react";
import "./RegistrationForm.css"

interface RegisterProp {
onSave : (user : RegistrationUser) => void
}
function RegistrationForm ({onSave} : RegisterProp) {


    function handleSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)


        const user : RegistrationUser = {
            username : String(data.get("username")),
            password : String(data.get("password")),
            rePassword : String(data.get("re-pass")),
            email : String(data.get("email"))
        }

        onSave(user)
    }


    return (
        <div className="wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input name="username" type="text" placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                    <input name="email" type="text" placeholder="Enter your email" required/>
                </div>
                <div className="input-box">
                    <input name="password" type="password" placeholder="Create password" required/>
                </div>
                <div className="input-box">
                    <input name="re-pass" type="password" placeholder="Confirm password" required/>
                </div>
                <div className="policy">
                    <input type="checkbox"/>
                        <h3>I accept all terms & condition</h3>
                </div>
                <div className="input-box button">
                    <input type="Submit" value="Register Now"/>
                </div>
                <div className="text">
                    <h3>Already have an account? <a href="/login">Login now</a></h3>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm