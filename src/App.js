import React from "react";

// Components
import Section from "components/Section";
import BackgroundStars from "components/BackgroundStars";
import Header from "components/Header.js";
import PlanetInfo from "components/PlanetInfo";

function App() {
    return (
        <BackgroundStars>
            <Header />
            <Section>
                <PlanetInfo />
            </Section>
        </BackgroundStars>
    );
}

export default App;
