import React from "react";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Components
import Nav from "./Nav";

const HeaderContainer = styled.header`
    border-bottom: 1px solid ${colors.shade};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 4.8rem;
`;

const Title = styled.span`
    font-family: "Antonio";
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.15rem;
    text-transform: uppercase;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>The Planets</Title>
            <Nav />
        </HeaderContainer>
    );
};

export default Header;
