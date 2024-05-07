import {ReserveDate, User} from "../../types/types.ts";
import "./ProfilePage.scss"

interface  ProfilePageProps {
    reservedDates : ReserveDate[] | undefined,
    email : boolean | undefined,
    name : boolean | undefined,
    checkEmail : (email : string) => void,
    checkName : (userName : string) => void
    userDetails : User | null
}
function ProfilePage ({reservedDates ,email, name, checkEmail, checkName, userDetails} : ProfilePageProps) {
    return (
        <>
            <div>
                <p>Reserved dates:</p>
                {reservedDates?.map((date) =>
                    <p key={date.interval}>{date.interval}</p>
                )}
            </div>
            {userDetails  && (<form>
                <input onChange={(e) => checkName(e.target.value!)} type="text" name="user-name"
                       defaultValue={userDetails!.userName}/>
                {name ? <p className="name-check active">Available</p>
                    : <p className="name-check">Already used</p>
                }
                <input onChange={(e) => checkEmail(e.target.value!)} type="email" name="user-email"
                       defaultValue={userDetails!.email}/>
                {email ? <p className="email-check active">Available</p>
                    : <p className="email-check">Already used</p>
                }
                <button type="submit">Update</button>
            </form>)}
        </>

    )
}

export default ProfilePage