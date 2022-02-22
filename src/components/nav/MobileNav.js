import React, { useState } from "react";
import styled from "styled-components";
// Theme
import colors from "styles/colors";
import HamburgerButton from "./HamburgerButton";

const Nav = styled.nav`
    background-color: ${colors.main};
    height: 100vh;
    padding: 4.8rem;
    width: 100%;

    position: absolute;
    left: 0;
    top: 8.5rem;
    visibility: hidden;
    z-index: 9999;

    &.open {
        visibility: visible;
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style: none;
`;

const NavItem = styled.li`
    height: 12.5%;
`;

const MobileNav = () => {
    // Menu state
    const [menuOpen, setMenuOpen] = useState(false);

    const clickHandler = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <HamburgerButton onClick={clickHandler} />
            <Nav className={menuOpen ? "open" : ""}>
                <NavList>
                    <NavItem>Youasldjf;lkasjdf</NavItem>
                </NavList>
            </Nav>
        </>
    );
};

export default MobileNav;
