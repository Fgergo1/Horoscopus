import {useEffect, useState} from "react";

function AdminPage () {
    const [available, setAvailable] = useState(false)


    useEffect(() => {
        checkAccess()
    }, []);

    function checkAccess () {
     const role = localStorage.getItem("role")
        console.log(role)

        if (role === "ROLE_ADMIN") {
            setAvailable(true)
        }
    }


    return (
        available ? <>
            <div>
                <p>{"You have access for this page!"}</p>
            </div>
        </> :
            <>
                <div>
                    <p>{"Only admin users have access for this page!"}</p>
                </div>
            </>
    )
}

export default AdminPage