import React from 'react';

import styled from 'styled-components';
import {Scrollbar} from 'smooth-scrollbar-react';

import Hero from './hero/hero';
import About from './about/about';

const SmoothSection = () => {
    return (
        <Scrollbar
            >
            <DivTest>
                <Hero />
                <About />
            </DivTest>
        </Scrollbar>
    )
}

const DivTest = styled.div`
display: flex;
    background-color: gray;
    width: 60vw;
    height: 400px;
`;

export default SmoothSection
