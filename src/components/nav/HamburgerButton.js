import React from "react";
import styled from "styled-components";
// Images
import hamburgerIcon from "images/icon-hamburger.svg";

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
`;

const HamburgerButton = ({ onClick }) => {
    return (
        <MenuButton onClick={onClick}>
            <img src={hamburgerIcon} alt="Navigation menu icon" />
        </MenuButton>
    );
};

export default HamburgerButton;
