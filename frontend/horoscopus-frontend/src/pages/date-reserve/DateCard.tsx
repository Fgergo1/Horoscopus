import {ReserveDate} from "../../types/types.ts";
import {SetStateAction, useState} from "react";
import "./DateCard.css"


interface DateWriteProp  {
    dates : ReserveDate[]
}
function DateCard ({dates} : DateWriteProp) {
    const [active,setActive] = useState<SetStateAction<ReserveDate | null>>(null)

    return (
        <>
            <div className="date-container">
                <div className="wrap-date">
                    <p>{"Free dates :"}</p>
                    {dates.map((date: ReserveDate) => (
                        <>
                            <p
                            onClick={() => setActive(date)}
                            className={`date-item  ${active === date && 'active'}`}
                            >{date.interval}</p>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export  default  DateCard