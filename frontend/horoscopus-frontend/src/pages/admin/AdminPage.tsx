import AdminForm from "./AdminForm.tsx";
import {ReserveDate} from "../../types/types.ts";
import {useEffect, useState} from "react";
function AdminPage () {
    const [available, setAvailable] = useState(false)

    useEffect(() => {
        checkAccess()
    }, []);

    function checkAccess() {
        const role = localStorage.getItem("role")

        if (role === "ROLE_ADMIN") {
            setAvailable(true)
        }
    }


    async function addNewFreeDate (date : ReserveDate) : Promise<void> {
        const token = localStorage.getItem("jwt-token")

        const response = await fetch("api/date/add", {
            method : "POST",
            headers : {
                "Authorization" : "Bearer " + token,
                "content-type" : "application/json"
            },
            body : JSON.stringify(date)
        })

      if (response.status === 400) {
          console.log("need to handle this error")
      }
    }


    return (
        <AdminForm saveDate={addNewFreeDate} access={available} />
    )
}

export default AdminPage