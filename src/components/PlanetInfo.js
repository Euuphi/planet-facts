import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Images
import { planetImages } from "images/planetImages";
import sourceIcon from "images/icon-source.svg";
// Data
import * as data from "data/planetData.json";
// Components
import Section from "components/Section";
import { H1 } from "./Headings";
import ButtonsSection from "./ButtonsSection";
import PlanetStats from "./PlanetStats";

// Styled Components
const Grid = styled.div`
    display: grid;
    row-gap: 7.2rem;
    grid-template-columns: 1fr 35rem;
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

const PlanetInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const PlanetDescriptionBox = styled.div`
    height: 23.5rem;
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
    const { planet: id } = useParams();

    // Query for selected planet from all planets data
    const planetData = allPlanetsData[id];
    // Query for selected planet image
    const planetImage = planetImages[id];

    return (
        <Section>
            <Grid>
                <PlanetImageBox>
                    <img
                        src={
                            view === "structure"
                                ? planetImage.structure
                                : planetImage.overview
                        }
                        alt={
                            view === "structure"
                                ? `Planet ${planetData.name} with half planet cutout to show internal structure`
                                : `Planet ${planetData.name} from space`
                        }
                    />
                    {view === "geology" && (
                        <SurfaceImage
                            src={planetImage.geology}
                            alt={"Surface of " + planetData.name}
                        />
                    )}
                </PlanetImageBox>
                <PlanetInfoBox>
                    <HeadingPrimary>{planetData.name}</HeadingPrimary>
                    <PlanetDescriptionBox>
                        <Description>{planetData[view].content}</Description>
                        <Source>
                            Source :{" "}
                            <Link href={planetData[view].source}>
                                Wikipedia <img src={sourceIcon} alt="Icon" />
                            </Link>
                        </Source>
                    </PlanetDescriptionBox>
                    <ButtonsSection
                        activeColor={colors[id]}
                        clickHandler={setView}
                        view={view}
                    />
                </PlanetInfoBox>
                <PlanetStats stats={planetData} />
            </Grid>
        </Section>
    );
};

export default PlanetInfo;
