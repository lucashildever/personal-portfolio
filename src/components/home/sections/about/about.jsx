import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSection } from "../../../../reducers/sectionReducer"

import profile from "./profile.png"


function About() {

    const dispatch = useDispatch()

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
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    <br/><br/>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
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
        }
    }
    
    div div.div-img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-bottom: 50px;
        overflow: hidden;
        
        img {
            height: 100px;
            width: 100px;
        }

    }
`;

export default About;