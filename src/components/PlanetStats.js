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
    padding: 2rem 2rem 2.4rem;
    width: 23%;
`;

const StatTitle = styled(H4)`
    color: ${colors.grey};
    text-transform: uppercase;
`;

const StatText = styled(H2)`
    text-transform: uppercase;
`;

const PlanetStats = ({ stats }) => {
    const planetStats = [
        { name: "Rotation Time", value: stats.rotation },
        { name: "Revolution Time", value: stats.revolution },
        { name: "Radius", value: stats.radius },
        { name: "Average Temp.", value: stats.temperature },
    ];

    return (
        <FlexContainer>
            {planetStats.map((stat, index) => {
                return (
                    <StatBox key={index}>
                        <StatTitle>{stat.name}</StatTitle>
                        <StatText as="span">{stat.value}</StatText>
                    </StatBox>
                );
            })}
        </FlexContainer>
    );
};

export default PlanetStats;
