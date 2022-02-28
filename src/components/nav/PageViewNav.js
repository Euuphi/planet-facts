import React from "react";
import styled, { css } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
// Themes
import colors from "styles/colors";
import screen from "styles/screens";
// Components
import { H3 } from "../Headings";

const FlexContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media ${screen.tabletMini} {
        border-bottom: 1px solid ${colors.shade};
        flex-direction: row;
        gap: 0;
        padding: 0 2.4rem;
    }
`;

const Button = styled.button`
    background-color: ${({ active, activeColor }) =>
        active ? activeColor.primary : colors.main};
    border: 1px solid
        ${({ active, activeColor }) =>
            active ? activeColor.primary : colors.shade};
    color: #fff;
    font-family: "Spartan";
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1.2rem 3.2rem;
    text-align: left;
    text-transform: uppercase;
    width: 100%;

    @media ${screen.tabletL} {
        padding: 1.2rem 1.8rem;
    }

    @media ${screen.tabletMini} {
        background-color: transparent;
        border: none;
        border-bottom: ${({ active, activeColor }) =>
            active ? "4px solid" + activeColor.primary : "none"};
        padding: 2.4rem 0;
        text-align: center;
    }

    &:hover {
        /* Only change hover style if button is not active */
        ${({ active }) =>
            active ||
            css`
                background-color: #313148;
            `}
    }

    /* Number label text */
    & span {
        color: ${({ active, activeColor }) =>
            active ? activeColor.secondary : colors.grey};
        padding-right: 3.2rem;

        @media ${screen.tabletL} {
            padding-right: 1.8rem;
        }

        @media ${screen.tabletMini} {
            display: none !important;
        }
    }

    /* Button text */
    & ${H3} {
        display: inline-block;
    }
`;

const PageViewNav = ({ clickHandler, view, activeColor }) => {
    const tabletMini = useMediaQuery(screen.tabletMini);

    return (
        <FlexContainer>
            <Button
                active={view === "overview"}
                activeColor={activeColor}
                onClick={() => clickHandler("overview")}>
                <H3 as="span">01</H3>
                <H3>Overview</H3>
            </Button>
            <Button
                active={view === "structure"}
                activeColor={activeColor}
                onClick={() => clickHandler("structure")}>
                <H3 as="span">02</H3>
                <H3>{tabletMini ? "" : "Internal "}Structure</H3>
            </Button>
            <Button
                active={view === "geology"}
                activeColor={activeColor}
                onClick={() => clickHandler("geology")}>
                <H3 as="span">03</H3>
                <H3>Surface{tabletMini ? "" : " Geology"}</H3>
            </Button>
        </FlexContainer>
    );
};

export default PageViewNav;
