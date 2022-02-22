import React from "react";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Medai Query
import screen from "styles/screens";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import DesktopNav from "components/nav/DesktopNav";
import MobileNav from "components/nav/MobileNav";

const HeaderContainer = styled.header`
    border-bottom: 1px solid ${colors.shade};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 4.8rem;

    position: relative; // To absolute position mobile navigaiton menu

    @media ${screen.laptopS} {
        flex-direction: column;
        gap: 4.8rem;
        padding: 2.4rem 8rem 2.8rem; //Adjust Nav anchor link padding to change active border
    }

    @media ${screen.tabletM} {
        padding: 2.4rem 4.8rem 2.8rem;
    }

    @media ${screen.tabletS} {
        flex-direction: row;
    }
`;

const Title = styled.span`
    font-family: "Antonio";
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.15rem;
    text-transform: uppercase;

    @media ${screen.laptopS} {
        font-size: 3.1rem;
    }
`;

const Header = () => {
    const tabletS = useMediaQuery(screen.tabletS);
    return (
        <HeaderContainer>
            <Title>The Planets</Title>
            {tabletS ? <MobileNav /> : <DesktopNav />}
        </HeaderContainer>
    );
};

export default Header;
