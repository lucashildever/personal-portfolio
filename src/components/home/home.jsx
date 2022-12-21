import React, { useEffect } from "react";
import styled from "styled-components";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { selectSection } from "../../reducers/sectionReducer";
import { setPage } from "../../reducers/pageReducer";

// router imports
import { useLocation } from "react-router-dom";

import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Projects from "./sections/projects-section/projects-section";
import Contact from "./sections/contact/contact";
import InfoBox from "./info-box/info-box";
import Nav from "./nav/nav";
import BoxContent from "./info-box/box-content/box-content";

function Home() {

    const location = useLocation()
    const sectionSelector = useSelector(selectSection)
    const dispatch = useDispatch()

    useEffect(() => {
        if (location.pathname === "/") {
            dispatch(setPage("home"))
        }
    }, [location])

    return (
        <>
            <Nav />
            <InfoBox deactive={sectionSelector === "about" ? false : true}>
                <BoxContent section="about"/>
            </InfoBox>
            <InfoBox deactive={sectionSelector === "projects" ? false : true}>
                <BoxContent section="projects"/>
            </InfoBox>
            <InfoBox deactive={sectionSelector === "contact" ? false : true}>
                <BoxContent section="contact"/>
            </InfoBox>
            <HomeSections > 
                <Hero />
                <About />
                <Projects />
                <Contact />
            </HomeSections>
        </>
    )
}

const HomeSections = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.3s;
`;

export default Home;