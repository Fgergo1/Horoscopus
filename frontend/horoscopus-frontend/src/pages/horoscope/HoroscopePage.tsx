import {horoscopeArray} from "../../resources/horoscopes/horoscopeInformations.ts";
import {Horoscope} from "../../types/types.ts";
import HoroscopeCard from "./HoroscopeCard.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import "./Horoscope.css";


function HoroscopePage() {

    return (
        <>
            <Navbar/>
            <div className="card-container-wrapper"></div>
            <div className="card-container">
                {horoscopeArray.map((horos: Horoscope) =>
                    <HoroscopeCard horoscope={horos}/>
                )}
            </div>
        </>
    )
}

export default HoroscopePage