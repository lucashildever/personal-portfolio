import React from "react";
import styled from "styled-components";

import { Arrow, SecondArrow } from "../../../icons/icons"

const BoxContent = ({ section }) => {

    switch (section) {
        case 'about':
            return (
                <AboutBox>
                    <p className="box-txt">Check out my cv for more <br/>information about me.</p>
                    <a href="/" target='_blank' rel="noopener noreferrer">
                        <p className="box-btn">view cv</p>
                        <SecondArrow />
                    </a>
                </AboutBox>
            )
        case 'projects':
            return (
                    <ProjectsBox style={{cursor:"pointer"}} href="/projects">
                        <p className="box-txt">Click here to view <br/>all the projects <Arrow /></p>
                    </ProjectsBox>
                )
        case 'contact':
            return (
                    <ContactBox>
                        <p className="box-title">you can find me at</p>
                        <div>
                            <a 
                                href="https://www.linkedin.com/in/lucashildever" 
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <p>linkedin.com/in/lucashildever </p><SecondArrow />
                            </a>
                        </div>
                        <div>
                            <a 
                                href="https://www.github.com/lucashildever" 
                                target='_blank' 
                                rel="noopener noreferrer"
                            >
                                <p>github.com/lucashildever </p><SecondArrow />
                            </a>
                        </div>
                    </ContactBox>
                )
        default: 
            return (
                <span> missing 'section' prop </span>
                )
    }
    
}

const AboutBox = styled.div`
    & > p, a > p {
        font-size: 0.32rem;
    }

    & > a {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }

    p {
        text-align: justify;

        &.box-txt {
            margin-bottom: 10px;
        }
    }
`;

const ProjectsBox = styled.a`
    cursor: pointer;
    
    p {
        font-size: 0.32rem;
    }
`;

const ContactBox = styled.div`
    p, div a {
        font-size: 0.32rem;
    }

    p.box-title {
        padding-bottom: 10px;
    }

    div a {
        cursor: pointer;
        display: flex;
    }
`;

export default BoxContent;