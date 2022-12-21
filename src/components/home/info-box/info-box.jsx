import React from "react";
import styled from "styled-components";

function InfoBox({ children, deactive }) {

    return(
        <Box className={deactive ? "deactive-box" : ""}>
            <div>
                { children }
            </div>
        </Box>
    )
}

const Box = styled.div`
    z-index: 3;
    transition: 0.6s ease-in-out;
    transition-delay: 0.2s;
    bottom: 40px;
    position: fixed;

    left: 50%;
    transform: translateX(-50%);
    
    &.deactive-box {
        transition-delay: 0s;
        transform: translate(-50%, 200px); 

        & > div {
        backdrop-filter: blur(8px);
        }
    }

    & > div {
        padding: 20px;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(8px);
    }

    &.disable {
        visibility: hidden;
        transform: translate(-50% ,20px);
        transition: 1s;
    }
    
`;

export default InfoBox;