import React from "react";
import styled from "styled-components";

function Home() {
    return (
        <Hero>
            <h1>Hello, I'm Lucas Hildever</h1>
            <p>I'm a web developer & UI Designer</p>
        </Hero>
    )
}

const Hero = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
`;

export default Home;