import "./Navbar.scss"
import Button from "./Button.tsx";

function Navbar() {

    return (
        <>
            <div className="topnav">
                <Button name="home" text="Home" to="home"/>
                <Button name="Horoscopes" text="Horoscopes" to="horoscopes"/>
                <Button name="reserve-date" text="Reserve date" to="reserve"/>
                <Button name="about" text="about" to="about"/>
                <Button name="profile" text="Profile" to="profile"/>
            </div>
        </>
    )
}

export default Navbar