import React from "react";

// Components
import BackgroundStars from "components/BackgroundStars";
import Header from "components/Header.js";
import PlanetDescription from "components/PlanetDescription";

function App() {
    return (
        <BackgroundStars>
            <Header />
            <PlanetDescription />
        </BackgroundStars>
    );
}

export default App;
