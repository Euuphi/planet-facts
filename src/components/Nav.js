import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
// Themes
import colors from "styles/colors";

const NavList = styled.ul`
    display: flex;
    gap: 4.8rem;
    list-style: none;
`;

const NavItem = styled.li`
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;

    a {
        color: #fff;
        text-decoration: none;
    }

    .active {
        border-bottom: 2px solid ${({ activeColor }) => activeColor};
        padding-bottom: 0.4rem;
    }
`;

const Nav = () => {
    const { planet } = useParams();
    const planetColor = colors[planet];

    return (
        <nav>
            <NavList>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/mercury"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Mercury
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/venus"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Venus
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/earth"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Earth
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/mars"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Mars
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/jupiter"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Jupiter
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/saturn"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Saturn
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/uranus"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Uranus
                    </NavLink>
                </NavItem>
                <NavItem activeColor={planetColor}>
                    <NavLink
                        to="/neptune"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        Neptune
                    </NavLink>
                </NavItem>
            </NavList>
        </nav>
    );
};

export default Nav;
