import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSection } from "../../../../reducers/sectionReducer"

function Hero() {

    const dispatch = useDispatch()

    useEffect(() => {
        let obsFunc = entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) 
                        dispatch(setSection("hero"))
            });
        };

        let observer = new IntersectionObserver(obsFunc, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        observer.observe(document.getElementById("hero-section"));
    }, []);

    return(
        <StyledHero>
            <div id="hero-section">
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