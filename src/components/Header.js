import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    border-bottom: 0.5px solid #38384f;
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

const Nav = styled.nav`
    display: flex;
    gap: 4.8rem;
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
                <Link href="/venus">Venus</Link>
                <Link href="/earth">Earth</Link>
                <Link href="/mars">Mars</Link>
                <Link href="/jupiter">Jupiter</Link>
                <Link href="/saturn">Saturn</Link>
                <Link href="/uranus">Uranus</Link>
                <Link href="/neptune">Neptune</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
