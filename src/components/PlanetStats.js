import React from "react";
import styled from "styled-components";
//Themes
import colors from "styles/colors";
// Components
import { H2, H4 } from "./Headings";

const FlexContainer = styled.div`
    display: flex;
    justify-items: center;
    justify-content: space-between;
    grid-column: -1/1;
    margin: 0 auto;
    width: 100%;
`;

const StatBox = styled.div`
    border: 1px solid ${colors.shade};
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    width: 23%;
`;

const StatTitle = styled(H4)`
    color: ${colors.grey};
    text-transform: uppercase;
`;

const StatText = styled(H2)`
    text-transform: uppercase;
`;

const PlanetStats = () => {
    return (
        <FlexContainer>
            <StatBox>
                <StatTitle>Rotation Time</StatTitle>
                <StatText as="span">58.6 Days</StatText>
            </StatBox>
            <StatBox>
                <StatTitle>Revolution Time</StatTitle>
                <StatText as="span">87.97 Days</StatText>
            </StatBox>
            <StatBox>
                <StatTitle>Radius</StatTitle>
                <StatText as="span">2439.7 km</StatText>
            </StatBox>
            <StatBox>
                <StatTitle>Average Temp.</StatTitle>
                <StatText as="span">430&#176;C</StatText>
            </StatBox>
        </FlexContainer>
    );
};

export default PlanetStats;
