import DateReservePage from "./DateReservePage.tsx";
import {useEffect, useState} from "react";
import {ReserveDate} from "../../types/types.ts";

function DateReserveForm () {

    const [freeDates,setFreeDates] = useState<Array<ReserveDate>>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        getFreeDates()
    }, []);


    async function getFreeDates () {
        const response = await fetch("/api/dates", {
            method : "GET",
            headers : {
                "content-type" : "application/json"
            },
        })
       const data = await response.json()

       if (response.status === 200 ) {
           setFreeDates(data.dates)
       } else if (response.status === 500) {
           setError("Something goes wrong! Please try it later!")
       }
    }

    return (
        <DateReservePage dates={freeDates} error={error}/>
    )
}

export default DateReserveForm