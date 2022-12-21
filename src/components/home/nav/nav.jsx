import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectSection } from "../../../reducers/sectionReducer";
import { selectMode } from "../../../reducers/modeReducer";


function Nav() {

    const currentSection = useSelector(selectSection);
    const mode = useSelector(selectMode)

    return(
        <StyledNav className={mode ? "light" : ""}>
            <ul>
                <a href="#hero-section">
                    <li className={currentSection === "hero" ? "nav-active" : ""}>Home</li>
                </a>
                <a href="#about-section">
                    <li className={currentSection === "about" ? "nav-active" : ""}>About</li>
                </a>
                <a href="#projects-section">
                    <li className={currentSection === "projects" ? "nav-active" : ""}>Projects</li>
                </a>
                <a href="#contact-form">
                    <li className={currentSection === "contact" ? "nav-active" : ""}>Contact</li>
                </a>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    position: fixed;
    top: 40px;
    right: 25px;
    z-index: 1;
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        a:hover {
            li {
                opacity: 1;
            }
        }

        a {
            cursor: pointer;
            li {
                transition: 0.6s;
                opacity: 0.7;
            }
        }

        a li.nav-active {
            margin-bottom: calc(100vh - 155px);
            opacity: 1;
        }
    }

    &.light {
        ul a li {
            color: #232323;
        }
    }
`;

export default Nav;