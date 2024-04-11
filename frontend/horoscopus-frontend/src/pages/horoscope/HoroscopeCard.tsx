import {Horoscope} from "../../types/types.ts";
function HoroscopeCard ({horoscope} : {horoscope :Horoscope} ) {

    return (
        <div className="horoscope-container">
            <p className="horoscope-name">{horoscope.name}</p>
            <p className="horoscope-period">{horoscope.period}</p>
            <p className="horoscope-description">{horoscope.description}</p>
            <p className="horoscope-image">{horoscope.image}</p>
        </div>
    )

}
export default HoroscopeCard