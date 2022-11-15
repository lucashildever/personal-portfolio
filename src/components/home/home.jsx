import React from "react";
import styled from "styled-components";

import Svg from "../svg/Svg";
import About from "../section/about/about";
import Section from "../section/section";
import Projects from "../section/projects-section/projects-section";
import Contact from "../section/contact/contact";
import Menu from "../menu/menu";

function Home() {

    return (
        <>
            <Svg/>
            <Menu />
            <Hero>
                <h3>Home</h3>
                <div>
                    <h1>LUCAS<br/>HILDEVER</h1>
                    <p>I'm a Web Developer & <br/>Designer based in Brazil.</p>
                </div>
            </Hero>
            <Section sectionTitle="About">
                <About />
            </Section>
            <Section sectionTitle="Projects">
                <Projects />
            </Section>
            <Section sectionTitle="Contact">
                <Contact />
            </Section>
        </>
    )
}

const Hero = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    
    h3 {
        position: fixed;
        top: 45px;
        padding-right: 2.3vw;
    }
    div {
        width: 50vw;
    }

`;



export default Home;