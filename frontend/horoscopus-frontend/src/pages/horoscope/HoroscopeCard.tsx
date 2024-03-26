import {Horoscope} from "../../types/types.ts";
function HoroscopeCard ({horoscope} : {horoscope :Horoscope} ) {

    return (
        <div className="horoscope-container">
            <p>{horoscope.name}</p>
            <p>{horoscope.period}</p>
            <p>{horoscope.description}</p>
            <p>{horoscope.image}</p>
        </div>
    )

}
export default HoroscopeCard