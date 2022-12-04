import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectSection } from "../../../reducers/sectionReducer"

//import { useNavigate, useLocation } from "react-router-dom";

function Nav() {

    // const navigate = useNavigate();
    // const location = useLocation();

    const selector = useSelector(selectSection)

    return(
        <StyledNav>
            <ul>
                <a href="#hero-section">
                    <li className={selector === "hero" ? "nav-active" : ""}>Home</li>
                </a>
                <a href="#about-section">
                    <li className={selector === "about" ? "nav-active" : ""}>About</li>
                </a>
                <a href="#projects-section">
                    <li className={selector === "projects" ? "nav-active" : ""}>Projects</li>
                </a>
                <a href="#contact-form">
                    <li className={selector === "contact" ? "nav-active" : ""}>Contact</li>
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
                opacity: 0.6;
            }
        }

        a li.nav-active {
            margin-bottom: calc(100vh - 155px);
            opacity: 1;
        }
    }
`;

export default Nav;