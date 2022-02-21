import React from "react";
import styled, { css } from "styled-components";
// Themes
import colors from "styles/colors";
import screen from "styles/screens";
// Components
import { H3 } from "./Headings";

const Button = styled.button`
    background-color: ${({ active, activeColor }) =>
        active ? activeColor.primary : colors.main};
    border: 1px solid
        ${({ active, activeColor }) =>
            active ? activeColor.primary : colors.shade};
    color: #fff;
    display: inline-block;
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

    &:hover {
        /* Only change hover style if button is not active */
        ${({ active }) =>
            active ||
            css`
                background-color: #313148;
            `}
    }

    & span {
        color: ${({ active, activeColor }) =>
            active ? activeColor.secondary : colors.grey};
        padding-right: 3.2rem;

        @media ${screen.tabletL} {
            padding-right: 1.8rem;
        }
    }

    & ${H3} {
        display: inline-block;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

const ButtonsSection = ({ clickHandler, view, activeColor }) => {
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
                <H3>Internal Structure</H3>
            </Button>
            <Button
                active={view === "geology"}
                activeColor={activeColor}
                onClick={() => clickHandler("geology")}>
                <H3 as="span">03</H3>
                <H3>Surface Geology</H3>
            </Button>
        </FlexContainer>
    );
};

export default ButtonsSection;
