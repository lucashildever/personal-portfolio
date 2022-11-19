import React from "react";
import styled from "styled-components";

import Svg from "./svg/Svg";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Projects from "./sections/projects-section/projects-section";
import Contact from "./sections/contact/contact";
import InfoBox from "./info-box/info-box";

// import { useSelector } from 'react-redux'
// import { selectSection } from "../../reducers/sectionReducer";
//import { setHome, setAbout, setProjects, setContact, selectSection } from "../../reducers/sectionReducer";

function Home() {

    // const selector = useSelector(selectSection)
    // // const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log(selector)
    // }, [selector])

    // useEffect(() => {
    //     let obsFunc = entries => {
    //         entries.forEach((entry) => {
    //             console.log(entry)
    //         });
    //       };

    //     let observer = new IntersectionObserver(obsFunc, {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 1.0
    //     });

    //     observer.observe(document.getElementById("contact-sec"));
    //   });

    return (
        <>
            <InfoBox>
                <p>Infobox preencher com conteúdo <br/>baseado no estado</p>
            </InfoBox>
            <Svg />
            <HomeSections>
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
`;

export default Home;