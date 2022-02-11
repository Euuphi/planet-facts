import React from "react";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Images
import mercury from "images/planets/mercury/planet-mercury.svg";
import mercurySurface from "images/planets/mercury/geology-mercury.png";
import sourceIcon from "images/icon-source.svg";
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

const Text = styled.p`
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin-bottom: 1.6rem;
`;

const Source = styled(Text)`
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
    //
    return (
        <Grid>
            <PlanetImageBox>
                <img src={mercury} alt="Planet Mercury" />
                <SurfaceImage src={mercurySurface} alt="Surface of Mercury" />
            </PlanetImageBox>
            <PlanetDescriptionBox>
                <HeadingPrimary>Mercury</HeadingPrimary>
                <Text>
                    Mercury is the smallest planet in the Solar System and the
                    closest to the Sun. Its orbit around the Sun takes 87.97
                    Earth days, the shortest of all the Sun's planets. Mercury
                    is one of four terrestrial planets in the Solar System, and
                    is a rocky body like Earth.
                </Text>
                <Source>
                    Source :{" "}
                    <Link href="https://en.wikipedia.org/wiki/Mercury_(planet)">
                        Wikipedia <img src={sourceIcon} alt="Icon" />
                    </Link>
                </Source>
                <ButtonsSection />
            </PlanetDescriptionBox>
            <PlanetStats />
        </Grid>
    );
};

export default PlanetInfo;
