import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../../../../reducers/sectionReducer";
import { selectMode } from "../../../../reducers/modeReducer";

import profile from "./profile.png"


function About() {

    const dispatch = useDispatch()
    const mode = useSelector(selectMode)

    useEffect(() => {
        let obsFunc = entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) 
                        dispatch(setSection("about"))
            });
        };

        let observer = new IntersectionObserver(obsFunc, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        observer.observe(document.getElementById("about-section"));
    });

    return (
        <AboutStyled>
            <div id="about-section" className="aboutContent">
                <div className="div-img"><img src={profile} alt="profile"/></div>
                <p className={mode ? "light" : ""}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ullamco est sit deserunt ullamco est.
                </p>
            </div>
        </AboutStyled>
    )
}

const AboutStyled = styled.section` 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div.aboutContent {
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            text-align: justify;

            &.light {
                color: #181818;
            }
        }
    }
    
    div div.div-img {
        height: 85px;
        width: 85px;
        border-radius: 50%;
        margin-bottom: 50px;
        overflow: hidden;
        
        img {
            height: 100px;
            width: 100px;
            filter: grayscale(100%);
        }
    }

    @media screen and (max-width: 900px) {
        div.aboutContent {
            width: 43vw;
        }
    }

    @media screen and (max-width: 500px) {
        div.aboutContent {
            width: 60vw;
        }
    }

    @media screen and (max-width: 350px) {
        div.aboutContent {
            width: 77vw;
        }
    }

    @media screen and (max-width: 330px) {
        div p {
            font-size: 6vw;
        }
    }
`;

export default About;