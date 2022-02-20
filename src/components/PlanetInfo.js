import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Media Query
import screen from "styles/screens";
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
    column-gap: 4.8rem;
    grid-template-columns: 1fr 35rem;
    justify-items: center;
    margin: 0 auto;
    max-width: 140rem;

    @media ${screen.laptopS} {
        grid-template-columns: 1fr;
        row-gap: 4.8rem;
    }
`;

const PlanetImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${screen.laptopS} {
        height: 47.2rem;
    }
`;

const Image = styled.img`
    max-height: 56rem;

    @media ${screen.laptop} {
        max-height: 50rem;
    }

    @media ${screen.laptopS} {
        max-height: 45rem;
    }
`;

const SurfaceImage = styled.img`
    height: 19.9rem;
    position: absolute;
    transform: translateY(90%);
`;

const PlanetInfoBox = styled.div`
    display: flex;
    flex-direction: column;

    @media ${screen.laptopS} {
        display: grid;
        align-items: center;
        gap: 8rem;
        grid-template-columns: 3fr 2fr;
        width: 100%;
    }
`;

const HeadingPrimary = styled(H1)`
    margin-bottom: 3.2rem;
`;

const PlanetDescriptionBox = styled.div`
    /* Fixing height may break if there is too many characters in description
        - Also see Source component */
    height: 37rem;
    position: relative;

    @media ${screen.laptopS} {
        height: 33rem;
    }
`;

const Description = styled.p`
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin-bottom: 1.6rem;
`;

const Source = styled(Description)`
    color: ${colors.grey};
    margin-bottom: 0;

    /* Fixing position may break if there is too many characters in description
        - Also see PlanetDescriptionBox component */
    position: absolute;
    bottom: 4.4rem;

    @media ${screen.laptopS} {
        bottom: 0;
    }
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
                    <Image
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
                    <PlanetDescriptionBox>
                        <HeadingPrimary>{planetData.name}</HeadingPrimary>
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
