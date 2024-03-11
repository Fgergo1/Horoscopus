import Navbar from "../../components/navbar/Navbar.tsx";
import "./Homepage.css"

function HomePage() {

    return (
        <>
            <Navbar/>
            <h2 className="welcome-text">Duis dapibus nunc nisl, non venenatis dolor lobortis at.</h2>
            <div className="frontend-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra gravida ex sit amet
                    vestibulum. Curabitur in magna ac lorem rhoncus fermentum. Praesent libero augue, gravida lacinia
                    enim nec, convallis pretium nunc. Sed ultricies tortor quis tortor scelerisque bibendum. Nulla
                    pretium a ex quis fringilla. Quisque iaculis nec diam quis gravida. Nulla condimentum turpis risus.
                    Duis pellentesque suscipit lorem a pellentesque. Aliquam tincidunt consectetur mauris, non facilisis
                    augue tincidunt non. Suspendisse potenti. Vivamus dapibus commodo vulputate.

                    Vestibulum placerat mauris eu justo vehicula consequat non sit amet massa. Pellentesque nisi lorem,
                    dictum eget nulla vel, interdum consectetur erat. Sed vehicula sed sapien non laoreet. Proin quis
                    libero in ante viverra facilisis at id justo. Sed suscipit nibh vel est dictum imperdiet. Integer
                    eleifend vehicula consectetur. Nullam semper fermentum enim, in mollis neque lacinia nec. Donec eget
                    gravida lorem, eu rhoncus ex. Mauris nec quam purus. Nulla non erat vitae dui interdum suscipit sit
                    amet at lacus. Cras posuere vehicula eleifend. Morbi rutrum tempor orci, ultrices mattis nunc
                    sagittis laoreet. Nam non justo sodales arcu maximus aliquam.

                    Ut aliquam lacus quis iaculis tempus. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Aliquam sapien augue, scelerisque sed bibendum sit amet, maximus id metus.
                    Maecenas luctus quis lacus eu viverra. Aliquam ornare lorem neque, at cursus mauris rhoncus vitae.
                    Proin sit amet purus ante. Sed vel libero sem. Mauris euismod ligula at felis vehicula, sed sodales
                    magna sollicitudin. Donec vel tincidunt dolor, vitae vulputate metus. Donec commodo sed est in
                    feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Aenean dignissim cursus nibh, nec interdum nisi aliquam vel.
                </p>
            </div>
        </>
    )
}

export default HomePage