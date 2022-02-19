import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { planetList } from "data/planetsList";
// Themes
import colors from "styles/colors";
// Media Query
import screen from "styles/screens";

const NavList = styled.ul`
    display: flex;
    gap: 4.8rem;
    list-style: none;

    @media ${screen.laptopS} {
        gap: 3.6rem;
    }
`;

const NavItem = styled.li`
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;

    a {
        color: ${colors.lightgrey};
        text-decoration: none;
    }

    .active {
        color: #fff;
        border-top: 4px solid ${({ activeColor }) => activeColor};
        padding-top: 3.2rem;
    }
`;

const Nav = () => {
    // Get name of planet from url
    const { planet } = useParams();
    // Get primary color of planet
    const planetColor = colors[planet].primary;

    return (
        <nav>
            <NavList>
                {planetList.map((planet, index) => {
                    return (
                        <NavItem activeColor={planetColor} key={index}>
                            <NavLink
                                to={"/" + planet}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }>
                                {planet}
                            </NavLink>
                        </NavItem>
                    );
                })}
            </NavList>
        </nav>
    );
};

export default Nav;
