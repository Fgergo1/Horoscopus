import {ReserveDate} from "../../types/types.ts";
import React, {useState} from "react";
import DateCard from "../date-reserve/DateCard.tsx";

interface saveDateProp {
    saveDate: (date: ReserveDate) => Promise<void>
    access: boolean
    date : ReserveDate[]
    error : string | null
    deleteDate : (id : number) => void

}

const AdminForm = (props: saveDateProp) => {
    const [activeId, setActiveId] = useState<number>()


    const {saveDate, access, date,error, deleteDate} = props


    function handleSaveDate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const date: ReserveDate = {
            interval: String(data.get("date")),
            reserve : false
        }
        saveDate(date)
    }

    function handleDeleteDate(event : React.FormEvent<HTMLFormElement>) {
        event!.preventDefault()
        deleteDate(activeId!)
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
                    <form onSubmit={handleDeleteDate}>
                        {error ? <p>Something goes wrong"</p> : <DateCard  dates={date} setId={setActiveId}/>}
                        <button type="submit">Delete date</button>
                    </form>

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