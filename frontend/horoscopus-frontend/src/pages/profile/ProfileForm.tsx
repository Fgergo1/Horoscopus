import {useEffect, useState} from "react";
import ProfilePage from "./ProfilePage.tsx";
import {ReserveDate, User} from "../../types/types.ts";

function ProfileForm () {
    const [emailIsAvailable, setEmailIsAvailable] = useState<boolean>()
    const [nameIsAvailable, setNameIsAvailable] = useState<boolean>()
    const [userReservedDates, setUserReservedDates] = useState<ReserveDate[]>()
    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {
        getReservedDatesByUsername()
        getUsernameAndEmail()
    }, []);

    async function getUsernameAndEmail() {
        const token = localStorage.getItem("jwt-token")
        const response = await fetch("/api/user/data", {
            method : "GET",
            headers : {
                "Authorization" : "Bearer " + token,
            }
        })
        const user : User = await response.json()
        if (response.status === 200) {
            setUser(user)
        } else {
            console.log("need to handle!")
        }
    }
    async function getReservedDatesByUsername() {
        const username  = sessionStorage.getItem("user-name")
        const response = await fetch(`/api/date/reserved?name=${username}`)
        const dates = await response.json()
        if (response.status === 200) {
            setUserReservedDates(dates)
        } else {
            console.log("handle it!")
        }
    }
    async function checkNameIsFree (userName : string) {
        const response = await fetch(`/api/user/name?name=${userName}`)

       if (response.status === 200) {
           setNameIsAvailable(true)
       } else {
           setNameIsAvailable(false)
       }
    }

    async function checkEmailIsFree (email : string) {

        const response = await fetch(`/api/user/email?email=${email}`)

        if (response.status === 200) {
            setEmailIsAvailable(true)
        } else {
            setEmailIsAvailable(false)
        }
    }




    return (
        <>
            <ProfilePage reservedDates={userReservedDates} checkEmail={checkEmailIsFree} checkName={checkNameIsFree} name={nameIsAvailable}
                         userDetails={user}
                         email={emailIsAvailable}/>
        </>

    )
}
export default ProfileForm