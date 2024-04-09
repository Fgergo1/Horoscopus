import {ReserveDate} from "../../types/types.ts";
import React from "react";
import DateCard from "../date-reserve/DateCard.tsx";

interface saveDateProp {
    saveDate: (date: ReserveDate) => Promise<void>
    access: boolean
    date : ReserveDate[]
    error : string | null
}

const AdminForm = (props: saveDateProp) => {

    const {saveDate, access, date,error} = props


    function handleSaveDate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const date: ReserveDate = {
            interval: String(data.get("date"))
        }
        saveDate(date)
    }


    return (
        access ? <>
                <div>
                    <p>{"You have access for this page!"}</p>
                    <form onSubmit={handleSaveDate}>
                        <label htmlFor="date"></label>
                        <input type="text" name="date"></input>
                        <button type="submit">Save new date</button>
                    </form>
                    {error ? <p>Something goes wrong"</p> : <DateCard dates={date} />}
                </div>
            </> :
            <>
                <div>
                    <p>{"Only admin users have access for this page!"}</p>
                </div>
            </>
    )
}

export default AdminForm