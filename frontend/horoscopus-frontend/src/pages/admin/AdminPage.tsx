import AdminForm from "./AdminForm.tsx";
import {ReserveDate} from "../../types/types.ts";
import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/Navbar.tsx";

function AdminPage() {
    const [available, setAvailable] = useState(false)
    const [freeDates, setFreeDates] = useState<Array<ReserveDate>>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        checkAccess()
        getFreeDates()
    }, []);

    function checkAccess() {
        const role = localStorage.getItem("role")

        if (role === "ROLE_ADMIN") {
            setAvailable(true)
        }
    }

    async function getFreeDates() {
        const response = await fetch("/api/date/free", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
        })
        const data = await response.json()

        if (response.status === 200) {
            setFreeDates(data)
        } else if (response.status === 500) {
            setError("Something goes wrong! Please try it later!")
        }
    }


    async function addNewFreeDate(date: ReserveDate): Promise<void> {
        const token = localStorage.getItem("jwt-token")

        const response = await fetch("api/date/add", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
                "content-type": "application/json"
            },
            body: JSON.stringify(date)
        })

        if (response.status === 400) {
            console.log("need to handle this error")
        }
        getFreeDates()
    }

    async function deleteDate(id : number) {
        const response = await fetch(`/api/date/delete?id=${id}`, {
            method : "DELETE"
        })
        if(response.status === 200) {
            setFreeDates(freeDates.filter(date => date.id !== id))
            console.log("deleted successfully")
        } else {
            console.log("handle it!")
        }
    }


    return (
        <>
            <Navbar/>
            <AdminForm deleteDate={deleteDate} saveDate={addNewFreeDate} date={freeDates} access={available} error={error}/>
        </>
    )
}

export default AdminPage