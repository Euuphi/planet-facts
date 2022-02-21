import React, { useState } from "react";
import styled from "styled-components";
// Theme
import colors from "styles/colors";
import HamburgerButton from "./HamburgerButton";

const Nav = styled.nav`
    background-color: ${colors.main};
    height: 100vh;
    width: 100%;

    position: absolute;
    left: 0;
    top: 8.5rem;
    z-index: 9999;

    visibility: ${({ menuToggle }) => menuToggle};
`;

const MobileNav = () => {
    // Menu state
    const [menu, setMenu] = useState("hidden");

    const clickHandler = () => {
        setMenu(menu === "hidden" ? "visible" : "hidden");
    };

    return (
        <>
            <HamburgerButton onClick={clickHandler} />
            <Nav menuToggle={menu}>MobileNav</Nav>
        </>
    );
};

export default MobileNav;
