import React, { useEffect } from "react";
import styled from "styled-components";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { selectSection } from "../../reducers/sectionReducer";
import { setPage, selectPage } from "../../reducers/pageReducer";

// router imports
import { useLocation } from "react-router-dom";

import Svg from "./svg/Svg";
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
    const pageSelector = useSelector(selectPage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (location.pathname === "/") {
            dispatch(setPage("home"))
        }
    }, [location])

    useEffect(() => {
        console.log(pageSelector)
    }, [pageSelector])

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
            <Svg />
            <HomeSections > {/* className={pageSelector === "home" ? "" : "home-deactive"} USAR NAVIGATE PARA NÃO RECARREGAR A PÁGINA */}
                <Hero />
                <About />
                <Projects />
                <Contact />
            </HomeSections>
        </>
    )
}

const HomeSections = styled.main`
    margin-left: 50vw;

    transition: 0.3s;
    
    /* &.home-deactive {
        transition: 0.3s;
        opacity: 0;
        transform: translateY(10px);
    } */
`;

export default Home;