import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
        border-bottom: 2px solid white;
    }
`;

const Nav = () => {
    return (
        <nav>
            <NavList>
                <NavItem>
                    <NavLink to="/mercury" activeClassName="active">
                        Mercury
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/venus" activeClassName="active">
                        Venus
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/earth" activeClassName="active">
                        Earth
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/mars" activeClassName="active">
                        Mars
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/jupiter" activeClassName="active">
                        Jupiter
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/saturn" activeClassName="active">
                        Saturn
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/uranus" activeClassName="active">
                        Uranus
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/neptune" activeClassName="active">
                        Neptune
                    </NavLink>
                </NavItem>
            </NavList>
        </nav>
    );
};

export default Nav;
