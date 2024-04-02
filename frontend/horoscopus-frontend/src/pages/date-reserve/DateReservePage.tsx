import {ReserveDate} from "../../types/types.ts";
interface ReservePageProps {
    dates: ReserveDate[],
    error: string | null
}

const DateReservePage = (props: ReservePageProps) => {

    const {dates, error} = props;
    return !error ? (
        <>
            <div className="date-container">
                <div className="wrap-date">
                    <p>{"Free dates :"}</p>

                    {dates.length > 0 && dates.map((date: ReserveDate) => (
                        <>
                            <p key={date.interval}>{date.interval}</p>

                        </>
                    ))}
                </div>
            </div>
        </>
    ) : (
        <p>{error}</p>
    )
}
export default DateReservePage