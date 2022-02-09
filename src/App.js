import React from "react";

// Components
import Section from "components/Section";
import BackgroundStars from "components/BackgroundStars";
import Header from "components/Header.js";
import PlanetDescription from "components/PlanetDescription";

function App() {
    return (
        <BackgroundStars>
            <Header />
            <Section>
                <PlanetDescription />
            </Section>
        </BackgroundStars>
    );
}

export default App;
