import {useState} from "react";
import ProfilePage from "./ProfilePage.tsx";

function ProfileForm () {
    const [emailIsAvailable, setEmailIsAvailable] = useState<boolean>()
    const [nameIsAvailable, setNameIsAvailable] = useState<boolean>()


    async function checkNameIsFree (userName : string) {

        const response = await fetch(`/api/user/check?name=${userName}`)

       if (response.status === 200) {
           setNameIsAvailable(true)
       } else {
           setNameIsAvailable(false)
       }
    }

    async function checkEmailIsFree (email : string) {

        const response = await fetch(`/api/user/check?name=${email}`)

        if (response.status === 200) {
            setEmailIsAvailable(true)
        } else {
            setEmailIsAvailable(false)
        }
    }




    return (
        <>
            <ProfilePage checkEmail={checkEmailIsFree} checkName={checkNameIsFree} name={nameIsAvailable} email={emailIsAvailable}/>
        </>

    )
}
export default ProfileForm