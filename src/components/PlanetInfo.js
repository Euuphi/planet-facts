import React, { useState } from "react";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Images
import mercury from "images/planets/mercury/planet-mercury.svg";
import mercuryInternal from "images/planets/mercury/planet-mercury-internal.svg";
import mercurySurface from "images/planets/mercury/geology-mercury.png";
import sourceIcon from "images/icon-source.svg";
// Data
import * as data from "data/planetData.json";
// Components
import { H1 } from "./Headings";
import ButtonsSection from "./ButtonsSection";
import PlanetStats from "./PlanetStats";

// Styled Components
const Grid = styled.div`
    display: grid;
    gap: 8rem 12.8rem;
    grid-template-columns: 5fr 2fr;
    justify-items: center;
    margin: 0 auto;
    max-width: 140rem;
`;

const PlanetImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const SurfaceImage = styled.img`
    height: 19.9rem;
    position: absolute;
    transform: translateY(90%);
`;

const HeadingPrimary = styled(H1)`
    margin-bottom: 3.2rem;
`;

const PlanetDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Description = styled.p`
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin-bottom: 1.6rem;
`;

const Source = styled(Description)`
    color: ${colors.grey};
    margin-bottom: 3.2rem;
`;

const Link = styled.a`
    &:link,
    &:visited {
        color: ${colors.grey};
        font-weight: 700;
    }
`;

const PlanetInfo = () => {
    // State to control what image is displayed
    const [view, setView] = useState("overview");

    // Create object of imported planet data
    const allPlanetsData = data;

    // Placeholder for: Extract id of planet from url
    const id = "mercury";

    // Query for selected planet from all planets data
    const planetData = allPlanetsData[id];

    return (
        <Grid>
            <PlanetImageBox>
                <img
                    src={view === "structure" ? mercuryInternal : mercury}
                    alt={
                        view === "structure"
                            ? `Planet ${planetData.name} with half planet cutout to show internal structure`
                            : `Planet ${planetData.name} from space`
                    }
                />
                {view === "geology" && (
                    <SurfaceImage
                        src={mercurySurface}
                        alt={"Surface of " + planetData.name}
                    />
                )}
            </PlanetImageBox>
            <PlanetDescriptionBox>
                <HeadingPrimary>{planetData.name}</HeadingPrimary>
                <Description>{planetData[view].content}</Description>
                <Source>
                    Source :{" "}
                    <Link href={planetData[view].source}>
                        Wikipedia <img src={sourceIcon} alt="Icon" />
                    </Link>
                </Source>
                <ButtonsSection clickHandler={setView} view={view} />
            </PlanetDescriptionBox>
            <PlanetStats stats={planetData} />
        </Grid>
    );
};

export default PlanetInfo;
