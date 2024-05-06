import {User} from "../../types/types.ts";
import React, {Dispatch, SetStateAction, useState} from "react";
import "./RegistrationForm.css"

interface RegisterProp {
onSave : (user : User, setError : Dispatch<SetStateAction<string | null>>) => Promise<void>
}
function RegistrationForm ({onSave} : RegisterProp) {
    const [error, setError] = useState<string | null>(null)

    function validatePassword(password : string) {
        const minLength = 8;
        if (password.length < minLength) {
             setError("Password must be at least " + minLength + " characters long.");
        }
        const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

        if (pattern.test(password)) {
            return true
        } else {
            setError("Password must contain at least one digit, lowercase letter," +
                " uppercase letter, special character, and at least have 8 character!")
        }

    }

    function validateUsername (username : String ) {
        if (username.length > 4) {
            return true
        } else {
            setError("Username length must be 4 long!")
        }
    }
    function handleSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)


        const user : User = {
            userName : String(data.get("username")),
            password : String(data.get("password")),
            rePassword : String(data.get("re-pass")),
            email : String(data.get("email"))
        }

        if (validatePassword((user.password!.toString())) && validateUsername(user.userName.toString())) {
            onSave(user, setError)
        }
    }



    return (
        <div className="registration-page">
            <div className="registration-wrapper" data-testid="wrapper">
                <h2 className="registration-header">Registration</h2>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label className="input-label">Username</label>
                        <input name="username" type="text"  required/>
                    </div>
                    <div className="input-box">
                        <label className="input-label">Email</label>
                        <input name="email" type="email"  required/>
                    </div>
                    <div className="input-box">
                        <label className="input-label">Password</label>
                        <input name="password" type="password"  required/>
                    </div>
                    <div className="input-box">
                        <label className="input-label">Confirm password</label>
                        <input name="re-pass" type="password"  required/>
                    </div>
                    {error && <p className="error-message">{error}</p>}

                    <div className="registration-button-container" data-testid="submit-div">
                        <button className="registration-button" type="submit" value="Register Now">Register</button>
                    </div>
                    <div className="text" data-testid="text">
                        <h3 className="account-header">Already have an account?<a className="registration-link" href="/login">Login now</a></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm