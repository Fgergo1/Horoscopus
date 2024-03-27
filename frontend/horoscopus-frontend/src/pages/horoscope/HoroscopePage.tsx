import {horoscopeArray} from "../../resources/horoscopes/horoscopeInformations.ts";
import {Horoscope} from "../../types/types.ts";
import HoroscopeCard from "./HoroscopeCard.tsx";



function HoroscopePage () {

    return (
        <div className="card-container">
            {horoscopeArray.map((horos : Horoscope) =>
                <HoroscopeCard horoscope={horos} />
            )}
        </div>
    )

}
export default HoroscopePage