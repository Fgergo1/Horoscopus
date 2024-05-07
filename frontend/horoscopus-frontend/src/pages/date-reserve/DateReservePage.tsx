import {ReserveDate} from "../../types/types.ts";
import DateCard from "./DateCard.tsx";
import {useState} from "react";
import "./DateReserve.scss"
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";
import PopUp from "../../components/notification/PopUp.tsx";
interface ReservePageProps {
    dates : ReserveDate[],
    error : string | null,
    onReserve : (id : number | undefined) => void
}

const  DateReservePage  = (props : ReservePageProps) => {
    const [activeId, setActiveId] = useState<number>()
    const [showNotification, setShowNotification] = useState<boolean>(false); // State to manage notification visibility


    const {dates, error, onReserve} = props;

    function handleReserveDate(id : number | undefined) {
        onReserve(id)
        setShowNotification(true); // Show notification when a date is reserved
        setTimeout(() => setShowNotification(false), 3000);
    }


    return !error ? (
       <div className="page-wrapper">
           <Navbar/>
           <section className="main-section">
               <DateCard dates={dates} setId={setActiveId}/>
               {dates.length > 0 && <button className="reserve-button" onClick={() => handleReserveDate(activeId)}>Reserve date</button>}
           </section>
           {showNotification && <PopUp message="Date reserved successfully!" />}
           <Footer/>
       </div>
    ) : (
        <p>{error}</p>
    )
}
export default DateReservePage