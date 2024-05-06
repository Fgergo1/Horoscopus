    import Navbar from "../../components/navbar/Navbar.tsx";
    import "./Homepage.css"
    import Footer from "../../components/footer/Footer.tsx";

    function HomePage() {

        return (
            <div className="home-page">
            <Navbar/>
                <section className="main-section">
                    <p className="welcome-text">Welcome to Horoscopus!</p>
                    <div className="information-container">
                        <div className="about-container">
                            <div className="container-title">
                                <h3 className="inner-title">What is this place?</h3>
                            </div>

                            <p className="box-paragraph">
                                Embark on a celestial journey with us as we delve into the captivating world of
                                astrology.
                                Whether you're a seasoned stargazer or a curious newcomer, our mission is to illuminate
                                the
                                pathways of the cosmos and unlock the secrets that lie within.

                                At Horoscopus, we believe that the alignment of the planets holds profound insights into
                                our
                                lives,
                                relationships, and destinies. Through the ancient wisdom of astrology, we seek to
                                empower
                                you
                                with knowledge, understanding, and guidance to navigate the cosmic currents that shape
                                our
                                existence.
                            </p>
                        </div>
                        <div className="choose-container">
                            <div className="choose-inner-container">
                                <div className="container-title">
                                    <h3 className="inner-title">What we can offer?</h3>
                                </div>
                                <p className="box-paragraph">
                                    Explore our comprehensive horoscope readings tailored to your zodiac sign,
                                    and discover what the heavens have in store for you. From love and career to health
                                    and
                                    spirituality,
                                    our astrological insights provide clarity and perspective in a world filled with
                                    uncertainty.

                                    But Horoscopus is more than just a repository of astrological wisdom; it's a
                                    community of
                                    like-minded
                                    seekers united by a shared fascination with the cosmos. Join us as we unravel the
                                    mysteries of the universe together, sharing stories, insights, and experiences along
                                    the
                                    way.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>
                <Footer/>
            </div>

        )
    }

    export default HomePage