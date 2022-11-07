import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

import BurguerMenu from "./burguer-menu/burguerMenu";


function NavBar() {
    return (
        <>
            <Nav>
                <ul>
                    <Link to="home">
                        <li>home</li>
                    </Link>
                    <Link to="about">
                        <li>about</li>
                    </Link>
                    <Link to="projects">
                        <li>projects</li>
                    </Link>
                    <Link to="contact">
                        <li>contact</li>
                    </Link>
                </ul>
            </Nav>
            <BurguerMenu />
        </>
    )
}

const Nav = styled.nav`
    position: absolute;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-evenly;
        width: 45vw;
    }
`;

export default NavBar;