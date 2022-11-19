import React from "react";
import styled from "styled-components";

function Hero() {
    return(
        <StyledHero id="my-hero">
            <div>
                <h1>LUCAS<br/>HILDEVER</h1>
                <p>I'm a Web Developer & <br/>Designer based in Brazil.</p>
            </div>
        </StyledHero>
    )
}

const StyledHero = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        width: 47.5vw;

        h1 {
            text-indent: -4px;
            overflow: visible;
        }

        p {
            text-indent: -2px;
            transform: translateX(4px);
        }
    }
`;

export default Hero;