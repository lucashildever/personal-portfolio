import React from "react";
import styled from "styled-components";

import { Arrow, SecondArrow } from "../../../arrow-icons/icons";

const BoxContent = ({ section }) => {

    switch (section) {
        case 'about':
            return (
                <AboutBox href="/" target='_blank' rel="noopener noreferrer">
                    <p className="box-txt">
                        Check out my cv for more <br/> detailed information <SecondArrow />
                    </p>
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
    cursor: pointer;
    & > p {
        font-size: 0.32rem;
    }

`;

const ProjectsBox = styled.a`
    cursor: pointer;
    
    p {
        font-size: 0.32rem;
    }
`;

const ContactBox = styled.div`
    div {
        overflow: hidden;
    }
    
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