import React from "react";
import styled from "styled-components";

// Styles
import colors from "styles/colors";

// Images
import mercury from "images/planets/mercury/planet-mercury.svg";
import sourceIcon from "images/icon-source.svg";

// Components
import { H1 } from "./Headings";

const Grid = styled.div`
    display: grid;
    gap: 12.8rem;
    grid-template-columns: 5fr 2fr;
    justify-items: center;
    margin: 12.8rem auto 8rem;
    max-width: 140rem;
`;

const PlanetImageBox = styled.div`
    display: flex;
    align-items: center;
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
    margin-bottom: 2.4rem;
`;

const Link = styled.a`
    &:link,
    &:visited {
        color: ${colors.grey};
    }
`;

const PlanetDescription = () => {
    return (
        <Grid>
            <PlanetImageBox>
                <img src={mercury} alt="Planet Mercury" />
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
                <Text>
                    Source:{" "}
                    <Link href="https://en.wikipedia.org/wiki/Mercury_(planet)">
                        Wikipedia <img src={sourceIcon} alt="Icon" />
                    </Link>
                </Text>
            </PlanetDescriptionBox>
        </Grid>
    );
};

export default PlanetDescription;
