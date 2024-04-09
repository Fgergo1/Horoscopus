import {ReserveDate} from "../../types/types.ts";
import DateCard from "./DateCard.tsx";
interface ReservePageProps {
    dates : ReserveDate[],
    error : string | null
}

const  DateReservePage  = (props : ReservePageProps) => {

    const {dates, error} = props;

    return error ? (
       <DateCard dates={dates}/>
    ) : (
        <p>{error}</p>
    )
}
export default DateReservePage