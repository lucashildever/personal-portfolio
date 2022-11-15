import React from "react";
import styled from "styled-components";

function Section({ children, sectionTitle }) {
    return (
        <StyledSection>
            <div className="secTitle"><h3>{ sectionTitle }</h3></div>
            { children }
        </StyledSection>
    )
}

const StyledSection = styled.section`
    height: 100vh;
    margin-left: 49vw;
    
    div.secTitle {
        display: flex;
        justify-content: flex-end;

        h3 {
            padding-right: 2.3vw;
        }
    }
`;

export default Section;