import {User} from "../../types/types.ts";
import "./ProfilePage.css"

interface  ProfilePageProps {
    email : boolean | undefined,
    name : boolean | undefined,
    checkEmail : (email : string) => void,
    checkName : (userName : string) => void
}
function ProfilePage ({email, name, checkEmail, checkName} : ProfilePageProps) {

    const user : User = {
        userName : String(sessionStorage.getItem("user-name")),
        email : String(sessionStorage.getItem("user-email"))
    }

    return (
        <form>
            <input onChange={(e) => checkName(e.target.value!)} type="text" name="user-name" defaultValue={user.userName}/>
            {name ? <p className="name-check active">Available</p>
                : <p className="name-check">Already used</p>
            }
            <input onChange={(e) => checkEmail(e.target.value!)} type="email" name="user-email" defaultValue={user.email}/>
            {email ? <p className="email-check active">Available</p>
                : <p className="email-check">Already used</p>
            }
            <button type="submit">Update</button>
        </form>
    )
}

export default ProfilePage