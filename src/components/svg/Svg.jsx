import React from "react";
import styled from "styled-components";

function Svg() {
    return (
        <SvgDiv>
            <svg 
            id="about" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 1000"
            >
                <path 
                    d="M315.47,519.6l254.86,144.79c29.19,16.85,29.16,58.99-.05,75.8l-40.22,23.15-372.34-213.62,54-30.57c32.22-18.24,71.69-18.07,103.75,.44Z" 
                    fill="none" 
                    stroke="#000" 
                    strokeMiterlimit="10" 
                    strokeWidth="11"
                />
                <ellipse 
                    
                    cx="585" 
                    cy="366.5"
                    rx="161.5" 
                    ry="86.5"
                />
                <path 
                    d="M741,479.5c0,47.77-69.84,86.5-156,86.5s-156-38.73-156-86.5" 
                    fill="none" 
                    stroke="#000" 
                    strokeMiterlimit="10" 
                    strokeWidth="11"
                />
                <line 
                    x1="429" 
                    y1="479.5" 
                    x2="429" 
                    y2="366.5" 
                    fill="#4e8e44" 
                    stroke="#000" 
                    strokeMiterlimit="10" 
                    strokeWidth="11"
                />
                <line 
                    x1="741" 
                    y1="479.5" 
                    x2="741" 
                    y2="366.5" 
                    fill="#4e8e44" 
                    stroke="#000" 
                    strokeMiterlimit="10" 
                    strokeWidth="11"
                />
            </svg>
        </SvgDiv>
        
    )
}

const SvgDiv = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    height: 100vh;
    left: 17vw;

    svg {

        height: 500px;
    }
`

export default Svg;