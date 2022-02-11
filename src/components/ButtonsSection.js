import React from "react";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Components
import { H3 } from "./Headings";

const Button = styled.button`
    background-color: ${colors.main};
    border: 1px solid ${colors.shade};
    color: #fff;
    display: inline-block;
    font-family: "Spartan";
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1.2rem 3.2rem;
    text-align: left;
    text-transform: uppercase;
    width: 100%;

    &:hover {
        background-color: #313148;
    }

    &:focus {
        background-color: ${colors.mercury};
        border-color: ${colors.mercury};

        & span {
            color: #a0cedd;
        }
    }

    & span {
        color: ${colors.grey};
        padding-right: 3.2rem;
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

const ButtonsSection = ({ clickHandler }) => {
    return (
        <FlexContainer>
            <Button onClick={() => clickHandler("overview")}>
                <H3 as="span">01</H3>
                <H3>Overview</H3>
            </Button>
            <Button onClick={() => clickHandler("internal")}>
                <H3 as="span">02</H3>
                <H3>Internal Structure</H3>
            </Button>
            <Button onClick={() => clickHandler("surface")}>
                <H3 as="span">03</H3>
                <H3>Surface Geology</H3>
            </Button>
        </FlexContainer>
    );
};

export default ButtonsSection;
