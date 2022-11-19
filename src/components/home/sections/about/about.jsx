import React from "react";
import styled from "styled-components";

function About() {
    return (
        <AboutStyled>
            <div className="aboutContent">
                {/* <img 
                    src='https://drive.google.com/uc?export=view&id=19iLOswccrqdyVh-nwRL756MH14BewTuR' 
                    alt="profile" 
                /> */}
                <div className="div-img"></div>
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
    
    /* 
    
    align-items: flex-end;
    
    */

    /* height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    div.aboutContent {
        
        max-width: 30vw;
        margin-right: 8vw;

        
    } */

    /* 
    div > img {
        height: 100px;
        border-radius: 50%;
        margin-bottom: 50px;
    }    */
    div div.div-img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-bottom: 50px;
        background-color: grey;

    }
    /*

     */
`;

export default About;