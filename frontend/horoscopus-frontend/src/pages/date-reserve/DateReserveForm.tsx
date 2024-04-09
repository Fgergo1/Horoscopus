import DateReservePage from "./DateReservePage.tsx";
import {useEffect, useState} from "react";
import {ReserveDate} from "../../types/types.ts";

function DateReserveForm() {

    const [freeDates, setFreeDates] = useState<ReserveDate[]>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        getFreeDates()
    }, []);

    async function reserveDateById(id : number | undefined) {
        const response = await fetch("/api/date/reserve", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(id)

        })

        if (response.status === 200) {
            setFreeDates((freeDates) => {
                return freeDates.filter((date) => date.id !== id)
            })
        } else {
            setError("something goes wrong, try it later")
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


    return (
        <DateReservePage dates={freeDates} onReserve={reserveDateById} error={error}/>
    )
}

export default DateReserveForm