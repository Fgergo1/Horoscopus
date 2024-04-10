import {ReserveDate} from "../../types/types.ts";
import DateCard from "./DateCard.tsx";
import {useState} from "react";
interface ReservePageProps {
    dates : ReserveDate[],
    error : string | null,
    onReserve : (id : number | undefined) => void
}

const  DateReservePage  = (props : ReservePageProps) => {
    const [activeId, setActiveId] = useState<number>()

    const {dates, error, onReserve} = props;

    function handleReserveDate(id : number | undefined) {
        onReserve(id)
    }


    return !error ? (
       <>
           <DateCard dates={dates} setId={setActiveId}/>
           {dates && <button onClick={() => handleReserveDate(activeId)}>Reserve date</button>}

       </>
    ) : (
        <p>{error}</p>
    )
}
export default DateReservePage