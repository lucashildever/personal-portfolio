import React from "react";
import styled from "styled-components";

function About() {
    return (
        <AboutStyled>
            <div className="aboutContent">
                <img 
                    src='https://drive.google.com/uc?export=view&id=19iLOswccrqdyVh-nwRL756MH14BewTuR' 
                    alt="profile" 
                />
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
    div > img {
        height: 100px;
        border-radius: 50%;
        margin-bottom: 50px;
        margin-top: 50px;
    }    

    div.aboutContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 30vw;

        p {
            text-align: justify;
        }
    }
`;

export default About;