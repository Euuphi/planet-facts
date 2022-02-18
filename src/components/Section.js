import styled from "styled-components";
// Media Query
import screen from "styles/screen";

const Section = styled.section`
    padding: 4.8rem 12.8rem;

    @media ${screen.laptop} {
        padding: 7.2rem;
    }
`;

export default Section;
