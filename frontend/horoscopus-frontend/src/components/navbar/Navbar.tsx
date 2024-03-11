import "./Navbar.css"
import Button from "./Button.tsx";

function Navbar() {

    return (
        <>
            <div className="topnav">
                <Button name="home" text="Home" to="home"/>
                <Button name="Horoscopes" text="Horoscopes" to="horos"/>
                <Button name="renadom" text="random" to="random"/>
                <Button name="about" text="about" to="about"/>

            </div>
        </>
    )
}

export default Navbar