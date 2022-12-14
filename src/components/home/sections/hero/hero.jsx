import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../../../../reducers/sectionReducer";
import { selectMode } from "../../../../reducers/modeReducer";

import Circle from "../circle"

function Hero() {

    const dispatch = useDispatch();
    const modeSelector = useSelector(selectMode)

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
        <StyledHero id="hero-section">
            <p 
                className={modeSelector ? "light" : ""}
            >
                Hello, i'm Lucas Hildever, <br/>a web developer & designer<br/> based in brazil_
            </p>
            <Circle className="hero-circle" />
        </StyledHero>
    )
}

const StyledHero = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-weight: 800;
        z-index: 1;

        &.light {
            color: #181818;
        }
    }

    @media screen and (max-width: 330px) {
        p {
            font-size: 6vw;
        }
    }
`;

export default Hero;