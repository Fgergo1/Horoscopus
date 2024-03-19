import {RegistrationUser} from "../../types/types.ts";
import React, {Dispatch, SetStateAction, useState} from "react";
import "./RegistrationForm.css"

interface RegisterProp {
onSave : (user : RegistrationUser, setError : Dispatch<SetStateAction<string | null>>) => Promise<void>
}
function RegistrationForm ({onSave} : RegisterProp) {
    const [error, setError] = useState<string | null>(null)


    function handleSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)


        const user : RegistrationUser = {
            username : String(data.get("username")),
            password : String(data.get("password")),
            rePassword : String(data.get("re-pass")),
            email : String(data.get("email"))
        }

        onSave(user, setError)
    }


    return (
        <div className="wrapper" data-testid="wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input name="username" type="text" placeholder="Enter your name"  required/>
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
                {error && <p>{error}</p>}
                <div className="policy" data-testid="policy">
                    <input type="checkbox"/>
                        <h3>I accept all terms & condition</h3>
                </div>
                <div className="input-box button" data-testid="submit-div">
                    <input type="Submit" value="Register Now"/>
                </div>
                <div className="text" data-testid="text">
                    <h3>Already have an account?<a href="/login">Login now</a></h3>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm