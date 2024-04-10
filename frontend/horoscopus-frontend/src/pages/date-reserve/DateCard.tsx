import {ReserveDate} from "../../types/types.ts";
import {Dispatch, SetStateAction, useState} from "react";
import "./DateCard.css"


interface DateWriteProp  {
    dates : ReserveDate[]
    setId? : Dispatch<SetStateAction<number | undefined>>
}
function DateCard ({dates, setId} : DateWriteProp) {
    const [active,setActive] = useState<SetStateAction<ReserveDate | null>>(null)
    return (
        <>
            <div className="date-container">
                <div className="wrap-date">
                    <p>{"Free dates :"}</p>
                    {dates.map((date: ReserveDate) => (
                        <>
                            <p
                            onClick={() => {
                                setActive(date)
                                if (setId) {
                                    setId(date.id)
                                }
                            }}
                            className={`date-item ${active === date && 'active'}`}
                            >{date.interval}</p>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export  default  DateCard