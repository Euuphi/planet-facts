import styled from "styled-components";

// Background image
import stars from "images/background-stars.svg";

const BackgroundStars = styled.div`
    background: url(${stars});
    background-position: center center;
    background-size: auto;
    height: 100vh;
    width: 100%;
`;

export default BackgroundStars;
