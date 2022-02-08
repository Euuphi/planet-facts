import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem 3.2rem;
`;

const Title = styled.span`
    font-family: "Antonio";
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.15rem;
    text-transform: uppercase;
`;

const Nav = styled.nav`
    display: flex;
`;

const Link = styled.a`
    &:link,
    &:visited {
        color: #fff;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>The Planets</Title>
            <Nav>
                <Link href="/mercury">Mercury</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
